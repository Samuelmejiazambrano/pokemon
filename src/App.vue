<template>
  <q-layout view="hHh lpR fFf" class="body">
    <q-header class="opciones">
      <div>
        <img class="logo" src="./dash.webp" alt="" />
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/25.gif" alt=""></div>
     
      <div class="opciones3">
        <div class="opciones2">
          <img src="./inicio.webp" alt="" />
          <router-link class="link" to="/">Inicio</router-link>
        </div>
        <div class="opciones2">
          <img src="./descarga.png" alt="" />
          <router-link class="link" to="/pokemon">Pokedex</router-link>
        </div>
        <div class="opciones2">
          <img src="./pikachu2.jpg" alt="" />
          <router-link class="link" to="/juego">Juego</router-link>
        </div>
      </div>
    </q-header>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>

.opciones {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgb(226, 30, 30);
}
.link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: black;
}

.opciones2 {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2px;
  color: white;
}
.opciones2 img {
  height: 50px;
  width: 55px;
  border-radius: 50%;
}
.opciones2:hover {
  border: 1px solid black;
  background-color: rgb(172, 154, 154);
  
}
.logo {
  height: 80px;
}
.opciones3 {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

}
.page-container {
  padding-top: 0 !important; /* Sobrescribe el padding-top */
}
</style>
