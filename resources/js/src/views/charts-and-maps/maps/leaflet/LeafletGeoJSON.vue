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
      <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-geo-json v-if="show" :geojson="geojson" :options="options"></l-geo-json>
        <!--l-marker v-for="(marker, index) in markers" :lat-lng="marker.position">
          <l-popup>
            <br><strong>Location Name: </strong><br><strong>Date: </strong><br><button style="margin:5% 0% 0% 35%;"
              @click="addStops(marker)">Add</button>
          </l-popup>
        </l-marker-->
        <l-marker v-for="(marker, index) in markers" :lat-lng="marker" :key="'marker-' + index">
          <l-popup>
            <br><strong>Location Name: </strong><br><strong>Date: </strong>
            <!--br><button style="margin:5% 0% 0% 35%;"
              @click="addStops(marker)">Add</button-->
          </l-popup>
        </l-marker>
        <!--l-circle-marker v-for="(item, index) in markers" :key="'marker-' + index"
          :lat-lng="item.marker"></l-circle-marker-->
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
  LPolygon,
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
    LPolygon,
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
      /*url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 5,
      center: [-2.2196220, 117.5646680],
      geojson: null,
      withPopup: [-2.2196220, 117.5646680],
      currentZoom: 11.5,
      currentCenter: [-2.2196220, 117.5646680],
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,*/
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
      polygon: {
        latlngs: [],
        color: "#00000"
      },
      markers: [],
      //markerLatLng: [47.313220, -1.319482]
    }
  },
  methods: {
    innerClick() {
      console.log('click');
    }
  },
  /*async created() {
    const response = await fetch('https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson')
    this.geojson = await response.json()
  },*/
  /*methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert('Click!');
    },
  },
  created() {
    // data
    this.$http.get('/dashboard/wilayah').then(response => {
      var data = response.data
      this.zoom = data.zoom
      this.center = data.center
      data.all_wilayah.forEach((item, index) => {
        //console.log(item);
        const response = fetch('/json_files/' + item.kode_wilayah.trim() + '.geojson')
        //console.log(response);

        //this.geojson = response.json()
      })
      console.log(response.data)
    })
  },*/
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      };
    },
    getColor() {
      return (d) => { //recieve the prop
        if (d > 400) { //as many conditionals you need
          return "#7e0001"
        }
        if (d > 100) {
          return "#b82101"
        }
        if (d > 50) {
          return "#f44300"
        }
        if (d > 10) {
          return "#f96200"
        }
        if (d > 5) {
          return "#ff8200"
        }
        if (d > 0) {
          return "#fff154"
        }
        if (d == 0) {
          return "#0000000"
        }
      }
    },
    onEachFeatureFunction() {
      return (feature, layer) => {
        layer.setStyle({
          fillColor: "#7e0001",
          color: "#7e0001",
          weight: 1,
          opacity: 0.6,
          fillOpacity: 0.5,
        })
        var markers = this.markers
        layer.on('click', function (e) {
          //console.log(e);
          //markers = []
          markers.push(e.latlng);
          if(markers.length > 1){
            markers.shift();
          }
          //console.log(marker);
          /*console.log(popup);
          popup
            .setLatLng(e.latlng)
            .setContent("<ul class='list-group list-group no-padding'>" +
              "<li class='list-group-item list-group-item-info'><b>{{$wilayah->nama}}</b></li>" +
              "<li class='list-group-item list-group-item-warning'><a href='{{$link}}'>" + feature.properties.sekolah + " SMK</a></li>" +
              "</ul>");*/
        })
        //console.log(feature.geometry.coordinates);
        //this.marker: latLng(-2.2196220, 117.5646680),
      }
      /*if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindTooltip(
          "<div>code:" +
            feature.properties.code +
            "</div><div>nom: " +
            feature.properties.nom +
            "</div>",
          { permanent: false, sticky: true }
        );
      };*/
    }
  },
  async created() {
    this.loading = true;
    const response = await fetch('/json_files/000000.geojson')
    const data = await response.json();
    //console.log(data);
    /*this.polygon = {
      latlngs: data.features[0].geometry.coordinates,
      color: "#ffffff"
    }*
    //console.log(this.polygon);
    //$koordinat = json_encode($a->features[0]->geometry->coordinates);
    /*
    
    */
    this.geojson = data;
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
