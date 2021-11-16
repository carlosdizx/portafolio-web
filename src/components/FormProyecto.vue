<template>
  <v-card>
    <v-card-text><h1>Formulario de registro de proyectos</h1></v-card-text>
    <v-card-text>
      <v-form>
        <v-text-field outlined dense label="Titulo" />
        <v-combobox
          outlined
          dense
          multiple
          hint="En formato mdi"
          label="Tecnologias"
          small-chips
        ></v-combobox>
        <v-textarea outlined dense label="Descripcion" />
        <v-text-field outlined dense label="Pagina" />
        <v-text-field outlined dense label="Repositorio" />
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
