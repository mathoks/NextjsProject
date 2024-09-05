"use server"

import { headers } from "next/headers";


export default async function getReviewsSumm(productId) {
  const headerList = headers();
  console.log(productId, "hh")
    const domain = headerList.get("host");
    try {
        const response = await fetch(`http://${domain}/api/Product/${productId}/review`, {next: {tags:['product', productId]}})
        
        if (!response.ok) {
            throw new Error(`API request failed with status ${Response.status}`)
        }
       
        const reviewSum = await response.json();
        
        return reviewSum.data || {}
    } catch (error) {
       return {error : "failed"}
    }
}