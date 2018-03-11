<template lang="pug">
  main
    #nav-btn(v-on:click="toggleNav") &#x2630; MENU
    nav

      .gabinet(v-show="activeNav" v-on:click="toggleNav")
        router-link(to="/powitanie" exact) 
          h1 powitanie
        router-link(to="/specjalisci" exact) 
          h1 specjaliści
        router-link(to="/badania" exact) 
          h1 badania
        router-link(to="/kontakt" exact) 
          h1 kontakt
        router-link(to="/muzykoterapia" exact) 
          h1 muzykoterapia
        router-link(to="/podrozeodserca" exact) 
          h1 podróże od serca
        
    router-view(
      v-bind:powitanie="powitanie"
      v-bind:specjalisci="specjalisci"
      v-bind:badania="badania"
      v-bind:kontakt="kontakt"
      v-bind:muzykoterapia="muzykoterapia"
      v-bind:podrozeodserca="podrozeodserca"
      v-bind:byclekarzem="byclekarzem"
      v-bind:slowokardiologa="slowokardiologa"
    )

    .layout-lines
      .layout-line
      .layout-line
      .layout-line
      .layout-line
      .layout-line
      .layout-line
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      powitanie: '',
      specjalisci: '',
      badania: '',
      kontakt: '',
      muzykoterapia: '',
      podrozeodserca: '',
      byclekarzem: '',
      slowokardiologa: '',

      activeNav: false,
      switchNav: true
    }
  },
  methods: {
    getPowitanie() {
      axios.get('http://localhost/wordpress/wp-json/wp/v2/powitanie?order=asc')
      .then(response => { this.powitanie = response.data })
      .catch(error => { console.log(error) })
    },
    getSpecjalisci() {
      axios.get('http://localhost/wordpress/wp-json/wp/v2/specjalisci?order=asc')
      .then(response => { this.specjalisci = response.data })
      .catch(error => { console.log(error) })
    },
    getBadania() {
      axios.get('http://localhost/wordpress/wp-json/wp/v2/badania?order=asc')
      .then(response => { this.badania = response.data })
      .catch(error => { console.log(error) })
    },
    getKontakt() {
      axios.get('http://localhost/wordpress/wp-json/wp/v2/kontakt?order=asc')
      .then(response => { this.kontakt = response.data })
      .catch(error => { console.log(error) })
    },
    getMuzykoterapia() {
      axios.get('http://localhost/wordpress/wp-json/wp/v2/muzykoterapia?order=asc')
      .then(response => { this.muzykoterapia = response.data })
      .catch(error => { console.log(error) })
    },
    getPodrozeOdSerca() {
      axios.get('http://localhost/wordpress/wp-json/wp/v2/podrozeodserca?order=asc')
      .then(response => { this.podrozeodserca = response.data })
      .catch(error => { console.log(error) })
    },
    getBycLekarzem() {
      axios.get('http://localhost/wordpress/wp-json/wp/v2/byclekarzem?order=asc')
      .then(response => { this.byclekarzem = response.data })
      .catch(error => { console.log(error) })
    },
    getSlowoKardiologa() {
      axios.get('http://localhost/wordpress/wp-json/wp/v2/slowokardiologa?order=asc')
      .then(response => { this.slowokardiologa = response.data })
      .catch(error => { console.log(error) })
    },

    toggleNav() {
      this.activeNav = !this.activeNav
    },
  },  
  created() {
    this.getPowitanie(),
    this.getSpecjalisci(),
    this.getBadania(),
    this.getKontakt(),
    this.getMuzykoterapia(),
    this.getPodrozeOdSerca(),
    this.getBycLekarzem(),
    this.getSlowoKardiologa()
  }
}
</script>

<style lang="stylus">
  @import '*'
  main
    #nav-btn
      position fixed
      right 0
      padding 1vh 1vw
      margin 10vh 5vw
      border 1px solid bialy
      z-index 10
    nav
      width 100%
      padding 0 (col * 2)
      display flex
      position fixed
      z-index 100
      background zolty
      div
        width 50%
        height 100vh
        display flex
        flex-flow column nowrap
        justify-content center
        a
          text-decoration none
          h1
            color bordo
            transition 1s all
            padding 0.5em 0 0.5em 0
            &:hover
              text-indent 1vw
              color czerwony
</style>