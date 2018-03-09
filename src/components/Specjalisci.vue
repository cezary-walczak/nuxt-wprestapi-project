<template lang="pug">
  section#specjalisci
    .items(v-for="item in specjalisci")
      .obrazek(v-bind:style="{ backgroundImage: 'url(' + item.acf.obrazek.url + ')' }")
      .margines
      .tekst
        .specjalizacja(v-html="item.acf.specjalizacja")   
        .naglowek
          h1(v-html="item.acf.tekst")
        .edytor(v-html="item.acf.edytor")
</template>

<script>
export default {
    props: ['specjalisci']
}
</script>

<style lang="stylus">
  section#specjalisci
    .items
      .tekst
        .specjalizacja
          text-transform uppercase
</style>
