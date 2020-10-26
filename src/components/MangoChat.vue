<template>
    <div>
      <b-container class="bv-example-row">
  <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
    <b-col>
      <section class="title">
      <h1 >MangoChat</h1>
      <h2>Chat App</h2>
      </section>
    </b-col>

    <b-col>
      <h4>Github link: <a href="https://github.com/iobasa/Obasa_I_ChatApp.git">MangoChat</a></h4>
    </b-col>

    <b-col>
        <b-embed type="video" controls>
    <source src="@/assets/MangoChat.webm" type="video/webm">
    <source src="@/assets/MangoChat.mp4" type="video/mp4">
  </b-embed>
    </b-col>

    <b-col>
      <section>
        <h3>Project description</h3>
      <p>Using Node, Express and Vue with socket.io to create an interactive chat application. Design an engaging skin for the application using HTML/CSS (and SASS); add transitions/interesting micro transactions using a combination of JS and CSS (you can use something like Greensock).</p>
      </section>
      
    </b-col>

    <b-col>
      <section>
        <h3>A chatting application</h3>
        <p>Using socket.io and VueJs I was able to connect users to be able to chat with one another from anywhere. I designed the site with more functionality to make it look nicer. Try it yourself with a friend: <a href="https://ife-test-chatapp.herokuapp.com/">MangoChat</a> </p>
      </section>
      
    </b-col>

     <b-col>
      <section>
        <h3>What I used:</h3>
        <p>This chatting application was made using HTML, SASS, VueJS, NodeJS, Express and socket.io.
        </p>
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
    padding-top: 15px;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
  }

   h3{
     margin-top: 30px;
    font-size: 2rem;
    font-weight: 1000;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

  h4{
    margin-top: 30px;
    font-size: 1.5rem;
    font-style: bold;
    font-weight: 1000;
    text-align: center;
  }

  b{
    color: #0C0F33;
    font-weight: 1000;
  }

  p{
    font-size: 1rem;
    color:#3F3D54;
  }

    a{
    color: #0C0F33;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
  }

  a:hover{
    border-bottom: 2px solid #DC9E82 ;
    text-decoration: none;
    color: #0C0F33;
    font-size: 1.5rem;
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
    padding-top: 15px;
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

  b{
    color: #0C0F33;
    font-weight: 1000;
  }

  p{
    font-size: 1.3rem;
    color:#3F3D54;
  }

    a{
    color: #0C0F33;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
  }

  a:hover{
    border-bottom: 4px solid #DC9E82 ;
    text-decoration: none;
    color: #0C0F33;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
  }

}
</style>