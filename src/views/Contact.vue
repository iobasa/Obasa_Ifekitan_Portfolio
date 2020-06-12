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
  <b-form class="contact-form" @submit.prevent="sendEmail">

      <b-form-group id="input-group" label="Your Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          name="user_name"
          required
          placeholder="What's your name?..."
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group" label="Your Email:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="email"
          name="user_email"
          required
          placeholder="what's your email?..."
        ></b-form-input>
      </b-form-group>

        <label for="textarea">Send me a message:</label>
       <b-form-textarea
       label="Message:"
      id="textarea"
      name="message"
       rows="4"
      placeholder="Say something..."
    ></b-form-textarea>

    <b-button @click="showMsgOk" type="submit" value="Send" >Send</b-button>

  <b-modal v-bind:hide-footer="true" id="modal-1" title="Hey There!">
    <p class="my-4">The message was sent! I'll get back to you as soon as I can!</p>
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
  methods: {

    sendEmail: (e) => {
      emailjs.sendForm('ifeobasa16_gmail_com', 'portfolio_site', e.target, 'user_RWcchEy36xz38oiQ44sgb')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    },

    showMsgOk() {
        const h = this.$createElement
        // Using HTML string

        // More complex structure
        const messageVNode = h('div', { class: ['foobar'] }, [
          h('p', { class: ['text-center'] }, [
            ' 🚀 Hey thanks for messaging me! 🔥🔥🔥 I will get back to you as soon as I can! 😉 ',
          ])
        ])
        // We must pass the generated VNodes as arrays
        this.$bvModal.msgBoxOk([messageVNode], {
          centered: true, size: 'lg'
        })
      }
  }
}
</script>

<style lang="scss" scoped>

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