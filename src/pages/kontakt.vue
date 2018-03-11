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
}
</script>

<style lang="stylus">
  section#kontakt
    .items
      .obrazek
      .margines
      .tekst 
        .naglowek
          h1
        .opis
          strong 
            font-weight 900

</style>
