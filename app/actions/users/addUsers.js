"use server";
import joi from "joi";
import Router from "next/navigation";


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
      console.log('here')
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name:username }),
      });
      if(!response.ok){
        throw new Error('Network failed')
      }
      // Destructure validated data
      const newUser = await response.json();
      
      return {
        success: true,
        message: `Welcome ${
          newUser.username
        } account Successfully created  ${Router.replace("/login")}`,
        errors: {}
    }
    } catch (error) {
      return {
        errors: {
          error: ["Oops try again."],
          name: "something happaned try again...",
        },
        success:false
      };
    }
  } catch (error) {
    console.log(error);
    if (error?.details) {
      console.log(error.details);
      // Return user-friendly error messages
      validatedFields = {};
      return {
        errors: {
          error: error.details[0].message,
          name: error.details[0].context["label"],
        },
        message: "Validation failed. Please check your input.",
        success:false
      };
    } else
      return {
        errors: {
          error: ["An error occurred. Please try again later."],
          name: "Authentication failed.",
        },
        success: false
      };
  }

  
  
};
