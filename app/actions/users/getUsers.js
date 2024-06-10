"use server";
import { users } from "@/app/MockData/Data";
import { headers } from "next/headers";

/**
 * Get all users from the database
 * @returns {Array<User>} - array of user Objects
 */

export async function getUsers() {
  const headerList = headers();
  const domain = headerList.get("host");
  
  try {
    const response = await fetch(`http://${domain}/api/pages`);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    //const users = await response.json();
    return users || {}; // Return an empty array if data is missing
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
