<template lang="pug">
  section#specjalisci
    .items(v-for="item in specjalisci") {{item.acv}}
      .obrazek
        .zdjecie(v-bind:style="{ backgroundImage: 'url(' + item.acf.zdjecie.url + ')' }")
      .margines
      .tekst
        .specjalizacja(v-html="item.acf.specjalizacja")
        .naglowek
          h1(v-html="item.acf.naglowek")
        .opis(v-html="item.acf.opis")
</template>

<script>
export default {
    props: ['specjalisci']
}
</script>

<style lang="stylus">
  @import '../*'
  section#specjalisci
    .items
      .obrazek
        width (col * 2)
      .margines
        width (col * 1)
      .tekst
        width (col * 5)
        .specjalizacja
          text-transform uppercase

</style>
