<template>
  <div class="dashboard-left-bar bg-white pt-4 sticky">
    <!-- Account User Photo -->
    <div class="user-profile-photo-wrap card rounded-0 border-right-0 border-left-0 border-top-0 border-bottom border-light bg-transparent text-center">
      <!-- <div class="customer-info-box"> -->
      <div class="user-photo-wrap rounded-circle mx-auto">
        <img :src='"@/assets/images/dashboard/user.png"' alt="Suraiya Aysha" class="rounded-circle w-100">
      </div> 

      <div class="p-2">
        <h6>Suraiya Aysha</h6>
        <p class="font-14">019236547</p>
        <p class="total-balance-btn rounded justify-content-center bg-success text-white m-auto">$0.00</p>
      </div>
    </div>
    <!-- Account User Photo -->

    <!-- Left Menu Item List -->
    <div class="dashboard-menu-wrap pb-4 my-4">

      <nav class="mb-3 dashboard-left-menu-list">
        <b-nav vertical>
          <div class="left-menu-item"><b-nav-item to="/my-account"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar"> Basic Information</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/my-account/address-book"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Address Book</b-nav-item></div>
          <div class="left-menu-item">
            <b-nav-item v-b-toggle.wallet-service><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Wallet Service<i class="fas fa-angle-right"></i></b-nav-item>
              <b-collapse id="wallet-service" class="sub-menu">
                <b-nav-item to="/my-account/wallet-service/transaction-history"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Transaction history</b-nav-item>
                <b-nav-item to="/my-account/wallet-service/recharge"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Recharge</b-nav-item>
                <b-nav-item to="/my-account/wallet-service/withdrawal-request"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Withdrawal request</b-nav-item>
              </b-collapse>
          </div>

          <div class="left-menu-item"><b-nav-item to="/my-account/wishlist"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Wishlist</b-nav-item></div>

          <div class="left-menu-item">
            <b-nav-item to="/my-account/my-orders/" v-b-toggle.my-orders><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">My Orders<i class="fas fa-angle-right"></i></b-nav-item>
              <b-collapse id="my-orders" class="sub-menu">
                <b-nav-item to="/my-returns"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">My Returns</b-nav-item>
                <b-nav-item to="/my-cancellations"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">My Cancellations</b-nav-item>
              </b-collapse>
          </div>
          <div class="left-menu-item">
            <b-nav-item v-b-toggle.news-feeds><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">News feeds<i class="fas fa-angle-right"></i></b-nav-item>
              <b-collapse id="news-feeds" class="sub-menu">
                <b-nav-item to="/my-account/news-feed/"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">All</b-nav-item>
                <b-nav-item to="/my-posts"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">My Posts</b-nav-item>
              </b-collapse>
          </div>

          <div class="left-menu-item"><b-nav-item to="/my-account/my-reviews"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">My Reviews</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/my-account/notifications"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Notification</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Logout</b-nav-item></div>
        </b-nav>
      </nav>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>