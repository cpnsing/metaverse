(this["webpackJsonpneed-a-web-developer-21043817"]=this["webpackJsonpneed-a-web-developer-21043817"]||[]).push([[12],{566:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(139),i=a(562),l=a(548),c=a(350),m=a(25),s=a(540),d=a(59),p=Object(s.a)((function(e){return{bannerbox:{"& h4":{fontSize:"20px",fontWeight:"400",color:e.palette.text.cotext},"& h6":{color:e.palette.text.subtext},"& p":{fontSize:"14px",fontWeight:"300",color:e.palette.text.cardtext}},mainimg:{position:"relative",overflow:"hidden"},mainimg1:{width:"100%",backgroundPosition:"center !important",backgroundSize:"cover !important",backgroundRepeat:" no-repeat !important",borderRadius:"10px"},institutebtn:{position:"absolute",bottom:"10px"},downbox:{marginTop:"16px","& button":{marginTop:"15px"}}}}));t.a=function(e){var t=p(),a=Object(m.g)(),s=(Object(n.useContext)(d.b),e.data),u=(e.type,e.index),x=function(){var e=document.getElementById("imagecard"+u).offsetWidth-20;document.getElementById("imagecard"+u).style.height=e+"px"};return Object(n.useEffect)((function(){x()}),[s,u]),Object(n.useEffect)((function(){return window.addEventListener("resize",x),function(){return window.removeEventListener("resize",x)}}),[]),r.a.createElement(o.a,{elevation:1},r.a.createElement(i.a,{className:t.mainimg,display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(i.a,{className:t.mainimg1,id:"imagecard".concat(u),style:{background:"url("+s.image+")"},onClick:function(){"plot"===(null===s||void 0===s?void 0:s.type)?a.push("/plot-details"):a.push("/profile")}}),"plot"===(null===s||void 0===s?void 0:s.type)&&r.a.createElement(i.a,{className:t.institutebtn},r.a.createElement(l.a,{onClick:function(){"plot"===s.type&&a.push("/institute-details")},variant:"contained",color:"primary",size:"small"},"Setup Insitiute"))),r.a.createElement(i.a,null,r.a.createElement(i.a,{className:t.downbox},r.a.createElement(i.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.a.createElement(c.a,{variant:"h5"},s.text1),r.a.createElement(c.a,{variant:"body1",color:"secondary"},s.text2)),r.a.createElement(i.a,null,r.a.createElement(c.a,{variant:"body2",color:"secondary"},s.text3)),"plot"===(null===s||void 0===s?void 0:s.type)&&r.a.createElement(l.a,{variant:"contained",color:"primary",fullWidth:!0},"BUY"))))}},574:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(1),r=a.n(n),o=a(592);function i(e){var t=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("title",null,t)),r.a.createElement("div",null,a))}},584:function(e,t,a){"use strict";var n=a(585),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,o,i,l,c,m,s=!1;t||(t={}),a=t.debug||!1;try{if(i=n(),l=document.createRange(),c=document.getSelection(),(m=document.createElement("span")).textContent=e,m.ariaHidden="true",m.style.all="unset",m.style.position="fixed",m.style.top=0,m.style.clip="rect(0, 0, 0, 0)",m.style.whiteSpace="pre",m.style.webkitUserSelect="text",m.style.MozUserSelect="text",m.style.msUserSelect="text",m.style.userSelect="text",m.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=r[t.format]||r.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(m),l.selectNodeContents(m),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(d){a&&console.error("unable to copy using execCommand: ",d),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(d){a&&console.error("unable to copy using clipboardData: ",d),a&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),m&&document.body.removeChild(m),i()}return s}},585:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},608:function(e,t,a){"use strict";var n=a(609).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},609:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=l(a(1)),o=l(a(584)),i=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){E(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=b(e);if(t){var r=b(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return g(this,a)}}function g(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(c,e);var t,a,n,l=x(c);function c(){var e;d(this,c);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return E(f(e=l.call.apply(l,[this].concat(a))),"onClick",(function(t){var a=e.props,n=a.text,i=a.onCopy,l=a.children,c=a.options,m=r.default.Children.only(l),s=(0,o.default)(n,c);i&&i(n,s),m&&m.props&&"function"===typeof m.props.onClick&&m.props.onClick(t)})),e}return t=c,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),a=s(e,i),n=r.default.Children.only(t);return r.default.cloneElement(n,m(m({},a),{},{onClick:this.onClick}))}}])&&p(t.prototype,a),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.default.PureComponent);t.CopyToClipboard=v,E(v,"defaultProps",{onCopy:void 0,options:void 0})},610:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(562),i=a(543),l=a(540),c=a(566),m=[{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card2.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card3.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card4.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/plot.jpeg",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands",type:"plot"}],s=Object(l.a)((function(e){return{bannerbox:{}}}));t.a=function(){var e=s();return r.a.createElement(o.a,{className:e.bannerbox},r.a.createElement(i.a,{item:!0,lg:12,md:12,sm:12,xs:12},r.a.createElement(o.a,null,r.a.createElement(i.a,{container:!0,spacing:2},m.map((function(e,t){return r.a.createElement(i.a,{item:!0,lg:4,md:4,sm:12,xs:12},r.a.createElement(c.a,{data:e,index:t}))}))))))}},611:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(562),i=a(543),l=a(540),c=a(566),m=[{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card2.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card3.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card4.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"}],s=Object(l.a)((function(e){return{bannerbox:{}}}));t.a=function(){var e=s();return r.a.createElement(o.a,{className:e.bannerbox},r.a.createElement(i.a,{item:!0,lg:12,md:12,sm:12,xs:12},r.a.createElement(o.a,null,r.a.createElement(i.a,{container:!0,spacing:2},m.map((function(e,t){return r.a.createElement(i.a,{item:!0,lg:4,md:4,sm:12,xs:12},r.a.createElement(c.a,{data:e,index:t}))}))))))}},612:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(562),i=a(543),l=a(540),c=a(566),m=[{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card2.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card3.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card4.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"}],s=Object(l.a)((function(e){return{bannerbox:{}}}));t.a=function(){var e=s();return r.a.createElement(o.a,{className:e.bannerbox},r.a.createElement(i.a,{item:!0,lg:12,md:12,sm:12,xs:12},r.a.createElement(o.a,null,r.a.createElement(i.a,{container:!0,spacing:2},m.map((function(e,t){return r.a.createElement(i.a,{item:!0,lg:4,md:4,sm:12,xs:12},r.a.createElement(c.a,{data:e,index:t}))}))))))}},613:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(562),i=a(543),l=a(540),c=a(566),m=[{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card2.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card3.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card4.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"}],s=Object(l.a)((function(e){return{bannerbox:{}}}));t.a=function(){var e=s();return r.a.createElement(o.a,{className:e.bannerbox},r.a.createElement(i.a,{item:!0,lg:12,md:12,sm:12,xs:12},r.a.createElement(o.a,null,r.a.createElement(i.a,{container:!0,spacing:2},m.map((function(e,t){return r.a.createElement(i.a,{item:!0,lg:4,md:4,sm:12,xs:12},r.a.createElement(c.a,{data:e,index:t}))}))))))}},614:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(562),i=a(543),l=a(540),c=a(566),m=[{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card2.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card3.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card4.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"}],s=Object(l.a)((function(e){return{bannerbox:{}}}));t.a=function(){var e=s();return r.a.createElement(o.a,{className:e.bannerbox},r.a.createElement(i.a,{item:!0,lg:12,md:12,sm:12,xs:12},r.a.createElement(o.a,null,r.a.createElement(i.a,{container:!0,spacing:2},m.map((function(e,t){return r.a.createElement(i.a,{item:!0,lg:4,md:4,sm:12,xs:12},r.a.createElement(c.a,{data:e,index:t}))}))))))}},615:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(562),i=a(543),l=a(540),c=a(566),m=[{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card2.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card3.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card4.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"}],s=Object(l.a)((function(e){return{bannerbox:{}}}));t.a=function(){var e=s();return r.a.createElement(o.a,{className:e.bannerbox},r.a.createElement(i.a,{item:!0,lg:12,md:12,sm:12,xs:12},r.a.createElement(o.a,null,r.a.createElement(i.a,{container:!0,spacing:2},m.map((function(e,t){return r.a.createElement(i.a,{item:!0,lg:4,md:4,sm:12,xs:12},r.a.createElement(c.a,{data:e,index:t}))}))))))}},616:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(562),i=a(543),l=a(540),c=a(566),m=[{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card2.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card3.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card4.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"},{image:"images/card1.png",text1:"Ovlivion",text2:"10/04/2022",text3:"Holographic Hands"}],s=Object(l.a)((function(e){return{bannerbox:{}}}));t.a=function(){var e=s();return r.a.createElement(o.a,{className:e.bannerbox},r.a.createElement(i.a,{item:!0,lg:12,md:12,sm:12,xs:12},r.a.createElement(o.a,null,r.a.createElement(i.a,{container:!0,spacing:2},m.map((function(e,t){return r.a.createElement(i.a,{item:!0,lg:4,md:4,sm:12,xs:12},r.a.createElement(c.a,{data:e,index:t}))}))))))}},881:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(35),o=a(1),i=a.n(o),l=a(540),c=a(562),m=a(542),s=a(350),d=a(548),p=a(543),u=a(545),x=a(546),g=(a(574),a(608),a(101)),f=a(192),b=a(575),E=a(617),v=(a(610),a(611),a(612),a(613),a(614),a(615),a(616),a(59)),h=Object(l.a)((function(e){var t,a,n,o,i;return{root:(t={position:"relative",zIndex:1,padding:"160px 0px 100px"},Object(r.a)(t,e.breakpoints.down("sm"),{padding:"120px 0px 60px"}),Object(r.a)(t,"& label",{color:e.palette.text.cotext,fontFamily:"'Roboto', sans-serif",fontSize:"16px",fontWeight:"300"}),t),TabBox:Object(r.a)({display:"flex",justifyContent:"flex-start",alignItems:"center",flexWrap:"wrap",marginTop:"30px","& .buttonBox":{"& a":(a={width:"100%",cursor:"pointer",fontWeight:"400",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",fontFamily:"'Roboto', sans-serif",color:e.palette.text.subtext,paddingTop:"16px",margin:"0px 70px 0px 0px",paddingBottom:"16px"},Object(r.a)(a,e.breakpoints.down("xs"),{fontSize:"12px",margin:"0px"}),Object(r.a)(a,"&:hover",{textDecoration:"none",color:"#9C162E"}),Object(r.a)(a,"&.active",{color:e.palette.text.cotext,paddingTop:"16px",paddingBottom:"16px",fontSize:"20px",backgroundColor:"#9C162E",borderRadius:"50px",fontWeight:"300"}),a)}},e.breakpoints.down("xs"),{display:"block"}),mainbox:{"& h2":{color:e.palette.text.cotext},"& .subboxes":{"& h4":{fontSize:"21px",fontWeight:"400",marginTop:"15px",color:e.palette.primary.main},"& p":{fontSize:"12px",fontWeight:"300",color:e.palette.text.subtext},"& h2":{color:e.palette.text.cotext,fontSize:"16px",fontWeight:"400",marginTop:"16px"},"& h5":{color:e.palette.text.subtext,fontSize:"16px",fontWeight:"300",marginTop:"6px"}},"& .allcontent":{background:e.palette.background.profilebg,border:"1.02273px solid #281D42",boxShadow:"0px 4.09091px 20.4545px #14101B",backdropFilter:"blur(100px)",borderRadius:"10.2273px",position:"relative",overflow:"hidden",padding:"15px"},"& .allcontent1":{background:e.palette.background.profilebg,border:"1.02273px solid #FFFFFF",boxShadow:"0px 4px 20px rgba(20, 16, 27, 0.2)",backdropFilter:"blur(100px)",borderRadius:"10.2273px",position:"relative",overflow:"hidden",padding:"15px"},"& .boxImage":{position:"relative",display:"inline-block",width:"208px"},"& .detailbox":{border:"1.02273px solid rgba(81, 51, 101, 0.25)",backdropFilter:"blur(100px)",borderRadius:"10.2273px",padding:"20px 10px",marginTop:"60px","& h6":{color:e.palette.text.subtext},"& h3":{color:e.palette.text.cotext,fontSize:"16px",fontWeight:"400"}},"& .iconboxes":{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"30px",marginBottom:"40px","& svg":{color:e.palette.text.textfooter,"&:hover":{color:"#9C162E"}}}},headingtext:(i={display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",paddingBottom:"35px"},Object(r.a)(i,e.breakpoints.down("sm"),{display:"block"}),Object(r.a)(i,"& h1",(n={fontSize:"70px",fontWeight:"600",color:e.palette.primary.main,marginBottom:"16px"},Object(r.a)(n,e.breakpoints.down("md"),{fontSize:"50px"}),Object(r.a)(n,e.breakpoints.down("sm"),{fontSize:"40px"}),Object(r.a)(n,e.breakpoints.down("xs"),{fontSize:"30px"}),n)),Object(r.a)(i,"& .rightbox",(o={display:"flex",justifyContent:"space-between"},Object(r.a)(o,e.breakpoints.down("sm"),{display:"block"}),Object(r.a)(o,"& button",Object(r.a)({margin:"0px 10px",fontSize:"20px"},e.breakpoints.down("sm"),{margin:"0px  0px 10px"})),o)),i),buttonedit:{marginTop:"20px",marginBottom:"16px","& button":{background:"linear-gradient(260.62deg, #7C162E -41.31%, #9C162E 107.21%)",boxShadow:" 0px 0px 4px rgba(116, 22, 46, 0.4)",borderRadius:"32px",fontSize:"16px",fontWeight:"300",color:"#fff"}},textfieldbox:{border:"none",color:"#fff",background:"none !important",marginBottom:"20px","& input":{marginTop:"8px",background:"none !important",marginBottom:"4px"},"& .MuiOutlinedInput-inputMultiline":{background:"none"},"& .MuiOutlinedInput-input":{borderRadius:"0px"}},profilebox:Object(r.a)({width:"100%",maxWidth:"70%"},e.breakpoints.down("sm"),{width:"100%",maxWidth:"100%"}),rightdetailbox:{"& h2":{color:e.palette.text.cotext,marginBottom:"16px"}},fieldmargin:Object(r.a)({marginTop:"51px"},e.breakpoints.down("sm"),{marginTop:"0px"})}}));t.default=function(e){var t,a,r=h(),l=Object(o.useState)("MyNft"),y=Object(n.a)(l,2),O=(y[0],y[1],Object(o.useContext)(v.b));return i.a.createElement(c.a,{className:r.root},i.a.createElement(c.a,{className:"DARK"===(null===O||void 0===O||null===(t=O.settings)||void 0===t?void 0:t.theme)?"uploadmainbox":"uploadmainbox1"},i.a.createElement("div",{className:"shade1"}),i.a.createElement("div",{className:"shade2"}),i.a.createElement("div",{className:"shade3"}),i.a.createElement(c.a,{className:r.mainbox},i.a.createElement(m.a,null,i.a.createElement(c.a,{className:r.headingtext},i.a.createElement(s.a,{variant:"h1"},"Edit Profile"),i.a.createElement(c.a,{className:"rightbox"},i.a.createElement(d.a,{variant:"contained",fullWidth:!0,color:"primary"},"Save"),i.a.createElement(d.a,{variant:"outlined",color:"primary",fullWidth:!0,className:"buttonoutlined"},"Cancel"))),i.a.createElement(p.a,{container:!0,spacing:3},i.a.createElement(p.a,{item:!0,lg:3,sm:6,md:3,xs:12},i.a.createElement(c.a,{mb:3},i.a.createElement(s.a,{variant:"h2"},"Profile")),i.a.createElement(c.a,{className:"subboxes"},i.a.createElement(c.a,{className:"DARK"===(null===O||void 0===O||null===(a=O.settings)||void 0===a?void 0:a.theme)?"allcontent":"allcontent1"},i.a.createElement(c.a,{textAlign:"center"},i.a.createElement(c.a,{className:"boxImage"},i.a.createElement("img",{src:"images/profilepic.png"})),i.a.createElement(c.a,{display:"flex",justifyContent:"center",alignItems:"center"},i.a.createElement(s.a,{variant:"h4"},"Allen Jolly")),i.a.createElement(c.a,{mt:1,display:"flex",alignItems:"center",justifyContent:"center"},i.a.createElement(u.a,{style:{padding:"10px 5px"}},i.a.createElement(g.a,{style:{fontSize:"14px",color:"#9C162E"}})),i.a.createElement(s.a,{variant:"body2"},"New York, United States")),i.a.createElement(c.a,{className:r.buttonedit},i.a.createElement(d.a,{variant:"contained",fullWidth:!0},"Upload New Avatar")),i.a.createElement(d.a,{variant:"outlined",color:"primary",fullWidth:!0},"Delete")),i.a.createElement(c.a,{mt:1},i.a.createElement(s.a,{variant:"h2"},"Bio :"),i.a.createElement(s.a,{variant:"h5"},"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..")),i.a.createElement(c.a,{className:"iconboxes"},i.a.createElement(u.a,null,i.a.createElement(f.b,null)),i.a.createElement(u.a,null,i.a.createElement(b.d,null)),i.a.createElement(u.a,null,i.a.createElement(b.a,null)),i.a.createElement(u.a,null,i.a.createElement(E.b,null)))))),i.a.createElement(p.a,{item:!0,lg:9,sm:6,md:9,xs:12},i.a.createElement(c.a,{className:r.rightdetailbox},i.a.createElement(c.a,{mb:3},i.a.createElement(s.a,{variant:"h2"},"Basic Info")),i.a.createElement(p.a,{container:!0,spacing:2},i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement("label",null,"FIRST NAME"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Enter your first name",name:"firstName",fullWidth:!0,className:r.textfieldbox}))),i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement("label",null,"LAST NAME"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Enter your last name",name:"firstName",fullWidth:!0,className:r.textfieldbox}))),i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement("label",null,"Address"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Enter your address",name:"firstName",fullWidth:!0,className:r.textfieldbox}))),i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement("label",null,"PHONE"),i.a.createElement(c.a,{className:r.profilebox},i.a.createElement(x.a,{id:"standard-basic",placeholder:"Enter your contact details",name:"firstName",fullWidth:!0,className:r.textfieldbox}))),i.a.createElement(p.a,{item:!0,lg:12,md:12,sm:12,xs:12},i.a.createElement("label",null,"Email"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Enter your email...",name:"firstName",fullWidth:!0,className:r.textfieldbox}))),i.a.createElement(p.a,{item:!0,lg:12,md:12,sm:12,xs:12},i.a.createElement(s.a,{variant:"h2"},"Biography"),i.a.createElement(c.a,null,i.a.createElement(x.a,{placeholder:"Enter your message",type:"text",size:"small",variant:"outlined",rows:5,multiline:!0,fullWidth:!0,className:r.textfieldbox}))),i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(s.a,{variant:"h2"},"External Links"),i.a.createElement("label",null,"FACEBOOK URL :"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Paste your link here...",name:"firstName",fullWidth:!0,className:r.textfieldbox}))),i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(c.a,{className:r.fieldmargin},i.a.createElement("label",null,"TWITTER URL :"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Enter your email here...",name:"firstName",fullWidth:!0,className:r.textfieldbox})))),i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement("label",null,"INSTAGRAM URL :"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Paste your link here...",name:"firstName",fullWidth:!0,className:r.textfieldbox}))),i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement("label",null,"LINKEDIN URL :"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Paste yourt link here...",name:"firstName",fullWidth:!0,className:r.textfieldbox}))),i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(s.a,{variant:"h2"},"External Links"),i.a.createElement("label",null,"FACEBOOK URL :"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Paste your link here...",name:"firstName",fullWidth:!0,className:r.textfieldbox}))),i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(c.a,{className:r.fieldmargin},i.a.createElement("label",null,"TWITTER URL :"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Enter your email here...",name:"firstName",fullWidth:!0,className:r.textfieldbox})))),i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement("label",null,"INSTAGRAM URL :"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Paste your link here...",name:"firstName",fullWidth:!0,className:r.textfieldbox}))),i.a.createElement(p.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement("label",null,"LINKEDIN URL :"),i.a.createElement(c.a,null,i.a.createElement(x.a,{id:"standard-basic",placeholder:"Paste yourt link here...",name:"firstName",fullWidth:!0,className:r.textfieldbox})))))))))))}}}]);
//# sourceMappingURL=12.245cc4a6.chunk.js.map