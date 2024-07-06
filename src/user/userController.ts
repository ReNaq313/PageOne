import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
   const { name, email, password } = req.body;
   //validation
   if (!name || !email || !password) {
      const error = createHttpError(400, "All fields are required");
      return next(error);
   }

   //DB call
   const user = await userModel.findOne({ email });

   if (user) {
      const error = createHttpError(
         400,
         "User already exists with this email."
      );
      return next(error);  
   }

   //process
   //response

   res.json({ message: "User created" });
};

export { createUser };
