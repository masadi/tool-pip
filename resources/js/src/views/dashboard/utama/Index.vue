<template>
  <b-card class="mt-4">
    <b-card-title class="text-center">TOOL PIP DAPODIK</b-card-title>
    <b-card-body>
      <div v-if="isBusy" class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
        <div v-else>
          <b-form-select v-model="sekolah_id" :options="sekolah" text-field="nama" value-field="sekolah_id" @change="getPd">
            <template #first>
              <b-form-select-option :value="null" disabled>-- Pilih Sekolah --</b-form-select-option>
            </template>
          </b-form-select>
          <section v-if="items.length">
            <b-row class="my-2">
              <b-col md="4">
                <b-form-group label="Per page" label-for="per-page-select" label-cols="3" label-align="right" class="mb-0">
                  <b-form-select id="per-page-select" v-model="per_page" :options="pageOptions"></b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="4" offset-md="4">
                <b-form-group label="Cari" label-for="filter-input" label-cols="3" label-align="right" class="mb-0">
                  <b-input-group >
                    <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Cari Peserta Didik..."></b-form-input>
                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''">Hapus</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>

            <!-- Main table element -->
            <b-table :items="items" :fields="fields" :current-page="current_page" :per-page="per_page" :filter="filter" :filter-included-fields="filterOn" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :sort-direction="sortDirection" stacked="md" show-empty small @filtered="onFiltered">
              <template #cell(name)="row">
                {{ row.value.first }} {{ row.value.last }}
              </template>

              <template #cell(actions)="row">
                <b-button  @click="info(row.item, row.index, $event.target)" size="sm" class="mr-1" variant="warning">
                  Info modal
                </b-button>
                <b-button  @click="row.toggleDetails" size="sm" variant="success">
                  {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                </b-button>
              </template>

              <template #row-details="row">
                <b-card>
                  <ul>
                    <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                  </ul>
                </b-card>
              </template>
            </b-table>
            <b-row class="mt-2">
              <b-col md="6">
                <p>Menampilkan {{ (meta.from) ? meta.from : 0 }} sampai {{ meta.to }} dari {{ meta.total }} entri</p>
              </b-col>
              <!-- BLOCK INI AKAN MENJADI PAGINATION DARI DATA YANG DITAMPILKAN -->
              <b-col md="6">
                  <!-- DAN KETIKA TERJADI PERGANTIAN PAGE, MAKA AKAN MENJALANKAN FUNGSI changePage -->
                  <b-pagination v-model="meta.current_page" :total-rows="meta.total" :per-page="meta.per_page" align="right" @change="changePage"></b-pagination>
              </b-col>
            </b-row>
            <!-- Info modal -->
            <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
              <pre>{{ infoModal.content }}</pre>
            </b-modal>
          </section>
        </div>
    </b-card-body>
  </b-card>
</template>

<script>
import { 
  BCard,
    BCardTitle,
    BCardBody,
    BRow,
    BCol,
    BSpinner,
    BFormSelect,
    BFormSelectOption,
    BModal, 
    BTable,
    BButton,
    BPagination,
    BFormGroup,
    BFormCheckbox,
    BFormCheckboxGroup,
    BInputGroupAppend,
    BFormInput,
    BInputGroup,
 } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardTitle,
    BCardBody,
    BRow,
    BCol,
    BSpinner,
    BFormSelect,
    BFormSelectOption,
    BModal, 
    BTable,
    BButton,
    BPagination,
    BFormGroup,
    BFormCheckbox,
    BFormCheckboxGroup,
    BInputGroupAppend,
    BFormInput,
    BInputGroup,
  },
  data() {
    return {
      isBusy: true,
      sekolah_id: null,
      sekolah: [],
      items: [],
      meta: {},
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
            console.log(value);
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
      totalRows: 1,
      current_page: 1,
      per_page: 10,
      pageOptions: [10, 25, 50, 100, { value: 500, text: "500" }],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      }
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
      filter(f => f.sortable)
      map(f => {
        return { text: f.label, value: f.key }
      })
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.meta.total
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
    getPd(sekolah_id){
      let current_page = this.current_page//this.search == '' ? this.current_page : 1
      //LAKUKAN REQUEST KE API UNTUK MENGAMBIL DATA POSTINGAN
      this.$http.get('/pd', {
        params: {
          sekolah_id: sekolah_id,
          page: current_page,
          per_page: this.per_page,
          q: this.search,
          sortby: this.sortBy,
          sortbydesc: this.sortByDesc ? 'DESC' : 'ASC'
        }
      }).then(response => {
        //this.items = response.data.all_pd
        let getData = response.data.data
        this.isBusy = false
        this.items = getData.data//MAKA ASSIGN DATA POSTINGAN KE DALAM VARIABLE ITEMS
        //DAN ASSIGN INFORMASI LAINNYA KE DALAM VARIABLE META
        this.meta = {
          total: getData.total,
          current_page: getData.current_page,
          per_page: getData.per_page,
          from: getData.from,
          to: getData.to,
        }
      })
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.current_page = 1
    },
    changePage(val) {
      this.current_page = val
      this.getPd(sekolah_id)
    },
  },
}
</script>
