var Bx=Object.defineProperty;var Fx=(o,t,i)=>t in o?Bx(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var ge=(o,t,i)=>Fx(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function r0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Lf={exports:{}},vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function Hx(){if(W_)return vo;W_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var f in l)f!=="key"&&(u[f]=l[f])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return vo.Fragment=t,vo.jsx=i,vo.jsxs=i,vo}var q_;function kx(){return q_||(q_=1,Lf.exports=Hx()),Lf.exports}var za=kx(),Nf={exports:{}},xo={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function Gx(){return Y_||(Y_=1,function(o){function t(X,q){var tt=X.length;X.push(q);t:for(;0<tt;){var rt=tt-1>>>1,H=X[rt];if(0<l(H,q))X[rt]=q,X[tt]=H,tt=rt;else break t}}function i(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var q=X[0],tt=X.pop();if(tt!==q){X[0]=tt;t:for(var rt=0,H=X.length,G=H>>>1;rt<G;){var Z=2*(rt+1)-1,vt=X[Z],J=Z+1,at=X[J];if(0>l(vt,tt))J<H&&0>l(at,vt)?(X[rt]=at,X[J]=tt,rt=J):(X[rt]=vt,X[Z]=tt,rt=Z);else if(J<H&&0>l(at,tt))X[rt]=at,X[J]=tt,rt=J;else break t}}return q}function l(X,q){var tt=X.sortIndex-q.sortIndex;return tt!==0?tt:X.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();o.unstable_now=function(){return h.now()-f}}var d=[],p=[],g=1,x=null,y=3,v=!1,b=!1,E=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function C(X){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=X)r(p),q.sortIndex=q.expirationTime,t(d,q);else break;q=i(p)}}function N(X){if(E=!1,C(X),!b)if(i(d)!==null)b=!0,k||(k=!0,z());else{var q=i(p);q!==null&&$(N,q.startTime-X)}}var k=!1,B=-1,W=5,U=-1;function L(){return S?!0:!(o.unstable_now()-U<W)}function j(){if(S=!1,k){var X=o.unstable_now();U=X;var q=!0;try{t:{b=!1,E&&(E=!1,A(B),B=-1),v=!0;var tt=y;try{e:{for(C(X),x=i(d);x!==null&&!(x.expirationTime>X&&L());){var rt=x.callback;if(typeof rt=="function"){x.callback=null,y=x.priorityLevel;var H=rt(x.expirationTime<=X);if(X=o.unstable_now(),typeof H=="function"){x.callback=H,C(X),q=!0;break e}x===i(d)&&r(d),C(X)}else r(d);x=i(d)}if(x!==null)q=!0;else{var G=i(p);G!==null&&$(N,G.startTime-X),q=!1}}break t}finally{x=null,y=tt,v=!1}q=void 0}}finally{q?z():k=!1}}}var z;if(typeof R=="function")z=function(){R(j)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,T=Y.port2;Y.port1.onmessage=j,z=function(){T.postMessage(null)}}else z=function(){_(j,0)};function $(X,q){B=_(function(){X(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(X){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var tt=y;y=q;try{return X()}finally{y=tt}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(X,q){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var tt=y;y=X;try{return q()}finally{y=tt}},o.unstable_scheduleCallback=function(X,q,tt){var rt=o.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?rt+tt:rt):tt=rt,X){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=tt+H,X={id:g++,callback:q,priorityLevel:X,startTime:tt,expirationTime:H,sortIndex:-1},tt>rt?(X.sortIndex=tt,t(p,X),i(d)===null&&X===i(p)&&(E?(A(B),B=-1):E=!0,$(N,tt-rt))):(X.sortIndex=H,t(d,X),b||v||(b=!0,k||(k=!0,z()))),X},o.unstable_shouldYield=L,o.unstable_wrapCallback=function(X){var q=y;return function(){var tt=y;y=q;try{return X.apply(this,arguments)}finally{y=tt}}}}(Pf)),Pf}var Z_;function Vx(){return Z_||(Z_=1,Of.exports=Gx()),Of.exports}var zf={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function Xx(){if(j_)return he;j_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function y(H){return H===null||typeof H!="object"?null:(H=x&&H[x]||H["@@iterator"],typeof H=="function"?H:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function S(H,G,Z){this.props=H,this.context=G,this.refs=E,this.updater=Z||v}S.prototype.isReactComponent={},S.prototype.setState=function(H,G){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,G,"setState")},S.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function _(){}_.prototype=S.prototype;function A(H,G,Z){this.props=H,this.context=G,this.refs=E,this.updater=Z||v}var R=A.prototype=new _;R.constructor=A,b(R,S.prototype),R.isPureReactComponent=!0;var C=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function B(H,G,Z,vt,J,at){return Z=at.ref,{$$typeof:o,type:H,key:G,ref:Z!==void 0?Z:null,props:at}}function W(H,G){return B(H.type,G,void 0,void 0,void 0,H.props)}function U(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function L(H){var G={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(Z){return G[Z]})}var j=/\/+/g;function z(H,G){return typeof H=="object"&&H!==null&&H.key!=null?L(""+H.key):G.toString(36)}function Y(){}function T(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(Y,Y):(H.status="pending",H.then(function(G){H.status==="pending"&&(H.status="fulfilled",H.value=G)},function(G){H.status==="pending"&&(H.status="rejected",H.reason=G)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function $(H,G,Z,vt,J){var at=typeof H;(at==="undefined"||at==="boolean")&&(H=null);var At=!1;if(H===null)At=!0;else switch(at){case"bigint":case"string":case"number":At=!0;break;case"object":switch(H.$$typeof){case o:case t:At=!0;break;case g:return At=H._init,$(At(H._payload),G,Z,vt,J)}}if(At)return J=J(H),At=vt===""?"."+z(H,0):vt,C(J)?(Z="",At!=null&&(Z=At.replace(j,"$&/")+"/"),$(J,G,Z,"",function(Wt){return Wt})):J!=null&&(U(J)&&(J=W(J,Z+(J.key==null||H&&H.key===J.key?"":(""+J.key).replace(j,"$&/")+"/")+At)),G.push(J)),1;At=0;var Nt=vt===""?".":vt+":";if(C(H))for(var Ct=0;Ct<H.length;Ct++)vt=H[Ct],at=Nt+z(vt,Ct),At+=$(vt,G,Z,at,J);else if(Ct=y(H),typeof Ct=="function")for(H=Ct.call(H),Ct=0;!(vt=H.next()).done;)vt=vt.value,at=Nt+z(vt,Ct++),At+=$(vt,G,Z,at,J);else if(at==="object"){if(typeof H.then=="function")return $(T(H),G,Z,vt,J);throw G=String(H),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return At}function X(H,G,Z){if(H==null)return H;var vt=[],J=0;return $(H,vt,"","",function(at){return G.call(Z,at,J++)}),vt}function q(H){if(H._status===-1){var G=H._result;G=G(),G.then(function(Z){(H._status===0||H._status===-1)&&(H._status=1,H._result=Z)},function(Z){(H._status===0||H._status===-1)&&(H._status=2,H._result=Z)}),H._status===-1&&(H._status=0,H._result=G)}if(H._status===1)return H._result.default;throw H._result}var tt=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function rt(){}return he.Children={map:X,forEach:function(H,G,Z){X(H,function(){G.apply(this,arguments)},Z)},count:function(H){var G=0;return X(H,function(){G++}),G},toArray:function(H){return X(H,function(G){return G})||[]},only:function(H){if(!U(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},he.Component=S,he.Fragment=i,he.Profiler=l,he.PureComponent=A,he.StrictMode=r,he.Suspense=d,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,he.__COMPILER_RUNTIME={__proto__:null,c:function(H){return N.H.useMemoCache(H)}},he.cache=function(H){return function(){return H.apply(null,arguments)}},he.cloneElement=function(H,G,Z){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var vt=b({},H.props),J=H.key,at=void 0;if(G!=null)for(At in G.ref!==void 0&&(at=void 0),G.key!==void 0&&(J=""+G.key),G)!k.call(G,At)||At==="key"||At==="__self"||At==="__source"||At==="ref"&&G.ref===void 0||(vt[At]=G[At]);var At=arguments.length-2;if(At===1)vt.children=Z;else if(1<At){for(var Nt=Array(At),Ct=0;Ct<At;Ct++)Nt[Ct]=arguments[Ct+2];vt.children=Nt}return B(H.type,J,void 0,void 0,at,vt)},he.createContext=function(H){return H={$$typeof:h,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:u,_context:H},H},he.createElement=function(H,G,Z){var vt,J={},at=null;if(G!=null)for(vt in G.key!==void 0&&(at=""+G.key),G)k.call(G,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(J[vt]=G[vt]);var At=arguments.length-2;if(At===1)J.children=Z;else if(1<At){for(var Nt=Array(At),Ct=0;Ct<At;Ct++)Nt[Ct]=arguments[Ct+2];J.children=Nt}if(H&&H.defaultProps)for(vt in At=H.defaultProps,At)J[vt]===void 0&&(J[vt]=At[vt]);return B(H,at,void 0,void 0,null,J)},he.createRef=function(){return{current:null}},he.forwardRef=function(H){return{$$typeof:f,render:H}},he.isValidElement=U,he.lazy=function(H){return{$$typeof:g,_payload:{_status:-1,_result:H},_init:q}},he.memo=function(H,G){return{$$typeof:p,type:H,compare:G===void 0?null:G}},he.startTransition=function(H){var G=N.T,Z={};N.T=Z;try{var vt=H(),J=N.S;J!==null&&J(Z,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(rt,tt)}catch(at){tt(at)}finally{N.T=G}},he.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},he.use=function(H){return N.H.use(H)},he.useActionState=function(H,G,Z){return N.H.useActionState(H,G,Z)},he.useCallback=function(H,G){return N.H.useCallback(H,G)},he.useContext=function(H){return N.H.useContext(H)},he.useDebugValue=function(){},he.useDeferredValue=function(H,G){return N.H.useDeferredValue(H,G)},he.useEffect=function(H,G,Z){var vt=N.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return vt.useEffect(H,G)},he.useId=function(){return N.H.useId()},he.useImperativeHandle=function(H,G,Z){return N.H.useImperativeHandle(H,G,Z)},he.useInsertionEffect=function(H,G){return N.H.useInsertionEffect(H,G)},he.useLayoutEffect=function(H,G){return N.H.useLayoutEffect(H,G)},he.useMemo=function(H,G){return N.H.useMemo(H,G)},he.useOptimistic=function(H,G){return N.H.useOptimistic(H,G)},he.useReducer=function(H,G,Z){return N.H.useReducer(H,G,Z)},he.useRef=function(H){return N.H.useRef(H)},he.useState=function(H){return N.H.useState(H)},he.useSyncExternalStore=function(H,G,Z){return N.H.useSyncExternalStore(H,G,Z)},he.useTransition=function(){return N.H.useTransition()},he.version="19.1.0",he}var K_;function rd(){return K_||(K_=1,zf.exports=Xx()),zf.exports}var If={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function Wx(){if(Q_)return An;Q_=1;var o=rd();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(d,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:d,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(d,p,null,g)},An.flushSync=function(d){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,d)return d()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(d,p))},An.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},An.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,x=f(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,v=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:v}):g==="script"&&r.d.X(d,{crossOrigin:x,integrity:y,fetchPriority:v,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);r.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(d)},An.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=f(g,p.crossOrigin);r.d.L(d,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=f(p.as,p.crossOrigin);r.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(d)},An.requestFormReset=function(d){r.d.r(d)},An.unstable_batchedUpdates=function(d,p){return d(p)},An.useFormState=function(d,p,g){return h.H.useFormState(d,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.1.0",An}var J_;function qx(){if(J_)return If.exports;J_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),If.exports=Wx(),If.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function Yx(){if($_)return xo;$_=1;var o=Vx(),t=rd(),i=qx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function f(e){if(u(e)!==e)throw Error(r(188))}function d(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var m=c.alternate;if(m===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===m.child){for(m=c.child;m;){if(m===a)return f(c),e;if(m===s)return f(c),n;m=m.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=m;else{for(var w=!1,O=c.child;O;){if(O===a){w=!0,a=c,s=m;break}if(O===s){w=!0,s=c,a=m;break}O=O.sibling}if(!w){for(O=m.child;O;){if(O===a){w=!0,a=m,s=c;break}if(O===s){w=!0,s=m,a=c;break}O=O.sibling}if(!w)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),R=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function T(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case N:return"Suspense";case k:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case v:return"Portal";case R:return(e.displayName||"Context")+".Provider";case A:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:T(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return T(e(n))}catch{}}return null}var $=Array.isArray,X=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},rt=[],H=-1;function G(e){return{current:e}}function Z(e){0>H||(e.current=rt[H],rt[H]=null,H--)}function vt(e,n){H++,rt[H]=e.current,e.current=n}var J=G(null),at=G(null),At=G(null),Nt=G(null);function Ct(e,n){switch(vt(At,n),vt(at,e),vt(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?x_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=x_(n),e=y_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(J),vt(J,e)}function Wt(){Z(J),Z(at),Z(At)}function Yt(e){e.memoizedState!==null&&vt(Nt,e);var n=J.current,a=y_(n,e.type);n!==a&&(vt(at,e),vt(J,a))}function re(e){at.current===e&&(Z(J),Z(at)),Nt.current===e&&(Z(Nt),ho._currentValue=tt)}var ve=Object.prototype.hasOwnProperty,ce=o.unstable_scheduleCallback,M=o.unstable_cancelCallback,bt=o.unstable_shouldYield,ht=o.unstable_requestPaint,V=o.unstable_now,F=o.unstable_getCurrentPriorityLevel,et=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,yt=o.unstable_NormalPriority,lt=o.unstable_LowPriority,P=o.unstable_IdlePriority,D=o.log,K=o.unstable_setDisableYieldValue,ct=null,Mt=null;function dt(e){if(typeof D=="function"&&K(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(ct,e)}catch{}}var It=Math.clz32?Math.clz32:Kt,Bt=Math.log,Xt=Math.LN2;function Kt(e){return e>>>=0,e===0?32:31-(Bt(e)/Xt|0)|0}var Tt=256,kt=4194304;function $t(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,m=e.suspendedLanes,w=e.pingedLanes;e=e.warmLanes;var O=s&134217727;return O!==0?(s=O&~m,s!==0?c=$t(s):(w&=O,w!==0?c=$t(w):a||(a=O&~e,a!==0&&(c=$t(a))))):(O=s&~m,O!==0?c=$t(O):w!==0?c=$t(w):a||(a=s&~e,a!==0&&(c=$t(a)))),c===0?0:n!==0&&n!==c&&(n&m)===0&&(m=c&-c,a=n&-n,m>=a||m===32&&(a&4194048)!==0)?n:c}function zt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=Tt;return Tt<<=1,(Tt&4194048)===0&&(Tt=256),e}function Ft(){var e=kt;return kt<<=1,(kt&62914560)===0&&(kt=4194304),e}function Lt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ot(e,n,a,s,c,m){var w=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var O=e.entanglements,Q=e.expirationTimes,mt=e.hiddenUpdates;for(a=w&~a;0<a;){var wt=31-It(a),Dt=1<<wt;O[wt]=0,Q[wt]=-1;var gt=mt[wt];if(gt!==null)for(mt[wt]=null,wt=0;wt<gt.length;wt++){var xt=gt[wt];xt!==null&&(xt.lane&=-536870913)}a&=~Dt}s!==0&&Ut(e,s,0),m!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=m&~(w&~n))}function Ut(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-It(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Qt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-It(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function fe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function we(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:F_(e.type))}function Hn(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var hn=Math.random().toString(36).slice(2),sn="__reactFiber$"+hn,vn="__reactProps$"+hn,Ln="__reactContainer$"+hn,Xa="__reactEvents$"+hn,Bo="__reactListeners$"+hn,Fo="__reactHandles$"+hn,Wa="__reactResources$"+hn,aa="__reactMarker$"+hn;function ra(e){delete e[sn],delete e[vn],delete e[Xa],delete e[Bo],delete e[Fo]}function Ri(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ln]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=b_(e);e!==null;){if(a=e[sn])return a;e=b_(e)}return n}e=a,a=e.parentNode}return null}function Ci(e){if(e=e[sn]||e[Ln]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function sa(e){var n=e[Wa];return n||(n=e[Wa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[aa]=!0}var Ho=new Set,ko={};function Di(e,n){I(e,n),I(e+"Capture",n)}function I(e,n){for(ko[e]=n,e=0;e<n.length;e++)Ho.add(n[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),St={},Et={};function ut(e){return ve.call(Et,e)?!0:ve.call(St,e)?!1:ot.test(e)?Et[e]=!0:(St[e]=!0,!1)}function Pt(e,n,a){if(ut(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ht(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var Zt,se;function ne(e){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",se=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+se}var te=!1;function me(e,n){if(!e||te)return"";te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Dt=function(){throw Error()};if(Object.defineProperty(Dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Dt,[])}catch(xt){var gt=xt}Reflect.construct(e,[],Dt)}else{try{Dt.call()}catch(xt){gt=xt}e.call(Dt.prototype)}}else{try{throw Error()}catch(xt){gt=xt}(Dt=e())&&typeof Dt.catch=="function"&&Dt.catch(function(){})}}catch(xt){if(xt&&gt&&typeof xt.stack=="string")return[xt.stack,gt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=s.DetermineComponentFrameRoot(),w=m[0],O=m[1];if(w&&O){var Q=w.split(`
`),mt=O.split(`
`);for(c=s=0;s<Q.length&&!Q[s].includes("DetermineComponentFrameRoot");)s++;for(;c<mt.length&&!mt[c].includes("DetermineComponentFrameRoot");)c++;if(s===Q.length||c===mt.length)for(s=Q.length-1,c=mt.length-1;1<=s&&0<=c&&Q[s]!==mt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(Q[s]!==mt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||Q[s]!==mt[c]){var wt=`
`+Q[s].replace(" at new "," at ");return e.displayName&&wt.includes("<anonymous>")&&(wt=wt.replace("<anonymous>",e.displayName)),wt}while(1<=s&&0<=c);break}}}finally{te=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ne(a):""}function Ue(e){switch(e.tag){case 26:case 27:case 5:return ne(e.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return ne("Activity");default:return""}}function Xe(e){try{var n="";do n+=Ue(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ie(e){var n=Ee(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,m=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(w){s=""+w,m.call(this,w)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(w){s=""+w},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ke(e){e._valueTracker||(e._valueTracker=ie(e))}function Ae(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Ee(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function En(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var oa=/[\n"\\]/g;function We(e){return e.replace(oa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ui(e,n,a,s,c,m,w,O){e.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.type=w:e.removeAttribute("type"),n!=null?w==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Me(n)):e.value!==""+Me(n)&&(e.value=""+Me(n)):w!=="submit"&&w!=="reset"||e.removeAttribute("value"),n!=null?bn(e,w,Me(n)):a!=null?bn(e,w,Me(a)):s!=null&&e.removeAttribute("value"),c==null&&m!=null&&(e.defaultChecked=!!m),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?e.name=""+Me(O):e.removeAttribute("name")}function Ge(e,n,a,s,c,m,w,O){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),n!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||n!=null))return;a=a!=null?""+Me(a):"",n=n!=null?""+Me(n):a,O||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=O?e.checked:!!s,e.defaultChecked=!!s,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(e.name=w)}function bn(e,n,a){n==="number"&&En(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Me(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function dn(e,n,a){if(n!=null&&(n=""+Me(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Me(a):""}function xn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if($(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Me(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function _i(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Li=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Li.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&xd(e,c,s)}else for(var m in n)n.hasOwnProperty(m)&&xd(e,m,n[m])}function Du(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(e){return I0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Uu=null;function Lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,br=null;function Sd(e){var n=Ci(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ui(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+We(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[vn]||null;if(!c)throw Error(r(90));Ui(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ae(s)}break t;case"textarea":dn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var Nu=!1;function Md(e,n,a){if(Nu)return e(n,a);Nu=!0;try{var s=e(n);return s}finally{if(Nu=!1,(Er!==null||br!==null)&&(wl(),Er&&(n=Er,e=br,br=Er=null,Sd(n),e)))for(n=0;n<e.length;n++)Sd(e[n])}}function Ts(e,n){var a=e.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if(Ni)try{var As={};Object.defineProperty(As,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Ou=!1}var la=null,Pu=null,Vo=null;function Ed(){if(Vo)return Vo;var e,n=Pu,a=n.length,s,c="value"in la?la.value:la.textContent,m=c.length;for(e=0;e<a&&n[e]===c[e];e++);var w=a-e;for(s=1;s<=w&&n[a-s]===c[m-s];s++);return Vo=c.slice(e,1<s?1-s:void 0)}function Xo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function bd(){return!1}function Nn(e){function n(a,s,c,m,w){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var O in e)e.hasOwnProperty(O)&&(a=e[O],this[O]=a?a(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Wo:bd,this.isPropagationStopped=bd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=Nn(Ya),ws=g({},Ya,{view:0,detail:0}),B0=Nn(ws),zu,Iu,Rs,Yo=g({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rs&&(Rs&&e.type==="mousemove"?(zu=e.screenX-Rs.screenX,Iu=e.screenY-Rs.screenY):Iu=zu=0,Rs=e),zu)},movementY:function(e){return"movementY"in e?e.movementY:Iu}}),Td=Nn(Yo),F0=g({},Yo,{dataTransfer:0}),H0=Nn(F0),k0=g({},ws,{relatedTarget:0}),Bu=Nn(k0),G0=g({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),V0=Nn(G0),X0=g({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W0=Nn(X0),q0=g({},Ya,{data:0}),Ad=Nn(q0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=j0[e])?!!n[e]:!1}function Fu(){return K0}var Q0=g({},ws,{key:function(e){if(e.key){var n=Y0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J0=Nn(Q0),$0=g({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Nn($0),tv=g({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),ev=Nn(tv),nv=g({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),iv=Nn(nv),av=g({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=Nn(av),sv=g({},Ya,{newState:0,oldState:0}),ov=Nn(sv),lv=[9,13,27,32],Hu=Ni&&"CompositionEvent"in window,Cs=null;Ni&&"documentMode"in document&&(Cs=document.documentMode);var uv=Ni&&"TextEvent"in window&&!Cs,Rd=Ni&&(!Hu||Cs&&8<Cs&&11>=Cs),Cd=" ",Dd=!1;function Ud(e,n){switch(e){case"keyup":return lv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function cv(e,n){switch(e){case"compositionend":return Ld(n);case"keypress":return n.which!==32?null:(Dd=!0,Cd);case"textInput":return e=n.data,e===Cd&&Dd?null:e;default:return null}}function fv(e,n){if(Tr)return e==="compositionend"||!Hu&&Ud(e,n)?(e=Ed(),Vo=Pu=la=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rd&&n.locale!=="ko"?null:n.data;default:return null}}var hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hv[e.type]:n==="textarea"}function Od(e,n,a,s){Er?br?br.push(s):br=[s]:Er=s,n=Nl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ds=null,Us=null;function dv(e){p_(e,0)}function Zo(e){var n=qa(e);if(Ae(n))return e}function Pd(e,n){if(e==="change")return n}var zd=!1;if(Ni){var ku;if(Ni){var Gu="oninput"in document;if(!Gu){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),Gu=typeof Id.oninput=="function"}ku=Gu}else ku=!1;zd=ku&&(!document.documentMode||9<document.documentMode)}function Bd(){Ds&&(Ds.detachEvent("onpropertychange",Fd),Us=Ds=null)}function Fd(e){if(e.propertyName==="value"&&Zo(Us)){var n=[];Od(n,Us,e,Lu(e)),Md(dv,n)}}function pv(e,n,a){e==="focusin"?(Bd(),Ds=n,Us=a,Ds.attachEvent("onpropertychange",Fd)):e==="focusout"&&Bd()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(Us)}function _v(e,n){if(e==="click")return Zo(n)}function gv(e,n){if(e==="input"||e==="change")return Zo(n)}function vv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:vv;function Ls(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!ve.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kd(e,n){var a=Hd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hd(a)}}function Gd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=En(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=En(e.document)}return n}function Vu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var xv=Ni&&"documentMode"in document&&11>=document.documentMode,Ar=null,Xu=null,Ns=null,Wu=!1;function Xd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wu||Ar==null||Ar!==En(s)||(s=Ar,"selectionStart"in s&&Vu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ns&&Ls(Ns,s)||(Ns=s,s=Nl(Xu,"onSelect"),0<s.length&&(n=new qo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ar)))}function Za(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var wr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},qu={},Wd={};Ni&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function ja(e){if(qu[e])return qu[e];if(!wr[e])return e;var n=wr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wd)return qu[e]=n[a];return e}var qd=ja("animationend"),Yd=ja("animationiteration"),Zd=ja("animationstart"),yv=ja("transitionrun"),Sv=ja("transitionstart"),Mv=ja("transitioncancel"),jd=ja("transitionend"),Kd=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function oi(e,n){Kd.set(e,n),Di(n,[e])}var Qd=new WeakMap;function Qn(e,n){if(typeof e=="object"&&e!==null){var a=Qd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Xe(n)},Qd.set(e,n),n)}return{value:e,source:n,stack:Xe(n)}}var Jn=[],Rr=0,Zu=0;function jo(){for(var e=Rr,n=Zu=Rr=0;n<e;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var m=Jn[n];if(Jn[n++]=null,s!==null&&c!==null){var w=s.pending;w===null?c.next=c:(c.next=w.next,w.next=c),s.pending=c}m!==0&&Jd(a,c,m)}}function Ko(e,n,a,s){Jn[Rr++]=e,Jn[Rr++]=n,Jn[Rr++]=a,Jn[Rr++]=s,Zu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function ju(e,n,a,s){return Ko(e,n,a,s),Qo(e)}function Cr(e,n){return Ko(e,null,null,n),Qo(e)}function Jd(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,m=e.return;m!==null;)m.childLanes|=a,s=m.alternate,s!==null&&(s.childLanes|=a),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(c=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,c&&n!==null&&(c=31-It(a),e=m.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),m):null}function Qo(e){if(50<ao)throw ao=0,ef=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Dr={};function Ev(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(e,n,a,s){return new Ev(e,n,a,s)}function Ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,n){var a=e.alternate;return a===null?(a=Gn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $d(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Jo(e,n,a,s,c,m){var w=0;if(s=e,typeof e=="function")Ku(e)&&(w=1);else if(typeof e=="string")w=Tx(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Gn(31,a,n,c),e.elementType=U,e.lanes=m,e;case b:return Ka(a.children,c,m,n);case E:w=8,c|=24;break;case S:return e=Gn(12,a,n,c|2),e.elementType=S,e.lanes=m,e;case N:return e=Gn(13,a,n,c),e.elementType=N,e.lanes=m,e;case k:return e=Gn(19,a,n,c),e.elementType=k,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case R:w=10;break t;case A:w=9;break t;case C:w=11;break t;case B:w=14;break t;case W:w=16,s=null;break t}w=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Gn(w,a,n,c),n.elementType=e,n.type=s,n.lanes=m,n}function Ka(e,n,a,s){return e=Gn(7,e,s,n),e.lanes=a,e}function Qu(e,n,a){return e=Gn(6,e,null,n),e.lanes=a,e}function Ju(e,n,a){return n=Gn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ur=[],Lr=0,$o=null,tl=0,$n=[],ti=0,Qa=null,Pi=1,zi="";function Ja(e,n){Ur[Lr++]=tl,Ur[Lr++]=$o,$o=e,tl=n}function tp(e,n,a){$n[ti++]=Pi,$n[ti++]=zi,$n[ti++]=Qa,Qa=e;var s=Pi;e=zi;var c=32-It(s)-1;s&=~(1<<c),a+=1;var m=32-It(n)+c;if(30<m){var w=c-c%5;m=(s&(1<<w)-1).toString(32),s>>=w,c-=w,Pi=1<<32-It(n)+c|a<<c|s,zi=m+e}else Pi=1<<m|a<<c|s,zi=e}function $u(e){e.return!==null&&(Ja(e,1),tp(e,1,0))}function tc(e){for(;e===$o;)$o=Ur[--Lr],Ur[Lr]=null,tl=Ur[--Lr],Ur[Lr]=null;for(;e===Qa;)Qa=$n[--ti],$n[ti]=null,zi=$n[--ti],$n[ti]=null,Pi=$n[--ti],$n[ti]=null}var Dn=null,Qe=null,Le=!1,$a=null,gi=!1,ec=Error(r(519));function tr(e){var n=Error(r(418,""));throw zs(Qn(n,e)),ec}function ep(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[sn]=e,n[vn]=s,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<so.length;a++)Se(so[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Ge(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ke(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),xn(n,s.value,s.defaultValue,s.children),Ke(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||v_(n.textContent,a)?(s.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),s.onScroll!=null&&Se("scroll",n),s.onScrollEnd!=null&&Se("scrollend",n),s.onClick!=null&&(n.onclick=Ol),n=!0):n=!1,n||tr(e)}function np(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Dn=Dn.return}}function Os(e){if(e!==Dn)return!1;if(!Le)return np(e),Le=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vf(e.type,e.memoizedProps)),a=!a),a&&Qe&&tr(e),np(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Qe=ui(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Qe=null}}else n===27?(n=Qe,ba(e.type)?(e=Mf,Mf=null,Qe=e):Qe=n):Qe=Dn?ui(e.stateNode.nextSibling):null;return!0}function Ps(){Qe=Dn=null,Le=!1}function ip(){var e=$a;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),$a=null),e}function zs(e){$a===null?$a=[e]:$a.push(e)}var nc=G(null),er=null,Ii=null;function ua(e,n,a){vt(nc,n._currentValue),n._currentValue=a}function Bi(e){e._currentValue=nc.current,Z(nc)}function ic(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function ac(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var m=c.dependencies;if(m!==null){var w=c.child;m=m.firstContext;t:for(;m!==null;){var O=m;m=c;for(var Q=0;Q<n.length;Q++)if(O.context===n[Q]){m.lanes|=a,O=m.alternate,O!==null&&(O.lanes|=a),ic(m.return,a,e),s||(w=null);break t}m=O.next}}else if(c.tag===18){if(w=c.return,w===null)throw Error(r(341));w.lanes|=a,m=w.alternate,m!==null&&(m.lanes|=a),ic(w,a,e),w=null}else w=c.child;if(w!==null)w.return=c;else for(w=c;w!==null;){if(w===e){w=null;break}if(c=w.sibling,c!==null){c.return=w.return,w=c;break}w=w.return}c=w}}function Is(e,n,a,s){e=null;for(var c=n,m=!1;c!==null;){if(!m){if((c.flags&524288)!==0)m=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var w=c.alternate;if(w===null)throw Error(r(387));if(w=w.memoizedProps,w!==null){var O=c.type;kn(c.pendingProps.value,w.value)||(e!==null?e.push(O):e=[O])}}else if(c===Nt.current){if(w=c.alternate,w===null)throw Error(r(387));w.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(ho):e=[ho])}c=c.return}e!==null&&ac(n,e,a,s),n.flags|=262144}function el(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){er=e,Ii=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return ap(er,e)}function nl(e,n){return er===null&&nr(e),ap(e,n)}function ap(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(e===null)throw Error(r(308));Ii=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ii=Ii.next=n;return a}var bv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Tv=o.unstable_scheduleCallback,Av=o.unstable_NormalPriority,ln={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rc(){return{controller:new bv,data:new Map,refCount:0}}function Bs(e){e.refCount--,e.refCount===0&&Tv(Av,function(){e.controller.abort()})}var Fs=null,sc=0,Nr=0,Or=null;function wv(e,n){if(Fs===null){var a=Fs=[];sc=0,Nr=uf(),Or={status:"pending",value:void 0,then:function(s){a.push(s)}}}return sc++,n.then(rp,rp),n}function rp(){if(--sc===0&&Fs!==null){Or!==null&&(Or.status="fulfilled");var e=Fs;Fs=null,Nr=0,Or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Rv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var sp=X.S;X.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&wv(e,n),sp!==null&&sp(e,n)};var ir=G(null);function oc(){var e=ir.current;return e!==null?e:qe.pooledCache}function il(e,n){n===null?vt(ir,ir.current):vt(ir,n.pool)}function op(){var e=oc();return e===null?null:{parent:ln._currentValue,pool:e}}var Hs=Error(r(460)),lp=Error(r(474)),al=Error(r(542)),lc={then:function(){}};function up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rl(){}function cp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(rl,rl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hp(e),e;default:if(typeof n.status=="string")n.then(rl,rl);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hp(e),e}throw ks=n,Hs}}var ks=null;function fp(){if(ks===null)throw Error(r(459));var e=ks;return ks=null,e}function hp(e){if(e===Hs||e===al)throw Error(r(483))}var ca=!1;function uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Qo(e),Jd(e,null,a),n}return Ko(e,s,n,a),Qo(e)}function Gs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Qt(e,a)}}function fc(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?c=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?c=m=n:m=m.next=n}else c=m=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:m,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var hc=!1;function Vs(){if(hc){var e=Or;if(e!==null)throw e}}function Xs(e,n,a,s){hc=!1;var c=e.updateQueue;ca=!1;var m=c.firstBaseUpdate,w=c.lastBaseUpdate,O=c.shared.pending;if(O!==null){c.shared.pending=null;var Q=O,mt=Q.next;Q.next=null,w===null?m=mt:w.next=mt,w=Q;var wt=e.alternate;wt!==null&&(wt=wt.updateQueue,O=wt.lastBaseUpdate,O!==w&&(O===null?wt.firstBaseUpdate=mt:O.next=mt,wt.lastBaseUpdate=Q))}if(m!==null){var Dt=c.baseState;w=0,wt=mt=Q=null,O=m;do{var gt=O.lane&-536870913,xt=gt!==O.lane;if(xt?(Te&gt)===gt:(s&gt)===gt){gt!==0&&gt===Nr&&(hc=!0),wt!==null&&(wt=wt.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});t:{var ue=e,ae=O;gt=n;var Fe=a;switch(ae.tag){case 1:if(ue=ae.payload,typeof ue=="function"){Dt=ue.call(Fe,Dt,gt);break t}Dt=ue;break t;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ae.payload,gt=typeof ue=="function"?ue.call(Fe,Dt,gt):ue,gt==null)break t;Dt=g({},Dt,gt);break t;case 2:ca=!0}}gt=O.callback,gt!==null&&(e.flags|=64,xt&&(e.flags|=8192),xt=c.callbacks,xt===null?c.callbacks=[gt]:xt.push(gt))}else xt={lane:gt,tag:O.tag,payload:O.payload,callback:O.callback,next:null},wt===null?(mt=wt=xt,Q=Dt):wt=wt.next=xt,w|=gt;if(O=O.next,O===null){if(O=c.shared.pending,O===null)break;xt=O,O=xt.next,xt.next=null,c.lastBaseUpdate=xt,c.shared.pending=null}}while(!0);wt===null&&(Q=Dt),c.baseState=Q,c.firstBaseUpdate=mt,c.lastBaseUpdate=wt,m===null&&(c.shared.lanes=0),ya|=w,e.lanes=w,e.memoizedState=Dt}}function dp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)dp(a[e],n)}var Pr=G(null),sl=G(0);function mp(e,n){e=Wi,vt(sl,e),vt(Pr,n),Wi=e|n.baseLanes}function dc(){vt(sl,Wi),vt(Pr,Pr.current)}function pc(){Wi=sl.current,Z(Pr),Z(sl)}var da=0,_e=null,Ie=null,nn=null,ol=!1,zr=!1,ar=!1,ll=0,Ws=0,Ir=null,Cv=0;function $e(){throw Error(r(321))}function mc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function _c(e,n,a,s,c,m){return da=m,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,X.H=e===null||e.memoizedState===null?Jp:$p,ar=!1,m=a(s,c),ar=!1,zr&&(m=gp(n,a,s,c)),_p(e),m}function _p(e){X.H=pl;var n=Ie!==null&&Ie.next!==null;if(da=0,nn=Ie=_e=null,ol=!1,Ws=0,Ir=null,n)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&el(e)&&(pn=!0))}function gp(e,n,a,s){_e=e;var c=0;do{if(zr&&(Ir=null),Ws=0,zr=!1,25<=c)throw Error(r(301));if(c+=1,nn=Ie=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}X.H=zv,m=n(a,s)}while(zr);return m}function Dv(){var e=X.H,n=e.useState()[0];return n=typeof n.then=="function"?qs(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(_e.flags|=1024),n}function gc(){var e=ll!==0;return ll=0,e}function vc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function xc(e){if(ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ol=!1}da=0,nn=Ie=_e=null,zr=!1,Ws=ll=0,Ir=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?_e.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Ie===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=nn===null?_e.memoizedState:nn.next;if(n!==null)nn=n,Ie=e;else{if(e===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},nn===null?_e.memoizedState=nn=e:nn=nn.next=e}return nn}function yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qs(e){var n=Ws;return Ws+=1,Ir===null&&(Ir=[]),e=cp(Ir,e,n),n=_e,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,X.H=n===null||n.memoizedState===null?Jp:$p),e}function ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qs(e);if(e.$$typeof===R)return Tn(e)}throw Error(r(438,String(e)))}function Sc(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yc(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=L;return n.index++,a}function Fi(e,n){return typeof n=="function"?n(e):n}function cl(e){var n=an();return Mc(n,Ie,e)}function Mc(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,m=s.pending;if(m!==null){if(c!==null){var w=c.next;c.next=m.next,m.next=w}n.baseQueue=c=m,s.pending=null}if(m=e.baseState,c===null)e.memoizedState=m;else{n=c.next;var O=w=null,Q=null,mt=n,wt=!1;do{var Dt=mt.lane&-536870913;if(Dt!==mt.lane?(Te&Dt)===Dt:(da&Dt)===Dt){var gt=mt.revertLane;if(gt===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,action:mt.action,hasEagerState:mt.hasEagerState,eagerState:mt.eagerState,next:null}),Dt===Nr&&(wt=!0);else if((da&gt)===gt){mt=mt.next,gt===Nr&&(wt=!0);continue}else Dt={lane:0,revertLane:mt.revertLane,action:mt.action,hasEagerState:mt.hasEagerState,eagerState:mt.eagerState,next:null},Q===null?(O=Q=Dt,w=m):Q=Q.next=Dt,_e.lanes|=gt,ya|=gt;Dt=mt.action,ar&&a(m,Dt),m=mt.hasEagerState?mt.eagerState:a(m,Dt)}else gt={lane:Dt,revertLane:mt.revertLane,action:mt.action,hasEagerState:mt.hasEagerState,eagerState:mt.eagerState,next:null},Q===null?(O=Q=gt,w=m):Q=Q.next=gt,_e.lanes|=Dt,ya|=Dt;mt=mt.next}while(mt!==null&&mt!==n);if(Q===null?w=m:Q.next=O,!kn(m,e.memoizedState)&&(pn=!0,wt&&(a=Or,a!==null)))throw a;e.memoizedState=m,e.baseState=w,e.baseQueue=Q,s.lastRenderedState=m}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Ec(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,m=n.memoizedState;if(c!==null){a.pending=null;var w=c=c.next;do m=e(m,w.action),w=w.next;while(w!==c);kn(m,n.memoizedState)||(pn=!0),n.memoizedState=m,n.baseQueue===null&&(n.baseState=m),a.lastRenderedState=m}return[m,s]}function vp(e,n,a){var s=_e,c=an(),m=Le;if(m){if(a===void 0)throw Error(r(407));a=a()}else a=n();var w=!kn((Ie||c).memoizedState,a);w&&(c.memoizedState=a,pn=!0),c=c.queue;var O=Sp.bind(null,s,c,e);if(Ys(2048,8,O,[e]),c.getSnapshot!==n||w||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Br(9,fl(),yp.bind(null,s,c,a,n),null),qe===null)throw Error(r(349));m||(da&124)!==0||xp(s,n,a)}return a}function xp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=yc(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function yp(e,n,a,s){n.value=a,n.getSnapshot=s,Mp(n)&&Ep(e)}function Sp(e,n,a){return a(function(){Mp(n)&&Ep(e)})}function Mp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Ep(e){var n=Cr(e,2);n!==null&&Yn(n,e,2)}function bc(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),ar){dt(!0);try{a()}finally{dt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},n}function bp(e,n,a,s){return e.baseState=a,Mc(e,Ie,typeof s=="function"?s:Fi)}function Uv(e,n,a,s,c){if(dl(e))throw Error(r(485));if(e=n.action,e!==null){var m={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){m.listeners.push(w)}};X.T!==null?a(!0):m.isTransition=!1,s(m),a=n.pending,a===null?(m.next=n.pending=m,Tp(n,m)):(m.next=a.next,n.pending=a.next=m)}}function Tp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var m=X.T,w={};X.T=w;try{var O=a(c,s),Q=X.S;Q!==null&&Q(w,O),Ap(e,n,O)}catch(mt){Tc(e,n,mt)}finally{X.T=m}}else try{m=a(c,s),Ap(e,n,m)}catch(mt){Tc(e,n,mt)}}function Ap(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){wp(e,n,s)},function(s){return Tc(e,n,s)}):wp(e,n,a)}function wp(e,n,a){n.status="fulfilled",n.value=a,Rp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Tp(e,a)))}function Tc(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Rp(n),n=n.next;while(n!==s)}e.action=null}function Rp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Cp(e,n){return n}function Dp(e,n){if(Le){var a=qe.formState;if(a!==null){t:{var s=_e;if(Le){if(Qe){e:{for(var c=Qe,m=gi;c.nodeType!==8;){if(!m){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}m=c.data,c=m==="F!"||m==="F"?c:null}if(c){Qe=ui(c.nextSibling),s=c.data==="F!";break t}}tr(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cp,lastRenderedState:n},a.queue=s,a=jp.bind(null,_e,s),s.dispatch=a,s=bc(!1),m=Dc.bind(null,_e,!1,s.queue),s=On(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=Uv.bind(null,_e,c,m,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Up(e){var n=an();return Lp(n,Ie,e)}function Lp(e,n,a){if(n=Mc(e,n,Cp)[0],e=cl(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=qs(n)}catch(w){throw w===Hs?al:w}else s=n;n=an();var c=n.queue,m=c.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,Br(9,fl(),Lv.bind(null,c,a),null)),[s,m,e]}function Lv(e,n){e.action=n}function Np(e){var n=an(),a=Ie;if(a!==null)return Lp(n,a,e);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Br(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=_e.updateQueue,n===null&&(n=yc(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function fl(){return{destroy:void 0,resource:void 0}}function Op(){return an().memoizedState}function hl(e,n,a,s){var c=On();s=s===void 0?null:s,_e.flags|=e,c.memoizedState=Br(1|n,fl(),a,s)}function Ys(e,n,a,s){var c=an();s=s===void 0?null:s;var m=c.memoizedState.inst;Ie!==null&&s!==null&&mc(s,Ie.memoizedState.deps)?c.memoizedState=Br(n,m,a,s):(_e.flags|=e,c.memoizedState=Br(1|n,m,a,s))}function Pp(e,n){hl(8390656,8,e,n)}function zp(e,n){Ys(2048,8,e,n)}function Ip(e,n){return Ys(4,2,e,n)}function Bp(e,n){return Ys(4,4,e,n)}function Fp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hp(e,n,a){a=a!=null?a.concat([e]):null,Ys(4,4,Fp.bind(null,n,e),a)}function Ac(){}function kp(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&mc(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Gp(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&mc(n,s[1]))return s[0];if(s=e(),ar){dt(!0);try{e()}finally{dt(!1)}}return a.memoizedState=[s,n],s}function wc(e,n,a){return a===void 0||(da&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Wm(),_e.lanes|=e,ya|=e,a)}function Vp(e,n,a,s){return kn(a,n)?a:Pr.current!==null?(e=wc(e,a,s),kn(e,n)||(pn=!0),e):(da&42)===0?(pn=!0,e.memoizedState=a):(e=Wm(),_e.lanes|=e,ya|=e,n)}function Xp(e,n,a,s,c){var m=q.p;q.p=m!==0&&8>m?m:8;var w=X.T,O={};X.T=O,Dc(e,!1,n,a);try{var Q=c(),mt=X.S;if(mt!==null&&mt(O,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var wt=Rv(Q,s);Zs(e,n,wt,qn(e))}else Zs(e,n,s,qn(e))}catch(Dt){Zs(e,n,{then:function(){},status:"rejected",reason:Dt},qn())}finally{q.p=m,X.T=w}}function Nv(){}function Rc(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=Wp(e).queue;Xp(e,c,n,tt,a===null?Nv:function(){return qp(e),a(s)})}function Wp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function qp(e){var n=Wp(e).next.queue;Zs(e,n,{},qn())}function Cc(){return Tn(ho)}function Yp(){return an().memoizedState}function Zp(){return an().memoizedState}function Ov(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();e=fa(a);var s=ha(n,e,a);s!==null&&(Yn(s,n,a),Gs(s,n,a)),n={cache:rc()},e.payload=n;return}n=n.return}}function Pv(e,n,a){var s=qn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(e)?Kp(n,a):(a=ju(e,n,a,s),a!==null&&(Yn(a,e,s),Qp(a,n,s)))}function jp(e,n,a){var s=qn();Zs(e,n,a,s)}function Zs(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(e))Kp(n,c);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=n.lastRenderedReducer,m!==null))try{var w=n.lastRenderedState,O=m(w,a);if(c.hasEagerState=!0,c.eagerState=O,kn(O,w))return Ko(e,n,c,0),qe===null&&jo(),!1}catch{}finally{}if(a=ju(e,n,c,s),a!==null)return Yn(a,e,s),Qp(a,n,s),!0}return!1}function Dc(e,n,a,s){if(s={lane:2,revertLane:uf(),action:s,hasEagerState:!1,eagerState:null,next:null},dl(e)){if(n)throw Error(r(479))}else n=ju(e,a,s,2),n!==null&&Yn(n,e,2)}function dl(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function Kp(e,n){zr=ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Qp(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Qt(e,a)}}var pl={readContext:Tn,use:ul,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},Jp={readContext:Tn,use:ul,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Pp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,hl(4194308,4,Fp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return hl(4194308,4,e,n)},useInsertionEffect:function(e,n){hl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var s=e();if(ar){dt(!0);try{e()}finally{dt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=On();if(a!==void 0){var c=a(n);if(ar){dt(!0);try{a(n)}finally{dt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=Pv.bind(null,_e,e),[s.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=bc(e);var n=e.queue,a=jp.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ac,useDeferredValue:function(e,n){var a=On();return wc(a,e,n)},useTransition:function(){var e=bc(!1);return e=Xp.bind(null,_e,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=_e,c=On();if(Le){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(Te&124)!==0||xp(s,n,a)}c.memoizedState=a;var m={value:a,getSnapshot:n};return c.queue=m,Pp(Sp.bind(null,s,m,e),[e]),s.flags|=2048,Br(9,fl(),yp.bind(null,s,m,a,n),null),a},useId:function(){var e=On(),n=qe.identifierPrefix;if(Le){var a=zi,s=Pi;a=(s&~(1<<32-It(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=ll++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Cv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Cc,useFormState:Dp,useActionState:Dp,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Dc.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:Sc,useCacheRefresh:function(){return On().memoizedState=Ov.bind(null,_e)}},$p={readContext:Tn,use:ul,useCallback:kp,useContext:Tn,useEffect:zp,useImperativeHandle:Hp,useInsertionEffect:Ip,useLayoutEffect:Bp,useMemo:Gp,useReducer:cl,useRef:Op,useState:function(){return cl(Fi)},useDebugValue:Ac,useDeferredValue:function(e,n){var a=an();return Vp(a,Ie.memoizedState,e,n)},useTransition:function(){var e=cl(Fi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:qs(e),n]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:Cc,useFormState:Up,useActionState:Up,useOptimistic:function(e,n){var a=an();return bp(a,Ie,e,n)},useMemoCache:Sc,useCacheRefresh:Zp},zv={readContext:Tn,use:ul,useCallback:kp,useContext:Tn,useEffect:zp,useImperativeHandle:Hp,useInsertionEffect:Ip,useLayoutEffect:Bp,useMemo:Gp,useReducer:Ec,useRef:Op,useState:function(){return Ec(Fi)},useDebugValue:Ac,useDeferredValue:function(e,n){var a=an();return Ie===null?wc(a,e,n):Vp(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Ec(Fi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:qs(e),n]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:Cc,useFormState:Np,useActionState:Np,useOptimistic:function(e,n){var a=an();return Ie!==null?bp(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Sc,useCacheRefresh:Zp},Fr=null,js=0;function ml(e){var n=js;return js+=1,Fr===null&&(Fr=[]),cp(Fr,e,n)}function Ks(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tm(e){var n=e._init;return n(e._payload)}function em(e){function n(st,nt){if(e){var pt=st.deletions;pt===null?(st.deletions=[nt],st.flags|=16):pt.push(nt)}}function a(st,nt){if(!e)return null;for(;nt!==null;)n(st,nt),nt=nt.sibling;return null}function s(st){for(var nt=new Map;st!==null;)st.key!==null?nt.set(st.key,st):nt.set(st.index,st),st=st.sibling;return nt}function c(st,nt){return st=Oi(st,nt),st.index=0,st.sibling=null,st}function m(st,nt,pt){return st.index=pt,e?(pt=st.alternate,pt!==null?(pt=pt.index,pt<nt?(st.flags|=67108866,nt):pt):(st.flags|=67108866,nt)):(st.flags|=1048576,nt)}function w(st){return e&&st.alternate===null&&(st.flags|=67108866),st}function O(st,nt,pt,Rt){return nt===null||nt.tag!==6?(nt=Qu(pt,st.mode,Rt),nt.return=st,nt):(nt=c(nt,pt),nt.return=st,nt)}function Q(st,nt,pt,Rt){var Jt=pt.type;return Jt===b?wt(st,nt,pt.props.children,Rt,pt.key):nt!==null&&(nt.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===W&&tm(Jt)===nt.type)?(nt=c(nt,pt.props),Ks(nt,pt),nt.return=st,nt):(nt=Jo(pt.type,pt.key,pt.props,null,st.mode,Rt),Ks(nt,pt),nt.return=st,nt)}function mt(st,nt,pt,Rt){return nt===null||nt.tag!==4||nt.stateNode.containerInfo!==pt.containerInfo||nt.stateNode.implementation!==pt.implementation?(nt=Ju(pt,st.mode,Rt),nt.return=st,nt):(nt=c(nt,pt.children||[]),nt.return=st,nt)}function wt(st,nt,pt,Rt,Jt){return nt===null||nt.tag!==7?(nt=Ka(pt,st.mode,Rt,Jt),nt.return=st,nt):(nt=c(nt,pt),nt.return=st,nt)}function Dt(st,nt,pt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return nt=Qu(""+nt,st.mode,pt),nt.return=st,nt;if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:return pt=Jo(nt.type,nt.key,nt.props,null,st.mode,pt),Ks(pt,nt),pt.return=st,pt;case v:return nt=Ju(nt,st.mode,pt),nt.return=st,nt;case W:var Rt=nt._init;return nt=Rt(nt._payload),Dt(st,nt,pt)}if($(nt)||z(nt))return nt=Ka(nt,st.mode,pt,null),nt.return=st,nt;if(typeof nt.then=="function")return Dt(st,ml(nt),pt);if(nt.$$typeof===R)return Dt(st,nl(st,nt),pt);_l(st,nt)}return null}function gt(st,nt,pt,Rt){var Jt=nt!==null?nt.key:null;if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Jt!==null?null:O(st,nt,""+pt,Rt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return pt.key===Jt?Q(st,nt,pt,Rt):null;case v:return pt.key===Jt?mt(st,nt,pt,Rt):null;case W:return Jt=pt._init,pt=Jt(pt._payload),gt(st,nt,pt,Rt)}if($(pt)||z(pt))return Jt!==null?null:wt(st,nt,pt,Rt,null);if(typeof pt.then=="function")return gt(st,nt,ml(pt),Rt);if(pt.$$typeof===R)return gt(st,nt,nl(st,pt),Rt);_l(st,pt)}return null}function xt(st,nt,pt,Rt,Jt){if(typeof Rt=="string"&&Rt!==""||typeof Rt=="number"||typeof Rt=="bigint")return st=st.get(pt)||null,O(nt,st,""+Rt,Jt);if(typeof Rt=="object"&&Rt!==null){switch(Rt.$$typeof){case y:return st=st.get(Rt.key===null?pt:Rt.key)||null,Q(nt,st,Rt,Jt);case v:return st=st.get(Rt.key===null?pt:Rt.key)||null,mt(nt,st,Rt,Jt);case W:var xe=Rt._init;return Rt=xe(Rt._payload),xt(st,nt,pt,Rt,Jt)}if($(Rt)||z(Rt))return st=st.get(pt)||null,wt(nt,st,Rt,Jt,null);if(typeof Rt.then=="function")return xt(st,nt,pt,ml(Rt),Jt);if(Rt.$$typeof===R)return xt(st,nt,pt,nl(nt,Rt),Jt);_l(nt,Rt)}return null}function ue(st,nt,pt,Rt){for(var Jt=null,xe=null,ee=nt,oe=nt=0,_n=null;ee!==null&&oe<pt.length;oe++){ee.index>oe?(_n=ee,ee=null):_n=ee.sibling;var Re=gt(st,ee,pt[oe],Rt);if(Re===null){ee===null&&(ee=_n);break}e&&ee&&Re.alternate===null&&n(st,ee),nt=m(Re,nt,oe),xe===null?Jt=Re:xe.sibling=Re,xe=Re,ee=_n}if(oe===pt.length)return a(st,ee),Le&&Ja(st,oe),Jt;if(ee===null){for(;oe<pt.length;oe++)ee=Dt(st,pt[oe],Rt),ee!==null&&(nt=m(ee,nt,oe),xe===null?Jt=ee:xe.sibling=ee,xe=ee);return Le&&Ja(st,oe),Jt}for(ee=s(ee);oe<pt.length;oe++)_n=xt(ee,st,oe,pt[oe],Rt),_n!==null&&(e&&_n.alternate!==null&&ee.delete(_n.key===null?oe:_n.key),nt=m(_n,nt,oe),xe===null?Jt=_n:xe.sibling=_n,xe=_n);return e&&ee.forEach(function(Ca){return n(st,Ca)}),Le&&Ja(st,oe),Jt}function ae(st,nt,pt,Rt){if(pt==null)throw Error(r(151));for(var Jt=null,xe=null,ee=nt,oe=nt=0,_n=null,Re=pt.next();ee!==null&&!Re.done;oe++,Re=pt.next()){ee.index>oe?(_n=ee,ee=null):_n=ee.sibling;var Ca=gt(st,ee,Re.value,Rt);if(Ca===null){ee===null&&(ee=_n);break}e&&ee&&Ca.alternate===null&&n(st,ee),nt=m(Ca,nt,oe),xe===null?Jt=Ca:xe.sibling=Ca,xe=Ca,ee=_n}if(Re.done)return a(st,ee),Le&&Ja(st,oe),Jt;if(ee===null){for(;!Re.done;oe++,Re=pt.next())Re=Dt(st,Re.value,Rt),Re!==null&&(nt=m(Re,nt,oe),xe===null?Jt=Re:xe.sibling=Re,xe=Re);return Le&&Ja(st,oe),Jt}for(ee=s(ee);!Re.done;oe++,Re=pt.next())Re=xt(ee,st,oe,Re.value,Rt),Re!==null&&(e&&Re.alternate!==null&&ee.delete(Re.key===null?oe:Re.key),nt=m(Re,nt,oe),xe===null?Jt=Re:xe.sibling=Re,xe=Re);return e&&ee.forEach(function(Ix){return n(st,Ix)}),Le&&Ja(st,oe),Jt}function Fe(st,nt,pt,Rt){if(typeof pt=="object"&&pt!==null&&pt.type===b&&pt.key===null&&(pt=pt.props.children),typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:t:{for(var Jt=pt.key;nt!==null;){if(nt.key===Jt){if(Jt=pt.type,Jt===b){if(nt.tag===7){a(st,nt.sibling),Rt=c(nt,pt.props.children),Rt.return=st,st=Rt;break t}}else if(nt.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===W&&tm(Jt)===nt.type){a(st,nt.sibling),Rt=c(nt,pt.props),Ks(Rt,pt),Rt.return=st,st=Rt;break t}a(st,nt);break}else n(st,nt);nt=nt.sibling}pt.type===b?(Rt=Ka(pt.props.children,st.mode,Rt,pt.key),Rt.return=st,st=Rt):(Rt=Jo(pt.type,pt.key,pt.props,null,st.mode,Rt),Ks(Rt,pt),Rt.return=st,st=Rt)}return w(st);case v:t:{for(Jt=pt.key;nt!==null;){if(nt.key===Jt)if(nt.tag===4&&nt.stateNode.containerInfo===pt.containerInfo&&nt.stateNode.implementation===pt.implementation){a(st,nt.sibling),Rt=c(nt,pt.children||[]),Rt.return=st,st=Rt;break t}else{a(st,nt);break}else n(st,nt);nt=nt.sibling}Rt=Ju(pt,st.mode,Rt),Rt.return=st,st=Rt}return w(st);case W:return Jt=pt._init,pt=Jt(pt._payload),Fe(st,nt,pt,Rt)}if($(pt))return ue(st,nt,pt,Rt);if(z(pt)){if(Jt=z(pt),typeof Jt!="function")throw Error(r(150));return pt=Jt.call(pt),ae(st,nt,pt,Rt)}if(typeof pt.then=="function")return Fe(st,nt,ml(pt),Rt);if(pt.$$typeof===R)return Fe(st,nt,nl(st,pt),Rt);_l(st,pt)}return typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint"?(pt=""+pt,nt!==null&&nt.tag===6?(a(st,nt.sibling),Rt=c(nt,pt),Rt.return=st,st=Rt):(a(st,nt),Rt=Qu(pt,st.mode,Rt),Rt.return=st,st=Rt),w(st)):a(st,nt)}return function(st,nt,pt,Rt){try{js=0;var Jt=Fe(st,nt,pt,Rt);return Fr=null,Jt}catch(ee){if(ee===Hs||ee===al)throw ee;var xe=Gn(29,ee,null,st.mode);return xe.lanes=Rt,xe.return=st,xe}finally{}}}var Hr=em(!0),nm=em(!1),ei=G(null),vi=null;function pa(e){var n=e.alternate;vt(un,un.current&1),vt(ei,e),vi===null&&(n===null||Pr.current!==null||n.memoizedState!==null)&&(vi=e)}function im(e){if(e.tag===22){if(vt(un,un.current),vt(ei,e),vi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(vi=e)}}else ma()}function ma(){vt(un,un.current),vt(ei,ei.current)}function Hi(e){Z(ei),vi===e&&(vi=null),Z(un)}var un=G(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Sf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Uc(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Lc={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=qn(),c=fa(s);c.payload=n,a!=null&&(c.callback=a),n=ha(e,c,s),n!==null&&(Yn(n,e,s),Gs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=qn(),c=fa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ha(e,c,s),n!==null&&(Yn(n,e,s),Gs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=qn(),s=fa(a);s.tag=2,n!=null&&(s.callback=n),n=ha(e,s,a),n!==null&&(Yn(n,e,a),Gs(n,e,a))}};function am(e,n,a,s,c,m,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,m,w):n.prototype&&n.prototype.isPureReactComponent?!Ls(a,s)||!Ls(c,m):!0}function rm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Lc.enqueueReplaceState(n,n.state,null)}function rr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function sm(e){vl(e)}function om(e){console.error(e)}function lm(e){vl(e)}function xl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function um(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Nc(e,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(e,n)},a}function cm(e){return e=fa(e),e.tag=3,e}function fm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var m=s.value;e.payload=function(){return c(m)},e.callback=function(){um(n,a,s)}}var w=a.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(e.callback=function(){um(n,a,s),typeof c!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var O=s.stack;this.componentDidCatch(s.value,{componentStack:O!==null?O:""})})}function Iv(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,c,!0),a=ei.current,a!==null){switch(a.tag){case 13:return vi===null?af():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===lc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(e,s,c)),!1;case 22:return a.flags|=65536,s===lc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(e,s,c)),!1}throw Error(r(435,a.tag))}return sf(e,s,c),af(),!1}if(Le)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ec&&(e=Error(r(422),{cause:s}),zs(Qn(e,a)))):(s!==ec&&(n=Error(r(423),{cause:s}),zs(Qn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Qn(s,a),c=Nc(e.stateNode,s,c),fc(e,c),Je!==4&&(Je=2)),!1;var m=Error(r(520),{cause:s});if(m=Qn(m,a),io===null?io=[m]:io.push(m),Je!==4&&(Je=2),n===null)return!0;s=Qn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Nc(a.stateNode,s,e),fc(a,e),!1;case 1:if(n=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sa===null||!Sa.has(m))))return a.flags|=65536,c&=-c,a.lanes|=c,c=cm(c),fm(c,e,a,s),fc(a,c),!1}a=a.return}while(a!==null);return!1}var hm=Error(r(461)),pn=!1;function yn(e,n,a,s){n.child=e===null?nm(n,null,a,s):Hr(n,e.child,a,s)}function dm(e,n,a,s,c){a=a.render;var m=n.ref;if("ref"in s){var w={};for(var O in s)O!=="ref"&&(w[O]=s[O])}else w=s;return nr(n),s=_c(e,n,a,w,m,c),O=gc(),e!==null&&!pn?(vc(e,n,c),ki(e,n,c)):(Le&&O&&$u(n),n.flags|=1,yn(e,n,s,c),n.child)}function pm(e,n,a,s,c){if(e===null){var m=a.type;return typeof m=="function"&&!Ku(m)&&m.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=m,mm(e,n,m,s,c)):(e=Jo(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(m=e.child,!kc(e,c)){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ls,a(w,s)&&e.ref===n.ref)return ki(e,n,c)}return n.flags|=1,e=Oi(m,s),e.ref=n.ref,e.return=n,n.child=e}function mm(e,n,a,s,c){if(e!==null){var m=e.memoizedProps;if(Ls(m,s)&&e.ref===n.ref)if(pn=!1,n.pendingProps=s=m,kc(e,c))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ki(e,n,c)}return Oc(e,n,a,s,c)}function _m(e,n,a){var s=n.pendingProps,c=s.children,m=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=m!==null?m.baseLanes|a:a,e!==null){for(c=n.child=e.child,m=0;c!==null;)m=m|c.lanes|c.childLanes,c=c.sibling;n.childLanes=m&~s}else n.childLanes=0,n.child=null;return gm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&il(n,m!==null?m.cachePool:null),m!==null?mp(n,m):dc(),im(n);else return n.lanes=n.childLanes=536870912,gm(e,n,m!==null?m.baseLanes|a:a,a)}else m!==null?(il(n,m.cachePool),mp(n,m),ma(),n.memoizedState=null):(e!==null&&il(n,null),dc(),ma());return yn(e,n,c,a),n.child}function gm(e,n,a,s){var c=oc();return c=c===null?null:{parent:ln._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&il(n,null),dc(),im(n),e!==null&&Is(e,n,s,!0),null}function yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Oc(e,n,a,s,c){return nr(n),a=_c(e,n,a,s,void 0,c),s=gc(),e!==null&&!pn?(vc(e,n,c),ki(e,n,c)):(Le&&s&&$u(n),n.flags|=1,yn(e,n,a,c),n.child)}function vm(e,n,a,s,c,m){return nr(n),n.updateQueue=null,a=gp(n,s,a,c),_p(e),s=gc(),e!==null&&!pn?(vc(e,n,m),ki(e,n,m)):(Le&&s&&$u(n),n.flags|=1,yn(e,n,a,m),n.child)}function xm(e,n,a,s,c){if(nr(n),n.stateNode===null){var m=Dr,w=a.contextType;typeof w=="object"&&w!==null&&(m=Tn(w)),m=new a(s,m),n.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Lc,n.stateNode=m,m._reactInternals=n,m=n.stateNode,m.props=s,m.state=n.memoizedState,m.refs={},uc(n),w=a.contextType,m.context=typeof w=="object"&&w!==null?Tn(w):Dr,m.state=n.memoizedState,w=a.getDerivedStateFromProps,typeof w=="function"&&(Uc(n,a,w,s),m.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(w=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),w!==m.state&&Lc.enqueueReplaceState(m,m.state,null),Xs(n,s,m,c),Vs(),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){m=n.stateNode;var O=n.memoizedProps,Q=rr(a,O);m.props=Q;var mt=m.context,wt=a.contextType;w=Dr,typeof wt=="object"&&wt!==null&&(w=Tn(wt));var Dt=a.getDerivedStateFromProps;wt=typeof Dt=="function"||typeof m.getSnapshotBeforeUpdate=="function",O=n.pendingProps!==O,wt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(O||mt!==w)&&rm(n,m,s,w),ca=!1;var gt=n.memoizedState;m.state=gt,Xs(n,s,m,c),Vs(),mt=n.memoizedState,O||gt!==mt||ca?(typeof Dt=="function"&&(Uc(n,a,Dt,s),mt=n.memoizedState),(Q=ca||am(n,a,Q,s,gt,mt,w))?(wt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=mt),m.props=s,m.state=mt,m.context=w,s=Q):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{m=n.stateNode,cc(e,n),w=n.memoizedProps,wt=rr(a,w),m.props=wt,Dt=n.pendingProps,gt=m.context,mt=a.contextType,Q=Dr,typeof mt=="object"&&mt!==null&&(Q=Tn(mt)),O=a.getDerivedStateFromProps,(mt=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==Dt||gt!==Q)&&rm(n,m,s,Q),ca=!1,gt=n.memoizedState,m.state=gt,Xs(n,s,m,c),Vs();var xt=n.memoizedState;w!==Dt||gt!==xt||ca||e!==null&&e.dependencies!==null&&el(e.dependencies)?(typeof O=="function"&&(Uc(n,a,O,s),xt=n.memoizedState),(wt=ca||am(n,a,wt,s,gt,xt,Q)||e!==null&&e.dependencies!==null&&el(e.dependencies))?(mt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(s,xt,Q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(s,xt,Q)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&gt===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&gt===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=xt),m.props=s,m.state=xt,m.context=Q,s=wt):(typeof m.componentDidUpdate!="function"||w===e.memoizedProps&&gt===e.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&gt===e.memoizedState||(n.flags|=1024),s=!1)}return m=s,yl(e,n),s=(n.flags&128)!==0,m||s?(m=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:m.render(),n.flags|=1,e!==null&&s?(n.child=Hr(n,e.child,null,c),n.child=Hr(n,null,a,c)):yn(e,n,a,c),n.memoizedState=m.state,e=n.child):e=ki(e,n,c),e}function ym(e,n,a,s){return Ps(),n.flags|=256,yn(e,n,a,s),n.child}var Pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zc(e){return{baseLanes:e,cachePool:op()}}function Ic(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function Sm(e,n,a){var s=n.pendingProps,c=!1,m=(n.flags&128)!==0,w;if((w=m)||(w=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),w&&(c=!0,n.flags&=-129),w=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(c?pa(n):ma(),Le){var O=Qe,Q;if(Q=O){t:{for(Q=O,O=gi;Q.nodeType!==8;){if(!O){O=null;break t}if(Q=ui(Q.nextSibling),Q===null){O=null;break t}}O=Q}O!==null?(n.memoizedState={dehydrated:O,treeContext:Qa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},Q=Gn(18,null,null,0),Q.stateNode=O,Q.return=n,n.child=Q,Dn=n,Qe=null,Q=!0):Q=!1}Q||tr(n)}if(O=n.memoizedState,O!==null&&(O=O.dehydrated,O!==null))return Sf(O)?n.lanes=32:n.lanes=536870912,null;Hi(n)}return O=s.children,s=s.fallback,c?(ma(),c=n.mode,O=Sl({mode:"hidden",children:O},c),s=Ka(s,c,a,null),O.return=n,s.return=n,O.sibling=s,n.child=O,c=n.child,c.memoizedState=zc(a),c.childLanes=Ic(e,w,a),n.memoizedState=Pc,s):(pa(n),Bc(n,O))}if(Q=e.memoizedState,Q!==null&&(O=Q.dehydrated,O!==null)){if(m)n.flags&256?(pa(n),n.flags&=-257,n=Fc(e,n,a)):n.memoizedState!==null?(ma(),n.child=e.child,n.flags|=128,n=null):(ma(),c=s.fallback,O=n.mode,s=Sl({mode:"visible",children:s.children},O),c=Ka(c,O,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Hr(n,e.child,null,a),s=n.child,s.memoizedState=zc(a),s.childLanes=Ic(e,w,a),n.memoizedState=Pc,n=c);else if(pa(n),Sf(O)){if(w=O.nextSibling&&O.nextSibling.dataset,w)var mt=w.dgst;w=mt,s=Error(r(419)),s.stack="",s.digest=w,zs({value:s,source:null,stack:null}),n=Fc(e,n,a)}else if(pn||Is(e,n,a,!1),w=(a&e.childLanes)!==0,pn||w){if(w=qe,w!==null&&(s=a&-a,s=(s&42)!==0?1:fe(s),s=(s&(w.suspendedLanes|a))!==0?0:s,s!==0&&s!==Q.retryLane))throw Q.retryLane=s,Cr(e,s),Yn(w,e,s),hm;O.data==="$?"||af(),n=Fc(e,n,a)}else O.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=Q.treeContext,Qe=ui(O.nextSibling),Dn=n,Le=!0,$a=null,gi=!1,e!==null&&($n[ti++]=Pi,$n[ti++]=zi,$n[ti++]=Qa,Pi=e.id,zi=e.overflow,Qa=n),n=Bc(n,s.children),n.flags|=4096);return n}return c?(ma(),c=s.fallback,O=n.mode,Q=e.child,mt=Q.sibling,s=Oi(Q,{mode:"hidden",children:s.children}),s.subtreeFlags=Q.subtreeFlags&65011712,mt!==null?c=Oi(mt,c):(c=Ka(c,O,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,O=e.child.memoizedState,O===null?O=zc(a):(Q=O.cachePool,Q!==null?(mt=ln._currentValue,Q=Q.parent!==mt?{parent:mt,pool:mt}:Q):Q=op(),O={baseLanes:O.baseLanes|a,cachePool:Q}),c.memoizedState=O,c.childLanes=Ic(e,w,a),n.memoizedState=Pc,s):(pa(n),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(w=n.deletions,w===null?(n.deletions=[e],n.flags|=16):w.push(e)),n.child=a,n.memoizedState=null,a)}function Bc(e,n){return n=Sl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Sl(e,n){return e=Gn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Fc(e,n,a){return Hr(n,e.child,null,a),e=Bc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),ic(e.return,n,a)}function Hc(e,n,a,s,c){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=a,m.tailMode=c)}function Em(e,n,a){var s=n.pendingProps,c=s.revealOrder,m=s.tail;if(yn(e,n,s.children,a),s=un.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mm(e,a,n);else if(e.tag===19)Mm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(vt(un,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Hc(n,!1,c,a,m);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&gl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Hc(n,!0,a,null,m);break;case"together":Hc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Is(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Oi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function kc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&el(e)))}function Bv(e,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),ua(n,ln,e.memoizedState.cache),Ps();break;case 27:case 5:Yt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sm(e,n,a):(pa(n),e=ki(e,n,a),e!==null?e.sibling:null);pa(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Is(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Em(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),vt(un,un.current),s)break;return null;case 22:case 23:return n.lanes=0,_m(e,n,a);case 24:ua(n,ln,e.memoizedState.cache)}return ki(e,n,a)}function bm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!kc(e,a)&&(n.flags&128)===0)return pn=!1,Bv(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Le&&(n.flags&1048576)!==0&&tp(n,tl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Ku(s)?(e=rr(s,e),n.tag=1,n=xm(null,n,s,e,a)):(n.tag=0,n=Oc(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===C){n.tag=11,n=dm(null,n,s,e,a);break t}else if(c===B){n.tag=14,n=pm(null,n,s,e,a);break t}}throw n=T(s)||s,Error(r(306,n,""))}}return n;case 0:return Oc(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=rr(s,n.pendingProps),xm(e,n,s,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var m=n.memoizedState;c=m.element,cc(e,n),Xs(n,s,null,a);var w=n.memoizedState;if(s=w.cache,ua(n,ln,s),s!==m.cache&&ac(n,[ln],a,!0),Vs(),s=w.element,m.isDehydrated)if(m={element:s,isDehydrated:!1,cache:w.cache},n.updateQueue.baseState=m,n.memoizedState=m,n.flags&256){n=ym(e,n,s,a);break t}else if(s!==c){c=Qn(Error(r(424)),n),zs(c),n=ym(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=ui(e.firstChild),Dn=n,Le=!0,$a=null,gi=!0,a=nm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ps(),s===c){n=ki(e,n,a);break t}yn(e,n,s,a)}n=n.child}return n;case 26:return yl(e,n),e===null?(a=R_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,e=n.pendingProps,s=Pl(At.current).createElement(a),s[sn]=n,s[vn]=e,Mn(s,a,e),en(s),n.stateNode=s):n.memoizedState=R_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yt(n),e===null&&Le&&(s=n.stateNode=T_(n.type,n.pendingProps,At.current),Dn=n,gi=!0,c=Qe,ba(n.type)?(Mf=c,Qe=ui(s.firstChild)):Qe=c),yn(e,n,n.pendingProps.children,a),yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((c=s=Qe)&&(s=hx(s,n.type,n.pendingProps,gi),s!==null?(n.stateNode=s,Dn=n,Qe=ui(s.firstChild),gi=!1,c=!0):c=!1),c||tr(n)),Yt(n),c=n.type,m=n.pendingProps,w=e!==null?e.memoizedProps:null,s=m.children,vf(c,m)?s=null:w!==null&&vf(c,w)&&(n.flags|=32),n.memoizedState!==null&&(c=_c(e,n,Dv,null,null,a),ho._currentValue=c),yl(e,n),yn(e,n,s,a),n.child;case 6:return e===null&&Le&&((e=a=Qe)&&(a=dx(a,n.pendingProps,gi),a!==null?(n.stateNode=a,Dn=n,Qe=null,e=!0):e=!1),e||tr(n)),null;case 13:return Sm(e,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Hr(n,null,s,a):yn(e,n,s,a),n.child;case 11:return dm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ua(n,n.type,s.value),yn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,nr(n),c=Tn(c),s=s(c),n.flags|=1,yn(e,n,s,a),n.child;case 14:return pm(e,n,n.type,n.pendingProps,a);case 15:return mm(e,n,n.type,n.pendingProps,a);case 19:return Em(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Sl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Oi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return _m(e,n,a);case 24:return nr(n),s=Tn(ln),e===null?(c=oc(),c===null&&(c=qe,m=rc(),c.pooledCache=m,m.refCount++,m!==null&&(c.pooledCacheLanes|=a),c=m),n.memoizedState={parent:s,cache:c},uc(n),ua(n,ln,c)):((e.lanes&a)!==0&&(cc(e,n),Xs(n,null,null,a),Vs()),c=e.memoizedState,m=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,ln,s)):(s=m.cache,ua(n,ln,s),s!==c.cache&&ac(n,[ln],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Gi(e){e.flags|=4}function Tm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!N_(n)){if(n=ei.current,n!==null&&((Te&4194048)===Te?vi!==null:(Te&62914560)!==Te&&(Te&536870912)===0||n!==vi))throw ks=lc,lp;e.flags|=8192}}function Ml(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ft():536870912,e.lanes|=n,Xr|=n)}function Qs(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Fv(e,n,a){var s=n.pendingProps;switch(tc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(ln),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Os(n)?Gi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ip())),Ze(n),null;case 26:return a=n.memoizedState,e===null?(Gi(n),a!==null?(Ze(n),Tm(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Gi(n),Ze(n),Tm(n,a)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==s&&Gi(n),Ze(n),n.flags&=-16777217),null;case 27:re(n),a=At.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=J.current,Os(n)?ep(n):(e=T_(c,s,a),n.stateNode=e,Gi(n))}return Ze(n),null;case 5:if(re(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(e=J.current,Os(n))ep(n);else{switch(c=Pl(At.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[sn]=n,e[vn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Mn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Gi(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=At.current,Os(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||v_(e.nodeValue,a)),e||tr(n)}else e=Pl(e).createTextNode(s),e[sn]=n,n.stateNode=e}return Ze(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Os(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var m=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(m=s.memoizedState.cachePool.pool),m!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),Ze(n),null;case 4:return Wt(),e===null&&df(n.stateNode.containerInfo),Ze(n),null;case 10:return Bi(n.type),Ze(n),null;case 19:if(Z(un),c=n.memoizedState,c===null)return Ze(n),null;if(s=(n.flags&128)!==0,m=c.rendering,m===null)if(s)Qs(c,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(m=gl(e),m!==null){for(n.flags|=128,Qs(c,!1),e=m.updateQueue,n.updateQueue=e,Ml(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$d(a,e),a=a.sibling;return vt(un,un.current&1|2),n.child}e=e.sibling}c.tail!==null&&V()>Tl&&(n.flags|=128,s=!0,Qs(c,!1),n.lanes=4194304)}else{if(!s)if(e=gl(m),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Ml(n,e),Qs(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Le)return Ze(n),null}else 2*V()-c.renderingStartTime>Tl&&a!==536870912&&(n.flags|=128,s=!0,Qs(c,!1),n.lanes=4194304);c.isBackwards?(m.sibling=n.child,n.child=m):(e=c.last,e!==null?e.sibling=m:n.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=V(),n.sibling=null,e=un.current,vt(un,s?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return Hi(n),pc(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Z(ir),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(ln),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Hv(e,n){switch(tc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bi(ln),Wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return re(n),null;case 13:if(Hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(un),null;case 4:return Wt(),null;case 10:return Bi(n.type),null;case 22:case 23:return Hi(n),pc(),e!==null&&Z(ir),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Bi(ln),null;case 25:return null;default:return null}}function Am(e,n){switch(tc(n),n.tag){case 3:Bi(ln),Wt();break;case 26:case 27:case 5:re(n);break;case 4:Wt();break;case 13:Hi(n);break;case 19:Z(un);break;case 10:Bi(n.type);break;case 22:case 23:Hi(n),pc(),e!==null&&Z(ir);break;case 24:Bi(ln)}}function Js(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var m=a.create,w=a.inst;s=m(),w.destroy=s}a=a.next}while(a!==c)}}catch(O){Ve(n,n.return,O)}}function _a(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var m=c.next;s=m;do{if((s.tag&e)===e){var w=s.inst,O=w.destroy;if(O!==void 0){w.destroy=void 0,c=n;var Q=a,mt=O;try{mt()}catch(wt){Ve(c,Q,wt)}}}s=s.next}while(s!==m)}}catch(wt){Ve(n,n.return,wt)}}function wm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{pp(n,a)}catch(s){Ve(e,e.return,s)}}}function Rm(e,n,a){a.props=rr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ve(e,n,s)}}function $s(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Ve(e,n,c)}}function xi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ve(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ve(e,n,c)}else a.current=null}function Cm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ve(e,e.return,c)}}function Gc(e,n,a){try{var s=e.stateNode;ox(s,e.type,a,n),s[vn]=n}catch(c){Ve(e,e.return,c)}}function Dm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function Vc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ol));else if(s!==4&&(s===27&&ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Xc(e,n,a),e=e.sibling;e!==null;)Xc(e,n,a),e=e.sibling}function El(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(El(e,n,a),e=e.sibling;e!==null;)El(e,n,a),e=e.sibling}function Um(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[sn]=e,n[vn]=a}catch(m){Ve(e,e.return,m)}}var Vi=!1,tn=!1,Wc=!1,Lm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function kv(e,n){if(e=e.containerInfo,_f=kl,e=Vd(e),Vu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,m=s.focusNode;s=s.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break t}var w=0,O=-1,Q=-1,mt=0,wt=0,Dt=e,gt=null;e:for(;;){for(var xt;Dt!==a||c!==0&&Dt.nodeType!==3||(O=w+c),Dt!==m||s!==0&&Dt.nodeType!==3||(Q=w+s),Dt.nodeType===3&&(w+=Dt.nodeValue.length),(xt=Dt.firstChild)!==null;)gt=Dt,Dt=xt;for(;;){if(Dt===e)break e;if(gt===a&&++mt===c&&(O=w),gt===m&&++wt===s&&(Q=w),(xt=Dt.nextSibling)!==null)break;Dt=gt,gt=Dt.parentNode}Dt=xt}a=O===-1||Q===-1?null:{start:O,end:Q}}else a=null}a=a||{start:0,end:0}}else a=null;for(gf={focusedElem:e,selectionRange:a},kl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,m=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,a=n,c=m.memoizedProps,m=m.memoizedState,s=a.stateNode;try{var ue=rr(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ue,m),s.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ve(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function Nm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),s&4&&Js(5,a);break;case 1:if(ga(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(w){Ve(a,a.return,w)}else{var c=rr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(w){Ve(a,a.return,w)}}s&64&&wm(a),s&512&&$s(a,a.return);break;case 3:if(ga(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pp(e,n)}catch(w){Ve(a,a.return,w)}}break;case 27:n===null&&s&4&&Um(a);case 26:case 5:ga(e,a),n===null&&s&4&&Cm(a),s&512&&$s(a,a.return);break;case 12:ga(e,a);break;case 13:ga(e,a),s&4&&zm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Kv.bind(null,a),px(e,a))));break;case 22:if(s=a.memoizedState!==null||Vi,!s){n=n!==null&&n.memoizedState!==null||tn,c=Vi;var m=tn;Vi=s,(tn=n)&&!m?va(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),Vi=c,tn=m}break;case 30:break;default:ga(e,a)}}function Om(e){var n=e.alternate;n!==null&&(e.alternate=null,Om(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ra(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Pn=!1;function Xi(e,n,a){for(a=a.child;a!==null;)Pm(e,n,a),a=a.sibling}function Pm(e,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:tn||xi(a,n),Xi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||xi(a,n);var s=Ye,c=Pn;ba(a.type)&&(Ye=a.stateNode,Pn=!1),Xi(e,n,a),lo(a.stateNode),Ye=s,Pn=c;break;case 5:tn||xi(a,n);case 6:if(s=Ye,c=Pn,Ye=null,Xi(e,n,a),Ye=s,Pn=c,Ye!==null)if(Pn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(m){Ve(a,n,m)}else try{Ye.removeChild(a.stateNode)}catch(m){Ve(a,n,m)}break;case 18:Ye!==null&&(Pn?(e=Ye,E_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),go(e)):E_(Ye,a.stateNode));break;case 4:s=Ye,c=Pn,Ye=a.stateNode.containerInfo,Pn=!0,Xi(e,n,a),Ye=s,Pn=c;break;case 0:case 11:case 14:case 15:tn||_a(2,a,n),tn||_a(4,a,n),Xi(e,n,a);break;case 1:tn||(xi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Rm(a,n,s)),Xi(e,n,a);break;case 21:Xi(e,n,a);break;case 22:tn=(s=tn)||a.memoizedState!==null,Xi(e,n,a),tn=s;break;default:Xi(e,n,a)}}function zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{go(e)}catch(a){Ve(n,n.return,a)}}function Gv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Lm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Lm),n;default:throw Error(r(435,e.tag))}}function qc(e,n){var a=Gv(e);n.forEach(function(s){var c=Qv.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function Vn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],m=e,w=n,O=w;t:for(;O!==null;){switch(O.tag){case 27:if(ba(O.type)){Ye=O.stateNode,Pn=!1;break t}break;case 5:Ye=O.stateNode,Pn=!1;break t;case 3:case 4:Ye=O.stateNode.containerInfo,Pn=!0;break t}O=O.return}if(Ye===null)throw Error(r(160));Pm(m,w,c),Ye=null,Pn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Im(n,e),n=n.sibling}var li=null;function Im(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),Xn(e),s&4&&(_a(3,e,e.return),Js(3,e),_a(5,e,e.return));break;case 1:Vn(n,e),Xn(e),s&512&&(tn||a===null||xi(a,a.return)),s&64&&Vi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=li;if(Vn(n,e),Xn(e),s&512&&(tn||a===null||xi(a,a.return)),s&4){var m=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":m=c.getElementsByTagName("title")[0],(!m||m[aa]||m[sn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=c.createElement(s),c.head.insertBefore(m,c.querySelector("head > title"))),Mn(m,s,a),m[sn]=e,en(m),s=m;break t;case"link":var w=U_("link","href",c).get(s+(a.href||""));if(w){for(var O=0;O<w.length;O++)if(m=w[O],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){w.splice(O,1);break e}}m=c.createElement(s),Mn(m,s,a),c.head.appendChild(m);break;case"meta":if(w=U_("meta","content",c).get(s+(a.content||""))){for(O=0;O<w.length;O++)if(m=w[O],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){w.splice(O,1);break e}}m=c.createElement(s),Mn(m,s,a),c.head.appendChild(m);break;default:throw Error(r(468,s))}m[sn]=e,en(m),s=m}e.stateNode=s}else L_(c,e.type,e.stateNode);else e.stateNode=D_(c,s,e.memoizedProps);else m!==s?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,s===null?L_(c,e.type,e.stateNode):D_(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Gc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,e),Xn(e),s&512&&(tn||a===null||xi(a,a.return)),a!==null&&s&4&&Gc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,e),Xn(e),s&512&&(tn||a===null||xi(a,a.return)),e.flags&32){c=e.stateNode;try{_i(c,"")}catch(xt){Ve(e,e.return,xt)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Gc(e,c,a!==null?a.memoizedProps:c)),s&1024&&(Wc=!0);break;case 6:if(Vn(n,e),Xn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(xt){Ve(e,e.return,xt)}}break;case 3:if(Bl=null,c=li,li=zl(n.containerInfo),Vn(n,e),li=c,Xn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{go(n.containerInfo)}catch(xt){Ve(e,e.return,xt)}Wc&&(Wc=!1,Bm(e));break;case 4:s=li,li=zl(e.stateNode.containerInfo),Vn(n,e),Xn(e),li=s;break;case 12:Vn(n,e),Xn(e);break;case 13:Vn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jc=V()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,qc(e,s)));break;case 22:c=e.memoizedState!==null;var Q=a!==null&&a.memoizedState!==null,mt=Vi,wt=tn;if(Vi=mt||c,tn=wt||Q,Vn(n,e),tn=wt,Vi=mt,Xn(e),s&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||Q||Vi||tn||sr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){Q=a=n;try{if(m=Q.stateNode,c)w=m.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{O=Q.stateNode;var Dt=Q.memoizedProps.style,gt=Dt!=null&&Dt.hasOwnProperty("display")?Dt.display:null;O.style.display=gt==null||typeof gt=="boolean"?"":(""+gt).trim()}}catch(xt){Ve(Q,Q.return,xt)}}}else if(n.tag===6){if(a===null){Q=n;try{Q.stateNode.nodeValue=c?"":Q.memoizedProps}catch(xt){Ve(Q,Q.return,xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,qc(e,a))));break;case 19:Vn(n,e),Xn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,qc(e,s)));break;case 30:break;case 21:break;default:Vn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Dm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,m=Vc(e);El(e,m,c);break;case 5:var w=a.stateNode;a.flags&32&&(_i(w,""),a.flags&=-33);var O=Vc(e);El(e,O,w);break;case 3:case 4:var Q=a.stateNode.containerInfo,mt=Vc(e);Xc(e,mt,Q);break;default:throw Error(r(161))}}catch(wt){Ve(e,e.return,wt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nm(e,n.alternate,n),n=n.sibling}function sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),sr(n);break;case 1:xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rm(n,n.return,a),sr(n);break;case 27:lo(n.stateNode);case 26:case 5:xi(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}e=e.sibling}}function va(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,m=n,w=m.flags;switch(m.tag){case 0:case 11:case 15:va(c,m,a),Js(4,m);break;case 1:if(va(c,m,a),s=m,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(mt){Ve(s,s.return,mt)}if(s=m,c=s.updateQueue,c!==null){var O=s.stateNode;try{var Q=c.shared.hiddenCallbacks;if(Q!==null)for(c.shared.hiddenCallbacks=null,c=0;c<Q.length;c++)dp(Q[c],O)}catch(mt){Ve(s,s.return,mt)}}a&&w&64&&wm(m),$s(m,m.return);break;case 27:Um(m);case 26:case 5:va(c,m,a),a&&s===null&&w&4&&Cm(m),$s(m,m.return);break;case 12:va(c,m,a);break;case 13:va(c,m,a),a&&w&4&&zm(c,m);break;case 22:m.memoizedState===null&&va(c,m,a),$s(m,m.return);break;case 30:break;default:va(c,m,a)}n=n.sibling}}function Yc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bs(a))}function Zc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Bs(e))}function yi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fm(e,n,a,s),n=n.sibling}function Fm(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,s),c&2048&&Js(9,n);break;case 1:yi(e,n,a,s);break;case 3:yi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Bs(e)));break;case 12:if(c&2048){yi(e,n,a,s),e=n.stateNode;try{var m=n.memoizedProps,w=m.id,O=m.onPostCommit;typeof O=="function"&&O(w,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Q){Ve(n,n.return,Q)}}else yi(e,n,a,s);break;case 13:yi(e,n,a,s);break;case 23:break;case 22:m=n.stateNode,w=n.alternate,n.memoizedState!==null?m._visibility&2?yi(e,n,a,s):to(e,n):m._visibility&2?yi(e,n,a,s):(m._visibility|=2,kr(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Yc(w,n);break;case 24:yi(e,n,a,s),c&2048&&Zc(n.alternate,n);break;default:yi(e,n,a,s)}}function kr(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var m=e,w=n,O=a,Q=s,mt=w.flags;switch(w.tag){case 0:case 11:case 15:kr(m,w,O,Q,c),Js(8,w);break;case 23:break;case 22:var wt=w.stateNode;w.memoizedState!==null?wt._visibility&2?kr(m,w,O,Q,c):to(m,w):(wt._visibility|=2,kr(m,w,O,Q,c)),c&&mt&2048&&Yc(w.alternate,w);break;case 24:kr(m,w,O,Q,c),c&&mt&2048&&Zc(w.alternate,w);break;default:kr(m,w,O,Q,c)}n=n.sibling}}function to(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:to(a,s),c&2048&&Yc(s.alternate,s);break;case 24:to(a,s),c&2048&&Zc(s.alternate,s);break;default:to(a,s)}n=n.sibling}}var eo=8192;function Gr(e){if(e.subtreeFlags&eo)for(e=e.child;e!==null;)Hm(e),e=e.sibling}function Hm(e){switch(e.tag){case 26:Gr(e),e.flags&eo&&e.memoizedState!==null&&wx(li,e.memoizedState,e.memoizedProps);break;case 5:Gr(e);break;case 3:case 4:var n=li;li=zl(e.stateNode.containerInfo),Gr(e),li=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=eo,eo=16777216,Gr(e),eo=n):Gr(e));break;default:Gr(e)}}function km(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function no(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Vm(s,e)}km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gm(e),e=e.sibling}function Gm(e){switch(e.tag){case 0:case 11:case 15:no(e),e.flags&2048&&_a(9,e,e.return);break;case 3:no(e);break;case 12:no(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,bl(e)):no(e);break;default:no(e)}}function bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Vm(s,e)}km(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_a(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}e=e.sibling}}function Vm(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Bs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=e;mn!==null;){s=mn;var c=s.sibling,m=s.return;if(Om(s),s===a){mn=null;break t}if(c!==null){c.return=m,mn=c;break t}mn=m}}}var Vv={getCacheForType:function(e){var n=Tn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Xv=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,ye=null,Te=0,ze=0,Wn=null,xa=!1,Vr=!1,jc=!1,Wi=0,Je=0,ya=0,or=0,Kc=0,ni=0,Xr=0,io=null,zn=null,Qc=!1,Jc=0,Tl=1/0,Al=null,Sa=null,Sn=0,Ma=null,Wr=null,qr=0,$c=0,tf=null,Xm=null,ao=0,ef=null;function qn(){if((Pe&2)!==0&&Te!==0)return Te&-Te;if(X.T!==null){var e=Nr;return e!==0?e:uf()}return we()}function Wm(){ni===0&&(ni=(Te&536870912)===0||Le?it():536870912);var e=ei.current;return e!==null&&(e.flags|=32),ni}function Yn(e,n,a){(e===qe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),Ea(e,Te,ni,!1)),Gt(e,a),((Pe&2)===0||e!==qe)&&(e===qe&&((Pe&2)===0&&(or|=a),Je===4&&Ea(e,Te,ni,!1)),Si(e))}function qm(e,n,a){if((Pe&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||zt(e,n),c=s?Yv(e,n):rf(e,n,!0),m=s;do{if(c===0){Vr&&!s&&Ea(e,n,0,!1);break}else{if(a=e.current.alternate,m&&!Wv(a)){c=rf(e,n,!1),m=!1;continue}if(c===2){if(m=n,e.errorRecoveryDisabledLanes&m)var w=0;else w=e.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){n=w;t:{var O=e;c=io;var Q=O.current.memoizedState.isDehydrated;if(Q&&(Yr(O,w).flags|=256),w=rf(O,w,!1),w!==2){if(jc&&!Q){O.errorRecoveryDisabledLanes|=m,or|=m,c=4;break t}m=zn,zn=c,m!==null&&(zn===null?zn=m:zn.push.apply(zn,m))}c=w}if(m=!1,c!==2)continue}}if(c===1){Yr(e,0),Ea(e,n,0,!0);break}t:{switch(s=e,m=c,m){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ea(s,n,ni,!xa);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Jc+300-V(),10<c)){if(Ea(s,n,ni,!xa),jt(s,0,!0)!==0)break t;s.timeoutHandle=S_(Ym.bind(null,s,a,zn,Al,Qc,n,ni,or,Xr,xa,m,2,-0,0),c);break t}Ym(s,a,zn,Al,Qc,n,ni,or,Xr,xa,m,0,-0,0)}}break}while(!0);Si(e)}function Ym(e,n,a,s,c,m,w,O,Q,mt,wt,Dt,gt,xt){if(e.timeoutHandle=-1,Dt=n.subtreeFlags,(Dt&8192||(Dt&16785408)===16785408)&&(fo={stylesheets:null,count:0,unsuspend:Ax},Hm(n),Dt=Rx(),Dt!==null)){e.cancelPendingCommit=Dt(t_.bind(null,e,n,m,a,s,c,w,O,Q,wt,1,gt,xt)),Ea(e,m,w,!mt);return}t_(e,n,m,a,s,c,w,O,Q)}function Wv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],m=c.getSnapshot;c=c.value;try{if(!kn(m(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ea(e,n,a,s){n&=~Kc,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var m=31-It(c),w=1<<m;s[m]=-1,c&=~w}a!==0&&Ut(e,a,n)}function wl(){return(Pe&6)===0?(ro(0),!1):!0}function nf(){if(ye!==null){if(ze===0)var e=ye.return;else e=ye,Ii=er=null,xc(e),Fr=null,js=0,e=ye;for(;e!==null;)Am(e.alternate,e),e=e.return;ye=null}}function Yr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ux(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),nf(),qe=e,ye=a=Oi(e.current,null),Te=n,ze=0,Wn=null,xa=!1,Vr=zt(e,n),jc=!1,Xr=ni=Kc=or=ya=Je=0,zn=io=null,Qc=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-It(s),m=1<<c;n|=e[c],s&=~m}return Wi=n,jo(),a}function Zm(e,n){_e=null,X.H=pl,n===Hs||n===al?(n=fp(),ze=3):n===lp?(n=fp(),ze=4):ze=n===hm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,ye===null&&(Je=1,xl(e,Qn(n,e.current)))}function jm(){var e=X.H;return X.H=pl,e===null?pl:e}function Km(){var e=X.A;return X.A=Vv,e}function af(){Je=4,xa||(Te&4194048)!==Te&&ei.current!==null||(Vr=!0),(ya&134217727)===0&&(or&134217727)===0||qe===null||Ea(qe,Te,ni,!1)}function rf(e,n,a){var s=Pe;Pe|=2;var c=jm(),m=Km();(qe!==e||Te!==n)&&(Al=null,Yr(e,n)),n=!1;var w=Je;t:do try{if(ze!==0&&ye!==null){var O=ye,Q=Wn;switch(ze){case 8:nf(),w=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var mt=ze;if(ze=0,Wn=null,Zr(e,O,Q,mt),a&&Vr){w=0;break t}break;default:mt=ze,ze=0,Wn=null,Zr(e,O,Q,mt)}}qv(),w=Je;break}catch(wt){Zm(e,wt)}while(!0);return n&&e.shellSuspendCounter++,Ii=er=null,Pe=s,X.H=c,X.A=m,ye===null&&(qe=null,Te=0,jo()),w}function qv(){for(;ye!==null;)Qm(ye)}function Yv(e,n){var a=Pe;Pe|=2;var s=jm(),c=Km();qe!==e||Te!==n?(Al=null,Tl=V()+500,Yr(e,n)):Vr=zt(e,n);t:do try{if(ze!==0&&ye!==null){n=ye;var m=Wn;e:switch(ze){case 1:ze=0,Wn=null,Zr(e,n,m,1);break;case 2:case 9:if(up(m)){ze=0,Wn=null,Jm(n);break}n=function(){ze!==2&&ze!==9||qe!==e||(ze=7),Si(e)},m.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:up(m)?(ze=0,Wn=null,Jm(n)):(ze=0,Wn=null,Zr(e,n,m,7));break;case 5:var w=null;switch(ye.tag){case 26:w=ye.memoizedState;case 5:case 27:var O=ye;if(!w||N_(w)){ze=0,Wn=null;var Q=O.sibling;if(Q!==null)ye=Q;else{var mt=O.return;mt!==null?(ye=mt,Rl(mt)):ye=null}break e}}ze=0,Wn=null,Zr(e,n,m,5);break;case 6:ze=0,Wn=null,Zr(e,n,m,6);break;case 8:nf(),Je=6;break t;default:throw Error(r(462))}}Zv();break}catch(wt){Zm(e,wt)}while(!0);return Ii=er=null,X.H=s,X.A=c,Pe=a,ye!==null?0:(qe=null,Te=0,jo(),Je)}function Zv(){for(;ye!==null&&!bt();)Qm(ye)}function Qm(e){var n=bm(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Rl(e):ye=n}function Jm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vm(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=vm(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:xc(n);default:Am(a,n),n=ye=$d(n,Wi),n=bm(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Rl(e):ye=n}function Zr(e,n,a,s){Ii=er=null,xc(n),Fr=null,js=0;var c=n.return;try{if(Iv(e,c,n,a,Te)){Je=1,xl(e,Qn(a,e.current)),ye=null;return}}catch(m){if(c!==null)throw ye=c,m;Je=1,xl(e,Qn(a,e.current)),ye=null;return}n.flags&32768?(Le||s===1?e=!0:Vr||(Te&536870912)!==0?e=!1:(xa=e=!0,(s===2||s===9||s===3||s===6)&&(s=ei.current,s!==null&&s.tag===13&&(s.flags|=16384))),$m(n,e)):Rl(n)}function Rl(e){var n=e;do{if((n.flags&32768)!==0){$m(n,xa);return}e=n.return;var a=Fv(n.alternate,n,Wi);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);Je===0&&(Je=5)}function $m(e,n){do{var a=Hv(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);Je=6,ye=null}function t_(e,n,a,s,c,m,w,O,Q){e.cancelPendingCommit=null;do Cl();while(Sn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(m=n.lanes|n.childLanes,m|=Zu,Ot(e,a,m,w,O,Q),e===qe&&(ye=qe=null,Te=0),Wr=n,Ma=e,qr=a,$c=m,tf=c,Xm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jv(yt,function(){return r_(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=X.T,X.T=null,c=q.p,q.p=2,w=Pe,Pe|=4;try{kv(e,n,a)}finally{Pe=w,q.p=c,X.T=s}}Sn=1,e_(),n_(),i_()}}function e_(){if(Sn===1){Sn=0;var e=Ma,n=Wr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=X.T,X.T=null;var s=q.p;q.p=2;var c=Pe;Pe|=4;try{Im(n,e);var m=gf,w=Vd(e.containerInfo),O=m.focusedElem,Q=m.selectionRange;if(w!==O&&O&&O.ownerDocument&&Gd(O.ownerDocument.documentElement,O)){if(Q!==null&&Vu(O)){var mt=Q.start,wt=Q.end;if(wt===void 0&&(wt=mt),"selectionStart"in O)O.selectionStart=mt,O.selectionEnd=Math.min(wt,O.value.length);else{var Dt=O.ownerDocument||document,gt=Dt&&Dt.defaultView||window;if(gt.getSelection){var xt=gt.getSelection(),ue=O.textContent.length,ae=Math.min(Q.start,ue),Fe=Q.end===void 0?ae:Math.min(Q.end,ue);!xt.extend&&ae>Fe&&(w=Fe,Fe=ae,ae=w);var st=kd(O,ae),nt=kd(O,Fe);if(st&&nt&&(xt.rangeCount!==1||xt.anchorNode!==st.node||xt.anchorOffset!==st.offset||xt.focusNode!==nt.node||xt.focusOffset!==nt.offset)){var pt=Dt.createRange();pt.setStart(st.node,st.offset),xt.removeAllRanges(),ae>Fe?(xt.addRange(pt),xt.extend(nt.node,nt.offset)):(pt.setEnd(nt.node,nt.offset),xt.addRange(pt))}}}}for(Dt=[],xt=O;xt=xt.parentNode;)xt.nodeType===1&&Dt.push({element:xt,left:xt.scrollLeft,top:xt.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<Dt.length;O++){var Rt=Dt[O];Rt.element.scrollLeft=Rt.left,Rt.element.scrollTop=Rt.top}}kl=!!_f,gf=_f=null}finally{Pe=c,q.p=s,X.T=a}}e.current=n,Sn=2}}function n_(){if(Sn===2){Sn=0;var e=Ma,n=Wr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=X.T,X.T=null;var s=q.p;q.p=2;var c=Pe;Pe|=4;try{Nm(e,n.alternate,n)}finally{Pe=c,q.p=s,X.T=a}}Sn=3}}function i_(){if(Sn===4||Sn===3){Sn=0,ht();var e=Ma,n=Wr,a=qr,s=Xm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Wr=Ma=null,a_(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Sa=null),Oe(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=X.T,c=q.p,q.p=2,X.T=null;try{for(var m=e.onRecoverableError,w=0;w<s.length;w++){var O=s[w];m(O.value,{componentStack:O.stack})}}finally{X.T=n,q.p=c}}(qr&3)!==0&&Cl(),Si(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===ef?ao++:(ao=0,ef=e):ao=0,ro(0)}}function a_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Bs(n)))}function Cl(e){return e_(),n_(),i_(),r_()}function r_(){if(Sn!==5)return!1;var e=Ma,n=$c;$c=0;var a=Oe(qr),s=X.T,c=q.p;try{q.p=32>a?32:a,X.T=null,a=tf,tf=null;var m=Ma,w=qr;if(Sn=0,Wr=Ma=null,qr=0,(Pe&6)!==0)throw Error(r(331));var O=Pe;if(Pe|=4,Gm(m.current),Fm(m,m.current,w,a),Pe=O,ro(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(ct,m)}catch{}return!0}finally{q.p=c,X.T=s,a_(e,n)}}function s_(e,n,a){n=Qn(a,n),n=Nc(e.stateNode,n,2),e=ha(e,n,2),e!==null&&(Gt(e,2),Si(e))}function Ve(e,n,a){if(e.tag===3)s_(e,e,a);else for(;n!==null;){if(n.tag===3){s_(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))){e=Qn(a,e),a=cm(2),s=ha(n,a,2),s!==null&&(fm(a,s,n,e),Gt(s,2),Si(s));break}}n=n.return}}function sf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Xv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(jc=!0,c.add(a),e=jv.bind(null,e,n,a),n.then(e,e))}function jv(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Te&a)===a&&(Je===4||Je===3&&(Te&62914560)===Te&&300>V()-Jc?(Pe&2)===0&&Yr(e,0):Kc|=a,Xr===Te&&(Xr=0)),Si(e)}function o_(e,n){n===0&&(n=Ft()),e=Cr(e,n),e!==null&&(Gt(e,n),Si(e))}function Kv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),o_(e,a)}function Qv(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),o_(e,a)}function Jv(e,n){return ce(e,n)}var Dl=null,jr=null,of=!1,Ul=!1,lf=!1,lr=0;function Si(e){e!==jr&&e.next===null&&(jr===null?Dl=jr=e:jr=jr.next=e),Ul=!0,of||(of=!0,tx())}function ro(e,n){if(!lf&&Ul){lf=!0;do for(var a=!1,s=Dl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var m=0;else{var w=s.suspendedLanes,O=s.pingedLanes;m=(1<<31-It(42|e)+1)-1,m&=c&~(w&~O),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,f_(s,m))}else m=Te,m=jt(s,s===qe?m:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(m&3)===0||zt(s,m)||(a=!0,f_(s,m));s=s.next}while(a);lf=!1}}function $v(){l_()}function l_(){Ul=of=!1;var e=0;lr!==0&&(lx()&&(e=lr),lr=0);for(var n=V(),a=null,s=Dl;s!==null;){var c=s.next,m=u_(s,n);m===0?(s.next=null,a===null?Dl=c:a.next=c,c===null&&(jr=a)):(a=s,(e!==0||(m&3)!==0)&&(Ul=!0)),s=c}ro(e)}function u_(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var w=31-It(m),O=1<<w,Q=c[w];Q===-1?((O&a)===0||(O&s)!==0)&&(c[w]=le(O,n)):Q<=n&&(e.expiredLanes|=O),m&=~O}if(n=qe,a=Te,a=jt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&M(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&M(s),Oe(a)){case 2:case 8:a=_t;break;case 32:a=yt;break;case 268435456:a=P;break;default:a=yt}return s=c_.bind(null,e),a=ce(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&M(s),e.callbackPriority=2,e.callbackNode=null,2}function c_(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Cl()&&e.callbackNode!==a)return null;var s=Te;return s=jt(e,e===qe?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(qm(e,s,n),u_(e,V()),e.callbackNode!=null&&e.callbackNode===a?c_.bind(null,e):null)}function f_(e,n){if(Cl())return null;qm(e,n,!0)}function tx(){cx(function(){(Pe&6)!==0?ce(et,$v):l_()})}function uf(){return lr===0&&(lr=it()),lr}function h_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Go(""+e)}function d_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ex(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var m=h_((c[vn]||null).action),w=s.submitter;w&&(n=(n=w[vn]||null)?h_(n.formAction):w.getAttribute("formAction"),n!==null&&(m=n,w=null));var O=new qo("action","action",null,s,c);e.push({event:O,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var Q=w?d_(c,w):new FormData(c);Rc(a,{pending:!0,data:Q,method:c.method,action:m},null,Q)}}else typeof m=="function"&&(O.preventDefault(),Q=w?d_(c,w):new FormData(c),Rc(a,{pending:!0,data:Q,method:c.method,action:m},m,Q))},currentTarget:c}]})}}for(var cf=0;cf<Yu.length;cf++){var ff=Yu[cf],nx=ff.toLowerCase(),ix=ff[0].toUpperCase()+ff.slice(1);oi(nx,"on"+ix)}oi(qd,"onAnimationEnd"),oi(Yd,"onAnimationIteration"),oi(Zd,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(yv,"onTransitionRun"),oi(Sv,"onTransitionStart"),oi(Mv,"onTransitionCancel"),oi(jd,"onTransitionEnd"),I("onMouseEnter",["mouseout","mouseover"]),I("onMouseLeave",["mouseout","mouseover"]),I("onPointerEnter",["pointerout","pointerover"]),I("onPointerLeave",["pointerout","pointerover"]),Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Di("onBeforeInput",["compositionend","keypress","textInput","paste"]),Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(so));function p_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var m=void 0;if(n)for(var w=s.length-1;0<=w;w--){var O=s[w],Q=O.instance,mt=O.currentTarget;if(O=O.listener,Q!==m&&c.isPropagationStopped())break t;m=O,c.currentTarget=mt;try{m(c)}catch(wt){vl(wt)}c.currentTarget=null,m=Q}else for(w=0;w<s.length;w++){if(O=s[w],Q=O.instance,mt=O.currentTarget,O=O.listener,Q!==m&&c.isPropagationStopped())break t;m=O,c.currentTarget=mt;try{m(c)}catch(wt){vl(wt)}c.currentTarget=null,m=Q}}}}function Se(e,n){var a=n[Xa];a===void 0&&(a=n[Xa]=new Set);var s=e+"__bubble";a.has(s)||(m_(n,e,2,!1),a.add(s))}function hf(e,n,a){var s=0;n&&(s|=4),m_(a,e,s,n)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function df(e){if(!e[Ll]){e[Ll]=!0,Ho.forEach(function(a){a!=="selectionchange"&&(ax.has(a)||hf(a,!1,e),hf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ll]||(n[Ll]=!0,hf("selectionchange",!1,n))}}function m_(e,n,a,s){switch(F_(n)){case 2:var c=Ux;break;case 8:c=Lx;break;default:c=wf}a=c.bind(null,n,a,e),c=void 0,!Ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function pf(e,n,a,s,c){var m=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var w=s.tag;if(w===3||w===4){var O=s.stateNode.containerInfo;if(O===c)break;if(w===4)for(w=s.return;w!==null;){var Q=w.tag;if((Q===3||Q===4)&&w.stateNode.containerInfo===c)return;w=w.return}for(;O!==null;){if(w=Ri(O),w===null)return;if(Q=w.tag,Q===5||Q===6||Q===26||Q===27){s=m=w;continue t}O=O.parentNode}}s=s.return}Md(function(){var mt=m,wt=Lu(a),Dt=[];t:{var gt=Kd.get(e);if(gt!==void 0){var xt=qo,ue=e;switch(e){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":xt=J0;break;case"focusin":ue="focus",xt=Bu;break;case"focusout":ue="blur",xt=Bu;break;case"beforeblur":case"afterblur":xt=Bu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xt=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xt=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xt=ev;break;case qd:case Yd:case Zd:xt=V0;break;case jd:xt=iv;break;case"scroll":case"scrollend":xt=B0;break;case"wheel":xt=rv;break;case"copy":case"cut":case"paste":xt=W0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xt=wd;break;case"toggle":case"beforetoggle":xt=ov}var ae=(n&4)!==0,Fe=!ae&&(e==="scroll"||e==="scrollend"),st=ae?gt!==null?gt+"Capture":null:gt;ae=[];for(var nt=mt,pt;nt!==null;){var Rt=nt;if(pt=Rt.stateNode,Rt=Rt.tag,Rt!==5&&Rt!==26&&Rt!==27||pt===null||st===null||(Rt=Ts(nt,st),Rt!=null&&ae.push(oo(nt,Rt,pt))),Fe)break;nt=nt.return}0<ae.length&&(gt=new xt(gt,ue,null,a,wt),Dt.push({event:gt,listeners:ae}))}}if((n&7)===0){t:{if(gt=e==="mouseover"||e==="pointerover",xt=e==="mouseout"||e==="pointerout",gt&&a!==Uu&&(ue=a.relatedTarget||a.fromElement)&&(Ri(ue)||ue[Ln]))break t;if((xt||gt)&&(gt=wt.window===wt?wt:(gt=wt.ownerDocument)?gt.defaultView||gt.parentWindow:window,xt?(ue=a.relatedTarget||a.toElement,xt=mt,ue=ue?Ri(ue):null,ue!==null&&(Fe=u(ue),ae=ue.tag,ue!==Fe||ae!==5&&ae!==27&&ae!==6)&&(ue=null)):(xt=null,ue=mt),xt!==ue)){if(ae=Td,Rt="onMouseLeave",st="onMouseEnter",nt="mouse",(e==="pointerout"||e==="pointerover")&&(ae=wd,Rt="onPointerLeave",st="onPointerEnter",nt="pointer"),Fe=xt==null?gt:qa(xt),pt=ue==null?gt:qa(ue),gt=new ae(Rt,nt+"leave",xt,a,wt),gt.target=Fe,gt.relatedTarget=pt,Rt=null,Ri(wt)===mt&&(ae=new ae(st,nt+"enter",ue,a,wt),ae.target=pt,ae.relatedTarget=Fe,Rt=ae),Fe=Rt,xt&&ue)e:{for(ae=xt,st=ue,nt=0,pt=ae;pt;pt=Kr(pt))nt++;for(pt=0,Rt=st;Rt;Rt=Kr(Rt))pt++;for(;0<nt-pt;)ae=Kr(ae),nt--;for(;0<pt-nt;)st=Kr(st),pt--;for(;nt--;){if(ae===st||st!==null&&ae===st.alternate)break e;ae=Kr(ae),st=Kr(st)}ae=null}else ae=null;xt!==null&&__(Dt,gt,xt,ae,!1),ue!==null&&Fe!==null&&__(Dt,Fe,ue,ae,!0)}}t:{if(gt=mt?qa(mt):window,xt=gt.nodeName&&gt.nodeName.toLowerCase(),xt==="select"||xt==="input"&&gt.type==="file")var Jt=Pd;else if(Nd(gt))if(zd)Jt=gv;else{Jt=mv;var xe=pv}else xt=gt.nodeName,!xt||xt.toLowerCase()!=="input"||gt.type!=="checkbox"&&gt.type!=="radio"?mt&&Du(mt.elementType)&&(Jt=Pd):Jt=_v;if(Jt&&(Jt=Jt(e,mt))){Od(Dt,Jt,a,wt);break t}xe&&xe(e,gt,mt),e==="focusout"&&mt&&gt.type==="number"&&mt.memoizedProps.value!=null&&bn(gt,"number",gt.value)}switch(xe=mt?qa(mt):window,e){case"focusin":(Nd(xe)||xe.contentEditable==="true")&&(Ar=xe,Xu=mt,Ns=null);break;case"focusout":Ns=Xu=Ar=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,Xd(Dt,a,wt);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":Xd(Dt,a,wt)}var ee;if(Hu)t:{switch(e){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else Tr?Ud(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Rd&&a.locale!=="ko"&&(Tr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Tr&&(ee=Ed()):(la=wt,Pu="value"in la?la.value:la.textContent,Tr=!0)),xe=Nl(mt,oe),0<xe.length&&(oe=new Ad(oe,e,null,a,wt),Dt.push({event:oe,listeners:xe}),ee?oe.data=ee:(ee=Ld(a),ee!==null&&(oe.data=ee)))),(ee=uv?cv(e,a):fv(e,a))&&(oe=Nl(mt,"onBeforeInput"),0<oe.length&&(xe=new Ad("onBeforeInput","beforeinput",null,a,wt),Dt.push({event:xe,listeners:oe}),xe.data=ee)),ex(Dt,e,mt,a,wt)}p_(Dt,n)})}function oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Nl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,m=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||m===null||(c=Ts(e,a),c!=null&&s.unshift(oo(e,c,m)),c=Ts(e,n),c!=null&&s.push(oo(e,c,m))),e.tag===3)return s;e=e.return}return[]}function Kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function __(e,n,a,s,c){for(var m=n._reactName,w=[];a!==null&&a!==s;){var O=a,Q=O.alternate,mt=O.stateNode;if(O=O.tag,Q!==null&&Q===s)break;O!==5&&O!==26&&O!==27||mt===null||(Q=mt,c?(mt=Ts(a,m),mt!=null&&w.unshift(oo(a,mt,Q))):c||(mt=Ts(a,m),mt!=null&&w.push(oo(a,mt,Q)))),a=a.return}w.length!==0&&e.push({event:n,listeners:w})}var rx=/\r\n?/g,sx=/\u0000|\uFFFD/g;function g_(e){return(typeof e=="string"?e:""+e).replace(rx,`
`).replace(sx,"")}function v_(e,n){return n=g_(n),g_(e)===n}function Ol(){}function Be(e,n,a,s,c,m){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||_i(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&_i(e,""+s);break;case"className":Ht(e,"class",s);break;case"tabIndex":Ht(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ht(e,a,s);break;case"style":yd(e,s,m);break;case"data":if(n!=="object"){Ht(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Go(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",c.name,c,null),Be(e,n,"formEncType",c.formEncType,c,null),Be(e,n,"formMethod",c.formMethod,c,null),Be(e,n,"formTarget",c.formTarget,c,null)):(Be(e,n,"encType",c.encType,c,null),Be(e,n,"method",c.method,c,null),Be(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Go(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ol);break;case"onScroll":s!=null&&Se("scroll",e);break;case"onScrollEnd":s!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Go(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Pt(e,"popover",s);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Pt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=z0.get(a)||a,Pt(e,a,s))}}function mf(e,n,a,s,c,m){switch(a){case"style":yd(e,s,m);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?_i(e,s):(typeof s=="number"||typeof s=="bigint")&&_i(e,""+s);break;case"onScroll":s!=null&&Se("scroll",e);break;case"onScrollEnd":s!=null&&Se("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ol);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ko.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),m=e[vn]||null,m=m!=null?m[a]:null,typeof m=="function"&&e.removeEventListener(n,m,c),typeof s=="function")){typeof m!="function"&&m!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Pt(e,a,s)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var s=!1,c=!1,m;for(m in a)if(a.hasOwnProperty(m)){var w=a[m];if(w!=null)switch(m){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,m,w,a,null)}}c&&Be(e,n,"srcSet",a.srcSet,a,null),s&&Be(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var O=m=w=c=null,Q=null,mt=null;for(s in a)if(a.hasOwnProperty(s)){var wt=a[s];if(wt!=null)switch(s){case"name":c=wt;break;case"type":w=wt;break;case"checked":Q=wt;break;case"defaultChecked":mt=wt;break;case"value":m=wt;break;case"defaultValue":O=wt;break;case"children":case"dangerouslySetInnerHTML":if(wt!=null)throw Error(r(137,n));break;default:Be(e,n,s,wt,a,null)}}Ge(e,m,O,Q,mt,w,c,!1),Ke(e);return;case"select":Se("invalid",e),s=w=m=null;for(c in a)if(a.hasOwnProperty(c)&&(O=a[c],O!=null))switch(c){case"value":m=O;break;case"defaultValue":w=O;break;case"multiple":s=O;default:Be(e,n,c,O,a,null)}n=m,a=w,e.multiple=!!s,n!=null?on(e,!!s,n,!1):a!=null&&on(e,!!s,a,!0);return;case"textarea":Se("invalid",e),m=c=s=null;for(w in a)if(a.hasOwnProperty(w)&&(O=a[w],O!=null))switch(w){case"value":s=O;break;case"defaultValue":c=O;break;case"children":m=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(91));break;default:Be(e,n,w,O,a,null)}xn(e,s,c,m),Ke(e);return;case"option":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Be(e,n,Q,s,a,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(s=0;s<so.length;s++)Se(so[s],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(mt in a)if(a.hasOwnProperty(mt)&&(s=a[mt],s!=null))switch(mt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,mt,s,a,null)}return;default:if(Du(n)){for(wt in a)a.hasOwnProperty(wt)&&(s=a[wt],s!==void 0&&mf(e,n,wt,s,a,void 0));return}}for(O in a)a.hasOwnProperty(O)&&(s=a[O],s!=null&&Be(e,n,O,s,a,null))}function ox(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,m=null,w=null,O=null,Q=null,mt=null,wt=null;for(xt in a){var Dt=a[xt];if(a.hasOwnProperty(xt)&&Dt!=null)switch(xt){case"checked":break;case"value":break;case"defaultValue":Q=Dt;default:s.hasOwnProperty(xt)||Be(e,n,xt,null,s,Dt)}}for(var gt in s){var xt=s[gt];if(Dt=a[gt],s.hasOwnProperty(gt)&&(xt!=null||Dt!=null))switch(gt){case"type":m=xt;break;case"name":c=xt;break;case"checked":mt=xt;break;case"defaultChecked":wt=xt;break;case"value":w=xt;break;case"defaultValue":O=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:xt!==Dt&&Be(e,n,gt,xt,s,Dt)}}Ui(e,w,O,Q,mt,wt,m,c);return;case"select":xt=w=O=gt=null;for(m in a)if(Q=a[m],a.hasOwnProperty(m)&&Q!=null)switch(m){case"value":break;case"multiple":xt=Q;default:s.hasOwnProperty(m)||Be(e,n,m,null,s,Q)}for(c in s)if(m=s[c],Q=a[c],s.hasOwnProperty(c)&&(m!=null||Q!=null))switch(c){case"value":gt=m;break;case"defaultValue":O=m;break;case"multiple":w=m;default:m!==Q&&Be(e,n,c,m,s,Q)}n=O,a=w,s=xt,gt!=null?on(e,!!a,gt,!1):!!s!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":xt=gt=null;for(O in a)if(c=a[O],a.hasOwnProperty(O)&&c!=null&&!s.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:Be(e,n,O,null,s,c)}for(w in s)if(c=s[w],m=a[w],s.hasOwnProperty(w)&&(c!=null||m!=null))switch(w){case"value":gt=c;break;case"defaultValue":xt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==m&&Be(e,n,w,c,s,m)}dn(e,gt,xt);return;case"option":for(var ue in a)if(gt=a[ue],a.hasOwnProperty(ue)&&gt!=null&&!s.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Be(e,n,ue,null,s,gt)}for(Q in s)if(gt=s[Q],xt=a[Q],s.hasOwnProperty(Q)&&gt!==xt&&(gt!=null||xt!=null))switch(Q){case"selected":e.selected=gt&&typeof gt!="function"&&typeof gt!="symbol";break;default:Be(e,n,Q,gt,s,xt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)gt=a[ae],a.hasOwnProperty(ae)&&gt!=null&&!s.hasOwnProperty(ae)&&Be(e,n,ae,null,s,gt);for(mt in s)if(gt=s[mt],xt=a[mt],s.hasOwnProperty(mt)&&gt!==xt&&(gt!=null||xt!=null))switch(mt){case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:Be(e,n,mt,gt,s,xt)}return;default:if(Du(n)){for(var Fe in a)gt=a[Fe],a.hasOwnProperty(Fe)&&gt!==void 0&&!s.hasOwnProperty(Fe)&&mf(e,n,Fe,void 0,s,gt);for(wt in s)gt=s[wt],xt=a[wt],!s.hasOwnProperty(wt)||gt===xt||gt===void 0&&xt===void 0||mf(e,n,wt,gt,s,xt);return}}for(var st in a)gt=a[st],a.hasOwnProperty(st)&&gt!=null&&!s.hasOwnProperty(st)&&Be(e,n,st,null,s,gt);for(Dt in s)gt=s[Dt],xt=a[Dt],!s.hasOwnProperty(Dt)||gt===xt||gt==null&&xt==null||Be(e,n,Dt,gt,s,xt)}var _f=null,gf=null;function Pl(e){return e.nodeType===9?e:e.ownerDocument}function x_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function vf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function lx(){var e=window.event;return e&&e.type==="popstate"?e===xf?!1:(xf=e,!0):(xf=null,!1)}var S_=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,M_=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof M_<"u"?function(e){return M_.resolve(null).then(e).catch(fx)}:S_;function fx(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function E_(e,n){var a=n,s=0,c=0;do{var m=a.nextSibling;if(e.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<s&&8>s){a=s;var w=e.ownerDocument;if(a&1&&lo(w.documentElement),a&2&&lo(w.body),a&4)for(a=w.head,lo(a),w=a.firstChild;w;){var O=w.nextSibling,Q=w.nodeName;w[aa]||Q==="SCRIPT"||Q==="STYLE"||Q==="LINK"&&w.rel.toLowerCase()==="stylesheet"||a.removeChild(w),w=O}}if(c===0){e.removeChild(m),go(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=m}while(a);go(n)}function yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yf(a),ra(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[aa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var m=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function dx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Sf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function px(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Mf=null;function b_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function T_(e,n,a){switch(n=Pl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ra(e)}var ii=new Map,A_=new Set;function zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=q.d;q.d={f:mx,r:_x,D:gx,C:vx,L:xx,m:yx,X:Mx,S:Sx,M:Ex};function mx(){var e=qi.f(),n=wl();return e||n}function _x(e){var n=Ci(e);n!==null&&n.tag===5&&n.type==="form"?qp(n):qi.r(e)}var Qr=typeof document>"u"?null:document;function w_(e,n,a){var s=Qr;if(s&&typeof n=="string"&&n){var c=We(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),A_.has(c)||(A_.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",e),en(n),s.head.appendChild(n)))}}function gx(e){qi.D(e),w_("dns-prefetch",e,null)}function vx(e,n){qi.C(e,n),w_("preconnect",e,n)}function xx(e,n,a){qi.L(e,n,a);var s=Qr;if(s&&e&&n){var c='link[rel="preload"][as="'+We(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+We(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+We(a.imageSizes)+'"]')):c+='[href="'+We(e)+'"]';var m=c;switch(n){case"style":m=Jr(e);break;case"script":m=$r(e)}ii.has(m)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ii.set(m,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(uo(m))||n==="script"&&s.querySelector(co(m))||(n=s.createElement("link"),Mn(n,"link",e),en(n),s.head.appendChild(n)))}}function yx(e,n){qi.m(e,n);var a=Qr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+We(s)+'"][href="'+We(e)+'"]',m=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=$r(e)}if(!ii.has(m)&&(e=g({rel:"modulepreload",href:e},n),ii.set(m,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(m)))return}s=a.createElement("link"),Mn(s,"link",e),en(s),a.head.appendChild(s)}}}function Sx(e,n,a){qi.S(e,n,a);var s=Qr;if(s&&e){var c=sa(s).hoistableStyles,m=Jr(e);n=n||"default";var w=c.get(m);if(!w){var O={loading:0,preload:null};if(w=s.querySelector(uo(m)))O.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ii.get(m))&&Ef(e,a);var Q=w=s.createElement("link");en(Q),Mn(Q,"link",e),Q._p=new Promise(function(mt,wt){Q.onload=mt,Q.onerror=wt}),Q.addEventListener("load",function(){O.loading|=1}),Q.addEventListener("error",function(){O.loading|=2}),O.loading|=4,Il(w,n,s)}w={type:"stylesheet",instance:w,count:1,state:O},c.set(m,w)}}}function Mx(e,n){qi.X(e,n);var a=Qr;if(a&&e){var s=sa(a).hoistableScripts,c=$r(e),m=s.get(c);m||(m=a.querySelector(co(c)),m||(e=g({src:e,async:!0},n),(n=ii.get(c))&&bf(e,n),m=a.createElement("script"),en(m),Mn(m,"link",e),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},s.set(c,m))}}function Ex(e,n){qi.M(e,n);var a=Qr;if(a&&e){var s=sa(a).hoistableScripts,c=$r(e),m=s.get(c);m||(m=a.querySelector(co(c)),m||(e=g({src:e,async:!0,type:"module"},n),(n=ii.get(c))&&bf(e,n),m=a.createElement("script"),en(m),Mn(m,"link",e),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},s.set(c,m))}}function R_(e,n,a,s){var c=(c=At.current)?zl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=sa(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Jr(a.href);var m=sa(c).hoistableStyles,w=m.get(e);if(w||(c=c.ownerDocument||c,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,w),(m=c.querySelector(uo(e)))&&!m._p&&(w.instance=m,w.state.loading=5),ii.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(e,a),m||bx(c,e,a,w.state))),n&&s===null)throw Error(r(528,""));return w}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=sa(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Jr(e){return'href="'+We(e)+'"'}function uo(e){return'link[rel="stylesheet"]['+e+"]"}function C_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function bx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),en(n),e.head.appendChild(n))}function $r(e){return'[src="'+We(e)+'"]'}function co(e){return"script[async]"+e}function D_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+We(a.href)+'"]');if(s)return n.instance=s,en(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),en(s),Mn(s,"style",c),Il(s,a.precedence,e),n.instance=s;case"stylesheet":c=Jr(a.href);var m=e.querySelector(uo(c));if(m)return n.state.loading|=4,n.instance=m,en(m),m;s=C_(a),(c=ii.get(c))&&Ef(s,c),m=(e.ownerDocument||e).createElement("link"),en(m);var w=m;return w._p=new Promise(function(O,Q){w.onload=O,w.onerror=Q}),Mn(m,"link",s),n.state.loading|=4,Il(m,a.precedence,e),n.instance=m;case"script":return m=$r(a.src),(c=e.querySelector(co(m)))?(n.instance=c,en(c),c):(s=a,(c=ii.get(m))&&(s=g({},a),bf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),en(c),Mn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Il(s,a.precedence,e));return n.instance}function Il(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,m=c,w=0;w<s.length;w++){var O=s[w];if(O.dataset.precedence===n)m=O;else if(m!==c)break}m?m.parentNode.insertBefore(e,m.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ef(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Bl=null;function U_(e,n,a){if(Bl===null){var s=new Map,c=Bl=new Map;c.set(a,s)}else c=Bl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var m=a[c];if(!(m[aa]||m[sn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var w=m.getAttribute(n)||"";w=e+w;var O=s.get(w);O?O.push(m):s.set(w,[m])}}return s}function L_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Tx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function N_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var fo=null;function Ax(){}function wx(e,n,a){if(fo===null)throw Error(r(475));var s=fo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Jr(a.href),m=e.querySelector(uo(c));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Fl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=m,en(m);return}m=e.ownerDocument||e,a=C_(a),(c=ii.get(c))&&Ef(a,c),m=m.createElement("link"),en(m);var w=m;w._p=new Promise(function(O,Q){w.onload=O,w.onerror=Q}),Mn(m,"link",a),n.instance=m}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Fl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Rx(){if(fo===null)throw Error(r(475));var e=fo;return e.stylesheets&&e.count===0&&Tf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Tf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Fl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hl=null;function Tf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hl=new Map,n.forEach(Cx,e),Hl=null,Fl.call(e))}function Cx(e,n){if(!(n.state.loading&4)){var a=Hl.get(e);if(a)var s=a.get(null);else{a=new Map,Hl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<c.length;m++){var w=c[m];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(a.set(w.dataset.precedence,w),s=w)}s&&a.set(null,s)}c=n.instance,w=c.getAttribute("data-precedence"),m=a.get(w)||s,m===s&&a.set(null,c),a.set(w,c),this.count++,s=Fl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),m?m.parentNode.insertBefore(c,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var ho={$$typeof:R,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function Dx(e,n,a,s,c,m,w,O){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lt(0),this.hiddenUpdates=Lt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=m,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function O_(e,n,a,s,c,m,w,O,Q,mt,wt,Dt){return e=new Dx(e,n,a,w,O,Q,mt,Dt),n=1,m===!0&&(n|=24),m=Gn(3,null,null,n),e.current=m,m.stateNode=e,n=rc(),n.refCount++,e.pooledCache=n,n.refCount++,m.memoizedState={element:s,isDehydrated:a,cache:n},uc(m),e}function P_(e){return e?(e=Dr,e):Dr}function z_(e,n,a,s,c,m){c=P_(c),s.context===null?s.context=c:s.pendingContext=c,s=fa(n),s.payload={element:a},m=m===void 0?null:m,m!==null&&(s.callback=m),a=ha(e,s,n),a!==null&&(Yn(a,e,n),Gs(a,e,n))}function I_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Af(e,n){I_(e,n),(e=e.alternate)&&I_(e,n)}function B_(e){if(e.tag===13){var n=Cr(e,67108864);n!==null&&Yn(n,e,67108864),Af(e,67108864)}}var kl=!0;function Ux(e,n,a,s){var c=X.T;X.T=null;var m=q.p;try{q.p=2,wf(e,n,a,s)}finally{q.p=m,X.T=c}}function Lx(e,n,a,s){var c=X.T;X.T=null;var m=q.p;try{q.p=8,wf(e,n,a,s)}finally{q.p=m,X.T=c}}function wf(e,n,a,s){if(kl){var c=Rf(s);if(c===null)pf(e,n,s,Gl,a),H_(e,s);else if(Ox(c,e,n,a,s))s.stopPropagation();else if(H_(e,s),n&4&&-1<Nx.indexOf(e)){for(;c!==null;){var m=Ci(c);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var w=$t(m.pendingLanes);if(w!==0){var O=m;for(O.pendingLanes|=2,O.entangledLanes|=2;w;){var Q=1<<31-It(w);O.entanglements[1]|=Q,w&=~Q}Si(m),(Pe&6)===0&&(Tl=V()+500,ro(0))}}break;case 13:O=Cr(m,2),O!==null&&Yn(O,m,2),wl(),Af(m,2)}if(m=Rf(s),m===null&&pf(e,n,s,Gl,a),m===c)break;c=m}c!==null&&s.stopPropagation()}else pf(e,n,s,null,a)}}function Rf(e){return e=Lu(e),Cf(e)}var Gl=null;function Cf(e){if(Gl=null,e=Ri(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Gl=e,null}function F_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(F()){case et:return 2;case _t:return 8;case yt:case lt:return 32;case P:return 268435456;default:return 32}default:return 32}}var Df=!1,Ta=null,Aa=null,wa=null,po=new Map,mo=new Map,Ra=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H_(e,n){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(n.pointerId)}}function _o(e,n,a,s,c,m){return e===null||e.nativeEvent!==m?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:m,targetContainers:[c]},n!==null&&(n=Ci(n),n!==null&&B_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Ox(e,n,a,s,c){switch(n){case"focusin":return Ta=_o(Ta,e,n,a,s,c),!0;case"dragenter":return Aa=_o(Aa,e,n,a,s,c),!0;case"mouseover":return wa=_o(wa,e,n,a,s,c),!0;case"pointerover":var m=c.pointerId;return po.set(m,_o(po.get(m)||null,e,n,a,s,c)),!0;case"gotpointercapture":return m=c.pointerId,mo.set(m,_o(mo.get(m)||null,e,n,a,s,c)),!0}return!1}function k_(e){var n=Ri(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Hn(e.priority,function(){if(a.tag===13){var s=qn();s=fe(s);var c=Cr(a,s);c!==null&&Yn(c,a,s),Af(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Rf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Uu=s,a.target.dispatchEvent(s),Uu=null}else return n=Ci(a),n!==null&&B_(n),e.blockedOn=a,!1;n.shift()}return!0}function G_(e,n,a){Vl(e)&&a.delete(n)}function Px(){Df=!1,Ta!==null&&Vl(Ta)&&(Ta=null),Aa!==null&&Vl(Aa)&&(Aa=null),wa!==null&&Vl(wa)&&(wa=null),po.forEach(G_),mo.forEach(G_)}function Xl(e,n){e.blockedOn===n&&(e.blockedOn=null,Df||(Df=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Px)))}var Wl=null;function V_(e){Wl!==e&&(Wl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wl===e&&(Wl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Cf(s||a)===null)continue;break}var m=Ci(a);m!==null&&(e.splice(n,3),n-=3,Rc(m,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function go(e){function n(Q){return Xl(Q,e)}Ta!==null&&Xl(Ta,e),Aa!==null&&Xl(Aa,e),wa!==null&&Xl(wa,e),po.forEach(n),mo.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)k_(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],m=a[s+1],w=c[vn]||null;if(typeof m=="function")w||V_(a);else if(w){var O=null;if(m&&m.hasAttribute("formAction")){if(c=m,w=m[vn]||null)O=w.formAction;else if(Cf(c)!==null)continue}else O=w.action;typeof O=="function"?a[s+1]=O:(a.splice(s,3),s-=3),V_(a)}}}function Uf(e){this._internalRoot=e}ql.prototype.render=Uf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=qn();z_(a,s,e,n,null,null)},ql.prototype.unmount=Uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;z_(e.current,2,null,e,null,null),wl(),n[Ln]=null}};function ql(e){this._internalRoot=e}ql.prototype.unstable_scheduleHydration=function(e){if(e){var n=we();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&k_(e)}};var X_=t.version;if(X_!=="19.1.0")throw Error(r(527,X_,"19.1.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=d(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var zx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{ct=Yl.inject(zx),Mt=Yl}catch{}}return xo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=sm,m=om,w=lm,O=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(O=n.unstable_transitionCallbacks)),n=O_(e,1,!1,null,null,a,s,c,m,w,O,null),e[Ln]=n.current,df(e),new Uf(n)},xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",m=sm,w=om,O=lm,Q=null,mt=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(w=a.onCaughtError),a.onRecoverableError!==void 0&&(O=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(Q=a.unstable_transitionCallbacks),a.formState!==void 0&&(mt=a.formState)),n=O_(e,1,!0,n,a??null,s,c,m,w,O,Q,mt),n.context=P_(null),a=n.current,s=qn(),s=fe(s),c=fa(s),c.callback=null,ha(a,c,s),a=s,n.current.lanes=a,Gt(n,a),Si(n),e[Ln]=n.current,df(e),new ql(n)},xo.version="19.1.0",xo}var tg;function Zx(){if(tg)return Nf.exports;tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Nf.exports=Yx(),Nf.exports}var jx=Zx();const Kx=r0(jx);var Ia=rd(),gu={exports:{}},Qx=gu.exports,eg;function Jx(){return eg||(eg=1,function(o,t){(function(i,r){r()})(Qx,function(){function i(p,g){return typeof g>"u"?g={autoBom:!1}:typeof g!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),g={autoBom:!g}),g.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type)?new Blob(["\uFEFF",p],{type:p.type}):p}function r(p,g,x){var y=new XMLHttpRequest;y.open("GET",p),y.responseType="blob",y.onload=function(){d(y.response,g,x)},y.onerror=function(){console.error("could not download file")},y.send()}function l(p){var g=new XMLHttpRequest;g.open("HEAD",p,!1);try{g.send()}catch{}return 200<=g.status&&299>=g.status}function u(p){try{p.dispatchEvent(new MouseEvent("click"))}catch{var g=document.createEvent("MouseEvents");g.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),p.dispatchEvent(g)}}var h=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Fa=="object"&&Fa.global===Fa?Fa:void 0,f=h.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=h.saveAs||(typeof window!="object"||window!==h?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(p,g,x){var y=h.URL||h.webkitURL,v=document.createElement("a");g=g||p.name||"download",v.download=g,v.rel="noopener",typeof p=="string"?(v.href=p,v.origin===location.origin?u(v):l(v.href)?r(p,g,x):u(v,v.target="_blank")):(v.href=y.createObjectURL(p),setTimeout(function(){y.revokeObjectURL(v.href)},4e4),setTimeout(function(){u(v)},0))}:"msSaveOrOpenBlob"in navigator?function(p,g,x){if(g=g||p.name||"download",typeof p!="string")navigator.msSaveOrOpenBlob(i(p,x),g);else if(l(p))r(p,g,x);else{var y=document.createElement("a");y.href=p,y.target="_blank",setTimeout(function(){u(y)})}}:function(p,g,x,y){if(y=y||open("","_blank"),y&&(y.document.title=y.document.body.innerText="downloading..."),typeof p=="string")return r(p,g,x);var v=p.type==="application/octet-stream",b=/constructor/i.test(h.HTMLElement)||h.safari,E=/CriOS\/[\d]+/.test(navigator.userAgent);if((E||v&&b||f)&&typeof FileReader<"u"){var S=new FileReader;S.onloadend=function(){var R=S.result;R=E?R:R.replace(/^data:[^;]*;/,"data:attachment/file;"),y?y.location.href=R:location=R,y=null},S.readAsDataURL(p)}else{var _=h.URL||h.webkitURL,A=_.createObjectURL(p);y?y.location=A:location.href=A,y=null,setTimeout(function(){_.revokeObjectURL(A)},4e4)}});h.saveAs=d.saveAs=d,o.exports=d})}(gu)),gu.exports}var $x=Jx();function Zl(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Bf={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var ng;function ty(){return ng||(ng=1,function(o,t){(function(i){o.exports=i()})(function(){return function i(r,l,u){function h(p,g){if(!l[p]){if(!r[p]){var x=typeof Zl=="function"&&Zl;if(!g&&x)return x(p,!0);if(f)return f(p,!0);var y=new Error("Cannot find module '"+p+"'");throw y.code="MODULE_NOT_FOUND",y}var v=l[p]={exports:{}};r[p][0].call(v.exports,function(b){var E=r[p][1][b];return h(E||b)},v,v.exports,i,r,l,u)}return l[p].exports}for(var f=typeof Zl=="function"&&Zl,d=0;d<u.length;d++)h(u[d]);return h}({1:[function(i,r,l){var u=i("./utils"),h=i("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";l.encode=function(d){for(var p,g,x,y,v,b,E,S=[],_=0,A=d.length,R=A,C=u.getTypeOf(d)!=="string";_<d.length;)R=A-_,x=C?(p=d[_++],g=_<A?d[_++]:0,_<A?d[_++]:0):(p=d.charCodeAt(_++),g=_<A?d.charCodeAt(_++):0,_<A?d.charCodeAt(_++):0),y=p>>2,v=(3&p)<<4|g>>4,b=1<R?(15&g)<<2|x>>6:64,E=2<R?63&x:64,S.push(f.charAt(y)+f.charAt(v)+f.charAt(b)+f.charAt(E));return S.join("")},l.decode=function(d){var p,g,x,y,v,b,E=0,S=0,_="data:";if(d.substr(0,_.length)===_)throw new Error("Invalid base64 input, it looks like a data url.");var A,R=3*(d=d.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(d.charAt(d.length-1)===f.charAt(64)&&R--,d.charAt(d.length-2)===f.charAt(64)&&R--,R%1!=0)throw new Error("Invalid base64 input, bad content length.");for(A=h.uint8array?new Uint8Array(0|R):new Array(0|R);E<d.length;)p=f.indexOf(d.charAt(E++))<<2|(y=f.indexOf(d.charAt(E++)))>>4,g=(15&y)<<4|(v=f.indexOf(d.charAt(E++)))>>2,x=(3&v)<<6|(b=f.indexOf(d.charAt(E++))),A[S++]=p,v!==64&&(A[S++]=g),b!==64&&(A[S++]=x);return A}},{"./support":30,"./utils":32}],2:[function(i,r,l){var u=i("./external"),h=i("./stream/DataWorker"),f=i("./stream/Crc32Probe"),d=i("./stream/DataLengthProbe");function p(g,x,y,v,b){this.compressedSize=g,this.uncompressedSize=x,this.crc32=y,this.compression=v,this.compressedContent=b}p.prototype={getContentWorker:function(){var g=new h(u.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")),x=this;return g.on("end",function(){if(this.streamInfo.data_length!==x.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),g},getCompressedWorker:function(){return new h(u.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},p.createWorkerFrom=function(g,x,y){return g.pipe(new f).pipe(new d("uncompressedSize")).pipe(x.compressWorker(y)).pipe(new d("compressedSize")).withStreamInfo("compression",x)},r.exports=p},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,r,l){var u=i("./stream/GenericWorker");l.STORE={magic:"\0\0",compressWorker:function(){return new u("STORE compression")},uncompressWorker:function(){return new u("STORE decompression")}},l.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,r,l){var u=i("./utils"),h=function(){for(var f,d=[],p=0;p<256;p++){f=p;for(var g=0;g<8;g++)f=1&f?3988292384^f>>>1:f>>>1;d[p]=f}return d}();r.exports=function(f,d){return f!==void 0&&f.length?u.getTypeOf(f)!=="string"?function(p,g,x,y){var v=h,b=y+x;p^=-1;for(var E=y;E<b;E++)p=p>>>8^v[255&(p^g[E])];return-1^p}(0|d,f,f.length,0):function(p,g,x,y){var v=h,b=y+x;p^=-1;for(var E=y;E<b;E++)p=p>>>8^v[255&(p^g.charCodeAt(E))];return-1^p}(0|d,f,f.length,0):0}},{"./utils":32}],5:[function(i,r,l){l.base64=!1,l.binary=!1,l.dir=!1,l.createFolders=!0,l.date=null,l.compression=null,l.compressionOptions=null,l.comment=null,l.unixPermissions=null,l.dosPermissions=null},{}],6:[function(i,r,l){var u=null;u=typeof Promise<"u"?Promise:i("lie"),r.exports={Promise:u}},{lie:37}],7:[function(i,r,l){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",h=i("pako"),f=i("./utils"),d=i("./stream/GenericWorker"),p=u?"uint8array":"array";function g(x,y){d.call(this,"FlateWorker/"+x),this._pako=null,this._pakoAction=x,this._pakoOptions=y,this.meta={}}l.magic="\b\0",f.inherits(g,d),g.prototype.processChunk=function(x){this.meta=x.meta,this._pako===null&&this._createPako(),this._pako.push(f.transformTo(p,x.data),!1)},g.prototype.flush=function(){d.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},g.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this._pako=null},g.prototype._createPako=function(){this._pako=new h[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var x=this;this._pako.onData=function(y){x.push({data:y,meta:x.meta})}},l.compressWorker=function(x){return new g("Deflate",x)},l.uncompressWorker=function(){return new g("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,r,l){function u(v,b){var E,S="";for(E=0;E<b;E++)S+=String.fromCharCode(255&v),v>>>=8;return S}function h(v,b,E,S,_,A){var R,C,N=v.file,k=v.compression,B=A!==p.utf8encode,W=f.transformTo("string",A(N.name)),U=f.transformTo("string",p.utf8encode(N.name)),L=N.comment,j=f.transformTo("string",A(L)),z=f.transformTo("string",p.utf8encode(L)),Y=U.length!==N.name.length,T=z.length!==L.length,$="",X="",q="",tt=N.dir,rt=N.date,H={crc32:0,compressedSize:0,uncompressedSize:0};b&&!E||(H.crc32=v.crc32,H.compressedSize=v.compressedSize,H.uncompressedSize=v.uncompressedSize);var G=0;b&&(G|=8),B||!Y&&!T||(G|=2048);var Z=0,vt=0;tt&&(Z|=16),_==="UNIX"?(vt=798,Z|=function(at,At){var Nt=at;return at||(Nt=At?16893:33204),(65535&Nt)<<16}(N.unixPermissions,tt)):(vt=20,Z|=function(at){return 63&(at||0)}(N.dosPermissions)),R=rt.getUTCHours(),R<<=6,R|=rt.getUTCMinutes(),R<<=5,R|=rt.getUTCSeconds()/2,C=rt.getUTCFullYear()-1980,C<<=4,C|=rt.getUTCMonth()+1,C<<=5,C|=rt.getUTCDate(),Y&&(X=u(1,1)+u(g(W),4)+U,$+="up"+u(X.length,2)+X),T&&(q=u(1,1)+u(g(j),4)+z,$+="uc"+u(q.length,2)+q);var J="";return J+=`
\0`,J+=u(G,2),J+=k.magic,J+=u(R,2),J+=u(C,2),J+=u(H.crc32,4),J+=u(H.compressedSize,4),J+=u(H.uncompressedSize,4),J+=u(W.length,2),J+=u($.length,2),{fileRecord:x.LOCAL_FILE_HEADER+J+W+$,dirRecord:x.CENTRAL_FILE_HEADER+u(vt,2)+J+u(j.length,2)+"\0\0\0\0"+u(Z,4)+u(S,4)+W+$+j}}var f=i("../utils"),d=i("../stream/GenericWorker"),p=i("../utf8"),g=i("../crc32"),x=i("../signature");function y(v,b,E,S){d.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=E,this.encodeFileName=S,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}f.inherits(y,d),y.prototype.push=function(v){var b=v.meta.percent||0,E=this.entriesCount,S=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,d.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:E?(b+100*(E-S-1))/E:100}}))},y.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var b=this.streamFiles&&!v.file.dir;if(b){var E=h(v,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:E.fileRecord,meta:{percent:0}})}else this.accumulate=!0},y.prototype.closedSource=function(v){this.accumulate=!1;var b=this.streamFiles&&!v.file.dir,E=h(v,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(E.dirRecord),b)this.push({data:function(S){return x.DATA_DESCRIPTOR+u(S.crc32,4)+u(S.compressedSize,4)+u(S.uncompressedSize,4)}(v),meta:{percent:100}});else for(this.push({data:E.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},y.prototype.flush=function(){for(var v=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var E=this.bytesWritten-v,S=function(_,A,R,C,N){var k=f.transformTo("string",N(C));return x.CENTRAL_DIRECTORY_END+"\0\0\0\0"+u(_,2)+u(_,2)+u(A,4)+u(R,4)+u(k.length,2)+k}(this.dirRecords.length,E,v,this.zipComment,this.encodeFileName);this.push({data:S,meta:{percent:100}})},y.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},y.prototype.registerPrevious=function(v){this._sources.push(v);var b=this;return v.on("data",function(E){b.processChunk(E)}),v.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),v.on("error",function(E){b.error(E)}),this},y.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},y.prototype.error=function(v){var b=this._sources;if(!d.prototype.error.call(this,v))return!1;for(var E=0;E<b.length;E++)try{b[E].error(v)}catch{}return!0},y.prototype.lock=function(){d.prototype.lock.call(this);for(var v=this._sources,b=0;b<v.length;b++)v[b].lock()},r.exports=y},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,r,l){var u=i("../compressions"),h=i("./ZipFileWorker");l.generateWorker=function(f,d,p){var g=new h(d.streamFiles,p,d.platform,d.encodeFileName),x=0;try{f.forEach(function(y,v){x++;var b=function(A,R){var C=A||R,N=u[C];if(!N)throw new Error(C+" is not a valid compression method !");return N}(v.options.compression,d.compression),E=v.options.compressionOptions||d.compressionOptions||{},S=v.dir,_=v.date;v._compressWorker(b,E).withStreamInfo("file",{name:y,dir:S,date:_,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(g)}),g.entriesCount=x}catch(y){g.error(y)}return g}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,r,l){function u(){if(!(this instanceof u))return new u;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var h=new u;for(var f in this)typeof this[f]!="function"&&(h[f]=this[f]);return h}}(u.prototype=i("./object")).loadAsync=i("./load"),u.support=i("./support"),u.defaults=i("./defaults"),u.version="3.10.1",u.loadAsync=function(h,f){return new u().loadAsync(h,f)},u.external=i("./external"),r.exports=u},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,r,l){var u=i("./utils"),h=i("./external"),f=i("./utf8"),d=i("./zipEntries"),p=i("./stream/Crc32Probe"),g=i("./nodejsUtils");function x(y){return new h.Promise(function(v,b){var E=y.decompressed.getContentWorker().pipe(new p);E.on("error",function(S){b(S)}).on("end",function(){E.streamInfo.crc32!==y.decompressed.crc32?b(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}r.exports=function(y,v){var b=this;return v=u.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:f.utf8decode}),g.isNode&&g.isStream(y)?h.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",y,!0,v.optimizedBinaryString,v.base64).then(function(E){var S=new d(v);return S.load(E),S}).then(function(E){var S=[h.Promise.resolve(E)],_=E.files;if(v.checkCRC32)for(var A=0;A<_.length;A++)S.push(x(_[A]));return h.Promise.all(S)}).then(function(E){for(var S=E.shift(),_=S.files,A=0;A<_.length;A++){var R=_[A],C=R.fileNameStr,N=u.resolve(R.fileNameStr);b.file(N,R.decompressed,{binary:!0,optimizedBinaryString:!0,date:R.date,dir:R.dir,comment:R.fileCommentStr.length?R.fileCommentStr:null,unixPermissions:R.unixPermissions,dosPermissions:R.dosPermissions,createFolders:v.createFolders}),R.dir||(b.file(N).unsafeOriginalName=C)}return S.zipComment.length&&(b.comment=S.zipComment),b})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,r,l){var u=i("../utils"),h=i("../stream/GenericWorker");function f(d,p){h.call(this,"Nodejs stream input adapter for "+d),this._upstreamEnded=!1,this._bindStream(p)}u.inherits(f,h),f.prototype._bindStream=function(d){var p=this;(this._stream=d).pause(),d.on("data",function(g){p.push({data:g,meta:{percent:0}})}).on("error",function(g){p.isPaused?this.generatedError=g:p.error(g)}).on("end",function(){p.isPaused?p._upstreamEnded=!0:p.end()})},f.prototype.pause=function(){return!!h.prototype.pause.call(this)&&(this._stream.pause(),!0)},f.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=f},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,r,l){var u=i("readable-stream").Readable;function h(f,d,p){u.call(this,d),this._helper=f;var g=this;f.on("data",function(x,y){g.push(x)||g._helper.pause(),p&&p(y)}).on("error",function(x){g.emit("error",x)}).on("end",function(){g.push(null)})}i("../utils").inherits(h,u),h.prototype._read=function(){this._helper.resume()},r.exports=h},{"../utils":32,"readable-stream":16}],14:[function(i,r,l){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(u,h){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(u,h);if(typeof u=="number")throw new Error('The "data" argument must not be a number');return new Buffer(u,h)},allocBuffer:function(u){if(Buffer.alloc)return Buffer.alloc(u);var h=new Buffer(u);return h.fill(0),h},isBuffer:function(u){return Buffer.isBuffer(u)},isStream:function(u){return u&&typeof u.on=="function"&&typeof u.pause=="function"&&typeof u.resume=="function"}}},{}],15:[function(i,r,l){function u(N,k,B){var W,U=f.getTypeOf(k),L=f.extend(B||{},g);L.date=L.date||new Date,L.compression!==null&&(L.compression=L.compression.toUpperCase()),typeof L.unixPermissions=="string"&&(L.unixPermissions=parseInt(L.unixPermissions,8)),L.unixPermissions&&16384&L.unixPermissions&&(L.dir=!0),L.dosPermissions&&16&L.dosPermissions&&(L.dir=!0),L.dir&&(N=_(N)),L.createFolders&&(W=S(N))&&A.call(this,W,!0);var j=U==="string"&&L.binary===!1&&L.base64===!1;B&&B.binary!==void 0||(L.binary=!j),(k instanceof x&&k.uncompressedSize===0||L.dir||!k||k.length===0)&&(L.base64=!1,L.binary=!0,k="",L.compression="STORE",U="string");var z=null;z=k instanceof x||k instanceof d?k:b.isNode&&b.isStream(k)?new E(N,k):f.prepareContent(N,k,L.binary,L.optimizedBinaryString,L.base64);var Y=new y(N,z,L);this.files[N]=Y}var h=i("./utf8"),f=i("./utils"),d=i("./stream/GenericWorker"),p=i("./stream/StreamHelper"),g=i("./defaults"),x=i("./compressedObject"),y=i("./zipObject"),v=i("./generate"),b=i("./nodejsUtils"),E=i("./nodejs/NodejsStreamInputAdapter"),S=function(N){N.slice(-1)==="/"&&(N=N.substring(0,N.length-1));var k=N.lastIndexOf("/");return 0<k?N.substring(0,k):""},_=function(N){return N.slice(-1)!=="/"&&(N+="/"),N},A=function(N,k){return k=k!==void 0?k:g.createFolders,N=_(N),this.files[N]||u.call(this,N,null,{dir:!0,createFolders:k}),this.files[N]};function R(N){return Object.prototype.toString.call(N)==="[object RegExp]"}var C={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(N){var k,B,W;for(k in this.files)W=this.files[k],(B=k.slice(this.root.length,k.length))&&k.slice(0,this.root.length)===this.root&&N(B,W)},filter:function(N){var k=[];return this.forEach(function(B,W){N(B,W)&&k.push(W)}),k},file:function(N,k,B){if(arguments.length!==1)return N=this.root+N,u.call(this,N,k,B),this;if(R(N)){var W=N;return this.filter(function(L,j){return!j.dir&&W.test(L)})}var U=this.files[this.root+N];return U&&!U.dir?U:null},folder:function(N){if(!N)return this;if(R(N))return this.filter(function(U,L){return L.dir&&N.test(U)});var k=this.root+N,B=A.call(this,k),W=this.clone();return W.root=B.name,W},remove:function(N){N=this.root+N;var k=this.files[N];if(k||(N.slice(-1)!=="/"&&(N+="/"),k=this.files[N]),k&&!k.dir)delete this.files[N];else for(var B=this.filter(function(U,L){return L.name.slice(0,N.length)===N}),W=0;W<B.length;W++)delete this.files[B[W].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(N){var k,B={};try{if((B=f.extend(N||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:h.utf8encode})).type=B.type.toLowerCase(),B.compression=B.compression.toUpperCase(),B.type==="binarystring"&&(B.type="string"),!B.type)throw new Error("No output type specified.");f.checkSupport(B.type),B.platform!=="darwin"&&B.platform!=="freebsd"&&B.platform!=="linux"&&B.platform!=="sunos"||(B.platform="UNIX"),B.platform==="win32"&&(B.platform="DOS");var W=B.comment||this.comment||"";k=v.generateWorker(this,B,W)}catch(U){(k=new d("error")).error(U)}return new p(k,B.type||"string",B.mimeType)},generateAsync:function(N,k){return this.generateInternalStream(N).accumulate(k)},generateNodeStream:function(N,k){return(N=N||{}).type||(N.type="nodebuffer"),this.generateInternalStream(N).toNodejsStream(k)}};r.exports=C},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,r,l){r.exports=i("stream")},{stream:void 0}],17:[function(i,r,l){var u=i("./DataReader");function h(f){u.call(this,f);for(var d=0;d<this.data.length;d++)f[d]=255&f[d]}i("../utils").inherits(h,u),h.prototype.byteAt=function(f){return this.data[this.zero+f]},h.prototype.lastIndexOfSignature=function(f){for(var d=f.charCodeAt(0),p=f.charCodeAt(1),g=f.charCodeAt(2),x=f.charCodeAt(3),y=this.length-4;0<=y;--y)if(this.data[y]===d&&this.data[y+1]===p&&this.data[y+2]===g&&this.data[y+3]===x)return y-this.zero;return-1},h.prototype.readAndCheckSignature=function(f){var d=f.charCodeAt(0),p=f.charCodeAt(1),g=f.charCodeAt(2),x=f.charCodeAt(3),y=this.readData(4);return d===y[0]&&p===y[1]&&g===y[2]&&x===y[3]},h.prototype.readData=function(f){if(this.checkOffset(f),f===0)return[];var d=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},r.exports=h},{"../utils":32,"./DataReader":18}],18:[function(i,r,l){var u=i("../utils");function h(f){this.data=f,this.length=f.length,this.index=0,this.zero=0}h.prototype={checkOffset:function(f){this.checkIndex(this.index+f)},checkIndex:function(f){if(this.length<this.zero+f||f<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+f+"). Corrupted zip ?")},setIndex:function(f){this.checkIndex(f),this.index=f},skip:function(f){this.setIndex(this.index+f)},byteAt:function(){},readInt:function(f){var d,p=0;for(this.checkOffset(f),d=this.index+f-1;d>=this.index;d--)p=(p<<8)+this.byteAt(d);return this.index+=f,p},readString:function(f){return u.transformTo("string",this.readData(f))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var f=this.readInt(4);return new Date(Date.UTC(1980+(f>>25&127),(f>>21&15)-1,f>>16&31,f>>11&31,f>>5&63,(31&f)<<1))}},r.exports=h},{"../utils":32}],19:[function(i,r,l){var u=i("./Uint8ArrayReader");function h(f){u.call(this,f)}i("../utils").inherits(h,u),h.prototype.readData=function(f){this.checkOffset(f);var d=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},r.exports=h},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,r,l){var u=i("./DataReader");function h(f){u.call(this,f)}i("../utils").inherits(h,u),h.prototype.byteAt=function(f){return this.data.charCodeAt(this.zero+f)},h.prototype.lastIndexOfSignature=function(f){return this.data.lastIndexOf(f)-this.zero},h.prototype.readAndCheckSignature=function(f){return f===this.readData(4)},h.prototype.readData=function(f){this.checkOffset(f);var d=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},r.exports=h},{"../utils":32,"./DataReader":18}],21:[function(i,r,l){var u=i("./ArrayReader");function h(f){u.call(this,f)}i("../utils").inherits(h,u),h.prototype.readData=function(f){if(this.checkOffset(f),f===0)return new Uint8Array(0);var d=this.data.subarray(this.zero+this.index,this.zero+this.index+f);return this.index+=f,d},r.exports=h},{"../utils":32,"./ArrayReader":17}],22:[function(i,r,l){var u=i("../utils"),h=i("../support"),f=i("./ArrayReader"),d=i("./StringReader"),p=i("./NodeBufferReader"),g=i("./Uint8ArrayReader");r.exports=function(x){var y=u.getTypeOf(x);return u.checkSupport(y),y!=="string"||h.uint8array?y==="nodebuffer"?new p(x):h.uint8array?new g(u.transformTo("uint8array",x)):new f(u.transformTo("array",x)):new d(x)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,r,l){l.LOCAL_FILE_HEADER="PK",l.CENTRAL_FILE_HEADER="PK",l.CENTRAL_DIRECTORY_END="PK",l.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",l.ZIP64_CENTRAL_DIRECTORY_END="PK",l.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,r,l){var u=i("./GenericWorker"),h=i("../utils");function f(d){u.call(this,"ConvertWorker to "+d),this.destType=d}h.inherits(f,u),f.prototype.processChunk=function(d){this.push({data:h.transformTo(this.destType,d.data),meta:d.meta})},r.exports=f},{"../utils":32,"./GenericWorker":28}],25:[function(i,r,l){var u=i("./GenericWorker"),h=i("../crc32");function f(){u.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(f,u),f.prototype.processChunk=function(d){this.streamInfo.crc32=h(d.data,this.streamInfo.crc32||0),this.push(d)},r.exports=f},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,r,l){var u=i("../utils"),h=i("./GenericWorker");function f(d){h.call(this,"DataLengthProbe for "+d),this.propName=d,this.withStreamInfo(d,0)}u.inherits(f,h),f.prototype.processChunk=function(d){if(d){var p=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=p+d.data.length}h.prototype.processChunk.call(this,d)},r.exports=f},{"../utils":32,"./GenericWorker":28}],27:[function(i,r,l){var u=i("../utils"),h=i("./GenericWorker");function f(d){h.call(this,"DataWorker");var p=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,d.then(function(g){p.dataIsReady=!0,p.data=g,p.max=g&&g.length||0,p.type=u.getTypeOf(g),p.isPaused||p._tickAndRepeat()},function(g){p.error(g)})}u.inherits(f,h),f.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this.data=null},f.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,u.delay(this._tickAndRepeat,[],this)),!0)},f.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(u.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},f.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var d=null,p=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":d=this.data.substring(this.index,p);break;case"uint8array":d=this.data.subarray(this.index,p);break;case"array":case"nodebuffer":d=this.data.slice(this.index,p)}return this.index=p,this.push({data:d,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=f},{"../utils":32,"./GenericWorker":28}],28:[function(i,r,l){function u(h){this.name=h||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}u.prototype={push:function(h){this.emit("data",h)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(h){this.emit("error",h)}return!0},error:function(h){return!this.isFinished&&(this.isPaused?this.generatedError=h:(this.isFinished=!0,this.emit("error",h),this.previous&&this.previous.error(h),this.cleanUp()),!0)},on:function(h,f){return this._listeners[h].push(f),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(h,f){if(this._listeners[h])for(var d=0;d<this._listeners[h].length;d++)this._listeners[h][d].call(this,f)},pipe:function(h){return h.registerPrevious(this)},registerPrevious:function(h){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=h.streamInfo,this.mergeStreamInfo(),this.previous=h;var f=this;return h.on("data",function(d){f.processChunk(d)}),h.on("end",function(){f.end()}),h.on("error",function(d){f.error(d)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var h=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),h=!0),this.previous&&this.previous.resume(),!h},flush:function(){},processChunk:function(h){this.push(h)},withStreamInfo:function(h,f){return this.extraStreamInfo[h]=f,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var h in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,h)&&(this.streamInfo[h]=this.extraStreamInfo[h])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var h="Worker "+this.name;return this.previous?this.previous+" -> "+h:h}},r.exports=u},{}],29:[function(i,r,l){var u=i("../utils"),h=i("./ConvertWorker"),f=i("./GenericWorker"),d=i("../base64"),p=i("../support"),g=i("../external"),x=null;if(p.nodestream)try{x=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function y(b,E){return new g.Promise(function(S,_){var A=[],R=b._internalType,C=b._outputType,N=b._mimeType;b.on("data",function(k,B){A.push(k),E&&E(B)}).on("error",function(k){A=[],_(k)}).on("end",function(){try{var k=function(B,W,U){switch(B){case"blob":return u.newBlob(u.transformTo("arraybuffer",W),U);case"base64":return d.encode(W);default:return u.transformTo(B,W)}}(C,function(B,W){var U,L=0,j=null,z=0;for(U=0;U<W.length;U++)z+=W[U].length;switch(B){case"string":return W.join("");case"array":return Array.prototype.concat.apply([],W);case"uint8array":for(j=new Uint8Array(z),U=0;U<W.length;U++)j.set(W[U],L),L+=W[U].length;return j;case"nodebuffer":return Buffer.concat(W);default:throw new Error("concat : unsupported type '"+B+"'")}}(R,A),N);S(k)}catch(B){_(B)}A=[]}).resume()})}function v(b,E,S){var _=E;switch(E){case"blob":case"arraybuffer":_="uint8array";break;case"base64":_="string"}try{this._internalType=_,this._outputType=E,this._mimeType=S,u.checkSupport(_),this._worker=b.pipe(new h(_)),b.lock()}catch(A){this._worker=new f("error"),this._worker.error(A)}}v.prototype={accumulate:function(b){return y(this,b)},on:function(b,E){var S=this;return b==="data"?this._worker.on(b,function(_){E.call(S,_.data,_.meta)}):this._worker.on(b,function(){u.delay(E,arguments,S)}),this},resume:function(){return u.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(b){if(u.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new x(this,{objectMode:this._outputType!=="nodebuffer"},b)}},r.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,r,l){if(l.base64=!0,l.array=!0,l.string=!0,l.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",l.nodebuffer=typeof Buffer<"u",l.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")l.blob=!1;else{var u=new ArrayBuffer(0);try{l.blob=new Blob([u],{type:"application/zip"}).size===0}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);h.append(u),l.blob=h.getBlob("application/zip").size===0}catch{l.blob=!1}}}try{l.nodestream=!!i("readable-stream").Readable}catch{l.nodestream=!1}},{"readable-stream":16}],31:[function(i,r,l){for(var u=i("./utils"),h=i("./support"),f=i("./nodejsUtils"),d=i("./stream/GenericWorker"),p=new Array(256),g=0;g<256;g++)p[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;p[254]=p[254]=1;function x(){d.call(this,"utf-8 decode"),this.leftOver=null}function y(){d.call(this,"utf-8 encode")}l.utf8encode=function(v){return h.nodebuffer?f.newBufferFrom(v,"utf-8"):function(b){var E,S,_,A,R,C=b.length,N=0;for(A=0;A<C;A++)(64512&(S=b.charCodeAt(A)))==55296&&A+1<C&&(64512&(_=b.charCodeAt(A+1)))==56320&&(S=65536+(S-55296<<10)+(_-56320),A++),N+=S<128?1:S<2048?2:S<65536?3:4;for(E=h.uint8array?new Uint8Array(N):new Array(N),A=R=0;R<N;A++)(64512&(S=b.charCodeAt(A)))==55296&&A+1<C&&(64512&(_=b.charCodeAt(A+1)))==56320&&(S=65536+(S-55296<<10)+(_-56320),A++),S<128?E[R++]=S:(S<2048?E[R++]=192|S>>>6:(S<65536?E[R++]=224|S>>>12:(E[R++]=240|S>>>18,E[R++]=128|S>>>12&63),E[R++]=128|S>>>6&63),E[R++]=128|63&S);return E}(v)},l.utf8decode=function(v){return h.nodebuffer?u.transformTo("nodebuffer",v).toString("utf-8"):function(b){var E,S,_,A,R=b.length,C=new Array(2*R);for(E=S=0;E<R;)if((_=b[E++])<128)C[S++]=_;else if(4<(A=p[_]))C[S++]=65533,E+=A-1;else{for(_&=A===2?31:A===3?15:7;1<A&&E<R;)_=_<<6|63&b[E++],A--;1<A?C[S++]=65533:_<65536?C[S++]=_:(_-=65536,C[S++]=55296|_>>10&1023,C[S++]=56320|1023&_)}return C.length!==S&&(C.subarray?C=C.subarray(0,S):C.length=S),u.applyFromCharCode(C)}(v=u.transformTo(h.uint8array?"uint8array":"array",v))},u.inherits(x,d),x.prototype.processChunk=function(v){var b=u.transformTo(h.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var E=b;(b=new Uint8Array(E.length+this.leftOver.length)).set(this.leftOver,0),b.set(E,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var S=function(A,R){var C;for((R=R||A.length)>A.length&&(R=A.length),C=R-1;0<=C&&(192&A[C])==128;)C--;return C<0||C===0?R:C+p[A[C]]>R?C:R}(b),_=b;S!==b.length&&(h.uint8array?(_=b.subarray(0,S),this.leftOver=b.subarray(S,b.length)):(_=b.slice(0,S),this.leftOver=b.slice(S,b.length))),this.push({data:l.utf8decode(_),meta:v.meta})},x.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:l.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},l.Utf8DecodeWorker=x,u.inherits(y,d),y.prototype.processChunk=function(v){this.push({data:l.utf8encode(v.data),meta:v.meta})},l.Utf8EncodeWorker=y},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,r,l){var u=i("./support"),h=i("./base64"),f=i("./nodejsUtils"),d=i("./external");function p(E){return E}function g(E,S){for(var _=0;_<E.length;++_)S[_]=255&E.charCodeAt(_);return S}i("setimmediate"),l.newBlob=function(E,S){l.checkSupport("blob");try{return new Blob([E],{type:S})}catch{try{var _=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return _.append(E),_.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var x={stringifyByChunk:function(E,S,_){var A=[],R=0,C=E.length;if(C<=_)return String.fromCharCode.apply(null,E);for(;R<C;)S==="array"||S==="nodebuffer"?A.push(String.fromCharCode.apply(null,E.slice(R,Math.min(R+_,C)))):A.push(String.fromCharCode.apply(null,E.subarray(R,Math.min(R+_,C)))),R+=_;return A.join("")},stringifyByChar:function(E){for(var S="",_=0;_<E.length;_++)S+=String.fromCharCode(E[_]);return S},applyCanBeUsed:{uint8array:function(){try{return u.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return u.nodebuffer&&String.fromCharCode.apply(null,f.allocBuffer(1)).length===1}catch{return!1}}()}};function y(E){var S=65536,_=l.getTypeOf(E),A=!0;if(_==="uint8array"?A=x.applyCanBeUsed.uint8array:_==="nodebuffer"&&(A=x.applyCanBeUsed.nodebuffer),A)for(;1<S;)try{return x.stringifyByChunk(E,_,S)}catch{S=Math.floor(S/2)}return x.stringifyByChar(E)}function v(E,S){for(var _=0;_<E.length;_++)S[_]=E[_];return S}l.applyFromCharCode=y;var b={};b.string={string:p,array:function(E){return g(E,new Array(E.length))},arraybuffer:function(E){return b.string.uint8array(E).buffer},uint8array:function(E){return g(E,new Uint8Array(E.length))},nodebuffer:function(E){return g(E,f.allocBuffer(E.length))}},b.array={string:y,array:p,arraybuffer:function(E){return new Uint8Array(E).buffer},uint8array:function(E){return new Uint8Array(E)},nodebuffer:function(E){return f.newBufferFrom(E)}},b.arraybuffer={string:function(E){return y(new Uint8Array(E))},array:function(E){return v(new Uint8Array(E),new Array(E.byteLength))},arraybuffer:p,uint8array:function(E){return new Uint8Array(E)},nodebuffer:function(E){return f.newBufferFrom(new Uint8Array(E))}},b.uint8array={string:y,array:function(E){return v(E,new Array(E.length))},arraybuffer:function(E){return E.buffer},uint8array:p,nodebuffer:function(E){return f.newBufferFrom(E)}},b.nodebuffer={string:y,array:function(E){return v(E,new Array(E.length))},arraybuffer:function(E){return b.nodebuffer.uint8array(E).buffer},uint8array:function(E){return v(E,new Uint8Array(E.length))},nodebuffer:p},l.transformTo=function(E,S){if(S=S||"",!E)return S;l.checkSupport(E);var _=l.getTypeOf(S);return b[_][E](S)},l.resolve=function(E){for(var S=E.split("/"),_=[],A=0;A<S.length;A++){var R=S[A];R==="."||R===""&&A!==0&&A!==S.length-1||(R===".."?_.pop():_.push(R))}return _.join("/")},l.getTypeOf=function(E){return typeof E=="string"?"string":Object.prototype.toString.call(E)==="[object Array]"?"array":u.nodebuffer&&f.isBuffer(E)?"nodebuffer":u.uint8array&&E instanceof Uint8Array?"uint8array":u.arraybuffer&&E instanceof ArrayBuffer?"arraybuffer":void 0},l.checkSupport=function(E){if(!u[E.toLowerCase()])throw new Error(E+" is not supported by this platform")},l.MAX_VALUE_16BITS=65535,l.MAX_VALUE_32BITS=-1,l.pretty=function(E){var S,_,A="";for(_=0;_<(E||"").length;_++)A+="\\x"+((S=E.charCodeAt(_))<16?"0":"")+S.toString(16).toUpperCase();return A},l.delay=function(E,S,_){setImmediate(function(){E.apply(_||null,S||[])})},l.inherits=function(E,S){function _(){}_.prototype=S.prototype,E.prototype=new _},l.extend=function(){var E,S,_={};for(E=0;E<arguments.length;E++)for(S in arguments[E])Object.prototype.hasOwnProperty.call(arguments[E],S)&&_[S]===void 0&&(_[S]=arguments[E][S]);return _},l.prepareContent=function(E,S,_,A,R){return d.Promise.resolve(S).then(function(C){return u.blob&&(C instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(C))!==-1)&&typeof FileReader<"u"?new d.Promise(function(N,k){var B=new FileReader;B.onload=function(W){N(W.target.result)},B.onerror=function(W){k(W.target.error)},B.readAsArrayBuffer(C)}):C}).then(function(C){var N=l.getTypeOf(C);return N?(N==="arraybuffer"?C=l.transformTo("uint8array",C):N==="string"&&(R?C=h.decode(C):_&&A!==!0&&(C=function(k){return g(k,u.uint8array?new Uint8Array(k.length):new Array(k.length))}(C))),C):d.Promise.reject(new Error("Can't read the data of '"+E+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,r,l){var u=i("./reader/readerFor"),h=i("./utils"),f=i("./signature"),d=i("./zipEntry"),p=i("./support");function g(x){this.files=[],this.loadOptions=x}g.prototype={checkSignature:function(x){if(!this.reader.readAndCheckSignature(x)){this.reader.index-=4;var y=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+h.pretty(y)+", expected "+h.pretty(x)+")")}},isSignature:function(x,y){var v=this.reader.index;this.reader.setIndex(x);var b=this.reader.readString(4)===y;return this.reader.setIndex(v),b},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var x=this.reader.readData(this.zipCommentLength),y=p.uint8array?"uint8array":"array",v=h.transformTo(y,x);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var x,y,v,b=this.zip64EndOfCentralSize-44;0<b;)x=this.reader.readInt(2),y=this.reader.readInt(4),v=this.reader.readData(y),this.zip64ExtensibleData[x]={id:x,length:y,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var x,y;for(x=0;x<this.files.length;x++)y=this.files[x],this.reader.setIndex(y.localHeaderOffset),this.checkSignature(f.LOCAL_FILE_HEADER),y.readLocalPart(this.reader),y.handleUTF8(),y.processAttributes()},readCentralDir:function(){var x;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(f.CENTRAL_FILE_HEADER);)(x=new d({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(x);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var x=this.reader.lastIndexOfSignature(f.CENTRAL_DIRECTORY_END);if(x<0)throw this.isSignature(0,f.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(x);var y=x;if(this.checkSignature(f.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===h.MAX_VALUE_16BITS||this.diskWithCentralDirStart===h.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===h.MAX_VALUE_16BITS||this.centralDirRecords===h.MAX_VALUE_16BITS||this.centralDirSize===h.MAX_VALUE_32BITS||this.centralDirOffset===h.MAX_VALUE_32BITS){if(this.zip64=!0,(x=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(x),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,f.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var b=y-v;if(0<b)this.isSignature(y,f.CENTRAL_FILE_HEADER)||(this.reader.zero=b);else if(b<0)throw new Error("Corrupted zip: missing "+Math.abs(b)+" bytes.")},prepareReader:function(x){this.reader=u(x)},load:function(x){this.prepareReader(x),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=g},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,r,l){var u=i("./reader/readerFor"),h=i("./utils"),f=i("./compressedObject"),d=i("./crc32"),p=i("./utf8"),g=i("./compressions"),x=i("./support");function y(v,b){this.options=v,this.loadOptions=b}y.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var b,E;if(v.skip(22),this.fileNameLength=v.readInt(2),E=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(E),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((b=function(S){for(var _ in g)if(Object.prototype.hasOwnProperty.call(g,_)&&g[_].magic===S)return g[_];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+h.pretty(this.compressionMethod)+" unknown (inner file : "+h.transformTo("string",this.fileName)+")");this.decompressed=new f(this.compressedSize,this.uncompressedSize,this.crc32,b,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var b=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(b),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=u(this.extraFields[1].value);this.uncompressedSize===h.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===h.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===h.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===h.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var b,E,S,_=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<_;)b=v.readInt(2),E=v.readInt(2),S=v.readData(E),this.extraFields[b]={id:b,length:E,value:S};v.setIndex(_)},handleUTF8:function(){var v=x.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=p.utf8decode(this.fileName),this.fileCommentStr=p.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(b!==null)this.fileNameStr=b;else{var E=h.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(E)}var S=this.findExtraFieldUnicodeComment();if(S!==null)this.fileCommentStr=S;else{var _=h.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(_)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var b=u(v.value);return b.readInt(1)!==1||d(this.fileName)!==b.readInt(4)?null:p.utf8decode(b.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var b=u(v.value);return b.readInt(1)!==1||d(this.fileComment)!==b.readInt(4)?null:p.utf8decode(b.readData(v.length-5))}return null}},r.exports=y},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,r,l){function u(b,E,S){this.name=b,this.dir=S.dir,this.date=S.date,this.comment=S.comment,this.unixPermissions=S.unixPermissions,this.dosPermissions=S.dosPermissions,this._data=E,this._dataBinary=S.binary,this.options={compression:S.compression,compressionOptions:S.compressionOptions}}var h=i("./stream/StreamHelper"),f=i("./stream/DataWorker"),d=i("./utf8"),p=i("./compressedObject"),g=i("./stream/GenericWorker");u.prototype={internalStream:function(b){var E=null,S="string";try{if(!b)throw new Error("No output type specified.");var _=(S=b.toLowerCase())==="string"||S==="text";S!=="binarystring"&&S!=="text"||(S="string"),E=this._decompressWorker();var A=!this._dataBinary;A&&!_&&(E=E.pipe(new d.Utf8EncodeWorker)),!A&&_&&(E=E.pipe(new d.Utf8DecodeWorker))}catch(R){(E=new g("error")).error(R)}return new h(E,S,"")},async:function(b,E){return this.internalStream(b).accumulate(E)},nodeStream:function(b,E){return this.internalStream(b||"nodebuffer").toNodejsStream(E)},_compressWorker:function(b,E){if(this._data instanceof p&&this._data.compression.magic===b.magic)return this._data.getCompressedWorker();var S=this._decompressWorker();return this._dataBinary||(S=S.pipe(new d.Utf8EncodeWorker)),p.createWorkerFrom(S,b,E)},_decompressWorker:function(){return this._data instanceof p?this._data.getContentWorker():this._data instanceof g?this._data:new f(this._data)}};for(var x=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],y=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<x.length;v++)u.prototype[x[v]]=y;r.exports=u},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,r,l){(function(u){var h,f,d=u.MutationObserver||u.WebKitMutationObserver;if(d){var p=0,g=new d(b),x=u.document.createTextNode("");g.observe(x,{characterData:!0}),h=function(){x.data=p=++p%2}}else if(u.setImmediate||u.MessageChannel===void 0)h="document"in u&&"onreadystatechange"in u.document.createElement("script")?function(){var E=u.document.createElement("script");E.onreadystatechange=function(){b(),E.onreadystatechange=null,E.parentNode.removeChild(E),E=null},u.document.documentElement.appendChild(E)}:function(){setTimeout(b,0)};else{var y=new u.MessageChannel;y.port1.onmessage=b,h=function(){y.port2.postMessage(0)}}var v=[];function b(){var E,S;f=!0;for(var _=v.length;_;){for(S=v,v=[],E=-1;++E<_;)S[E]();_=v.length}f=!1}r.exports=function(E){v.push(E)!==1||f||h()}}).call(this,typeof Fa<"u"?Fa:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,r,l){var u=i("immediate");function h(){}var f={},d=["REJECTED"],p=["FULFILLED"],g=["PENDING"];function x(_){if(typeof _!="function")throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,_!==h&&E(this,_)}function y(_,A,R){this.promise=_,typeof A=="function"&&(this.onFulfilled=A,this.callFulfilled=this.otherCallFulfilled),typeof R=="function"&&(this.onRejected=R,this.callRejected=this.otherCallRejected)}function v(_,A,R){u(function(){var C;try{C=A(R)}catch(N){return f.reject(_,N)}C===_?f.reject(_,new TypeError("Cannot resolve promise with itself")):f.resolve(_,C)})}function b(_){var A=_&&_.then;if(_&&(typeof _=="object"||typeof _=="function")&&typeof A=="function")return function(){A.apply(_,arguments)}}function E(_,A){var R=!1;function C(B){R||(R=!0,f.reject(_,B))}function N(B){R||(R=!0,f.resolve(_,B))}var k=S(function(){A(N,C)});k.status==="error"&&C(k.value)}function S(_,A){var R={};try{R.value=_(A),R.status="success"}catch(C){R.status="error",R.value=C}return R}(r.exports=x).prototype.finally=function(_){if(typeof _!="function")return this;var A=this.constructor;return this.then(function(R){return A.resolve(_()).then(function(){return R})},function(R){return A.resolve(_()).then(function(){throw R})})},x.prototype.catch=function(_){return this.then(null,_)},x.prototype.then=function(_,A){if(typeof _!="function"&&this.state===p||typeof A!="function"&&this.state===d)return this;var R=new this.constructor(h);return this.state!==g?v(R,this.state===p?_:A,this.outcome):this.queue.push(new y(R,_,A)),R},y.prototype.callFulfilled=function(_){f.resolve(this.promise,_)},y.prototype.otherCallFulfilled=function(_){v(this.promise,this.onFulfilled,_)},y.prototype.callRejected=function(_){f.reject(this.promise,_)},y.prototype.otherCallRejected=function(_){v(this.promise,this.onRejected,_)},f.resolve=function(_,A){var R=S(b,A);if(R.status==="error")return f.reject(_,R.value);var C=R.value;if(C)E(_,C);else{_.state=p,_.outcome=A;for(var N=-1,k=_.queue.length;++N<k;)_.queue[N].callFulfilled(A)}return _},f.reject=function(_,A){_.state=d,_.outcome=A;for(var R=-1,C=_.queue.length;++R<C;)_.queue[R].callRejected(A);return _},x.resolve=function(_){return _ instanceof this?_:f.resolve(new this(h),_)},x.reject=function(_){var A=new this(h);return f.reject(A,_)},x.all=function(_){var A=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=_.length,C=!1;if(!R)return this.resolve([]);for(var N=new Array(R),k=0,B=-1,W=new this(h);++B<R;)U(_[B],B);return W;function U(L,j){A.resolve(L).then(function(z){N[j]=z,++k!==R||C||(C=!0,f.resolve(W,N))},function(z){C||(C=!0,f.reject(W,z))})}},x.race=function(_){var A=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=_.length,C=!1;if(!R)return this.resolve([]);for(var N=-1,k=new this(h);++N<R;)B=_[N],A.resolve(B).then(function(W){C||(C=!0,f.resolve(k,W))},function(W){C||(C=!0,f.reject(k,W))});var B;return k}},{immediate:36}],38:[function(i,r,l){var u={};(0,i("./lib/utils/common").assign)(u,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),r.exports=u},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,r,l){var u=i("./zlib/deflate"),h=i("./utils/common"),f=i("./utils/strings"),d=i("./zlib/messages"),p=i("./zlib/zstream"),g=Object.prototype.toString,x=0,y=-1,v=0,b=8;function E(_){if(!(this instanceof E))return new E(_);this.options=h.assign({level:y,method:b,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},_||{});var A=this.options;A.raw&&0<A.windowBits?A.windowBits=-A.windowBits:A.gzip&&0<A.windowBits&&A.windowBits<16&&(A.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var R=u.deflateInit2(this.strm,A.level,A.method,A.windowBits,A.memLevel,A.strategy);if(R!==x)throw new Error(d[R]);if(A.header&&u.deflateSetHeader(this.strm,A.header),A.dictionary){var C;if(C=typeof A.dictionary=="string"?f.string2buf(A.dictionary):g.call(A.dictionary)==="[object ArrayBuffer]"?new Uint8Array(A.dictionary):A.dictionary,(R=u.deflateSetDictionary(this.strm,C))!==x)throw new Error(d[R]);this._dict_set=!0}}function S(_,A){var R=new E(A);if(R.push(_,!0),R.err)throw R.msg||d[R.err];return R.result}E.prototype.push=function(_,A){var R,C,N=this.strm,k=this.options.chunkSize;if(this.ended)return!1;C=A===~~A?A:A===!0?4:0,typeof _=="string"?N.input=f.string2buf(_):g.call(_)==="[object ArrayBuffer]"?N.input=new Uint8Array(_):N.input=_,N.next_in=0,N.avail_in=N.input.length;do{if(N.avail_out===0&&(N.output=new h.Buf8(k),N.next_out=0,N.avail_out=k),(R=u.deflate(N,C))!==1&&R!==x)return this.onEnd(R),!(this.ended=!0);N.avail_out!==0&&(N.avail_in!==0||C!==4&&C!==2)||(this.options.to==="string"?this.onData(f.buf2binstring(h.shrinkBuf(N.output,N.next_out))):this.onData(h.shrinkBuf(N.output,N.next_out)))}while((0<N.avail_in||N.avail_out===0)&&R!==1);return C===4?(R=u.deflateEnd(this.strm),this.onEnd(R),this.ended=!0,R===x):C!==2||(this.onEnd(x),!(N.avail_out=0))},E.prototype.onData=function(_){this.chunks.push(_)},E.prototype.onEnd=function(_){_===x&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},l.Deflate=E,l.deflate=S,l.deflateRaw=function(_,A){return(A=A||{}).raw=!0,S(_,A)},l.gzip=function(_,A){return(A=A||{}).gzip=!0,S(_,A)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,r,l){var u=i("./zlib/inflate"),h=i("./utils/common"),f=i("./utils/strings"),d=i("./zlib/constants"),p=i("./zlib/messages"),g=i("./zlib/zstream"),x=i("./zlib/gzheader"),y=Object.prototype.toString;function v(E){if(!(this instanceof v))return new v(E);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},E||{});var S=this.options;S.raw&&0<=S.windowBits&&S.windowBits<16&&(S.windowBits=-S.windowBits,S.windowBits===0&&(S.windowBits=-15)),!(0<=S.windowBits&&S.windowBits<16)||E&&E.windowBits||(S.windowBits+=32),15<S.windowBits&&S.windowBits<48&&(15&S.windowBits)==0&&(S.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var _=u.inflateInit2(this.strm,S.windowBits);if(_!==d.Z_OK)throw new Error(p[_]);this.header=new x,u.inflateGetHeader(this.strm,this.header)}function b(E,S){var _=new v(S);if(_.push(E,!0),_.err)throw _.msg||p[_.err];return _.result}v.prototype.push=function(E,S){var _,A,R,C,N,k,B=this.strm,W=this.options.chunkSize,U=this.options.dictionary,L=!1;if(this.ended)return!1;A=S===~~S?S:S===!0?d.Z_FINISH:d.Z_NO_FLUSH,typeof E=="string"?B.input=f.binstring2buf(E):y.call(E)==="[object ArrayBuffer]"?B.input=new Uint8Array(E):B.input=E,B.next_in=0,B.avail_in=B.input.length;do{if(B.avail_out===0&&(B.output=new h.Buf8(W),B.next_out=0,B.avail_out=W),(_=u.inflate(B,d.Z_NO_FLUSH))===d.Z_NEED_DICT&&U&&(k=typeof U=="string"?f.string2buf(U):y.call(U)==="[object ArrayBuffer]"?new Uint8Array(U):U,_=u.inflateSetDictionary(this.strm,k)),_===d.Z_BUF_ERROR&&L===!0&&(_=d.Z_OK,L=!1),_!==d.Z_STREAM_END&&_!==d.Z_OK)return this.onEnd(_),!(this.ended=!0);B.next_out&&(B.avail_out!==0&&_!==d.Z_STREAM_END&&(B.avail_in!==0||A!==d.Z_FINISH&&A!==d.Z_SYNC_FLUSH)||(this.options.to==="string"?(R=f.utf8border(B.output,B.next_out),C=B.next_out-R,N=f.buf2string(B.output,R),B.next_out=C,B.avail_out=W-C,C&&h.arraySet(B.output,B.output,R,C,0),this.onData(N)):this.onData(h.shrinkBuf(B.output,B.next_out)))),B.avail_in===0&&B.avail_out===0&&(L=!0)}while((0<B.avail_in||B.avail_out===0)&&_!==d.Z_STREAM_END);return _===d.Z_STREAM_END&&(A=d.Z_FINISH),A===d.Z_FINISH?(_=u.inflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===d.Z_OK):A!==d.Z_SYNC_FLUSH||(this.onEnd(d.Z_OK),!(B.avail_out=0))},v.prototype.onData=function(E){this.chunks.push(E)},v.prototype.onEnd=function(E){E===d.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=E,this.msg=this.strm.msg},l.Inflate=v,l.inflate=b,l.inflateRaw=function(E,S){return(S=S||{}).raw=!0,b(E,S)},l.ungzip=b},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,r,l){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";l.assign=function(d){for(var p=Array.prototype.slice.call(arguments,1);p.length;){var g=p.shift();if(g){if(typeof g!="object")throw new TypeError(g+"must be non-object");for(var x in g)g.hasOwnProperty(x)&&(d[x]=g[x])}}return d},l.shrinkBuf=function(d,p){return d.length===p?d:d.subarray?d.subarray(0,p):(d.length=p,d)};var h={arraySet:function(d,p,g,x,y){if(p.subarray&&d.subarray)d.set(p.subarray(g,g+x),y);else for(var v=0;v<x;v++)d[y+v]=p[g+v]},flattenChunks:function(d){var p,g,x,y,v,b;for(p=x=0,g=d.length;p<g;p++)x+=d[p].length;for(b=new Uint8Array(x),p=y=0,g=d.length;p<g;p++)v=d[p],b.set(v,y),y+=v.length;return b}},f={arraySet:function(d,p,g,x,y){for(var v=0;v<x;v++)d[y+v]=p[g+v]},flattenChunks:function(d){return[].concat.apply([],d)}};l.setTyped=function(d){d?(l.Buf8=Uint8Array,l.Buf16=Uint16Array,l.Buf32=Int32Array,l.assign(l,h)):(l.Buf8=Array,l.Buf16=Array,l.Buf32=Array,l.assign(l,f))},l.setTyped(u)},{}],42:[function(i,r,l){var u=i("./common"),h=!0,f=!0;try{String.fromCharCode.apply(null,[0])}catch{h=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{f=!1}for(var d=new u.Buf8(256),p=0;p<256;p++)d[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;function g(x,y){if(y<65537&&(x.subarray&&f||!x.subarray&&h))return String.fromCharCode.apply(null,u.shrinkBuf(x,y));for(var v="",b=0;b<y;b++)v+=String.fromCharCode(x[b]);return v}d[254]=d[254]=1,l.string2buf=function(x){var y,v,b,E,S,_=x.length,A=0;for(E=0;E<_;E++)(64512&(v=x.charCodeAt(E)))==55296&&E+1<_&&(64512&(b=x.charCodeAt(E+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),E++),A+=v<128?1:v<2048?2:v<65536?3:4;for(y=new u.Buf8(A),E=S=0;S<A;E++)(64512&(v=x.charCodeAt(E)))==55296&&E+1<_&&(64512&(b=x.charCodeAt(E+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),E++),v<128?y[S++]=v:(v<2048?y[S++]=192|v>>>6:(v<65536?y[S++]=224|v>>>12:(y[S++]=240|v>>>18,y[S++]=128|v>>>12&63),y[S++]=128|v>>>6&63),y[S++]=128|63&v);return y},l.buf2binstring=function(x){return g(x,x.length)},l.binstring2buf=function(x){for(var y=new u.Buf8(x.length),v=0,b=y.length;v<b;v++)y[v]=x.charCodeAt(v);return y},l.buf2string=function(x,y){var v,b,E,S,_=y||x.length,A=new Array(2*_);for(v=b=0;v<_;)if((E=x[v++])<128)A[b++]=E;else if(4<(S=d[E]))A[b++]=65533,v+=S-1;else{for(E&=S===2?31:S===3?15:7;1<S&&v<_;)E=E<<6|63&x[v++],S--;1<S?A[b++]=65533:E<65536?A[b++]=E:(E-=65536,A[b++]=55296|E>>10&1023,A[b++]=56320|1023&E)}return g(A,b)},l.utf8border=function(x,y){var v;for((y=y||x.length)>x.length&&(y=x.length),v=y-1;0<=v&&(192&x[v])==128;)v--;return v<0||v===0?y:v+d[x[v]]>y?v:y}},{"./common":41}],43:[function(i,r,l){r.exports=function(u,h,f,d){for(var p=65535&u|0,g=u>>>16&65535|0,x=0;f!==0;){for(f-=x=2e3<f?2e3:f;g=g+(p=p+h[d++]|0)|0,--x;);p%=65521,g%=65521}return p|g<<16|0}},{}],44:[function(i,r,l){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,r,l){var u=function(){for(var h,f=[],d=0;d<256;d++){h=d;for(var p=0;p<8;p++)h=1&h?3988292384^h>>>1:h>>>1;f[d]=h}return f}();r.exports=function(h,f,d,p){var g=u,x=p+d;h^=-1;for(var y=p;y<x;y++)h=h>>>8^g[255&(h^f[y])];return-1^h}},{}],46:[function(i,r,l){var u,h=i("../utils/common"),f=i("./trees"),d=i("./adler32"),p=i("./crc32"),g=i("./messages"),x=0,y=4,v=0,b=-2,E=-1,S=4,_=2,A=8,R=9,C=286,N=30,k=19,B=2*C+1,W=15,U=3,L=258,j=L+U+1,z=42,Y=113,T=1,$=2,X=3,q=4;function tt(M,bt){return M.msg=g[bt],bt}function rt(M){return(M<<1)-(4<M?9:0)}function H(M){for(var bt=M.length;0<=--bt;)M[bt]=0}function G(M){var bt=M.state,ht=bt.pending;ht>M.avail_out&&(ht=M.avail_out),ht!==0&&(h.arraySet(M.output,bt.pending_buf,bt.pending_out,ht,M.next_out),M.next_out+=ht,bt.pending_out+=ht,M.total_out+=ht,M.avail_out-=ht,bt.pending-=ht,bt.pending===0&&(bt.pending_out=0))}function Z(M,bt){f._tr_flush_block(M,0<=M.block_start?M.block_start:-1,M.strstart-M.block_start,bt),M.block_start=M.strstart,G(M.strm)}function vt(M,bt){M.pending_buf[M.pending++]=bt}function J(M,bt){M.pending_buf[M.pending++]=bt>>>8&255,M.pending_buf[M.pending++]=255&bt}function at(M,bt){var ht,V,F=M.max_chain_length,et=M.strstart,_t=M.prev_length,yt=M.nice_match,lt=M.strstart>M.w_size-j?M.strstart-(M.w_size-j):0,P=M.window,D=M.w_mask,K=M.prev,ct=M.strstart+L,Mt=P[et+_t-1],dt=P[et+_t];M.prev_length>=M.good_match&&(F>>=2),yt>M.lookahead&&(yt=M.lookahead);do if(P[(ht=bt)+_t]===dt&&P[ht+_t-1]===Mt&&P[ht]===P[et]&&P[++ht]===P[et+1]){et+=2,ht++;do;while(P[++et]===P[++ht]&&P[++et]===P[++ht]&&P[++et]===P[++ht]&&P[++et]===P[++ht]&&P[++et]===P[++ht]&&P[++et]===P[++ht]&&P[++et]===P[++ht]&&P[++et]===P[++ht]&&et<ct);if(V=L-(ct-et),et=ct-L,_t<V){if(M.match_start=bt,yt<=(_t=V))break;Mt=P[et+_t-1],dt=P[et+_t]}}while((bt=K[bt&D])>lt&&--F!=0);return _t<=M.lookahead?_t:M.lookahead}function At(M){var bt,ht,V,F,et,_t,yt,lt,P,D,K=M.w_size;do{if(F=M.window_size-M.lookahead-M.strstart,M.strstart>=K+(K-j)){for(h.arraySet(M.window,M.window,K,K,0),M.match_start-=K,M.strstart-=K,M.block_start-=K,bt=ht=M.hash_size;V=M.head[--bt],M.head[bt]=K<=V?V-K:0,--ht;);for(bt=ht=K;V=M.prev[--bt],M.prev[bt]=K<=V?V-K:0,--ht;);F+=K}if(M.strm.avail_in===0)break;if(_t=M.strm,yt=M.window,lt=M.strstart+M.lookahead,P=F,D=void 0,D=_t.avail_in,P<D&&(D=P),ht=D===0?0:(_t.avail_in-=D,h.arraySet(yt,_t.input,_t.next_in,D,lt),_t.state.wrap===1?_t.adler=d(_t.adler,yt,D,lt):_t.state.wrap===2&&(_t.adler=p(_t.adler,yt,D,lt)),_t.next_in+=D,_t.total_in+=D,D),M.lookahead+=ht,M.lookahead+M.insert>=U)for(et=M.strstart-M.insert,M.ins_h=M.window[et],M.ins_h=(M.ins_h<<M.hash_shift^M.window[et+1])&M.hash_mask;M.insert&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[et+U-1])&M.hash_mask,M.prev[et&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=et,et++,M.insert--,!(M.lookahead+M.insert<U)););}while(M.lookahead<j&&M.strm.avail_in!==0)}function Nt(M,bt){for(var ht,V;;){if(M.lookahead<j){if(At(M),M.lookahead<j&&bt===x)return T;if(M.lookahead===0)break}if(ht=0,M.lookahead>=U&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+U-1])&M.hash_mask,ht=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),ht!==0&&M.strstart-ht<=M.w_size-j&&(M.match_length=at(M,ht)),M.match_length>=U)if(V=f._tr_tally(M,M.strstart-M.match_start,M.match_length-U),M.lookahead-=M.match_length,M.match_length<=M.max_lazy_match&&M.lookahead>=U){for(M.match_length--;M.strstart++,M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+U-1])&M.hash_mask,ht=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart,--M.match_length!=0;);M.strstart++}else M.strstart+=M.match_length,M.match_length=0,M.ins_h=M.window[M.strstart],M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+1])&M.hash_mask;else V=f._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++;if(V&&(Z(M,!1),M.strm.avail_out===0))return T}return M.insert=M.strstart<U-1?M.strstart:U-1,bt===y?(Z(M,!0),M.strm.avail_out===0?X:q):M.last_lit&&(Z(M,!1),M.strm.avail_out===0)?T:$}function Ct(M,bt){for(var ht,V,F;;){if(M.lookahead<j){if(At(M),M.lookahead<j&&bt===x)return T;if(M.lookahead===0)break}if(ht=0,M.lookahead>=U&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+U-1])&M.hash_mask,ht=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),M.prev_length=M.match_length,M.prev_match=M.match_start,M.match_length=U-1,ht!==0&&M.prev_length<M.max_lazy_match&&M.strstart-ht<=M.w_size-j&&(M.match_length=at(M,ht),M.match_length<=5&&(M.strategy===1||M.match_length===U&&4096<M.strstart-M.match_start)&&(M.match_length=U-1)),M.prev_length>=U&&M.match_length<=M.prev_length){for(F=M.strstart+M.lookahead-U,V=f._tr_tally(M,M.strstart-1-M.prev_match,M.prev_length-U),M.lookahead-=M.prev_length-1,M.prev_length-=2;++M.strstart<=F&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+U-1])&M.hash_mask,ht=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),--M.prev_length!=0;);if(M.match_available=0,M.match_length=U-1,M.strstart++,V&&(Z(M,!1),M.strm.avail_out===0))return T}else if(M.match_available){if((V=f._tr_tally(M,0,M.window[M.strstart-1]))&&Z(M,!1),M.strstart++,M.lookahead--,M.strm.avail_out===0)return T}else M.match_available=1,M.strstart++,M.lookahead--}return M.match_available&&(V=f._tr_tally(M,0,M.window[M.strstart-1]),M.match_available=0),M.insert=M.strstart<U-1?M.strstart:U-1,bt===y?(Z(M,!0),M.strm.avail_out===0?X:q):M.last_lit&&(Z(M,!1),M.strm.avail_out===0)?T:$}function Wt(M,bt,ht,V,F){this.good_length=M,this.max_lazy=bt,this.nice_length=ht,this.max_chain=V,this.func=F}function Yt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=A,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new h.Buf16(2*B),this.dyn_dtree=new h.Buf16(2*(2*N+1)),this.bl_tree=new h.Buf16(2*(2*k+1)),H(this.dyn_ltree),H(this.dyn_dtree),H(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new h.Buf16(W+1),this.heap=new h.Buf16(2*C+1),H(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new h.Buf16(2*C+1),H(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function re(M){var bt;return M&&M.state?(M.total_in=M.total_out=0,M.data_type=_,(bt=M.state).pending=0,bt.pending_out=0,bt.wrap<0&&(bt.wrap=-bt.wrap),bt.status=bt.wrap?z:Y,M.adler=bt.wrap===2?0:1,bt.last_flush=x,f._tr_init(bt),v):tt(M,b)}function ve(M){var bt=re(M);return bt===v&&function(ht){ht.window_size=2*ht.w_size,H(ht.head),ht.max_lazy_match=u[ht.level].max_lazy,ht.good_match=u[ht.level].good_length,ht.nice_match=u[ht.level].nice_length,ht.max_chain_length=u[ht.level].max_chain,ht.strstart=0,ht.block_start=0,ht.lookahead=0,ht.insert=0,ht.match_length=ht.prev_length=U-1,ht.match_available=0,ht.ins_h=0}(M.state),bt}function ce(M,bt,ht,V,F,et){if(!M)return b;var _t=1;if(bt===E&&(bt=6),V<0?(_t=0,V=-V):15<V&&(_t=2,V-=16),F<1||R<F||ht!==A||V<8||15<V||bt<0||9<bt||et<0||S<et)return tt(M,b);V===8&&(V=9);var yt=new Yt;return(M.state=yt).strm=M,yt.wrap=_t,yt.gzhead=null,yt.w_bits=V,yt.w_size=1<<yt.w_bits,yt.w_mask=yt.w_size-1,yt.hash_bits=F+7,yt.hash_size=1<<yt.hash_bits,yt.hash_mask=yt.hash_size-1,yt.hash_shift=~~((yt.hash_bits+U-1)/U),yt.window=new h.Buf8(2*yt.w_size),yt.head=new h.Buf16(yt.hash_size),yt.prev=new h.Buf16(yt.w_size),yt.lit_bufsize=1<<F+6,yt.pending_buf_size=4*yt.lit_bufsize,yt.pending_buf=new h.Buf8(yt.pending_buf_size),yt.d_buf=1*yt.lit_bufsize,yt.l_buf=3*yt.lit_bufsize,yt.level=bt,yt.strategy=et,yt.method=ht,ve(M)}u=[new Wt(0,0,0,0,function(M,bt){var ht=65535;for(ht>M.pending_buf_size-5&&(ht=M.pending_buf_size-5);;){if(M.lookahead<=1){if(At(M),M.lookahead===0&&bt===x)return T;if(M.lookahead===0)break}M.strstart+=M.lookahead,M.lookahead=0;var V=M.block_start+ht;if((M.strstart===0||M.strstart>=V)&&(M.lookahead=M.strstart-V,M.strstart=V,Z(M,!1),M.strm.avail_out===0)||M.strstart-M.block_start>=M.w_size-j&&(Z(M,!1),M.strm.avail_out===0))return T}return M.insert=0,bt===y?(Z(M,!0),M.strm.avail_out===0?X:q):(M.strstart>M.block_start&&(Z(M,!1),M.strm.avail_out),T)}),new Wt(4,4,8,4,Nt),new Wt(4,5,16,8,Nt),new Wt(4,6,32,32,Nt),new Wt(4,4,16,16,Ct),new Wt(8,16,32,32,Ct),new Wt(8,16,128,128,Ct),new Wt(8,32,128,256,Ct),new Wt(32,128,258,1024,Ct),new Wt(32,258,258,4096,Ct)],l.deflateInit=function(M,bt){return ce(M,bt,A,15,8,0)},l.deflateInit2=ce,l.deflateReset=ve,l.deflateResetKeep=re,l.deflateSetHeader=function(M,bt){return M&&M.state?M.state.wrap!==2?b:(M.state.gzhead=bt,v):b},l.deflate=function(M,bt){var ht,V,F,et;if(!M||!M.state||5<bt||bt<0)return M?tt(M,b):b;if(V=M.state,!M.output||!M.input&&M.avail_in!==0||V.status===666&&bt!==y)return tt(M,M.avail_out===0?-5:b);if(V.strm=M,ht=V.last_flush,V.last_flush=bt,V.status===z)if(V.wrap===2)M.adler=0,vt(V,31),vt(V,139),vt(V,8),V.gzhead?(vt(V,(V.gzhead.text?1:0)+(V.gzhead.hcrc?2:0)+(V.gzhead.extra?4:0)+(V.gzhead.name?8:0)+(V.gzhead.comment?16:0)),vt(V,255&V.gzhead.time),vt(V,V.gzhead.time>>8&255),vt(V,V.gzhead.time>>16&255),vt(V,V.gzhead.time>>24&255),vt(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),vt(V,255&V.gzhead.os),V.gzhead.extra&&V.gzhead.extra.length&&(vt(V,255&V.gzhead.extra.length),vt(V,V.gzhead.extra.length>>8&255)),V.gzhead.hcrc&&(M.adler=p(M.adler,V.pending_buf,V.pending,0)),V.gzindex=0,V.status=69):(vt(V,0),vt(V,0),vt(V,0),vt(V,0),vt(V,0),vt(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),vt(V,3),V.status=Y);else{var _t=A+(V.w_bits-8<<4)<<8;_t|=(2<=V.strategy||V.level<2?0:V.level<6?1:V.level===6?2:3)<<6,V.strstart!==0&&(_t|=32),_t+=31-_t%31,V.status=Y,J(V,_t),V.strstart!==0&&(J(V,M.adler>>>16),J(V,65535&M.adler)),M.adler=1}if(V.status===69)if(V.gzhead.extra){for(F=V.pending;V.gzindex<(65535&V.gzhead.extra.length)&&(V.pending!==V.pending_buf_size||(V.gzhead.hcrc&&V.pending>F&&(M.adler=p(M.adler,V.pending_buf,V.pending-F,F)),G(M),F=V.pending,V.pending!==V.pending_buf_size));)vt(V,255&V.gzhead.extra[V.gzindex]),V.gzindex++;V.gzhead.hcrc&&V.pending>F&&(M.adler=p(M.adler,V.pending_buf,V.pending-F,F)),V.gzindex===V.gzhead.extra.length&&(V.gzindex=0,V.status=73)}else V.status=73;if(V.status===73)if(V.gzhead.name){F=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>F&&(M.adler=p(M.adler,V.pending_buf,V.pending-F,F)),G(M),F=V.pending,V.pending===V.pending_buf_size)){et=1;break}et=V.gzindex<V.gzhead.name.length?255&V.gzhead.name.charCodeAt(V.gzindex++):0,vt(V,et)}while(et!==0);V.gzhead.hcrc&&V.pending>F&&(M.adler=p(M.adler,V.pending_buf,V.pending-F,F)),et===0&&(V.gzindex=0,V.status=91)}else V.status=91;if(V.status===91)if(V.gzhead.comment){F=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>F&&(M.adler=p(M.adler,V.pending_buf,V.pending-F,F)),G(M),F=V.pending,V.pending===V.pending_buf_size)){et=1;break}et=V.gzindex<V.gzhead.comment.length?255&V.gzhead.comment.charCodeAt(V.gzindex++):0,vt(V,et)}while(et!==0);V.gzhead.hcrc&&V.pending>F&&(M.adler=p(M.adler,V.pending_buf,V.pending-F,F)),et===0&&(V.status=103)}else V.status=103;if(V.status===103&&(V.gzhead.hcrc?(V.pending+2>V.pending_buf_size&&G(M),V.pending+2<=V.pending_buf_size&&(vt(V,255&M.adler),vt(V,M.adler>>8&255),M.adler=0,V.status=Y)):V.status=Y),V.pending!==0){if(G(M),M.avail_out===0)return V.last_flush=-1,v}else if(M.avail_in===0&&rt(bt)<=rt(ht)&&bt!==y)return tt(M,-5);if(V.status===666&&M.avail_in!==0)return tt(M,-5);if(M.avail_in!==0||V.lookahead!==0||bt!==x&&V.status!==666){var yt=V.strategy===2?function(lt,P){for(var D;;){if(lt.lookahead===0&&(At(lt),lt.lookahead===0)){if(P===x)return T;break}if(lt.match_length=0,D=f._tr_tally(lt,0,lt.window[lt.strstart]),lt.lookahead--,lt.strstart++,D&&(Z(lt,!1),lt.strm.avail_out===0))return T}return lt.insert=0,P===y?(Z(lt,!0),lt.strm.avail_out===0?X:q):lt.last_lit&&(Z(lt,!1),lt.strm.avail_out===0)?T:$}(V,bt):V.strategy===3?function(lt,P){for(var D,K,ct,Mt,dt=lt.window;;){if(lt.lookahead<=L){if(At(lt),lt.lookahead<=L&&P===x)return T;if(lt.lookahead===0)break}if(lt.match_length=0,lt.lookahead>=U&&0<lt.strstart&&(K=dt[ct=lt.strstart-1])===dt[++ct]&&K===dt[++ct]&&K===dt[++ct]){Mt=lt.strstart+L;do;while(K===dt[++ct]&&K===dt[++ct]&&K===dt[++ct]&&K===dt[++ct]&&K===dt[++ct]&&K===dt[++ct]&&K===dt[++ct]&&K===dt[++ct]&&ct<Mt);lt.match_length=L-(Mt-ct),lt.match_length>lt.lookahead&&(lt.match_length=lt.lookahead)}if(lt.match_length>=U?(D=f._tr_tally(lt,1,lt.match_length-U),lt.lookahead-=lt.match_length,lt.strstart+=lt.match_length,lt.match_length=0):(D=f._tr_tally(lt,0,lt.window[lt.strstart]),lt.lookahead--,lt.strstart++),D&&(Z(lt,!1),lt.strm.avail_out===0))return T}return lt.insert=0,P===y?(Z(lt,!0),lt.strm.avail_out===0?X:q):lt.last_lit&&(Z(lt,!1),lt.strm.avail_out===0)?T:$}(V,bt):u[V.level].func(V,bt);if(yt!==X&&yt!==q||(V.status=666),yt===T||yt===X)return M.avail_out===0&&(V.last_flush=-1),v;if(yt===$&&(bt===1?f._tr_align(V):bt!==5&&(f._tr_stored_block(V,0,0,!1),bt===3&&(H(V.head),V.lookahead===0&&(V.strstart=0,V.block_start=0,V.insert=0))),G(M),M.avail_out===0))return V.last_flush=-1,v}return bt!==y?v:V.wrap<=0?1:(V.wrap===2?(vt(V,255&M.adler),vt(V,M.adler>>8&255),vt(V,M.adler>>16&255),vt(V,M.adler>>24&255),vt(V,255&M.total_in),vt(V,M.total_in>>8&255),vt(V,M.total_in>>16&255),vt(V,M.total_in>>24&255)):(J(V,M.adler>>>16),J(V,65535&M.adler)),G(M),0<V.wrap&&(V.wrap=-V.wrap),V.pending!==0?v:1)},l.deflateEnd=function(M){var bt;return M&&M.state?(bt=M.state.status)!==z&&bt!==69&&bt!==73&&bt!==91&&bt!==103&&bt!==Y&&bt!==666?tt(M,b):(M.state=null,bt===Y?tt(M,-3):v):b},l.deflateSetDictionary=function(M,bt){var ht,V,F,et,_t,yt,lt,P,D=bt.length;if(!M||!M.state||(et=(ht=M.state).wrap)===2||et===1&&ht.status!==z||ht.lookahead)return b;for(et===1&&(M.adler=d(M.adler,bt,D,0)),ht.wrap=0,D>=ht.w_size&&(et===0&&(H(ht.head),ht.strstart=0,ht.block_start=0,ht.insert=0),P=new h.Buf8(ht.w_size),h.arraySet(P,bt,D-ht.w_size,ht.w_size,0),bt=P,D=ht.w_size),_t=M.avail_in,yt=M.next_in,lt=M.input,M.avail_in=D,M.next_in=0,M.input=bt,At(ht);ht.lookahead>=U;){for(V=ht.strstart,F=ht.lookahead-(U-1);ht.ins_h=(ht.ins_h<<ht.hash_shift^ht.window[V+U-1])&ht.hash_mask,ht.prev[V&ht.w_mask]=ht.head[ht.ins_h],ht.head[ht.ins_h]=V,V++,--F;);ht.strstart=V,ht.lookahead=U-1,At(ht)}return ht.strstart+=ht.lookahead,ht.block_start=ht.strstart,ht.insert=ht.lookahead,ht.lookahead=0,ht.match_length=ht.prev_length=U-1,ht.match_available=0,M.next_in=yt,M.input=lt,M.avail_in=_t,ht.wrap=et,v},l.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,r,l){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,r,l){r.exports=function(u,h){var f,d,p,g,x,y,v,b,E,S,_,A,R,C,N,k,B,W,U,L,j,z,Y,T,$;f=u.state,d=u.next_in,T=u.input,p=d+(u.avail_in-5),g=u.next_out,$=u.output,x=g-(h-u.avail_out),y=g+(u.avail_out-257),v=f.dmax,b=f.wsize,E=f.whave,S=f.wnext,_=f.window,A=f.hold,R=f.bits,C=f.lencode,N=f.distcode,k=(1<<f.lenbits)-1,B=(1<<f.distbits)-1;t:do{R<15&&(A+=T[d++]<<R,R+=8,A+=T[d++]<<R,R+=8),W=C[A&k];e:for(;;){if(A>>>=U=W>>>24,R-=U,(U=W>>>16&255)===0)$[g++]=65535&W;else{if(!(16&U)){if((64&U)==0){W=C[(65535&W)+(A&(1<<U)-1)];continue e}if(32&U){f.mode=12;break t}u.msg="invalid literal/length code",f.mode=30;break t}L=65535&W,(U&=15)&&(R<U&&(A+=T[d++]<<R,R+=8),L+=A&(1<<U)-1,A>>>=U,R-=U),R<15&&(A+=T[d++]<<R,R+=8,A+=T[d++]<<R,R+=8),W=N[A&B];n:for(;;){if(A>>>=U=W>>>24,R-=U,!(16&(U=W>>>16&255))){if((64&U)==0){W=N[(65535&W)+(A&(1<<U)-1)];continue n}u.msg="invalid distance code",f.mode=30;break t}if(j=65535&W,R<(U&=15)&&(A+=T[d++]<<R,(R+=8)<U&&(A+=T[d++]<<R,R+=8)),v<(j+=A&(1<<U)-1)){u.msg="invalid distance too far back",f.mode=30;break t}if(A>>>=U,R-=U,(U=g-x)<j){if(E<(U=j-U)&&f.sane){u.msg="invalid distance too far back",f.mode=30;break t}if(Y=_,(z=0)===S){if(z+=b-U,U<L){for(L-=U;$[g++]=_[z++],--U;);z=g-j,Y=$}}else if(S<U){if(z+=b+S-U,(U-=S)<L){for(L-=U;$[g++]=_[z++],--U;);if(z=0,S<L){for(L-=U=S;$[g++]=_[z++],--U;);z=g-j,Y=$}}}else if(z+=S-U,U<L){for(L-=U;$[g++]=_[z++],--U;);z=g-j,Y=$}for(;2<L;)$[g++]=Y[z++],$[g++]=Y[z++],$[g++]=Y[z++],L-=3;L&&($[g++]=Y[z++],1<L&&($[g++]=Y[z++]))}else{for(z=g-j;$[g++]=$[z++],$[g++]=$[z++],$[g++]=$[z++],2<(L-=3););L&&($[g++]=$[z++],1<L&&($[g++]=$[z++]))}break}}break}}while(d<p&&g<y);d-=L=R>>3,A&=(1<<(R-=L<<3))-1,u.next_in=d,u.next_out=g,u.avail_in=d<p?p-d+5:5-(d-p),u.avail_out=g<y?y-g+257:257-(g-y),f.hold=A,f.bits=R}},{}],49:[function(i,r,l){var u=i("../utils/common"),h=i("./adler32"),f=i("./crc32"),d=i("./inffast"),p=i("./inftrees"),g=1,x=2,y=0,v=-2,b=1,E=852,S=592;function _(z){return(z>>>24&255)+(z>>>8&65280)+((65280&z)<<8)+((255&z)<<24)}function A(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new u.Buf16(320),this.work=new u.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function R(z){var Y;return z&&z.state?(Y=z.state,z.total_in=z.total_out=Y.total=0,z.msg="",Y.wrap&&(z.adler=1&Y.wrap),Y.mode=b,Y.last=0,Y.havedict=0,Y.dmax=32768,Y.head=null,Y.hold=0,Y.bits=0,Y.lencode=Y.lendyn=new u.Buf32(E),Y.distcode=Y.distdyn=new u.Buf32(S),Y.sane=1,Y.back=-1,y):v}function C(z){var Y;return z&&z.state?((Y=z.state).wsize=0,Y.whave=0,Y.wnext=0,R(z)):v}function N(z,Y){var T,$;return z&&z.state?($=z.state,Y<0?(T=0,Y=-Y):(T=1+(Y>>4),Y<48&&(Y&=15)),Y&&(Y<8||15<Y)?v:($.window!==null&&$.wbits!==Y&&($.window=null),$.wrap=T,$.wbits=Y,C(z))):v}function k(z,Y){var T,$;return z?($=new A,(z.state=$).window=null,(T=N(z,Y))!==y&&(z.state=null),T):v}var B,W,U=!0;function L(z){if(U){var Y;for(B=new u.Buf32(512),W=new u.Buf32(32),Y=0;Y<144;)z.lens[Y++]=8;for(;Y<256;)z.lens[Y++]=9;for(;Y<280;)z.lens[Y++]=7;for(;Y<288;)z.lens[Y++]=8;for(p(g,z.lens,0,288,B,0,z.work,{bits:9}),Y=0;Y<32;)z.lens[Y++]=5;p(x,z.lens,0,32,W,0,z.work,{bits:5}),U=!1}z.lencode=B,z.lenbits=9,z.distcode=W,z.distbits=5}function j(z,Y,T,$){var X,q=z.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new u.Buf8(q.wsize)),$>=q.wsize?(u.arraySet(q.window,Y,T-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):($<(X=q.wsize-q.wnext)&&(X=$),u.arraySet(q.window,Y,T-$,X,q.wnext),($-=X)?(u.arraySet(q.window,Y,T-$,$,0),q.wnext=$,q.whave=q.wsize):(q.wnext+=X,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=X))),0}l.inflateReset=C,l.inflateReset2=N,l.inflateResetKeep=R,l.inflateInit=function(z){return k(z,15)},l.inflateInit2=k,l.inflate=function(z,Y){var T,$,X,q,tt,rt,H,G,Z,vt,J,at,At,Nt,Ct,Wt,Yt,re,ve,ce,M,bt,ht,V,F=0,et=new u.Buf8(4),_t=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!z||!z.state||!z.output||!z.input&&z.avail_in!==0)return v;(T=z.state).mode===12&&(T.mode=13),tt=z.next_out,X=z.output,H=z.avail_out,q=z.next_in,$=z.input,rt=z.avail_in,G=T.hold,Z=T.bits,vt=rt,J=H,bt=y;t:for(;;)switch(T.mode){case b:if(T.wrap===0){T.mode=13;break}for(;Z<16;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}if(2&T.wrap&&G===35615){et[T.check=0]=255&G,et[1]=G>>>8&255,T.check=f(T.check,et,2,0),Z=G=0,T.mode=2;break}if(T.flags=0,T.head&&(T.head.done=!1),!(1&T.wrap)||(((255&G)<<8)+(G>>8))%31){z.msg="incorrect header check",T.mode=30;break}if((15&G)!=8){z.msg="unknown compression method",T.mode=30;break}if(Z-=4,M=8+(15&(G>>>=4)),T.wbits===0)T.wbits=M;else if(M>T.wbits){z.msg="invalid window size",T.mode=30;break}T.dmax=1<<M,z.adler=T.check=1,T.mode=512&G?10:12,Z=G=0;break;case 2:for(;Z<16;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}if(T.flags=G,(255&T.flags)!=8){z.msg="unknown compression method",T.mode=30;break}if(57344&T.flags){z.msg="unknown header flags set",T.mode=30;break}T.head&&(T.head.text=G>>8&1),512&T.flags&&(et[0]=255&G,et[1]=G>>>8&255,T.check=f(T.check,et,2,0)),Z=G=0,T.mode=3;case 3:for(;Z<32;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}T.head&&(T.head.time=G),512&T.flags&&(et[0]=255&G,et[1]=G>>>8&255,et[2]=G>>>16&255,et[3]=G>>>24&255,T.check=f(T.check,et,4,0)),Z=G=0,T.mode=4;case 4:for(;Z<16;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}T.head&&(T.head.xflags=255&G,T.head.os=G>>8),512&T.flags&&(et[0]=255&G,et[1]=G>>>8&255,T.check=f(T.check,et,2,0)),Z=G=0,T.mode=5;case 5:if(1024&T.flags){for(;Z<16;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}T.length=G,T.head&&(T.head.extra_len=G),512&T.flags&&(et[0]=255&G,et[1]=G>>>8&255,T.check=f(T.check,et,2,0)),Z=G=0}else T.head&&(T.head.extra=null);T.mode=6;case 6:if(1024&T.flags&&(rt<(at=T.length)&&(at=rt),at&&(T.head&&(M=T.head.extra_len-T.length,T.head.extra||(T.head.extra=new Array(T.head.extra_len)),u.arraySet(T.head.extra,$,q,at,M)),512&T.flags&&(T.check=f(T.check,$,at,q)),rt-=at,q+=at,T.length-=at),T.length))break t;T.length=0,T.mode=7;case 7:if(2048&T.flags){if(rt===0)break t;for(at=0;M=$[q+at++],T.head&&M&&T.length<65536&&(T.head.name+=String.fromCharCode(M)),M&&at<rt;);if(512&T.flags&&(T.check=f(T.check,$,at,q)),rt-=at,q+=at,M)break t}else T.head&&(T.head.name=null);T.length=0,T.mode=8;case 8:if(4096&T.flags){if(rt===0)break t;for(at=0;M=$[q+at++],T.head&&M&&T.length<65536&&(T.head.comment+=String.fromCharCode(M)),M&&at<rt;);if(512&T.flags&&(T.check=f(T.check,$,at,q)),rt-=at,q+=at,M)break t}else T.head&&(T.head.comment=null);T.mode=9;case 9:if(512&T.flags){for(;Z<16;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}if(G!==(65535&T.check)){z.msg="header crc mismatch",T.mode=30;break}Z=G=0}T.head&&(T.head.hcrc=T.flags>>9&1,T.head.done=!0),z.adler=T.check=0,T.mode=12;break;case 10:for(;Z<32;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}z.adler=T.check=_(G),Z=G=0,T.mode=11;case 11:if(T.havedict===0)return z.next_out=tt,z.avail_out=H,z.next_in=q,z.avail_in=rt,T.hold=G,T.bits=Z,2;z.adler=T.check=1,T.mode=12;case 12:if(Y===5||Y===6)break t;case 13:if(T.last){G>>>=7&Z,Z-=7&Z,T.mode=27;break}for(;Z<3;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}switch(T.last=1&G,Z-=1,3&(G>>>=1)){case 0:T.mode=14;break;case 1:if(L(T),T.mode=20,Y!==6)break;G>>>=2,Z-=2;break t;case 2:T.mode=17;break;case 3:z.msg="invalid block type",T.mode=30}G>>>=2,Z-=2;break;case 14:for(G>>>=7&Z,Z-=7&Z;Z<32;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}if((65535&G)!=(G>>>16^65535)){z.msg="invalid stored block lengths",T.mode=30;break}if(T.length=65535&G,Z=G=0,T.mode=15,Y===6)break t;case 15:T.mode=16;case 16:if(at=T.length){if(rt<at&&(at=rt),H<at&&(at=H),at===0)break t;u.arraySet(X,$,q,at,tt),rt-=at,q+=at,H-=at,tt+=at,T.length-=at;break}T.mode=12;break;case 17:for(;Z<14;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}if(T.nlen=257+(31&G),G>>>=5,Z-=5,T.ndist=1+(31&G),G>>>=5,Z-=5,T.ncode=4+(15&G),G>>>=4,Z-=4,286<T.nlen||30<T.ndist){z.msg="too many length or distance symbols",T.mode=30;break}T.have=0,T.mode=18;case 18:for(;T.have<T.ncode;){for(;Z<3;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}T.lens[_t[T.have++]]=7&G,G>>>=3,Z-=3}for(;T.have<19;)T.lens[_t[T.have++]]=0;if(T.lencode=T.lendyn,T.lenbits=7,ht={bits:T.lenbits},bt=p(0,T.lens,0,19,T.lencode,0,T.work,ht),T.lenbits=ht.bits,bt){z.msg="invalid code lengths set",T.mode=30;break}T.have=0,T.mode=19;case 19:for(;T.have<T.nlen+T.ndist;){for(;Wt=(F=T.lencode[G&(1<<T.lenbits)-1])>>>16&255,Yt=65535&F,!((Ct=F>>>24)<=Z);){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}if(Yt<16)G>>>=Ct,Z-=Ct,T.lens[T.have++]=Yt;else{if(Yt===16){for(V=Ct+2;Z<V;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}if(G>>>=Ct,Z-=Ct,T.have===0){z.msg="invalid bit length repeat",T.mode=30;break}M=T.lens[T.have-1],at=3+(3&G),G>>>=2,Z-=2}else if(Yt===17){for(V=Ct+3;Z<V;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}Z-=Ct,M=0,at=3+(7&(G>>>=Ct)),G>>>=3,Z-=3}else{for(V=Ct+7;Z<V;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}Z-=Ct,M=0,at=11+(127&(G>>>=Ct)),G>>>=7,Z-=7}if(T.have+at>T.nlen+T.ndist){z.msg="invalid bit length repeat",T.mode=30;break}for(;at--;)T.lens[T.have++]=M}}if(T.mode===30)break;if(T.lens[256]===0){z.msg="invalid code -- missing end-of-block",T.mode=30;break}if(T.lenbits=9,ht={bits:T.lenbits},bt=p(g,T.lens,0,T.nlen,T.lencode,0,T.work,ht),T.lenbits=ht.bits,bt){z.msg="invalid literal/lengths set",T.mode=30;break}if(T.distbits=6,T.distcode=T.distdyn,ht={bits:T.distbits},bt=p(x,T.lens,T.nlen,T.ndist,T.distcode,0,T.work,ht),T.distbits=ht.bits,bt){z.msg="invalid distances set",T.mode=30;break}if(T.mode=20,Y===6)break t;case 20:T.mode=21;case 21:if(6<=rt&&258<=H){z.next_out=tt,z.avail_out=H,z.next_in=q,z.avail_in=rt,T.hold=G,T.bits=Z,d(z,J),tt=z.next_out,X=z.output,H=z.avail_out,q=z.next_in,$=z.input,rt=z.avail_in,G=T.hold,Z=T.bits,T.mode===12&&(T.back=-1);break}for(T.back=0;Wt=(F=T.lencode[G&(1<<T.lenbits)-1])>>>16&255,Yt=65535&F,!((Ct=F>>>24)<=Z);){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}if(Wt&&(240&Wt)==0){for(re=Ct,ve=Wt,ce=Yt;Wt=(F=T.lencode[ce+((G&(1<<re+ve)-1)>>re)])>>>16&255,Yt=65535&F,!(re+(Ct=F>>>24)<=Z);){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}G>>>=re,Z-=re,T.back+=re}if(G>>>=Ct,Z-=Ct,T.back+=Ct,T.length=Yt,Wt===0){T.mode=26;break}if(32&Wt){T.back=-1,T.mode=12;break}if(64&Wt){z.msg="invalid literal/length code",T.mode=30;break}T.extra=15&Wt,T.mode=22;case 22:if(T.extra){for(V=T.extra;Z<V;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}T.length+=G&(1<<T.extra)-1,G>>>=T.extra,Z-=T.extra,T.back+=T.extra}T.was=T.length,T.mode=23;case 23:for(;Wt=(F=T.distcode[G&(1<<T.distbits)-1])>>>16&255,Yt=65535&F,!((Ct=F>>>24)<=Z);){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}if((240&Wt)==0){for(re=Ct,ve=Wt,ce=Yt;Wt=(F=T.distcode[ce+((G&(1<<re+ve)-1)>>re)])>>>16&255,Yt=65535&F,!(re+(Ct=F>>>24)<=Z);){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}G>>>=re,Z-=re,T.back+=re}if(G>>>=Ct,Z-=Ct,T.back+=Ct,64&Wt){z.msg="invalid distance code",T.mode=30;break}T.offset=Yt,T.extra=15&Wt,T.mode=24;case 24:if(T.extra){for(V=T.extra;Z<V;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}T.offset+=G&(1<<T.extra)-1,G>>>=T.extra,Z-=T.extra,T.back+=T.extra}if(T.offset>T.dmax){z.msg="invalid distance too far back",T.mode=30;break}T.mode=25;case 25:if(H===0)break t;if(at=J-H,T.offset>at){if((at=T.offset-at)>T.whave&&T.sane){z.msg="invalid distance too far back",T.mode=30;break}At=at>T.wnext?(at-=T.wnext,T.wsize-at):T.wnext-at,at>T.length&&(at=T.length),Nt=T.window}else Nt=X,At=tt-T.offset,at=T.length;for(H<at&&(at=H),H-=at,T.length-=at;X[tt++]=Nt[At++],--at;);T.length===0&&(T.mode=21);break;case 26:if(H===0)break t;X[tt++]=T.length,H--,T.mode=21;break;case 27:if(T.wrap){for(;Z<32;){if(rt===0)break t;rt--,G|=$[q++]<<Z,Z+=8}if(J-=H,z.total_out+=J,T.total+=J,J&&(z.adler=T.check=T.flags?f(T.check,X,J,tt-J):h(T.check,X,J,tt-J)),J=H,(T.flags?G:_(G))!==T.check){z.msg="incorrect data check",T.mode=30;break}Z=G=0}T.mode=28;case 28:if(T.wrap&&T.flags){for(;Z<32;){if(rt===0)break t;rt--,G+=$[q++]<<Z,Z+=8}if(G!==(4294967295&T.total)){z.msg="incorrect length check",T.mode=30;break}Z=G=0}T.mode=29;case 29:bt=1;break t;case 30:bt=-3;break t;case 31:return-4;case 32:default:return v}return z.next_out=tt,z.avail_out=H,z.next_in=q,z.avail_in=rt,T.hold=G,T.bits=Z,(T.wsize||J!==z.avail_out&&T.mode<30&&(T.mode<27||Y!==4))&&j(z,z.output,z.next_out,J-z.avail_out)?(T.mode=31,-4):(vt-=z.avail_in,J-=z.avail_out,z.total_in+=vt,z.total_out+=J,T.total+=J,T.wrap&&J&&(z.adler=T.check=T.flags?f(T.check,X,J,z.next_out-J):h(T.check,X,J,z.next_out-J)),z.data_type=T.bits+(T.last?64:0)+(T.mode===12?128:0)+(T.mode===20||T.mode===15?256:0),(vt==0&&J===0||Y===4)&&bt===y&&(bt=-5),bt)},l.inflateEnd=function(z){if(!z||!z.state)return v;var Y=z.state;return Y.window&&(Y.window=null),z.state=null,y},l.inflateGetHeader=function(z,Y){var T;return z&&z.state?(2&(T=z.state).wrap)==0?v:((T.head=Y).done=!1,y):v},l.inflateSetDictionary=function(z,Y){var T,$=Y.length;return z&&z.state?(T=z.state).wrap!==0&&T.mode!==11?v:T.mode===11&&h(1,Y,$,0)!==T.check?-3:j(z,Y,$,$)?(T.mode=31,-4):(T.havedict=1,y):v},l.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,r,l){var u=i("../utils/common"),h=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],p=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(g,x,y,v,b,E,S,_){var A,R,C,N,k,B,W,U,L,j=_.bits,z=0,Y=0,T=0,$=0,X=0,q=0,tt=0,rt=0,H=0,G=0,Z=null,vt=0,J=new u.Buf16(16),at=new u.Buf16(16),At=null,Nt=0;for(z=0;z<=15;z++)J[z]=0;for(Y=0;Y<v;Y++)J[x[y+Y]]++;for(X=j,$=15;1<=$&&J[$]===0;$--);if($<X&&(X=$),$===0)return b[E++]=20971520,b[E++]=20971520,_.bits=1,0;for(T=1;T<$&&J[T]===0;T++);for(X<T&&(X=T),z=rt=1;z<=15;z++)if(rt<<=1,(rt-=J[z])<0)return-1;if(0<rt&&(g===0||$!==1))return-1;for(at[1]=0,z=1;z<15;z++)at[z+1]=at[z]+J[z];for(Y=0;Y<v;Y++)x[y+Y]!==0&&(S[at[x[y+Y]]++]=Y);if(B=g===0?(Z=At=S,19):g===1?(Z=h,vt-=257,At=f,Nt-=257,256):(Z=d,At=p,-1),z=T,k=E,tt=Y=G=0,C=-1,N=(H=1<<(q=X))-1,g===1&&852<H||g===2&&592<H)return 1;for(;;){for(W=z-tt,L=S[Y]<B?(U=0,S[Y]):S[Y]>B?(U=At[Nt+S[Y]],Z[vt+S[Y]]):(U=96,0),A=1<<z-tt,T=R=1<<q;b[k+(G>>tt)+(R-=A)]=W<<24|U<<16|L|0,R!==0;);for(A=1<<z-1;G&A;)A>>=1;if(A!==0?(G&=A-1,G+=A):G=0,Y++,--J[z]==0){if(z===$)break;z=x[y+S[Y]]}if(X<z&&(G&N)!==C){for(tt===0&&(tt=X),k+=T,rt=1<<(q=z-tt);q+tt<$&&!((rt-=J[q+tt])<=0);)q++,rt<<=1;if(H+=1<<q,g===1&&852<H||g===2&&592<H)return 1;b[C=G&N]=X<<24|q<<16|k-E|0}}return G!==0&&(b[k+G]=z-tt<<24|64<<16|0),_.bits=X,0}},{"../utils/common":41}],51:[function(i,r,l){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,r,l){var u=i("../utils/common"),h=0,f=1;function d(F){for(var et=F.length;0<=--et;)F[et]=0}var p=0,g=29,x=256,y=x+1+g,v=30,b=19,E=2*y+1,S=15,_=16,A=7,R=256,C=16,N=17,k=18,B=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],W=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],U=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],L=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],j=new Array(2*(y+2));d(j);var z=new Array(2*v);d(z);var Y=new Array(512);d(Y);var T=new Array(256);d(T);var $=new Array(g);d($);var X,q,tt,rt=new Array(v);function H(F,et,_t,yt,lt){this.static_tree=F,this.extra_bits=et,this.extra_base=_t,this.elems=yt,this.max_length=lt,this.has_stree=F&&F.length}function G(F,et){this.dyn_tree=F,this.max_code=0,this.stat_desc=et}function Z(F){return F<256?Y[F]:Y[256+(F>>>7)]}function vt(F,et){F.pending_buf[F.pending++]=255&et,F.pending_buf[F.pending++]=et>>>8&255}function J(F,et,_t){F.bi_valid>_-_t?(F.bi_buf|=et<<F.bi_valid&65535,vt(F,F.bi_buf),F.bi_buf=et>>_-F.bi_valid,F.bi_valid+=_t-_):(F.bi_buf|=et<<F.bi_valid&65535,F.bi_valid+=_t)}function at(F,et,_t){J(F,_t[2*et],_t[2*et+1])}function At(F,et){for(var _t=0;_t|=1&F,F>>>=1,_t<<=1,0<--et;);return _t>>>1}function Nt(F,et,_t){var yt,lt,P=new Array(S+1),D=0;for(yt=1;yt<=S;yt++)P[yt]=D=D+_t[yt-1]<<1;for(lt=0;lt<=et;lt++){var K=F[2*lt+1];K!==0&&(F[2*lt]=At(P[K]++,K))}}function Ct(F){var et;for(et=0;et<y;et++)F.dyn_ltree[2*et]=0;for(et=0;et<v;et++)F.dyn_dtree[2*et]=0;for(et=0;et<b;et++)F.bl_tree[2*et]=0;F.dyn_ltree[2*R]=1,F.opt_len=F.static_len=0,F.last_lit=F.matches=0}function Wt(F){8<F.bi_valid?vt(F,F.bi_buf):0<F.bi_valid&&(F.pending_buf[F.pending++]=F.bi_buf),F.bi_buf=0,F.bi_valid=0}function Yt(F,et,_t,yt){var lt=2*et,P=2*_t;return F[lt]<F[P]||F[lt]===F[P]&&yt[et]<=yt[_t]}function re(F,et,_t){for(var yt=F.heap[_t],lt=_t<<1;lt<=F.heap_len&&(lt<F.heap_len&&Yt(et,F.heap[lt+1],F.heap[lt],F.depth)&&lt++,!Yt(et,yt,F.heap[lt],F.depth));)F.heap[_t]=F.heap[lt],_t=lt,lt<<=1;F.heap[_t]=yt}function ve(F,et,_t){var yt,lt,P,D,K=0;if(F.last_lit!==0)for(;yt=F.pending_buf[F.d_buf+2*K]<<8|F.pending_buf[F.d_buf+2*K+1],lt=F.pending_buf[F.l_buf+K],K++,yt===0?at(F,lt,et):(at(F,(P=T[lt])+x+1,et),(D=B[P])!==0&&J(F,lt-=$[P],D),at(F,P=Z(--yt),_t),(D=W[P])!==0&&J(F,yt-=rt[P],D)),K<F.last_lit;);at(F,R,et)}function ce(F,et){var _t,yt,lt,P=et.dyn_tree,D=et.stat_desc.static_tree,K=et.stat_desc.has_stree,ct=et.stat_desc.elems,Mt=-1;for(F.heap_len=0,F.heap_max=E,_t=0;_t<ct;_t++)P[2*_t]!==0?(F.heap[++F.heap_len]=Mt=_t,F.depth[_t]=0):P[2*_t+1]=0;for(;F.heap_len<2;)P[2*(lt=F.heap[++F.heap_len]=Mt<2?++Mt:0)]=1,F.depth[lt]=0,F.opt_len--,K&&(F.static_len-=D[2*lt+1]);for(et.max_code=Mt,_t=F.heap_len>>1;1<=_t;_t--)re(F,P,_t);for(lt=ct;_t=F.heap[1],F.heap[1]=F.heap[F.heap_len--],re(F,P,1),yt=F.heap[1],F.heap[--F.heap_max]=_t,F.heap[--F.heap_max]=yt,P[2*lt]=P[2*_t]+P[2*yt],F.depth[lt]=(F.depth[_t]>=F.depth[yt]?F.depth[_t]:F.depth[yt])+1,P[2*_t+1]=P[2*yt+1]=lt,F.heap[1]=lt++,re(F,P,1),2<=F.heap_len;);F.heap[--F.heap_max]=F.heap[1],function(dt,It){var Bt,Xt,Kt,Tt,kt,$t,jt=It.dyn_tree,zt=It.max_code,le=It.stat_desc.static_tree,it=It.stat_desc.has_stree,Ft=It.stat_desc.extra_bits,Lt=It.stat_desc.extra_base,Gt=It.stat_desc.max_length,Ot=0;for(Tt=0;Tt<=S;Tt++)dt.bl_count[Tt]=0;for(jt[2*dt.heap[dt.heap_max]+1]=0,Bt=dt.heap_max+1;Bt<E;Bt++)Gt<(Tt=jt[2*jt[2*(Xt=dt.heap[Bt])+1]+1]+1)&&(Tt=Gt,Ot++),jt[2*Xt+1]=Tt,zt<Xt||(dt.bl_count[Tt]++,kt=0,Lt<=Xt&&(kt=Ft[Xt-Lt]),$t=jt[2*Xt],dt.opt_len+=$t*(Tt+kt),it&&(dt.static_len+=$t*(le[2*Xt+1]+kt)));if(Ot!==0){do{for(Tt=Gt-1;dt.bl_count[Tt]===0;)Tt--;dt.bl_count[Tt]--,dt.bl_count[Tt+1]+=2,dt.bl_count[Gt]--,Ot-=2}while(0<Ot);for(Tt=Gt;Tt!==0;Tt--)for(Xt=dt.bl_count[Tt];Xt!==0;)zt<(Kt=dt.heap[--Bt])||(jt[2*Kt+1]!==Tt&&(dt.opt_len+=(Tt-jt[2*Kt+1])*jt[2*Kt],jt[2*Kt+1]=Tt),Xt--)}}(F,et),Nt(P,Mt,F.bl_count)}function M(F,et,_t){var yt,lt,P=-1,D=et[1],K=0,ct=7,Mt=4;for(D===0&&(ct=138,Mt=3),et[2*(_t+1)+1]=65535,yt=0;yt<=_t;yt++)lt=D,D=et[2*(yt+1)+1],++K<ct&&lt===D||(K<Mt?F.bl_tree[2*lt]+=K:lt!==0?(lt!==P&&F.bl_tree[2*lt]++,F.bl_tree[2*C]++):K<=10?F.bl_tree[2*N]++:F.bl_tree[2*k]++,P=lt,Mt=(K=0)===D?(ct=138,3):lt===D?(ct=6,3):(ct=7,4))}function bt(F,et,_t){var yt,lt,P=-1,D=et[1],K=0,ct=7,Mt=4;for(D===0&&(ct=138,Mt=3),yt=0;yt<=_t;yt++)if(lt=D,D=et[2*(yt+1)+1],!(++K<ct&&lt===D)){if(K<Mt)for(;at(F,lt,F.bl_tree),--K!=0;);else lt!==0?(lt!==P&&(at(F,lt,F.bl_tree),K--),at(F,C,F.bl_tree),J(F,K-3,2)):K<=10?(at(F,N,F.bl_tree),J(F,K-3,3)):(at(F,k,F.bl_tree),J(F,K-11,7));P=lt,Mt=(K=0)===D?(ct=138,3):lt===D?(ct=6,3):(ct=7,4)}}d(rt);var ht=!1;function V(F,et,_t,yt){J(F,(p<<1)+(yt?1:0),3),function(lt,P,D,K){Wt(lt),vt(lt,D),vt(lt,~D),u.arraySet(lt.pending_buf,lt.window,P,D,lt.pending),lt.pending+=D}(F,et,_t)}l._tr_init=function(F){ht||(function(){var et,_t,yt,lt,P,D=new Array(S+1);for(lt=yt=0;lt<g-1;lt++)for($[lt]=yt,et=0;et<1<<B[lt];et++)T[yt++]=lt;for(T[yt-1]=lt,lt=P=0;lt<16;lt++)for(rt[lt]=P,et=0;et<1<<W[lt];et++)Y[P++]=lt;for(P>>=7;lt<v;lt++)for(rt[lt]=P<<7,et=0;et<1<<W[lt]-7;et++)Y[256+P++]=lt;for(_t=0;_t<=S;_t++)D[_t]=0;for(et=0;et<=143;)j[2*et+1]=8,et++,D[8]++;for(;et<=255;)j[2*et+1]=9,et++,D[9]++;for(;et<=279;)j[2*et+1]=7,et++,D[7]++;for(;et<=287;)j[2*et+1]=8,et++,D[8]++;for(Nt(j,y+1,D),et=0;et<v;et++)z[2*et+1]=5,z[2*et]=At(et,5);X=new H(j,B,x+1,y,S),q=new H(z,W,0,v,S),tt=new H(new Array(0),U,0,b,A)}(),ht=!0),F.l_desc=new G(F.dyn_ltree,X),F.d_desc=new G(F.dyn_dtree,q),F.bl_desc=new G(F.bl_tree,tt),F.bi_buf=0,F.bi_valid=0,Ct(F)},l._tr_stored_block=V,l._tr_flush_block=function(F,et,_t,yt){var lt,P,D=0;0<F.level?(F.strm.data_type===2&&(F.strm.data_type=function(K){var ct,Mt=4093624447;for(ct=0;ct<=31;ct++,Mt>>>=1)if(1&Mt&&K.dyn_ltree[2*ct]!==0)return h;if(K.dyn_ltree[18]!==0||K.dyn_ltree[20]!==0||K.dyn_ltree[26]!==0)return f;for(ct=32;ct<x;ct++)if(K.dyn_ltree[2*ct]!==0)return f;return h}(F)),ce(F,F.l_desc),ce(F,F.d_desc),D=function(K){var ct;for(M(K,K.dyn_ltree,K.l_desc.max_code),M(K,K.dyn_dtree,K.d_desc.max_code),ce(K,K.bl_desc),ct=b-1;3<=ct&&K.bl_tree[2*L[ct]+1]===0;ct--);return K.opt_len+=3*(ct+1)+5+5+4,ct}(F),lt=F.opt_len+3+7>>>3,(P=F.static_len+3+7>>>3)<=lt&&(lt=P)):lt=P=_t+5,_t+4<=lt&&et!==-1?V(F,et,_t,yt):F.strategy===4||P===lt?(J(F,2+(yt?1:0),3),ve(F,j,z)):(J(F,4+(yt?1:0),3),function(K,ct,Mt,dt){var It;for(J(K,ct-257,5),J(K,Mt-1,5),J(K,dt-4,4),It=0;It<dt;It++)J(K,K.bl_tree[2*L[It]+1],3);bt(K,K.dyn_ltree,ct-1),bt(K,K.dyn_dtree,Mt-1)}(F,F.l_desc.max_code+1,F.d_desc.max_code+1,D+1),ve(F,F.dyn_ltree,F.dyn_dtree)),Ct(F),yt&&Wt(F)},l._tr_tally=function(F,et,_t){return F.pending_buf[F.d_buf+2*F.last_lit]=et>>>8&255,F.pending_buf[F.d_buf+2*F.last_lit+1]=255&et,F.pending_buf[F.l_buf+F.last_lit]=255&_t,F.last_lit++,et===0?F.dyn_ltree[2*_t]++:(F.matches++,et--,F.dyn_ltree[2*(T[_t]+x+1)]++,F.dyn_dtree[2*Z(et)]++),F.last_lit===F.lit_bufsize-1},l._tr_align=function(F){J(F,2,3),at(F,R,j),function(et){et.bi_valid===16?(vt(et,et.bi_buf),et.bi_buf=0,et.bi_valid=0):8<=et.bi_valid&&(et.pending_buf[et.pending++]=255&et.bi_buf,et.bi_buf>>=8,et.bi_valid-=8)}(F)}},{"../utils/common":41}],53:[function(i,r,l){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,r,l){(function(u){(function(h,f){if(!h.setImmediate){var d,p,g,x,y=1,v={},b=!1,E=h.document,S=Object.getPrototypeOf&&Object.getPrototypeOf(h);S=S&&S.setTimeout?S:h,d={}.toString.call(h.process)==="[object process]"?function(C){process.nextTick(function(){A(C)})}:function(){if(h.postMessage&&!h.importScripts){var C=!0,N=h.onmessage;return h.onmessage=function(){C=!1},h.postMessage("","*"),h.onmessage=N,C}}()?(x="setImmediate$"+Math.random()+"$",h.addEventListener?h.addEventListener("message",R,!1):h.attachEvent("onmessage",R),function(C){h.postMessage(x+C,"*")}):h.MessageChannel?((g=new MessageChannel).port1.onmessage=function(C){A(C.data)},function(C){g.port2.postMessage(C)}):E&&"onreadystatechange"in E.createElement("script")?(p=E.documentElement,function(C){var N=E.createElement("script");N.onreadystatechange=function(){A(C),N.onreadystatechange=null,p.removeChild(N),N=null},p.appendChild(N)}):function(C){setTimeout(A,0,C)},S.setImmediate=function(C){typeof C!="function"&&(C=new Function(""+C));for(var N=new Array(arguments.length-1),k=0;k<N.length;k++)N[k]=arguments[k+1];var B={callback:C,args:N};return v[y]=B,d(y),y++},S.clearImmediate=_}function _(C){delete v[C]}function A(C){if(b)setTimeout(A,0,C);else{var N=v[C];if(N){b=!0;try{(function(k){var B=k.callback,W=k.args;switch(W.length){case 0:B();break;case 1:B(W[0]);break;case 2:B(W[0],W[1]);break;case 3:B(W[0],W[1],W[2]);break;default:B.apply(f,W)}})(N)}finally{_(C),b=!1}}}}function R(C){C.source===h&&typeof C.data=="string"&&C.data.indexOf(x)===0&&A(+C.data.slice(x.length))}})(typeof self>"u"?u===void 0?this:u:self)}).call(this,typeof Fa<"u"?Fa:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(Bf)),Bf.exports}var ey=ty();const ny=r0(ey);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="177",iy=0,ig=1,ay=2,s0=1,ry=2,Ji=3,Ga=0,Bn=1,$i=2,Ha=0,ms=1,ag=2,rg=3,sg=4,sy=5,gr=100,oy=101,ly=102,uy=103,cy=104,fy=200,hy=201,dy=202,py=203,vh=204,xh=205,my=206,_y=207,gy=208,vy=209,xy=210,yy=211,Sy=212,My=213,Ey=214,yh=0,Sh=1,Mh=2,vs=3,Eh=4,bh=5,Th=6,Ah=7,od=0,by=1,Ty=2,ka=0,Ay=1,wy=2,Ry=3,Cy=4,Dy=5,Uy=6,Ly=7,o0=300,xs=301,ys=302,wh=303,Rh=304,Ru=306,Ch=1e3,xr=1001,Dh=1002,mi=1003,Ny=1004,jl=1005,Ei=1006,Ff=1007,yr=1008,Ai=1009,l0=1010,u0=1011,wo=1012,ld=1013,Sr=1014,ta=1015,Uo=1016,ud=1017,cd=1018,Ro=1020,c0=35902,f0=1021,h0=1022,pi=1023,Co=1026,Do=1027,d0=1028,fd=1029,p0=1030,hd=1031,dd=1033,vu=33776,xu=33777,yu=33778,Su=33779,Uh=35840,Lh=35841,Nh=35842,Oh=35843,Ph=36196,zh=37492,Ih=37496,Bh=37808,Fh=37809,Hh=37810,kh=37811,Gh=37812,Vh=37813,Xh=37814,Wh=37815,qh=37816,Yh=37817,Zh=37818,jh=37819,Kh=37820,Qh=37821,Mu=36492,Jh=36494,$h=36495,m0=36283,td=36284,ed=36285,nd=36286,Oy=3200,Py=3201,_0=0,zy=1,Ba="",ri="srgb",Ss="srgb-linear",bu="linear",He="srgb",ts=7680,og=519,Iy=512,By=513,Fy=514,g0=515,Hy=516,ky=517,Gy=518,Vy=519,lg=35044,ug="300 es",ea=2e3,Tu=2001;class Es{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,id=180/Math.PI;function Lo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function be(o,t,i){return Math.max(t,Math.min(i,o))}function Xy(o,t){return(o%t+t)%t}function kf(o,t,i){return(1-i)*o+i*t}function yo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(t=0,i=0){Ne.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class No{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,f){let d=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const y=u[h+0],v=u[h+1],b=u[h+2],E=u[h+3];if(f===0){t[i+0]=d,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(f===1){t[i+0]=y,t[i+1]=v,t[i+2]=b,t[i+3]=E;return}if(x!==E||d!==y||p!==v||g!==b){let S=1-f;const _=d*y+p*v+g*b+x*E,A=_>=0?1:-1,R=1-_*_;if(R>Number.EPSILON){const N=Math.sqrt(R),k=Math.atan2(N,_*A);S=Math.sin(S*k)/N,f=Math.sin(f*k)/N}const C=f*A;if(d=d*S+y*C,p=p*S+v*C,g=g*S+b*C,x=x*S+E*C,S===1-f){const N=1/Math.sqrt(d*d+p*p+g*g+x*x);d*=N,p*=N,g*=N,x*=N}}t[i]=d,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,h){const f=r[l],d=r[l+1],p=r[l+2],g=r[l+3],x=u[h],y=u[h+1],v=u[h+2],b=u[h+3];return t[i]=f*b+g*x+d*v-p*y,t[i+1]=d*b+g*y+p*x-f*v,t[i+2]=p*b+g*v+f*y-d*x,t[i+3]=g*b-f*x-d*y-p*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,f=Math.cos,d=Math.sin,p=f(r/2),g=f(l/2),x=f(u/2),y=d(r/2),v=d(l/2),b=d(u/2);switch(h){case"XYZ":this._x=y*g*x+p*v*b,this._y=p*v*x-y*g*b,this._z=p*g*b+y*v*x,this._w=p*g*x-y*v*b;break;case"YXZ":this._x=y*g*x+p*v*b,this._y=p*v*x-y*g*b,this._z=p*g*b-y*v*x,this._w=p*g*x+y*v*b;break;case"ZXY":this._x=y*g*x-p*v*b,this._y=p*v*x+y*g*b,this._z=p*g*b+y*v*x,this._w=p*g*x-y*v*b;break;case"ZYX":this._x=y*g*x-p*v*b,this._y=p*v*x+y*g*b,this._z=p*g*b-y*v*x,this._w=p*g*x+y*v*b;break;case"YZX":this._x=y*g*x+p*v*b,this._y=p*v*x+y*g*b,this._z=p*g*b-y*v*x,this._w=p*g*x-y*v*b;break;case"XZY":this._x=y*g*x-p*v*b,this._y=p*v*x-y*g*b,this._z=p*g*b+y*v*x,this._w=p*g*x+y*v*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],f=i[5],d=i[9],p=i[2],g=i[6],x=i[10],y=r+f+x;if(y>0){const v=.5/Math.sqrt(y+1);this._w=.25/v,this._x=(g-d)*v,this._y=(u-p)*v,this._z=(h-l)*v}else if(r>f&&r>x){const v=2*Math.sqrt(1+r-f-x);this._w=(g-d)/v,this._x=.25*v,this._y=(l+h)/v,this._z=(u+p)/v}else if(f>x){const v=2*Math.sqrt(1+f-r-x);this._w=(u-p)/v,this._x=(l+h)/v,this._y=.25*v,this._z=(d+g)/v}else{const v=2*Math.sqrt(1+x-r-f);this._w=(h-l)/v,this._x=(u+p)/v,this._y=(d+g)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,f=i._x,d=i._y,p=i._z,g=i._w;return this._x=r*g+h*f+l*p-u*d,this._y=l*g+h*d+u*f-r*p,this._z=u*g+h*p+r*d-l*f,this._w=h*g-r*f-l*d-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let f=h*t._w+r*t._x+l*t._y+u*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const d=1-f*f;if(d<=Number.EPSILON){const v=1-i;return this._w=v*h+i*this._w,this._x=v*r+i*this._x,this._y=v*l+i*this._y,this._z=v*u+i*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,f),x=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ft{constructor(t=0,i=0,r=0){ft.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(cg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(cg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,f=t.z,d=t.w,p=2*(h*l-f*r),g=2*(f*i-u*l),x=2*(u*r-h*i);return this.x=i+d*p+h*x-f*g,this.y=r+d*g+f*p-u*x,this.z=l+d*x+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,f=i.y,d=i.z;return this.x=l*d-u*f,this.y=u*h-r*d,this.z=r*f-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Gf.copy(this).projectOnVector(t),this.sub(Gf)}reflect(t){return this.sub(Gf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new ft,cg=new No;class de{constructor(t,i,r,l,u,h,f,d,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,f,d,p)}set(t,i,r,l,u,h,f,d,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=f,g[3]=i,g[4]=u,g[5]=d,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],f=r[3],d=r[6],p=r[1],g=r[4],x=r[7],y=r[2],v=r[5],b=r[8],E=l[0],S=l[3],_=l[6],A=l[1],R=l[4],C=l[7],N=l[2],k=l[5],B=l[8];return u[0]=h*E+f*A+d*N,u[3]=h*S+f*R+d*k,u[6]=h*_+f*C+d*B,u[1]=p*E+g*A+x*N,u[4]=p*S+g*R+x*k,u[7]=p*_+g*C+x*B,u[2]=y*E+v*A+b*N,u[5]=y*S+v*R+b*k,u[8]=y*_+v*C+b*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],f=t[5],d=t[6],p=t[7],g=t[8];return i*h*g-i*f*p-r*u*g+r*f*d+l*u*p-l*h*d}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],f=t[5],d=t[6],p=t[7],g=t[8],x=g*h-f*p,y=f*d-g*u,v=p*u-h*d,b=i*x+r*y+l*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=x*E,t[1]=(l*p-g*r)*E,t[2]=(f*r-l*h)*E,t[3]=y*E,t[4]=(g*i-l*d)*E,t[5]=(l*u-f*i)*E,t[6]=v*E,t[7]=(r*d-p*i)*E,t[8]=(h*i-r*u)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,f){const d=Math.cos(u),p=Math.sin(u);return this.set(r*d,r*p,-r*(d*h+p*f)+h+t,-l*p,l*d,-l*(-p*h+d*f)+f+i,0,0,1),this}scale(t,i){return this.premultiply(Vf.makeScale(t,i)),this}rotate(t){return this.premultiply(Vf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Vf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vf=new de;function v0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Au(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Wy(){const o=Au("canvas");return o.style.display="block",o}const fg={};function _s(o){o in fg||(fg[o]=!0,console.warn(o))}function qy(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function Yy(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zy(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const hg=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dg=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jy(){const o={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===He&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=gs(l.r),l.g=gs(l.g),l.b=gs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ba?bu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ss]:{primaries:t,whitePoint:r,transfer:bu,toXYZ:hg,fromXYZ:dg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:r,transfer:He,toXYZ:hg,fromXYZ:dg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const Ce=jy();function na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function gs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let es;class Ky{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{es===void 0&&(es=Au("canvas")),es.width=t.width,es.height=t.height;const l=es.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=es}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Au("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=na(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qy=0;class pd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Lo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,f=l.length;h<f;h++)l[h].isDataTexture?u.push(Xf(l[h].image)):u.push(Xf(l[h]))}else u=Xf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ky.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jy=0;const Wf=new ft;class Fn extends Es{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=xr,l=xr,u=Ei,h=yr,f=pi,d=Ai,p=Fn.DEFAULT_ANISOTROPY,g=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Lo(),this.name="",this.source=new pd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wf).x}get height(){return this.source.getSize(Wf).y}get depth(){return this.source.getSize(Wf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==o0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ch:t.x=t.x-Math.floor(t.x);break;case xr:t.x=t.x<0?0:1;break;case Dh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ch:t.y=t.y-Math.floor(t.y);break;case xr:t.y=t.y<0?0:1;break;case Dh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=o0;Fn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,i=0,r=0,l=1){ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const d=t.elements,p=d[0],g=d[4],x=d[8],y=d[1],v=d[5],b=d[9],E=d[2],S=d[6],_=d[10];if(Math.abs(g-y)<.01&&Math.abs(x-E)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+E)<.1&&Math.abs(b+S)<.1&&Math.abs(p+v+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(p+1)/2,C=(v+1)/2,N=(_+1)/2,k=(g+y)/4,B=(x+E)/4,W=(b+S)/4;return R>C&&R>N?R<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(R),l=k/r,u=B/r):C>N?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=k/l,u=W/l):N<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(N),r=B/u,l=W/u),this.set(r,l,u,i),this}let A=Math.sqrt((S-b)*(S-b)+(x-E)*(x-E)+(y-g)*(y-g));return Math.abs(A)<.001&&(A=1),this.x=(S-b)/A,this.y=(x-E)/A,this.z=(y-g)/A,this.w=Math.acos((p+v+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $y extends Es{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ke(0,0,t,i),this.scissorTest=!1,this.viewport=new ke(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Fn(l);this.textures=[];const h=r.count;for(let f=0;f<h;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new pd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends $y{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class x0 extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tS extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=mi,this.minFilter=mi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(t=new ft(1/0,1/0,1/0),i=new ft(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,f=u.count;h<f;h++)t.isMesh===!0?t.getVertexPosition(h,ci):ci.fromBufferAttribute(u,h),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Kl.copy(r.boundingBox)),Kl.applyMatrix4(t.matrixWorld),this.union(Kl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(So),Ql.subVectors(this.max,So),ns.subVectors(t.a,So),is.subVectors(t.b,So),as.subVectors(t.c,So),Da.subVectors(is,ns),Ua.subVectors(as,is),ur.subVectors(ns,as);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-ur.z,ur.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,ur.z,0,-ur.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-ur.y,ur.x,0];return!qf(i,ns,is,as,Ql)||(i=[1,0,0,0,1,0,0,0,1],!qf(i,ns,is,as,Ql))?!1:(Jl.crossVectors(Da,Ua),i=[Jl.x,Jl.y,Jl.z],qf(i,ns,is,as,Ql))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Yi=[new ft,new ft,new ft,new ft,new ft,new ft,new ft,new ft],ci=new ft,Kl=new Oo,ns=new ft,is=new ft,as=new ft,Da=new ft,Ua=new ft,ur=new ft,So=new ft,Ql=new ft,Jl=new ft,cr=new ft;function qf(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){cr.fromArray(o,u);const f=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),d=t.dot(cr),p=i.dot(cr),g=r.dot(cr);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>f)return!1}return!0}const eS=new Oo,Mo=new ft,Yf=new ft;class md{constructor(t=new ft,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):eS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mo.subVectors(t,this.center);const i=Mo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Mo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mo.copy(t.center).add(Yf)),this.expandByPoint(Mo.copy(t.center).sub(Yf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Zi=new ft,Zf=new ft,$l=new ft,La=new ft,jf=new ft,tu=new ft,Kf=new ft;class nS{constructor(t=new ft,i=new ft(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Zf.copy(t).add(i).multiplyScalar(.5),$l.copy(i).sub(t).normalize(),La.copy(this.origin).sub(Zf);const u=t.distanceTo(i)*.5,h=-this.direction.dot($l),f=La.dot(this.direction),d=-La.dot($l),p=La.lengthSq(),g=Math.abs(1-h*h);let x,y,v,b;if(g>0)if(x=h*d-f,y=h*f-d,b=u*g,x>=0)if(y>=-b)if(y<=b){const E=1/g;x*=E,y*=E,v=x*(x+h*y+2*f)+y*(h*x+y+2*d)+p}else y=u,x=Math.max(0,-(h*y+f)),v=-x*x+y*(y+2*d)+p;else y=-u,x=Math.max(0,-(h*y+f)),v=-x*x+y*(y+2*d)+p;else y<=-b?(x=Math.max(0,-(-h*u+f)),y=x>0?-u:Math.min(Math.max(-u,-d),u),v=-x*x+y*(y+2*d)+p):y<=b?(x=0,y=Math.min(Math.max(-u,-d),u),v=y*(y+2*d)+p):(x=Math.max(0,-(h*u+f)),y=x>0?u:Math.min(Math.max(-u,-d),u),v=-x*x+y*(y+2*d)+p);else y=h>0?-u:u,x=Math.max(0,-(h*y+f)),v=-x*x+y*(y+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Zf).addScaledVector($l,y),v}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),f=r-h,d=r+h;return d<0?null:f<0?this.at(d,i):this.at(f,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,f,d;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(u=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(f=(t.min.z-y.z)*x,d=(t.max.z-y.z)*x):(f=(t.max.z-y.z)*x,d=(t.min.z-y.z)*x),r>d||f>l)||((f>r||r!==r)&&(r=f),(d<l||l!==l)&&(l=d),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,r,l,u){jf.subVectors(i,t),tu.subVectors(r,t),Kf.crossVectors(jf,tu);let h=this.direction.dot(Kf),f;if(h>0){if(l)return null;f=1}else if(h<0)f=-1,h=-h;else return null;La.subVectors(this.origin,t);const d=f*this.direction.dot(tu.crossVectors(La,tu));if(d<0)return null;const p=f*this.direction.dot(jf.cross(La));if(p<0||d+p>h)return null;const g=-f*La.dot(Kf);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,u,h,f,d,p,g,x,y,v,b,E,S){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,f,d,p,g,x,y,v,b,E,S)}set(t,i,r,l,u,h,f,d,p,g,x,y,v,b,E,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=f,_[13]=d,_[2]=p,_[6]=g,_[10]=x,_[14]=y,_[3]=v,_[7]=b,_[11]=E,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/rs.setFromMatrixColumn(t,0).length(),u=1/rs.setFromMatrixColumn(t,1).length(),h=1/rs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),f=Math.sin(r),d=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const y=h*g,v=h*x,b=f*g,E=f*x;i[0]=d*g,i[4]=-d*x,i[8]=p,i[1]=v+b*p,i[5]=y-E*p,i[9]=-f*d,i[2]=E-y*p,i[6]=b+v*p,i[10]=h*d}else if(t.order==="YXZ"){const y=d*g,v=d*x,b=p*g,E=p*x;i[0]=y+E*f,i[4]=b*f-v,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-f,i[2]=v*f-b,i[6]=E+y*f,i[10]=h*d}else if(t.order==="ZXY"){const y=d*g,v=d*x,b=p*g,E=p*x;i[0]=y-E*f,i[4]=-h*x,i[8]=b+v*f,i[1]=v+b*f,i[5]=h*g,i[9]=E-y*f,i[2]=-h*p,i[6]=f,i[10]=h*d}else if(t.order==="ZYX"){const y=h*g,v=h*x,b=f*g,E=f*x;i[0]=d*g,i[4]=b*p-v,i[8]=y*p+E,i[1]=d*x,i[5]=E*p+y,i[9]=v*p-b,i[2]=-p,i[6]=f*d,i[10]=h*d}else if(t.order==="YZX"){const y=h*d,v=h*p,b=f*d,E=f*p;i[0]=d*g,i[4]=E-y*x,i[8]=b*x+v,i[1]=x,i[5]=h*g,i[9]=-f*g,i[2]=-p*g,i[6]=v*x+b,i[10]=y-E*x}else if(t.order==="XZY"){const y=h*d,v=h*p,b=f*d,E=f*p;i[0]=d*g,i[4]=-x,i[8]=p*g,i[1]=y*x+E,i[5]=h*g,i[9]=v*x-b,i[2]=b*x-v,i[6]=f*g,i[10]=E*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iS,t,aS)}lookAt(t,i,r){const l=this.elements;return Zn.subVectors(t,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Na.crossVectors(r,Zn),Na.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Na.crossVectors(r,Zn)),Na.normalize(),eu.crossVectors(Zn,Na),l[0]=Na.x,l[4]=eu.x,l[8]=Zn.x,l[1]=Na.y,l[5]=eu.y,l[9]=Zn.y,l[2]=Na.z,l[6]=eu.z,l[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],f=r[4],d=r[8],p=r[12],g=r[1],x=r[5],y=r[9],v=r[13],b=r[2],E=r[6],S=r[10],_=r[14],A=r[3],R=r[7],C=r[11],N=r[15],k=l[0],B=l[4],W=l[8],U=l[12],L=l[1],j=l[5],z=l[9],Y=l[13],T=l[2],$=l[6],X=l[10],q=l[14],tt=l[3],rt=l[7],H=l[11],G=l[15];return u[0]=h*k+f*L+d*T+p*tt,u[4]=h*B+f*j+d*$+p*rt,u[8]=h*W+f*z+d*X+p*H,u[12]=h*U+f*Y+d*q+p*G,u[1]=g*k+x*L+y*T+v*tt,u[5]=g*B+x*j+y*$+v*rt,u[9]=g*W+x*z+y*X+v*H,u[13]=g*U+x*Y+y*q+v*G,u[2]=b*k+E*L+S*T+_*tt,u[6]=b*B+E*j+S*$+_*rt,u[10]=b*W+E*z+S*X+_*H,u[14]=b*U+E*Y+S*q+_*G,u[3]=A*k+R*L+C*T+N*tt,u[7]=A*B+R*j+C*$+N*rt,u[11]=A*W+R*z+C*X+N*H,u[15]=A*U+R*Y+C*q+N*G,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],f=t[5],d=t[9],p=t[13],g=t[2],x=t[6],y=t[10],v=t[14],b=t[3],E=t[7],S=t[11],_=t[15];return b*(+u*d*x-l*p*x-u*f*y+r*p*y+l*f*v-r*d*v)+E*(+i*d*v-i*p*y+u*h*y-l*h*v+l*p*g-u*d*g)+S*(+i*p*x-i*f*v-u*h*x+r*h*v+u*f*g-r*p*g)+_*(-l*f*g-i*d*x+i*f*y+l*h*x-r*h*y+r*d*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],f=t[5],d=t[6],p=t[7],g=t[8],x=t[9],y=t[10],v=t[11],b=t[12],E=t[13],S=t[14],_=t[15],A=x*S*p-E*y*p+E*d*v-f*S*v-x*d*_+f*y*_,R=b*y*p-g*S*p-b*d*v+h*S*v+g*d*_-h*y*_,C=g*E*p-b*x*p+b*f*v-h*E*v-g*f*_+h*x*_,N=b*x*d-g*E*d-b*f*y+h*E*y+g*f*S-h*x*S,k=i*A+r*R+l*C+u*N;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/k;return t[0]=A*B,t[1]=(E*y*u-x*S*u-E*l*v+r*S*v+x*l*_-r*y*_)*B,t[2]=(f*S*u-E*d*u+E*l*p-r*S*p-f*l*_+r*d*_)*B,t[3]=(x*d*u-f*y*u-x*l*p+r*y*p+f*l*v-r*d*v)*B,t[4]=R*B,t[5]=(g*S*u-b*y*u+b*l*v-i*S*v-g*l*_+i*y*_)*B,t[6]=(b*d*u-h*S*u-b*l*p+i*S*p+h*l*_-i*d*_)*B,t[7]=(h*y*u-g*d*u+g*l*p-i*y*p-h*l*v+i*d*v)*B,t[8]=C*B,t[9]=(b*x*u-g*E*u-b*r*v+i*E*v+g*r*_-i*x*_)*B,t[10]=(h*E*u-b*f*u+b*r*p-i*E*p-h*r*_+i*f*_)*B,t[11]=(g*f*u-h*x*u-g*r*p+i*x*p+h*r*v-i*f*v)*B,t[12]=N*B,t[13]=(g*E*l-b*x*l+b*r*y-i*E*y-g*r*S+i*x*S)*B,t[14]=(b*f*l-h*E*l-b*r*d+i*E*d+h*r*S-i*f*S)*B,t[15]=(h*x*l-g*f*l+g*r*d-i*x*d-h*r*y+i*f*y)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,f=t.y,d=t.z,p=u*h,g=u*f;return this.set(p*h+r,p*f-l*d,p*d+l*f,0,p*f+l*d,g*f+r,g*d-l*h,0,p*d-l*f,g*d+l*h,u*d*d+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,f=i._z,d=i._w,p=u+u,g=h+h,x=f+f,y=u*p,v=u*g,b=u*x,E=h*g,S=h*x,_=f*x,A=d*p,R=d*g,C=d*x,N=r.x,k=r.y,B=r.z;return l[0]=(1-(E+_))*N,l[1]=(v+C)*N,l[2]=(b-R)*N,l[3]=0,l[4]=(v-C)*k,l[5]=(1-(y+_))*k,l[6]=(S+A)*k,l[7]=0,l[8]=(b+R)*B,l[9]=(S-A)*B,l[10]=(1-(y+E))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=rs.set(l[0],l[1],l[2]).length();const h=rs.set(l[4],l[5],l[6]).length(),f=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],fi.copy(this);const p=1/u,g=1/h,x=1/f;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=x,fi.elements[9]*=x,fi.elements[10]*=x,i.setFromRotationMatrix(fi),r.x=u,r.y=h,r.z=f,this}makePerspective(t,i,r,l,u,h,f=ea){const d=this.elements,p=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let v,b;if(f===ea)v=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(f===Tu)v=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=v,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,r,l,u,h,f=ea){const d=this.elements,p=1/(i-t),g=1/(r-l),x=1/(h-u),y=(i+t)*p,v=(r+l)*g;let b,E;if(f===ea)b=(h+u)*x,E=-2*x;else if(f===Tu)b=u*x,E=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-y,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-v,d[2]=0,d[6]=0,d[10]=E,d[14]=-b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const rs=new ft,fi=new je,iS=new ft(0,0,0),aS=new ft(1,1,1),Na=new ft,eu=new ft,Zn=new ft,pg=new je,mg=new No;class wi{constructor(t=0,i=0,r=0,l=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],x=l[2],y=l[6],v=l[10];switch(i){case"XYZ":this._y=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,v),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,v),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(be(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,v),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(d,u));break;case"ZYX":this._y=Math.asin(-be(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,v),this._z=Math.atan2(d,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(f,v));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-g,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return pg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return mg.setFromEuler(this),this.setFromQuaternion(mg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class y0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rS=0;const _g=new ft,ss=new No,ji=new je,nu=new ft,Eo=new ft,sS=new ft,oS=new No,gg=new ft(1,0,0),vg=new ft(0,1,0),xg=new ft(0,0,1),yg={type:"added"},lS={type:"removed"},os={type:"childadded",child:null},Qf={type:"childremoved",child:null};class Cn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new ft,i=new wi,r=new No,l=new ft(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new de}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(gg,t)}rotateY(t){return this.rotateOnAxis(vg,t)}rotateZ(t){return this.rotateOnAxis(xg,t)}translateOnAxis(t,i){return _g.copy(t).applyQuaternion(this.quaternion),this.position.add(_g.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(gg,t)}translateY(t){return this.translateOnAxis(vg,t)}translateZ(t){return this.translateOnAxis(xg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?nu.copy(t):nu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Eo,nu,this.up):ji.lookAt(nu,Eo,this.up),this.quaternion.setFromRotationMatrix(ji),l&&(ji.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(ji),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yg),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(lS),Qf.child=t,this.dispatchEvent(Qf),Qf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yg),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,t,sS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,oS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(f=>({...f})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const x=d[p];u(t.shapes,x)}else u(t.shapes,d)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(u(t.materials,this.material[d]));l.material=f}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];l.animations.push(u(t.animations,d))}}if(i){const f=h(t.geometries),d=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),y=h(t.skeletons),v=h(t.animations),b=h(t.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),v.length>0&&(r.animations=v),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(f){const d=[];for(const p in f){const g=f[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new ft(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new ft,Ki=new ft,Jf=new ft,Qi=new ft,ls=new ft,us=new ft,Sg=new ft,$f=new ft,th=new ft,eh=new ft,nh=new ke,ih=new ke,ah=new ke;class di{constructor(t=new ft,i=new ft,r=new ft){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),hi.subVectors(t,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){hi.subVectors(l,i),Ki.subVectors(r,i),Jf.subVectors(t,i);const h=hi.dot(hi),f=hi.dot(Ki),d=hi.dot(Jf),p=Ki.dot(Ki),g=Ki.dot(Jf),x=h*p-f*f;if(x===0)return u.set(0,0,0),null;const y=1/x,v=(p*d-f*g)*y,b=(h*g-f*d)*y;return u.set(1-v-b,b,v)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,i,r,l,u,h,f,d){return this.getBarycoord(t,i,r,l,Qi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(u,Qi.x),d.addScaledVector(h,Qi.y),d.addScaledVector(f,Qi.z),d)}static getInterpolatedAttribute(t,i,r,l,u,h){return nh.setScalar(0),ih.setScalar(0),ah.setScalar(0),nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,r),ah.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(nh,u.x),h.addScaledVector(ih,u.y),h.addScaledVector(ah,u.z),h}static isFrontFacing(t,i,r,l){return hi.subVectors(r,i),Ki.subVectors(t,i),hi.cross(Ki).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),hi.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return di.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return di.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,f;ls.subVectors(l,r),us.subVectors(u,r),$f.subVectors(t,r);const d=ls.dot($f),p=us.dot($f);if(d<=0&&p<=0)return i.copy(r);th.subVectors(t,l);const g=ls.dot(th),x=us.dot(th);if(g>=0&&x<=g)return i.copy(l);const y=d*x-g*p;if(y<=0&&d>=0&&g<=0)return h=d/(d-g),i.copy(r).addScaledVector(ls,h);eh.subVectors(t,u);const v=ls.dot(eh),b=us.dot(eh);if(b>=0&&v<=b)return i.copy(u);const E=v*p-d*b;if(E<=0&&p>=0&&b<=0)return f=p/(p-b),i.copy(r).addScaledVector(us,f);const S=g*b-v*x;if(S<=0&&x-g>=0&&v-b>=0)return Sg.subVectors(u,l),f=(x-g)/(x-g+(v-b)),i.copy(l).addScaledVector(Sg,f);const _=1/(S+E+y);return h=E*_,f=y*_,i.copy(r).addScaledVector(ls,h).addScaledVector(us,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const S0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},iu={h:0,s:0,l:0};function rh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class De{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=Xy(t,1),i=be(i,0,1),r=be(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=rh(h,u,t+1/3),this.g=rh(h,u,t),this.b=rh(h,u,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],f=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ri){const r=S0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=na(t.r),this.g=na(t.g),this.b=na(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Ce.workingToColorSpace(Rn.copy(this),t),Math.round(be(Rn.r*255,0,255))*65536+Math.round(be(Rn.g*255,0,255))*256+Math.round(be(Rn.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(r,l,u),f=Math.min(r,l,u);let d,p;const g=(f+h)/2;if(f===h)d=0,p=0;else{const x=h-f;switch(p=g<=.5?x/(h+f):x/(2-h-f),h){case r:d=(l-u)/x+(l<u?6:0);break;case l:d=(u-r)/x+2;break;case u:d=(r-l)/x+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=ri){Ce.workingToColorSpace(Rn.copy(this),t);const i=Rn.r,r=Rn.g,l=Rn.b;return t!==ri?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+t,Oa.s+i,Oa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Oa),t.getHSL(iu);const r=kf(Oa.h,iu.h,i),l=kf(Oa.s,iu.s,i),u=kf(Oa.l,iu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new De;De.NAMES=S0;let uS=0;class Po extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=ms,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=xh,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(r.blending=this.blending),this.side!==Ga&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vh&&(r.blendSrc=this.blendSrc),this.blendDst!==xh&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==og&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const f in u){const d=u[f];delete d.metadata,h.push(d)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class M0 extends Po{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new ft,au=new Ne;let cS=0;class bi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=lg,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)au.fromBufferAttribute(this,i),au.applyMatrix3(t),this.setXY(i,au.x,au.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=yo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=In(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=yo(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=yo(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=yo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=yo(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lg&&(t.usage=this.usage),t}}class E0 extends bi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class b0 extends bi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ti extends bi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let fS=0;const ai=new je,sh=new Cn,cs=new ft,jn=new Oo,bo=new Oo,gn=new ft;class Va extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(v0(t)?b0:E0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new de().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,i,r){return ai.makeTranslation(t,i,r),this.applyMatrix4(ai),this}scale(t,i,r){return ai.makeScale(t,i,r),this.applyMatrix4(ai),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ti(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ft(-1/0,-1/0,-1/0),new ft(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new md);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ft,1/0);return}if(t){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const f=i[u];bo.setFromBufferAttribute(f),this.morphTargetsRelative?(gn.addVectors(jn.min,bo.min),jn.expandByPoint(gn),gn.addVectors(jn.max,bo.max),jn.expandByPoint(gn)):(jn.expandByPoint(bo.min),jn.expandByPoint(bo.max))}jn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)gn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const f=i[u],d=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)gn.fromBufferAttribute(f,p),d&&(cs.fromBufferAttribute(t,p),gn.add(cs)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),f=[],d=[];for(let W=0;W<r.count;W++)f[W]=new ft,d[W]=new ft;const p=new ft,g=new ft,x=new ft,y=new Ne,v=new Ne,b=new Ne,E=new ft,S=new ft;function _(W,U,L){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,U),x.fromBufferAttribute(r,L),y.fromBufferAttribute(u,W),v.fromBufferAttribute(u,U),b.fromBufferAttribute(u,L),g.sub(p),x.sub(p),v.sub(y),b.sub(y);const j=1/(v.x*b.y-b.x*v.y);isFinite(j)&&(E.copy(g).multiplyScalar(b.y).addScaledVector(x,-v.y).multiplyScalar(j),S.copy(x).multiplyScalar(v.x).addScaledVector(g,-b.x).multiplyScalar(j),f[W].add(E),f[U].add(E),f[L].add(E),d[W].add(S),d[U].add(S),d[L].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let W=0,U=A.length;W<U;++W){const L=A[W],j=L.start,z=L.count;for(let Y=j,T=j+z;Y<T;Y+=3)_(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const R=new ft,C=new ft,N=new ft,k=new ft;function B(W){N.fromBufferAttribute(l,W),k.copy(N);const U=f[W];R.copy(U),R.sub(N.multiplyScalar(N.dot(U))).normalize(),C.crossVectors(k,U);const j=C.dot(d[W])<0?-1:1;h.setXYZW(W,R.x,R.y,R.z,j)}for(let W=0,U=A.length;W<U;++W){const L=A[W],j=L.start,z=L.count;for(let Y=j,T=j+z;Y<T;Y+=3)B(t.getX(Y+0)),B(t.getX(Y+1)),B(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,v=r.count;y<v;y++)r.setXYZ(y,0,0,0);const l=new ft,u=new ft,h=new ft,f=new ft,d=new ft,p=new ft,g=new ft,x=new ft;if(t)for(let y=0,v=t.count;y<v;y+=3){const b=t.getX(y+0),E=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,S),f.add(g),d.add(g),p.add(g),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,v=i.count;y<v;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(f,d){const p=f.array,g=f.itemSize,x=f.normalized,y=new p.constructor(d.length*g);let v=0,b=0;for(let E=0,S=d.length;E<S;E++){f.isInterleavedBufferAttribute?v=d[E]*f.data.stride+f.offset:v=d[E]*g;for(let _=0;_<g;_++)y[b++]=p[v++]}return new bi(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Va,r=this.index.array,l=this.attributes;for(const f in l){const d=l[f],p=t(d,r);i.setAttribute(f,p)}const u=this.morphAttributes;for(const f in u){const d=[],p=u[f];for(let g=0,x=p.length;g<x;g++){const y=p[g],v=t(y,r);d.push(v)}i.morphAttributes[f]=d}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let f=0,d=h.length;f<d;f++){const p=h[f];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const d in r){const p=r[d];t.data.attributes[d]=p.toJSON(t.data)}const l={};let u=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let x=0,y=p.length;x<y;x++){const v=p[x];g.push(v.toJSON(t.data))}g.length>0&&(l[d]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let y=0,v=x.length;y<v;y++)g.push(x[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mg=new je,fr=new nS,ru=new md,Eg=new ft,su=new ft,ou=new ft,lu=new ft,oh=new ft,uu=new ft,bg=new ft,cu=new ft;class si extends Cn{constructor(t=new Va,i=new M0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const f=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const f=this.morphTargetInfluences;if(u&&f){uu.set(0,0,0);for(let d=0,p=u.length;d<p;d++){const g=f[d],x=u[d];g!==0&&(oh.fromBufferAttribute(x,t),h?uu.addScaledVector(oh,g):uu.addScaledVector(oh.sub(i),g))}i.add(uu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(u),fr.copy(t.ray).recast(t.near),!(ru.containsPoint(fr.origin)===!1&&(fr.intersectSphere(ru,Eg)===null||fr.origin.distanceToSquared(Eg)>(t.far-t.near)**2))&&(Mg.copy(u).invert(),fr.copy(t.ray).applyMatrix4(Mg),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,fr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,f=u.index,d=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,y=u.groups,v=u.drawRange;if(f!==null)if(Array.isArray(h))for(let b=0,E=y.length;b<E;b++){const S=y[b],_=h[S.materialIndex],A=Math.max(S.start,v.start),R=Math.min(f.count,Math.min(S.start+S.count,v.start+v.count));for(let C=A,N=R;C<N;C+=3){const k=f.getX(C),B=f.getX(C+1),W=f.getX(C+2);l=fu(this,_,t,r,p,g,x,k,B,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,v.start),E=Math.min(f.count,v.start+v.count);for(let S=b,_=E;S<_;S+=3){const A=f.getX(S),R=f.getX(S+1),C=f.getX(S+2);l=fu(this,h,t,r,p,g,x,A,R,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(d!==void 0)if(Array.isArray(h))for(let b=0,E=y.length;b<E;b++){const S=y[b],_=h[S.materialIndex],A=Math.max(S.start,v.start),R=Math.min(d.count,Math.min(S.start+S.count,v.start+v.count));for(let C=A,N=R;C<N;C+=3){const k=C,B=C+1,W=C+2;l=fu(this,_,t,r,p,g,x,k,B,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,v.start),E=Math.min(d.count,v.start+v.count);for(let S=b,_=E;S<_;S+=3){const A=S,R=S+1,C=S+2;l=fu(this,h,t,r,p,g,x,A,R,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function hS(o,t,i,r,l,u,h,f){let d;if(t.side===Bn?d=r.intersectTriangle(h,u,l,!0,f):d=r.intersectTriangle(l,u,h,t.side===Ga,f),d===null)return null;cu.copy(f),cu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(cu);return p<i.near||p>i.far?null:{distance:p,point:cu.clone(),object:o}}function fu(o,t,i,r,l,u,h,f,d,p){o.getVertexPosition(f,su),o.getVertexPosition(d,ou),o.getVertexPosition(p,lu);const g=hS(o,t,i,r,su,ou,lu,bg);if(g){const x=new ft;di.getBarycoord(bg,su,ou,lu,x),l&&(g.uv=di.getInterpolatedAttribute(l,f,d,p,x,new Ne)),u&&(g.uv1=di.getInterpolatedAttribute(u,f,d,p,x,new Ne)),h&&(g.normal=di.getInterpolatedAttribute(h,f,d,p,x,new ft),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:f,b:d,c:p,normal:new ft,materialIndex:0};di.getNormal(su,ou,lu,y.normal),g.face=y,g.barycoord=x}return g}class zo extends Va{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const f=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const d=[],p=[],g=[],x=[];let y=0,v=0;b("z","y","x",-1,-1,r,i,t,h,u,0),b("z","y","x",1,-1,r,i,-t,h,u,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(d),this.setAttribute("position",new Ti(p,3)),this.setAttribute("normal",new Ti(g,3)),this.setAttribute("uv",new Ti(x,2));function b(E,S,_,A,R,C,N,k,B,W,U){const L=C/B,j=N/W,z=C/2,Y=N/2,T=k/2,$=B+1,X=W+1;let q=0,tt=0;const rt=new ft;for(let H=0;H<X;H++){const G=H*j-Y;for(let Z=0;Z<$;Z++){const vt=Z*L-z;rt[E]=vt*A,rt[S]=G*R,rt[_]=T,p.push(rt.x,rt.y,rt.z),rt[E]=0,rt[S]=0,rt[_]=k>0?1:-1,g.push(rt.x,rt.y,rt.z),x.push(Z/B),x.push(1-H/W),q+=1}}for(let H=0;H<W;H++)for(let G=0;G<B;G++){const Z=y+G+$*H,vt=y+G+$*(H+1),J=y+(G+1)+$*(H+1),at=y+(G+1)+$*H;d.push(Z,vt,at),d.push(vt,J,at),tt+=6}f.addGroup(v,tt,U),v+=tt,y+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(o){const t={};for(let i=0;i<o.length;i++){const r=Ms(o[i]);for(const l in r)t[l]=r[l]}return t}function dS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function T0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const pS={clone:Ms,merge:Un};var mS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends Po{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mS,this.fragmentShader=_S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=dS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class A0 extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ea}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new ft,Tg=new Ne,Ag=new Ne;class Kn extends A0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=id*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z)}getViewSize(t,i){return this.getViewBounds(t,Tg,Ag),i.subVectors(Ag,Tg)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Hf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const d=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/d,i-=h.offsetY*r/p,l*=h.width/d,r*=h.height/p}const f=this.filmOffset;f!==0&&(u+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const fs=-90,hs=1;class gS extends Cn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Kn(fs,hs,t,i);l.layers=this.layers,this.add(l);const u=new Kn(fs,hs,t,i);u.layers=this.layers,this.add(u);const h=new Kn(fs,hs,t,i);h.layers=this.layers,this.add(h);const f=new Kn(fs,hs,t,i);f.layers=this.layers,this.add(f);const d=new Kn(fs,hs,t,i);d.layers=this.layers,this.add(d);const p=new Kn(fs,hs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,f,d]=i;for(const p of i)this.remove(p);if(t===ea)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Tu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,f,d,p,g]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,f),t.setRenderTarget(r,3,l),t.render(i,d),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=E,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,y,v),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class w0 extends Fn{constructor(t=[],i=xs,r,l,u,h,f,d,p,g){super(t,i,r,l,u,h,f,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vS extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new w0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new zo(5,5,5),u=new ia({name:"CubemapFromEquirect",uniforms:Ms(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Ha});u.uniforms.tEquirect.value=i;const h=new si(l,u),f=i.minFilter;return i.minFilter===yr&&(i.minFilter=Ei),new gS(1,10,this).update(t,h),i.minFilter=f,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class hu extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ft,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ft),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ft,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ft),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const E of t.hand.values()){const S=i.getJointPose(E,r),_=this._getHandJoint(p,E);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=g.position.distanceTo(x.position),v=.02,b=.005;p.inputState.pinching&&y>v+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=v-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return f!==null&&(f.visible=l!==null),d!==null&&(d.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new hu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class yS extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const uh=new ft,SS=new ft,MS=new de;class mr{constructor(t=new ft(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=uh.subVectors(r,i).cross(SS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(uh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||MS.getNormalMatrix(t),l=this.coplanarPoint(uh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new md,du=new ft;class _d{constructor(t=new mr,i=new mr,r=new mr,l=new mr,u=new mr,h=new mr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const f=this.planes;return f[0].copy(t),f[1].copy(i),f[2].copy(r),f[3].copy(l),f[4].copy(u),f[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ea){const r=this.planes,l=t.elements,u=l[0],h=l[1],f=l[2],d=l[3],p=l[4],g=l[5],x=l[6],y=l[7],v=l[8],b=l[9],E=l[10],S=l[11],_=l[12],A=l[13],R=l[14],C=l[15];if(r[0].setComponents(d-u,y-p,S-v,C-_).normalize(),r[1].setComponents(d+u,y+p,S+v,C+_).normalize(),r[2].setComponents(d+h,y+g,S+b,C+A).normalize(),r[3].setComponents(d-h,y-g,S-b,C-A).normalize(),r[4].setComponents(d-f,y-x,S-E,C-R).normalize(),i===ea)r[5].setComponents(d+f,y+x,S+E,C+R).normalize();else if(i===Tu)r[5].setComponents(f,x,E,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(du.x=l.normal.x>0?t.max.x:t.min.x,du.y=l.normal.y>0?t.max.y:t.min.y,du.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(du)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R0 extends Fn{constructor(t,i,r=Sr,l,u,h,f=mi,d=mi,p,g=Co,x=1){if(g!==Co&&g!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:x};super(y,l,u,h,f,d,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Io extends Va{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,f=Math.floor(r),d=Math.floor(l),p=f+1,g=d+1,x=t/f,y=i/d,v=[],b=[],E=[],S=[];for(let _=0;_<g;_++){const A=_*y-h;for(let R=0;R<p;R++){const C=R*x-u;b.push(C,-A,0),E.push(0,0,1),S.push(R/f),S.push(1-_/d)}}for(let _=0;_<d;_++)for(let A=0;A<f;A++){const R=A+p*_,C=A+p*(_+1),N=A+1+p*(_+1),k=A+1+p*_;v.push(R,C,k),v.push(C,N,k)}this.setIndex(v),this.setAttribute("position",new Ti(b,3)),this.setAttribute("normal",new Ti(E,3)),this.setAttribute("uv",new Ti(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.widthSegments,t.heightSegments)}}class wu extends Va{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:f},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const d=Math.min(h+f,Math.PI);let p=0;const g=[],x=new ft,y=new ft,v=[],b=[],E=[],S=[];for(let _=0;_<=r;_++){const A=[],R=_/r;let C=0;_===0&&h===0?C=.5/i:_===r&&d===Math.PI&&(C=-.5/i);for(let N=0;N<=i;N++){const k=N/i;x.x=-t*Math.cos(l+k*u)*Math.sin(h+R*f),x.y=t*Math.cos(h+R*f),x.z=t*Math.sin(l+k*u)*Math.sin(h+R*f),b.push(x.x,x.y,x.z),y.copy(x).normalize(),E.push(y.x,y.y,y.z),S.push(k+C,1-R),A.push(p++)}g.push(A)}for(let _=0;_<r;_++)for(let A=0;A<i;A++){const R=g[_][A+1],C=g[_][A],N=g[_+1][A],k=g[_+1][A+1];(_!==0||h>0)&&v.push(R,C,k),(_!==r-1||d<Math.PI)&&v.push(C,N,k)}this.setIndex(v),this.setAttribute("position",new Ti(b,3)),this.setAttribute("normal",new Ti(E,3)),this.setAttribute("uv",new Ti(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wg extends Po{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_0,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ES extends Po{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bS extends Po{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gd extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const ch=new je,Rg=new ft,Cg=new ft;class C0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Rg.setFromMatrixPosition(t.matrixWorld),i.position.copy(Rg),Cg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Cg),i.updateMatrixWorld(),ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Dg=new je,To=new ft,fh=new ft;class TS extends C0{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new ft(1,0,0),new ft(-1,0,0),new ft(0,0,1),new ft(0,0,-1),new ft(0,1,0),new ft(0,-1,0)],this._cubeUps=[new ft(0,1,0),new ft(0,1,0),new ft(0,1,0),new ft(0,1,0),new ft(0,0,1),new ft(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),To.setFromMatrixPosition(t.matrixWorld),r.position.copy(To),fh.copy(r.position),fh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(fh),r.updateMatrixWorld(),l.makeTranslation(-To.x,-To.y,-To.z),Dg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dg)}}class AS extends gd{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new TS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class D0 extends A0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,f=l+i,d=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class wS extends C0{constructor(){super(new D0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RS extends gd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new wS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class CS extends gd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class DS extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Ug(o,t,i,r){const l=US(r);switch(i){case f0:return o*t;case d0:return o*t/l.components*l.byteLength;case fd:return o*t/l.components*l.byteLength;case p0:return o*t*2/l.components*l.byteLength;case hd:return o*t*2/l.components*l.byteLength;case h0:return o*t*3/l.components*l.byteLength;case pi:return o*t*4/l.components*l.byteLength;case dd:return o*t*4/l.components*l.byteLength;case vu:case xu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case yu:case Su:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Lh:case Oh:return Math.max(o,16)*Math.max(t,8)/4;case Uh:case Nh:return Math.max(o,8)*Math.max(t,8)/2;case Ph:case zh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case qh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Mu:case Jh:case $h:return Math.ceil(o/4)*Math.ceil(t/4)*16;case m0:case td:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ed:case nd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function US(o){switch(o){case Ai:case l0:return{byteLength:1,components:1};case wo:case u0:case Uo:return{byteLength:2,components:1};case ud:case cd:return{byteLength:2,components:4};case Sr:case ld:case ta:return{byteLength:4,components:1};case c0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U0(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function LS(o){const t=new WeakMap;function i(f,d){const p=f.array,g=f.usage,x=p.byteLength,y=o.createBuffer();o.bindBuffer(d,y),o.bufferData(d,p,g),f.onUploadCallback();let v;if(p instanceof Float32Array)v=o.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=o.SHORT;else if(p instanceof Uint32Array)v=o.UNSIGNED_INT;else if(p instanceof Int32Array)v=o.INT;else if(p instanceof Int8Array)v=o.BYTE;else if(p instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,d,p){const g=d.array,x=d.updateRanges;if(o.bindBuffer(p,f),x.length===0)o.bufferSubData(p,0,g);else{x.sort((v,b)=>v.start-b.start);let y=0;for(let v=1;v<x.length;v++){const b=x[y],E=x[v];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++y,x[y]=E)}x.length=y+1;for(let v=0,b=x.length;v<b;v++){const E=x[v];o.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(o.deleteBuffer(d.buffer),t.delete(f))}function h(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,i(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,d),p.version=f.version}}return{get:l,remove:u,update:h}}var NS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,GS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uM="gl_FragColor = linearToOutputTexel( gl_FragColor );",cM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,UM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,UE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:NS,alphahash_pars_fragment:OS,alphamap_fragment:PS,alphamap_pars_fragment:zS,alphatest_fragment:IS,alphatest_pars_fragment:BS,aomap_fragment:FS,aomap_pars_fragment:HS,batching_pars_vertex:kS,batching_vertex:GS,begin_vertex:VS,beginnormal_vertex:XS,bsdfs:WS,iridescence_fragment:qS,bumpmap_pars_fragment:YS,clipping_planes_fragment:ZS,clipping_planes_pars_fragment:jS,clipping_planes_pars_vertex:KS,clipping_planes_vertex:QS,color_fragment:JS,color_pars_fragment:$S,color_pars_vertex:tM,color_vertex:eM,common:nM,cube_uv_reflection_fragment:iM,defaultnormal_vertex:aM,displacementmap_pars_vertex:rM,displacementmap_vertex:sM,emissivemap_fragment:oM,emissivemap_pars_fragment:lM,colorspace_fragment:uM,colorspace_pars_fragment:cM,envmap_fragment:fM,envmap_common_pars_fragment:hM,envmap_pars_fragment:dM,envmap_pars_vertex:pM,envmap_physical_pars_fragment:TM,envmap_vertex:mM,fog_vertex:_M,fog_pars_vertex:gM,fog_fragment:vM,fog_pars_fragment:xM,gradientmap_pars_fragment:yM,lightmap_pars_fragment:SM,lights_lambert_fragment:MM,lights_lambert_pars_fragment:EM,lights_pars_begin:bM,lights_toon_fragment:AM,lights_toon_pars_fragment:wM,lights_phong_fragment:RM,lights_phong_pars_fragment:CM,lights_physical_fragment:DM,lights_physical_pars_fragment:UM,lights_fragment_begin:LM,lights_fragment_maps:NM,lights_fragment_end:OM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:zM,logdepthbuf_pars_vertex:IM,logdepthbuf_vertex:BM,map_fragment:FM,map_pars_fragment:HM,map_particle_fragment:kM,map_particle_pars_fragment:GM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:XM,morphinstance_vertex:WM,morphcolor_vertex:qM,morphnormal_vertex:YM,morphtarget_pars_vertex:ZM,morphtarget_vertex:jM,normal_fragment_begin:KM,normal_fragment_maps:QM,normal_pars_fragment:JM,normal_pars_vertex:$M,normal_vertex:tE,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:aE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:oE,premultiplied_alpha_fragment:lE,project_vertex:uE,dithering_fragment:cE,dithering_pars_fragment:fE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:_E,shadowmask_pars_fragment:gE,skinbase_vertex:vE,skinning_pars_vertex:xE,skinning_vertex:yE,skinnormal_vertex:SE,specularmap_fragment:ME,specularmap_pars_fragment:EE,tonemapping_fragment:bE,tonemapping_pars_fragment:TE,transmission_fragment:AE,transmission_pars_fragment:wE,uv_pars_fragment:RE,uv_pars_vertex:CE,uv_vertex:DE,worldpos_vertex:UE,background_vert:LE,background_frag:NE,backgroundCube_vert:OE,backgroundCube_frag:PE,cube_vert:zE,cube_frag:IE,depth_vert:BE,depth_frag:FE,distanceRGBA_vert:HE,distanceRGBA_frag:kE,equirect_vert:GE,equirect_frag:VE,linedashed_vert:XE,linedashed_frag:WE,meshbasic_vert:qE,meshbasic_frag:YE,meshlambert_vert:ZE,meshlambert_frag:jE,meshmatcap_vert:KE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:$E,meshphong_vert:t1,meshphong_frag:e1,meshphysical_vert:n1,meshphysical_frag:i1,meshtoon_vert:a1,meshtoon_frag:r1,points_vert:s1,points_frag:o1,shadow_vert:l1,shadow_frag:u1,sprite_vert:c1,sprite_frag:f1},Vt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Mi={basic:{uniforms:Un([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Un([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Un([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Un([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Un([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new De(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Un([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Un([Vt.points,Vt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Un([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Un([Vt.common,Vt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Un([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Un([Vt.sprite,Vt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Un([Vt.common,Vt.displacementmap,{referencePosition:{value:new ft},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Un([Vt.lights,Vt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Mi.physical={uniforms:Un([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const pu={r:0,b:0,g:0},dr=new wi,h1=new je;function d1(o,t,i,r,l,u,h){const f=new De(0);let d=u===!0?0:1,p,g,x=null,y=0,v=null;function b(R){let C=R.isScene===!0?R.background:null;return C&&C.isTexture&&(C=(R.backgroundBlurriness>0?i:t).get(C)),C}function E(R){let C=!1;const N=b(R);N===null?_(f,d):N&&N.isColor&&(_(N,1),C=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(R,C){const N=b(C);N&&(N.isCubeTexture||N.mapping===Ru)?(g===void 0&&(g=new si(new zo(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:Ms(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),dr.copy(C.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(h1.makeRotationFromEuler(dr)),g.material.toneMapped=Ce.getTransfer(N.colorSpace)!==He,(x!==N||y!==N.version||v!==o.toneMapping)&&(g.material.needsUpdate=!0,x=N,y=N.version,v=o.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new si(new Io(2,2),new ia({name:"BackgroundMaterial",uniforms:Ms(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(N.colorSpace)!==He,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||y!==N.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,x=N,y=N.version,v=o.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function _(R,C){R.getRGB(pu,T0(o)),r.buffers.color.setClear(pu.r,pu.g,pu.b,C,h)}function A(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,C=1){f.set(R),d=C,_(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,_(f,d)},render:E,addToRenderList:S,dispose:A}}function p1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,h=!1;function f(L,j,z,Y,T){let $=!1;const X=x(Y,z,j);u!==X&&(u=X,p(u.object)),$=v(L,Y,z,T),$&&b(L,Y,z,T),T!==null&&t.update(T,o.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,C(L,j,z,Y),T!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(T).buffer))}function d(){return o.createVertexArray()}function p(L){return o.bindVertexArray(L)}function g(L){return o.deleteVertexArray(L)}function x(L,j,z){const Y=z.wireframe===!0;let T=r[L.id];T===void 0&&(T={},r[L.id]=T);let $=T[j.id];$===void 0&&($={},T[j.id]=$);let X=$[Y];return X===void 0&&(X=y(d()),$[Y]=X),X}function y(L){const j=[],z=[],Y=[];for(let T=0;T<i;T++)j[T]=0,z[T]=0,Y[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:z,attributeDivisors:Y,object:L,attributes:{},index:null}}function v(L,j,z,Y){const T=u.attributes,$=j.attributes;let X=0;const q=z.getAttributes();for(const tt in q)if(q[tt].location>=0){const H=T[tt];let G=$[tt];if(G===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),H===void 0||H.attribute!==G||G&&H.data!==G.data)return!0;X++}return u.attributesNum!==X||u.index!==Y}function b(L,j,z,Y){const T={},$=j.attributes;let X=0;const q=z.getAttributes();for(const tt in q)if(q[tt].location>=0){let H=$[tt];H===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const G={};G.attribute=H,H&&H.data&&(G.data=H.data),T[tt]=G,X++}u.attributes=T,u.attributesNum=X,u.index=Y}function E(){const L=u.newAttributes;for(let j=0,z=L.length;j<z;j++)L[j]=0}function S(L){_(L,0)}function _(L,j){const z=u.newAttributes,Y=u.enabledAttributes,T=u.attributeDivisors;z[L]=1,Y[L]===0&&(o.enableVertexAttribArray(L),Y[L]=1),T[L]!==j&&(o.vertexAttribDivisor(L,j),T[L]=j)}function A(){const L=u.newAttributes,j=u.enabledAttributes;for(let z=0,Y=j.length;z<Y;z++)j[z]!==L[z]&&(o.disableVertexAttribArray(z),j[z]=0)}function R(L,j,z,Y,T,$,X){X===!0?o.vertexAttribIPointer(L,j,z,T,$):o.vertexAttribPointer(L,j,z,Y,T,$)}function C(L,j,z,Y){E();const T=Y.attributes,$=z.getAttributes(),X=j.defaultAttributeValues;for(const q in $){const tt=$[q];if(tt.location>=0){let rt=T[q];if(rt===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor)),rt!==void 0){const H=rt.normalized,G=rt.itemSize,Z=t.get(rt);if(Z===void 0)continue;const vt=Z.buffer,J=Z.type,at=Z.bytesPerElement,At=J===o.INT||J===o.UNSIGNED_INT||rt.gpuType===ld;if(rt.isInterleavedBufferAttribute){const Nt=rt.data,Ct=Nt.stride,Wt=rt.offset;if(Nt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<tt.locationSize;Yt++)_(tt.location+Yt,Nt.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Yt=0;Yt<tt.locationSize;Yt++)S(tt.location+Yt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Yt=0;Yt<tt.locationSize;Yt++)R(tt.location+Yt,G/tt.locationSize,J,H,Ct*at,(Wt+G/tt.locationSize*Yt)*at,At)}else{if(rt.isInstancedBufferAttribute){for(let Nt=0;Nt<tt.locationSize;Nt++)_(tt.location+Nt,rt.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Nt=0;Nt<tt.locationSize;Nt++)S(tt.location+Nt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Nt=0;Nt<tt.locationSize;Nt++)R(tt.location+Nt,G/tt.locationSize,J,H,G*at,G/tt.locationSize*Nt*at,At)}}else if(X!==void 0){const H=X[q];if(H!==void 0)switch(H.length){case 2:o.vertexAttrib2fv(tt.location,H);break;case 3:o.vertexAttrib3fv(tt.location,H);break;case 4:o.vertexAttrib4fv(tt.location,H);break;default:o.vertexAttrib1fv(tt.location,H)}}}}A()}function N(){W();for(const L in r){const j=r[L];for(const z in j){const Y=j[z];for(const T in Y)g(Y[T].object),delete Y[T];delete j[z]}delete r[L]}}function k(L){if(r[L.id]===void 0)return;const j=r[L.id];for(const z in j){const Y=j[z];for(const T in Y)g(Y[T].object),delete Y[T];delete j[z]}delete r[L.id]}function B(L){for(const j in r){const z=r[j];if(z[L.id]===void 0)continue;const Y=z[L.id];for(const T in Y)g(Y[T].object),delete Y[T];delete z[L.id]}}function W(){U(),h=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:U,dispose:N,releaseStatesOfGeometry:k,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:S,disableUnusedAttributes:A}}function m1(o,t,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(o.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function f(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let v=0;for(let b=0;b<x;b++)v+=g[b];i.update(v,r,1)}function d(p,g,x,y){if(x===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<p.length;b++)h(p[b],g[b],y[b]);else{v.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,x);let b=0;for(let E=0;E<x;E++)b+=g[E]*y[E];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function _1(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==pi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const W=B===Uo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Ai&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ta&&!W)}function d(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),R=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=b>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:d,textureFormatReadable:h,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:v,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:C,vertexTextures:N,maxSamples:k}}function g1(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new mr,f=new de,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const v=x.length!==0||y||r!==0||l;return l=y,r=x.length,v},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,v){const b=x.clippingPlanes,E=x.clipIntersection,S=x.clipShadows,_=o.get(x);if(!l||b===null||b.length===0||u&&!S)u?g(null):p();else{const A=u?0:r,R=A*4;let C=_.clippingState||null;d.value=C,C=g(b,y,R,v);for(let N=0;N!==R;++N)C[N]=i[N];_.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function p(){d.value!==i&&(d.value=i,d.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,y,v,b){const E=x!==null?x.length:0;let S=null;if(E!==0){if(S=d.value,b!==!0||S===null){const _=v+E*4,A=y.matrixWorldInverse;f.getNormalMatrix(A),(S===null||S.length<_)&&(S=new Float32Array(_));for(let R=0,C=v;R!==E;++R,C+=4)h.copy(x[R]).applyMatrix4(A,f),h.normal.toArray(S,C),S[C+3]=h.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,S}}function v1(o){let t=new WeakMap;function i(h,f){return f===wh?h.mapping=xs:f===Rh&&(h.mapping=ys),h}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===wh||f===Rh)if(t.has(h)){const d=t.get(h).texture;return i(d,h.mapping)}else{const d=h.image;if(d&&d.height>0){const p=new vS(d.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const f=h.target;f.removeEventListener("dispose",l);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const ps=4,Lg=[.125,.215,.35,.446,.526,.582],vr=20,hh=new D0,Ng=new De;let dh=null,ph=0,mh=0,_h=!1;const _r=(1+Math.sqrt(5))/2,ds=1/_r,Og=[new ft(-_r,ds,0),new ft(_r,ds,0),new ft(-ds,0,_r),new ft(ds,0,_r),new ft(0,_r,-ds),new ft(0,_r,ds),new ft(-1,1,-1),new ft(1,1,-1),new ft(-1,1,1),new ft(1,1,1)],x1=new ft;class Pg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:f=x1}=u;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,r,l,d,f),i>0&&this._blur(d,0,0,i),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=_h,t.scissorTest=!1,mu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===xs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Uo,format:pi,colorSpace:Ss,depthBuffer:!1},l=zg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y1(u)),this._blurMaterial=S1(u,t,i)}return l}_compileMaterial(t){const i=new si(this._lodPlanes[0],t);this._renderer.compile(i,hh)}_sceneToCubeUV(t,i,r,l,u){const d=new Kn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,v=x.toneMapping;x.getClearColor(Ng),x.toneMapping=ka,x.autoClear=!1;const b=new M0({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),E=new si(new zo,b);let S=!1;const _=t.background;_?_.isColor&&(b.color.copy(_),t.background=null,S=!0):(b.color.copy(Ng),S=!0);for(let A=0;A<6;A++){const R=A%3;R===0?(d.up.set(0,p[A],0),d.position.set(u.x,u.y,u.z),d.lookAt(u.x+g[A],u.y,u.z)):R===1?(d.up.set(0,0,p[A]),d.position.set(u.x,u.y,u.z),d.lookAt(u.x,u.y+g[A],u.z)):(d.up.set(0,p[A],0),d.position.set(u.x,u.y,u.z),d.lookAt(u.x,u.y,u.z+g[A]));const C=this._cubeSize;mu(l,R*C,A>2?C:0,C,C),x.setRenderTarget(l),S&&x.render(E,d),x.render(t,d)}E.geometry.dispose(),E.material.dispose(),x.toneMapping=v,x.autoClear=y,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===xs||t.mapping===ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new si(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=t;const d=this._cubeSize;mu(i,0,0,3*d,2*d),r.setRenderTarget(i),r.render(h,hh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=Og[(l-u-1)%Og.length];this._blur(t,u-1,u,h,f)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,f){const d=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new si(this._lodPlanes[l],p),y=p.uniforms,v=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*v):2*Math.PI/(2*vr-1),E=u/b,S=isFinite(u)?1+Math.floor(g*E):vr;S>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vr}`);const _=[];let A=0;for(let B=0;B<vr;++B){const W=B/E,U=Math.exp(-W*W/2);_.push(U),B===0?A+=U:B<S&&(A+=2*U)}for(let B=0;B<_.length;B++)_[B]=_[B]/A;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=h==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:R}=this;y.dTheta.value=b,y.mipInt.value=R-r;const C=this._sizeLods[l],N=3*C*(l>R-ps?l-R+ps:0),k=4*(this._cubeSize-C);mu(i,N,k,3*C,2*C),d.setRenderTarget(i),d.render(x,hh)}}function y1(o){const t=[],i=[],r=[];let l=o;const u=o-ps+1+Lg.length;for(let h=0;h<u;h++){const f=Math.pow(2,l);i.push(f);let d=1/f;h>o-ps?d=Lg[h-o+ps-1]:h===0&&(d=0),r.push(d);const p=1/(f-2),g=-p,x=1+p,y=[g,g,x,g,x,x,g,g,x,x,g,x],v=6,b=6,E=3,S=2,_=1,A=new Float32Array(E*b*v),R=new Float32Array(S*b*v),C=new Float32Array(_*b*v);for(let k=0;k<v;k++){const B=k%3*2/3-1,W=k>2?0:-1,U=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];A.set(U,E*b*k),R.set(y,S*b*k);const L=[k,k,k,k,k,k];C.set(L,_*b*k)}const N=new Va;N.setAttribute("position",new bi(A,E)),N.setAttribute("uv",new bi(R,S)),N.setAttribute("faceIndex",new bi(C,_)),t.push(N),l>ps&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function zg(o,t,i){const r=new Mr(o,t,i);return r.texture.mapping=Ru,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function mu(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function S1(o,t,i){const r=new Float32Array(vr),l=new ft(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Ig(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Bg(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M1(o){let t=new WeakMap,i=null;function r(f){if(f&&f.isTexture){const d=f.mapping,p=d===wh||d===Rh,g=d===xs||d===ys;if(p||g){let x=t.get(f);const y=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return i===null&&(i=new Pg(o)),x=p?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),x.texture;if(x!==void 0)return x.texture;{const v=f.image;return p&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new Pg(o)),x=p?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),f.addEventListener("dispose",u),x.texture):null}}}return f}function l(f){let d=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function u(f){const d=f.target;d.removeEventListener("dispose",u);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function E1(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&_s("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function b1(o,t,i,r){const l={},u=new WeakMap;function h(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete l[y.id];const v=u.get(y);v&&(t.remove(v),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function f(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function d(x){const y=x.attributes;for(const v in y)t.update(y[v],o.ARRAY_BUFFER)}function p(x){const y=[],v=x.index,b=x.attributes.position;let E=0;if(v!==null){const A=v.array;E=v.version;for(let R=0,C=A.length;R<C;R+=3){const N=A[R+0],k=A[R+1],B=A[R+2];y.push(N,k,k,B,B,N)}}else if(b!==void 0){const A=b.array;E=b.version;for(let R=0,C=A.length/3-1;R<C;R+=3){const N=R+0,k=R+1,B=R+2;y.push(N,k,k,B,B,N)}}else return;const S=new(v0(y)?b0:E0)(y,1);S.version=E;const _=u.get(x);_&&t.remove(_),u.set(x,S)}function g(x){const y=u.get(x);if(y){const v=x.index;v!==null&&y.version<v.version&&p(x)}else p(x);return u.get(x)}return{get:f,update:d,getWireframeAttribute:g}}function T1(o,t,i){let r;function l(y){r=y}let u,h;function f(y){u=y.type,h=y.bytesPerElement}function d(y,v){o.drawElements(r,v,u,y*h),i.update(v,r,1)}function p(y,v,b){b!==0&&(o.drawElementsInstanced(r,v,u,y*h,b),i.update(v,r,b))}function g(y,v,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,u,y,0,b);let S=0;for(let _=0;_<b;_++)S+=v[_];i.update(S,r,1)}function x(y,v,b,E){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/h,v[_],E[_]);else{S.multiDrawElementsInstancedWEBGL(r,v,0,u,y,0,E,0,b);let _=0;for(let A=0;A<b;A++)_+=v[A]*E[A];i.update(_,r,1)}}this.setMode=l,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function A1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,f){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=f*(u/3);break;case o.LINES:i.lines+=f*(u/2);break;case o.LINE_STRIP:i.lines+=f*(u-1);break;case o.LINE_LOOP:i.lines+=f*u;break;case o.POINTS:i.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function w1(o,t,i){const r=new WeakMap,l=new ke;function u(h,f,d){const p=h.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let y=r.get(f);if(y===void 0||y.count!==x){let L=function(){W.dispose(),r.delete(f),f.removeEventListener("dispose",L)};var v=L;y!==void 0&&y.texture.dispose();const b=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let C=0;b===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let N=f.attributes.position.count*C,k=1;N>t.maxTextureSize&&(k=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const B=new Float32Array(N*k*4*x),W=new x0(B,N,k,x);W.type=ta,W.needsUpdate=!0;const U=C*4;for(let j=0;j<x;j++){const z=_[j],Y=A[j],T=R[j],$=N*k*4*j;for(let X=0;X<z.count;X++){const q=X*U;b===!0&&(l.fromBufferAttribute(z,X),B[$+q+0]=l.x,B[$+q+1]=l.y,B[$+q+2]=l.z,B[$+q+3]=0),E===!0&&(l.fromBufferAttribute(Y,X),B[$+q+4]=l.x,B[$+q+5]=l.y,B[$+q+6]=l.z,B[$+q+7]=0),S===!0&&(l.fromBufferAttribute(T,X),B[$+q+8]=l.x,B[$+q+9]=l.y,B[$+q+10]=l.z,B[$+q+11]=T.itemSize===4?l.w:1)}}y={count:x,texture:W,size:new Ne(N,k)},r.set(f,y),f.addEventListener("dispose",L)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const E=f.morphTargetsRelative?1:1-b;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),d.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function R1(o,t,i,r){let l=new WeakMap;function u(d){const p=r.render.frame,g=d.geometry,x=t.get(d,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),l.get(d)!==p&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),l.set(d,p))),d.isSkinnedMesh){const y=d.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function h(){l=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const L0=new Fn,Fg=new R0(1,1),N0=new x0,O0=new tS,P0=new w0,Hg=[],kg=[],Gg=new Float32Array(16),Vg=new Float32Array(9),Xg=new Float32Array(4);function bs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=Hg[l];if(u===void 0&&(u=new Float32Array(l),Hg[l]=u),t!==0){r.toArray(u,0);for(let h=1,f=0;h!==t;++h)f+=i,o[h].toArray(u,f)}return u}function cn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function fn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Cu(o,t){let i=kg[t];i===void 0&&(i=new Int32Array(t),kg[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function C1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function D1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2fv(this.addr,t),fn(i,t)}}function U1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;o.uniform3fv(this.addr,t),fn(i,t)}}function L1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4fv(this.addr,t),fn(i,t)}}function N1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;Xg.set(r),o.uniformMatrix2fv(this.addr,!1,Xg),fn(i,r)}}function O1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;Vg.set(r),o.uniformMatrix3fv(this.addr,!1,Vg),fn(i,r)}}function P1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;Gg.set(r),o.uniformMatrix4fv(this.addr,!1,Gg),fn(i,r)}}function z1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function I1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2iv(this.addr,t),fn(i,t)}}function B1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3iv(this.addr,t),fn(i,t)}}function F1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4iv(this.addr,t),fn(i,t)}}function H1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function k1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2uiv(this.addr,t),fn(i,t)}}function G1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3uiv(this.addr,t),fn(i,t)}}function V1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4uiv(this.addr,t),fn(i,t)}}function X1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Fg.compareFunction=g0,u=Fg):u=L0,i.setTexture2D(t||u,l)}function W1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||O0,l)}function q1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||P0,l)}function Y1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||N0,l)}function Z1(o){switch(o){case 5126:return C1;case 35664:return D1;case 35665:return U1;case 35666:return L1;case 35674:return N1;case 35675:return O1;case 35676:return P1;case 5124:case 35670:return z1;case 35667:case 35671:return I1;case 35668:case 35672:return B1;case 35669:case 35673:return F1;case 5125:return H1;case 36294:return k1;case 36295:return G1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}function j1(o,t){o.uniform1fv(this.addr,t)}function K1(o,t){const i=bs(t,this.size,2);o.uniform2fv(this.addr,i)}function Q1(o,t){const i=bs(t,this.size,3);o.uniform3fv(this.addr,i)}function J1(o,t){const i=bs(t,this.size,4);o.uniform4fv(this.addr,i)}function $1(o,t){const i=bs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function tb(o,t){const i=bs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function eb(o,t){const i=bs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function nb(o,t){o.uniform1iv(this.addr,t)}function ib(o,t){o.uniform2iv(this.addr,t)}function ab(o,t){o.uniform3iv(this.addr,t)}function rb(o,t){o.uniform4iv(this.addr,t)}function sb(o,t){o.uniform1uiv(this.addr,t)}function ob(o,t){o.uniform2uiv(this.addr,t)}function lb(o,t){o.uniform3uiv(this.addr,t)}function ub(o,t){o.uniform4uiv(this.addr,t)}function cb(o,t,i){const r=this.cache,l=t.length,u=Cu(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||L0,u[h])}function fb(o,t,i){const r=this.cache,l=t.length,u=Cu(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||O0,u[h])}function hb(o,t,i){const r=this.cache,l=t.length,u=Cu(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||P0,u[h])}function db(o,t,i){const r=this.cache,l=t.length,u=Cu(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),fn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||N0,u[h])}function pb(o){switch(o){case 5126:return j1;case 35664:return K1;case 35665:return Q1;case 35666:return J1;case 35674:return $1;case 35675:return tb;case 35676:return eb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return ab;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ob;case 36295:return lb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return db}}class mb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Z1(i.type)}}class _b{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pb(i.type)}}class gb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const f=l[u];f.setValue(t,i[f.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function Wg(o,t){o.seq.push(t),o.map[t.id]=t}function vb(o,t,i){const r=o.name,l=r.length;for(gh.lastIndex=0;;){const u=gh.exec(r),h=gh.lastIndex;let f=u[1];const d=u[2]==="]",p=u[3];if(d&&(f=f|0),p===void 0||p==="["&&h+2===l){Wg(i,p===void 0?new mb(f,o,t):new _b(f,o,t));break}else{let x=i.map[f];x===void 0&&(x=new gb(f),Wg(i,x)),i=x}}}class Eu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);vb(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const f=i[u],d=r[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function qg(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const xb=37297;let yb=0;function Sb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const f=h+1;r.push(`${f===t?">":" "} ${f}: ${i[h]}`)}return r.join(`
`)}const Yg=new de;function Mb(o){Ce._getMatrix(Yg,Ce.workingColorSpace,o);const t=`mat3( ${Yg.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case bu:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Zg(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Sb(o.getShaderSource(t),h)}else return l}function Eb(o,t){const i=Mb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function bb(o,t){let i;switch(t){case Ay:i="Linear";break;case wy:i="Reinhard";break;case Ry:i="Cineon";break;case Cy:i="ACESFilmic";break;case Uy:i="AgX";break;case Ly:i="Neutral";break;case Dy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _u=new ft;function Tb(){Ce.getLuminanceCoefficients(_u);const o=_u.x.toFixed(4),t=_u.y.toFixed(4),i=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ab(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function wb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Rb(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let f=1;u.type===o.FLOAT_MAT2&&(f=2),u.type===o.FLOAT_MAT3&&(f=3),u.type===o.FLOAT_MAT4&&(f=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:f}}return i}function Ao(o){return o!==""}function jg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(o){return o.replace(Cb,Ub)}const Db=new Map;function Ub(o,t){let i=pe[t];if(i===void 0){const r=Db.get(t);if(r!==void 0)i=pe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ad(i)}const Lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qg(o){return o.replace(Lb,Nb)}function Nb(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Jg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ob(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===s0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ry?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function Pb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case xs:case ys:t="ENVMAP_TYPE_CUBE";break;case Ru:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Ib(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case od:t="ENVMAP_BLENDING_MULTIPLY";break;case by:t="ENVMAP_BLENDING_MIX";break;case Ty:t="ENVMAP_BLENDING_ADD";break}return t}function Bb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Fb(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,f=i.fragmentShader;const d=Ob(i),p=Pb(i),g=zb(i),x=Ib(i),y=Bb(i),v=Ab(i),b=wb(u),E=l.createProgram();let S,_,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ao).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ao).join(`
`),_.length>0&&(_+=`
`)):(S=[Jg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+d:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),_=[Jg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+d:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?pe.tonemapping_pars_fragment:"",i.toneMapping!==ka?bb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Eb("linearToOutputTexel",i.outputColorSpace),Tb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ao).join(`
`)),h=ad(h),h=jg(h,i),h=Kg(h,i),f=ad(f),f=jg(f,i),f=Kg(f,i),h=Qg(h),f=Qg(f),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=A+S+h,C=A+_+f,N=qg(l,l.VERTEX_SHADER,R),k=qg(l,l.FRAGMENT_SHADER,C);l.attachShader(E,N),l.attachShader(E,k),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function B(j){if(o.debug.checkShaderErrors){const z=l.getProgramInfoLog(E).trim(),Y=l.getShaderInfoLog(N).trim(),T=l.getShaderInfoLog(k).trim();let $=!0,X=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if($=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,E,N,k);else{const q=Zg(l,N,"vertex"),tt=Zg(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+z+`
`+q+`
`+tt)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(Y===""||T==="")&&(X=!1);X&&(j.diagnostics={runnable:$,programLog:z,vertexShader:{log:Y,prefix:S},fragmentShader:{log:T,prefix:_}})}l.deleteShader(N),l.deleteShader(k),W=new Eu(l,E),U=Rb(l,E)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(E,xb)),L},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yb++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=N,this.fragmentShader=k,this}let Hb=0;class kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Gb(t),i.set(t,r)),r}}class Gb{constructor(t){this.id=Hb++,this.code=t,this.usedTimes=0}}function Vb(o,t,i,r,l,u,h){const f=new y0,d=new kb,p=new Set,g=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let v=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,L,j,z,Y){const T=z.fog,$=Y.geometry,X=U.isMeshStandardMaterial?z.environment:null,q=(U.isMeshStandardMaterial?i:t).get(U.envMap||X),tt=q&&q.mapping===Ru?q.image.height:null,rt=b[U.type];U.precision!==null&&(v=l.getMaxPrecision(U.precision),v!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",v,"instead."));const H=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,G=H!==void 0?H.length:0;let Z=0;$.morphAttributes.position!==void 0&&(Z=1),$.morphAttributes.normal!==void 0&&(Z=2),$.morphAttributes.color!==void 0&&(Z=3);let vt,J,at,At;if(rt){const we=Mi[rt];vt=we.vertexShader,J=we.fragmentShader}else vt=U.vertexShader,J=U.fragmentShader,d.update(U),at=d.getVertexShaderID(U),At=d.getFragmentShaderID(U);const Nt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Wt=Y.isInstancedMesh===!0,Yt=Y.isBatchedMesh===!0,re=!!U.map,ve=!!U.matcap,ce=!!q,M=!!U.aoMap,bt=!!U.lightMap,ht=!!U.bumpMap,V=!!U.normalMap,F=!!U.displacementMap,et=!!U.emissiveMap,_t=!!U.metalnessMap,yt=!!U.roughnessMap,lt=U.anisotropy>0,P=U.clearcoat>0,D=U.dispersion>0,K=U.iridescence>0,ct=U.sheen>0,Mt=U.transmission>0,dt=lt&&!!U.anisotropyMap,It=P&&!!U.clearcoatMap,Bt=P&&!!U.clearcoatNormalMap,Xt=P&&!!U.clearcoatRoughnessMap,Kt=K&&!!U.iridescenceMap,Tt=K&&!!U.iridescenceThicknessMap,kt=ct&&!!U.sheenColorMap,$t=ct&&!!U.sheenRoughnessMap,jt=!!U.specularMap,zt=!!U.specularColorMap,le=!!U.specularIntensityMap,it=Mt&&!!U.transmissionMap,Ft=Mt&&!!U.thicknessMap,Lt=!!U.gradientMap,Gt=!!U.alphaMap,Ot=U.alphaTest>0,Ut=!!U.alphaHash,Qt=!!U.extensions;let fe=ka;U.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(fe=o.toneMapping);const Oe={shaderID:rt,shaderType:U.type,shaderName:U.name,vertexShader:vt,fragmentShader:J,defines:U.defines,customVertexShaderID:at,customFragmentShaderID:At,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:v,batching:Yt,batchingColor:Yt&&Y._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&Y.instanceColor!==null,instancingMorph:Wt&&Y.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Nt===null?o.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:Ss,alphaToCoverage:!!U.alphaToCoverage,map:re,matcap:ve,envMap:ce,envMapMode:ce&&q.mapping,envMapCubeUVHeight:tt,aoMap:M,lightMap:bt,bumpMap:ht,normalMap:V,displacementMap:y&&F,emissiveMap:et,normalMapObjectSpace:V&&U.normalMapType===zy,normalMapTangentSpace:V&&U.normalMapType===_0,metalnessMap:_t,roughnessMap:yt,anisotropy:lt,anisotropyMap:dt,clearcoat:P,clearcoatMap:It,clearcoatNormalMap:Bt,clearcoatRoughnessMap:Xt,dispersion:D,iridescence:K,iridescenceMap:Kt,iridescenceThicknessMap:Tt,sheen:ct,sheenColorMap:kt,sheenRoughnessMap:$t,specularMap:jt,specularColorMap:zt,specularIntensityMap:le,transmission:Mt,transmissionMap:it,thicknessMap:Ft,gradientMap:Lt,opaque:U.transparent===!1&&U.blending===ms&&U.alphaToCoverage===!1,alphaMap:Gt,alphaTest:Ot,alphaHash:Ut,combine:U.combine,mapUv:re&&E(U.map.channel),aoMapUv:M&&E(U.aoMap.channel),lightMapUv:bt&&E(U.lightMap.channel),bumpMapUv:ht&&E(U.bumpMap.channel),normalMapUv:V&&E(U.normalMap.channel),displacementMapUv:F&&E(U.displacementMap.channel),emissiveMapUv:et&&E(U.emissiveMap.channel),metalnessMapUv:_t&&E(U.metalnessMap.channel),roughnessMapUv:yt&&E(U.roughnessMap.channel),anisotropyMapUv:dt&&E(U.anisotropyMap.channel),clearcoatMapUv:It&&E(U.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&E(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&E(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&E(U.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&E(U.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&E(U.sheenColorMap.channel),sheenRoughnessMapUv:$t&&E(U.sheenRoughnessMap.channel),specularMapUv:jt&&E(U.specularMap.channel),specularColorMapUv:zt&&E(U.specularColorMap.channel),specularIntensityMapUv:le&&E(U.specularIntensityMap.channel),transmissionMapUv:it&&E(U.transmissionMap.channel),thicknessMapUv:Ft&&E(U.thicknessMap.channel),alphaMapUv:Gt&&E(U.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(V||lt),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!$.attributes.uv&&(re||Gt),fog:!!T,useFog:U.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ct,skinning:Y.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Z,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:fe,decodeVideoTexture:re&&U.map.isVideoTexture===!0&&Ce.getTransfer(U.map.colorSpace)===He,decodeVideoTextureEmissive:et&&U.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(U.emissiveMap.colorSpace)===He,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===$i,flipSided:U.side===Bn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Qt&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&U.extensions.multiDraw===!0||Yt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function _(U){const L=[];if(U.shaderID?L.push(U.shaderID):(L.push(U.customVertexShaderID),L.push(U.customFragmentShaderID)),U.defines!==void 0)for(const j in U.defines)L.push(j),L.push(U.defines[j]);return U.isRawShaderMaterial===!1&&(A(L,U),R(L,U),L.push(o.outputColorSpace)),L.push(U.customProgramCacheKey),L.join()}function A(U,L){U.push(L.precision),U.push(L.outputColorSpace),U.push(L.envMapMode),U.push(L.envMapCubeUVHeight),U.push(L.mapUv),U.push(L.alphaMapUv),U.push(L.lightMapUv),U.push(L.aoMapUv),U.push(L.bumpMapUv),U.push(L.normalMapUv),U.push(L.displacementMapUv),U.push(L.emissiveMapUv),U.push(L.metalnessMapUv),U.push(L.roughnessMapUv),U.push(L.anisotropyMapUv),U.push(L.clearcoatMapUv),U.push(L.clearcoatNormalMapUv),U.push(L.clearcoatRoughnessMapUv),U.push(L.iridescenceMapUv),U.push(L.iridescenceThicknessMapUv),U.push(L.sheenColorMapUv),U.push(L.sheenRoughnessMapUv),U.push(L.specularMapUv),U.push(L.specularColorMapUv),U.push(L.specularIntensityMapUv),U.push(L.transmissionMapUv),U.push(L.thicknessMapUv),U.push(L.combine),U.push(L.fogExp2),U.push(L.sizeAttenuation),U.push(L.morphTargetsCount),U.push(L.morphAttributeCount),U.push(L.numDirLights),U.push(L.numPointLights),U.push(L.numSpotLights),U.push(L.numSpotLightMaps),U.push(L.numHemiLights),U.push(L.numRectAreaLights),U.push(L.numDirLightShadows),U.push(L.numPointLightShadows),U.push(L.numSpotLightShadows),U.push(L.numSpotLightShadowsWithMaps),U.push(L.numLightProbes),U.push(L.shadowMapType),U.push(L.toneMapping),U.push(L.numClippingPlanes),U.push(L.numClipIntersection),U.push(L.depthPacking)}function R(U,L){f.disableAll(),L.supportsVertexTextures&&f.enable(0),L.instancing&&f.enable(1),L.instancingColor&&f.enable(2),L.instancingMorph&&f.enable(3),L.matcap&&f.enable(4),L.envMap&&f.enable(5),L.normalMapObjectSpace&&f.enable(6),L.normalMapTangentSpace&&f.enable(7),L.clearcoat&&f.enable(8),L.iridescence&&f.enable(9),L.alphaTest&&f.enable(10),L.vertexColors&&f.enable(11),L.vertexAlphas&&f.enable(12),L.vertexUv1s&&f.enable(13),L.vertexUv2s&&f.enable(14),L.vertexUv3s&&f.enable(15),L.vertexTangents&&f.enable(16),L.anisotropy&&f.enable(17),L.alphaHash&&f.enable(18),L.batching&&f.enable(19),L.dispersion&&f.enable(20),L.batchingColor&&f.enable(21),U.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reverseDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),U.push(f.mask)}function C(U){const L=b[U.type];let j;if(L){const z=Mi[L];j=pS.clone(z.uniforms)}else j=U.uniforms;return j}function N(U,L){let j;for(let z=0,Y=g.length;z<Y;z++){const T=g[z];if(T.cacheKey===L){j=T,++j.usedTimes;break}}return j===void 0&&(j=new Fb(o,L,U,u),g.push(j)),j}function k(U){if(--U.usedTimes===0){const L=g.indexOf(U);g[L]=g[g.length-1],g.pop(),U.destroy()}}function B(U){d.remove(U)}function W(){d.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:C,acquireProgram:N,releaseProgram:k,releaseShaderCache:B,programs:g,dispose:W}}function Xb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let f=o.get(h);return f===void 0&&(f={},o.set(h,f)),f}function r(h){o.delete(h)}function l(h,f,d){o.get(h)[f]=d}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function Wb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function $g(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function t0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(x,y,v,b,E,S){let _=o[t];return _===void 0?(_={id:x.id,object:x,geometry:y,material:v,groupOrder:b,renderOrder:x.renderOrder,z:E,group:S},o[t]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=v,_.groupOrder=b,_.renderOrder=x.renderOrder,_.z=E,_.group=S),t++,_}function f(x,y,v,b,E,S){const _=h(x,y,v,b,E,S);v.transmission>0?r.push(_):v.transparent===!0?l.push(_):i.push(_)}function d(x,y,v,b,E,S){const _=h(x,y,v,b,E,S);v.transmission>0?r.unshift(_):v.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,y){i.length>1&&i.sort(x||Wb),r.length>1&&r.sort(y||$g),l.length>1&&l.sort(y||$g)}function g(){for(let x=t,y=o.length;x<y;x++){const v=o[x];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:f,unshift:d,finish:g,sort:p}}function qb(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new t0,o.set(r,[h])):l>=u.length?(h=new t0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Yb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ft,color:new De};break;case"SpotLight":i={position:new ft,direction:new ft,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ft,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ft,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new ft,halfWidth:new ft,halfHeight:new ft};break}return o[t.id]=i,i}}}function Zb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let jb=0;function Kb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Qb(o){const t=new Yb,i=Zb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ft);const l=new ft,u=new je,h=new je;function f(p){let g=0,x=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let v=0,b=0,E=0,S=0,_=0,A=0,R=0,C=0,N=0,k=0,B=0;p.sort(Kb);for(let U=0,L=p.length;U<L;U++){const j=p[U],z=j.color,Y=j.intensity,T=j.distance,$=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)g+=z.r*Y,x+=z.g*Y,y+=z.b*Y;else if(j.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(j.sh.coefficients[X],Y);B++}else if(j.isDirectionalLight){const X=t.get(j);if(X.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const q=j.shadow,tt=i.get(j);tt.shadowIntensity=q.intensity,tt.shadowBias=q.bias,tt.shadowNormalBias=q.normalBias,tt.shadowRadius=q.radius,tt.shadowMapSize=q.mapSize,r.directionalShadow[v]=tt,r.directionalShadowMap[v]=$,r.directionalShadowMatrix[v]=j.shadow.matrix,A++}r.directional[v]=X,v++}else if(j.isSpotLight){const X=t.get(j);X.position.setFromMatrixPosition(j.matrixWorld),X.color.copy(z).multiplyScalar(Y),X.distance=T,X.coneCos=Math.cos(j.angle),X.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),X.decay=j.decay,r.spot[E]=X;const q=j.shadow;if(j.map&&(r.spotLightMap[N]=j.map,N++,q.updateMatrices(j),j.castShadow&&k++),r.spotLightMatrix[E]=q.matrix,j.castShadow){const tt=i.get(j);tt.shadowIntensity=q.intensity,tt.shadowBias=q.bias,tt.shadowNormalBias=q.normalBias,tt.shadowRadius=q.radius,tt.shadowMapSize=q.mapSize,r.spotShadow[E]=tt,r.spotShadowMap[E]=$,C++}E++}else if(j.isRectAreaLight){const X=t.get(j);X.color.copy(z).multiplyScalar(Y),X.halfWidth.set(j.width*.5,0,0),X.halfHeight.set(0,j.height*.5,0),r.rectArea[S]=X,S++}else if(j.isPointLight){const X=t.get(j);if(X.color.copy(j.color).multiplyScalar(j.intensity),X.distance=j.distance,X.decay=j.decay,j.castShadow){const q=j.shadow,tt=i.get(j);tt.shadowIntensity=q.intensity,tt.shadowBias=q.bias,tt.shadowNormalBias=q.normalBias,tt.shadowRadius=q.radius,tt.shadowMapSize=q.mapSize,tt.shadowCameraNear=q.camera.near,tt.shadowCameraFar=q.camera.far,r.pointShadow[b]=tt,r.pointShadowMap[b]=$,r.pointShadowMatrix[b]=j.shadow.matrix,R++}r.point[b]=X,b++}else if(j.isHemisphereLight){const X=t.get(j);X.skyColor.copy(j.color).multiplyScalar(Y),X.groundColor.copy(j.groundColor).multiplyScalar(Y),r.hemi[_]=X,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Vt.LTC_FLOAT_1,r.rectAreaLTC2=Vt.LTC_FLOAT_2):(r.rectAreaLTC1=Vt.LTC_HALF_1,r.rectAreaLTC2=Vt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==v||W.pointLength!==b||W.spotLength!==E||W.rectAreaLength!==S||W.hemiLength!==_||W.numDirectionalShadows!==A||W.numPointShadows!==R||W.numSpotShadows!==C||W.numSpotMaps!==N||W.numLightProbes!==B)&&(r.directional.length=v,r.spot.length=E,r.rectArea.length=S,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=C+N-k,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=B,W.directionalLength=v,W.pointLength=b,W.spotLength=E,W.rectAreaLength=S,W.hemiLength=_,W.numDirectionalShadows=A,W.numPointShadows=R,W.numSpotShadows=C,W.numSpotMaps=N,W.numLightProbes=B,r.version=jb++)}function d(p,g){let x=0,y=0,v=0,b=0,E=0;const S=g.matrixWorldInverse;for(let _=0,A=p.length;_<A;_++){const R=p[_];if(R.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),x++}else if(R.isSpotLight){const C=r.spot[v];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),v++}else if(R.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(S),h.identity(),u.copy(R.matrixWorld),u.premultiply(S),h.extractRotation(u),C.halfWidth.set(R.width*.5,0,0),C.halfHeight.set(0,R.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),b++}else if(R.isPointLight){const C=r.point[y];C.position.setFromMatrixPosition(R.matrixWorld),C.position.applyMatrix4(S),y++}else if(R.isHemisphereLight){const C=r.hemi[E];C.direction.setFromMatrixPosition(R.matrixWorld),C.direction.transformDirection(S),E++}}}return{setup:f,setupView:d,state:r}}function e0(o){const t=new Qb(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function f(){t.setup(i)}function d(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:f,setupLightsView:d,pushLight:u,pushShadow:h}}function Jb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let f;return h===void 0?(f=new e0(o),t.set(l,[f])):u>=h.length?(f=new e0(o),h.push(f)):f=h[u],f}function r(){t=new WeakMap}return{get:i,dispose:r}}const $b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eT(o,t,i){let r=new _d;const l=new Ne,u=new Ne,h=new ke,f=new ES({depthPacking:Py}),d=new bS,p={},g=i.maxTextureSize,x={[Ga]:Bn,[Bn]:Ga,[$i]:$i},y=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:$b,fragmentShader:tT}),v=y.clone();v.defines.HORIZONTAL_PASS=1;const b=new Va;b.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new si(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s0;let _=this.type;this.render=function(k,B,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const U=o.getRenderTarget(),L=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),z=o.state;z.setBlending(Ha),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Y=_!==Ji&&this.type===Ji,T=_===Ji&&this.type!==Ji;for(let $=0,X=k.length;$<X;$++){const q=k[$],tt=q.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;l.copy(tt.mapSize);const rt=tt.getFrameExtents();if(l.multiply(rt),u.copy(tt.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/rt.x),l.x=u.x*rt.x,tt.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/rt.y),l.y=u.y*rt.y,tt.mapSize.y=u.y)),tt.map===null||Y===!0||T===!0){const G=this.type!==Ji?{minFilter:mi,magFilter:mi}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Mr(l.x,l.y,G),tt.map.texture.name=q.name+".shadowMap",tt.camera.updateProjectionMatrix()}o.setRenderTarget(tt.map),o.clear();const H=tt.getViewportCount();for(let G=0;G<H;G++){const Z=tt.getViewport(G);h.set(u.x*Z.x,u.y*Z.y,u.x*Z.z,u.y*Z.w),z.viewport(h),tt.updateMatrices(q,G),r=tt.getFrustum(),C(B,W,tt.camera,q,this.type)}tt.isPointLightShadow!==!0&&this.type===Ji&&A(tt,W),tt.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(U,L,j)};function A(k,B){const W=t.update(E);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,v.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,v.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Mr(l.x,l.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(B,null,W,y,E,null),v.uniforms.shadow_pass.value=k.mapPass.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(B,null,W,v,E,null)}function R(k,B,W,U){let L=null;const j=W.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(j!==void 0)L=j;else if(L=W.isPointLight===!0?d:f,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const z=L.uuid,Y=B.uuid;let T=p[z];T===void 0&&(T={},p[z]=T);let $=T[Y];$===void 0&&($=L.clone(),T[Y]=$,B.addEventListener("dispose",N)),L=$}if(L.visible=B.visible,L.wireframe=B.wireframe,U===Ji?L.side=B.shadowSide!==null?B.shadowSide:B.side:L.side=B.shadowSide!==null?B.shadowSide:x[B.side],L.alphaMap=B.alphaMap,L.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,L.map=B.map,L.clipShadows=B.clipShadows,L.clippingPlanes=B.clippingPlanes,L.clipIntersection=B.clipIntersection,L.displacementMap=B.displacementMap,L.displacementScale=B.displacementScale,L.displacementBias=B.displacementBias,L.wireframeLinewidth=B.wireframeLinewidth,L.linewidth=B.linewidth,W.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const z=o.properties.get(L);z.light=W}return L}function C(k,B,W,U,L){if(k.visible===!1)return;if(k.layers.test(B.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&L===Ji)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,k.matrixWorld);const Y=t.update(k),T=k.material;if(Array.isArray(T)){const $=Y.groups;for(let X=0,q=$.length;X<q;X++){const tt=$[X],rt=T[tt.materialIndex];if(rt&&rt.visible){const H=R(k,rt,U,L);k.onBeforeShadow(o,k,B,W,Y,H,tt),o.renderBufferDirect(W,null,Y,H,k,tt),k.onAfterShadow(o,k,B,W,Y,H,tt)}}}else if(T.visible){const $=R(k,T,U,L);k.onBeforeShadow(o,k,B,W,Y,$,null),o.renderBufferDirect(W,null,Y,$,k,null),k.onAfterShadow(o,k,B,W,Y,$,null)}}const z=k.children;for(let Y=0,T=z.length;Y<T;Y++)C(z[Y],B,W,U,L)}function N(k){k.target.removeEventListener("dispose",N);for(const W in p){const U=p[W],L=k.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}const nT={[yh]:Sh,[Mh]:Th,[Eh]:Ah,[vs]:bh,[Sh]:yh,[Th]:Mh,[Ah]:Eh,[bh]:vs};function iT(o,t){function i(){let it=!1;const Ft=new ke;let Lt=null;const Gt=new ke(0,0,0,0);return{setMask:function(Ot){Lt!==Ot&&!it&&(o.colorMask(Ot,Ot,Ot,Ot),Lt=Ot)},setLocked:function(Ot){it=Ot},setClear:function(Ot,Ut,Qt,fe,Oe){Oe===!0&&(Ot*=fe,Ut*=fe,Qt*=fe),Ft.set(Ot,Ut,Qt,fe),Gt.equals(Ft)===!1&&(o.clearColor(Ot,Ut,Qt,fe),Gt.copy(Ft))},reset:function(){it=!1,Lt=null,Gt.set(-1,0,0,0)}}}function r(){let it=!1,Ft=!1,Lt=null,Gt=null,Ot=null;return{setReversed:function(Ut){if(Ft!==Ut){const Qt=t.get("EXT_clip_control");Ut?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),Ft=Ut;const fe=Ot;Ot=null,this.setClear(fe)}},getReversed:function(){return Ft},setTest:function(Ut){Ut?Nt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(Ut){Lt!==Ut&&!it&&(o.depthMask(Ut),Lt=Ut)},setFunc:function(Ut){if(Ft&&(Ut=nT[Ut]),Gt!==Ut){switch(Ut){case yh:o.depthFunc(o.NEVER);break;case Sh:o.depthFunc(o.ALWAYS);break;case Mh:o.depthFunc(o.LESS);break;case vs:o.depthFunc(o.LEQUAL);break;case Eh:o.depthFunc(o.EQUAL);break;case bh:o.depthFunc(o.GEQUAL);break;case Th:o.depthFunc(o.GREATER);break;case Ah:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Gt=Ut}},setLocked:function(Ut){it=Ut},setClear:function(Ut){Ot!==Ut&&(Ft&&(Ut=1-Ut),o.clearDepth(Ut),Ot=Ut)},reset:function(){it=!1,Lt=null,Gt=null,Ot=null,Ft=!1}}}function l(){let it=!1,Ft=null,Lt=null,Gt=null,Ot=null,Ut=null,Qt=null,fe=null,Oe=null;return{setTest:function(we){it||(we?Nt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(we){Ft!==we&&!it&&(o.stencilMask(we),Ft=we)},setFunc:function(we,Hn,hn){(Lt!==we||Gt!==Hn||Ot!==hn)&&(o.stencilFunc(we,Hn,hn),Lt=we,Gt=Hn,Ot=hn)},setOp:function(we,Hn,hn){(Ut!==we||Qt!==Hn||fe!==hn)&&(o.stencilOp(we,Hn,hn),Ut=we,Qt=Hn,fe=hn)},setLocked:function(we){it=we},setClear:function(we){Oe!==we&&(o.clearStencil(we),Oe=we)},reset:function(){it=!1,Ft=null,Lt=null,Gt=null,Ot=null,Ut=null,Qt=null,fe=null,Oe=null}}}const u=new i,h=new r,f=new l,d=new WeakMap,p=new WeakMap;let g={},x={},y=new WeakMap,v=[],b=null,E=!1,S=null,_=null,A=null,R=null,C=null,N=null,k=null,B=new De(0,0,0),W=0,U=!1,L=null,j=null,z=null,Y=null,T=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const tt=o.getParameter(o.VERSION);tt.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(tt)[1]),X=q>=1):tt.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),X=q>=2);let rt=null,H={};const G=o.getParameter(o.SCISSOR_BOX),Z=o.getParameter(o.VIEWPORT),vt=new ke().fromArray(G),J=new ke().fromArray(Z);function at(it,Ft,Lt,Gt){const Ot=new Uint8Array(4),Ut=o.createTexture();o.bindTexture(it,Ut),o.texParameteri(it,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(it,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Qt=0;Qt<Lt;Qt++)it===o.TEXTURE_3D||it===o.TEXTURE_2D_ARRAY?o.texImage3D(Ft,0,o.RGBA,1,1,Gt,0,o.RGBA,o.UNSIGNED_BYTE,Ot):o.texImage2D(Ft+Qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ot);return Ut}const At={};At[o.TEXTURE_2D]=at(o.TEXTURE_2D,o.TEXTURE_2D,1),At[o.TEXTURE_CUBE_MAP]=at(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[o.TEXTURE_2D_ARRAY]=at(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),At[o.TEXTURE_3D]=at(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),f.setClear(0),Nt(o.DEPTH_TEST),h.setFunc(vs),ht(!1),V(ig),Nt(o.CULL_FACE),M(Ha);function Nt(it){g[it]!==!0&&(o.enable(it),g[it]=!0)}function Ct(it){g[it]!==!1&&(o.disable(it),g[it]=!1)}function Wt(it,Ft){return x[it]!==Ft?(o.bindFramebuffer(it,Ft),x[it]=Ft,it===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ft),it===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ft),!0):!1}function Yt(it,Ft){let Lt=v,Gt=!1;if(it){Lt=y.get(Ft),Lt===void 0&&(Lt=[],y.set(Ft,Lt));const Ot=it.textures;if(Lt.length!==Ot.length||Lt[0]!==o.COLOR_ATTACHMENT0){for(let Ut=0,Qt=Ot.length;Ut<Qt;Ut++)Lt[Ut]=o.COLOR_ATTACHMENT0+Ut;Lt.length=Ot.length,Gt=!0}}else Lt[0]!==o.BACK&&(Lt[0]=o.BACK,Gt=!0);Gt&&o.drawBuffers(Lt)}function re(it){return b!==it?(o.useProgram(it),b=it,!0):!1}const ve={[gr]:o.FUNC_ADD,[oy]:o.FUNC_SUBTRACT,[ly]:o.FUNC_REVERSE_SUBTRACT};ve[uy]=o.MIN,ve[cy]=o.MAX;const ce={[fy]:o.ZERO,[hy]:o.ONE,[dy]:o.SRC_COLOR,[vh]:o.SRC_ALPHA,[xy]:o.SRC_ALPHA_SATURATE,[gy]:o.DST_COLOR,[my]:o.DST_ALPHA,[py]:o.ONE_MINUS_SRC_COLOR,[xh]:o.ONE_MINUS_SRC_ALPHA,[vy]:o.ONE_MINUS_DST_COLOR,[_y]:o.ONE_MINUS_DST_ALPHA,[yy]:o.CONSTANT_COLOR,[Sy]:o.ONE_MINUS_CONSTANT_COLOR,[My]:o.CONSTANT_ALPHA,[Ey]:o.ONE_MINUS_CONSTANT_ALPHA};function M(it,Ft,Lt,Gt,Ot,Ut,Qt,fe,Oe,we){if(it===Ha){E===!0&&(Ct(o.BLEND),E=!1);return}if(E===!1&&(Nt(o.BLEND),E=!0),it!==sy){if(it!==S||we!==U){if((_!==gr||C!==gr)&&(o.blendEquation(o.FUNC_ADD),_=gr,C=gr),we)switch(it){case ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ag:o.blendFunc(o.ONE,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case sg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",it);break}else switch(it){case ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ag:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case sg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",it);break}A=null,R=null,N=null,k=null,B.set(0,0,0),W=0,S=it,U=we}return}Ot=Ot||Ft,Ut=Ut||Lt,Qt=Qt||Gt,(Ft!==_||Ot!==C)&&(o.blendEquationSeparate(ve[Ft],ve[Ot]),_=Ft,C=Ot),(Lt!==A||Gt!==R||Ut!==N||Qt!==k)&&(o.blendFuncSeparate(ce[Lt],ce[Gt],ce[Ut],ce[Qt]),A=Lt,R=Gt,N=Ut,k=Qt),(fe.equals(B)===!1||Oe!==W)&&(o.blendColor(fe.r,fe.g,fe.b,Oe),B.copy(fe),W=Oe),S=it,U=!1}function bt(it,Ft){it.side===$i?Ct(o.CULL_FACE):Nt(o.CULL_FACE);let Lt=it.side===Bn;Ft&&(Lt=!Lt),ht(Lt),it.blending===ms&&it.transparent===!1?M(Ha):M(it.blending,it.blendEquation,it.blendSrc,it.blendDst,it.blendEquationAlpha,it.blendSrcAlpha,it.blendDstAlpha,it.blendColor,it.blendAlpha,it.premultipliedAlpha),h.setFunc(it.depthFunc),h.setTest(it.depthTest),h.setMask(it.depthWrite),u.setMask(it.colorWrite);const Gt=it.stencilWrite;f.setTest(Gt),Gt&&(f.setMask(it.stencilWriteMask),f.setFunc(it.stencilFunc,it.stencilRef,it.stencilFuncMask),f.setOp(it.stencilFail,it.stencilZFail,it.stencilZPass)),et(it.polygonOffset,it.polygonOffsetFactor,it.polygonOffsetUnits),it.alphaToCoverage===!0?Nt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(it){L!==it&&(it?o.frontFace(o.CW):o.frontFace(o.CCW),L=it)}function V(it){it!==iy?(Nt(o.CULL_FACE),it!==j&&(it===ig?o.cullFace(o.BACK):it===ay?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),j=it}function F(it){it!==z&&(X&&o.lineWidth(it),z=it)}function et(it,Ft,Lt){it?(Nt(o.POLYGON_OFFSET_FILL),(Y!==Ft||T!==Lt)&&(o.polygonOffset(Ft,Lt),Y=Ft,T=Lt)):Ct(o.POLYGON_OFFSET_FILL)}function _t(it){it?Nt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function yt(it){it===void 0&&(it=o.TEXTURE0+$-1),rt!==it&&(o.activeTexture(it),rt=it)}function lt(it,Ft,Lt){Lt===void 0&&(rt===null?Lt=o.TEXTURE0+$-1:Lt=rt);let Gt=H[Lt];Gt===void 0&&(Gt={type:void 0,texture:void 0},H[Lt]=Gt),(Gt.type!==it||Gt.texture!==Ft)&&(rt!==Lt&&(o.activeTexture(Lt),rt=Lt),o.bindTexture(it,Ft||At[it]),Gt.type=it,Gt.texture=Ft)}function P(){const it=H[rt];it!==void 0&&it.type!==void 0&&(o.bindTexture(it.type,null),it.type=void 0,it.texture=void 0)}function D(){try{o.compressedTexImage2D(...arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function K(){try{o.compressedTexImage3D(...arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function ct(){try{o.texSubImage2D(...arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function It(){try{o.compressedTexSubImage3D(...arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function Bt(){try{o.texStorage2D(...arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function Xt(){try{o.texStorage3D(...arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function Kt(){try{o.texImage2D(...arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function Tt(){try{o.texImage3D(...arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function kt(it){vt.equals(it)===!1&&(o.scissor(it.x,it.y,it.z,it.w),vt.copy(it))}function $t(it){J.equals(it)===!1&&(o.viewport(it.x,it.y,it.z,it.w),J.copy(it))}function jt(it,Ft){let Lt=p.get(Ft);Lt===void 0&&(Lt=new WeakMap,p.set(Ft,Lt));let Gt=Lt.get(it);Gt===void 0&&(Gt=o.getUniformBlockIndex(Ft,it.name),Lt.set(it,Gt))}function zt(it,Ft){const Gt=p.get(Ft).get(it);d.get(Ft)!==Gt&&(o.uniformBlockBinding(Ft,Gt,it.__bindingPointIndex),d.set(Ft,Gt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},rt=null,H={},x={},y=new WeakMap,v=[],b=null,E=!1,S=null,_=null,A=null,R=null,C=null,N=null,k=null,B=new De(0,0,0),W=0,U=!1,L=null,j=null,z=null,Y=null,T=null,vt.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),f.reset()}return{buffers:{color:u,depth:h,stencil:f},enable:Nt,disable:Ct,bindFramebuffer:Wt,drawBuffers:Yt,useProgram:re,setBlending:M,setMaterial:bt,setFlipSided:ht,setCullFace:V,setLineWidth:F,setPolygonOffset:et,setScissorTest:_t,activeTexture:yt,bindTexture:lt,unbindTexture:P,compressedTexImage2D:D,compressedTexImage3D:K,texImage2D:Kt,texImage3D:Tt,updateUBOMapping:jt,uniformBlockBinding:zt,texStorage2D:Bt,texStorage3D:Xt,texSubImage2D:ct,texSubImage3D:Mt,compressedTexSubImage2D:dt,compressedTexSubImage3D:It,scissor:kt,viewport:$t,reset:le}}function aT(o,t,i,r,l,u,h){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ne,g=new WeakMap;let x;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,D){return v?new OffscreenCanvas(P,D):Au("canvas")}function E(P,D,K){let ct=1;const Mt=lt(P);if((Mt.width>K||Mt.height>K)&&(ct=K/Math.max(Mt.width,Mt.height)),ct<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const dt=Math.floor(ct*Mt.width),It=Math.floor(ct*Mt.height);x===void 0&&(x=b(dt,It));const Bt=D?b(dt,It):x;return Bt.width=dt,Bt.height=It,Bt.getContext("2d").drawImage(P,0,0,dt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+dt+"x"+It+")."),Bt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),P;return P}function S(P){return P.generateMipmaps}function _(P){o.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(P,D,K,ct,Mt=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let dt=D;if(D===o.RED&&(K===o.FLOAT&&(dt=o.R32F),K===o.HALF_FLOAT&&(dt=o.R16F),K===o.UNSIGNED_BYTE&&(dt=o.R8)),D===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(dt=o.R8UI),K===o.UNSIGNED_SHORT&&(dt=o.R16UI),K===o.UNSIGNED_INT&&(dt=o.R32UI),K===o.BYTE&&(dt=o.R8I),K===o.SHORT&&(dt=o.R16I),K===o.INT&&(dt=o.R32I)),D===o.RG&&(K===o.FLOAT&&(dt=o.RG32F),K===o.HALF_FLOAT&&(dt=o.RG16F),K===o.UNSIGNED_BYTE&&(dt=o.RG8)),D===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(dt=o.RG8UI),K===o.UNSIGNED_SHORT&&(dt=o.RG16UI),K===o.UNSIGNED_INT&&(dt=o.RG32UI),K===o.BYTE&&(dt=o.RG8I),K===o.SHORT&&(dt=o.RG16I),K===o.INT&&(dt=o.RG32I)),D===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),K===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),K===o.UNSIGNED_INT&&(dt=o.RGB32UI),K===o.BYTE&&(dt=o.RGB8I),K===o.SHORT&&(dt=o.RGB16I),K===o.INT&&(dt=o.RGB32I)),D===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),K===o.UNSIGNED_INT&&(dt=o.RGBA32UI),K===o.BYTE&&(dt=o.RGBA8I),K===o.SHORT&&(dt=o.RGBA16I),K===o.INT&&(dt=o.RGBA32I)),D===o.RGB&&K===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),D===o.RGBA){const It=Mt?bu:Ce.getTransfer(ct);K===o.FLOAT&&(dt=o.RGBA32F),K===o.HALF_FLOAT&&(dt=o.RGBA16F),K===o.UNSIGNED_BYTE&&(dt=It===He?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function C(P,D){let K;return P?D===null||D===Sr||D===Ro?K=o.DEPTH24_STENCIL8:D===ta?K=o.DEPTH32F_STENCIL8:D===wo&&(K=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Sr||D===Ro?K=o.DEPTH_COMPONENT24:D===ta?K=o.DEPTH_COMPONENT32F:D===wo&&(K=o.DEPTH_COMPONENT16),K}function N(P,D){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==mi&&P.minFilter!==Ei?Math.log2(Math.max(D.width,D.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?D.mipmaps.length:1}function k(P){const D=P.target;D.removeEventListener("dispose",k),W(D),D.isVideoTexture&&g.delete(D)}function B(P){const D=P.target;D.removeEventListener("dispose",B),L(D)}function W(P){const D=r.get(P);if(D.__webglInit===void 0)return;const K=P.source,ct=y.get(K);if(ct){const Mt=ct[D.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&U(P),Object.keys(ct).length===0&&y.delete(K)}r.remove(P)}function U(P){const D=r.get(P);o.deleteTexture(D.__webglTexture);const K=P.source,ct=y.get(K);delete ct[D.__cacheKey],h.memory.textures--}function L(P){const D=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(D.__webglFramebuffer[ct]))for(let Mt=0;Mt<D.__webglFramebuffer[ct].length;Mt++)o.deleteFramebuffer(D.__webglFramebuffer[ct][Mt]);else o.deleteFramebuffer(D.__webglFramebuffer[ct]);D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer[ct])}else{if(Array.isArray(D.__webglFramebuffer))for(let ct=0;ct<D.__webglFramebuffer.length;ct++)o.deleteFramebuffer(D.__webglFramebuffer[ct]);else o.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&o.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let ct=0;ct<D.__webglColorRenderbuffer.length;ct++)D.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(D.__webglColorRenderbuffer[ct]);D.__webglDepthRenderbuffer&&o.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const K=P.textures;for(let ct=0,Mt=K.length;ct<Mt;ct++){const dt=r.get(K[ct]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),r.remove(K[ct])}r.remove(P)}let j=0;function z(){j=0}function Y(){const P=j;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),j+=1,P}function T(P){const D=[];return D.push(P.wrapS),D.push(P.wrapT),D.push(P.wrapR||0),D.push(P.magFilter),D.push(P.minFilter),D.push(P.anisotropy),D.push(P.internalFormat),D.push(P.format),D.push(P.type),D.push(P.generateMipmaps),D.push(P.premultiplyAlpha),D.push(P.flipY),D.push(P.unpackAlignment),D.push(P.colorSpace),D.join()}function $(P,D){const K=r.get(P);if(P.isVideoTexture&&_t(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const ct=P.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{At(K,P,D);return}}i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+D)}function X(P,D){const K=r.get(P);if(P.version>0&&K.__version!==P.version){At(K,P,D);return}i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+D)}function q(P,D){const K=r.get(P);if(P.version>0&&K.__version!==P.version){At(K,P,D);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+D)}function tt(P,D){const K=r.get(P);if(P.version>0&&K.__version!==P.version){Nt(K,P,D);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+D)}const rt={[Ch]:o.REPEAT,[xr]:o.CLAMP_TO_EDGE,[Dh]:o.MIRRORED_REPEAT},H={[mi]:o.NEAREST,[Ny]:o.NEAREST_MIPMAP_NEAREST,[jl]:o.NEAREST_MIPMAP_LINEAR,[Ei]:o.LINEAR,[Ff]:o.LINEAR_MIPMAP_NEAREST,[yr]:o.LINEAR_MIPMAP_LINEAR},G={[Iy]:o.NEVER,[Vy]:o.ALWAYS,[By]:o.LESS,[g0]:o.LEQUAL,[Fy]:o.EQUAL,[Gy]:o.GEQUAL,[Hy]:o.GREATER,[ky]:o.NOTEQUAL};function Z(P,D){if(D.type===ta&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===Ei||D.magFilter===Ff||D.magFilter===jl||D.magFilter===yr||D.minFilter===Ei||D.minFilter===Ff||D.minFilter===jl||D.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,rt[D.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,rt[D.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,rt[D.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,H[D.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,H[D.minFilter]),D.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,G[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===mi||D.minFilter!==jl&&D.minFilter!==yr||D.type===ta&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||r.get(D).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,l.getMaxAnisotropy())),r.get(D).__currentAnisotropy=D.anisotropy}}}function vt(P,D){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,D.addEventListener("dispose",k));const ct=D.source;let Mt=y.get(ct);Mt===void 0&&(Mt={},y.set(ct,Mt));const dt=T(D);if(dt!==P.__cacheKey){Mt[dt]===void 0&&(Mt[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,K=!0),Mt[dt].usedTimes++;const It=Mt[P.__cacheKey];It!==void 0&&(Mt[P.__cacheKey].usedTimes--,It.usedTimes===0&&U(D)),P.__cacheKey=dt,P.__webglTexture=Mt[dt].texture}return K}function J(P,D,K){return Math.floor(Math.floor(P/K)/D)}function at(P,D,K,ct){const dt=P.updateRanges;if(dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,D.width,D.height,K,ct,D.data);else{dt.sort((Tt,kt)=>Tt.start-kt.start);let It=0;for(let Tt=1;Tt<dt.length;Tt++){const kt=dt[It],$t=dt[Tt],jt=kt.start+kt.count,zt=J($t.start,D.width,4),le=J(kt.start,D.width,4);$t.start<=jt+1&&zt===le&&J($t.start+$t.count-1,D.width,4)===zt?kt.count=Math.max(kt.count,$t.start+$t.count-kt.start):(++It,dt[It]=$t)}dt.length=It+1;const Bt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,D.width);for(let Tt=0,kt=dt.length;Tt<kt;Tt++){const $t=dt[Tt],jt=Math.floor($t.start/4),zt=Math.ceil($t.count/4),le=jt%D.width,it=Math.floor(jt/D.width),Ft=zt,Lt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,it),i.texSubImage2D(o.TEXTURE_2D,0,le,it,Ft,Lt,K,ct,D.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Bt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function At(P,D,K){let ct=o.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),D.isData3DTexture&&(ct=o.TEXTURE_3D);const Mt=vt(P,D),dt=D.source;i.bindTexture(ct,P.__webglTexture,o.TEXTURE0+K);const It=r.get(dt);if(dt.version!==It.__version||Mt===!0){i.activeTexture(o.TEXTURE0+K);const Bt=Ce.getPrimaries(Ce.workingColorSpace),Xt=D.colorSpace===Ba?null:Ce.getPrimaries(D.colorSpace),Kt=D.colorSpace===Ba||Bt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Tt=E(D.image,!1,l.maxTextureSize);Tt=yt(D,Tt);const kt=u.convert(D.format,D.colorSpace),$t=u.convert(D.type);let jt=R(D.internalFormat,kt,$t,D.colorSpace,D.isVideoTexture);Z(ct,D);let zt;const le=D.mipmaps,it=D.isVideoTexture!==!0,Ft=It.__version===void 0||Mt===!0,Lt=dt.dataReady,Gt=N(D,Tt);if(D.isDepthTexture)jt=C(D.format===Do,D.type),Ft&&(it?i.texStorage2D(o.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,kt,$t,null));else if(D.isDataTexture)if(le.length>0){it&&Ft&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,le[0].width,le[0].height);for(let Ot=0,Ut=le.length;Ot<Ut;Ot++)zt=le[Ot],it?Lt&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,zt.width,zt.height,kt,$t,zt.data):i.texImage2D(o.TEXTURE_2D,Ot,jt,zt.width,zt.height,0,kt,$t,zt.data);D.generateMipmaps=!1}else it?(Ft&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,Tt.width,Tt.height),Lt&&at(D,Tt,kt,$t)):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,kt,$t,Tt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){it&&Ft&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,jt,le[0].width,le[0].height,Tt.depth);for(let Ot=0,Ut=le.length;Ot<Ut;Ot++)if(zt=le[Ot],D.format!==pi)if(kt!==null)if(it){if(Lt)if(D.layerUpdates.size>0){const Qt=Ug(zt.width,zt.height,D.format,D.type);for(const fe of D.layerUpdates){const Oe=zt.data.subarray(fe*Qt/zt.data.BYTES_PER_ELEMENT,(fe+1)*Qt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,fe,zt.width,zt.height,1,kt,Oe)}D.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,0,zt.width,zt.height,Tt.depth,kt,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ot,jt,zt.width,zt.height,Tt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?Lt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,0,zt.width,zt.height,Tt.depth,kt,$t,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ot,jt,zt.width,zt.height,Tt.depth,0,kt,$t,zt.data)}else{it&&Ft&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,le[0].width,le[0].height);for(let Ot=0,Ut=le.length;Ot<Ut;Ot++)zt=le[Ot],D.format!==pi?kt!==null?it?Lt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ot,0,0,zt.width,zt.height,kt,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Ot,jt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?Lt&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,zt.width,zt.height,kt,$t,zt.data):i.texImage2D(o.TEXTURE_2D,Ot,jt,zt.width,zt.height,0,kt,$t,zt.data)}else if(D.isDataArrayTexture)if(it){if(Ft&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,jt,Tt.width,Tt.height,Tt.depth),Lt)if(D.layerUpdates.size>0){const Ot=Ug(Tt.width,Tt.height,D.format,D.type);for(const Ut of D.layerUpdates){const Qt=Tt.data.subarray(Ut*Ot/Tt.data.BYTES_PER_ELEMENT,(Ut+1)*Ot/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ut,Tt.width,Tt.height,1,kt,$t,Qt)}D.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,kt,$t,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,kt,$t,Tt.data);else if(D.isData3DTexture)it?(Ft&&i.texStorage3D(o.TEXTURE_3D,Gt,jt,Tt.width,Tt.height,Tt.depth),Lt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,kt,$t,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,kt,$t,Tt.data);else if(D.isFramebufferTexture){if(Ft)if(it)i.texStorage2D(o.TEXTURE_2D,Gt,jt,Tt.width,Tt.height);else{let Ot=Tt.width,Ut=Tt.height;for(let Qt=0;Qt<Gt;Qt++)i.texImage2D(o.TEXTURE_2D,Qt,jt,Ot,Ut,0,kt,$t,null),Ot>>=1,Ut>>=1}}else if(le.length>0){if(it&&Ft){const Ot=lt(le[0]);i.texStorage2D(o.TEXTURE_2D,Gt,jt,Ot.width,Ot.height)}for(let Ot=0,Ut=le.length;Ot<Ut;Ot++)zt=le[Ot],it?Lt&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,kt,$t,zt):i.texImage2D(o.TEXTURE_2D,Ot,jt,kt,$t,zt);D.generateMipmaps=!1}else if(it){if(Ft){const Ot=lt(Tt);i.texStorage2D(o.TEXTURE_2D,Gt,jt,Ot.width,Ot.height)}Lt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,kt,$t,Tt)}else i.texImage2D(o.TEXTURE_2D,0,jt,kt,$t,Tt);S(D)&&_(ct),It.__version=dt.version,D.onUpdate&&D.onUpdate(D)}P.__version=D.version}function Nt(P,D,K){if(D.image.length!==6)return;const ct=vt(P,D),Mt=D.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+K);const dt=r.get(Mt);if(Mt.version!==dt.__version||ct===!0){i.activeTexture(o.TEXTURE0+K);const It=Ce.getPrimaries(Ce.workingColorSpace),Bt=D.colorSpace===Ba?null:Ce.getPrimaries(D.colorSpace),Xt=D.colorSpace===Ba||It===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Kt=D.isCompressedTexture||D.image[0].isCompressedTexture,Tt=D.image[0]&&D.image[0].isDataTexture,kt=[];for(let Ut=0;Ut<6;Ut++)!Kt&&!Tt?kt[Ut]=E(D.image[Ut],!0,l.maxCubemapSize):kt[Ut]=Tt?D.image[Ut].image:D.image[Ut],kt[Ut]=yt(D,kt[Ut]);const $t=kt[0],jt=u.convert(D.format,D.colorSpace),zt=u.convert(D.type),le=R(D.internalFormat,jt,zt,D.colorSpace),it=D.isVideoTexture!==!0,Ft=dt.__version===void 0||ct===!0,Lt=Mt.dataReady;let Gt=N(D,$t);Z(o.TEXTURE_CUBE_MAP,D);let Ot;if(Kt){it&&Ft&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,le,$t.width,$t.height);for(let Ut=0;Ut<6;Ut++){Ot=kt[Ut].mipmaps;for(let Qt=0;Qt<Ot.length;Qt++){const fe=Ot[Qt];D.format!==pi?jt!==null?it?Lt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt,0,0,fe.width,fe.height,jt,fe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt,le,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt,0,0,fe.width,fe.height,jt,zt,fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt,le,fe.width,fe.height,0,jt,zt,fe.data)}}}else{if(Ot=D.mipmaps,it&&Ft){Ot.length>0&&Gt++;const Ut=lt(kt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,le,Ut.width,Ut.height)}for(let Ut=0;Ut<6;Ut++)if(Tt){it?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,kt[Ut].width,kt[Ut].height,jt,zt,kt[Ut].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,le,kt[Ut].width,kt[Ut].height,0,jt,zt,kt[Ut].data);for(let Qt=0;Qt<Ot.length;Qt++){const Oe=Ot[Qt].image[Ut].image;it?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt+1,0,0,Oe.width,Oe.height,jt,zt,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt+1,le,Oe.width,Oe.height,0,jt,zt,Oe.data)}}else{it?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,jt,zt,kt[Ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,le,jt,zt,kt[Ut]);for(let Qt=0;Qt<Ot.length;Qt++){const fe=Ot[Qt];it?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt+1,0,0,jt,zt,fe.image[Ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt+1,le,jt,zt,fe.image[Ut])}}}S(D)&&_(o.TEXTURE_CUBE_MAP),dt.__version=Mt.version,D.onUpdate&&D.onUpdate(D)}P.__version=D.version}function Ct(P,D,K,ct,Mt,dt){const It=u.convert(K.format,K.colorSpace),Bt=u.convert(K.type),Xt=R(K.internalFormat,It,Bt,K.colorSpace),Kt=r.get(D),Tt=r.get(K);if(Tt.__renderTarget=D,!Kt.__hasExternalTextures){const kt=Math.max(1,D.width>>dt),$t=Math.max(1,D.height>>dt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,dt,Xt,kt,$t,D.depth,0,It,Bt,null):i.texImage2D(Mt,dt,Xt,kt,$t,0,It,Bt,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),et(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,Mt,Tt.__webglTexture,0,F(D)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,Mt,Tt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Wt(P,D,K){if(o.bindRenderbuffer(o.RENDERBUFFER,P),D.depthBuffer){const ct=D.depthTexture,Mt=ct&&ct.isDepthTexture?ct.type:null,dt=C(D.stencilBuffer,Mt),It=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Bt=F(D);et(D)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Bt,dt,D.width,D.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,dt,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,dt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,It,o.RENDERBUFFER,P)}else{const ct=D.textures;for(let Mt=0;Mt<ct.length;Mt++){const dt=ct[Mt],It=u.convert(dt.format,dt.colorSpace),Bt=u.convert(dt.type),Xt=R(dt.internalFormat,It,Bt,dt.colorSpace),Kt=F(D);K&&et(D)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Xt,D.width,D.height):et(D)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,Xt,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,D.width,D.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Yt(P,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(D.depthTexture);ct.__renderTarget=D,(!ct.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),$(D.depthTexture,0);const Mt=ct.__webglTexture,dt=F(D);if(D.depthTexture.format===Co)et(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(D.depthTexture.format===Do)et(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function re(P){const D=r.get(P),K=P.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==P.depthTexture){const ct=P.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),ct){const Mt=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,ct.removeEventListener("dispose",Mt)};ct.addEventListener("dispose",Mt),D.__depthDisposeCallback=Mt}D.__boundDepthTexture=ct}if(P.depthTexture&&!D.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const ct=P.texture.mipmaps;ct&&ct.length>0?Yt(D.__webglFramebuffer[0],P):Yt(D.__webglFramebuffer,P)}else if(K){D.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[ct]),D.__webglDepthbuffer[ct]===void 0)D.__webglDepthbuffer[ct]=o.createRenderbuffer(),Wt(D.__webglDepthbuffer[ct],P,!1);else{const Mt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=D.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,dt)}}else{const ct=P.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=o.createRenderbuffer(),Wt(D.__webglDepthbuffer,P,!1);else{const Mt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=D.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(P,D,K){const ct=r.get(P);D!==void 0&&Ct(ct.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&re(P)}function ce(P){const D=P.texture,K=r.get(P),ct=r.get(D);P.addEventListener("dispose",B);const Mt=P.textures,dt=P.isWebGLCubeRenderTarget===!0,It=Mt.length>1;if(It||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=D.version,h.memory.textures++),dt){K.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(D.mipmaps&&D.mipmaps.length>0){K.__webglFramebuffer[Bt]=[];for(let Xt=0;Xt<D.mipmaps.length;Xt++)K.__webglFramebuffer[Bt][Xt]=o.createFramebuffer()}else K.__webglFramebuffer[Bt]=o.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){K.__webglFramebuffer=[];for(let Bt=0;Bt<D.mipmaps.length;Bt++)K.__webglFramebuffer[Bt]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(It)for(let Bt=0,Xt=Mt.length;Bt<Xt;Bt++){const Kt=r.get(Mt[Bt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(P.samples>0&&et(P)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Bt=0;Bt<Mt.length;Bt++){const Xt=Mt[Bt];K.__webglColorRenderbuffer[Bt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Bt]);const Kt=u.convert(Xt.format,Xt.colorSpace),Tt=u.convert(Xt.type),kt=R(Xt.internalFormat,Kt,Tt,Xt.colorSpace,P.isXRRenderTarget===!0),$t=F(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,kt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,K.__webglColorRenderbuffer[Bt])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Wt(K.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),Z(o.TEXTURE_CUBE_MAP,D);for(let Bt=0;Bt<6;Bt++)if(D.mipmaps&&D.mipmaps.length>0)for(let Xt=0;Xt<D.mipmaps.length;Xt++)Ct(K.__webglFramebuffer[Bt][Xt],P,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Xt);else Ct(K.__webglFramebuffer[Bt],P,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);S(D)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let Bt=0,Xt=Mt.length;Bt<Xt;Bt++){const Kt=Mt[Bt],Tt=r.get(Kt);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),Z(o.TEXTURE_2D,Kt),Ct(K.__webglFramebuffer,P,Kt,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,0),S(Kt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Bt=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Bt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,ct.__webglTexture),Z(Bt,D),D.mipmaps&&D.mipmaps.length>0)for(let Xt=0;Xt<D.mipmaps.length;Xt++)Ct(K.__webglFramebuffer[Xt],P,D,o.COLOR_ATTACHMENT0,Bt,Xt);else Ct(K.__webglFramebuffer,P,D,o.COLOR_ATTACHMENT0,Bt,0);S(D)&&_(Bt),i.unbindTexture()}P.depthBuffer&&re(P)}function M(P){const D=P.textures;for(let K=0,ct=D.length;K<ct;K++){const Mt=D[K];if(S(Mt)){const dt=A(P),It=r.get(Mt).__webglTexture;i.bindTexture(dt,It),_(dt),i.unbindTexture()}}}const bt=[],ht=[];function V(P){if(P.samples>0){if(et(P)===!1){const D=P.textures,K=P.width,ct=P.height;let Mt=o.COLOR_BUFFER_BIT;const dt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=r.get(P),Bt=D.length>1;if(Bt)for(let Kt=0;Kt<D.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Xt=P.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Kt=0;Kt<D.length;Kt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Bt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,It.__webglColorRenderbuffer[Kt]);const Tt=r.get(D[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,K,ct,0,0,K,ct,Mt,o.NEAREST),d===!0&&(bt.length=0,ht.length=0,bt.push(o.COLOR_ATTACHMENT0+Kt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(bt.push(dt),ht.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,bt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Bt)for(let Kt=0;Kt<D.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,It.__webglColorRenderbuffer[Kt]);const Tt=r.get(D[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const D=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[D])}}}function F(P){return Math.min(l.maxSamples,P.samples)}function et(P){const D=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function _t(P){const D=h.render.frame;g.get(P)!==D&&(g.set(P,D),P.update())}function yt(P,D){const K=P.colorSpace,ct=P.format,Mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==Ss&&K!==Ba&&(Ce.getTransfer(K)===He?(ct!==pi||Mt!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),D}function lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=tt,this.rebindTextures=ve,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=M,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=et}function rT(o,t){function i(r,l=Ba){let u;const h=Ce.getTransfer(l);if(r===Ai)return o.UNSIGNED_BYTE;if(r===ud)return o.UNSIGNED_SHORT_4_4_4_4;if(r===cd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===c0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===l0)return o.BYTE;if(r===u0)return o.SHORT;if(r===wo)return o.UNSIGNED_SHORT;if(r===ld)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===ta)return o.FLOAT;if(r===Uo)return o.HALF_FLOAT;if(r===f0)return o.ALPHA;if(r===h0)return o.RGB;if(r===pi)return o.RGBA;if(r===Co)return o.DEPTH_COMPONENT;if(r===Do)return o.DEPTH_STENCIL;if(r===d0)return o.RED;if(r===fd)return o.RED_INTEGER;if(r===p0)return o.RG;if(r===hd)return o.RG_INTEGER;if(r===dd)return o.RGBA_INTEGER;if(r===vu||r===xu||r===yu||r===Su)if(h===He)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===vu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Su)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===vu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Su)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uh||r===Lh||r===Nh||r===Oh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Uh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ph||r===zh||r===Ih)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ph||r===zh)return h===He?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Ih)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bh||r===Fh||r===Hh||r===kh||r===Gh||r===Vh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===jh||r===Kh||r===Qh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Bh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qh)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mu||r===Jh||r===$h)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Mu)return h===He?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$h)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===m0||r===td||r===ed||r===nd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Mu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===td)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ed)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ro?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const sT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Fn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ia({vertexShader:sT,fragmentShader:oT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new si(new Io(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uT extends Es{constructor(t,i){super();const r=this;let l=null,u=1,h=null,f="local-floor",d=1,p=null,g=null,x=null,y=null,v=null,b=null;const E=new lT,S=i.getContextAttributes();let _=null,A=null;const R=[],C=[],N=new Ne;let k=null;const B=new Kn;B.viewport=new ke;const W=new Kn;W.viewport=new ke;const U=[B,W],L=new DS;let j=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=R[J];return at===void 0&&(at=new lh,R[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=R[J];return at===void 0&&(at=new lh,R[J]=at),at.getGripSpace()},this.getHand=function(J){let at=R[J];return at===void 0&&(at=new lh,R[J]=at),at.getHandSpace()};function Y(J){const at=C.indexOf(J.inputSource);if(at===-1)return;const At=R[at];At!==void 0&&(At.update(J.inputSource,J.frame,p||h),At.dispatchEvent({type:J.type,data:J.inputSource}))}function T(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",T),l.removeEventListener("inputsourceschange",$);for(let J=0;J<R.length;J++){const at=C[J];at!==null&&(C[J]=null,R[J].disconnect(at))}j=null,z=null,E.reset(),t.setRenderTarget(_),v=null,y=null,x=null,l=null,A=null,vt.stop(),r.isPresenting=!1,t.setPixelRatio(k),t.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return y!==null?y:v},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",T),l.addEventListener("inputsourceschange",$),S.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Nt=null,Ct=null;S.depth&&(Ct=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=S.stencil?Do:Co,Nt=S.stencil?Ro:Sr);const Wt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Wt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),A=new Mr(y.textureWidth,y.textureHeight,{format:pi,type:Ai,depthTexture:new R0(y.textureWidth,y.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const At={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};v=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),A=new Mr(v.framebufferWidth,v.framebufferHeight,{format:pi,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),p=null,h=await l.requestReferenceSpace(f),vt.setContext(l),vt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function $(J){for(let at=0;at<J.removed.length;at++){const At=J.removed[at],Nt=C.indexOf(At);Nt>=0&&(C[Nt]=null,R[Nt].disconnect(At))}for(let at=0;at<J.added.length;at++){const At=J.added[at];let Nt=C.indexOf(At);if(Nt===-1){for(let Wt=0;Wt<R.length;Wt++)if(Wt>=C.length){C.push(At),Nt=Wt;break}else if(C[Wt]===null){C[Wt]=At,Nt=Wt;break}if(Nt===-1)break}const Ct=R[Nt];Ct&&Ct.connect(At)}}const X=new ft,q=new ft;function tt(J,at,At){X.setFromMatrixPosition(at.matrixWorld),q.setFromMatrixPosition(At.matrixWorld);const Nt=X.distanceTo(q),Ct=at.projectionMatrix.elements,Wt=At.projectionMatrix.elements,Yt=Ct[14]/(Ct[10]-1),re=Ct[14]/(Ct[10]+1),ve=(Ct[9]+1)/Ct[5],ce=(Ct[9]-1)/Ct[5],M=(Ct[8]-1)/Ct[0],bt=(Wt[8]+1)/Wt[0],ht=Yt*M,V=Yt*bt,F=Nt/(-M+bt),et=F*-M;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(et),J.translateZ(F),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const _t=Yt+F,yt=re+F,lt=ht-et,P=V+(Nt-et),D=ve*re/yt*_t,K=ce*re/yt*_t;J.projectionMatrix.makePerspective(lt,P,D,K,_t,yt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function rt(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let at=J.near,At=J.far;E.texture!==null&&(E.depthNear>0&&(at=E.depthNear),E.depthFar>0&&(At=E.depthFar)),L.near=W.near=B.near=at,L.far=W.far=B.far=At,(j!==L.near||z!==L.far)&&(l.updateRenderState({depthNear:L.near,depthFar:L.far}),j=L.near,z=L.far),B.layers.mask=J.layers.mask|2,W.layers.mask=J.layers.mask|4,L.layers.mask=B.layers.mask|W.layers.mask;const Nt=J.parent,Ct=L.cameras;rt(L,Nt);for(let Wt=0;Wt<Ct.length;Wt++)rt(Ct[Wt],Nt);Ct.length===2?tt(L,B,W):L.projectionMatrix.copy(B.projectionMatrix),H(J,L,Nt)};function H(J,at,At){At===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(At.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=id*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(y===null&&v===null))return d},this.setFoveation=function(J){d=J,y!==null&&(y.fixedFoveation=J),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(L)};let G=null;function Z(J,at){if(g=at.getViewerPose(p||h),b=at,g!==null){const At=g.views;v!==null&&(t.setRenderTargetFramebuffer(A,v.framebuffer),t.setRenderTarget(A));let Nt=!1;At.length!==L.cameras.length&&(L.cameras.length=0,Nt=!0);for(let Yt=0;Yt<At.length;Yt++){const re=At[Yt];let ve=null;if(v!==null)ve=v.getViewport(re);else{const M=x.getViewSubImage(y,re);ve=M.viewport,Yt===0&&(t.setRenderTargetTextures(A,M.colorTexture,M.depthStencilTexture),t.setRenderTarget(A))}let ce=U[Yt];ce===void 0&&(ce=new Kn,ce.layers.enable(Yt),ce.viewport=new ke,U[Yt]=ce),ce.matrix.fromArray(re.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(re.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(ve.x,ve.y,ve.width,ve.height),Yt===0&&(L.matrix.copy(ce.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Nt===!0&&L.cameras.push(ce)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Yt=x.getDepthInformation(At[0]);Yt&&Yt.isValid&&Yt.texture&&E.init(t,Yt,l.renderState)}}for(let At=0;At<R.length;At++){const Nt=C[At],Ct=R[At];Nt!==null&&Ct!==void 0&&Ct.update(Nt,at,p||h)}G&&G(J,at),at.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:at}),b=null}const vt=new U0;vt.setAnimationLoop(Z),this.setAnimationLoop=function(J){G=J},this.dispose=function(){}}}const pr=new wi,cT=new je;function fT(o,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,T0(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,A,R,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),y(S,_),_.isMeshPhysicalMaterial&&v(S,_,C)):_.isMeshMatcapMaterial?(u(S,_),b(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),E(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&f(S,_)):_.isPointsMaterial?d(S,_,A,R):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Bn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Bn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const A=t.get(_),R=A.envMap,C=A.envMapRotation;R&&(S.envMap.value=R,pr.copy(C),pr.x*=-1,pr.y*=-1,pr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),S.envMapRotation.value.setFromMatrix4(cT.makeRotationFromEuler(pr)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function f(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function d(S,_,A,R){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*A,S.scale.value=R*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function v(S,_,A){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function E(S,_){const A=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function hT(o,t,i,r){let l={},u={},h=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,R){const C=R.program;r.uniformBlockBinding(A,C)}function p(A,R){let C=l[A.id];C===void 0&&(b(A),C=g(A),l[A.id]=C,A.addEventListener("dispose",S));const N=R.program;r.updateUBOMapping(A,N);const k=t.render.frame;u[A.id]!==k&&(y(A),u[A.id]=k)}function g(A){const R=x();A.__bindingPointIndex=R;const C=o.createBuffer(),N=A.__size,k=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,N,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,C),C}function x(){for(let A=0;A<f;A++)if(h.indexOf(A)===-1)return h.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(A){const R=l[A.id],C=A.uniforms,N=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let k=0,B=C.length;k<B;k++){const W=Array.isArray(C[k])?C[k]:[C[k]];for(let U=0,L=W.length;U<L;U++){const j=W[U];if(v(j,k,U,N)===!0){const z=j.__offset,Y=Array.isArray(j.value)?j.value:[j.value];let T=0;for(let $=0;$<Y.length;$++){const X=Y[$],q=E(X);typeof X=="number"||typeof X=="boolean"?(j.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,z+T,j.__data)):X.isMatrix3?(j.__data[0]=X.elements[0],j.__data[1]=X.elements[1],j.__data[2]=X.elements[2],j.__data[3]=0,j.__data[4]=X.elements[3],j.__data[5]=X.elements[4],j.__data[6]=X.elements[5],j.__data[7]=0,j.__data[8]=X.elements[6],j.__data[9]=X.elements[7],j.__data[10]=X.elements[8],j.__data[11]=0):(X.toArray(j.__data,T),T+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,z,j.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(A,R,C,N){const k=A.value,B=R+"_"+C;if(N[B]===void 0)return typeof k=="number"||typeof k=="boolean"?N[B]=k:N[B]=k.clone(),!0;{const W=N[B];if(typeof k=="number"||typeof k=="boolean"){if(W!==k)return N[B]=k,!0}else if(W.equals(k)===!1)return W.copy(k),!0}return!1}function b(A){const R=A.uniforms;let C=0;const N=16;for(let B=0,W=R.length;B<W;B++){const U=Array.isArray(R[B])?R[B]:[R[B]];for(let L=0,j=U.length;L<j;L++){const z=U[L],Y=Array.isArray(z.value)?z.value:[z.value];for(let T=0,$=Y.length;T<$;T++){const X=Y[T],q=E(X),tt=C%N,rt=tt%q.boundary,H=tt+rt;C+=rt,H!==0&&N-H<q.storage&&(C+=N-H),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=C,C+=q.storage}}}const k=C%N;return k>0&&(C+=N-k),A.__size=C,A.__cache={},this}function E(A){const R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=48,R.storage=48):A.isMatrix4?(R.boundary=64,R.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),R}function S(A){const R=A.target;R.removeEventListener("dispose",S);const C=h.indexOf(R.__bindingPointIndex);h.splice(C,1),o.deleteBuffer(l[R.id]),delete l[R.id],delete u[R.id]}function _(){for(const A in l)o.deleteBuffer(l[A]);h=[],l={},u={}}return{bind:d,update:p,dispose:_}}class n0{constructor(t={}){const{canvas:i=Wy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let v;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=r.getContextAttributes().alpha}else v=h;const b=new Uint32Array(4),E=new Int32Array(4);let S=null,_=null;const A=[],R=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1;this._outputColorSpace=ri;let k=0,B=0,W=null,U=-1,L=null;const j=new ke,z=new ke;let Y=null;const T=new De(0);let $=0,X=i.width,q=i.height,tt=1,rt=null,H=null;const G=new ke(0,0,X,q),Z=new ke(0,0,X,q);let vt=!1;const J=new _d;let at=!1,At=!1;const Nt=new je,Ct=new je,Wt=new ft,Yt=new ke,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function ce(){return W===null?tt:1}let M=r;function bt(I,ot){return i.getContext(I,ot)}try{const I={alpha:!0,depth:l,stencil:u,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sd}`),i.addEventListener("webglcontextlost",Gt,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),M===null){const ot="webgl2";if(M=bt(ot,I),M===null)throw bt(ot)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ht,V,F,et,_t,yt,lt,P,D,K,ct,Mt,dt,It,Bt,Xt,Kt,Tt,kt,$t,jt,zt,le,it;function Ft(){ht=new E1(M),ht.init(),zt=new rT(M,ht),V=new _1(M,ht,t,zt),F=new iT(M,ht),V.reverseDepthBuffer&&y&&F.buffers.depth.setReversed(!0),et=new A1(M),_t=new Xb,yt=new aT(M,ht,F,_t,V,zt,et),lt=new v1(C),P=new M1(C),D=new LS(M),le=new p1(M,D),K=new b1(M,D,et,le),ct=new R1(M,K,D,et),kt=new w1(M,V,yt),Xt=new g1(_t),Mt=new Vb(C,lt,P,ht,V,le,Xt),dt=new fT(C,_t),It=new qb,Bt=new Jb(ht),Tt=new d1(C,lt,P,F,ct,v,d),Kt=new eT(C,ct,V),it=new hT(M,et,V,F),$t=new m1(M,ht,et),jt=new T1(M,ht,et),et.programs=Mt.programs,C.capabilities=V,C.extensions=ht,C.properties=_t,C.renderLists=It,C.shadowMap=Kt,C.state=F,C.info=et}Ft();const Lt=new uT(C,M);this.xr=Lt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const I=ht.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ht.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(I){I!==void 0&&(tt=I,this.setSize(X,q,!1))},this.getSize=function(I){return I.set(X,q)},this.setSize=function(I,ot,St=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=I,q=ot,i.width=Math.floor(I*tt),i.height=Math.floor(ot*tt),St===!0&&(i.style.width=I+"px",i.style.height=ot+"px"),this.setViewport(0,0,I,ot)},this.getDrawingBufferSize=function(I){return I.set(X*tt,q*tt).floor()},this.setDrawingBufferSize=function(I,ot,St){X=I,q=ot,tt=St,i.width=Math.floor(I*St),i.height=Math.floor(ot*St),this.setViewport(0,0,I,ot)},this.getCurrentViewport=function(I){return I.copy(j)},this.getViewport=function(I){return I.copy(G)},this.setViewport=function(I,ot,St,Et){I.isVector4?G.set(I.x,I.y,I.z,I.w):G.set(I,ot,St,Et),F.viewport(j.copy(G).multiplyScalar(tt).round())},this.getScissor=function(I){return I.copy(Z)},this.setScissor=function(I,ot,St,Et){I.isVector4?Z.set(I.x,I.y,I.z,I.w):Z.set(I,ot,St,Et),F.scissor(z.copy(Z).multiplyScalar(tt).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(I){F.setScissorTest(vt=I)},this.setOpaqueSort=function(I){rt=I},this.setTransparentSort=function(I){H=I},this.getClearColor=function(I){return I.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(I=!0,ot=!0,St=!0){let Et=0;if(I){let ut=!1;if(W!==null){const Pt=W.texture.format;ut=Pt===dd||Pt===hd||Pt===fd}if(ut){const Pt=W.texture.type,Ht=Pt===Ai||Pt===Sr||Pt===wo||Pt===Ro||Pt===ud||Pt===cd,qt=Tt.getClearColor(),Zt=Tt.getClearAlpha(),se=qt.r,ne=qt.g,te=qt.b;Ht?(b[0]=se,b[1]=ne,b[2]=te,b[3]=Zt,M.clearBufferuiv(M.COLOR,0,b)):(E[0]=se,E[1]=ne,E[2]=te,E[3]=Zt,M.clearBufferiv(M.COLOR,0,E))}else Et|=M.COLOR_BUFFER_BIT}ot&&(Et|=M.DEPTH_BUFFER_BIT),St&&(Et|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(Et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Gt,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Tt.dispose(),It.dispose(),Bt.dispose(),_t.dispose(),lt.dispose(),P.dispose(),ct.dispose(),le.dispose(),it.dispose(),Mt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",sn),Lt.removeEventListener("sessionend",vn),Ln.stop()};function Gt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const I=et.autoReset,ot=Kt.enabled,St=Kt.autoUpdate,Et=Kt.needsUpdate,ut=Kt.type;Ft(),et.autoReset=I,Kt.enabled=ot,Kt.autoUpdate=St,Kt.needsUpdate=Et,Kt.type=ut}function Ut(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Qt(I){const ot=I.target;ot.removeEventListener("dispose",Qt),fe(ot)}function fe(I){Oe(I),_t.remove(I)}function Oe(I){const ot=_t.get(I).programs;ot!==void 0&&(ot.forEach(function(St){Mt.releaseProgram(St)}),I.isShaderMaterial&&Mt.releaseShaderCache(I))}this.renderBufferDirect=function(I,ot,St,Et,ut,Pt){ot===null&&(ot=re);const Ht=ut.isMesh&&ut.matrixWorld.determinant()<0,qt=qa(I,ot,St,Et,ut);F.setMaterial(Et,Ht);let Zt=St.index,se=1;if(Et.wireframe===!0){if(Zt=K.getWireframeAttribute(St),Zt===void 0)return;se=2}const ne=St.drawRange,te=St.attributes.position;let me=ne.start*se,Ue=(ne.start+ne.count)*se;Pt!==null&&(me=Math.max(me,Pt.start*se),Ue=Math.min(Ue,(Pt.start+Pt.count)*se)),Zt!==null?(me=Math.max(me,0),Ue=Math.min(Ue,Zt.count)):te!=null&&(me=Math.max(me,0),Ue=Math.min(Ue,te.count));const Xe=Ue-me;if(Xe<0||Xe===1/0)return;le.setup(ut,Et,qt,St,Zt);let Me,Ee=$t;if(Zt!==null&&(Me=D.get(Zt),Ee=jt,Ee.setIndex(Me)),ut.isMesh)Et.wireframe===!0?(F.setLineWidth(Et.wireframeLinewidth*ce()),Ee.setMode(M.LINES)):Ee.setMode(M.TRIANGLES);else if(ut.isLine){let ie=Et.linewidth;ie===void 0&&(ie=1),F.setLineWidth(ie*ce()),ut.isLineSegments?Ee.setMode(M.LINES):ut.isLineLoop?Ee.setMode(M.LINE_LOOP):Ee.setMode(M.LINE_STRIP)}else ut.isPoints?Ee.setMode(M.POINTS):ut.isSprite&&Ee.setMode(M.TRIANGLES);if(ut.isBatchedMesh)if(ut._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ee.renderMultiDrawInstances(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount,ut._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Ee.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{const ie=ut._multiDrawStarts,Ke=ut._multiDrawCounts,Ae=ut._multiDrawCount,En=Zt?D.get(Zt).bytesPerElement:1,oa=_t.get(Et).currentProgram.getUniforms();for(let We=0;We<Ae;We++)oa.setValue(M,"_gl_DrawID",We),Ee.render(ie[We]/En,Ke[We])}else if(ut.isInstancedMesh)Ee.renderInstances(me,Xe,ut.count);else if(St.isInstancedBufferGeometry){const ie=St._maxInstanceCount!==void 0?St._maxInstanceCount:1/0,Ke=Math.min(St.instanceCount,ie);Ee.renderInstances(me,Xe,Ke)}else Ee.render(me,Xe)};function we(I,ot,St){I.transparent===!0&&I.side===$i&&I.forceSinglePass===!1?(I.side=Bn,I.needsUpdate=!0,ra(I,ot,St),I.side=Ga,I.needsUpdate=!0,ra(I,ot,St),I.side=$i):ra(I,ot,St)}this.compile=function(I,ot,St=null){St===null&&(St=I),_=Bt.get(St),_.init(ot),R.push(_),St.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ot.layers)&&(_.pushLight(ut),ut.castShadow&&_.pushShadow(ut))}),I!==St&&I.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ot.layers)&&(_.pushLight(ut),ut.castShadow&&_.pushShadow(ut))}),_.setupLights();const Et=new Set;return I.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;const Pt=ut.material;if(Pt)if(Array.isArray(Pt))for(let Ht=0;Ht<Pt.length;Ht++){const qt=Pt[Ht];we(qt,St,ut),Et.add(qt)}else we(Pt,St,ut),Et.add(Pt)}),_=R.pop(),Et},this.compileAsync=function(I,ot,St=null){const Et=this.compile(I,ot,St);return new Promise(ut=>{function Pt(){if(Et.forEach(function(Ht){_t.get(Ht).currentProgram.isReady()&&Et.delete(Ht)}),Et.size===0){ut(I);return}setTimeout(Pt,10)}ht.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Hn=null;function hn(I){Hn&&Hn(I)}function sn(){Ln.stop()}function vn(){Ln.start()}const Ln=new U0;Ln.setAnimationLoop(hn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(I){Hn=I,Lt.setAnimationLoop(I),I===null?Ln.stop():Ln.start()},Lt.addEventListener("sessionstart",sn),Lt.addEventListener("sessionend",vn),this.render=function(I,ot){if(ot!==void 0&&ot.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(ot),ot=Lt.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,ot,W),_=Bt.get(I,R.length),_.init(ot),R.push(_),Ct.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),J.setFromProjectionMatrix(Ct),At=this.localClippingEnabled,at=Xt.init(this.clippingPlanes,At),S=It.get(I,A.length),S.init(),A.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){const Pt=C.xr.getDepthSensingMesh();Pt!==null&&Xa(Pt,ot,-1/0,C.sortObjects)}Xa(I,ot,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(rt,H),ve=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,ve&&Tt.addToRenderList(S,I),this.info.render.frame++,at===!0&&Xt.beginShadows();const St=_.state.shadowsArray;Kt.render(St,I,ot),at===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Et=S.opaque,ut=S.transmissive;if(_.setupLights(),ot.isArrayCamera){const Pt=ot.cameras;if(ut.length>0)for(let Ht=0,qt=Pt.length;Ht<qt;Ht++){const Zt=Pt[Ht];Fo(Et,ut,I,Zt)}ve&&Tt.render(I);for(let Ht=0,qt=Pt.length;Ht<qt;Ht++){const Zt=Pt[Ht];Bo(S,I,Zt,Zt.viewport)}}else ut.length>0&&Fo(Et,ut,I,ot),ve&&Tt.render(I),Bo(S,I,ot);W!==null&&B===0&&(yt.updateMultisampleRenderTarget(W),yt.updateRenderTargetMipmap(W)),I.isScene===!0&&I.onAfterRender(C,I,ot),le.resetDefaultState(),U=-1,L=null,R.pop(),R.length>0?(_=R[R.length-1],at===!0&&Xt.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Xa(I,ot,St,Et){if(I.visible===!1)return;if(I.layers.test(ot.layers)){if(I.isGroup)St=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ot);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||J.intersectsSprite(I)){Et&&Yt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ct);const Ht=ct.update(I),qt=I.material;qt.visible&&S.push(I,Ht,qt,St,Yt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||J.intersectsObject(I))){const Ht=ct.update(I),qt=I.material;if(Et&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Yt.copy(I.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Yt.copy(Ht.boundingSphere.center)),Yt.applyMatrix4(I.matrixWorld).applyMatrix4(Ct)),Array.isArray(qt)){const Zt=Ht.groups;for(let se=0,ne=Zt.length;se<ne;se++){const te=Zt[se],me=qt[te.materialIndex];me&&me.visible&&S.push(I,Ht,me,St,Yt.z,te)}}else qt.visible&&S.push(I,Ht,qt,St,Yt.z,null)}}const Pt=I.children;for(let Ht=0,qt=Pt.length;Ht<qt;Ht++)Xa(Pt[Ht],ot,St,Et)}function Bo(I,ot,St,Et){const ut=I.opaque,Pt=I.transmissive,Ht=I.transparent;_.setupLightsView(St),at===!0&&Xt.setGlobalState(C.clippingPlanes,St),Et&&F.viewport(j.copy(Et)),ut.length>0&&Wa(ut,ot,St),Pt.length>0&&Wa(Pt,ot,St),Ht.length>0&&Wa(Ht,ot,St),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Fo(I,ot,St,Et){if((St.isScene===!0?St.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Et.id]===void 0&&(_.state.transmissionRenderTarget[Et.id]=new Mr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Uo:Ai,minFilter:yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Pt=_.state.transmissionRenderTarget[Et.id],Ht=Et.viewport||j;Pt.setSize(Ht.z*C.transmissionResolutionScale,Ht.w*C.transmissionResolutionScale);const qt=C.getRenderTarget();C.setRenderTarget(Pt),C.getClearColor(T),$=C.getClearAlpha(),$<1&&C.setClearColor(16777215,.5),C.clear(),ve&&Tt.render(St);const Zt=C.toneMapping;C.toneMapping=ka;const se=Et.viewport;if(Et.viewport!==void 0&&(Et.viewport=void 0),_.setupLightsView(Et),at===!0&&Xt.setGlobalState(C.clippingPlanes,Et),Wa(I,St,Et),yt.updateMultisampleRenderTarget(Pt),yt.updateRenderTargetMipmap(Pt),ht.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let te=0,me=ot.length;te<me;te++){const Ue=ot[te],Xe=Ue.object,Me=Ue.geometry,Ee=Ue.material,ie=Ue.group;if(Ee.side===$i&&Xe.layers.test(Et.layers)){const Ke=Ee.side;Ee.side=Bn,Ee.needsUpdate=!0,aa(Xe,St,Et,Me,Ee,ie),Ee.side=Ke,Ee.needsUpdate=!0,ne=!0}}ne===!0&&(yt.updateMultisampleRenderTarget(Pt),yt.updateRenderTargetMipmap(Pt))}C.setRenderTarget(qt),C.setClearColor(T,$),se!==void 0&&(Et.viewport=se),C.toneMapping=Zt}function Wa(I,ot,St){const Et=ot.isScene===!0?ot.overrideMaterial:null;for(let ut=0,Pt=I.length;ut<Pt;ut++){const Ht=I[ut],qt=Ht.object,Zt=Ht.geometry,se=Ht.group;let ne=Ht.material;ne.allowOverride===!0&&Et!==null&&(ne=Et),qt.layers.test(St.layers)&&aa(qt,ot,St,Zt,ne,se)}}function aa(I,ot,St,Et,ut,Pt){I.onBeforeRender(C,ot,St,Et,ut,Pt),I.modelViewMatrix.multiplyMatrices(St.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ut.onBeforeRender(C,ot,St,Et,I,Pt),ut.transparent===!0&&ut.side===$i&&ut.forceSinglePass===!1?(ut.side=Bn,ut.needsUpdate=!0,C.renderBufferDirect(St,ot,Et,ut,I,Pt),ut.side=Ga,ut.needsUpdate=!0,C.renderBufferDirect(St,ot,Et,ut,I,Pt),ut.side=$i):C.renderBufferDirect(St,ot,Et,ut,I,Pt),I.onAfterRender(C,ot,St,Et,ut,Pt)}function ra(I,ot,St){ot.isScene!==!0&&(ot=re);const Et=_t.get(I),ut=_.state.lights,Pt=_.state.shadowsArray,Ht=ut.state.version,qt=Mt.getParameters(I,ut.state,Pt,ot,St),Zt=Mt.getProgramCacheKey(qt);let se=Et.programs;Et.environment=I.isMeshStandardMaterial?ot.environment:null,Et.fog=ot.fog,Et.envMap=(I.isMeshStandardMaterial?P:lt).get(I.envMap||Et.environment),Et.envMapRotation=Et.environment!==null&&I.envMap===null?ot.environmentRotation:I.envMapRotation,se===void 0&&(I.addEventListener("dispose",Qt),se=new Map,Et.programs=se);let ne=se.get(Zt);if(ne!==void 0){if(Et.currentProgram===ne&&Et.lightsStateVersion===Ht)return Ci(I,qt),ne}else qt.uniforms=Mt.getUniforms(I),I.onBeforeCompile(qt,C),ne=Mt.acquireProgram(qt,Zt),se.set(Zt,ne),Et.uniforms=qt.uniforms;const te=Et.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(te.clippingPlanes=Xt.uniform),Ci(I,qt),Et.needsLights=en(I),Et.lightsStateVersion=Ht,Et.needsLights&&(te.ambientLightColor.value=ut.state.ambient,te.lightProbe.value=ut.state.probe,te.directionalLights.value=ut.state.directional,te.directionalLightShadows.value=ut.state.directionalShadow,te.spotLights.value=ut.state.spot,te.spotLightShadows.value=ut.state.spotShadow,te.rectAreaLights.value=ut.state.rectArea,te.ltc_1.value=ut.state.rectAreaLTC1,te.ltc_2.value=ut.state.rectAreaLTC2,te.pointLights.value=ut.state.point,te.pointLightShadows.value=ut.state.pointShadow,te.hemisphereLights.value=ut.state.hemi,te.directionalShadowMap.value=ut.state.directionalShadowMap,te.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,te.spotShadowMap.value=ut.state.spotShadowMap,te.spotLightMatrix.value=ut.state.spotLightMatrix,te.spotLightMap.value=ut.state.spotLightMap,te.pointShadowMap.value=ut.state.pointShadowMap,te.pointShadowMatrix.value=ut.state.pointShadowMatrix),Et.currentProgram=ne,Et.uniformsList=null,ne}function Ri(I){if(I.uniformsList===null){const ot=I.currentProgram.getUniforms();I.uniformsList=Eu.seqWithValue(ot.seq,I.uniforms)}return I.uniformsList}function Ci(I,ot){const St=_t.get(I);St.outputColorSpace=ot.outputColorSpace,St.batching=ot.batching,St.batchingColor=ot.batchingColor,St.instancing=ot.instancing,St.instancingColor=ot.instancingColor,St.instancingMorph=ot.instancingMorph,St.skinning=ot.skinning,St.morphTargets=ot.morphTargets,St.morphNormals=ot.morphNormals,St.morphColors=ot.morphColors,St.morphTargetsCount=ot.morphTargetsCount,St.numClippingPlanes=ot.numClippingPlanes,St.numIntersection=ot.numClipIntersection,St.vertexAlphas=ot.vertexAlphas,St.vertexTangents=ot.vertexTangents,St.toneMapping=ot.toneMapping}function qa(I,ot,St,Et,ut){ot.isScene!==!0&&(ot=re),yt.resetTextureUnits();const Pt=ot.fog,Ht=Et.isMeshStandardMaterial?ot.environment:null,qt=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ss,Zt=(Et.isMeshStandardMaterial?P:lt).get(Et.envMap||Ht),se=Et.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,ne=!!St.attributes.tangent&&(!!Et.normalMap||Et.anisotropy>0),te=!!St.morphAttributes.position,me=!!St.morphAttributes.normal,Ue=!!St.morphAttributes.color;let Xe=ka;Et.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xe=C.toneMapping);const Me=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,Ee=Me!==void 0?Me.length:0,ie=_t.get(Et),Ke=_.state.lights;if(at===!0&&(At===!0||I!==L)){const dn=I===L&&Et.id===U;Xt.setState(Et,I,dn)}let Ae=!1;Et.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Ke.state.version||ie.outputColorSpace!==qt||ut.isBatchedMesh&&ie.batching===!1||!ut.isBatchedMesh&&ie.batching===!0||ut.isBatchedMesh&&ie.batchingColor===!0&&ut.colorTexture===null||ut.isBatchedMesh&&ie.batchingColor===!1&&ut.colorTexture!==null||ut.isInstancedMesh&&ie.instancing===!1||!ut.isInstancedMesh&&ie.instancing===!0||ut.isSkinnedMesh&&ie.skinning===!1||!ut.isSkinnedMesh&&ie.skinning===!0||ut.isInstancedMesh&&ie.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&ie.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&ie.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&ie.instancingMorph===!1&&ut.morphTexture!==null||ie.envMap!==Zt||Et.fog===!0&&ie.fog!==Pt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Xt.numPlanes||ie.numIntersection!==Xt.numIntersection)||ie.vertexAlphas!==se||ie.vertexTangents!==ne||ie.morphTargets!==te||ie.morphNormals!==me||ie.morphColors!==Ue||ie.toneMapping!==Xe||ie.morphTargetsCount!==Ee)&&(Ae=!0):(Ae=!0,ie.__version=Et.version);let En=ie.currentProgram;Ae===!0&&(En=ra(Et,ot,ut));let oa=!1,We=!1,Ui=!1;const Ge=En.getUniforms(),bn=ie.uniforms;if(F.useProgram(En.program)&&(oa=!0,We=!0,Ui=!0),Et.id!==U&&(U=Et.id,We=!0),oa||L!==I){F.buffers.depth.getReversed()?(Nt.copy(I.projectionMatrix),Yy(Nt),Zy(Nt),Ge.setValue(M,"projectionMatrix",Nt)):Ge.setValue(M,"projectionMatrix",I.projectionMatrix),Ge.setValue(M,"viewMatrix",I.matrixWorldInverse);const xn=Ge.map.cameraPosition;xn!==void 0&&xn.setValue(M,Wt.setFromMatrixPosition(I.matrixWorld)),V.logarithmicDepthBuffer&&Ge.setValue(M,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Et.isMeshPhongMaterial||Et.isMeshToonMaterial||Et.isMeshLambertMaterial||Et.isMeshBasicMaterial||Et.isMeshStandardMaterial||Et.isShaderMaterial)&&Ge.setValue(M,"isOrthographic",I.isOrthographicCamera===!0),L!==I&&(L=I,We=!0,Ui=!0)}if(ut.isSkinnedMesh){Ge.setOptional(M,ut,"bindMatrix"),Ge.setOptional(M,ut,"bindMatrixInverse");const dn=ut.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ge.setValue(M,"boneTexture",dn.boneTexture,yt))}ut.isBatchedMesh&&(Ge.setOptional(M,ut,"batchingTexture"),Ge.setValue(M,"batchingTexture",ut._matricesTexture,yt),Ge.setOptional(M,ut,"batchingIdTexture"),Ge.setValue(M,"batchingIdTexture",ut._indirectTexture,yt),Ge.setOptional(M,ut,"batchingColorTexture"),ut._colorsTexture!==null&&Ge.setValue(M,"batchingColorTexture",ut._colorsTexture,yt));const on=St.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&kt.update(ut,St,En),(We||ie.receiveShadow!==ut.receiveShadow)&&(ie.receiveShadow=ut.receiveShadow,Ge.setValue(M,"receiveShadow",ut.receiveShadow)),Et.isMeshGouraudMaterial&&Et.envMap!==null&&(bn.envMap.value=Zt,bn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),Et.isMeshStandardMaterial&&Et.envMap===null&&ot.environment!==null&&(bn.envMapIntensity.value=ot.environmentIntensity),We&&(Ge.setValue(M,"toneMappingExposure",C.toneMappingExposure),ie.needsLights&&sa(bn,Ui),Pt&&Et.fog===!0&&dt.refreshFogUniforms(bn,Pt),dt.refreshMaterialUniforms(bn,Et,tt,q,_.state.transmissionRenderTarget[I.id]),Eu.upload(M,Ri(ie),bn,yt)),Et.isShaderMaterial&&Et.uniformsNeedUpdate===!0&&(Eu.upload(M,Ri(ie),bn,yt),Et.uniformsNeedUpdate=!1),Et.isSpriteMaterial&&Ge.setValue(M,"center",ut.center),Ge.setValue(M,"modelViewMatrix",ut.modelViewMatrix),Ge.setValue(M,"normalMatrix",ut.normalMatrix),Ge.setValue(M,"modelMatrix",ut.matrixWorld),Et.isShaderMaterial||Et.isRawShaderMaterial){const dn=Et.uniformsGroups;for(let xn=0,_i=dn.length;xn<_i;xn++){const Li=dn[xn];it.update(Li,En),it.bind(Li,En)}}return En}function sa(I,ot){I.ambientLightColor.needsUpdate=ot,I.lightProbe.needsUpdate=ot,I.directionalLights.needsUpdate=ot,I.directionalLightShadows.needsUpdate=ot,I.pointLights.needsUpdate=ot,I.pointLightShadows.needsUpdate=ot,I.spotLights.needsUpdate=ot,I.spotLightShadows.needsUpdate=ot,I.rectAreaLights.needsUpdate=ot,I.hemisphereLights.needsUpdate=ot}function en(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(I,ot,St){const Et=_t.get(I);Et.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Et.__autoAllocateDepthBuffer===!1&&(Et.__useRenderToTexture=!1),_t.get(I.texture).__webglTexture=ot,_t.get(I.depthTexture).__webglTexture=Et.__autoAllocateDepthBuffer?void 0:St,Et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,ot){const St=_t.get(I);St.__webglFramebuffer=ot,St.__useDefaultFramebuffer=ot===void 0};const Ho=M.createFramebuffer();this.setRenderTarget=function(I,ot=0,St=0){W=I,k=ot,B=St;let Et=!0,ut=null,Pt=!1,Ht=!1;if(I){const Zt=_t.get(I);if(Zt.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(M.FRAMEBUFFER,null),Et=!1;else if(Zt.__webglFramebuffer===void 0)yt.setupRenderTarget(I);else if(Zt.__hasExternalTextures)yt.rebindTextures(I,_t.get(I.texture).__webglTexture,_t.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const te=I.depthTexture;if(Zt.__boundDepthTexture!==te){if(te!==null&&_t.has(te)&&(I.width!==te.image.width||I.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(I)}}const se=I.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Ht=!0);const ne=_t.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ne[ot])?ut=ne[ot][St]:ut=ne[ot],Pt=!0):I.samples>0&&yt.useMultisampledRTT(I)===!1?ut=_t.get(I).__webglMultisampledFramebuffer:Array.isArray(ne)?ut=ne[St]:ut=ne,j.copy(I.viewport),z.copy(I.scissor),Y=I.scissorTest}else j.copy(G).multiplyScalar(tt).floor(),z.copy(Z).multiplyScalar(tt).floor(),Y=vt;if(St!==0&&(ut=Ho),F.bindFramebuffer(M.FRAMEBUFFER,ut)&&Et&&F.drawBuffers(I,ut),F.viewport(j),F.scissor(z),F.setScissorTest(Y),Pt){const Zt=_t.get(I.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Zt.__webglTexture,St)}else if(Ht){const Zt=_t.get(I.texture),se=ot;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Zt.__webglTexture,St,se)}else if(I!==null&&St!==0){const Zt=_t.get(I.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Zt.__webglTexture,St)}U=-1},this.readRenderTargetPixels=function(I,ot,St,Et,ut,Pt,Ht,qt=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=_t.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ht!==void 0&&(Zt=Zt[Ht]),Zt){F.bindFramebuffer(M.FRAMEBUFFER,Zt);try{const se=I.textures[qt],ne=se.format,te=se.type;if(!V.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ot>=0&&ot<=I.width-Et&&St>=0&&St<=I.height-ut&&(I.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+qt),M.readPixels(ot,St,Et,ut,zt.convert(ne),zt.convert(te),Pt))}finally{const se=W!==null?_t.get(W).__webglFramebuffer:null;F.bindFramebuffer(M.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(I,ot,St,Et,ut,Pt,Ht,qt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=_t.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ht!==void 0&&(Zt=Zt[Ht]),Zt)if(ot>=0&&ot<=I.width-Et&&St>=0&&St<=I.height-ut){F.bindFramebuffer(M.FRAMEBUFFER,Zt);const se=I.textures[qt],ne=se.format,te=se.type;if(!V.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,me),M.bufferData(M.PIXEL_PACK_BUFFER,Pt.byteLength,M.STREAM_READ),I.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+qt),M.readPixels(ot,St,Et,ut,zt.convert(ne),zt.convert(te),0);const Ue=W!==null?_t.get(W).__webglFramebuffer:null;F.bindFramebuffer(M.FRAMEBUFFER,Ue);const Xe=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await qy(M,Xe,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,me),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,Pt),M.deleteBuffer(me),M.deleteSync(Xe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,ot=null,St=0){const Et=Math.pow(2,-St),ut=Math.floor(I.image.width*Et),Pt=Math.floor(I.image.height*Et),Ht=ot!==null?ot.x:0,qt=ot!==null?ot.y:0;yt.setTexture2D(I,0),M.copyTexSubImage2D(M.TEXTURE_2D,St,0,0,Ht,qt,ut,Pt),F.unbindTexture()};const ko=M.createFramebuffer(),Di=M.createFramebuffer();this.copyTextureToTexture=function(I,ot,St=null,Et=null,ut=0,Pt=null){Pt===null&&(ut!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=ut,ut=0):Pt=0);let Ht,qt,Zt,se,ne,te,me,Ue,Xe;const Me=I.isCompressedTexture?I.mipmaps[Pt]:I.image;if(St!==null)Ht=St.max.x-St.min.x,qt=St.max.y-St.min.y,Zt=St.isBox3?St.max.z-St.min.z:1,se=St.min.x,ne=St.min.y,te=St.isBox3?St.min.z:0;else{const on=Math.pow(2,-ut);Ht=Math.floor(Me.width*on),qt=Math.floor(Me.height*on),I.isDataArrayTexture?Zt=Me.depth:I.isData3DTexture?Zt=Math.floor(Me.depth*on):Zt=1,se=0,ne=0,te=0}Et!==null?(me=Et.x,Ue=Et.y,Xe=Et.z):(me=0,Ue=0,Xe=0);const Ee=zt.convert(ot.format),ie=zt.convert(ot.type);let Ke;ot.isData3DTexture?(yt.setTexture3D(ot,0),Ke=M.TEXTURE_3D):ot.isDataArrayTexture||ot.isCompressedArrayTexture?(yt.setTexture2DArray(ot,0),Ke=M.TEXTURE_2D_ARRAY):(yt.setTexture2D(ot,0),Ke=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,ot.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,ot.unpackAlignment);const Ae=M.getParameter(M.UNPACK_ROW_LENGTH),En=M.getParameter(M.UNPACK_IMAGE_HEIGHT),oa=M.getParameter(M.UNPACK_SKIP_PIXELS),We=M.getParameter(M.UNPACK_SKIP_ROWS),Ui=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Me.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Me.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,se),M.pixelStorei(M.UNPACK_SKIP_ROWS,ne),M.pixelStorei(M.UNPACK_SKIP_IMAGES,te);const Ge=I.isDataArrayTexture||I.isData3DTexture,bn=ot.isDataArrayTexture||ot.isData3DTexture;if(I.isDepthTexture){const on=_t.get(I),dn=_t.get(ot),xn=_t.get(on.__renderTarget),_i=_t.get(dn.__renderTarget);F.bindFramebuffer(M.READ_FRAMEBUFFER,xn.__webglFramebuffer),F.bindFramebuffer(M.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Li=0;Li<Zt;Li++)Ge&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,_t.get(I).__webglTexture,ut,te+Li),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,_t.get(ot).__webglTexture,Pt,Xe+Li)),M.blitFramebuffer(se,ne,Ht,qt,me,Ue,Ht,qt,M.DEPTH_BUFFER_BIT,M.NEAREST);F.bindFramebuffer(M.READ_FRAMEBUFFER,null),F.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(ut!==0||I.isRenderTargetTexture||_t.has(I)){const on=_t.get(I),dn=_t.get(ot);F.bindFramebuffer(M.READ_FRAMEBUFFER,ko),F.bindFramebuffer(M.DRAW_FRAMEBUFFER,Di);for(let xn=0;xn<Zt;xn++)Ge?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,on.__webglTexture,ut,te+xn):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,on.__webglTexture,ut),bn?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,dn.__webglTexture,Pt,Xe+xn):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,dn.__webglTexture,Pt),ut!==0?M.blitFramebuffer(se,ne,Ht,qt,me,Ue,Ht,qt,M.COLOR_BUFFER_BIT,M.NEAREST):bn?M.copyTexSubImage3D(Ke,Pt,me,Ue,Xe+xn,se,ne,Ht,qt):M.copyTexSubImage2D(Ke,Pt,me,Ue,se,ne,Ht,qt);F.bindFramebuffer(M.READ_FRAMEBUFFER,null),F.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else bn?I.isDataTexture||I.isData3DTexture?M.texSubImage3D(Ke,Pt,me,Ue,Xe,Ht,qt,Zt,Ee,ie,Me.data):ot.isCompressedArrayTexture?M.compressedTexSubImage3D(Ke,Pt,me,Ue,Xe,Ht,qt,Zt,Ee,Me.data):M.texSubImage3D(Ke,Pt,me,Ue,Xe,Ht,qt,Zt,Ee,ie,Me):I.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,Pt,me,Ue,Ht,qt,Ee,ie,Me.data):I.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,Pt,me,Ue,Me.width,Me.height,Ee,Me.data):M.texSubImage2D(M.TEXTURE_2D,Pt,me,Ue,Ht,qt,Ee,ie,Me);M.pixelStorei(M.UNPACK_ROW_LENGTH,Ae),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,En),M.pixelStorei(M.UNPACK_SKIP_PIXELS,oa),M.pixelStorei(M.UNPACK_SKIP_ROWS,We),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Ui),Pt===0&&ot.generateMipmaps&&M.generateMipmap(Ke),F.unbindTexture()},this.copyTextureToTexture3D=function(I,ot,St=null,Et=null,ut=0){return _s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,ot,St,Et,ut)},this.initRenderTarget=function(I){_t.get(I).__webglFramebuffer===void 0&&yt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?yt.setTextureCube(I,0):I.isData3DTexture?yt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?yt.setTexture2DArray(I,0):yt.setTexture2D(I,0),F.unbindTexture()},this.resetState=function(){k=0,B=0,W=null,F.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}class i0{constructor(t){ge(this,"scene");ge(this,"camera");ge(this,"renderer");ge(this,"starMeshes",[]);ge(this,"starVelocities",[]);ge(this,"starToFollow",null);ge(this,"starToFollowIndex",null);ge(this,"planetMesh",null);ge(this,"moonMesh",null);ge(this,"starLight",null);ge(this,"ambientLight");ge(this,"fillLight");ge(this,"planetFinalDestination",null);ge(this,"starInitialVelocity",null);ge(this,"moonOrbitAngle",0);ge(this,"animationStartTime",null);ge(this,"cameraFollowStartTime",null);ge(this,"initialLookTarget",null);ge(this,"landingStartCameraPos",null);ge(this,"landingTargetPos",null);ge(this,"landingStartLookTarget",null);ge(this,"landingStarted",!1);ge(this,"TOTAL_STAR_COUNT",5e3);ge(this,"CAMERA_ZOOM_DELAY_MS",1e3);ge(this,"cameraZoomDurationMs",4e3);ge(this,"cameraFinalOffsetZ",10);ge(this,"planetDistanceFromStar",4.5);ge(this,"moonDistanceFromPlanet",.4);ge(this,"moonOrbitSpeed",.08);ge(this,"STAR_SPEED_MIN",.2);ge(this,"STAR_SPEED_MAX",.4);ge(this,"subtleWhiteTintRamp");ge(this,"customEase");ge(this,"easeInCubic");ge(this,"easeOutCubic");ge(this,"shouldFollowStar",!0);ge(this,"forExport",!1);ge(this,"onFrame");this.scene=t.scene||new yS,this.camera=t.camera||new Kn(10,t.width/t.height,.1,2e3),this.camera.position.z=400,this.renderer=t.renderer,this.renderer.setSize(t.width,t.height),this.forExport=!!t.forExport,this.onFrame=t.onFrame,this.subtleWhiteTintRamp=`
      vec3 subtleWhiteTint(float t, float shift) {
        vec3 white = vec3(1.0);
        vec3 tint;
        if (shift < 0.33) {
          tint = vec3(0.8, 0.87, 1.0);
        } else if (shift < 0.66) {
          tint = vec3(1.0, 0.97, 0.8);
        } else {
          tint = vec3(1.0, 0.85, 0.95);
        }
        float tintAmount = 0.08 + 0.12 * t;
        return mix(white, tint, tintAmount);
      }
    `,this.easeInCubic=i=>i*i*i,this.easeOutCubic=i=>1-(1-i)**3,this.customEase=i=>i<.6?.5*this.easeInCubic(i/.6):.5+.5*this.easeOutCubic((i-.6)/.4),this.init()}createPlanetarySystem(){const t=new wu(.05,32,32),i=new wg({color:3829413,specular:2236962,shininess:30,flatShading:!1});this.planetMesh=new si(t,i),this.scene.add(this.planetMesh);const r=new wu(.013,24,24),l=new wg({color:12237498,specular:1118481,shininess:10});this.moonMesh=new si(r,l),this.scene.add(this.moonMesh),this.starLight=new AS(16777215,10,0,2.2),this.scene.add(this.starLight),this.ambientLight=new CS(16777215,.22),this.scene.add(this.ambientLight),this.fillLight=new RS(16777215,.55),this.fillLight.position.set(20,30,40),this.scene.add(this.fillLight)}init(){for(let i=0;i<this.TOTAL_STAR_COUNT;i++){const r=new Io(1.5,1.5),l=new ia({transparent:!0,depthWrite:!1,uniforms:{glowStrength:{value:2.2},colorShift:{value:Math.random()}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv - 0.5;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec2 vUv;
          uniform float glowStrength;
          uniform float colorShift;
          ${this.subtleWhiteTintRamp}
          void main() {
            float dist = length(vUv) * 2.0;
            float core = smoothstep(0.13, 0.07, dist);
            float glow = exp(-dist * (glowStrength * 1.7)) * 0.7;
            float t = clamp(dist, 0.0, 1.0);
            vec3 color = subtleWhiteTint(t, colorShift);
            float blend = smoothstep(0.0, 0.45, 1.0 - dist);
            vec3 finalColor = mix(color * glow, color, blend);
            float alpha = max(core, glow * 0.5);
            gl_FragColor = vec4(finalColor, alpha);
          }
        `}),u=new si(r,l);u.position.set(0,0,0),this.scene.add(u),this.starMeshes.push(u);const h=Math.random()*2*Math.PI,f=Math.acos(2*Math.random()-1),d=this.STAR_SPEED_MIN+Math.random()*(this.STAR_SPEED_MAX-this.STAR_SPEED_MIN);this.starVelocities.push(new ft(Math.sin(f)*Math.cos(h)*d,Math.sin(f)*Math.sin(h)*d,Math.cos(f)*d))}const t=[];for(let i=0;i<this.starVelocities.length;i++){const r=this.starVelocities[i];r.z>.15&&Math.abs(r.x)<.25&&Math.abs(r.y)<.25&&t.push(i)}if(t.length>0){t.sort((r,l)=>this.starVelocities[r].length()-this.starVelocities[l].length());const i=Math.floor(t.length/2);this.starToFollowIndex=t[i]}else{for(let i=0;i<this.starVelocities.length;i++)if(this.starVelocities[i].z>0){this.starToFollowIndex=i;break}this.starToFollowIndex===null&&(this.starToFollowIndex=0)}if(this.starToFollowIndex!==null&&this.starMeshes[this.starToFollowIndex]){this.starToFollow=this.starMeshes[this.starToFollowIndex],this.starInitialVelocity=this.starVelocities[this.starToFollowIndex].clone().normalize();const i=new ft().crossVectors(this.starInitialVelocity,new ft(0,0,1)).normalize().multiplyScalar(3);this.planetFinalDestination=this.starInitialVelocity.clone().multiplyScalar(this.planetDistanceFromStar).add(i)}this.animationStartTime=this.forExport?0:performance.now(),this.cameraFollowStartTime=null,this.createPlanetarySystem()}stepFrame(t){var i;for(let r=0;r<this.starMeshes.length;r++)this.starMeshes[r].position.add(this.starVelocities[r]);if(this.starToFollow&&this.starToFollowIndex!==null&&this.planetMesh&&this.moonMesh&&this.starLight){let r=0;if(this.animationStartTime!==null){const l=t-this.animationStartTime;r=Math.min(l/this.cameraZoomDurationMs,1),r=this.customEase(r)}if(this.planetFinalDestination&&this.planetMesh!==null){const l=new ft(0,0,0).lerp(this.planetFinalDestination,r);this.planetMesh.position.copy(l)}if(this.starInitialVelocity&&this.planetMesh!==null&&this.moonMesh!==null){const l=new ft().crossVectors(this.starInitialVelocity,new ft(0,0,1)).normalize(),u=new ft().crossVectors(l,this.starInitialVelocity).normalize(),h=new ft().crossVectors(l,u).normalize();this.moonOrbitAngle+=this.moonOrbitSpeed*(1/60);const f=u.clone().multiplyScalar(Math.cos(this.moonOrbitAngle)*this.moonDistanceFromPlanet).add(h.clone().multiplyScalar(Math.sin(this.moonOrbitAngle)*this.moonDistanceFromPlanet)),d=this.planetMesh.position.clone().add(f);this.moonMesh!==null&&this.moonMesh.position.copy(d)}this.starLight!==null&&((i=this.starLight)!=null&&i.position)&&this.starToFollow&&"position"in this.starToFollow&&this.starLight.position.copy(this.starToFollow.position)}if(this.shouldFollowStar&&this.planetMesh&&this.starToFollow&&this.starToFollowIndex!==null&&this.cameraFollowStartTime===null&&this.animationStartTime!==null&&t-this.animationStartTime>=this.CAMERA_ZOOM_DELAY_MS){this.cameraFollowStartTime=t;const r=this.planetMesh.position.clone(),l=new ft;this.camera.getWorldDirection(l);const h=r.clone().sub(this.camera.position).dot(l);this.initialLookTarget=this.camera.position.clone().add(l.multiplyScalar(h))}if(this.shouldFollowStar&&this.planetMesh&&this.starToFollow&&this.starToFollowIndex!==null&&this.cameraFollowStartTime!==null&&this.initialLookTarget){const r=Math.min(t-this.cameraFollowStartTime,this.cameraZoomDurationMs);let l=r/this.cameraZoomDurationMs;l=l**4;const u=this.cameraFinalOffsetZ,h=.002;let d=h+(.25-h)*l;d=Math.min(d,.08);const p=this.starToFollow.position,g=this.planetMesh.position,x=this.initialLookTarget.clone().lerp(g,d),y=p.clone().lerp(g,1.18),v=1500,b=this.cameraZoomDurationMs-v;if(r>=b){let E=(r-b)/v;E=Math.min(Math.max(E,0),1),E=1-(1-E)**10;const _=.5*.7;if(!this.landingStarted){this.landingStartCameraPos=this.camera.position.clone();const A=g.clone().sub(this.camera.position).normalize();this.landingTargetPos=A;const R=new ft;this.camera.getWorldDirection(R),this.landingStartLookTarget=this.camera.position.clone().add(R),this.landingStarted=!0}if(this.landingStartCameraPos&&this.landingTargetPos)if(E<1){const A=g.clone().sub(this.landingTargetPos.clone().multiplyScalar(_));if(this.camera.position.copy(this.landingStartCameraPos.clone().lerp(A,E)),this.landingStartLookTarget){const R=this.landingStartLookTarget.clone().lerp(g,E);this.camera.lookAt(R)}else this.camera.lookAt(g)}else{const A=g.clone().sub(this.landingTargetPos.clone().multiplyScalar(_));this.camera.position.copy(A),this.camera.lookAt(g)}}else{this.landingStarted=!1,this.camera.position.x+=(y.x-this.camera.position.x)*d,this.camera.position.y+=(y.y-this.camera.position.y)*d;const E=d,S=this.camera.position.z,_=g.z,A=this.starVelocities[this.starToFollowIndex].z,R=.01,C=_+u;let N=Math.log(R/Math.abs(C-S))/Math.log(1-E);(!Number.isFinite(N)||N<0)&&(N=0),N=Math.min(N,15);const W=_+A*N+u;this.camera.position.z+=(W-this.camera.position.z)*E,this.camera.lookAt(x)}}this.renderer.render(this.scene,this.camera)}}function dT({onExportFrames:o}){const t=Ia.useRef(null),i=Ia.useRef(null),r=Ia.useRef(null);Ia.useEffect(()=>{let u=null,h,f;const d=t.current;function p(){if(!h||!f||!d)return;const x=d.clientWidth,y=d.clientHeight;f.aspect=x/y,f.updateProjectionMatrix(),h.setSize(x,y)}function g(x){u&&u.stepFrame(x)}if(d){let x=function(){r.current=requestAnimationFrame(x),g(performance.now())};const y=d.clientWidth,v=d.clientHeight;h=new n0({antialias:!0}),i.current=h,u=new i0({width:y,height:v,renderer:h}),f=u.camera,d.appendChild(h.domElement),x(),window.addEventListener("resize",p)}return()=>{var x;r.current&&cancelAnimationFrame(r.current),window.removeEventListener("resize",p),i.current&&d&&d.removeChild(i.current.domElement),(x=i.current)==null||x.dispose()}},[]);const l=Ia.useCallback(async()=>{const f=new n0({antialias:!0,preserveDrawingBuffer:!0});f.setSize(1920,1080);const d=new i0({width:1920,height:1080,renderer:f,forExport:!0}),p=new ny,g=d.cameraZoomDurationMs+500,x=60,y=Math.ceil(g/1e3*x);d.moonOrbitAngle=0;for(let b=0;b<y;b++){const E=b*(1e3/x);d.stepFrame(E);const S=d.renderer.domElement.toDataURL("image/png"),A=await(await fetch(S)).blob();p.file(`frame_${String(b+1).padStart(4,"0")}.png`,A)}const v=await p.generateAsync({type:"blob"});$x.saveAs(v,"starfield_frames.zip")},[]);return Ia.useEffect(()=>{o&&o(l)},[o,l]),za.jsx("div",{ref:t,style:{width:"100%",height:"100%",minHeight:400}})}function pT(){const[o,t]=Ia.useState(0),[i,r]=Ia.useState(null),l=h=>{r(()=>h)},u=async()=>{i&&await i()};return za.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#181a1b"},children:[za.jsxs("div",{style:{display:"flex",gap:16,margin:"32px 0 24px 0"},children:[za.jsx("button",{onClick:()=>t(h=>h+1),style:{padding:"0.7em 2.2em",fontSize:"1.2em",fontWeight:600,borderRadius:8,border:"1px solid #333",background:"linear-gradient(90deg, #232526 0%, #414345 100%)",color:"#fff",boxShadow:"0 2px 8px #0004",cursor:"pointer",letterSpacing:1},type:"button",children:"Restart Animation"}),za.jsx("button",{onClick:u,style:{padding:"0.7em 2.2em",fontSize:"1.2em",fontWeight:600,borderRadius:8,border:"1px solid #333",background:"linear-gradient(90deg, #232526 0%, #414345 100%)",color:"#fff",boxShadow:"0 2px 8px #0004",cursor:"pointer",letterSpacing:1},type:"button",children:"Export Frames (ZIP)"})]}),za.jsx("div",{style:{width:"70vw",maxWidth:1100,aspectRatio:"16 / 9",background:"#111",borderRadius:16,overflow:"hidden",boxShadow:"0 4px 32px #000a",border:"1px solid #222",display:"flex",alignItems:"center",justifyContent:"center"},children:za.jsx(dT,{onExportFrames:l},o)})]})}const a0=document.getElementById("root");if(a0)Kx.createRoot(a0).render(za.jsx(pT,{}));else throw new Error('Root element with id "root" not found');
