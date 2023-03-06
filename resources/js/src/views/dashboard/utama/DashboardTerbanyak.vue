<template>
  <b-card class="card-congratulation-medal">
    <h5>Provinsi Pengguna Terbanyak (%)</h5>
    <div v-if="isBusy" class="text-center text-danger my-2">
      <b-spinner class="align-middle"></b-spinner>
      <strong>Loading...</strong>
    </div>
    <div v-else>
      <b-card-text class="font-small-3">
        {{ data.provinsi.nama }}
        <br />
        Jml SMK: {{data.nasional}}
        <br />
        Jml Pengguna: {{data.pengguna}}
      </b-card-text>
      <h3 class="mb-75 mt-2 pt-50">
        <b-link>SMK Pengguna {{ data.persentase+'%' }}</b-link>
      </h3>
      <b-img :src="require('@/assets/images/illustration/badge.svg')" class="congratulation-medal d-none d-xl-block" alt="Medal Pic" />
      <b-img :src="require('@/assets/images/illustration/badge.svg')" class="congratulation-medal d-block d-xl-none" style="max-width:75px; right: 7px;" alt="Medal Pic" />
    </div>
  </b-card>
</template>

<script>
import {
  BCard, BCardText, BLink, BButton, BImg, BSpinner
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    BCard,
    BCardText,
    BLink,
    BImg,
    BButton,
    BSpinner
  },
  directives: {
    Ripple,
  },
  /*props: {
    data: {
      type: Object,
      default: () => { },
    },
    isBusy: {
      type: Boolean,
      default: () => true,
    }
  },*/
  methods: {
    kFormatter,
  },
  data() {
    return {
      isBusy: true,
      data: {},
    }
  },
  created() {
    this.$http.get('/dashboard/terbanyak').then(response => {
      this.isBusy = false
      this.data = response.data
    })
  }
}
</script>
