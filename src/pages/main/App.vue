<template>
  <div id="app">
    <img
      src="@/assets/img/logo.png"
      alt="Vue logo"
    >
    
    <HelloWorld msg="Hello Vue 2 + Vite" />
    <TestAsync />
    <div class="banner" />
    <div>asdasdd</div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
const TestAsync = () => import(/* webpackChunkName: "TestAsync" */ "@/components/TestAsync.vue");
export default {
  components: {
    HelloWorld,
    TestAsync
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.banner {
  width:100%;
  height:128px;
  background:url("@/assets/img/banner.png") no-repeat 50% 0;
}
</style>