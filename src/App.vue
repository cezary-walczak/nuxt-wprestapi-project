<template lang="pug">
  main
    #nav-btn(v-on:click="switchNav") &#x2630; MENU
    nav
      .gabinet(v-show="activeNav" v-on:click="switchNav")
        router-link(to="/powitanie" exact ) 
          h1 powitanie
        router-link(to="/specjalisci") 
          h1 specjaliści
        router-link(to="/badania") 
          h1 badania
        router-link(to="/kontakt") 
          h1 kontakt
        router-link(to="/muzykoterapia") 
          h1 muzykoterapia
        router-link(to="/podrozeodserca") 
          h1 podróże od serca
      //- .osobista
            router-link(to="/powitanie" exact) powitanie
      //-   router-link(to="/podrozeodserca" exact) podróże od serca
      //-   router-link(to="/byclekarzem" exact) być lekarzem
      //-   router-link(to="/slowokardiologa" exact) słowo kardiologa
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

      activeNav: false
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

    switchNav() {
      this.activeNav = !this.activeNav
    }
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
      color zolty
      border 1px solid zolty
      z-index 10
    nav
      .gabinet
        width 100%
        height 100vh
        padding (col * 2)
        position fixed
        z-index 100
        display flex
        flex-flow column nowrap
        justify-content space-around
        align-content stretch
        background zolty
        transition 1s all
        a
          text-decoration none
          h1
            color bordo
            transition 1s all
            &:hover
              text-indent 1vw
              color czerwony
</style>