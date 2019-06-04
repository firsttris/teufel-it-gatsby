(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(164),i={portfolio:{title:"PORTFOLIO_TITLE",text:"TEXT_GOOD_PARTNER",cards:[{title:"PORTFOLIO_SOFTWARE_TITLE",iconClass:"fab fa-5x fa-github",gridClass:"col-xs-12 col-md-6 col-lg-4",text:"PORTFOLIO_SOFTWARE_TEXT"},{title:"PORTFOLIO_SERVICES_TITLE",iconClass:"fas fa-5x fa-code-branch",gridClass:"col-xs-12 col-md-6 col-lg-4",text:"PORTFOLIO_SERVICES_TEXT"},{title:"PORTFOLIO_TRAINING_TITLE",iconClass:"fab fa-5x fa-leanpub",gridClass:"col-xs-12 col-md-6 col-lg-4",text:"PORTFOLIO_TRAINING_TEXT"}]},principles:{title:"PRINCIPLES_TITLE",text:"TEXT_TESTED_CONCEPTS",cards:[{title:"PRINCIPLES_TDD_TITLE",iconClass:"fab fa-2x fa-free-code-camp",gridClass:"col-xs-12 col-md-6 col-lg-6",text:"PRINCIPLES_TDD_TEXT"},{title:"PRINCIPLES_PP_TITLE",iconClass:"fas fa-2x fa-users",gridClass:"col-xs-12 col-md-6 col-lg-6",text:"PRINCIPLES_PP_TEXT"},{title:"PRINCIPLES_CC_TITLE",iconClass:"fas fa-2x fa-code",gridClass:"col-xs-12 col-md-6 col-lg-6",text:"PRINCIPLES_CC_TEXT"},{title:"PRINCIPLES_AGILE_TITLE",iconClass:"fas fa-2x fa-sync",gridClass:"col-xs-12 col-md-6 col-lg-6",text:"PRINCIPLES_AIGLE_TEXT"}]}},o=(n(77),n(7)),s=n.n(o),l=(n(170),n(165)),c=n.n(l),u=n(178),E=(n(152),n(145)),T=(n(32),n(146)),d=n.n(T),m=(n(185),{display:"block",color:"white",textAlign:"center",padding:"14px 16px",textDecoration:"none"}),I=function(e){function t(t){var n;return(n=e.call(this,t)||this).onMouseLeave=function(){n.setState({hover:!1})},n.onMouseEnter=function(){n.setState({hover:!0})},n.handleLinkClick=function(){n.props.onClick(n.props.index,n.props.path)},n.state={hover:!1},n}s()(t,e);var n=t.prototype;return n.getLinkStyle=function(){return this.props.focus?Object.assign({},m,{backgroundColor:"#f00"}):this.state.hover?Object.assign({},m,{backgroundColor:"white",color:"black"}):m},n.render=function(){return a.createElement("div",{onClick:this.handleLinkClick},a.createElement("li",{className:"link-item",onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter},a.createElement(d.a,{style:this.getLinkStyle(),to:this.props.path},this.props.name)))},t}(a.Component),p=(n(186),n(149)),f={margin:"10px",color:"#f00",textDecoration:"none"},O={listStyleType:"none",margin:"0",padding:"0",overflow:"hidden",backgroundImage:"url("+p+")",borderBottom:"1px solid #f00"},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).prevIndex=0,n.onClick=function(e,t){n.setState({currentPath:t,hideNav:!0}),n.prevIndex>e?n.props.onClick("pageSliderRight"):n.props.onClick("pageSliderLeft"),n.prevIndex=e},n.toggleNavigation=function(){n.setState({hideNav:!n.state.hideNav})},n.scrollToBottom=function(){window.scrollTo(0,document.body.scrollHeight-850)},n.state={currentPath:"",hideNav:!0},n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({currentPath:this.props.location.pathname})},n.render=function(){var e=this,t=Object(E.a)(),n=[{path:"/"+t+"/",name:Object(E.b)("NAVIGATION_DEVELOPMENT")},{path:"/"+t+"/Consulting",name:Object(E.b)("NAVIGATION_CONSULTING")},{path:"/"+t+"/Github",name:Object(E.b)("NAVIGATION_PROJECTS")},{path:"/"+t+"/SendToKodi",name:Object(E.b)("NAVIGATION_SENDTOKODI")}];return a.createElement("div",{className:"nav-bar"},a.createElement("ul",{style:O},a.createElement("li",{className:"nav-button"},a.createElement("a",{className:"btn btn-outline-dark pull-left",style:f,onClick:this.scrollToBottom},"Contact"),a.createElement("a",{className:"btn btn-outline-dark pull-right",style:f,onClick:this.toggleNavigation},a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"})),a.createElement("div",{className:"clearfix"})),a.createElement("div",{className:this.state.hideNav?"navigation":""},n.map(function(t,n){return a.createElement(I,{key:n,index:n,focus:e.state.currentPath===t.path,path:t.path,name:t.name,onClick:e.onClick})}))))},t}(a.Component),S=(n(187),function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e,t){return this.props.location.pathname===window.location.pathname},n.render=function(){var e=this.props.children;return a.createElement("div",{className:"transition-container"},e)},t}(a.Component)),_=function(e){var t=e.pathname.split("/");return(t=t.filter(function(e){return""!==e})).length},N=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClassChange=function(e){n.setState({className:e})},n.state={className:"pageSliderRight",prevDepth:_(t.location)},n}return s()(t,e),t.prototype.render=function(){return a.createElement("div",{className:"page"},a.createElement(c.a,{title:"Teufel IT, IT-Strategieberatung, Geschäftsanwendungen, Geschäftsprozesse",meta:[{name:"description",content:"Teufel IT, Softwareentwicklung, JavaScript, NodeJs, Integration"},{name:"keywords",content:"Softwareentwicklung, JavaScript, NodeJs, React"}]}),a.createElement(h,{onClick:this.onClassChange,location:this.props.location}),a.createElement(u.TransitionGroup,null,a.createElement(u.CSSTransition,{key:this.props.location.pathname,classNames:this.state.className,timeout:{enter:1e3,exit:1e3},mountOnEnter:!1,unmountOnExit:!0},a.createElement(S,{location:this.props.location},this.props.children))))},t}(a.Component),L=n(188),g=n(189);t.default=function(e){return a.createElement(N,e,a.createElement(r.a,{firstImage:g,middleImage:L,lastImage:g,json:i}))}},145:function(e,t,n){"use strict";var a,r={de:{HEADER_TITLE:"[ teufel it ]",HEADER_SUBTITLE:"Software ist mein Handwerk",CONTACT_TITLE:"Kontakt",CONTACT_TEXT:"Kontaktieren sie uns",ERROR_TEXT:"Sieht aus als wäre etwas schief gelaufen!",ERROR_NOT_FOUND:"Seite nicht gefunden, versuchen Sie die Seite neu zu laden",ERROR_CONTACT_US:"Wenn das Problem weiterhin besteht, kontaktieren Sie uns",ERROR_START:"Start",PORTFOLIO_TITLE:"Portfolio",TEXT_GOOD_PARTNER:"Zuverlässiger Partner bei",PORTFOLIO_ANALYSIS_TITLE:"Analyse",PORTFOLIO_ANALYSIS_TEXT:"Bestandsaufnahme und Analyse Ihres IT-Umfelds. Vergleich mit aktuellen Strategien",PORTFOLIO_OPTIMIZE_TITLE:"Optimierung",PORTFOLIO_OPTIMIZE_TEXT:"Erstellung von Konzepten für Neuausrichtung und Optimierung",PORTFOLIO_OPENSOURCE_TITLE:"Open-Source",PORTFOLIO_OPENSOURCE_TEXT:"Unkonventionelle und moderne Lösungen durch den Einsatz Open-Source Software und Cloudlösungen",PRINCIPLES_TITLE:"Ziele",TEXT_TESTED_CONCEPTS:"Arbeit auf Basis von bewährten Konzepten",PRINCIPLES_SAVINGS_TITLE:"Ersparnis",PRINCIPLES_SAVINGS_TEXT:"Weniger Wartungskosten",PRINCIPLES_STANDARDS_TITLE:"Standards",PRINCIPLES_STANDARDS_TEXT:"Einsatz von bewährten Konzepten",PRINCIPLES_EASY_TITLE:"Einfach & Fair",PRINCIPLES_EASY_TEXT:"Reduzierung der Komplexität Ihrer IT-Systeme",PRINCIPLES_BUSINESS_TITLE:"Business",PRINCIPLES_BUSINESS_TEXT:"Konzentration auf Ihr Kerngeschäft",PORTFOLIO_SOFTWARE_TITLE:"Software",PORTFOLIO_SOFTWARE_TEXT:"Entwicklung von Nativen-, Web- und Cross-Platform Applikationen",PORTFOLIO_MOBILE_TITLE:"Mobile",PORTFOLIO_MOBILE_TEXT:"Mobile Entwicklung für iOS und Android",PORTFOLIO_BTC_TITLE:"Blockchain",PORTFOLIO_BTC_TEXT:"Entwicklung und Integration von Blockchain Lösungen",PORTFOLIO_SERVICES_TITLE:"Integration",PORTFOLIO_SERVICES_TEXT:"Integration von Services und Migration von Daten",PORTFOLIO_TRAINING_TITLE:"training",PORTFOLIO_TRAINING_TEXT:"Teilen von Wissen, neuen Konzepten und Methoden",PRINCIPLES_TDD_TITLE:"tdd",PRINCIPLES_TDD_TEXT:"Kein Produktionscode ohne Unit-Test",PRINCIPLES_PP_TITLE:"Pair Programming",PRINCIPLES_PP_TEXT:"Lösungen im Team sind langfristig nachhaltiger",PRINCIPLES_CC_TITLE:"clean code",PRINCIPLES_CC_TEXT:"Prinzipien und Praktiken zu mehr Qualität",PRINCIPLES_AGILE_TITLE:"agile",PRINCIPLES_AIGLE_TEXT:"Lösen von komplexe Herausforderungen in Iterationen",OWNER:"Inhaber",SOURCE_FOR_IMAGES:"Quellen für Bilder & Fonts",BUILD_WITH:"Build with ",SOURCE_CODE:"Quelltext",GITHUB_PAGE_LINK:"Einsehen auf Github ",GITHUB_SUBTITLE:"auf Github",NAVIGATION_DEVELOPMENT:"Entwicklung",NAVIGATION_CONSULTING:"Beratung",NAVIGATION_PROJECTS:"Projekte",NAVIGATION_SENDTOKODI:"SendToKodi",SENDTOKODI_DESCRIPTION_LABEL:"Beschreibung",SENDTOKODI_SCREENSHOTS_LABEL:"Screenshots",SENDTOKODI_REVIEWS:"Reviews",SENDTOKODI_SUPPORTED_ADDONS_LABEL:"Unterstützte Addons",SENDTOKODI_DESCRIPTION:"Mit SendToKodi kannst du direkt aus verschiedenen Apps Links an die Kodi Addons senden. Öffne dazu einfach das Share Menü bei dem entsprechenden Video bzw. Lied und wähle aus den zur Verfügung stehenden Apps SendToKodi aus. Anschließend kannst du den Link dann an Kodi senden."},en:{HEADER_TITLE:"[ teufel it ]",HEADER_SUBTITLE:"Software is my craft",CONTACT_TITLE:"Contact",CONTACT_TEXT:"Contact us",ERROR_TEXT:"Looks like something went wrong!",ERROR_NOT_FOUND:"Page not found, try refreshing",ERROR_CONTACT_US:"If the problem persists feel free to contact us",ERROR_START:"Start over",PORTFOLIO_TITLE:"Portfolio",TEXT_GOOD_PARTNER:"A reliable partner",PORTFOLIO_ANALYSIS_TITLE:"Analysis",PORTFOLIO_ANALYSIS_TEXT:"Inventory and analysis of the IT environment. Compare with current strategies.",PORTFOLIO_OPTIMIZE_TITLE:"Optimization",PORTFOLIO_OPTIMIZE_TEXT:"Creation of concepts for realignment and optimization",PORTFOLIO_OPENSOURCE_TITLE:"Open-Source",PORTFOLIO_OPENSOURCE_TEXT:"Unconventional and modern solutions through open-source software and cloud solutions",PRINCIPLES_TITLE:"Goals",TEXT_TESTED_CONCEPTS:"Work on the basis of tried and tested concepts",PRINCIPLES_SAVINGS_TITLE:"Savings",PRINCIPLES_SAVINGS_TEXT:"Less maintenance costs",PRINCIPLES_STANDARDS_TITLE:"Standards",PRINCIPLES_STANDARDS_TEXT:"Use of proven concepts",PRINCIPLES_EASY_TITLE:"Easy & Fair",PRINCIPLES_EASY_TEXT:"Reduce the complexity of your IT systems",PRINCIPLES_BUSINESS_TITLE:"Business",PRINCIPLES_BUSINESS_TEXT:"Focus on your core business",PORTFOLIO_SOFTWARE_TITLE:"Software",PORTFOLIO_SOFTWARE_TEXT:"Development of native, web and cross-platform applications",PORTFOLIO_MOBILE_TITLE:"Mobile",PORTFOLIO_MOBILE_TEXT:"Mobile development for iOS and Android",PORTFOLIO_BTC_TITLE:"Blockchain",PORTFOLIO_BTC_TEXT:"Development and integration of blockchain solutions",PORTFOLIO_SERVICES_TITLE:"Services",PORTFOLIO_SERVICES_TEXT:"Integration of services and migration of data",PORTFOLIO_TRAINING_TITLE:"Training",PORTFOLIO_TRAINING_TEXT:"Sharing knowledge, new concepts and methods",PRINCIPLES_TDD_TITLE:"tdd",PRINCIPLES_TDD_TEXT:"No production code without unit-tests",PRINCIPLES_PP_TITLE:"Pair Programming",PRINCIPLES_PP_TEXT:"Solutions in the team are more sustainable in the long term",PRINCIPLES_CC_TITLE:"clean code",PRINCIPLES_CC_TEXT:"Principles and practices to achieve more quality",PRINCIPLES_AGILE_TITLE:"agile",PRINCIPLES_AIGLE_TEXT:"Solve complex challenges in iterations",OWNER:"Owner",SOURCE_FOR_IMAGES:"Sources for Pictures & Fonts",BUILD_WITH:"Created with React",SOURCE_CODE:"Source Code",GITHUB_PAGE_LINK:"View on Github ",GITHUB_SUBTITLE:"on Github",NAVIGATION_DEVELOPMENT:"Development",NAVIGATION_CONSULTING:"Consulting",NAVIGATION_PROJECTS:"Projects",NAVIGATION_SENDTOKODI:"SendToKodi",SENDTOKODI_DESCRIPTION_LABEL:"Description",SENDTOKODI_SCREENSHOTS_LABEL:"Screenshots",SENDTOKODI_REVIEWS:"Reviews",SENDTOKODI_SUPPORTED_ADDONS_LABEL:"Supported Addons",SENDTOKODI_DESCRIPTION:"With SendToKodi you can send links directly from various apps. You just have to open the share menu at the video or track and choose SendToKodi from the available apps. Then you can send the link to Kodi."}};n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),function(e){e[e.de=0]="de",e[e.en=1]="en"}(a||(a={}));var i=function(){return window.sessionStorage.getItem("teufel-it-language-code")||"de"},o=function(e,t){var n=t||i();return r[n]&&r[n][e]?r[n][e]:"key-not-found ["+e+"]"}},147:function(e,t,n){e.exports=n.p+"static/lines-1c2d10c63aca0b8bfd30d30a872a2878.png"},148:function(e,t,n){"use strict";var a=n(0),r=n(145),i={fontSize:"30px",letterSpacing:"10px"};t.a=function(e){return a.createElement("div",{className:"text-uppercase",style:i},Object(r.b)(e.title))}},149:function(e,t,n){e.exports=n.p+"static/paper-8700d9ec59e26ed45f894baa0c0a5084.png"},150:function(e,t,n){"use strict";var a=n(0),r=n(145),i={backgroundImage:"url("+n(149)+")",color:"white",textAlign:"left",fontSize:"small"},o={color:"white"},s={fontSize:"medium"};t.a=function(){return a.createElement("div",{className:"row",style:i},a.createElement("div",{className:"container py-3"},a.createElement("p",null,"© 2018 Teufel-IT"),a.createElement("div",{className:"row"},a.createElement("div",{className:"col-xs-12 col-md-3 col-lg-3 py-3"},a.createElement("div",{style:s},Object(r.b)("OWNER")),a.createElement("br",null),a.createElement("div",null,"Tristan Teufel"),a.createElement("div",null,"Werkstr.10a"),a.createElement("div",null,"D-77815 Bühl")),a.createElement("div",{className:"col-xs-12 col-md-3 col-lg-3 py-3"},a.createElement("div",{style:s},Object(r.b)("SOURCE_CODE")),a.createElement("br",null),a.createElement("div",null,a.createElement("a",{style:o,href:"https://github.com/firsttris/teufel-it-react",rel:"noopener noreferrer",target:"_blank"},Object(r.b)("GITHUB_PAGE_LINK"),a.createElement("i",{className:"fab fa-github","aria-hidden":"true"})))),a.createElement("div",{className:"col-xs-12 col-md-3 col-lg-3 py-3"},a.createElement("div",{style:s},Object(r.b)("SOURCE_FOR_IMAGES")),a.createElement("br",null),a.createElement("div",null,a.createElement("a",{href:"http://unsplash.com",style:o,target:"_blank",rel:"noopener noreferrer"},"www.unsplash.com"," ")),a.createElement("div",null,a.createElement("a",{href:"http://shutterstock.com",style:o,target:"_blank",rel:"noopener noreferrer"},"www.shutterstock.com"," ")),a.createElement("div",null,a.createElement("a",{href:"http://fontawesome.io",style:o,target:"_blank",rel:"noopener noreferrer"},"www.fontawesome.io"))),a.createElement("div",{className:"col-xs-12 col-md-3 col-lg-3 py-3"},a.createElement("div",{style:s},Object(r.b)("CONTACT_TITLE")),a.createElement("br",null),a.createElement("div",null,a.createElement("a",{href:"tel:+4917645744166",style:o},"+49 (0) 176 457 44 1 66")),a.createElement("div",null,a.createElement("a",{href:"mailto:info@teufel-it.de",style:o},"info@teufel-it.de")),a.createElement("div",null,"UST-ID DE304672147")))))}},151:function(e,t,n){"use strict";var a=n(0),r=n(145),i=n(148);t.a=function(e){return a.createElement("div",{className:"row py-3",style:e.style},a.createElement("div",{className:"col"},a.createElement(i.a,{title:e.title}),e.text?Object(r.b)(e.text):null))}},153:function(e,t,n){"use strict";var a=n(0),r=n(148),i=n(154),o={margin:"10px",color:"#f00",textDecoration:"none"},s=function(e){return a.createElement("a",{className:"btn btn-outline-dark",style:o,target:"_blank",rel:"noopener noreferrer",href:e.url},a.createElement("i",{className:i("fa-2x",e.icon),"aria-hidden":"true"}))},l={fontSize:"30px",letterSpacing:"10px"};t.a=function(){return a.createElement("div",{className:"row py-3 text-center"},a.createElement("div",{className:"col"},a.createElement("span",{className:"text-uppercase",style:l},a.createElement(r.a,{title:"CONTACT_TITLE"})),a.createElement("div",null,a.createElement(s,{icon:"fas fa-phone",url:"tel:+49 176 45744166"}),a.createElement(s,{icon:"fas fa-envelope",url:"mailto:info@teufel-it.de"}),a.createElement(s,{icon:"fab fa-xing-square",url:"https://www.xing.com/profile/Tristan_Teufel"}),a.createElement(s,{icon:"fab fa-linkedin",url:"https://de.linkedin.com/pub/tristan-teufel/8a/30a/b5"}),a.createElement(s,{icon:"fab fa-github",url:"https://github.com/firsttris"}))))}},155:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(32),n(73);var a=n(7),r=n.n(a),i=n(0),o={position:"relative",opacity:.65,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"400px"},s=function(e){function t(t){var n;return(n=e.call(this,t)||this).setToScroll=function(e){o.backgroundAttachment=e.matches?"scroll":"fixed",n.forceUpdate()},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.match=window.matchMedia("(max-width: 575px)"),this.ieHack=window.matchMedia("all and (-ms-high-contrast: none), (-ms-high-contrast: active)"),this.match.addListener(this.setToScroll),this.ieHack.addListener(this.setToScroll),o.backgroundAttachment=window.innerWidth<575?"scroll":"fixed"},n.componentWillUnmount=function(){this.match.removeListener(this.setToScroll),this.ieHack.removeListener(this.setToScroll)},n.render=function(){return i.createElement("div",{className:"row"},i.createElement("div",{className:"col",style:{padding:0}},i.createElement("div",{style:Object.assign({},o,{height:this.props.height,backgroundImage:"url("+this.props.image+")"})})))},t}(i.Component)},156:function(e,t,n){"use strict";var a=n(0),r=n(145),i={position:"absolute",top:"200px",width:"100%"},o={backgroundColor:"#4B4B4B",display:"inline-block"},s={fontSize:"35px",letterSpacing:"7px",color:"#f00"},l={fontSize:"15px",letterSpacing:"5px",color:"white"};t.a=function(){return a.createElement("div",{className:"row",style:i},a.createElement("div",{className:"col"},a.createElement("div",{className:"p-3",style:o},a.createElement("div",{style:s},Object(r.b)("HEADER_TITLE")),a.createElement("div",{className:"pt-3",style:l},Object(r.b)("HEADER_SUBTITLE")))))}},157:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},158:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return T}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(146),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(157),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var E=n(33);n.d(t,"parsePath",function(){return E.a});var T=r.a.createContext({}),d=function(e){return r.a.createElement(T.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},162:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(55),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},164:function(e,t,n){"use strict";var a=n(0),r=n(153),i=n(155),o=n(156),s=n(150),l=n(7),c=n.n(l),u=n(145),E=(n(158),function(e){function t(t){var n;return(n=e.call(this,t)||this).onMouseLeave=function(){n.setState({flipped:!1})},n.onMouseEnter=function(){n.setState({flipped:!0})},n.onClick=function(){n.setState({flipped:!n.state.flipped})},n.state={flipped:!1},n}return c()(t,e),t.prototype.render=function(){var e={width:"100%",transformStyle:"preserve-3d",transition:"transform 1s linear",transform:"rotateY(0deg)"};return e.transform=this.state.flipped?"rotateY(180deg)":"rotateY(0deg)",a.createElement("div",{className:this.props.class,style:{perspective:"800px",height:"250px"},onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,onClick:this.onClick},a.createElement("div",{style:e},a.createElement("div",{className:"cards"},a.createElement("i",{className:this.props.icon,"aria-hidden":"true",style:{fontSize:"10em",color:"#f00"}}),a.createElement("div",{className:"text-uppercase",style:{fontSize:"1.5em"}},Object(u.b)(this.props.title))),a.createElement("div",{className:"cards",style:{transform:"rotateY(180deg)"}},a.createElement("div",{className:"p-2",style:{border:"1px solid #f00",borderRadius:"5px",width:"50%",margin:"auto",height:"175px",display:"flex",alignItems:"center"}},Object(u.b)(this.props.text)))))},t}(a.Component)),T=function(e){return a.createElement("div",{className:"row py-3"},e.cards.map(function(e,t){return a.createElement(E,{key:t,class:e.gridClass,icon:e.iconClass,title:e.title,text:e.text})}))},d=n(151),m=function(e){return a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},a.createElement(d.a,{title:e.json.title,text:e.json.text}),a.createElement(T,{cards:e.json.cards})))},I={display:"inline-flex",alignItems:"center"},p={marginLeft:"10px",fontSize:"20px"},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).onMouseLeave=function(){n.setState({flipped:!1})},n.onMouseEnter=function(){n.setState({flipped:!0})},n.onClick=function(){n.setState({flipped:!0})},n.state={flipped:!1},n}return c()(t,e),t.prototype.render=function(){var e={transition:"color 2s linear 1s"};return e.color=this.state.flipped?"white":"#f00",a.createElement("div",{className:"py-2 col-xs-12 col-md-6 col-lg-6",onMouseLeave:this.onMouseLeave,onMouseEnter:this.onMouseEnter,onClick:this.onClick},a.createElement("div",{style:I},a.createElement("span",{style:e},a.createElement("i",{className:this.props.icon})),a.createElement("span",{className:"text-uppercase",style:p},Object(u.b)(this.props.title))),a.createElement("p",null,Object(u.b)(this.props.text)))},t}(a.Component),O=function(e){return a.createElement("div",{className:"row py-3",style:e.style},e.cards.map(function(e,t){return a.createElement(f,{key:t,icon:e.iconClass,title:e.title,text:e.text})}))},h={backgroundImage:"url("+n(149)+")",color:"white"},S=function(e){return a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},a.createElement(d.a,{title:e.json.title,text:e.json.text,style:h}),a.createElement(O,{cards:e.json.cards,style:h})))},_={textAlign:"center",backgroundImage:"url("+n(147)+")"};t.a=function(e){return a.createElement("div",{className:"container-fluid",style:_},a.createElement(i.a,{image:e.firstImage,height:"550px"}),a.createElement(o.a,null),a.createElement(m,{json:e.json.portfolio}),a.createElement(i.a,{image:e.middleImage,height:"350px"}),a.createElement(S,{json:e.json.principles}),a.createElement(i.a,{image:e.lastImage,height:"350px"}),a.createElement(r.a,null),a.createElement(s.a,null))}},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){e.exports=n.p+"static/much_code-4a6cbcd95e30d0d8f5deed6ac8cfb695.jpg"},189:function(e,t,n){e.exports=n.p+"static/3dCode-c61eb5c95131e2bfec485e5159212ad5.jpg"}}]);
//# sourceMappingURL=component---src-templates-development-tsx-195191d404bd4c044062.js.map