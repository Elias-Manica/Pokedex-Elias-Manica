<template>
  <header>
    <nav class="container">
      <div id="container-flex">
        <a> <img src="../../assets/image/pokedex.png" id="logo" /></a>
        <input
          type="text"
          :value="search"
          id="input-search"
          placeholder="Procure por um Pokemon"
          @input="
            $emit('input', findPokemon($event.target.value.toLowerCase()))
          "
        />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header-topbar",
  props: {
    search: String,
    findPokemon: Function,
  },
};
</script>

<style scoped>
header {
  height: 120px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: #eb0707;
  z-index: 1;
}

#logo {
  height: 70px;
  padding-top: 10px;
}

#input-search {
  background: #ebebeb;
  width: 70%;
  height: 40px;
  border-radius: 50px;
  padding: 12px 18px;
}

#container-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

nav {
  display: flex;
  justify-content: center;
}
</style>
