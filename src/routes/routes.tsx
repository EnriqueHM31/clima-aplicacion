import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";
import LugarClima from "../pages/LugarClima";

export default function AppRouter() {
    const routes = useRoutes([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/:lugar",
            element: <LugarClima />,
        },
        {
            path: "/:lugar/:days",
            element: <LugarClima />,
        }
    ]);

    return routes;
}
