<template lang="pug">
  section#slowokardiologa
    .items(v-for="item in slowokardiologa")
      .obrazek(v-bind:style="{ backgroundImage: 'url(' + item.acf.obrazek.url + ')' }")
      .tekst
        .naglowek(v-html="item.acf.tekst")
        .specjalizacja(v-html="item.acf.specjalizacja")
        .edytor(v-html="item.acf.edytor")
</template>

<script>
export default {
    props: ['slowokardiologa']
}
</script>

<style lang="stylus">

</style>
