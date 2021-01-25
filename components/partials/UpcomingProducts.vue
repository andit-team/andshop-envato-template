<template>
  <!-- Upcoming Products Area Start -->
  <section class="featured-products-area section-t-space section-b-40-space bg-different">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>Upcoming Products</h4>
              <p class="mt-1">Add hot products to weekly line up</p>
            </div>
            <nuxt-link to="/upcoming-products" class="color-red">View all <span class="ml-2"><i class="fas fa-angle-right"></i></span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Featured item start-->
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="(upcomingProduct, index) in upcomingProducts" :key="index">
          <nuxt-link :to="`/products/${upcomingProduct.slug}`" class="featured-product-item rounded d-flex align-items-center bg-white" style="min-height: 160px">
            <div class="img-wrap mr-2" style="width: 135px">
              <img :src="upcomingProduct.thumbnail_image" alt="products" class="rounded-left">
            </div>
            <div class="product-content">
              <p class="product-tags text-uppercase font-12">{{ upcomingProduct.name }}</p>
              <p class="product-title font-bold">{{ upcomingProduct.shop }}</p>
              <div class="rating_wrap mb-1">
                <div class="rating">
                  <div class="product_rate" style="width:87%"></div>
                </div>
              </div>
              <p>
                <span class="price mr-1 text-muted">{{ upcomingProduct.wholesale_price }}৳ - {{ upcomingProduct.price }}৳</span>
              </p>

              <UpcomingCountdown :date="upcomingProduct.available_from" class="rounded"></UpcomingCountdown>
            </div>
          </nuxt-link>
        </div>
        <!-- Featured item End-->
      </div>
    </div>
  </section>
  <!-- Upcoming Products Area End -->
</template>

<script>
import {get_upcoming_products} from "@/api/urls";

export default {
  name: "UpcomingProducts",
  data(){
    return {
      api_base_url : this.$config.API_BASE_URL
    }
  },
  methods:{
    getUpcomingProducts(){
      let self = this;
      let config = {
        headers: {'Content-Type': 'application/json'}
      };
      this.$axios.$get(this.api_base_url+get_upcoming_products, config).then((res) => {
        if (res.error === false) {
          self.$store.commit('siteinfo/updateUpcomingProducts',res.data);
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
    upcomingProducts(){
      return this.$store.state.siteinfo.upcomingProducts;
    }
  },
  mounted() {
    if (this.upcomingProducts.length<=0){
      this.getUpcomingProducts();
    }
  }
}
</script>

<style scoped>

</style>
