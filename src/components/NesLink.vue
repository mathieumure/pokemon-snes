<template>
  <router-link :to="to" :class="{ selected: active }"><slot /></router-link>
</template>

<script>
export default {
  name: "Link",
  props: {
    to: null,
    active: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

  a
    margin-left 20px
    text-decoration none
    color: black
    position relative
    margin-bottom 10px
    &:hover
      color: black

.selected

  &:before
    animation: blink 1s infinite steps(1);
    position: absolute;
    left: -20px;
    content: "";
    width: 2px;
    height: 2px;
    color: #212529;
    box-shadow: 2px 2px, 4px 2px, 2px 4px, 4px 4px, 6px 4px, 8px 4px, 2px 6px, 4px 6px, 6px 6px, 8px 6px, 10px 6px, 2px 8px, 4px 8px, 6px 8px, 8px 8px, 10px 8px, 12px 8px, 2px 10px, 4px 10px, 6px 10px, 8px 10px, 10px 10px, 2px 12px, 4px 12px, 6px 12px, 8px 12px, 2px 14px, 4px 14px;
</style>
