<template>
    <div>
<b-container class="bv-example-row">
  <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
    <b-col>
      <section class="title">
      <h1 >MusicMixer</h1>
      <h2>A musical Menagerie</h2>
      </section>
    </b-col>

    <b-col>
      <h4>Github link: <a href="https://github.com/nalosman/AlOsman_N_Obasa_I_MusicMixer.git">MusicMixer</a></h4>
    </b-col>

    <b-col>
        <b-embed type="video" controls>
    <source src="@/assets/MusicMixer.webm" type="video/webm">
    <source src="@/assets/MusicMixer.mp4" type="video/mp4">
  </b-embed>
    </b-col>

    <b-col>
      <section>
        <h3>Project description</h3>
        <p>Using vanilla Javascript to create a drag and drop function that plays the right audio and animates the movement of the corresponding images</p>
      </section>
      
    </b-col>

    <b-col>
      <h4>How to Play</h4>
      <p><br><br>Choose and icon from the eight below &amp; drag it onto the left panel<br><br>
Music relating to the icon will start to play, and a fun illustration will pop onto the canvas<br><br>
A maximum of 5 icons can be used at a time<br><br>
To empty out the canvas, press the Reset Button<br><br>
Watch the magic unfold and enjoy 🌈 🦄 🔮</p>
</b-col>

    <b-col>
      <h3>Draggable Icons</h3>
      <b-row cols="1" cols-sm="1" cols-md="3" cols-lg="3">
    <b-col><b-img  src="@/assets/mermaidIcon.svg" fluid alt="Fluid image"></b-img></b-col>
    <b-col><b-img  src="@/assets/whaleIcon.svg" fluid alt="Fluid image"></b-img></b-col>
    <b-col><b-img  src="@/assets/crashingwavesIcon.svg" fluid alt="Fluid image"></b-img></b-col>
  </b-row>
    </b-col>


    <b-col>
      <p>The icons are svgs which are dragged to a section where they will stick to and their music will start playing for each of them.</p>
    </b-col>

    <b-col>
       <h3>Moving Images</h3>
      <b-row cols="1" cols-sm="1" cols-md="3" cols-lg="3">
    <b-col><b-img center src="@/assets/mermaid.png" fluid alt="Fluid image"></b-img></b-col>
    <b-col><b-img center src="@/assets/whale.png" fluid alt="Fluid image"></b-img></b-col>
    <b-col><b-img center src="@/assets/roughWaves.png" fluid alt="Fluid image"></b-img></b-col>
  </b-row>
    </b-col>

    <b-col>
      <p>The images were each given css transition properties to animate thema and make them move in a real life fashion and give the sea area a more believable look and feel</p>
    </b-col>

    <b-col>
      <section>
        <h4>What I used:</h4>
        <p>HTML, CSS, VanillaJS</p>
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
    text-align: center;
  }

  h1{
    font-size: 6rem;
    font-weight: 700;
    font-style: italic;
    text-align: center;
    text-shadow: 4px 4px #D76C6E;
  }

  h2{
    font-size: 4rem;
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