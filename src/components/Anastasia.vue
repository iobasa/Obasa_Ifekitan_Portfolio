<template>
    <div>
      <b-container class="bv-example-row">
  <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
    <b-col>
      <section class="title">
      <h1 >Aesthetic Anastasia</h1>
      <h2>A blog website</h2>
      </section>
    </b-col>

    <b-col>
        <b-embed type="video" controls>
    <source src="@/assets/ana-video.webm" type="video/webm">
    <source src="@/assets/ana-video.mp4" type="video/mp4">
  </b-embed>
    </b-col>

    <b-col>
      <section>
        <h3>Project description</h3>
        <p>Create a three (3) page website using HTML/CSS.
The design must be an HTML5 fixed-width site utilizing CSS floats as the primary method of layout.</p>
      </section>
      
    </b-col>

    <b-col>
      <section>
        <h4>The basics: HTML and CSS</h4>
        <p>I was able to code a blog website using only HTML and CSS, some of photos were taken by me and I also designed the website. I tried to go for a more aesthetically pleasing website with a simple layout and basic design. Easy to navigate. </p>
      </section>
      
    </b-col>

     <b-col>
      <section>
        <h4>What I used:</h4>
        <p>HTML and CSS</p>
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
    color: #151E3F;
    font-size: 3.5rem;
    font-weight: 1000;
    font-style: italic;
    text-align: center;
    text-shadow: 4px 4px #E7C9AE;
  }

  h2{
    
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

   h3{
    font-size: 2rem;
    font-weight: 1000;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

  h4{
    font-size: 2rem;
    font-style: italic;
    font-weight: 1000;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

  b{
    color: #0C0F33;
    font-weight: 1000;
  }

  p{
    color:#3F3D54;
  }

    a{
    color: #0C0F33;
    font-size: 1.3rem;
    font-weight: 800;
    text-align: left;
  }

  a:hover{
    border-bottom: 2px solid #DC9E82 ;
    text-decoration: none;
    color: #0C0F33;
    font-size: 1.3rem;
    font-weight: 800;
    text-align: left;
  }


@media screen and (min-width: 64em) {
     .title{
     font-size: 1rem;
    font-weight: 700;
    text-shadow: 4px 4px #e8d7d5;
  }

  h1{
    color: #151E3F;
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
    text-shadow: 4px 4px #e8d7d5;
  }

   h3{
    font-size: 3rem;
    font-weight: 1000;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

  h4{
    font-size: 2rem;
    font-style: italic;
    font-weight: 1000;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

  b{
    color: #0C0F33;
    font-weight: 1000;
  }

  p{
    color:#3F3D54;
  }

    a{
    color: #0C0F33;
    font-size: 1.3rem;
    font-weight: 800;
    text-align: left;
  }

  a:hover{
    border-bottom: 2px solid #DC9E82 ;
    text-decoration: none;
    color: #0C0F33;
    font-size: 1.3rem;
    font-weight: 800;
    text-align: left;
  }

}
</style>