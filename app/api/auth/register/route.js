// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import { Pool } from "@neondatabase/serverless";
// import { PrismaNeon } from "@prisma/adapter-neon";
// import { PrismaClient } from "@prisma/client";


// const neon = new Pool({
//   connectionString: process.env.POSTGRES_PRISMA_URL,
// });

// const adapter = new PrismaNeon(neon);
// const prisma = new PrismaClient({ adapter });


// export async function POST(req) {
  
//   let newUser;
//   try {
//     const { email, password, name } = await req.json();
//     newUser = await prisma.user.create({
//       data: {
//         email,
//         password: bcrypt.hashSync(password, 10),
//         name,
//       },
//     });
    
//   } catch (error) {
//     console.log(error)
//     throw error;
//   }

//   return NextResponse.json(newUser, { status: 201 });
// }


import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import databaseAdapter from "@/app/actions/users/databaseAdapter";

// Create a single instance of the Prisma client for efficiency
let prisma;
const neon = new Pool({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const adapter = new PrismaNeon(neon);
const {createSession } = databaseAdapter(prisma)
export  async function POST(req) {
  // Ensure Prisma client is initialized only once per request
  if (!prisma) {
    prisma = new PrismaClient({ adapter });
  }

  if (req.method === "POST") {
    try {
      const { email, password, name } = await req.json();
      const userExist = await prisma.user.findMany({
        where: {
          OR: [
            {
              name
            },
            {
              email
            }
          ]
        }
      })
      
      if(userExist && Array.isArray(userExist) && userExist.length > 0){
        throw new Error({message: "user Already exist"})
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      });
      if(!newUser){
        throw new Error({message: "account creation failed"})
      }
      const {password:pass, ...rest} = newUser
      
      const accounts = await prisma.account.create({
       data: {
        userId: newUser?.id,
        type: 'credentials',
        provider:"credentials",
        providerAccountId: newUser?.id,
       }}) 
      
      if (!accounts){
        throw new Error(JSON.stringify("Account creation failed"))
        
      }
      return NextResponse.json(rest, { status: 201 });
    } catch (error) {
    
      return NextResponse.json({ error: "Failed to create user" }, { status: 500 }, );
    }
  } else {
    // Handle other HTTP methods if needed (e.g., GET for user details)
  }
}
