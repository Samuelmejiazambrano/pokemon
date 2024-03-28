<template>
  <q-layout class="body4">
    <h2>
      Galeria Pokem<img class="opciones2" src="../descarga.png" alt="" />n
    </h2>

    <q-page-container class="card-container">
      <q-card v-for="(poke, index) in pokemon" :key="index" class="card">
        <q-card-section>
          <div>
            <div class="head">
              <div class="head2">
                <p>{{ poke.name }}</p>
                <p>#{{ poke.id }}</p>
              </div>
              <img
                :src="poke.sprites?.other.showdown.front_default"
                alt=""
                class="pokemon-image"
              />
            </div>
            <div class="info">
              <p>Ataque: {{ poke.height }}</p>
              <p>Defensa: {{ poke.defensa }}</p>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-layout>
</template>