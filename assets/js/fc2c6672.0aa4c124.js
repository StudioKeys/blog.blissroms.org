"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7277],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},466:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=["components"],o={slug:"2020-08-02-updates-july-2020",title:"Updates (July 2020)",authors:"eric",date:new Date("2020-08-02T00:00:00.000Z")},s=void 0,u={permalink:"/2020-08-02-updates-july-2020",source:"@site/blog/2020/2020-08-02-updates-july-2020/index.md",title:"Updates (July 2020)",description:"This will probably be our last monthly update post! Starting from August we will transition to weekly updates as needs arise.",date:"2020-08-02T00:00:00.000Z",formattedDate:"August 2, 2020",tags:[],readingTime:4.305,truncated:!1,authors:[{name:"Eric Park",title:"Backend Engineer @ BlissLabs",url:"https://github.com/ericswpark",imageURL:"https://avatars.githubusercontent.com/u/13326074?v=4",key:"eric"}],frontMatter:{slug:"2020-08-02-updates-july-2020",title:"Updates (July 2020)",authors:"eric",date:"2020-08-02T00:00:00.000Z"},prevItem:{title:"Updates (W1, August 2020)",permalink:"/2020-08-02-updates-w1-august-2020"},nextItem:{title:"Let's try and change the game",permalink:"/2020-06-26-lets-try-and-change-the-game"}},d={authorsImageUrls:[void 0]},p=[{value:"Bug fixes:",id:"bug-fixes",level:2},{value:"UI changes:",id:"ui-changes",level:2},{value:"Added features:",id:"added-features",level:2},{value:"Notes:",id:"notes",level:2}],c={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This will probably be our last monthly update post! Starting from August we will transition to weekly updates as needs arise."),(0,i.kt)("h1",{id:"new-lock-screen-clocks"},"New lock screen clocks"),(0,i.kt)("p",null,"New, OnePlus-inspired lock screen clocks have been added! ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/Bliss_ROMs/status/1284537875405565952"},"Go check out the full-quality video over at our Twitter.")),(0,i.kt)("h1",{id:"changes-in-blissroms"},"Changes in BlissRoms"),(0,i.kt)("p",null,"The following are new changes in BlissRoms 12.9 and 12.10:"),(0,i.kt)("h2",{id:"bug-fixes"},"Bug fixes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the brightness slider position was set to QQS, and when the dark mode tile was toggled, sometimes there would be two brightness sliders. This has been fixed."),(0,i.kt)("li",{parentName:"ul"},"Fixed force close for some devices (Realme XT) on lock screen charging info."),(0,i.kt)("li",{parentName:"ul"},"Fixed padding between battery and signal icon"),(0,i.kt)("li",{parentName:"ul"},"Fixed force close for Wi-Fi only devices"),(0,i.kt)("li",{parentName:"ul"},"Fixed external adaptive Settings dashboard icons not theming"),(0,i.kt)("li",{parentName:"ul"},"Fixed no brightness slider and Quick Settings panel when rotated to landscape mode"),(0,i.kt)("li",{parentName:"ul"},"Fixed various network traffic issues"),(0,i.kt)("li",{parentName:"ul"},"Fixed Edge Lighting sometimes showing up on home screen"),(0,i.kt)("li",{parentName:"ul"},"Fixed various screen stabilization problems"),(0,i.kt)("li",{parentName:"ul"},"Updates and fixes to notch-city display cutout mode"),(0,i.kt)("li",{parentName:"ul"},"Fixed OnePlus switch disabled thumb color"),(0,i.kt)("li",{parentName:"ul"},"Fixed accent preset summary and selected value in \u201cBlissify > Themes\u201d"),(0,i.kt)("li",{parentName:"ul"},"Fixed slim recent switch not showing the enabled state properly"),(0,i.kt)("li",{parentName:"ul"},"Fixed status bar header\u2019s buggy layout when the single image option is selected, but there is no image selected yet"),(0,i.kt)("li",{parentName:"ul"},"Fixed showing unlock screen directly bug"),(0,i.kt)("li",{parentName:"ul"},"Fixed network traffic visibility on status bar"),(0,i.kt)("li",{parentName:"ul"},"Improve DT2W (double tap to wake) on AOD (always-on display)"),(0,i.kt)("li",{parentName:"ul"},"Improved FOD (fingerprint-on-display) views"),(0,i.kt)("li",{parentName:"ul"},"Fixes and updates to lockscreen shortcuts")),(0,i.kt)("h2",{id:"ui-changes"},"UI changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unified options in \u201cBlissify > Statusbar\u201d, everything can be found in one place now"),(0,i.kt)("li",{parentName:"ul"},"Reordered some stuff in \u201cBlissify > QS\u201d depending on their importance")),(0,i.kt)("h2",{id:"added-features"},"Added features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add 5 new OnePlus-inspired lockscreen clocks (see above!)"),(0,i.kt)("li",{parentName:"ul"},"Thanks to @Roger_T for the designs!",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OnePlus Numbers"),(0,i.kt)("li",{parentName:"ul"},"Minimalism"),(0,i.kt)("li",{parentName:"ul"},"OnePlus Roman dial"),(0,i.kt)("li",{parentName:"ul"},"OnePlus analog"),(0,i.kt)("li",{parentName:"ul"},"OnePlus minimal"))),(0,i.kt)("li",{parentName:"ul"},"QS \u201cDISCO\u201d mode has been added, thanks to the POSP team!"),(0,i.kt)("li",{parentName:"ul"},"Random accent mode has been added, thanks to the msm extended team!"),(0,i.kt)("li",{parentName:"ul"},"Navbar pulse has been added, thanks to the DU team for porting it to Android 10!"),(0,i.kt)("li",{parentName:"ul"},"Added random accent to tile label"),(0,i.kt)("li",{parentName:"ul"},"Added support for per app network isolation"),(0,i.kt)("li",{parentName:"ul"},"Added option to enable full screen for all apps. This is different option from the \u201clong apps\u201d feature, which is for old, legacy apps."),(0,i.kt)("li",{parentName:"ul"},"Improved aspects of volume panel (Notification row among other changes)"),(0,i.kt)("li",{parentName:"ul"},"Brought back brightness slider in expanded QS panel when QQS (top) and QQS (bottom) are selected."),(0,i.kt)("li",{parentName:"ul"},"Added Ethereal primary theme."),(0,i.kt)("li",{parentName:"ul"},"A lot of improvements to Notch city, thanks to POSP and crdroid team!"),(0,i.kt)("li",{parentName:"ul"},"Update QS data usage more frequently"),(0,i.kt)("li",{parentName:"ul"},"Improved QS data handling some more"),(0,i.kt)("li",{parentName:"ul"},"Increased size of all analog clocks"),(0,i.kt)("li",{parentName:"ul"},"Fixed accent and gradient mode for QS tiles"),(0,i.kt)("li",{parentName:"ul"},"Improved QS tint modes"),(0,i.kt)("li",{parentName:"ul"},"Added SBC HD Bluetooth codec"),(0,i.kt)("li",{parentName:"ul"},"Added Bluetooth dual channel mode"),(0,i.kt)("li",{parentName:"ul"},"Added option to select SBC HD by default"),(0,i.kt)("li",{parentName:"ul"},"Added A2DP codec priority option (preferred codec)"),(0,i.kt)("li",{parentName:"ul"},"More Bluetooth updates"),(0,i.kt)("li",{parentName:"ul"},"More SQLite improvements"),(0,i.kt)("li",{parentName:"ul"},"Enabled Zygote pre-forking (USAP pool). This will make apps launch faster!"),(0,i.kt)("li",{parentName:"ul"},"Added VoWi-Fi icons. This is disabled by default, so ask your maintainer to enable it only if your device supports the function."),(0,i.kt)("li",{parentName:"ul"},"Added notification counters (shows number of notifications in status bar)"),(0,i.kt)("li",{parentName:"ul"},"Added back button for free-form windows"),(0,i.kt)("li",{parentName:"ul"},"Update heads up QS tile icon"),(0,i.kt)("li",{parentName:"ul"},"Add R style icon shapes"),(0,i.kt)("li",{parentName:"ul"},"Transparent QS background (not yet added, depending on device releases may vary)"),(0,i.kt)("li",{parentName:"ul"},"About Phone animations have been removed and changed to Lottie animations like other sections, as requested by many users. Thanks to our lead designer, Roger Truttmann, for adding these animations!"),(0,i.kt)("li",{parentName:"ul"},"Added transparent status bar QS background"),(0,i.kt)("li",{parentName:"ul"},"Removed search bar in launcher"),(0,i.kt)("li",{parentName:"ul"},"Added ability to disable glance widget in launcher"),(0,i.kt)("li",{parentName:"ul"},"Added stock navbar layouts (compact, right leaning, left leaning, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Launcher additions below: (thanks to all contributors and the AICP team!)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Change row and column count"),(0,i.kt)("li",{parentName:"ul"},"Clear all recents with swipe down"),(0,i.kt)("li",{parentName:"ul"},"Toggle app labels"),(0,i.kt)("li",{parentName:"ul"},"Hide top apps prediction row in app drawer"),(0,i.kt)("li",{parentName:"ul"},"Icon size setting"),(0,i.kt)("li",{parentName:"ul"},"Icon support")))),(0,i.kt)("h2",{id:"notes"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navbar pulse will be hidden if navbar is hidden, or IME space is hidden when navbar is set to gesture mode. This is not a bug."),(0,i.kt)("li",{parentName:"ul"},"For transparent statusbar background, QS background opacity has to be reduced to see the effect!")),(0,i.kt)("p",null,"We\u2019ve also added more translations, thanks to contributors on our Crowdin. ",(0,i.kt)("a",{parentName:"p",href:"http://translate.blissroms.com/"},"Go translate BlissRoms for your device here!")),(0,i.kt)("h1",{id:"dropped-devices"},"Dropped devices"),(0,i.kt)("p",null,"We are discontinuing support for the following devices:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Realme 5 Pro (RMX1971)"),(0,i.kt)("li",{parentName:"ul"},"Asus Zenfone Max Pro M1 (X00T)")),(0,i.kt)("p",null,"We would like to thank the maintainers that maintained these devices up to this date. If you wish to maintain for any of the devices above, or apply to maintain for a new device, ",(0,i.kt)("a",{parentName:"p",href:"https://blissroms.com/maintainers/"},"submit a maintainer application here.")),(0,i.kt)("p",null,"And that\u2019s it for this month! Leave a comment down below on your thoughts!"))}m.isMDXComponent=!0}}]);