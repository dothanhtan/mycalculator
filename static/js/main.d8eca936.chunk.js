(this.webpackJsonpcaculartor=this.webpackJsonpcaculartor||[]).push([[0],[,function(_,e,t){"use strict";var a=t(0),l=t.n(a);e.a=function(_){return l.a.createElement("input",{className:_.className,type:"button",value:_.label,onClick:_.handleClick})}},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_CalculatorTitle_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_outputScreen_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(12),_button_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1),Calculator=function(_React$Component){function Calculator(_){var e;return Object(C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(e=Object(C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator).call(this,_))).state={question:"",answer:""},e.handleClick=e.handleClick.bind(Object(C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e}return Object(C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator,_React$Component),Object(C_Users_ADMINIS_Documents_ReactJS_app02_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"handleClick",value:function handleClick(event){var value=event.target.value;switch(value){case"=":if(""!==this.state.question){var ans="";try{ans=eval(this.state.question)}catch(err){this.setState({answer:"Math Error"})}void 0===ans?this.setState({answer:"Math Error"}):this.setState({answer:ans,question:this.state.question})}break;case"AC":this.setState({question:"",answer:""});break;case"DEL":var str=this.state.question;str=str.substr(0,str.length-1),this.setState({question:str});break;default:this.setState({question:this.state.question+=value})}}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"frame"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CalculatorTitle_js__WEBPACK_IMPORTED_MODULE_7__.a,{title:"CALCULATOR"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"mainCalc"},console.log(this.state),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_outputScreen_js__WEBPACK_IMPORTED_MODULE_8__.a,{question:this.state.question,answer:this.state.answer}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"button-row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{className:"btnaction",label:"AC",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{className:"btnaction",label:"DEL",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{className:"btnaction",label:"%",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{className:"btnaction",label:"/",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"button-row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{label:"7",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{label:"8",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{label:"9",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{className:"btnaction",label:"*",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"button-row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{label:"4",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{label:"5",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{label:"6",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{className:"btnaction",label:"-",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"button-row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{label:"1",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{label:"2",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{label:"3",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{className:"btnaction",label:"+",handleClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"button-row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{label:"0",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{label:".",handleClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_button_js__WEBPACK_IMPORTED_MODULE_9__.a,{className:"btnaction",label:"=",handleClick:this.handleClick}))))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);__webpack_exports__.a=Calculator},,,,function(_,e,t){"use strict";var a=t(0),l=t.n(a);e.a=function(_){return l.a.createElement("div",{className:"calculator-title"},_.title)}},,,function(_,e,t){"use strict";var a=t(0),l=t.n(a),n=function(_){return l.a.createElement("div",{className:"screen-row"},l.a.createElement("input",{type:"text",readOnly:!0,value:_.value}))};e.a=function(_){return l.a.createElement("div",{className:"screen"},l.a.createElement(n,{value:_.question}),l.a.createElement(n,{value:_.answer}))}},function(_,e,t){_.exports=t(19)},,,,,function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(0),l=t.n(a),n=t(4),s=t.n(n);t(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(5);s.a.render(l.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.d8eca936.chunk.js.map