import Vue from 'vue'

import { BootstrapVueIcons } from 'bootstrap-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ImageMagnifier from 'vue-image-magnifier'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css'
import * as VueGoogleMaps from "vue2-google-maps"

Vue.use(BootstrapVueIcons)
Vue.use(VueAwesomeSwiper)
Vue.use(ImageMagnifier)
Vue.use(VueToast,{
  position: 'bottom-right'
});
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAuo-_NYLqOIQdCkQoInC-Z8bvE0NVMuC8",
    libraries: "places"
  }
});