<template>
  <nav class="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-link to="/hello-world">HW</router-link>
  </nav>
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <router-view class="main-content"></router-view>

  <footer class="footer">
    There will be some information here. Or some contact details.
  </footer>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
body {
  margin: 0;

  overflow-y: scroll;
  overflow-x: hidden;
}

body,
html {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  /*margin-top: 60px;*/

  height: 100%;
}

.navigation,
.main-content,
.footer {
  padding: 20px;
  box-sizing: border-box;
}

.navigation {
  height: 70px;
  text-align: left;
  background-color: aquamarine;

  /* sticky navigation */
  position: fixed;
  top: 0;
  width: 100%
}
.navigation+.main-content {
  padding-top: 110px; /* sticky navigation: 70px - height of navigation + paddings 2*20 */
}

.main-content {
  /* make content fix 100% of free space */
  overflow: auto;
  min-height: 79%;
  height: 100%;
  height: auto;
}

.footer {
  height: 150px;
  text-align: left;
  background-color: skyblue;
}
</style>
