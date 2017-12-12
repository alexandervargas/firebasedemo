import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Login from '@/components/Login/Login'
import Uploader from '@/components/Uploader/Uploader'
import Information from '@/components/Information/Information'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/uploader', name: 'Uploader', component: Uploader },
    { path: '/information', name: 'Information', component: Information }
  ]
})
