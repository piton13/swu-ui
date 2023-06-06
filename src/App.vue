<template>
  <nav class="navigation">
    <router-link to="/" class="navigation_home">SWUG+Logo</router-link>
    <router-link to="/about" class="navigation_about">About</router-link>
    <router-link to="/contacts" class="navigation_contacts">Contacts</router-link>
<!--    <router-link to="/hello-world">HW</router-link>-->
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
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  /*align-items: baseline;*/
  align-items: center;
}
.navigation+.main-content {
  padding-top: 110px; /* sticky navigation: 70px - height of navigation + paddings 2*20 */
}

.navigation_home,
.navigation_about,
.navigation_contacts {

}

.navigation_home {
  flex-grow: 10;
}

.navigation_about {
  flex-grow: 2;
}

.navigation_contacts {
  flex-grow: 2;
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
