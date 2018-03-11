<template lang="pug">
  section#gmap
</template>
<script>
import styles from './gmap-styles.js'

export default {
  methods: {
    getGmap() {
      const options = {
        zoom: 16,
        center: { lat: 52.201906, lng: 20.982316 },
        styles: styles
      }

      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(options.center),
        map: new google.maps.Map(document.getElementById('gmap'), options),
        icon: { scaledSize: new google.maps.Size(50, 50), url:'https://upload.wikimedia.org/wikipedia/commons/4/40/Heart-hand-shake.svg', }
      })
    }
  },
  mounted() {
    this.getGmap()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../*'
  section#gmap 
    height 80vh
    margin -(col * 2)
    margin-top (col)
</style>