"use server";
import { auth, signIn } from "@/auth";
import joi from "joi";
import { AuthError } from "next-auth";

const FormSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,10}$")),
});

const State = {
  errors: {
    error: [],
    name: ''
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
  let validatedFields = {};
  const session = await auth();
  // 2. Check provider ID and Authenticate (handle different providers)
  if (formAction === "credentials") {
    try {
      // 1. Validate Form Fields using FormSchema
      validatedFields = await FormSchema.validateAsync({
        email: formData.get("email"),
        password: formData.get("password"),
      });
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
        };
      } else
        return {
          errors: {
            error: ["An error occurred. Please try again later."],
            name: "Authentication failed.",
          },
        };
    }

    try {
      // Destructure validated data
      const { email, password } = validatedFields;
      await signIn(formAction, { password, email });
      return {
        success: true,
        message: "Successfully authenticated!",
        errors: {},
      };
    } catch (error) {
      if (error instanceof AuthError) {
        if (error.type === "CallbackRouteError" && !error?.cause) {
          return {
            errors: {
              error: ["please try again network could not be reached..."],
              name: "Authentication failed.",
            },
            message: "try again network could not be reached...",
            success: false,
          };
        }

        if (error.type === "CredentialsSignin" && !error?.cause) {
          return {
            errors: {
              error: ["Invalid credentials."],
              name: "credentials failed.",
            },
            message: "wrong credentials",
            success: false,
          };
        }
        return {
          errors: {
            error: [error?.cause?.err?.message],
            name: "credentials failed.",
          },
          message: error?.cause?.err?.message,
          success: false,
        };
      }

      throw error;
    }
  } else {
    //const formAction2 = formData?.get("Google");
    // try {
    await signIn("google", { redirectTo: "/Dashboard" });
    // Authentication successful (handle success state or redirect)
    return {
      success: true,
      message: `Successfully authenticated with ${"google"}!`,
    };
  }
};
