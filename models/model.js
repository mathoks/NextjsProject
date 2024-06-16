import { PrismaClient } from "@prisma/client";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";

// Function to create a Prisma Client instance with Neon adapter
async function createPrismaClient() {
  const neon = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL });
  const adapter = new PrismaNeon(neon);
  return new PrismaClient({ adapter });
}

let prisma;

// Initialize Prisma Client based on environment
(async () => {
  if (process.env.NODE_ENV === 'production') {
    prisma = await createPrismaClient();
  } else {
    // Handle development environment (consider caching or reuse)
    if (!globalThis.prisma) {
      globalThis.prisma = await createPrismaClient();
    }
    prisma = globalThis.prisma;
  }
})();

export default prisma;
