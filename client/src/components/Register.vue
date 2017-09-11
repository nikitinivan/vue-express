<template>
  <div class="">
    <h1>Register</h1>
    <p>
      <input
      type="email"
      name="email"
      placeholder="email"
      v-model="email">
    </p>
    <p>
      <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password">
    </p>
    <button
      @click="register">Register
    </button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email has changed', value)
  //   }
  // },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
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

</style>
