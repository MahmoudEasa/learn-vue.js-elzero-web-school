<template>
  <div id="app">
    <AppHeaderVue />
    <router-view />
  </div>
</template>

<script>
import AppHeaderVue from "./components/global/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeaderVue,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
