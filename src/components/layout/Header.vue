<template>
    <header class="header">

      <div>
  <b-navbar toggleable="lg" class="nav" >
    <b-navbar-brand href="/" id="logo">
       <img src="@/assets/logo.svg"/>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

         <b-nav-item href="/about">ABOUT ME</b-nav-item>
         <b-nav-item href="/skillset">SKILLSET</b-nav-item>
         <b-nav-item href="/contact">CONTACT ME</b-nav-item>


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</div>

    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
.nav{
background-color: transparent;

}

.nav-link a{
    color: black;
}

    #logo img{
        width: 40%;
    }

    .header {
	font-size: 20px;
    font-family: 'raleway', sans-serif;
    font-style: italic;
    font-weight: 1000;

  }
  .header a {
    color: black!important;
    text-shadow: 2px 2px #e8d7d5;
    font-size: 20px;
    padding-right: 5px;
    text-decoration: none;
  }
  .header a:hover {
    color: black!important;
    text-shadow: 2px 2px #D76C6E;
  }
</style>