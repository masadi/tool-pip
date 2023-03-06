<template>
  <b-card class="mt-4">
    <b-card-title class="text-center">TOOL PIP DAPODIK</b-card-title>
    <b-card-body>
      <div v-if="isBusy" class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
        <div v-else>
          <b-form-select v-model="sekolah_id" :options="sekolah" text-field="nama" value-field="sekolah_id" @change="loadPostsData" class="mb-3">
            <template #first>
              <b-form-select-option :value="null" disabled>-- Pilih Sekolah --</b-form-select-option>
            </template>
          </b-form-select>
          <datatable v-if="items.length" :isBusy="isBusy" :items="items" :fields="fields" :meta="meta" :title="'Hapus Sekolah'" @per_page="handlePerPage" @pagination="handlePagination" @search="handleSearch" @sort="handleSort" />
        </div>
    </b-card-body>
  </b-card>
</template>

<script>
import { 
  BCard,
  BCardTitle,
  BCardBody,
  BSpinner,
  BFormSelect,
  BFormSelectOption,
} from 'bootstrap-vue'
import Datatable from './Datatable.vue'
export default {
  components: {
    BCard,
    BCardTitle,
    BCardBody,
    BSpinner,
    BFormSelect,
    BFormSelectOption,
    Datatable,
  },
  data() {
    return {
      isBusy: true,
      sekolah: [],
      sekolah_id: null,
      fields: [
        { 
          key: 'nama', 
          label: 'Nama Lengkap', 
          sortable: true, 
          sortDirection: 'desc' 
        },
        { 
          key: 'nisn', 
          label: 'NISN', 
          sortable: true, 
          class: 'text-center' 
        },
        {
          key: 'layak_pip',
          label: 'Layak PIP',
          formatter: (value, key, item) => {
            return (value == '1') ? 'Ya' : 'Tidak'
          },
          class: 'text-center',
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true
        },
        {
          key: 'penerima_kip',
          label: 'Penerima PIP',
          formatter: (value, key, item) => {
            return (value == '1') ? 'Ya' : 'Tidak'
          },
          class: 'text-center',
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true
        },
        { 
          key: 'actions', 
          label: 'Aksi',
          class: 'text-center',
        }
      ],
      items: [],
      meta: {},
      current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 10, //DEFAULT LOAD PERPAGE ADALAH 10
      search: '',
      sortBy: 'nama', //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false, //ASCEDING
    }
  },
  created() {
    this.$ability.update([
      { 'action': 'manage' },
      { 'subject': 'all' }
    ])
    this.$http.get('/sekolah').then(response => {
      this.isBusy = false
      this.sekolah = response.data
    });
  },
  methods: {
    loadPostsData(){
      let current_page = this.current_page
      this.$http.get('/pd', {
        params: {
          sekolah_id: this.sekolah_id,
          page: current_page,
          per_page: this.per_page,
          q: this.search,
          sortby: this.sortBy,
          sortbydesc: this.sortByDesc ? 'DESC' : 'ASC'
        }
      }).then(response => {
        let getData = response.data.data
        this.isBusy = false
        this.items = getData.data
        this.meta = {
          total: getData.total,
          current_page: getData.current_page,
          per_page: getData.per_page,
          from: getData.from,
          to: getData.to,
        }
      })
    },
    handlePerPage(val) {
      this.per_page = val
      this.loadPostsData()
    },
    handlePagination(val) {
      this.current_page = val
      this.loadPostsData()
    },
    handleSearch(val) {
      this.search = val
      this.loadPostsData()
    },
    //JIKA ADA EMIT SORT
    handleSort(val) {
      if (val.sortBy) {
        this.sortBy = val.sortBy
        this.sortByDesc = val.sortDesc
        this.loadPostsData()
      }
    },
  },
}
</script>
