<template lang="pug">
  section#podrozeodserca
    .items(v-for="item in podrozeodserca")
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
    props: ['podrozeodserca']
}
</script>

<style lang="stylus">

</style>
