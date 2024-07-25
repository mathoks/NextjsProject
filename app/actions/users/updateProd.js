"use server";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { ImageResize2 } from "@/app/lib/utills/ImageResize";
import { validateProdEdit, validateProduct } from "@/app/lib/utills/actionValidator";



/**
 * @typedef {Object} Invoice
 * @property {string} email - The user email.
 * @property {string} password - The user password.
 * @param {string} provider - The provider id.
 * @param {State} prevState - The previous application state (optional).
 * @param {FormData} formData - The form data containing invoice information.
 * @returns {Promise<object>} An object containing success/failure information and optional updated state.
 */
export const updateProduct = async function ({}, formData) {
  const headerList = headers();
  const domain = headerList.get("host");
  const session = await auth();
  const file = formData.get("edit-0");
  const file2 = formData.get("edit-1");
  const id = formData.get("id");
  const prodid1 = formData.get("prodId-0");
  const prodid2 = formData.get("prodId-1");
   

  try {
    if (!session.user.id) {
      throw new Error("you are unauthorized please sign in");
    }
    const {
      name,
      description,
      negotiable,
      category,
      availability,
      link,
      price,
    } = await validateProdEdit(formData);
    
     const url = []

     const createObjectURL = async()=>{
        const processed = []
       const files = [file, file2];
       files.forEach((fil)=>{
        if(fil.size !== 0){
          return processed.push(fil)
        }
        else return
       })
       if(processed.length > 0)
      return  await ImageResize2(processed);
       else return []
     }

    //  const processedUrls = await createObjectURL()
    //  console.log(processedUrls)
    //;

     const createFormbody = () => {
        // Create an empty object to store form data
        const formBody = {};
      
        // Define the fields you want to include in the form
        const fields = [
          { name },
          { description },
          { negotiable },
          { category },
          { link },
          { price },
          { availability },
          {url: url.length === 0 ? null : url},
          {prodid1: prodid1},
          {prodid2: prodid2},
          {id: id}

        ];
      
        fields.forEach((field, index) => {
          const key = Object.keys(field)[0];  
          if(field[key] !== '' && field[key] !== null) {
            return formBody[key] = field[key];
          }
         else return;
        });
      
        return formBody;
      };

      const formBody = createFormbody();
      console.log(formBody);
    
    // const response = await fetch(
    //   `http://${domain}/api/store/${session?.user.id}/product/${id}/update`,
    //   {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       storeId: session?.user.id,
    //         ...formBody,
    //     }),
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error("Network failed");
    // }

    // const store = await response.json();
  

    // if (!store) {
    //   throw new Error("could not update product");
    // }
   // revalidateTag('store')
    // revalidatePath('/api/home')
    // redirect(`http://${domain}/store/${encodeURIComponent(businessName)}/${encodeURIComponent(id)}`);

    return {
      success: true,
      message: ` product Successfully updated`,
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
