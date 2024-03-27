import Inicio from "../components/inicio.vue"
import Pokedex from "../components/pokedex.vue"
import Juego from "../components/juego.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", component: Inicio },
    { path: "/pokemon", component: Pokedex },
    { path: "/juego", component: Juego }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
