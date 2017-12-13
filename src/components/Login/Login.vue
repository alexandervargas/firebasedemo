<template>
  <div>
    <h1>Login</h1>
    <form>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
      </div>
      <button type="button" class="btn btn-primary" @click="login">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import * as constants from '@/store/constants'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      signIn: constants.SESSION_SIGN_IN
    }),
    login () {
      this.signIn({ email: this.email, password: this.password })
    }
  }
}
</script>
