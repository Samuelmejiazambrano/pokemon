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

   background-image: linear-gradient(to right, #ea1b1b, #94b4b4c7, rgba(14, 230, 212, 0.781));
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
  
  background-color: rgba(224, 216, 216, 0.645);
  
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
