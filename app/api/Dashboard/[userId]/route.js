
/**
 * GET /api/users
 * @route GET /api/users.
 * @returns {Promise<void>}
 */


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


export async function POST(request) {
    
    if (!prisma) {
        prisma = new PrismaClient({ adapter });
      }
      
  try {
    const newStore = await prisma.store.create({
        data: {
         businessName: 'credentials',
         provider:"credentials",
         providerAccountId: newUser?.id,
        }}) 
     
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const todo = await response.json();
    return Response.json({ data: todo });
  } catch (error) {
    console.error("Error fetching todo:", error);
    Response.error({ error: "Internal server error" });
  }
}
