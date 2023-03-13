import firebaseAdmin from "firebase-admin";
import { Request, Response, NextFunction } from "express";
import Logging from "../library/Logging.js";

const extractFirebaseInfo = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    Logging.info("Validating firebase token...");

    const token = req.headers.authorization?.split(" ")[1];

    if (token) {
        firebaseAdmin
            .auth()
            .verifyIdToken(token)
            .then((result) => {
                if (result) {
                    res.locals.firebase = result;
                    res.locals.fire_token = token;
                    next();
                } else {
                    Logging.warn("Invalid token");
                    return res.status(401).json({ message: "Unauthorized" });
                }
            })
            .catch((error) => {
                Logging.error(error);
                res.status(401).json({ error, message: "Unauthorized" });
            });
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export default extractFirebaseInfo;
