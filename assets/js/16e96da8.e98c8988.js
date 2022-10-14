"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"2021-01-11-maintainer-applications-now-open",title:"Maintainer applications now open!",authors:"eric",date:new Date("2021-01-11T00:00:00.000Z")},i=void 0,s={permalink:"/2021-01-11-maintainer-applications-now-open",source:"@site/blog/2021/2021-01-11-maintainer-applications-now-open.md",title:"Maintainer applications now open!",description:"Note: this post is for developers and maintainers looking to join Team Bliss. Users can disregard this post.",date:"2021-01-11T00:00:00.000Z",formattedDate:"January 11, 2021",tags:[],readingTime:2.11,hasTruncateMarker:!1,authors:[{name:"Eric Park",title:"Backend Engineer @ BlissLabs",url:"https://github.com/ericswpark",imageURL:"https://avatars.githubusercontent.com/u/13326074?v=4",key:"eric"}],frontMatter:{slug:"2021-01-11-maintainer-applications-now-open",title:"Maintainer applications now open!",authors:"eric",date:"2021-01-11T00:00:00.000Z"},prevItem:{title:"BlissRoms/Bliss OS 14 now available",permalink:"/2021-01-25-blissroms-blissos-14-now-available"},nextItem:{title:"Sign ups for Q now closing",permalink:"/2020-09-26-sign-ups-for-q-now-closing"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: this post is for developers and maintainers looking to join Team Bliss. Users can disregard this post.")),(0,a.kt)("p",null,"We\u2019re looking for potential maintainers for our next version of BlissRoms, BlissRoms 14!"),(0,a.kt)("p",null,"For this year, we are tightening up our maintainer application process and imposing certain requirements for new maintainers. All new maintainers must meet the following criteria to be accepted, barring any special circumstances. If you do not meet the requirements but believe you have a unique reason to be accepted, please reach out to the administrators at Team Bliss."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You need to understand English. Many of our internal documentation and tools are written in English. In the past we\u2019ve had some unfortunate instances where maintainers did not understand our directives and caused problems. Therefore, all maintainers must have a reasonable comprehension of English in order to be accepted."),(0,a.kt)("li",{parentName:"ol"},"Your device must be buildable. Please do not apply in the hopes of getting your device maintained by us. That\u2019s not what this program is for."),(0,a.kt)("li",{parentName:"ol"},"Build artifacts must be flashable as-is, without any modification. Unzipping and swapping out the kernel image, editing system files to force certain features to work, etc., are not allowed. Build artifacts should retain their original file name."),(0,a.kt)("li",{parentName:"ol"},"You should be able to use Linux, ",(0,a.kt)("inlineCode",{parentName:"li"},"git"),", and Gerrit. In addition, you may have to run Python scripts on machines you are building ROMs on to upload your builds."),(0,a.kt)("li",{parentName:"ol"},"You must have a commit history on GitHub for at least 1 year."),(0,a.kt)("li",{parentName:"ol"},"All device trees (including kernel and vendor) ",(0,a.kt)("strong",{parentName:"li"},"must")," be public at the time of application, barring any legal problems like DMCA takedown requests. Particularly, if your vendor repository is prone to DMCA takedowns, please reach out to an admin before applying. ",(0,a.kt)("strong",{parentName:"li"},"There are no exceptions for device/kernel trees.")," Dependencies of the device tree (such as supporting libraries) must be public as well."),(0,a.kt)("li",{parentName:"ol"},"You must release builds every two weeks, minimum. Please set aside enough time for maintaining your device.")),(0,a.kt)("p",null,"Also, this year we are dropping the requirement for XDA threads. If you hate interacting with entitled users then you don\u2019t have to! We are also dropping the requirement for support groups on Telegram."),(0,a.kt)("p",null,"All maintainers and developers of Team Bliss must abide by our ToC. These are really basic conditions, so don\u2019t worry about signing away your soul or anything. These terms mainly deal with common decency to others and regulations like the above to agree to."),(0,a.kt)("p",null,"If you understand everything above, you may sign up for maintainership here: ",(0,a.kt)("a",{parentName:"p",href:"https://maintainers.blissroms.org/"},"https://maintainers.blissroms.org/")))}c.isMDXComponent=!0}}]);