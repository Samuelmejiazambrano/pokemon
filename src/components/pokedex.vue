

<template>
  <q-layout view="hHh lpR fFf" class="padre">
  

    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="container">
      <div class="info">
        <div class="descripcion">
          <div class="image-container">
            <img
              :src="pokemon.sprites?.other.dream_world.front_default"
              alt=""
            />
          </div>
          <div class="especificacion">
            <h5>
              Numero:<b>{{ pokemon.id }}</b>
            </h5>
            <h5>
              Nombre:<b>{{ pokemon.name }}</b>
            </h5>
            <h5>
              Altura:<b>{{ pokemon.height }}</b>
            </h5>
            <h5>
              Peso:<b>{{ pokemon.weight }}</b>
            </h5>
          </div>
        </div>

        <div class="estadistica">
          <div class="q-pa-md">
            <p>Ataque:{{ ataque }}%</p>
            <q-linear-progress :value="ataque2" class="q-mt-md" />

            <p>Ataque Especial:{{ especialataque }}%</p>
            <q-linear-progress
              :value="especialataque2"
              color="secondary"
              class="q-mt-sm"
            />
            <p>Defensa:{{ especialdefensa }}%</p>
            <q-linear-progress
              :value="especialdefensa2"
              rounded
              color="accent"
              class="q-mt-sm"
            />
            <p>Velocidad:{{ velocidad }}%</p>
            <q-linear-progress
              :value="velocidad2"
              rounded
              color="purple"
              track-color="orange"
              class="q-mt-sm"
            />
          </div>
        </div>
        <div class="traer">
          <button class="buton" @click="traer()">Traer Pokemon </button>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
let poke = ref("");
let pokemon = ref({});
let img = ref({});
let ataque = ref({});
let ataque2 = ref({});
let defensa = ref({});
let defensa2 = ref({});
let especialataque = ref({});
let especialataque2 = ref({});
let especialdefensa = ref({});
let especialdefensa2 = ref({});
let velocidad = ref({});
let velocidad2 = ref({});

async function traer() {
  try {
    let random = Math.random();
    random = parseInt(random * 500 + 1);
    let r = await axios.get("https://pokeapi.co/api/v2/pokemon/" + random);
    pokemon.value = r.data;
    console.log(r.data);
    img.value = r.data.sprites.front_default;
    ataque.value = r.data.stats[1].base_stat;
    ataque2.value = ataque.value / 100;
    defensa.value = r.data.stats[2].base_stat;
    defensa2.value = defensa.value / 100;
    especialataque.value = r.data.stats[3].base_stat;
    especialataque2.value = especialataque.value / 100;
    especialdefensa.value = r.data.stats[4].base_stat;
    especialdefensa2.value = especialdefensa.value / 100;
    velocidad.value = r.data.stats[5].base_stat;
    velocidad2.value = velocidad.value / 100;

  } catch (error) {
    console.log(error);
  }

}
traer()
async function buscar() {
  try {
    let r = await axios.get("https://pokeapi.co/api/v2/pokemon/" + poke.value);
    pokemon.value = r.data;
  } catch (error) {
    console.log(error);
  }
      
}

</script>

<style scoped>

.container {

 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  /* display: grid;
  grid-template-rows: 60% 40%; */
}
.info {
   max-width: 800px;
  width: 80%;
  height: auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-image: linear-gradient(to right, #f03709, rgba(231, 231, 22, 0.842));

    padding: 30px; /* Reducido el padding a 30px */
  border-radius: 20px;
  box-shadow: 3px 2px 6px 2px rgba(0, 0, 0, 0.3);
  /* flex-direction: column ; */
}
.info button {
  padding: 15px 30px; /* Reducido el padding del botón */
  font-size: 18px; /* Aumentado el tamaño de la letra del botón */
}
/* .estadistica {
  
} */
.especificacion {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
font-weight: bold; 
}
.especificacion b {
  color: black;
}
.descripcion {
  display: flex;
  padding: 10px;
  flex-direction: row;
  gap: 120px;
  justify-content: center;
  align-items: center;
  border: 4px solid;
  background-color: #2b2a2a64;
  border-radius: 10px;
  padding: 30px; 
  gap: 60px;
}
.traer {
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.traer button {
  width: 30vh;
  height: 7vh;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: #ff4500;
  border: 1px solid #4e4e4e;
}
.header {
  background-color: #ff4500;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
}

.image-container {
  width: 500px;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container img {
  width: 500px;
  height: 300px;
}
.estadistica {
  font-size: 20px;
  color: rgb(240, 234, 234);
}
.header-input {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.header-input label {
  margin-right: 10px;
  
}
.icono{
  position: absolute;
  left:  20px;
}
.header-input input::placeholder {
  font-size: 15px;
text-align: center;
text-align: center;
}
.header-input input {
 width: 40vh;
 border-radius: 10px;
}
.header-input  button{
  width: 15vh;
  border-radius: 10px;
}
.padre{
  background-image: url(../descarga2.png);
  background-repeat: no-repeat;
  background-size: cover; /* Ajusta el tamaño de la imagen para cubrir toda la pantalla */
  background-position: center; /* Centra la imagen de fondo */
  width: 100%;
  height: 150vh; /* Establece la altura del layout al 100% del viewport */
}
.buton:hover {
  background-color: red;
}
</style>
