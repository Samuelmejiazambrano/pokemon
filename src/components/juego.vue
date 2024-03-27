<template>
  <q-layout class="body4">
    <div class="card" style="width: 80rem">
      <img :src="pokemon.sprites?.other.dream_world.front_default" alt="" class="darken-image" />

      <div class="card-body">
        <h5>#{{ pokemon.id }}</h5>
        <h5 class="card-title">Ataque:{{ ataque }}</h5>
        <h5>Defensa:{{ defensa }}</h5>
        <button @click="traer()">traer</button>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
let img = ref({});
let pokemon = ref("");
let ataque = ref("");
let defensa = ref("");
async function traer() {
  try {
    let random = Math.random();
    random = parseInt(random * 500 + 1);
    let r = await axios.get("https://pokeapi.co/api/v2/pokemon/" + random);
    pokemon.value = r.data;
    img.value = r.data.sprites.front_default;
    ataque.value = r.data.stats[1].base_stat;
    defensa.value = r.data.stats[2].base_stat;
    console.log(r.data);
  } catch (error) {
    console.log(error);
  }
}
traer();
</script>
<style scoped>
.body4 {
  background-image: url(../hola.jpg);
  background-repeat: no-repeat;
  background-size: cover; /* Ajusta el tamaño de la imagen para cubrir toda la pantalla */
  background-position: center; /* Centra la imagen de fondo */
  width: 100%;
  height: 100vh; /* Establece la altura del layout al 100% del viewport */
  display: flex;
  justify-content: center;
  align-items: center;
}
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  gap: 30px;
  height: 60%;
  width: 50%;
  flex-direction: column;
  background-color: rgb(255, 38, 0);
}
.image-container img {
  width: 500px;
  height: 250px;
}
.datos {
  display: flex;
  gap: 20px;
  border: 2px solid black;
  width: 100%;
  height: 0%;
}
.card {
  padding: 10px;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card img {
  width: 500px;
  height: 350px;
  
}
.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  top: 5%;
  color: black;
}
.darken-image {
  width: 100%;
  height: 100%;
  filter: brightness(0.0); /* Oscurecer la imagen al 70% del brillo original */
}
</style>
