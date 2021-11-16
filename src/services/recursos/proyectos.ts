import { INSTACIA } from "@/services/axios";
const PERFIL = "";

export const LISTAR_PROYECTOS = async () =>
  await INSTACIA.get(`proyectos.json`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
