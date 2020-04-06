<template>
<div class="contact">

<b-container>

    <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="2">
    <b-col>
        <section class="hey">
    <h1>CONTACT MOI!!</h1>
    </section>
    </b-col>

    <b-col>
        <section class={}>
  <b-form class="contact-form" @submit.prevent="sendEmail">

      <b-form-group id="input-group" label="Your Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          name="user_name"
          required
          placeholder="enter name..."
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group" label="Your Email:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="email"
          name="user_email"
          required
          placeholder="enter email..."
        ></b-form-input>
      </b-form-group>

        <label for="textarea">Send me a message:</label>
       <b-form-textarea
       label="Message:"
      id="textarea"
      name="message"
       rows="4"
      placeholder="Enter something..."
    ></b-form-textarea>

    <b-button type="submit" value="Send" >Send</b-button>


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
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('ifeobasa16_gmail_com', 'portfolio_site', e.target, 'user_RWcchEy36xz38oiQ44sgb')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>

.hey h1{
    font-size: 6rem;
    font-weight: 700;
    font-style: italic;
    text-shadow: 4px 4px #e8d7d5;
}

.btn{
    margin-top: 5%;
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
    border-radius: 0px;
    background-color: black;
}

label{
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
}

#input-group{
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
}

.form-control{
    background-color: #FFFDF9;
    border: none;
    border-radius: 0px;
    border-bottom: 2px solid black;
}

</style>