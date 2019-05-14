<template>
  <main class="main">
    <h2>Pokedex</h2>
    <section class="pokedex">
      <p v-show="pokemons.length === 0" style="margin-top: 30px">
        Loading please wait...
      </p>
      <section
        class="nes-container with-title"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        <h3 class="title">{{ pokemon.name }}</h3>
        <div class="line">
          <img :src="`/pokemon/main-sprites/platinum/${pokemon.id}.png`" />
          <p class="side-text">Id: {{ pokemon.id }}</p>
        </div>
        <p>
          Types:
          <span
            class="pokemon-types nes-text"
            :class="{ 'is-primary': index === 0, 'is-success': index === 1 }"
            v-for="(type, index) in pokemon.types"
            :key="type"
            >{{ type }}</span
          >
        </p>
        <p>Height: {{ pokemon.height }}</p>
        <p>Weight: {{ pokemon.weight }}</p>
        <p>Base Experience: {{ pokemon.baseExperience }}</p>

      </section>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Pokedex",
  data() {
    return {
      pokemons: [],
      loading: true
    };
  },
  async mounted() {
    this.loading = true;
    const result = await axios.get("/pokemons");
    this.pokemons = result.data;
  }
};
</script>

<style lang="stylus" scoped>
.pokedex
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-gap 10px
.line
  display flex
  align-items center
.side-text
  text-align center
  flex-grow 1
  margin-bottom 0
.pokemon-types
  margin-right 10px
</style>
