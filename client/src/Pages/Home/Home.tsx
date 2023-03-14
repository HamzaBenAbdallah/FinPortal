import { useContext } from "react";
import UserContext, { initialUserState } from "Context/user";
import IPageProps from "Interfaces/page";

const Home = (props: IPageProps) => {
    const userContext = useContext(UserContext);
    const { user } = userContext.userState;

    const logout = () => {
        userContext.userDispatch({ type: "logout", payload: initialUserState });
    };
    return (
        <div>
            <p>Home Page (Protected by Firebase)</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Home;
