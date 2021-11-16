<template>
  <v-card>
    <v-card-text><h1>Formulario de registro de proyectos</h1></v-card-text>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="titulo"
          :color="color"
          outlined
          dense
          label="Titulo"
        />
        <v-combobox
          v-model="tecnologias"
          outlined
          dense
          multiple
          hint="En formato mdi"
          label="Tecnologias"
          small-chips
          :color="color"
        />
        <v-textarea
          v-model="descripcion"
          :color="color"
          outlined
          dense
          label="Descripcion"
        />
        <v-text-field
          v-model="pagina"
          :color="color"
          outlined
          dense
          label="Pagina"
          type="url"
        />
        <v-switch
          v-model="privado"
          :color="color"
          label="Este repositorio es privado"
        />
        <v-text-field
          v-model="repositorio"
          :color="color"
          outlined
          dense
          label="Repositorio"
          type="url"
        />
        <div class="text-center">
          <v-btn
            @click="registrarProyecto"
            class="white--text"
            :color="color"
            block
          >
            Registrar
          </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import { REGISTRAR_PROYECTO } from "@/services/recursos/proyectos";
export default {
  name: "FormProyecto",
  data: () => ({
    titulo: "",
    tecnologias: [],
    descripcion: "",
    pagina: "",
    repositorio: "",
    privado: false,
  }),
  computed: {
    ...mapState(["color"]),
  },
  methods: {
    async registrarProyecto() {
      const datos = {
        titulo: this.titulo,
        tecnologias: this.tecnologias,
        descripcion: this.descripcion,
        pagina: this.pagina,
        repositorio: this.repositorio,
        privado: this.privado,
      };
      await REGISTRAR_PROYECTO(datos);
      this.titulo = "";
      this.tecnologias = [];
      this.descripcion = "";
      this.pagina = "";
      this.repositorio = "";
      this.privado = false;
    },
  },
};
</script>

<style scoped></style>
