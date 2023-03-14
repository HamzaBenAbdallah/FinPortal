import { useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
    UserContextProvider,
    initialUserState,
    userReducer,
} from "Context/user";
import GlobalStyle from "Styles/global";
import routes from "Config/routes";
import { Validate } from "Modules/auth";
import AuthRoute from "Components/AuthRoute";
import Loading from "Components/Loading";

export interface IAppProps {}

const App = (props: IAppProps) => {
    const [userState, userDispatch] = useReducer(userReducer, initialUserState);
    const [loading, setLoading] = useState(true);

    /** Debugging */
    const [authStage, setAuthStage] = useState<string>(
        "Checking local storage..."
    );

    useEffect(() => {
        CheckLocalStorageForCredentials();
    }, []);

    /**
     * Check to see if we have a token
     * if we do, verify it with the server
     * if we don't, we are logged out initially
     */
    const CheckLocalStorageForCredentials = () => {
        setAuthStage("Checking credentials ...");

        const fire_token = localStorage.getItem("fire_token");

        if (fire_token === null) {
            userDispatch({ type: "logout", payload: initialUserState });
            setAuthStage("No credentials found.");
            setLoading(false);
        } else {
            return Validate(fire_token, (error, user) => {
                if (error) {
                    userDispatch({ type: "logout", payload: initialUserState });
                    setAuthStage("User not valid, logging out.");
                    setLoading(false);
                } else if (user) {
                    userDispatch({
                        type: "login",
                        payload: { user, fire_token },
                    });
                    setAuthStage("User is valid, logging in.");
                    setLoading(false);
                }
            });
        }
    };

    const userContextValues = {
        userState,
        userDispatch,
    };

    if (loading) {
        return <Loading>{authStage}</Loading>;
    }

    return (
        <UserContextProvider value={userContextValues}>
            <GlobalStyle />
            <Routes>
                {routes.map((route, index) => {
                    if (route.auth) {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <AuthRoute>
                                        <route.component />
                                    </AuthRoute>
                                }
                            />
                        );
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    );
                })}
            </Routes>
        </UserContextProvider>
    );
};

export default App;
