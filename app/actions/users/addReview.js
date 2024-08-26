"use server";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { revalidateTag } from "next/cache";

import { validateReview } from "@/app/lib/utills/actionValidator";



/**
 * @typedef {Object} Invoice
 * @property {string} email - The user email.
 * @property {string} password - The user password.
 * @param {string} provider - The provider id.
 * @param {State} prevState - The previous application state (optional).
 * @param {FormData} formData - The form data containing invoice information.
 * @returns {Promise<object>} An object containing success/failure information and optional updated state.
 */
export const addReview = async function ({}, formData) {
  const headerList = headers();
  const domain = headerList.get("host");
  const session = await auth();
  const prodId = formData.get('product')
 
  // 2. Check provider ID and Authenticate (handle different providers)

  try {
    if (!session.user.id || !prodId ) {
      throw new Error("you are unauthorized please sign in to drop a review");
    }
    
    const {
      text,
    } = await validateReview(formData);

   
   
    const response = await fetch(
      `http://${domain}/api/Product/${prodId}/review`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         reviewer: session?.user.id,
         text,
         prodId
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network failed");
    }

    const review = await response.json();
  

    if (!review) {
      throw new Error("could not add review");
    }
    revalidateTag('reviews')
   

    return {
      success: true,
      message: ` review Successfully added`,
      errors: {},
    };
  } catch (error) {
    if (error.message === "NEXT_REDIRECT") {
      throw error;
    }
    if (error?.details) {
    
      return {
        errors: {
          error: error.details[0].message,
          name: error.details[0].context["label"],
        },
        message: "Validation failed. Please check your input.",
        success: false,
      };
    } else {
      
      return {
        errors: {
          error: error.message,
          name: error.message.split(" ")[0],
        },
        message: `Validation failed. ${error.message}.`,
        success: false,
      };
    }
  }
};
