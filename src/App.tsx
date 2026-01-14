import Fondo from "./components/Landing/Fondo";
import AppRouter from "./routes/routes";
import { Toaster } from "sonner";

function App() {
    return (
        <>
            <div className="">
                <Fondo>
                    <AppRouter />
                </Fondo>
            </div>
            <Toaster
                expand
                position="bottom-right"
                toastOptions={{
                    className: "bg-blue-950 text-white border border-blue-800",
                    style: {
                        background: "#000",
                        color: "white",
                        border: "1px solid #48e",
                        borderRadius: "10px",
                    },
                }}
            />
        </>
    );
}

export default App;
