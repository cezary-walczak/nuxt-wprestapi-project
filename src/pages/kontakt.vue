<template lang="pug">
  section#kontakt
    .items(v-for="item in kontakt")
      .obrazek
        .zdjecie(v-bind:style="{ backgroundImage: 'url(' + item.acf.zdjecie.url + ')' }")
      .margines
      .tekst 
        .naglowek
          h1(v-html="item.acf.naglowek")
        .opis(v-html="item.acf.opis")
    gmap
</template>

<script>
import gmap from '../components/gmap.vue'

export default {
    components: {
      gmap
    },
    props: ['kontakt'],
    mounted() {
      window.scrollTo(0, 0)
    }
}
</script>

<style lang="stylus" scoped>

</style>
