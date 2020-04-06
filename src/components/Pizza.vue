<template>
    <div>

        <b-container class="bv-example-row">
  <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
    <b-col>
      <section class="title">
      <h1 >Pizza Infographic</h1>
      <h2>An Interactive Infographic on popular pizza toppings</h2>
      </section>
    </b-col>

    <b-col>
      <h4>Github link: <a href="https://github.com/iobasa/Obasa_Ifekitan_Interactive.git">Pizza Infographic</a></h4>
    </b-col>

    <b-col>
        <b-embed type="video" controls>
    <source src="@/assets/Interactive-Video.webm" type="video/webm">
    <source src="@/assets/Interactive-Video.mp4" type="video/mp4">
  </b-embed>
    </b-col>

    <b-col>
      <section>
        <h3>Project description</h3>
        <p>The basis of this assignment is to take complex information – statistics, research results, data comparison, forms, charts, analysis, etc., – and present it in the most efficient and easily understood way possible. The specific difference between this form of design and traditional infographics is the dynamic nature of the interactive information design. In this context the complexity of information can parse both live and static content from a variety of sources with real-time results. This data could be drawn from data bases, user inputs, algorithms, etc.,<br><br>

With the added feature of interactivity, information design can engage users in new and interesting ways that traditional mediums, both static and dynamic, have been limited in achieving. The added benefit of vector based design comes with the inherent flexibility due to the algorithm of that graphic type. All aspects of it can be targeted and manipulated to any desired outcome.</p>
      </section>
      
    </b-col>

    <b-col>
      <section>
        <h4>Dynamic Content and Interactivity</h4>
        <p>Using handlebars I was able to create dynamic content that connected to a database to retrieve information based on which icon is clicked, each of the icons have been given unique is used to call back to the database</p>
      </section>
      
    </b-col>

    <b-col>
      <h4>What I used:</h4>
        <p>HTML5, CSS3, SASS, Javascript, NodeJS and Express</p>
        </b-col>

        

         


    <b-col>
      <h3>Infographic</h3>
      <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="2">
    <b-col><b-img  src="@/assets/infographic.svg" fluid alt="Fluid image"></b-img></b-col>
    <b-col>
        <section class="sticky">
        <p>The infographic was made in illustrator.</p>
    <p class="title">Designed and Illustrated by me</p>
    <p class="title">Based of this <a href="">source</a></p>
    </section>
    </b-col>
  </b-row>
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

    .sticky{
        position: -webkit-sticky;
  position: sticky;
  
  top: 0;
    }

    .sticky p{
        margin-top: 30px;
    }

</style>