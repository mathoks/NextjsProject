import { PrismaClient } from "@prisma/client";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";

const prismaClientsingle = ()=>{
    const neon = new Pool({connectionString: process.env.POSTGRESS_PRISMA_URL})
    const adapter = new PrismaNeon(neon)
    return new PrismaClient({adapter})
}

let prisma = undefined || prismaClientsingle()
//if(process.env.NODE_ENV !== 'production') global
export default prisma