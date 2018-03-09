<template lang="pug">
  section#badania
    .items(v-for="item in badania")
      .obrazek(v-bind:style="{ backgroundImage: 'url(' + item.acf.obrazek.url + ')' }")
      .tekst
        .naglowek(v-html="item.acf.tekst")
        .edytor(v-html="item.acf.edytor")
</template>

<script>
export default {
    props: ['badania']
}
</script>

<style lang="stylus">

</style>


