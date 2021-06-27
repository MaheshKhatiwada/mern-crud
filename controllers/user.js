import validateSchema,{signInSchema, signUpSchema} from "../validation/userValidation.js";

export const signIn = (req, res) => {
  const { error } = validateSchema(req.body,signInSchema);
  if (error) res.status(400).send(error.details[0].message);
  res.status(201).send("Successful sign In");
};
export const signUp = (req, res) => {
  const { error } = validateSchema(req.body,signUpSchema);
  if (error) res.status(400).send(error.details[0].message);
  res.status(201).send('Successful sign up');
};
