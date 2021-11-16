<template>
  <v-card :color="color">
    <v-card-text>
      <v-form>
        <h1>{{ titulo }}</h1>
        <h3>{{ subtitulo }}</h3>
        <v-alert>{{ descripcion }}</v-alert>
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
    titulo: String,
    subtitulo: String,
    descripcion: String,
    imagen: String,
    link: String,
    page: String,
    privado: Boolean,
  },
};
</script>

<style scoped></style>
