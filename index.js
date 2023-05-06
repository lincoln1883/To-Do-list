"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nmain {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  width: 60%;\\n  height: 70%;\\n  margin: 80px auto;\\n  -webkit-box-shadow: 3px 10px 53px -17px rgba(0, 0, 0, 0.53);\\n  -moz-box-shadow: 3px 10px 53px -17px rgba(0, 0, 0, 0.53);\\n  box-shadow: 3px 10px 53px -17px rgba(0, 0, 0, 0.53);\\n}\\n\\n.todo-text__container {\\n  position: relative;\\n}\\n\\n.refresh-icon {\\n  position: absolute;\\n  right: 20px;\\n  top: 20px;\\n  width: 15px;\\n  cursor: pointer;\\n}\\n\\n.todo-title {\\n  padding: 0 10px;\\n}\\n\\n.todo-container {\\n  background-color: rgb(237 237 237);\\n  display: flex;\\n  flex-direction: column;\\n  padding: 5px 0;\\n}\\n\\nform {\\n  display: flex;\\n  width: 100%;\\n  background-color: #fff;\\n}\\n\\n.todo-input {\\n  background-color: #fff;\\n}\\n\\n.todo-input,\\n.edit-input {\\n  padding: 10px;\\n  border-style: none;\\n  position: relative;\\n  font-style: italic;\\n  width: 80%;\\n  outline: none;\\n}\\n\\n.return-icon {\\n  position: absolute;\\n  right: 20px;\\n  top: 70px;\\n  width: 15px;\\n  cursor: pointer;\\n}\\n\\n.edit-input {\\n  background-color: bisque;\\n  width: 100%;\\n}\\n\\n.todo-list {\\n  display: flex;\\n  flex-direction: column;\\n  list-style: none;\\n  padding: 4px 0;\\n  margin-top: 0;\\n  gap: 4px;\\n}\\n\\n.todo-list li {\\n  background-color: #fff;\\n}\\n\\n.task {\\n  position: relative;\\n  display: flex;\\n  gap: 5px;\\n  align-items: center;\\n  padding: 15px 10px;\\n}\\n\\n.option-icon,\\n.trash-icon {\\n  position: absolute;\\n  right: 20px;\\n  width: 25px;\\n  color: transparent;\\n  cursor: all-scroll;\\n}\\n\\nbutton {\\n  margin: 0 auto;\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.submit-btn {\\n  height: 20px;\\n  margin: 0;\\n  width: 20%;\\n  color: #fff;\\n  cursor: pointer;\\n}\\n\\n.completed {\\n  background-color: black;\\n}\\n\\n.rotate {\\n  transform: rotate(360deg);\\n  transition: transform 0.5s ease-in-out;\\n}\\n\\n.disabled {\\n  cursor: not-allowed;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addTask = (tasks, taskName, existingTaskId) => {\n  if (!taskName) {\n    return tasks;\n  }\n\n  if (existingTaskId) {\n    const taskIndex = tasks.findIndex(\n      (task) => task.index === parseInt(existingTaskId, 10),\n    );\n    tasks[taskIndex].name = taskName;\n  } else {\n    const newTask = {\n      name: taskName,\n      completed: false,\n      index: tasks.length + 1,\n    };\n    tasks.push(newTask);\n  }\n\n  return tasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n\n//# sourceURL=webpack://to-do-list/./src/addTask.js?");

/***/ }),

/***/ "./src/checkedComplete.js":
/*!********************************!*\
  !*** ./src/checkedComplete.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTask.js */ \"./src/removeTask.js\");\n\n\nconst completedTask = (tasks, index) => {\n  if (Array.isArray(tasks)) {\n    (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index, tasks);\n    return tasks.filter((task) => !task.completed);\n  }\n  return tasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completedTask);\n\n\n//# sourceURL=webpack://to-do-list/./src/checkedComplete.js?");

/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst editTask = (tasks, taskId, taskName) => {\n  const taskIndex = tasks.findIndex((task) => task.index === taskId);\n  if (taskIndex !== -1) {\n    tasks[taskIndex].name = taskName;\n\n    return tasks;\n  }\n  return tasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n\n//# sourceURL=webpack://to-do-list/./src/editTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_dots_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/dots.svg */ \"./src/assets/dots.svg\");\n/* harmony import */ var _assets_refresh_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/refresh.svg */ \"./src/assets/refresh.svg\");\n/* harmony import */ var _assets_return_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/return.svg */ \"./src/assets/return.svg\");\n/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/trash.svg */ \"./src/assets/trash.svg\");\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addTask.js */ \"./src/addTask.js\");\n/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./removeTask.js */ \"./src/removeTask.js\");\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editTask.js */ \"./src/editTask.js\");\n/* harmony import */ var _checkedComplete_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkedComplete.js */ \"./src/checkedComplete.js\");\n\n\n\n\n\n\n\n\n\n\nlet tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n\nconst todoList = document.querySelector('.todo-list');\nconst textContainer = document.querySelector('.todo-text__container');\nconst image = document.createElement('img');\nimage.classList.add('refresh-icon');\nimage.setAttribute('src', _assets_refresh_svg__WEBPACK_IMPORTED_MODULE_2__);\ntextContainer.appendChild(image);\n\nconst form = document.querySelector('#input-form');\nconst taskInput = document.querySelector('#todo-input');\nconst submitBtn = document.querySelector('.submit-btn');\n\nconst returnImg = document.createElement('img');\nreturnImg.classList.add('return-icon');\nreturnImg.setAttribute('src', _assets_return_svg__WEBPACK_IMPORTED_MODULE_3__);\nsubmitBtn.appendChild(returnImg);\n\nconst deleteBtn = document.querySelector('.delete-btn');\n\n// function for displaying the list of tasks\nconst saveTasks = () => {\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n\nconst displayTask = () => {\n  todoList.innerHTML = '';\n\n  tasks.forEach((task, index) => {\n    task.index = index + 1;\n\n    const taskItem = document.createElement('li');\n    taskItem.innerHTML = `\n    <div class=\"task\">\n      <input type=\"checkbox\" class=\"checkbox\" data-task-id=\"task-${\n  task.index\n}\" ${task.completed ? 'checked' : ''}>\n      <span class=\"task-label\" for=\"task-${task.index}\">${task.name}</span>\n      <img class=\"option-icon\" src=${_assets_dots_svg__WEBPACK_IMPORTED_MODULE_1__}>\n      </div>\n      `;\n    todoList.appendChild(taskItem);\n\n    const taskLabel = taskItem.querySelector('.task-label');\n\n    const checkbox = taskItem.querySelector(\n      `[data-task-id=\"task-${task.index}\"]`,\n    );\n    if (checkbox) {\n      checkbox.addEventListener('click', () => {\n        task.completed = checkbox.checked;\n        if (task.completed) {\n          deleteBtn.classList.remove('disabled');\n        } else {\n          deleteBtn.classList.add('disabled');\n        }\n        saveTasks();\n        displayTask();\n      });\n    }\n\n    const taskDots = taskItem.querySelector('.option-icon');\n    taskDots.addEventListener('click', () => {\n      const taskId = task.index;\n      const taskIndex = tasks.findIndex((task) => task.index === taskId);\n\n      const newInput = document.createElement('input');\n      newInput.classList.add('edit-input');\n      newInput.setAttribute('type', 'text');\n      newInput.value = tasks[taskIndex].name;\n\n      const trashIcon = document.createElement('img');\n      trashIcon.classList.add('trash-icon');\n      trashIcon.setAttribute('src', _assets_trash_svg__WEBPACK_IMPORTED_MODULE_4__);\n\n      taskLabel.replaceWith(newInput);\n      taskDots.replaceWith(trashIcon);\n\n      newInput.focus();\n\n      newInput.addEventListener('change', () => {\n        const taskName = newInput.value;\n        tasks = (0,_editTask_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(tasks, taskId, taskName);\n        saveTasks();\n        displayTask();\n      });\n\n      trashIcon.addEventListener('click', () => {\n        (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(taskId, tasks);\n        saveTasks();\n        displayTask();\n      });\n    });\n  });\n};\n\nform.addEventListener('submit', _addTask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\nsubmitBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  const taskName = taskInput.value;\n  const existingTaskId = parseInt(taskInput.dataset.taskId, 10) || null;\n  tasks = (0,_addTask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(tasks, taskName, existingTaskId);\n  displayTask();\n  saveTasks();\n  taskInput.value = '';\n  taskInput.dataset.taskId = '';\n});\n\ndeleteBtn.addEventListener('click', () => {\n  tasks = (0,_checkedComplete_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(tasks);\n  saveTasks();\n  displayTask();\n});\n\nimage.addEventListener('click', (e) => {\n  e.target.classList.toggle('rotate');\n  saveTasks();\n  displayTask();\n});\n\nwindow.onload = () => {\n  displayTask();\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/removeTask.js":
/*!***************************!*\
  !*** ./src/removeTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeTask = (taskId, tasks) => {\n  const taskIndex = tasks.findIndex((task) => task.index === taskId);\n  if (taskIndex !== -1) {\n    tasks.sort((a, b) => a - b).splice(taskIndex, 1);\n\n    for (let i = taskIndex; i < tasks.length; i += 1) {\n      tasks[i].index = i + 1;\n    }\n  }\n  return tasks;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);\n\n\n//# sourceURL=webpack://to-do-list/./src/removeTask.js?");

/***/ }),

/***/ "./src/assets/dots.svg":
/*!*****************************!*\
  !*** ./src/assets/dots.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e46d4f2d27965693594b.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/dots.svg?");

/***/ }),

/***/ "./src/assets/refresh.svg":
/*!********************************!*\
  !*** ./src/assets/refresh.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf0beb82d631e157a40c.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/refresh.svg?");

/***/ }),

/***/ "./src/assets/return.svg":
/*!*******************************!*\
  !*** ./src/assets/return.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a05d949e2bbc0181b04.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/return.svg?");

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"36ec656cc28fd5164e83.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/trash.svg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);