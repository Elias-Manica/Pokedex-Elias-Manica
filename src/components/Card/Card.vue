<template>
  <div id="layout-card">
    <div id="layout-down-card">
      <img :src="pictureUrl" id="img-pokemon" />
    </div>
    <div id="layout-name">
      <p>#{{ numberPokemon + 1 }}</p>
      <p>{{ namePokemon }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card-pokemon",
  props: {
    namePokemon: String,
    pictureUrl: String,
    numberPokemon: Number,
  },
};
</script>

<style scoped>
#img-pokemon {
  height: 170px;
  width: 170px;
  margin-bottom: 40px;
}

#layout-card {
  height: 170px;
  width: 170px;
  position: relative;
  margin: 20px 5px;
  transform: scale(0.9);
  transition: all ease 0.2s;
  cursor: pointer;
}

#layout-card:hover {
  transform: scale(1);
  cursor: pointer;
}

#layout-down-card {
  width: 100%;
  height: 80%;
  background: linear-gradient(52.41deg, #ffe1c6 4.87%, #ffcb05 94.37%);
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 10px;
  left: 0;
}

#layout-name {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000;
  padding: 10px;
  border-radius: 0px 0px 20px 20px;
  position: absolute;
  bottom: -20px;
  left: 0;
}
</style>
