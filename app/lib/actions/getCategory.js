"use server"
import { headers } from "next/headers";

export async function getCategory() {
    const headerList = headers();
    const domain = headerList.get("host");
    const abort = new AbortController()
    try {
      const response = await fetch(`http://${domain}/api/category`, { next: {tags:['category']}});
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const categories = await response.json();
      return categories || []; // Return an empty array if data is missing
    } catch (error) {
      return( {error:`${error.message}`});
    }
  }