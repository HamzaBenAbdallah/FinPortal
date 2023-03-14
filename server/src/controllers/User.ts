import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User.js";

const validateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let firebase = res.locals.firebase;

    try {
        const user = await User.findOne({ uid: firebase.uid });
        return user
            ? res.status(200).json({ user })
            : res.status(404).json({ message: "user not found" });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { uid, name } = req.body;
    let fire_token = res.locals.fire_token;

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        uid,
        name,
    });

    try {
        const newUser = await user.save();
        return res.status(201).json({ user, fire_token });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    let { uid } = req.body;
    let fire_token = res.locals.fire_token;

    try {
        const user = await User.findOne({ uid });
        return user
            ? res.status(200).json({ user, fire_token })
            : createUser(req, res, next);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const readUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);
        return user
            ? res.status(200).json({ user })
            : res.status(404).json({ message: "not found" });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const readAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find();
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    return User.findById(userId)
        .then((user) => {
            if (user) {
                user.set(req.body);

                return user
                    .save()
                    .then((user) => res.status(201).json({ user }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: "not found" });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    try {
        const user = await User.findByIdAndDelete(userId);
        return user
            ? res.status(201).json({ user, message: "Deleted" })
            : res.status(404).json({ message: "not found" });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default {
    validateUser,
    createUser,
    loginUser,
    readUser,
    readAll,
    updateUser,
    deleteUser,
};
