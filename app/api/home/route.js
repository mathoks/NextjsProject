
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";

let prisma;
const neon = new Pool({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const adapter = new PrismaNeon(neon);

if (!prisma) {
  prisma = new PrismaClient({ adapter });
}
export async function GET() {
  try {
    const getUsers = unstable_cache(
      async () => {
        const stores = await prisma.store.findMany({
          include: {
            product: {
              select: {
                id: true,
                storeId: true,
                 category: true,
                price: true,
                name: true,
                description: true,
                rating: true,
                prodImage: {
                  select: { id: true, image: true },
                },
                availability: true,
                prod_reviews: true,
              },
            },
            storeReviews: {
              select: {
                id: true,
                comment: true,
                review: true,
              },
            },
          },
        });

        if (Array.isArray(stores)) {
          return  stores;
        } else {
          throw new Error("Couldn't query database");
        }
      },
      ["store"],
      { tags:['store'], revalidate: 60 * 60 * 1} 
    );

    const cachedStores = await getUsers();
    
    return NextResponse.json(cachedStores);
  } catch (error) {
    console.log(error)
    // Log the error for debugging
    return NextResponse.error()
  }
}

// Call this function before your API route handlers are executed
