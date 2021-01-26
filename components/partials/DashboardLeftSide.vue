<template>
  <div class="dashboard-left-bar bg-different pt-4 sticky">
    <!-- Account User Photo -->
    <div class="user-profile-photo-wrap card rounded-0 border-right-0 border-left-0 border-top-0 border-bottom border-light bg-transparent text-center">
      <!-- <div class="customer-info-box"> -->
      <div class="user-photo-wrap rounded-circle mx-auto position-relative">
        <img :src='"@/assets/images/dashboard/user.png"' alt="Suraiya Aysha" class="rounded-circle w-100">

        <div class="upload-profile-photo">
          <form>
            <div class="form-group">
              <div class="upload-img" style="width:168px;">
                <b-button class="customer-info-box theme-button2 mx-auto text-dark">
                  <span class="font-12">Upload Photo</span>
                  <b-form-file plain accept=".jpg, .jpeg, .png, .gif, .svg"></b-form-file>
                </b-button>
              </div>
            </div>
          </form>
        </div>

      </div> 

      <div class="p-2">
        <h6>Suraiya Aysha</h6>
        <p class="font-14">+955 81254758</p>
        <p class="total-balance-btn rounded justify-content-center bg-success text-white m-auto">$0.00</p>
      </div>
    </div>
    <!-- Account User Photo -->

    <!-- Left Menu Item List -->
    <div class="dashboard-menu-wrap pb-4 my-4">

      <nav class="mb-3 dashboard-left-menu-list">
        <b-nav vertical>
          <div class="left-menu-item"><b-nav-item to="/"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar"> Basic Information</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/my-account/address-book"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Address Book</b-nav-item></div>
          <div class="left-menu-item">
            <b-nav-item v-b-toggle.wallet-service><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Wallet Service<i class="fas fa-angle-right"></i></b-nav-item>
              <b-collapse id="wallet-service" class="sub-menu">
                <b-nav-item to="/wallet-service/transaction-history"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Transaction history</b-nav-item>
                <b-nav-item to="/wallet-service/recharge"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Recharge</b-nav-item>
                <b-nav-item to="/wallet-service/withdrawal-request"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Withdrawal request</b-nav-item>
              </b-collapse>
          </div>

          <div class="left-menu-item"><b-nav-item to="/my-account/wishlist"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Wishlist</b-nav-item></div>

          <div class="left-menu-item">
            <b-nav-item to="/my-account/my-orders/" v-b-toggle.my-orders><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">My Orders<i class="fas fa-angle-right"></i></b-nav-item>
              <b-collapse id="my-orders" class="sub-menu">
                <b-nav-item to="/my-account/my-returns"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">My Returns</b-nav-item>
                <b-nav-item to="/my-account/my-cancellations"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">My Cancellations</b-nav-item>
              </b-collapse>
          </div>

          <div class="left-menu-item"><b-nav-item to="/my-account/my-reviews"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">My Reviews</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="/my-account/notifications"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Notification</b-nav-item></div>
          <div class="left-menu-item"><b-nav-item to="#"><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">Logout</b-nav-item></div>
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