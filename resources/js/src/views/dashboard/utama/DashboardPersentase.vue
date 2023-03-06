<template>
  <b-card no-body>
    <b-card-header>
      <h4 class="mb-0">
        Persentase Keseluruhan
      </h4>
    </b-card-header>
    <div v-if="isBusy" class="text-center text-danger my-2">
      <b-spinner class="align-middle"></b-spinner>
      <strong>Loading...</strong>
    </div>
    <div v-else>
      <vue-apex-charts type="radialBar" height="245" class="my-2" :options="goalOverviewRadialBar"
        :series="data.series" />
      <b-row class="text-center mx-0">
        <b-col cols="6" class="border-top border-right d-flex align-items-between flex-column py-1">
          <b-card-text class="text-muted mb-0">
            SMK nasional
          </b-card-text>
          <h3 class="font-weight-bolder mb-0">
            {{ data.completed }}
          </h3>
        </b-col>

        <b-col cols="6" class="border-top d-flex align-items-between flex-column py-1">
          <b-card-text class="text-muted mb-0">
            SMK Pengguna
          </b-card-text>
          <h3 class="font-weight-bolder mb-0">
            {{ data.inProgress }}
          </h3>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BRow, BCol, BCardText, BSpinner
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'

const $strokeColor = '#ebe9f1'
const $textHeadingColor = '#5e5873'
const $goalStrokeColor2 = '#51e5a8'
export default {
  components: {
    VueApexCharts,
    BCard,
    BCardHeader,
    BRow,
    BCardText,
    BCol,
    BSpinner
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
  data() {
    return {
      data: {},
      isBusy: true,
      goalOverviewRadialBar: {
        chart: {
          height: 245,
          type: 'radialBar',
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            blur: 3,
            left: 1,
            top: 1,
            opacity: 0.1,
          },
        },
        colors: [$goalStrokeColor2],
        plotOptions: {
          radialBar: {
            offsetY: -10,
            startAngle: -150,
            endAngle: 150,
            hollow: {
              size: '77%',
            },
            track: {
              background: $strokeColor,
              strokeWidth: '50%',
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                color: $textHeadingColor,
                fontSize: '2.86rem',
                fontWeight: '600',
              },
            },
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: [$themeColors.success],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: 'round',
        },
        grid: {
          padding: {
            bottom: 30,
          },
        },
      },
    }
  },
  created() {
    this.$http.get('/dashboard/persentase').then(response => {
      this.isBusy = false
      this.data = response.data
    })
  }
}
</script>
