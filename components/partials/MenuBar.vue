<template>
  <!-- Menu Area Start ------->
  <section class="menu-section-area">
    <!--Top Menu-->
    <div class="top-menu bg-different py-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-8">
            <div class="header_topbar_info d-flex align-items-center">
              <div class="header_offer">
                <a href="tel:01222222">Hotline: +8801 22 22 22</a>
              </div>
              <div class="download_wrap d-flex align-items-center">
                <span class="mr-2">Download App</span>
                <ul class="icon_list text-center text-lg-left d-flex align-items-center">
                  <li><a href="#"><i class="fab fa-apple"></i></a></li>
                  <li><a href="#"><i class="fab fa-android"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div class="d-flex align-items-center justify-content-center justify-content-md-end">

              <b-dropdown id="dropdown-1" class="lng_dropdown">
                <template #button-content class="bg-transparent">
                  <img src="~/assets/images/eng.png" alt="english">English<i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="#"><img src="~/assets/images/eng.png" alt="english">English</b-dropdown-item>
                <b-dropdown-item to="#"><img src="~/assets/images/fn.png" alt="France">France</b-dropdown-item>
                <b-dropdown-item><img src="~/assets/images/us.png" alt="United States">United States</b-dropdown-item>
              </b-dropdown>

              <b-dropdown id="dropdown-1" class="ml-3 lng_dropdown currency_dropdown">
                <template #button-content class="bg-transparent">
                  USD<i class="fas fa-angle-down"></i>
                </template>
                <b-dropdown-item to="#">USD</b-dropdown-item>
                <b-dropdown-item to="#">EUR</b-dropdown-item>
                <b-dropdown-item to="#">GBR</b-dropdown-item>
              </b-dropdown>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Middle Menu-->
    <div class="middle-menu py-2">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-between align-items-center">
            <nuxt-link to="/" class="navbar-brand">
              <img src="~/assets/images/logo.png" alt="logo">
            </nuxt-link>
            <ProductSearch />
            <ul class="attr-nav d-flex align-items-center">
              <b-dropdown id="dropdown-1" class="cart_dropdown middle-menu-dropdown">
                <template #button-content class="bg-transparent">
                  <i class="fas fa-cart-arrow-down"></i>
                  <span class="cart_count">2</span>
                </template>

                <div class="cart_list">

                  <b-dropdown-item to="#">
                    <img src="~/assets/images/products/1.jpg" class="mr-3" alt="product">
                    <div class="media-body">
                      <h6 class="mt-0 mb-1 d-flex justify-content-between align-items-center font-14 text-capitalize"><span>product name</span><i class="fas fa-times"></i></h6>
                      <p>1x$81.00</p>
                    </div>
                  </b-dropdown-item>

                  <b-dropdown-item to="#">
                    <img src="~/assets/images/products/1.jpg" class="mr-3" alt="product">
                    <div class="media-body">
                      <h6 class="mt-0 mb-1 d-flex justify-content-between align-items-center font-14 text-capitalize"><span>product name</span><i class="fas fa-times"></i></h6>
                      <p>1x$81.00</p>
                    </div>
                  </b-dropdown-item>

                  <div class="cart_footer">
                    <p class="cart_total d-flex align-items-center justify-content-between"><strong>Subtotal:</strong> <span class="cart_price"> <span class="price_symbole">$159.00</span></span></p>
                    <p class="cart_buttons d-flex justify-content-center"><nuxt-link class="theme-button font-12 rounded view-cart" to="/cart">View Cart</nuxt-link><nuxt-link to="/checkout" class="theme-button font-12 rounded checkout">Checkout</nuxt-link></p>
                  </div>

                </div>
              </b-dropdown>

              <b-dropdown id="dropdown-2" class="middle-menu-dropdown notification_dropdown">
                <template #button-content class="bg-transparent">
                  <i class="far fa-bell"></i>

                  <span class="cart_count">2</span>
                </template>

                <div class="cart_list notification_dropdown_list">

                  <b-dropdown-item to="#" class="media position-relative">
                    <div class="mr-3"><i class="far fa-bell"></i></div>
                    <div class="media-body d-flex justify-content-align-content-between">
                      <div class="notification-content pr-2">
                        <p class="font-14 text-break" style="white-space: pre-line"><strong>Morgan Mor</strong> says something about him. Says something....</p>
                        <p class="font-12"><i class="far fa-clock"></i> 1 day</p>
                      </div>
                      <div class="notification-buttons fon-12 d-flex flex-column justify-content-around">
                        <i class="fas fa-times"></i>
                        <i class="fas fa-check-circle"></i>
                      </div>
                    </div>
                  </b-dropdown-item>

                  <b-dropdown-item to="#" class="media position-relative">
                    <div class="mr-3"><i class="far fa-bell"></i></div>
                    <div class="media-body d-flex justify-content-align-content-between">
                      <div class="notification-content pr-2">
                        <p class="font-14 text-break" style="white-space: pre-line"><strong>Morgan Mor</strong> says something about him. Says something....</p>
                        <p class="font-12"><i class="far fa-clock"></i> 1 day</p>
                      </div>
                      <div class="notification-buttons fon-12 d-flex flex-column justify-content-around">
                        <i class="fas fa-times"></i>
                        <i class="fas fa-check-circle"></i>
                      </div>
                    </div>
                  </b-dropdown-item>

                  <b-dropdown-item to="#" class="media position-relative">
                    <div class="mr-3"><i class="far fa-bell"></i></div>
                    <div class="media-body d-flex justify-content-align-content-between">
                      <div class="notification-content pr-2">
                        <p class="font-14 text-break" style="white-space: pre-line"><strong>Morgan Mor</strong> says something about him. Says something....</p>
                        <p class="font-12"><i class="far fa-clock"></i> 1 day</p>
                      </div>
                      <div class="notification-buttons fon-12 d-flex flex-column justify-content-around">
                        <i class="fas fa-times"></i>
                        <i class="fas fa-check-circle"></i>
                      </div>
                    </div>
                  </b-dropdown-item>

                  <div class="text-center see-all-btn"><nuxt-link to="#" class="small-button theme-button rounded">See all</nuxt-link></div>

                </div>
              </b-dropdown>

              <b-dropdown id="dropdown-3" class="middle-menu-dropdown user_dropdown">
                <template #button-content class="bg-transparent">
                  <i class="far fa-user"></i>
                </template>

                <div class="cart_list user_dropdown_list">
                  <!--  For Authenticate Users -->
                  <span v-if="$auth.loggedIn">
                    <b-dropdown-item :href="$config.CUSTOMER_PANEL_URL">
                      <div class="mr-3"><i class="far fa-smile"></i></div>
                      <div class="media-body">
                        <p>Manage my account</p>
                      </div>
                    </b-dropdown-item>

                    <b-dropdown-item :href="$config.CUSTOMER_PANEL_URL+'/my-orders'">
                      <div class="mr-3"><i class="fas fa-box"></i></div>
                      <div class="media-body">
                        <p>Manage my account</p>
                      </div>
                    </b-dropdown-item>

                    <b-dropdown-item :href="$config.CUSTOMER_PANEL_URL+'/wishlist'">
                      <div class="mr-3"><i class="far fa-heart"></i></div>
                      <div class="media-body">
                        <p>My wishlist</p>
                      </div>
                    </b-dropdown-item>

                    <b-dropdown-item :href="$config.CUSTOMER_PANEL_URL+'/my-orders'">
                      <div class="mr-3"><i class="far fa-star"></i></div>
                      <div class="media-body">
                        <p>My reviews</p>
                      </div>
                    </b-dropdown-item>

                    <b-dropdown-item :href="$config.CUSTOMER_PANEL_URL+'/my-orders'">
                      <div class="mr-3"><i class="far fa-times-circle"></i></div>
                      <div class="media-body">
                        <p>My returns and cancellations</p>
                      </div>
                    </b-dropdown-item>

                    <b-dropdown-item @click.prevent="logout">
                      <div class="mr-3"><i class="fas fa-sign-out-alt"></i></div>
                      <div class="media-body">
                        <p>Logout</p>
                      </div>
                    </b-dropdown-item>
                  </span>

                  <!--  For UnAuthenticate Users -->
                  <span v-else>
                    <b-dropdown-item to="/auth/registration">
                      <div class="mr-3"><i class="far fa-user"></i></div>
                        <div class="media-body">
                          <p>Signup</p>
                        </div>
                    </b-dropdown-item>

                    <b-dropdown-item to="/auth/login">
                      <div class="mr-3"><i class="fas fa-key"></i></div>
                        <div class="media-body">
                          <p>Login</p>
                        </div>
                    </b-dropdown-item>
                  </span>
                </div>
              </b-dropdown>

            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--Bottom Menu-->
    <div class="bottom-menu bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav id="mainNav" class="navbar navbar-expand-lg">

              <div class="col-md-3 col-lg-3 pl-0">
                <div class="mr-1 h-100">
                  <!-- Categories Nav Dropdown for Desktop -->
                  <b-dropdown id="categories_nav_dropdown" class="all-categories-button w-100  bg-red px-3 categories_nav_dropdown">
                    <template #button-content class="bg-transparent">
                      <i class="fas fa-bars mr-2"></i><h6>All categories</h6><i class="fas fa-angle-down ml-2"></i>
                    </template>
                    <ParentCategoryList />
                  </b-dropdown>
                </div>
              </div>

              <div class="col-md-9 col-lg-9 p-0">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">All Shops</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Best Offers</a>
                    </li>
                  </ul>
                  <ul class="navbar-nav  my-2 my-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Sell on Andbaazar</a>
                    </li>
                    <b-nav-item-dropdown right class="track-order-dropdown">
                      <template #button-content>
                        Track my order
                      </template>

                      <div class="last-order-list mb-3">
                        <h6 class=" mb-2">My last order</h6>

                        <li><nuxt-link to="/my-account/my-orders/1">21/12/2020- Order 61242536578912</nuxt-link></li>
                        <li><nuxt-link to="/my-account/my-orders/2">21/12/2020- Order 61242536578912</nuxt-link></li>
                        <li><nuxt-link to="/my-account/my-orders/3">21/12/2020- Order 61242536578912</nuxt-link></li>
                        <li><nuxt-link to="/my-account/my-orders/4">21/12/2020- Order 61242536578912</nuxt-link></li>
                      </div>

                      <h6 class=" mb-2">Track my order</h6>

                      <b-form inline>
                        <label for="track_order">Your order number</label>

                        <input type="text" class="form-control font-14" id="track_order" placeholder="eg.123456789">

                        <button class="theme-button rounded-left-0 rounded-right"><i class="fas fa-chevron-right"></i></button>
                        <span class="d-block font-12 mt-3">For any other inquiries, <nuxt-link to="/contact-us" class=" color-blue">Click here</nuxt-link> </span>
                      </b-form>
                    </b-nav-item-dropdown>

                  </ul>
                </div>
              </div>

                <!-- Mobile Device Menu and Buttons Wrap -->
                <div class="mobile_all_menu_container w-100 d-flex align-content-center justify-content-between">

                  <!-- Mobile Sidebar Category Menu Left -->
                  <b-button v-b-toggle.sidebar_category_menu class="sidebar-menu-button bg-transparent border-0"><i class="fas fa-bars"></i></b-button>

                  <!-- Sidebar Mobile Category Menu Left -->
                  <b-sidebar id="sidebar_category_menu" left shadow backdrop>
                    <div class="px-3 py-2">
                      <ParentCategoryList />
                    </div>
                  </b-sidebar>
                  <!-- Mobile Sidebar Category Menu -->

                  <div class="mobile_right_menu_wrap d-flex align-content-center">
                    <div class="mobile_menu_search_wrap position-relative mr-3">
                      <ProductSearch />
                    </div>

                    <!-- Sidebar Menu General -->
                      <!-- Sidebar Menu General Button -->
                      <b-button v-b-toggle.sidebar_general_menu class="sidebar-menu-button bg-transparent border-0"><i class="fas fa-bars"></i></b-button>

                      <b-sidebar id="sidebar_general_menu" right shadow backdrop>
                        <div class="px-3 py-2">
                          <ul>
                            <li class="nav-item">
                              <a class="nav-link" href="#">All Shops</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Best Offers</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Sell on Andbaazar</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Track my order</a>
                            </li>
                        </ul>
                        </div>
                      </b-sidebar>
                    <!-- Sidebar Menu General -->

                  </div>
                </div>
                <!-- Mobile Device Menu and Buttons Wrap -->

            </nav>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Menu Area End --------->
</template>

<script>
  export default {
    name: 'menuBar',
    methods:{
      logout(){
        this.$auth.logout();
        this.$router.push('/');
      }
    },
    computed:{
      userAuthStatus(){
        return this.$store.state.userinfo.userLoggedIn;
      }
    }
  }
</script>

<style scoped>

</style>

