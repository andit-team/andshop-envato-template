<template>
  <!-- Hero Area Start ------------->
  <section class="hero-area">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-3 col-lg-3">
          <div class="all-categories-menu">
            <ParentCategoryList />
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
          <div class="slider-area mt-3">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="(productSlider, index) in productSliders" :key="index"><a :href="productSlider.slider_url" target="_blank"><img :src="productSlider.slider_image" alt="slider" class="img-fluid"></a></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero Area End ------------->
</template>

<script>
  import { get_slider_list } from "@/api/urls";
  export default {
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          effect: 'fade',
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            outoplay: true
          }
        },
        api_base_url : this.$config.API_BASE_URL
      }
    },
    methods:{
      getSliderList(){
        let self = this;
        let config = {
          headers: {'Content-Type': 'application/json'}
        };
        this.$axios.$get(this.api_base_url+get_slider_list, config).then((res) => {
          if (res.error === false) {
            self.$store.commit('siteinfo/updateSliderList',res.data);
            // self.productSliders=res.data;
          }
          else {
            console.log(res.msg)
          }
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    computed:{
      productSliders(){
        return this.$store.state.siteinfo.sliderList;
      }
    },
    mounted() {
      if (this.productSliders.length<=0){
        this.getSliderList();
      }
    }

  }
</script>

<style lang="scss">
</style>
