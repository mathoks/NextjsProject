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
  const salt = "mymart_pass";
  let newUser;
  try {
    const { email, password, name } = await req.json();

    const hashedPassword = bcrypt.genSalt(10, () => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;
        return hash;
      });
    });
    newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    console.log(newUser)
  } catch (error) {
    console.log(error)
    throw error;
  }

  return NextResponse.json(newUser, { status: 201 });
}
