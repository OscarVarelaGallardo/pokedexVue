
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'

const pokemons = ref([]);
const router = useRouter()

const getPokemons = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`;
  const response = await fetch(url);
  const data = await response.json();
  pokemons.value = data.results;
};
const getDetails = async (id) => {
  router.push(`/details/${id}`)
};

onMounted(() => {
  getPokemons();
});

const formatNumber = (number) => {
  return `#${number.padStart(3, '0')}`
}
</script>

<template>
  <div class="q-pa-md
    q-gutter-md card-container">
    <div v-for=" pokemon in pokemons" :key="pokemon.name">
      <q-card class="my-card" v-on:click="
        getDetails(pokemon.url.split('/')[6])
        ">
        <q-img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`">
          <div style="
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height:10rem;
            max-height: 10%;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));">
          </div>
        </q-img>

        <q-card-actions class="poke-card-text">
          <div class="poke-card-title">
            {{ pokemon.name }}
          </div>{{ formatNumber(pokemon.url.split('/')[6]) }}
        </q-card-actions>
      </q-card>
    </div>

  </div>
</template>
