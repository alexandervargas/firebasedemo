import Vue from 'vue'
import Vuex from 'vuex'

import Session from './modules/session'
import Uploader from './modules/uploader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Session,
    Uploader
  }
})
