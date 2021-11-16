<template>
  <v-card>
    <v-card-text>
      <h1>
        <v-alert dense :color="color" dark>{{ datos.titulo }}</v-alert>
      </h1>
      <v-form>
        <h4>Tecnologias utilizadas</h4>
        <v-icon
          x-large
          :color="color"
          v-for="(icon, index) of datos.tecnologias"
          :key="index"
        >
          {{ icon }}
        </v-icon>
        <br />
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h4>Descripción</h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-alert dark dense>
                <h5>{{ datos.descripcion }}</h5>
              </v-alert>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-btn text color="success" :href="datos.pagina" target="_blank">
          Página <v-icon>mdi-web</v-icon>
        </v-btn>
        <br />
        <v-btn
          text
          color="deep-purple"
          :href="datos.repositorio"
          target="_blank"
          :disabled="datos.privado"
        >
          Repositorio <v-icon>mdi-git</v-icon>
        </v-btn>
        <v-chip color="orange accent-4" v-if="datos.privado">
          <v-icon>mdi-alert</v-icon>Este repositorio es privado 🥷
        </v-chip>
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
