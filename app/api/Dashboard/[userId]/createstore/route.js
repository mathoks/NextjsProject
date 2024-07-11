
/**
 * GET /api/users
 * @route GET /api/users.
 * @returns {Promise<void>}
 */


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


export async function POST(request) {
    
    if (!prisma) {
        prisma = new PrismaClient({ adapter });
      }
      
  try {
    
     const {storename, address, description, phone, country, state, market, image}= await request.json()
     const newStore = await prisma.store.create({
        data: {
         businessName: storename,
         shopAddress: address,
         phone:phone,
         about:description,
         country,
         state,
         market,
         bizLogo:image
        }}) 
     
    if (!newStore) {
      throw new Error(`API request failed with status`);
    }
    
    return NextResponse.json({ data: newStore});
  } catch (error) {
    console.error("Error fetching todo:", error);
    NextResponse.error({ error: "Internal server error" });
  }
}
