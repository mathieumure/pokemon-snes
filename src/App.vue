<template>
  <div id="app">
    <header class="header">
      <h1 class="title">
        <router-link to="/"
          ><i class="nes-pokeball" />Spring boot to kotlin</router-link
        >
      </h1>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
<style lang="stylus">
@import "~nes.css/css/nes.min.css";

#app
    display flex
    flex-direction column
    min-height 100vh

.title
    a
        text-decoration none;
        display flex
        align-items center
        color: initial;
    i
        margin-right 25px

.header
    padding 15px 25px
    border-bottom: solid 4px #D3D3D3

.main
    flex: 1 0 auto;
    padding 30px 25px 0px 25px
</style>
