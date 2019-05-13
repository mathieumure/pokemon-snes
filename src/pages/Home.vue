<template>
  <main class="main">
    <h2>Ready to fight some pokemons ?</h2>
    <div class="links">
      <NesLink
        :to="route.to"
        :active="current === index"
        :key="index"
        @mouseenter.native="setActiveLink(index)"
        v-for="(route, index) in routes"
        >{{ route.label }}</NesLink
      >
    </div>
  </main>
</template>

<script>
import NesLink from "../components/NesLink.vue";

export default {
  name: "Home",
  components: {
    NesLink: NesLink
  },
  data() {
    return {
      current: 0,
      routes: [
        { to: "/fight", label: "Yeah, let's go to the battle !!!" },
        {
          to: "/pokedex",
          label: "Arf, no please let me see the pokedex instead!"
        }
      ]
    };
  },
  methods: {
    nextLink() {
      this.current = (this.current + 1) % 2;
    },
    previousLink() {
      this.current = Math.abs(this.current - 1) % 2;
    },
    setActiveLink(index) {
      console.log("setting", index);
      this.current = index;
    },
    handleKeyUp({ keyCode }) {
      if (keyCode === 40) {
        return this.nextLink();
      }
      if (keyCode === 38) {
        return this.previousLink();
      }
      if (keyCode === 13) {
        return this.$router.push(this.routes[this.current].to);
      }
    }
  },
  mounted() {
    document.addEventListener("keyup", this.handleKeyUp);
  },
  destroyed() {
    document.removeEventListener("keyup", this.handleKeyUp);
  }
};
</script>

<style lang="stylus" scoped>
.links
    display flex
    flex-direction: column
</style>
