import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import router from "./routes/index.js";

const PORT = 4000;

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page not found",
  });
});

app.listen(PORT);
