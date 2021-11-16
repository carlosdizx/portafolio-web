<template>
  <div class="mt-5">
    <ListadoProyectos />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ListadoProyectos from "@/components/ListadoProyectos.vue";

export default Vue.extend({
  name: "Home",
  components: { ListadoProyectos },
});
</script>
