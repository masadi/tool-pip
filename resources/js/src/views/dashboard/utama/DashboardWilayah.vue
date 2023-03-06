<template>
  <b-card no-body class="card-revenue-budget">
    <b-row class="mx-0">
      <b-col lg="12" class="revenue-report-wrapper">
        <div class="d-sm-flex justify-content-between align-items-center mb-3">
          <h4 class="card-title mb-50 mb-sm-0">
            Rekapitulasi Wilayah
          </h4>
        </div>
        <div v-if="isBusy" class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
        <div v-else>
          <vue-apex-charts id="wilayah-chart" type="bar" height="600" :options="data.chartOptionsLg" :series="data.series" class="d-none d-lg-block" />
          <vue-apex-charts id="wilayah-chart" type="bar" height="600" :options="data.chartOptionsSm" :series="data.series" class="d-block d-lg-none" />
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BDropdown, BDropdownItem, BButton, BSpinner
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    VueApexCharts,
    BDropdown,
    BDropdownItem,
    BCard,
    BButton,
    BRow,
    BCol,
    BSpinner
  },
  data() {
    return {
      isBusy: true,
      data: {},
    }
  },
  created() {
    this.$http.get('/dashboard/rekapitulasi').then(response => {
      this.data = response.data
      this.data.chartOptionsLg.tooltip = {
        y: {
          formatter: function (val) {
            return val + " SMK"
          }
        }
      }
      this.data.chartOptionsSm.tooltip = {
        y: {
          formatter: function (val) {
            return val + " SMK"
          }
        }
      }
      this.isBusy = false
    })
  }
}
</script>
