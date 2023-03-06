<template>
  <b-table striped hover :items="items" :fields="fields" :busy="isBusy" show-empty v-model="visibleRows">
    <template #table-busy>
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Loading...</strong>
      </div>
    </template>
    <template v-slot:cell(nama)="row">
      <router-link :to="'/provinsi/' + row.item.kode_wilayah.trim()"
        :id="'tooltip-target-' + row.item.kode_wilayah.trim()">{{ row.item.nama }}</router-link>
      <b-tooltip :target="'tooltip-target-' + row.item.kode_wilayah.trim()" triggers="hover">
        Lihat Rekapitulasi Wilayah <b>{{ row.item.nama }}</b>
      </b-tooltip>
    </template>
    <template v-slot:cell(persentase)="row">
      {{ persentase(row.item.nasional, row.item.pengguna) }}%
    </template>
    <template slot="bottom-row">
      <td>TOTAL</td>
      <td class="text-center">{{ totalNasional }}</td>
      <td class="text-center">{{ totalNegeri }}</td>
      <td class="text-center">{{ totalSwasta }}</td>
      <td class="text-center">{{ totalPengguna }}</td>
      <td class="text-center">{{ totalPenggunaNegeri }}</td>
      <td class="text-center">{{ totalPenggunaSwasta }}</td>
      <td class="text-center">{{ persentase(totalNasional, totalPengguna) }}%</td>
    </template>
  </b-table>
</template>

<script>
import { BTable, BTooltip, BSpinner } from 'bootstrap-vue'
export default {
  components: {
    BTable,
    BTooltip,
    BSpinner
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    isBusy: {
      type: Boolean,
      default: () => true,
    }
  },
  data() {
    return {
      data: {},
      visibleRows: [],
    }
  },
  computed: {
    totalNasional() {
      return this.visibleRows.reduce((accum, item) => {
        return accum + parseFloat(item.nasional)
      }, 0.00)
    },
    totalNegeri() {
      return this.visibleRows.reduce((accum, item) => {
        return accum + parseFloat(item.negeri_nasional)
      }, 0.00)
    },
    totalSwasta() {
      return this.visibleRows.reduce((accum, item) => {
        return accum + parseFloat(item.swasta_nasional)
      }, 0.00)
    },
    totalPengguna() {
      return this.visibleRows.reduce((accum, item) => {
        return accum + parseFloat(item.pengguna)
      }, 0.00)
    },
    totalPenggunaNegeri() {
      return this.visibleRows.reduce((accum, item) => {
        return accum + parseFloat(item.negeri_pengguna)
      }, 0.00)
    },
    totalPenggunaSwasta() {
      return this.visibleRows.reduce((accum, item) => {
        return accum + parseFloat(item.swasta_pengguna)
      }, 0.00)
    },
  },
  methods: {
    persentase(total, jml) {
      let num = (total) ? jml / total * 100 : 0;
      return num.toFixed(2)
    }
  }
}
</script>
