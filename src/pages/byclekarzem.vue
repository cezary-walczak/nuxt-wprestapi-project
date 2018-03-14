<template lang="pug">
  section#byclekarzem
    .items(v-for="(item, index) in byclekarzem")
      article(v-bind:class="item.slug")
        .obrazek
          .zdjecie(v-bind:style="{ backgroundImage: 'url(' + item.acf.zdjecie.url + ')' }")
        .margines
        .tekst 
          .naglowek
            h1(v-html="item.acf.naglowek")
            a(v-on:click="togglinArticle(item.slug)") Czytaj...
      article(v-bind:class="item.slug").hide
        .opis(v-html="item.acf.opis")
</template>

<script>
export default {
    props: ['byclekarzem'],
    mounted() {
      window.scrollTo(0, 0)
    },
    data() {
      return {
        articleClass: ''
      }
    },
    methods: {
      togglinArticle(itemSlug) {
        document.getElementsByClassName(itemSlug)[1].classList.toggle("hide")
      },
      // closeinArticle(itemSlug) {
      //   document.getElementsByClassName(itemSlug)[1].classList.add("hide")
      // }
    }
}
</script>

<style lang="stylus" scoped>
  @import '../*'
  section#byclekarzem
    .items
      flex-flow column
      article
        display flex
        .obrazek
          width (col * 3)
        .margines
          width (col * 1)
        .tekst
          width (col * 4)
          .naglowek
            a 
              padding 1vh 1vw
              border 1px solid bialy
              z-index 10
              transition 1s color border
              &:hover
                color zolty
                border 1px solid zolty
                cursor pointer
        .opis
          width (col * 8)
          padding 5vh 0
          text-align justify

      .hide
        display: none
</style>
