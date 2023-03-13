import { useContext, useState } from "react";
import firebase from "firebase/compat";
import UserContext from "Context/user";
import IPageProps from "Interfaces/page";
import { SignInWithSocialMedia as SocialMediaPopup } from "Modules/auth";
import ErrorText from "Components/ErrorText";
import { Providers } from "Config/firebase";
import Loading from "Components/Loading";

const Login = (props: IPageProps) => {
    const [authenticating, setAuthenticating] = useState(false);
    const [error, setError] = useState<string>("");
    const userContext = useContext(UserContext);

    const isLogin = window.location.pathname.includes("login");

    const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== "") setError("");
        setAuthenticating(true);

        SocialMediaPopup(provider)
            .then(async (result) => {
                console.log(result);
                let user = result.user;
                if (user) {
                    let uid = user.uid;
                    let name = user.displayName;

                    if (name) {
                        try {
                            let fire_token = await user.getIdToken();
                            // authenticate with the backend
                        } catch (error) {
                            setError("invalid token");
                            console.error(error);
                            setAuthenticating(false);
                        }
                    } else {
                        setError(
                            "The identity provider did not return a name."
                        );
                        setAuthenticating(false);
                    }
                } else {
                    setError(
                        "The identity provider is missing a lot of the necessary information."
                    );
                    setAuthenticating(false);
                }
            })
            .catch((error) => {
                setError(error.message);
                setAuthenticating(false);
            });
    };

    return (
        <>
            <div>{isLogin ? "Login" : "Sign Up"}</div>
            <div>
                <ErrorText error={error} />
                <button
                    disabled={authenticating}
                    onClick={() => SignInWithSocialMedia(Providers.google)}
                    style={{
                        backgroundColor: "#ea4335",
                        borderColor: "#ea4335",
                    }}
                >
                    Sign {isLogin ? "in" : "up"} with Google
                </button>
                {authenticating ? <Loading></Loading> : null}
            </div>
        </>
    );
};

export default Login;
