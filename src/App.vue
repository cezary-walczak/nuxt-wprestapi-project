<template lang="pug">
  main
    nav
      router-link(to="/powitanie" exact) powitanie
      router-link(to="/specjalisci" exact) specjalisci
      router-link(to="/badania" exact) badania
      router-link(to="/kontakt" exact) kontakt
      router-link(to="/muzykoterapia" exact) muzykoterapia
      router-link(to="/podrozeodserca" exact) podrozeodserca
      router-link(to="/byclekarzem" exact) byclekarzem
      router-link(to="/slowokardiologa" exact) slowokardiologa

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
      slowokardiologa: ''
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
    nav 
      display flex
      justify-content flex-end
      padding 1vh 1vw
      a
        font-size 0.75rem
        padding 1vh 1vw
        text-decoration none
        text-transform uppercase
        &.router-link-active
          border: 1px solid bialy
</style>