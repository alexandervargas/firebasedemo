<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="nav-item" v-if="isLogged()">
          <a class="nav-link" href="javascript:void(0)" @click="logout">Logout</a>
        </li>
        <li class="nav-item" v-else>
          <router-link class="nav-link" :to="{ name: 'Login' }">Login</router-link>
        </li>
        <li class="nav-item dropdown" v-if="isLogged()">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Manage content
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'Uploader' }">Uploader</router-link>
            <router-link class="dropdown-item" :to="{ name: 'List' }">List</router-link>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import * as constants from '@/store/constants'

export default {
  methods: {
    ...mapActions({
      logout: constants.SESSION_SIGN_OUT
    }),
    ...mapGetters({
      isLogged: constants.SESSION_IS_LOGGED
    })
  }
}
</script>
