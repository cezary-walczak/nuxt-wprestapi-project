<template lang="pug">
  main
    router-link(to="/powitanie" exact) Powitanie
    router-link(to="/badania" exact) Badania
    router-link(to="/specjalisci" exact) Specjalisci
    router-view
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>