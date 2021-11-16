<template>
  <div class="mt-5">
    <v-container>
      <FormProyecto class="my-5" />
      <ListadoProyectos class="my-5" />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FormProyecto from "@/components/FormProyecto.vue";
import ListadoProyectos from "@/components/ListadoProyectos.vue";

export default Vue.extend({
  name: "Home",
  components: { FormProyecto, ListadoProyectos },
});
</script>
