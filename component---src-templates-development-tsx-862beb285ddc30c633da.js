(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/IuW":function(e,t,n){"use strict";n.r(t);n("0mN4");var r=n("q1tI"),o=n("TJpk"),a=n("UvS+"),i=n("vRlc"),l=n("jrVH"),c=n("/l3E"),s=n("QrCb");n("Fe9K");var u=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).onMouseLeave=function(){n.setState({flipped:!1})},n.onMouseEnter=function(){n.setState({flipped:!0})},n.onClick=function(){n.setState({flipped:!n.state.flipped})},n.state={flipped:!1},n}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e={width:"100%",transformStyle:"preserve-3d",transition:"transform 1s linear",transform:"rotateY(0deg)"};return e.transform=this.state.flipped?"rotateY(180deg)":"rotateY(0deg)",r.createElement("div",{className:this.props.class,style:{perspective:"800px",height:"250px"},onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,onClick:this.onClick},r.createElement("div",{style:e},r.createElement("div",{className:"cards"},r.createElement("i",{className:this.props.icon,"aria-hidden":"true",style:{fontSize:"10em",color:"#f00"}}),r.createElement("div",{className:"text-uppercase pt-2",style:{fontSize:"1.5em"}},Object(s.a)(this.props.title,this.props.locale))),r.createElement("div",{className:"cards",style:{transform:"rotateY(180deg)"}},r.createElement("div",{className:"p-2",style:{border:"1px solid #f00",borderRadius:"5px",width:"50%",margin:"auto",height:"175px",display:"flex",alignItems:"center"}},Object(s.a)(this.props.text,this.props.locale)))))},o}(r.Component),f=function(e){return r.createElement("div",{className:"row py-3"},e.cards.map((function(t,n){return r.createElement(u,{key:n,class:t.gridClass,icon:t.iconClass,title:t.title,text:t.text,locale:e.locale})})))},p=n("avLp"),d=function(e){return r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement(p.a,{title:e.json.title,text:e.json.text,locale:e.locale}),r.createElement(f,{cards:e.json.cards,locale:e.locale})))};var E={display:"inline-flex",alignItems:"center"},T={marginLeft:"10px",fontSize:"20px"},m=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).onMouseLeave=function(){n.setState({flipped:!1})},n.onMouseEnter=function(){n.setState({flipped:!0})},n.onClick=function(){n.setState({flipped:!0})},n.state={flipped:!1},n}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e={transition:"color 2s linear 1s"};return e.color=this.state.flipped?"white":"#f00",r.createElement("div",{className:"py-2 col-xs-12 col-md-6 col-lg-6",onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,onClick:this.onClick},r.createElement("div",{style:E},r.createElement("span",{style:e},r.createElement("i",{className:this.props.icon})),r.createElement("span",{className:"text-uppercase",style:T},Object(s.a)(this.props.title,this.props.locale))),r.createElement("p",null,Object(s.a)(this.props.text,this.props.locale)))},o}(r.Component),h=function(e){return r.createElement("div",{className:"row py-3",style:e.style},e.cards.map((function(t,n){return r.createElement(m,{key:n,icon:t.iconClass,title:t.title,text:t.text,locale:e.locale})})))},y={backgroundImage:"url("+n("BTuy")+")",color:"white"},A=function(e){return r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement(p.a,{title:e.json.title,text:e.json.text,style:y,locale:e.locale}),r.createElement(h,{cards:e.json.cards,style:y,locale:e.locale})))},v={textAlign:"center",backgroundImage:"url("+n("KvbW")+")"},S=function(e){return r.createElement("div",{className:"container-fluid",style:v},r.createElement(i.a,{image:e.firstImage,height:"550px"}),r.createElement(l.a,{locale:e.locale}),r.createElement(d,{json:e.json.portfolio,locale:e.locale}),r.createElement(i.a,{image:e.middleImage,height:"350px"}),r.createElement(A,{json:e.json.principles,locale:e.locale}),r.createElement(i.a,{image:e.lastImage,height:"350px"}),r.createElement(a.a,{locale:e.locale}),r.createElement(c.a,{locale:e.locale}))},b=n("5UjZ");n.d(t,"query",(function(){return g}));t.default=function(e){return r.createElement(b.a,{location:e.location,locale:e.pageContext.locale},r.createElement(o.Helmet,null,r.createElement("title",null,"Teufel IT, Software ist mein Handwerk"),r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"description",content:"Teufel IT, Apps, Mobile App, Mobile Anwendungsentwicklung, iOS App, Native,  Softwareentwickler, Softwareentwicklung, Anwendungsentwicklung, Typescript, JavaScript,  Java, NodeJs, Integration, Migration, Webservices, Docker, DevOps, Linux"}),r.createElement("link",{rel:"canonical",href:"http://teufel-it.de/"+e.pageContext.locale})),r.createElement(S,{firstImage:e.data.code.childImageSharp.fluid,middleImage:e.data.much_code.childImageSharp.fluid,lastImage:e.data.code.childImageSharp.fluid,background:e.data.lines.childImageSharp.fixed.src,json:e.data.development.nodes[1],locale:e.pageContext.locale}))};var g="2922431329"},"/l3E":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("Wbzz"),o=n("q1tI"),a=n("QrCb"),i={backgroundImage:"url("+n("BTuy")+")",color:"white",textAlign:"left",fontSize:"small"},l={color:"white"},c={fontSize:"medium"},s=function(e){return o.createElement("div",{className:"row",style:i},o.createElement("div",{className:"container py-3"},o.createElement("div",null,"© 2019 Teufel-IT"),o.createElement("div",{className:"row"},o.createElement("div",{className:"col-xs-12 col-md-3 col-lg-3 py-3"},o.createElement("div",{style:c},Object(a.a)("OWNER",e.locale)),o.createElement("br",null),o.createElement("div",null,"Tristan Teufel"),o.createElement("div",null,"Werkstr.10a"),o.createElement("div",null,"D-77815 Bühl")),o.createElement("div",{className:"col-xs-12 col-md-3 col-lg-3 py-3"},o.createElement("div",{style:c},Object(a.a)("SOURCE_CODE",e.locale)),o.createElement("br",null),o.createElement("div",null,o.createElement("a",{style:l,href:"https://github.com/firsttris/teufel-it-gatsby",rel:"noopener noreferrer",target:"_blank"}," ",o.createElement("i",{className:"fab fa-github","aria-hidden":"true"})," ",Object(a.a)("GITHUB_PAGE_LINK",e.locale)))),o.createElement("div",{className:"col-xs-12 col-md-3 col-lg-3 py-3"},o.createElement("div",{style:c},Object(a.a)("SOURCE_FOR_IMAGES",e.locale)),o.createElement("br",null),o.createElement("div",null,o.createElement("a",{href:"http://unsplash.com",style:l,target:"_blank",rel:"noopener noreferrer"},"www.unsplash.com"," ")),o.createElement("div",null,o.createElement("a",{href:"http://shutterstock.com",style:l,target:"_blank",rel:"noopener noreferrer"},"www.shutterstock.com"," ")),o.createElement("div",null,o.createElement("a",{href:"http://fontawesome.io",style:l,target:"_blank",rel:"noopener noreferrer"},"www.fontawesome.io"))),o.createElement("div",{className:"col-xs-12 col-md-3 col-lg-3 py-3"},o.createElement("div",{style:c},Object(a.a)("CONTACT_TITLE",e.locale)),o.createElement("br",null),o.createElement("div",null,o.createElement("a",{href:"tel:+4917645744166",style:l},"+49 (0) 176 457 44 1 66")),o.createElement("div",null,o.createElement("a",{href:"mailto:info@teufel-it.de",style:l},"info@teufel-it.de")),o.createElement("div",null,"UST-ID DE304672147"),o.createElement(r.Link,{to:"/"+e.locale+"/privacy/",style:i},Object(a.a)("PRIVACYPOLICY",e.locale))))))}},"2rMq":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r)}()},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("f3/d"),n("/SS/");var o=n("q1tI"),a=r(o),i=r(n("2rMq")),l=r(n("Gytx"));e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c=[],s=void 0;function u(){s=e(c.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return s},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e},t.prototype.shouldComponentUpdate=function(e){return!l(e,this.props)},t.prototype.componentWillMount=function(){c.push(this),u()},t.prototype.componentDidUpdate=function(){u()},t.prototype.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},t.prototype.render=function(){return a.createElement(r,this.props)},t}(o.Component);return f.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",f.canUseDOM=i.canUseDOM,f}}},Gytx:function(e,t,n){n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var s=a[c];if(!l(s))return!1;var u=e[s],f=t[s];if(!1===(o=n?n.call(r,u,f,s):void 0)||void 0===o&&u!==f)return!1}return!0}},KvbW:function(e,t,n){e.exports=n.p+"static/lines-1c2d10c63aca0b8bfd30d30a872a2878.png"},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),a=n("hswa").f,i=n("kJMx").f,l=n("quPj"),c=n("C/va"),s=r.RegExp,u=s,f=s.prototype,p=/a/g,d=/a/g,E=new s(p)!==p;if(n("nh4g")&&(!E||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(e,t){var n=this instanceof s,r=l(e),a=void 0===t;return!n&&r&&e.constructor===s&&a?e:o(E?new u(r&&!a?e.source:e,t):u((r=e instanceof s)?e.source:e,r&&a?c.call(e):t),n?this:f,s)};for(var T=function(e){e in s||a(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},m=i(u),h=0;m.length>h;)T(m[h++]);f.constructor=s,s.prototype=f,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},TJpk:function(e,t,n){n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("/SS/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=f(n("q1tI")),i=f(n("17x9")),l=f(n("8+s/")),c=f(n("bmMU")),s=n("v1p5"),u=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var d,E,T,m=(0,l.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),h=(d=m,T=E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,a=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(o.type){case u.TAG_NAMES.TITLE:return r({},a,((t={})[o.type]=l,t.titleAttributes=r({},i),t));case u.TAG_NAMES.BODY:return r({},a,{bodyAttributes:r({},i)});case u.TAG_NAMES.HTML:return r({},a,{htmlAttributes:r({},i)})}return r({},a,((n={})[o.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=p(o,["children"]),l=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,a),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),a.default.createElement(d,o)},o(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(a.default.Component),E.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=d.peek,E.rewind=function(){var e=d.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},T);h.renderStatic=h.rewind,t.Helmet=h,t.default=h},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},"UvS+":function(e,t,n){"use strict";var r=n("q1tI"),o=n("twkI"),a=n("TSYQ"),i={margin:"10px",color:"#f00",textDecoration:"none"},l=function(e){return r.createElement("a",{className:"btn btn-outline-dark",style:i,target:"_blank",rel:"noopener noreferrer",href:e.url},r.createElement("i",{className:a("fa-2x",e.icon),"aria-hidden":"true"}))};n.d(t,"a",(function(){return s}));var c={fontSize:"30px",letterSpacing:"10px"},s=function(e){return r.createElement("div",{className:"row py-3 text-center"},r.createElement("div",{className:"col"},r.createElement("span",{className:"text-uppercase",style:c},r.createElement(o.a,{title:"CONTACT_TITLE",locale:e.locale})),r.createElement("div",null,r.createElement(l,{icon:"fas fa-phone",url:"tel:+49 176 45744166"}),r.createElement(l,{icon:"fas fa-envelope",url:"mailto:info@teufel-it.de"}),r.createElement(l,{icon:"fab fa-xing-square",url:"https://www.xing.com/profile/Tristan_Teufel"}),r.createElement(l,{icon:"fab fa-linkedin",url:"https://de.linkedin.com/pub/tristan-teufel/8a/30a/b5"}),r.createElement(l,{icon:"fab fa-github",url:"https://github.com/firsttris"}))))}},avLp:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),o=n("QrCb"),a=n("twkI"),i=function(e){return r.createElement("div",{className:"row py-3",style:e.style},r.createElement("div",{className:"col"},r.createElement(a.a,{title:e.title,locale:e.locale}),e.text?Object(o.a)(e.text,e.locale):null))}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,c,s,u=r(t),f=r(n);if(u&&f){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(u!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var E=t instanceof RegExp,T=n instanceof RegExp;if(E!=T)return!1;if(E&&T)return t.toString()==n.toString();var m=o(t);if((c=m.length)!==o(n).length)return!1;for(l=c;0!=l--;)if(!a.call(n,m[l]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(l=c;0!=l--;)if(!("_owner"===(s=m[l])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},jrVH:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),o=n("QrCb"),a={position:"absolute",top:"200px",width:"100%"},i={backgroundColor:"#4B4B4B",display:"inline-block"},l={fontSize:"35px",letterSpacing:"7px",color:"#f00"},c={fontSize:"15px",letterSpacing:"5px",color:"white"},s=function(e){return r.createElement("div",{className:"row",style:a},r.createElement("div",{className:"col"},r.createElement("div",{className:"p-3",style:i},r.createElement("div",{style:l},Object(o.a)("HEADER_TITLE",e.locale)),r.createElement("div",{className:"pt-3",style:c},Object(o.a)("HEADER_SUBTITLE",e.locale)))))}},twkI:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),o=n("QrCb"),a={fontSize:"30px",letterSpacing:"10px"},i=function(e){return r.createElement("div",{className:"text-uppercase",style:a},Object(o.a)(e.title,e.locale))}},v1p5:function(e,t,n){(function(e){n("KKXr"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n("q1tI")),i=c(n("MgzW")),l=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=m(e,l.TAG_NAMES.TITLE),n=m(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return m(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},T=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),c=0;c<a.length;c++){var s=a[c],u=(0,i.default)({},o[s],r[s]);o[s]=u}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){h(e)}),0)}),y=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;w(l.TAG_NAMES.BODY,r),w(l.TAG_NAMES.HTML,o),O(p,d);var E={baseTag:R(l.TAG_NAMES.BASE,n),linkTags:R(l.TAG_NAMES.LINK,a),metaTags:R(l.TAG_NAMES.META,i),noscriptTags:R(l.TAG_NAMES.NOSCRIPT,c),scriptTags:R(l.TAG_NAMES.SCRIPT,u),styleTags:R(l.TAG_NAMES.STYLE,f)},T={},m={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(m[e]=E[e].oldTags)})),t&&t(),s(e,T,m)},_=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),w(l.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var f=a.indexOf(s);-1!==f&&a.splice(f,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},I=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},N=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,o=M(n,r),[a.default.createElement(l.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=I(n),a=_(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+u(a,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){b&&v(b),e.defer?b=A((function(){g(e,(function(){b=null}))})):(g(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:N(l.TAG_NAMES.BASE,t,r),bodyAttributes:N(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:N(l.ATTRIBUTE_NAMES.HTML,o,r),link:N(l.TAG_NAMES.LINK,a,r),meta:N(l.TAG_NAMES.META,i,r),noscript:N(l.TAG_NAMES.NOSCRIPT,c,r),script:N(l.TAG_NAMES.SCRIPT,s,r),style:N(l.TAG_NAMES.STYLE,u,r),title:N(l.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:E([l.TAG_PROPERTIES.HREF],e),bodyAttributes:d(l.ATTRIBUTE_NAMES.BODY,e),defer:m(e,l.HELMET_PROPS.DEFER),encode:m(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(l.ATTRIBUTE_NAMES.HTML,e),linkTags:T(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:T(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:T(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=S}).call(this,n("yLpj"))},vRlc:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("9eSz"),o=n.n(r),a=n("q1tI");var i=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.createElement("div",{className:"row"},a.createElement("div",{className:"col",style:{padding:0}},a.createElement(o.a,{fluid:this.props.image,style:{position:"relative",opacity:.65,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"400px",height:this.props.height}})))},r}(a.Component)},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-templates-development-tsx-862beb285ddc30c633da.js.map