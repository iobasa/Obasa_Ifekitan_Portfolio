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

         <b-nav-item href="/about">About Me</b-nav-item>
         <b-nav-item href="/skillset">Skillset</b-nav-item>
         <b-nav-item href="/contact">Contact Me</b-nav-item>


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
    color: #C16E70;
}

    #logo img{
        width: 40%;
    }

    .header {
	font-size: 20px;
    font-family: 'raleway', sans-serif;
    font-weight: 1000;

  }
  .header a {
    color: #C16E70!important;
    font-size: 1.5rem;
    padding-right: 5px;
    text-decoration: none;
  }
  .header a:hover {
    color:  #0C0F33!important;
  }
</style>