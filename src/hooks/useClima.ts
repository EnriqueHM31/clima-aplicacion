import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { useClimaStore } from "../store/climaStore";
import { getErrorMessage } from "../utils/errores";
import type { WeatherApiError } from "../types";

export function useClima() {
    const [searchParams] = useSearchParams();
    const { dataClima, handleChangeDias, handleChangeCiudad, obtenerClimaLugar, error } = useClimaStore();
    const { lugar } = useParams<{ lugar: string }>();
    const navigate = useNavigate();
    useEffect(() => {
        if (error) {
            const message = getErrorMessage(error as WeatherApiError);
            navigate("/");
            toast.error(message, { duration: 3000 });
            return
        }
        const days = Number(searchParams.get("days") ?? 0);
        handleChangeDias(days);
        handleChangeCiudad(lugar ?? "");

        if (!lugar) return;

        const fetchData = async () => {
            //const data = await obtenerClimaLugar(lugar, days);
            obtenerClimaLugar(lugar.trim(), days);
        };

        fetchData();
    }, [lugar, handleChangeDias, searchParams, handleChangeCiudad, obtenerClimaLugar, error, navigate]);

    return { dataClima };
}