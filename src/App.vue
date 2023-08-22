<template>
  <the-navbar />
  <home-page />
  <the-footer />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import HomePage from "./views/HomePage.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    HomePage,
    TheFooter,
  },
};
</script>

<style>
#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #0b0b22;
}
</style>
