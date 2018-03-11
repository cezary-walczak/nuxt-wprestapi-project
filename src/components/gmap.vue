<template lang="pug">
  section#gmap
</template>
<script>
import styles from './gmap-styles.js'

export default {
  data: function () {
    return {
      center: {
        lat: 52.201906, 
        lng: 20.982316
      },
    }
  },
  mounted: function () {
    const options = {
      zoom: 15,
      center: this.center,
      styles: styles
    }

    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.center),
      map: new google.maps.Map(document.getElementById('gmap'), options),
      icon: { scaledSize: new google.maps.Size(50, 50), url:'https://upload.wikimedia.org/wikipedia/commons/4/40/Heart-hand-shake.svg', }
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>