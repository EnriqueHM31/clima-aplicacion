import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useClimaStore } from "../store/climaStore";

export function useSearch() {
    const { ciudad, dias, crearNewUrl, reset } = useClimaStore();
    const navigate = useNavigate();

    const handleNavigate = (e: React.FormEvent) => {
        e.preventDefault();
        if (ciudad === "") {
            reset();
            toast.error("Error: Ingresa una ciudad");
            return;
        }
        const UrlNew = crearNewUrl({ ciudad, dias });
        navigate(UrlNew);
        reset();
    };

    const OptionsSelect = Array.from({ length: 11 });

    return {
        handleNavigate,
        OptionsSelect,
    };
}