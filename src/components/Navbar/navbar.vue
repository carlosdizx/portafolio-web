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

    <v-btn text>
      <span class="mr-2">Color principal</span>
      <v-icon>mdi-palette</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "main",
  computed: {
    ...mapState(["color"]),
  },
  methods: {
    ...mapActions(["cambarColor"]),
  },
};
</script>

<style scoped></style>
