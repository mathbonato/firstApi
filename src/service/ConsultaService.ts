import Folha from "../models/Folha";
import api from "./api";

export async function notifyAppConsulta(folhas: Folha[]) {
    const response = await api.post('/folha/enviar', { folhas: folhas });
    return response;
};