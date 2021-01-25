<template>
  <div>
    <MainSlider />

    <section class="main-services-area section-t-space section-b-40-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="andbaazar-section-title text-center">
              <h1>AndShop</h1>
              <p class="andbaazar-subtitle w-50 mx-auto mt-3 mb-5">Order your Ecommerce Fashion, Electronics, Furniture and Groceries goods from thousands of preffered shops and vendors in online and get delivery in home.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="andbaazar-service-item media align-items-center" :style="{ 'background-image': 'url(' + require(`~/assets/images/services-img/service-bg-img.png`) + ')' }">
              <div class="service-img-wrap">
                <img :src="require('@/assets/images/services-img/ecommerce.png')" alt="Ecommerce">
              </div>
              <div class="media-body">
                <h3 class="mt-0">Fashion</h3>
                <p class="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi necessitatibus veritatis ipsum harum neque incidunt, ipsam vitae rerum aut?</p>
                <a href="#" class="color-red font-weight-600">Explore now</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="andbaazar-service-item media align-items-center" :style="{ 'background-image': 'url(' + require(`~/assets/images/services-img/service-bg-img.png`) + ')' }">
              <div class="service-img-wrap">
                <img :src="require('@/assets/images/services-img/krishi-baazar.png')" alt="Krishibaazar">
              </div>
              <div class="media-body">
                <h3 class="mt-0">Electronics</h3>
                <p class="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi necessitatibus veritatis ipsum harum neque incidunt, ipsam vitae rerum aut?</p>
                <a href="#" class="color-red font-weight-600">Explore now</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="andbaazar-service-item media align-items-center" :style="{ 'background-image': 'url(' + require(`~/assets/images/services-img/service-bg-img.png`) + ')' }">
              <div class="service-img-wrap">
                <img :src="require('@/assets/images/services-img/auction.png')" alt="Auction">
              </div>
              <div class="media-body">
                <h3 class="mt-0">Furniture</h3>
                <p class="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi necessitatibus veritatis ipsum harum neque incidunt, ipsam vitae rerum aut?</p>
                <a href="#" class="color-red font-weight-600">Explore now</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="andbaazar-service-item media align-items-center" :style="{ 'background-image': 'url(' + require(`~/assets/images/services-img/service-bg-img.png`) + ')' }">
              <div class="service-img-wrap">
                <img :src="require('@/assets/images/services-img/sme.png')" alt="SME">
              </div>
              <div class="media-body">
                <h3 class="mt-0">Groceries</h3>
                <p class="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quasi necessitatibus veritatis ipsum harum neque incidunt, ipsam vitae rerum aut?</p>
                <a href="#" class="color-red font-weight-600">Explore now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="join-with-us-area main-services-area section-b-40-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="andbaazar-section-title text-center">
              <h1>Join with us</h1>
              <p class="andbaazar-subtitle w-50 mx-auto mt-3 mb-5">Be a part of the Andbaazar community. Become a merchant or agent to grow your business. Join our agent team and earn special comission.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-6">
            <div class="andbaazar-service-item join-with-us-item media align-items-center p-0">
              <div class="service-img-wrap">
                <img :src="require('@/assets/images/services-img/vendor.jpg')" alt="Vendor" class="img-fluid">
              </div>
              <div class="media-body">
                <h3 class="mt-0">Become a vendor</h3>
                <p class="my-3">Reach more customers and achieve growth with us </p>
                <a href="#" class="theme-button small-button rounded">Explore now</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-6">
            <div class="andbaazar-service-item join-with-us-item media align-items-center p-0">
              <div class="service-img-wrap">
                <img :src="require('@/assets/images/services-img/agent.jpg')" alt="Agent" class="img-fluid">
              </div>
              <div class="media-body">
                <h3 class="mt-0">Become an agent</h3>
                <p class="my-3">Reach more customers and achieve growth with us </p>
                <a href="#" class="theme-button small-button rounded">Explore now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="discover-andbaazar-app bg-different p-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-6 col-xl-6">
            <div class="discover-andbaazar-left d-flex h-100">
              <h3>Discover the new Andbaazar app</h3>
              <p class="mt-3 mb-5">Get what you need, when you need it.</p>
              <div class="download-app-btn">
                <a href="#" class="mr-2"><img :src="require('@/assets/images/google-play.png')" alt="Google play"></a>
                <a href="#" class="mr-2"><img :src="require('@/assets/images/app-store.png')" alt="App store"></a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 col-xl-6">
            <div class="andbaazar-mobile-app">
              <img :src="require('@/assets/images/mobile-app.png')" alt="Mobile app">
            </div>
          </div>
        </div>
      </div>
    </section>

    <PaymentMethods/>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
}
</script>