<template>
  <div id="app">
    <img
      src="@/assets/img/logo.png"
      alt="Vue logo"
    />
    <HelloWorld msg="Hello Vue 2 + Vite" />
    서브서브서브서브서브
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
};
</script>

<style>
body {background:#000;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>