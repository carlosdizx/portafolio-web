<template>
  <v-app>
    <Navbar id="navbar" />
    <v-main id="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
export default Vue.extend({
  name: "App",
  components: { Navbar },

  data: () => ({
    //
  }),
});
</script>
