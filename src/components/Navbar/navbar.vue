<template>
  <v-app-bar app :color="color" dark prominent>
    <v-img
      alt="Logo"
      class="shrink my-auto"
      contain
      src="@/assets/logo.png"
      transition="scale-transition"
      width="80"
    />

    <v-spacer />

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grey" v-bind="attrs" v-on="on">
          <span class="mr-2">Color principal</span>
          <v-icon>mdi-palette</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(color, index) of colores" :key="index">
          <v-btn
            :dark="color.dark"
            block
            :color="color.nombre"
            @click="cambarColor(color.nombre)"
          >
            <v-chip :color="color.nombre">{{ index + 1 }}</v-chip>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "main",
  data: () => ({
    colores: [
      { nombre: "yellow", dark: false },
      { nombre: "orange", dark: false },
      { nombre: "red", dark: true },
      { nombre: "pink", dark: true },
      { nombre: "purple", dark: true },
      { nombre: "indigo", dark: true },
      { nombre: "blue", dark: true },
      { nombre: "cyan", dark: true },
      { nombre: "teal", dark: true },
      { nombre: "green", dark: true },
      { nombre: "grey darken-4", dark: true },
    ],
  }),
  computed: {
    ...mapState(["color"]),
  },
  methods: {
    ...mapActions(["cambarColor"]),
  },
};
</script>

<style scoped></style>
