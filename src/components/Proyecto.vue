<template>
  <v-card>
    <v-card-text>
      <h1>
        <v-alert dense :color="color" dark>{{ datos.titulo }}</v-alert>
      </h1>
      <v-form>
        <h4>Tecnologias utilizadas</h4>
        <v-icon v-for="(icon, index) of datos.tecnologias" :key="index">
          {{ icon }}
        </v-icon>
        <v-alert>{{ datos.descripcion }}</v-alert>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { mapState } from "vuex";

export default {
  name: "Proyecto",
  computed: {
    ...mapState(["color"]),
  },
  props: {
    datos: Object,
  },
};
</script>

<style scoped></style>
