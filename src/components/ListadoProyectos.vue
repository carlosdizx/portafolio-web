<template>
  <v-container>
    <v-card>
      {{ proyectos }}<br />
      <v-btn @click="registrarProyecto">Registrar</v-btn>
      <Proyecto :datos="datos" />
    </v-card>
  </v-container>
</template>

<script>
import Proyecto from "./Proyecto.vue";
import {
  LISTAR_PROYECTOS,
  REGISTRAR_PROYECTO,
} from "@/services/recursos/proyectos";
export default {
  name: "ListadoProyectos",
  data: () => ({
    proyectos: [],
    datos: {
      titulo: "Proyecto lorem ipsum",
      tecnologias: ["mdi-angular", "mdi-language-javascript"],
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting" +
        " industry. Lorem Ipsum has been the industry's standard" +
        " dummy text ever since the 1500s, when an unknown printer" +
        " took a galley of type and scrambled it to make a type" +
        " specimen book. It has survived not only five centuries," +
        " but also the leap into electronic typesetting, remaining" +
        " essentially unchanged. It was popularised in the 1960s with" +
        " the release of Letraset sheets containing Lorem Ipsum passages," +
        " and more recently with desktop publishing software like" +
        " Aldus PageMaker including versions of Lorem Ipsum.",
      pagina: "https://portafolio-carlos-diaz.netlify.app/",
      repositorio: "https://portafolio-carlos-diaz.netlify.app/",
      privado: true,
    },
  }),
  components: { Proyecto },
  methods: {
    async listarProyectos() {
      this.proyectos = (await LISTAR_PROYECTOS()).data;
    },
    async registrarProyecto() {
      await REGISTRAR_PROYECTO(this.datos);
    },
  },
  async mounted() {
    await this.listarProyectos();
  },
};
</script>

<style scoped></style>
