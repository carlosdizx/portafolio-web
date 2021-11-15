<template>
  <v-app>
    <navbar id="navbar" />
    <v-main id="main">
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
