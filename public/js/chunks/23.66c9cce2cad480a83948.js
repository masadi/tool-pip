(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/dashboard/maps/leaflet/code.js");
//
//
//
//
//
//
//
//
//
//
//
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
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LTileLayer"],
    LCircle: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LCircle"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 8,
      center: [47.313220, -1.319482],
      circle: {
        center: [47.413220, -1.0482],
        radius: 4500,
        color: '#EA5455'
      },
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_3__["codeBasic"]
    };
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var quot = /"/g;
var replace = uncurryThis(''.replace);

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue2leaflet-map.leaflet-container {\n  height: 350px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=template&id=581132c6&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=template&id=581132c6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    "b-card-code",
    {
      attrs: { title: "Basic Map" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function () {
            return [_vm._v("\n    " + _vm._s(_vm.codeBasic) + "\n  ")]
          },
          proxy: true,
        },
      ]),
    },
    [
      _c(
        "l-map",
        { attrs: { zoom: _vm.zoom, center: _vm.center } },
        [
          _c("l-tile-layer", { attrs: { url: _vm.url } }),
          _vm._v(" "),
          _c("l-circle", {
            attrs: {
              "lat-lng": _vm.circle.center,
              radius: _vm.circle.radius,
              color: _vm.circle.color,
            },
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeafletBasic_vue_vue_type_template_id_581132c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeafletBasic.vue?vue&type=template&id=581132c6& */ "./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=template&id=581132c6&");
/* harmony import */ var _LeafletBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeafletBasic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LeafletBasic_vue_vue_type_style_index_0_id_581132c6_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss& */ "./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LeafletBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeafletBasic_vue_vue_type_template_id_581132c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeafletBasic_vue_vue_type_template_id_581132c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_style_index_0_id_581132c6_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=style&index=0&id=581132c6&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_style_index_0_id_581132c6_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_style_index_0_id_581132c6_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_style_index_0_id_581132c6_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_style_index_0_id_581132c6_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=template&id=581132c6&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=template&id=581132c6& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_template_id_581132c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LeafletBasic.vue?vue&type=template&id=581132c6& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/maps/leaflet/LeafletBasic.vue?vue&type=template&id=581132c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_template_id_581132c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeafletBasic_vue_vue_type_template_id_581132c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/maps/leaflet/code.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/dashboard/maps/leaflet/code.js ***!
  \***************************************************************/
/*! exports provided: codeBasic, codeMarkerPolygon, codePopup, codeGeoJSON, codeLayerGroup, codeCustomIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeMarkerPolygon", function() { return codeMarkerPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codePopup", function() { return codePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeGeoJSON", function() { return codeGeoJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeLayerGroup", function() { return codeLayerGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeCustomIcon", function() { return codeCustomIcon; });
var codeBasic = "\n<template>\n  <div>\n    <l-map\n      :zoom=\"zoom\"\n      :center=\"center\"\n    >\n      <l-tile-layer :url=\"url\" />\n      <l-circle\n        :lat-lng=\"circle.center\"\n        :radius=\"circle.radius\"\n        :color=\"circle.color\"\n      />\n    </l-map>\n  </div>\n</template>\n\n<script>\nimport { LMap, LTileLayer, LCircle } from 'vue2-leaflet'\nimport 'leaflet/dist/leaflet.css'\n\nexport default {\n  components: {\n    LMap,\n    LTileLayer,\n    LCircle,\n  },\n  data() {\n    return {\n      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n      zoom: 8,\n      center: [47.313220, -1.319482],\n      circle: {\n        center: [47.413220, -1.0482],\n        radius: 4500,\n        color: '#EA5455',\n      },\n    }\n  },\n}\n</script>\n\n<style lang=\"scss\">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n";
var codeMarkerPolygon = "\n<template>\n  <div>\n    <l-map\n      :zoom=\"zoom\"\n      :center=\"center\"\n    >\n      <l-tile-layer :url=\"url\" />\n      <l-marker :lat-lng=\"markerLatLng\" />\n      <l-circle\n        :lat-lng=\"circle.center\"\n        :radius=\"circle.radius\"\n        :color=\"circle.color\"\n      />\n      <l-polygon\n        :lat-lngs=\"polygon.latlngs\"\n        :color=\"polygon.color\"\n      />\n    </l-map>\n  </div>\n</template>\n\n<script>\n/* eslint-disable global-require */\nimport {\n  LMap, LTileLayer, LMarker, LCircle, LPolygon,\n} from 'vue2-leaflet'\nimport { Icon } from 'leaflet'\nimport 'leaflet/dist/leaflet.css'\n\n// eslint-disable-next-line no-underscore-dangle\ndelete Icon.Default.prototype._getIconUrl\nIcon.Default.mergeOptions({\n  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),\n  iconUrl: require('leaflet/dist/images/marker-icon.png'),\n  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),\n})\n/* eslint-disable global-require */\n\nexport default {\n  components: {\n    LMap,\n    LTileLayer,\n    LMarker,\n    LCircle,\n    LPolygon,\n  },\n  data() {\n    return {\n      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n      zoom: 10,\n      center: [47.313220, -1.319482],\n      markerLatLng: [47.313220, -1.319482],\n      circle: {\n        center: [47.313220, -1.319482],\n        radius: 4500,\n        color: '#EA5455',\n      },\n      polygon: {\n        latlngs: [[47.2263299, -1.6222], [47.21024000000001, -1.6270065], [47.1969447, -1.6136169], [47.18527929999999, -1.6143036], [47.1794457, -1.6098404], [47.1775788, -1.5985107], [47.1676598, -1.5753365], [47.1593731, -1.5521622], [47.1593731, -1.5319061], [47.1722111, -1.5143967], [47.1960115, -1.4841843], [47.2095404, -1.4848709], [47.2291277, -1.4683914], [47.2533687, -1.5116501], [47.2577961, -1.5531921], [47.26828069, -1.5621185], [47.2657179, -1.589241], [47.2589612, -1.6204834], [47.237287, -1.6266632], [47.2263299, -1.6222]],\n        color: '#7367F0',\n      },\n    }\n  },\n}\n</script>\n\n<style lang=\"scss\">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n";
var codePopup = "\n<template>\n  <div>\n    <l-map\n      :zoom=\"zoom\"\n      :center=\"center\"\n    >\n      <l-tile-layer :url=\"url\" />\n      <l-marker :lat-lng=\"markerLatLng\">\n        <l-popup>You're here!</l-popup>\n      </l-marker>\n    </l-map>\n  </div>\n</template>\n\n<script>\nimport {\n  LMap, LTileLayer, LMarker, LPopup,\n} from 'vue2-leaflet'\n\nexport default {\n  components: {\n    LMap,\n    LTileLayer,\n    LMarker,\n    LPopup,\n  },\n  data() {\n    return {\n      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n      zoom: 8,\n      center: [47.313220, -1.319482],\n      markerLatLng: [47.313220, -1.319482, { draggable: 'true' }],\n    }\n  },\n}\n</script>\n\n<style lang=\"scss\">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n";
var codeGeoJSON = "\n<template>\n  <div>\n    <l-map\n      :zoom=\"zoom\"\n      :center=\"center\"\n    >\n      <l-tile-layer :url=\"url\" />\n      <l-geo-json :geojson=\"geojson\" />\n    </l-map>\n  </div>\n</template>\n\n<script>\nimport { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet'\n\nexport default {\n  components: {\n    LMap,\n    LTileLayer,\n    LGeoJson,\n  },\n  data() {\n    return {\n      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n      zoom: 8,\n      center: [47.313220, -1.319482],\n      geojson: null,\n    }\n  },\n  async created() {\n    const response = await fetch('https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson')\n    this.geojson = await response.json()\n  },\n}\n</script>\n\n<style lang=\"scss\">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n";
var codeLayerGroup = "\n<template>\n  <div>\n     <div>\n      <b-button\n        variant=\"outline-primary\"\n        @click=\"fitPolyline\"\n      >\n        Fit map to polyline\n      </b-button>\n\n      <b-row class=\"mt-2\">\n        <b-col md=\"6\">\n          <b-form-group label=\"Contol Layers position: \">\n            <b-form-select\n              v-model=\"layersPosition\"\n              :options=\"Positions\"\n            />\n          </b-form-group>\n\n        </b-col>\n        <b-col md=\"6\">\n          <b-form-group label=\"Attribution position:\">\n            <b-form-select\n              v-model=\"attributionPosition\"\n              :options=\"Positions\"\n            />\n          </b-form-group>\n        </b-col>\n      </b-row>\n\n    </div>\n\n    <!-- map -->\n    <l-map\n      :zoom.sync=\"zoom\"\n      :options=\"mapOptions\"\n      :center=\"center\"\n      :bounds=\"bounds\"\n      :min-zoom=\"minZoom\"\n      :max-zoom=\"maxZoom\"\n      style=\"height: 500px; width: 100%\"\n    >\n      <l-control-layers\n        :position=\"layersPosition\"\n        :collapsed=\"false\"\n        :sort-layers=\"true\"\n      />\n      <l-tile-layer\n        v-for=\"tileProvider in tileProviders\"\n        :key=\"tileProvider.name\"\n        :name=\"tileProvider.name\"\n        :visible=\"tileProvider.visible\"\n        :url=\"tileProvider.url\"\n        :attribution=\"tileProvider.attribution\"\n        :token=\"token\"\n        layer-type=\"base\"\n      />\n      <l-control-zoom :position=\"zoomPosition\" />\n      <l-control-attribution\n        :position=\"attributionPosition\"\n        :prefix=\"attributionPrefix\"\n      />\n      <l-control-scale :imperial=\"imperial\" />\n      <l-marker\n        v-for=\"marker in markers\"\n        :key=\"marker.id\"\n        :visible=\"marker.visible\"\n        :draggable=\"marker.draggable\"\n        :lat-lng.sync=\"marker.position\"\n        :icon=\"marker.icon\"\n        @click=\"alert(marker)\"\n      >\n        <l-popup :content=\"marker.tooltip\" />\n        <l-tooltip :content=\"marker.tooltip\" />\n      </l-marker>\n      <l-layer-group\n        layer-type=\"overlay\"\n        name=\"Layer polyline\"\n      >\n        <l-polyline\n          v-for=\"item in polylines\"\n          :key=\"item.id\"\n          :lat-lngs=\"item.points\"\n          :visible=\"item.visible\"\n          @click=\"alert(item)\"\n        />\n      </l-layer-group>\n      <l-layer-group\n        v-for=\"item in stuff\"\n        :key=\"item.id\"\n        :visible.sync=\"item.visible\"\n        layer-type=\"overlay\"\n        name=\"Layer 1\"\n      >\n        <l-layer-group :visible=\"item.markersVisible\">\n          <l-marker\n            v-for=\"marker in item.markers\"\n            :key=\"marker.id\"\n            :visible=\"marker.visible\"\n            :draggable=\"marker.draggable\"\n            :lat-lng=\"marker.position\"\n            @click=\"alert(marker)\"\n          />\n        </l-layer-group>\n        <l-polyline\n          :lat-lngs=\"item.polyline.points\"\n          :visible=\"item.polyline.visible\"\n          @click=\"alert(item.polyline)\"\n        />\n      </l-layer-group>\n    </l-map>\n  </div>\n</template>\n\n<script>\n/* eslint-disable global-require */\nimport {\n  BButton, BFormSelect, BRow, BCol, BFormGroup,\n} from 'bootstrap-vue'\nimport {\n  LMap,\n  LTileLayer,\n  LMarker,\n  LPolyline,\n  LLayerGroup,\n  LTooltip,\n  LPopup,\n  LControlZoom,\n  LControlAttribution,\n  LControlScale,\n  LControlLayers,\n} from 'vue2-leaflet'\nimport { latLngBounds, Icon } from 'leaflet'\n\n// eslint-disable-next-line no-underscore-dangle\ndelete Icon.Default.prototype._getIconUrl\nIcon.Default.mergeOptions({\n  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),\n  iconUrl: require('leaflet/dist/images/marker-icon.png'),\n  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),\n})\n/* eslint-disable global-require */\nconst markers1 = [\n  {\n    position: { lng: -1.219482, lat: 47.41322 },\n    visible: true,\n    draggable: true,\n  },\n  { position: { lng: -1.571045, lat: 47.457809 } },\n  { position: { lng: -1.560059, lat: 47.739323 } },\n  { position: { lng: -0.922852, lat: 47.886881 } },\n  { position: { lng: -0.769043, lat: 48.231991 } },\n  { position: { lng: 0.395508, lat: 48.268569 } },\n  { position: { lng: 0.604248, lat: 48.026672 } },\n  { position: { lng: 1.2854, lat: 47.982568 } },\n  { position: { lng: 1.318359, lat: 47.894248 } },\n  { position: { lng: 1.373291, lat: 47.879513 } },\n  { position: { lng: 1.384277, lat: 47.798397 } },\n  { position: { lng: 1.329346, lat: 47.754098 } },\n  { position: { lng: 1.329346, lat: 47.680183 } },\n  { position: { lng: 0.999756, lat: 47.635784 } },\n  { position: { lng: 0.86792, lat: 47.820532 } },\n  { position: { lng: 0.571289, lat: 47.820532 } },\n  { position: { lng: 0.439453, lat: 47.717154 } },\n  { position: { lng: 0.439453, lat: 47.61357 } },\n  { position: { lng: -0.571289, lat: 47.487513 } },\n  { position: { lng: -0.615234, lat: 47.680183 } },\n  { position: { lng: -0.812988, lat: 47.724545 } },\n  { position: { lng: -1.054688, lat: 47.680183 } },\n  { position: { lng: -1.219482, lat: 47.41322 } },\n]\n\nconst poly1 = [\n  { lng: -1.219482, lat: 47.41322 },\n  { lng: -1.571045, lat: 47.457809 },\n  { lng: -1.560059, lat: 47.739323 },\n  { lng: -0.922852, lat: 47.886881 },\n  { lng: -0.769043, lat: 48.231991 },\n  { lng: 0.395508, lat: 48.268569 },\n  { lng: 0.604248, lat: 48.026672 },\n  { lng: 1.2854, lat: 47.982568 },\n  { lng: 1.318359, lat: 47.894248 },\n  { lng: 1.373291, lat: 47.879513 },\n  { lng: 1.384277, lat: 47.798397 },\n  { lng: 1.329346, lat: 47.754098 },\n  { lng: 1.329346, lat: 47.680183 },\n  { lng: 0.999756, lat: 47.635784 },\n  { lng: 0.86792, lat: 47.820532 },\n  { lng: 0.571289, lat: 47.820532 },\n  { lng: 0.439453, lat: 47.717154 },\n  { lng: 0.439453, lat: 47.61357 },\n  { lng: -0.571289, lat: 47.487513 },\n  { lng: -0.615234, lat: 47.680183 },\n  { lng: -0.812988, lat: 47.724545 },\n  { lng: -1.054688, lat: 47.680183 },\n  { lng: -1.219482, lat: 47.41322 },\n]\n\nconst tileProviders = [\n  {\n    name: 'OpenStreetMap',\n    visible: true,\n    attribution:\n      '&copy; <a target=\"_blank\" href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors',\n    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n  },\n  {\n    name: 'OpenTopoMap',\n    visible: false,\n    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',\n    attribution:\n      'Map data: &copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>, <a href=\"http://viewfinderpanoramas.org\">SRTM</a> | Map style: &copy; <a href=\"https://opentopomap.org\">OpenTopoMap</a> (<a href=\"https://creativecommons.org/licenses/by-sa/3.0/\">CC-BY-SA</a>)',\n  },\n]\n\nexport default {\n  name: 'Example',\n  components: {\n    LMap,\n    LTileLayer,\n    LMarker,\n    LPolyline,\n    LLayerGroup,\n    LTooltip,\n    LPopup,\n    LControlZoom,\n    LControlAttribution,\n    LControlScale,\n    LControlLayers,\n    BButton,\n    BFormSelect,\n    BRow,\n    BCol,\n    BFormGroup,\n  },\n  data() {\n    return {\n      center: [51.505, -0.09],\n      opacity: 0.6,\n      token: 'your token if using mapbox',\n      mapOptions: {\n        zoomControl: false,\n        attributionControl: false,\n        zoomSnap: true,\n      },\n      zoom: 3,\n      minZoom: 1,\n      maxZoom: 20,\n      zoomPosition: 'topleft',\n      attributionPosition: 'bottomright',\n      layersPosition: 'topright',\n      attributionPrefix: 'Vue2Leaflet',\n      imperial: false,\n      Positions: ['topleft', 'topright', 'bottomleft', 'bottomright'],\n      tileProviders,\n      markers: [\n        {\n          id: 'm1',\n          position: { lat: 51.505, lng: -0.09 },\n          tooltip: 'tooltip for marker1',\n          draggable: true,\n          visible: true,\n        },\n        {\n          id: 'm2',\n          position: { lat: 51.8905, lng: -0.09 },\n          tooltip: 'tooltip for marker2',\n          draggable: true,\n          visible: false,\n        },\n        {\n          id: 'm3',\n          position: { lat: 51.005, lng: -0.09 },\n          tooltip: 'tooltip for marker3',\n          draggable: true,\n          visible: true,\n        },\n        {\n          id: 'm4',\n          position: { lat: 50.7605, lng: -0.09 },\n          tooltip: 'tooltip for marker4',\n          draggable: true,\n          visible: false,\n        },\n      ],\n      polylines: [\n        {\n          id: 'p1',\n          points: [\n            { lat: 37.772, lng: -122.214 },\n            { lat: 21.291, lng: -157.821 },\n            { lat: -18.142, lng: -181.569 },\n            { lat: -27.467, lng: -206.973 },\n          ],\n          visible: true,\n        },\n        {\n          id: 'p2',\n          points: [\n            [-73.91, 40.78],\n            [-87.62, 41.83],\n            [-96.72, 32.76],\n          ],\n          visible: true,\n        },\n      ],\n      stuff: [\n        {\n          id: 's1',\n          markers: markers1,\n          polyline: { points: poly1, visible: true },\n          visible: true,\n          markersVisible: true,\n        },\n      ],\n      bounds: latLngBounds(\n        { lat: 51.476483373501964, lng: -0.14668464136775586 },\n        { lat: 51.52948330894063, lng: -0.019140238291583955 },\n      ),\n    }\n  },\n  methods: {\n    alert(item) {\n      // eslint-disable-next-line no-alert\n      alert(`this is ${JSON.stringify(item)}`)\n    },\n    addMarker() {\n      const newMarker = {\n        position: { lat: 50.5505, lng: -0.09 },\n        draggable: true,\n        visible: true,\n      }\n      this.markers.push(newMarker)\n    },\n    removeMarker(index) {\n      this.markers.splice(index, 1)\n    },\n    fitPolyline() {\n      const bounds = latLngBounds(markers1.map(o => o.position))\n      this.bounds = bounds\n    },\n  },\n}\n</script>\n";
var codeCustomIcon = "\n<template>\n  <div>\n    <l-map\n      :zoom=\"zoom\"\n      :center=\"center\"\n    >\n      <l-tile-layer\n        :url=\"url\"\n        :attribution=\"attribution\"\n      />\n\n      <!-- Use default icon -->\n      <l-marker :lat-lng=\"[47.41322, -1.219482]\" />\n\n      <!-- Use icon given in icon property -->\n      <l-marker\n        :lat-lng=\"[47.41322, -1.209482]\"\n        :icon=\"icon\"\n      />\n\n      <!-- Create image icon (icon) from l-icon tag -->\n      <l-marker :lat-lng=\"[47.41322, -1.199482]\">\n        <l-icon>\n          <b-img\n            :src=\"require('@/assets/images/misc/leaf-red.png')\"\n            height=\"50\"\n          />\n        </l-icon>\n      </l-marker>\n    </l-map>\n  </div>\n</template>\n\n<script>\n\n/* eslint-disable global-require */\nimport { BImg } from 'bootstrap-vue'\nimport {\n  LMap, LTileLayer, LMarker, LIcon,\n} from 'vue2-leaflet'\nimport { latLng, icon, Icon } from 'leaflet'\n\n// eslint-disable-next-line no-underscore-dangle\ndelete Icon.Default.prototype._getIconUrl\nIcon.Default.mergeOptions({\n  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),\n  iconUrl: require('leaflet/dist/images/marker-icon.png'),\n  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),\n})\n\nexport default {\n  name: 'Icon',\n  components: {\n    BImg,\n    LMap,\n    LTileLayer,\n    LMarker,\n    LIcon,\n  },\n  data() {\n    return {\n      zoom: 13,\n      center: latLng(47.41322, -1.219482),\n      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n      attribution: '&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors',\n      icon: icon({\n        iconUrl: require('@/assets/images/misc/leaf-green.png'),\n        iconSize: [50, 50],\n        iconAnchor: [16, 37],\n      }),\n    }\n  },\n}\n/* eslint-disable global-require */\n</script>\n\n<style lang=\"scss\">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n";

/***/ })

}]);