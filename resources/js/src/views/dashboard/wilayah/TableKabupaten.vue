<template>
  <b-table striped hover :items="items" :fields="fields" :busy="isBusy" show-empty>
    <template #table-busy>
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Loading...</strong>
      </div>
    </template>
    <template v-slot:cell(nama)="row">
      <a :href="'https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/'+row.item.sekolah_id" :id="row.item.sekolah_id">{{row.item.nama}}</a>
      <b-tooltip :target="row.item.sekolah_id" triggers="hover">
        Lihat data <b>{{row.item.nama}}</b> di Sekolah Kita
      </b-tooltip>
    </template>
    <template v-slot:cell(status)="row">
      <b-badge v-show="row.item.sinkron" variant="success">Pengguna</b-badge>
      <b-badge v-show="!row.item.sinkron" variant="danger">Non Pengguna</b-badge>
    </template>
  </b-table>
</template>

<script>
import { BTable, BBadge, BTooltip, BSpinner } from 'bootstrap-vue'
export default {
  components: {
    BTable,
    BBadge,
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
}
</script>
