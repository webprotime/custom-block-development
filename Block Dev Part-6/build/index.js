/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/wpt-block-1/index.js":
/*!**********************************!*\
  !*** ./src/wpt-block-1/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  RichText,
  BlockControls,
  AlignmentToolbar,
  InspectorControls
} = wp.blockEditor; //Added BlockControls and AlignmentToolbar

const {
  Toolbar,
  Button,
  PanelBody,
  PanelRow,
  CheckboxControl
} = wp.components; // Registering A Block

registerBlockType('wpt/wpt-block-1', {
  title: 'WPT Custom Block 1',
  category: 'custom-category',
  icon: 'superhero',
  description: 'First Hello World Block',
  keyword: ['test', 'searchme'],
  attributes: {
    textHeading: {
      type: 'string',
      default: 'Heading'
    },
    textPara: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    textButton: {
      type: 'string',
      default: 'Click Me'
    },
    textAlignment: {
      //Alignment attribute to access the alignment in save function
      type: 'string'
    },
    checkBoxContent: {
      type: 'boolean',
      default: false
    }
  },
  supports: {
    align: ['wide', 'full']
  },
  // Block Edit Function
  edit: props => {
    const alignmentClass = props.attributes.textAlignment != null ? 'has-text-align-' + props.attributes.textAlignment : ''; //getting value from textAlignment attribute and checking if textAlignment property has null value then set it to empty

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: alignmentClass + ' wpt-back'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: props.attributes.textAlignment,
      onChange: newalign => props.setAttributes({
        textAlignment: newalign
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      label: "custom button",
      icon: "edit",
      className: "my-custom-button",
      onClick: () => console.log('pressed button')
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Block Setting",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Checkbox",
      checked: "true",
      onChange: () => console.log('check changed')
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wpt-heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: props.attributes.textHeading,
      onChange: content => {
        props.setAttributes({
          textHeading: content
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "wpt-para"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: props.attributes.textPara,
      onChange: content => {
        props.setAttributes({
          textPara: content
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      className: "wpt-button",
      tagName: "a",
      value: props.attributes.textButton,
      onChange: content => {
        props.setAttributes({
          textButton: content
        });
      }
    }));
  },
  //Block Save Function 
  save: props => {
    const alignmentClass = props.attributes.textAlignment != null ? 'has-text-align-' + props.attributes.textAlignment : ''; //getting value from textAlignment attribute and checking if textAlignment property has null value then set it to empty

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: alignmentClass + ' wpt-back'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wpt-heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: props.attributes.textHeading
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "wpt-para"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: props.attributes.textPara
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      className: "wpt-button",
      tagName: "a",
      value: props.attributes.textButton
    }));
  }
});

/***/ }),

/***/ "./src/wpt-block-2/index.js":
/*!**********************************!*\
  !*** ./src/wpt-block-2/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  RichText
} = wp.editor; // Registering A Block

registerBlockType('wpt/wpt-block-2', {
  title: 'WPT Custom Block 2',
  category: 'custom-category',
  icon: 'money',
  description: 'Second Hello World Block',
  keyword: ['test', 'searchme'],
  attributes: {
    textHeading: {
      type: 'string',
      default: 'Heading'
    },
    textPara: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    textButton: {
      type: 'string',
      default: 'Click Me'
    }
  },
  // Block Edit Function
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpt-back"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wpt-heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: props.attributes.textHeading,
      onChange: content => {
        props.setAttributes({
          textHeading: content
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "wpt-para"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: props.attributes.textPara,
      onChange: content => {
        props.setAttributes({
          textPara: content
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wpt-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "a",
      value: props.attributes.textButton,
      onChange: content => {
        props.setAttributes({
          textButton: content
        });
      }
    })));
  },
  //Block Save Function 
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpt-back"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wpt-heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: props.attributes.textHeading
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "wpt-para"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: props.attributes.textPara
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wpt-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      value: props.attributes.textButton
    })));
  }
});

/***/ }),

/***/ "./src/wpt-block-3/index.js":
/*!**********************************!*\
  !*** ./src/wpt-block-3/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  RichText
} = wp.editor; // Registering A Block

registerBlockType('wpt/wpt-block-3', {
  title: 'WPT Custom Block 3',
  category: 'custom-category',
  icon: 'beer',
  description: 'Third Hello World Block',
  keyword: ['test', 'searchme'],
  attributes: {
    textHeading: {
      type: 'string',
      default: 'Heading'
    },
    textPara: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    textButton: {
      type: 'string',
      default: 'Click Me'
    }
  },
  // Block Edit Function
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpt-back"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wpt-heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: props.attributes.textHeading,
      onChange: content => {
        props.setAttributes({
          textHeading: content
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "wpt-para"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: props.attributes.textPara,
      onChange: content => {
        props.setAttributes({
          textPara: content
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wpt-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "a",
      value: props.attributes.textButton,
      onChange: content => {
        props.setAttributes({
          textButton: content
        });
      }
    })));
  },
  //Block Save Function 
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wpt-back"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wpt-heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: props.attributes.textHeading
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "wpt-para"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      value: props.attributes.textPara
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "wpt-button"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      value: props.attributes.textButton
    })));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wpt_block_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wpt-block-1 */ "./src/wpt-block-1/index.js");
/* harmony import */ var _wpt_block_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wpt-block-2 */ "./src/wpt-block-2/index.js");
/* harmony import */ var _wpt_block_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wpt-block-3 */ "./src/wpt-block-3/index.js");
/**
 * Import blocks as components.
 */



}();
/******/ })()
;
//# sourceMappingURL=index.js.map