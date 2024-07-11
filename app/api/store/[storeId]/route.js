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

export async function GET(req) {
    const {storeId} = req.params
  if(!prisma){
    prisma = new PrismaClient({adapter})
  }
  try {
    const response = await prisma.store.findUnique({
      where: {
        storeId: storeId
      }
    })
    if (!response) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    return Response.json({ data: response });
  } catch (error) {
    console.error("Error fetching store:", error);
    Response.error({ error: "Internal server error"});
  }
}
