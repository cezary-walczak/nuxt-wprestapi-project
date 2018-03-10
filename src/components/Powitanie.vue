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
    props: ['powitanie']
}
</script>

<style lang="stylus">

</style>
