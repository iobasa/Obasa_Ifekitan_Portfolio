<template>
    <div class="masonry">
        <section class="bv-example-row">

    <li><a href="/roku" class="sigilContainer roku" data-offset="0">Roku Flashback</a></li>

    <li><a href="/harry" class="sigilContainer harry" data-offset="1">Harry &amp; Harry</a></li>

  <li><a href="/mangochat" class="sigilContainer mango" data-offset="2">MangoChat</a></li>

  <li><a href="/musicmixer" class="sigilContainer m" data-offset="3">MusicMixer</a></li>

  <li><a href="/pizza" class="sigilContainer pizza" data-offset="4">Pizza<br>Infographic</a></li>

  <li><a href="/hiv" class="sigilContainer hiv" data-offset="5">MEET HIV</a></li>

 <li><a href="/traa" class="sigilContainer traa" data-offset="6">TRAA</a></li>

 <li><a href="/anastasia" class="sigilContainer ana" data-offset="7">Aesthetic<br>Anastasia</a></li>

 
</section>

<section class="screen">

<section id="laptop">
    <img src="@/assets/laptop.png" alt="">
</section>

 <section id="imageContainer">
<div id="houseImages" style="right: 0;"> <!-- add in all of the images to make a scrolling "banner" -->
	<img src="@/assets/roku.jpg" alt="">
    <img src="@/assets/harry.jpg" alt="">
    <img src="@/assets/mangochat.jpg" alt="">
    <img src="@/assets/musicmixer.jpg" alt="">
    <img src="@/assets/interactive.jpg" alt="">
     <img src="@/assets/hiv.jpg" alt="">
    <img src="@/assets/traa.jpg" alt="">
    <img src="@/assets/anastasia.jpg" alt="">
    
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
    width: 200%;
    margin-bottom: 30%;
    list-style-type: none;
    transform: rotate(-3deg);
}

.bv-example-row{
    margin-left: 5%;
    line-height: 4.5rem;
    width: 40%;
}

.bv-example-row a{
    font-size: 3rem;
    line-height: 1.5rem;
    color: #0C0F33 ;
  font-family: 'poppins', sans-serif;
  font-weight: 700;
    text-shadow: 4px 4px #DC9E82;
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
  background: #DC9E82;
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

@media screen and (min-width: 62em) {

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
    padding-left: 36%;
    padding-top: 15%;
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
    height: 330px;
}

#houseImages { position:relative; width:6000px; transition: all .5s; }
#houseImages img { float:left; }

.bv-example-row li{
    width: 80%;
    margin-left: 10%;
    margin-bottom: 10%;
    list-style-type: none;
    transform: rotate(-3deg);
}

.bv-example-row{
    line-height: 7rem;
    margin-left: 1%;
    width: 50%;
}

.bv-example-row a{
    font-size: 5rem;
    color: #0C0F33 ;
  font-family: 'poppins', sans-serif;
  font-weight: 700;
    font-style: italic;
    text-shadow: 4px 4px #DC9E82;
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
  background: #DC9E82;
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



@media screen and (min-width: 68em) {

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
    width: 80%;
    margin-left: 10%;
    margin-bottom: 10%;
    list-style-type: none;
    transform: rotate(-3deg);
}

.bv-example-row{
    line-height: 7rem;
    margin-left: 1%;
    width: 50%;
}

.bv-example-row a{
    font-size: 5.2rem;
    color: #0C0F33 ;
  font-family: 'poppins', sans-serif;
  font-weight: 700;
    font-style: italic;
    text-shadow: 4px 4px #DC9E82;
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
  background: #DC9E82;
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