<template>
    <div>
      <b-container class="bv-example-row">
  <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
    <b-col>
      <section class="title">
      <h1 >Harry &amp; Harry</h1>
      <h2>Collaboration with Northern Commerce</h2>
      </section>
    </b-col>

    <b-col>
      <h4>Github link: <a href="https://github.com/iobasa/Harry-Harry.git">Harry &amp; Harry</a></h4>
    </b-col>

    <b-col>
        <b-embed type="video" controls>
    <source src="@/assets/harry.webm" type="video/webm">
    <source src="@/assets/harry.mp4" type="video/mp4">
  </b-embed>
    </b-col>

    <b-col>
      <section>
        <h3>Project description</h3>
        <p>Creating a new Shopify store based on a niche market selected by me. This store will use a premade free theme from Shopify, but with various customizations and custom features built by me.</p>
      </section>
      
    </b-col>

    <b-col>
      <section>
        <h4>Developing the collections and my niche</h4>
        <p>For my niche, I chose a samll wine company owned by friends. I designed the logo, the mockups and the pictures of the owners were stock photos.
          <br><br>
          Using liquid, a shopify template coding language, I was able to code sections and snippets which were used in the site.<br><br>
          For example, the summer promotion page was was coded in liquid, I used sections to include things like the promo boxes and the products!

          Check it out here <a href="https://ife-fanshawe.myshopify.com/">Shopify store</a>
          </p>
      </section>
      
    </b-col>

     <b-col>
      <section>
        <h3>What I used:</h3>
        <p>HTML, SASS and Liquid</p>
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