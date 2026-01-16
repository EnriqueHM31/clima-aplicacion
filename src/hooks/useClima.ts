import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { useClimaStore } from "../store/climaStore";

export function useClima() {
    const [searchParams] = useSearchParams();
    const { dataClima, handleChangeDias, handleChangeCiudad, obtenerClimaLugar, error } = useClimaStore();
    const { lugar } = useParams<{ lugar: string }>();
    const navigate = useNavigate();
    useEffect(() => {
        if (error) {
            navigate("/");
            toast.error(error);
        }
        const days = Number(searchParams.get("days") ?? 0);
        handleChangeDias(days);
        handleChangeCiudad(lugar ?? "");

        if (!lugar) return;

        const fetchData = async () => {
            //const data = await obtenerClimaLugar(lugar, days);
            obtenerClimaLugar(lugar, days);
        };

        fetchData();
    }, [lugar, handleChangeDias, searchParams, handleChangeCiudad, obtenerClimaLugar, error, navigate]);

    return { dataClima };
}