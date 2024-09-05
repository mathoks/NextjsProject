// Example: POST /api/auth/register
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

// Create a single instance of the Prisma client for efficiency
let prisma;
const neon = new Pool({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const adapter = new PrismaNeon(neon);

export async function POST(req) {
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
              name : name,
            },
            {
              email: email,
            },
          ],
        },
        select: {
          email: true,
          password: false,
          name: true,
        },
      });

      if (Array.isArray(userExist) && userExist.length > 0) {
        throw new Error({ message: "user Already exist" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await prisma.$transaction(async (prisma) => {
        const newUser = await prisma.user.create({
          data: {
            email,
            name,
            password: hashedPassword,
          },
          select: { id: true, email: true }, // Only select necessary fields
        });

        const account = await prisma.account.create({
          data: {
            user: {
              connect: { id: newUser.id }
            },
            type: "credentials",
            provider: "credentials",
            providerAccountId: newUser.id,
          },
        });
        return { newUser, account };
      });
      if (!result) {
        throw new Error("User not created");
      }     
      return NextResponse.json(result, { status: 201 });
    } catch (error) {
       return NextResponse.error();
      //NextResponse.error(
      //   { error: "Failed to create user" },
      //   { status: 500 }
      // );
    }
  } else {
    // Handle other HTTP methods if needed (e.g., GET for user details)
  }
}
