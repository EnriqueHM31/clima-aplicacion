import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoaderGrid from "../components/Atomos/Loading";

const HomePage = lazy(() => import("../pages/Home"));
const LugarClima = lazy(() => import("../pages/LugarClima"));
const NotFound404 = lazy(() => import("../pages/404"));

export default function AppRouter() {
    return (
        <Suspense fallback={
            <div>
                <LoaderGrid />
            </div>}
        >
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:lugar" element={<LugarClima />} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </Suspense>
    )
}
