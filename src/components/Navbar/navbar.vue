<template>
  <v-app-bar app color="primary" dark>
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
import { mapActions } from "vuex";

export default {
  name: "main",
  methods: {
    ...mapActions(["cambarColor"]),
  },
};
</script>

<style scoped></style>
