import axios from "axios";

async function getPokemons() {
  let endPoints = [];
  for (let i = 1; i <= 12; i++) {
    endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }
  const response = await axios.all(
    endPoints.map((endPoints) => axios.get(endPoints))
  );
  return response;
}

export { getPokemons };
