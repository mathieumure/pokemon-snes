<template>
  <main class="main">
    <h3>Fighter 1</h3>
    <div class="nes-select">
      <select v-model="pokemon1">
        <option :value="null" disabled selected hidden
          >Choose your first pokemon...</option
        >
        <option
          :value="pokemon.id"
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          >{{ pokemon.name }}</option
        >
      </select>
    </div>
    <h3>Fighter 2</h3>
    <div class="nes-select">
      <select v-model="pokemon2">
        <option :value="null" disabled selected hidden
          >Choose your second pokemon...</option
        >
        <option
          :value="pokemon.id"
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          >{{ pokemon.name }}</option
        >
      </select>
    </div>
    <button
      type="button"
      class="nes-btn is-success"
      @click="launchFight"
      v-show="battleStatus === 'ENDED'"
    >
      Fight !
    </button>
    <p v-if="battleStatus === 'TO_START'">
      {{ firstPokemonName }} and {{ secondPokemonName }} are getting out of
      their pokeballs...
    </p>
    <p v-if="battleStatus === 'PENDING'">
      {{ firstPokemonName }} and {{ secondPokemonName }} are now fighting...
    </p>
    <p v-if="winner">And {{ winner.name }} wins the fight!!!</p>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Fight",
  data() {
    return {
      pokemons: [],
      loading: true,
      pokemon1: null,
      pokemon2: null,
      fightId: "",
      battleStatus: "ENDED",
      winner: null
    };
  },
  computed: {
    firstPokemonName() {
      if (this.pokemons && this.pokemon1) {
        return this.pokemons.find(it => it.id === this.pokemon1).name;
      }
      return null;
    },
    secondPokemonName() {
      if (this.pokemons && this.pokemon2) {
        return this.pokemons.find(it => it.id === this.pokemon2).name;
      }
      return null;
    }
  },
  methods: {
    async launchFight() {
      const response = await axios.get(
        `/pokemons/${this.pokemon1}/vs/${this.pokemon2}`
      );
      this.fightId = response.data.id;
      this.battleStatus = response.data.battleStatus;
      this.winner = response.data.winner;
      setTimeout(() => this.pollFight(), 1000);
    },
    async pollFight() {
      const response = await axios.get(`/pokemons/battle/${this.fightId}`);
      this.fightId = response.data.id;
      this.battleStatus = response.data.battleStatus;
      this.winner = response.data.winner;
      if (!response.data.winner) {
        setTimeout(() => this.pollFight(), 1000);
      }
    }
  },
  async mounted() {
    this.loading = true;
    const result = await axios.get("/pokemons");
    this.pokemons = result.data;
  }
};
</script>

<style scoped></style>
