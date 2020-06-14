<template>
    <div>
        <b-container>

    <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="3">
        <b-col>
            <h4>Knowledge</h4>
            <ul>
                <li>Web Development</li>
                <li>Front-End Development</li>
                <li>Back-End Development</li>
            </ul>
        </b-col>
        <b-col>
            <h4 >Skills</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>MySQL</li>
                <li>PHP</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>
        </b-col>
        <b-col>
            <h4 >Tools</h4>
            <ul class="code">
                <li>GitHub</li>
                <li>Wordpress</li>
                <li>Shopify</li>
            </ul>
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
ul{
    padding:0;
}
.code{
    margin-bottom: 120px;
}
h4{
    font-size: 3rem;
    font-style: italic;
    font-weight: 1000;
    color: #151E3F ;
  font-family: 'raleway', sans-serif;
    font-style: italic;
    text-align: center;
    text-shadow: 4px 4px  #DC9E82;
  }

  li{
      font-size: 4rem;
    color:#3F3D54;
  font-family: 'raleway', sans-serif;
    font-style: italic;
      list-style-type: none;
      font-size: 1.5rem;
      text-align: center;
    font-weight: 700;
  }
</style>