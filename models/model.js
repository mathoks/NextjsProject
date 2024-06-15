import { PrismaClient } from "@prisma/client";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";

const  prismaClientsingle = async()=>{
    const neon = new Pool({connectionString: process.env.POSTGRES_PRISMA_URL})
    const adapter = new PrismaNeon(neon)
    return new PrismaClient({adapter})
}

let prisma; 
if(process.env.NODE_ENV === 'production'){
    prisma = await prismaClientsingle()
}
else {
    if(!globalThis.prisma){
        globalThis.prisma = await prismaClientsingle()
    }
    prisma = globalThis.prisma
}
export default prisma