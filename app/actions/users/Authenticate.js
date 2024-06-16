"use server";

import { signIn } from "@/auth";

export async function authenticate() {
  try {
    
    await signIn();
  } catch (error) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
