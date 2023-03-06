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
/* harmony import */ var _UnduhanChangelog_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnduhanChangelog.vue */ "./resources/js/src/views/dashboard/unduhan/UnduhanChangelog.vue");
//
//
//
//
//
//
//
//
//
//




/*import ProfileSuggestedPages from './ProfileSuggestedPages.vue'
import ProfileTwitterFeed from './ProfileTwitterFeed.vue'
import ProfilePost from './ProfilePost.vue'
import ProfileLatestPhotos from './ProfileLatestPhotos.vue'
import ProfileSuggestion from './ProfileSuggestion.vue'
import ProfilePolls from './ProfilePolls.vue'
import profileBottom from './profileBottom.vue'*/

/* eslint-disable global-require */
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    UnduhanHeader: _UnduhanHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    UnduhanChangelog: _UnduhanChangelog_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
    /*ProfileSuggestedPages,
    ProfileTwitterFeed,
    ProfilePost,
    ProfileLatestPhotos,
    ProfileSuggestion,
    ProfilePolls,
    profileBottom,*/
  },
  data: function data() {
    return {
      profileData: {}
    };
  },
  created: function created() {
    var _this = this;
    this.$http.get('/profile/data').then(function (res) {
      _this.profileData = res.data;
      _this.$ability.update([{
        'action': 'manage'
      }, {
        'subject': 'all'
      }]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#user-profile {\n  /*-------------profile header section---------*/\n  /*-------- profile info section --------*/\n}\n#user-profile .profile-header {\n  overflow: hidden;\n}\n#user-profile .profile-header .profile-img-container {\n  position: absolute;\n  bottom: -2rem;\n  z-index: 2;\n}\n[dir=ltr] #user-profile .profile-header .profile-img-container {\n  left: 2.14rem;\n}\n[dir=rtl] #user-profile .profile-header .profile-img-container {\n  right: 2.14rem;\n}\n#user-profile .profile-header .profile-img-container .profile-img {\n  height: 8.92rem;\n  width: 8.92rem;\n}\n[dir] #user-profile .profile-header .profile-img-container .profile-img {\n  border: 0.357rem solid #fff;\n  background-color: #fff;\n  border-radius: 0.428rem;\n  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] #user-profile .profile-header .profile-header-nav .navbar {\n  padding: 0.8rem 1rem;\n}\n#user-profile .profile-header .profile-header-nav .navbar .navbar-toggler {\n  line-height: 0;\n}\n[dir=ltr] #user-profile .profile-header .profile-header-nav .navbar .profile-tabs .nav-item i, [dir=ltr] #user-profile .profile-header .profile-header-nav .navbar .profile-tabs .nav-item svg {\n  margin-right: 0;\n}\n[dir=rtl] #user-profile .profile-header .profile-header-nav .navbar .profile-tabs .nav-item i, [dir=rtl] #user-profile .profile-header .profile-header-nav .navbar .profile-tabs .nav-item svg {\n  margin-left: 0;\n}\n#user-profile #profile-info .profile-star {\n  color: #babfc7;\n}\n#user-profile #profile-info .profile-star i.profile-favorite,\n#user-profile #profile-info .profile-star svg.profile-favorite {\n  fill: #ff9f43;\n  stroke: #ff9f43;\n}\n#user-profile #profile-info .profile-likes {\n  fill: #ea5455;\n  stroke: #ea5455;\n}\n#user-profile #profile-info .profile-polls-info .progress {\n  height: 0.42rem;\n}\n#user-profile .profile-latest-img {\n  transition: all 0.2s ease-in-out;\n}\n#user-profile .profile-latest-img:hover {\n  z-index: 10;\n}\n[dir] #user-profile .profile-latest-img:hover {\n  transform: translateY(-4px) scale(1.2);\n}\n[dir] #user-profile .profile-latest-img img {\n  margin-top: 1.28rem;\n}\n[dir] #user-profile .block-element .spinner-border {\n  border-width: 0.14rem;\n}\n@media (max-width: 991.98px) {\n#user-profile .profile-latest-img img {\n    width: 100%;\n}\n}\n@media (min-width: 768px) {\n.profile-header-nav .profile-tabs {\n    width: 100%;\n}\n[dir=ltr] .profile-header-nav .profile-tabs {\n    margin-left: 13.2rem;\n}\n[dir=rtl] .profile-header-nav .profile-tabs {\n    margin-right: 13.2rem;\n}\n}\n@media (max-width: 575.98px) {\n#user-profile .profile-header .profile-img-container .profile-img {\n    height: 100px;\n    width: 100px;\n}\n#user-profile .profile-header .profile-img-container .profile-title h2 {\n    font-size: 1.5rem;\n}\n}\n[dir] #user-profile .profile-header .profile-header-nav .navbar .navbar-toggler {\n  border: none;\n}", ""]);
// Exports
module.exports = exports;


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
  return Object.keys(_vm.profileData).length
    ? _c(
        "div",
        { attrs: { id: "user-profile" } },
        [_c("unduhan-header"), _vm._v(" "), _c("unduhan-changelog")],
        1
      )
    : _vm._e()
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
  return _c("b-card", [_vm._v("\n  asd asd\n")])
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
/* empty/unused harmony star reexport *//* harmony import */ var _Unduhan_vue_vue_type_style_index_0_id_6b6ffd92_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss& */ "./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unduhan_vue_vue_type_style_index_0_id_6b6ffd92_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/unduhan/Unduhan.vue?vue&type=style&index=0&id=6b6ffd92&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unduhan_vue_vue_type_style_index_0_id_6b6ffd92_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unduhan_vue_vue_type_style_index_0_id_6b6ffd92_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unduhan_vue_vue_type_style_index_0_id_6b6ffd92_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unduhan_vue_vue_type_style_index_0_id_6b6ffd92_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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