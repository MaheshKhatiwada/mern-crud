import express from "express";
const router = express.Router();

router.post("/signIn", (req, res) => {
  res.send("Sign In");
});

export default router;
