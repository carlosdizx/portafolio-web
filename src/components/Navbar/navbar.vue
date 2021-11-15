<template>
  <v-app-bar app :color="color" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.png"
        transition="scale-transition"
        width="50"
      />
    </div>

    <v-spacer />

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="info" v-bind="attrs" v-on="on">
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
      { nombre: "primary", dark: false },
      { nombre: "success", dark: true },
      { nombre: "orange", dark: true },
      { nombre: "red", dark: true },
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
