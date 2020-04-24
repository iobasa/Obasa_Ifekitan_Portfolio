<template>
    <div>

        <div class="social-media">

<a href="https://www.instagram.com/iffybaas">instagram</a>			  
<a href="https://github.com/iobasa">github</a>
						
<a href="https://www.linkedin.com/in/ife-obasa-567593191/">linkedIn</a>

<a href="https://drive.google.com/file/d/1alg-cK8J9AkM5B-Jz7S6ES_SfCea8mEh/view?usp=sharing">resume</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style lang="scss" scoped>
.social-media {
	order: 1;
	display: flex;
	flex-direction: row;
	text-align: center;
	align-content: center;
	justify-content: flex-end; 
	}
  
  .social-media a {
	font-family: "Raleway", sans-serif;
	font-weight: 500;
	font-style: black;
	color: black;
	padding: 15px;
	font-size: 1.5rem;
	text-align: center;
	text-decoration: none; }

	.social-media :hover {
    color: black!important;
    text-shadow: 2px 2px #D76C6E;
  }

</style>