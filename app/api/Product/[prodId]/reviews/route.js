import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Create a single instance of the Prisma client for efficiency
let prisma;
const neon = new Pool({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const adapter = new PrismaNeon(neon);

/**
 * GET /api/store/
 * @route GET /api/store.
 * @returns {Promise<void>}
 */

if (!prisma) {
  prisma = new PrismaClient({ adapter });
}

export async function POST(req) {
  if (req.method === "POST") {
    try {
      const data = await req.json();
      const { text, prodId, reviewer } = data;
      const newPost = await prisma.ProdReview.create({
        data: {
          comment: text,
          prodId,
          userId: reviewer,
        },
        select: { id: true }, // Only select necessary fields
      });

      if (!newPost) throw new Error("operation was unsuccessfull");
      return NextResponse.json({ data: newPost.id });
    } catch (error) {
      console.log(error);
      return Response.json({ message: "Internal server error" });
    }
  }
  else {}
}
