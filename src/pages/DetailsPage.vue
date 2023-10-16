<script setup>
const COLORS = {
  fire: '#FDDFDF',
  grass: '#5E9866',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
};
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()
const id = ref(null)
const detailsPokemon = ref({})

onMounted(() => {
  id.value = router.currentRoute.value.params.id
  getDetailsPokemon(id)
})
const getDetailsPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id.value}`;
  const response = await fetch(url);
  const data = await response.json();
  detailsPokemon.value[1] = data;

};

const formatNumber = (number) => {
  return `#${number.padStart(3, '0')}`
}
</script>

<template>
  <div class="poke-details-container">

    <div class="q-pa-md row items-start q-gutter-md">
      <q-btn label="Regresar " color="primary" @click="router.go(-1)"></q-btn>
      <q-card class="my-card" v-for=" pokemon in detailsPokemon" :key="pokemon.name" s :style="`background-image:linear-gradient(to right , ${COLORS[pokemon.types[0]?.type.name]} , ${COLORS[pokemon.types[1]?.type.name] ? COLORS[pokemon.types[1]?.type.name] : COLORS[pokemon.types[0]?.type.name]
        } );`">
        <div class="poke-details-card-top">
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`">
          <q-card-section>
            <div id="number" class="poke-details-number">
              {{ formatNumber(pokemon.id.toString()) }}
            </div>
            <div class="poke-details-name">{{
              pokemon.name }}
              <div class="text-h6" style="text-align: center;">Tipo</div>
              <div class="poke-details-btn">
                <div class="text-h6" style="text-align: center;
                ">{{ pokemon.types[0]?.type.name }}</div>
                <div class="text-h6" style="text-align: center;">{{ pokemon.types[1]?.type.name }}</div>
              </div>
            </div>

          </q-card-section>


        </div>

        <q-card-section class="poke-details-border  q-pt-none" style="background-color: #fffefefc;
         border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          margin-top:20px;
          shadow: 0 0 20px rgba(0, 0, 0, 0.2);">
          <div class="poke-details-bottom-title">Estadisticas</div>
          <div class="poke-details-bottom">
            <div class="text-h6">HP</div>
            <div class="text-h6">{{
              pokemon.stats[0]?.base_stat }}</div>

            <div class="text-h6">Attack</div>
            <div class="text-h6">
              {{
                pokemon.stats[1]?.base_stat }}</div>


            <div class="text-h6">Defense</div>
            <div class="text-h6">{{
              pokemon.stats[2]?.base_stat }}</div>

            <div class="text-h6">Sp. Atk</div>
            <div class="text-h6">{{
              pokemon.stats[3]?.base_stat }}</div>

            <div class="text-h6">Sp. Def</div>
            <div class="text-h6">{{
              pokemon.stats[4]?.base_stat }}</div>

            <div class="text-h6">Speed</div>
            <div class="text-h6">
              {{
                pokemon.stats[5]?.base_stat }}


            </div>
          </div>
          <div class="poke-details-bottom-title">Habilidades
          </div>
          <div class="poke-details-bottom">
            <div class="text-h6">
              {{
                pokemon.abilities[0]?.ability.name }}


            </div>
            <div class="text-h6">
              {{
                pokemon.abilities[1]?.ability.name }}
            </div>
          </div>

          <div class="poke-details-bottom-title ">Movimientos</div>
          <div class="poke-details-bottom">
            <div class="text-h6">
              {{
                pokemon.moves[0]?.move.name }}

            </div>
            <div class="text-h6">
              {{
                pokemon.moves[1]?.move.name }}
            </div>
            <div class="text-h6">
              {{
                pokemon.moves[2]?.move.name }}
            </div>
            <div class="text-h6">
              {{
                pokemon.moves[3]?.move.name }}
            </div>
            <div class="text-h6">
              {{
                pokemon.moves[4]?.move.name }}
            </div>
            <div class="text-h6">
              {{
                pokemon.moves[5]?.move.name }}
            </div>
          </div>





        </q-card-section>
      </q-card>

    </div>
  </div>
</template>
