<template>
  <q-layout class="body4">
    <q-page-container class="card-container">
      <q-card v-for="(poke, index) in pokemon" :key="index" class="card">
        <q-card-section>
          <div>
            <p>{{ poke.name }}</p>
            <p>#{{poke.id}}</p>
            <img :src="poke.sprites?.other.showdown.front_default" alt="" class="pokemon-image" />
            <p>Ataque: {{ poke.height }}</p>
            <p>Defensa: {{ poke.defensa }}</p>
          </div>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

let pokemon = ref([]);

onMounted(async () => {
  try {
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=50");
    let pokemonsData = response.data.results;

    for (const pokemonData of pokemonsData) {
      let pokeDetailsResponse = await axios.get(pokemonData.url);
      let pokeDetails = pokeDetailsResponse.data;
      pokemon.value.push({
        name: pokeDetails.name,
        sprites: pokeDetails.sprites,
        height: pokeDetails.height,
        defensa: pokeDetails.stats[2].base_stat,
        id:pokeDetails.id
      });
    }
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
});
</script>

<style scoped>
.body4 {
  background-image: url(../hola2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 50px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-content: center;
  padding: 50px;
  gap: 50px;
}

.card {
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  position: relative;
  top: 10vh;
  background-color: rgb(98, 98, 235);
}
</style>
