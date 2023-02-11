<template>
  <main>
    <div class="container-cards" v-if="listPokemons.length >= 6">
      <a v-for="(pokemons, index) in listPokemons" :key="index">
        <router-link
          :to="{
            name: 'Pokemon',
            params: {
              pokemonData: pokemons.data,
            },
          }"
        >
          <CardPokemon
            :name-pokemon="pokemons.data.name"
            :picture-url="pokemons.data.sprites.other.dream_world.front_default"
            :number-pokemon="pokemons.data.id"
          />
        </router-link>
      </a>
    </div>
    <div v-else class="container-cards container-one-card">
      <a v-for="(pokemons, index) in listPokemons" :key="index">
        <router-link
          :to="{
            name: 'Pokemon',
            params: {
              pokemonData: pokemons.data,
            },
          }"
        >
          <CardPokemon
            :name-pokemon="pokemons.data.name"
            :picture-url="pokemons.data.sprites.other.dream_world.front_default"
            :number-pokemon="pokemons.data.id"
          />
        </router-link>
      </a>
    </div>
  </main>
</template>

<script>
import CardPokemon from "../Card/Card.vue";

export default {
  name: "Body-",
  components: {
    CardPokemon,
  },
  props: {
    listPokemons: Array,
  },
};
</script>

<style scoped>
.container-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 60px;
}

.container-one-card {
  height: 100vh;
}
</style>
