import express, { NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

app.get("/", (req, res, next) => {
   res.json({ message: "response from pageone apis" });
});

//Global error handler
app.use(globalErrorHandler);

export default app;
