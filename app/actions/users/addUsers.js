"use server";
import joi from "joi";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; 
import Router from "next/navigation";


 const neon = new Pool({
    connectionString: process.env.POSTGRES_PRISMA_URL,
 })

 const adapter = new PrismaNeon(neon)
 const prisma = new PrismaClient({adapter})

const FormSchema = joi.object({
  username: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,10}$")).required(),  
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,10}$")).required(),
});

const State = {
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
        username: formData.get('name')
      });
    } catch (error) {
      console.log(error)
      if (error?.details) {
        console.log(error.details)
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
     const salt = 'mymart_pass' 
    const { email, password, username } = validatedFields;
    const hashedPassword = bcrypt.genSalt(10, ()=>{
      bcrypt.hash(password, salt, (err, hash) => {
        if(err) throw err;
        return hash
      })
    })
    const newUser = await prisma.user.create({
        data: {
            email,
            password : hashedPassword,
            name:username
        }
    }) 
        
      return { success: true, message: `Welcome ${newUser.username} account Successfully created  ${Router.replace('/login')}` };
    } catch (error) {
      if (error.type === "CredentialsSignin") {
        return {
          errors: {
            error: ["Invalid credentials."],
            name: "credentials failed.",
          },
        };
      }
      if (error.type === "CallbackRouteError") {
        return {
          errors: {
            error: ["Invalid email or password."],
            name: "Authentication failed.",
          },
        };
      }
        return {
            errors: {
            error: ["Oops try again."],
            name: "something happaned try again...",
          },
        }
    }
  
};
