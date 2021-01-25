<template>
  <!-- Popular Categories Area Start ------------->
  <section class="popular-categories-area section-t-space section-b-40-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>Popular Categories</h4>
              <p class="mt-1">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">

        <!-- Popular category item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4" v-for="(popularCategory, index) in popularCategories" :key="index">
          <div class="popular-categories-item rounded" :style="{ 'background-image': 'url(' + popularCategory.thumbnail_image + ')' }">
            <nuxt-link :to="`/categories/${popularCategory.slug}`" class="product-content">
              <p class="product-title font-bold heading-color">{{ popularCategory.name }}</p>
              <p class="product-quantity">{{ popularCategory.product }} products</p>
              <button class="text-capitalize d-flex align-items-center color-red font-bold font-14">Shop Now<i class="fas fa-angle-right ml-1 font-13"></i></button>
            </nuxt-link>
          </div>
        </div>
        <!-- Popular category item end-->

      </div>
    </div>
  </section>
  <!-- Popular Categories Area End ------------->
</template>

<script>
import {get_popular_categories} from "@/api/urls";

export default {
  name: "PopularCategories",
  data(){
    return{
      api_base_url : this.$config.API_BASE_URL
    }
  },
  methods:{
    getPopularCategories(){
      let self = this;
      let config = {
        headers: {'Content-Type': 'application/json'}
      };
      this.$axios.$get(this.api_base_url+get_popular_categories, config).then((res) => {
        if (res.error === false) {
          self.$store.commit('siteinfo/updatePopularCategories',res.data);
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
    popularCategories(){
      return this.$store.state.siteinfo.popularCategories;
    }
  },
  mounted() {
    if (this.popularCategories.length<=0){
      this.getPopularCategories();
    }
  }
}
</script>

<style scoped>

</style>
