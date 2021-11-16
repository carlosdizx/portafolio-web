<template>
  <v-card>
    <v-card-text v-if="proyectos.length > 0">
      <h1>Proyectos desarrollados</h1>
    </v-card-text>
    <Proyecto
      class="my-5"
      v-for="(proyecto, index) of proyectos"
      :key="index"
      :datos="proyecto"
    />
  </v-card>
</template>

<script>
import Proyecto from "./Proyecto.vue";
import { LISTAR_PROYECTOS } from "@/services/recursos/proyectos";
export default {
  name: "ListadoProyectos",
  data: () => ({
    proyectos: [],
  }),
  components: { Proyecto },
  methods: {
    async listarProyectos() {
      this.proyectos = Object.values((await LISTAR_PROYECTOS()).data);
    },
  },
  async mounted() {
    await this.listarProyectos();
  },
};
</script>

<style scoped></style>
