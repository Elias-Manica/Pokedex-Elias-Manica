<template>
  <div>
    <Header :search="search" :findPokemon="findPokemon" />
    <Body :listPokemons="listPokemons" />
    <div
      v-if="listPokemons.length"
      v-observe-visibility="handleScrollToBottom"
    ></div>
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import Body from "../../components/Body/Body.vue";

import { ObserveVisibility } from "vue-observe-visibility";

import { getPokemons, searchPokemon } from "../../services/apiService";

export default {
  name: "Home-screen",
  directives: {
    ObserveVisibility,
  },
  components: {
    Header,
    Body,
  },
  data() {
    return {
      listPokemons: [],
      search: "",
      initialId: 1,
      lastId: 20,
    };
  },
  created() {
    getPokemons(this.initialId, this.lastId).then((response) => {
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
          getPokemons(1, 20).then((response) => {
            this.listPokemons = response;
          });
        });
    },
    handleScrollToBottom(isVisible) {
      if (!isVisible) {
        return;
      }
      this.initialId = this.initialId + 20;
      this.lastId = this.lastId + 20;
      getPokemons(this.initialId, this.lastId).then((response) => {
        this.listPokemons = [...this.listPokemons, ...response];
      });
    },
  },
};
</script>

<style scoped></style>
