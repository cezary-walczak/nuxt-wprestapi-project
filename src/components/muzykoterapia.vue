<template lang="pug">
  section#muzykoterapia
    .items(v-for="item in muzykoterapia")
      .obrazek(v-bind:style="{ backgroundImage: 'url(' + item.acf.obrazek.url + ')' }")
      .tekst
        .naglowek(v-html="item.acf.tekst")
        .specjalizacja(v-html="item.acf.specjalizacja")
        .edytor(v-html="item.acf.edytor")
</template>

<script>
export default {
    props: ['muzykoterapia']
}
</script>

<style lang="stylus">

</style>
