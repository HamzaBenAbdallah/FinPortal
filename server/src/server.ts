import express from "express";
import http from "http";
import mongoose from "mongoose";
import firebaseAdmin from "firebase-admin";
import Logging from "./library/Logging.js";
import config from "./config/config.js";
import serviceAccountKey from "./config/serviceAccountKey.json" assert { type: "json" };
import userRoutes from "./routes/User.js";

const app = express();

// Firebase Admin SDK initialization
const serviceAccount = serviceAccountKey as firebaseAdmin.ServiceAccount;
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

// Connect to MongoDB
mongoose
  .connect(config.mongo.url, { retryWrites: false, w: "majority" })
  .then(() => {
    Logging.info("Connected to MongoDB");
    StartServer();
  })
  .catch((err) => Logging.error(err));

// Start server if MongoDB is connected
const StartServer = () => {
  app.use((req, res, next) => {
    Logging.info(
      `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      Logging.info(
        `Outgoing -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}] - Status: [${res.statusCode}]`
      );
    });

    next();
  });

  /** Middleware */
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  /** API Rules */
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }

    next();
  });

  /** Routes */
  app.use("/users", userRoutes);

  /** Health check */
  app.get("/ping", (req, res, next) =>
    res.status(200).json({ message: "pong" })
  );

  /** Error handling */
  app.use((req, res, next) => {
    const error = new Error("Not found");
    Logging.error(error);

    return res.status(404).json({ message: error.message });
  });

  http.createServer(app).listen(config.server.port, () => {
    Logging.info(`Server started on port ${config.server.port}`);
  });
};
