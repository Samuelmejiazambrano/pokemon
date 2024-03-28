<template>
  <q-layout class="body4">
    <div class="card">
      <div class="img">
        <img
          :src="pokemon.sprites?.other.dream_world.front_default"
          alt="Pokemon Image"
          class="pokemon-image"
        />
        <input
          v-model="info"
          type="text"
          placeholder="Adivina el pokemon"
          class="input"
        />
        <button class="button" @click="buscar()">buscar</button>
        <div class="card-body">
          <h5>#{{ pokemon.id }}</h5>
          <h5>#{{ pokemon.name }}</h5>
          <h5 class="card-title">Ataque: {{ ataque }}</h5>
          <h5>Defensa: {{ defensa }}</h5>
        </div>
      </div>
      <audio>
        <source src="../img_6652.mp3" type="audio/mpeg" />

        hhghhh
      </audio>
      <audio class="audio">
        <source src="../no-creeeeo.mp3" type="audio/mpeg" />
        hhghhh
      </audio>

      <button class="button2" @click="traer()">Volver a jugar</button>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

let img = ref({});
let pokemon = ref({});
let ataque = ref("");
let defensa = ref("");
let info = ref("");
let adivinado = ref(true);
async function traer() {
  try {
    let random = Math.floor(Math.random() * 500) + 1; // Genera un número aleatorio entre 1 y 500
    let r = await axios.get("https://pokeapi.co/api/v2/pokemon/" + random);
    pokemon.value = r.data;
    img.value = r.data.sprites.front_default;
    ataque.value = r.data.stats[1].base_stat;
    defensa.value = r.data.stats[2].base_stat;
    console.log(r);
    const pokemonImage = document.querySelector(".pokemon-image");
    pokemonImage.style.filter = "brightness(0.0)";
  } catch (error) {
    console.log(error);
  }
}
async function buscar() {
  if (pokemon.value.name === info.value) {
    console.log("ganador");
    const pokemonImage = document.querySelector(".pokemon-image");
    pokemonImage.style.filter = "brightness(1.0)";
    Swal.fire({
      title: "¡Ganador!",
      text: "Has adivinado correctamente el Pokémon",
      imageUrl: pokemon.value.sprites?.other.showdown.front_default,
      imageAlt: "Imagen del Pokémon",
      background: "#ffab03",
    });

    console.log(pokemon.sprites?.other.dream_world.front_default);
  } else {
    console.log("pailas");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡Pokemon equivocado!",
      background: "#ffab03",
      iconColor: "red",
      textColor: "black",
    });
    const audioPlayer = document.querySelector(".audio");
    audioPlayer.play();
  }
}
onMounted(() => {
  traer();
  const audioPlayer = document.querySelector("audio");
  audioPlayer.play();
});

traer(); // Llama a la función para obtener un Pokémon aleatorio al cargar la página
</script>

<style scoped>
.body4 {
  background-image: linear-gradient(
    to top,
    royalblue,
    rgba(231, 22, 67, 0.718)
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card {
  width: 60rem;
  height: 40rem;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-image: url(../quien_es_ese_pokemon.jpg);
  border-radius: 10px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  /* margin-left: 140px; */
  gap: 10px;
 
}

.pokemon-image {
  width: 200px;
  height: 200px;

  margin-bottom: 20px;
  margin-right: 70px;
  position: relative;
  filter: brightness(0);
}

.input {
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 5px;
  text-align: center;
   margin-right: 70px;
}

.card-body {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  /* margin-right: 200px; */
  align-items: center;
  gap: 20px;
  color: rgb(17, 16, 16);
  font-family: "Luckiest Guy", cursive;
  background-color: rgba(241, 232, 232, 0.486);
}
/* .card-body>*{
    display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(241, 232, 232);
  height: 5vh;
  border-radius: 20%;
  padding: 5px;
} */

.button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fffefe;
  background-color: #4072abd1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
   margin-right: 70px;
   width: 40%;
}
.button2 {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #bec6cfe9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 550px;
  margin-left: 250px;
}
.button2:hover {
  background-color: #d8dce18a;
}

.button:hover {
  background-color: rgba(255, 0, 0, 0.838);
}
iframe {
  width: 100px; /* Ancho del iframe */
  height: 100px; /* Altura del iframe */
  margin-left: 20px; /* Ajuste de margen para separar el iframe del título */
  border-radius: 80%;
}

@media (max-height: 900px) {
  .body4 {
    width: 100%;
    height: 140vh; /* Establece la altura del layout al 100% del viewport */
  }

  .image-container img {
    width: 100%; /* Ajustar el ancho */
    height: 80%; /* Altura automática */
  }
}
</style>
