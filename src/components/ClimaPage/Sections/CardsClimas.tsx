import CardClima from "../../Atomos/CardClima";
import { InfoCardsClimas } from "../../../data/cards";

export default function CardsClimas() {
    return (
        <section className="flex flex-col items-center justify-center gap-5 md:flex-row">
            {InfoCardsClimas.map((infoCardClima) => (
                <CardClima
                    key={infoCardClima.ciudad}
                    ciudad={infoCardClima.ciudad}
                    hora={infoCardClima.hora}
                    temperatura={infoCardClima.temperatura}
                    viento={infoCardClima.viento}
                    humedad={infoCardClima.humedad}
                    icono={infoCardClima.icono}
                />
            ))}
        </section>
    );
}
