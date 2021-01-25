<template>
  <div>
    <div class="account-info-wrap d-flex mb-4">
      <div class="account-info-box d-flex rounded">
        <span class="mr-2">৳</span>
        <div>Account <span class="d-block">৳ <strong>0</strong></span></div>
      </div>
      <div class="account-info-box d-flex rounded">
        <span class="mr-2">৳</span>
        <div>Account <span class="d-block">৳ <strong>0</strong></span></div>
      </div>
      <div class="account-info-box d-flex rounded">
        <span class="mr-2">৳</span>
        <div>Account <span class="d-block">৳ <strong>0</strong></span></div>
      </div>
      <div class="account-info-box d-flex rounded">
        <span class="mr-2">৳</span>
        <div>Account <span class="d-block">৳ <strong>0</strong></span></div>
      </div>

    </div>

    <!-- Transaction History -->
    <div class="transaction-history">
      <h5 class="mb-4">Transaction History</h5>

      <div v-if="transactionList" class="transaction-list">
        <ul class="list-unstyled">
          <li class="media">
            <img :src='"@/assets/images/products/1.jpg"' class="mr-3" alt="products">
            <div class="media-body d-flex justify-content-between">
              <div class="transaction-list-content">
                <h6 class="mt-0 mb-1">Product name</h6>
                Cras sitin vulputate at, tempus viverra turpis.
              </div>
              <button class="theme-button small-button rounded">Details</button>
            </div>
          </li>
          <li class="media">
            <img :src='"@/assets/images/products/5.jpg"' class="mr-3" alt="products">
            <div class="media-body d-flex justify-content-between">
              <div class="transaction-list-content">
                <h6 class="mt-0 mb-1">Product name</h6>
                Cras sitin vulputate at, tempus viverra turpis.
              </div>
              <button class="theme-button small-button rounded">Details</button>
            </div>
          </li>
          <li class="media">
            <img :src='"@/assets/images/products/2.jpg"' class="mr-3" alt="products">
            <div class="media-body d-flex justify-content-between">
              <div class="transaction-list-content">
                <h6 class="mt-0 mb-1">Product name</h6>
                Cras sitin vulputate at, tempus viverra turpis.
              </div>
              <button class="theme-button small-button rounded">Details</button>
            </div>
          </li>
          <li class="media">
            <img :src='"@/assets/images/products/3.jpg"' class="mr-3" alt="products">
            <div class="media-body d-flex justify-content-between">
              <div class="transaction-list-content">
                <h6 class="mt-0 mb-1">Product name</h6>
                Cras sitin vulputate at, tempus viverra turpis.
              </div>
              <button class="theme-button small-button rounded">Details</button>
            </div>
          </li>
        </ul>
      </div>
      
      <div v-else class="transaction-404 text-center">
        <img :src='"@/assets/images/dashboard/error.png"' alt="404">
        <h6>Sorry, No Transaction found</h6>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',

  data() {
    return {
      transactionList: true,
    }
  }
}
</script>

<style>

</style>