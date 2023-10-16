
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'

const pokemons = ref([]);
const router = useRouter()
const text = ref("");
const showPokemon = ref(true);
const pokeSearch = ref([]);
const noData = ref(true);

const searchPokemon = async () => {
  text.value = text.value.toLowerCase();
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${text.value}`;
    const response = await fetch(url);
    const data = await response.json();
    pokeSearch.value = data;
    showPokemon.value = false;
    noData.value = true;
    text.value = "";
  } catch (error) {
    noData.value = false;
    showPokemon.value = false;
    text.value = "";
    pokeSearch.value = [];
  }


};

const setValues = () => {

};

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
  <div class="container-form">
    <form class="form" @submit.prevent="searchPokemon">
      <q-input rounded outlined v-model="text" value="text" class="form-input" label="
          Buscar pokemon.....">
      </q-input>
      <q-btn label="Buscar" type="submit" color="primary" class="form-btn"></q-btn>
    </form>
  </div>

  <div class="q-pa-md q-gutter-md card-container" v-show="showPokemon">

    <div v-for=" pokemon in pokemons" :key="pokemon.name">
      <q-card class="my-card" v-on:click="
        getDetails(pokemon.url.split('/')[6])
        ">
        <q-img class="poke-card-img"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`">
        </q-img>

        <q-card-actions class="poke-card-text">
          <div class="poke-card-title">
            {{ pokemon.name }}
          </div>{{ formatNumber(pokemon.url.split('/')[6]) }}
        </q-card-actions>
      </q-card>
    </div>
  </div>

  <div class="q-pa-md q-gutter-md " style="display: flex; justify-content: center; align-items: center;
    flex-direction: column;" v-show="!showPokemon">
    <q-btn class="q-mb-md" color="secondary" label="Regresar" v-show="!showPokemon" @click="showPokemon = true">

    </q-btn>
    <q-card class="my-card" v-on:click="
      getDetails(pokeSearch.id)">

      <q-img class="poke-card-img"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeSearch.id}.png`">
      </q-img>
      <q-card-actions class="poke-card-text">
        <div class="poke-card-title">
          {{ pokeSearch.name ?? " Pokemon no encontrado" }}



        </div>

        <div class="poke-card-title">

        </div>
      </q-card-actions>

    </q-card>

  </div>

  <div v-show="!showPokemon">
    <q-card v-show="!noData" class="my-card">


    </q-card>
  </div>
</template>
