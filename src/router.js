import VueRouter from "vue-router";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Fight from "./pages/Fight";

const routes = [
  { path: "/", component: Home },
  { path: "/pokedex", component: Pokedex },
  { path: "/fight", component: Fight },
  { path: "", redirect: "/" }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
