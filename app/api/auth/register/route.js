import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";


const neon = new Pool({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const adapter = new PrismaNeon(neon);
const prisma = new PrismaClient({ adapter });


export async function POST(req) {
  
  let newUser;
  try {
    const { email, password, name } = await req.json();
    
    // let hashedPassword =  bcrypt.genSalt(10, (err, salt) => {
    //   bcrypt.hash(password, salt, (err, hash) => {
    //     if (err) throw err;
    //     console.log(hash)
    //     return hash;
    //   });
    // });
    
    newUser = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, 10),
        name,
      },
    });
    console.log('good lord')
  } catch (error) {
    console.log(error)
    throw error;
  }

  return NextResponse.json(newUser, { status: 201 });
}
