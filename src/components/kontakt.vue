<template lang="pug">
  section#kontakt
    .items(v-for="item in kontakt")
      .obrazek(v-bind:style="{ backgroundImage: 'url(' + item.acf.obrazek.url + ')' }")
      .tekst
        .naglowek(v-html="item.acf.tekst")
        .specjalizacja(v-html="item.acf.specjalizacja")
        .edytor(v-html="item.acf.edytor")
</template>

<script>
export default {
    props: ['kontakt']
}
</script>

<style lang="stylus">

</style>
