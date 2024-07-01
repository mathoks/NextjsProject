"use server";
import { auth, signIn } from "@/auth";
import joi from "joi";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const FormSchema = joi.object({
  username: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,10}$")).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,10}$")).required(),
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
export const addUser = async function (State, formData) {
  const headerList = headers();
  const domain = headerList.get("host");
  const session = await auth()
  // 1. Initialize validatedFields
  let validatedFields = {};
  // 2. Check provider ID and Authenticate (handle different providers)

  try {
    // 1. Validate Form Fields using FormSchema
    validatedFields = await FormSchema.validateAsync({
      email: formData.get("email"),
      password: formData.get("password"),
      username: formData.get("username"),
    });

    try {
      const { email, password, username } = validatedFields;

      const response = await fetch(`http://${domain}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name: username }),
      });
      console.log(response.ok)
      if (!response.ok) {
        throw new Error("Network failed");
      }
      // Destructure validated data
      const newUser = await response.json();
      const lognewUser = await signIn('credentials',{ email, password });
      console.log(session)
      if (lognewUser &&  typeof session.user.name !== '') {
         redirect(`/Dashboard/${username}`);
      } else {
        return {
          success: true,
          message: `Welcome ${newUser?.name} account Successfully created `,
          errors: {},
        };
      }
    } catch (error) {
      console.error(error);
      return {
        errors: {
          error: ["Oops try again."],
          name: "something happaned try again...",
        },
        message: "An error occurred. Please try again later.",
        success: false,
      };
    }
  } catch (error) {
    
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
    } else
      return {
        errors: {
          error: ["An error occurred. Please try again later."],
          name: "Authentication failed.",
        },
        success: false,
      };
  }
};
