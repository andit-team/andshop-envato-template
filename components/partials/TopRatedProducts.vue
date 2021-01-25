<template>
  <!-- Top Rated Products / New Arrivals / Best Seller Area Start -->
  <section class="top-rated-products new-arrivals-area best-seller-area bg-different section-t-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
            <div class="section-title">
              <h4>Top Rated</h4>
              <p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <nuxt-link to="/top-rated-products" class="color-red">View all <span class="ml-2"><i class="fas fa-angle-right"></i></span></nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="best-seller-slider-wrap d-flex flex-wrap justify-content-between">

            <swiper class="swiper" :options="swiperOption">

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/products/potato">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Cornboat Holders</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/products/potato">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Cornboat Holders</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/products/potato">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Cornboat Holders</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/products/potato">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Cornboat Holders</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/products/potato">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Cornboat Holders</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/products/potato">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Cornboat Holders</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/products/potato">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Cornboat Holders</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Top Rated item end-->

              <!-- Top Rated item start-->
              <swiper-slide>
                <div class="product-item rounded bg-white">
                  <nuxt-link to="/products/potato">
                    <div class="img-wrap mb-2">
                      <img src="~/assets/images/best-sellers/1.jpg" alt="products" class="rounded-top">
                    </div>
                    <div class="product-content">
                      <p class="product-tags text-uppercase">bath & body, football, tennis</p>
                      <p class="product-title font-bold">Cornboat Holders</p>
                      <div class="rating_wrap mb-1">
                        <div class="rating">
                          <div class="product_rate" style="width:87%"></div>
                        </div>
                      </div>
                      <p>
                        <span class="price mr-1 text-muted" style="text-decoration: line-through">$4.00</span>
                        <span class="discounted-price mr-1 color-red">$2.00</span>
                        <span class="special-tag badge bg-red white-color">Sale</span>
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </swiper-slide>
              <!-- Top Rated item end-->

              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Top Rated Products / New Arrivals Area End -->
</template>

<script>
import {get_top_rated_products} from "@/api/urls";

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 4,
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
            slidesPerView: 6
          },
          1366: {
            slidesPerView: 5
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
        }
      },
      api_base_url : this.$config.API_BASE_URL
    }
  },
  methods:{
    getTopRatedProducts(){
      let self = this;
      let config = {
        headers: {'Content-Type': 'application/json'}
      };
      this.$axios.$get(this.api_base_url+get_top_rated_products, config).then((res) => {
        if (res.error === false) {
          self.$store.commit('siteinfo/updateTopRatedProducts',res.data);
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
    topRatedProducts(){
      return this.$store.state.siteinfo.topRatedProducts;
    }
  },
  mounted() {
    if (this.topRatedProducts.length<=0){
      this.getTopRatedProducts();
    }
  }
}
</script>

<style scoped>

</style>
