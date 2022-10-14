"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3998],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},302:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var o=n(3117),r=(n(7294),n(3905));const a={slug:"2020-06-26-lets-try-and-change-the-game",title:"Let's try and change the game",authors:"eric",date:new Date("2020-06-26T00:00:00.000Z")},i=void 0,s={permalink:"/2020-06-26-lets-try-and-change-the-game",source:"@site/blog/2020/2020-06-26-lets-try-and-change-the-game.md",title:"Let's try and change the game",description:"We would like to announce a change to Bliss OS (our PC/x86/x86_64 builds) that we\u2019ve been working on. Recently, the development on Bliss OS has taken a different turn towards something that can better benefit the entire community.",date:"2020-06-26T00:00:00.000Z",formattedDate:"June 26, 2020",tags:[],readingTime:2.99,hasTruncateMarker:!1,authors:[{name:"Eric Park",title:"Backend Engineer @ BlissLabs",url:"https://github.com/ericswpark",imageURL:"https://avatars.githubusercontent.com/u/13326074?v=4",key:"eric"}],frontMatter:{slug:"2020-06-26-lets-try-and-change-the-game",title:"Let's try and change the game",authors:"eric",date:"2020-06-26T00:00:00.000Z"},prevItem:{title:"Updates (July 2020)",permalink:"/2020-08-02-updates-july-2020"},nextItem:{title:"A notice on bug reporting",permalink:"/2020-06-13-a-notice-on-bug-reporting"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We would like to announce a change to Bliss OS (our PC/x86/x86_64 builds) that we\u2019ve been working on. Recently, the development on Bliss OS has taken a different turn towards something that can better benefit the entire community."),(0,r.kt)("p",null,"We\u2019ve taken the concept of our Android-PC project, and started to rework the scripts to make things a whole lot smarter and easier to use. This allowed us to evolve Android-PC project into a toolkit that could also build multiple versions of a Bliss OS, along with AOSP. So seeing the potential there, we started working on the scripts, more and more. Adding the ability to create a PC .iso for just about any ROM out there, not just Bliss. After that we then boiled it all down to one vendor repo to clone into the AOSP or ROM source."),(0,r.kt)("p",null,"With that main groundwork laid out, we then added the treble (GSI) scripts based off the same PHH-Treble concept we started using in Android Pie, and updated those with all the new functionality added for the PC side of things. Making this project now require a new name, Android-Generic."),(0,r.kt)("p",null,"Next step was to make it smarter. So with multiple ROMs applying the same set of generic patches, we quickly figured out that we will need to split things up for the patches. So the process for both GSI & PC patches all start with a pre-patch phase to allow for any reverts or other preparation a ROM source might need, then after that we apply a generic patchset (usually the base set that applies straight to AOSP), then after that we have a second ROM specific patch set to add any conflict resolutions that occur from the initial process of configuring for you ROM. Then after that is all set, we also have a Customization patch set type. Think AOSP vs. AOSP-EX, or Lineage vs Lineage-EX. In this phase of patching, it will look for any rom add-ons, added patches for customizations, features, etc, on top of what the ROM has currently."),(0,r.kt)("p",null,"After that we set out to make the whole thing work more efficiently, adding the ability for new patch conflicts in one ROM to seek out other potential conflict resolutions on its own from the resolutions other ROMs have in the AG repo, so the more ROMs included in the main Android-Generic repo, the more ROMs that will be able to use it out of the box, benefiting the entire community."),(0,r.kt)("p",null,"Now for GSI, some may be thinking that PHH-Treble already uses a patching system and scripts, why would this be used? Since we are indeed using his work for the generic GSI patches, we don\u2019t want to replace his work at all, we want to take the value-added approach and provide the community an easy to use system that incorporates his work and uses everyone\u2019s solutions on top of it to grow and benefit everyone exponentially. "),(0,r.kt)("p",null,"For the PC side of things, this doesn\u2019t mean the end of Bliss OS at all, in fact, Bliss OS is now part of all the PC ROMs that are built through AG. We will still be uploading Bliss OS builds too, but they will also be accompanied with  various other PC builds of different Android ROMs, and AOSP combinations."),(0,r.kt)("p",null,"This is where we need the Android community to start showing their support and try using the toolset. We\u2019re not afraid of constructive criticism and are consistently working towards automating the entire process if possible. Help us help the community and git checkout Android-Generic today!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://gitlab.com/android-generic/vendor_android-generic vendor/android-generic\n")))}h.isMDXComponent=!0}}]);