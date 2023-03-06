(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _TableKabupaten_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableKabupaten.vue */ "./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//


 //IMPORT COMPONENT DATATABLENYA
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    Datatable: _TableKabupaten_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isBusy: true,
      nama: '',
      fields: [{
        key: 'nama',
        label: 'Nama',
        sortable: false,
        thClass: 'text-center'
      }, {
        key: 'npsn',
        label: 'NPSN',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'kecamatan',
        label: 'Kecamatan',
        sortable: false,
        thClass: 'text-center'
      }, {
        key: 'status',
        label: 'Pengguna',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'ptk_count',
        label: 'PTK Pengguna',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'pd_count',
        label: 'PD Terproses',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }],
      items: []
    };
  },
  created: function created() {
    var _this = this;
    this.$http.get('/dashboard/sekolah/' + this.$route.params.kode_wilayah).then(function (response) {
      _this.isBusy = false;
      _this.nama = response.data.nama;
      _this.items = response.data.all_sekolah;
      _this.$ability.update([{
        'action': 'manage'
      }, {
        'subject': 'all'
      }]);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTooltip"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSpinner"]
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
      "default": function _default() {
        return true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=template&id=db343490&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=template&id=db343490& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
        "b-card-header",
        [
          _c("b-card-title", [
            _c("h2", [_vm._v("Data Sekolah di Wilayah " + _vm._s(_vm.nama))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card-body",
        [
          _c("datatable", {
            attrs: { items: _vm.items, fields: _vm.fields, isBusy: _vm.isBusy },
          }),
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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=template&id=d8a7b520&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=template&id=d8a7b520& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("b-table", {
    attrs: {
      striped: "",
      hover: "",
      items: _vm.items,
      fields: _vm.fields,
      busy: _vm.isBusy,
      "show-empty": "",
    },
    scopedSlots: _vm._u([
      {
        key: "table-busy",
        fn: function () {
          return [
            _c(
              "div",
              { staticClass: "text-center text-danger my-2" },
              [
                _c("b-spinner", { staticClass: "align-middle" }),
                _vm._v(" "),
                _c("strong", [_vm._v("Loading...")]),
              ],
              1
            ),
          ]
        },
        proxy: true,
      },
      {
        key: "cell(nama)",
        fn: function (row) {
          return [
            _c(
              "a",
              {
                attrs: {
                  href:
                    "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/" +
                    row.item.sekolah_id,
                  id: row.item.sekolah_id,
                },
              },
              [_vm._v(_vm._s(row.item.nama))]
            ),
            _vm._v(" "),
            _c(
              "b-tooltip",
              { attrs: { target: row.item.sekolah_id, triggers: "hover" } },
              [
                _vm._v("\n      Lihat data "),
                _c("b", [_vm._v(_vm._s(row.item.nama))]),
                _vm._v(" di Sekolah Kita\n    "),
              ]
            ),
          ]
        },
      },
      {
        key: "cell(status)",
        fn: function (row) {
          return [
            _c(
              "b-badge",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: row.item.sinkron,
                    expression: "row.item.sinkron",
                  },
                ],
                attrs: { variant: "success" },
              },
              [_vm._v("Pengguna")]
            ),
            _vm._v(" "),
            _c(
              "b-badge",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !row.item.sinkron,
                    expression: "!row.item.sinkron",
                  },
                ],
                attrs: { variant: "danger" },
              },
              [_vm._v("Non Pengguna")]
            ),
          ]
        },
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/dashboard/wilayah/Kabupaten.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/dashboard/wilayah/Kabupaten.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Kabupaten_vue_vue_type_template_id_db343490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kabupaten.vue?vue&type=template&id=db343490& */ "./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=template&id=db343490&");
/* harmony import */ var _Kabupaten_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kabupaten.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Kabupaten_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Kabupaten_vue_vue_type_template_id_db343490___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Kabupaten_vue_vue_type_template_id_db343490___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/wilayah/Kabupaten.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kabupaten_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kabupaten.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kabupaten_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=template&id=db343490&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=template&id=db343490& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Kabupaten_vue_vue_type_template_id_db343490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Kabupaten.vue?vue&type=template&id=db343490& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/wilayah/Kabupaten.vue?vue&type=template&id=db343490&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Kabupaten_vue_vue_type_template_id_db343490___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Kabupaten_vue_vue_type_template_id_db343490___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableKabupaten_vue_vue_type_template_id_d8a7b520___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableKabupaten.vue?vue&type=template&id=d8a7b520& */ "./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=template&id=d8a7b520&");
/* harmony import */ var _TableKabupaten_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableKabupaten.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableKabupaten_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableKabupaten_vue_vue_type_template_id_d8a7b520___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableKabupaten_vue_vue_type_template_id_d8a7b520___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/wilayah/TableKabupaten.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableKabupaten_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableKabupaten.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableKabupaten_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=template&id=d8a7b520&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=template&id=d8a7b520& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableKabupaten_vue_vue_type_template_id_d8a7b520___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableKabupaten.vue?vue&type=template&id=d8a7b520& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/wilayah/TableKabupaten.vue?vue&type=template&id=d8a7b520&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableKabupaten_vue_vue_type_template_id_d8a7b520___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableKabupaten_vue_vue_type_template_id_d8a7b520___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);