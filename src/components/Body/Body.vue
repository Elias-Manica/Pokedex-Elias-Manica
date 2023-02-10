<template>
  <main>
    <div id="container-cards">
      <CardPokemon
        v-for="(pokemons, index) in listPokemons"
        :key="index"
        :name-pokemon="pokemons.data.name"
        :picture-url="pokemons.data.sprites.other.dream_world.front_default"
        :number-pokemon="index"
      />
    </div>
  </main>
</template>

<script>
import CardPokemon from "../Card/Card.vue";

import { getPokemons } from "../../services/apiService.js";

export default {
  name: "Body-",
  components: {
    CardPokemon,
  },
  data() {
    return {
      listPokemons: [],
    };
  },
  mounted() {
    getPokemons().then((response) => {
      this.listPokemons = response;
    });
  },
};
</script>

<style scoped>
#container-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 60px;
}
</style>
