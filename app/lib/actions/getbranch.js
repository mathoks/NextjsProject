"use server"
import { headers } from "next/headers";

export async function getBranch(id) {
    const headerList = headers();
    const domain = headerList.get("host");
    const abort = new AbortController()
    try {
      const response = await fetch(`http://${domain}/api/Dashboard/${id}/settings/product`, { next: {tags:['b']}});
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const users = await response.json();
      return users.data || []; // Return an empty array if data is missing
    } catch (error) {
      return( {error:`${error.message}`});
    }
  }