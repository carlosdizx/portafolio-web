<template>
  <v-container>
    <v-card>
      <Proyecto :datos="datos" />
    </v-card>
  </v-container>
</template>

<script>
import Proyecto from "./Proyecto.vue";
import { LISTAR_PROYECTOS } from "@/services/recursos/proyectos";
export default {
  name: "ListadoProyectos",
  data: () => ({
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
    listarProyectos: async () => {
      return await LISTAR_PROYECTOS();
    },
  },
  async created() {
    console.log((await this.listarProyectos()).data);
  },
};
</script>

<style scoped></style>
