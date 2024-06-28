import joi from "joi";

const Fields = {
  username: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,10}$")).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,10}$")).required(),
};

export const validate = (_, e) => {
  const { value, name } = e?.target;
  const FormSchema = joi.object({ [name]: Fields[name] });
  const valid = FormSchema.validate({
    [name]: value,
  });
  const { error, warning, value: val } = valid;
  if (error !== undefined) {
    console.log(error);
    return {
      errors: {
        error: error?.toString().split(":", 2)[1],
        // .toString().split(":", 3)[1],
        name: name,
      },
      message: null,
    };
  }
  return {
    errors: {},
    message: null,
  };
};
