(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _UnduhanHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnduhanHeader.vue */ "./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue");
/* harmony import */ var _UnduhanChangelog_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnduhanChangelog.vue */ "./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue");
//
//
//
//
//
//
//





/* eslint-disable global-require */
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    UnduhanHeader: _UnduhanHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    UnduhanChangelog: _UnduhanChangelog_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    this.$ability.update([{
      'action': 'manage'
    }, {
      'subject': 'all'
    }]);
  }
});
/* eslint-disable global-require */

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  props: {
    aboutData: {
      type: Object,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTab"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BIcon: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BIcon"],
    BIconLightning: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BIconLightning"],
    BIconFolder2: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BIconFolder2"],
    BIconTerminal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BIconTerminal"],
    BIconDownload: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BIconDownload"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BIconBook: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BIconBook"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    headerData: {
      type: Object,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=template&id=6b6ffd92&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=template&id=6b6ffd92& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("unduhan-header"), _vm._v(" "), _c("unduhan-changelog")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=template&id=8ce9cf5c&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=template&id=8ce9cf5c& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("b-card", [
    _c("h3", [_vm._v("Daftar Perubahan")]),
    _vm._v(" "),
    _c("div", { attrs: { id: "form" } }, [
      _c("legend", [_c("h3", [_vm._v("Versi 6.0.1")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Menambah menu Nilai Ekstrakurikuler di login Wali Kelas"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Export Import Nilai Akhir & Memilih Capaian Kompetensi"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Ambil data "),
          _c("strong", [_vm._v("Diterima Dikelas")]),
          _vm._v(
            " oleh Wali Kelas\n        (satuan atau semua anggota rombel)"
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Penambahan fitur Reset Nilai Ekstrakurikuler"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(
            " Filter data Tujuan Pembelajaran (TP) sesuai masing-masing Guru"
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Mapping pembelajaran"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Hak Akses Tata Usaha (TU)"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Alamat sekolah di cetak rapor"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Pengambilan data Dapodik & Referensi e-Rapor"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Tambah/Hapus Gelar PTK"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Unduh legger"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 6.0.0")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Rilis Aplikasi baru menggunakan Framework Laravel 8"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.1.6")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Kelompok Mata Pelajaran Kurikulum SMK Pusat Keunggulan"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Cetak Rapor Semester Kurikulum SMK Pusat Keunggulan"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(
            " Cetak Rapor Proyek Penguatan Profil Pelajar Pancasila dan Budaya\n        Kerja (P5BK) Kurikulum SMK Pusat Keunggulan"
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(
            " Referensi Elemen dan Capaian Kompetensi Kurikulum SMK Pusat\n        Keunggulan"
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Perencanaan dan Penilaian Kurikulum SMK Pusat Keunggulan"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Pilihan Semester di laman login"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.1.5")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Rilis Tahun Ajaran 2021/2022 Semester Ganjil"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.1.4")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Perbaikan status kenaikan kelas"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.1.3")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Pembaharuan rentan nilai UKK sesuai juknis terbaru"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Typo Class 'App\\Rombel4_tahun'"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.1.2")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(
            " Penambahan pengiriman data referensi Kompetensi Dasar menggunakan\n        eRapor Synchronizer"
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.1.1")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(
            " Registrasi pengguna eRapor SMK menggunakan eRapor Synchronizer\n      "
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(
            " Mengirim data Dapodik lokal ke aplikasi eRapor SMK menggunakan\n        eRapor Synchronizer"
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Import nilai"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.1.0")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Tambahan isian Rombel 4 tahun di menu Pengaturan Umum"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Mengaktifkan isian nama kelas di menu Kenaikan Kelas"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Mengaktifkan isian keterangan di menu Prakerin"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Atur Ulang Pengguna"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Urutan abjad di cetak rapor"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.0.9")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Menu Nilai US/USBN di Login Wali Kelas"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Menu Nilai UN di Login Wali Kelas"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Menu Kewirausahaan di Login Wali Kelas"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Atur ulang sandi di login wali kelas"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Cetak Sertifikat UKK"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(
            " Atur ulang pengguna dibagi 2 (dua) proses, untuk PTK dan untuk PD\n      "
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Proses kenaikan kelas dan kelulusan Peserta Didik"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Edit Data Peserta Didik di Login PTK"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Penilaian UKK dibawah perencanaan Multi Paket"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Jumlah rombel terkunci di tingkat 12 (dua belas)"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Sortable menu pembelajaran"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Penambahan form input di laman Praktik Kerja Lapangan"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Email peserta didik di login wali kelas"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.0.8")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Tombol Status Penilaian di Dashboard Admin"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Generate password pengguna memakai kombinasi acak"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Menampilkan detil data diri di profil Peserta Didik"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(
            " Mengaktifkan pilihan semester di menu Rekap Nilai dan menu Unduh\n        Leger pada login Waka Kurikulum"
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Cetak Rapor UTS"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Akses Menu sesuai Role"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Nilai Ekstrakurikuler ganda"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Menu Ketidakhadiran"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Penilaian UKK"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Kirim Nilai Rapor ke Dapodik"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.0.7")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Kunci nilai"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Filter mata pelajaran agama"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Pilihan tahun ajaran di form login"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Sinkronisasi dapodik"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.0.6")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Sinkronisasi dapodik"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Pilihan kepala sekolah di menu Pengaturan Umum"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(
            " Ekstrakurikuler, Anggota Ekstrakurikuler dan Nilai Ekstrakurikuler\n      "
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Leger Nilai Akhir"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.0.5")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Menambah rencana keterampilan"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Kepala sekolah dari instruktur"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.0.4")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Edit perencanaan"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Penilaian remedial"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(
            " Hitung ulang nilai remedial (jika ada) pada aksi Generate Nilai"
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Login menggunakan NUPTK/NISN"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Sorting nama peserta didik"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Mapping Pembelajaran"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.0.3")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(
            " Pengiriman data eRapor SMK ke server Direktorat Pembinaan SMK"
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Tampilan nilai di laman Pratinjau Nilai"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Tampilan nilai di laman Rapor Semester"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Cetak Halaman Depan Rapor"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.0.2")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Sinkronisasi referensi wilayah"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Sinkronisasi referensi kompetensi dasar"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(
            " Sinkronisasi data Diterima dikelas untuk peserta didik di menu\n        detil peserta didik"
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Pilihan periode aktif pada laman login"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Registrasi menggunakan password baru dapodik"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Penambahan akses Referensi Rombel di Login Waka Kurikulum"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(
            " Penambahan tombol Simpan Data Peserta Didik di Login Wali Kelas\n        dan Waka Kurikulum"
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Duplikasi rencana penilaian keterampilan"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Mapping pembelajaran"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Simpan asesor dan instruktur"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Urutan mata pelajaran di cetak rapor"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Status kenaikan kelas & kelulusan di cetak rapor"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.0.1")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Menghapus menu migrasi e-Rapor versi 4.x ke versi 5.x"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Duplikasi rencana penilaian"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(
            " Guru BK dapat melihat semua penilaian sikap yang di input oleh\n        guru lain"
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Pembaharuan]")]),
          _vm._v(" Tombol hapus data ganda pada Referensi Kompetensi Dasar"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Sinkronisasi sekolah"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Sinkronisasi peserta didik"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Data rombel di menu list peserta didik"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Filter peserta didik"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Unduh format excel penilaian"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Unduh legger KD"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Update profil pengguna"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Penilaian remedial"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Periksa koneksi database Dapodik"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Mengaktifkan form edit asesor dan instruktur"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Mengganti ukuran kertas cetak rapor UTS dari Legal ke A4"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Autocomplete Saved Password"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Filter mapel agama sesuai agama peserta didik"),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("b", { staticClass: "text-danger" }, [_vm._v("[Perbaikan]")]),
          _vm._v(" Filter dudi"),
        ]),
      ]),
      _vm._v(" "),
      _c("legend", [_c("h3", [_vm._v("Versi 5.0.0")])]),
      _vm._v(" "),
      _c("ol", [
        _c("li", [
          _c("b", { staticClass: "text-success" }, [_vm._v("[Rilis]")]),
          _vm._v(" Rilis aplikasi."),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=template&id=31a1eb82&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=template&id=31a1eb82& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-card-body",
        [
          _c(
            "b-tabs",
            { attrs: { card: "" } },
            [
              _c(
                "b-tab",
                {
                  attrs: { active: "" },
                  scopedSlots: _vm._u([
                    {
                      key: "title",
                      fn: function () {
                        return [
                          _c("b-icon-lightning"),
                          _vm._v(" INSTALLER\n          "),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _c(
                    "b-card-text",
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { col: "", md: "8" } },
                            [
                              _c("h2", [
                                _vm._v("Installer Aplikasi e-Rapor SMK"),
                              ]),
                              _vm._v(" "),
                              _c("p", [_vm._v("Versi Aplikasi : 6.0.0")]),
                              _vm._v(" "),
                              _c("p", [
                                _c("strong", [
                                  _vm._v(
                                    "Dirilis pada tanggal 30 November 2022"
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    variant: "success",
                                    href: "https://drive.google.com/file/d/1DqLffh_6eZkyA-_rvQ7s3zasLZOaSs4F/view?usp=share_link",
                                    target: "_blank",
                                  },
                                },
                                [
                                  _c("b-icon-download"),
                                  _vm._v(" Unduh Aplikasi"),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { col: "", md: "4" } }, [
                            _c("img", {
                              staticClass: "img-fluid",
                              attrs: {
                                src: "http://erapor.ditpsmk.net/assets/img/logo-big.png",
                                alt: "Aplikasi Dapodik versi 2023",
                              },
                            }),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                {
                  scopedSlots: _vm._u([
                    {
                      key: "title",
                      fn: function () {
                        return [
                          _c("b-icon-folder2"),
                          _vm._v(" DOKUMENTASI\n          "),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _c("b-card-text", [
                    _c("h3", [
                      _vm._v("Panduan Penggunaan Aplikasi e-Rapor SMK"),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://drive.google.com/file/d/1lqQl_kmRSqWZydEse634nEa6gVY5npGb/view?usp=share_link",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(" Panduan Penggunaan Aplikasi e-Rapor SMK"),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("h3", [_vm._v("Panduan & Pedoman Kurikulum")]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://drive.google.com/file/d/1VWJ3MGrc9q12z3VOAfTO8WwxbGuaw_WN/view?usp=share_link",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(
                            " Panduan Pembelajaran dan Asesmen Kurikulum Merdeka"
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://drive.google.com/file/d/104vUWWHkAaXit-nxiTXDLP4ktM7zJX6K/view?usp=sharing",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(
                            " Panduan Penguatan Projek Profil Pelajar Pancasila"
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://drive.google.com/file/d/1uCrllxH1uPdGp1A0AenWiGkdvA0f1isV/view?usp=share_link",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(
                            " Dimensi Elemen Subelemen Profil Pelajar Pancasila pada\n                Kurikulum Merdeka"
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://drive.google.com/file/d/19tP2LIclhq0a5phMsBnlVQuzdZynPeRV/view?usp=share_link",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(
                            " Pedoman Pembelajaran dan Asesmen Kurikulum 2013"
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("h3", [
                      _vm._v("Tautan tentang Kurikulum Merdeka pada SMK"),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/PP57SNP",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(
                            " Standar Nasional\n                Pendidikan"
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/permendikbudristek5SKL",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(
                            " Standar\n                Kompetensi Lulusan"
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/permedikbudristek7StandarIsi",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(" Standar\n                Isi"),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/permendikbudristek16StandarProses",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v("\n                Standar Proses"),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/permendikbudristek21StandarPenilaian",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v("\n                Standar Penilaian"),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/PerubahanKepmendikbudristek56",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(
                            "\n                Spektrum\n                Keahlian, Struktur Kurikulum, dan Linieritas"
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/SKKaBSKAP024KonsentrasiKeahlian",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v("\n                Konsentrasi Keahlian"),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/SKKaBSKAP033CapaianPembelajaran",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v("\n                Capaian Pembelajaran"),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/panduanPembelajarandanAsesmen",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(
                            " Panduan\n                Pembelajaran dan Asesmen"
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/PanduanPengembanganKOS",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(" Panduan\n                Pengembangan KOS"),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/PanduanP5",
                            target: "blank",
                          },
                        },
                        [_c("b-icon-book"), _vm._v(" Panduan P5")],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/kepKaBSKAP9DimensiElemenSubelemenProfilPelajarPancasila",
                            target: "blank",
                          },
                        },
                        [
                          _c("i", { staticClass: "fa fa-book" }),
                          _vm._v(
                            " Dimensi, Elemen, Subelemen Profil Pelajar Pancasila"
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/BukusakuKurikulumMerdeka",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(
                            " Buku Saku\n                Kurikulum Merdeka"
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/platformMerdekaMengajar",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(" Platform\n                Merdeka Mengajar"),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/PusatPenguatanKarakter",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(
                            " Pusat\n                Penguatan\n                Karakter"
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/SKKaBSKAP044SatpenIKM",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(
                            " Satuan\n                Pendidikan Pelaksana Implementasi Kurikulum Merdeka"
                          ),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://bit.ly/PanduanImplementasiBK",
                            target: "blank",
                          },
                        },
                        [
                          _c("b-icon-book"),
                          _vm._v(" Panduan\n                Impelementasi BK"),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                {
                  scopedSlots: _vm._u([
                    {
                      key: "title",
                      fn: function () {
                        return [
                          _c("b-icon-terminal"),
                          _vm._v(" UPDATER\n          "),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _c("b-card-text", [
                    _c("h3", [
                      _vm._v("Panduan Update Aplikasi (Pengguna Windows)"),
                    ]),
                    _vm._v(" "),
                    _c("ol", { staticClass: "ps-1", attrs: { type: "a" } }, [
                      _c("li", [
                        _c("strong", [_vm._v("Manual")]),
                        _vm._v(" "),
                        _c("ul", { staticStyle: { "padding-left": "10px" } }, [
                          _c("li", [
                            _vm._v(
                              "Buka Command Prompt (CMD) Run as Administrator"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v("Ketik "),
                            _c("code", [_vm._v("cd C:\\eRaporSMK\\dataweb")]),
                            _vm._v(" [enter]"),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v("Ketik "),
                            _c("code", [_vm._v("git stash")]),
                            _vm._v(" [enter]"),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v("Ketik "),
                            _c("code", [_vm._v("git clean -df")]),
                            _vm._v(" [enter]"),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v("Ketik "),
                            _c("code", [_vm._v("git pull origin main")]),
                            _vm._v(
                              " [enter]. Tunggu sampai proses update file dari github\n                    selesai"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v("Ketik "),
                            _c("code", [_vm._v("composer update")]),
                            _vm._v(" [enter]"),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v("Ketik "),
                            _c("code", [_vm._v("php artisan erapor:update")]),
                            _vm._v(
                              ". Tunggu sampai proses update versi aplikasi selesai.\n                  "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Pastikan di akhir informasi di Command Prompt, versi aplikasi sudah berubah"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Cek kembali aplikasi e-Rapor SMK, jika ada yang gagal silahkan laporkan ke Tim Helpdesk"
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("li", [
                        _c("strong", [_vm._v("Menggunakan file .bat")]),
                        _vm._v(" "),
                        _c("ul", { staticStyle: { "padding-left": "10px" } }, [
                          _c("li", [
                            _vm._v("Silahkan download file "),
                            _c("strong", [
                              _vm._v("updater e-Rapor SMK V6.0.1.bat"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "https://drive.google.com/file/d/1cBZWtlGqv_bgRFa3CJnVCXzpaGVlg1u1/view",
                                  target: "_blank",
                                },
                              },
                              [_vm._v("disini")]
                            ),
                            _vm._v("."),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v("Buka file "),
                            _c("strong", [
                              _vm._v("updater e-Rapor SMK V6.0.1.bat"),
                            ]),
                            _vm._v(
                              " dengan cara klik kanan dan pilih Run as\n                    Administartor."
                            ),
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v(
                              "Tunggu sampai proses update versi aplikasi selesai."
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("h3", [
                      _vm._v("Panduan Update Aplikasi (Pengguna Linux)"),
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticStyle: { "padding-left": "10px" } }, [
                      _c("li", [
                        _vm._v(
                          "Buka aplikasi Putty, jika belum ada, silahkan unduh "
                        ),
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",
                              target: "_blank",
                            },
                          },
                          [_vm._v("disini")]
                        ),
                        _vm._v("\n                kemudian install"),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "Login ke SSH menggunakan username & password yang dimiliki"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "Masuk ke root direktori aplikasi e-Rapor SMK di install.(Contoh "
                        ),
                        _c("code", [_vm._v("cd /var/www/html/erapor")]),
                        _vm._v("\n                [enter])"),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v("Ketik "),
                        _c("code", [_vm._v("git stash")]),
                        _vm._v(" [enter]"),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v("Ketik "),
                        _c("code", [_vm._v("git clean -df")]),
                        _vm._v(" [enter]"),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v("Ketik "),
                        _c("code", [_vm._v("git pull origin main")]),
                        _vm._v(
                          " [enter]. Tunggu sampai proses update file dari github selesai.\n              "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v("Ketik "),
                        _c("code", [_vm._v("composer update")]),
                        _vm._v(" [enter]"),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v("Ketik "),
                        _c("code", [_vm._v("php artisan erapor:update")]),
                        _vm._v(
                          ". Tunggu sampai proses update versi aplikasi selesai."
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "Pastikan di akhir informasi di SSH, versi aplikasi sudah berubah"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "Cek kembali aplikasi e-Rapor SMK, jika ada yang gagal silahkan laporkan ke Tim Helpdesk"
                        ),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/dashboard/unduhan/Unduhan.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/dashboard/unduhan/Unduhan.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Unduhan_vue_vue_type_template_id_6b6ffd92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unduhan.vue?vue&type=template&id=6b6ffd92& */ "./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=template&id=6b6ffd92&");
/* harmony import */ var _Unduhan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Unduhan.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Unduhan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Unduhan_vue_vue_type_template_id_6b6ffd92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Unduhan_vue_vue_type_template_id_6b6ffd92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/unduhan/Unduhan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unduhan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Unduhan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unduhan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=template&id=6b6ffd92&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=template&id=6b6ffd92& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Unduhan_vue_vue_type_template_id_6b6ffd92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Unduhan.vue?vue&type=template&id=6b6ffd92& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=template&id=6b6ffd92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Unduhan_vue_vue_type_template_id_6b6ffd92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Unduhan_vue_vue_type_template_id_6b6ffd92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnduhanChangelog_vue_vue_type_template_id_8ce9cf5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnduhanChangelog.vue?vue&type=template&id=8ce9cf5c& */ "./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=template&id=8ce9cf5c&");
/* harmony import */ var _UnduhanChangelog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnduhanChangelog.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UnduhanChangelog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnduhanChangelog_vue_vue_type_template_id_8ce9cf5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnduhanChangelog_vue_vue_type_template_id_8ce9cf5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhanChangelog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnduhanChangelog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhanChangelog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=template&id=8ce9cf5c&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=template&id=8ce9cf5c& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhanChangelog_vue_vue_type_template_id_8ce9cf5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnduhanChangelog.vue?vue&type=template&id=8ce9cf5c& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue?vue&type=template&id=8ce9cf5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhanChangelog_vue_vue_type_template_id_8ce9cf5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhanChangelog_vue_vue_type_template_id_8ce9cf5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnduhanHeader_vue_vue_type_template_id_31a1eb82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnduhanHeader.vue?vue&type=template&id=31a1eb82& */ "./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=template&id=31a1eb82&");
/* harmony import */ var _UnduhanHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnduhanHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UnduhanHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnduhanHeader_vue_vue_type_template_id_31a1eb82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnduhanHeader_vue_vue_type_template_id_31a1eb82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhanHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnduhanHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhanHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=template&id=31a1eb82&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=template&id=31a1eb82& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhanHeader_vue_vue_type_template_id_31a1eb82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnduhanHeader.vue?vue&type=template&id=31a1eb82& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/UnduhanHeader.vue?vue&type=template&id=31a1eb82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhanHeader_vue_vue_type_template_id_31a1eb82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnduhanHeader_vue_vue_type_template_id_31a1eb82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);