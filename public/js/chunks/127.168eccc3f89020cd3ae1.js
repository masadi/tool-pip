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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: d:\\WinNMP\\WWW\\dashboard-2022\\resources\\js\\src\\views\\dashboard\\unduhan\\UnduhanHeader.vue: Unexpected token, expected \",\" (209:8)\n\n\u001b[0m \u001b[90m 207 |\u001b[39m       form\u001b[33m:\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 208 |\u001b[39m         npsn\u001b[33m:\u001b[39m \u001b[32m''\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 209 |\u001b[39m         email\u001b[33m:\u001b[39m \u001b[32m''\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 210 |\u001b[39m         password\u001b[33m:\u001b[39m \u001b[32m''\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 211 |\u001b[39m       }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 212 |\u001b[39m       show\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n    at instantiate (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:67:32)\n    at constructor (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:364:12)\n    at JSXParserMixin.raise (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:3364:19)\n    at JSXParserMixin.unexpected (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:3397:16)\n    at JSXParserMixin.expect (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:3760:28)\n    at JSXParserMixin.parseObjectLike (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11982:14)\n    at JSXParserMixin.parseExprAtom (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11464:23)\n    at JSXParserMixin.parseExprAtom (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:7238:20)\n    at JSXParserMixin.parseExprSubscripts (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11171:23)\n    at JSXParserMixin.parseUpdate (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11153:21)\n    at JSXParserMixin.parseMaybeUnary (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11127:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10956:61)\n    at JSXParserMixin.parseExprOps (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10962:23)\n    at JSXParserMixin.parseMaybeConditional (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10937:23)\n    at JSXParserMixin.parseMaybeAssign (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10895:21)\n    at d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10863:39\n    at JSXParserMixin.allowInAnd (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12640:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10863:17)\n    at JSXParserMixin.parseObjectProperty (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12127:83)\n    at JSXParserMixin.parseObjPropValue (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12154:100)\n    at JSXParserMixin.parsePropertyDefinition (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12083:17)\n    at JSXParserMixin.parseObjectLike (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11993:21)\n    at JSXParserMixin.parseExprAtom (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11464:23)\n    at JSXParserMixin.parseExprAtom (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:7238:20)\n    at JSXParserMixin.parseExprSubscripts (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11171:23)\n    at JSXParserMixin.parseUpdate (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11153:21)\n    at JSXParserMixin.parseMaybeUnary (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11127:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10956:61)\n    at JSXParserMixin.parseExprOps (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10962:23)\n    at JSXParserMixin.parseMaybeConditional (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10937:23)\n    at JSXParserMixin.parseMaybeAssign (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10895:21)\n    at JSXParserMixin.parseExpressionBase (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10845:23)\n    at d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10840:39\n    at JSXParserMixin.allowInAnd (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12635:16)\n    at JSXParserMixin.parseExpression (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:10840:17)\n    at JSXParserMixin.parseReturnStatement (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:13296:28)\n    at JSXParserMixin.parseStatementContent (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12954:21)\n    at JSXParserMixin.parseStatement (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12917:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:13497:25)\n    at JSXParserMixin.parseBlockBody (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:13489:10)\n    at JSXParserMixin.parseBlock (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:13477:10)\n    at JSXParserMixin.parseFunctionBody (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12287:24)\n    at JSXParserMixin.parseFunctionBodyAndFinish (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12271:10)\n    at JSXParserMixin.parseMethod (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12226:31)\n    at JSXParserMixin.parseObjectMethod (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12120:19)\n    at JSXParserMixin.parseObjPropValue (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12154:23)\n    at JSXParserMixin.parsePropertyDefinition (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:12083:17)\n    at JSXParserMixin.parseObjectLike (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11993:21)\n    at JSXParserMixin.parseExprAtom (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:11464:23)\n    at JSXParserMixin.parseExprAtom (d:\\WinNMP\\WWW\\dashboard-2022\\node_modules\\@babel\\parser\\lib\\index.js:7238:20)");

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
                                    id: "npsn",
                                    label: "Akun Dapodik",
                                    "label-for": "npsn",
                                    description: "Akun Dapodik",
                                  },
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "npsn",
                                      type: "text",
                                      placeholder: "Akun Dapodik",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.form.npsn,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "npsn", $$v)
                                      },
                                      expression: "form.npsn",
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
                                    id: "input-group-1",
                                    label: "Akun Dapodik",
                                    "label-for": "input-1",
                                    description: "Akun Dapodik",
                                  },
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "input-1",
                                      type: "email",
                                      placeholder: "Akun Dapodik",
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
                                    label: "Password Dapodik",
                                    "label-for": "input-2",
                                  },
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      type: "password",
                                      id: "input-2",
                                      placeholder: "Password Dapodik",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.form.password,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "password", $$v)
                                      },
                                      expression: "form.password",
                                    },
                                  }),
                                ],
                                1
                              ),
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
                      _vm._v(" "),
                      _vm.alert
                        ? _c(
                            "b-alert",
                            {
                              staticClass: "mt-1",
                              attrs: { show: "", variant: "danger" },
                            },
                            [
                              _c("div", { staticClass: "alert-body" }, [
                                _vm._v(
                                  _vm._s(_vm.alert_text) + "\n            "
                                ),
                              ]),
                            ]
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