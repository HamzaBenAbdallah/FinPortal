import express from "express";
import controller from "../controllers/User.js";
import extractFirebaseInfo from "../middleware/extractFirebaseInfo.js";

const router = express.Router();

router.get("/validate", extractFirebaseInfo, controller.validateUser);
router.get("/:userId", controller.readUser);
router.post("/create", extractFirebaseInfo, controller.createUser);
router.post("/login", extractFirebaseInfo, controller.loginUser);
router.get("/", controller.readAll);
router.patch("/update/:userId", controller.updateUser);
router.delete("/delete/:userId", controller.deleteUser);

export default router;
