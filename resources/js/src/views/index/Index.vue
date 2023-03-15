<template>
  <b-card class="mt-4">
    <b-card-title class="text-center">TOOL DAPODIK</b-card-title>
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
          <b-button :variant="pip_class" @click="dataPip()" v-if="items.length">DATA PIP</b-button>
          <b-button :variant="periodik_class" @click="dataPeriodik()" v-if="items.length">DATA PERIODIK</b-button>
          <datatable v-if="items.length" :isBusy="isBusy" :items="items" :fields="fields" :meta="meta" @per_page="handlePerPage" @pagination="handlePagination" @search="handleSearch" @sort="handleSort" />
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
  BButton,
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
    BButton,
    Datatable,
  },
  data() {
    return {
      pip_class: 'success',
      periodik_class: 'secondary',
      request: 'pip',
      isBusy: true,
      sekolah: [],
      sekolah_id: null,
      fields: [],
      items: [],
      meta: {},
      current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 10, //DEFAULT LOAD PERPAGE ADALAH 10
      search: '',
      sortBy: 'nama', //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false, //ASCEDING,
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
    if(this.request == 'pip'){
      this.fields = [
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
          key: 'kelayakan', 
          label: 'Alasan Layak PIP', 
        },
        { 
          key: 'actions', 
          label: 'Aksi',
          class: 'text-center',
        }
      ]
    }
  },
  methods: {
    dataPip(){
      this.pip_class = 'success'
      this.periodik_class = 'secondary'
      this.request = 'pip'
      this.loadPostsData()
    },
    dataPeriodik(){
      this.pip_class = 'secondary'
      this.periodik_class = 'success'
      this.request = 'periodik'
      this.fields = [
        { 
          key: 'nama', 
          label: 'Nama Lengkap', 
          sortable: true, 
          sortDirection: 'desc' 
        },
        { 
          key: 'Kelas', 
          label: 'Kelas', 
          sortable: false, 
          class: 'text-center' 
        },
        {
          key: 'tinggi',
          label: 'Tinggi Badan',
          class: 'text-center',
          sortable: false,
        },
        {
          key: 'berat',
          label: 'Berat Badan',
          class: 'text-center',
          sortable: false,
        },
        { 
          key: 'kepala', 
          label: 'Lingkar Kepala', 
          class: 'text-center',
          sortable: false,
        },
        { 
          key: 'saudara', 
          label: 'Saudara Kandung', 
          class: 'text-center',
          sortable: false,
        },
        { 
          key: 'aksi', 
          label: 'Aksi',
          class: 'text-center',
        },
        
      ]
      this.loadPostsData()
    },
    loadPostsData(){
      let current_page = this.current_page
      this.$http.get('/pd', {
        params: {
          request: this.request,
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
