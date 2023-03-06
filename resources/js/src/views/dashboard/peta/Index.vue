<template>
  <b-row>
    <b-col cols="12">
      <leaflet-geo-jSON :all_wilayah="data.all_wilayah" />
    </b-col>
  </b-row>
  <!--b-card no-body>
    <b-card-header>
      <b-card-title>
        <span v-if="loading">Loading...</span>
        <label for="checkbox">GeoJSON Visibility</label>
        <input id="checkbox" v-model="show" type="checkbox">
        <label for="checkboxTooltip">Enable tooltip</label>
        <input id="checkboxTooltip" v-model="enableTooltip" type="checkbox">
        <input v-model="fillColor" type="color">
        <br>
      </b-card-title>
    </b-card-header>
    <b-card-body>
      <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-geo-json v-if="show" :geojson="geojson" :options="options" :options-style="styleFunction" />
        <l-marker :lat-lng="marker" />
      </l-map>
    </b-card-body>
  </b-card-->
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import LeafletGeoJSON from './LeafletGeoJSON.vue'
/*import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LGeoJson } from "vue2-leaflet";
import { BCard, BCardHeader, BCardTitle, BCardBody } from 'bootstrap-vue'
import 'leaflet/dist/leaflet.css'
*/
export default {
  name: "IndexPeta",
  components: {
    BRow, BCol,
    LeafletGeoJSON
    /*LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody*/
  },
  /*data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 5,
      center: [-2.2331, 117.2841],
      geojson: null,
      fillColor: "#e4ce7f",
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(-2.2331, 117.2841)
    };
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      };
    },
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1
        };
      };
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => { };
      }
      return (feature, layer) => {
        console.log(feature);
        layer.bindTooltip(
          "<div>code:" +
          feature.properties.code +
          "</div><div>nom: " +
          feature.properties.nom +
          "</div>",
          { permanent: false, sticky: true }
        );
      };
    }
  },
  async created() {
    this.loading = true;
    this.$ability.update([
      { 'action': 'manage' },
      { 'subject': 'all' }
    ])
    const response = await fetch("https://masadi.github.io/geojson/000000.geojson")
    const data = await response.json();
    this.geojson = data;
    this.loading = false;
  }*/
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
    this.$http.get('/peta').then(response => {
      this.data = response.data
    });
  }
};
</script>
