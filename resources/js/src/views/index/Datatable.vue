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
            <template v-slot:cell(kelayakan)="row">
                {{(row.item.kelayakan) ? row.item.kelayakan.alasan_layak_pip : ''}}
            </template>
            <template v-slot:cell(actions)="row">
                <b-button id="show-btn" @click="showModal(row.item)" variant="success" size="sm">Edit</b-button>
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
        <b-modal ref="my-modal" :title="'Ubah Kelayakan PIP: '+nama_siswa" @show="resetModal" @hidden="resetModal" @ok="handleOk">
            <div class="d-block text-center">
                <b-row>
                    <b-col sm="3">
                        <label for="layak_pip">Layak PIP:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-select id="layak_pip" v-model="layak_pip" :options="data_layak"></b-form-select>
                    </b-col>
                </b-row>
                <b-row class="mt-2">
                    <b-col sm="3">
                        <label for="id_layak_pip">Alasan Layak PIP:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-select id="id_layak_pip" v-model="id_layak_pip" :options="kelayakan" text-field="alasan_layak_pip" value-field="id_layak_pip"></b-form-select>
                    </b-col>
                </b-row>
            </div>
        </b-modal>
    </div>
</template>

<script>
import _ from 'lodash' //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI
import { BRow, BCol, BTable, BSpinner, BPagination, BButton, BFormSelect } from 'bootstrap-vue'
export default {
    components: {
        BRow,
        BCol,
        BTable,
        BSpinner,
        BPagination,
        BButton,
        BFormSelect,
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
        isBusy: {
            type: Boolean,
            default: () => true,
        }
    },
    data() {
        return {
            nama_siswa: null,
            //VARIABLE INI AKAN MENGHADLE SORTING DATA
            sortBy: null, //FIELD YANG AKAN DISORT AKAN OTOMATIS DISIMPAN DISINI
            sortDesc: false, //SEDANGKAN JENISNYA ASCENDING ATAU DESC AKAN DISIMPAN DISINI
            layak_pip: null,
            id_layak_pip: null,
            data_layak: [
                { value: null, text: '== Pilih Opsi ==' },
                { value: 0, text: 'Tidak' },
                { value: 1, text: 'Ya' }
            ],
            kelayakan: [],
            peserta_didik_id: null,
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
        showModal(item) {
            this.peserta_didik_id = item.peserta_didik_id
            this.nama_siswa = item.nama
            this.layak_pip = item.layak_pip
            this.id_layak_pip = item.id_layak_pip
            this.$http.get('/kelayakan').then(response => {
                this.$refs['my-modal'].show()
                this.kelayakan = response.data
            });
        },
        resetModal() {
            //this.nama = ''
        },
        handleOk(bvModalEvent) {
            bvModalEvent.preventDefault()
            this.handleSubmit()
        },
        handleSubmit() {
            console.log('handleSubmit');
            this.$http.post('/kelayakan', {
                peserta_didik_id: this.peserta_didik_id,
                layak_pip: this.layak_pip,
                id_layak_pip: this.id_layak_pip,
            }).then(response => {
                this.$swal({
                    icon: response.data.icon,
                    title: response.data.title,
                    text: response.data.text,
                    customClass: {
                    confirmButton: 'btn btn-success',
                    },
                }).then(response => {
                    this.$refs['my-modal'].hide()
                    this.loadPerPage(this.meta.per_page)
                })
            });
        },
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