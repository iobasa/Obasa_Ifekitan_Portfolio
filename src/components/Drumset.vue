<template>
    <div>
      <b-container class="bv-example-row">
  <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
    <b-col>
      <section class="title">
      <h1 >Drumset</h1>
      <h2>Using Keys to create music</h2>
      </section>
    </b-col>

    <b-col>
      <h4>Github link: <a href="https://github.com/iobasa/Obasa_Ifekitan_Drumset.git">Drumset</a></h4>
    </b-col>

    <b-col>
        <b-embed type="video" controls>
    <source src="@/assets/drumset.webm" type="video/webm">
    <source src="@/assets/drumset.mp4" type="video/mp4">
  </b-embed>
    </b-col>

    <b-col>
      <section>
        <h3>Project description</h3>
        <p>To create a collection of sounds which can be operated using the keyboard </p>
      </section>
      
    </b-col>

    <b-col>
      <section>
        <h4>Using audio in javascript</h4>
        <p>After the sound has been played then the then the transisiton of the animation ends using 'transition ends' in javascript</p>
      </section>
      
    </b-col>

     <b-col>
      <section>
        <h3>What I used:</h3>
        <p>HTML, CSS and JavaScript</p>
      </section>
      
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