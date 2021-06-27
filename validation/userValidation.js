import Joi from "joi";

export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).required()
});

export const signUpSchema= Joi.object({
    name:Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).required()
  });

const validateSchema=(data,schema)=>{
    return schema.validate(data);
}

export default validateSchema;