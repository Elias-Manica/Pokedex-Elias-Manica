<template>
  <div id="app">
    <HomeScreen />
  </div>
</template>

<script>
import "./assets/styles/global.css";

import HomeScreen from "./screens/HomeScreen/HomeScreen.vue";

export default {
  name: "App",
  components: {
    HomeScreen,
  },
};
</script>
