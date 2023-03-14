import firebase from "firebase/compat";
import { auth } from "Config/firebase";
import IUser from "Interfaces/user";
import axios from "axios";
import config from "Config/config";

export const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider) =>
    new Promise<firebase.auth.UserCredential>((resolve, reject) => {
        auth.signInWithPopup(provider)
            .then((result) => resolve(result))
            .catch((error) => reject(error));
    });

export const Authenticate = async (
    uid: string,
    name: string,
    fire_token: string,
    callback: (error: string | null, user: IUser | null) => void
) => {
    try {
        const response = await axios({
            method: "POST",
            url: `${config.server.url}/users/login`,
            data: {
                uid,
                name,
            },
            headers: { Authorization: `Bearer ${fire_token}` },
        });

        response.status === 200 ||
        response.status === 201 ||
        response.status === 304
            ? callback(null, response.data.user)
            : callback("Unable to authenticate", null);
    } catch (error) {
        callback("Unable to authenticate", null);
    }
};

export const Validate = async (
    fire_token: string,
    callback: (error: string | null, user: IUser | null) => void
) => {
    try {
        const response = await axios({
            method: "GET",
            url: `${config.server.url}/users/validate`,
            headers: { Authorization: `Bearer ${fire_token}` },
        });

        response.status === 200 || response.status === 304
            ? callback(null, response.data.user)
            : callback("Unable to validate", null);
    } catch (error) {
        callback("Unable to validate", null);
    }
};
