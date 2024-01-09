"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[907],{6126:function(n,t,e){e.d(t,{Uv:function(){return mn},d$:function(){return cn}});var i=e(7294),o=function(n,t){return Number(n.toFixed(t))},a=function(n,t,e){e&&"function"==typeof e&&e(n,t)},r={easeOut:function(n){return-Math.cos(n*Math.PI)/2+.5},linear:function(n){return n},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return n*(2-n)},easeInOutQuad:function(n){return n<.5?2*n*n:(4-2*n)*n-1},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return--n*n*n+1},easeInOutCubic:function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1- --n*n*n*n},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1+--n*n*n*n*n},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},s=function(n){"number"==typeof n&&cancelAnimationFrame(n)},u=function(n){n.mounted&&(s(n.animation),n.animate=!1,n.animation=null,n.velocity=null)};function l(n,t,e,i){if(n.mounted){var o=(new Date).getTime();u(n),n.animation=function(){if(!n.mounted)return s(n.animation);var a=(new Date).getTime()-o,u=a/e,l=(0,r[t])(u);a>=e?(i(1),n.animation=null):n.animation&&(i(l),requestAnimationFrame(n.animation))},requestAnimationFrame(n.animation)}}function c(n,t,e,i){var o=function(n){var t=n.scale,e=n.positionX,i=n.positionY;return!(Number.isNaN(t)||Number.isNaN(e)||Number.isNaN(i))}(t);if(n.mounted&&o){var a=n.setTransformState,r=n.transformState,s=r.scale,u=r.positionX,c=r.positionY,p=t.scale-s,f=t.positionX-u,m=t.positionY-c;0===e?a(t.scale,t.positionX,t.positionY):l(n,i,e,(function(n){a(s+p*n,u+f*n,c+m*n)}))}}var p=function(n,t){var e=n.wrapperComponent,i=n.contentComponent,o=n.setup.centerZoomedOut;if(!e||!i)throw new Error("Components are not mounted");var a=function(n,t,e){var i=n.offsetWidth,o=n.offsetHeight,a=t.offsetWidth*e,r=t.offsetHeight*e;return{wrapperWidth:i,wrapperHeight:o,newContentWidth:a,newDiffWidth:i-a,newContentHeight:r,newDiffHeight:o-r}}(e,i,t),r=a.wrapperWidth,s=a.wrapperHeight,u=function(n,t,e,i,o,a,r){var s=n>t?e*(r?1:.5):0,u=i>o?a*(r?1:.5):0;return{minPositionX:n-t-s,maxPositionX:s,minPositionY:i-o-u,maxPositionY:u}}(r,a.newContentWidth,a.newDiffWidth,s,a.newContentHeight,a.newDiffHeight,Boolean(o));return u},f=function(n,t,e,i){return o(i?n<t?t:n>e?e:n:n,2)},m=function(n,t){var e=p(n,t);return n.bounds=e,e};function d(n,t,e,i,o,a,r){var s=e.minPositionX,u=e.minPositionY,l=e.maxPositionX,c=e.maxPositionY,p=0,m=0;return r&&(p=o,m=a),{x:f(n,s-p,l+p,i),y:f(t,u-m,c+m,i)}}function v(n,t,e,i,o,a){var r=n.transformState,s=r.scale,u=r.positionX,l=r.positionY,c=i-s;return"number"!=typeof t||"number"!=typeof e?(console.error("Mouse X and Y position were not provided!"),{x:u,y:l}):d(u-t*c,l-e*c,o,a,0,0,null)}function h(n,t,e,i,o){var a=t-(o?i:0);return!Number.isNaN(e)&&n>=e?e:!Number.isNaN(t)&&n<=a?a:n}var g=function(n,t){var e=n.setup.panning.excluded,i=n.isInitialized,o=n.wrapperComponent,a=t.target,r=null==o?void 0:o.contains(a);return!!(i&&a&&r)&&!$(a,e)},S=function(n){var t=n.isInitialized,e=n.isPanning,i=n.setup.panning.disabled;return!(!t||!e||i)};var y=function(n,t){var e=n.setup,i=n.transformState.scale,o=e.minScale,a=e.disablePadding;return t>0&&i>=o&&!a?t:0},w=function(n){var t=n.mounted,e=n.setup,i=e.disabled,o=e.velocityAnimation,a=n.transformState.scale;return!(o.disabled&&!(a>1)&&i&&!t)},b=function(n){var t=n.mounted,e=n.velocity,i=n.bounds,o=n.setup,a=o.disabled,r=o.velocityAnimation,s=n.transformState.scale;return!(r.disabled&&!(s>1)&&a&&!t)&&!(!e||!i)};function C(n,t,e,i,o,a,r,s,u,l){if(o){var c;if(t>r&&e>r)return(c=r+(n-r)*l)>u?u:c<r?r:c;if(t<a&&e<a)return(c=a+(n-a)*l)<s?s:c>a?a:c}return i?t:f(n,a,r,o)}function P(n,t){if(w(n)){var e=n.lastMousePosition,i=n.velocityTime,o=n.setup,a=n.wrapperComponent,r=o.velocityAnimation.equalToMove,s=Date.now();if(e&&i&&a){var u=function(n,t){return t?Math.min(1,n.offsetWidth/window.innerWidth):1}(a,r),l=t.x-e.x,c=t.y-e.y,p=l/u,f=c/u,m=s-i,d=l*l+c*c,v=Math.sqrt(d)/m;n.velocity={velocityX:p,velocityY:f,total:v}}n.lastMousePosition=t,n.velocityTime=s}}function T(n,t){var e=n.transformState.scale;u(n),m(n,e),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(n,t){var e=t.touches,i=n.transformState,o=i.positionX,a=i.positionY;if(n.isPanning=!0,1===e.length){var r=e[0].clientX,s=e[0].clientY;n.startCoords={x:r-o,y:s-a}}}(n,t):function(n,t){var e=n.transformState,i=e.positionX,o=e.positionY;n.isPanning=!0;var a=t.clientX,r=t.clientY;n.startCoords={x:a-i,y:r-o}}(n,t)}function x(n){var t=n.transformState.scale,e=n.setup,i=e.minScale,o=e.alignmentAnimation,a=o.disabled,r=o.sizeX,s=o.sizeY,u=o.animationTime,l=o.animationType;if(!(a||t<i||!r&&!s)){var p=function(n){var t=n.transformState,e=t.positionX,i=t.positionY,o=t.scale,a=n.setup,r=a.disabled,s=a.limitToBounds,u=a.centerZoomedOut,l=n.wrapperComponent;if(!r&&l&&n.bounds){var c=n.bounds,p=c.maxPositionX,f=c.minPositionX,m=c.maxPositionY,d=c.minPositionY,h=e>p||e<f,g=i>m||i<d,S=v(n,e>p?l.offsetWidth:n.setup.minPositionX||0,i>m?l.offsetHeight:n.setup.minPositionY||0,o,n.bounds,s||u),y=S.x,w=S.y;return{scale:o,positionX:h?y:e,positionY:g?w:i}}}(n);p&&c(n,p,u,l)}}function Y(n,t,e){var i=n.startCoords,o=n.setup.alignmentAnimation,a=o.sizeX,r=o.sizeY;if(i){var s=function(n,t,e){var i=n.startCoords,o=n.transformState,a=n.setup.panning,r=a.lockAxisX,s=a.lockAxisY,u=o.positionX,l=o.positionY;if(!i)return{x:u,y:l};var c=t-i.x,p=e-i.y;return{x:r?u:c,y:s?l:p}}(n,t,e),u=s.x,l=s.y,c=y(n,a),p=y(n,r);P(n,{x:u,y:l}),function(n,t,e,i,o){var a=n.setup.limitToBounds,r=n.wrapperComponent,s=n.bounds,u=n.transformState,l=u.scale,c=u.positionX,p=u.positionY;if(null!==r&&null!==s&&(t!==c||e!==p)){var f=d(t,e,s,a,i,o,r),m=f.x,v=f.y;n.setTransformState(l,m,v)}}(n,u,l,c,p)}}function E(n){if(n.isPanning){var t=n.setup.panning.velocityDisabled,e=n.velocity,i=n.wrapperComponent,o=n.contentComponent;n.isPanning=!1,n.animate=!1,n.animation=null;var a=null==i?void 0:i.getBoundingClientRect(),s=null==o?void 0:o.getBoundingClientRect(),u=(null==a?void 0:a.width)||0,c=(null==a?void 0:a.height)||0,p=(null==s?void 0:s.width)||0,f=(null==s?void 0:s.height)||0,m=u<p||c<f;!t&&e&&(null==e?void 0:e.total)>.1&&m?function(n){var t=n.velocity,e=n.bounds,i=n.setup,o=n.wrapperComponent;if(b(n)&&t&&e&&o){var a=t.velocityX,s=t.velocityY,u=t.total,c=e.maxPositionX,p=e.minPositionX,f=e.maxPositionY,m=e.minPositionY,d=i.limitToBounds,v=i.alignmentAnimation,h=i.zoomAnimation,g=i.panning,S=g.lockAxisY,w=g.lockAxisX,P=h.animationType,T=v.sizeX,x=v.sizeY,Y=v.velocityAlignmentTime,E=function(n,t){var e=n.setup.velocityAnimation,i=e.equalToMove,o=e.animationTime,a=e.sensitivity;return i?o*t*a:o}(n,u),X=Math.max(E,Y),N=y(n,T),k=y(n,x),z=N*o.offsetWidth/100,W=k*o.offsetHeight/100,D=c+z,O=p-z,A=f+W,I=m-W,M=n.transformState,B=(new Date).getTime();l(n,P,X,(function(t){var e=n.transformState,i=e.scale,o=e.positionX,u=e.positionY,l=((new Date).getTime()-B)/Y,h=1-(0,r[v.animationType])(Math.min(1,l)),g=1-t,y=o+a*g,b=u+s*g,P=C(y,M.positionX,o,w,d,p,c,O,D,h),T=C(b,M.positionY,u,S,d,m,f,I,A,h);o===y&&u===b||n.setTransformState(i,P,T)}))}}(n):x(n)}}function X(n,t,e,i){var a=n.setup,r=a.minScale,s=a.maxScale,u=a.limitToBounds,l=h(o(t,2),r,s,0,!1),c=v(n,e,i,l,m(n,l),u);return{scale:l,positionX:c.x,positionY:c.y}}function N(n,t,e){var i=n.transformState.scale,o=n.wrapperComponent,a=n.setup,r=a.minScale,s=a.limitToBounds,u=a.zoomAnimation,l=u.disabled,p=u.animationTime,f=u.animationType,m=l||i>=r;if((i>=1||s)&&x(n),!m&&o&&n.mounted){var d=X(n,r,t||o.offsetWidth/2,e||o.offsetHeight/2);d&&c(n,d,p,f)}}var k=function(){return k=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},k.apply(this,arguments)};function z(n,t,e){if(e||2===arguments.length)for(var i,o=0,a=t.length;o<a;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return n.concat(i||Array.prototype.slice.call(t))}var W=1,D=0,O=0,A={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},I=function(n){var t,e,i,o;return{previousScale:null!==(t=n.initialScale)&&void 0!==t?t:W,scale:null!==(e=n.initialScale)&&void 0!==e?e:W,positionX:null!==(i=n.initialPositionX)&&void 0!==i?i:D,positionY:null!==(o=n.initialPositionY)&&void 0!==o?o:O}},M=function(n){var t=k({},A);return Object.keys(n).forEach((function(e){var i=void 0!==n[e];if(void 0!==A[e]&&i){var o=Object.prototype.toString.call(A[e]),a="[object Object]"===o,r="[object Array]"===o;t[e]=a?k(k({},A[e]),n[e]):r?z(z([],A[e],!0),n[e],!0):n[e]}})),t},B=function(n,t,e){var i=n.transformState.scale,a=n.wrapperComponent,r=n.setup,s=r.maxScale,u=r.minScale,l=r.zoomAnimation,c=r.smooth,p=l.size;if(!a)throw new Error("Wrapper is not mounted");var f=c?i*Math.exp(t*e):i+t*e;return h(o(f,3),u,s,p,!1)};function K(n,t,e,i,o){var a=n.wrapperComponent,r=n.transformState,s=r.scale,u=r.positionX,l=r.positionY;if(!a)return console.error("No WrapperComponent found");var p=(a.offsetWidth/2-u)/s,f=(a.offsetHeight/2-l)/s,m=X(n,B(n,t,e),p,f);if(!m)return console.error("Error during zoom event. New transformation state was not calculated.");c(n,m,i,o)}function L(n,t,e,i){var o=n.setup,a=n.wrapperComponent,r=o.limitToBounds,s=I(n.props),u=n.transformState,l=u.scale,f=u.positionX,m=u.positionY;if(a){var v=p(n,s.scale),h=d(s.positionX,s.positionY,v,r,0,0,a),g={scale:s.scale,positionX:h.x,positionY:h.y};l===s.scale&&f===s.positionX&&m===s.positionY||(null==i||i(),c(n,g,t,e))}}var Z=function(n){return function(t,e,i){void 0===t&&(t=.5),void 0===e&&(e=300),void 0===i&&(i="easeOut"),K(n,1,t,e,i)}},R=function(n){return function(t,e,i){void 0===t&&(t=.5),void 0===e&&(e=300),void 0===i&&(i="easeOut"),K(n,-1,t,e,i)}},H=function(n){return function(t,e,i,o,a){void 0===o&&(o=300),void 0===a&&(a="easeOut");var r=n.transformState,s=r.positionX,u=r.positionY,l=r.scale,p=n.wrapperComponent,f=n.contentComponent;if(!n.setup.disabled&&p&&f){var m={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(e)?u:e,scale:Number.isNaN(i)?l:i};c(n,m,o,a)}}},_=function(n){return function(t,e){void 0===t&&(t=200),void 0===e&&(e="easeOut"),L(n,t,e)}},F=function(n){return function(t,e,i){void 0===e&&(e=200),void 0===i&&(i="easeOut");var o=n.transformState,a=n.wrapperComponent,r=n.contentComponent;if(a&&r){var s=J(t||o.scale,a,r);c(n,s,e,i)}}},j=function(n){return function(t,e,i,o){void 0===i&&(i=600),void 0===o&&(o="easeOut"),u(n);var a=n.wrapperComponent,r="string"==typeof t?document.getElementById(t):t;if(a&&r&&a.contains(r)){var s=function(n,t,e){var i=n.wrapperComponent,o=n.contentComponent,a=n.transformState,r=n.setup,s=r.limitToBounds,u=r.minScale,l=r.maxScale;if(!i||!o)return a;var c,f,m,v,g,S,y,w,b=i.getBoundingClientRect(),C=t.getBoundingClientRect(),P=(c=i,f=o,m=a,v=t.getBoundingClientRect(),g=c.getBoundingClientRect(),S=f.getBoundingClientRect(),y=g.x*m.scale,w=g.y*m.scale,{x:(v.x-S.x+y)/m.scale,y:(v.y-S.y+w)/m.scale}),T=P.x,x=P.y,Y=C.width/a.scale,E=C.height/a.scale,X=i.offsetWidth/Y,N=i.offsetHeight/E,k=h(e||Math.min(X,N),u,l,0,!1),z=(b.width-Y*k)/2,W=(b.height-E*k)/2,D=d((b.left-T)*k+z,(b.top-x)*k+W,p(n,k),s,0,0,i);return{positionX:D.x,positionY:D.y,scale:k}}(n,r,e);c(n,s,i,o)}}},Q=function(n){return{instance:n,zoomIn:Z(n),zoomOut:R(n),setTransform:H(n),resetTransform:_(n),centerView:F(n),zoomToElement:j(n)}},q=function(n){return{instance:n,state:n.transformState}},U=function(n){var t={};return Object.assign(t,q(n)),Object.assign(t,Q(n)),t};function V(){try{return{get passive(){return!0,!1}}}catch(n){return!1}}var $=function(n,t){var e=n.tagName.toUpperCase();return!!t.find((function(n){return n.toUpperCase()===e}))||!!t.find((function(t){return n.classList.contains(t)}))},G=function(n){n&&clearTimeout(n)},J=function(n,t,e){var i=e.offsetWidth*n,o=e.offsetHeight*n;return{scale:n,positionX:(t.offsetWidth-i)/2,positionY:(t.offsetHeight-o)/2}};function nn(n,t,e){var i=t.getBoundingClientRect(),o=0,a=0;if("clientX"in n)o=(n.clientX-i.left)/e,a=(n.clientY-i.top)/e;else{var r=n.touches[0];o=(r.clientX-i.left)/e,a=(r.clientY-i.top)/e}return(Number.isNaN(o)||Number.isNaN(a))&&console.error("No mouse or touch offset found"),{x:o,y:a}}var tn=function(n){return Math.sqrt(Math.pow(n.touches[0].pageX-n.touches[1].pageX,2)+Math.pow(n.touches[0].pageY-n.touches[1].pageY,2))},en=function(n,t){var e=n.props,i=e.onWheel,r=e.onZoom,s=n.contentComponent,u=n.setup,l=n.transformState.scale,c=u.limitToBounds,p=u.centerZoomedOut,f=u.zoomAnimation,d=u.wheel,g=u.disablePadding,S=u.smooth,y=f.size,w=f.disabled,b=d.step,C=d.smoothStep;if(!s)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var P=function(n,t){var e,i,o=function(n){return n?n.deltaY<0?1:-1:0}(n);return i=o,"number"==typeof(e=t)?e:i}(t,null),T=function(n,t,e,i,a){var r=n.transformState.scale,s=n.wrapperComponent,u=n.setup,l=u.maxScale,c=u.minScale,p=u.zoomAnimation,f=u.disablePadding,m=p.size,d=p.disabled;if(!s)throw new Error("Wrapper is not mounted");var v=r+t*e;if(a)return v;var g=!i&&!d;return h(o(v,3),c,l,m,g&&!f)}(n,P,S?C*Math.abs(t.deltaY):b,!t.ctrlKey);if(l!==T){var x=m(n,T),Y=nn(t,s,l),E=c&&(w||0===y||p||g),X=v(n,Y.x,Y.y,T,x,E),N=X.x,k=X.y;n.previousWheelEvent=t,n.setTransformState(T,N,k),a(U(n),t,i),a(U(n),t,r)}},on=function(n,t){var e=n.props,i=e.onWheelStop,o=e.onZoomStop;G(n.wheelAnimationTimer),n.wheelAnimationTimer=setTimeout((function(){n.mounted&&(N(n,t.x,t.y),n.wheelAnimationTimer=null)}),100);var r=function(n,t){var e=n.previousWheelEvent,i=n.transformState.scale,o=n.setup,a=o.maxScale,r=o.minScale;return!!e&&(i<a||i>r||Math.sign(e.deltaY)!==Math.sign(t.deltaY)||e.deltaY>0&&e.deltaY<t.deltaY||e.deltaY<0&&e.deltaY>t.deltaY||Math.sign(e.deltaY)!==Math.sign(t.deltaY))}(n,t);r&&(G(n.wheelStopEventTimer),n.wheelStopEventTimer=setTimeout((function(){n.mounted&&(n.wheelStopEventTimer=null,a(U(n),t,i),a(U(n),t,o))}),160))},an=function(n,t){var e=n.contentComponent,i=n.pinchStartDistance,a=n.transformState.scale,r=n.setup,s=r.limitToBounds,u=r.centerZoomedOut,l=r.zoomAnimation,c=l.disabled,p=l.size;if(null!==i&&e){var f=function(n,t,e){var i=e.getBoundingClientRect(),a=n.touches,r=o(a[0].clientX-i.left,5),s=o(a[0].clientY-i.top,5);return{x:(r+o(a[1].clientX-i.left,5))/2/t,y:(s+o(a[1].clientY-i.top,5))/2/t}}(t,a,e);if(Number.isFinite(f.x)&&Number.isFinite(f.y)){var d=tn(t),g=function(n,t){var e=n.pinchStartScale,i=n.pinchStartDistance,a=n.setup,r=a.maxScale,s=a.minScale,u=a.zoomAnimation,l=a.disablePadding,c=u.size,p=u.disabled;if(!e||null===i||!t)throw new Error("Pinch touches distance was not provided");return t<0?n.transformState.scale:h(o(t/i*e,2),s,r,c,!p&&!l)}(n,d);if(g!==a){var S=m(n,g),y=s&&(c||0===p||u),w=v(n,f.x,f.y,g,S,y),b=w.x,C=w.y;n.pinchMidpoint=f,n.lastDistance=d,n.setTransformState(g,b,C)}}}},rn=function(n,t){var e=n.props.onZoomStop,i=n.setup.doubleClick.animationTime;G(n.doubleClickStopEventTimer),n.doubleClickStopEventTimer=setTimeout((function(){n.doubleClickStopEventTimer=null,a(U(n),t,e)}),i)};function sn(n,t){var e=n.setup,i=n.doubleClickStopEventTimer,o=n.transformState,r=n.contentComponent,s=o.scale,u=n.props,l=u.onZoomStart,p=u.onZoom,f=e.doubleClick,m=f.disabled,d=f.mode,v=f.step,h=f.animationTime,g=f.animationType;if(!m&&!i){if("reset"===d)return function(n,t){var e=n.props,i=e.onZoomStart,o=e.onZoom,r=n.setup.doubleClick,s=r.animationTime,u=r.animationType;a(U(n),t,i),L(n,s,u,(function(){return a(U(n),t,o)})),rn(n,t)}(n,t);if(!r)return console.error("No ContentComponent found");var S=B(n,"zoomOut"===d?-1:1,v);if(s!==S){a(U(n),t,l);var y=nn(t,r,s),w=X(n,S,y.x,y.y);if(!w)return console.error("Error during zoom event. New transformation state was not calculated.");a(U(n),t,p),c(n,w,h,g),rn(n,t)}}}var un=function(n){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(n){m(t,t.transformState.scale),t.setup=M(n)},this.initializeWindowEvents=function(){var n,e=V(),i=null===(n=t.wrapperComponent)||void 0===n?void 0:n.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.addEventListener("mousedown",t.onPanningStart,e),null==o||o.addEventListener("mousemove",t.onPanning,e),null==o||o.addEventListener("mouseup",t.onPanningStop,e),null==i||i.addEventListener("mouseleave",t.clearPanning,e),null==o||o.addEventListener("keyup",t.setKeyUnPressed,e),null==o||o.addEventListener("keydown",t.setKeyPressed,e)},this.cleanupWindowEvents=function(){var n,e,i=V(),o=null===(n=t.wrapperComponent)||void 0===n?void 0:n.ownerDocument,a=null==o?void 0:o.defaultView;null==a||a.removeEventListener("mousedown",t.onPanningStart,i),null==a||a.removeEventListener("mousemove",t.onPanning,i),null==a||a.removeEventListener("mouseup",t.onPanningStop,i),null==o||o.removeEventListener("mouseleave",t.clearPanning,i),null==a||a.removeEventListener("keyup",t.setKeyUnPressed,i),null==a||a.removeEventListener("keydown",t.setKeyPressed,i),document.removeEventListener("mouseleave",t.clearPanning,i),u(t),null===(e=t.observer)||void 0===e||e.disconnect()},this.handleInitializeWrapperEvents=function(n){var e=V();n.addEventListener("wheel",t.onWheelZoom,e),n.addEventListener("dblclick",t.onDoubleClick,e),n.addEventListener("touchstart",t.onTouchPanningStart,e),n.addEventListener("touchmove",t.onTouchPanning,e),n.addEventListener("touchend",t.onTouchPanningStop,e)},this.handleInitialize=function(n){var e=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(n){return n(U(t))})),e&&(t.setCenter(),t.observer=new ResizeObserver((function(){var n;t.onInitCallbacks.forEach((function(n){return n(U(t))})),t.setCenter(),null===(n=t.observer)||void 0===n||n.disconnect()})),t.observer.observe(n))},this.onWheelZoom=function(n){if(!t.setup.disabled){var e=function(n,t){var e=n.setup.wheel,i=e.disabled,o=e.wheelDisabled,a=e.touchPadDisabled,r=e.excluded,s=n.isInitialized,u=n.isPanning,l=t.target;return!(!s||u||i||!l||o&&!t.ctrlKey||a&&t.ctrlKey||$(l,r))}(t,n);e&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(n,t){var e=n.props,i=e.onWheelStart,o=e.onZoomStart;n.wheelStopEventTimer||(u(n),a(U(n),t,i),a(U(n),t,o))}(t,n),en(t,n),on(t,n))}},this.onPanningStart=function(n){var e=t.setup.disabled,i=t.props.onPanningStart;e||g(t,n)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==n.button||t.setup.panning.allowLeftClickPan)&&(1!==n.button||t.setup.panning.allowMiddleClickPan)&&(2!==n.button||t.setup.panning.allowRightClickPan)&&(n.preventDefault(),n.stopPropagation(),u(t),T(t,n),a(U(t),n,i))},this.onPanning=function(n){var e=t.setup.disabled,i=t.props.onPanning;e||S(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(n.preventDefault(),n.stopPropagation(),Y(t,n.clientX,n.clientY),a(U(t),n,i))},this.onPanningStop=function(n){var e=t.props.onPanningStop;t.isPanning&&(E(t),a(U(t),n,e))},this.onPinchStart=function(n){var e=t.setup.disabled,i=t.props,o=i.onPinchingStart,r=i.onZoomStart;if(!e){var s=function(n,t){var e=n.setup.pinch,i=e.disabled,o=e.excluded,a=n.isInitialized,r=t.target;return!(!a||i||!r||$(r,o))}(t,n);s&&(function(n,t){var e=tn(t);n.pinchStartDistance=e,n.lastDistance=e,n.pinchStartScale=n.transformState.scale,n.isPanning=!1,u(n)}(t,n),u(t),a(U(t),n,o),a(U(t),n,r))}},this.onPinch=function(n){var e=t.setup.disabled,i=t.props,o=i.onPinching,r=i.onZoom;if(!e){var s=function(n){var t=n.setup.pinch.disabled,e=n.isInitialized,i=n.pinchStartDistance;return!(!e||t||!i)}(t);s&&(n.preventDefault(),n.stopPropagation(),an(t,n),a(U(t),n,o),a(U(t),n,r))}},this.onPinchStop=function(n){var e,i,o=t.props,r=o.onPinchingStop,s=o.onZoomStop;t.pinchStartScale&&(i=(e=t).pinchMidpoint,e.velocity=null,e.lastDistance=null,e.pinchMidpoint=null,e.pinchStartScale=null,e.pinchStartDistance=null,N(e,null==i?void 0:i.x,null==i?void 0:i.y),a(U(t),n,r),a(U(t),n,s))},this.onTouchPanningStart=function(n){var e=t.setup.disabled,i=t.props.onPanningStart;if(!e&&g(t,n))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===n.touches.length)t.onDoubleClick(n);else{t.lastTouch=+new Date,u(t);var o=n.touches,r=1===o.length,s=2===o.length;r&&(u(t),T(t,n),a(U(t),n,i)),s&&t.onPinchStart(n)}},this.onTouchPanning=function(n){var e=t.setup.disabled,i=t.props.onPanning;if(t.isPanning&&1===n.touches.length){if(e)return;if(!S(t))return;n.preventDefault(),n.stopPropagation();var o=n.touches[0];Y(t,o.clientX,o.clientY),a(U(t),n,i)}else n.touches.length>1&&t.onPinch(n)},this.onTouchPanningStop=function(n){t.onPanningStop(n),t.onPinchStop(n)},this.onDoubleClick=function(n){if(!t.setup.disabled){var e=function(n,t){var e=n.isInitialized,i=n.setup,o=n.wrapperComponent,a=i.doubleClick,r=a.disabled,s=a.excluded,u=t.target,l=null==o?void 0:o.contains(u);return!(!(e&&u&&l)||r||$(u,s))}(t,n);e&&sn(t,n)}},this.clearPanning=function(n){t.isPanning&&t.onPanningStop(n)},this.setKeyPressed=function(n){t.pressedKeys[n.key]=!0},this.setKeyUnPressed=function(n){t.pressedKeys[n.key]=!1},this.isPressingKeys=function(n){return!n.length||Boolean(n.find((function(n){return t.pressedKeys[n]})))},this.setTransformState=function(n,e,i){var o=t.props.onTransformed;if(Number.isNaN(n)||Number.isNaN(e)||Number.isNaN(i))console.error("Detected NaN set state values");else{n!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=n),t.transformState.positionX=e,t.transformState.positionY=i,t.applyTransformation();var r=U(t);t.onChangeCallbacks.forEach((function(n){return n(r)})),a(r,{scale:n,positionX:e,positionY:i},o)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var n=J(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(n.scale,n.positionX,n.positionY)}},this.handleTransformStyles=function(n,e,i){return t.props.customTransform?t.props.customTransform(n,e,i):function(n,t,e){return"translate(".concat(n,"px, ").concat(t,"px) scale(").concat(e,")")}(n,e,i)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var n=t.transformState,e=n.scale,i=n.positionX,o=n.positionY,a=t.handleTransformStyles(i,o,e);t.contentComponent.style.transform=a}},this.getContext=function(){return U(t)},this.onChange=function(n){return t.onChangeCallbacks.has(n)||t.onChangeCallbacks.add(n),function(){t.onChangeCallbacks.delete(n)}},this.onInit=function(n){return t.onInitCallbacks.has(n)||t.onInitCallbacks.add(n),function(){t.onInitCallbacks.delete(n)}},this.init=function(n,e){t.cleanupWindowEvents(),t.wrapperComponent=n,t.contentComponent=e,m(t,t.transformState.scale),t.handleInitializeWrapperEvents(n),t.handleInitialize(e),t.initializeWindowEvents(),t.isInitialized=!0;var i=U(t);a(i,void 0,t.props.onInit)},this.props=n,this.setup=M(this.props),this.transformState=I(this.props)},ln=i.createContext(null),cn=i.forwardRef((function(n,t){var e,o,a=(0,i.useRef)(new un(n)).current,r=(e=n.children,o=Q(a),"function"==typeof e?e(o):e);return(0,i.useImperativeHandle)(t,(function(){return Q(a)}),[a]),(0,i.useEffect)((function(){a.update(n)}),[a,n]),i.createElement(ln.Provider,{value:a},r)}));i.forwardRef((function(n,t){var e,o=(0,i.useRef)(null),a=(0,i.useContext)(ln);return(0,i.useEffect)((function(){return a.onChange((function(n){if(o.current){o.current.style.transform=a.handleTransformStyles(0,0,1/n.instance.transformState.scale)}}))}),[a]),i.createElement("div",k({},n,{ref:(e=[o,t],function(n){e.forEach((function(t){"function"==typeof t?t(n):null!=t&&(t.current=n)}))})}))}));var pn="transform-component-module_wrapper__SPB86",fn="transform-component-module_content__FBWxo";!function(n,t){void 0===t&&(t={});var e=t.insertAt;if(n&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===e&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var mn=function(n){var t=n.children,e=n.wrapperClass,o=void 0===e?"":e,a=n.contentClass,r=void 0===a?"":a,s=n.wrapperStyle,u=n.contentStyle,l=n.wrapperProps,c=void 0===l?{}:l,p=n.contentProps,f=void 0===p?{}:p,m=(0,i.useContext)(ln),d=m.init,v=m.cleanupWindowEvents,h=(0,i.useRef)(null),g=(0,i.useRef)(null);return(0,i.useEffect)((function(){var n=h.current,t=g.current;return null!==n&&null!==t&&d&&(null==d||d(n,t)),function(){null==v||v()}}),[]),i.createElement("div",k({},c,{ref:h,className:"react-transform-wrapper ".concat(pn," ").concat(o),style:s}),i.createElement("div",k({},f,{ref:g,className:"react-transform-component ".concat(fn," ").concat(r),style:u}),t))}},1151:function(n,t,e){e.d(t,{Z:function(){return s},a:function(){return r}});var i=e(7294);const o={},a=i.createContext(o);function r(n){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(a.Provider,{value:t},n.children)}}}]);