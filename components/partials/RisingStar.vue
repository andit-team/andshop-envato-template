<template>
  <!-- Client Logo Area Start ------------->
  <section class="client-logo-area bg-different section-t-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>Rising Star</h4>
            </div>
            <nuxt-link to="/rising-star" class="color-red">View all <span class="ml-2"><i class="fas fa-angle-right"></i></span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="client-logo-slider-wrap d-flex justify-content-between">

            <swiper class="swiper" :options="swiperOption">
              <span v-for="(risingStarShop, index) in risingStarsShops" :key="index">
                <swiper-slide>
                  <div class="logo-item">
                    <nuxt-link :to="`/rising-star/`+risingStarShop.slug">
                      <img :src="risingStarShop.logo" :alt="risingStarShop.name">
                    </nuxt-link>
                  </div>
                </swiper-slide>
              </span>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Client Logo Area End ------------->
</template>

<script>
import {get_rising_star_shop} from "@/api/urls";

export default {
  name: 'RisingStar',
  data() {
    return {
      swiperOption: {
        slidesPerView: 7,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1400: {
            slidesPerView: 7,
            spaceBetween: 20
          },
          1366: {
            slidesPerView: 6
          },
          1199: {
            slidesPerView: 5
          },
          992: {
            slidesPerView: 4
          },
          991: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 3
          },
          767: {
            slidesPerView: 3
          },
          766: {
            slidesPerView: 3
          },
          575: {
            slidesPerView: 2
          },
          400: {
            slidesPerView: 2
          },
          0: {
            slidesPerView: 1
          }
        },
      },
      api_base_url : this.$config.API_BASE_URL
    }
  },
  methods:{
    getRisingStarShops(){
      let self = this;
      let config = {
        headers: {'Content-Type': 'application/json'}
      };
      this.$axios.$get(this.api_base_url+get_rising_star_shop, config).then((res) => {
        if (res.error === false) {
          self.$store.commit('siteinfo/updateRisingStarsShops',res.data);
        }
        else {
          // console.log(res.msg)
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  computed:{
    risingStarsShops(){
      return this.$store.state.siteinfo.risingStarsShops;
    }
  },
  mounted() {
    if (this.risingStarsShops.length<=0){
      this.getRisingStarShops();
    }
  }
}
</script>

<style scoped>

</style>
