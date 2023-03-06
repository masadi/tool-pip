<template>
  <b-card no-body class="card-statistics">
    <b-card-header>
      <b-card-title>Statisik</b-card-title>
      <b-card-text class="font-small-2 mr-25 mb-0">
        {{ last_sync }}
      </b-card-text>
    </b-card-header>
    <b-card-body class="statistics-body">
      <div v-if="isBusy" class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
      </div>
      <b-row v-else>
        <b-col v-for="item in data" :key="item.id" xl="3" sm="6" :class="item.customClass">
          <b-media no-body>
            <b-media-aside class="mr-2">
              <b-avatar size="48" :variant="item.color">
                <!--feather-icon
                  size="24"
                  :icon="item.icon"
                /-->
                <!--font-awesome-icon :icon="['fas', 'house']" size="2xl" /-->
                <font-awesome-icon icon="fa-solid fa-building-columns" size="2xl" />
                <!--font-awesome-icon :icon="'fa-solid fa-'+item.icon" size="2xl" /-->
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">
                {{ item.title }}
              </h4>
              <b-card-text class="font-small-3 mb-0">
                {{ item.subtitle }}
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody, BSpinner
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BSpinner
  },
  data() {
    return {
      isBusy: true,
      last_sync: null,
      data: [],
    }
  },
  created() {
    this.$http.get('/dashboard/statistik').then(response => {
      this.isBusy = false
      this.last_sync = response.data.last_sync
      this.data = response.data.statistik
    })
  }
}
</script>
