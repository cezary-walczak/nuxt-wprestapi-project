<template lang="pug">
  section#powitanie
    .items(v-for="item in powitanie")
      .obrazek
        .zdjecie(v-bind:style="{ backgroundImage: 'url(' + item.acf.zdjecie.url + ')' }")
      .margines
      .tekst 
        .naglowek
          h1(v-html="item.acf.naglowek")
        .opis(v-html="item.acf.opis")
</template>

<script>
export default {
    props: ['powitanie'],
    mounted() {
      window.scrollTo(0, 0)
    }
}
</script>

<style lang="stylus" scoped>
  @import '../*'
  section#powitanie
    .items:first-child
      .obrazek
        .zdjecie
          width (col * 8)
          max-height 20vh
          background no-repeat center center / contain
</style>
