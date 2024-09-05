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
export const addReview = async function (state, formData) {
 
  const headerList = headers();
  const domain = headerList.get("host");
  const session = await auth();
  const prodId = formData.get('product')
  const category_id = formData.get("category")
  // 2. Check provider ID and Authenticate (handle different providers)

  try {
    if (!session.user.id || !prodId ) {
      throw new Error("you are unauthorized please sign in to drop a review");
    }
    
    const {
      text,
      value
    } = await validateReview(formData);

   console.log(text, value, category_id)
   
    const response = await fetch(
      `http://${domain}/api/Product/${prodId}/reviews`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         reviewer: session?.user.id,
         text,
         prodId,
         value,
         category_id
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network failed");
    }

    const review = await response.json();
  
    console.log(review)
    if (!review) {
      throw new Error("could not add review");
    }
    //  revalidateTag(prodId)
   

    return {
      success: true,
      message: ` review Successfully added`,
      errors: {},
      isloading : false,
      data: review.Average
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
        isloading : false
      };
    } else {
      
      return {
        errors: {
          error: error.message,
          name: error.message.split(" ")[0],
        },
        message: `Validation failed. ${error.message}.`,
        success: false,
        isloading : false
      };
    }
  }
};
