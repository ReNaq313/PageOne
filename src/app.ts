import express from "express";

const app = express();

app.get("/", (req, res, next) => {
   res.json({ message: "response from pageone apis" });
});

export default app;
