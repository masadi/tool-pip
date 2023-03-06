(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[171],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/utama/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/utama/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCard"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCardBody"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCol"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BSpinner"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormSelect"],
    BFormSelectOption: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormSelectOption"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BModal"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTable"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BButton"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BPagination"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormGroup"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormCheckbox"],
    BFormCheckboxGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormCheckboxGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BInputGroupAppend"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormInput"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BInputGroup"]
  },
  data: function data() {
    return {
      isBusy: true,
      sekolah_id: null,
      sekolah: [],
      items: [],
      meta: {},
      fields: [{
        key: 'name',
        label: 'Person full name',
        sortable: true,
        sortDirection: 'desc'
      }, {
        key: 'age',
        label: 'Person age',
        sortable: true,
        "class": 'text-center'
      }, {
        key: 'isActive',
        label: 'Is Active',
        formatter: function formatter(value, key, item) {
          return value ? 'Yes' : 'No';
        },
        sortable: true,
        sortByFormatted: true,
        filterByFormatted: true
      }, {
        key: 'actions',
        label: 'Actions'
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100, {
        value: 500,
        text: "500"
      }],
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
    };
  },
  computed: {
    sortOptions: function sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(function (f) {
        return f.sortable;
      }).map(function (f) {
        return {
          text: f.label,
          value: f.key
        };
      });
    }
  },
  mounted: function mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  created: function created() {
    var _this = this;
    this.$ability.update([{
      'action': 'manage'
    }, {
      'subject': 'all'
    }]);
    this.$http.get('/sekolah').then(function (response) {
      _this.isBusy = false;
      _this.sekolah = response.data;
    });
  },
  methods: {
    getPd: function getPd(val) {
      var _this2 = this;
      this.$http.get('/sekolah').then(function (response) {
        _this2.isBusy = false;
        _this2.sekolah = response.data;
      });
      console.log(val);
    },
    info: function info(item, index, button) {
      this.infoModal.title = "Row index: ".concat(index);
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit('bv::show::modal', this.infoModal.id, button);
    },
    resetInfoModal: function resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.content = '';
    },
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/utama/Index.vue?vue&type=template&id=037ef984&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/utama/Index.vue?vue&type=template&id=037ef984& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-4" },
    [
      _c("b-card-title", { staticClass: "text-center" }, [
        _vm._v("TOOL PIP DAPODIK"),
      ]),
      _vm._v(" "),
      _c("b-card-body", [
        _vm.isBusy
          ? _c(
              "div",
              { staticClass: "text-center text-danger my-2" },
              [
                _c("b-spinner", { staticClass: "align-middle" }),
                _vm._v(" "),
                _c("strong", [_vm._v("Loading...")]),
              ],
              1
            )
          : _c(
              "div",
              [
                _c("b-form-select", {
                  attrs: {
                    options: _vm.sekolah,
                    "text-field": "nama",
                    "value-field": "sekolah_id",
                  },
                  on: { change: _vm.getPd },
                  scopedSlots: _vm._u([
                    {
                      key: "first",
                      fn: function () {
                        return [
                          _c(
                            "b-form-select-option",
                            { attrs: { value: null, disabled: "" } },
                            [_vm._v("-- Pilih Sekolah --")]
                          ),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                  model: {
                    value: _vm.sekolah_id,
                    callback: function ($$v) {
                      _vm.sekolah_id = $$v
                    },
                    expression: "sekolah_id",
                  },
                }),
                _vm._v(" "),
                _vm.items.length
                  ? _c(
                      "section",
                      [
                        _c(
                          "b-row",
                          { staticClass: "my-2" },
                          [
                            _c(
                              "b-col",
                              { attrs: { md: "4" } },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    staticClass: "mb-0",
                                    attrs: {
                                      label: "Per page",
                                      "label-for": "per-page-select",
                                      "label-cols": "3",
                                      "label-align": "right",
                                    },
                                  },
                                  [
                                    _c("b-form-select", {
                                      attrs: {
                                        id: "per-page-select",
                                        options: _vm.pageOptions,
                                      },
                                      model: {
                                        value: _vm.perPage,
                                        callback: function ($$v) {
                                          _vm.perPage = $$v
                                        },
                                        expression: "perPage",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { md: "4", "offset-md": "4" } },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    staticClass: "mb-0",
                                    attrs: {
                                      label: "Cari",
                                      "label-for": "filter-input",
                                      "label-cols": "3",
                                      "label-align": "right",
                                    },
                                  },
                                  [
                                    _c(
                                      "b-input-group",
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "filter-input",
                                            type: "search",
                                            placeholder:
                                              "Cari Peserta Didik...",
                                          },
                                          model: {
                                            value: _vm.filter,
                                            callback: function ($$v) {
                                              _vm.filter = $$v
                                            },
                                            expression: "filter",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-input-group-append",
                                          [
                                            _c(
                                              "b-button",
                                              {
                                                attrs: {
                                                  disabled: !_vm.filter,
                                                },
                                                on: {
                                                  click: function ($event) {
                                                    _vm.filter = ""
                                                  },
                                                },
                                              },
                                              [_vm._v("Hapus")]
                                            ),
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
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("b-table", {
                          attrs: {
                            items: _vm.items,
                            fields: _vm.fields,
                            "current-page": _vm.currentPage,
                            "per-page": _vm.perPage,
                            filter: _vm.filter,
                            "filter-included-fields": _vm.filterOn,
                            "sort-by": _vm.sortBy,
                            "sort-desc": _vm.sortDesc,
                            "sort-direction": _vm.sortDirection,
                            stacked: "md",
                            "show-empty": "",
                            small: "",
                          },
                          on: {
                            "update:sortBy": function ($event) {
                              _vm.sortBy = $event
                            },
                            "update:sort-by": function ($event) {
                              _vm.sortBy = $event
                            },
                            "update:sortDesc": function ($event) {
                              _vm.sortDesc = $event
                            },
                            "update:sort-desc": function ($event) {
                              _vm.sortDesc = $event
                            },
                            filtered: _vm.onFiltered,
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "cell(name)",
                                fn: function (row) {
                                  return [
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(row.value.first) +
                                        " " +
                                        _vm._s(row.value.last) +
                                        "\n            "
                                    ),
                                  ]
                                },
                              },
                              {
                                key: "cell(actions)",
                                fn: function (row) {
                                  return [
                                    _c(
                                      "b-button",
                                      {
                                        staticClass: "mr-1",
                                        on: {
                                          click: function ($event) {
                                            return _vm.info(
                                              row.item,
                                              row.index,
                                              $event.target
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                Info modal\n              "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      { on: { click: row.toggleDetails } },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(
                                              row.detailsShowing
                                                ? "Hide"
                                                : "Show"
                                            ) +
                                            " Details\n              "
                                        ),
                                      ]
                                    ),
                                  ]
                                },
                              },
                              {
                                key: "row-details",
                                fn: function (row) {
                                  return [
                                    _c("b-card", [
                                      _c(
                                        "ul",
                                        _vm._l(row.item, function (value, key) {
                                          return _c("li", { key: key }, [
                                            _vm._v(
                                              _vm._s(key) + ": " + _vm._s(value)
                                            ),
                                          ])
                                        }),
                                        0
                                      ),
                                    ]),
                                  ]
                                },
                              },
                            ],
                            null,
                            false,
                            2240078243
                          ),
                        }),
                        _vm._v(" "),
                        _c(
                          "b-row",
                          { staticClass: "mt-2" },
                          [
                            _c("b-col", { attrs: { md: "6" } }, [
                              _c("p", [
                                _vm._v("Menampilkan 1 sampai 2 dari 3 entri"),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { md: "6" } },
                              [
                                _c("b-pagination", {
                                  attrs: {
                                    "total-rows": _vm.totalRows,
                                    "per-page": _vm.perPage,
                                    align: "right",
                                  },
                                  model: {
                                    value: _vm.currentPage,
                                    callback: function ($$v) {
                                      _vm.currentPage = $$v
                                    },
                                    expression: "currentPage",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-modal",
                          {
                            attrs: {
                              id: _vm.infoModal.id,
                              title: _vm.infoModal.title,
                              "ok-only": "",
                            },
                            on: { hide: _vm.resetInfoModal },
                          },
                          [_c("pre", [_vm._v(_vm._s(_vm.infoModal.content))])]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ],
              1
            ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/dashboard/utama/Index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/dashboard/utama/Index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_037ef984___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=037ef984& */ "./resources/js/src/views/dashboard/utama/Index.vue?vue&type=template&id=037ef984&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/utama/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_037ef984___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_037ef984___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/utama/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/utama/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/utama/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/utama/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/utama/Index.vue?vue&type=template&id=037ef984&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/utama/Index.vue?vue&type=template&id=037ef984& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_037ef984___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=037ef984& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/utama/Index.vue?vue&type=template&id=037ef984&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_037ef984___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_037ef984___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);