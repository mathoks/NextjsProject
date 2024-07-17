"use server";
import { auth } from "@/auth";
import joi from "joi";
import { headers } from "next/headers";
import { revalidateTag } from "next/cache";
import { ImageResize2 } from "@/app/lib/utills/ImageResize";
import { NextRequest } from "next/server";

const FormSchema = joi.object({
  name: joi
    .string()
    .pattern(new RegExp("[a-zA-Z0-9s]+$"))
    .min(4)
    .max(15)
    .required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  description: joi
    .string()
    .pattern(new RegExp("[a-zA-Z0-9s\u00A0.,:?]+$"))
    .min(6)
    .max(100)
    .required(),
  category: joi.string().required(),
  price: joi.number().required(),
  negotiable: joi.string().required(),
  availability: joi.string().required(),
  address: joi
    .string()
    .pattern(new RegExp("[a-zA-Z0-9s\u00A0.,-]+$"))
    .min(6)
    .max(50)
    .required(),
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
export const addProduct = async function (State, formData) {
  const headerList = headers();
  const domain = headerList.get("host");
  const session = await auth();
  const file = formData.get("imgR1");
  const file2 = formData.get("img2");
  
  // 1. Initialize validatedFields
  let validatedFields = {};

  console.log(file, file2)
  // 2. Check provider ID and Authenticate (handle different providers)

  try {
    if (!file || !file2) {
      throw new Error("An image is required");
    }
     const url = await ImageResize2([file, file2]);

    // if (url === "") {
    //   throw new Error("image upload failed");
    // }

    // 1. Validate Form Fields using FormSchema
    validatedFields = await FormSchema.validateAsync({
      name: formData.get("name"),
      description: formData.get("description"),
      negotiable: formData.get("negotiable"),
      category: formData.get("category"),
      availability: formData.get("availability"),
      link: formData.get("link"),
      price: formData.get("price"),
    });

    const {
      name,
      category,
      availability,
      price,
      link,
      negotiable,
      description,
    } = validatedFields;
    // const response = await fetch(
    //   `http://${domain}/api/Dashboard/${session?.user.id}/addproduct`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       storeId : session?.user.id,  
    //       name,
    //       category,
    //       price,
    //       availability,
    //       negotiable,
    //       link,
    //       description,
    //       prodImage: url,
    //     }),
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error("Network failed");
    // }

    // const store = await response.json();
    // const { id } = store.data;
    const store = true;
    if (!store) {
      throw new Error("could not create store");
    }
    revalidateTag("store");
    // redirect(`http://${domain}/store/${encodeURIComponent(businessName)}/${encodeURIComponent(id)}`);

    return {
      success: true,
      message: ` product Successfully added`,
      errors: {},
    };
  } catch (error) {
    if (error.message === "NEXT_REDIRECT") {
      throw error;
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
