"use server";

import { signIn } from "@/auth";
import joi from "joi";

const FormSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,10}$")),
});

 const State = {
  errors: {
    email: [],
    password: [],
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
export const Authenticate = async function (State, formData) {
  const formAction = formData?.get("Credentials");
  
  try {
    // 1. Validate Form Fields using FormSchema
    const validatedFields = await FormSchema.validateAsync({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const { email, password } = validatedFields; 
  
    // 2. Check provider ID and Authenticate (handle different providers)
    if (formAction === "credentials") {
      try {
        // Destructure validated data
        await signIn(formAction, { redirectTo: "/", password, email });
        // Authentication successful (handle success state or redirect)
        return { success: true, message: "Successfully authenticated!" };
      } catch (error) {
        
        if (error.type === "CredentialsSignin") {
          return {
            errors: ["Invalid credentials."],
            message: "Invalid email or password.",
          };
        } else {
          throw error; // Re-throw other errors for further handling
        }
      }
    } else {
      // Handle other providers (replace with your implementation)
      await signIn(formAction, { redirectTo: "/" });
      // Authentication successful (handle success state or redirect)
      return {
        success: true,
        message: `Successfully authenticated with ${formAction}!`,
      };
    }
  } catch (error) {
    
    if (error?.details) {
      // Return user-friendly error messages
      return {
        errors: { 'error': error.details[0].message, 'name': error.details[0].context['label']},
        message: "Validation failed. Please check your input.",
      };
    }
    // Log the error for debugging
    else return {
      errors: ["An error occurred. Please try again later."],
      message: "Authentication failed.",
    };
  }
};
