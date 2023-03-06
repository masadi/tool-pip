<template>
  <b-row>
    <b-col cols="12">
      <leaflet-geo-jSON />
      <!--leaflet-basic />
      <leaflet-marker-circle-polygon />
      <leaflet-popup />
      <leaflet-group />
      <leaflet-custom-icon /-->
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import LeafletGeoJSON from './LeafletGeoJSON.vue'
import LeafletBasic from './LeafletBasic.vue'
import LeafletMarkerCirclePolygon from './LeafletMarkerCirclePolygon.vue'
import LeafletPopup from './LeafletPopup.vue'
import LeafletGroup from './LeafletGroup.vue'
import LeafletCustomIcon from './LeafletCustomIcon.vue'

export default {
  components: {
    BRow,
    BCol,

    LeafletGeoJSON,
    //LeafletBasic,
    //LeafletMarkerCirclePolygon,
    //LeafletPopup,
    //LeafletGroup,
    //LeafletCustomIcon,
  },
  created() {
    this.$ability.update([
      {'action': 'manage'},
      {'subject': 'all'}
    ])
  }
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/libs/map-leaflet.scss';
</style>
