/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const ul = document.querySelector('todo-list');\n\nlet task = [\n\t{\n\t\tid: 1,\n\t\tname: 'Learn React',\n\t\tdone: false,\n\t},\n\t{\n\t\tid: 2,\n\t\tname: 'Learn Node',\n\t\tdone: false,\n\t},\n\t{\n\t\tid: 1,\n\t\tname: 'Learn Sql',\n\t\tdone: false,\n\t},\n];\n\nconst getTask = () => {\n\ttask.forEach((task) => {\n\t\tlet li = document.createElement('li');\n\t\tli.textContent = task.name;\n\t\tconsole.log(task.name);\n\t});\n\tul.appendChild(li);\n};\n\ngetTask();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);