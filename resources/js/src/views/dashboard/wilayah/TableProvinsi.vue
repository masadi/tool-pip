<template>
  <b-table striped hover :items="items" :fields="fields" :busy="isBusy" show-empty>
    <template #table-busy>
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Loading...</strong>
      </div>
    </template>
    <template v-slot:cell(nama)="row">
      <router-link :to="'/kabupaten/'+row.item.kode_wilayah.trim()" :id="'tooltip-target-'+row.item.kode_wilayah.trim()">{{row.item.nama}}</router-link>
      <b-tooltip :target="'tooltip-target-'+row.item.kode_wilayah.trim()" triggers="hover">
        Lihat SMK di Wilayah <b>{{row.item.nama}}</b>
      </b-tooltip>
    </template>
    <template v-slot:cell(persentase)="row">
      {{persentase(row.item.nasional, row.item.pengguna)}}%
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
    }
  },
  methods: {
    persentase(total, jml){
      let num = (total) ? jml / total * 100 : 0;
      return num.toFixed(2)
    }
  }
}
</script>
