import { validationResult } from "express-validator";

const validateInput = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  next();
};

export default validateInput;


