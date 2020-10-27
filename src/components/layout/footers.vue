<template>
    <div>

        <div class="social-media">

<a href="https://www.instagram.com/iffybaas">instagram</a>			  
<a href="https://github.com/iobasa">github</a>
						
<a href="https://www.linkedin.com/in/ife-obasa-567593191/">linkedIn</a>


  <p  v-b-modal.modal-2>resume</p>

  <b-modal v-bind:hide-footer="true" size="lg" id="modal-2" hide-header >
    <button type="button" class="close" aria-label="Close" data-dismiss="modal" @click="$bvModal.hide('modal-2');">
  <span aria-hidden="true">&times;</span>
</button>

<div class="d-block text-center">
      <b-img src="@/assets/Obasa Ifekitan's Resume.png" fluid alt="Fluid image"></b-img>

      <b-button block class="circle circle-01" href="https://drive.google.com/file/d/1QvlDAhXATjk9xW6mMyU6zPcXbRJXrDr9/view?usp=sharing" target="_blank" v-b-popover.hover.top title="Hey! thanks for checking out my site!">
    DOWNLOAD MY RESUME 🦄
  </b-button>
    <h2>😄😄😄</h2>
	</div>
  </b-modal>



 

        </div>
    </div>
</template>

<script>
    export default {
		name: "footer"
}
</script>

<style lang="scss" scoped>

.circle-01 {
	margin-left: 10px;
	padding-left: 50px;
	background: #000;
   transform: translate(-9px, -15px);
}

/* Animate on hover */

@keyframes shake-circle-01 {
  0% { transform: translate(-8px, -14px); }
  33% { transform: translate(-10px, -14px); }
  100% { transform: translate(-8px, -16px); }
}

.circle-01:hover {
  cursor: default;
  animation: shake-circle-01 .1s infinite alternate;
}


.social-media {
	margin-top: 30px;
	display: flex;
	flex-direction: row;
	text-align: center;
	align-content: center;
	justify-content: flex-end; 
	}
  
  .social-media a {
	font-family: 'raleway', sans-serif;
    font-weight: 1000;
	color: #0C0F33;
	padding: 5px;
	font-size: 1.2rem;
	text-align: center;
	text-decoration: none; }

	.social-media :hover {
    color: #C16E70!important;
  }

  p{
	font-family: 'raleway', sans-serif;
    font-weight: 1000;
	color: #0C0F33;
	padding: 5px;
	font-size: 1.2rem;
	text-align: center;
	text-decoration: none;
}


@media screen and (min-width: 62em) {

	.circle-01 {
	margin-left: 10px;
	padding-left: 50px;
	background: #000;
   transform: translate(-9px, -15px);
}

/* Animate on hover */

@keyframes shake-circle-01 {
  0% { transform: translate(-8px, -14px); }
  33% { transform: translate(-10px, -14px); }
  100% { transform: translate(-8px, -16px); }
}

.circle-01:hover {
  cursor: default;
  animation: shake-circle-01 .1s infinite alternate;
}

p{
	font-family: 'raleway', sans-serif;
    font-weight: 1000;
	color: #0C0F33;
	padding: 15px;
	font-size: 1.5rem;
	text-align: center;
	text-decoration: none;
}


.social-media {
	order: 1;
	display: flex;
	flex-direction: row;
	text-align: center;
	align-content: center;
	justify-content: flex-end; 
	}
  
  .social-media a {
	font-family: 'raleway', sans-serif;
    font-weight: 1000;
	color: #0C0F33;
	padding: 15px;
	font-size: 1.5rem;
	text-align: center;
	text-decoration: none; }

	.social-media :hover {
    color: #C16E70!important;
  }
}

</style>