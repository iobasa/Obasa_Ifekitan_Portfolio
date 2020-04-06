<template>
    <div>
      <b-container class="bv-example-row">
  <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
    <b-col>
      <section class="title">
      <h1 >Roku Flashback</h1>
      <h2>A movie, tv and audio streaming app</h2>
      </section>
    </b-col>

    <b-col>
      <h4>Github link: <a href="https://github.com/iobasa/Al-Osman_N_Obasa_I_Roku-Flashback.git">Roku Flashback</a></h4>
    </b-col>

    <b-col>
        <b-embed type="video" controls>
    <source src="@/assets/roku.webm" type="video/webm">
    <source src="@/assets/roku.mp4" type="video/mp4">
  </b-embed>
    </b-col>

    <b-col>
      <section>
        <h3>Project description</h3>
        <p>Creating a streaming app. A user should be able to log in, filter and select a movie, tv show, or audio based on user profile (adult or kids). This means that you’ll have to restrict access to some content based on age or ratings, and your users will need rights and priveleges as well. The UX / UI should update based on the user (children / adults) - create 2 themes, and render the appropriate theme on login. Part of the API that you’re building should allow a user to comment on the selection, rate it, and share via social media.</p>
      </section>
      
    </b-col>

    <b-col>
      <section>
        <h4>The movie and audio streaming</h4>
        <p>Using VueJs I am able to create an audio and visual streaming app which can be used by anyone. </p>
      </section>
      
    </b-col>

     <b-col>
      <section>
        <h4>What I used:</h4>
        <p>HTML, CSS, SASS, VueJS, NodeJS, Express</p>
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