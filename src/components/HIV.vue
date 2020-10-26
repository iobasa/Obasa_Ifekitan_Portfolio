<template>
    <div>
      <b-container class="bv-example-row">
  <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
    <b-col>
      <section class="title">
      <h1 >Meet HIV</h1>
      <h2>Campaign for educating Gen-Z on HIV</h2>
      </section>
    </b-col>

    <b-col>
      <h4>Github link: <a href="https://github.com/iobasa/Al-Osman_Azores_Dronfield_Kaur_Obasa_FIP.git">Meet HIV</a></h4>
    </b-col>

    <b-col>
      <section>
       <h4>Group Project</h4>
       <p>Designer: Nour Al-Osman</p>
        <p>Illustrator: Taylor Dronfield</p>
         <p>Motion Designer: Prahbjot Kaur</p>
          <p>Project Manager/Front-End Developer: Mikka Azores</p>
       <p>Back-End Developer: Ifekitan Obasa</p>
      </section>
      
    </b-col>

    <b-col>
        <b-embed type="video" controls>
    <source src="@/assets/hiv.webm" type="video/webm">
    <source src="@/assets/hiv.mp4" type="video/mp4">
  </b-embed>
    </b-col>

    <b-col>
      <section>
        <h3>Project description</h3>
        <p>The objective of this project is for our team to design, develop and pitch a professional marketing, advertising campaign and website for a campaign to educate teenagers on HIV</p>
      </section>
      
    </b-col>

    <b-col>
      <section>
        <h3>Creating a login page</h3>
        <p>As the back-end developer of the team it was my job to create the database for dynamic content(values which could change). I made use of WAMP as my server and implemented the skills I have learnt in PHP and MySQL to my best knowledge to allow users to login into the site, create other users, edit their own account and delete their other accounts</p>
      </section>
      
    </b-col>

     <b-col>
      <section>
        <h3>What I used:</h3>
        <p>This website was made HTML, SASS, VanillaJS, PHP, MySQL and Vuejs and WAMP</p>
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