<template>
  <div>
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import Body from "../../components/Body/Body.vue";

export default {
  name: "Home-screen",
  components: {
    Header,
    Body,
  },
};
</script>

<style scoped></style>
