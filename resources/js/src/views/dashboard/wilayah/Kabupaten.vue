<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title>
        <h2>Data Sekolah di Wilayah {{nama}}</h2>
      </b-card-title>
    </b-card-header>
    <b-card-body>
      <datatable :items="items" :fields="fields" :isBusy="isBusy"></datatable>
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardHeader, BCardTitle, BCardBody } from 'bootstrap-vue'
import Datatable from './TableKabupaten.vue' //IMPORT COMPONENT DATATABLENYA
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
      nama: '',
      fields: [{
        key: 'nama',
        label: 'Nama',
        sortable: false,
        thClass: 'text-center',
      },
      {
        key: 'npsn',
        label: 'NPSN',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      },
      {
        key: 'kecamatan',
        label: 'Kecamatan',
        sortable: false,
        thClass: 'text-center',
      },
      {
        key: 'status',
        label: 'Pengguna',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      },
      {
        key: 'ptk_count',
        label: 'PTK Pengguna',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      },
      {
        key: 'pd_count',
        label: 'PD Terproses',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      },
      ],
      items: []
    }
  },
  created() {
    this.$http.get('/dashboard/sekolah/'+this.$route.params.kode_wilayah).then(response => {
      this.isBusy = false
      this.nama = response.data.nama
      this.items = response.data.all_sekolah
      this.$ability.update([
        { 'action': 'manage' },
        { 'subject': 'all' }
      ])
    })
  },
}
</script>
