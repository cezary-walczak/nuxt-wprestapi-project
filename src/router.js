import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Badania from './components/Badania.vue';
import Powitanie from './components/Powitanie.vue';
import Specjalisci from './components/Specjalisci.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: '/', component: Powitanie },
    { path: '/powitanie', component: Powitanie },
    { path: '/badania', component: Badania },
    { path: '/specjalisci', component: Specjalisci },
  ],
  mode: 'history'
});