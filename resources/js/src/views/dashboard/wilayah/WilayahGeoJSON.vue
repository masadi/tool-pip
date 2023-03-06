<template>
  <b-card no-body>
    <div class="card-header">
      <b-card-title>PETA SMK INDONESIA</b-card-title>
    </div>
    <b-card-body>
      <p>{{longitude}}</p>
      <p>{{latitude}}</p>
      <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%" ref="myMap">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-geo-json v-if="show" v-for="(wilayah, index) in all_wilayah" :geojson="wilayah.geojson"
          :options="options(wilayah.option)" :key="'wilayah-' + index">
        </l-geo-json>
        <l-marker v-for="(marker, index) in markers" :lat-lng="marker.koordinat" :key="'marker-' + index">
          <l-popup>
            <ul class="list-group list-group no-padding">
              <li class="list-group-item list-group-item-info"><b>{{ marker.nama }}</b></li>
              <li class="list-group-item list-group-item-warning"><a :href="'/rekapitulasi-wilayah/' + marker.link">{{
                  marker.jml_smk
              }}
                  SMK</a></li>
            </ul>
          </l-popup>
        </l-marker>
      </l-map>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardTitle, BCardSubTitle, BCardBody
} from 'bootstrap-vue'
//import { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet'
import { latLng } from 'leaflet';
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LTooltip,
  LFeatureGroup,
  LGeoJson,
} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LFeatureGroup,
    LGeoJson,
    BCard,
    BCardTitle,
    BCardSubTitle,
    BCardBody,
  },
  props: {
    all_wilayah: {
      type: Array,
      default: () => [],
    },
    zoom: {
      type: Number
    },
    /*center: {
      type: Array,
      default: () => [],
    },*/
    longitude: {
      type: Number
    },
    latitude: {
      type: Number
    }
  },
  //[longitude, latitude]
  data: function () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markers: [],
      show: false,
      fillColor: "#e4ce7f",
      center: [-2.2196220, 117.5646680],
    }
  },
  /*data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      //zoom: 7,
      center: [-2.2196220, 117.5646680],
      geojson: null,
      fillColor: "#e4ce7f",
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(-2.2196220, 117.5646680),
      //
      markers: [],

      option: {},
    }
  },*/
  //[parseInt(longitude), parseInt(latitude)]
  async created() {
    this.show = true
  },
  methods: {
    options(option) {
      var markers = this.markers
      var http = this.$http
      var map = this.$refs.myMap.mapObject
      return {
        //onEachFeature: this.onEachFeatureFunction
        onEachFeature: function (feature, layer) {
          
        }
      };
    },
  },
}
</script>

<style lang="scss">
.vue2leaflet-map {
  &.leaflet-container {
    height: 350px;
  }
}
</style>
