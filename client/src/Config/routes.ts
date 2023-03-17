import IRoute from "Interfaces/route";
import Home from "Pages/Home";
import Login from "Pages/Login";
import Register from "Pages/Register";

const authRoutes: IRoute[] = [
    {
        path: "/login",
        name: "Login",
        auth: false,
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        auth: false,
        component: Register,
    },
];

const appRoutes: IRoute[] = [];

const mainRoutes: IRoute[] = [
    {
        path: "/",
        name: "Home",
        auth: true,
        component: Home,
    },
];

const routes: IRoute[] = [...authRoutes, ...appRoutes, ...mainRoutes];

export default routes;
