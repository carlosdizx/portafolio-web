<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import navbar from "@/components/Navbar/navbar.vue";
export default Vue.extend({
  name: "App",
  components: { navbar },

  data: () => ({
    //
  }),
});
</script>
