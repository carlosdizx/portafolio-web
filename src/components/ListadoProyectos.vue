<template>
  <v-card>
    <Proyecto :datos="datos" />
  </v-card>
</template>

<script lang="ts">
import Proyecto from "./Proyecto.vue";
export default {
  name: "ListadoProyectos",
  data: () => ({
    datos: {
      titulo: "Hola",
      tecnologias: ["mdi-angular", "mdi-facebook"],
      descripcion: "xd",
    },
  }),
  components: { Proyecto },
};
</script>

<style scoped></style>
