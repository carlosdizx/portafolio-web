<template>
  <v-card :color="color">
    <v-card-text>
      <v-form>
        <v-btn text :disabled="private">
          {{ !private ? "Ver repositorio" : "Este repositorio es privado" }}
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { mapState } from "vuex";

export default {
  name: "GitHub",
  computed: {
    ...mapState(["color"]),
  },
  props: {
    link: String,
    private: Boolean,
  },
};
</script>

<style scoped></style>
