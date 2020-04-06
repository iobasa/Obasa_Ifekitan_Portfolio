<template>
    <div>
      <b-container class="bv-example-row">
  <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
    <b-col>
      <section class="title">
      <h1 >Valentine's Infographic</h1>
      <h2>An interactive infographic based on Valentine's day</h2>
      </section>
    </b-col>

    <b-col>
        <b-img center src="@/assets/valentine.jpg" fluid alt="Fluid image"></b-img>
    </b-col>

    <b-col>
      <section>
        <h3>Project description</h3>
        <p>The basis was a side voluntary project to make an interactive infographic based on Valentin's day flowers</p>
      </section>
      
    </b-col>

    <b-col>
      <section>
        <h4>Valentine's!!!</h4>
        <p>When you click on each flower, information will show up about the amount of people that get it per year.</p>
      </section>
      
    </b-col>

     <b-col>
      <h4>What I used:</h4>
        <p>HTML5, CSS3, SASS, Javascript, NodeJS and Express</p>
        </b-col>
  </b-row>
</b-container>  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
     .title{
     font-size: 1rem;
    font-weight: 700;
    text-shadow: 4px 4px #e8d7d5;
  }

  h1{
    font-size: 6rem;
    font-weight: 700;
    font-style: italic;
    text-align: center;
    text-shadow: 4px 4px #D76C6E;
  }

  h2{
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

   h3{
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

  h4{
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 700;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }
</style>