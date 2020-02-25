/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nwindow.addEventListener(\"DOMContentLoaded\", init);\nvar vertexShader_vert_1 = __webpack_require__(/*! ./shaders/vertexShader.vert */ \"./shaders/vertexShader.vert\");\nvar fragmentShader_frag_1 = __webpack_require__(/*! ./shaders/fragmentShader.frag */ \"./shaders/fragmentShader.frag\");\nfunction init() {\n    var width = 960;\n    var height = 540;\n    var renderTarget = new THREE.WebGLRenderTarget(width, width, {\n        magFilter: THREE.NearestFilter,\n        minFilter: THREE.NearestFilter,\n        wrapS: THREE.ClampToEdgeWrapping,\n        wrapT: THREE.ClampToEdgeWrapping,\n        depthBuffer: false,\n        stencilBuffer: false\n    });\n    var mat = new THREE.ShaderMaterial({\n        vertexShader: vertexShader_vert_1.default,\n        fragmentShader: fragmentShader_frag_1.default\n    });\n    // レンダラーを作成\n    var renderer = new THREE.WebGLRenderer({\n        canvas: document.querySelector(\"#myCanvas\")\n    });\n    renderer.setPixelRatio(window.devicePixelRatio);\n    renderer.setSize(width, height);\n    // シーンを作成\n    var scene = new THREE.Scene();\n    // カメラを作成\n    var camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);\n    camera.position.set(0, 0, +1000);\n    // 箱を作成\n    var geometry = new THREE.BoxGeometry(500, 500, 500);\n    var material = new THREE.MeshStandardMaterial({\n        map: renderTarget.texture\n    });\n    var box = new THREE.Mesh(geometry, material);\n    scene.add(box);\n    // 平行光源\n    var light = new THREE.DirectionalLight(0xffffff);\n    light.intensity = 2; // 光の強さを倍に\n    light.position.set(1, 1, 1);\n    // シーンに追加\n    scene.add(light);\n    var scenePre = new THREE.Scene();\n    var materialPre = new THREE.MeshStandardMaterial({\n        color: 0xffff00\n    });\n    var boxPre = new THREE.Mesh(geometry, mat);\n    var lightPre = new THREE.DirectionalLight(0xffffff);\n    lightPre.intensity = 2; // 光の強さを倍に\n    lightPre.position.set(1, 1, 1);\n    scenePre.add(boxPre);\n    scenePre.add(lightPre);\n    // 初回実行\n    tick();\n    function tick() {\n        requestAnimationFrame(tick);\n        // 箱を回転させる\n        box.rotation.x += 0.01;\n        box.rotation.y += 0.01;\n        boxPre.rotation.x += 0.03;\n        boxPre.rotation.y += 0.05;\n        // レンダリング\n        renderer.setRenderTarget(renderTarget);\n        renderer.render(scenePre, camera);\n        renderer.setRenderTarget(null);\n        renderer.render(scene, camera);\n    }\n}\n\n\n//# sourceURL=webpack:///./main.ts?");

/***/ }),

/***/ "./shaders/fragmentShader.frag":
/*!*************************************!*\
  !*** ./shaders/fragmentShader.frag ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"void main(void)\\n{\\n    gl_FragColor = vec4(gl_FragCoord/1900.0);\\n}\");\n\n//# sourceURL=webpack:///./shaders/fragmentShader.frag?");

/***/ }),

/***/ "./shaders/vertexShader.vert":
/*!***********************************!*\
  !*** ./shaders/vertexShader.vert ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"varying vec2 vUv;\\n\\nvoid main() {\\n  vUv = uv;\\n  gl_Position = projectionMatrix * modelViewMatrix*vec4( position, 1.0 );\\n}\");\n\n//# sourceURL=webpack:///./shaders/vertexShader.vert?");

/***/ })

/******/ });