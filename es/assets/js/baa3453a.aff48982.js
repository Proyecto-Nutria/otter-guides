"use strict";(self.webpackChunkotter_guides=self.webpackChunkotter_guides||[]).push([[623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return r?i.createElement(y,a(a({ref:t},p),{},{components:r})):i.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=r(7462),n=(r(7294),r(3905));const s={id:"system-design-exercise",title:"System Design Exercise"},a=void 0,o={unversionedId:"interview/interviewee/SWE/system-design-exercise",id:"interview/interviewee/SWE/system-design-exercise",title:"System Design Exercise",description:"In this type of exercise, you will be expected to generate a high-level design of a system,",source:"@site/docs/interview/interviewee/SWE/system-design-exercise.mdx",sourceDirName:"interview/interviewee/SWE",slug:"/interview/interviewee/SWE/system-design-exercise",permalink:"/otter-guides/es/interview/interviewee/SWE/system-design-exercise",draft:!1,editUrl:"https://github.com/proyecto-nutria/otter-guides/docs/interview/interviewee/SWE/system-design-exercise.mdx",tags:[],version:"current",frontMatter:{id:"system-design-exercise",title:"System Design Exercise"},sidebar:"interviewee_swe_exercises",previous:{title:"Object Oriented Programming Exercise",permalink:"/otter-guides/es/interview/interviewee/SWE/oop-exercise"},next:{title:"Front End Exercise",permalink:"/otter-guides/es/interview/interviewee/SWE/frontend-exercise"}},c={},l=[{value:"Example Exercises",id:"example-exercises",level:3},{value:"Tips to succeed in the System Design Exercise",id:"tips-to-succeed-in-the-system-design-exercise",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this type of exercise, you will be expected to generate a high-level design of a system,\nshowing its different components and infrastructure considering both sides (front-end and back-end). You will usually have between 30 min to 1 hr to complete this exercise.\nAlthough giving a high-level design is the main focus of this exercise,\nyou may also be asked to explain some parts in detail, for example:\nHow will you create the REST API? or which technology you will prefer for some tasks and why?"),(0,n.kt)("h3",{id:"example-exercises"},"Example Exercises"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=q0KGYwNbf-0&t=1s"},"Google Systems Design Interview With An Ex-Googler")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=umWABit-wbk&t=1s"},"UBER System design | OLA system design | uber architecture | amazon interview question")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=vvhC64hQZMk"},"Whatsapp System Design: Chat Messaging Systems for Interviews")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Z-0g_aJL5Fw"},"System Design Mock Interview: Design TikTok ft. Google TPM"))),(0,n.kt)("h3",{id:"tips-to-succeed-in-the-system-design-exercise"},"Tips to succeed in the System Design Exercise"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../technical-exercise#tips-that-apply-to-any-type-of-exercise"},"Follow the suggestions presented in Interview Prep | Tips-that-apply-to-any-type-of-exercise")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://igotanoffer.com/blogs/tech/system-design-interviews"},"Take a look at 31 system design interview questions (and sample answers)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.codecademy.com/article/what-is-rest"},"Understand What is REST? | Codecademy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api"},"Get to know the best practices to design a REST API: Best Practices for Designing a Pragmatic RESTful API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://12factor.net/"},"Understand  The Twelve-Factor App  methodology"))))}m.isMDXComponent=!0}}]);