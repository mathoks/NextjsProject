"use server"
import { headers } from "next/headers";

export async function getProductsPost(userId) {
    const headerList = headers();
    const domain = headerList.get("host");
    const abort = new AbortController()
    try {
      const response = await fetch(`http://${domain}/api/getProducts/${userId}`, { next: {tags:['productsPost']}});
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const categories = await response.json();
      return categories || []; // Return an empty array if data is missing
    } catch (error) {
      return( {error:`${error.message}`});
    }
  }