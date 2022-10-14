"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1158],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=s(r),f=o,m=g["".concat(l,".").concat(f)]||g[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5805:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(3117),o=(r(7294),r(3905));const i={slug:"2020-06-13-a-notice-on-bug-reporting",title:"A notice on bug reporting",authors:"eric",date:new Date("2020-06-13T00:00:00.000Z")},a=void 0,u={permalink:"/2020-06-13-a-notice-on-bug-reporting",source:"@site/blog/2020/2020-06-13-a-notice-on-bug-reporting.md",title:"A notice on bug reporting",description:"Hello everyone! This is a quick notice on what\u2019s going on behind the scenes, regarding bug reporting for our ROMs and firmware.",date:"2020-06-13T00:00:00.000Z",formattedDate:"June 13, 2020",tags:[],readingTime:.98,hasTruncateMarker:!1,authors:[{name:"Eric Park",title:"Backend Engineer @ BlissLabs",url:"https://github.com/ericswpark",imageURL:"https://avatars.githubusercontent.com/u/13326074?v=4",key:"eric"}],frontMatter:{slug:"2020-06-13-a-notice-on-bug-reporting",title:"A notice on bug reporting",authors:"eric",date:"2020-06-13T00:00:00.000Z"},prevItem:{title:"Let's try and change the game",permalink:"/2020-06-26-lets-try-and-change-the-game"},nextItem:{title:"Updates (June 2020)",permalink:"/2020-06-11-updates-june-2020"}},l={authorsImageUrls:[void 0]},s=[],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hello everyone! This is a quick notice on what\u2019s going on behind the scenes, regarding bug reporting for our ROMs and firmware."),(0,o.kt)("p",null,"Right now ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/BlissRoms/bug_reports"},"we have a repository set up on GitHub for bug reporting.")," However after using it for a couple of months we realized a couple of things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"People really, really want unified bug reporting"),(0,o.kt)("li",{parentName:"ul"},"Device bug reports are hard to handle"),(0,o.kt)("li",{parentName:"ul"},"Source bug reports must be separate but it\u2019s hard to distinguish in the sheer volume of bug reports")),(0,o.kt)("p",null,"That\u2019s why we\u2019re moving over our bug reporting system to Atlassian\u2019s Jira. With the transition, we just want to let you guys know of a couple of things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Starting from today (June 13) we will no longer be accepting new bug reports at the aforementioned bug reporting repository."),(0,o.kt)("li",{parentName:"ul"},"In the future we will open access to Jira for the public and allow everyone to submit bug reports. No date has been set yet."),(0,o.kt)("li",{parentName:"ul"},"Jira will handle ",(0,o.kt)("strong",{parentName:"li"},"all")," bug reports, including BlissRoms and Bliss OS bug reports, device-specific bug reports, and more.")),(0,o.kt)("p",null,"We hope this clarifies a couple of things. Thank you for using Team Bliss\u2019s software!"))}p.isMDXComponent=!0}}]);