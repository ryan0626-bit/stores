(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! namespace exports */
/*! export response [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "response": () => /* binding */ response
/* harmony export */ });
const response = data => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    statusCode: 200,
    body: JSON.stringify(data)
  };
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! export createEmployee [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! export createStore [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! export deleteEmployee [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! export deleteStore [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! export getAllEmployees [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! export getStoreEmployees [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! export getStores [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! export updateEmployee [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! export updateStore [provided] [maybe used in index (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in index (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateStore": () => /* binding */ updateStore,
/* harmony export */   "createStore": () => /* binding */ createStore,
/* harmony export */   "deleteStore": () => /* binding */ deleteStore,
/* harmony export */   "getStores": () => /* binding */ getStores,
/* harmony export */   "createEmployee": () => /* binding */ createEmployee,
/* harmony export */   "updateEmployee": () => /* binding */ updateEmployee,
/* harmony export */   "getAllEmployees": () => /* binding */ getAllEmployees,
/* harmony export */   "getStoreEmployees": () => /* binding */ getStoreEmployees,
/* harmony export */   "deleteEmployee": () => /* binding */ deleteEmployee
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./helpers.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./models.js");
;


const updateStore = async ({
  body
}) => {
  const {
    id,
    name,
    employees,
    state
  } = JSON.parse(body);
  await _models__WEBPACK_IMPORTED_MODULE_2__.StoreModel.update({
    id
  }, {
    name,
    employees,
    state
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.response)({
    success: true
  });
};
const createStore = async ({
  body
}) => {
  const {
    name,
    employees,
    state
  } = JSON.parse(body);
  let store = await _models__WEBPACK_IMPORTED_MODULE_2__.StoreModel.create({
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
    name,
    employees,
    state
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.response)({
    success: true,
    store
  });
};
const deleteStore = async ({
  queryStringParameters
}) => {
  const {
    id
  } = queryStringParameters;
  await _models__WEBPACK_IMPORTED_MODULE_2__.StoreModel.delete({
    id
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.response)({
    success: true
  });
};
const getStores = async () => {
  const stores = await _models__WEBPACK_IMPORTED_MODULE_2__.StoreModel.scan().exec();
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.response)({
    success: true,
    stores
  });
};
const createEmployee = async ({
  body
}) => {
  const {
    storeId,
    name,
    position
  } = JSON.parse(body);
  let employee = await _models__WEBPACK_IMPORTED_MODULE_2__.EmployeeModel.create({
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
    storeId,
    name,
    position
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.response)({
    employee
  });
};
const updateEmployee = async ({
  body
}) => {
  const {
    storeId,
    id,
    name,
    position
  } = JSON.parse(body);
  await _models__WEBPACK_IMPORTED_MODULE_2__.EmployeeModel.update({
    storeId,
    id
  }, {
    name,
    position
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.response)({
    success: true
  });
};
const getAllEmployees = async () => {
  const employees = await _models__WEBPACK_IMPORTED_MODULE_2__.EmployeeModel.scan().exec();
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.response)({
    success: true,
    employees
  });
};
const getStoreEmployees = async ({
  queryStringParameters
}) => {
  const {
    storeId
  } = queryStringParameters;
  const employees = await _models__WEBPACK_IMPORTED_MODULE_2__.EmployeeModel.query({
    storeId
  }).exec();
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.response)({
    success: true,
    employees
  });
};
const deleteEmployee = async ({
  queryStringParameters
}) => {
  const {
    storeId,
    id
  } = queryStringParameters;
  await _models__WEBPACK_IMPORTED_MODULE_2__.EmployeeModel.delete({
    storeId,
    id
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.response)({
    success: true
  });
}; //createEmployee
//updateEmployee
//getAllEmployees
//getStoreEmployees
//deleteEmployee

/***/ }),

/***/ "./models.js":
/*!*******************!*\
  !*** ./models.js ***!
  \*******************/
/*! namespace exports */
/*! export EmployeeModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! export StoreModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreModel": () => /* binding */ StoreModel,
/* harmony export */   "EmployeeModel": () => /* binding */ EmployeeModel
/* harmony export */ });
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dynamoose */ "dynamoose");
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dynamoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
;

const StoreSchema = new (dynamoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  id: {
    hashKey: true,
    required: true,
    type: String
  },
  name: {
    type: String,
    required: true
  },
  employees: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});
const EmployeeSchema = new (dynamoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  storeId: {
    hashKey: true,
    required: true,
    type: String
  },
  id: {
    rangeKey: true,
    required: true,
    type: String
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
});
const StoreModel = dynamoose__WEBPACK_IMPORTED_MODULE_0___default().model("store", StoreSchema);
const EmployeeModel = dynamoose__WEBPACK_IMPORTED_MODULE_0___default().model('store-employee', EmployeeSchema);

/***/ }),

/***/ "dynamoose":
/*!****************************!*\
  !*** external "dynamoose" ***!
  \****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("dynamoose");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("uuid");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./index.js");
/******/ })()

));
//# sourceMappingURL=index.js.map