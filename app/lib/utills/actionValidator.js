import joi from "joi";

const FormSchema = joi.object({
  storename: joi
    .string()
    .pattern(new RegExp("[a-zA-Z0-9\s]+$")).min(6).max(20)
    .required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  phone: joi.string().pattern(new RegExp("[0-9]{11,15}")).required(),
  location: joi.string().required(),
  address: joi.string().pattern(new RegExp("[a-zA-Z0-9s\u00A0.,-]+$")).min(6).max(50).required(),
});

const FormSchema1 = joi.object({
name: joi
    .string()
    .pattern(new RegExp("[a-zA-Z0-9s]+$"))
    .min(4)
    .max(20)
    .required(),
  description: joi
    .string()
    .pattern(new RegExp("[a-zA-Z0-9s\u00A0.,:?]+$"))
    .min(6)
    .max(100)
    .required(),
  category: joi.string().required(),
  link: joi.string(),
  price: joi.number().required(),
  negotiable: joi.string().required(),
  availability: joi.string().required(),
})

export const validateProduct = async (formData) => {

  let validatedFields = {};
  try {
    validatedFields = await FormSchema1.validateAsync({
      name: formData.get("name"),
      description: formData.get("description"),
      negotiable: formData.get("negotiable"),
      category: formData.get("category"),
      availability: formData.get("availability"),
      link: formData.get("link"),
      price: formData.get("price"),
    });

    
    return  validatedFields;
  } catch (error) {
    console.log(error)
    throw error;
  }
};


export const validateBranch = async (formData) => {

    let validatedFields = {};
    try {
      
        validatedFields = await FormSchema.validateAsync({
            storename: formData.get("storename"),
            address: formData.get("address"),
            location: formData.get('location')
          });

      return (
         { storename, address, location} = validatedFields )
    } catch (error) {
        validatedFields= {};
      throw error;
    }
  };


