<template>
    <div class="masonry">
        <section class="bv-example-row">

    <li><a href="/roku" class="sigilContainer roku" data-offset="0">ROKU</a></li>

     <li><a href="/texty" class="sigilContainer texty" data-offset="1">TEXTY</a></li>

  <li><a href="/musicmixer" class="sigilContainer m" data-offset="2">MUSICMIXER</a></li>

  <li><a href="/hiv" class="sigilContainer hiv" data-offset="3">MEET HIV</a></li>

  <li><a href="/pizza" class="sigilContainer pizza" data-offset="4">PIZZA<br>INFOGRAPHIC</a></li>

 <li><a href="/traa" class="sigilContainer traa" data-offset="5">TRAA</a></li>

<li><a href="/drumset" class="sigilContainer drum" data-offset="6">DRUMSET</a></li>

<li><a href="/valentines" class="sigilContainer val" data-offset="7">VALENTINE'S<br>INFOGRAPHIC</a></li>

 <li><a href="/anastasia" class="sigilContainer ana" data-offset="8">AESTHETIC<br>ANASTASIA</a></li>

 <li><a href="/mangochat" class="sigilContainer mango" data-offset="9">MANGOCHAT</a></li>
</section>

<section class="screen">

<section id="laptop">
    <img src="@/assets/laptop.png" alt="">
</section>

 <section id="imageContainer">
<div id="houseImages" style="right: 0;"> <!-- add in all of the images to make a scrolling "banner" -->
	<img src="@/assets/roku.jpg" alt="">
    <img src="@/assets/texty.jpg" alt="">
    <img src="@/assets/musicmixer.jpg" alt="">
    <img src="@/assets/hiv.jpg" alt="">
    <img src="@/assets/interactive.jpg" alt="">
    <img src="@/assets/traa.jpg" alt="">
    <img src="@/assets/drumset.jpg" alt="">
    <img src="@/assets/valentine.jpg" alt="">
    <img src="@/assets/anastasia.jpg" alt="">
    <img src="@/assets/mangochat.jpg" alt="">
</div>
    </section>

    </section>



    </div>
</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>

.screen{
    display: none;
}


#laptop{
    float: right;
}

#laptop img {
    margin-left: 150%;
    float: right;
    width: 80%;

}

#imageContainer{
    float: right;
    padding-left: 52%;
    padding-top: 11%;
   width:100%;
    height:470px;
    margin-top: 80%;
    margin:0 auto;
     position: fixed;
    z-index: -1;
	overflow:hidden;
}

#houseImages img{
    width: 500px;
    height:360px;
}

#houseImages { position:relative; width:6000px; transition: all .5s; }
#houseImages img { float:left; }

.bv-example-row li{
    margin-left: 10%;
    margin-bottom: 10%;
    list-style-type: none;
    transform: rotate(-3deg);
}

.bv-example-row{
    margin-left: 5%;
    width: 30%;
}

.bv-example-row a{
    color: black;
    text-shadow: 4px 4px #e8d7d5;
}

.bv-example-row a, a:visited {
  text-decoration: none;
  position: relative;
}

.bv-example-row a:after, .bv-example-row a:visited:after {
  content: '';
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  background: black;
  transition: 0.6s;
}

.bv-example-row a:hover:after, a:visited:hover:after {
  width: 100%;
}
.masonry{ 
font-size: 4rem;
font-family: 'Poppins', sans-serif;
font-weight: 1000;
font-style: italic;
color: #CECA94;

display: flex;
flex-direction: row;
}


@media screen and (min-width: 64em) {

.screen{
    width: 100%;
   margin-top: -5%;
    display: flex;
    justify-content: flex-end;
    float: right;
    position: fixed;
    z-index: -1;
}

#laptop{
    float: right;
}

#laptop img {
    margin-left: 150%;
    float: right;
    width: 80%;

}

#imageContainer{
    float: right;
    padding-left: 52%;
    padding-top: 11%;
   width:100%;
    height:470px;
    margin-top: 80%;
    margin:0 auto;
     position: fixed;
    z-index: -1;
	overflow:hidden;
}

#houseImages img{
    width: 500px;
    height:360px;
}

#houseImages { position:relative; width:6000px; transition: all .5s; }
#houseImages img { float:left; }

.bv-example-row li{
    margin-left: 10%;
    margin-bottom: 10%;
    list-style-type: none;
    transform: rotate(-3deg);
}

.bv-example-row{
    margin-left: 5%;
    width: 30%;
}

.bv-example-row a{
    color: black;
    text-shadow: 4px 4px #e8d7d5;
}

.bv-example-row a, a:visited {
  text-decoration: none;
  position: relative;
}

.bv-example-row a:after, .bv-example-row a:visited:after {
  content: '';
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  background: black;
  transition: 0.6s;
}

.bv-example-row a:hover:after, a:visited:hover:after {
  width: 100%;
}
.masonry{ 
font-size: 4rem;
font-family: 'Poppins', sans-serif;
font-weight: 1000;
font-style: italic;
color: #CECA94;

display: flex;
flex-direction: row;
}

}


</style>