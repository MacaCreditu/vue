<template>
  <div id="app">
    <div class="header">
      <Buy/>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/new-collection" class="new"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Buy from '@/components/Buy.vue'

export default {
  name: 'App',
  components: {
    Buy
  }
}
</script>

<style>
@import './assets/css/style.css';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}
#nav a.router-link-exact-active {
  color: #cb023f;
}

#nav .new{
  background: url(/img/tag-new.png) top center no-repeat;
  background-size: 44px;
  width: 50px;
  display: inline-block;
  padding-top: 12px;
  padding-bottom: 6px;
}
</style>
