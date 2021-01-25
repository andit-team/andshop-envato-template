<template>
  <!-- Login/Registration Area Start -->
  <section class="login-registration-area section-t-space">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4">
          <div class="alert alert-danger alert-dismissible" v-if="authFailed" @click="authFailed=false">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Warning!</strong> {{ authError }}.
          </div>
          <form class="p-4" @submit.prevent="userLogin">
            <h4 class="text-center mb-4">Login</h4>
            <div class="form-group">
              <input type="text" class="form-control" id="email" placeholder="Email/Phone No" v-model="uname">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="checkbox" v-model="remember_me">
              <div class="remember-box d-flex justify-content-between">
                <label class="form-check-label" for="checkbox">Remember me</label>
                <nuxt-link to="/auth/forget-password">Forgot password ?</nuxt-link>
              </div>
            </div>

            <div class="form-group">
              <button type="submit" class="theme-button rounded w-100 justify-content-center">Log In</button>
            </div>
            <p class="dont-have-account text-center">Don’t have an account? <nuxt-link to="/auth/registration">Sign up</nuxt-link></p>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Login/Registration Area End -->
</template>

<script>
import {user_login, get_user_profile} from "~/api/urls";
export default {
  name: 'userLogin',
  data(){
    return{
      uname: '',
      password: '',
      remember_me: false,
      authFailed: false,
      authError: '',
      api_base_url : this.$config.API_BASE_URL
    }
  },
  methods:{
    async userLogin() {
      try {
        let userInfo = {
          uname: this.uname,
          password: this.password,
          remember_me: this.remember_me,
        };
        let res = await this.$auth.loginWith('local', { data: userInfo });
        if (res.data.error === true){
          this.authFailed=true
          this.authError=res.data.msg
        }
        else {
          this.$router.push('/');
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

}
</script>

<style>

</style>
