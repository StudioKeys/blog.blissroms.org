"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3090],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6052:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var o=r(3117),n=(r(7294),r(3905));const a={slug:"2020-09-05-android-generic-project",title:"Android-Generic Project",authors:"eric",date:new Date("2020-09-05T00:00:00.000Z")},i=void 0,s={permalink:"/2020-09-05-android-generic-project",source:"@site/blog/2020/2020-09-05-android-generic-project.md",title:"Android-Generic Project",description:"For the longest time, the Android-x86 world has been plagued with not having a proper recovery toolset packaged with the OS. There have been a few attempts at such a solution in the past, but nothing that was able to coincide with the main Android system and work together. Until Gearlock came into play. It started as a toolkit to do many of the underlying troubleshooting within a basic UI for Phoenix-OS, Remix-OS, etc. And by working together with the lead developer, Axon, we were able to work out a solution for all Android-x86 based projects. Just clone vendor-gearlock into your AOSP based project, run one command, and it\u2019s ready to go. The result is a recovery/tweaking solution that can be run along side system, and also acts as a pre-bootloader for the main OS, so you can in fact choose to boot into Recovery first if you desire.",date:"2020-09-05T00:00:00.000Z",formattedDate:"September 5, 2020",tags:[],readingTime:1.97,hasTruncateMarker:!1,authors:[{name:"Eric Park",title:"Backend Engineer @ BlissLabs",url:"https://github.com/ericswpark",imageURL:"https://avatars.githubusercontent.com/u/13326074?v=4",key:"eric"}],frontMatter:{slug:"2020-09-05-android-generic-project",title:"Android-Generic Project",authors:"eric",date:"2020-09-05T00:00:00.000Z"},prevItem:{title:"Updates (September 2020)",permalink:"/2020-09-14-updates-september-2020"},nextItem:{title:"Updates (W3, August 2020)",permalink:"/2020-08-21-updates-w3-august-2020"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For the longest time, the Android-x86 world has been plagued with not having a proper recovery toolset packaged with the OS. There have been a few attempts at such a solution in the past, but nothing that was able to coincide with the main Android system and work together. Until ",(0,n.kt)("a",{parentName:"p",href:"https://supreme-gamers.com/threads/gearlock-custom-recovery-replacement-for-android-x86.169/"},"Gearlock")," came into play. It started as a toolkit to do many of the underlying troubleshooting within a basic UI for Phoenix-OS, Remix-OS, etc. And by working together with the lead developer, Axon, we were able to work out a solution for all Android-x86 based projects. Just clone vendor-gearlock into your AOSP based project, run one command, and it\u2019s ready to go. The result is a recovery/tweaking solution that can be run along side system, and also acts as a pre-bootloader for the main OS, so you can in fact choose to boot into Recovery first if you desire."),(0,n.kt)("p",null,"Here\u2019s a little preview I tweeted, giving a quick glance of some of the options available."),(0,n.kt)("blockquote",{class:"twitter-tweet"},(0,n.kt)("p",{lang:"en",dir:"ltr"},"Here's a little preview of a few things Gearlock is able to provide for ",(0,n.kt)("a",{href:"https://twitter.com/hashtag/AndroidGenericProject?src=hash&ref_src=twsrc%5Etfw"},"#AndroidGenericProject"),"'s Android 10 builds Thanks goes out to Axon for all the work on Gearlock lately ;) ",(0,n.kt)("a",{href:"https://twitter.com/hashtag/AllROMsAreBlissful?src=hash&ref_src=twsrc%5Etfw"},"#AllROMsAreBlissful")," ",(0,n.kt)("a",{href:"https://t.co/loKR4IFzFa"},"pic.twitter.com/loKR4IFzFa")),"\u2014 Jon West (@electrikjesus) ",(0,n.kt)("a",{href:"https://twitter.com/electrikjesus/status/1302032014636441605?ref_src=twsrc%5Etfw"},"September 4, 2020"))," ",(0,n.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),(0,n.kt)("p",null,"We\u2019ve also been further integrating more and more ROMs into Android-Generic Project, Lineage OS 17.1 being the latest. And ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/boringdroid"},"boringdroid")," developer, @utzcoz (Also the newest member of Team Bliss!!!) has also been hard at work in the Android Desktop UI development world, so we\u2019ve been mostly testing all the changes under the hood there with the recent Lineage OS test builds, but have plans on continuing the ROM bringup game soon."),(0,n.kt)("p",null,"Again, if you are interested in learning more about Android-Generic Project or Android-x86 development in general, be sure to check out our ",(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com/android-generic/vendor_android-generic"},"project readme"),". It has quite a few learning resources as well as plenty of documentation on the process."),(0,n.kt)("p",null,"And as a gauge of interest, we would like to know how many of you out there would be interested in watching the entire bring up process for a ROM, maybe streamed on Twitch someplace we could interact with those watching, and if so, what ROM would you all like to see added? Let us know in the comments below."),(0,n.kt)("p",null,"Thanks again."))}d.isMDXComponent=!0}}]);