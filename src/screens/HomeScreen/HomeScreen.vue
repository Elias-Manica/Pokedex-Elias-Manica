<template>
  <div>
    <Header :search="search" :findPokemon="findPokemon" />
    <Body :listPokemons="listPokemons" />
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import Body from "../../components/Body/Body.vue";

import { getPokemons, searchPokemon } from "../../services/apiService";

export default {
  name: "Home-screen",
  components: {
    Header,
    Body,
  },
  data() {
    return {
      listPokemons: [],
      search: "",
    };
  },
  mounted() {
    getPokemons(1, 14).then((response) => {
      this.listPokemons = response;
    });
  },
  methods: {
    findPokemon(name) {
      searchPokemon(name)
        .then((response) => {
          this.listPokemons = [response];
        })
        .catch(() => {
          getPokemons(1, 14).then((response) => {
            this.listPokemons = response;
          });
        });
    },
  },
};
</script>

<style scoped></style>
