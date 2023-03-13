import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "Context/user";

export interface IAuthRouteProps {
    children: React.ReactNode;
}

const AuthRoute = ({ children }: IAuthRouteProps) => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext).userState;

    useEffect(() => {
        if (user._id === "") {
            console.log("Unauthorized access, redirecting ...");
            navigate("/login");
        }
    }, [user]);

    return <>{children}</>;
};

export default AuthRoute;
