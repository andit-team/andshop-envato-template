<template>
  <div>
    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area bg-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent m-0 section-t-40-space section-b-40-space">
                <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="breadcrumb-item"><a href="#">Vegetables</a></li>
                <li class="breadcrumb-item active" aria-current="page">Orange and Fruits</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Area End -->

    <!-- Product Search Page Area Start -->
    <section class="product-details-page-area section-t-space bg-white">
      <div class="container">
        <div class="row">
          <!-- Product Details Left Side-->
          <div class="col-12 col-md-6 col-lg-6 col-xl-5">
            <div class="product-details-photo-tab">

              <div class="tab-content-wrap text-center">
                <image-magnifier
                  :src="selectedImg"
                  :zoom-src="selectedImg"
                  width="600"
                  height="600"
                  zoom-width="600"
                  zoom-height="570"
                  class="img-fluid"
                  >
                </image-magnifier>
              </div>

              <ul class="tab-img-list">
                <li v-for="(productImage, index) in productImages"
                :key="index" @click="setImage(productImage)"
                :class="{selectedImage : (productImage==selectedImg)}"
                class="rounded">

                  <img :src="productImage" alt="image" class="img-fluid rounded">

                </li>
              </ul>

            </div>
          </div>
          <!-- Product Details Left Side-->

          <!-- Product Details Right Side-->
          <div class="col-12 col-md-6 col-lg-6 col-xl-7">

            <!-- Sort Bar Start-->
            <div class="product-details-content">
              <h2 class="product-title mb-3">Orange</h2>
              <div class="rating_wrap mb-3">
                <div class="rating">
                  <div class="product_rate" style="width:87%"></div>
                </div>
              </div>

              <h5 class="mb-3">
                <span class="price mr-1 text-muted">$45.00 - $95.00</span>
              </h5>
              <p class="product-description mb-md-3 mb-3 mb-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores beatae fuga harum laboriosam maiores quasi quidem quo repudiandae voluptate.</p>

              <div class="product-stock-wrap mb-md-3 mb-3 mb-lg-5">

                <!-- <div class="custom-control custom-radio d-flex align-items-center">
                  <input type="radio" id="product_number2" name="product-number" class="custom-control-input">
                  <label class="custom-control-label" for="product_number2"> -->
                    <div class="details-price-list d-flex align-items-center mb-3">
                      <div class="price-list-left">
                        <b-form-spinbutton class="mr-4" id="sb-inline" v-model="reqularSaleQty" inline></b-form-spinbutton>
                      </div>
                      <div class="price-list-right">
                        <h6>Regular Price</h6>
                        <span class="price mr-1 text-muted">$ 50.00</span>
                        <p class="stock in-stock font-14">500 KG in stock</p>
                      </div>
                  </div>
                  <!-- </label>
                </div> -->

              </div>
              <div class="mb-3"><button class="theme-button rounded">+ Add to cart</button></div>
              <div class="mb-3"><button><i class="far fa-heart color-red mr-1"></i>Add to wishlist</button></div>
              <div class="mb-3 product-details-categories">
                <h6 class="mb-2">Categories:</h6>
                <p>Hair care, Make up, Men's skin, Skin care</p>
              </div>
              <div class="mb-3 product-details-tags">
                <h6 class="mb-2">Tags:</h6>
                <p>Fashion, Hand bag, belt</p>
              </div>
              <div class="mb-3 product-details-share">
                <h6 class="mb-2">Share this product:</h6>
                <p>
                  <button class="color-red p-2 mr-1 font-14"><i class="fab fa-facebook-f"></i></button>
                  <button class="color-red p-2 mr-1 font-14"><i class="fab fa-twitter"></i></button>
                  <button class="color-red p-2 mr-1 font-14"><i class="fab fa-pinterest-p"></i></button>
                  <button class="color-red p-2 mr-1 font-14"><i class="fab fa-linkedin-in"></i></button>
                </p>
              </div>

            </div>
            <!-- Sort Bar End-->
          </div>
          <!-- Product Details Right Side-->

        </div>

        <!-- Product Details Description & Review Tabs-->
        <div class="row">
          <div class="col">
            <b-card no-body class="mt-5 product-details-des-tab">
              <b-tabs card>
                <b-tab title="Description" active>
                  <div class="product-details-content-box">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo expedita enim praesentium suscipit, eligendi molestiae dolorem. Possimus, modi fugiat!</p>
                  </div>
                </b-tab>
                <b-tab title="Reviews(3)">

                  <div class="product-details-content-box">
                    <div class="media comment-box mb-3">
                      <img :src="require('@/assets/images/dashboard/user.png')" class="mr-3" alt="author" height="50px">
                      <div class="media-body">
                        <h6 class="mt-0">Suraiya Aysha</h6>
                        <div class="given-rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                    <div class="media comment-box mb-3">
                      <img :src="require('@/assets/images/dashboard/user.png')" class="mr-3" alt="author" height="50px">
                      <div class="media-body">
                        <h6 class="mt-0">Fatima Malik</h6>
                        <div class="given-rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                    <div class="media comment-box mb-3">
                      <img :src="require('@/assets/images/dashboard/user.png')" class="mr-3" alt="author" height="50px">
                      <div class="media-body">
                        <h6 class="mt-0">Jessica Fernandez</h6>
                        <div class="given-rating">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                  </div>

                  <div class="product-details-content-box write-review mt-4">
                    <h5 class="mb-2">Add a review:</h5>

                    <div v-if="!isLogin">
                      <p>To submit review <nuxt-link to="/customer/login">Login</nuxt-link> please!</p>
                      <h5 class="d-block mt-4"><nuxt-link to="/customer/login" class="theme-button">Login</nuxt-link></h5>
                    </div>

                    <form v-else>
                      <textarea id="textarea-default" placeholder="Write review here..." rows="2" class="mb-2 form-control" wrap="soft"></textarea>
                      <b-form-rating v-model="ratingValue" id="rating-inline" inline color="#ff8800" class="mb-2"></b-form-rating>
                      <button type="submit" class="theme-button d-block rounded">Submit Review</button>
                    </form>
                  </div>

                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
        <!-- Product Details Description & Review Tabs-->

      </div>
    </section>
    <!-- Product Search Page Area End -->

    <!-- No Product Found Start-->
    <!-- <section class="no-product-found section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <img :src="require('@/assets/images/products/no-product-found.jpg')" alt="No product found!">
          </div>
        </div>
      </div>
    </section> -->
    <!-- No Product Found End-->

    <!--  Related Products / Best Seller Area Start -->
    <section class="related-products-area best-seller-area bg-different section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-wrap d-flex justify-content-between align-items-center mb-30">
              <div class="section-title">
                <h4>Related Products </h4>
                <p class="mt-1">Browse the collection of our related products.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row product-row">
          <!-- Best Seller item start-->
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          </div>
          <!-- Best Seller item end-->

          <!-- Best Seller item start-->
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          </div>
          <!-- Best Seller item end-->

          <!-- Best Seller item start-->
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          </div>
          <!-- Best Seller item end-->

          <!-- Best Seller item start-->
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          </div>
          <!-- Best Seller item end-->

          <!-- Best Seller item start-->
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          </div>
          <!-- Best Seller item end-->

          <!-- Best Seller item start-->
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 product-item-col">
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
          </div>
          <!-- Best Seller item end-->
        </div>
      </div>
    </section>
    <!--  Related Products / Best Seller Area End -->

    <!-- Payment System Area Start -->
    <section class="payment-system-area section-t-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="payment-box text-center m-auto">
              <h5 class="position-relative mb-3">Trusted Shopping</h5>
              <ul class="d-flex justify-content-center">
                <li><a href="#" class="rounded"><img src="~/assets/images/payment-system/1.png" class="img-fluid" alt="payment" /></a></li>
                <li><a href="#" class="rounded"><img src="~/assets/images/payment-system/2.png" class="img-fluid" alt="payment" /></a></li>
                <li><a href="#" class="rounded"><img src="~/assets/images/payment-system/3.png" class="img-fluid" alt="payment" /></a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="payment-box text-center m-auto">
              <h5 class="position-relative mb-3">Payment Option</h5>
              <ul class="d-flex justify-content-center">
                <li><a href="#" class="rounded"><img src="~/assets/images/payment-system/4.png" class="img-fluid" alt="payment" /></a></li>
                <li><a href="#" class="rounded"><img src="~/assets/images/payment-system/5.png" class="img-fluid" alt="payment" /></a></li>
                <li><a href="#" class="rounded"><img src="~/assets/images/payment-system/1.png" class="img-fluid" alt="payment" /></a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-12 col-sm-12 col-12">
            <div class="payment-box text-center m-auto">
              <h5 class="position-relative mb-3">Delivery Partners</h5>
              <ul class="d-flex justify-content-center">
                <li><a href="#" class="rounded"><img src="~/assets/images/payment-system/2.png" class="img-fluid" alt="payment" /></a></li>
                <li><a href="#" class="rounded"><img src="~/assets/images/payment-system/3.png" class="img-fluid" alt="payment" /></a></li>
                <li><a href="#" class="rounded"><img src="~/assets/images/payment-system/4.png" class="img-fluid" alt="payment" /></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- Payment System Area End -->

  </div>

</template>

<script>
export default {
  name: "productDetails",

  data() {
    return {
      showImg: false,
      loading: true,
      ratingValue: 4,
      isLogin: true,
      reqularSaleQty: 0,
      wholeSaleQty: 0,
      flashSaleQty: 0,
      selectedImg : require('@/assets/images/products/product-details-600x600.jpg'),
      productImages: [
        require('@/assets/images/products/product-details-600x600.jpg'),
        require('@/assets/images/products/product-details2-600x600.jpg'),
        require('@/assets/images/products/product-details3-600x600.jpg'),
        require('@/assets/images/products/product-details4-600x600.jpg'),
        require('@/assets/images/products/product-details5-600x600.jpg'),
      ],
      product_slug : this.$route.params.slug,
    }
  },
  methods: {
    setImage (imgURL) {
      this.selectedImg = imgURL;
    },
  mounted () {
    this.showImg = false
  },
  updated() {
    this.showImg = true
  }
  }

}
</script>

<style scoped>
</style>