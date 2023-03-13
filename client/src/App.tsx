import { useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext, { initialUserState, userReducer } from "Context/user";
import AuthRoute from "Components/AuthRoute";
import GlobalStyle from "Styles/global";
import Home from "Pages/Home";
import Login from "Pages/Login";
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
        setTimeout(() => {
            CheckLocalStorageForCredentials();
        }, 1000);
    }, []);

    /**
     * Check to see if we have a token
     * if we do, verify it with the server
     * if we don't, we are logged out initially
     */
    const CheckLocalStorageForCredentials = () => {
        setAuthStage("Checking credentials ...");

        const fire_token = localStorage.getItem("token");

        if (fire_token === null) {
            userDispatch({ type: "logout", payload: initialUserState });
            setAuthStage("No credentials found.");
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } else {
            /** validate with the backend */
            setAuthStage("Credentials found, validating ...");
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    const userContextValues = {
        userState,
        userDispatch,
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <UserContext.Provider value={userContextValues}>
            <GlobalStyle />
            <Routes>
                <Route
                    path="/"
                    element={
                        <AuthRoute>
                            <Home />
                        </AuthRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </UserContext.Provider>
    );
};

export default App;
