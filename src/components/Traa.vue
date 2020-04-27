<template>
    <div>
      <b-container class="bv-example-row">
  <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
    <b-col>
      <section class="title">
      <h1 >Thames River Anglers Association</h1>
      <h2>Re-design of the site</h2>
      </section>
    </b-col>

       <b-col>
      <h4>Github link: <a href="https://github.com/Edi-Guti/Gutierrez_Obasa_Final_IP.git">TRAA</a></h4>
    </b-col>

    <b-col>
      <section>
       <h4>Group Project</h4>
       <p>Designer: Edguardo Gutierrez</p>
       <p>Developer: Ifekitan Obasa</p>
      </section>
      
    </b-col>

    <b-col>
        <b-embed type="video" controls>
    <source src="@/assets/traa.webm" type="video/webm">
    <source src="@/assets/traa.mp4" type="video/mp4">
  </b-embed>
    </b-col>

    

    <b-col>
      <section>
        <h3>Project description</h3>
        <p>The Thames River Anglers Association is a fully responsive website for volunteers, members and anyone willing to join and experience an eco friendly, non-profit organization that helps to preserve wild life. The website is to keep you informed of events, projects and monthly newsletters with fully functional navigation bars and links to different sources on each page.</p><br>
      </section>
      
    </b-col>

    <b-col>
      <section>
        <h3>Task</h3>
        <h4>Re-designing and coding the site</h4>
        <p>The look of the site was rather old and didn't have much functionality. <strong>Link to site: <a href="http://www.anglers.org/index.html" target="_blank">anglers.org</a></strong><br><br>
        I decided to make sure that the design was very minimalistic becuase there was alot of information on the inital site and I didn't want viewers to be overwhelmed. A plain white background with some of the colors used on their website as accents really helped to shap the website and decluster it.
        </p>
      </section>
      
    </b-col>
     <b-col>
      <section>
        <h3>What I used:</h3>
        <p>This website website was coded using HTML, CSS and Javascript for functionality, such as the gallery functionality and the Dropdown navigation. </p>
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
    font-size: 3.3rem;
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