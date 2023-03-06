<template>
  <b-card no-body class="card-browser-states">
    <b-card-header>
      <b-card-title>5 Wilayah Pengguna Terbanyak (%)</b-card-title>
      <b-card-text class="font-small-2">
        {{ last_sync }}
      </b-card-text>
    </b-card-header>
    <b-card-body>
      <b-table striped :items="items" :fields="fields" :busy="isBusy" show-empty thead-class="hidden_header">
        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>
        <template v-slot:cell(jml)="row">
          {{row.item.jml+'%'}}
        </template>
        <template v-slot:cell(nama)="row">
          <b-img class="mr-1" :src="row.item.img" alt="browser img" width="25" /> {{row.item.nama}}
        </template>
      </b-table>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BMedia, BMediaAside, BMediaBody, BImg, BDropdown, BDropdownItem, BSpinner, BTable
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BMediaAside,
    BMediaBody,
    BImg,
    BDropdown,
    BDropdownItem,
    //VueApexCharts,
    BSpinner,
    BTable
  },
  /*props: {
    items: {
      type: Array,
      //required: true
    },
    fields: {
      type: Array,
      required: true
    },
    last_sync: {
      type: String,
      default: ''
    },
    isBusy: {
      type: Boolean,
      default: () => true,
    }
  },*/
  data() {
    return {
      isBusy: true,
      last_sync: null,
      items: [],
      fields: [
        {
          key: 'nama',
          label: 'Nama Wilayah',
          sortable: false,
          tdClass: 'pl-0',
        },
        {
          key: 'jml',
          label: 'Jml',
          sortable: false,
          tdClass: 'text-center'
        },
      ],
    }
  },
  methods: {
    formatRupiah(angka){
      return new Intl.NumberFormat('id-ID').format(angka);
    }
  },
  created() {
    this.$http.get('/dashboard/pengguna').then(response => {
      this.isBusy = false
      this.last_sync = response.data.last_sync
      this.items = response.data.wilayah
    })
  }
}
</script>
<style>
.hidden_header {
  display: none;
}
</style>