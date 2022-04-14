/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/Ambroise Regular/Ambroise Regular.ttf */ "./src/assets/Ambroise Regular/Ambroise Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background2 Cropped.jpg */ "./src/assets/background2 Cropped.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n@font-face {\r\n    font-family: \"ambroise\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") \r\n}\r\n\r\n*{\r\n    margin:0;\r\n    padding:0;\r\n\r\n}\r\n\r\n\r\n\r\n:root{\r\n    font-size:10px;\r\n    font-family: \"ambroise\" ;\r\n    height:100vh;\r\n}\r\n\r\n.ul{\r\n    text-decoration: none;\r\n}\r\n\r\nli{\r\n    \r\n    list-style: none;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    color:black;\r\n    transition: color 0.5s ease;\r\n}\r\n\r\na:hover{\r\n    color: rgba(23,23,23,.36);\r\n}\r\n\r\n.container{\r\n    display:flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\n\r\n/*||header*/\r\n\r\nheader{\r\n    display:flex;\r\n    justify-content:space-between;\r\n    background-color: rgb(253, 250, 245);\r\n    padding-left:2vw;\r\n    padding-right:2vw;\r\n    flex: 0 1 auto;\r\n    font-weight: normal;\r\n}\r\n\r\n.header_logo{\r\n  \r\n    padding-top: 2vw;\r\n    \r\n}\r\n\r\n.header_logo img{\r\n    width: 15vw;\r\n    max-width: 250px;\r\n}\r\n\r\nheader ul{\r\n    display:flex;\r\n    gap: 200px;\r\n    font-size: calc(1rem + 1.5vw);\r\n}\r\n\r\n\r\n.header_rightlinks{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content:center;\r\n    \r\n}\r\n\r\n/*||homepage main*/\r\n\r\n\r\n\r\nmain{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-repeat: no-repeat;\r\n    \r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    font-size: calc(5rem + 1.5vw);\r\n    flex: 1 1 auto;\r\n\r\n    display:flex;justify-content: center;\r\n    align-items: center;\r\n   \r\n\r\n  /*   background: url(./assets/background2.jpg) no-repeat center center fixed;\r\n    \r\n    flex: 1 1 auto; */\r\n   \r\n    \r\n}\r\n\r\n.main_content{\r\n  \r\n    display: flex;\r\n    position:relative;\r\n   \r\n    gap: 2vw;\r\n    font-size: calc(4rem + 2.5vw)\r\n}\r\n\r\n/*|| gallery  tab  */\r\n\r\n.grid_one{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr ;\r\n    grid-template-rows: 1fr 1fr;\r\n    gap: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.grid_two{\r\n    display:grid;\r\n    grid-template-columns: 1fr 2fr ;\r\n    grid-template-rows: 1fr 1fr;\r\n    gap: 15px;\r\n}\r\n\r\n.grid_one :nth-child(1){\r\ngrid-row: 1/3;\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.grid_two :nth-child(1){\r\n    grid-column: 2;\r\n    grid-row: 1/3;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n}\r\n\r\nfigure{\r\n    transition: all 0.3s;\r\n}\r\n\r\nfigure:hover{\r\n    transform: scale(1.01);\r\n    margin:5px;\r\n}\r\n\r\nfigure:hover img{\r\n    opacity:0.9;\r\n}\r\n\r\n/*menu tab*/\r\n\r\n.item_container{\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 20px;\r\n    padding: 100px;\r\n}\r\n\r\n.item_container h2{\r\n    font-size: calc(4rem + 1vw)\r\n}\r\n\r\n.item_container p{\r\n    font-size: calc(2rem + 0.5vw)\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA;IACI,uBAAuB;IACvB;AACJ;;AAEA;IACI,QAAQ;IACR,SAAS;;AAEb;;;;AAIA;IACI,cAAc;IACd,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,aAAa;AACjB;;;AAGA,WAAW;;AAEX;IACI,YAAY;IACZ,6BAA6B;IAC7B,oCAAoC;IACpC,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,mBAAmB;AACvB;;AAEA;;IAEI,gBAAgB;;AAEpB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,6BAA6B;AACjC;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;;AAE1B;;AAEA,kBAAkB;;;;AAIlB;IACI,yDAAwD;IACxD,4BAA4B;;IAE5B,sBAAsB;IACtB,4BAA4B;IAC5B,6BAA6B;IAC7B,cAAc;;IAEd,YAAY,CAAC,uBAAuB;IACpC,mBAAmB;;;EAGrB;;qBAEmB;;;AAGrB;;AAEA;;IAEI,aAAa;IACb,iBAAiB;;IAEjB,QAAQ;IACR;AACJ;;AAEA,oBAAoB;;AAEpB;IACI,YAAY;IACZ,+BAA+B;IAC/B,2BAA2B;IAC3B,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,+BAA+B;IAC/B,2BAA2B;IAC3B,SAAS;AACb;;AAEA;AACA,aAAa;AACb,WAAW;AACX,YAAY;AACZ;AACA;IACI,cAAc;IACd,aAAa;IACb,WAAW;IACX,YAAY;;AAEhB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA,WAAW;;AAEX;IACI,YAAY;IACZ,8BAA8B;IAC9B,SAAS;IACT,cAAc;AAClB;;AAEA;IACI;AACJ;;AAEA;IACI;AACJ","sourcesContent":["\r\n@font-face {\r\n    font-family: \"ambroise\";\r\n    src: url(\"assets/Ambroise\\ Regular/Ambroise\\ Regular.ttf\") \r\n}\r\n\r\n*{\r\n    margin:0;\r\n    padding:0;\r\n\r\n}\r\n\r\n\r\n\r\n:root{\r\n    font-size:10px;\r\n    font-family: \"ambroise\" ;\r\n    height:100vh;\r\n}\r\n\r\n.ul{\r\n    text-decoration: none;\r\n}\r\n\r\nli{\r\n    \r\n    list-style: none;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    color:black;\r\n    transition: color 0.5s ease;\r\n}\r\n\r\na:hover{\r\n    color: rgba(23,23,23,.36);\r\n}\r\n\r\n.container{\r\n    display:flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\n\r\n/*||header*/\r\n\r\nheader{\r\n    display:flex;\r\n    justify-content:space-between;\r\n    background-color: rgb(253, 250, 245);\r\n    padding-left:2vw;\r\n    padding-right:2vw;\r\n    flex: 0 1 auto;\r\n    font-weight: normal;\r\n}\r\n\r\n.header_logo{\r\n  \r\n    padding-top: 2vw;\r\n    \r\n}\r\n\r\n.header_logo img{\r\n    width: 15vw;\r\n    max-width: 250px;\r\n}\r\n\r\nheader ul{\r\n    display:flex;\r\n    gap: 200px;\r\n    font-size: calc(1rem + 1.5vw);\r\n}\r\n\r\n\r\n.header_rightlinks{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content:center;\r\n    \r\n}\r\n\r\n/*||homepage main*/\r\n\r\n\r\n\r\nmain{\r\n    background-image: url(./assets/background2\\ Cropped.jpg);\r\n    background-repeat: no-repeat;\r\n    \r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    font-size: calc(5rem + 1.5vw);\r\n    flex: 1 1 auto;\r\n\r\n    display:flex;justify-content: center;\r\n    align-items: center;\r\n   \r\n\r\n  /*   background: url(./assets/background2.jpg) no-repeat center center fixed;\r\n    \r\n    flex: 1 1 auto; */\r\n   \r\n    \r\n}\r\n\r\n.main_content{\r\n  \r\n    display: flex;\r\n    position:relative;\r\n   \r\n    gap: 2vw;\r\n    font-size: calc(4rem + 2.5vw)\r\n}\r\n\r\n/*|| gallery  tab  */\r\n\r\n.grid_one{\r\n    display:grid;\r\n    grid-template-columns: 2fr 1fr ;\r\n    grid-template-rows: 1fr 1fr;\r\n    gap: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.grid_two{\r\n    display:grid;\r\n    grid-template-columns: 1fr 2fr ;\r\n    grid-template-rows: 1fr 1fr;\r\n    gap: 15px;\r\n}\r\n\r\n.grid_one :nth-child(1){\r\ngrid-row: 1/3;\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.grid_two :nth-child(1){\r\n    grid-column: 2;\r\n    grid-row: 1/3;\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n}\r\n\r\nfigure{\r\n    transition: all 0.3s;\r\n}\r\n\r\nfigure:hover{\r\n    transform: scale(1.01);\r\n    margin:5px;\r\n}\r\n\r\nfigure:hover img{\r\n    opacity:0.9;\r\n}\r\n\r\n/*menu tab*/\r\n\r\n.item_container{\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 20px;\r\n    padding: 100px;\r\n}\r\n\r\n.item_container h2{\r\n    font-size: calc(4rem + 1vw)\r\n}\r\n\r\n.item_container p{\r\n    font-size: calc(2rem + 0.5vw)\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gallerytab.js":
/*!***************************!*\
  !*** ./src/gallerytab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeGalleryTab": () => (/* binding */ makeGalleryTab)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _assets_unspecified_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/unspecified-1.jpg */ "./src/assets/unspecified-1.jpg");
/* harmony import */ var _assets_unspecified_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/unspecified-2.jpg */ "./src/assets/unspecified-2.jpg");
/* harmony import */ var _assets_unspecified_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/unspecified-3.jpg */ "./src/assets/unspecified-3.jpg");
/* harmony import */ var _assets_unspecified_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/unspecified-4.jpg */ "./src/assets/unspecified-4.jpg");
/* harmony import */ var _assets_unspecified_7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/unspecified-7.jpg */ "./src/assets/unspecified-7.jpg");
/* harmony import */ var _assets_unspecified_12_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/unspecified-12.jpg */ "./src/assets/unspecified-12.jpg");











function makeGrid(arg1, arg2, arg3, className){
    let fig1=(0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.CreateElementWithClassAndText)("figure", undefined, undefined);
    let fig2=(0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.CreateElementWithClassAndText)("figure", undefined, undefined);
    let fig3=(0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.CreateElementWithClassAndText)("figure", undefined, undefined);
    let grid_one=(0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.CreateElementWithClassAndText)("div", className, undefined);

    let img1 = new Image();
    let img2 = new Image();
    let img3 = new Image();

    img1.src=arg1;
    img2.src=arg2;
    img3.src=arg3;

    fig1.append(img1);
    fig2.append(img2);
    fig3.append(img3);

    grid_one.append(fig1, fig2, fig3);
    return grid_one;
}


let grid_one= makeGrid(_assets_unspecified_1_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_unspecified_7_jpg__WEBPACK_IMPORTED_MODULE_6__, _assets_unspecified_3_jpg__WEBPACK_IMPORTED_MODULE_4__, "grid_one")
let grid_two= makeGrid(_assets_unspecified_4_jpg__WEBPACK_IMPORTED_MODULE_5__, _assets_unspecified_12_jpg__WEBPACK_IMPORTED_MODULE_7__, _assets_unspecified_2_jpg__WEBPACK_IMPORTED_MODULE_3__, "grid_two")



function makeGalleryTab(){
    console.log("gallery btn clicked");
    let container= document.querySelector('.container');
    container.replaceChildren(_index_js__WEBPACK_IMPORTED_MODULE_1__.header, grid_one, grid_two);
    
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.jpg */ "./src/assets/logo.jpg");
/* harmony import */ var _gallerytab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallerytab.js */ "./src/gallerytab.js");
/* harmony import */ var _menutab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menutab.js */ "./src/menutab.js");






//when this function is run: the homepage is built.




let header = (function header (){
    let header_logo=(function (){

        let header_logo= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("div","header_logo", undefined);
        let img= new Image();
        img.src=_assets_logo_jpg__WEBPACK_IMPORTED_MODULE_2__;
    
        header_logo.append(img);
        return header_logo;

    })()
    
    let header_rightlinks=(function createLinks(){
        let home= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("a", "home", "Home");
        let gallery= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("a", "gallery","Gallery");
        let menus= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("a", "menus", "Menus");
        gallery.addEventListener("click", _gallerytab_js__WEBPACK_IMPORTED_MODULE_3__.makeGalleryTab);
        home.addEventListener("click", makeHomeTab);
        menus.addEventListener("click", _menutab_js__WEBPACK_IMPORTED_MODULE_4__.makeMenuTab);
    
        let li1= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("li", undefined, undefined);
        let li2= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("li", undefined, undefined);
        let li3= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("li", undefined, undefined);
    
        let ul= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("ul", undefined, undefined);
    
        let header_rightlinks= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("div", "header_rightlinks", undefined);
    
    
        li1.append(home);
        li2.append(gallery);
        li3.append(menus);
        ul.append(li1, li2, li3);
        header_rightlinks.append(ul);
        return header_rightlinks;
    })()

    let header= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("header", undefined, undefined);
    header.append(header_logo, header_rightlinks);

    return header;
})();


let mainBody= function (){
    let main_container= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("div", "main_container", undefined);
    let mainElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("main", "main", undefined);
    let main_content = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("div", "main_content", undefined);
    mainElement.append((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("div", "main_background", undefined), main_content);

    main_container.append(mainElement);
    return mainElement;
   

}();


 (function addMainContent () {
    //let mainElement = CreateElementWithClassAndText("main", undefined, undefined)

    (function createMainContent() {

       // let main_content = CreateElementWithClassAndText("div", "main_content", undefined);

        let eat = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("div", "eat", "EAT");
        let drink = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("div", "drink", "DRINK");
        let enjoy = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.CreateElementWithClassAndText)("div", "enjoy", "ENJOY");

        mainBody.childNodes[1].append(eat, drink, enjoy);

        //return main_content;

    })()

    //mainElement.append(CreateElementWithClassAndText("div", "main_background", undefined), main_content_div);

    //return mainElement;

})();


function makeHomeTab(){
    console.log("Home btn clicked");
    let container= document.querySelector('.container');

    container.replaceChildren(header, mainBody);
}

makeHomeTab();




/***/ }),

/***/ "./src/menutab.js":
/*!************************!*\
  !*** ./src/menutab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMenuTab": () => (/* binding */ makeMenuTab)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");






let arrayTitles= ["Buttermilk Flapjacks", "Brisket Sandwich", "Hotcakees & Sausage", "Bison Burger", "Buckwheat Cakes with Honeybread", "Mutton Stew", "Steel Cut Oaktmeal", "Wild Board Shoulder"];

let arrayDescription= ["Two flapjacks served with molasses and our signature sassafras-infused whipped cream. Fresh fruit additional $4.", 
"Slow-smoked beef brisket cut into thin slices, pickled okra, wild onions, tomatoes, and black bread. Served with a side salad or fried potatoes.",
"Cornmeal and molasses hotcakes served with sweet fennel pork sausage.",
"Potato bun, lettuce, tomato, wild onions, and pepper jack cheese. Served with a side salad or fried potatoes.",
"Two thick buckwheat cakes served with honey and our signature sassafras-infused whipped cream. Fresh fruit additional $4.",
"Tenderized mutton, carrots, celery, tomatoes, onion, rosemary, and black pepper. Served with two sourdough biscuits",
"Served with molasses, bananas, and fresh berries.",
"Pan-seared wild boar, cracked peppercorns, and red wine glaze. Served with hot corn cakes and a side salad."
]

let arrItems=[];

 function makeItems(arrayTitles, arrayDescription){

    arrayTitles.forEach((title, index)=>{
        let item = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.CreateElementWithClassAndText)("div", "item", undefined);
        let header = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.CreateElementWithClassAndText)("h2", undefined, title );
        let desc= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.CreateElementWithClassAndText)("p", undefined, arrayDescription[index]);

        item.append(header, desc)
        arrItems.push(item);
    })
  
    

}



function makeMenuTab(){
    console.log("menu button clicked")
    makeItems(arrayTitles, arrayDescription);
    let item_container= (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.CreateElementWithClassAndText)("div", "item_container", undefined);

    arrItems.forEach((element)=>{
        item_container.append(element);
    })

    let container= document.querySelector('.container');

    container.replaceChildren(_index_js__WEBPACK_IMPORTED_MODULE_1__.header, item_container);


}

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateElementWithClassAndText": () => (/* binding */ CreateElementWithClassAndText)
/* harmony export */ });

function CreateElementWithClassAndText(elementType,className, text){
    let newElement= document.createElement(elementType);

    if(className){
        newElement.classList.add(className);

    }
    if(text){
        newElement.textContent = text;
    }
    console.log(newElement)

    return newElement;
}

/***/ }),

/***/ "./src/assets/Ambroise Regular/Ambroise Regular.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/Ambroise Regular/Ambroise Regular.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd262203a37bed5ed510.ttf";

/***/ }),

/***/ "./src/assets/background2 Cropped.jpg":
/*!********************************************!*\
  !*** ./src/assets/background2 Cropped.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "068310f27d6e011dde48.jpg";

/***/ }),

/***/ "./src/assets/logo.jpg":
/*!*****************************!*\
  !*** ./src/assets/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa1d2280afff1938b6f1.jpg";

/***/ }),

/***/ "./src/assets/unspecified-1.jpg":
/*!**************************************!*\
  !*** ./src/assets/unspecified-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0db97a921865e9d8bb0.jpg";

/***/ }),

/***/ "./src/assets/unspecified-12.jpg":
/*!***************************************!*\
  !*** ./src/assets/unspecified-12.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58efcfd4735845856515.jpg";

/***/ }),

/***/ "./src/assets/unspecified-2.jpg":
/*!**************************************!*\
  !*** ./src/assets/unspecified-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe7515445159d995f59f.jpg";

/***/ }),

/***/ "./src/assets/unspecified-3.jpg":
/*!**************************************!*\
  !*** ./src/assets/unspecified-3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9778119740d89d1f8083.jpg";

/***/ }),

/***/ "./src/assets/unspecified-4.jpg":
/*!**************************************!*\
  !*** ./src/assets/unspecified-4.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99ddeb89b109e5df7b6d.jpg";

/***/ }),

/***/ "./src/assets/unspecified-7.jpg":
/*!**************************************!*\
  !*** ./src/assets/unspecified-7.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09847656f3ef422b6cc6.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9nYWxsZXJ5dGFiLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnV0YWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9BbWJyb2lzZSBSZWd1bGFyL0FtYnJvaXNlIFJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYmFja2dyb3VuZDIgQ3JvcHBlZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiYW1icm9pc2VcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgXFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbjpyb290e1xcclxcbiAgICBmb250LXNpemU6MTBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJhbWJyb2lzZVxcXCIgO1xcclxcbiAgICBoZWlnaHQ6MTAwdmg7XFxyXFxufVxcclxcblxcclxcbi51bHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5saXtcXHJcXG4gICAgXFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlcntcXHJcXG4gICAgY29sb3I6IHJnYmEoMjMsMjMsMjMsLjM2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKnx8aGVhZGVyKi9cXHJcXG5cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDI1MCwgMjQ1KTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OjJ2dztcXHJcXG4gICAgcGFkZGluZy1yaWdodDoydnc7XFxyXFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2xvZ297XFxyXFxuICBcXHJcXG4gICAgcGFkZGluZy10b3A6IDJ2dztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfbG9nbyBpbWd7XFxyXFxuICAgIHdpZHRoOiAxNXZ3O1xcclxcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgdWx7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZ2FwOiAyMDBweDtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAxLjV2dyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5oZWFkZXJfcmlnaHRsaW5rc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi8qfHxob21lcGFnZSBtYWluKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDVyZW0gKyAxLjV2dyk7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcblxcclxcbiAgICBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgXFxyXFxuXFxyXFxuICAvKiAgIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy9iYWNrZ3JvdW5kMi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgICBcXHJcXG4gICAgZmxleDogMSAxIGF1dG87ICovXFxyXFxuICAgXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9jb250ZW50e1xcclxcbiAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgIFxcclxcbiAgICBnYXA6IDJ2dztcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDRyZW0gKyAyLjV2dylcXHJcXG59XFxyXFxuXFxyXFxuLyp8fCBnYWxsZXJ5ICB0YWIgICovXFxyXFxuXFxyXFxuLmdyaWRfb25le1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciA7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZF90d297XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkX29uZSA6bnRoLWNoaWxkKDEpe1xcclxcbmdyaWQtcm93OiAxLzM7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxuaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uZ3JpZF90d28gOm50aC1jaGlsZCgxKXtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxyXFxuICAgIGdyaWQtcm93OiAxLzM7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5maWd1cmV7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5maWd1cmU6aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxyXFxuICAgIG1hcmdpbjo1cHg7XFxyXFxufVxcclxcblxcclxcbmZpZ3VyZTpob3ZlciBpbWd7XFxyXFxuICAgIG9wYWNpdHk6MC45O1xcclxcbn1cXHJcXG5cXHJcXG4vKm1lbnUgdGFiKi9cXHJcXG5cXHJcXG4uaXRlbV9jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbV9jb250YWluZXIgaDJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyg0cmVtICsgMXZ3KVxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbV9jb250YWluZXIgcHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAwLjV2dylcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUzs7QUFFYjs7OztBQUlBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOzs7QUFHQSxXQUFXOztBQUVYO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDViw2QkFBNkI7QUFDakM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7O0FBRTFCOztBQUVBLGtCQUFrQjs7OztBQUlsQjtJQUNJLHlEQUF3RDtJQUN4RCw0QkFBNEI7O0lBRTVCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGNBQWM7O0lBRWQsWUFBWSxDQUFDLHVCQUF1QjtJQUNwQyxtQkFBbUI7OztFQUdyQjs7cUJBRW1COzs7QUFHckI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGlCQUFpQjs7SUFFakIsUUFBUTtJQUNSO0FBQ0o7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixTQUFTO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiYW1icm9pc2VcXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiYXNzZXRzL0FtYnJvaXNlXFxcXCBSZWd1bGFyL0FtYnJvaXNlXFxcXCBSZWd1bGFyLnR0ZlxcXCIpIFxcclxcbn1cXHJcXG5cXHJcXG4qe1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgZm9udC1zaXplOjEwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiYW1icm9pc2VcXFwiIDtcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4udWx7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubGl7XFxyXFxuICAgIFxcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5he1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDIzLDIzLDIzLC4zNik7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyp8fGhlYWRlciovXFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyNTAsIDI0NSk7XFxyXFxuICAgIHBhZGRpbmctbGVmdDoydnc7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6MnZ3O1xcclxcbiAgICBmbGV4OiAwIDEgYXV0bztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9sb2dve1xcclxcbiAgXFxyXFxuICAgIHBhZGRpbmctdG9wOiAydnc7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2xvZ28gaW1ne1xcclxcbiAgICB3aWR0aDogMTV2dztcXHJcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVse1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGdhcDogMjAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMS41dncpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVyX3JpZ2h0bGlua3N7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKnx8aG9tZXBhZ2UgbWFpbiovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxubWFpbntcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2JhY2tncm91bmQyXFxcXCBDcm9wcGVkLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoNXJlbSArIDEuNXZ3KTtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICBcXHJcXG5cXHJcXG4gIC8qICAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL2JhY2tncm91bmQyLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxyXFxuICAgIFxcclxcbiAgICBmbGV4OiAxIDEgYXV0bzsgKi9cXHJcXG4gICBcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5tYWluX2NvbnRlbnR7XFxyXFxuICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgXFxyXFxuICAgIGdhcDogMnZ3O1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoNHJlbSArIDIuNXZ3KVxcclxcbn1cXHJcXG5cXHJcXG4vKnx8IGdhbGxlcnkgIHRhYiAgKi9cXHJcXG5cXHJcXG4uZ3JpZF9vbmV7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkX3R3b3tcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRfb25lIDpudGgtY2hpbGQoMSl7XFxyXFxuZ3JpZC1yb3c6IDEvMztcXHJcXG53aWR0aDogMTAwJTtcXHJcXG5oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5ncmlkX3R3byA6bnRoLWNoaWxkKDEpe1xcclxcbiAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmZpZ3VyZXtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcblxcclxcbmZpZ3VyZTpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXHJcXG4gICAgbWFyZ2luOjVweDtcXHJcXG59XFxyXFxuXFxyXFxuZmlndXJlOmhvdmVyIGltZ3tcXHJcXG4gICAgb3BhY2l0eTowLjk7XFxyXFxufVxcclxcblxcclxcbi8qbWVudSB0YWIqL1xcclxcblxcclxcbi5pdGVtX2NvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtX2NvbnRhaW5lciBoMntcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDRyZW0gKyAxdncpXFxyXFxufVxcclxcblxcclxcbi5pdGVtX2NvbnRhaW5lciBwe1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMnJlbSArIDAuNXZ3KVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcclxuaW1wb3J0IHsgQ3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZFRleHQgfSBmcm9tIFwiLi91dGlsaXRpZXMuanNcIlxyXG5pbXBvcnQge2hlYWRlcn0gZnJvbSBcIi4vaW5kZXguanNcIlxyXG5cclxuaW1wb3J0IHBpYzEgZnJvbSAnLi9hc3NldHMvdW5zcGVjaWZpZWQtMS5qcGcnXHJcbmltcG9ydCBwaWMyIGZyb20gJy4vYXNzZXRzL3Vuc3BlY2lmaWVkLTIuanBnJ1xyXG5pbXBvcnQgcGljMyBmcm9tICcuL2Fzc2V0cy91bnNwZWNpZmllZC0zLmpwZydcclxuaW1wb3J0IHBpYzQgZnJvbSAnLi9hc3NldHMvdW5zcGVjaWZpZWQtNC5qcGcnXHJcbmltcG9ydCBwaWM1IGZyb20gJy4vYXNzZXRzL3Vuc3BlY2lmaWVkLTcuanBnJ1xyXG5pbXBvcnQgcGljNiBmcm9tICcuL2Fzc2V0cy91bnNwZWNpZmllZC0xMi5qcGcnXHJcblxyXG5mdW5jdGlvbiBtYWtlR3JpZChhcmcxLCBhcmcyLCBhcmczLCBjbGFzc05hbWUpe1xyXG4gICAgbGV0IGZpZzE9Q3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZFRleHQoXCJmaWd1cmVcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgbGV0IGZpZzI9Q3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZFRleHQoXCJmaWd1cmVcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgbGV0IGZpZzM9Q3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZFRleHQoXCJmaWd1cmVcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgbGV0IGdyaWRfb25lPUNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRUZXh0KFwiZGl2XCIsIGNsYXNzTmFtZSwgdW5kZWZpbmVkKTtcclxuXHJcbiAgICBsZXQgaW1nMSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IGltZzIgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxldCBpbWczID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgaW1nMS5zcmM9YXJnMTtcclxuICAgIGltZzIuc3JjPWFyZzI7XHJcbiAgICBpbWczLnNyYz1hcmczO1xyXG5cclxuICAgIGZpZzEuYXBwZW5kKGltZzEpO1xyXG4gICAgZmlnMi5hcHBlbmQoaW1nMik7XHJcbiAgICBmaWczLmFwcGVuZChpbWczKTtcclxuXHJcbiAgICBncmlkX29uZS5hcHBlbmQoZmlnMSwgZmlnMiwgZmlnMyk7XHJcbiAgICByZXR1cm4gZ3JpZF9vbmU7XHJcbn1cclxuXHJcblxyXG5sZXQgZ3JpZF9vbmU9IG1ha2VHcmlkKHBpYzEsIHBpYzUsIHBpYzMsIFwiZ3JpZF9vbmVcIilcclxubGV0IGdyaWRfdHdvPSBtYWtlR3JpZChwaWM0LCBwaWM2LCBwaWMyLCBcImdyaWRfdHdvXCIpXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlR2FsbGVyeVRhYigpe1xyXG4gICAgY29uc29sZS5sb2coXCJnYWxsZXJ5IGJ0biBjbGlja2VkXCIpO1xyXG4gICAgbGV0IGNvbnRhaW5lcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihoZWFkZXIsIGdyaWRfb25lLCBncmlkX3R3byk7XHJcbiAgICBcclxufSIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xyXG5pbXBvcnQgeyBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dCB9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiXHJcbmltcG9ydCBsb2dvIGZyb20gJy4vYXNzZXRzL2xvZ28uanBnJ1xyXG5pbXBvcnQge21ha2VHYWxsZXJ5VGFifSBmcm9tICcuL2dhbGxlcnl0YWIuanMnXHJcbmltcG9ydCB7bWFrZU1lbnVUYWJ9IGZyb20gJy4vbWVudXRhYi5qcydcclxuXHJcbi8vd2hlbiB0aGlzIGZ1bmN0aW9uIGlzIHJ1bjogdGhlIGhvbWVwYWdlIGlzIGJ1aWx0LlxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGxldCBoZWFkZXIgPSAoZnVuY3Rpb24gaGVhZGVyICgpe1xyXG4gICAgbGV0IGhlYWRlcl9sb2dvPShmdW5jdGlvbiAoKXtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcl9sb2dvPSBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcImRpdlwiLFwiaGVhZGVyX2xvZ29cIiwgdW5kZWZpbmVkKTtcclxuICAgICAgICBsZXQgaW1nPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcuc3JjPWxvZ287XHJcbiAgICBcclxuICAgICAgICBoZWFkZXJfbG9nby5hcHBlbmQoaW1nKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVyX2xvZ287XHJcblxyXG4gICAgfSkoKVxyXG4gICAgXHJcbiAgICBsZXQgaGVhZGVyX3JpZ2h0bGlua3M9KGZ1bmN0aW9uIGNyZWF0ZUxpbmtzKCl7XHJcbiAgICAgICAgbGV0IGhvbWU9IENyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRUZXh0KFwiYVwiLCBcImhvbWVcIiwgXCJIb21lXCIpO1xyXG4gICAgICAgIGxldCBnYWxsZXJ5PSBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcImFcIiwgXCJnYWxsZXJ5XCIsXCJHYWxsZXJ5XCIpO1xyXG4gICAgICAgIGxldCBtZW51cz0gQ3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZFRleHQoXCJhXCIsIFwibWVudXNcIiwgXCJNZW51c1wiKTtcclxuICAgICAgICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYWtlR2FsbGVyeVRhYik7XHJcbiAgICAgICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFrZUhvbWVUYWIpO1xyXG4gICAgICAgIG1lbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYWtlTWVudVRhYik7XHJcbiAgICBcclxuICAgICAgICBsZXQgbGkxPSBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcImxpXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgICAgICBsZXQgbGkyPSBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcImxpXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgICAgICBsZXQgbGkzPSBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcImxpXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcclxuICAgIFxyXG4gICAgICAgIGxldCB1bD0gQ3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZFRleHQoXCJ1bFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICBcclxuICAgICAgICBsZXQgaGVhZGVyX3JpZ2h0bGlua3M9IENyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRUZXh0KFwiZGl2XCIsIFwiaGVhZGVyX3JpZ2h0bGlua3NcIiwgdW5kZWZpbmVkKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgbGkxLmFwcGVuZChob21lKTtcclxuICAgICAgICBsaTIuYXBwZW5kKGdhbGxlcnkpO1xyXG4gICAgICAgIGxpMy5hcHBlbmQobWVudXMpO1xyXG4gICAgICAgIHVsLmFwcGVuZChsaTEsIGxpMiwgbGkzKTtcclxuICAgICAgICBoZWFkZXJfcmlnaHRsaW5rcy5hcHBlbmQodWwpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJfcmlnaHRsaW5rcztcclxuICAgIH0pKClcclxuXHJcbiAgICBsZXQgaGVhZGVyPSBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcImhlYWRlclwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlcl9sb2dvLCBoZWFkZXJfcmlnaHRsaW5rcyk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufSkoKTtcclxuXHJcblxyXG5sZXQgbWFpbkJvZHk9IGZ1bmN0aW9uICgpe1xyXG4gICAgbGV0IG1haW5fY29udGFpbmVyPSBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcImRpdlwiLCBcIm1haW5fY29udGFpbmVyXCIsIHVuZGVmaW5lZCk7XHJcbiAgICBsZXQgbWFpbkVsZW1lbnQgPSBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcIm1haW5cIiwgXCJtYWluXCIsIHVuZGVmaW5lZCk7XHJcbiAgICBsZXQgbWFpbl9jb250ZW50ID0gQ3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZFRleHQoXCJkaXZcIiwgXCJtYWluX2NvbnRlbnRcIiwgdW5kZWZpbmVkKTtcclxuICAgIG1haW5FbGVtZW50LmFwcGVuZChDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcImRpdlwiLCBcIm1haW5fYmFja2dyb3VuZFwiLCB1bmRlZmluZWQpLCBtYWluX2NvbnRlbnQpO1xyXG5cclxuICAgIG1haW5fY29udGFpbmVyLmFwcGVuZChtYWluRWxlbWVudCk7XHJcbiAgICByZXR1cm4gbWFpbkVsZW1lbnQ7XHJcbiAgIFxyXG5cclxufSgpO1xyXG5cclxuXHJcbiAoZnVuY3Rpb24gYWRkTWFpbkNvbnRlbnQgKCkge1xyXG4gICAgLy9sZXQgbWFpbkVsZW1lbnQgPSBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcIm1haW5cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXHJcblxyXG4gICAgKGZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xyXG5cclxuICAgICAgIC8vIGxldCBtYWluX2NvbnRlbnQgPSBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcImRpdlwiLCBcIm1haW5fY29udGVudFwiLCB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICBsZXQgZWF0ID0gQ3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZFRleHQoXCJkaXZcIiwgXCJlYXRcIiwgXCJFQVRcIik7XHJcbiAgICAgICAgbGV0IGRyaW5rID0gQ3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZFRleHQoXCJkaXZcIiwgXCJkcmlua1wiLCBcIkRSSU5LXCIpO1xyXG4gICAgICAgIGxldCBlbmpveSA9IENyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRUZXh0KFwiZGl2XCIsIFwiZW5qb3lcIiwgXCJFTkpPWVwiKTtcclxuXHJcbiAgICAgICAgbWFpbkJvZHkuY2hpbGROb2Rlc1sxXS5hcHBlbmQoZWF0LCBkcmluaywgZW5qb3kpO1xyXG5cclxuICAgICAgICAvL3JldHVybiBtYWluX2NvbnRlbnQ7XHJcblxyXG4gICAgfSkoKVxyXG5cclxuICAgIC8vbWFpbkVsZW1lbnQuYXBwZW5kKENyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRUZXh0KFwiZGl2XCIsIFwibWFpbl9iYWNrZ3JvdW5kXCIsIHVuZGVmaW5lZCksIG1haW5fY29udGVudF9kaXYpO1xyXG5cclxuICAgIC8vcmV0dXJuIG1haW5FbGVtZW50O1xyXG5cclxufSkoKTtcclxuXHJcblxyXG5mdW5jdGlvbiBtYWtlSG9tZVRhYigpe1xyXG4gICAgY29uc29sZS5sb2coXCJIb21lIGJ0biBjbGlja2VkXCIpO1xyXG4gICAgbGV0IGNvbnRhaW5lcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oaGVhZGVyLCBtYWluQm9keSk7XHJcbn1cclxuXHJcbm1ha2VIb21lVGFiKCk7XHJcblxyXG5cclxuIiwiXHJcbmltcG9ydCB7IENyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRUZXh0IH0gZnJvbSBcIi4vdXRpbGl0aWVzLmpzXCJcclxuaW1wb3J0IHtoZWFkZXJ9IGZyb20gXCIuL2luZGV4LmpzXCJcclxuXHJcblxyXG5cclxubGV0IGFycmF5VGl0bGVzPSBbXCJCdXR0ZXJtaWxrIEZsYXBqYWNrc1wiLCBcIkJyaXNrZXQgU2FuZHdpY2hcIiwgXCJIb3RjYWtlZXMgJiBTYXVzYWdlXCIsIFwiQmlzb24gQnVyZ2VyXCIsIFwiQnVja3doZWF0IENha2VzIHdpdGggSG9uZXlicmVhZFwiLCBcIk11dHRvbiBTdGV3XCIsIFwiU3RlZWwgQ3V0IE9ha3RtZWFsXCIsIFwiV2lsZCBCb2FyZCBTaG91bGRlclwiXTtcclxuXHJcbmxldCBhcnJheURlc2NyaXB0aW9uPSBbXCJUd28gZmxhcGphY2tzIHNlcnZlZCB3aXRoIG1vbGFzc2VzIGFuZCBvdXIgc2lnbmF0dXJlIHNhc3NhZnJhcy1pbmZ1c2VkIHdoaXBwZWQgY3JlYW0uIEZyZXNoIGZydWl0IGFkZGl0aW9uYWwgJDQuXCIsIFxyXG5cIlNsb3ctc21va2VkIGJlZWYgYnJpc2tldCBjdXQgaW50byB0aGluIHNsaWNlcywgcGlja2xlZCBva3JhLCB3aWxkIG9uaW9ucywgdG9tYXRvZXMsIGFuZCBibGFjayBicmVhZC4gU2VydmVkIHdpdGggYSBzaWRlIHNhbGFkIG9yIGZyaWVkIHBvdGF0b2VzLlwiLFxyXG5cIkNvcm5tZWFsIGFuZCBtb2xhc3NlcyBob3RjYWtlcyBzZXJ2ZWQgd2l0aCBzd2VldCBmZW5uZWwgcG9yayBzYXVzYWdlLlwiLFxyXG5cIlBvdGF0byBidW4sIGxldHR1Y2UsIHRvbWF0bywgd2lsZCBvbmlvbnMsIGFuZCBwZXBwZXIgamFjayBjaGVlc2UuIFNlcnZlZCB3aXRoIGEgc2lkZSBzYWxhZCBvciBmcmllZCBwb3RhdG9lcy5cIixcclxuXCJUd28gdGhpY2sgYnVja3doZWF0IGNha2VzIHNlcnZlZCB3aXRoIGhvbmV5IGFuZCBvdXIgc2lnbmF0dXJlIHNhc3NhZnJhcy1pbmZ1c2VkIHdoaXBwZWQgY3JlYW0uIEZyZXNoIGZydWl0IGFkZGl0aW9uYWwgJDQuXCIsXHJcblwiVGVuZGVyaXplZCBtdXR0b24sIGNhcnJvdHMsIGNlbGVyeSwgdG9tYXRvZXMsIG9uaW9uLCByb3NlbWFyeSwgYW5kIGJsYWNrIHBlcHBlci4gU2VydmVkIHdpdGggdHdvIHNvdXJkb3VnaCBiaXNjdWl0c1wiLFxyXG5cIlNlcnZlZCB3aXRoIG1vbGFzc2VzLCBiYW5hbmFzLCBhbmQgZnJlc2ggYmVycmllcy5cIixcclxuXCJQYW4tc2VhcmVkIHdpbGQgYm9hciwgY3JhY2tlZCBwZXBwZXJjb3JucywgYW5kIHJlZCB3aW5lIGdsYXplLiBTZXJ2ZWQgd2l0aCBob3QgY29ybiBjYWtlcyBhbmQgYSBzaWRlIHNhbGFkLlwiXHJcbl1cclxuXHJcbmxldCBhcnJJdGVtcz1bXTtcclxuXHJcbiBmdW5jdGlvbiBtYWtlSXRlbXMoYXJyYXlUaXRsZXMsIGFycmF5RGVzY3JpcHRpb24pe1xyXG5cclxuICAgIGFycmF5VGl0bGVzLmZvckVhY2goKHRpdGxlLCBpbmRleCk9PntcclxuICAgICAgICBsZXQgaXRlbSA9IENyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRUZXh0KFwiZGl2XCIsIFwiaXRlbVwiLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIGxldCBoZWFkZXIgPSBDcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kVGV4dChcImgyXCIsIHVuZGVmaW5lZCwgdGl0bGUgKTtcclxuICAgICAgICBsZXQgZGVzYz0gQ3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZFRleHQoXCJwXCIsIHVuZGVmaW5lZCwgYXJyYXlEZXNjcmlwdGlvbltpbmRleF0pO1xyXG5cclxuICAgICAgICBpdGVtLmFwcGVuZChoZWFkZXIsIGRlc2MpXHJcbiAgICAgICAgYXJySXRlbXMucHVzaChpdGVtKTtcclxuICAgIH0pXHJcbiAgXHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNZW51VGFiKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1lbnUgYnV0dG9uIGNsaWNrZWRcIilcclxuICAgIG1ha2VJdGVtcyhhcnJheVRpdGxlcywgYXJyYXlEZXNjcmlwdGlvbik7XHJcbiAgICBsZXQgaXRlbV9jb250YWluZXI9IENyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRUZXh0KFwiZGl2XCIsIFwiaXRlbV9jb250YWluZXJcIiwgdW5kZWZpbmVkKTtcclxuXHJcbiAgICBhcnJJdGVtcy5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICAgICAgIGl0ZW1fY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGNvbnRhaW5lcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oaGVhZGVyLCBpdGVtX2NvbnRhaW5lcik7XHJcblxyXG5cclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZFRleHQoZWxlbWVudFR5cGUsY2xhc3NOYW1lLCB0ZXh0KXtcclxuICAgIGxldCBuZXdFbGVtZW50PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcclxuXHJcbiAgICBpZihjbGFzc05hbWUpe1xyXG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG5cclxuICAgIH1cclxuICAgIGlmKHRleHQpe1xyXG4gICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobmV3RWxlbWVudClcclxuXHJcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=