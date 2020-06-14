<template>
<div class="contact">

<b-container>

    <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="2">
    <b-col>
        <section class="hey">
    <h1>Contact Moi!!</h1>

    <label>... or email me at <a href="mailto:ifeobasa16@gmail.com">ifeobasa16@gmail.com</a></label>
    </section>
    </b-col>

    <b-col>
        <section class={}>
  <b-form class="contact-form" @submit.prevent="sendEmail" >

      <b-form-group id="input-group" label="Your Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="form.name"
          name="user_name"
          required
          placeholder="What's your name?..."
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group" label="Your Email:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="email"
          v-model="form.email"
          name="user_email"
          required
          description="Please inclue an '@' in your email address"
          placeholder="What's your email?..."
        ></b-form-input>
      </b-form-group>

        <label for="textarea">Send  me a message:</label>
       <b-form-textarea
       label="Message:"
      id="textarea"
      v-model="form.message"
      name="message"
       rows="4"
       required
      placeholder="Say something..."
    ></b-form-textarea>

    <b-button v-b-modal.modal-1  type="submit" value="Send">Send</b-button>

  <b-modal v-bind:hide-footer="true" size="lg" id="modal-1" hide-header >
    <button type="button" class="close" aria-label="Close" data-dismiss="modal" @click="resetForm(); $bvModal.hide('modal-1');">
  <span aria-hidden="true">&times;</span>
</button>

<div class="d-block text-center">
      <h3>Hello from the other siiiide!!</h3>
    </div>
    <p class="my-4">Sorry about that, lol... I'll get back to you as soon as I can thanks for messaging me!
    </p>
    <h2>😄😄😄</h2>
  </b-modal>

  </b-form>
  </section>
    </b-col>
    </b-row>

  </b-container>

  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {

  data() {
    return {
    form: {
      name: null,
      email: null,
      message: null
    },
    }
  },

  methods: {

    sendEmail: (e) => {
      emailjs.sendForm('ifeobasa16_gmail_com', 'portfolio_site', e.target, 'user_RWcchEy36xz38oiQ44sgb')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    },

    resetForm() {
      this.form = {
        name: null,
        email: null,
        message: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.close{
  font-size: 3rem;
  color: black ;
    text-shadow: 4px 4px #DC9E82;
    padding: 20px;
}

h2{
  padding: 30px;
    font-size: 4rem;
    font-weight: 1000;
    text-align: center;
    text-shadow: none;
  }

h3{
  padding: 30px;
    font-size: 3.5rem;
    font-weight: 1000;
    text-align: center;
    text-shadow: 4px 4px #e8d7d5;
  }

p{
  padding: 20px;
  font-size: 2rem;
    font-weight: 700;
    font-family: 'raleway', sans-serif;
    font-style: italic;
    text-align: center;
    color: #0C0F33 ;
}

.hey h1{
    font-size: 4.5rem;
    font-weight: 1000;
    font-family: 'raleway', sans-serif;
    font-style: italic;
    text-align: left;
    color: #0C0F33 ;
    text-shadow: 4px 4px #DC9E82;
}

 a{
  color: #0C0F33;
  font-family: 'raleway', sans-serif;
    font-style: italic;
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
}

 a:hover{
  color: #C16E70;
  text-decoration: none;
  font-family: 'raleway', sans-serif;
    font-style: italic;
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
}

.btn{
    margin-top: 5%;
    font-size: 1.7rem;
    font-weight: 1000;
    font-family: 'raleway', sans-serif;
    border-radius: 10rem;
    background-color: #DC9E82;
    -moz-box-shadow: 5px 5px #151E3F;
	-webkit-box-shadow: 5px 5px #151E3F;
	box-shadow: 5px 5px #151E3F;
}

label{
  color: #0C0F33;
  font-family: 'raleway', sans-serif;
    font-style: italic;
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
}

#input-group{
    font-size: 2rem;
    font-weight: 700;
    color: #0C0F33;
  font-family: 'raleway', sans-serif;
    font-style: italic;
}

.form-control{
    border: none;
    font-weight: 700;
    border-radius: 0px;
    color: #C16E70 ;
}

@media screen and (min-width: 64em) {
 a{
  color: #0C0F33;
  font-family: 'raleway', sans-serif;
    font-style: italic;
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
}

 a:hover{
  color: #C16E70;
  text-decoration: none;
  font-family: 'raleway', sans-serif;
    font-style: italic;
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
}


.hey h1{
    font-size: 8rem;
    font-weight: 1000;
    font-family: 'raleway', sans-serif;
    font-style: italic;
    text-align: left;
    color: #0C0F33 ;
    text-shadow: 4px 4px #DC9E82;
}

.btn{
    margin-top: 5%;
    font-size: 1.7rem;
    font-weight: 1000;
    font-family: 'raleway', sans-serif;
    border-radius: 10rem;
    background-color: #DC9E82;
    -moz-box-shadow: 5px 5px #151E3F;
	-webkit-box-shadow: 5px 5px #151E3F;
	box-shadow: 5px 5px #151E3F;
}

label{
  color: #0C0F33;
  font-family: 'raleway', sans-serif;
    font-style: italic;
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
}

#input-group{
    font-size: 2rem;
    font-weight: 700;
    color: #0C0F33;
  font-family: 'raleway', sans-serif;
    font-style: italic;
}

.form-control{
    border: none;
    font-weight: 700;
    border-radius: 0px;
    color: #C16E70 ;
}
}

</style>