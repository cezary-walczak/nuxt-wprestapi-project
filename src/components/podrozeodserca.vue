<template lang="pug">
  section#podrozeodserca
    .items(v-for="item in podrozeodserca")
      .obrazek(v-bind:style="{ backgroundImage: 'url(' + item.acf.obrazek.url + ')' }")
      .tekst
        .naglowek(v-html="item.acf.tekst")
        .specjalizacja(v-html="item.acf.specjalizacja")
        .edytor(v-html="item.acf.edytor")
</template>

<script>
export default {
    props: ['podrozeodserca']
}
</script>

<style lang="stylus">

</style>
