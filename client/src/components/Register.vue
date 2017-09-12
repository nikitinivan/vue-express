<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
            <input
            type="email"
            name="email"
            placeholder="email"
            v-model="email">
            <br>
            <input
            type="password"
            name="password"
            placeholder="password"
            v-model="password">
            <br>
            <div class="error" v-html="error"/>
            <br>
            <v-btn
              class="cyan"
              @click="register">Register
            </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
<!--   <div class="">
  <h1>Register</h1>


</div> -->
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email has changed', value)
  //   }
  // },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello world'
  //   }, 2000)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: black;
  }
</style>
