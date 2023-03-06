(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[159],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/peta/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/peta/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d_WinNMP_WWW_dashboard_2022_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var d_WinNMP_WWW_dashboard_2022_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Example",
  components: {
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__["LTileLayer"],
    LGeoJson: vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__["LGeoJson"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_4__["LMarker"]
  },
  data: function data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 6,
      center: [48, -1.219482],
      geojson: null,
      fillColor: "#e4ce7f",
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"])(47.41322, -1.219482)
    };
  },
  computed: {
    options: function options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      };
    },
    styleFunction: function styleFunction() {
      var fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return function () {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1
        };
      };
    },
    onEachFeatureFunction: function onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return function () {};
      }
      return function (feature, layer) {
        layer.bindTooltip("<div>code:" + feature.properties.code + "</div><div>nom: " + feature.properties.nom + "</div>", {
          permanent: false,
          sticky: true
        });
      };
    }
  },
  created: function created() {
    var _this = this;
    return Object(d_WinNMP_WWW_dashboard_2022_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(d_WinNMP_WWW_dashboard_2022_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
      var response, data;
      return Object(d_WinNMP_WWW_dashboard_2022_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _this.$ability.update([{
                'action': 'manage'
              }, {
                'subject': 'all'
              }]);
              _context.next = 4;
              return fetch("https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson");
            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();
            case 7:
              data = _context.sent;
              _this.geojson = data;
              _this.loading = false;
            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/peta/Index.vue?vue&type=template&id=067ad5ea&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/peta/Index.vue?vue&type=template&id=067ad5ea& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
      _c("div", [
        _vm.loading ? _c("span", [_vm._v("Loading...")]) : _vm._e(),
        _vm._v(" "),
        _c("label", { attrs: { for: "checkbox" } }, [
          _vm._v("GeoJSON Visibility"),
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.show,
              expression: "show",
            },
          ],
          attrs: { id: "checkbox", type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.show)
              ? _vm._i(_vm.show, null) > -1
              : _vm.show,
          },
          on: {
            change: function ($event) {
              var $$a = _vm.show,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && (_vm.show = $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    (_vm.show = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                }
              } else {
                _vm.show = $$c
              }
            },
          },
        }),
        _vm._v(" "),
        _c("label", { attrs: { for: "checkboxTooltip" } }, [
          _vm._v("Enable tooltip"),
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.enableTooltip,
              expression: "enableTooltip",
            },
          ],
          attrs: { id: "checkboxTooltip", type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.enableTooltip)
              ? _vm._i(_vm.enableTooltip, null) > -1
              : _vm.enableTooltip,
          },
          on: {
            change: function ($event) {
              var $$a = _vm.enableTooltip,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && (_vm.enableTooltip = $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    (_vm.enableTooltip = $$a
                      .slice(0, $$i)
                      .concat($$a.slice($$i + 1)))
                }
              } else {
                _vm.enableTooltip = $$c
              }
            },
          },
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.fillColor,
              expression: "fillColor",
            },
          ],
          attrs: { type: "color" },
          domProps: { value: _vm.fillColor },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.fillColor = $event.target.value
            },
          },
        }),
        _vm._v(" "),
        _c("br"),
      ]),
      _vm._v(" "),
      _c(
        "l-map",
        {
          staticStyle: { height: "500px", width: "100%" },
          attrs: { zoom: _vm.zoom, center: _vm.center },
        },
        [
          _c("l-tile-layer", {
            attrs: { url: _vm.url, attribution: _vm.attribution },
          }),
          _vm._v(" "),
          _vm.show
            ? _c("l-geo-json", {
                attrs: {
                  geojson: _vm.geojson,
                  options: _vm.options,
                  "options-style": _vm.styleFunction,
                },
              })
            : _vm._e(),
          _vm._v(" "),
          _c("l-marker", { attrs: { "lat-lng": _vm.marker } }),
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

/***/ "./resources/js/src/views/dashboard/peta/Index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/dashboard/peta/Index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_067ad5ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=067ad5ea& */ "./resources/js/src/views/dashboard/peta/Index.vue?vue&type=template&id=067ad5ea&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/peta/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_067ad5ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_067ad5ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/peta/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/peta/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/peta/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/peta/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/peta/Index.vue?vue&type=template&id=067ad5ea&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/peta/Index.vue?vue&type=template&id=067ad5ea& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_067ad5ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=067ad5ea& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/peta/Index.vue?vue&type=template&id=067ad5ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_067ad5ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_067ad5ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);