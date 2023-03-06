<template>
  <b-row>
    <b-col cols="12">
      <leaflet-geo-jSON :all_wilayah="data.all_wilayah" />
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
  data() {
    return {
      data: {},
    }
  },
  created() {
    this.$ability.update([
      {'action': 'manage'},
      {'subject': 'all'}
    ])
    this.$http.get('/dashboard/wilayah').then(response => {
      this.data = response.data
    });
  }
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/libs/map-leaflet.scss';
</style>
