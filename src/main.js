import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import router from './router'
import App from './App.vue'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

console.log('fired!');

// variable stack -> get the shields / sigils first
const sigils = document.querySelectorAll('.sigilContainer'),
      bannerImages = document.querySelector("#houseImages");


function animateBanners() {

  let offset = 500,
      multiplier = this.dataset.offset;
      // this is the dats offset custom data attribute
      // on each of the sigils
  console.log((offset * multiplier) + "px");

  // move the banners to the left using the product of our math
  bannerImages.style.right = `${offset * multiplier + "px"}`;

}

//sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
sigils.forEach(sigil => sigil.addEventListener("mouseover", animateBanners));


