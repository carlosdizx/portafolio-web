import { INSTACIA } from "@/services/axios";
const PERFIL = "";

export const LISTAR_PROYECTOS = async () =>
  await INSTACIA.get(`proyectos.json`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const REGISTRAR_PROYECTO = async (datos: any) =>
  await INSTACIA.post(`proyectos.json`, JSON.stringify(datos), {
    headers: {
      "Content-Type": "application/json",
    },
  });
