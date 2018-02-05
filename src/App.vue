<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br/>
    <router-link v-bind:to="'/'">HomePage</router-link>
    <router-link v-bind:to="'hello'">HelloWorld</router-link>
    <router-link v-bind:to="'todo'">TodoApp</router-link>
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
