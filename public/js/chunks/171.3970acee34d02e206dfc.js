(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[171],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/utama/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/utama/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSpinner"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSelect"],
    BFormSelectOption: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSelectOption"],
    BContainer: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BContainer"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"]
  },
  data: function data() {
    return {
      isBusy: true,
      sekolah_id: null,
      sekolah: []
    };
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
      console.log(val);
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
                    size: "lg",
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
                _c(
                  "b-container",
                  { attrs: { fluid: "" } },
                  [
                    _c(
                      "b-row",
                      [
                        _c(
                          "b-col",
                          { staticClass: "my-1", attrs: { lg: "6" } },
                          [
                            _c("b-form-group", {
                              staticClass: "mb-0",
                              attrs: {
                                label: "Sort",
                                "label-for": "sort-by-select",
                                "label-cols-sm": "3",
                                "label-align-sm": "right",
                                "label-size": "sm",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var ariaDescribedby = ref.ariaDescribedby
                                    return [
                                      _c(
                                        "b-input-group",
                                        { attrs: { size: "sm" } },
                                        [
                                          _c("b-form-select", {
                                            staticClass: "w-75",
                                            attrs: {
                                              id: "sort-by-select",
                                              options: _vm.sortOptions,
                                              "aria-describedby":
                                                ariaDescribedby,
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "first",
                                                  fn: function () {
                                                    return [
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: { value: "" },
                                                        },
                                                        [_vm._v("-- none --")]
                                                      ),
                                                    ]
                                                  },
                                                  proxy: true,
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                            model: {
                                              value: _vm.sortBy,
                                              callback: function ($$v) {
                                                _vm.sortBy = $$v
                                              },
                                              expression: "sortBy",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-select",
                                            {
                                              staticClass: "w-25",
                                              attrs: {
                                                disabled: !_vm.sortBy,
                                                "aria-describedby":
                                                  ariaDescribedby,
                                                size: "sm",
                                              },
                                              model: {
                                                value: _vm.sortDesc,
                                                callback: function ($$v) {
                                                  _vm.sortDesc = $$v
                                                },
                                                expression: "sortDesc",
                                              },
                                            },
                                            [
                                              _c(
                                                "option",
                                                { domProps: { value: false } },
                                                [_vm._v("Asc")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "option",
                                                { domProps: { value: true } },
                                                [_vm._v("Desc")]
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { staticClass: "my-1", attrs: { lg: "6" } },
                          [
                            _c(
                              "b-form-group",
                              {
                                staticClass: "mb-0",
                                attrs: {
                                  label: "Initial sort",
                                  "label-for": "initial-sort-select",
                                  "label-cols-sm": "3",
                                  "label-align-sm": "right",
                                  "label-size": "sm",
                                },
                              },
                              [
                                _c("b-form-select", {
                                  attrs: {
                                    id: "initial-sort-select",
                                    options: ["asc", "desc", "last"],
                                    size: "sm",
                                  },
                                  model: {
                                    value: _vm.sortDirection,
                                    callback: function ($$v) {
                                      _vm.sortDirection = $$v
                                    },
                                    expression: "sortDirection",
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
                          { staticClass: "my-1", attrs: { lg: "6" } },
                          [
                            _c(
                              "b-form-group",
                              {
                                staticClass: "mb-0",
                                attrs: {
                                  label: "Filter",
                                  "label-for": "filter-input",
                                  "label-cols-sm": "3",
                                  "label-align-sm": "right",
                                  "label-size": "sm",
                                },
                              },
                              [
                                _c(
                                  "b-input-group",
                                  { attrs: { size: "sm" } },
                                  [
                                    _c("b-form-input", {
                                      attrs: {
                                        id: "filter-input",
                                        type: "search",
                                        placeholder: "Type to Search",
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
                                            attrs: { disabled: !_vm.filter },
                                            on: {
                                              click: function ($event) {
                                                _vm.filter = ""
                                              },
                                            },
                                          },
                                          [_vm._v("Clear")]
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
                        _c(
                          "b-col",
                          { staticClass: "my-1", attrs: { lg: "6" } },
                          [
                            _c("b-form-group", {
                              staticClass: "mb-0",
                              attrs: {
                                label: "Filter On",
                                description:
                                  "Leave all unchecked to filter on all data",
                                "label-cols-sm": "3",
                                "label-align-sm": "right",
                                "label-size": "sm",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var ariaDescribedby = ref.ariaDescribedby
                                    return [
                                      _c(
                                        "b-form-checkbox-group",
                                        {
                                          staticClass: "mt-1",
                                          attrs: {
                                            "aria-describedby": ariaDescribedby,
                                          },
                                          model: {
                                            value: _vm.filterOn,
                                            callback: function ($$v) {
                                              _vm.filterOn = $$v
                                            },
                                            expression: "filterOn",
                                          },
                                        },
                                        [
                                          _c(
                                            "b-form-checkbox",
                                            { attrs: { value: "name" } },
                                            [_vm._v("Name")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-checkbox",
                                            { attrs: { value: "age" } },
                                            [_vm._v("Age")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "b-form-checkbox",
                                            { attrs: { value: "isActive" } },
                                            [_vm._v("Active")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.sortDirection,
                                callback: function ($$v) {
                                  _vm.sortDirection = $$v
                                },
                                expression: "sortDirection",
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { staticClass: "my-1", attrs: { sm: "5", md: "6" } },
                          [
                            _c(
                              "b-form-group",
                              {
                                staticClass: "mb-0",
                                attrs: {
                                  label: "Per page",
                                  "label-for": "per-page-select",
                                  "label-cols-sm": "6",
                                  "label-cols-md": "4",
                                  "label-cols-lg": "3",
                                  "label-align-sm": "right",
                                  "label-size": "sm",
                                },
                              },
                              [
                                _c("b-form-select", {
                                  attrs: {
                                    id: "per-page-select",
                                    options: _vm.pageOptions,
                                    size: "sm",
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
                          { staticClass: "my-1", attrs: { sm: "7", md: "6" } },
                          [
                            _c("b-pagination", {
                              staticClass: "my-0",
                              attrs: {
                                "total-rows": _vm.totalRows,
                                "per-page": _vm.perPage,
                                align: "fill",
                                size: "sm",
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
                      scopedSlots: _vm._u([
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
                                  attrs: { size: "sm" },
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
                                {
                                  attrs: { size: "sm" },
                                  on: { click: row.toggleDetails },
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        row.detailsShowing ? "Hide" : "Show"
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
                      ]),
                    }),
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
                ),
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