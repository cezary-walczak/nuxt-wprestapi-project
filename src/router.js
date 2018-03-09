import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import powitanie from './components/powitanie.vue'
import Specjalisci from './components/Specjalisci.vue'
import badania from './components/badania.vue'
import kontakt from './components/kontakt.vue'
import muzykoterapia from './components/muzykoterapia.vue'
import podrozeodserca from './components/podrozeodserca.vue'
import byclekarzem from './components/byclekarzem.vue'
import slowokardiologa from './components/slowokardiologa.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/', component: powitanie },
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