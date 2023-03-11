import { Schemas } from "./../middleware/ValidateSchema.js";
import express from "express";
import controller from "../controllers/User.js";
import { ValidateSchema } from "../middleware/ValidateSchema.js";

const router = express.Router();

router.post(
  "/create",
  ValidateSchema(Schemas.user.create),
  controller.createUser
);
router.get("/get/:userId", controller.readUser);
router.get("/get", controller.readAll);
router.patch(
  "/update/:userId",
  ValidateSchema(Schemas.user.update),
  controller.updateUser
);
router.delete("/delete/:userId", controller.deleteUser);

export default router;
