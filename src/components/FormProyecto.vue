<template>
  <v-card>
    <v-card-title>Formulario de registro de proyectos</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Titulo" />
        <v-combobox
          outlined
          dense
          multiple
          hint="En formato mdi"
          label="Tecnologias"
          small-chips
        ></v-combobox>
        <v-textarea label="Descripcion" />
        <v-text-field label="Pagina" />
        <v-text-field label="Repositorio" />
      </v-form>
      <v-card-text>
        <v-btn color="success">Registrar</v-btn>
      </v-card-text>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FormProyecto",
};
</script>

<style scoped></style>
