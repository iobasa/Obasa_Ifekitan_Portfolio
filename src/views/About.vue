<template>
    <div>
        

        

        <b-row class="row-aa" cols="1" cols-sm="1" cols-md="1" cols-lg="2">

          <b-col>
              <b-img class="about-round" src="@/assets/ife.jpg" fluid alt="Fluid image"></b-img>
          </b-col>

          <b-col class="aout">
            <h1 class="about">About Me</h1>
            <p class="about-p">Hello! My name is Ifekitan Obasa, I am web-developer who likes to challenge herself and learn new things that can help improve my knowledge in code and things in general.<br><br> <b>PS. I love food.</b></p>
          </b-col>

        </b-row>
       
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.row-aa{
  margin-right: 0px;
}

.about-round{
  width: 85%;
  margin: 10px;
  border-radius: 5rem;
  -moz-box-shadow: 10px 10px #151E3F;
	-webkit-box-shadow: 10px 10px #151E3F;
	box-shadow: 10px 10px #151E3F;
}

.about{
  color: #151E3F;

  font-family: 'raleway', sans-serif;
    text-align: center;
    font-size: 4rem;
    font-weight: 1000;
    text-shadow: 4px 4px #DC9E82;
}

.about-p{
  color:#3F3D54;
  font-family: 'raleway', sans-serif;
  font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
}

@media screen and (min-width: 64em) {
.about-round{
  margin: 10px;
  border-radius: 5rem;
  -moz-box-shadow: 15px 15px #151E3F;
	-webkit-box-shadow: 15px 15px #151E3F;
	box-shadow: 15px 15px #151E3F;
}

.about{
  color: #151E3F;
  font-family: 'raleway', sans-serif;
    text-align: center;
    font-size: 6rem;
    font-weight: 1000;
    text-shadow: 4px 4px #DC9E82;
}

.aout{
  padding: 30px;
}

.about-p{
  color:#3F3D54;
  font-family: 'raleway', sans-serif;
  font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
}
}

</style>