<template>
    <div>
        

        

        <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">

          <b-col>
            <h1 class="about">About Me</h1>
          </b-col>

          <b-col>
              <b-img center src="@/assets/ife.jpg" fluid alt="Fluid image"></b-img>
          </b-col>

          <b-col>
               <p class="about-p">Hello! My name is Ifekitan Obasa, I am web-developer who likes to challenge herself and leanr new things that can help improve my knowledge in code and things in general.<br><br> PS. I love food.</p>
          </b-col>
        </b-row>
       
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.about{
  text-align: center;
    font-size: 6rem;
    font-weight: 700;
    font-style: italic;
    text-shadow: 4px 4px #e8d7d5;
}

.about-p{
  font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
}


</style>