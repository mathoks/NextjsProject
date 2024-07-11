
/**
 * GET /api/users
 * @route GET /api/users.
 * @returns {Promise<void>}
 */


import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import databaseAdapter from "@/app/actions/users/databaseAdapter";
import { NextRequest, NextResponse } from "next/server";

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
    
     const {picture, storename, address, description, phone, country, state, market, image}= await request.json()
    //  const newStore = await prisma.store.create({
    //     data: {
    //      businessName: storename,
    //      shopAddress: address,
    //      phone:tel,
    //      about:description,
    //      country,
    //      state,
    //      market,
    //      bizLogo:picture
    //     }}) 
    console.log(storename, address, description, phone, country, state, market)
     const newStore = {storename: 'pop'}
    if (!newStore) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    //const todo = await response.json();
    return NextResponse.json({ data: newStore });
  } catch (error) {
    console.error("Error fetching todo:", error);
    NextResponse.error({ error: "Internal server error" });
  }
}
