"use server"
import { headers } from "next/headers";

export async function getStores() {
    const headerList = headers();
    const domain = headerList.get("host");
    const abort = new AbortController()
    
    try {
      const response = await fetch(`http://${domain}/api/home`, {signal: abort.signal},{ next: {tags:['store']}});
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const users = await response.json();
      return users.data || []; // Return an empty array if data is missing
    } catch (error) {
      return( {error:`${error.message}`});
    }
  }