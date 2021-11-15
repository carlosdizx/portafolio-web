<template>
  <v-card :color="color">
    <v-card-title>
      <v-toolbar :color="color" dark flat prominent>
        <v-toolbar-title>
          <v-img
            alt="Logo"
            class="shrink my-auto"
            contain
            src="@/assets/logo.png"
            transition="scale-transition"
            width="80"
          />
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon href="https://github.com/carlosdizx" target="_blank">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn
          icon
          href="https://www.linkedin.com/in/carlos-ernesto-diaz-basante-2872ab210/"
          target="_blank"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
          icon
          href="https://www.instagram.com/carlosdix98/"
          target="_blank"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          icon
          href="https://drive.google.com/file/d/1WKJJIPNQDPWim68-pb1o8n1oh37L5fYG/view?usp=sharing"
          target="_blank"
        >
          <v-icon>mdi-file-document</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card-title>
    <v-card-title>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="grey lighten-2" v-bind="attrs" v-on="on">
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
    </v-card-title>
  </v-card>
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
