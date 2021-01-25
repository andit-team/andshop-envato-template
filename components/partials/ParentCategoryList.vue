<template>
  <ul class="parent_category_list">
    <b-dropdown-item v-for="(productCategory, index) in productCategoryList" :key="index" :to="`/categories/`+productCategory.slug">
        <span><img src="https://www.flaticon.com/svg/static/icons/svg/2922/2922982.svg" alt="krishibaazar">{{ productCategory.name }}</span><i class="fas fa-angle-right"></i>
    </b-dropdown-item>
  </ul>
</template>

<script>
  import {get_product_category_list} from "~/api/urls";

  export default {
    name : 'productCategoryList',
    data(){
      return{
        productCategoryList : [],
        api_base_url : this.$config.API_BASE_URL
      }
    },
    methods:{
      getProductCategoryList(){
        let self = this;
        let config = {
          headers: {'Content-Type': 'application/json'}
        };
        this.$axios.$get(this.api_base_url+get_product_category_list, config).then((res) => {
          if (res.error === false) {
            self.productCategoryList=res.data;
          }
          else {
            console.log(res.msg)
          }
        }).catch((error) => {
          console.log(error);
        });
      }
    },

    mounted() {
      this.getProductCategoryList();
    }
  }
</script>

<style>

</style>
