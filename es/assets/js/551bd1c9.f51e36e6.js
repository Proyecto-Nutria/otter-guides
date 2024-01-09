"use strict";(self.webpackChunkotter_guides=self.webpackChunkotter_guides||[]).push([[621],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={id:"frontend-exercise",title:"Front End Exercise"},a=void 0,s={unversionedId:"interview/interviewee/SWE/frontend-exercise",id:"interview/interviewee/SWE/frontend-exercise",title:"Front End Exercise",description:"In this type of exercise, you will be usually presented with some UI/UX component that you will",source:"@site/docs/interview/interviewee/SWE/frontend-exercise.mdx",sourceDirName:"interview/interviewee/SWE",slug:"/interview/interviewee/SWE/frontend-exercise",permalink:"/otter-guides/es/interview/interviewee/SWE/frontend-exercise",draft:!1,editUrl:"https://github.com/proyecto-nutria/otter-guides/docs/interview/interviewee/SWE/frontend-exercise.mdx",tags:[],version:"current",frontMatter:{id:"frontend-exercise",title:"Front End Exercise"},sidebar:"interviewee_swe_exercises",previous:{title:"System Design Exercise",permalink:"/otter-guides/es/interview/interviewee/SWE/system-design-exercise"}},l={},c=[{value:"Example exercise",id:"example-exercise",level:3},{value:"Statement",id:"statement",level:4},{value:"Tips to succeed in the front-end exercise",id:"tips-to-succeed-in-the-front-end-exercise",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this type of exercise, you will be usually presented with some UI/UX component that you will\nhave to build either using plain CSS+HTML+JS or using some framework like React, Angular, Vue,\nSvelte, \u2026 You will usually have between 30 min to 1 hr to complete this exercise."),(0,i.kt)("h3",{id:"example-exercise"},"Example exercise"),(0,i.kt)("h4",{id:"statement"},"Statement"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fetch data from ",(0,i.kt)("a",{parentName:"li",href:"https://swapi.dev/api/people/"},"https://swapi.dev/api/people/")),(0,i.kt)("li",{parentName:"ol"},"Using the data from our API print a list of star wars characters"),(0,i.kt)("li",{parentName:"ol"},"Show information about each character when clicking on its name in the list"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/stoic-neumann-f789mi?file=/src/App.js"},"Solution -> stoic-neumann-f789mi - CodeSandbox"))),(0,i.kt)("h3",{id:"tips-to-succeed-in-the-front-end-exercise"},"Tips to succeed in the front-end exercise"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../technical-exercise#tips-that-apply-to-any-type-of-exercise"},"Follow the suggestions presented in Interview Prep | Tips-that-apply-to-any-type-of-exercise")),(0,i.kt)("li",{parentName:"ul"},"Take a look at these interviews:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ai1zmNO5Z3E"},"Google Frontend Interview With A Frontend Expert")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ak4p7sdKJQw"},"Google Frontend CSS Interview | Ft. Cl\xe9ment Mihailescu")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codesignal.com/"},"Solve front-end challenges in Technical Interviews and Assessments - CodeSignal"))))}d.isMDXComponent=!0}}]);