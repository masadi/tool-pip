<template>
  <section id="dashboard-analytics">
    <b-row>
      <b-col cols="12">
        <invoice-list />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import { kFormatter } from '@core/utils/filter'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'

export default {
  components: {
    BRow,
    BCol,
    InvoiceList,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    this.$ability.update([
        {'action': 'manage'},
        {'subject': 'all'}
    ])
    //this.$http.get('/dashboard/wilayah')
    //.then(response => { this.data = response.data })
  },
  methods: {
    kFormatter,
  },
}
</script>
