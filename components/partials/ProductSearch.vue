<template>
  <div class="product_search_form rounded_input">
    <form @submit.prevent="searchProduct">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="custom_select">
            <select class="first_null" v-model="productCategory">
              <option value="all">All Category</option>
              <option value="Dresses">Dresses</option>
              <option value="Shirt-Tops">Shirt &amp; Tops</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Pents">Pents</option>
              <option value="Jeans">Jeans</option>
            </select>
          </div>
        </div>

        <div class="search_2nd_box">
          <b-navbar class="h-100">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item-dropdown>
                  <template #button-content>
                    <i class="fas fa-caret-down"></i>
                  </template>
                  <b-dropdown-item active><h6>Products </h6><p>Search your desired products</p></b-dropdown-item>
                  <b-dropdown-item ><h6>Shops </h6><p>Search your preferred shops</p></b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>

        <input class="form-control" placeholder="I'm searching for..." required type="text" v-model="searchQuery">
        <button type="submit" class="search_btn2"><i class="fa fa-search"></i></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductSearch",
  data(){
    return {
      productCategory : 'all',
      searchQuery: ''
    }
  },
  methods: {
    searchProduct(){
      this.$router.push('/search-results?category='+this.productCategory+'&query='+this.searchQuery)

    }
  }
}
</script>

<style scoped>
</style>
