(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[127],{

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
  data: function data() {
    return {
      isBusy: true,
      data: {}
    };
  },
  created: function created() {
    var _this = this;
    this.$http.get('/dashboard/unduhan').then(function (response) {
      _this.$ability.update([{
        'action': 'manage'
      }, {
        'subject': 'all'
      }]);
      _this.isBusy = false;
      _this.data = response.data;
    });
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  props: {
    data: {
      type: String,
      "default": function _default() {
        return '';
      }
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
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardBody"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BTab"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"],
    BIcon: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BIcon"],
    BIconLightning: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BIconLightning"],
    BIconFolder2: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BIconFolder2"],
    BIconTerminal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BIconTerminal"],
    BIconDownload: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BIconDownload"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BIconBook: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BIconBook"],
    BIconHdd: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BIconHdd"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    headerData: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{
        text: 'Select One',
        value: null
      }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    };
  },
  methods: {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset: function onReset(event) {
      var _this = this;
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
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
    [
      _c("unduhan-header", {
        attrs: { data: _vm.data.header, isBusy: _vm.isBusy },
      }),
      _vm._v(" "),
      _c("unduhan-changelog", {
        attrs: { data: _vm.data.changelog, isBusy: _vm.isBusy },
      }),
    ],
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
    _c("span", { domProps: { innerHTML: _vm._s(_vm.data) } }),
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
                          _vm._v(" INSTALLER\n        "),
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
                                src: "http://erapor.ditpsmk.net/img/logo-big.png",
                                alt: "Aplikasi e-Rapor SMK Versi 6.0.0",
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
                          _vm._v(" DOKUMENTASI\n        "),
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
                            " Dimensi Elemen Subelemen Profil Pelajar Pancasila pada\n              Kurikulum Merdeka"
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
                          _vm._v(" Standar Nasional\n              Pendidikan"),
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
                          _vm._v(" Standar\n              Kompetensi Lulusan"),
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
                          _vm._v(" Standar\n              Isi"),
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
                          _vm._v("\n              Standar Proses"),
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
                          _vm._v("\n              Standar Penilaian"),
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
                            "\n              Spektrum\n              Keahlian, Struktur Kurikulum, dan Linieritas"
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
                          _vm._v("\n              Konsentrasi Keahlian"),
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
                          _vm._v("\n              Capaian Pembelajaran"),
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
                            " Panduan\n              Pembelajaran dan Asesmen"
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
                          _vm._v(" Panduan\n              Pengembangan KOS"),
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
                          _vm._v(" Buku Saku\n              Kurikulum Merdeka"),
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
                          _vm._v(" Platform\n              Merdeka Mengajar"),
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
                            " Pusat\n              Penguatan\n              Karakter"
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
                            " Satuan\n              Pendidikan Pelaksana Implementasi Kurikulum Merdeka"
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
                          _vm._v(" Panduan\n              Impelementasi BK"),
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
                          _vm._v(" UPDATER\n        "),
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
                              " [enter]. Tunggu sampai proses update file dari github\n                  selesai"
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
                              ". Tunggu sampai proses update versi aplikasi selesai.\n                "
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
                              " dengan cara klik kanan dan pilih Run as\n                  Administartor."
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
                        _vm._v("\n              kemudian install"),
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
                        _vm._v("\n              [enter])"),
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
                          " [enter]. Tunggu sampai proses update file dari github selesai.\n            "
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
              _vm._v(" "),
              _c(
                "b-tab",
                {
                  scopedSlots: _vm._u([
                    {
                      key: "title",
                      fn: function () {
                        return [
                          _c("b-icon-hdd"),
                          _vm._v(" DATA DAPODIK\n        "),
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
                      _c("h3", [_vm._v("Unduh Data Dapodik")]),
                      _vm._v(" "),
                      _vm.show
                        ? _c(
                            "b-form",
                            {
                              on: { submit: _vm.onSubmit, reset: _vm.onReset },
                            },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    id: "input-group-1",
                                    label: "Email address:",
                                    "label-for": "input-1",
                                    description:
                                      "We'll never share your email with anyone else.",
                                  },
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "input-1",
                                      type: "email",
                                      placeholder: "Enter email",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.form.email,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "email", $$v)
                                      },
                                      expression: "form.email",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    id: "input-group-2",
                                    label: "Your Name:",
                                    "label-for": "input-2",
                                  },
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "input-2",
                                      placeholder: "Enter name",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.form.name,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "name", $$v)
                                      },
                                      expression: "form.name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-form-group", {
                                attrs: { id: "input-group-4" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function (ref) {
                                        var ariaDescribedby =
                                          ref.ariaDescribedby
                                        return [
                                          _c(
                                            "b-form-checkbox-group",
                                            {
                                              attrs: {
                                                id: "checkboxes-4",
                                                "aria-describedby":
                                                  ariaDescribedby,
                                              },
                                              model: {
                                                value: _vm.form.checked,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "checked",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.checked",
                                              },
                                            },
                                            [
                                              _c(
                                                "b-form-checkbox",
                                                { attrs: { value: "me" } },
                                                [_vm._v("Check me out")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-checkbox",
                                                { attrs: { value: "that" } },
                                                [_vm._v("Check that out")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  false,
                                  2247578507
                                ),
                              }),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { type: "submit", variant: "primary" },
                                },
                                [_vm._v("Submit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { type: "reset", variant: "danger" } },
                                [_vm._v("Reset")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
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