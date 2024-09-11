"use server"
import { headers } from "next/headers";

export async function getPost() {
    const headerList = headers();
    const domain = headerList.get("host");
    const abort = new AbortController()
    try {
      const response = await fetch(`http://${domain}/api/Discover`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const posts = await response.json();
      return posts || []; // Return an empty array if data is missing
    } catch (error) {
      return( {error:`${error.message}`});
    }
  }