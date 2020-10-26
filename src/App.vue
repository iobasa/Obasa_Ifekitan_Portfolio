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
  font-family: "raleway", sans-serif;
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

  h1{
    font-size: 6rem;
    font-weight: 1000;
    font-style: italic;
    text-align: center;
    text-shadow: 4px 4px #E7C9AE;
  }

  h2{
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
  }

   h3{
    font-size: 3rem;
    font-weight: 1000;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

  h4{
    font-size: 1.5rem;
    font-style: bold;
    font-weight: 1000;
    text-align: center;
  }

  .navbar-light .navbar-toggler{
    border-color: none;
    border: none;
  }

  .navbar-toggler-icon{
    width: 2.5em;
    height: 2em;
  }

  p{
    font-size: 1.3rem;
    font-weight: 500;
    text-align: left;
  }

</style>
