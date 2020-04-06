<template>
  <div id="app">
    <headers />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <go-top></go-top>
    <footers/>
  </div>
</template>

<script>
// @ is an alias to /src
import headers from '@/components/layout/Header.vue';
import footers from '@/components/layout/footers.vue';
// import masonry from '@/components/masonry.vue';
import GoTop from '@inotom/vue-go-top';

export default {
  name: 'Home',
  components: {
    headers,
    footers,
    GoTop
    // masonry
  }
}
</script>

<style lang="scss">
#app {
  font-family: "poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
