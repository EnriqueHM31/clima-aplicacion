import { URL_EMAIL } from "../config";
import { paginbaDondeEsEnviadoEmail } from "../constants";

export async function enviarEmail({ email, mensaje }: { email: string, mensaje: string; }) {
    const response = await fetch(URL_EMAIL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            page: paginbaDondeEsEnviadoEmail,
            email: email,
            comentario: mensaje
        })
    })

    const data = await response.json();

    return data;
}