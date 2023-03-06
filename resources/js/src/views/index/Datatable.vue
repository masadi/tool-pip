<template>
  <div>
      <b-row>
          <b-col md="4" class="mb-2">
              <div class="form-inline">
                  <!-- KETIKA SELECT BOXNYA DIGANTI, MAKA AKAN MENJALANKAN FUNGSI loadPerPage -->
                  <select class="form-control" v-model="meta.per_page" @change="loadPerPage">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                  </select>
                  <label class="ml-2">Entri</label>
              </div>
          </b-col>
          <b-col md="4" offset-md="4">
              <div class="form-inline float-right">
                  <label class="mr-2">Cari</label>
                  <!-- KETIKA ADA INPUTAN PADA KOLOM PENCARIAN, MAKA AKAN MENJALANKAN FUNGSI SEARCH -->
                  <input type="text" class="form-control" @input="search">
              </div>
          </b-col>
      </b-row>
      <!-- BLOCK INI AKAN MENGHASILKAN LIST DATA DALAM BENTUK TABLE MENGGUNAKAN COMPONENT TABLE DARI BOOTSTRAP VUE -->

      <!-- :ITEMS ADALAH DATA YANG AKAN DITAMPILKAN -->
      <!-- :FIELDS AKAN MENJADI HEADER DARI TABLE, MAKA BERISI FIELD YANG SALING BERKORELASI DENGAN ITEMS -->
      <!-- :sort-by.sync & :sort-desc.sync AKAN MENGHANDLE FITUR SORTING -->
      <b-table responsive striped :items="items" :fields="fields" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" show-empty :busy="isBusy">
          <template v-slot:table-busy>
              <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
              </div>
          </template>
          <template v-slot:cell(actions)="row">
              <b-dropdown id="dropdown-dropleft" dropleft text="Aksi" variant="success" size="sm">
                  <b-dropdown-item href="javascript:" @click="luluskan(row.item)"><i class="fas fa-check"></i> Luluskan</b-dropdown-item>
                  <b-dropdown-item href="javascript:" @click="keluarkan(row.item)"><i class="fas fa-times"></i> Keluarkan</b-dropdown-item>
              </b-dropdown>
          </template>
      </b-table>

      <!-- BAGIAN INI AKAN MENAMPILKAN JUMLAH DATA YANG DI-LOAD -->
      <b-row class="mt-2">
          <b-col md="6">
              <p>Menampilkan {{ (meta.from) ? meta.from : 0 }} sampai {{ meta.to }} dari {{ meta.total }} entri</p>
          </b-col>
          <!-- BLOCK INI AKAN MENJADI PAGINATION DARI DATA YANG DITAMPILKAN -->
          <b-col md="6">
              <!-- DAN KETIKA TERJADI PERGANTIAN PAGE, MAKA AKAN MENJALANKAN FUNGSI changePage -->
              <b-pagination v-model="meta.current_page" :total-rows="meta.total" :per-page="meta.per_page" align="right" @change="changePage" aria-controls="dw-datatable"></b-pagination>
          </b-col>
      </b-row>
  </div>
</template>

<script>
import _ from 'lodash' //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI
import { BRow, BCol, BTable, BSpinner, BPagination, BDropdown, BDropdownItem } from 'bootstrap-vue'
export default {
  components: {
      BRow,
      BCol,
      BTable,
      BSpinner,
      BPagination,
      BDropdown, 
      BDropdownItem,
  },
  //PROPS INI ADALAH DATA YANG AKAN DIMINTA DARI PENGGUNA COMPONENT DATATABLE YANG KITA BUAT
  props: {
      //ITEMS STRUKTURNYA ADALAH ARRAY, KARENA BAGIAN INI BERISI DATA YANG AKAN DITAMPILKAN DAN SIFATNYA WAJIB DIKIRIMKAN KETIKA COMPONENT INI DIGUNAKAN
      items: {
          type: Array,
          required: true
      },
      //FIELDS JUGA SAMA DENGAN ITEMS
      fields: {
          type: Array,
          required: true
      },
      //ADAPUN META, TYPENYA ADALAH OBJECT YANG BERISI INFORMASI MENGENAL CURRENT PAGE, LOAD PERPAGE, TOTAL DATA, DAN LAIN SEBAGAINYA.
      meta: {
          required: true
      },
      title: {
          type: String,
          default: "Delete Modal"
      },
      editUrl: {
          type: String,
          default: null
      },
      isBusy: {
          type: Boolean,
          default: () => true,
      }
  },
  data() {
      return {
          //isBusy: true,
          //VARIABLE INI AKAN MENGHADLE SORTING DATA
          sortBy: null, //FIELD YANG AKAN DISORT AKAN OTOMATIS DISIMPAN DISINI
          sortDesc: false, //SEDANGKAN JENISNYA ASCENDING ATAU DESC AKAN DISIMPAN DISINI
          //TAMBAHKAN DUA VARIABLE INI UNTUK MENGHANDLE MODAL DAN DATA YANG AKAN DIHAPUS
      }
  },
  watch: {
      //KETIKA VALUE DARI VARIABLE sortBy BERUBAH
      sortBy(val) {
          //MAKA KITA EMIT DENGAN NAMA SORT DAN DATANYA ADALAH OBJECT BERUPA VALUE DARI SORTBY DAN SORTDESC
          //EMIT BERARTI MENGIRIMKAN DATA KEPADA PARENT ATAU YANG MEMANGGIL COMPONENT INI
          //SEHINGGA DARI PARENT TERSEBUT, KITA BISA MENGGUNAKAN VALUE YANG DIKIRIMKAN
          this.$emit('sort', {
              sortBy: this.sortBy,
              sortDesc: this.sortDesc
          })
      },
      //KETIKA VALUE DARI SORTDESC BERUBAH
      sortDesc(val) {
          //MAKA CARA YANG SAMA AKAN DIKERJAKAN
          this.$emit('sort', {
              sortBy: this.sortBy,
              sortDesc: this.sortDesc
          })
      }
  },
  methods: {
      konfirmasi(text, aksi, peserta_didik_id){
          this.$swal({
              title: 'Apakah Anda yakin?',
              text: text,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yakin!',
              customClass: {
                  confirmButton: 'btn btn-primary',
                  cancelButton: 'btn btn-outline-danger ml-1',
              },
              buttonsStyling: false,
          }).then(result => {
              if (result.value) {
                  if(aksi == 'keluar'){
                      this.$swal({
                          title: 'Pilih Jenis Keluar',
                          input: 'select',
                          inputOptions: {
                              2:"Mutasi",
                              3:"Dikeluarkan",
                              4:"Mengundurkan diri",
                              5:"Putus Sekolah",
                              6:"Wafat",
                              7:"Hilang"
                          },
                          inputPlaceholder: '== Pilih Jenis Keluar ==',
                          showCancelButton: true,
                          customClass: {
                              confirmButton: 'mr-1',
                          },
                          inputValidator: (value) => {
                              return new Promise((resolve) => {
                                  if (value) {
                                      this.$http.post('/referensi/keluarkan-pd', {
                                          aksi: aksi,
                                          peserta_didik_id: peserta_didik_id,
                                          jenis_keluar_id: value,
                                      }).then(response => {
                                          let data = response.data
                                          this.$swal({
                                              icon: data.icon,
                                              title: data.title,
                                              text: data.text,
                                              customClass: {
                                                  confirmButton: 'btn btn-success',
                                              },
                                          }).then(result => {
                                              this.loadPerPage(10);
                                          })
                                      });
                                  } else {
                                      resolve('Jenis Keluar tidak boleh kosong!')
                                  }
                              })
                          }
                      })
                  } else {
                      this.$http.post('/referensi/keluarkan-pd', {
                          aksi: aksi,
                          peserta_didik_id: peserta_didik_id,
                          jenis_keluar_id: 1,
                      }).then(response => {
                          let data = response.data
                          this.$swal({
                              icon: data.icon,
                              title: data.title,
                              text: data.text,
                              customClass: {
                                  confirmButton: 'btn btn-success',
                              },
                              }).then(result => {
                                  this.loadPerPage(10);
                              })
                      });
                  }
              }
          })
      },
      luluskan(item){
          this.konfirmasi("Aksi ini akan meluluskan Peserta Didik!", 'lulus', item.peserta_didik_id)
      },
      keluarkan(item){
          this.konfirmasi("Aksi ini akan mengeluarkan Peserta Didik!", 'keluar', item.peserta_didik_id)
      },
      //JIKA SELECT BOX DIGANTI, MAKA FUNGSI INI AKAN DIJALANKAN
      loadPerPage(val) {
          //DAN KITA EMIT LAGI DENGAN NAMA per_page DAN VALUE SESUAI PER_PAGE YANG DIPILIH
          this.$emit('per_page', this.meta.per_page)
      },
      //KETIKA PAGINATION BERUBAH, MAKA FUNGSI INI AKAN DIJALANKAN
      changePage(val) {
          //KIRIM EMIT DENGAN NAMA PAGINATION DAN VALUENYA ADALAH HALAMAN YANG DIPILIH OLEH USER
          this.$emit('pagination', val)
      },
      //KETIKA KOTAK PENCARIAN DIISI, MAKA FUNGSI INI AKAN DIJALANKAN
      //KITA GUNAKAN DEBOUNCE UNTUK MEMBUAT DELAY, DIMANA FUNGSI INI AKAN DIJALANKAN
      //500 MIL SECOND SETELAH USER BERHENTI MENGETIK
      search: _.debounce(function (e) {
          //KIRIM EMIT DENGAN NAMA SEARCH DAN VALUE SESUAI YANG DIKETIKKAN OLEH USER
          this.$emit('search', e.target.value)
      }, 500),
  }
}
</script>
<style lang="scss">
@import '~@resources/scss/vue/libs/vue-sweetalert.scss';
</style>