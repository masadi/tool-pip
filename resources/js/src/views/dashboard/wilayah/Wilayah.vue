<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>
        <h2>Rekapitulasi Wilayah</h2>
      </b-card-title>
    </b-card-header>
    <b-card-body>
      <datatable :items="items" :fields="fields" :isBusy="isBusy"></datatable>
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardBody } from 'bootstrap-vue'
import Datatable from './TableWilayah.vue' //IMPORT COMPONENT DATATABLENYA
export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    Datatable
  },
  data() {
    return {
      isBusy: true,
      fields: [{
        key: 'nama',
        label: 'Nama Wilayah',
        sortable: false
      },
      {
        key: 'nasional',
        label: 'JUMLAH SMK',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      },
      {
        key: 'negeri_nasional',
        label: 'SMK Negeri',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      },
      {
        key: 'swasta_nasional',
        label: 'SMK Swasta',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      },
      {
        key: 'pengguna',
        label: 'JUMLAH PENGGUNA',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      },
      
      {
        key: 'negeri_pengguna',
        label: 'SMK Negeri Pengguna',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      },
      {
        key: 'swasta_pengguna',
        label: 'SMK Swasta Pengguna',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      },
      {
        key: 'persentase',
        label: 'Persentase',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      },
      ],
      items: []
    }
  },
  created() {
    // data
    this.$http.get('/dashboard/provinsi').then(response => {
      this.isBusy = false
      this.items = response.data.all_wilayah
      this.$ability.update([
        { 'action': 'manage' },
        { 'subject': 'all' }
      ])
    })
  },
}
</script>
