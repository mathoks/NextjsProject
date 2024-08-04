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


  // have you tried purchasing a Blender before, yes there are many things to consider and these include, power rating,  reviews, grinding range , dry blending support and ability to handle veggies. making the right descision during purchase would be beneficial in the long run Our top quality Goody blender checks all the right boxes . find tagged product for more info. happy shopping!