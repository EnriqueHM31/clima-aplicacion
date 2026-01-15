import { useState } from "react";

export function useClimaDay() {

    const [openDay, setOpenDay] = useState<number | null>(null);

    const handleCambiarDia = (index: number | null) => setOpenDay(index);

    return {
        openDay,
        handleCambiarDia,
    };
}