(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{155:function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"a",function(){return m});var r=t(6),a=t(1);if(!a.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!r.h)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");function o(e){var n=Object(a.useRef)(null);return n.current||(n.current=Object(r.f)(e)),n.current}var i=!1;function c(){return i}var u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};function l(e){return e.current?Object(r.e)(e.current):"<unknown>"}var F=[];function s(){var e=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,a,o=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(c){a={error:c}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return i}(Object(a.useState)(0),2)[1];return Object(a.useCallback)(function(){e(function(e){return e+1})},[])}var f={};function d(e,n,t){if(void 0===n&&(n="observed"),void 0===t&&(t=f),c())return e();var o,i,u=(t.useForceUpdate||s)(),d=Object(a.useRef)(null);if(d.current||(d.current=new r.a("observer("+n+")",function(){u()})),Object(a.useDebugValue)(d,l),function(e){Object(a.useEffect)(function(){return e},F)}(function(){d.current.dispose()}),d.current.track(function(){try{o=e()}catch(n){i=n}}),i)throw d.current.dispose(),i;return o}function m(e,n){if(c())return e;var t,r,o,i=u({forwardRef:!1},n),l=e.displayName||e.name,F=function(n,t){return d(function(){return e(n,t)},l)};return F.displayName=l,t=i.forwardRef?Object(a.memo)(Object(a.forwardRef)(F)):Object(a.memo)(F),r=e,o=t,Object.keys(r).forEach(function(e){r.hasOwnProperty(e)&&!h[e]&&Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))}),t.displayName=l,t}var h={$$typeof:!0,render:!0,compare:!0,type:!0};function p(e){var n=e.children,t=e.render,r=n||t;return"function"!==typeof r?null:d(r)}function E(e,n,t,r,a){var o="children"===n?"render":"children",i="function"===typeof e[n],c="function"===typeof e[o];return i&&c?new Error("MobX Observer: Do not use children and render in the same time in`"+t):i||c?null:new Error("Invalid prop `"+a+"` of type `"+typeof e[n]+"` supplied to `"+t+"`, expected `function`.")}p.propTypes={children:E,render:E},p.displayName="Observer"},290:function(e,n,t){"use strict";var r=t(453),a=t(81),o=Object(a.a)(r.a).withConfig({displayName:"Avatar",componentId:"zzyv01-0"})(["border-radius:2px;filter:",";border:1px solid #00000010;"],function(e){return e.offline?"grayscale(100%)":"grayscale(0%)"});n.a=o},291:function(e,n,t){"use strict";n.a={BACKGROUND:"#EAEAEF",LightPink:"#FFB6C1","\u6d45\u7c89\u7ea2":"#FFB6C1",Pink:"#FFC0CB","\u7c89\u7ea2":"#FFC0CB",Crimson:"#DC143C","\u7329\u7ea2":"#DC143C",LavenderBlush:"#FFF0F5","\u8138\u7ea2\u7684\u6de1\u7d2b\u8272":"#FFF0F5",PaleVioletRed:"#DB7093","\u82cd\u767d\u7684\u7d2b\u7f57\u5170\u7ea2\u8272":"#DB7093",HotPink:"#FF69B4","\u70ed\u60c5\u7684\u7c89\u7ea2":"#FF69B4",DeepPink:"#FF1493","\u6df1\u7c89\u8272":"#FF1493",MediumVioletRed:"#C71585","\u9002\u4e2d\u7684\u7d2b\u7f57\u5170\u7ea2\u8272":"#C71585",Orchid:"#DA70D6","\u5170\u82b1\u7684\u7d2b\u8272":"#DA70D6",Thistle:"#D8BFD8","\u84df":"#D8BFD8",plum:"#DDA0DD","\u674e\u5b50":"#DDA0DD",Violet:"#EE82EE","\u7d2b\u7f57\u5170":"#EE82EE",Magenta:"#FF00FF","\u6d0b\u7ea2":"#FF00FF",Fuchsia:"#FF00FF","\u706f\u7b3c\u6d77\u68e0(\u7d2b\u7ea2\u8272)":"#FF00FF",DarkMagenta:"#8B008B","\u6df1\u6d0b\u7ea2\u8272":"#8B008B",Purple:"#800080","\u7d2b\u8272":"#800080",MediumOrchid:"#BA55D3","\u9002\u4e2d\u7684\u5170\u82b1\u7d2b":"#BA55D3",DarkVoilet:"#9400D3","\u6df1\u7d2b\u7f57\u5170\u8272":"#9400D3",DarkOrchid:"#9932CC","\u6df1\u5170\u82b1\u7d2b":"#9932CC",Indigo:"#4B0082","\u975b\u9752":"#4B0082",BlueViolet:"#8A2BE2","\u6df1\u7d2b\u7f57\u5170\u7684\u84dd\u8272":"#8A2BE2",MediumPurple:"#9370DB","\u9002\u4e2d\u7684\u7d2b\u8272":"#9370DB",MediumSlateBlue:"#7B68EE","\u9002\u4e2d\u7684\u677f\u5ca9\u6697\u84dd\u7070\u8272":"#7B68EE",SlateBlue:"#6A5ACD","\u677f\u5ca9\u6697\u84dd\u7070\u8272":"#6A5ACD",DarkSlateBlue:"#483D8B","\u6df1\u5ca9\u6697\u84dd\u7070\u8272":"#483D8B",Lavender:"#E6E6FA","\u718f\u8863\u8349\u82b1\u7684\u6de1\u7d2b\u8272":"#E6E6FA",GhostWhite:"#F8F8FF","\u5e7d\u7075\u7684\u767d\u8272":"#F8F8FF",Blue:"#0000FF","\u7eaf\u84dd":"#0000FF",MediumBlue:"#0000CD","\u9002\u4e2d\u7684\u84dd\u8272":"#0000CD",MidnightBlue:"#191970","\u5348\u591c\u7684\u84dd\u8272":"#191970",DarkBlue:"#00008B","\u6df1\u84dd\u8272":"#00008B",Navy:"#000080","\u6d77\u519b\u84dd":"#000080",RoyalBlue:"#4169E1","\u7687\u5bb6\u84dd":"#4169E1",CornflowerBlue:"#6495ED","\u77e2\u8f66\u83ca\u7684\u84dd\u8272":"#6495ED",LightSteelBlue:"#B0C4DE","\u6de1\u94a2\u84dd":"#B0C4DE",LightSlateGray:"#778899","\u6d45\u77f3\u677f\u7070":"#778899",SlateGray:"#708090","\u77f3\u677f\u7070":"#708090",DoderBlue:"#1E90FF","\u9053\u5947\u84dd":"#1E90FF",AliceBlue:"#F0F8FF","\u7231\u4e3d\u4e1d\u84dd":"#F0F8FF",SteelBlue:"#4682B4","\u94a2\u84dd":"#4682B4",LightSkyBlue:"#87CEFA","\u6de1\u84dd\u8272":"#87CEFA",SkyBlue:"#87CEEB","\u5929\u84dd\u8272":"#87CEEB",DeepSkyBlue:"#00BFFF","\u6df1\u5929\u84dd":"#00BFFF",LightBLue:"#ADD8E6","\u6de1\u84dd":"#ADD8E6",PowDerBlue:"#B0E0E6","\u706b\u836f\u84dd":"#B0E0E6",CadetBlue:"#5F9EA0","\u519b\u6821\u84dd":"#5F9EA0",Azure:"#F0FFFF","\u851a\u84dd\u8272":"#F0FFFF",LightCyan:"#E1FFFF","\u6de1\u9752\u8272":"#E1FFFF",PaleTurquoise:"#AFEEEE","\u82cd\u767d\u7684\u7eff\u5b9d\u77f3":"#AFEEEE",Cyan:"#00FFFF","\u9752\u8272":"#00FFFF",Aqua:"#00FFFF","\u6c34\u7eff\u8272":"#00FFFF",DarkTurquoise:"#00CED1","\u6df1\u7eff\u5b9d\u77f3":"#00CED1",DarkSlateGray:"#2F4F4F","\u6df1\u77f3\u677f\u7070":"#2F4F4F",DarkCyan:"#008B8B","\u6df1\u9752\u8272":"#008B8B",Teal:"#008080","\u6c34\u9e2d\u8272":"#008080",MediumTurquoise:"#48D1CC","\u9002\u4e2d\u7684\u7eff\u5b9d\u77f3":"#48D1CC",LightSeaGreen:"#20B2AA","\u6d45\u6d77\u6d0b\u7eff":"#20B2AA",Turquoise:"#40E0D0","\u7eff\u5b9d\u77f3":"#40E0D0",Auqamarin:"#7FFFAA","\u7eff\u7389\\\u78a7\u7eff\u8272":"#7FFFAA",MediumAquamarine:"#00FA9A","\u9002\u4e2d\u7684\u78a7\u7eff\u8272":"#00FA9A",MediumSpringGreen:"#00FF7F","\u9002\u4e2d\u7684\u6625\u5929\u7684\u7eff\u8272":"#00FF7F",MintCream:"#F5FFFA","\u8584\u8377\u5976\u6cb9":"#F5FFFA",SpringGreen:"#3CB371","\u6625\u5929\u7684\u7eff\u8272":"#3CB371",SeaGreen:"#2E8B57","\u6d77\u6d0b\u7eff":"#2E8B57",Honeydew:"#F0FFF0","\u8702\u871c":"#F0FFF0",LightGreen:"#90EE90","\u6de1\u7eff\u8272":"#90EE90",PaleGreen:"#98FB98","\u82cd\u767d\u7684\u7eff\u8272":"#98FB98",DarkSeaGreen:"#8FBC8F","\u6df1\u6d77\u6d0b\u7eff":"#8FBC8F",LimeGreen:"#32CD32","\u9178\u6a59\u7eff":"#32CD32",Lime:"#00FF00","\u9178\u6a59\u8272":"#00FF00",ForestGreen:"#228B22","\u68ee\u6797\u7eff":"#228B22",Green:"#008000","\u7eaf\u7eff":"#008000",DarkGreen:"#006400","\u6df1\u7eff\u8272":"#006400",Chartreuse:"#7FFF00","\u67e5\u7279\u9152\u7eff":"#7FFF00",LawnGreen:"#7CFC00","\u8349\u576a\u7eff":"#7CFC00",GreenYellow:"#ADFF2F","\u7eff\u9ec4\u8272":"#ADFF2F",OliveDrab:"#556B2F","\u6a44\u6984\u571f\u8910\u8272":"#556B2F",Beige:"#F5F5DC","\u7c73\u8272(\u6d45\u8910\u8272)":"#F5F5DC",LightGoldenrodYellow:"#FAFAD2","\u6d45\u79cb\u9e92\u9e9f\u9ec4":"#FAFAD2",Ivory:"#FFFFF0","\u8c61\u7259":"#FFFFF0",LightYellow:"#FFFFE0","\u6d45\u9ec4\u8272":"#FFFFE0",Yellow:"#FFFF00","\u7eaf\u9ec4":"#FFFF00",Olive:"#808000","\u6a44\u6984":"#808000",DarkKhaki:"#BDB76B","\u6df1\u5361\u5176\u5e03":"#BDB76B",LemonChiffon:"#FFFACD","\u67e0\u6aac\u8584\u7eb1":"#FFFACD",PaleGodenrod:"#EEE8AA","\u7070\u79cb\u9e92\u9e9f":"#EEE8AA",Khaki:"#F0E68C","\u5361\u5176\u5e03":"#F0E68C",Gold:"#FFD700","\u91d1":"#FFD700",Cornislk:"#FFF8DC","\u7389\u7c73\u8272":"#FFF8DC",GoldEnrod:"#DAA520","\u79cb\u9e92\u9e9f":"#DAA520",FloralWhite:"#FFFAF0","\u82b1\u7684\u767d\u8272":"#FFFAF0",OldLace:"#FDF5E6","\u8001\u9970\u5e26":"#FDF5E6",Wheat:"#F5DEB3","\u5c0f\u9ea6\u8272":"#F5DEB3",Moccasin:"#FFE4B5","\u9e7f\u76ae\u978b":"#FFE4B5",Orange:"#FFA500","\u6a59\u8272":"#FFA500",PapayaWhip:"#FFEFD5","\u756a\u6728\u74dc":"#FFEFD5",BlanchedAlmond:"#FFEBCD","\u6f02\u767d\u7684\u674f\u4ec1":"#FFEBCD",NavajoWhite:"#FFDEAD","\u7eb3\u74e6\u970d\u767d":"#FFDEAD",AntiqueWhite:"#FAEBD7","\u53e4\u4ee3\u7684\u767d\u8272":"#FAEBD7",Tan:"#D2B48C","\u6652\u9ed1":"#D2B48C",BrulyWood:"#DEB887","\u7ed3\u5b9e\u7684\u6811":"#DEB887",Bisque:"#FFE4C4","(\u6d53\u6c64)\u4e73\u8102,\u756a\u8304\u7b49":"#FFE4C4",DarkOrange:"#FF8C00","\u6df1\u6a59\u8272":"#FF8C00",Linen:"#FAF0E6","\u4e9a\u9ebb\u5e03":"#FAF0E6",Peru:"#CD853F","\u79d8\u9c81":"#CD853F",PeachPuff:"#FFDAB9","\u6843\u8272":"#FFDAB9",SandyBrown:"#F4A460","\u6c99\u68d5\u8272":"#F4A460",Chocolate:"#D2691E","\u5de7\u514b\u529b":"#D2691E",SaddleBrown:"#8B4513","\u9a6c\u978d\u68d5\u8272":"#8B4513",SeaShell:"#FFF5EE","\u6d77\u8d1d\u58f3":"#FFF5EE",Sienna:"#A0522D","\u9ec4\u571f\u8d6d\u8272":"#A0522D",LightSalmon:"#FFA07A","\u6d45\u9c9c\u8089(\u9c91\u9c7c)\u8272":"#FFA07A",Coral:"#FF7F50","\u73ca\u745a":"#FF7F50",OrangeRed:"#FF4500","\u6a59\u7ea2\u8272":"#FF4500",DarkSalmon:"#E9967A","\u6df1\u9c9c\u8089(\u9c91\u9c7c)\u8272":"#E9967A",Tomato:"#FF6347","\u756a\u8304":"#FF6347",MistyRose:"#FFE4E1","\u8584\u96fe\u73ab\u7470":"#FFE4E1",Salmon:"#FA8072","\u9c9c\u8089(\u9c91\u9c7c)\u8272":"#FA8072",Snow:"#FFFAFA","\u96ea":"#FFFAFA",LightCoral:"#F08080","\u6de1\u73ca\u745a\u8272":"#F08080",RosyBrown:"#BC8F8F","\u73ab\u7470\u68d5\u8272":"#BC8F8F",IndianRed:"#CD5C5C","\u5370\u5ea6\u7ea2":"#CD5C5C",Red:"#FF0000","\u7eaf\u7ea2":"#FF0000",Brown:"#A52A2A","\u68d5\u8272":"#A52A2A",FireBrick:"#B22222","\u8010\u706b\u7816":"#B22222",DarkRed:"#8B0000","\u6df1\u7ea2\u8272":"#8B0000",Maroon:"#800000","\u6817\u8272":"#800000",White:"#FFFFFF","\u7eaf\u767d":"#FFFFFF",WhiteSmoke:"#F5F5F5","\u767d\u70df":"#F5F5F5",Gainsboro:"#DCDCDC","\u4eae\u7070\u8272":"#DCDCDC",LightGrey:"#D3D3D3","\u6d45\u7070\u8272":"#D3D3D3",Silver:"#C0C0C0","\u94f6\u767d\u8272":"#C0C0C0",DarkGray:"#A9A9A9","\u6df1\u7070\u8272":"#A9A9A9",Gray:"#808080","\u7070\u8272":"#808080",DimGray:"#696969","\u6697\u6de1\u7684\u7070\u8272":"#696969",Black:"#000000","\u7eaf\u9ed1":"#000000"}},295:function(e,n,t){"use strict";var r=t(301),a=t.n(r),o=t(312),i=t.n(o),c=t(313),u=t.n(c),l=t(1),F=t.n(l);n.a=function(e){var n=e.children,t=e.scrollbarsRef,r=i()(e,["children","scrollbarsRef"]);return F.a.createElement(u.a,a()({autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,ref:function(e){return t&&t(e)}},r),n)}},296:function(e,n,t){"use strict";var r,a,o,i,c=t(1),u=(t(297),t(473)),l=t(323).default,F=3,s=1,f="ant-message",d="move-up";var m={open:function(e){var n=void 0!==e.duration?e.duration:F,t={info:"info",success:"SkypeCheck",error:"ErrorBadge",warning:"StatusCircleExclamation",loading:"ProgressRingDots"}[e.type],m=s++,h=new Promise(function(F){var s=function(){return"function"===typeof e.onClose&&e.onClose(),F(!0)};!function(e){a?e(a):l.newInstance({prefixCls:f,transitionName:d,style:{top:r},getContainer:o,maxCount:i},function(n){a?e(a):(a=n,e(n))})}(function(r){var a=c.createElement(u.a,{iconName:t});r.notice({key:m,duration:n,style:{},content:c.createElement("div",{className:"".concat(f,"-custom-content").concat(e.type?" ".concat(f,"-").concat(e.type):"")},e.icon?e.icon:t?a:"",c.createElement("span",null,e.content)),onClose:s})})}),p=function(){a&&a.removeNotice(m)};return p.then=function(e,n){return h.then(e,n)},p.promise=h,p},config:function(e){void 0!==e.top&&(r=e.top,a=null),void 0!==e.duration&&(F=e.duration),void 0!==e.prefixCls&&(f=e.prefixCls),void 0!==e.getContainer&&(o=e.getContainer),void 0!==e.transitionName&&(d=e.transitionName,a=null),void 0!==e.maxCount&&(i=e.maxCount,a=null)},destroy:function(){a&&(a.destroy(),a=null)}};["success","info","warning","error","loading"].forEach(function(e){m[e]=function(n,t,r){return"function"===typeof t&&(r=t,t=void 0),m.open({content:n,duration:t,type:e,onClose:r})}}),m.warn=m.warning;var h=m;n.a=h},297:function(e,n,t){},310:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(271),a=t.n(r),o=t(1);function i(e){var n=Object(o.useState)(e);return a()(n,1)[0]}},343:function(e,n,t){"use strict";var r=t(7),a=t.n(r),o=t(23),i=t.n(o),c=t(53),u=t.n(c),l=t(271),F=t.n(l),s=t(1),f=t.n(s),d=t(81),m=t(155),h=(t(372),t(478)),p=t(474),E=t(472),C=t(471),g=t(310),D=t(287),v=t(28),b=Object(s.lazy)(function(){return t.e(9).then(t.bind(null,376)).then(function(e){return{default:e.Picker}})});var B=d.a.div.withConfig({displayName:"ChatInput___ChatInput",componentId:"sc-1u3djag-0"})(["display:flex;flex-direction:column;>:nth-child(1){display:flex;align-items:center;}>:nth-child(2){}>:nth-child(3){display:flex;justify-content:flex-end;padding:0.5rem;}"]);n.a=Object(m.a)(function(e){var n=e.onSend,t=e.onClickImageBtn,r=Object(s.useState)({openEmojiPicker:!1,content:""}),o=F()(r,2),c=o[0],l=o[1],d=Object(g.a)(new Map),m=Object(s.useRef)(null),y=Object(s.useRef)(null),A=Object(s.useCallback)(function(e){d.set(e.native,e.colons);var n=y.current.selectionStart||0,t=y.current.selectionEnd||0,r=y.current.value||"";r=r.substring(0,n)+e.native+r.substring(t),l(u()({},c,{openEmojiPicker:!1,content:r})),y.current.focus()},[c,l]),w=Object(s.useCallback)(i()(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=y.current.value)||!t.trim()){e.next=9;break}return t&&d.forEach(function(e,n){t.replace(new RegExp(n,"g"),e)}),e.next=5,n(t);case 5:if(!e.sent){e.next=7;break}l(u()({},c,{content:""}));case 7:e.next=10;break;case 9:l(u()({},c,{content:""}));case 10:case"end":return e.stop()}},e)})),[n]);return f.a.createElement(B,null,f.a.createElement("div",null,f.a.createElement("div",{ref:m},f.a.createElement(h.a,{iconProps:{iconName:"Emoji2"},title:"\u8868\u60c5",ariaLabel:"\u8868\u60c5",onClick:function(){return l(u()({},c,{openEmojiPicker:!c.openEmojiPicker}))}})),f.a.createElement(h.a,{iconProps:{iconName:"ImageCrosshair"},title:"\u56fe\u7247",ariaLabel:"\u56fe\u7247",onClick:t})),f.a.createElement("div",null,f.a.createElement(E.a,{rows:3,resizable:!1,multiline:!0,autoFocus:!0,borderless:!0,placeholder:"\u5728\u6b64\u8f93\u5165\u6d88\u606f\u2026",componentRef:y,value:c.content,onChange:function(e){return l(u()({},c,{content:e.target.value}))}})),f.a.createElement("div",null,f.a.createElement(p.a,{text:"\u53d1\u9001",onClick:w,allowDisabledFocus:!0})),f.a.createElement(C.a,{target:m.current,hidden:!c.openEmojiPicker},f.a.createElement(s.Suspense,{fallback:f.a.createElement(D.a,{size:v.a.xSmall})},f.a.createElement(b,{native:!0,onSelect:A}))))})},344:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r=t(7),a=t.n(r),o=t(23),i=t.n(o),c=t(1);function u(e,n){Object(c.useEffect)(function(){i()(a.a.mark(function t(){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.currentContact){t.next=7;break}if(r=n.otherIdToRoom.get(e.currentContact.id)){t.next=6;break}return t.next=5,n.fetchRoomInfo(1,e.currentContact.id);case 5:r=t.sent;case 6:n.clearRemind(r.roomKey);case 7:case"end":return t.stop()}},t)}))();var t=function(t){e.currentContact&&(e.currentContact.id===t.to&&n.me.id===t.from||e.currentContact.id===t.from&&n.me.id===t.to)&&n.clearRemind(t.roomKey)};return n.bus.addListener("remind",t),function(){n.bus.removeListener("remind",t)}},[e.currentContact,n])}},345:function(e,n,t){"use strict";function r(e){return new Promise(function(n,t){var r=document.createElement("input");r.multiple=!1,e&&e(r),r.type="file",r.style.display="none",r.onchange=function(){if(r.files){for(var e=[],a=0;a<r.files.length;a++)e.push(r.files.item(a));n(e)}else t()},document.getElementsByTagName("html").item(0).appendChild(r),r.click()})}t.d(n,"a",function(){return r})},347:function(e,n,t){"use strict";var r=t(271),a=t.n(r),o=t(1),i=t.n(o),c=t(81),u=t(155),l=t(295),F=t(290),s=c.a.div.withConfig({displayName:"Message___Message",componentId:"sc-1hyzrmt-0"})(["padding:1rem;display:flex;justify-content:",";flex-direction:",";"],function(e){return"me"===e.from?"flex":"flex-start"},function(e){return"me"===e.from?"row-reverse":"row"}),f=function(e){var n=e.html,t=e.from;return i.a.createElement(d,{from:t},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))},d=c.a.div.withConfig({displayName:"Message___Content",componentId:"sc-1hyzrmt-1"})(["max-width:calc(100% - 50px);margin-top:0;margin-bottom:0;margin-left:",";margin-right:",";background-color:",";border-bottom-color:",";color:#000000;font-size:1rem;line-height:2rem;padding:5px 12px 5px 12px;box-sizing:border-box;border-radius:6px;position:relative;word-break:break-all;&::",'{content:"";position:absolute;top:20px;',":-5px;width:10px;height:10px;margin-top:-10px;background:inherit;transform:rotate(45deg);}img{position:relative;display:block;background-color:#f3f3f3;border-radius:4px;padding:10px;float:left;min-width:100px;min-height:100px;max-width:300px;max-height:300px;cursor:pointer;z-index:2;}"],function(e){return"me"===e.from?"50px":"1rem"},function(e){return"me"===e.from?"1rem":"50px"},function(e){return"me"===e.from?"#d0e9ff":"#f3f3f3"},function(e){return"me"===e.from?"#d0e9ff":"#f3f3f3"},function(e){return"me"===e.from?"after":"before"},function(e){return"me"===e.from?"right":"left"}),m=function(e){var n=e.msg,t=e.from,r=e.account;return i.a.createElement(s,{from:t},i.a.createElement("div",null,i.a.createElement(F.a,{src:r.avatar,width:30,height:30})),i.a.createElement(f,{html:n.content,from:t}))},h=t(373),p=t.n(h);function E(e){return p()(e).format("HH:mm")}function C(e){return p()(e).format("YYYY-MM-DD")}var g=t(374),D=t.n(g),v=t(291),b=t(310),B=t(375);var y=Object(u.a)(function(e){var n=e.messageList,t=e.me,r=e.other,c=e.canRefresh,u=e.maxDistForRefresh,F=e.goBottomListener,s=Object(o.useRef)(null),f=Object(o.useRef)(null);u=u||100;var d=Object(b.a)({v:0});Object(o.useEffect)(function(){0===d.v&&n.length>0&&s.current.scrollToBottom(),d.v=n.length},[n.length]),Object(o.useEffect)(function(){var e;return F&&(e=F.on(function(){return e=function(){return s.current.scrollToBottom()},n=1e3/60,void B.animationFrame.schedule(e,n);var e,n})),function(){e&&e()}},[F]);var h=D()(n.map(function(e,n){return[(t=e.sendAt,p()(t).format("YYYY-MM-DD HH:mm")),n,e.sendAt];var t}),function(e,n){return e[0]===n[0]}).map(function(e){var n=a()(e,3),t=n[0],r=n[1],o=n[2];return C(o)===C(o)?[E(o),r]:[t,r]}).reduce(function(e,n){var t=a()(n,2),r=t[0];return e[t[1]]=r,e},{}),g=Object(o.useCallback)(function(e){if(e.target){var n=e.target.getBoundingClientRect().top-f.current.getBoundingClientRect().top;n<u&&c&&c(n)}},[u,c]);return i.a.createElement(A,null,i.a.createElement(l.a,{height:"100%",width:"100%",scrollbarsRef:function(e){s.current=e},onScroll:g},i.a.createElement("div",{ref:f},n.map(function(e,n){return i.a.createElement(o.Fragment,{key:e.msgKey},h[n]?i.a.createElement(w,null,i.a.createElement("span",null,h[n])," "):null,i.a.createElement(m,{msg:e,from:e.from===t.id?"me":"other",account:e.from===t.id?t:r}))}))))}),A=c.a.div.withConfig({displayName:"MessageList___MessageList",componentId:"sc-1gryb6g-0"})(["padding:1rem;display:flex;flex-direction:column;width:100%;height:100%;"]),w=c.a.div.withConfig({displayName:"MessageList___Time",componentId:"sc-1gryb6g-1"})(["width:100%;display:flex;> span{margin-top:1rem;margin-bottom:1rem;margin-left:auto;margin-right:auto;font-size:0.6rem;color:",";}"],v.a.DarkGray);n.a=y},470:function(e,n,t){"use strict";t.r(n);var r=t(7),a=t.n(r),o=t(23),i=t.n(o),c=t(290),u=t(343),l=t(347),F=t(291),s=t(6),f=t(155),d=t(1),m=t.n(d),h=t(81),p=t(100),E=t(344),C=t(345),g=t(296),D=Object(f.a)(function(){var e=Object(p.g)(),n=Object(p.e)(),t=Object(p.f)(),r=Object(d.useCallback)(function(){var n=i()(a.a.mark(function n(r){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.sendChatMsg(e.currentContact.id,1,r),n.abrupt("return",!0);case 2:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),[]),o=e.currentContact&&t.otherIdToRoom.has(e.currentContact.id)?t.otherIdToRoom.get(e.currentContact.id).roomKey:void 0,c=e.currentContact&&o&&t.roomKeyToMessageList.has(o)?t.roomKeyToMessageList.get(o).slice():[],F=Object(f.b)({hasMore:!0,fetching:!1}),h=Object(d.useCallback)(i()(a.a.mark(function n(){var r,o;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.currentContact||F.fetching||!F.hasMore){n.next=11;break}if(F.fetching=!0,r=t.otherIdToRoom.get(e.currentContact.id)){n.next=7;break}return n.next=6,t.fetchRoomInfo(1,e.currentContact.id);case 6:r=n.sent;case 7:return n.next=9,t.nextMessagePage(r.roomKey);case 9:o=n.sent,Object(s.g)(function(){F.fetching=!1,F.hasMore=o});case 11:case"end":return n.stop()}},n)})),[]);Object(E.a)(e,t),Object(d.useEffect)(function(){F.fetching=!1,F.hasMore=!0,h(),n.emit("changeContact")},[e.currentContact]);var D={on:function(e){var r=function(n){n.roomKey===o&&e()};t.bus.addListener("remind",r);var a=function(){e()};return n.addListener("changeContact",a),function(){n.removeListener("changeContact",a),t.bus.removeListener("remind",r)}}},y=Object(d.useCallback)(i()(a.a.mark(function n(){var r,o,i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.config.upload){n.next=12;break}return n.next=3,Object(C.a)(function(e){e.accept="image/*",e.multiple=!1});case 3:if(!((r=n.sent).length>0)){n.next=10;break}return n.next=7,e.config.upload(r[0]);case 7:o=n.sent,i='\n          <div>\n            <img src="'.concat(o,'"/>\n          </div>\n        '),t.sendChatMsg(e.currentContact.id,1,i);case 10:n.next=13;break;case 12:g.a.error("The upload image function is not implemented.\nPlease implement it and provided as config. ");case 13:case"end":return n.stop()}},n)})),[]);return m.a.createElement(v,null,m.a.createElement("div",null,m.a.createElement(B,null)),m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement(l.a,{me:t.me||{},messageList:c.slice(),other:e.currentContact||{},canRefresh:function(e){h()},goBottomListener:D})),m.a.createElement("div",null,m.a.createElement(u.a,{onSend:r,onClickImageBtn:y})))),e.currentContact?null:m.a.createElement(b,null,m.a.createElement("span",null,"\u8bf7\u9009\u62e9\u8054\u7cfb\u4eba")))}),v=h.a.div.withConfig({displayName:"ChatPanel___ChatPanel",componentId:"sc-1ilhjfb-0"})(["position:relative;overflow:hidden;display:flex;flex-direction:column;height:100%;width:100%;> div:nth-child(1){height:60px;}> div:nth-child(2){flex:1;display:flex;> div:nth-child(1){flex:2;display:flex;flex-direction:column;> div:nth-child(1){flex:1;}> div:nth-child(2){border-top:solid 1px #dcdcdc;}}}"]),b=h.a.div.withConfig({displayName:"ChatPanel___UnselectModal",componentId:"sc-1ilhjfb-1"})(["position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.2);> span{font-size:2em;}"]),B=Object(f.a)(function(){var e=Object(p.g)(),n=e.currentContact?e.currentContact:{};return m.a.createElement(y,null,m.a.createElement("div",null,m.a.createElement(c.a,{src:n.avatar,height:40,width:40})),m.a.createElement("div",null,m.a.createElement("span",null,n.nickName)))}),y=h.a.div.withConfig({displayName:"ChatPanel___Title",componentId:"sc-1ilhjfb-2"})(["display:flex;padding:1rem;background-color:",";border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:",";> div:nth-child(1){}> div:nth-child(2){flex:1;display:flex;flex-direction:column;margin-left:1rem;> span:nth-child(1){font-size:1rem;}}"],F.a.WhiteSmoke,F.a.Gainsboro);n.default=D;Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now(),Date.now()}}]);