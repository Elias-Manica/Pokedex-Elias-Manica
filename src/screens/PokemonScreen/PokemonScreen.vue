<template>
  <div id="container-body">
    <div id="container-top-bar">
      <div id="container-name">
        <router-link
          :to="{
            name: 'Home',
          }"
        >
          <div id="container-icon">
            <menu-icon />
          </div>
        </router-link>
        <p>{{ pokemonData.name }}</p>
      </div>
      <p>#{{ indexProp }}</p>
    </div>
    <div id="container-white">
      <img
        :src="pokemonData.sprites.other.dream_world.front_default"
        id="container-image"
      />
      <div class="container-flex">
        <div id="view-class" v-if="pokemonData.types[0].type.name">
          {{ pokemonData.types[0].type.name }}
        </div>
        <div id="view-class" v-if="pokemonData.types[1]?.type.name">
          {{ pokemonData.types[1]?.type.name }}
        </div>
      </div>
      <div class="container-flex">
        <p class="view-text">Sobre</p>
      </div>
      <div class="container-flex container-flex-infos">
        <div class="view-infos">
          <div class="container-infos">
            <wheight-icon />
            <p>{{ pokemonData.weight / 10 }} KG</p>
          </div>
          <h1 class="view-name">Peso</h1>
        </div>
        <div class="view-infos">
          <div class="container-infos">
            <ruler-icon />
            <p>{{ pokemonData.height / 10 }} m</p>
          </div>
          <h1 class="view-name">Tamanho</h1>
        </div>
        <div class="view-infos">
          <div class="container-infos">
            <star-icon />
            <p>{{ pokemonData.base_experience }}</p>
          </div>
          <h1 class="view-name">Experiência</h1>
        </div>
      </div>
      <div class="container-flex">
        <p class="view-text">Status</p>
      </div>
      <div class="container-flex">
        <div class="container-collumn">
          <div class="view-description view-text">HP</div>
          <div class="view-description view-text">ATK</div>
          <div class="view-description view-text">DEF</div>
          <div class="view-description view-text">SATK</div>
          <div class="view-description view-text">SDEF</div>
          <div class="view-description view-text">SPD</div>
        </div>
        <div id="view-division"></div>
        <div class="container-collumn">
          <div class="view-description view-text color-black">
            {{ pokemonData.stats[0].base_stat }}
          </div>
          <div class="view-description view-text color-black">
            {{ pokemonData.stats[1].base_stat }}
          </div>
          <div class="view-description view-text color-black">
            {{ pokemonData.stats[2].base_stat }}
          </div>
          <div class="view-description view-text color-black">
            {{ pokemonData.stats[3].base_stat }}
          </div>
          <div class="view-description view-text color-black">
            {{ pokemonData.stats[4].base_stat }}
          </div>
          <div class="view-description view-text color-black">
            {{ pokemonData.stats[5].base_stat }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/ArrowLeft.vue";
import WheightIcon from "vue-material-design-icons/Weight.vue";
import RulerIcon from "vue-material-design-icons/Ruler.vue";
import StarIcon from "vue-material-design-icons/Star.vue";

export default {
  name: "Pokemon-screen",
  components: {
    MenuIcon,
    WheightIcon,
    RulerIcon,
    StarIcon,
  },
  props: ["indexPokemon", "pokemonData"],
  data() {
    return {
      indexProp: "Index Pokemon",
      pokemonProp: "Pokemon infos Prop",
    };
  },
  mounted() {
    if (this.indexProp) {
      this.indexProp = this.indexPokemon;
      this.pokemonProp = this.pokemonData;
    }
  },
};
</script>

<style scoped>
#container-body {
  padding-bottom: 10px;
}

#container-top-bar {
  display: flex;
  height: 20vh;
  justify-content: space-between;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
}

#container-name {
  display: flex;
}

#container-icon {
  margin-right: 20px;
  cursor: pointer;
  color: #fff;
}

#container-white {
  background-color: #fff;
  width: 96%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 19vh;
  position: relative;
}

#container-image {
  height: 200px;
  position: absolute;
  top: -7%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container-flex {
  display: flex;
  width: 100%;
  justify-content: center;
  color: black;
}

#view-class {
  padding: 20px 20px;
  height: 30px;
  background-color: aqua;
  margin-right: 20px;
  border-radius: 10px;
  margin-top: 70px;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.view-text {
  color: black;
  margin-top: 20px;
  color: #74cb48;
  font-weight: 500;
}

.views-fonts {
  font-size: 12px;
}

.container-infos {
  display: flex;
  align-items: center;
}

.container-collumn {
  flex-direction: column;
  align-items: center;
}

.container-flex-infos {
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
}

.view-name {
  color: #666666;
  text-align: center;
  margin-top: 5px;
  font-size: 12px;
}

.view-description {
  margin-top: 10px;
  margin-bottom: 10px;
}

#view-division {
  height: 140px;
  width: 2px;
  background: #e0e0e0;
  margin: 20px 20px 0px 20px;
}

.color-black {
  color: black;
  font-weight: 400;
}
</style>
