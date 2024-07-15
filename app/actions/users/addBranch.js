"use server";
import { auth } from "@/auth";
import joi from "joi";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  isPossiblePhoneNumber,
} from "libphonenumber-js";
import ImageResize from "@/app/lib/utills/ImageResize";
import { revalidatePath, revalidateTag } from "next/cache";


const FormSchema = joi.object({
  storename: joi
    .string()
    .pattern(new RegExp("[a-zA-Z0-9\s]+$")).min(6).max(20)
    .required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  //   phone: joi.string().pattern(new RegExp("[0-9]{11,15}")).required(),
  location: joi.string().required(),
  address: joi.string().pattern(new RegExp("[a-zA-Z0-9s\u00A0.,-]+$")).min(6).max(50).required(),
});

const State = {
  success: null,
  errors: {
    email: [],
    password: [],
    username: [],
  },
  message: "",
};

/**
 * @typedef {Object} Invoice
 * @property {string} email - The user email.
 * @property {string} password - The user password.
 * @param {string} provider - The provider id.
 * @param {State} prevState - The previous application state (optional).
 * @param {FormData} formData - The form data containing invoice information.
 * @returns {Promise<object>} An object containing success/failure information and optional updated state.
 */
export const addBranch = async function (State, formData) {
  const phone = formData.get("tel");
  const headerList = headers();
  const domain = headerList.get("host");
  const session = await auth();
  console.log(phone)
  // 1. Initialize validatedFields
  let validatedFields = {};
  let locations = {};
  // 2. Check provider ID and Authenticate (handle different providers)
  
  try {
    
    
    if (!isPossiblePhoneNumber(phone))
      throw new Error("phone number not valid");
    // 1. Validate Form Fields using FormSchema
      validatedFields = await FormSchema.validateAsync({
      storename: formData.get("storename"),
      address: formData.get("address"),
      location: formData.get("location"),
    });

      const { location } = validatedFields;
      
      const hasMatch = location.indexOf('state') !== -1 ||
                    location.indexOf('country') !== -1 ||
                    location.indexOf('market') !== -1;
      if (location !== "" && !hasMatch) {
        const Location = location.split(",");
        if (Array.isArray(Location) && Location.length === 3)
          locations = {
              country: Location[0].trim(),
              state: Location[1].trim(),
              market: Location[2].trim(),
            };
      } else throw new Error("Location is required");

    
        const { storename, address,} = validatedFields;
        const response = await fetch(
          `http://${domain}/api/Dashboard/${session?.user.id}/createbranch`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: session?.user.id,
              storename,
              address,
              phone,
              state: locations.state,
              country: locations.country,
              market: locations.market,
             
            }),
          }
        );
        
        if (!response.ok) {
          throw new Error("Network failed");
        }
        
        const store = await response.json();
        const {id, branchName} = store.data;
       
        if (!store) {
          throw new Error('could not create store')
        } 
        revalidateTag('store')
        // redirect(`http://${domain}/store/${encodeURIComponent(businessName)}/${encodeURIComponent(id)}`);
        
          return {
            success: true,
            message: `${branchName} branch Successfully created `,
            errors: {},
            store: branchName
          };
        
    
  } catch (error) {
    if(error.message === 'NEXT_REDIRECT'){
        throw error 
    }
    if (error?.details) {
      // Return user-friendly error messages
      validatedFields = {};
      return {
        errors: {
          error: error.details[0].message,
          name: error.details[0].context["label"],
        },
        message: "Validation failed. Please check your input.",
        success: false,
      };
    } else{
        
      return {
        errors: {
          error: error.message,
          name:  error.message.split(' ')[0]
         
        },
        message: `Validation failed. ${error.message}.`,
        success: false,
      };
    }
  }
  
};
