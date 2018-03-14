<template lang="pug">
  section#slowokardiologa
    .items(v-for="item in slowokardiologa")
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
    props: ['slowokardiologa'],
    mounted() {
      window.scrollTo(0, 0)
    }
}
</script>

<style lang="stylus" scoped>

</style>
