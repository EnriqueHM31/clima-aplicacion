import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";

export default function AppRouter() {
    const routes = useRoutes([
        {
            path: "/",
            element: <HomePage />,
        },
    ]);

    return routes;
}
