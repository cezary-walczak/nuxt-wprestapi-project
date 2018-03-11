import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import powitanie from './pages/powitanie.vue'
import Specjalisci from './pages/Specjalisci.vue'
import badania from './pages/badania.vue'
import kontakt from './pages/kontakt.vue'
import muzykoterapia from './pages/muzykoterapia.vue'
import podrozeodserca from './pages/podrozeodserca.vue'
import byclekarzem from './pages/byclekarzem.vue'
import slowokardiologa from './pages/slowokardiologa.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/wordpress', component: powitanie },
    { path: '/powitanie', component: powitanie },
    { path: '/specjalisci', component: Specjalisci },
    { path: '/badania', component: badania },
    { path: '/kontakt', component: kontakt },
    { path: '/muzykoterapia', component: muzykoterapia },
    { path: '/podrozeodserca', component: podrozeodserca },
    { path: '/byclekarzem', component: byclekarzem },
    { path: '/slowokardiologa', component: slowokardiologa },
  ],
  mode: 'history'
})