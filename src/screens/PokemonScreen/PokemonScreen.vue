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
      <p>#{{ pokemonData.id }}</p>
    </div>
    <div id="container-white">
      <img
        :src="pokemonData.sprites.other.dream_world.front_default"
        class="container-image"
      />
      <img
        :src="pokemonData.sprites.front_default"
        class="container-image container-img-back"
      />
      <div class="container-flex">
        <div
          class="view-class"
          :class="{
            purple: isPurple,
            green: isGreen,
            red: isRed,
            lightPurple: isLightPurple,
            blue: isBlue,
            bug: isBug,
            eletric: isEletric,
            pink: isFary,
          }"
          v-if="pokemonData.types[0].type.name"
        >
          {{ pokemonData.types[0].type.name }}
        </div>
        <div
          class="view-class"
          v-if="pokemonData.types[1]?.type.name"
          :class="{
            purple: isPurple2,
            green: isGreen2,
            red: isRed2,
            lightPurple: isLightPurple2,
            blue: isBlue2,
            bug: isBug2,
            eletric: isEletric2,
            pink: isFary2,
          }"
        >
          {{ pokemonData.types[1]?.type.name }}
        </div>
      </div>
      <div class="view-mobile">
        <div class="container-information">
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
              <h1 class="view-name">Experi??ncia</h1>
            </div>
          </div>
        </div>
        <div class="container-information">
          <div class="container-flex">
            <p class="view-text">Status</p>
          </div>
          <div class="container-flex">
            <div class="container-collumn">
              <div class="view-text view-description">VIDA</div>
              <div class="view-text view-description">ATAQUE</div>
              <div class="view-text view-description">DEFESA</div>
              <div class="view-text view-description">ATAQUE ESPECIAL</div>
              <div class="view-text view-description">DEFESA ESPECIAL</div>
              <div class="view-text view-description">VELOCIDADE</div>
            </div>
            <div id="view-division"></div>
            <div class="container-collumn">
              <div class="view-text view-description color-black">
                {{ pokemonData.stats[0].base_stat }}
              </div>
              <div class="view-text view-description color-black">
                {{ pokemonData.stats[1].base_stat }}
              </div>
              <div class="view-text view-description color-black">
                {{ pokemonData.stats[2].base_stat }}
              </div>
              <div class="view-text view-description color-black">
                {{ pokemonData.stats[3].base_stat }}
              </div>
              <div class="view-text view-description color-black">
                {{ pokemonData.stats[4].base_stat }}
              </div>
              <div class="view-text view-description color-black">
                {{ pokemonData.stats[5].base_stat }}
              </div>
            </div>
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
  props: ["id", "pokemonData"],
  data() {
    return {
      pokemonProp: "Pokemon infos Prop",
      isPurple: false,
      isPurple2: false,
      isGreen: false,
      isGreen2: false,
      isRed: false,
      isRed2: false,
      isLightPurple: false,
      isLightPurple2: false,
      isBlue: false,
      isBlue2: false,
      isBug: false,
      isBug2: false,
      isEletric: false,
      isEletric2: false,
      isFary: false,
      isFary2: false,
    };
  },
  mounted() {
    if (this.pokemonProp) {
      this.pokemonProp = this.pokemonData;
      this.isPurple = this.pokemonData.types[0].type.name === "poison";
      this.isPurple2 = this.pokemonData.types[1]?.type.name === "poison";
      this.isGreen = this.pokemonData.types[0].type.name === "grass";
      this.isGreen2 = this.pokemonData.types[1]?.type.name === "grass";
      this.isRed = this.pokemonData.types[0].type.name === "fire";
      this.isRed2 = this.pokemonData.types[1]?.type.name === "fire";
      this.isLightPurple = this.pokemonData.types[0].type.name === "flying";
      this.isLightPurple2 = this.pokemonData.types[1]?.type.name === "flying";
      this.isBlue = this.pokemonData.types[0].type.name === "water";
      this.isBlue2 = this.pokemonData.types[1]?.type.name === "water";
      this.isBug = this.pokemonData.types[0].type.name === "bug";
      this.isBug2 = this.pokemonData.types[1]?.type.name === "bug";
      this.isEletric = this.pokemonData.types[0].type.name === "electric";
      this.isEletric2 = this.pokemonData.types[1]?.type.name === "electric";
      this.isFary = this.pokemonData.types[0].type.name === "fairy";
      this.isFary2 = this.pokemonData.types[1]?.type.name === "fairy";
    }
  },
};
</script>

<style scoped>
#container-body {
  padding-bottom: 10px;
  height: 100vh;
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
  height: 60vh;
}

.container-image {
  height: 200px;
  position: absolute;
  top: -7%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container-img-back {
  top: 70%;
}

.container-flex {
  display: flex;
  width: 100%;
  justify-content: center;
  color: black;
}

.view-class {
  padding: 20px 20px;
  height: 30px;
  background-color: #a8a77a;
  margin-right: 20px;
  border-radius: 10px;
  margin-top: 100px;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.purple {
  background-color: #a33da2;
}

.green {
  background-color: #7ac74c;
}

.red {
  background-color: #ee8130;
}

.lightPurple {
  background-color: #a891ec;
}

.blue {
  background-color: #6390f0;
}

.bug {
  background-color: #a6b91a;
}

.eletric {
  background-color: #f7d02c;
}

.pink {
  background-color: #d685ad;
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
  margin-top: 20px;
}

.container-collumn {
  flex-direction: column;
  align-items: center;
}

.container-flex-infos {
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
  flex-direction: column;
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

.view-mobile {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.container-information {
  margin-top: -100px;
}

.container-types {
  margin-top: 100px;
}
@media (max-width: 700px) {
  .view-mobile {
    display: initial;
  }

  .container-img-back {
    display: none;
  }

  .container-information {
    margin-top: 0;
  }

  .view-class {
    margin-top: 70px;
  }
  .container-flex-infos {
    flex-direction: row;
  }
  .container-infos {
    margin-top: 0px;
  }
}
</style>
