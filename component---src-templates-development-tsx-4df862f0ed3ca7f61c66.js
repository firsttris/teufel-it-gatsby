webpackJsonp([0x90d367846f53],{539:function(e,t,n){e.exports=n.p+"static/much_code.4a6cbcd9.jpg"},540:function(e,t,n){e.exports=n.p+"static/oldComputer2.50697160.jpg"},95:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),l=n(9),i={display:"inline-flex",alignItems:"center"},c={marginLeft:"10px",fontSize:"20px"},u=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.onMouseLeave=function(){r.setState({flipped:!1})},r.onMouseEnter=function(){r.setState({flipped:!0})},r.onClick=function(){r.setState({flipped:!0})},r.state={flipped:!1},r}return r(t,e),t.prototype.render=function(){var e={transition:"color 2s linear 1s"};return e.color=this.state.flipped?"white":"#f00",s.createElement("div",{className:"py-2 col-xs-12 col-md-6 col-lg-6",onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,onClick:this.onClick},s.createElement("div",{style:i},s.createElement("span",{style:e},s.createElement("i",{className:this.props.icon})),s.createElement("span",{className:"text-uppercase",style:c},s.createElement(l.FormattedMessage,{id:this.props.title}))),s.createElement("p",null,s.createElement(l.FormattedMessage,{id:this.props.text})))},t}(s.Component);t.default=u},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(95);t.default=function(e){return o.createElement("div",{className:"row py-3",style:e.style},e.cards.map(function(e,t){return o.createElement(a.default,{key:t,icon:e.iconClass,title:e.title,text:e.text})}))}},136:function(e,t){},97:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),l=n(9);n(136);var i=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.onMouseLeave=function(){r.setState({flipped:!1})},r.onMouseEnter=function(){r.setState({flipped:!0})},r.onClick=function(){r.setState({flipped:!r.state.flipped})},r.state={flipped:!1},r}return r(t,e),t.prototype.render=function(){var e={width:"100%",transformStyle:"preserve-3d",transition:"transform 1s linear",transform:"rotateY(0deg)"};return e.transform=this.state.flipped?"rotateY(180deg)":"rotateY(0deg)",s.createElement("div",{className:this.props.class,style:{perspective:"800px",height:"250px"},onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,onClick:this.onClick},s.createElement("div",{style:e},s.createElement("div",{className:"cards"},s.createElement("i",{className:this.props.icon,"aria-hidden":"true",style:{fontSize:"10em",color:"#f00"}}),s.createElement("div",{className:"text-uppercase",style:{fontSize:"1.5em"}},s.createElement(l.FormattedMessage,{id:this.props.title}))),s.createElement("div",{className:"cards",style:{transform:"rotateY(180deg)"}},s.createElement("div",{className:"p-2",style:{border:"1px solid #f00",borderRadius:"5px",width:"50%",margin:"auto",height:"175px",display:"flex",alignItems:"center"}},s.createElement(l.FormattedMessage,{id:this.props.text})))))},t}(s.Component);t.default=i},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(97);t.default=function(e){return o.createElement("div",{className:"row py-3"},e.cards.map(function(e,t){return o.createElement(a.default,{key:t,class:e.gridClass,icon:e.iconClass,title:e.title,text:e.text})}))}},45:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),i={position:"relative",opacity:.65,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"400px"},c=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.setToScroll=function(e){i.backgroundAttachment=e.matches?"scroll":"fixed",r.forceUpdate()},r}return r(t,e),t.prototype.componentDidMount=function(){this.match=window.matchMedia("(max-width: 575px)"),this.ieHack=window.matchMedia("all and (-ms-high-contrast: none), (-ms-high-contrast: active)"),this.match.addListener(this.setToScroll),this.ieHack.addListener(this.setToScroll),i.backgroundAttachment=window.innerWidth<575?"scroll":"fixed"},t.prototype.componentWillUnmount=function(){this.match.removeListener(this.setToScroll),this.ieHack.removeListener(this.setToScroll)},t.prototype.render=function(){return l.createElement("div",{className:"row"},l.createElement("div",{className:"col",style:{padding:0}},l.createElement("div",{style:s({},i,{height:this.props.height,backgroundImage:"url("+this.props.image+")"})})))},t}(l.Component);t.default=c},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(9),r={position:"absolute",top:"200px",width:"100%"},s={backgroundColor:"#4B4B4B",display:"inline-block"},l={fontSize:"35px",letterSpacing:"7px",color:"#f00"},i={fontSize:"15px",letterSpacing:"5px",color:"white"};t.default=function(){return o.createElement("div",{className:"row",style:r},o.createElement("div",{className:"col"},o.createElement("div",{className:"p-3",style:s},o.createElement("div",{style:l},o.createElement(a.FormattedMessage,{id:"HEADER_TITLE"})),o.createElement("div",{className:"pt-3",style:i},o.createElement(a.FormattedMessage,{id:"HEADER_SUBTITLE"})))))}},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(72),r=n(45),s=n(46),l=n(73),i=n(102),c=n(103),u=n(69),f={textAlign:"center",backgroundImage:"url("+u+")"};t.default=function(e){return o.createElement("div",{className:"container-fluid",style:f},o.createElement(r.default,{image:e.firstImage,height:"550px"}),o.createElement(s.default,null),o.createElement(i.default,{json:e.json.portfolio}),o.createElement(r.default,{image:e.middleImage,height:"350px"}),o.createElement(c.default,{json:e.json.principles}),o.createElement(r.default,{image:e.lastImage,height:"350px"}),o.createElement(a.default,null),o.createElement(l.default,null))}},102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(98),r=n(23);t.default=function(e){return o.createElement("div",{className:"row"},o.createElement("div",{className:"col"},o.createElement(r.default,{title:e.json.title,text:e.json.text}),o.createElement(a.default,{cards:e.json.cards})))}},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(96),r=n(23),s=n(70),l={backgroundImage:"url("+s+")",color:"white"};t.default=function(e){return o.createElement("div",{className:"row"},o.createElement("div",{className:"col"},o.createElement(r.default,{title:e.json.title,text:e.json.text,style:l}),o.createElement(a.default,{cards:e.json.cards,style:l})))}},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(9),r=n(74);t.default=function(e){return o.createElement("div",{className:"row py-3",style:e.style},o.createElement("div",{className:"col"},o.createElement(r.default,{title:e.title}),e.text?o.createElement(a.FormattedMessage,{id:e.text}):null))}},417:function(e,t){e.exports={portfolio:{title:"PORTFOLIO_TITLE",text:"TEXT_GOOD_PARTNER",cards:[{title:"PORTFOLIO_SOFTWARE_TITLE",iconClass:"fab fa-5x fa-github",gridClass:"col-xs-12 col-md-6 col-lg-4",text:"PORTFOLIO_SOFTWARE_TEXT"},{title:"PORTFOLIO_SERVICES_TITLE",iconClass:"fas fa-5x fa-code-branch",gridClass:"col-xs-12 col-md-6 col-lg-4",text:"PORTFOLIO_SERVICES_TEXT"},{title:"PORTFOLIO_TRAINING_TITLE",iconClass:"fab fa-5x fa-leanpub",gridClass:"col-xs-12 col-md-6 col-lg-4",text:"PORTFOLIO_TRAINING_TEXT"}]},principles:{title:"PRINCIPLES_TITLE",text:"TEXT_TESTED_CONCEPTS",cards:[{title:"PRINCIPLES_TDD_TITLE",iconClass:"fab fa-2x fa-free-code-camp",gridClass:"col-xs-12 col-md-6 col-lg-6",text:"PRINCIPLES_TDD_TEXT"},{title:"PRINCIPLES_PP_TITLE",iconClass:"fas fa-2x fa-users",gridClass:"col-xs-12 col-md-6 col-lg-6",text:"PRINCIPLES_PP_TEXT"},{title:"PRINCIPLES_CC_TITLE",iconClass:"fas fa-2x fa-code",gridClass:"col-xs-12 col-md-6 col-lg-6",text:"PRINCIPLES_CC_TEXT"},{title:"PRINCIPLES_AGILE_TITLE",iconClass:"fas fa-2x fa-sync",gridClass:"col-xs-12 col-md-6 col-lg-6",text:"PRINCIPLES_AIGLE_TEXT"}]}}},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(101),r=n(539),s=n(540),l=n(417);t.default=function(){return o.createElement("div",{className:"page"},o.createElement(a.default,{firstImage:s,middleImage:r,lastImage:s,json:l}))}}});
//# sourceMappingURL=component---src-templates-development-tsx-4df862f0ed3ca7f61c66.js.map