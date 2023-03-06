<template>
  <b-card no-body>
    <div class="card-header">
      <b-card-title>PETA SMK INDONESIA</b-card-title>
    </div>
    <b-card-body>
      <p>DISINI {{ marker }}</p>

      <!--b-card-code title="PETA SMK INDONESIA"-->
      <!--l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" />
        <l-geo-json :geojson="geojson" />
      </l-map-->
      <!--l-map v-if="showMap" :zoom="zoom" :center="center" :options="mapOptions" @update:center="centerUpdate"
        @update:zoom="zoomUpdate" style="height: 500px; width: 100%">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker :lat-lng="withPopup">
          <l-popup>
            <div @click="innerClick">
              I am a popup
              <p v-show="showParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                Donec finibus semper metus id malesuada.
              </p>
            </div>
          </l-popup>
        </l-marker>
        <l-feature-group>
          <l-marker :lat-lng="withPopup">
            <l-popup>
            <div @click="innerClick">
              I am a popup
              <p v-show="showParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                Donec finibus semper metus id malesuada.
              </p>
            </div>
          </l-popup>
          </l-marker>
        </l-feature-group>
      </l-map-->
      <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%" ref="myMap" @ready="updateMap()">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-geo-json v-if="show" v-for="(wilayah, index) in all_wilayah" :geojson="wilayah.geojson"
          :options="options(wilayah.option)" :key="'wilayah-' + index">
        </l-geo-json>
        <l-marker v-for="(marker, index) in markers" :lat-lng="marker.koordinat" :key="'marker-' + index">
          <l-popup>
            <ul class="list-group list-group no-padding">
              <li class="list-group-item list-group-item-info"><b>{{ marker.nama }}</b></li>
              <li class="list-group-item list-group-item-warning"><router-link :to="marker.link">{{marker.jml_smk}} SMK</router-link></li>
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
  data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 5,
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
  },
  mounted() {
    this.$nextTick(() => {
      console.log('a');
      //this.$refs.myMap.mapObject.openPopup();
    });
  },
  methods: {
    updateMap() {
      console.log('updateMap');
    },
    zoomIn(latlng) {
      console.log(latlng);
      this.zoom = 7;
      this.$refs.myMap.mapObject.panTo(latlng)
    },
    options(option) {
      var markers = this.markers
      var http = this.$http
      var map = this.$refs.myMap.mapObject
      return {
        //onEachFeature: this.onEachFeatureFunction
        onEachFeature: function (feature, layer) {
          var bounds = layer.getBounds();
          var latLng = bounds.getCenter();
          layer.setStyle(option.style)
          layer.on('click', function (e) {
            console.log(e);
            var kode_wilayah = e.target.feature.properties.KD_PRO
            http.get('/dashboard/wilayah/' + kode_wilayah+'/'+e.latlng.lat+'/'+e.latlng.lng, {
              params: {
                longitude: e.latlng.lat,
                latitude: e.latlng.lng
              }
            }).then(response => {
              var data = response.data
              markers.push({
                koordinat: e.latlng,
                nama: e.target.feature.properties.NM_PRO,
                link: '/rekapitulasi-provinsi/'+e.target.feature.properties.KD_PRO+'/'+e.latlng.lat+'/'+e.latlng.lng,
                jml_smk: data.sekolah,
              });
              if (markers.length > 1) {
                markers.shift();
              }

            });
          })
        }
      };
    },
  },
  props: {
    all_wilayah: {
      type: Array,
      default: () => [],
    },
  },
  async created() {
    this.loading = false;
  }
}
</script>

<style lang="scss">
.vue2leaflet-map {
  &.leaflet-container {
    height: 350px;
  }
}
</style>
