import { WiCloud, WiDaySunny, WiRain } from "react-icons/wi";
export const InfoCardsClimas = [
    {
        ciudad: "Ciudad de México",
        hora: "14:30",
        temperatura: 28,
        viento: "12 km/h",
        humedad: "40%",
        icono: <WiDaySunny size={90} />,
    },
    {
        ciudad: "Guadalajara",
        hora: "16:10",
        temperatura: 22,
        viento: "18 km/h",
        humedad: "78%",
        icono: <WiRain size={90} />,
    },
    {
        ciudad: "Monterrey",
        hora: "19:45",
        temperatura: 25,
        viento: "10 km/h",
        humedad: "55%",
        icono: <WiCloud size={90} />,
    },
] as const;