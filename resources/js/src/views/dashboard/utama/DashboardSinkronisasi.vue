<template>
  <b-card class="card-transaction" no-body>
    <b-card-header>
      <b-card-title>Data Sinkronisasi 7 Hari Terakhir</b-card-title>
    </b-card-header>
    <b-card-body>
      <div v-if="isBusy" class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Loading...</strong>
      </div>
      <div v-else>
        <b-table bordered hover :items="data" :fields="fields" thClass="text-center">
          <template v-slot:cell(jml)="row">
            {{ formatRupiah(row.item.jml) }}
          </template>
        </b-table>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardBody, BTable, BSpinner
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BTable,
    BSpinner
  },
  /*props: {
    data: {
      type: Array,
      default: () => [],
    },
    isBusy: {
      type: Boolean,
      default: () => true,
    }
  },*/
  data() {
    return {
      isBusy: true,
      data: [],
      fields: [
        {
          key: 'no',
          label: 'No',
          sortable: false,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          key: 'tanggal',
          label: 'Tanggal',
          sortable: false,
          thClass: 'text-center',
        },
        {
          key: 'jml',
          label: 'Jml',
          sortable: false,
          thClass: 'text-right',
          tdClass: 'text-right'
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
    this.$http.get('/dashboard/sinkronisasi').then(response => {
      this.isBusy = false
      this.data = response.data
    })
  }
}
</script>
