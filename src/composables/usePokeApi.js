import { ref } from 'vue'

export default function usePokeApi() {
  const pokemons = ref([])
  const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()
    pokemons.value = data.results

  }
  return {
    pokemons,
    getPokemons
  }


}
