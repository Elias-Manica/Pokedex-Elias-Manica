import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../screens/HomeScreen/HomeScreen";
import Pokemon from "../screens/PokemonScreen/PokemonScreen";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemon",
    name: "Pokemon",
    component: Pokemon,
    props: true,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
