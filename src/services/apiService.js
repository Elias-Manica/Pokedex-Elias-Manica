import axios from "axios";

async function getPokemons(initialId, finalId) {
  let endPoints = [];
  for (let i = initialId; i <= finalId; i++) {
    endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }
  const response = await axios.all(
    endPoints.map((endPoints) => axios.get(endPoints))
  );
  return response;
}

async function searchPokemon(name) {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${name}/`
  );
  return response;
}

export { getPokemons, searchPokemon };
