
<script setup>
import { defineComponent, ref } from "vue";

const text = ref("");


const buscarPokemon = () => {

};


</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn round @click="$router.push('/')">
          <q-avatar class="avatar-pokebola">
            <img src="https://i.pinimg.com/originals/a7/73/64/a773645c4ef8e7c77eee0f70e3e9e5a4.jpg">
          </q-avatar>
        </q-btn>
        <q-toolbar-title class="header-title">
          Pokeweak
        </q-toolbar-title>
        <form class="form" @submit.prevent="buscarPokemon">
          <q-input rounded outlined v-model="text" value="text" class="form-input" label="
          Buscar pokemon.....">
          </q-input>
          <q-btn label="Buscar" type="submit" color="primary" class="form-btn"></q-btn>
        </form>
        <q-btn round @click="$q.dark.toggle()">
          <q-avatar class="avatar-pokebola">

            <img src="/icons/modo-oscuro.png">
          </q-avatar>
        </q-btn>

        <q-btn round @click="$router.push('/info')">
          <q-avatar class="avatar-pokebola">
            <img src="/icons/huevo.png">
          </q-avatar>
        </q-btn>

      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

