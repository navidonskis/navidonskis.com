webpackJsonp([3],{146:function(e,t,n){e.exports=n.p+"static/bg-01.3f80f12f.jpg"},147:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),f=r(s),p=n(1),d=r(p),m=n(148),h=r(m),y=n(150),b=r(y),v=n(151),g=r(v),_=n(153),w=r(_),k=n(155),E=r(k),O=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.bg,n=e.children,r=e.head,a=o(e,["bg","children","head"]);return f.default.createElement("div",c({className:"layout"},a),f.default.createElement(h.default,r),f.default.createElement(g.default,null),f.default.createElement(E.default,{bg:t}),f.default.createElement(b.default,null,n),f.default.createElement(w.default,null))}}]),t}(s.Component);O.propTypes={bg:d.default.string,head:d.default.object},t.default=O},148:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),f=n(26),p=n(1),d=r(p),m=n(149),h=r(m),y=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"getDefaultMeta",value:function(){return[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@navidonskis"},{name:"twitter:creator",content:"@navidonskis"},{name:"og:type",content:"website"},{name:"og:url",content:this.props.location}]}},{key:"getMeta",value:function(){var e=[];return this.props.description&&(e.push({name:"description",content:this.props.description}),e.push({name:"og:description",content:this.props.description}),e.push({name:"twitter:description",content:this.props.description})),this.props.title&&(e.push({name:"og:title",content:this.props.title}),e.push({name:"twitter:title",content:this.props.title})),[].concat(e,o(this.getDefaultMeta())).sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})}},{key:"render",value:function(){var e=this.getMeta(),t=JSON.stringify(h.default);return s.default.createElement(f.Head,null,this.props.title&&s.default.createElement("title",null,this.props.title),e&&e.map(function(e,t){return s.default.createElement("meta",{key:t,name:e.name,content:e.content})}),s.default.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/apple-touch-icon.png"}),s.default.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/favicon-32x32.png"}),s.default.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/favicon-16x16.png"}),s.default.createElement("link",{rel:"manifest",href:"/assets/manifest.json"}),s.default.createElement("link",{rel:"mask-icon",href:"/assets/safari-pinned-tab.svg",color:"#000000"}),s.default.createElement("link",{rel:"shortcut icon",href:"/assets/favicon.ico"}),s.default.createElement("meta",{name:"apple-mobile-web-app-title",content:"navidonskis"}),s.default.createElement("meta",{name:"application-name",content:"navidonskis"}),s.default.createElement("meta",{name:"msapplication-config",content:"/assets/browserconfig.xml"}),s.default.createElement("meta",{name:"theme-color",content:"#ffffff"}),s.default.createElement("script",{type:"application/ld+json"},t))}}]),t}(u.Component);y.propTypes={title:d.default.string,description:d.default.string,location:d.default.object},t.default=y},149:function(e,t){e.exports={"@context":"https://schema.org","@type":"Person",name:"Donatas Navidonskis",url:"https://www.navidonskis.com",homeLocation:{type:"Person",address:"Vilnius, Lithuania"},email:"donatas@navidonskis.com",telephone:"+37067078495",givenName:"Donatas",familyName:"Navidonskis",jobTitle:"Software Engineer",sameAs:["https://www.facebook.com/donatas.navidonskis","https://twitter.com/navidonskis","https://www.linkedin.com/in/navidonskis/","https://github.com/navidonskis/","https://github.com/doniz/"]}},150:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(l),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("main",{className:"main",role:"main"},this.props.children)}}]),t}(l.Component);t.default=u},151:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=r(u),f=n(26),p=n(152),d=r(p),m=n(53),h=r(m),y=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleLogoClick=n.handleLogoClick.bind(n),n}return i(t,e),c(t,[{key:"handleLogoClick",value:function(){h.default.event({category:"Logo",action:"Clicked Link"})}},{key:"render",value:function(){return s.default.createElement("header",l({className:"header",role:"banner"},this.props),s.default.createElement("div",{className:"header--logo"},s.default.createElement(f.Link,{to:"/",onClick:this.handleLogoClick},"navidonskis")),s.default.createElement(d.default,null))}}]),t}(u.Component);t.default=y},152:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),u=r(c),s=n(26),f=n(53),p=r(f),d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleMobileClick=n.handleMobileClick.bind(n),n.handleOverflowBody=n.handleOverflowBody.bind(n),n.navigation=u.default.createRef(),n.state={open:!1},n}return i(t,e),l(t,[{key:"handleOverflowBody",value:function(){"undefined"!=typeof document&&(document.body.className=this.state.open?"mobile-menu":"")}},{key:"handleMobileClick",value:function(){this.setState({open:!this.state.open})}},{key:"handleClick",value:function(){p.default.event({category:"Navigation",action:"Clicked Link"}),this.handleOverflowBody()}},{key:"render",value:function(){return this.handleOverflowBody(),u.default.createElement("nav",{ref:this.navigation,role:"navigation",className:"navigation "+(this.state.open&&"navigation--open"),itemScope:!0,itemType:"https://schema.org/SiteNavigationElement"},u.default.createElement("svg",{width:"16",height:"14",className:"navigation--button",onClick:this.handleMobileClick},u.default.createElement("path",{d:"M12 6v2H0V6zm4-6v2H0V0zm0 12v2H0v-2z",fill:"currentColor",fillRule:"evenodd"})),u.default.createElement(s.NavLink,{exact:!0,to:"/",className:"navigation--link",onClick:this.handleClick},u.default.createElement("span",{itemProp:"name"},"Home")),u.default.createElement(s.NavLink,{to:"/about/",className:"navigation--link",onClick:this.handleClick},u.default.createElement("span",{itemProp:"name"},"About")))}}]),t}(c.Component);t.default=d},153:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),i=r(a),l=n(154),c=r(l),u=function(e){return i.default.createElement("footer",o({className:"footer",role:"contentinfo"},e),i.default.createElement(c.default,null),i.default.createElement("div",{className:"footer__info"},i.default.createElement("span",{className:"footer__info--col"},"© navidonskis.com"),i.default.createElement("span",{className:"footer__info--col"},i.default.createElement("a",{href:"mailto:donatas@navidonskis.com"},"donatas@navidonskis.com")),i.default.createElement("span",{className:"footer__info--col"},i.default.createElement("a",{href:"tel:+37067078495"},"+370 670 78495"))))};t.default=u},154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=[{type:"linkedin",url:"https://www.linkedin.com/in/navidonskis"},{type:"facebook",url:"https://www.facebook.com/donatas.navidonskis"},{type:"twitter",url:"https://twitter.com/navidonskis"},{type:"github",url:"https://github.com/doniz"}],i=function(){return o.default.createElement("nav",{className:"footer__networks",itemScope:!0,itemType:"http://schema.org/Person"},a.map(function(e,t){return o.default.createElement("a",{itemProp:"sameAs",className:"footer__networks--link",href:e.url,key:t},o.default.createElement("i",{className:"icons icons__"+e.type}))}))};t.default=i},155:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),u=r(c),s=n(1),f=r(s),p=n(146),d=r(p),m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e={backgroundImage:"url("+this.props.bg+")"};return u.default.createElement("section",{className:"landscape"},u.default.createElement("div",{className:"landscape__overlay"},u.default.createElement("div",{className:"landscape--background",style:e})))}}]),t}(c.Component);m.propTypes={bg:f.default.string},m.defaultProps={bg:d.default},t.default=m},156:function(e,t,n){!function(t,r){e.exports=r(n(0))}(0,function(e){"use strict";function t(e){return e.replace(/(-|:)(.)/g,function(e,t,n){return n.toUpperCase()})}function n(e){var n={};return e.split(";").filter(function(e){return""!==e.trim()}).forEach(function(e){var r,o=e.split(":");if(o.length>1){var a=function(e){return/^-ms-/.test(e)&&(e=e.substr(1)),t(e)}(o[0].trim()),i=(r=o.slice(1).join(":").trim(),/^\d+$/.test(r)?Number(r):r.replace(/'/g,'"'));n[a]=i}}),n}function r(c,u,s){var f,p=s.map._;if(c.nodeType===a.COMMENT)return null;if(c.nodeType===a.TEXT){var d=(f=c.textContent,l.innerHTML=f,l.textContent);return p?p(d):d}for(var m=c.tagName.toLowerCase(),h=s.map[m],y={},b=0;b<c.attributes.length;b++){var v=c.attributes[b].name,g=c.attributes[b].value;y[v]=g}y.key=u.toString();for(var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce(function(r,a){if(/^on.*/.test(a))return r;var i=a;/^(data|aria)-/.test(a)||(i=t(a));var l=o[i]||i;return r[l]="style"===l?n(e.style):e[a],r},{})}(y),w=[],k=0;k<c.childNodes.length;k++){var E=c.childNodes[k],O=u+"."+k;if(!(i.indexOf(m)>-1&&E.nodeType===a.TEXT&&(E.textContent=E.textContent.trim(),""===E.textContent))){var j=r(E,O,s);null!==j&&w.push(j)}}return"style"!==m||h||p?(0===w.length&&(w=null),h?e.createElement(h,_,w):p?p(m,_,w):e.createElement(m,_,w)):(_.dangerouslySetInnerHTML={__html:w[0]},e.createElement(m,_,null))}e=e&&e.hasOwnProperty("default")?e.default:e;var o={for:"htmlFor",class:"className",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},a={ELEMENT:1,TEXT:3,COMMENT:8},i=["table","tbody","thead","tfoot","tr"],l=document.createElement("div");return function(e){var t={map:(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).map||{}},n=document.createElement("div");n.innerHTML=e.trim();for(var o=[],a=0;a<n.childNodes.length;a++)o.push(n.childNodes[a]);var i=o.map(function(e,n){return r(e,n,t)}).filter(function(e){return null!==e});return 1===i.length?i[0]:i}})},54:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),i=n(26),l=n(156),c=r(l),u=n(147),s=r(u);t.default=(0,i.withRouteData)(function(e){var t=e.home,n=t.title,r=t.description,o=t.contents;return a.default.createElement(s.default,{head:{title:n,description:r}},(0,c.default)(o))})}});