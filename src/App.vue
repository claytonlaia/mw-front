<template>
  <v-app>
    <v-app-bar app color="#4B0082" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Master da Web"
          class="shrink mr-2"
          contain
          src="https://www.masterdaweb.com/images/logo-white-blue.png"
          transition="scale-transition"
          width="120"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
