<template>
  <div class="body4">
   <div class="head3">
      <div class="titulo">
        <h2>
          Galeria Pokem<img class="opciones2" src="../descarga.png" alt="" />n
        </h2>
      </div>
      <div class="buton">
            <button class="btn btn-primary mt-3" @click="getPokemons(offset - 20)">
          Atras
        </button>
        <button @click="cargarMasPokemons()" class="btn btn-primary mt-3">
          Siguiente
        </button>
    
      </div>
    </div>
    <div class="body3">
      <div
        class="card2"
        style="width: 15rem"
        v-for="(poke, index) in pokemon"
        :key="index"
      >
        <div class="head2">
          <p>{{ poke.name }}</p>
          <p>#{{ poke.id }}</p>
        </div>

        <img
          :src="poke.sprites?.other.showdown.front_default"
          alt=""
          class="pokemon-image"
        />
        <div class="card-body">
          <p>Altura: {{ poke.height }}</p>
          <p>Defensa: {{ poke.defensa }}</p>
          <p>weight: {{ poke.weight }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

let pokemon = ref([]);

onMounted(async () => {
  try {
    let response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=20"
    );
    let pokemonsData = response.data.results;

    for (const pokemonData of pokemonsData) {
      let pokeDetailsResponse = await axios.get(pokemonData.url);
      let pokeDetails = pokeDetailsResponse.data;
      pokemon.value.push({
        name: pokeDetails.name,
        sprites: pokeDetails.sprites,
        height: pokeDetails.height,
        defensa: pokeDetails.stats[2].base_stat,
        id: pokeDetails.id,
        weight: pokeDetails.weight,
        abilities: pokeDetails.abilities,
      });
    }
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
});
let offset = 0;
const cargarMasPokemons = async () => {
  try {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=50&offset=${offset}`
    );
    let pokemonsData = response.data.results;

    offset += 20;

    pokemon.value = [];

    for (const pokemonData of pokemonsData) {
      let pokeDetailsResponse = await axios.get(pokemonData.url);
      let pokeDetails = pokeDetailsResponse.data;
      pokemon.value.push({
        name: pokeDetails.name,
        sprites: pokeDetails.sprites,
        height: pokeDetails.height,
        defensa: pokeDetails.stats[2].base_stat,
        id: pokeDetails.id,
        weight: pokeDetails.weight,
        abilities: pokeDetails.abilities,
      });

      if (pokemon.value.length === 20) {
        break;
      }
    }
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
};
const getPokemons = async (limit) => {
  if (limit < 0) return;

  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=50&offset=${limit}`
    );
    const pokemonsData = response.data.results;

    pokemon.value = [];

    for (const pokemonData of pokemonsData) {
      let pokeDetailsResponse = await axios.get(pokemonData.url);
      let pokeDetails = pokeDetailsResponse.data;
      pokemon.value.push({
        name: pokeDetails.name,
        sprites: pokeDetails.sprites,
        height: pokeDetails.height,
        defensa: pokeDetails.stats[2].base_stat,
        id: pokeDetails.id,
        weight: pokeDetails.weight,
        abilities: pokeDetails.abilities,
      });

      if (pokemon.value.length === 20) {
        break;
      }
    }

    offset = limit;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
.titulo h2 {
     font-family: 'Luckiest Guy', cursive;
}
.btn {
  /* margin-bottom: 20px; */
  border-radius: 10px;
  padding: 5px 15px;
  width: 20vh;
  background-color:  rgba(231, 22, 67, 0.482);
}
.buton {
  display: flex;
  gap: 50px;
  
}
.head {
  height: 28vh;
}
.head2 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.card-body {
  width: 100%;
  background-image: linear-gradient(
    to right,
    #ea1b1b90,
    rgba(231, 22, 67, 0.338)
  );
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 20px;
}
.pokemon-image {
  width: 40px;
  height: 60px;
  /* border-radius: 50%; */
  margin-bottom: 10px;
}

.body4 {
  background-image: linear-gradient(
    to right,
    royalblue,
    rgba(231, 22, 67, 0.718)
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 140px;
  flex-direction: column;
}
.body3 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px;
}
.body4 h2 {
  position: relative;
  top: 12vh;
  color: rgba(255, 0, 0, 0.63);
}

.card2 {
  text-align: center;

  height: auto;
  font-size: 20px;
  position: relative;
  top: 10vh;
  background-color: white;
  box-shadow: 1px 2px 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Luckiest Guy', cursive;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.opciones2 {
  height: 50px;
  width: 55px;
  border-radius: 50%;
}
iframe {
  width: 80px; /* Ancho del iframe */
  height: 100px; /* Altura del iframe */
  margin-left: 20px; /* Ajuste de margen para separar el iframe del título */
}
.head3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35vh;
  
}
.titulo{
  height: 40vh;
}
</style>
