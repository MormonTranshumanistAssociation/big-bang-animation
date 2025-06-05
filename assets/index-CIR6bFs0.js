(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function c0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Lf={exports:{}},yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function Vy(){if(W_)return yo;W_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:f,ref:l!==void 0?l:null,props:u}}return yo.Fragment=e,yo.jsx=i,yo.jsxs=i,yo}var q_;function Xy(){return q_||(q_=1,Lf.exports=Vy()),Lf.exports}var Pa=Xy(),Nf={exports:{}},xo={},Of={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function Wy(){return Y_||(Y_=1,function(o){function e(X,q){var et=X.length;X.push(q);t:for(;0<et;){var rt=et-1>>>1,H=X[rt];if(0<l(H,q))X[rt]=q,X[et]=H,et=rt;else break t}}function i(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var q=X[0],et=X.pop();if(et!==q){X[0]=et;t:for(var rt=0,H=X.length,G=H>>>1;rt<G;){var K=2*(rt+1)-1,dt=X[K],j=K+1,nt=X[j];if(0>l(dt,et))j<H&&0>l(nt,dt)?(X[rt]=nt,X[j]=et,rt=j):(X[rt]=dt,X[K]=et,rt=K);else if(j<H&&0>l(nt,et))X[rt]=nt,X[j]=et,rt=j;else break t}}return q}function l(X,q){var et=X.sortIndex-q.sortIndex;return et!==0?et:X.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();o.unstable_now=function(){return f.now()-h}}var d=[],p=[],g=1,y=null,x=3,v=!1,b=!1,E=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function R(X){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=X)r(p),q.sortIndex=q.expirationTime,e(d,q);else break;q=i(p)}}function N(X){if(E=!1,R(X),!b)if(i(d)!==null)b=!0,k||(k=!0,B());else{var q=i(p);q!==null&&$(N,q.startTime-X)}}var k=!1,P=-1,W=5,U=-1;function L(){return S?!0:!(o.unstable_now()-U<W)}function Z(){if(S=!1,k){var X=o.unstable_now();U=X;var q=!0;try{t:{b=!1,E&&(E=!1,A(P),P=-1),v=!0;var et=x;try{e:{for(R(X),y=i(d);y!==null&&!(y.expirationTime>X&&L());){var rt=y.callback;if(typeof rt=="function"){y.callback=null,x=y.priorityLevel;var H=rt(y.expirationTime<=X);if(X=o.unstable_now(),typeof H=="function"){y.callback=H,R(X),q=!0;break e}y===i(d)&&r(d),R(X)}else r(d);y=i(d)}if(y!==null)q=!0;else{var G=i(p);G!==null&&$(N,G.startTime-X),q=!1}}break t}finally{y=null,x=et,v=!1}q=void 0}}finally{q?B():k=!1}}}var B;if(typeof C=="function")B=function(){C(Z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,T=Y.port2;Y.port1.onmessage=Z,B=function(){T.postMessage(null)}}else B=function(){_(Z,0)};function $(X,q){P=_(function(){X(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(X){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var et=x;x=q;try{return X()}finally{x=et}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(X,q){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var et=x;x=X;try{return q()}finally{x=et}},o.unstable_scheduleCallback=function(X,q,et){var rt=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?rt+et:rt):et=rt,X){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=et+H,X={id:g++,callback:q,priorityLevel:X,startTime:et,expirationTime:H,sortIndex:-1},et>rt?(X.sortIndex=et,e(p,X),i(d)===null&&X===i(p)&&(E?(A(P),P=-1):E=!0,$(N,et-rt))):(X.sortIndex=H,e(d,X),b||v||(b=!0,k||(k=!0,B()))),X},o.unstable_shouldYield=L,o.unstable_wrapCallback=function(X){var q=x;return function(){var et=x;x=q;try{return X.apply(this,arguments)}finally{x=et}}}}(Pf)),Pf}var Z_;function qy(){return Z_||(Z_=1,Of.exports=Wy()),Of.exports}var zf={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_;function Yy(){if(j_)return de;j_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(H){return H===null||typeof H!="object"?null:(H=y&&H[y]||H["@@iterator"],typeof H=="function"?H:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function S(H,G,K){this.props=H,this.context=G,this.refs=E,this.updater=K||v}S.prototype.isReactComponent={},S.prototype.setState=function(H,G){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,G,"setState")},S.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function _(){}_.prototype=S.prototype;function A(H,G,K){this.props=H,this.context=G,this.refs=E,this.updater=K||v}var C=A.prototype=new _;C.constructor=A,b(C,S.prototype),C.isPureReactComponent=!0;var R=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function P(H,G,K,dt,j,nt){return K=nt.ref,{$$typeof:o,type:H,key:G,ref:K!==void 0?K:null,props:nt}}function W(H,G){return P(H.type,G,void 0,void 0,void 0,H.props)}function U(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function L(H){var G={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(K){return G[K]})}var Z=/\/+/g;function B(H,G){return typeof H=="object"&&H!==null&&H.key!=null?L(""+H.key):G.toString(36)}function Y(){}function T(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(Y,Y):(H.status="pending",H.then(function(G){H.status==="pending"&&(H.status="fulfilled",H.value=G)},function(G){H.status==="pending"&&(H.status="rejected",H.reason=G)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function $(H,G,K,dt,j){var nt=typeof H;(nt==="undefined"||nt==="boolean")&&(H=null);var yt=!1;if(H===null)yt=!0;else switch(nt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(H.$$typeof){case o:case e:yt=!0;break;case g:return yt=H._init,$(yt(H._payload),G,K,dt,j)}}if(yt)return j=j(H),yt=dt===""?"."+B(H,0):dt,R(j)?(K="",yt!=null&&(K=yt.replace(Z,"$&/")+"/"),$(j,G,K,"",function(zt){return zt})):j!=null&&(U(j)&&(j=W(j,K+(j.key==null||H&&H.key===j.key?"":(""+j.key).replace(Z,"$&/")+"/")+yt)),G.push(j)),1;yt=0;var Tt=dt===""?".":dt+":";if(R(H))for(var wt=0;wt<H.length;wt++)dt=H[wt],nt=Tt+B(dt,wt),yt+=$(dt,G,K,nt,j);else if(wt=x(H),typeof wt=="function")for(H=wt.call(H),wt=0;!(dt=H.next()).done;)dt=dt.value,nt=Tt+B(dt,wt++),yt+=$(dt,G,K,nt,j);else if(nt==="object"){if(typeof H.then=="function")return $(T(H),G,K,dt,j);throw G=String(H),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return yt}function X(H,G,K){if(H==null)return H;var dt=[],j=0;return $(H,dt,"","",function(nt){return G.call(K,nt,j++)}),dt}function q(H){if(H._status===-1){var G=H._result;G=G(),G.then(function(K){(H._status===0||H._status===-1)&&(H._status=1,H._result=K)},function(K){(H._status===0||H._status===-1)&&(H._status=2,H._result=K)}),H._status===-1&&(H._status=0,H._result=G)}if(H._status===1)return H._result.default;throw H._result}var et=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function rt(){}return de.Children={map:X,forEach:function(H,G,K){X(H,function(){G.apply(this,arguments)},K)},count:function(H){var G=0;return X(H,function(){G++}),G},toArray:function(H){return X(H,function(G){return G})||[]},only:function(H){if(!U(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},de.Component=S,de.Fragment=i,de.Profiler=l,de.PureComponent=A,de.StrictMode=r,de.Suspense=d,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,de.__COMPILER_RUNTIME={__proto__:null,c:function(H){return N.H.useMemoCache(H)}},de.cache=function(H){return function(){return H.apply(null,arguments)}},de.cloneElement=function(H,G,K){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var dt=b({},H.props),j=H.key,nt=void 0;if(G!=null)for(yt in G.ref!==void 0&&(nt=void 0),G.key!==void 0&&(j=""+G.key),G)!k.call(G,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&G.ref===void 0||(dt[yt]=G[yt]);var yt=arguments.length-2;if(yt===1)dt.children=K;else if(1<yt){for(var Tt=Array(yt),wt=0;wt<yt;wt++)Tt[wt]=arguments[wt+2];dt.children=Tt}return P(H.type,j,void 0,void 0,nt,dt)},de.createContext=function(H){return H={$$typeof:f,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:u,_context:H},H},de.createElement=function(H,G,K){var dt,j={},nt=null;if(G!=null)for(dt in G.key!==void 0&&(nt=""+G.key),G)k.call(G,dt)&&dt!=="key"&&dt!=="__self"&&dt!=="__source"&&(j[dt]=G[dt]);var yt=arguments.length-2;if(yt===1)j.children=K;else if(1<yt){for(var Tt=Array(yt),wt=0;wt<yt;wt++)Tt[wt]=arguments[wt+2];j.children=Tt}if(H&&H.defaultProps)for(dt in yt=H.defaultProps,yt)j[dt]===void 0&&(j[dt]=yt[dt]);return P(H,nt,void 0,void 0,null,j)},de.createRef=function(){return{current:null}},de.forwardRef=function(H){return{$$typeof:h,render:H}},de.isValidElement=U,de.lazy=function(H){return{$$typeof:g,_payload:{_status:-1,_result:H},_init:q}},de.memo=function(H,G){return{$$typeof:p,type:H,compare:G===void 0?null:G}},de.startTransition=function(H){var G=N.T,K={};N.T=K;try{var dt=H(),j=N.S;j!==null&&j(K,dt),typeof dt=="object"&&dt!==null&&typeof dt.then=="function"&&dt.then(rt,et)}catch(nt){et(nt)}finally{N.T=G}},de.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},de.use=function(H){return N.H.use(H)},de.useActionState=function(H,G,K){return N.H.useActionState(H,G,K)},de.useCallback=function(H,G){return N.H.useCallback(H,G)},de.useContext=function(H){return N.H.useContext(H)},de.useDebugValue=function(){},de.useDeferredValue=function(H,G){return N.H.useDeferredValue(H,G)},de.useEffect=function(H,G,K){var dt=N.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return dt.useEffect(H,G)},de.useId=function(){return N.H.useId()},de.useImperativeHandle=function(H,G,K){return N.H.useImperativeHandle(H,G,K)},de.useInsertionEffect=function(H,G){return N.H.useInsertionEffect(H,G)},de.useLayoutEffect=function(H,G){return N.H.useLayoutEffect(H,G)},de.useMemo=function(H,G){return N.H.useMemo(H,G)},de.useOptimistic=function(H,G){return N.H.useOptimistic(H,G)},de.useReducer=function(H,G,K){return N.H.useReducer(H,G,K)},de.useRef=function(H){return N.H.useRef(H)},de.useState=function(H){return N.H.useState(H)},de.useSyncExternalStore=function(H,G,K){return N.H.useSyncExternalStore(H,G,K)},de.useTransition=function(){return N.H.useTransition()},de.version="19.1.0",de}var K_;function rd(){return K_||(K_=1,zf.exports=Yy()),zf.exports}var Bf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function Zy(){if(Q_)return Tn;Q_=1;var o=rd();function e(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(d,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:d,containerInfo:p,implementation:g}}var f=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(d,p,null,g)},Tn.flushSync=function(d){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,d)return d()}finally{f.T=p,r.p=g,r.d.f()}},Tn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(d,p))},Tn.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},Tn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,y=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,v=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:v}):g==="script"&&r.d.X(d,{crossOrigin:y,integrity:x,fetchPriority:v,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(d)},Tn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=h(g,p.crossOrigin);r.d.L(d,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(d)},Tn.requestFormReset=function(d){r.d.r(d)},Tn.unstable_batchedUpdates=function(d,p){return d(p)},Tn.useFormState=function(d,p,g){return f.H.useFormState(d,p,g)},Tn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Tn.version="19.1.0",Tn}var J_;function jy(){if(J_)return Bf.exports;J_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Bf.exports=Zy(),Bf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function Ky(){if($_)return xo;$_=1;var o=qy(),e=rd(),i=jy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var m=c.alternate;if(m===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===m.child){for(m=c.child;m;){if(m===a)return h(c),t;if(m===s)return h(c),n;m=m.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=m;else{for(var w=!1,O=c.child;O;){if(O===a){w=!0,a=c,s=m;break}if(O===s){w=!0,s=c,a=m;break}O=O.sibling}if(!w){for(O=m.child;O;){if(O===a){w=!0,a=m,s=c;break}if(O===s){w=!0,s=m,a=c;break}O=O.sibling}if(!w)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),C=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function B(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Symbol.for("react.client.reference");function T(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Y?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case N:return"Suspense";case k:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case v:return"Portal";case C:return(t.displayName||"Context")+".Provider";case A:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:T(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return T(t(n))}catch{}}return null}var $=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},rt=[],H=-1;function G(t){return{current:t}}function K(t){0>H||(t.current=rt[H],rt[H]=null,H--)}function dt(t,n){H++,rt[H]=t.current,t.current=n}var j=G(null),nt=G(null),yt=G(null),Tt=G(null);function wt(t,n){switch(dt(yt,n),dt(nt,t),dt(j,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?y_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=y_(n),t=x_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(j),dt(j,t)}function zt(){K(j),K(nt),K(yt)}function Ht(t){t.memoizedState!==null&&dt(Tt,t);var n=j.current,a=x_(n,t.type);n!==a&&(dt(nt,t),dt(j,a))}function Zt(t){nt.current===t&&(K(j),K(nt)),Tt.current===t&&(K(Tt),po._currentValue=et)}var ee=Object.prototype.hasOwnProperty,Qt=o.unstable_scheduleCallback,M=o.unstable_cancelCallback,At=o.unstable_shouldYield,ot=o.unstable_requestPaint,V=o.unstable_now,I=o.unstable_getCurrentPriorityLevel,tt=o.unstable_ImmediatePriority,pt=o.unstable_UserBlockingPriority,xt=o.unstable_NormalPriority,st=o.unstable_LowPriority,z=o.unstable_IdlePriority,D=o.log,Q=o.unstable_setDisableYieldValue,ft=null,Mt=null;function mt(t){if(typeof D=="function"&&Q(t),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(ft,t)}catch{}}var Ft=Math.clz32?Math.clz32:Jt,Bt=Math.log,qt=Math.LN2;function Jt(t){return t>>>=0,t===0?32:31-(Bt(t)/qt|0)|0}var Rt=256,kt=4194304;function ne(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Kt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,m=t.suspendedLanes,w=t.pingedLanes;t=t.warmLanes;var O=s&134217727;return O!==0?(s=O&~m,s!==0?c=ne(s):(w&=O,w!==0?c=ne(w):a||(a=O&~t,a!==0&&(c=ne(a))))):(O=s&~m,O!==0?c=ne(O):w!==0?c=ne(w):a||(a=s&~t,a!==0&&(c=ne(a)))),c===0?0:n!==0&&n!==c&&(n&m)===0&&(m=c&-c,a=n&-n,m>=a||m===32&&(a&4194048)!==0)?n:c}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function re(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var t=Rt;return Rt<<=1,(Rt&4194048)===0&&(Rt=256),t}function Gt(){var t=kt;return kt<<=1,(kt&62914560)===0&&(kt=4194304),t}function Nt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Xt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ot(t,n,a,s,c,m){var w=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var O=t.entanglements,J=t.expirationTimes,gt=t.hiddenUpdates;for(a=w&~a;0<a;){var Ct=31-Ft(a),Ut=1<<Ct;O[Ct]=0,J[Ct]=-1;var vt=gt[Ct];if(vt!==null)for(gt[Ct]=null,Ct=0;Ct<vt.length;Ct++){var St=vt[Ct];St!==null&&(St.lane&=-536870913)}a&=~Ut}s!==0&&Lt(t,s,0),m!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=m&~(w&~n))}function Lt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ft(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function $t(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ft(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function he(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ne(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ae(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:F_(t.type))}function kn(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var fn=Math.random().toString(36).slice(2),rn="__reactFiber$"+fn,gn="__reactProps$"+fn,Ln="__reactContainer$"+fn,Va="__reactEvents$"+fn,Io="__reactListeners$"+fn,Fo="__reactHandles$"+fn,Xa="__reactResources$"+fn,ia="__reactMarker$"+fn;function aa(t){delete t[rn],delete t[gn],delete t[Va],delete t[Io],delete t[Fo]}function Ri(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ln]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=b_(t);t!==null;){if(a=t[rn])return a;t=b_(t)}return n}t=a,a=t.parentNode}return null}function Ci(t){if(t=t[rn]||t[Ln]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Wa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ra(t){var n=t[Xa];return n||(n=t[Xa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[ia]=!0}var Ho=new Set,ko={};function Di(t,n){F(t,n),F(t+"Capture",n)}function F(t,n){for(ko[t]=n,t=0;t<n.length;t++)Ho.add(n[t])}var ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Et={},bt={};function ht(t){return ee.call(bt,t)?!0:ee.call(Et,t)?!1:ut.test(t)?bt[t]=!0:(Et[t]=!0,!1)}function Pt(t,n,a){if(ht(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Vt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Yt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var jt,ue;function se(t){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+t+ue}var ie=!1;function _e(t,n){if(!t||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ut=function(){throw Error()};if(Object.defineProperty(Ut.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ut,[])}catch(St){var vt=St}Reflect.construct(t,[],Ut)}else{try{Ut.call()}catch(St){vt=St}t.call(Ut.prototype)}}else{try{throw Error()}catch(St){vt=St}(Ut=t())&&typeof Ut.catch=="function"&&Ut.catch(function(){})}}catch(St){if(St&&vt&&typeof St.stack=="string")return[St.stack,vt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=s.DetermineComponentFrameRoot(),w=m[0],O=m[1];if(w&&O){var J=w.split(`
`),gt=O.split(`
`);for(c=s=0;s<J.length&&!J[s].includes("DetermineComponentFrameRoot");)s++;for(;c<gt.length&&!gt[c].includes("DetermineComponentFrameRoot");)c++;if(s===J.length||c===gt.length)for(s=J.length-1,c=gt.length-1;1<=s&&0<=c&&J[s]!==gt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(J[s]!==gt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||J[s]!==gt[c]){var Ct=`
`+J[s].replace(" at new "," at ");return t.displayName&&Ct.includes("<anonymous>")&&(Ct=Ct.replace("<anonymous>",t.displayName)),Ct}while(1<=s&&0<=c);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?se(a):""}function De(t){switch(t.tag){case 26:case 27:case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 15:return _e(t.type,!1);case 11:return _e(t.type.render,!1);case 1:return _e(t.type,!0);case 31:return se("Activity");default:return""}}function Ve(t){try{var n="";do n+=De(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Me(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function oe(t){var n=Me(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,m=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(w){s=""+w,m.call(this,w)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(w){s=""+w},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function je(t){t._valueTracker||(t._valueTracker=oe(t))}function Te(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Me(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var sa=/[\n"\\]/g;function Xe(t){return t.replace(sa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ui(t,n,a,s,c,m,w,O){t.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.type=w:t.removeAttribute("type"),n!=null?w==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Se(n)):t.value!==""+Se(n)&&(t.value=""+Se(n)):w!=="submit"&&w!=="reset"||t.removeAttribute("value"),n!=null?En(t,w,Se(n)):a!=null?En(t,w,Se(a)):s!=null&&t.removeAttribute("value"),c==null&&m!=null&&(t.defaultChecked=!!m),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?t.name=""+Se(O):t.removeAttribute("name")}function ke(t,n,a,s,c,m,w,O){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),n!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||n!=null))return;a=a!=null?""+Se(a):"",n=n!=null?""+Se(n):a,O||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=O?t.checked:!!s,t.defaultChecked=!!s,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(t.name=w)}function En(t,n,a){n==="number"&&Mn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function sn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Se(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function hn(t,n,a){if(n!=null&&(n=""+Se(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Se(a):""}function vn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if($(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Se(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function mi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Li=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Li.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function xd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&yd(t,c,s)}else for(var m in n)n.hasOwnProperty(m)&&yd(t,m,n[m])}function Du(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),G0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return G0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Uu=null;function Lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mr=null,Er=null;function Sd(t){var n=Ci(t);if(n&&(t=n.stateNode)){var a=t[gn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ui(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[gn]||null;if(!c)throw Error(r(90));Ui(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Te(s)}break t;case"textarea":hn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(t,!!a.multiple,n,!1)}}}var Nu=!1;function Md(t,n,a){if(Nu)return t(n,a);Nu=!0;try{var s=t(n);return s}finally{if(Nu=!1,(Mr!==null||Er!==null)&&(wl(),Mr&&(n=Mr,t=Er,Er=Mr=null,Sd(n),t)))for(n=0;n<t.length;n++)Sd(t[n])}}function As(t,n){var a=t.stateNode;if(a===null)return null;var s=a[gn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if(Ni)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Ou=!1}var oa=null,Pu=null,Vo=null;function Ed(){if(Vo)return Vo;var t,n=Pu,a=n.length,s,c="value"in oa?oa.value:oa.textContent,m=c.length;for(t=0;t<a&&n[t]===c[t];t++);var w=a-t;for(s=1;s<=w&&n[a-s]===c[m-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function Xo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function bd(){return!1}function Nn(t){function n(a,s,c,m,w){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(a=t[O],this[O]=a?a(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Wo:bd,this.isPropagationStopped=bd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=Nn(qa),Rs=g({},qa,{view:0,detail:0}),V0=Nn(Rs),zu,Bu,Cs,Yo=g({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(zu=t.screenX-Cs.screenX,Bu=t.screenY-Cs.screenY):Bu=zu=0,Cs=t),zu)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),Td=Nn(Yo),X0=g({},Yo,{dataTransfer:0}),W0=Nn(X0),q0=g({},Rs,{relatedTarget:0}),Iu=Nn(q0),Y0=g({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Z0=Nn(Y0),j0=g({},qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K0=Nn(j0),Q0=g({},qa,{data:0}),Ad=Nn(Q0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ev(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=tv[t])?!!n[t]:!1}function Fu(){return ev}var nv=g({},Rs,{key:function(t){if(t.key){var n=J0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iv=Nn(nv),av=g({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Nn(av),rv=g({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),sv=Nn(rv),ov=g({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=Nn(ov),uv=g({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cv=Nn(uv),fv=g({},qa,{newState:0,oldState:0}),hv=Nn(fv),dv=[9,13,27,32],Hu=Ni&&"CompositionEvent"in window,Ds=null;Ni&&"documentMode"in document&&(Ds=document.documentMode);var pv=Ni&&"TextEvent"in window&&!Ds,Rd=Ni&&(!Hu||Ds&&8<Ds&&11>=Ds),Cd=" ",Dd=!1;function Ud(t,n){switch(t){case"keyup":return dv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var br=!1;function mv(t,n){switch(t){case"compositionend":return Ld(n);case"keypress":return n.which!==32?null:(Dd=!0,Cd);case"textInput":return t=n.data,t===Cd&&Dd?null:t;default:return null}}function _v(t,n){if(br)return t==="compositionend"||!Hu&&Ud(t,n)?(t=Ed(),Vo=Pu=oa=null,br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rd&&n.locale!=="ko"?null:n.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!gv[t.type]:n==="textarea"}function Od(t,n,a,s){Mr?Er?Er.push(s):Er=[s]:Mr=s,n=Nl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Us=null,Ls=null;function vv(t){p_(t,0)}function Zo(t){var n=Wa(t);if(Te(n))return t}function Pd(t,n){if(t==="change")return n}var zd=!1;if(Ni){var ku;if(Ni){var Gu="oninput"in document;if(!Gu){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),Gu=typeof Bd.oninput=="function"}ku=Gu}else ku=!1;zd=ku&&(!document.documentMode||9<document.documentMode)}function Id(){Us&&(Us.detachEvent("onpropertychange",Fd),Ls=Us=null)}function Fd(t){if(t.propertyName==="value"&&Zo(Ls)){var n=[];Od(n,Ls,t,Lu(t)),Md(vv,n)}}function yv(t,n,a){t==="focusin"?(Id(),Us=n,Ls=a,Us.attachEvent("onpropertychange",Fd)):t==="focusout"&&Id()}function xv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(Ls)}function Sv(t,n){if(t==="click")return Zo(n)}function Mv(t,n){if(t==="input"||t==="change")return Zo(n)}function Ev(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Gn=typeof Object.is=="function"?Object.is:Ev;function Ns(t,n){if(Gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!ee.call(n,c)||!Gn(t[c],n[c]))return!1}return!0}function Hd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kd(t,n){var a=Hd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hd(a)}}function Gd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Gd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Vd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Mn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Mn(t.document)}return n}function Vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var bv=Ni&&"documentMode"in document&&11>=document.documentMode,Tr=null,Xu=null,Os=null,Wu=!1;function Xd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wu||Tr==null||Tr!==Mn(s)||(s=Tr,"selectionStart"in s&&Vu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Os&&Ns(Os,s)||(Os=s,s=Nl(Xu,"onSelect"),0<s.length&&(n=new qo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Tr)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ar={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},qu={},Wd={};Ni&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Za(t){if(qu[t])return qu[t];if(!Ar[t])return t;var n=Ar[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wd)return qu[t]=n[a];return t}var qd=Za("animationend"),Yd=Za("animationiteration"),Zd=Za("animationstart"),Tv=Za("transitionrun"),Av=Za("transitionstart"),wv=Za("transitioncancel"),jd=Za("transitionend"),Kd=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function si(t,n){Kd.set(t,n),Di(n,[t])}var Qd=new WeakMap;function Qn(t,n){if(typeof t=="object"&&t!==null){var a=Qd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ve(n)},Qd.set(t,n),n)}return{value:t,source:n,stack:Ve(n)}}var Jn=[],wr=0,Zu=0;function jo(){for(var t=wr,n=Zu=wr=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var m=Jn[n];if(Jn[n++]=null,s!==null&&c!==null){var w=s.pending;w===null?c.next=c:(c.next=w.next,w.next=c),s.pending=c}m!==0&&Jd(a,c,m)}}function Ko(t,n,a,s){Jn[wr++]=t,Jn[wr++]=n,Jn[wr++]=a,Jn[wr++]=s,Zu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function ju(t,n,a,s){return Ko(t,n,a,s),Qo(t)}function Rr(t,n){return Ko(t,null,null,n),Qo(t)}function Jd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,m=t.return;m!==null;)m.childLanes|=a,s=m.alternate,s!==null&&(s.childLanes|=a),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(c=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,c&&n!==null&&(c=31-Ft(a),t=m.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),m):null}function Qo(t){if(50<ro)throw ro=0,ef=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Cr={};function Rv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,a,s){return new Rv(t,n,a,s)}function Ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oi(t,n){var a=t.alternate;return a===null?(a=Vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function $d(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Jo(t,n,a,s,c,m){var w=0;if(s=t,typeof t=="function")Ku(t)&&(w=1);else if(typeof t=="string")w=Dy(t,a,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=Vn(31,a,n,c),t.elementType=U,t.lanes=m,t;case b:return ja(a.children,c,m,n);case E:w=8,c|=24;break;case S:return t=Vn(12,a,n,c|2),t.elementType=S,t.lanes=m,t;case N:return t=Vn(13,a,n,c),t.elementType=N,t.lanes=m,t;case k:return t=Vn(19,a,n,c),t.elementType=k,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case C:w=10;break t;case A:w=9;break t;case R:w=11;break t;case P:w=14;break t;case W:w=16,s=null;break t}w=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Vn(w,a,n,c),n.elementType=t,n.type=s,n.lanes=m,n}function ja(t,n,a,s){return t=Vn(7,t,s,n),t.lanes=a,t}function Qu(t,n,a){return t=Vn(6,t,null,n),t.lanes=a,t}function Ju(t,n,a){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Dr=[],Ur=0,$o=null,tl=0,$n=[],ti=0,Ka=null,Pi=1,zi="";function Qa(t,n){Dr[Ur++]=tl,Dr[Ur++]=$o,$o=t,tl=n}function tp(t,n,a){$n[ti++]=Pi,$n[ti++]=zi,$n[ti++]=Ka,Ka=t;var s=Pi;t=zi;var c=32-Ft(s)-1;s&=~(1<<c),a+=1;var m=32-Ft(n)+c;if(30<m){var w=c-c%5;m=(s&(1<<w)-1).toString(32),s>>=w,c-=w,Pi=1<<32-Ft(n)+c|a<<c|s,zi=m+t}else Pi=1<<m|a<<c|s,zi=t}function $u(t){t.return!==null&&(Qa(t,1),tp(t,1,0))}function tc(t){for(;t===$o;)$o=Dr[--Ur],Dr[Ur]=null,tl=Dr[--Ur],Dr[Ur]=null;for(;t===Ka;)Ka=$n[--ti],$n[ti]=null,zi=$n[--ti],$n[ti]=null,Pi=$n[--ti],$n[ti]=null}var Cn=null,Ke=null,Ue=!1,Ja=null,_i=!1,ec=Error(r(519));function $a(t){var n=Error(r(418,""));throw Bs(Qn(n,t)),ec}function ep(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[gn]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<oo.length;a++)xe(oo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),ke(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),je(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),vn(n,s.value,s.defaultValue,s.children),je(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||v_(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Ol),n=!0):n=!1,n||$a(t)}function np(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Cn=Cn.return}}function Ps(t){if(t!==Cn)return!1;if(!Ue)return np(t),Ue=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&Ke&&$a(t),np(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ke=li(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ke=null}}else n===27?(n=Ke,Ea(t.type)?(t=Mf,Mf=null,Ke=t):Ke=n):Ke=Cn?li(t.stateNode.nextSibling):null;return!0}function zs(){Ke=Cn=null,Ue=!1}function ip(){var t=Ja;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),Ja=null),t}function Bs(t){Ja===null?Ja=[t]:Ja.push(t)}var nc=G(null),tr=null,Bi=null;function la(t,n,a){dt(nc,n._currentValue),n._currentValue=a}function Ii(t){t._currentValue=nc.current,K(nc)}function ic(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function ac(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var m=c.dependencies;if(m!==null){var w=c.child;m=m.firstContext;t:for(;m!==null;){var O=m;m=c;for(var J=0;J<n.length;J++)if(O.context===n[J]){m.lanes|=a,O=m.alternate,O!==null&&(O.lanes|=a),ic(m.return,a,t),s||(w=null);break t}m=O.next}}else if(c.tag===18){if(w=c.return,w===null)throw Error(r(341));w.lanes|=a,m=w.alternate,m!==null&&(m.lanes|=a),ic(w,a,t),w=null}else w=c.child;if(w!==null)w.return=c;else for(w=c;w!==null;){if(w===t){w=null;break}if(c=w.sibling,c!==null){c.return=w.return,w=c;break}w=w.return}c=w}}function Is(t,n,a,s){t=null;for(var c=n,m=!1;c!==null;){if(!m){if((c.flags&524288)!==0)m=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var w=c.alternate;if(w===null)throw Error(r(387));if(w=w.memoizedProps,w!==null){var O=c.type;Gn(c.pendingProps.value,w.value)||(t!==null?t.push(O):t=[O])}}else if(c===Tt.current){if(w=c.alternate,w===null)throw Error(r(387));w.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(po):t=[po])}c=c.return}t!==null&&ac(n,t,a,s),n.flags|=262144}function el(t){for(t=t.firstContext;t!==null;){if(!Gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function er(t){tr=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return ap(tr,t)}function nl(t,n){return tr===null&&er(t),ap(t,n)}function ap(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(t===null)throw Error(r(308));Bi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Bi=Bi.next=n;return a}var Cv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Dv=o.unstable_scheduleCallback,Uv=o.unstable_NormalPriority,on={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rc(){return{controller:new Cv,data:new Map,refCount:0}}function Fs(t){t.refCount--,t.refCount===0&&Dv(Uv,function(){t.controller.abort()})}var Hs=null,sc=0,Lr=0,Nr=null;function Lv(t,n){if(Hs===null){var a=Hs=[];sc=0,Lr=uf(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return sc++,n.then(rp,rp),n}function rp(){if(--sc===0&&Hs!==null){Nr!==null&&(Nr.status="fulfilled");var t=Hs;Hs=null,Lr=0,Nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Nv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var sp=X.S;X.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Lv(t,n),sp!==null&&sp(t,n)};var nr=G(null);function oc(){var t=nr.current;return t!==null?t:We.pooledCache}function il(t,n){n===null?dt(nr,nr.current):dt(nr,n.pool)}function op(){var t=oc();return t===null?null:{parent:on._currentValue,pool:t}}var ks=Error(r(460)),lp=Error(r(474)),al=Error(r(542)),lc={then:function(){}};function up(t){return t=t.status,t==="fulfilled"||t==="rejected"}function rl(){}function cp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(rl,rl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t;default:if(typeof n.status=="string")n.then(rl,rl);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t}throw Gs=n,ks}}var Gs=null;function fp(){if(Gs===null)throw Error(r(459));var t=Gs;return Gs=null,t}function hp(t){if(t===ks||t===al)throw Error(r(483))}var ua=!1;function uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Qo(t),Jd(t,null,a),n}return Ko(t,s,n,a),Qo(t)}function Vs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,$t(t,a)}}function fc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?c=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?c=m=n:m=m.next=n}else c=m=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:m,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var hc=!1;function Xs(){if(hc){var t=Nr;if(t!==null)throw t}}function Ws(t,n,a,s){hc=!1;var c=t.updateQueue;ua=!1;var m=c.firstBaseUpdate,w=c.lastBaseUpdate,O=c.shared.pending;if(O!==null){c.shared.pending=null;var J=O,gt=J.next;J.next=null,w===null?m=gt:w.next=gt,w=J;var Ct=t.alternate;Ct!==null&&(Ct=Ct.updateQueue,O=Ct.lastBaseUpdate,O!==w&&(O===null?Ct.firstBaseUpdate=gt:O.next=gt,Ct.lastBaseUpdate=J))}if(m!==null){var Ut=c.baseState;w=0,Ct=gt=J=null,O=m;do{var vt=O.lane&-536870913,St=vt!==O.lane;if(St?(be&vt)===vt:(s&vt)===vt){vt!==0&&vt===Lr&&(hc=!0),Ct!==null&&(Ct=Ct.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});t:{var fe=t,le=O;vt=n;var Ie=a;switch(le.tag){case 1:if(fe=le.payload,typeof fe=="function"){Ut=fe.call(Ie,Ut,vt);break t}Ut=fe;break t;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=le.payload,vt=typeof fe=="function"?fe.call(Ie,Ut,vt):fe,vt==null)break t;Ut=g({},Ut,vt);break t;case 2:ua=!0}}vt=O.callback,vt!==null&&(t.flags|=64,St&&(t.flags|=8192),St=c.callbacks,St===null?c.callbacks=[vt]:St.push(vt))}else St={lane:vt,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Ct===null?(gt=Ct=St,J=Ut):Ct=Ct.next=St,w|=vt;if(O=O.next,O===null){if(O=c.shared.pending,O===null)break;St=O,O=St.next,St.next=null,c.lastBaseUpdate=St,c.shared.pending=null}}while(!0);Ct===null&&(J=Ut),c.baseState=J,c.firstBaseUpdate=gt,c.lastBaseUpdate=Ct,m===null&&(c.shared.lanes=0),ya|=w,t.lanes=w,t.memoizedState=Ut}}function dp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function pp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)dp(a[t],n)}var Or=G(null),sl=G(0);function mp(t,n){t=Wi,dt(sl,t),dt(Or,n),Wi=t|n.baseLanes}function dc(){dt(sl,Wi),dt(Or,Or.current)}function pc(){Wi=sl.current,K(Or),K(sl)}var ha=0,ge=null,ze=null,en=null,ol=!1,Pr=!1,ir=!1,ll=0,qs=0,zr=null,Ov=0;function Je(){throw Error(r(321))}function mc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Gn(t[a],n[a]))return!1;return!0}function _c(t,n,a,s,c,m){return ha=m,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,X.H=t===null||t.memoizedState===null?Jp:$p,ir=!1,m=a(s,c),ir=!1,Pr&&(m=gp(n,a,s,c)),_p(t),m}function _p(t){X.H=pl;var n=ze!==null&&ze.next!==null;if(ha=0,en=ze=ge=null,ol=!1,qs=0,zr=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&el(t)&&(dn=!0))}function gp(t,n,a,s){ge=t;var c=0;do{if(Pr&&(zr=null),qs=0,Pr=!1,25<=c)throw Error(r(301));if(c+=1,en=ze=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}X.H=kv,m=n(a,s)}while(Pr);return m}function Pv(){var t=X.H,n=t.useState()[0];return n=typeof n.then=="function"?Ys(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(ge.flags|=1024),n}function gc(){var t=ll!==0;return ll=0,t}function vc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function yc(t){if(ol){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ol=!1}ha=0,en=ze=ge=null,Pr=!1,qs=ll=0,zr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ge.memoizedState=en=t:en=en.next=t,en}function nn(){if(ze===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=en===null?ge.memoizedState:en.next;if(n!==null)en=n,ze=t;else{if(t===null)throw ge.alternate===null?Error(r(467)):Error(r(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},en===null?ge.memoizedState=en=t:en=en.next=t}return en}function xc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ys(t){var n=qs;return qs+=1,zr===null&&(zr=[]),t=cp(zr,t,n),n=ge,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,X.H=n===null||n.memoizedState===null?Jp:$p),t}function ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ys(t);if(t.$$typeof===C)return bn(t)}throw Error(r(438,String(t)))}function Sc(t){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ge.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xc(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=L;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=nn();return Mc(n,ze,t)}function Mc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,m=s.pending;if(m!==null){if(c!==null){var w=c.next;c.next=m.next,m.next=w}n.baseQueue=c=m,s.pending=null}if(m=t.baseState,c===null)t.memoizedState=m;else{n=c.next;var O=w=null,J=null,gt=n,Ct=!1;do{var Ut=gt.lane&-536870913;if(Ut!==gt.lane?(be&Ut)===Ut:(ha&Ut)===Ut){var vt=gt.revertLane;if(vt===0)J!==null&&(J=J.next={lane:0,revertLane:0,action:gt.action,hasEagerState:gt.hasEagerState,eagerState:gt.eagerState,next:null}),Ut===Lr&&(Ct=!0);else if((ha&vt)===vt){gt=gt.next,vt===Lr&&(Ct=!0);continue}else Ut={lane:0,revertLane:gt.revertLane,action:gt.action,hasEagerState:gt.hasEagerState,eagerState:gt.eagerState,next:null},J===null?(O=J=Ut,w=m):J=J.next=Ut,ge.lanes|=vt,ya|=vt;Ut=gt.action,ir&&a(m,Ut),m=gt.hasEagerState?gt.eagerState:a(m,Ut)}else vt={lane:Ut,revertLane:gt.revertLane,action:gt.action,hasEagerState:gt.hasEagerState,eagerState:gt.eagerState,next:null},J===null?(O=J=vt,w=m):J=J.next=vt,ge.lanes|=Ut,ya|=Ut;gt=gt.next}while(gt!==null&&gt!==n);if(J===null?w=m:J.next=O,!Gn(m,t.memoizedState)&&(dn=!0,Ct&&(a=Nr,a!==null)))throw a;t.memoizedState=m,t.baseState=w,t.baseQueue=J,s.lastRenderedState=m}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ec(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,m=n.memoizedState;if(c!==null){a.pending=null;var w=c=c.next;do m=t(m,w.action),w=w.next;while(w!==c);Gn(m,n.memoizedState)||(dn=!0),n.memoizedState=m,n.baseQueue===null&&(n.baseState=m),a.lastRenderedState=m}return[m,s]}function vp(t,n,a){var s=ge,c=nn(),m=Ue;if(m){if(a===void 0)throw Error(r(407));a=a()}else a=n();var w=!Gn((ze||c).memoizedState,a);w&&(c.memoizedState=a,dn=!0),c=c.queue;var O=Sp.bind(null,s,c,t);if(Zs(2048,8,O,[t]),c.getSnapshot!==n||w||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Br(9,fl(),xp.bind(null,s,c,a,n),null),We===null)throw Error(r(349));m||(ha&124)!==0||yp(s,n,a)}return a}function yp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=xc(),ge.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function xp(t,n,a,s){n.value=a,n.getSnapshot=s,Mp(n)&&Ep(t)}function Sp(t,n,a){return a(function(){Mp(n)&&Ep(t)})}function Mp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Gn(t,a)}catch{return!0}}function Ep(t){var n=Rr(t,2);n!==null&&Zn(n,t,2)}function bc(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),ir){mt(!0);try{a()}finally{mt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function bp(t,n,a,s){return t.baseState=a,Mc(t,ze,typeof s=="function"?s:Fi)}function zv(t,n,a,s,c){if(dl(t))throw Error(r(485));if(t=n.action,t!==null){var m={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){m.listeners.push(w)}};X.T!==null?a(!0):m.isTransition=!1,s(m),a=n.pending,a===null?(m.next=n.pending=m,Tp(n,m)):(m.next=a.next,n.pending=a.next=m)}}function Tp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var m=X.T,w={};X.T=w;try{var O=a(c,s),J=X.S;J!==null&&J(w,O),Ap(t,n,O)}catch(gt){Tc(t,n,gt)}finally{X.T=m}}else try{m=a(c,s),Ap(t,n,m)}catch(gt){Tc(t,n,gt)}}function Ap(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){wp(t,n,s)},function(s){return Tc(t,n,s)}):wp(t,n,a)}function wp(t,n,a){n.status="fulfilled",n.value=a,Rp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Tp(t,a)))}function Tc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Rp(n),n=n.next;while(n!==s)}t.action=null}function Rp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Cp(t,n){return n}function Dp(t,n){if(Ue){var a=We.formState;if(a!==null){t:{var s=ge;if(Ue){if(Ke){e:{for(var c=Ke,m=_i;c.nodeType!==8;){if(!m){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}m=c.data,c=m==="F!"||m==="F"?c:null}if(c){Ke=li(c.nextSibling),s=c.data==="F!";break t}}$a(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cp,lastRenderedState:n},a.queue=s,a=jp.bind(null,ge,s),s.dispatch=a,s=bc(!1),m=Dc.bind(null,ge,!1,s.queue),s=On(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=zv.bind(null,ge,c,m,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Up(t){var n=nn();return Lp(n,ze,t)}function Lp(t,n,a){if(n=Mc(t,n,Cp)[0],t=cl(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ys(n)}catch(w){throw w===ks?al:w}else s=n;n=nn();var c=n.queue,m=c.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,Br(9,fl(),Bv.bind(null,c,a),null)),[s,m,t]}function Bv(t,n){t.action=n}function Np(t){var n=nn(),a=ze;if(a!==null)return Lp(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Br(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ge.updateQueue,n===null&&(n=xc(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function fl(){return{destroy:void 0,resource:void 0}}function Op(){return nn().memoizedState}function hl(t,n,a,s){var c=On();s=s===void 0?null:s,ge.flags|=t,c.memoizedState=Br(1|n,fl(),a,s)}function Zs(t,n,a,s){var c=nn();s=s===void 0?null:s;var m=c.memoizedState.inst;ze!==null&&s!==null&&mc(s,ze.memoizedState.deps)?c.memoizedState=Br(n,m,a,s):(ge.flags|=t,c.memoizedState=Br(1|n,m,a,s))}function Pp(t,n){hl(8390656,8,t,n)}function zp(t,n){Zs(2048,8,t,n)}function Bp(t,n){return Zs(4,2,t,n)}function Ip(t,n){return Zs(4,4,t,n)}function Fp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Hp(t,n,a){a=a!=null?a.concat([t]):null,Zs(4,4,Fp.bind(null,n,t),a)}function Ac(){}function kp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&mc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Gp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&mc(n,s[1]))return s[0];if(s=t(),ir){mt(!0);try{t()}finally{mt(!1)}}return a.memoizedState=[s,n],s}function wc(t,n,a){return a===void 0||(ha&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Wm(),ge.lanes|=t,ya|=t,a)}function Vp(t,n,a,s){return Gn(a,n)?a:Or.current!==null?(t=wc(t,a,s),Gn(t,n)||(dn=!0),t):(ha&42)===0?(dn=!0,t.memoizedState=a):(t=Wm(),ge.lanes|=t,ya|=t,n)}function Xp(t,n,a,s,c){var m=q.p;q.p=m!==0&&8>m?m:8;var w=X.T,O={};X.T=O,Dc(t,!1,n,a);try{var J=c(),gt=X.S;if(gt!==null&&gt(O,J),J!==null&&typeof J=="object"&&typeof J.then=="function"){var Ct=Nv(J,s);js(t,n,Ct,Yn(t))}else js(t,n,s,Yn(t))}catch(Ut){js(t,n,{then:function(){},status:"rejected",reason:Ut},Yn())}finally{q.p=m,X.T=w}}function Iv(){}function Rc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Wp(t).queue;Xp(t,c,n,et,a===null?Iv:function(){return qp(t),a(s)})}function Wp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function qp(t){var n=Wp(t).next.queue;js(t,n,{},Yn())}function Cc(){return bn(po)}function Yp(){return nn().memoizedState}function Zp(){return nn().memoizedState}function Fv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=ca(a);var s=fa(n,t,a);s!==null&&(Zn(s,n,a),Vs(s,n,a)),n={cache:rc()},t.payload=n;return}n=n.return}}function Hv(t,n,a){var s=Yn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(t)?Kp(n,a):(a=ju(t,n,a,s),a!==null&&(Zn(a,t,s),Qp(a,n,s)))}function jp(t,n,a){var s=Yn();js(t,n,a,s)}function js(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(t))Kp(n,c);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=n.lastRenderedReducer,m!==null))try{var w=n.lastRenderedState,O=m(w,a);if(c.hasEagerState=!0,c.eagerState=O,Gn(O,w))return Ko(t,n,c,0),We===null&&jo(),!1}catch{}finally{}if(a=ju(t,n,c,s),a!==null)return Zn(a,t,s),Qp(a,n,s),!0}return!1}function Dc(t,n,a,s){if(s={lane:2,revertLane:uf(),action:s,hasEagerState:!1,eagerState:null,next:null},dl(t)){if(n)throw Error(r(479))}else n=ju(t,a,s,2),n!==null&&Zn(n,t,2)}function dl(t){var n=t.alternate;return t===ge||n!==null&&n===ge}function Kp(t,n){Pr=ol=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Qp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,$t(t,a)}}var pl={readContext:bn,use:ul,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},Jp={readContext:bn,use:ul,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:Pp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,hl(4194308,4,Fp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return hl(4194308,4,t,n)},useInsertionEffect:function(t,n){hl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(ir){mt(!0);try{t()}finally{mt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var c=a(n);if(ir){mt(!0);try{a(n)}finally{mt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Hv.bind(null,ge,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=bc(t);var n=t.queue,a=jp.bind(null,ge,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ac,useDeferredValue:function(t,n){var a=On();return wc(a,t,n)},useTransition:function(){var t=bc(!1);return t=Xp.bind(null,ge,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ge,c=On();if(Ue){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(be&124)!==0||yp(s,n,a)}c.memoizedState=a;var m={value:a,getSnapshot:n};return c.queue=m,Pp(Sp.bind(null,s,m,t),[t]),s.flags|=2048,Br(9,fl(),xp.bind(null,s,m,a,n),null),a},useId:function(){var t=On(),n=We.identifierPrefix;if(Ue){var a=zi,s=Pi;a=(s&~(1<<32-Ft(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=ll++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Ov++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Cc,useFormState:Dp,useActionState:Dp,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Dc.bind(null,ge,!0,a),a.dispatch=n,[t,n]},useMemoCache:Sc,useCacheRefresh:function(){return On().memoizedState=Fv.bind(null,ge)}},$p={readContext:bn,use:ul,useCallback:kp,useContext:bn,useEffect:zp,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:Ip,useMemo:Gp,useReducer:cl,useRef:Op,useState:function(){return cl(Fi)},useDebugValue:Ac,useDeferredValue:function(t,n){var a=nn();return Vp(a,ze.memoizedState,t,n)},useTransition:function(){var t=cl(Fi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Ys(t),n]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:Cc,useFormState:Up,useActionState:Up,useOptimistic:function(t,n){var a=nn();return bp(a,ze,t,n)},useMemoCache:Sc,useCacheRefresh:Zp},kv={readContext:bn,use:ul,useCallback:kp,useContext:bn,useEffect:zp,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:Ip,useMemo:Gp,useReducer:Ec,useRef:Op,useState:function(){return Ec(Fi)},useDebugValue:Ac,useDeferredValue:function(t,n){var a=nn();return ze===null?wc(a,t,n):Vp(a,ze.memoizedState,t,n)},useTransition:function(){var t=Ec(Fi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:Ys(t),n]},useSyncExternalStore:vp,useId:Yp,useHostTransitionStatus:Cc,useFormState:Np,useActionState:Np,useOptimistic:function(t,n){var a=nn();return ze!==null?bp(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Sc,useCacheRefresh:Zp},Ir=null,Ks=0;function ml(t){var n=Ks;return Ks+=1,Ir===null&&(Ir=[]),cp(Ir,t,n)}function Qs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function _l(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function tm(t){var n=t._init;return n(t._payload)}function em(t){function n(lt,it){if(t){var _t=lt.deletions;_t===null?(lt.deletions=[it],lt.flags|=16):_t.push(it)}}function a(lt,it){if(!t)return null;for(;it!==null;)n(lt,it),it=it.sibling;return null}function s(lt){for(var it=new Map;lt!==null;)lt.key!==null?it.set(lt.key,lt):it.set(lt.index,lt),lt=lt.sibling;return it}function c(lt,it){return lt=Oi(lt,it),lt.index=0,lt.sibling=null,lt}function m(lt,it,_t){return lt.index=_t,t?(_t=lt.alternate,_t!==null?(_t=_t.index,_t<it?(lt.flags|=67108866,it):_t):(lt.flags|=67108866,it)):(lt.flags|=1048576,it)}function w(lt){return t&&lt.alternate===null&&(lt.flags|=67108866),lt}function O(lt,it,_t,Dt){return it===null||it.tag!==6?(it=Qu(_t,lt.mode,Dt),it.return=lt,it):(it=c(it,_t),it.return=lt,it)}function J(lt,it,_t,Dt){var te=_t.type;return te===b?Ct(lt,it,_t.props.children,Dt,_t.key):it!==null&&(it.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===W&&tm(te)===it.type)?(it=c(it,_t.props),Qs(it,_t),it.return=lt,it):(it=Jo(_t.type,_t.key,_t.props,null,lt.mode,Dt),Qs(it,_t),it.return=lt,it)}function gt(lt,it,_t,Dt){return it===null||it.tag!==4||it.stateNode.containerInfo!==_t.containerInfo||it.stateNode.implementation!==_t.implementation?(it=Ju(_t,lt.mode,Dt),it.return=lt,it):(it=c(it,_t.children||[]),it.return=lt,it)}function Ct(lt,it,_t,Dt,te){return it===null||it.tag!==7?(it=ja(_t,lt.mode,Dt,te),it.return=lt,it):(it=c(it,_t),it.return=lt,it)}function Ut(lt,it,_t){if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return it=Qu(""+it,lt.mode,_t),it.return=lt,it;if(typeof it=="object"&&it!==null){switch(it.$$typeof){case x:return _t=Jo(it.type,it.key,it.props,null,lt.mode,_t),Qs(_t,it),_t.return=lt,_t;case v:return it=Ju(it,lt.mode,_t),it.return=lt,it;case W:var Dt=it._init;return it=Dt(it._payload),Ut(lt,it,_t)}if($(it)||B(it))return it=ja(it,lt.mode,_t,null),it.return=lt,it;if(typeof it.then=="function")return Ut(lt,ml(it),_t);if(it.$$typeof===C)return Ut(lt,nl(lt,it),_t);_l(lt,it)}return null}function vt(lt,it,_t,Dt){var te=it!==null?it.key:null;if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return te!==null?null:O(lt,it,""+_t,Dt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case x:return _t.key===te?J(lt,it,_t,Dt):null;case v:return _t.key===te?gt(lt,it,_t,Dt):null;case W:return te=_t._init,_t=te(_t._payload),vt(lt,it,_t,Dt)}if($(_t)||B(_t))return te!==null?null:Ct(lt,it,_t,Dt,null);if(typeof _t.then=="function")return vt(lt,it,ml(_t),Dt);if(_t.$$typeof===C)return vt(lt,it,nl(lt,_t),Dt);_l(lt,_t)}return null}function St(lt,it,_t,Dt,te){if(typeof Dt=="string"&&Dt!==""||typeof Dt=="number"||typeof Dt=="bigint")return lt=lt.get(_t)||null,O(it,lt,""+Dt,te);if(typeof Dt=="object"&&Dt!==null){switch(Dt.$$typeof){case x:return lt=lt.get(Dt.key===null?_t:Dt.key)||null,J(it,lt,Dt,te);case v:return lt=lt.get(Dt.key===null?_t:Dt.key)||null,gt(it,lt,Dt,te);case W:var ve=Dt._init;return Dt=ve(Dt._payload),St(lt,it,_t,Dt,te)}if($(Dt)||B(Dt))return lt=lt.get(_t)||null,Ct(it,lt,Dt,te,null);if(typeof Dt.then=="function")return St(lt,it,_t,ml(Dt),te);if(Dt.$$typeof===C)return St(lt,it,_t,nl(it,Dt),te);_l(it,Dt)}return null}function fe(lt,it,_t,Dt){for(var te=null,ve=null,ae=it,ce=it=0,mn=null;ae!==null&&ce<_t.length;ce++){ae.index>ce?(mn=ae,ae=null):mn=ae.sibling;var we=vt(lt,ae,_t[ce],Dt);if(we===null){ae===null&&(ae=mn);break}t&&ae&&we.alternate===null&&n(lt,ae),it=m(we,it,ce),ve===null?te=we:ve.sibling=we,ve=we,ae=mn}if(ce===_t.length)return a(lt,ae),Ue&&Qa(lt,ce),te;if(ae===null){for(;ce<_t.length;ce++)ae=Ut(lt,_t[ce],Dt),ae!==null&&(it=m(ae,it,ce),ve===null?te=ae:ve.sibling=ae,ve=ae);return Ue&&Qa(lt,ce),te}for(ae=s(ae);ce<_t.length;ce++)mn=St(ae,lt,ce,_t[ce],Dt),mn!==null&&(t&&mn.alternate!==null&&ae.delete(mn.key===null?ce:mn.key),it=m(mn,it,ce),ve===null?te=mn:ve.sibling=mn,ve=mn);return t&&ae.forEach(function(Ra){return n(lt,Ra)}),Ue&&Qa(lt,ce),te}function le(lt,it,_t,Dt){if(_t==null)throw Error(r(151));for(var te=null,ve=null,ae=it,ce=it=0,mn=null,we=_t.next();ae!==null&&!we.done;ce++,we=_t.next()){ae.index>ce?(mn=ae,ae=null):mn=ae.sibling;var Ra=vt(lt,ae,we.value,Dt);if(Ra===null){ae===null&&(ae=mn);break}t&&ae&&Ra.alternate===null&&n(lt,ae),it=m(Ra,it,ce),ve===null?te=Ra:ve.sibling=Ra,ve=Ra,ae=mn}if(we.done)return a(lt,ae),Ue&&Qa(lt,ce),te;if(ae===null){for(;!we.done;ce++,we=_t.next())we=Ut(lt,we.value,Dt),we!==null&&(it=m(we,it,ce),ve===null?te=we:ve.sibling=we,ve=we);return Ue&&Qa(lt,ce),te}for(ae=s(ae);!we.done;ce++,we=_t.next())we=St(ae,lt,ce,we.value,Dt),we!==null&&(t&&we.alternate!==null&&ae.delete(we.key===null?ce:we.key),it=m(we,it,ce),ve===null?te=we:ve.sibling=we,ve=we);return t&&ae.forEach(function(Gy){return n(lt,Gy)}),Ue&&Qa(lt,ce),te}function Ie(lt,it,_t,Dt){if(typeof _t=="object"&&_t!==null&&_t.type===b&&_t.key===null&&(_t=_t.props.children),typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case x:t:{for(var te=_t.key;it!==null;){if(it.key===te){if(te=_t.type,te===b){if(it.tag===7){a(lt,it.sibling),Dt=c(it,_t.props.children),Dt.return=lt,lt=Dt;break t}}else if(it.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===W&&tm(te)===it.type){a(lt,it.sibling),Dt=c(it,_t.props),Qs(Dt,_t),Dt.return=lt,lt=Dt;break t}a(lt,it);break}else n(lt,it);it=it.sibling}_t.type===b?(Dt=ja(_t.props.children,lt.mode,Dt,_t.key),Dt.return=lt,lt=Dt):(Dt=Jo(_t.type,_t.key,_t.props,null,lt.mode,Dt),Qs(Dt,_t),Dt.return=lt,lt=Dt)}return w(lt);case v:t:{for(te=_t.key;it!==null;){if(it.key===te)if(it.tag===4&&it.stateNode.containerInfo===_t.containerInfo&&it.stateNode.implementation===_t.implementation){a(lt,it.sibling),Dt=c(it,_t.children||[]),Dt.return=lt,lt=Dt;break t}else{a(lt,it);break}else n(lt,it);it=it.sibling}Dt=Ju(_t,lt.mode,Dt),Dt.return=lt,lt=Dt}return w(lt);case W:return te=_t._init,_t=te(_t._payload),Ie(lt,it,_t,Dt)}if($(_t))return fe(lt,it,_t,Dt);if(B(_t)){if(te=B(_t),typeof te!="function")throw Error(r(150));return _t=te.call(_t),le(lt,it,_t,Dt)}if(typeof _t.then=="function")return Ie(lt,it,ml(_t),Dt);if(_t.$$typeof===C)return Ie(lt,it,nl(lt,_t),Dt);_l(lt,_t)}return typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint"?(_t=""+_t,it!==null&&it.tag===6?(a(lt,it.sibling),Dt=c(it,_t),Dt.return=lt,lt=Dt):(a(lt,it),Dt=Qu(_t,lt.mode,Dt),Dt.return=lt,lt=Dt),w(lt)):a(lt,it)}return function(lt,it,_t,Dt){try{Ks=0;var te=Ie(lt,it,_t,Dt);return Ir=null,te}catch(ae){if(ae===ks||ae===al)throw ae;var ve=Vn(29,ae,null,lt.mode);return ve.lanes=Dt,ve.return=lt,ve}finally{}}}var Fr=em(!0),nm=em(!1),ei=G(null),gi=null;function da(t){var n=t.alternate;dt(ln,ln.current&1),dt(ei,t),gi===null&&(n===null||Or.current!==null||n.memoizedState!==null)&&(gi=t)}function im(t){if(t.tag===22){if(dt(ln,ln.current),dt(ei,t),gi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(gi=t)}}else pa()}function pa(){dt(ln,ln.current),dt(ei,ei.current)}function Hi(t){K(ei),gi===t&&(gi=null),K(ln)}var ln=G(0);function gl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Sf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Uc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=ca(s);c.payload=n,a!=null&&(c.callback=a),n=fa(t,c,s),n!==null&&(Zn(n,t,s),Vs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Yn(),c=ca(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=fa(t,c,s),n!==null&&(Zn(n,t,s),Vs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),s=ca(a);s.tag=2,n!=null&&(s.callback=n),n=fa(t,s,a),n!==null&&(Zn(n,t,a),Vs(n,t,a))}};function am(t,n,a,s,c,m,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,m,w):n.prototype&&n.prototype.isPureReactComponent?!Ns(a,s)||!Ns(c,m):!0}function rm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Lc.enqueueReplaceState(n,n.state,null)}function ar(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function sm(t){vl(t)}function om(t){console.error(t)}function lm(t){vl(t)}function yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function um(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Nc(t,n,a){return a=ca(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(t,n)},a}function cm(t){return t=ca(t),t.tag=3,t}function fm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var m=s.value;t.payload=function(){return c(m)},t.callback=function(){um(n,a,s)}}var w=a.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(t.callback=function(){um(n,a,s),typeof c!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var O=s.stack;this.componentDidCatch(s.value,{componentStack:O!==null?O:""})})}function Gv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,c,!0),a=ei.current,a!==null){switch(a.tag){case 13:return gi===null?af():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===lc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===lc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(Ue)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ec&&(t=Error(r(422),{cause:s}),Bs(Qn(t,a)))):(s!==ec&&(n=Error(r(423),{cause:s}),Bs(Qn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Qn(s,a),c=Nc(t.stateNode,s,c),fc(t,c),Qe!==4&&(Qe=2)),!1;var m=Error(r(520),{cause:s});if(m=Qn(m,a),ao===null?ao=[m]:ao.push(m),Qe!==4&&(Qe=2),n===null)return!0;s=Qn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Nc(a.stateNode,s,t),fc(a,t),!1;case 1:if(n=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xa===null||!xa.has(m))))return a.flags|=65536,c&=-c,a.lanes|=c,c=cm(c),fm(c,t,a,s),fc(a,c),!1}a=a.return}while(a!==null);return!1}var hm=Error(r(461)),dn=!1;function yn(t,n,a,s){n.child=t===null?nm(n,null,a,s):Fr(n,t.child,a,s)}function dm(t,n,a,s,c){a=a.render;var m=n.ref;if("ref"in s){var w={};for(var O in s)O!=="ref"&&(w[O]=s[O])}else w=s;return er(n),s=_c(t,n,a,w,m,c),O=gc(),t!==null&&!dn?(vc(t,n,c),ki(t,n,c)):(Ue&&O&&$u(n),n.flags|=1,yn(t,n,s,c),n.child)}function pm(t,n,a,s,c){if(t===null){var m=a.type;return typeof m=="function"&&!Ku(m)&&m.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=m,mm(t,n,m,s,c)):(t=Jo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(m=t.child,!kc(t,c)){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ns,a(w,s)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=Oi(m,s),t.ref=n.ref,t.return=n,n.child=t}function mm(t,n,a,s,c){if(t!==null){var m=t.memoizedProps;if(Ns(m,s)&&t.ref===n.ref)if(dn=!1,n.pendingProps=s=m,kc(t,c))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,ki(t,n,c)}return Oc(t,n,a,s,c)}function _m(t,n,a){var s=n.pendingProps,c=s.children,m=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=m!==null?m.baseLanes|a:a,t!==null){for(c=n.child=t.child,m=0;c!==null;)m=m|c.lanes|c.childLanes,c=c.sibling;n.childLanes=m&~s}else n.childLanes=0,n.child=null;return gm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(n,m!==null?m.cachePool:null),m!==null?mp(n,m):dc(),im(n);else return n.lanes=n.childLanes=536870912,gm(t,n,m!==null?m.baseLanes|a:a,a)}else m!==null?(il(n,m.cachePool),mp(n,m),pa(),n.memoizedState=null):(t!==null&&il(n,null),dc(),pa());return yn(t,n,c,a),n.child}function gm(t,n,a,s){var c=oc();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&il(n,null),dc(),im(n),t!==null&&Is(t,n,s,!0),null}function xl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Oc(t,n,a,s,c){return er(n),a=_c(t,n,a,s,void 0,c),s=gc(),t!==null&&!dn?(vc(t,n,c),ki(t,n,c)):(Ue&&s&&$u(n),n.flags|=1,yn(t,n,a,c),n.child)}function vm(t,n,a,s,c,m){return er(n),n.updateQueue=null,a=gp(n,s,a,c),_p(t),s=gc(),t!==null&&!dn?(vc(t,n,m),ki(t,n,m)):(Ue&&s&&$u(n),n.flags|=1,yn(t,n,a,m),n.child)}function ym(t,n,a,s,c){if(er(n),n.stateNode===null){var m=Cr,w=a.contextType;typeof w=="object"&&w!==null&&(m=bn(w)),m=new a(s,m),n.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Lc,n.stateNode=m,m._reactInternals=n,m=n.stateNode,m.props=s,m.state=n.memoizedState,m.refs={},uc(n),w=a.contextType,m.context=typeof w=="object"&&w!==null?bn(w):Cr,m.state=n.memoizedState,w=a.getDerivedStateFromProps,typeof w=="function"&&(Uc(n,a,w,s),m.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(w=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),w!==m.state&&Lc.enqueueReplaceState(m,m.state,null),Ws(n,s,m,c),Xs(),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){m=n.stateNode;var O=n.memoizedProps,J=ar(a,O);m.props=J;var gt=m.context,Ct=a.contextType;w=Cr,typeof Ct=="object"&&Ct!==null&&(w=bn(Ct));var Ut=a.getDerivedStateFromProps;Ct=typeof Ut=="function"||typeof m.getSnapshotBeforeUpdate=="function",O=n.pendingProps!==O,Ct||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(O||gt!==w)&&rm(n,m,s,w),ua=!1;var vt=n.memoizedState;m.state=vt,Ws(n,s,m,c),Xs(),gt=n.memoizedState,O||vt!==gt||ua?(typeof Ut=="function"&&(Uc(n,a,Ut,s),gt=n.memoizedState),(J=ua||am(n,a,J,s,vt,gt,w))?(Ct||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=gt),m.props=s,m.state=gt,m.context=w,s=J):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{m=n.stateNode,cc(t,n),w=n.memoizedProps,Ct=ar(a,w),m.props=Ct,Ut=n.pendingProps,vt=m.context,gt=a.contextType,J=Cr,typeof gt=="object"&&gt!==null&&(J=bn(gt)),O=a.getDerivedStateFromProps,(gt=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==Ut||vt!==J)&&rm(n,m,s,J),ua=!1,vt=n.memoizedState,m.state=vt,Ws(n,s,m,c),Xs();var St=n.memoizedState;w!==Ut||vt!==St||ua||t!==null&&t.dependencies!==null&&el(t.dependencies)?(typeof O=="function"&&(Uc(n,a,O,s),St=n.memoizedState),(Ct=ua||am(n,a,Ct,s,vt,St,J)||t!==null&&t.dependencies!==null&&el(t.dependencies))?(gt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(s,St,J),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(s,St,J)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===t.memoizedProps&&vt===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&vt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=St),m.props=s,m.state=St,m.context=J,s=Ct):(typeof m.componentDidUpdate!="function"||w===t.memoizedProps&&vt===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&vt===t.memoizedState||(n.flags|=1024),s=!1)}return m=s,xl(t,n),s=(n.flags&128)!==0,m||s?(m=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:m.render(),n.flags|=1,t!==null&&s?(n.child=Fr(n,t.child,null,c),n.child=Fr(n,null,a,c)):yn(t,n,a,c),n.memoizedState=m.state,t=n.child):t=ki(t,n,c),t}function xm(t,n,a,s){return zs(),n.flags|=256,yn(t,n,a,s),n.child}var Pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zc(t){return{baseLanes:t,cachePool:op()}}function Bc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function Sm(t,n,a){var s=n.pendingProps,c=!1,m=(n.flags&128)!==0,w;if((w=m)||(w=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),w&&(c=!0,n.flags&=-129),w=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ue){if(c?da(n):pa(),Ue){var O=Ke,J;if(J=O){t:{for(J=O,O=_i;J.nodeType!==8;){if(!O){O=null;break t}if(J=li(J.nextSibling),J===null){O=null;break t}}O=J}O!==null?(n.memoizedState={dehydrated:O,treeContext:Ka!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},J=Vn(18,null,null,0),J.stateNode=O,J.return=n,n.child=J,Cn=n,Ke=null,J=!0):J=!1}J||$a(n)}if(O=n.memoizedState,O!==null&&(O=O.dehydrated,O!==null))return Sf(O)?n.lanes=32:n.lanes=536870912,null;Hi(n)}return O=s.children,s=s.fallback,c?(pa(),c=n.mode,O=Sl({mode:"hidden",children:O},c),s=ja(s,c,a,null),O.return=n,s.return=n,O.sibling=s,n.child=O,c=n.child,c.memoizedState=zc(a),c.childLanes=Bc(t,w,a),n.memoizedState=Pc,s):(da(n),Ic(n,O))}if(J=t.memoizedState,J!==null&&(O=J.dehydrated,O!==null)){if(m)n.flags&256?(da(n),n.flags&=-257,n=Fc(t,n,a)):n.memoizedState!==null?(pa(),n.child=t.child,n.flags|=128,n=null):(pa(),c=s.fallback,O=n.mode,s=Sl({mode:"visible",children:s.children},O),c=ja(c,O,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Fr(n,t.child,null,a),s=n.child,s.memoizedState=zc(a),s.childLanes=Bc(t,w,a),n.memoizedState=Pc,n=c);else if(da(n),Sf(O)){if(w=O.nextSibling&&O.nextSibling.dataset,w)var gt=w.dgst;w=gt,s=Error(r(419)),s.stack="",s.digest=w,Bs({value:s,source:null,stack:null}),n=Fc(t,n,a)}else if(dn||Is(t,n,a,!1),w=(a&t.childLanes)!==0,dn||w){if(w=We,w!==null&&(s=a&-a,s=(s&42)!==0?1:he(s),s=(s&(w.suspendedLanes|a))!==0?0:s,s!==0&&s!==J.retryLane))throw J.retryLane=s,Rr(t,s),Zn(w,t,s),hm;O.data==="$?"||af(),n=Fc(t,n,a)}else O.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=J.treeContext,Ke=li(O.nextSibling),Cn=n,Ue=!0,Ja=null,_i=!1,t!==null&&($n[ti++]=Pi,$n[ti++]=zi,$n[ti++]=Ka,Pi=t.id,zi=t.overflow,Ka=n),n=Ic(n,s.children),n.flags|=4096);return n}return c?(pa(),c=s.fallback,O=n.mode,J=t.child,gt=J.sibling,s=Oi(J,{mode:"hidden",children:s.children}),s.subtreeFlags=J.subtreeFlags&65011712,gt!==null?c=Oi(gt,c):(c=ja(c,O,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,O=t.child.memoizedState,O===null?O=zc(a):(J=O.cachePool,J!==null?(gt=on._currentValue,J=J.parent!==gt?{parent:gt,pool:gt}:J):J=op(),O={baseLanes:O.baseLanes|a,cachePool:J}),c.memoizedState=O,c.childLanes=Bc(t,w,a),n.memoizedState=Pc,s):(da(n),a=t.child,t=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(w=n.deletions,w===null?(n.deletions=[t],n.flags|=16):w.push(t)),n.child=a,n.memoizedState=null,a)}function Ic(t,n){return n=Sl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Sl(t,n){return t=Vn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Fc(t,n,a){return Fr(n,t.child,null,a),t=Ic(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Mm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ic(t.return,n,a)}function Hc(t,n,a,s,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=a,m.tailMode=c)}function Em(t,n,a){var s=n.pendingProps,c=s.revealOrder,m=s.tail;if(yn(t,n,s.children,a),s=ln.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mm(t,a,n);else if(t.tag===19)Mm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(dt(ln,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&gl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Hc(n,!1,c,a,m);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&gl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Hc(n,!0,a,null,m);break;case"together":Hc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Is(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Oi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function kc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&el(t)))}function Vv(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),la(n,on,t.memoizedState.cache),zs();break;case 27:case 5:Ht(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:la(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sm(t,n,a):(da(n),t=ki(t,n,a),t!==null?t.sibling:null);da(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Is(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Em(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),dt(ln,ln.current),s)break;return null;case 22:case 23:return n.lanes=0,_m(t,n,a);case 24:la(n,on,t.memoizedState.cache)}return ki(t,n,a)}function bm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!kc(t,a)&&(n.flags&128)===0)return dn=!1,Vv(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,Ue&&(n.flags&1048576)!==0&&tp(n,tl,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Ku(s)?(t=ar(s,t),n.tag=1,n=ym(null,n,s,t,a)):(n.tag=0,n=Oc(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===R){n.tag=11,n=dm(null,n,s,t,a);break t}else if(c===P){n.tag=14,n=pm(null,n,s,t,a);break t}}throw n=T(s)||s,Error(r(306,n,""))}}return n;case 0:return Oc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ar(s,n.pendingProps),ym(t,n,s,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var m=n.memoizedState;c=m.element,cc(t,n),Ws(n,s,null,a);var w=n.memoizedState;if(s=w.cache,la(n,on,s),s!==m.cache&&ac(n,[on],a,!0),Xs(),s=w.element,m.isDehydrated)if(m={element:s,isDehydrated:!1,cache:w.cache},n.updateQueue.baseState=m,n.memoizedState=m,n.flags&256){n=xm(t,n,s,a);break t}else if(s!==c){c=Qn(Error(r(424)),n),Bs(c),n=xm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=li(t.firstChild),Cn=n,Ue=!0,Ja=null,_i=!0,a=nm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zs(),s===c){n=ki(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return xl(t,n),t===null?(a=R_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ue||(a=n.type,t=n.pendingProps,s=Pl(yt.current).createElement(a),s[rn]=n,s[gn]=t,Sn(s,a,t),tn(s),n.stateNode=s):n.memoizedState=R_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&Ue&&(s=n.stateNode=T_(n.type,n.pendingProps,yt.current),Cn=n,_i=!0,c=Ke,Ea(n.type)?(Mf=c,Ke=li(s.firstChild)):Ke=c),yn(t,n,n.pendingProps.children,a),xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ue&&((c=s=Ke)&&(s=gy(s,n.type,n.pendingProps,_i),s!==null?(n.stateNode=s,Cn=n,Ke=li(s.firstChild),_i=!1,c=!0):c=!1),c||$a(n)),Ht(n),c=n.type,m=n.pendingProps,w=t!==null?t.memoizedProps:null,s=m.children,vf(c,m)?s=null:w!==null&&vf(c,w)&&(n.flags|=32),n.memoizedState!==null&&(c=_c(t,n,Pv,null,null,a),po._currentValue=c),xl(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&Ue&&((t=a=Ke)&&(a=vy(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Cn=n,Ke=null,t=!0):t=!1),t||$a(n)),null;case 13:return Sm(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Fr(n,null,s,a):yn(t,n,s,a),n.child;case 11:return dm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,la(n,n.type,s.value),yn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,er(n),c=bn(c),s=s(c),n.flags|=1,yn(t,n,s,a),n.child;case 14:return pm(t,n,n.type,n.pendingProps,a);case 15:return mm(t,n,n.type,n.pendingProps,a);case 19:return Em(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=Sl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Oi(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return _m(t,n,a);case 24:return er(n),s=bn(on),t===null?(c=oc(),c===null&&(c=We,m=rc(),c.pooledCache=m,m.refCount++,m!==null&&(c.pooledCacheLanes|=a),c=m),n.memoizedState={parent:s,cache:c},uc(n),la(n,on,c)):((t.lanes&a)!==0&&(cc(t,n),Ws(n,null,null,a),Xs()),c=t.memoizedState,m=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),la(n,on,s)):(s=m.cache,la(n,on,s),s!==c.cache&&ac(n,[on],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Gi(t){t.flags|=4}function Tm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!N_(n)){if(n=ei.current,n!==null&&((be&4194048)===be?gi!==null:(be&62914560)!==be&&(be&536870912)===0||n!==gi))throw Gs=lc,lp;t.flags|=8192}}function Ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Gt():536870912,t.lanes|=n,Vr|=n)}function Js(t,n){if(!Ue)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ye(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Xv(t,n,a){var s=n.pendingProps;switch(tc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(on),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ps(n)?Gi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ip())),Ye(n),null;case 26:return a=n.memoizedState,t===null?(Gi(n),a!==null?(Ye(n),Tm(n,a)):(Ye(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Gi(n),Ye(n),Tm(n,a)):(Ye(n),n.flags&=-16777217):(t.memoizedProps!==s&&Gi(n),Ye(n),n.flags&=-16777217),null;case 27:Zt(n),a=yt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}t=j.current,Ps(n)?ep(n):(t=T_(c,s,a),n.stateNode=t,Gi(n))}return Ye(n),null;case 5:if(Zt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(t=j.current,Ps(n))ep(n);else{switch(c=Pl(yt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[rn]=n,t[gn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Sn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Gi(n)}}return Ye(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=yt.current,Ps(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Cn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||v_(t.nodeValue,a)),t||$a(n)}else t=Pl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return Ye(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ps(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),c=!1}else c=ip(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var m=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(m=s.memoizedState.cachePool.pool),m!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),Ye(n),null;case 4:return zt(),t===null&&df(n.stateNode.containerInfo),Ye(n),null;case 10:return Ii(n.type),Ye(n),null;case 19:if(K(ln),c=n.memoizedState,c===null)return Ye(n),null;if(s=(n.flags&128)!==0,m=c.rendering,m===null)if(s)Js(c,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(m=gl(t),m!==null){for(n.flags|=128,Js(c,!1),t=m.updateQueue,n.updateQueue=t,Ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)$d(a,t),a=a.sibling;return dt(ln,ln.current&1|2),n.child}t=t.sibling}c.tail!==null&&V()>Tl&&(n.flags|=128,s=!0,Js(c,!1),n.lanes=4194304)}else{if(!s)if(t=gl(m),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,Ml(n,t),Js(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Ue)return Ye(n),null}else 2*V()-c.renderingStartTime>Tl&&a!==536870912&&(n.flags|=128,s=!0,Js(c,!1),n.lanes=4194304);c.isBackwards?(m.sibling=n.child,n.child=m):(t=c.last,t!==null?t.sibling=m:n.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=V(),n.sibling=null,t=ln.current,dt(ln,s?t&1|2:t&1),n):(Ye(n),null);case 22:case 23:return Hi(n),pc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&K(nr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(on),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Wv(t,n){switch(tc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ii(on),zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Zt(n),null;case 13:if(Hi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));zs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(ln),null;case 4:return zt(),null;case 10:return Ii(n.type),null;case 22:case 23:return Hi(n),pc(),t!==null&&K(nr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ii(on),null;case 25:return null;default:return null}}function Am(t,n){switch(tc(n),n.tag){case 3:Ii(on),zt();break;case 26:case 27:case 5:Zt(n);break;case 4:zt();break;case 13:Hi(n);break;case 19:K(ln);break;case 10:Ii(n.type);break;case 22:case 23:Hi(n),pc(),t!==null&&K(nr);break;case 24:Ii(on)}}function $s(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var m=a.create,w=a.inst;s=m(),w.destroy=s}a=a.next}while(a!==c)}}catch(O){Ge(n,n.return,O)}}function ma(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var m=c.next;s=m;do{if((s.tag&t)===t){var w=s.inst,O=w.destroy;if(O!==void 0){w.destroy=void 0,c=n;var J=a,gt=O;try{gt()}catch(Ct){Ge(c,J,Ct)}}}s=s.next}while(s!==m)}}catch(Ct){Ge(n,n.return,Ct)}}function wm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{pp(n,a)}catch(s){Ge(t,t.return,s)}}}function Rm(t,n,a){a.props=ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(t,n,s)}}function to(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ge(t,n,c)}}function vi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ge(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(t,n,c)}else a.current=null}function Cm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ge(t,t.return,c)}}function Gc(t,n,a){try{var s=t.stateNode;hy(s,t.type,a,n),s[gn]=n}catch(c){Ge(t,t.return,c)}}function Dm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function Vc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Dm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ol));else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Xc(t,n,a),t=t.sibling;t!==null;)Xc(t,n,a),t=t.sibling}function El(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function Um(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Sn(n,s,a),n[rn]=t,n[gn]=a}catch(m){Ge(t,t.return,m)}}var Vi=!1,$e=!1,Wc=!1,Lm=typeof WeakSet=="function"?WeakSet:Set,pn=null;function qv(t,n){if(t=t.containerInfo,_f=kl,t=Vd(t),Vu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,m=s.focusNode;s=s.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break t}var w=0,O=-1,J=-1,gt=0,Ct=0,Ut=t,vt=null;e:for(;;){for(var St;Ut!==a||c!==0&&Ut.nodeType!==3||(O=w+c),Ut!==m||s!==0&&Ut.nodeType!==3||(J=w+s),Ut.nodeType===3&&(w+=Ut.nodeValue.length),(St=Ut.firstChild)!==null;)vt=Ut,Ut=St;for(;;){if(Ut===t)break e;if(vt===a&&++gt===c&&(O=w),vt===m&&++Ct===s&&(J=w),(St=Ut.nextSibling)!==null)break;Ut=vt,vt=Ut.parentNode}Ut=St}a=O===-1||J===-1?null:{start:O,end:J}}else a=null}a=a||{start:0,end:0}}else a=null;for(gf={focusedElem:t,selectionRange:a},kl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,m=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,a=n,c=m.memoizedProps,m=m.memoizedState,s=a.stateNode;try{var fe=ar(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(fe,m),s.__reactInternalSnapshotBeforeUpdate=t}catch(le){Ge(a,a.return,le)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Nm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a),s&4&&$s(5,a);break;case 1:if(_a(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(w){Ge(a,a.return,w)}else{var c=ar(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(w){Ge(a,a.return,w)}}s&64&&wm(a),s&512&&to(a,a.return);break;case 3:if(_a(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pp(t,n)}catch(w){Ge(a,a.return,w)}}break;case 27:n===null&&s&4&&Um(a);case 26:case 5:_a(t,a),n===null&&s&4&&Cm(a),s&512&&to(a,a.return);break;case 12:_a(t,a);break;case 13:_a(t,a),s&4&&zm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ey.bind(null,a),yy(t,a))));break;case 22:if(s=a.memoizedState!==null||Vi,!s){n=n!==null&&n.memoizedState!==null||$e,c=Vi;var m=$e;Vi=s,($e=n)&&!m?ga(t,a,(a.subtreeFlags&8772)!==0):_a(t,a),Vi=c,$e=m}break;case 30:break;default:_a(t,a)}}function Om(t){var n=t.alternate;n!==null&&(t.alternate=null,Om(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&aa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qe=null,Pn=!1;function Xi(t,n,a){for(a=a.child;a!==null;)Pm(t,n,a),a=a.sibling}function Pm(t,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:$e||vi(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||vi(a,n);var s=qe,c=Pn;Ea(a.type)&&(qe=a.stateNode,Pn=!1),Xi(t,n,a),uo(a.stateNode),qe=s,Pn=c;break;case 5:$e||vi(a,n);case 6:if(s=qe,c=Pn,qe=null,Xi(t,n,a),qe=s,Pn=c,qe!==null)if(Pn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(m){Ge(a,n,m)}else try{qe.removeChild(a.stateNode)}catch(m){Ge(a,n,m)}break;case 18:qe!==null&&(Pn?(t=qe,E_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vo(t)):E_(qe,a.stateNode));break;case 4:s=qe,c=Pn,qe=a.stateNode.containerInfo,Pn=!0,Xi(t,n,a),qe=s,Pn=c;break;case 0:case 11:case 14:case 15:$e||ma(2,a,n),$e||ma(4,a,n),Xi(t,n,a);break;case 1:$e||(vi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Rm(a,n,s)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:$e=(s=$e)||a.memoizedState!==null,Xi(t,n,a),$e=s;break;default:Xi(t,n,a)}}function zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vo(t)}catch(a){Ge(n,n.return,a)}}function Yv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Lm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Lm),n;default:throw Error(r(435,t.tag))}}function qc(t,n){var a=Yv(t);n.forEach(function(s){var c=ny.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],m=t,w=n,O=w;t:for(;O!==null;){switch(O.tag){case 27:if(Ea(O.type)){qe=O.stateNode,Pn=!1;break t}break;case 5:qe=O.stateNode,Pn=!1;break t;case 3:case 4:qe=O.stateNode.containerInfo,Pn=!0;break t}O=O.return}if(qe===null)throw Error(r(160));Pm(m,w,c),qe=null,Pn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Bm(n,t),n=n.sibling}var oi=null;function Bm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),s&4&&(ma(3,t,t.return),$s(3,t),ma(5,t,t.return));break;case 1:Xn(n,t),Wn(t),s&512&&($e||a===null||vi(a,a.return)),s&64&&Vi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=oi;if(Xn(n,t),Wn(t),s&512&&($e||a===null||vi(a,a.return)),s&4){var m=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":m=c.getElementsByTagName("title")[0],(!m||m[ia]||m[rn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=c.createElement(s),c.head.insertBefore(m,c.querySelector("head > title"))),Sn(m,s,a),m[rn]=t,tn(m),s=m;break t;case"link":var w=U_("link","href",c).get(s+(a.href||""));if(w){for(var O=0;O<w.length;O++)if(m=w[O],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){w.splice(O,1);break e}}m=c.createElement(s),Sn(m,s,a),c.head.appendChild(m);break;case"meta":if(w=U_("meta","content",c).get(s+(a.content||""))){for(O=0;O<w.length;O++)if(m=w[O],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){w.splice(O,1);break e}}m=c.createElement(s),Sn(m,s,a),c.head.appendChild(m);break;default:throw Error(r(468,s))}m[rn]=t,tn(m),s=m}t.stateNode=s}else L_(c,t.type,t.stateNode);else t.stateNode=D_(c,s,t.memoizedProps);else m!==s?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,s===null?L_(c,t.type,t.stateNode):D_(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Gc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),s&512&&($e||a===null||vi(a,a.return)),a!==null&&s&4&&Gc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),s&512&&($e||a===null||vi(a,a.return)),t.flags&32){c=t.stateNode;try{mi(c,"")}catch(St){Ge(t,t.return,St)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Gc(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Wc=!0);break;case 6:if(Xn(n,t),Wn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(St){Ge(t,t.return,St)}}break;case 3:if(Il=null,c=oi,oi=zl(n.containerInfo),Xn(n,t),oi=c,Wn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{vo(n.containerInfo)}catch(St){Ge(t,t.return,St)}Wc&&(Wc=!1,Im(t));break;case 4:s=oi,oi=zl(t.stateNode.containerInfo),Xn(n,t),Wn(t),oi=s;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jc=V()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,qc(t,s)));break;case 22:c=t.memoizedState!==null;var J=a!==null&&a.memoizedState!==null,gt=Vi,Ct=$e;if(Vi=gt||c,$e=Ct||J,Xn(n,t),$e=Ct,Vi=gt,Wn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||J||Vi||$e||rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){J=a=n;try{if(m=J.stateNode,c)w=m.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{O=J.stateNode;var Ut=J.memoizedProps.style,vt=Ut!=null&&Ut.hasOwnProperty("display")?Ut.display:null;O.style.display=vt==null||typeof vt=="boolean"?"":(""+vt).trim()}}catch(St){Ge(J,J.return,St)}}}else if(n.tag===6){if(a===null){J=n;try{J.stateNode.nodeValue=c?"":J.memoizedProps}catch(St){Ge(J,J.return,St)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,qc(t,a))));break;case 19:Xn(n,t),Wn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,qc(t,s)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Dm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,m=Vc(t);El(t,m,c);break;case 5:var w=a.stateNode;a.flags&32&&(mi(w,""),a.flags&=-33);var O=Vc(t);El(t,O,w);break;case 3:case 4:var J=a.stateNode.containerInfo,gt=Vc(t);Xc(t,gt,J);break;default:throw Error(r(161))}}catch(Ct){Ge(t,t.return,Ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Im(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Im(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function _a(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nm(t,n.alternate,n),n=n.sibling}function rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),rr(n);break;case 1:vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rm(n,n.return,a),rr(n);break;case 27:uo(n.stateNode);case 26:case 5:vi(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,m=n,w=m.flags;switch(m.tag){case 0:case 11:case 15:ga(c,m,a),$s(4,m);break;case 1:if(ga(c,m,a),s=m,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(gt){Ge(s,s.return,gt)}if(s=m,c=s.updateQueue,c!==null){var O=s.stateNode;try{var J=c.shared.hiddenCallbacks;if(J!==null)for(c.shared.hiddenCallbacks=null,c=0;c<J.length;c++)dp(J[c],O)}catch(gt){Ge(s,s.return,gt)}}a&&w&64&&wm(m),to(m,m.return);break;case 27:Um(m);case 26:case 5:ga(c,m,a),a&&s===null&&w&4&&Cm(m),to(m,m.return);break;case 12:ga(c,m,a);break;case 13:ga(c,m,a),a&&w&4&&zm(c,m);break;case 22:m.memoizedState===null&&ga(c,m,a),to(m,m.return);break;case 30:break;default:ga(c,m,a)}n=n.sibling}}function Yc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Fs(a))}function Zc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fs(t))}function yi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fm(t,n,a,s),n=n.sibling}function Fm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,s),c&2048&&$s(9,n);break;case 1:yi(t,n,a,s);break;case 3:yi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Fs(t)));break;case 12:if(c&2048){yi(t,n,a,s),t=n.stateNode;try{var m=n.memoizedProps,w=m.id,O=m.onPostCommit;typeof O=="function"&&O(w,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(J){Ge(n,n.return,J)}}else yi(t,n,a,s);break;case 13:yi(t,n,a,s);break;case 23:break;case 22:m=n.stateNode,w=n.alternate,n.memoizedState!==null?m._visibility&2?yi(t,n,a,s):eo(t,n):m._visibility&2?yi(t,n,a,s):(m._visibility|=2,Hr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Yc(w,n);break;case 24:yi(t,n,a,s),c&2048&&Zc(n.alternate,n);break;default:yi(t,n,a,s)}}function Hr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var m=t,w=n,O=a,J=s,gt=w.flags;switch(w.tag){case 0:case 11:case 15:Hr(m,w,O,J,c),$s(8,w);break;case 23:break;case 22:var Ct=w.stateNode;w.memoizedState!==null?Ct._visibility&2?Hr(m,w,O,J,c):eo(m,w):(Ct._visibility|=2,Hr(m,w,O,J,c)),c&&gt&2048&&Yc(w.alternate,w);break;case 24:Hr(m,w,O,J,c),c&&gt&2048&&Zc(w.alternate,w);break;default:Hr(m,w,O,J,c)}n=n.sibling}}function eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:eo(a,s),c&2048&&Yc(s.alternate,s);break;case 24:eo(a,s),c&2048&&Zc(s.alternate,s);break;default:eo(a,s)}n=n.sibling}}var no=8192;function kr(t){if(t.subtreeFlags&no)for(t=t.child;t!==null;)Hm(t),t=t.sibling}function Hm(t){switch(t.tag){case 26:kr(t),t.flags&no&&t.memoizedState!==null&&Ly(oi,t.memoizedState,t.memoizedProps);break;case 5:kr(t);break;case 3:case 4:var n=oi;oi=zl(t.stateNode.containerInfo),kr(t),oi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=no,no=16777216,kr(t),no=n):kr(t));break;default:kr(t)}}function km(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Vm(s,t)}km(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gm(t),t=t.sibling}function Gm(t){switch(t.tag){case 0:case 11:case 15:io(t),t.flags&2048&&ma(9,t,t.return);break;case 3:io(t);break;case 12:io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bl(t)):io(t);break;default:io(t)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Vm(s,t)}km(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ma(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}t=t.sibling}}function Vm(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Fs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var c=s.sibling,m=s.return;if(Om(s),s===a){pn=null;break t}if(c!==null){c.return=m,pn=c;break t}pn=m}}}var Zv={getCacheForType:function(t){var n=bn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},jv=typeof WeakMap=="function"?WeakMap:Map,Oe=0,We=null,ye=null,be=0,Pe=0,qn=null,va=!1,Gr=!1,jc=!1,Wi=0,Qe=0,ya=0,sr=0,Kc=0,ni=0,Vr=0,ao=null,zn=null,Qc=!1,Jc=0,Tl=1/0,Al=null,xa=null,xn=0,Sa=null,Xr=null,Wr=0,$c=0,tf=null,Xm=null,ro=0,ef=null;function Yn(){if((Oe&2)!==0&&be!==0)return be&-be;if(X.T!==null){var t=Lr;return t!==0?t:uf()}return Ae()}function Wm(){ni===0&&(ni=(be&536870912)===0||Ue?at():536870912);var t=ei.current;return t!==null&&(t.flags|=32),ni}function Zn(t,n,a){(t===We&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(qr(t,0),Ma(t,be,ni,!1)),Xt(t,a),((Oe&2)===0||t!==We)&&(t===We&&((Oe&2)===0&&(sr|=a),Qe===4&&Ma(t,be,ni,!1)),xi(t))}function qm(t,n,a){if((Oe&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||It(t,n),c=s?Jv(t,n):rf(t,n,!0),m=s;do{if(c===0){Gr&&!s&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,m&&!Kv(a)){c=rf(t,n,!1),m=!1;continue}if(c===2){if(m=n,t.errorRecoveryDisabledLanes&m)var w=0;else w=t.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){n=w;t:{var O=t;c=ao;var J=O.current.memoizedState.isDehydrated;if(J&&(qr(O,w).flags|=256),w=rf(O,w,!1),w!==2){if(jc&&!J){O.errorRecoveryDisabledLanes|=m,sr|=m,c=4;break t}m=zn,zn=c,m!==null&&(zn===null?zn=m:zn.push.apply(zn,m))}c=w}if(m=!1,c!==2)continue}}if(c===1){qr(t,0),Ma(t,n,0,!0);break}t:{switch(s=t,m=c,m){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,ni,!va);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Jc+300-V(),10<c)){if(Ma(s,n,ni,!va),Kt(s,0,!0)!==0)break t;s.timeoutHandle=S_(Ym.bind(null,s,a,zn,Al,Qc,n,ni,sr,Vr,va,m,2,-0,0),c);break t}Ym(s,a,zn,Al,Qc,n,ni,sr,Vr,va,m,0,-0,0)}}break}while(!0);xi(t)}function Ym(t,n,a,s,c,m,w,O,J,gt,Ct,Ut,vt,St){if(t.timeoutHandle=-1,Ut=n.subtreeFlags,(Ut&8192||(Ut&16785408)===16785408)&&(ho={stylesheets:null,count:0,unsuspend:Uy},Hm(n),Ut=Ny(),Ut!==null)){t.cancelPendingCommit=Ut(t_.bind(null,t,n,m,a,s,c,w,O,J,Ct,1,vt,St)),Ma(t,m,w,!gt);return}t_(t,n,m,a,s,c,w,O,J)}function Kv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],m=c.getSnapshot;c=c.value;try{if(!Gn(m(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,s){n&=~Kc,n&=~sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var m=31-Ft(c),w=1<<m;s[m]=-1,c&=~w}a!==0&&Lt(t,a,n)}function wl(){return(Oe&6)===0?(so(0),!1):!0}function nf(){if(ye!==null){if(Pe===0)var t=ye.return;else t=ye,Bi=tr=null,yc(t),Ir=null,Ks=0,t=ye;for(;t!==null;)Am(t.alternate,t),t=t.return;ye=null}}function qr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,py(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),We=t,ye=a=Oi(t.current,null),be=n,Pe=0,qn=null,va=!1,Gr=It(t,n),jc=!1,Vr=ni=Kc=sr=ya=Qe=0,zn=ao=null,Qc=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Ft(s),m=1<<c;n|=t[c],s&=~m}return Wi=n,jo(),a}function Zm(t,n){ge=null,X.H=pl,n===ks||n===al?(n=fp(),Pe=3):n===lp?(n=fp(),Pe=4):Pe=n===hm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,ye===null&&(Qe=1,yl(t,Qn(n,t.current)))}function jm(){var t=X.H;return X.H=pl,t===null?pl:t}function Km(){var t=X.A;return X.A=Zv,t}function af(){Qe=4,va||(be&4194048)!==be&&ei.current!==null||(Gr=!0),(ya&134217727)===0&&(sr&134217727)===0||We===null||Ma(We,be,ni,!1)}function rf(t,n,a){var s=Oe;Oe|=2;var c=jm(),m=Km();(We!==t||be!==n)&&(Al=null,qr(t,n)),n=!1;var w=Qe;t:do try{if(Pe!==0&&ye!==null){var O=ye,J=qn;switch(Pe){case 8:nf(),w=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var gt=Pe;if(Pe=0,qn=null,Yr(t,O,J,gt),a&&Gr){w=0;break t}break;default:gt=Pe,Pe=0,qn=null,Yr(t,O,J,gt)}}Qv(),w=Qe;break}catch(Ct){Zm(t,Ct)}while(!0);return n&&t.shellSuspendCounter++,Bi=tr=null,Oe=s,X.H=c,X.A=m,ye===null&&(We=null,be=0,jo()),w}function Qv(){for(;ye!==null;)Qm(ye)}function Jv(t,n){var a=Oe;Oe|=2;var s=jm(),c=Km();We!==t||be!==n?(Al=null,Tl=V()+500,qr(t,n)):Gr=It(t,n);t:do try{if(Pe!==0&&ye!==null){n=ye;var m=qn;e:switch(Pe){case 1:Pe=0,qn=null,Yr(t,n,m,1);break;case 2:case 9:if(up(m)){Pe=0,qn=null,Jm(n);break}n=function(){Pe!==2&&Pe!==9||We!==t||(Pe=7),xi(t)},m.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:up(m)?(Pe=0,qn=null,Jm(n)):(Pe=0,qn=null,Yr(t,n,m,7));break;case 5:var w=null;switch(ye.tag){case 26:w=ye.memoizedState;case 5:case 27:var O=ye;if(!w||N_(w)){Pe=0,qn=null;var J=O.sibling;if(J!==null)ye=J;else{var gt=O.return;gt!==null?(ye=gt,Rl(gt)):ye=null}break e}}Pe=0,qn=null,Yr(t,n,m,5);break;case 6:Pe=0,qn=null,Yr(t,n,m,6);break;case 8:nf(),Qe=6;break t;default:throw Error(r(462))}}$v();break}catch(Ct){Zm(t,Ct)}while(!0);return Bi=tr=null,X.H=s,X.A=c,Oe=a,ye!==null?0:(We=null,be=0,jo(),Qe)}function $v(){for(;ye!==null&&!At();)Qm(ye)}function Qm(t){var n=bm(t.alternate,t,Wi);t.memoizedProps=t.pendingProps,n===null?Rl(t):ye=n}function Jm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=vm(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=vm(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:yc(n);default:Am(a,n),n=ye=$d(n,Wi),n=bm(a,n,Wi)}t.memoizedProps=t.pendingProps,n===null?Rl(t):ye=n}function Yr(t,n,a,s){Bi=tr=null,yc(n),Ir=null,Ks=0;var c=n.return;try{if(Gv(t,c,n,a,be)){Qe=1,yl(t,Qn(a,t.current)),ye=null;return}}catch(m){if(c!==null)throw ye=c,m;Qe=1,yl(t,Qn(a,t.current)),ye=null;return}n.flags&32768?(Ue||s===1?t=!0:Gr||(be&536870912)!==0?t=!1:(va=t=!0,(s===2||s===9||s===3||s===6)&&(s=ei.current,s!==null&&s.tag===13&&(s.flags|=16384))),$m(n,t)):Rl(n)}function Rl(t){var n=t;do{if((n.flags&32768)!==0){$m(n,va);return}t=n.return;var a=Xv(n.alternate,n,Wi);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);Qe===0&&(Qe=5)}function $m(t,n){do{var a=Wv(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);Qe=6,ye=null}function t_(t,n,a,s,c,m,w,O,J){t.cancelPendingCommit=null;do Cl();while(xn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(m=n.lanes|n.childLanes,m|=Zu,Ot(t,a,m,w,O,J),t===We&&(ye=We=null,be=0),Xr=n,Sa=t,Wr=a,$c=m,tf=c,Xm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,iy(xt,function(){return r_(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=X.T,X.T=null,c=q.p,q.p=2,w=Oe,Oe|=4;try{qv(t,n,a)}finally{Oe=w,q.p=c,X.T=s}}xn=1,e_(),n_(),i_()}}function e_(){if(xn===1){xn=0;var t=Sa,n=Xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=X.T,X.T=null;var s=q.p;q.p=2;var c=Oe;Oe|=4;try{Bm(n,t);var m=gf,w=Vd(t.containerInfo),O=m.focusedElem,J=m.selectionRange;if(w!==O&&O&&O.ownerDocument&&Gd(O.ownerDocument.documentElement,O)){if(J!==null&&Vu(O)){var gt=J.start,Ct=J.end;if(Ct===void 0&&(Ct=gt),"selectionStart"in O)O.selectionStart=gt,O.selectionEnd=Math.min(Ct,O.value.length);else{var Ut=O.ownerDocument||document,vt=Ut&&Ut.defaultView||window;if(vt.getSelection){var St=vt.getSelection(),fe=O.textContent.length,le=Math.min(J.start,fe),Ie=J.end===void 0?le:Math.min(J.end,fe);!St.extend&&le>Ie&&(w=Ie,Ie=le,le=w);var lt=kd(O,le),it=kd(O,Ie);if(lt&&it&&(St.rangeCount!==1||St.anchorNode!==lt.node||St.anchorOffset!==lt.offset||St.focusNode!==it.node||St.focusOffset!==it.offset)){var _t=Ut.createRange();_t.setStart(lt.node,lt.offset),St.removeAllRanges(),le>Ie?(St.addRange(_t),St.extend(it.node,it.offset)):(_t.setEnd(it.node,it.offset),St.addRange(_t))}}}}for(Ut=[],St=O;St=St.parentNode;)St.nodeType===1&&Ut.push({element:St,left:St.scrollLeft,top:St.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<Ut.length;O++){var Dt=Ut[O];Dt.element.scrollLeft=Dt.left,Dt.element.scrollTop=Dt.top}}kl=!!_f,gf=_f=null}finally{Oe=c,q.p=s,X.T=a}}t.current=n,xn=2}}function n_(){if(xn===2){xn=0;var t=Sa,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=X.T,X.T=null;var s=q.p;q.p=2;var c=Oe;Oe|=4;try{Nm(t,n.alternate,n)}finally{Oe=c,q.p=s,X.T=a}}xn=3}}function i_(){if(xn===4||xn===3){xn=0,ot();var t=Sa,n=Xr,a=Wr,s=Xm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Xr=Sa=null,a_(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(xa=null),Ne(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=X.T,c=q.p,q.p=2,X.T=null;try{for(var m=t.onRecoverableError,w=0;w<s.length;w++){var O=s[w];m(O.value,{componentStack:O.stack})}}finally{X.T=n,q.p=c}}(Wr&3)!==0&&Cl(),xi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===ef?ro++:(ro=0,ef=t):ro=0,so(0)}}function a_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Fs(n)))}function Cl(t){return e_(),n_(),i_(),r_()}function r_(){if(xn!==5)return!1;var t=Sa,n=$c;$c=0;var a=Ne(Wr),s=X.T,c=q.p;try{q.p=32>a?32:a,X.T=null,a=tf,tf=null;var m=Sa,w=Wr;if(xn=0,Xr=Sa=null,Wr=0,(Oe&6)!==0)throw Error(r(331));var O=Oe;if(Oe|=4,Gm(m.current),Fm(m,m.current,w,a),Oe=O,so(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(ft,m)}catch{}return!0}finally{q.p=c,X.T=s,a_(t,n)}}function s_(t,n,a){n=Qn(a,n),n=Nc(t.stateNode,n,2),t=fa(t,n,2),t!==null&&(Xt(t,2),xi(t))}function Ge(t,n,a){if(t.tag===3)s_(t,t,a);else for(;n!==null;){if(n.tag===3){s_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){t=Qn(a,t),a=cm(2),s=fa(n,a,2),s!==null&&(fm(a,s,n,t),Xt(s,2),xi(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new jv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(jc=!0,c.add(a),t=ty.bind(null,t,n,a),n.then(t,t))}function ty(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(be&a)===a&&(Qe===4||Qe===3&&(be&62914560)===be&&300>V()-Jc?(Oe&2)===0&&qr(t,0):Kc|=a,Vr===be&&(Vr=0)),xi(t)}function o_(t,n){n===0&&(n=Gt()),t=Rr(t,n),t!==null&&(Xt(t,n),xi(t))}function ey(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),o_(t,a)}function ny(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),o_(t,a)}function iy(t,n){return Qt(t,n)}var Dl=null,Zr=null,of=!1,Ul=!1,lf=!1,or=0;function xi(t){t!==Zr&&t.next===null&&(Zr===null?Dl=Zr=t:Zr=Zr.next=t),Ul=!0,of||(of=!0,ry())}function so(t,n){if(!lf&&Ul){lf=!0;do for(var a=!1,s=Dl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var m=0;else{var w=s.suspendedLanes,O=s.pingedLanes;m=(1<<31-Ft(42|t)+1)-1,m&=c&~(w&~O),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,f_(s,m))}else m=be,m=Kt(s,s===We?m:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(m&3)===0||It(s,m)||(a=!0,f_(s,m));s=s.next}while(a);lf=!1}}function ay(){l_()}function l_(){Ul=of=!1;var t=0;or!==0&&(dy()&&(t=or),or=0);for(var n=V(),a=null,s=Dl;s!==null;){var c=s.next,m=u_(s,n);m===0?(s.next=null,a===null?Dl=c:a.next=c,c===null&&(Zr=a)):(a=s,(t!==0||(m&3)!==0)&&(Ul=!0)),s=c}so(t)}function u_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var w=31-Ft(m),O=1<<w,J=c[w];J===-1?((O&a)===0||(O&s)!==0)&&(c[w]=re(O,n)):J<=n&&(t.expiredLanes|=O),m&=~O}if(n=We,a=be,a=Kt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&M(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&M(s),Ne(a)){case 2:case 8:a=pt;break;case 32:a=xt;break;case 268435456:a=z;break;default:a=xt}return s=c_.bind(null,t),a=Qt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&M(s),t.callbackPriority=2,t.callbackNode=null,2}function c_(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cl()&&t.callbackNode!==a)return null;var s=be;return s=Kt(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(qm(t,s,n),u_(t,V()),t.callbackNode!=null&&t.callbackNode===a?c_.bind(null,t):null)}function f_(t,n){if(Cl())return null;qm(t,n,!0)}function ry(){my(function(){(Oe&6)!==0?Qt(tt,ay):l_()})}function uf(){return or===0&&(or=at()),or}function h_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function d_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function sy(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var m=h_((c[gn]||null).action),w=s.submitter;w&&(n=(n=w[gn]||null)?h_(n.formAction):w.getAttribute("formAction"),n!==null&&(m=n,w=null));var O=new qo("action","action",null,s,c);t.push({event:O,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(or!==0){var J=w?d_(c,w):new FormData(c);Rc(a,{pending:!0,data:J,method:c.method,action:m},null,J)}}else typeof m=="function"&&(O.preventDefault(),J=w?d_(c,w):new FormData(c),Rc(a,{pending:!0,data:J,method:c.method,action:m},m,J))},currentTarget:c}]})}}for(var cf=0;cf<Yu.length;cf++){var ff=Yu[cf],oy=ff.toLowerCase(),ly=ff[0].toUpperCase()+ff.slice(1);si(oy,"on"+ly)}si(qd,"onAnimationEnd"),si(Yd,"onAnimationIteration"),si(Zd,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(Tv,"onTransitionRun"),si(Av,"onTransitionStart"),si(wv,"onTransitionCancel"),si(jd,"onTransitionEnd"),F("onMouseEnter",["mouseout","mouseover"]),F("onMouseLeave",["mouseout","mouseover"]),F("onPointerEnter",["pointerout","pointerover"]),F("onPointerLeave",["pointerout","pointerover"]),Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Di("onBeforeInput",["compositionend","keypress","textInput","paste"]),Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oo));function p_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var m=void 0;if(n)for(var w=s.length-1;0<=w;w--){var O=s[w],J=O.instance,gt=O.currentTarget;if(O=O.listener,J!==m&&c.isPropagationStopped())break t;m=O,c.currentTarget=gt;try{m(c)}catch(Ct){vl(Ct)}c.currentTarget=null,m=J}else for(w=0;w<s.length;w++){if(O=s[w],J=O.instance,gt=O.currentTarget,O=O.listener,J!==m&&c.isPropagationStopped())break t;m=O,c.currentTarget=gt;try{m(c)}catch(Ct){vl(Ct)}c.currentTarget=null,m=J}}}}function xe(t,n){var a=n[Va];a===void 0&&(a=n[Va]=new Set);var s=t+"__bubble";a.has(s)||(m_(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),m_(a,t,s,n)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[Ll]){t[Ll]=!0,Ho.forEach(function(a){a!=="selectionchange"&&(uy.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ll]||(n[Ll]=!0,hf("selectionchange",!1,n))}}function m_(t,n,a,s){switch(F_(n)){case 2:var c=zy;break;case 8:c=By;break;default:c=wf}a=c.bind(null,n,a,t),c=void 0,!Ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var m=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var w=s.tag;if(w===3||w===4){var O=s.stateNode.containerInfo;if(O===c)break;if(w===4)for(w=s.return;w!==null;){var J=w.tag;if((J===3||J===4)&&w.stateNode.containerInfo===c)return;w=w.return}for(;O!==null;){if(w=Ri(O),w===null)return;if(J=w.tag,J===5||J===6||J===26||J===27){s=m=w;continue t}O=O.parentNode}}s=s.return}Md(function(){var gt=m,Ct=Lu(a),Ut=[];t:{var vt=Kd.get(t);if(vt!==void 0){var St=qo,fe=t;switch(t){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":St=iv;break;case"focusin":fe="focus",St=Iu;break;case"focusout":fe="blur",St=Iu;break;case"beforeblur":case"afterblur":St=Iu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":St=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":St=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":St=sv;break;case qd:case Yd:case Zd:St=Z0;break;case jd:St=lv;break;case"scroll":case"scrollend":St=V0;break;case"wheel":St=cv;break;case"copy":case"cut":case"paste":St=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":St=wd;break;case"toggle":case"beforetoggle":St=hv}var le=(n&4)!==0,Ie=!le&&(t==="scroll"||t==="scrollend"),lt=le?vt!==null?vt+"Capture":null:vt;le=[];for(var it=gt,_t;it!==null;){var Dt=it;if(_t=Dt.stateNode,Dt=Dt.tag,Dt!==5&&Dt!==26&&Dt!==27||_t===null||lt===null||(Dt=As(it,lt),Dt!=null&&le.push(lo(it,Dt,_t))),Ie)break;it=it.return}0<le.length&&(vt=new St(vt,fe,null,a,Ct),Ut.push({event:vt,listeners:le}))}}if((n&7)===0){t:{if(vt=t==="mouseover"||t==="pointerover",St=t==="mouseout"||t==="pointerout",vt&&a!==Uu&&(fe=a.relatedTarget||a.fromElement)&&(Ri(fe)||fe[Ln]))break t;if((St||vt)&&(vt=Ct.window===Ct?Ct:(vt=Ct.ownerDocument)?vt.defaultView||vt.parentWindow:window,St?(fe=a.relatedTarget||a.toElement,St=gt,fe=fe?Ri(fe):null,fe!==null&&(Ie=u(fe),le=fe.tag,fe!==Ie||le!==5&&le!==27&&le!==6)&&(fe=null)):(St=null,fe=gt),St!==fe)){if(le=Td,Dt="onMouseLeave",lt="onMouseEnter",it="mouse",(t==="pointerout"||t==="pointerover")&&(le=wd,Dt="onPointerLeave",lt="onPointerEnter",it="pointer"),Ie=St==null?vt:Wa(St),_t=fe==null?vt:Wa(fe),vt=new le(Dt,it+"leave",St,a,Ct),vt.target=Ie,vt.relatedTarget=_t,Dt=null,Ri(Ct)===gt&&(le=new le(lt,it+"enter",fe,a,Ct),le.target=_t,le.relatedTarget=Ie,Dt=le),Ie=Dt,St&&fe)e:{for(le=St,lt=fe,it=0,_t=le;_t;_t=jr(_t))it++;for(_t=0,Dt=lt;Dt;Dt=jr(Dt))_t++;for(;0<it-_t;)le=jr(le),it--;for(;0<_t-it;)lt=jr(lt),_t--;for(;it--;){if(le===lt||lt!==null&&le===lt.alternate)break e;le=jr(le),lt=jr(lt)}le=null}else le=null;St!==null&&__(Ut,vt,St,le,!1),fe!==null&&Ie!==null&&__(Ut,Ie,fe,le,!0)}}t:{if(vt=gt?Wa(gt):window,St=vt.nodeName&&vt.nodeName.toLowerCase(),St==="select"||St==="input"&&vt.type==="file")var te=Pd;else if(Nd(vt))if(zd)te=Mv;else{te=xv;var ve=yv}else St=vt.nodeName,!St||St.toLowerCase()!=="input"||vt.type!=="checkbox"&&vt.type!=="radio"?gt&&Du(gt.elementType)&&(te=Pd):te=Sv;if(te&&(te=te(t,gt))){Od(Ut,te,a,Ct);break t}ve&&ve(t,vt,gt),t==="focusout"&&gt&&vt.type==="number"&&gt.memoizedProps.value!=null&&En(vt,"number",vt.value)}switch(ve=gt?Wa(gt):window,t){case"focusin":(Nd(ve)||ve.contentEditable==="true")&&(Tr=ve,Xu=gt,Os=null);break;case"focusout":Os=Xu=Tr=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,Xd(Ut,a,Ct);break;case"selectionchange":if(bv)break;case"keydown":case"keyup":Xd(Ut,a,Ct)}var ae;if(Hu)t:{switch(t){case"compositionstart":var ce="onCompositionStart";break t;case"compositionend":ce="onCompositionEnd";break t;case"compositionupdate":ce="onCompositionUpdate";break t}ce=void 0}else br?Ud(t,a)&&(ce="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(Rd&&a.locale!=="ko"&&(br||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&br&&(ae=Ed()):(oa=Ct,Pu="value"in oa?oa.value:oa.textContent,br=!0)),ve=Nl(gt,ce),0<ve.length&&(ce=new Ad(ce,t,null,a,Ct),Ut.push({event:ce,listeners:ve}),ae?ce.data=ae:(ae=Ld(a),ae!==null&&(ce.data=ae)))),(ae=pv?mv(t,a):_v(t,a))&&(ce=Nl(gt,"onBeforeInput"),0<ce.length&&(ve=new Ad("onBeforeInput","beforeinput",null,a,Ct),Ut.push({event:ve,listeners:ce}),ve.data=ae)),sy(Ut,t,gt,a,Ct)}p_(Ut,n)})}function lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Nl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,m=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||m===null||(c=As(t,a),c!=null&&s.unshift(lo(t,c,m)),c=As(t,n),c!=null&&s.push(lo(t,c,m))),t.tag===3)return s;t=t.return}return[]}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function __(t,n,a,s,c){for(var m=n._reactName,w=[];a!==null&&a!==s;){var O=a,J=O.alternate,gt=O.stateNode;if(O=O.tag,J!==null&&J===s)break;O!==5&&O!==26&&O!==27||gt===null||(J=gt,c?(gt=As(a,m),gt!=null&&w.unshift(lo(a,gt,J))):c||(gt=As(a,m),gt!=null&&w.push(lo(a,gt,J)))),a=a.return}w.length!==0&&t.push({event:n,listeners:w})}var cy=/\r\n?/g,fy=/\u0000|\uFFFD/g;function g_(t){return(typeof t=="string"?t:""+t).replace(cy,`
`).replace(fy,"")}function v_(t,n){return n=g_(n),g_(t)===n}function Ol(){}function Be(t,n,a,s,c,m){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||mi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&mi(t,""+s);break;case"className":Vt(t,"class",s);break;case"tabIndex":Vt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Vt(t,a,s);break;case"style":xd(t,s,m);break;case"data":if(n!=="object"){Vt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ol);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Pt(t,"popover",s);break;case"xlinkActuate":Yt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Yt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Yt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Yt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Yt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Yt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Yt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Yt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Yt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Pt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=k0.get(a)||a,Pt(t,a,s))}}function mf(t,n,a,s,c,m){switch(a){case"style":xd(t,s,m);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?mi(t,s):(typeof s=="number"||typeof s=="bigint")&&mi(t,""+s);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ol);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ko.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),m=t[gn]||null,m=m!=null?m[a]:null,typeof m=="function"&&t.removeEventListener(n,m,c),typeof s=="function")){typeof m!="function"&&m!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Pt(t,a,s)}}}function Sn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,c=!1,m;for(m in a)if(a.hasOwnProperty(m)){var w=a[m];if(w!=null)switch(m){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(t,n,m,w,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),s&&Be(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var O=m=w=c=null,J=null,gt=null;for(s in a)if(a.hasOwnProperty(s)){var Ct=a[s];if(Ct!=null)switch(s){case"name":c=Ct;break;case"type":w=Ct;break;case"checked":J=Ct;break;case"defaultChecked":gt=Ct;break;case"value":m=Ct;break;case"defaultValue":O=Ct;break;case"children":case"dangerouslySetInnerHTML":if(Ct!=null)throw Error(r(137,n));break;default:Be(t,n,s,Ct,a,null)}}ke(t,m,O,J,gt,w,c,!1),je(t);return;case"select":xe("invalid",t),s=w=m=null;for(c in a)if(a.hasOwnProperty(c)&&(O=a[c],O!=null))switch(c){case"value":m=O;break;case"defaultValue":w=O;break;case"multiple":s=O;default:Be(t,n,c,O,a,null)}n=m,a=w,t.multiple=!!s,n!=null?sn(t,!!s,n,!1):a!=null&&sn(t,!!s,a,!0);return;case"textarea":xe("invalid",t),m=c=s=null;for(w in a)if(a.hasOwnProperty(w)&&(O=a[w],O!=null))switch(w){case"value":s=O;break;case"defaultValue":c=O;break;case"children":m=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(91));break;default:Be(t,n,w,O,a,null)}vn(t,s,c,m),je(t);return;case"option":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Be(t,n,J,s,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<oo.length;s++)xe(oo[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(gt in a)if(a.hasOwnProperty(gt)&&(s=a[gt],s!=null))switch(gt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(t,n,gt,s,a,null)}return;default:if(Du(n)){for(Ct in a)a.hasOwnProperty(Ct)&&(s=a[Ct],s!==void 0&&mf(t,n,Ct,s,a,void 0));return}}for(O in a)a.hasOwnProperty(O)&&(s=a[O],s!=null&&Be(t,n,O,s,a,null))}function hy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,m=null,w=null,O=null,J=null,gt=null,Ct=null;for(St in a){var Ut=a[St];if(a.hasOwnProperty(St)&&Ut!=null)switch(St){case"checked":break;case"value":break;case"defaultValue":J=Ut;default:s.hasOwnProperty(St)||Be(t,n,St,null,s,Ut)}}for(var vt in s){var St=s[vt];if(Ut=a[vt],s.hasOwnProperty(vt)&&(St!=null||Ut!=null))switch(vt){case"type":m=St;break;case"name":c=St;break;case"checked":gt=St;break;case"defaultChecked":Ct=St;break;case"value":w=St;break;case"defaultValue":O=St;break;case"children":case"dangerouslySetInnerHTML":if(St!=null)throw Error(r(137,n));break;default:St!==Ut&&Be(t,n,vt,St,s,Ut)}}Ui(t,w,O,J,gt,Ct,m,c);return;case"select":St=w=O=vt=null;for(m in a)if(J=a[m],a.hasOwnProperty(m)&&J!=null)switch(m){case"value":break;case"multiple":St=J;default:s.hasOwnProperty(m)||Be(t,n,m,null,s,J)}for(c in s)if(m=s[c],J=a[c],s.hasOwnProperty(c)&&(m!=null||J!=null))switch(c){case"value":vt=m;break;case"defaultValue":O=m;break;case"multiple":w=m;default:m!==J&&Be(t,n,c,m,s,J)}n=O,a=w,s=St,vt!=null?sn(t,!!a,vt,!1):!!s!=!!a&&(n!=null?sn(t,!!a,n,!0):sn(t,!!a,a?[]:"",!1));return;case"textarea":St=vt=null;for(O in a)if(c=a[O],a.hasOwnProperty(O)&&c!=null&&!s.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:Be(t,n,O,null,s,c)}for(w in s)if(c=s[w],m=a[w],s.hasOwnProperty(w)&&(c!=null||m!=null))switch(w){case"value":vt=c;break;case"defaultValue":St=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==m&&Be(t,n,w,c,s,m)}hn(t,vt,St);return;case"option":for(var fe in a)if(vt=a[fe],a.hasOwnProperty(fe)&&vt!=null&&!s.hasOwnProperty(fe))switch(fe){case"selected":t.selected=!1;break;default:Be(t,n,fe,null,s,vt)}for(J in s)if(vt=s[J],St=a[J],s.hasOwnProperty(J)&&vt!==St&&(vt!=null||St!=null))switch(J){case"selected":t.selected=vt&&typeof vt!="function"&&typeof vt!="symbol";break;default:Be(t,n,J,vt,s,St)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)vt=a[le],a.hasOwnProperty(le)&&vt!=null&&!s.hasOwnProperty(le)&&Be(t,n,le,null,s,vt);for(gt in s)if(vt=s[gt],St=a[gt],s.hasOwnProperty(gt)&&vt!==St&&(vt!=null||St!=null))switch(gt){case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,n));break;default:Be(t,n,gt,vt,s,St)}return;default:if(Du(n)){for(var Ie in a)vt=a[Ie],a.hasOwnProperty(Ie)&&vt!==void 0&&!s.hasOwnProperty(Ie)&&mf(t,n,Ie,void 0,s,vt);for(Ct in s)vt=s[Ct],St=a[Ct],!s.hasOwnProperty(Ct)||vt===St||vt===void 0&&St===void 0||mf(t,n,Ct,vt,s,St);return}}for(var lt in a)vt=a[lt],a.hasOwnProperty(lt)&&vt!=null&&!s.hasOwnProperty(lt)&&Be(t,n,lt,null,s,vt);for(Ut in s)vt=s[Ut],St=a[Ut],!s.hasOwnProperty(Ut)||vt===St||vt==null&&St==null||Be(t,n,Ut,vt,s,St)}var _f=null,gf=null;function Pl(t){return t.nodeType===9?t:t.ownerDocument}function y_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function dy(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var S_=typeof setTimeout=="function"?setTimeout:void 0,py=typeof clearTimeout=="function"?clearTimeout:void 0,M_=typeof Promise=="function"?Promise:void 0,my=typeof queueMicrotask=="function"?queueMicrotask:typeof M_<"u"?function(t){return M_.resolve(null).then(t).catch(_y)}:S_;function _y(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function E_(t,n){var a=n,s=0,c=0;do{var m=a.nextSibling;if(t.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<s&&8>s){a=s;var w=t.ownerDocument;if(a&1&&uo(w.documentElement),a&2&&uo(w.body),a&4)for(a=w.head,uo(a),w=a.firstChild;w;){var O=w.nextSibling,J=w.nodeName;w[ia]||J==="SCRIPT"||J==="STYLE"||J==="LINK"&&w.rel.toLowerCase()==="stylesheet"||a.removeChild(w),w=O}}if(c===0){t.removeChild(m),vo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=m}while(a);vo(n)}function xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xf(a),aa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function gy(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ia])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var m=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function vy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function Sf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function yy(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Mf=null;function b_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function T_(t,n,a){switch(n=Pl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);aa(t)}var ii=new Map,A_=new Set;function zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qi=q.d;q.d={f:xy,r:Sy,D:My,C:Ey,L:by,m:Ty,X:wy,S:Ay,M:Ry};function xy(){var t=qi.f(),n=wl();return t||n}function Sy(t){var n=Ci(t);n!==null&&n.tag===5&&n.type==="form"?qp(n):qi.r(t)}var Kr=typeof document>"u"?null:document;function w_(t,n,a){var s=Kr;if(s&&typeof n=="string"&&n){var c=Xe(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),A_.has(c)||(A_.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Sn(n,"link",t),tn(n),s.head.appendChild(n)))}}function My(t){qi.D(t),w_("dns-prefetch",t,null)}function Ey(t,n){qi.C(t,n),w_("preconnect",t,n)}function by(t,n,a){qi.L(t,n,a);var s=Kr;if(s&&t&&n){var c='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Xe(a.imageSizes)+'"]')):c+='[href="'+Xe(t)+'"]';var m=c;switch(n){case"style":m=Qr(t);break;case"script":m=Jr(t)}ii.has(m)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ii.set(m,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(co(m))||n==="script"&&s.querySelector(fo(m))||(n=s.createElement("link"),Sn(n,"link",t),tn(n),s.head.appendChild(n)))}}function Ty(t,n){qi.m(t,n);var a=Kr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Xe(s)+'"][href="'+Xe(t)+'"]',m=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Jr(t)}if(!ii.has(m)&&(t=g({rel:"modulepreload",href:t},n),ii.set(m,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fo(m)))return}s=a.createElement("link"),Sn(s,"link",t),tn(s),a.head.appendChild(s)}}}function Ay(t,n,a){qi.S(t,n,a);var s=Kr;if(s&&t){var c=ra(s).hoistableStyles,m=Qr(t);n=n||"default";var w=c.get(m);if(!w){var O={loading:0,preload:null};if(w=s.querySelector(co(m)))O.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ii.get(m))&&Ef(t,a);var J=w=s.createElement("link");tn(J),Sn(J,"link",t),J._p=new Promise(function(gt,Ct){J.onload=gt,J.onerror=Ct}),J.addEventListener("load",function(){O.loading|=1}),J.addEventListener("error",function(){O.loading|=2}),O.loading|=4,Bl(w,n,s)}w={type:"stylesheet",instance:w,count:1,state:O},c.set(m,w)}}}function wy(t,n){qi.X(t,n);var a=Kr;if(a&&t){var s=ra(a).hoistableScripts,c=Jr(t),m=s.get(c);m||(m=a.querySelector(fo(c)),m||(t=g({src:t,async:!0},n),(n=ii.get(c))&&bf(t,n),m=a.createElement("script"),tn(m),Sn(m,"link",t),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},s.set(c,m))}}function Ry(t,n){qi.M(t,n);var a=Kr;if(a&&t){var s=ra(a).hoistableScripts,c=Jr(t),m=s.get(c);m||(m=a.querySelector(fo(c)),m||(t=g({src:t,async:!0,type:"module"},n),(n=ii.get(c))&&bf(t,n),m=a.createElement("script"),tn(m),Sn(m,"link",t),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},s.set(c,m))}}function R_(t,n,a,s){var c=(c=yt.current)?zl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=ra(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Qr(a.href);var m=ra(c).hoistableStyles,w=m.get(t);if(w||(c=c.ownerDocument||c,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,w),(m=c.querySelector(co(t)))&&!m._p&&(w.instance=m,w.state.loading=5),ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(t,a),m||Cy(c,t,a,w.state))),n&&s===null)throw Error(r(528,""));return w}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Jr(a),a=ra(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Qr(t){return'href="'+Xe(t)+'"'}function co(t){return'link[rel="stylesheet"]['+t+"]"}function C_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Cy(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Sn(n,"link",a),tn(n),t.head.appendChild(n))}function Jr(t){return'[src="'+Xe(t)+'"]'}function fo(t){return"script[async]"+t}function D_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(s)return n.instance=s,tn(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),tn(s),Sn(s,"style",c),Bl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Qr(a.href);var m=t.querySelector(co(c));if(m)return n.state.loading|=4,n.instance=m,tn(m),m;s=C_(a),(c=ii.get(c))&&Ef(s,c),m=(t.ownerDocument||t).createElement("link"),tn(m);var w=m;return w._p=new Promise(function(O,J){w.onload=O,w.onerror=J}),Sn(m,"link",s),n.state.loading|=4,Bl(m,a.precedence,t),n.instance=m;case"script":return m=Jr(a.src),(c=t.querySelector(fo(m)))?(n.instance=c,tn(c),c):(s=a,(c=ii.get(m))&&(s=g({},a),bf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),Sn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Bl(s,a.precedence,t));return n.instance}function Bl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,m=c,w=0;w<s.length;w++){var O=s[w];if(O.dataset.precedence===n)m=O;else if(m!==c)break}m?m.parentNode.insertBefore(t,m.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Il=null;function U_(t,n,a){if(Il===null){var s=new Map,c=Il=new Map;c.set(a,s)}else c=Il,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var m=a[c];if(!(m[ia]||m[rn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var w=m.getAttribute(n)||"";w=t+w;var O=s.get(w);O?O.push(m):s.set(w,[m])}}return s}function L_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Dy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function N_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ho=null;function Uy(){}function Ly(t,n,a){if(ho===null)throw Error(r(475));var s=ho;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Qr(a.href),m=t.querySelector(co(c));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Fl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=m,tn(m);return}m=t.ownerDocument||t,a=C_(a),(c=ii.get(c))&&Ef(a,c),m=m.createElement("link"),tn(m);var w=m;w._p=new Promise(function(O,J){w.onload=O,w.onerror=J}),Sn(m,"link",a),n.instance=m}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Fl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Ny(){if(ho===null)throw Error(r(475));var t=ho;return t.stylesheets&&t.count===0&&Tf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Tf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Fl(){if(this.count--,this.count===0){if(this.stylesheets)Tf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hl=null;function Tf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hl=new Map,n.forEach(Oy,t),Hl=null,Fl.call(t))}function Oy(t,n){if(!(n.state.loading&4)){var a=Hl.get(t);if(a)var s=a.get(null);else{a=new Map,Hl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<c.length;m++){var w=c[m];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(a.set(w.dataset.precedence,w),s=w)}s&&a.set(null,s)}c=n.instance,w=c.getAttribute("data-precedence"),m=a.get(w)||s,m===s&&a.set(null,c),a.set(w,c),this.count++,s=Fl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),m?m.parentNode.insertBefore(c,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var po={$$typeof:C,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function Py(t,n,a,s,c,m,w,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.hiddenUpdates=Nt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=m,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function O_(t,n,a,s,c,m,w,O,J,gt,Ct,Ut){return t=new Py(t,n,a,w,O,J,gt,Ut),n=1,m===!0&&(n|=24),m=Vn(3,null,null,n),t.current=m,m.stateNode=t,n=rc(),n.refCount++,t.pooledCache=n,n.refCount++,m.memoizedState={element:s,isDehydrated:a,cache:n},uc(m),t}function P_(t){return t?(t=Cr,t):Cr}function z_(t,n,a,s,c,m){c=P_(c),s.context===null?s.context=c:s.pendingContext=c,s=ca(n),s.payload={element:a},m=m===void 0?null:m,m!==null&&(s.callback=m),a=fa(t,s,n),a!==null&&(Zn(a,t,n),Vs(a,t,n))}function B_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Af(t,n){B_(t,n),(t=t.alternate)&&B_(t,n)}function I_(t){if(t.tag===13){var n=Rr(t,67108864);n!==null&&Zn(n,t,67108864),Af(t,67108864)}}var kl=!0;function zy(t,n,a,s){var c=X.T;X.T=null;var m=q.p;try{q.p=2,wf(t,n,a,s)}finally{q.p=m,X.T=c}}function By(t,n,a,s){var c=X.T;X.T=null;var m=q.p;try{q.p=8,wf(t,n,a,s)}finally{q.p=m,X.T=c}}function wf(t,n,a,s){if(kl){var c=Rf(s);if(c===null)pf(t,n,s,Gl,a),H_(t,s);else if(Fy(c,t,n,a,s))s.stopPropagation();else if(H_(t,s),n&4&&-1<Iy.indexOf(t)){for(;c!==null;){var m=Ci(c);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var w=ne(m.pendingLanes);if(w!==0){var O=m;for(O.pendingLanes|=2,O.entangledLanes|=2;w;){var J=1<<31-Ft(w);O.entanglements[1]|=J,w&=~J}xi(m),(Oe&6)===0&&(Tl=V()+500,so(0))}}break;case 13:O=Rr(m,2),O!==null&&Zn(O,m,2),wl(),Af(m,2)}if(m=Rf(s),m===null&&pf(t,n,s,Gl,a),m===c)break;c=m}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function Rf(t){return t=Lu(t),Cf(t)}var Gl=null;function Cf(t){if(Gl=null,t=Ri(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gl=t,null}function F_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(I()){case tt:return 2;case pt:return 8;case xt:case st:return 32;case z:return 268435456;default:return 32}default:return 32}}var Df=!1,ba=null,Ta=null,Aa=null,mo=new Map,_o=new Map,wa=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H_(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(n.pointerId)}}function go(t,n,a,s,c,m){return t===null||t.nativeEvent!==m?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:m,targetContainers:[c]},n!==null&&(n=Ci(n),n!==null&&I_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Fy(t,n,a,s,c){switch(n){case"focusin":return ba=go(ba,t,n,a,s,c),!0;case"dragenter":return Ta=go(Ta,t,n,a,s,c),!0;case"mouseover":return Aa=go(Aa,t,n,a,s,c),!0;case"pointerover":var m=c.pointerId;return mo.set(m,go(mo.get(m)||null,t,n,a,s,c)),!0;case"gotpointercapture":return m=c.pointerId,_o.set(m,go(_o.get(m)||null,t,n,a,s,c)),!0}return!1}function k_(t){var n=Ri(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,kn(t.priority,function(){if(a.tag===13){var s=Yn();s=he(s);var c=Rr(a,s);c!==null&&Zn(c,a,s),Af(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Rf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Uu=s,a.target.dispatchEvent(s),Uu=null}else return n=Ci(a),n!==null&&I_(n),t.blockedOn=a,!1;n.shift()}return!0}function G_(t,n,a){Vl(t)&&a.delete(n)}function Hy(){Df=!1,ba!==null&&Vl(ba)&&(ba=null),Ta!==null&&Vl(Ta)&&(Ta=null),Aa!==null&&Vl(Aa)&&(Aa=null),mo.forEach(G_),_o.forEach(G_)}function Xl(t,n){t.blockedOn===n&&(t.blockedOn=null,Df||(Df=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Hy)))}var Wl=null;function V_(t){Wl!==t&&(Wl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wl===t&&(Wl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Cf(s||a)===null)continue;break}var m=Ci(a);m!==null&&(t.splice(n,3),n-=3,Rc(m,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function vo(t){function n(J){return Xl(J,t)}ba!==null&&Xl(ba,t),Ta!==null&&Xl(Ta,t),Aa!==null&&Xl(Aa,t),mo.forEach(n),_o.forEach(n);for(var a=0;a<wa.length;a++){var s=wa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)k_(a),a.blockedOn===null&&wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],m=a[s+1],w=c[gn]||null;if(typeof m=="function")w||V_(a);else if(w){var O=null;if(m&&m.hasAttribute("formAction")){if(c=m,w=m[gn]||null)O=w.formAction;else if(Cf(c)!==null)continue}else O=w.action;typeof O=="function"?a[s+1]=O:(a.splice(s,3),s-=3),V_(a)}}}function Uf(t){this._internalRoot=t}ql.prototype.render=Uf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Yn();z_(a,s,t,n,null,null)},ql.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;z_(t.current,2,null,t,null,null),wl(),n[Ln]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ae();t={blockedOn:null,target:t,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,t),a===0&&k_(t)}};var X_=e.version;if(X_!=="19.1.0")throw Error(r(527,X_,"19.1.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var ky={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{ft=Yl.inject(ky),Mt=Yl}catch{}}return xo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=sm,m=om,w=lm,O=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(O=n.unstable_transitionCallbacks)),n=O_(t,1,!1,null,null,a,s,c,m,w,O,null),t[Ln]=n.current,df(t),new Uf(n)},xo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",m=sm,w=om,O=lm,J=null,gt=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(w=a.onCaughtError),a.onRecoverableError!==void 0&&(O=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(J=a.unstable_transitionCallbacks),a.formState!==void 0&&(gt=a.formState)),n=O_(t,1,!0,n,a??null,s,c,m,w,O,J,gt),n.context=P_(null),a=n.current,s=Yn(),s=he(s),c=ca(s),c.callback=null,fa(a,c,s),a=s,n.current.lanes=a,Xt(n,a),xi(n),t[Ln]=n.current,df(t),new ql(n)},xo.version="19.1.0",xo}var tg;function Qy(){if(tg)return Nf.exports;tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nf.exports=Ky(),Nf.exports}var Jy=Qy();const $y=c0(Jy);var za=rd(),vu={exports:{}},tx=vu.exports,eg;function ex(){return eg||(eg=1,function(o,e){(function(i,r){r()})(tx,function(){function i(p,g){return typeof g>"u"?g={autoBom:!1}:typeof g!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),g={autoBom:!g}),g.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type)?new Blob(["\uFEFF",p],{type:p.type}):p}function r(p,g,y){var x=new XMLHttpRequest;x.open("GET",p),x.responseType="blob",x.onload=function(){d(x.response,g,y)},x.onerror=function(){console.error("could not download file")},x.send()}function l(p){var g=new XMLHttpRequest;g.open("HEAD",p,!1);try{g.send()}catch{}return 200<=g.status&&299>=g.status}function u(p){try{p.dispatchEvent(new MouseEvent("click"))}catch{var g=document.createEvent("MouseEvents");g.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),p.dispatchEvent(g)}}var f=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Ia=="object"&&Ia.global===Ia?Ia:void 0,h=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=f.saveAs||(typeof window!="object"||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(p,g,y){var x=f.URL||f.webkitURL,v=document.createElement("a");g=g||p.name||"download",v.download=g,v.rel="noopener",typeof p=="string"?(v.href=p,v.origin===location.origin?u(v):l(v.href)?r(p,g,y):u(v,v.target="_blank")):(v.href=x.createObjectURL(p),setTimeout(function(){x.revokeObjectURL(v.href)},4e4),setTimeout(function(){u(v)},0))}:"msSaveOrOpenBlob"in navigator?function(p,g,y){if(g=g||p.name||"download",typeof p!="string")navigator.msSaveOrOpenBlob(i(p,y),g);else if(l(p))r(p,g,y);else{var x=document.createElement("a");x.href=p,x.target="_blank",setTimeout(function(){u(x)})}}:function(p,g,y,x){if(x=x||open("","_blank"),x&&(x.document.title=x.document.body.innerText="downloading..."),typeof p=="string")return r(p,g,y);var v=p.type==="application/octet-stream",b=/constructor/i.test(f.HTMLElement)||f.safari,E=/CriOS\/[\d]+/.test(navigator.userAgent);if((E||v&&b||h)&&typeof FileReader<"u"){var S=new FileReader;S.onloadend=function(){var C=S.result;C=E?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),x?x.location.href=C:location=C,x=null},S.readAsDataURL(p)}else{var _=f.URL||f.webkitURL,A=_.createObjectURL(p);x?x.location=A:location.href=A,x=null,setTimeout(function(){_.revokeObjectURL(A)},4e4)}});f.saveAs=d.saveAs=d,o.exports=d})}(vu)),vu.exports}var nx=ex();function Zl(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var If={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var ng;function ix(){return ng||(ng=1,function(o,e){(function(i){o.exports=i()})(function(){return function i(r,l,u){function f(p,g){if(!l[p]){if(!r[p]){var y=typeof Zl=="function"&&Zl;if(!g&&y)return y(p,!0);if(h)return h(p,!0);var x=new Error("Cannot find module '"+p+"'");throw x.code="MODULE_NOT_FOUND",x}var v=l[p]={exports:{}};r[p][0].call(v.exports,function(b){var E=r[p][1][b];return f(E||b)},v,v.exports,i,r,l,u)}return l[p].exports}for(var h=typeof Zl=="function"&&Zl,d=0;d<u.length;d++)f(u[d]);return f}({1:[function(i,r,l){var u=i("./utils"),f=i("./support"),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";l.encode=function(d){for(var p,g,y,x,v,b,E,S=[],_=0,A=d.length,C=A,R=u.getTypeOf(d)!=="string";_<d.length;)C=A-_,y=R?(p=d[_++],g=_<A?d[_++]:0,_<A?d[_++]:0):(p=d.charCodeAt(_++),g=_<A?d.charCodeAt(_++):0,_<A?d.charCodeAt(_++):0),x=p>>2,v=(3&p)<<4|g>>4,b=1<C?(15&g)<<2|y>>6:64,E=2<C?63&y:64,S.push(h.charAt(x)+h.charAt(v)+h.charAt(b)+h.charAt(E));return S.join("")},l.decode=function(d){var p,g,y,x,v,b,E=0,S=0,_="data:";if(d.substr(0,_.length)===_)throw new Error("Invalid base64 input, it looks like a data url.");var A,C=3*(d=d.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(d.charAt(d.length-1)===h.charAt(64)&&C--,d.charAt(d.length-2)===h.charAt(64)&&C--,C%1!=0)throw new Error("Invalid base64 input, bad content length.");for(A=f.uint8array?new Uint8Array(0|C):new Array(0|C);E<d.length;)p=h.indexOf(d.charAt(E++))<<2|(x=h.indexOf(d.charAt(E++)))>>4,g=(15&x)<<4|(v=h.indexOf(d.charAt(E++)))>>2,y=(3&v)<<6|(b=h.indexOf(d.charAt(E++))),A[S++]=p,v!==64&&(A[S++]=g),b!==64&&(A[S++]=y);return A}},{"./support":30,"./utils":32}],2:[function(i,r,l){var u=i("./external"),f=i("./stream/DataWorker"),h=i("./stream/Crc32Probe"),d=i("./stream/DataLengthProbe");function p(g,y,x,v,b){this.compressedSize=g,this.uncompressedSize=y,this.crc32=x,this.compression=v,this.compressedContent=b}p.prototype={getContentWorker:function(){var g=new f(u.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")),y=this;return g.on("end",function(){if(this.streamInfo.data_length!==y.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),g},getCompressedWorker:function(){return new f(u.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},p.createWorkerFrom=function(g,y,x){return g.pipe(new h).pipe(new d("uncompressedSize")).pipe(y.compressWorker(x)).pipe(new d("compressedSize")).withStreamInfo("compression",y)},r.exports=p},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(i,r,l){var u=i("./stream/GenericWorker");l.STORE={magic:"\0\0",compressWorker:function(){return new u("STORE compression")},uncompressWorker:function(){return new u("STORE decompression")}},l.DEFLATE=i("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(i,r,l){var u=i("./utils"),f=function(){for(var h,d=[],p=0;p<256;p++){h=p;for(var g=0;g<8;g++)h=1&h?3988292384^h>>>1:h>>>1;d[p]=h}return d}();r.exports=function(h,d){return h!==void 0&&h.length?u.getTypeOf(h)!=="string"?function(p,g,y,x){var v=f,b=x+y;p^=-1;for(var E=x;E<b;E++)p=p>>>8^v[255&(p^g[E])];return-1^p}(0|d,h,h.length,0):function(p,g,y,x){var v=f,b=x+y;p^=-1;for(var E=x;E<b;E++)p=p>>>8^v[255&(p^g.charCodeAt(E))];return-1^p}(0|d,h,h.length,0):0}},{"./utils":32}],5:[function(i,r,l){l.base64=!1,l.binary=!1,l.dir=!1,l.createFolders=!0,l.date=null,l.compression=null,l.compressionOptions=null,l.comment=null,l.unixPermissions=null,l.dosPermissions=null},{}],6:[function(i,r,l){var u=null;u=typeof Promise<"u"?Promise:i("lie"),r.exports={Promise:u}},{lie:37}],7:[function(i,r,l){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",f=i("pako"),h=i("./utils"),d=i("./stream/GenericWorker"),p=u?"uint8array":"array";function g(y,x){d.call(this,"FlateWorker/"+y),this._pako=null,this._pakoAction=y,this._pakoOptions=x,this.meta={}}l.magic="\b\0",h.inherits(g,d),g.prototype.processChunk=function(y){this.meta=y.meta,this._pako===null&&this._createPako(),this._pako.push(h.transformTo(p,y.data),!1)},g.prototype.flush=function(){d.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},g.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this._pako=null},g.prototype._createPako=function(){this._pako=new f[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var y=this;this._pako.onData=function(x){y.push({data:x,meta:y.meta})}},l.compressWorker=function(y){return new g("Deflate",y)},l.uncompressWorker=function(){return new g("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(i,r,l){function u(v,b){var E,S="";for(E=0;E<b;E++)S+=String.fromCharCode(255&v),v>>>=8;return S}function f(v,b,E,S,_,A){var C,R,N=v.file,k=v.compression,P=A!==p.utf8encode,W=h.transformTo("string",A(N.name)),U=h.transformTo("string",p.utf8encode(N.name)),L=N.comment,Z=h.transformTo("string",A(L)),B=h.transformTo("string",p.utf8encode(L)),Y=U.length!==N.name.length,T=B.length!==L.length,$="",X="",q="",et=N.dir,rt=N.date,H={crc32:0,compressedSize:0,uncompressedSize:0};b&&!E||(H.crc32=v.crc32,H.compressedSize=v.compressedSize,H.uncompressedSize=v.uncompressedSize);var G=0;b&&(G|=8),P||!Y&&!T||(G|=2048);var K=0,dt=0;et&&(K|=16),_==="UNIX"?(dt=798,K|=function(nt,yt){var Tt=nt;return nt||(Tt=yt?16893:33204),(65535&Tt)<<16}(N.unixPermissions,et)):(dt=20,K|=function(nt){return 63&(nt||0)}(N.dosPermissions)),C=rt.getUTCHours(),C<<=6,C|=rt.getUTCMinutes(),C<<=5,C|=rt.getUTCSeconds()/2,R=rt.getUTCFullYear()-1980,R<<=4,R|=rt.getUTCMonth()+1,R<<=5,R|=rt.getUTCDate(),Y&&(X=u(1,1)+u(g(W),4)+U,$+="up"+u(X.length,2)+X),T&&(q=u(1,1)+u(g(Z),4)+B,$+="uc"+u(q.length,2)+q);var j="";return j+=`
\0`,j+=u(G,2),j+=k.magic,j+=u(C,2),j+=u(R,2),j+=u(H.crc32,4),j+=u(H.compressedSize,4),j+=u(H.uncompressedSize,4),j+=u(W.length,2),j+=u($.length,2),{fileRecord:y.LOCAL_FILE_HEADER+j+W+$,dirRecord:y.CENTRAL_FILE_HEADER+u(dt,2)+j+u(Z.length,2)+"\0\0\0\0"+u(K,4)+u(S,4)+W+$+Z}}var h=i("../utils"),d=i("../stream/GenericWorker"),p=i("../utf8"),g=i("../crc32"),y=i("../signature");function x(v,b,E,S){d.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=E,this.encodeFileName=S,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}h.inherits(x,d),x.prototype.push=function(v){var b=v.meta.percent||0,E=this.entriesCount,S=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,d.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:E?(b+100*(E-S-1))/E:100}}))},x.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var b=this.streamFiles&&!v.file.dir;if(b){var E=f(v,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:E.fileRecord,meta:{percent:0}})}else this.accumulate=!0},x.prototype.closedSource=function(v){this.accumulate=!1;var b=this.streamFiles&&!v.file.dir,E=f(v,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(E.dirRecord),b)this.push({data:function(S){return y.DATA_DESCRIPTOR+u(S.crc32,4)+u(S.compressedSize,4)+u(S.uncompressedSize,4)}(v),meta:{percent:100}});else for(this.push({data:E.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},x.prototype.flush=function(){for(var v=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var E=this.bytesWritten-v,S=function(_,A,C,R,N){var k=h.transformTo("string",N(R));return y.CENTRAL_DIRECTORY_END+"\0\0\0\0"+u(_,2)+u(_,2)+u(A,4)+u(C,4)+u(k.length,2)+k}(this.dirRecords.length,E,v,this.zipComment,this.encodeFileName);this.push({data:S,meta:{percent:100}})},x.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},x.prototype.registerPrevious=function(v){this._sources.push(v);var b=this;return v.on("data",function(E){b.processChunk(E)}),v.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),v.on("error",function(E){b.error(E)}),this},x.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},x.prototype.error=function(v){var b=this._sources;if(!d.prototype.error.call(this,v))return!1;for(var E=0;E<b.length;E++)try{b[E].error(v)}catch{}return!0},x.prototype.lock=function(){d.prototype.lock.call(this);for(var v=this._sources,b=0;b<v.length;b++)v[b].lock()},r.exports=x},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(i,r,l){var u=i("../compressions"),f=i("./ZipFileWorker");l.generateWorker=function(h,d,p){var g=new f(d.streamFiles,p,d.platform,d.encodeFileName),y=0;try{h.forEach(function(x,v){y++;var b=function(A,C){var R=A||C,N=u[R];if(!N)throw new Error(R+" is not a valid compression method !");return N}(v.options.compression,d.compression),E=v.options.compressionOptions||d.compressionOptions||{},S=v.dir,_=v.date;v._compressWorker(b,E).withStreamInfo("file",{name:x,dir:S,date:_,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(g)}),g.entriesCount=y}catch(x){g.error(x)}return g}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(i,r,l){function u(){if(!(this instanceof u))return new u;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var f=new u;for(var h in this)typeof this[h]!="function"&&(f[h]=this[h]);return f}}(u.prototype=i("./object")).loadAsync=i("./load"),u.support=i("./support"),u.defaults=i("./defaults"),u.version="3.10.1",u.loadAsync=function(f,h){return new u().loadAsync(f,h)},u.external=i("./external"),r.exports=u},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(i,r,l){var u=i("./utils"),f=i("./external"),h=i("./utf8"),d=i("./zipEntries"),p=i("./stream/Crc32Probe"),g=i("./nodejsUtils");function y(x){return new f.Promise(function(v,b){var E=x.decompressed.getContentWorker().pipe(new p);E.on("error",function(S){b(S)}).on("end",function(){E.streamInfo.crc32!==x.decompressed.crc32?b(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}r.exports=function(x,v){var b=this;return v=u.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:h.utf8decode}),g.isNode&&g.isStream(x)?f.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",x,!0,v.optimizedBinaryString,v.base64).then(function(E){var S=new d(v);return S.load(E),S}).then(function(E){var S=[f.Promise.resolve(E)],_=E.files;if(v.checkCRC32)for(var A=0;A<_.length;A++)S.push(y(_[A]));return f.Promise.all(S)}).then(function(E){for(var S=E.shift(),_=S.files,A=0;A<_.length;A++){var C=_[A],R=C.fileNameStr,N=u.resolve(C.fileNameStr);b.file(N,C.decompressed,{binary:!0,optimizedBinaryString:!0,date:C.date,dir:C.dir,comment:C.fileCommentStr.length?C.fileCommentStr:null,unixPermissions:C.unixPermissions,dosPermissions:C.dosPermissions,createFolders:v.createFolders}),C.dir||(b.file(N).unsafeOriginalName=R)}return S.zipComment.length&&(b.comment=S.zipComment),b})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(i,r,l){var u=i("../utils"),f=i("../stream/GenericWorker");function h(d,p){f.call(this,"Nodejs stream input adapter for "+d),this._upstreamEnded=!1,this._bindStream(p)}u.inherits(h,f),h.prototype._bindStream=function(d){var p=this;(this._stream=d).pause(),d.on("data",function(g){p.push({data:g,meta:{percent:0}})}).on("error",function(g){p.isPaused?this.generatedError=g:p.error(g)}).on("end",function(){p.isPaused?p._upstreamEnded=!0:p.end()})},h.prototype.pause=function(){return!!f.prototype.pause.call(this)&&(this._stream.pause(),!0)},h.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=h},{"../stream/GenericWorker":28,"../utils":32}],13:[function(i,r,l){var u=i("readable-stream").Readable;function f(h,d,p){u.call(this,d),this._helper=h;var g=this;h.on("data",function(y,x){g.push(y)||g._helper.pause(),p&&p(x)}).on("error",function(y){g.emit("error",y)}).on("end",function(){g.push(null)})}i("../utils").inherits(f,u),f.prototype._read=function(){this._helper.resume()},r.exports=f},{"../utils":32,"readable-stream":16}],14:[function(i,r,l){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(u,f){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(u,f);if(typeof u=="number")throw new Error('The "data" argument must not be a number');return new Buffer(u,f)},allocBuffer:function(u){if(Buffer.alloc)return Buffer.alloc(u);var f=new Buffer(u);return f.fill(0),f},isBuffer:function(u){return Buffer.isBuffer(u)},isStream:function(u){return u&&typeof u.on=="function"&&typeof u.pause=="function"&&typeof u.resume=="function"}}},{}],15:[function(i,r,l){function u(N,k,P){var W,U=h.getTypeOf(k),L=h.extend(P||{},g);L.date=L.date||new Date,L.compression!==null&&(L.compression=L.compression.toUpperCase()),typeof L.unixPermissions=="string"&&(L.unixPermissions=parseInt(L.unixPermissions,8)),L.unixPermissions&&16384&L.unixPermissions&&(L.dir=!0),L.dosPermissions&&16&L.dosPermissions&&(L.dir=!0),L.dir&&(N=_(N)),L.createFolders&&(W=S(N))&&A.call(this,W,!0);var Z=U==="string"&&L.binary===!1&&L.base64===!1;P&&P.binary!==void 0||(L.binary=!Z),(k instanceof y&&k.uncompressedSize===0||L.dir||!k||k.length===0)&&(L.base64=!1,L.binary=!0,k="",L.compression="STORE",U="string");var B=null;B=k instanceof y||k instanceof d?k:b.isNode&&b.isStream(k)?new E(N,k):h.prepareContent(N,k,L.binary,L.optimizedBinaryString,L.base64);var Y=new x(N,B,L);this.files[N]=Y}var f=i("./utf8"),h=i("./utils"),d=i("./stream/GenericWorker"),p=i("./stream/StreamHelper"),g=i("./defaults"),y=i("./compressedObject"),x=i("./zipObject"),v=i("./generate"),b=i("./nodejsUtils"),E=i("./nodejs/NodejsStreamInputAdapter"),S=function(N){N.slice(-1)==="/"&&(N=N.substring(0,N.length-1));var k=N.lastIndexOf("/");return 0<k?N.substring(0,k):""},_=function(N){return N.slice(-1)!=="/"&&(N+="/"),N},A=function(N,k){return k=k!==void 0?k:g.createFolders,N=_(N),this.files[N]||u.call(this,N,null,{dir:!0,createFolders:k}),this.files[N]};function C(N){return Object.prototype.toString.call(N)==="[object RegExp]"}var R={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(N){var k,P,W;for(k in this.files)W=this.files[k],(P=k.slice(this.root.length,k.length))&&k.slice(0,this.root.length)===this.root&&N(P,W)},filter:function(N){var k=[];return this.forEach(function(P,W){N(P,W)&&k.push(W)}),k},file:function(N,k,P){if(arguments.length!==1)return N=this.root+N,u.call(this,N,k,P),this;if(C(N)){var W=N;return this.filter(function(L,Z){return!Z.dir&&W.test(L)})}var U=this.files[this.root+N];return U&&!U.dir?U:null},folder:function(N){if(!N)return this;if(C(N))return this.filter(function(U,L){return L.dir&&N.test(U)});var k=this.root+N,P=A.call(this,k),W=this.clone();return W.root=P.name,W},remove:function(N){N=this.root+N;var k=this.files[N];if(k||(N.slice(-1)!=="/"&&(N+="/"),k=this.files[N]),k&&!k.dir)delete this.files[N];else for(var P=this.filter(function(U,L){return L.name.slice(0,N.length)===N}),W=0;W<P.length;W++)delete this.files[P[W].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(N){var k,P={};try{if((P=h.extend(N||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:f.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");h.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var W=P.comment||this.comment||"";k=v.generateWorker(this,P,W)}catch(U){(k=new d("error")).error(U)}return new p(k,P.type||"string",P.mimeType)},generateAsync:function(N,k){return this.generateInternalStream(N).accumulate(k)},generateNodeStream:function(N,k){return(N=N||{}).type||(N.type="nodebuffer"),this.generateInternalStream(N).toNodejsStream(k)}};r.exports=R},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(i,r,l){r.exports=i("stream")},{stream:void 0}],17:[function(i,r,l){var u=i("./DataReader");function f(h){u.call(this,h);for(var d=0;d<this.data.length;d++)h[d]=255&h[d]}i("../utils").inherits(f,u),f.prototype.byteAt=function(h){return this.data[this.zero+h]},f.prototype.lastIndexOfSignature=function(h){for(var d=h.charCodeAt(0),p=h.charCodeAt(1),g=h.charCodeAt(2),y=h.charCodeAt(3),x=this.length-4;0<=x;--x)if(this.data[x]===d&&this.data[x+1]===p&&this.data[x+2]===g&&this.data[x+3]===y)return x-this.zero;return-1},f.prototype.readAndCheckSignature=function(h){var d=h.charCodeAt(0),p=h.charCodeAt(1),g=h.charCodeAt(2),y=h.charCodeAt(3),x=this.readData(4);return d===x[0]&&p===x[1]&&g===x[2]&&y===x[3]},f.prototype.readData=function(h){if(this.checkOffset(h),h===0)return[];var d=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,d},r.exports=f},{"../utils":32,"./DataReader":18}],18:[function(i,r,l){var u=i("../utils");function f(h){this.data=h,this.length=h.length,this.index=0,this.zero=0}f.prototype={checkOffset:function(h){this.checkIndex(this.index+h)},checkIndex:function(h){if(this.length<this.zero+h||h<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+h+"). Corrupted zip ?")},setIndex:function(h){this.checkIndex(h),this.index=h},skip:function(h){this.setIndex(this.index+h)},byteAt:function(){},readInt:function(h){var d,p=0;for(this.checkOffset(h),d=this.index+h-1;d>=this.index;d--)p=(p<<8)+this.byteAt(d);return this.index+=h,p},readString:function(h){return u.transformTo("string",this.readData(h))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var h=this.readInt(4);return new Date(Date.UTC(1980+(h>>25&127),(h>>21&15)-1,h>>16&31,h>>11&31,h>>5&63,(31&h)<<1))}},r.exports=f},{"../utils":32}],19:[function(i,r,l){var u=i("./Uint8ArrayReader");function f(h){u.call(this,h)}i("../utils").inherits(f,u),f.prototype.readData=function(h){this.checkOffset(h);var d=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,d},r.exports=f},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(i,r,l){var u=i("./DataReader");function f(h){u.call(this,h)}i("../utils").inherits(f,u),f.prototype.byteAt=function(h){return this.data.charCodeAt(this.zero+h)},f.prototype.lastIndexOfSignature=function(h){return this.data.lastIndexOf(h)-this.zero},f.prototype.readAndCheckSignature=function(h){return h===this.readData(4)},f.prototype.readData=function(h){this.checkOffset(h);var d=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,d},r.exports=f},{"../utils":32,"./DataReader":18}],21:[function(i,r,l){var u=i("./ArrayReader");function f(h){u.call(this,h)}i("../utils").inherits(f,u),f.prototype.readData=function(h){if(this.checkOffset(h),h===0)return new Uint8Array(0);var d=this.data.subarray(this.zero+this.index,this.zero+this.index+h);return this.index+=h,d},r.exports=f},{"../utils":32,"./ArrayReader":17}],22:[function(i,r,l){var u=i("../utils"),f=i("../support"),h=i("./ArrayReader"),d=i("./StringReader"),p=i("./NodeBufferReader"),g=i("./Uint8ArrayReader");r.exports=function(y){var x=u.getTypeOf(y);return u.checkSupport(x),x!=="string"||f.uint8array?x==="nodebuffer"?new p(y):f.uint8array?new g(u.transformTo("uint8array",y)):new h(u.transformTo("array",y)):new d(y)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(i,r,l){l.LOCAL_FILE_HEADER="PK",l.CENTRAL_FILE_HEADER="PK",l.CENTRAL_DIRECTORY_END="PK",l.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",l.ZIP64_CENTRAL_DIRECTORY_END="PK",l.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(i,r,l){var u=i("./GenericWorker"),f=i("../utils");function h(d){u.call(this,"ConvertWorker to "+d),this.destType=d}f.inherits(h,u),h.prototype.processChunk=function(d){this.push({data:f.transformTo(this.destType,d.data),meta:d.meta})},r.exports=h},{"../utils":32,"./GenericWorker":28}],25:[function(i,r,l){var u=i("./GenericWorker"),f=i("../crc32");function h(){u.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}i("../utils").inherits(h,u),h.prototype.processChunk=function(d){this.streamInfo.crc32=f(d.data,this.streamInfo.crc32||0),this.push(d)},r.exports=h},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(i,r,l){var u=i("../utils"),f=i("./GenericWorker");function h(d){f.call(this,"DataLengthProbe for "+d),this.propName=d,this.withStreamInfo(d,0)}u.inherits(h,f),h.prototype.processChunk=function(d){if(d){var p=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=p+d.data.length}f.prototype.processChunk.call(this,d)},r.exports=h},{"../utils":32,"./GenericWorker":28}],27:[function(i,r,l){var u=i("../utils"),f=i("./GenericWorker");function h(d){f.call(this,"DataWorker");var p=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,d.then(function(g){p.dataIsReady=!0,p.data=g,p.max=g&&g.length||0,p.type=u.getTypeOf(g),p.isPaused||p._tickAndRepeat()},function(g){p.error(g)})}u.inherits(h,f),h.prototype.cleanUp=function(){f.prototype.cleanUp.call(this),this.data=null},h.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,u.delay(this._tickAndRepeat,[],this)),!0)},h.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(u.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},h.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var d=null,p=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":d=this.data.substring(this.index,p);break;case"uint8array":d=this.data.subarray(this.index,p);break;case"array":case"nodebuffer":d=this.data.slice(this.index,p)}return this.index=p,this.push({data:d,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=h},{"../utils":32,"./GenericWorker":28}],28:[function(i,r,l){function u(f){this.name=f||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}u.prototype={push:function(f){this.emit("data",f)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(f){this.emit("error",f)}return!0},error:function(f){return!this.isFinished&&(this.isPaused?this.generatedError=f:(this.isFinished=!0,this.emit("error",f),this.previous&&this.previous.error(f),this.cleanUp()),!0)},on:function(f,h){return this._listeners[f].push(h),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(f,h){if(this._listeners[f])for(var d=0;d<this._listeners[f].length;d++)this._listeners[f][d].call(this,h)},pipe:function(f){return f.registerPrevious(this)},registerPrevious:function(f){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=f.streamInfo,this.mergeStreamInfo(),this.previous=f;var h=this;return f.on("data",function(d){h.processChunk(d)}),f.on("end",function(){h.end()}),f.on("error",function(d){h.error(d)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var f=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),f=!0),this.previous&&this.previous.resume(),!f},flush:function(){},processChunk:function(f){this.push(f)},withStreamInfo:function(f,h){return this.extraStreamInfo[f]=h,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var f in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,f)&&(this.streamInfo[f]=this.extraStreamInfo[f])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var f="Worker "+this.name;return this.previous?this.previous+" -> "+f:f}},r.exports=u},{}],29:[function(i,r,l){var u=i("../utils"),f=i("./ConvertWorker"),h=i("./GenericWorker"),d=i("../base64"),p=i("../support"),g=i("../external"),y=null;if(p.nodestream)try{y=i("../nodejs/NodejsStreamOutputAdapter")}catch{}function x(b,E){return new g.Promise(function(S,_){var A=[],C=b._internalType,R=b._outputType,N=b._mimeType;b.on("data",function(k,P){A.push(k),E&&E(P)}).on("error",function(k){A=[],_(k)}).on("end",function(){try{var k=function(P,W,U){switch(P){case"blob":return u.newBlob(u.transformTo("arraybuffer",W),U);case"base64":return d.encode(W);default:return u.transformTo(P,W)}}(R,function(P,W){var U,L=0,Z=null,B=0;for(U=0;U<W.length;U++)B+=W[U].length;switch(P){case"string":return W.join("");case"array":return Array.prototype.concat.apply([],W);case"uint8array":for(Z=new Uint8Array(B),U=0;U<W.length;U++)Z.set(W[U],L),L+=W[U].length;return Z;case"nodebuffer":return Buffer.concat(W);default:throw new Error("concat : unsupported type '"+P+"'")}}(C,A),N);S(k)}catch(P){_(P)}A=[]}).resume()})}function v(b,E,S){var _=E;switch(E){case"blob":case"arraybuffer":_="uint8array";break;case"base64":_="string"}try{this._internalType=_,this._outputType=E,this._mimeType=S,u.checkSupport(_),this._worker=b.pipe(new f(_)),b.lock()}catch(A){this._worker=new h("error"),this._worker.error(A)}}v.prototype={accumulate:function(b){return x(this,b)},on:function(b,E){var S=this;return b==="data"?this._worker.on(b,function(_){E.call(S,_.data,_.meta)}):this._worker.on(b,function(){u.delay(E,arguments,S)}),this},resume:function(){return u.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(b){if(u.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new y(this,{objectMode:this._outputType!=="nodebuffer"},b)}},r.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(i,r,l){if(l.base64=!0,l.array=!0,l.string=!0,l.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",l.nodebuffer=typeof Buffer<"u",l.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")l.blob=!1;else{var u=new ArrayBuffer(0);try{l.blob=new Blob([u],{type:"application/zip"}).size===0}catch{try{var f=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);f.append(u),l.blob=f.getBlob("application/zip").size===0}catch{l.blob=!1}}}try{l.nodestream=!!i("readable-stream").Readable}catch{l.nodestream=!1}},{"readable-stream":16}],31:[function(i,r,l){for(var u=i("./utils"),f=i("./support"),h=i("./nodejsUtils"),d=i("./stream/GenericWorker"),p=new Array(256),g=0;g<256;g++)p[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;p[254]=p[254]=1;function y(){d.call(this,"utf-8 decode"),this.leftOver=null}function x(){d.call(this,"utf-8 encode")}l.utf8encode=function(v){return f.nodebuffer?h.newBufferFrom(v,"utf-8"):function(b){var E,S,_,A,C,R=b.length,N=0;for(A=0;A<R;A++)(64512&(S=b.charCodeAt(A)))==55296&&A+1<R&&(64512&(_=b.charCodeAt(A+1)))==56320&&(S=65536+(S-55296<<10)+(_-56320),A++),N+=S<128?1:S<2048?2:S<65536?3:4;for(E=f.uint8array?new Uint8Array(N):new Array(N),A=C=0;C<N;A++)(64512&(S=b.charCodeAt(A)))==55296&&A+1<R&&(64512&(_=b.charCodeAt(A+1)))==56320&&(S=65536+(S-55296<<10)+(_-56320),A++),S<128?E[C++]=S:(S<2048?E[C++]=192|S>>>6:(S<65536?E[C++]=224|S>>>12:(E[C++]=240|S>>>18,E[C++]=128|S>>>12&63),E[C++]=128|S>>>6&63),E[C++]=128|63&S);return E}(v)},l.utf8decode=function(v){return f.nodebuffer?u.transformTo("nodebuffer",v).toString("utf-8"):function(b){var E,S,_,A,C=b.length,R=new Array(2*C);for(E=S=0;E<C;)if((_=b[E++])<128)R[S++]=_;else if(4<(A=p[_]))R[S++]=65533,E+=A-1;else{for(_&=A===2?31:A===3?15:7;1<A&&E<C;)_=_<<6|63&b[E++],A--;1<A?R[S++]=65533:_<65536?R[S++]=_:(_-=65536,R[S++]=55296|_>>10&1023,R[S++]=56320|1023&_)}return R.length!==S&&(R.subarray?R=R.subarray(0,S):R.length=S),u.applyFromCharCode(R)}(v=u.transformTo(f.uint8array?"uint8array":"array",v))},u.inherits(y,d),y.prototype.processChunk=function(v){var b=u.transformTo(f.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(f.uint8array){var E=b;(b=new Uint8Array(E.length+this.leftOver.length)).set(this.leftOver,0),b.set(E,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var S=function(A,C){var R;for((C=C||A.length)>A.length&&(C=A.length),R=C-1;0<=R&&(192&A[R])==128;)R--;return R<0||R===0?C:R+p[A[R]]>C?R:C}(b),_=b;S!==b.length&&(f.uint8array?(_=b.subarray(0,S),this.leftOver=b.subarray(S,b.length)):(_=b.slice(0,S),this.leftOver=b.slice(S,b.length))),this.push({data:l.utf8decode(_),meta:v.meta})},y.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:l.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},l.Utf8DecodeWorker=y,u.inherits(x,d),x.prototype.processChunk=function(v){this.push({data:l.utf8encode(v.data),meta:v.meta})},l.Utf8EncodeWorker=x},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(i,r,l){var u=i("./support"),f=i("./base64"),h=i("./nodejsUtils"),d=i("./external");function p(E){return E}function g(E,S){for(var _=0;_<E.length;++_)S[_]=255&E.charCodeAt(_);return S}i("setimmediate"),l.newBlob=function(E,S){l.checkSupport("blob");try{return new Blob([E],{type:S})}catch{try{var _=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return _.append(E),_.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var y={stringifyByChunk:function(E,S,_){var A=[],C=0,R=E.length;if(R<=_)return String.fromCharCode.apply(null,E);for(;C<R;)S==="array"||S==="nodebuffer"?A.push(String.fromCharCode.apply(null,E.slice(C,Math.min(C+_,R)))):A.push(String.fromCharCode.apply(null,E.subarray(C,Math.min(C+_,R)))),C+=_;return A.join("")},stringifyByChar:function(E){for(var S="",_=0;_<E.length;_++)S+=String.fromCharCode(E[_]);return S},applyCanBeUsed:{uint8array:function(){try{return u.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return u.nodebuffer&&String.fromCharCode.apply(null,h.allocBuffer(1)).length===1}catch{return!1}}()}};function x(E){var S=65536,_=l.getTypeOf(E),A=!0;if(_==="uint8array"?A=y.applyCanBeUsed.uint8array:_==="nodebuffer"&&(A=y.applyCanBeUsed.nodebuffer),A)for(;1<S;)try{return y.stringifyByChunk(E,_,S)}catch{S=Math.floor(S/2)}return y.stringifyByChar(E)}function v(E,S){for(var _=0;_<E.length;_++)S[_]=E[_];return S}l.applyFromCharCode=x;var b={};b.string={string:p,array:function(E){return g(E,new Array(E.length))},arraybuffer:function(E){return b.string.uint8array(E).buffer},uint8array:function(E){return g(E,new Uint8Array(E.length))},nodebuffer:function(E){return g(E,h.allocBuffer(E.length))}},b.array={string:x,array:p,arraybuffer:function(E){return new Uint8Array(E).buffer},uint8array:function(E){return new Uint8Array(E)},nodebuffer:function(E){return h.newBufferFrom(E)}},b.arraybuffer={string:function(E){return x(new Uint8Array(E))},array:function(E){return v(new Uint8Array(E),new Array(E.byteLength))},arraybuffer:p,uint8array:function(E){return new Uint8Array(E)},nodebuffer:function(E){return h.newBufferFrom(new Uint8Array(E))}},b.uint8array={string:x,array:function(E){return v(E,new Array(E.length))},arraybuffer:function(E){return E.buffer},uint8array:p,nodebuffer:function(E){return h.newBufferFrom(E)}},b.nodebuffer={string:x,array:function(E){return v(E,new Array(E.length))},arraybuffer:function(E){return b.nodebuffer.uint8array(E).buffer},uint8array:function(E){return v(E,new Uint8Array(E.length))},nodebuffer:p},l.transformTo=function(E,S){if(S=S||"",!E)return S;l.checkSupport(E);var _=l.getTypeOf(S);return b[_][E](S)},l.resolve=function(E){for(var S=E.split("/"),_=[],A=0;A<S.length;A++){var C=S[A];C==="."||C===""&&A!==0&&A!==S.length-1||(C===".."?_.pop():_.push(C))}return _.join("/")},l.getTypeOf=function(E){return typeof E=="string"?"string":Object.prototype.toString.call(E)==="[object Array]"?"array":u.nodebuffer&&h.isBuffer(E)?"nodebuffer":u.uint8array&&E instanceof Uint8Array?"uint8array":u.arraybuffer&&E instanceof ArrayBuffer?"arraybuffer":void 0},l.checkSupport=function(E){if(!u[E.toLowerCase()])throw new Error(E+" is not supported by this platform")},l.MAX_VALUE_16BITS=65535,l.MAX_VALUE_32BITS=-1,l.pretty=function(E){var S,_,A="";for(_=0;_<(E||"").length;_++)A+="\\x"+((S=E.charCodeAt(_))<16?"0":"")+S.toString(16).toUpperCase();return A},l.delay=function(E,S,_){setImmediate(function(){E.apply(_||null,S||[])})},l.inherits=function(E,S){function _(){}_.prototype=S.prototype,E.prototype=new _},l.extend=function(){var E,S,_={};for(E=0;E<arguments.length;E++)for(S in arguments[E])Object.prototype.hasOwnProperty.call(arguments[E],S)&&_[S]===void 0&&(_[S]=arguments[E][S]);return _},l.prepareContent=function(E,S,_,A,C){return d.Promise.resolve(S).then(function(R){return u.blob&&(R instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(R))!==-1)&&typeof FileReader<"u"?new d.Promise(function(N,k){var P=new FileReader;P.onload=function(W){N(W.target.result)},P.onerror=function(W){k(W.target.error)},P.readAsArrayBuffer(R)}):R}).then(function(R){var N=l.getTypeOf(R);return N?(N==="arraybuffer"?R=l.transformTo("uint8array",R):N==="string"&&(C?R=f.decode(R):_&&A!==!0&&(R=function(k){return g(k,u.uint8array?new Uint8Array(k.length):new Array(k.length))}(R))),R):d.Promise.reject(new Error("Can't read the data of '"+E+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(i,r,l){var u=i("./reader/readerFor"),f=i("./utils"),h=i("./signature"),d=i("./zipEntry"),p=i("./support");function g(y){this.files=[],this.loadOptions=y}g.prototype={checkSignature:function(y){if(!this.reader.readAndCheckSignature(y)){this.reader.index-=4;var x=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+f.pretty(x)+", expected "+f.pretty(y)+")")}},isSignature:function(y,x){var v=this.reader.index;this.reader.setIndex(y);var b=this.reader.readString(4)===x;return this.reader.setIndex(v),b},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var y=this.reader.readData(this.zipCommentLength),x=p.uint8array?"uint8array":"array",v=f.transformTo(x,y);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var y,x,v,b=this.zip64EndOfCentralSize-44;0<b;)y=this.reader.readInt(2),x=this.reader.readInt(4),v=this.reader.readData(x),this.zip64ExtensibleData[y]={id:y,length:x,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var y,x;for(y=0;y<this.files.length;y++)x=this.files[y],this.reader.setIndex(x.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),x.readLocalPart(this.reader),x.handleUTF8(),x.processAttributes()},readCentralDir:function(){var y;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(h.CENTRAL_FILE_HEADER);)(y=new d({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(y);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var y=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(y<0)throw this.isSignature(0,h.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(y);var x=y;if(this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===f.MAX_VALUE_16BITS||this.diskWithCentralDirStart===f.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===f.MAX_VALUE_16BITS||this.centralDirRecords===f.MAX_VALUE_16BITS||this.centralDirSize===f.MAX_VALUE_32BITS||this.centralDirOffset===f.MAX_VALUE_32BITS){if(this.zip64=!0,(y=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(y),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,h.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var b=x-v;if(0<b)this.isSignature(x,h.CENTRAL_FILE_HEADER)||(this.reader.zero=b);else if(b<0)throw new Error("Corrupted zip: missing "+Math.abs(b)+" bytes.")},prepareReader:function(y){this.reader=u(y)},load:function(y){this.prepareReader(y),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=g},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(i,r,l){var u=i("./reader/readerFor"),f=i("./utils"),h=i("./compressedObject"),d=i("./crc32"),p=i("./utf8"),g=i("./compressions"),y=i("./support");function x(v,b){this.options=v,this.loadOptions=b}x.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var b,E;if(v.skip(22),this.fileNameLength=v.readInt(2),E=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(E),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((b=function(S){for(var _ in g)if(Object.prototype.hasOwnProperty.call(g,_)&&g[_].magic===S)return g[_];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+f.pretty(this.compressionMethod)+" unknown (inner file : "+f.transformTo("string",this.fileName)+")");this.decompressed=new h(this.compressedSize,this.uncompressedSize,this.crc32,b,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var b=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(b),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=u(this.extraFields[1].value);this.uncompressedSize===f.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===f.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===f.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===f.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var b,E,S,_=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<_;)b=v.readInt(2),E=v.readInt(2),S=v.readData(E),this.extraFields[b]={id:b,length:E,value:S};v.setIndex(_)},handleUTF8:function(){var v=y.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=p.utf8decode(this.fileName),this.fileCommentStr=p.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(b!==null)this.fileNameStr=b;else{var E=f.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(E)}var S=this.findExtraFieldUnicodeComment();if(S!==null)this.fileCommentStr=S;else{var _=f.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(_)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var b=u(v.value);return b.readInt(1)!==1||d(this.fileName)!==b.readInt(4)?null:p.utf8decode(b.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var b=u(v.value);return b.readInt(1)!==1||d(this.fileComment)!==b.readInt(4)?null:p.utf8decode(b.readData(v.length-5))}return null}},r.exports=x},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(i,r,l){function u(b,E,S){this.name=b,this.dir=S.dir,this.date=S.date,this.comment=S.comment,this.unixPermissions=S.unixPermissions,this.dosPermissions=S.dosPermissions,this._data=E,this._dataBinary=S.binary,this.options={compression:S.compression,compressionOptions:S.compressionOptions}}var f=i("./stream/StreamHelper"),h=i("./stream/DataWorker"),d=i("./utf8"),p=i("./compressedObject"),g=i("./stream/GenericWorker");u.prototype={internalStream:function(b){var E=null,S="string";try{if(!b)throw new Error("No output type specified.");var _=(S=b.toLowerCase())==="string"||S==="text";S!=="binarystring"&&S!=="text"||(S="string"),E=this._decompressWorker();var A=!this._dataBinary;A&&!_&&(E=E.pipe(new d.Utf8EncodeWorker)),!A&&_&&(E=E.pipe(new d.Utf8DecodeWorker))}catch(C){(E=new g("error")).error(C)}return new f(E,S,"")},async:function(b,E){return this.internalStream(b).accumulate(E)},nodeStream:function(b,E){return this.internalStream(b||"nodebuffer").toNodejsStream(E)},_compressWorker:function(b,E){if(this._data instanceof p&&this._data.compression.magic===b.magic)return this._data.getCompressedWorker();var S=this._decompressWorker();return this._dataBinary||(S=S.pipe(new d.Utf8EncodeWorker)),p.createWorkerFrom(S,b,E)},_decompressWorker:function(){return this._data instanceof p?this._data.getContentWorker():this._data instanceof g?this._data:new h(this._data)}};for(var y=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],x=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<y.length;v++)u.prototype[y[v]]=x;r.exports=u},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(i,r,l){(function(u){var f,h,d=u.MutationObserver||u.WebKitMutationObserver;if(d){var p=0,g=new d(b),y=u.document.createTextNode("");g.observe(y,{characterData:!0}),f=function(){y.data=p=++p%2}}else if(u.setImmediate||u.MessageChannel===void 0)f="document"in u&&"onreadystatechange"in u.document.createElement("script")?function(){var E=u.document.createElement("script");E.onreadystatechange=function(){b(),E.onreadystatechange=null,E.parentNode.removeChild(E),E=null},u.document.documentElement.appendChild(E)}:function(){setTimeout(b,0)};else{var x=new u.MessageChannel;x.port1.onmessage=b,f=function(){x.port2.postMessage(0)}}var v=[];function b(){var E,S;h=!0;for(var _=v.length;_;){for(S=v,v=[],E=-1;++E<_;)S[E]();_=v.length}h=!1}r.exports=function(E){v.push(E)!==1||h||f()}}).call(this,typeof Ia<"u"?Ia:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(i,r,l){var u=i("immediate");function f(){}var h={},d=["REJECTED"],p=["FULFILLED"],g=["PENDING"];function y(_){if(typeof _!="function")throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,_!==f&&E(this,_)}function x(_,A,C){this.promise=_,typeof A=="function"&&(this.onFulfilled=A,this.callFulfilled=this.otherCallFulfilled),typeof C=="function"&&(this.onRejected=C,this.callRejected=this.otherCallRejected)}function v(_,A,C){u(function(){var R;try{R=A(C)}catch(N){return h.reject(_,N)}R===_?h.reject(_,new TypeError("Cannot resolve promise with itself")):h.resolve(_,R)})}function b(_){var A=_&&_.then;if(_&&(typeof _=="object"||typeof _=="function")&&typeof A=="function")return function(){A.apply(_,arguments)}}function E(_,A){var C=!1;function R(P){C||(C=!0,h.reject(_,P))}function N(P){C||(C=!0,h.resolve(_,P))}var k=S(function(){A(N,R)});k.status==="error"&&R(k.value)}function S(_,A){var C={};try{C.value=_(A),C.status="success"}catch(R){C.status="error",C.value=R}return C}(r.exports=y).prototype.finally=function(_){if(typeof _!="function")return this;var A=this.constructor;return this.then(function(C){return A.resolve(_()).then(function(){return C})},function(C){return A.resolve(_()).then(function(){throw C})})},y.prototype.catch=function(_){return this.then(null,_)},y.prototype.then=function(_,A){if(typeof _!="function"&&this.state===p||typeof A!="function"&&this.state===d)return this;var C=new this.constructor(f);return this.state!==g?v(C,this.state===p?_:A,this.outcome):this.queue.push(new x(C,_,A)),C},x.prototype.callFulfilled=function(_){h.resolve(this.promise,_)},x.prototype.otherCallFulfilled=function(_){v(this.promise,this.onFulfilled,_)},x.prototype.callRejected=function(_){h.reject(this.promise,_)},x.prototype.otherCallRejected=function(_){v(this.promise,this.onRejected,_)},h.resolve=function(_,A){var C=S(b,A);if(C.status==="error")return h.reject(_,C.value);var R=C.value;if(R)E(_,R);else{_.state=p,_.outcome=A;for(var N=-1,k=_.queue.length;++N<k;)_.queue[N].callFulfilled(A)}return _},h.reject=function(_,A){_.state=d,_.outcome=A;for(var C=-1,R=_.queue.length;++C<R;)_.queue[C].callRejected(A);return _},y.resolve=function(_){return _ instanceof this?_:h.resolve(new this(f),_)},y.reject=function(_){var A=new this(f);return h.reject(A,_)},y.all=function(_){var A=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=_.length,R=!1;if(!C)return this.resolve([]);for(var N=new Array(C),k=0,P=-1,W=new this(f);++P<C;)U(_[P],P);return W;function U(L,Z){A.resolve(L).then(function(B){N[Z]=B,++k!==C||R||(R=!0,h.resolve(W,N))},function(B){R||(R=!0,h.reject(W,B))})}},y.race=function(_){var A=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=_.length,R=!1;if(!C)return this.resolve([]);for(var N=-1,k=new this(f);++N<C;)P=_[N],A.resolve(P).then(function(W){R||(R=!0,h.resolve(k,W))},function(W){R||(R=!0,h.reject(k,W))});var P;return k}},{immediate:36}],38:[function(i,r,l){var u={};(0,i("./lib/utils/common").assign)(u,i("./lib/deflate"),i("./lib/inflate"),i("./lib/zlib/constants")),r.exports=u},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(i,r,l){var u=i("./zlib/deflate"),f=i("./utils/common"),h=i("./utils/strings"),d=i("./zlib/messages"),p=i("./zlib/zstream"),g=Object.prototype.toString,y=0,x=-1,v=0,b=8;function E(_){if(!(this instanceof E))return new E(_);this.options=f.assign({level:x,method:b,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},_||{});var A=this.options;A.raw&&0<A.windowBits?A.windowBits=-A.windowBits:A.gzip&&0<A.windowBits&&A.windowBits<16&&(A.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var C=u.deflateInit2(this.strm,A.level,A.method,A.windowBits,A.memLevel,A.strategy);if(C!==y)throw new Error(d[C]);if(A.header&&u.deflateSetHeader(this.strm,A.header),A.dictionary){var R;if(R=typeof A.dictionary=="string"?h.string2buf(A.dictionary):g.call(A.dictionary)==="[object ArrayBuffer]"?new Uint8Array(A.dictionary):A.dictionary,(C=u.deflateSetDictionary(this.strm,R))!==y)throw new Error(d[C]);this._dict_set=!0}}function S(_,A){var C=new E(A);if(C.push(_,!0),C.err)throw C.msg||d[C.err];return C.result}E.prototype.push=function(_,A){var C,R,N=this.strm,k=this.options.chunkSize;if(this.ended)return!1;R=A===~~A?A:A===!0?4:0,typeof _=="string"?N.input=h.string2buf(_):g.call(_)==="[object ArrayBuffer]"?N.input=new Uint8Array(_):N.input=_,N.next_in=0,N.avail_in=N.input.length;do{if(N.avail_out===0&&(N.output=new f.Buf8(k),N.next_out=0,N.avail_out=k),(C=u.deflate(N,R))!==1&&C!==y)return this.onEnd(C),!(this.ended=!0);N.avail_out!==0&&(N.avail_in!==0||R!==4&&R!==2)||(this.options.to==="string"?this.onData(h.buf2binstring(f.shrinkBuf(N.output,N.next_out))):this.onData(f.shrinkBuf(N.output,N.next_out)))}while((0<N.avail_in||N.avail_out===0)&&C!==1);return R===4?(C=u.deflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===y):R!==2||(this.onEnd(y),!(N.avail_out=0))},E.prototype.onData=function(_){this.chunks.push(_)},E.prototype.onEnd=function(_){_===y&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=f.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},l.Deflate=E,l.deflate=S,l.deflateRaw=function(_,A){return(A=A||{}).raw=!0,S(_,A)},l.gzip=function(_,A){return(A=A||{}).gzip=!0,S(_,A)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(i,r,l){var u=i("./zlib/inflate"),f=i("./utils/common"),h=i("./utils/strings"),d=i("./zlib/constants"),p=i("./zlib/messages"),g=i("./zlib/zstream"),y=i("./zlib/gzheader"),x=Object.prototype.toString;function v(E){if(!(this instanceof v))return new v(E);this.options=f.assign({chunkSize:16384,windowBits:0,to:""},E||{});var S=this.options;S.raw&&0<=S.windowBits&&S.windowBits<16&&(S.windowBits=-S.windowBits,S.windowBits===0&&(S.windowBits=-15)),!(0<=S.windowBits&&S.windowBits<16)||E&&E.windowBits||(S.windowBits+=32),15<S.windowBits&&S.windowBits<48&&(15&S.windowBits)==0&&(S.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var _=u.inflateInit2(this.strm,S.windowBits);if(_!==d.Z_OK)throw new Error(p[_]);this.header=new y,u.inflateGetHeader(this.strm,this.header)}function b(E,S){var _=new v(S);if(_.push(E,!0),_.err)throw _.msg||p[_.err];return _.result}v.prototype.push=function(E,S){var _,A,C,R,N,k,P=this.strm,W=this.options.chunkSize,U=this.options.dictionary,L=!1;if(this.ended)return!1;A=S===~~S?S:S===!0?d.Z_FINISH:d.Z_NO_FLUSH,typeof E=="string"?P.input=h.binstring2buf(E):x.call(E)==="[object ArrayBuffer]"?P.input=new Uint8Array(E):P.input=E,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new f.Buf8(W),P.next_out=0,P.avail_out=W),(_=u.inflate(P,d.Z_NO_FLUSH))===d.Z_NEED_DICT&&U&&(k=typeof U=="string"?h.string2buf(U):x.call(U)==="[object ArrayBuffer]"?new Uint8Array(U):U,_=u.inflateSetDictionary(this.strm,k)),_===d.Z_BUF_ERROR&&L===!0&&(_=d.Z_OK,L=!1),_!==d.Z_STREAM_END&&_!==d.Z_OK)return this.onEnd(_),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&_!==d.Z_STREAM_END&&(P.avail_in!==0||A!==d.Z_FINISH&&A!==d.Z_SYNC_FLUSH)||(this.options.to==="string"?(C=h.utf8border(P.output,P.next_out),R=P.next_out-C,N=h.buf2string(P.output,C),P.next_out=R,P.avail_out=W-R,R&&f.arraySet(P.output,P.output,C,R,0),this.onData(N)):this.onData(f.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(L=!0)}while((0<P.avail_in||P.avail_out===0)&&_!==d.Z_STREAM_END);return _===d.Z_STREAM_END&&(A=d.Z_FINISH),A===d.Z_FINISH?(_=u.inflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===d.Z_OK):A!==d.Z_SYNC_FLUSH||(this.onEnd(d.Z_OK),!(P.avail_out=0))},v.prototype.onData=function(E){this.chunks.push(E)},v.prototype.onEnd=function(E){E===d.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=f.flattenChunks(this.chunks)),this.chunks=[],this.err=E,this.msg=this.strm.msg},l.Inflate=v,l.inflate=b,l.inflateRaw=function(E,S){return(S=S||{}).raw=!0,b(E,S)},l.ungzip=b},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(i,r,l){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";l.assign=function(d){for(var p=Array.prototype.slice.call(arguments,1);p.length;){var g=p.shift();if(g){if(typeof g!="object")throw new TypeError(g+"must be non-object");for(var y in g)g.hasOwnProperty(y)&&(d[y]=g[y])}}return d},l.shrinkBuf=function(d,p){return d.length===p?d:d.subarray?d.subarray(0,p):(d.length=p,d)};var f={arraySet:function(d,p,g,y,x){if(p.subarray&&d.subarray)d.set(p.subarray(g,g+y),x);else for(var v=0;v<y;v++)d[x+v]=p[g+v]},flattenChunks:function(d){var p,g,y,x,v,b;for(p=y=0,g=d.length;p<g;p++)y+=d[p].length;for(b=new Uint8Array(y),p=x=0,g=d.length;p<g;p++)v=d[p],b.set(v,x),x+=v.length;return b}},h={arraySet:function(d,p,g,y,x){for(var v=0;v<y;v++)d[x+v]=p[g+v]},flattenChunks:function(d){return[].concat.apply([],d)}};l.setTyped=function(d){d?(l.Buf8=Uint8Array,l.Buf16=Uint16Array,l.Buf32=Int32Array,l.assign(l,f)):(l.Buf8=Array,l.Buf16=Array,l.Buf32=Array,l.assign(l,h))},l.setTyped(u)},{}],42:[function(i,r,l){var u=i("./common"),f=!0,h=!0;try{String.fromCharCode.apply(null,[0])}catch{f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{h=!1}for(var d=new u.Buf8(256),p=0;p<256;p++)d[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;function g(y,x){if(x<65537&&(y.subarray&&h||!y.subarray&&f))return String.fromCharCode.apply(null,u.shrinkBuf(y,x));for(var v="",b=0;b<x;b++)v+=String.fromCharCode(y[b]);return v}d[254]=d[254]=1,l.string2buf=function(y){var x,v,b,E,S,_=y.length,A=0;for(E=0;E<_;E++)(64512&(v=y.charCodeAt(E)))==55296&&E+1<_&&(64512&(b=y.charCodeAt(E+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),E++),A+=v<128?1:v<2048?2:v<65536?3:4;for(x=new u.Buf8(A),E=S=0;S<A;E++)(64512&(v=y.charCodeAt(E)))==55296&&E+1<_&&(64512&(b=y.charCodeAt(E+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),E++),v<128?x[S++]=v:(v<2048?x[S++]=192|v>>>6:(v<65536?x[S++]=224|v>>>12:(x[S++]=240|v>>>18,x[S++]=128|v>>>12&63),x[S++]=128|v>>>6&63),x[S++]=128|63&v);return x},l.buf2binstring=function(y){return g(y,y.length)},l.binstring2buf=function(y){for(var x=new u.Buf8(y.length),v=0,b=x.length;v<b;v++)x[v]=y.charCodeAt(v);return x},l.buf2string=function(y,x){var v,b,E,S,_=x||y.length,A=new Array(2*_);for(v=b=0;v<_;)if((E=y[v++])<128)A[b++]=E;else if(4<(S=d[E]))A[b++]=65533,v+=S-1;else{for(E&=S===2?31:S===3?15:7;1<S&&v<_;)E=E<<6|63&y[v++],S--;1<S?A[b++]=65533:E<65536?A[b++]=E:(E-=65536,A[b++]=55296|E>>10&1023,A[b++]=56320|1023&E)}return g(A,b)},l.utf8border=function(y,x){var v;for((x=x||y.length)>y.length&&(x=y.length),v=x-1;0<=v&&(192&y[v])==128;)v--;return v<0||v===0?x:v+d[y[v]]>x?v:x}},{"./common":41}],43:[function(i,r,l){r.exports=function(u,f,h,d){for(var p=65535&u|0,g=u>>>16&65535|0,y=0;h!==0;){for(h-=y=2e3<h?2e3:h;g=g+(p=p+f[d++]|0)|0,--y;);p%=65521,g%=65521}return p|g<<16|0}},{}],44:[function(i,r,l){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(i,r,l){var u=function(){for(var f,h=[],d=0;d<256;d++){f=d;for(var p=0;p<8;p++)f=1&f?3988292384^f>>>1:f>>>1;h[d]=f}return h}();r.exports=function(f,h,d,p){var g=u,y=p+d;f^=-1;for(var x=p;x<y;x++)f=f>>>8^g[255&(f^h[x])];return-1^f}},{}],46:[function(i,r,l){var u,f=i("../utils/common"),h=i("./trees"),d=i("./adler32"),p=i("./crc32"),g=i("./messages"),y=0,x=4,v=0,b=-2,E=-1,S=4,_=2,A=8,C=9,R=286,N=30,k=19,P=2*R+1,W=15,U=3,L=258,Z=L+U+1,B=42,Y=113,T=1,$=2,X=3,q=4;function et(M,At){return M.msg=g[At],At}function rt(M){return(M<<1)-(4<M?9:0)}function H(M){for(var At=M.length;0<=--At;)M[At]=0}function G(M){var At=M.state,ot=At.pending;ot>M.avail_out&&(ot=M.avail_out),ot!==0&&(f.arraySet(M.output,At.pending_buf,At.pending_out,ot,M.next_out),M.next_out+=ot,At.pending_out+=ot,M.total_out+=ot,M.avail_out-=ot,At.pending-=ot,At.pending===0&&(At.pending_out=0))}function K(M,At){h._tr_flush_block(M,0<=M.block_start?M.block_start:-1,M.strstart-M.block_start,At),M.block_start=M.strstart,G(M.strm)}function dt(M,At){M.pending_buf[M.pending++]=At}function j(M,At){M.pending_buf[M.pending++]=At>>>8&255,M.pending_buf[M.pending++]=255&At}function nt(M,At){var ot,V,I=M.max_chain_length,tt=M.strstart,pt=M.prev_length,xt=M.nice_match,st=M.strstart>M.w_size-Z?M.strstart-(M.w_size-Z):0,z=M.window,D=M.w_mask,Q=M.prev,ft=M.strstart+L,Mt=z[tt+pt-1],mt=z[tt+pt];M.prev_length>=M.good_match&&(I>>=2),xt>M.lookahead&&(xt=M.lookahead);do if(z[(ot=At)+pt]===mt&&z[ot+pt-1]===Mt&&z[ot]===z[tt]&&z[++ot]===z[tt+1]){tt+=2,ot++;do;while(z[++tt]===z[++ot]&&z[++tt]===z[++ot]&&z[++tt]===z[++ot]&&z[++tt]===z[++ot]&&z[++tt]===z[++ot]&&z[++tt]===z[++ot]&&z[++tt]===z[++ot]&&z[++tt]===z[++ot]&&tt<ft);if(V=L-(ft-tt),tt=ft-L,pt<V){if(M.match_start=At,xt<=(pt=V))break;Mt=z[tt+pt-1],mt=z[tt+pt]}}while((At=Q[At&D])>st&&--I!=0);return pt<=M.lookahead?pt:M.lookahead}function yt(M){var At,ot,V,I,tt,pt,xt,st,z,D,Q=M.w_size;do{if(I=M.window_size-M.lookahead-M.strstart,M.strstart>=Q+(Q-Z)){for(f.arraySet(M.window,M.window,Q,Q,0),M.match_start-=Q,M.strstart-=Q,M.block_start-=Q,At=ot=M.hash_size;V=M.head[--At],M.head[At]=Q<=V?V-Q:0,--ot;);for(At=ot=Q;V=M.prev[--At],M.prev[At]=Q<=V?V-Q:0,--ot;);I+=Q}if(M.strm.avail_in===0)break;if(pt=M.strm,xt=M.window,st=M.strstart+M.lookahead,z=I,D=void 0,D=pt.avail_in,z<D&&(D=z),ot=D===0?0:(pt.avail_in-=D,f.arraySet(xt,pt.input,pt.next_in,D,st),pt.state.wrap===1?pt.adler=d(pt.adler,xt,D,st):pt.state.wrap===2&&(pt.adler=p(pt.adler,xt,D,st)),pt.next_in+=D,pt.total_in+=D,D),M.lookahead+=ot,M.lookahead+M.insert>=U)for(tt=M.strstart-M.insert,M.ins_h=M.window[tt],M.ins_h=(M.ins_h<<M.hash_shift^M.window[tt+1])&M.hash_mask;M.insert&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[tt+U-1])&M.hash_mask,M.prev[tt&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=tt,tt++,M.insert--,!(M.lookahead+M.insert<U)););}while(M.lookahead<Z&&M.strm.avail_in!==0)}function Tt(M,At){for(var ot,V;;){if(M.lookahead<Z){if(yt(M),M.lookahead<Z&&At===y)return T;if(M.lookahead===0)break}if(ot=0,M.lookahead>=U&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+U-1])&M.hash_mask,ot=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),ot!==0&&M.strstart-ot<=M.w_size-Z&&(M.match_length=nt(M,ot)),M.match_length>=U)if(V=h._tr_tally(M,M.strstart-M.match_start,M.match_length-U),M.lookahead-=M.match_length,M.match_length<=M.max_lazy_match&&M.lookahead>=U){for(M.match_length--;M.strstart++,M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+U-1])&M.hash_mask,ot=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart,--M.match_length!=0;);M.strstart++}else M.strstart+=M.match_length,M.match_length=0,M.ins_h=M.window[M.strstart],M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+1])&M.hash_mask;else V=h._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++;if(V&&(K(M,!1),M.strm.avail_out===0))return T}return M.insert=M.strstart<U-1?M.strstart:U-1,At===x?(K(M,!0),M.strm.avail_out===0?X:q):M.last_lit&&(K(M,!1),M.strm.avail_out===0)?T:$}function wt(M,At){for(var ot,V,I;;){if(M.lookahead<Z){if(yt(M),M.lookahead<Z&&At===y)return T;if(M.lookahead===0)break}if(ot=0,M.lookahead>=U&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+U-1])&M.hash_mask,ot=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),M.prev_length=M.match_length,M.prev_match=M.match_start,M.match_length=U-1,ot!==0&&M.prev_length<M.max_lazy_match&&M.strstart-ot<=M.w_size-Z&&(M.match_length=nt(M,ot),M.match_length<=5&&(M.strategy===1||M.match_length===U&&4096<M.strstart-M.match_start)&&(M.match_length=U-1)),M.prev_length>=U&&M.match_length<=M.prev_length){for(I=M.strstart+M.lookahead-U,V=h._tr_tally(M,M.strstart-1-M.prev_match,M.prev_length-U),M.lookahead-=M.prev_length-1,M.prev_length-=2;++M.strstart<=I&&(M.ins_h=(M.ins_h<<M.hash_shift^M.window[M.strstart+U-1])&M.hash_mask,ot=M.prev[M.strstart&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=M.strstart),--M.prev_length!=0;);if(M.match_available=0,M.match_length=U-1,M.strstart++,V&&(K(M,!1),M.strm.avail_out===0))return T}else if(M.match_available){if((V=h._tr_tally(M,0,M.window[M.strstart-1]))&&K(M,!1),M.strstart++,M.lookahead--,M.strm.avail_out===0)return T}else M.match_available=1,M.strstart++,M.lookahead--}return M.match_available&&(V=h._tr_tally(M,0,M.window[M.strstart-1]),M.match_available=0),M.insert=M.strstart<U-1?M.strstart:U-1,At===x?(K(M,!0),M.strm.avail_out===0?X:q):M.last_lit&&(K(M,!1),M.strm.avail_out===0)?T:$}function zt(M,At,ot,V,I){this.good_length=M,this.max_lazy=At,this.nice_length=ot,this.max_chain=V,this.func=I}function Ht(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=A,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new f.Buf16(2*P),this.dyn_dtree=new f.Buf16(2*(2*N+1)),this.bl_tree=new f.Buf16(2*(2*k+1)),H(this.dyn_ltree),H(this.dyn_dtree),H(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new f.Buf16(W+1),this.heap=new f.Buf16(2*R+1),H(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new f.Buf16(2*R+1),H(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Zt(M){var At;return M&&M.state?(M.total_in=M.total_out=0,M.data_type=_,(At=M.state).pending=0,At.pending_out=0,At.wrap<0&&(At.wrap=-At.wrap),At.status=At.wrap?B:Y,M.adler=At.wrap===2?0:1,At.last_flush=y,h._tr_init(At),v):et(M,b)}function ee(M){var At=Zt(M);return At===v&&function(ot){ot.window_size=2*ot.w_size,H(ot.head),ot.max_lazy_match=u[ot.level].max_lazy,ot.good_match=u[ot.level].good_length,ot.nice_match=u[ot.level].nice_length,ot.max_chain_length=u[ot.level].max_chain,ot.strstart=0,ot.block_start=0,ot.lookahead=0,ot.insert=0,ot.match_length=ot.prev_length=U-1,ot.match_available=0,ot.ins_h=0}(M.state),At}function Qt(M,At,ot,V,I,tt){if(!M)return b;var pt=1;if(At===E&&(At=6),V<0?(pt=0,V=-V):15<V&&(pt=2,V-=16),I<1||C<I||ot!==A||V<8||15<V||At<0||9<At||tt<0||S<tt)return et(M,b);V===8&&(V=9);var xt=new Ht;return(M.state=xt).strm=M,xt.wrap=pt,xt.gzhead=null,xt.w_bits=V,xt.w_size=1<<xt.w_bits,xt.w_mask=xt.w_size-1,xt.hash_bits=I+7,xt.hash_size=1<<xt.hash_bits,xt.hash_mask=xt.hash_size-1,xt.hash_shift=~~((xt.hash_bits+U-1)/U),xt.window=new f.Buf8(2*xt.w_size),xt.head=new f.Buf16(xt.hash_size),xt.prev=new f.Buf16(xt.w_size),xt.lit_bufsize=1<<I+6,xt.pending_buf_size=4*xt.lit_bufsize,xt.pending_buf=new f.Buf8(xt.pending_buf_size),xt.d_buf=1*xt.lit_bufsize,xt.l_buf=3*xt.lit_bufsize,xt.level=At,xt.strategy=tt,xt.method=ot,ee(M)}u=[new zt(0,0,0,0,function(M,At){var ot=65535;for(ot>M.pending_buf_size-5&&(ot=M.pending_buf_size-5);;){if(M.lookahead<=1){if(yt(M),M.lookahead===0&&At===y)return T;if(M.lookahead===0)break}M.strstart+=M.lookahead,M.lookahead=0;var V=M.block_start+ot;if((M.strstart===0||M.strstart>=V)&&(M.lookahead=M.strstart-V,M.strstart=V,K(M,!1),M.strm.avail_out===0)||M.strstart-M.block_start>=M.w_size-Z&&(K(M,!1),M.strm.avail_out===0))return T}return M.insert=0,At===x?(K(M,!0),M.strm.avail_out===0?X:q):(M.strstart>M.block_start&&(K(M,!1),M.strm.avail_out),T)}),new zt(4,4,8,4,Tt),new zt(4,5,16,8,Tt),new zt(4,6,32,32,Tt),new zt(4,4,16,16,wt),new zt(8,16,32,32,wt),new zt(8,16,128,128,wt),new zt(8,32,128,256,wt),new zt(32,128,258,1024,wt),new zt(32,258,258,4096,wt)],l.deflateInit=function(M,At){return Qt(M,At,A,15,8,0)},l.deflateInit2=Qt,l.deflateReset=ee,l.deflateResetKeep=Zt,l.deflateSetHeader=function(M,At){return M&&M.state?M.state.wrap!==2?b:(M.state.gzhead=At,v):b},l.deflate=function(M,At){var ot,V,I,tt;if(!M||!M.state||5<At||At<0)return M?et(M,b):b;if(V=M.state,!M.output||!M.input&&M.avail_in!==0||V.status===666&&At!==x)return et(M,M.avail_out===0?-5:b);if(V.strm=M,ot=V.last_flush,V.last_flush=At,V.status===B)if(V.wrap===2)M.adler=0,dt(V,31),dt(V,139),dt(V,8),V.gzhead?(dt(V,(V.gzhead.text?1:0)+(V.gzhead.hcrc?2:0)+(V.gzhead.extra?4:0)+(V.gzhead.name?8:0)+(V.gzhead.comment?16:0)),dt(V,255&V.gzhead.time),dt(V,V.gzhead.time>>8&255),dt(V,V.gzhead.time>>16&255),dt(V,V.gzhead.time>>24&255),dt(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),dt(V,255&V.gzhead.os),V.gzhead.extra&&V.gzhead.extra.length&&(dt(V,255&V.gzhead.extra.length),dt(V,V.gzhead.extra.length>>8&255)),V.gzhead.hcrc&&(M.adler=p(M.adler,V.pending_buf,V.pending,0)),V.gzindex=0,V.status=69):(dt(V,0),dt(V,0),dt(V,0),dt(V,0),dt(V,0),dt(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),dt(V,3),V.status=Y);else{var pt=A+(V.w_bits-8<<4)<<8;pt|=(2<=V.strategy||V.level<2?0:V.level<6?1:V.level===6?2:3)<<6,V.strstart!==0&&(pt|=32),pt+=31-pt%31,V.status=Y,j(V,pt),V.strstart!==0&&(j(V,M.adler>>>16),j(V,65535&M.adler)),M.adler=1}if(V.status===69)if(V.gzhead.extra){for(I=V.pending;V.gzindex<(65535&V.gzhead.extra.length)&&(V.pending!==V.pending_buf_size||(V.gzhead.hcrc&&V.pending>I&&(M.adler=p(M.adler,V.pending_buf,V.pending-I,I)),G(M),I=V.pending,V.pending!==V.pending_buf_size));)dt(V,255&V.gzhead.extra[V.gzindex]),V.gzindex++;V.gzhead.hcrc&&V.pending>I&&(M.adler=p(M.adler,V.pending_buf,V.pending-I,I)),V.gzindex===V.gzhead.extra.length&&(V.gzindex=0,V.status=73)}else V.status=73;if(V.status===73)if(V.gzhead.name){I=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>I&&(M.adler=p(M.adler,V.pending_buf,V.pending-I,I)),G(M),I=V.pending,V.pending===V.pending_buf_size)){tt=1;break}tt=V.gzindex<V.gzhead.name.length?255&V.gzhead.name.charCodeAt(V.gzindex++):0,dt(V,tt)}while(tt!==0);V.gzhead.hcrc&&V.pending>I&&(M.adler=p(M.adler,V.pending_buf,V.pending-I,I)),tt===0&&(V.gzindex=0,V.status=91)}else V.status=91;if(V.status===91)if(V.gzhead.comment){I=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>I&&(M.adler=p(M.adler,V.pending_buf,V.pending-I,I)),G(M),I=V.pending,V.pending===V.pending_buf_size)){tt=1;break}tt=V.gzindex<V.gzhead.comment.length?255&V.gzhead.comment.charCodeAt(V.gzindex++):0,dt(V,tt)}while(tt!==0);V.gzhead.hcrc&&V.pending>I&&(M.adler=p(M.adler,V.pending_buf,V.pending-I,I)),tt===0&&(V.status=103)}else V.status=103;if(V.status===103&&(V.gzhead.hcrc?(V.pending+2>V.pending_buf_size&&G(M),V.pending+2<=V.pending_buf_size&&(dt(V,255&M.adler),dt(V,M.adler>>8&255),M.adler=0,V.status=Y)):V.status=Y),V.pending!==0){if(G(M),M.avail_out===0)return V.last_flush=-1,v}else if(M.avail_in===0&&rt(At)<=rt(ot)&&At!==x)return et(M,-5);if(V.status===666&&M.avail_in!==0)return et(M,-5);if(M.avail_in!==0||V.lookahead!==0||At!==y&&V.status!==666){var xt=V.strategy===2?function(st,z){for(var D;;){if(st.lookahead===0&&(yt(st),st.lookahead===0)){if(z===y)return T;break}if(st.match_length=0,D=h._tr_tally(st,0,st.window[st.strstart]),st.lookahead--,st.strstart++,D&&(K(st,!1),st.strm.avail_out===0))return T}return st.insert=0,z===x?(K(st,!0),st.strm.avail_out===0?X:q):st.last_lit&&(K(st,!1),st.strm.avail_out===0)?T:$}(V,At):V.strategy===3?function(st,z){for(var D,Q,ft,Mt,mt=st.window;;){if(st.lookahead<=L){if(yt(st),st.lookahead<=L&&z===y)return T;if(st.lookahead===0)break}if(st.match_length=0,st.lookahead>=U&&0<st.strstart&&(Q=mt[ft=st.strstart-1])===mt[++ft]&&Q===mt[++ft]&&Q===mt[++ft]){Mt=st.strstart+L;do;while(Q===mt[++ft]&&Q===mt[++ft]&&Q===mt[++ft]&&Q===mt[++ft]&&Q===mt[++ft]&&Q===mt[++ft]&&Q===mt[++ft]&&Q===mt[++ft]&&ft<Mt);st.match_length=L-(Mt-ft),st.match_length>st.lookahead&&(st.match_length=st.lookahead)}if(st.match_length>=U?(D=h._tr_tally(st,1,st.match_length-U),st.lookahead-=st.match_length,st.strstart+=st.match_length,st.match_length=0):(D=h._tr_tally(st,0,st.window[st.strstart]),st.lookahead--,st.strstart++),D&&(K(st,!1),st.strm.avail_out===0))return T}return st.insert=0,z===x?(K(st,!0),st.strm.avail_out===0?X:q):st.last_lit&&(K(st,!1),st.strm.avail_out===0)?T:$}(V,At):u[V.level].func(V,At);if(xt!==X&&xt!==q||(V.status=666),xt===T||xt===X)return M.avail_out===0&&(V.last_flush=-1),v;if(xt===$&&(At===1?h._tr_align(V):At!==5&&(h._tr_stored_block(V,0,0,!1),At===3&&(H(V.head),V.lookahead===0&&(V.strstart=0,V.block_start=0,V.insert=0))),G(M),M.avail_out===0))return V.last_flush=-1,v}return At!==x?v:V.wrap<=0?1:(V.wrap===2?(dt(V,255&M.adler),dt(V,M.adler>>8&255),dt(V,M.adler>>16&255),dt(V,M.adler>>24&255),dt(V,255&M.total_in),dt(V,M.total_in>>8&255),dt(V,M.total_in>>16&255),dt(V,M.total_in>>24&255)):(j(V,M.adler>>>16),j(V,65535&M.adler)),G(M),0<V.wrap&&(V.wrap=-V.wrap),V.pending!==0?v:1)},l.deflateEnd=function(M){var At;return M&&M.state?(At=M.state.status)!==B&&At!==69&&At!==73&&At!==91&&At!==103&&At!==Y&&At!==666?et(M,b):(M.state=null,At===Y?et(M,-3):v):b},l.deflateSetDictionary=function(M,At){var ot,V,I,tt,pt,xt,st,z,D=At.length;if(!M||!M.state||(tt=(ot=M.state).wrap)===2||tt===1&&ot.status!==B||ot.lookahead)return b;for(tt===1&&(M.adler=d(M.adler,At,D,0)),ot.wrap=0,D>=ot.w_size&&(tt===0&&(H(ot.head),ot.strstart=0,ot.block_start=0,ot.insert=0),z=new f.Buf8(ot.w_size),f.arraySet(z,At,D-ot.w_size,ot.w_size,0),At=z,D=ot.w_size),pt=M.avail_in,xt=M.next_in,st=M.input,M.avail_in=D,M.next_in=0,M.input=At,yt(ot);ot.lookahead>=U;){for(V=ot.strstart,I=ot.lookahead-(U-1);ot.ins_h=(ot.ins_h<<ot.hash_shift^ot.window[V+U-1])&ot.hash_mask,ot.prev[V&ot.w_mask]=ot.head[ot.ins_h],ot.head[ot.ins_h]=V,V++,--I;);ot.strstart=V,ot.lookahead=U-1,yt(ot)}return ot.strstart+=ot.lookahead,ot.block_start=ot.strstart,ot.insert=ot.lookahead,ot.lookahead=0,ot.match_length=ot.prev_length=U-1,ot.match_available=0,M.next_in=xt,M.input=st,M.avail_in=pt,ot.wrap=tt,v},l.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(i,r,l){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(i,r,l){r.exports=function(u,f){var h,d,p,g,y,x,v,b,E,S,_,A,C,R,N,k,P,W,U,L,Z,B,Y,T,$;h=u.state,d=u.next_in,T=u.input,p=d+(u.avail_in-5),g=u.next_out,$=u.output,y=g-(f-u.avail_out),x=g+(u.avail_out-257),v=h.dmax,b=h.wsize,E=h.whave,S=h.wnext,_=h.window,A=h.hold,C=h.bits,R=h.lencode,N=h.distcode,k=(1<<h.lenbits)-1,P=(1<<h.distbits)-1;t:do{C<15&&(A+=T[d++]<<C,C+=8,A+=T[d++]<<C,C+=8),W=R[A&k];e:for(;;){if(A>>>=U=W>>>24,C-=U,(U=W>>>16&255)===0)$[g++]=65535&W;else{if(!(16&U)){if((64&U)==0){W=R[(65535&W)+(A&(1<<U)-1)];continue e}if(32&U){h.mode=12;break t}u.msg="invalid literal/length code",h.mode=30;break t}L=65535&W,(U&=15)&&(C<U&&(A+=T[d++]<<C,C+=8),L+=A&(1<<U)-1,A>>>=U,C-=U),C<15&&(A+=T[d++]<<C,C+=8,A+=T[d++]<<C,C+=8),W=N[A&P];n:for(;;){if(A>>>=U=W>>>24,C-=U,!(16&(U=W>>>16&255))){if((64&U)==0){W=N[(65535&W)+(A&(1<<U)-1)];continue n}u.msg="invalid distance code",h.mode=30;break t}if(Z=65535&W,C<(U&=15)&&(A+=T[d++]<<C,(C+=8)<U&&(A+=T[d++]<<C,C+=8)),v<(Z+=A&(1<<U)-1)){u.msg="invalid distance too far back",h.mode=30;break t}if(A>>>=U,C-=U,(U=g-y)<Z){if(E<(U=Z-U)&&h.sane){u.msg="invalid distance too far back",h.mode=30;break t}if(Y=_,(B=0)===S){if(B+=b-U,U<L){for(L-=U;$[g++]=_[B++],--U;);B=g-Z,Y=$}}else if(S<U){if(B+=b+S-U,(U-=S)<L){for(L-=U;$[g++]=_[B++],--U;);if(B=0,S<L){for(L-=U=S;$[g++]=_[B++],--U;);B=g-Z,Y=$}}}else if(B+=S-U,U<L){for(L-=U;$[g++]=_[B++],--U;);B=g-Z,Y=$}for(;2<L;)$[g++]=Y[B++],$[g++]=Y[B++],$[g++]=Y[B++],L-=3;L&&($[g++]=Y[B++],1<L&&($[g++]=Y[B++]))}else{for(B=g-Z;$[g++]=$[B++],$[g++]=$[B++],$[g++]=$[B++],2<(L-=3););L&&($[g++]=$[B++],1<L&&($[g++]=$[B++]))}break}}break}}while(d<p&&g<x);d-=L=C>>3,A&=(1<<(C-=L<<3))-1,u.next_in=d,u.next_out=g,u.avail_in=d<p?p-d+5:5-(d-p),u.avail_out=g<x?x-g+257:257-(g-x),h.hold=A,h.bits=C}},{}],49:[function(i,r,l){var u=i("../utils/common"),f=i("./adler32"),h=i("./crc32"),d=i("./inffast"),p=i("./inftrees"),g=1,y=2,x=0,v=-2,b=1,E=852,S=592;function _(B){return(B>>>24&255)+(B>>>8&65280)+((65280&B)<<8)+((255&B)<<24)}function A(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new u.Buf16(320),this.work=new u.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function C(B){var Y;return B&&B.state?(Y=B.state,B.total_in=B.total_out=Y.total=0,B.msg="",Y.wrap&&(B.adler=1&Y.wrap),Y.mode=b,Y.last=0,Y.havedict=0,Y.dmax=32768,Y.head=null,Y.hold=0,Y.bits=0,Y.lencode=Y.lendyn=new u.Buf32(E),Y.distcode=Y.distdyn=new u.Buf32(S),Y.sane=1,Y.back=-1,x):v}function R(B){var Y;return B&&B.state?((Y=B.state).wsize=0,Y.whave=0,Y.wnext=0,C(B)):v}function N(B,Y){var T,$;return B&&B.state?($=B.state,Y<0?(T=0,Y=-Y):(T=1+(Y>>4),Y<48&&(Y&=15)),Y&&(Y<8||15<Y)?v:($.window!==null&&$.wbits!==Y&&($.window=null),$.wrap=T,$.wbits=Y,R(B))):v}function k(B,Y){var T,$;return B?($=new A,(B.state=$).window=null,(T=N(B,Y))!==x&&(B.state=null),T):v}var P,W,U=!0;function L(B){if(U){var Y;for(P=new u.Buf32(512),W=new u.Buf32(32),Y=0;Y<144;)B.lens[Y++]=8;for(;Y<256;)B.lens[Y++]=9;for(;Y<280;)B.lens[Y++]=7;for(;Y<288;)B.lens[Y++]=8;for(p(g,B.lens,0,288,P,0,B.work,{bits:9}),Y=0;Y<32;)B.lens[Y++]=5;p(y,B.lens,0,32,W,0,B.work,{bits:5}),U=!1}B.lencode=P,B.lenbits=9,B.distcode=W,B.distbits=5}function Z(B,Y,T,$){var X,q=B.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new u.Buf8(q.wsize)),$>=q.wsize?(u.arraySet(q.window,Y,T-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):($<(X=q.wsize-q.wnext)&&(X=$),u.arraySet(q.window,Y,T-$,X,q.wnext),($-=X)?(u.arraySet(q.window,Y,T-$,$,0),q.wnext=$,q.whave=q.wsize):(q.wnext+=X,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=X))),0}l.inflateReset=R,l.inflateReset2=N,l.inflateResetKeep=C,l.inflateInit=function(B){return k(B,15)},l.inflateInit2=k,l.inflate=function(B,Y){var T,$,X,q,et,rt,H,G,K,dt,j,nt,yt,Tt,wt,zt,Ht,Zt,ee,Qt,M,At,ot,V,I=0,tt=new u.Buf8(4),pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!B||!B.state||!B.output||!B.input&&B.avail_in!==0)return v;(T=B.state).mode===12&&(T.mode=13),et=B.next_out,X=B.output,H=B.avail_out,q=B.next_in,$=B.input,rt=B.avail_in,G=T.hold,K=T.bits,dt=rt,j=H,At=x;t:for(;;)switch(T.mode){case b:if(T.wrap===0){T.mode=13;break}for(;K<16;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}if(2&T.wrap&&G===35615){tt[T.check=0]=255&G,tt[1]=G>>>8&255,T.check=h(T.check,tt,2,0),K=G=0,T.mode=2;break}if(T.flags=0,T.head&&(T.head.done=!1),!(1&T.wrap)||(((255&G)<<8)+(G>>8))%31){B.msg="incorrect header check",T.mode=30;break}if((15&G)!=8){B.msg="unknown compression method",T.mode=30;break}if(K-=4,M=8+(15&(G>>>=4)),T.wbits===0)T.wbits=M;else if(M>T.wbits){B.msg="invalid window size",T.mode=30;break}T.dmax=1<<M,B.adler=T.check=1,T.mode=512&G?10:12,K=G=0;break;case 2:for(;K<16;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}if(T.flags=G,(255&T.flags)!=8){B.msg="unknown compression method",T.mode=30;break}if(57344&T.flags){B.msg="unknown header flags set",T.mode=30;break}T.head&&(T.head.text=G>>8&1),512&T.flags&&(tt[0]=255&G,tt[1]=G>>>8&255,T.check=h(T.check,tt,2,0)),K=G=0,T.mode=3;case 3:for(;K<32;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}T.head&&(T.head.time=G),512&T.flags&&(tt[0]=255&G,tt[1]=G>>>8&255,tt[2]=G>>>16&255,tt[3]=G>>>24&255,T.check=h(T.check,tt,4,0)),K=G=0,T.mode=4;case 4:for(;K<16;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}T.head&&(T.head.xflags=255&G,T.head.os=G>>8),512&T.flags&&(tt[0]=255&G,tt[1]=G>>>8&255,T.check=h(T.check,tt,2,0)),K=G=0,T.mode=5;case 5:if(1024&T.flags){for(;K<16;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}T.length=G,T.head&&(T.head.extra_len=G),512&T.flags&&(tt[0]=255&G,tt[1]=G>>>8&255,T.check=h(T.check,tt,2,0)),K=G=0}else T.head&&(T.head.extra=null);T.mode=6;case 6:if(1024&T.flags&&(rt<(nt=T.length)&&(nt=rt),nt&&(T.head&&(M=T.head.extra_len-T.length,T.head.extra||(T.head.extra=new Array(T.head.extra_len)),u.arraySet(T.head.extra,$,q,nt,M)),512&T.flags&&(T.check=h(T.check,$,nt,q)),rt-=nt,q+=nt,T.length-=nt),T.length))break t;T.length=0,T.mode=7;case 7:if(2048&T.flags){if(rt===0)break t;for(nt=0;M=$[q+nt++],T.head&&M&&T.length<65536&&(T.head.name+=String.fromCharCode(M)),M&&nt<rt;);if(512&T.flags&&(T.check=h(T.check,$,nt,q)),rt-=nt,q+=nt,M)break t}else T.head&&(T.head.name=null);T.length=0,T.mode=8;case 8:if(4096&T.flags){if(rt===0)break t;for(nt=0;M=$[q+nt++],T.head&&M&&T.length<65536&&(T.head.comment+=String.fromCharCode(M)),M&&nt<rt;);if(512&T.flags&&(T.check=h(T.check,$,nt,q)),rt-=nt,q+=nt,M)break t}else T.head&&(T.head.comment=null);T.mode=9;case 9:if(512&T.flags){for(;K<16;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}if(G!==(65535&T.check)){B.msg="header crc mismatch",T.mode=30;break}K=G=0}T.head&&(T.head.hcrc=T.flags>>9&1,T.head.done=!0),B.adler=T.check=0,T.mode=12;break;case 10:for(;K<32;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}B.adler=T.check=_(G),K=G=0,T.mode=11;case 11:if(T.havedict===0)return B.next_out=et,B.avail_out=H,B.next_in=q,B.avail_in=rt,T.hold=G,T.bits=K,2;B.adler=T.check=1,T.mode=12;case 12:if(Y===5||Y===6)break t;case 13:if(T.last){G>>>=7&K,K-=7&K,T.mode=27;break}for(;K<3;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}switch(T.last=1&G,K-=1,3&(G>>>=1)){case 0:T.mode=14;break;case 1:if(L(T),T.mode=20,Y!==6)break;G>>>=2,K-=2;break t;case 2:T.mode=17;break;case 3:B.msg="invalid block type",T.mode=30}G>>>=2,K-=2;break;case 14:for(G>>>=7&K,K-=7&K;K<32;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}if((65535&G)!=(G>>>16^65535)){B.msg="invalid stored block lengths",T.mode=30;break}if(T.length=65535&G,K=G=0,T.mode=15,Y===6)break t;case 15:T.mode=16;case 16:if(nt=T.length){if(rt<nt&&(nt=rt),H<nt&&(nt=H),nt===0)break t;u.arraySet(X,$,q,nt,et),rt-=nt,q+=nt,H-=nt,et+=nt,T.length-=nt;break}T.mode=12;break;case 17:for(;K<14;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}if(T.nlen=257+(31&G),G>>>=5,K-=5,T.ndist=1+(31&G),G>>>=5,K-=5,T.ncode=4+(15&G),G>>>=4,K-=4,286<T.nlen||30<T.ndist){B.msg="too many length or distance symbols",T.mode=30;break}T.have=0,T.mode=18;case 18:for(;T.have<T.ncode;){for(;K<3;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}T.lens[pt[T.have++]]=7&G,G>>>=3,K-=3}for(;T.have<19;)T.lens[pt[T.have++]]=0;if(T.lencode=T.lendyn,T.lenbits=7,ot={bits:T.lenbits},At=p(0,T.lens,0,19,T.lencode,0,T.work,ot),T.lenbits=ot.bits,At){B.msg="invalid code lengths set",T.mode=30;break}T.have=0,T.mode=19;case 19:for(;T.have<T.nlen+T.ndist;){for(;zt=(I=T.lencode[G&(1<<T.lenbits)-1])>>>16&255,Ht=65535&I,!((wt=I>>>24)<=K);){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}if(Ht<16)G>>>=wt,K-=wt,T.lens[T.have++]=Ht;else{if(Ht===16){for(V=wt+2;K<V;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}if(G>>>=wt,K-=wt,T.have===0){B.msg="invalid bit length repeat",T.mode=30;break}M=T.lens[T.have-1],nt=3+(3&G),G>>>=2,K-=2}else if(Ht===17){for(V=wt+3;K<V;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}K-=wt,M=0,nt=3+(7&(G>>>=wt)),G>>>=3,K-=3}else{for(V=wt+7;K<V;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}K-=wt,M=0,nt=11+(127&(G>>>=wt)),G>>>=7,K-=7}if(T.have+nt>T.nlen+T.ndist){B.msg="invalid bit length repeat",T.mode=30;break}for(;nt--;)T.lens[T.have++]=M}}if(T.mode===30)break;if(T.lens[256]===0){B.msg="invalid code -- missing end-of-block",T.mode=30;break}if(T.lenbits=9,ot={bits:T.lenbits},At=p(g,T.lens,0,T.nlen,T.lencode,0,T.work,ot),T.lenbits=ot.bits,At){B.msg="invalid literal/lengths set",T.mode=30;break}if(T.distbits=6,T.distcode=T.distdyn,ot={bits:T.distbits},At=p(y,T.lens,T.nlen,T.ndist,T.distcode,0,T.work,ot),T.distbits=ot.bits,At){B.msg="invalid distances set",T.mode=30;break}if(T.mode=20,Y===6)break t;case 20:T.mode=21;case 21:if(6<=rt&&258<=H){B.next_out=et,B.avail_out=H,B.next_in=q,B.avail_in=rt,T.hold=G,T.bits=K,d(B,j),et=B.next_out,X=B.output,H=B.avail_out,q=B.next_in,$=B.input,rt=B.avail_in,G=T.hold,K=T.bits,T.mode===12&&(T.back=-1);break}for(T.back=0;zt=(I=T.lencode[G&(1<<T.lenbits)-1])>>>16&255,Ht=65535&I,!((wt=I>>>24)<=K);){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}if(zt&&(240&zt)==0){for(Zt=wt,ee=zt,Qt=Ht;zt=(I=T.lencode[Qt+((G&(1<<Zt+ee)-1)>>Zt)])>>>16&255,Ht=65535&I,!(Zt+(wt=I>>>24)<=K);){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}G>>>=Zt,K-=Zt,T.back+=Zt}if(G>>>=wt,K-=wt,T.back+=wt,T.length=Ht,zt===0){T.mode=26;break}if(32&zt){T.back=-1,T.mode=12;break}if(64&zt){B.msg="invalid literal/length code",T.mode=30;break}T.extra=15&zt,T.mode=22;case 22:if(T.extra){for(V=T.extra;K<V;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}T.length+=G&(1<<T.extra)-1,G>>>=T.extra,K-=T.extra,T.back+=T.extra}T.was=T.length,T.mode=23;case 23:for(;zt=(I=T.distcode[G&(1<<T.distbits)-1])>>>16&255,Ht=65535&I,!((wt=I>>>24)<=K);){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}if((240&zt)==0){for(Zt=wt,ee=zt,Qt=Ht;zt=(I=T.distcode[Qt+((G&(1<<Zt+ee)-1)>>Zt)])>>>16&255,Ht=65535&I,!(Zt+(wt=I>>>24)<=K);){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}G>>>=Zt,K-=Zt,T.back+=Zt}if(G>>>=wt,K-=wt,T.back+=wt,64&zt){B.msg="invalid distance code",T.mode=30;break}T.offset=Ht,T.extra=15&zt,T.mode=24;case 24:if(T.extra){for(V=T.extra;K<V;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}T.offset+=G&(1<<T.extra)-1,G>>>=T.extra,K-=T.extra,T.back+=T.extra}if(T.offset>T.dmax){B.msg="invalid distance too far back",T.mode=30;break}T.mode=25;case 25:if(H===0)break t;if(nt=j-H,T.offset>nt){if((nt=T.offset-nt)>T.whave&&T.sane){B.msg="invalid distance too far back",T.mode=30;break}yt=nt>T.wnext?(nt-=T.wnext,T.wsize-nt):T.wnext-nt,nt>T.length&&(nt=T.length),Tt=T.window}else Tt=X,yt=et-T.offset,nt=T.length;for(H<nt&&(nt=H),H-=nt,T.length-=nt;X[et++]=Tt[yt++],--nt;);T.length===0&&(T.mode=21);break;case 26:if(H===0)break t;X[et++]=T.length,H--,T.mode=21;break;case 27:if(T.wrap){for(;K<32;){if(rt===0)break t;rt--,G|=$[q++]<<K,K+=8}if(j-=H,B.total_out+=j,T.total+=j,j&&(B.adler=T.check=T.flags?h(T.check,X,j,et-j):f(T.check,X,j,et-j)),j=H,(T.flags?G:_(G))!==T.check){B.msg="incorrect data check",T.mode=30;break}K=G=0}T.mode=28;case 28:if(T.wrap&&T.flags){for(;K<32;){if(rt===0)break t;rt--,G+=$[q++]<<K,K+=8}if(G!==(4294967295&T.total)){B.msg="incorrect length check",T.mode=30;break}K=G=0}T.mode=29;case 29:At=1;break t;case 30:At=-3;break t;case 31:return-4;case 32:default:return v}return B.next_out=et,B.avail_out=H,B.next_in=q,B.avail_in=rt,T.hold=G,T.bits=K,(T.wsize||j!==B.avail_out&&T.mode<30&&(T.mode<27||Y!==4))&&Z(B,B.output,B.next_out,j-B.avail_out)?(T.mode=31,-4):(dt-=B.avail_in,j-=B.avail_out,B.total_in+=dt,B.total_out+=j,T.total+=j,T.wrap&&j&&(B.adler=T.check=T.flags?h(T.check,X,j,B.next_out-j):f(T.check,X,j,B.next_out-j)),B.data_type=T.bits+(T.last?64:0)+(T.mode===12?128:0)+(T.mode===20||T.mode===15?256:0),(dt==0&&j===0||Y===4)&&At===x&&(At=-5),At)},l.inflateEnd=function(B){if(!B||!B.state)return v;var Y=B.state;return Y.window&&(Y.window=null),B.state=null,x},l.inflateGetHeader=function(B,Y){var T;return B&&B.state?(2&(T=B.state).wrap)==0?v:((T.head=Y).done=!1,x):v},l.inflateSetDictionary=function(B,Y){var T,$=Y.length;return B&&B.state?(T=B.state).wrap!==0&&T.mode!==11?v:T.mode===11&&f(1,Y,$,0)!==T.check?-3:Z(B,Y,$,$)?(T.mode=31,-4):(T.havedict=1,x):v},l.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(i,r,l){var u=i("../utils/common"),f=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],h=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],p=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(g,y,x,v,b,E,S,_){var A,C,R,N,k,P,W,U,L,Z=_.bits,B=0,Y=0,T=0,$=0,X=0,q=0,et=0,rt=0,H=0,G=0,K=null,dt=0,j=new u.Buf16(16),nt=new u.Buf16(16),yt=null,Tt=0;for(B=0;B<=15;B++)j[B]=0;for(Y=0;Y<v;Y++)j[y[x+Y]]++;for(X=Z,$=15;1<=$&&j[$]===0;$--);if($<X&&(X=$),$===0)return b[E++]=20971520,b[E++]=20971520,_.bits=1,0;for(T=1;T<$&&j[T]===0;T++);for(X<T&&(X=T),B=rt=1;B<=15;B++)if(rt<<=1,(rt-=j[B])<0)return-1;if(0<rt&&(g===0||$!==1))return-1;for(nt[1]=0,B=1;B<15;B++)nt[B+1]=nt[B]+j[B];for(Y=0;Y<v;Y++)y[x+Y]!==0&&(S[nt[y[x+Y]]++]=Y);if(P=g===0?(K=yt=S,19):g===1?(K=f,dt-=257,yt=h,Tt-=257,256):(K=d,yt=p,-1),B=T,k=E,et=Y=G=0,R=-1,N=(H=1<<(q=X))-1,g===1&&852<H||g===2&&592<H)return 1;for(;;){for(W=B-et,L=S[Y]<P?(U=0,S[Y]):S[Y]>P?(U=yt[Tt+S[Y]],K[dt+S[Y]]):(U=96,0),A=1<<B-et,T=C=1<<q;b[k+(G>>et)+(C-=A)]=W<<24|U<<16|L|0,C!==0;);for(A=1<<B-1;G&A;)A>>=1;if(A!==0?(G&=A-1,G+=A):G=0,Y++,--j[B]==0){if(B===$)break;B=y[x+S[Y]]}if(X<B&&(G&N)!==R){for(et===0&&(et=X),k+=T,rt=1<<(q=B-et);q+et<$&&!((rt-=j[q+et])<=0);)q++,rt<<=1;if(H+=1<<q,g===1&&852<H||g===2&&592<H)return 1;b[R=G&N]=X<<24|q<<16|k-E|0}}return G!==0&&(b[k+G]=B-et<<24|64<<16|0),_.bits=X,0}},{"../utils/common":41}],51:[function(i,r,l){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(i,r,l){var u=i("../utils/common"),f=0,h=1;function d(I){for(var tt=I.length;0<=--tt;)I[tt]=0}var p=0,g=29,y=256,x=y+1+g,v=30,b=19,E=2*x+1,S=15,_=16,A=7,C=256,R=16,N=17,k=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],W=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],U=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],L=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Z=new Array(2*(x+2));d(Z);var B=new Array(2*v);d(B);var Y=new Array(512);d(Y);var T=new Array(256);d(T);var $=new Array(g);d($);var X,q,et,rt=new Array(v);function H(I,tt,pt,xt,st){this.static_tree=I,this.extra_bits=tt,this.extra_base=pt,this.elems=xt,this.max_length=st,this.has_stree=I&&I.length}function G(I,tt){this.dyn_tree=I,this.max_code=0,this.stat_desc=tt}function K(I){return I<256?Y[I]:Y[256+(I>>>7)]}function dt(I,tt){I.pending_buf[I.pending++]=255&tt,I.pending_buf[I.pending++]=tt>>>8&255}function j(I,tt,pt){I.bi_valid>_-pt?(I.bi_buf|=tt<<I.bi_valid&65535,dt(I,I.bi_buf),I.bi_buf=tt>>_-I.bi_valid,I.bi_valid+=pt-_):(I.bi_buf|=tt<<I.bi_valid&65535,I.bi_valid+=pt)}function nt(I,tt,pt){j(I,pt[2*tt],pt[2*tt+1])}function yt(I,tt){for(var pt=0;pt|=1&I,I>>>=1,pt<<=1,0<--tt;);return pt>>>1}function Tt(I,tt,pt){var xt,st,z=new Array(S+1),D=0;for(xt=1;xt<=S;xt++)z[xt]=D=D+pt[xt-1]<<1;for(st=0;st<=tt;st++){var Q=I[2*st+1];Q!==0&&(I[2*st]=yt(z[Q]++,Q))}}function wt(I){var tt;for(tt=0;tt<x;tt++)I.dyn_ltree[2*tt]=0;for(tt=0;tt<v;tt++)I.dyn_dtree[2*tt]=0;for(tt=0;tt<b;tt++)I.bl_tree[2*tt]=0;I.dyn_ltree[2*C]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function zt(I){8<I.bi_valid?dt(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function Ht(I,tt,pt,xt){var st=2*tt,z=2*pt;return I[st]<I[z]||I[st]===I[z]&&xt[tt]<=xt[pt]}function Zt(I,tt,pt){for(var xt=I.heap[pt],st=pt<<1;st<=I.heap_len&&(st<I.heap_len&&Ht(tt,I.heap[st+1],I.heap[st],I.depth)&&st++,!Ht(tt,xt,I.heap[st],I.depth));)I.heap[pt]=I.heap[st],pt=st,st<<=1;I.heap[pt]=xt}function ee(I,tt,pt){var xt,st,z,D,Q=0;if(I.last_lit!==0)for(;xt=I.pending_buf[I.d_buf+2*Q]<<8|I.pending_buf[I.d_buf+2*Q+1],st=I.pending_buf[I.l_buf+Q],Q++,xt===0?nt(I,st,tt):(nt(I,(z=T[st])+y+1,tt),(D=P[z])!==0&&j(I,st-=$[z],D),nt(I,z=K(--xt),pt),(D=W[z])!==0&&j(I,xt-=rt[z],D)),Q<I.last_lit;);nt(I,C,tt)}function Qt(I,tt){var pt,xt,st,z=tt.dyn_tree,D=tt.stat_desc.static_tree,Q=tt.stat_desc.has_stree,ft=tt.stat_desc.elems,Mt=-1;for(I.heap_len=0,I.heap_max=E,pt=0;pt<ft;pt++)z[2*pt]!==0?(I.heap[++I.heap_len]=Mt=pt,I.depth[pt]=0):z[2*pt+1]=0;for(;I.heap_len<2;)z[2*(st=I.heap[++I.heap_len]=Mt<2?++Mt:0)]=1,I.depth[st]=0,I.opt_len--,Q&&(I.static_len-=D[2*st+1]);for(tt.max_code=Mt,pt=I.heap_len>>1;1<=pt;pt--)Zt(I,z,pt);for(st=ft;pt=I.heap[1],I.heap[1]=I.heap[I.heap_len--],Zt(I,z,1),xt=I.heap[1],I.heap[--I.heap_max]=pt,I.heap[--I.heap_max]=xt,z[2*st]=z[2*pt]+z[2*xt],I.depth[st]=(I.depth[pt]>=I.depth[xt]?I.depth[pt]:I.depth[xt])+1,z[2*pt+1]=z[2*xt+1]=st,I.heap[1]=st++,Zt(I,z,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],function(mt,Ft){var Bt,qt,Jt,Rt,kt,ne,Kt=Ft.dyn_tree,It=Ft.max_code,re=Ft.stat_desc.static_tree,at=Ft.stat_desc.has_stree,Gt=Ft.stat_desc.extra_bits,Nt=Ft.stat_desc.extra_base,Xt=Ft.stat_desc.max_length,Ot=0;for(Rt=0;Rt<=S;Rt++)mt.bl_count[Rt]=0;for(Kt[2*mt.heap[mt.heap_max]+1]=0,Bt=mt.heap_max+1;Bt<E;Bt++)Xt<(Rt=Kt[2*Kt[2*(qt=mt.heap[Bt])+1]+1]+1)&&(Rt=Xt,Ot++),Kt[2*qt+1]=Rt,It<qt||(mt.bl_count[Rt]++,kt=0,Nt<=qt&&(kt=Gt[qt-Nt]),ne=Kt[2*qt],mt.opt_len+=ne*(Rt+kt),at&&(mt.static_len+=ne*(re[2*qt+1]+kt)));if(Ot!==0){do{for(Rt=Xt-1;mt.bl_count[Rt]===0;)Rt--;mt.bl_count[Rt]--,mt.bl_count[Rt+1]+=2,mt.bl_count[Xt]--,Ot-=2}while(0<Ot);for(Rt=Xt;Rt!==0;Rt--)for(qt=mt.bl_count[Rt];qt!==0;)It<(Jt=mt.heap[--Bt])||(Kt[2*Jt+1]!==Rt&&(mt.opt_len+=(Rt-Kt[2*Jt+1])*Kt[2*Jt],Kt[2*Jt+1]=Rt),qt--)}}(I,tt),Tt(z,Mt,I.bl_count)}function M(I,tt,pt){var xt,st,z=-1,D=tt[1],Q=0,ft=7,Mt=4;for(D===0&&(ft=138,Mt=3),tt[2*(pt+1)+1]=65535,xt=0;xt<=pt;xt++)st=D,D=tt[2*(xt+1)+1],++Q<ft&&st===D||(Q<Mt?I.bl_tree[2*st]+=Q:st!==0?(st!==z&&I.bl_tree[2*st]++,I.bl_tree[2*R]++):Q<=10?I.bl_tree[2*N]++:I.bl_tree[2*k]++,z=st,Mt=(Q=0)===D?(ft=138,3):st===D?(ft=6,3):(ft=7,4))}function At(I,tt,pt){var xt,st,z=-1,D=tt[1],Q=0,ft=7,Mt=4;for(D===0&&(ft=138,Mt=3),xt=0;xt<=pt;xt++)if(st=D,D=tt[2*(xt+1)+1],!(++Q<ft&&st===D)){if(Q<Mt)for(;nt(I,st,I.bl_tree),--Q!=0;);else st!==0?(st!==z&&(nt(I,st,I.bl_tree),Q--),nt(I,R,I.bl_tree),j(I,Q-3,2)):Q<=10?(nt(I,N,I.bl_tree),j(I,Q-3,3)):(nt(I,k,I.bl_tree),j(I,Q-11,7));z=st,Mt=(Q=0)===D?(ft=138,3):st===D?(ft=6,3):(ft=7,4)}}d(rt);var ot=!1;function V(I,tt,pt,xt){j(I,(p<<1)+(xt?1:0),3),function(st,z,D,Q){zt(st),dt(st,D),dt(st,~D),u.arraySet(st.pending_buf,st.window,z,D,st.pending),st.pending+=D}(I,tt,pt)}l._tr_init=function(I){ot||(function(){var tt,pt,xt,st,z,D=new Array(S+1);for(st=xt=0;st<g-1;st++)for($[st]=xt,tt=0;tt<1<<P[st];tt++)T[xt++]=st;for(T[xt-1]=st,st=z=0;st<16;st++)for(rt[st]=z,tt=0;tt<1<<W[st];tt++)Y[z++]=st;for(z>>=7;st<v;st++)for(rt[st]=z<<7,tt=0;tt<1<<W[st]-7;tt++)Y[256+z++]=st;for(pt=0;pt<=S;pt++)D[pt]=0;for(tt=0;tt<=143;)Z[2*tt+1]=8,tt++,D[8]++;for(;tt<=255;)Z[2*tt+1]=9,tt++,D[9]++;for(;tt<=279;)Z[2*tt+1]=7,tt++,D[7]++;for(;tt<=287;)Z[2*tt+1]=8,tt++,D[8]++;for(Tt(Z,x+1,D),tt=0;tt<v;tt++)B[2*tt+1]=5,B[2*tt]=yt(tt,5);X=new H(Z,P,y+1,x,S),q=new H(B,W,0,v,S),et=new H(new Array(0),U,0,b,A)}(),ot=!0),I.l_desc=new G(I.dyn_ltree,X),I.d_desc=new G(I.dyn_dtree,q),I.bl_desc=new G(I.bl_tree,et),I.bi_buf=0,I.bi_valid=0,wt(I)},l._tr_stored_block=V,l._tr_flush_block=function(I,tt,pt,xt){var st,z,D=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=function(Q){var ft,Mt=4093624447;for(ft=0;ft<=31;ft++,Mt>>>=1)if(1&Mt&&Q.dyn_ltree[2*ft]!==0)return f;if(Q.dyn_ltree[18]!==0||Q.dyn_ltree[20]!==0||Q.dyn_ltree[26]!==0)return h;for(ft=32;ft<y;ft++)if(Q.dyn_ltree[2*ft]!==0)return h;return f}(I)),Qt(I,I.l_desc),Qt(I,I.d_desc),D=function(Q){var ft;for(M(Q,Q.dyn_ltree,Q.l_desc.max_code),M(Q,Q.dyn_dtree,Q.d_desc.max_code),Qt(Q,Q.bl_desc),ft=b-1;3<=ft&&Q.bl_tree[2*L[ft]+1]===0;ft--);return Q.opt_len+=3*(ft+1)+5+5+4,ft}(I),st=I.opt_len+3+7>>>3,(z=I.static_len+3+7>>>3)<=st&&(st=z)):st=z=pt+5,pt+4<=st&&tt!==-1?V(I,tt,pt,xt):I.strategy===4||z===st?(j(I,2+(xt?1:0),3),ee(I,Z,B)):(j(I,4+(xt?1:0),3),function(Q,ft,Mt,mt){var Ft;for(j(Q,ft-257,5),j(Q,Mt-1,5),j(Q,mt-4,4),Ft=0;Ft<mt;Ft++)j(Q,Q.bl_tree[2*L[Ft]+1],3);At(Q,Q.dyn_ltree,ft-1),At(Q,Q.dyn_dtree,Mt-1)}(I,I.l_desc.max_code+1,I.d_desc.max_code+1,D+1),ee(I,I.dyn_ltree,I.dyn_dtree)),wt(I),xt&&zt(I)},l._tr_tally=function(I,tt,pt){return I.pending_buf[I.d_buf+2*I.last_lit]=tt>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&tt,I.pending_buf[I.l_buf+I.last_lit]=255&pt,I.last_lit++,tt===0?I.dyn_ltree[2*pt]++:(I.matches++,tt--,I.dyn_ltree[2*(T[pt]+y+1)]++,I.dyn_dtree[2*K(tt)]++),I.last_lit===I.lit_bufsize-1},l._tr_align=function(I){j(I,2,3),nt(I,C,Z),function(tt){tt.bi_valid===16?(dt(tt,tt.bi_buf),tt.bi_buf=0,tt.bi_valid=0):8<=tt.bi_valid&&(tt.pending_buf[tt.pending++]=255&tt.bi_buf,tt.bi_buf>>=8,tt.bi_valid-=8)}(I)}},{"../utils/common":41}],53:[function(i,r,l){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(i,r,l){(function(u){(function(f,h){if(!f.setImmediate){var d,p,g,y,x=1,v={},b=!1,E=f.document,S=Object.getPrototypeOf&&Object.getPrototypeOf(f);S=S&&S.setTimeout?S:f,d={}.toString.call(f.process)==="[object process]"?function(R){process.nextTick(function(){A(R)})}:function(){if(f.postMessage&&!f.importScripts){var R=!0,N=f.onmessage;return f.onmessage=function(){R=!1},f.postMessage("","*"),f.onmessage=N,R}}()?(y="setImmediate$"+Math.random()+"$",f.addEventListener?f.addEventListener("message",C,!1):f.attachEvent("onmessage",C),function(R){f.postMessage(y+R,"*")}):f.MessageChannel?((g=new MessageChannel).port1.onmessage=function(R){A(R.data)},function(R){g.port2.postMessage(R)}):E&&"onreadystatechange"in E.createElement("script")?(p=E.documentElement,function(R){var N=E.createElement("script");N.onreadystatechange=function(){A(R),N.onreadystatechange=null,p.removeChild(N),N=null},p.appendChild(N)}):function(R){setTimeout(A,0,R)},S.setImmediate=function(R){typeof R!="function"&&(R=new Function(""+R));for(var N=new Array(arguments.length-1),k=0;k<N.length;k++)N[k]=arguments[k+1];var P={callback:R,args:N};return v[x]=P,d(x),x++},S.clearImmediate=_}function _(R){delete v[R]}function A(R){if(b)setTimeout(A,0,R);else{var N=v[R];if(N){b=!0;try{(function(k){var P=k.callback,W=k.args;switch(W.length){case 0:P();break;case 1:P(W[0]);break;case 2:P(W[0],W[1]);break;case 3:P(W[0],W[1],W[2]);break;default:P.apply(h,W)}})(N)}finally{_(R),b=!1}}}}function C(R){R.source===f&&typeof R.data=="string"&&R.data.indexOf(y)===0&&A(+R.data.slice(y.length))}})(typeof self>"u"?u===void 0?this:u:self)}).call(this,typeof Ia<"u"?Ia:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(If)),If.exports}var ax=ix();const rx=c0(ax);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="177",sx=0,ig=1,ox=2,f0=1,lx=2,Ji=3,ka=0,Fn=1,$i=2,Fa=0,ms=1,ag=2,rg=3,sg=4,ux=5,_r=100,cx=101,fx=102,hx=103,dx=104,px=200,mx=201,_x=202,gx=203,vh=204,yh=205,vx=206,yx=207,xx=208,Sx=209,Mx=210,Ex=211,bx=212,Tx=213,Ax=214,xh=0,Sh=1,Mh=2,vs=3,Eh=4,bh=5,Th=6,Ah=7,od=0,wx=1,Rx=2,Ha=0,Cx=1,Dx=2,Ux=3,Lx=4,Nx=5,Ox=6,Px=7,h0=300,ys=301,xs=302,wh=303,Rh=304,Ru=306,Ch=1e3,vr=1001,Dh=1002,pi=1003,zx=1004,jl=1005,Mi=1006,Ff=1007,yr=1008,Ti=1009,d0=1010,p0=1011,Ro=1012,ld=1013,xr=1014,ta=1015,Lo=1016,ud=1017,cd=1018,Co=1020,m0=35902,_0=1021,g0=1022,di=1023,Do=1026,Uo=1027,v0=1028,fd=1029,y0=1030,hd=1031,dd=1033,yu=33776,xu=33777,Su=33778,Mu=33779,Uh=35840,Lh=35841,Nh=35842,Oh=35843,Ph=36196,zh=37492,Bh=37496,Ih=37808,Fh=37809,Hh=37810,kh=37811,Gh=37812,Vh=37813,Xh=37814,Wh=37815,qh=37816,Yh=37817,Zh=37818,jh=37819,Kh=37820,Qh=37821,Eu=36492,Jh=36494,$h=36495,x0=36283,td=36284,ed=36285,nd=36286,Bx=3200,Ix=3201,S0=0,Fx=1,Ba="",ri="srgb",Ss="srgb-linear",Tu="linear",Fe="srgb",$r=7680,og=519,Hx=512,kx=513,Gx=514,M0=515,Vx=516,Xx=517,Wx=518,qx=519,lg=35044,ug="300 es",ea=2e3,Au=2001;class bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,id=180/Math.PI;function No(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function Yx(o,e){return(o%e+e)%e}function kf(o,e,i){return(1-i)*o+i*e}function So(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,i=0){Le.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*l+e.x,this.y=u*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,f,h){let d=r[l+0],p=r[l+1],g=r[l+2],y=r[l+3];const x=u[f+0],v=u[f+1],b=u[f+2],E=u[f+3];if(h===0){e[i+0]=d,e[i+1]=p,e[i+2]=g,e[i+3]=y;return}if(h===1){e[i+0]=x,e[i+1]=v,e[i+2]=b,e[i+3]=E;return}if(y!==E||d!==x||p!==v||g!==b){let S=1-h;const _=d*x+p*v+g*b+y*E,A=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const N=Math.sqrt(C),k=Math.atan2(N,_*A);S=Math.sin(S*k)/N,h=Math.sin(h*k)/N}const R=h*A;if(d=d*S+x*R,p=p*S+v*R,g=g*S+b*R,y=y*S+E*R,S===1-h){const N=1/Math.sqrt(d*d+p*p+g*g+y*y);d*=N,p*=N,g*=N,y*=N}}e[i]=d,e[i+1]=p,e[i+2]=g,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,f){const h=r[l],d=r[l+1],p=r[l+2],g=r[l+3],y=u[f],x=u[f+1],v=u[f+2],b=u[f+3];return e[i]=h*b+g*y+d*v-p*x,e[i+1]=d*b+g*x+p*y-h*v,e[i+2]=p*b+g*v+h*x-d*y,e[i+3]=g*b-h*y-d*x-p*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,f=e._order,h=Math.cos,d=Math.sin,p=h(r/2),g=h(l/2),y=h(u/2),x=d(r/2),v=d(l/2),b=d(u/2);switch(f){case"XYZ":this._x=x*g*y+p*v*b,this._y=p*v*y-x*g*b,this._z=p*g*b+x*v*y,this._w=p*g*y-x*v*b;break;case"YXZ":this._x=x*g*y+p*v*b,this._y=p*v*y-x*g*b,this._z=p*g*b-x*v*y,this._w=p*g*y+x*v*b;break;case"ZXY":this._x=x*g*y-p*v*b,this._y=p*v*y+x*g*b,this._z=p*g*b+x*v*y,this._w=p*g*y-x*v*b;break;case"ZYX":this._x=x*g*y-p*v*b,this._y=p*v*y+x*g*b,this._z=p*g*b-x*v*y,this._w=p*g*y+x*v*b;break;case"YZX":this._x=x*g*y+p*v*b,this._y=p*v*y+x*g*b,this._z=p*g*b-x*v*y,this._w=p*g*y-x*v*b;break;case"XZY":this._x=x*g*y-p*v*b,this._y=p*v*y-x*g*b,this._z=p*g*b+x*v*y,this._w=p*g*y+x*v*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],f=i[1],h=i[5],d=i[9],p=i[2],g=i[6],y=i[10],x=r+h+y;if(x>0){const v=.5/Math.sqrt(x+1);this._w=.25/v,this._x=(g-d)*v,this._y=(u-p)*v,this._z=(f-l)*v}else if(r>h&&r>y){const v=2*Math.sqrt(1+r-h-y);this._w=(g-d)/v,this._x=.25*v,this._y=(l+f)/v,this._z=(u+p)/v}else if(h>y){const v=2*Math.sqrt(1+h-r-y);this._w=(u-p)/v,this._x=(l+f)/v,this._y=.25*v,this._z=(d+g)/v}else{const v=2*Math.sqrt(1+y-r-h);this._w=(f-l)/v,this._x=(u+p)/v,this._y=(d+g)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,f=e._w,h=i._x,d=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-u*d,this._y=l*g+f*d+u*h-r*p,this._z=u*g+f*p+r*d-l*h,this._w=f*g-r*h-l*d-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,f=this._w;let h=f*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const d=1-h*h;if(d<=Number.EPSILON){const v=1-i;return this._w=v*f+i*this._w,this._x=v*r+i*this._x,this._y=v*l+i*this._y,this._z=v*u+i*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),y=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*y+this._w*x,this._x=r*y+this._x*x,this._y=l*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(e=0,i=0,r=0){ct.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(cg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(cg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,f=e.y,h=e.z,d=e.w,p=2*(f*l-h*r),g=2*(h*i-u*l),y=2*(u*r-f*i);return this.x=i+d*p+f*y-h*g,this.y=r+d*g+h*p-u*y,this.z=l+d*y+u*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,f=i.x,h=i.y,d=i.z;return this.x=l*d-u*h,this.y=u*f-r*d,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new ct,cg=new Oo;class pe{constructor(e,i,r,l,u,f,h,d,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,h,d,p)}set(e,i,r,l,u,f,h,d,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=d,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],h=r[3],d=r[6],p=r[1],g=r[4],y=r[7],x=r[2],v=r[5],b=r[8],E=l[0],S=l[3],_=l[6],A=l[1],C=l[4],R=l[7],N=l[2],k=l[5],P=l[8];return u[0]=f*E+h*A+d*N,u[3]=f*S+h*C+d*k,u[6]=f*_+h*R+d*P,u[1]=p*E+g*A+y*N,u[4]=p*S+g*C+y*k,u[7]=p*_+g*R+y*P,u[2]=x*E+v*A+b*N,u[5]=x*S+v*C+b*k,u[8]=x*_+v*R+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],d=e[6],p=e[7],g=e[8];return i*f*g-i*h*p-r*u*g+r*h*d+l*u*p-l*f*d}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],d=e[6],p=e[7],g=e[8],y=g*f-h*p,x=h*d-g*u,v=p*u-f*d,b=i*y+r*x+l*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=y*E,e[1]=(l*p-g*r)*E,e[2]=(h*r-l*f)*E,e[3]=x*E,e[4]=(g*i-l*d)*E,e[5]=(l*u-h*i)*E,e[6]=v*E,e[7]=(r*d-p*i)*E,e[8]=(f*i-r*u)*E,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,f,h){const d=Math.cos(u),p=Math.sin(u);return this.set(r*d,r*p,-r*(d*f+p*h)+f+e,-l*p,l*d,-l*(-p*f+d*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Vf.makeScale(e,i)),this}rotate(e){return this.premultiply(Vf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Vf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vf=new pe;function E0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zx(){const o=wu("canvas");return o.style.display="block",o}const fg={};function _s(o){o in fg||(fg[o]=!0,console.warn(o))}function jx(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function Kx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hg=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dg=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jx(){const o={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Fe&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(l.r=gs(l.r),l.g=gs(l.g),l.b=gs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ba?Tu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ss]:{primaries:e,whitePoint:r,transfer:Tu,toXYZ:hg,fromXYZ:dg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Fe,toXYZ:hg,fromXYZ:dg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const Re=Jx();function na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function gs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ts;class $x{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ts===void 0&&(ts=wu("canvas")),ts.width=e.width,ts.height=e.height;const l=ts.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ts}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=wu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=na(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tS=0;class pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(Xf(l[f].image)):u.push(Xf(l[f]))}else u=Xf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?$x.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eS=0;const Wf=new ct;class Hn extends bs{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=vr,l=vr,u=Mi,f=yr,h=di,d=Ti,p=Hn.DEFAULT_ANISOTROPY,g=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=No(),this.name="",this.source=new pd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wf).x}get height(){return this.source.getSize(Wf).y}get depth(){return this.source.getSize(Wf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=h0;Hn.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,i=0,r=0,l=1){He.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const d=e.elements,p=d[0],g=d[4],y=d[8],x=d[1],v=d[5],b=d[9],E=d[2],S=d[6],_=d[10];if(Math.abs(g-x)<.01&&Math.abs(y-E)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(y+E)<.1&&Math.abs(b+S)<.1&&Math.abs(p+v+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,R=(v+1)/2,N=(_+1)/2,k=(g+x)/4,P=(y+E)/4,W=(b+S)/4;return C>R&&C>N?C<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(C),l=k/r,u=P/r):R>N?R<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(R),r=k/l,u=W/l):N<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(N),r=P/u,l=W/u),this.set(r,l,u,i),this}let A=Math.sqrt((S-b)*(S-b)+(y-E)*(y-E)+(x-g)*(x-g));return Math.abs(A)<.001&&(A=1),this.x=(S-b)/A,this.y=(y-E)/A,this.z=(x-g)/A,this.w=Math.acos((p+v+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nS extends bs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new He(0,0,e,i),this.scissorTest=!1,this.viewport=new He(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Hn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new pd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends nS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class b0 extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iS extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=new ct(1/0,1/0,1/0),i=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,ui):ui.fromBufferAttribute(u,f),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Kl.copy(r.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Ql.subVectors(this.max,Mo),es.subVectors(e.a,Mo),ns.subVectors(e.b,Mo),is.subVectors(e.c,Mo),Ca.subVectors(ns,es),Da.subVectors(is,ns),lr.subVectors(es,is);let i=[0,-Ca.z,Ca.y,0,-Da.z,Da.y,0,-lr.z,lr.y,Ca.z,0,-Ca.x,Da.z,0,-Da.x,lr.z,0,-lr.x,-Ca.y,Ca.x,0,-Da.y,Da.x,0,-lr.y,lr.x,0];return!qf(i,es,ns,is,Ql)||(i=[1,0,0,0,1,0,0,0,1],!qf(i,es,ns,is,Ql))?!1:(Jl.crossVectors(Ca,Da),i=[Jl.x,Jl.y,Jl.z],qf(i,es,ns,is,Ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],ui=new ct,Kl=new Po,es=new ct,ns=new ct,is=new ct,Ca=new ct,Da=new ct,lr=new ct,Mo=new ct,Ql=new ct,Jl=new ct,ur=new ct;function qf(o,e,i,r,l){for(let u=0,f=o.length-3;u<=f;u+=3){ur.fromArray(o,u);const h=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),d=e.dot(ur),p=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const aS=new Po,Eo=new ct,Yf=new ct;class md{constructor(e=new ct,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):aS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const i=Eo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Eo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Yf)),this.expandByPoint(Eo.copy(e.center).sub(Yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zi=new ct,Zf=new ct,$l=new ct,Ua=new ct,jf=new ct,tu=new ct,Kf=new ct;class rS{constructor(e=new ct,i=new ct(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Zi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),$l.copy(i).sub(e).normalize(),Ua.copy(this.origin).sub(Zf);const u=e.distanceTo(i)*.5,f=-this.direction.dot($l),h=Ua.dot(this.direction),d=-Ua.dot($l),p=Ua.lengthSq(),g=Math.abs(1-f*f);let y,x,v,b;if(g>0)if(y=f*d-h,x=f*h-d,b=u*g,y>=0)if(x>=-b)if(x<=b){const E=1/g;y*=E,x*=E,v=y*(y+f*x+2*h)+x*(f*y+x+2*d)+p}else x=u,y=Math.max(0,-(f*x+h)),v=-y*y+x*(x+2*d)+p;else x=-u,y=Math.max(0,-(f*x+h)),v=-y*y+x*(x+2*d)+p;else x<=-b?(y=Math.max(0,-(-f*u+h)),x=y>0?-u:Math.min(Math.max(-u,-d),u),v=-y*y+x*(x+2*d)+p):x<=b?(y=0,x=Math.min(Math.max(-u,-d),u),v=x*(x+2*d)+p):(y=Math.max(0,-(f*u+h)),x=y>0?u:Math.min(Math.max(-u,-d),u),v=-y*y+x*(x+2*d)+p);else x=f>0?-u:u,y=Math.max(0,-(f*x+h)),v=-y*y+x*(x+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Zf).addScaledVector($l,x),v}intersectSphere(e,i){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=r-f,d=r+f;return d<0?null:h<0?this.at(d,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,f,h,d;const p=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),y>=0?(h=(e.min.z-x.z)*y,d=(e.max.z-x.z)*y):(h=(e.max.z-x.z)*y,d=(e.min.z-x.z)*y),r>d||h>l)||((h>r||r!==r)&&(r=h),(d<l||l!==l)&&(l=d),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,i,r,l,u){jf.subVectors(i,e),tu.subVectors(r,e),Kf.crossVectors(jf,tu);let f=this.direction.dot(Kf),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ua.subVectors(this.origin,e);const d=h*this.direction.dot(tu.crossVectors(Ua,tu));if(d<0)return null;const p=h*this.direction.dot(jf.cross(Ua));if(p<0||d+p>f)return null;const g=-h*Ua.dot(Kf);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,i,r,l,u,f,h,d,p,g,y,x,v,b,E,S){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,h,d,p,g,y,x,v,b,E,S)}set(e,i,r,l,u,f,h,d,p,g,y,x,v,b,E,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=f,_[9]=h,_[13]=d,_[2]=p,_[6]=g,_[10]=y,_[14]=x,_[3]=v,_[7]=b,_[11]=E,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/as.setFromMatrixColumn(e,0).length(),u=1/as.setFromMatrixColumn(e,1).length(),f=1/as.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,f=Math.cos(r),h=Math.sin(r),d=Math.cos(l),p=Math.sin(l),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=f*g,v=f*y,b=h*g,E=h*y;i[0]=d*g,i[4]=-d*y,i[8]=p,i[1]=v+b*p,i[5]=x-E*p,i[9]=-h*d,i[2]=E-x*p,i[6]=b+v*p,i[10]=f*d}else if(e.order==="YXZ"){const x=d*g,v=d*y,b=p*g,E=p*y;i[0]=x+E*h,i[4]=b*h-v,i[8]=f*p,i[1]=f*y,i[5]=f*g,i[9]=-h,i[2]=v*h-b,i[6]=E+x*h,i[10]=f*d}else if(e.order==="ZXY"){const x=d*g,v=d*y,b=p*g,E=p*y;i[0]=x-E*h,i[4]=-f*y,i[8]=b+v*h,i[1]=v+b*h,i[5]=f*g,i[9]=E-x*h,i[2]=-f*p,i[6]=h,i[10]=f*d}else if(e.order==="ZYX"){const x=f*g,v=f*y,b=h*g,E=h*y;i[0]=d*g,i[4]=b*p-v,i[8]=x*p+E,i[1]=d*y,i[5]=E*p+x,i[9]=v*p-b,i[2]=-p,i[6]=h*d,i[10]=f*d}else if(e.order==="YZX"){const x=f*d,v=f*p,b=h*d,E=h*p;i[0]=d*g,i[4]=E-x*y,i[8]=b*y+v,i[1]=y,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=v*y+b,i[10]=x-E*y}else if(e.order==="XZY"){const x=f*d,v=f*p,b=h*d,E=h*p;i[0]=d*g,i[4]=-y,i[8]=p*g,i[1]=x*y+E,i[5]=f*g,i[9]=v*y-b,i[2]=b*y-v,i[6]=h*g,i[10]=E*y+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sS,e,oS)}lookAt(e,i,r){const l=this.elements;return jn.subVectors(e,i),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),La.crossVectors(r,jn),La.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),La.crossVectors(r,jn)),La.normalize(),eu.crossVectors(jn,La),l[0]=La.x,l[4]=eu.x,l[8]=jn.x,l[1]=La.y,l[5]=eu.y,l[9]=jn.y,l[2]=La.z,l[6]=eu.z,l[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],h=r[4],d=r[8],p=r[12],g=r[1],y=r[5],x=r[9],v=r[13],b=r[2],E=r[6],S=r[10],_=r[14],A=r[3],C=r[7],R=r[11],N=r[15],k=l[0],P=l[4],W=l[8],U=l[12],L=l[1],Z=l[5],B=l[9],Y=l[13],T=l[2],$=l[6],X=l[10],q=l[14],et=l[3],rt=l[7],H=l[11],G=l[15];return u[0]=f*k+h*L+d*T+p*et,u[4]=f*P+h*Z+d*$+p*rt,u[8]=f*W+h*B+d*X+p*H,u[12]=f*U+h*Y+d*q+p*G,u[1]=g*k+y*L+x*T+v*et,u[5]=g*P+y*Z+x*$+v*rt,u[9]=g*W+y*B+x*X+v*H,u[13]=g*U+y*Y+x*q+v*G,u[2]=b*k+E*L+S*T+_*et,u[6]=b*P+E*Z+S*$+_*rt,u[10]=b*W+E*B+S*X+_*H,u[14]=b*U+E*Y+S*q+_*G,u[3]=A*k+C*L+R*T+N*et,u[7]=A*P+C*Z+R*$+N*rt,u[11]=A*W+C*B+R*X+N*H,u[15]=A*U+C*Y+R*q+N*G,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],f=e[1],h=e[5],d=e[9],p=e[13],g=e[2],y=e[6],x=e[10],v=e[14],b=e[3],E=e[7],S=e[11],_=e[15];return b*(+u*d*y-l*p*y-u*h*x+r*p*x+l*h*v-r*d*v)+E*(+i*d*v-i*p*x+u*f*x-l*f*v+l*p*g-u*d*g)+S*(+i*p*y-i*h*v-u*f*y+r*f*v+u*h*g-r*p*g)+_*(-l*h*g-i*d*y+i*h*x+l*f*y-r*f*x+r*d*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],d=e[6],p=e[7],g=e[8],y=e[9],x=e[10],v=e[11],b=e[12],E=e[13],S=e[14],_=e[15],A=y*S*p-E*x*p+E*d*v-h*S*v-y*d*_+h*x*_,C=b*x*p-g*S*p-b*d*v+f*S*v+g*d*_-f*x*_,R=g*E*p-b*y*p+b*h*v-f*E*v-g*h*_+f*y*_,N=b*y*d-g*E*d-b*h*x+f*E*x+g*h*S-f*y*S,k=i*A+r*C+l*R+u*N;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/k;return e[0]=A*P,e[1]=(E*x*u-y*S*u-E*l*v+r*S*v+y*l*_-r*x*_)*P,e[2]=(h*S*u-E*d*u+E*l*p-r*S*p-h*l*_+r*d*_)*P,e[3]=(y*d*u-h*x*u-y*l*p+r*x*p+h*l*v-r*d*v)*P,e[4]=C*P,e[5]=(g*S*u-b*x*u+b*l*v-i*S*v-g*l*_+i*x*_)*P,e[6]=(b*d*u-f*S*u-b*l*p+i*S*p+f*l*_-i*d*_)*P,e[7]=(f*x*u-g*d*u+g*l*p-i*x*p-f*l*v+i*d*v)*P,e[8]=R*P,e[9]=(b*y*u-g*E*u-b*r*v+i*E*v+g*r*_-i*y*_)*P,e[10]=(f*E*u-b*h*u+b*r*p-i*E*p-f*r*_+i*h*_)*P,e[11]=(g*h*u-f*y*u-g*r*p+i*y*p+f*r*v-i*h*v)*P,e[12]=N*P,e[13]=(g*E*l-b*y*l+b*r*x-i*E*x-g*r*S+i*y*S)*P,e[14]=(b*h*l-f*E*l-b*r*d+i*E*d+f*r*S-i*h*S)*P,e[15]=(f*y*l-g*h*l+g*r*d-i*y*d-f*r*x+i*h*x)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=e.x,h=e.y,d=e.z,p=u*f,g=u*h;return this.set(p*f+r,p*h-l*d,p*d+l*h,0,p*h+l*d,g*h+r,g*d-l*f,0,p*d-l*h,g*d+l*f,u*d*d+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,f){return this.set(1,r,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,f=i._y,h=i._z,d=i._w,p=u+u,g=f+f,y=h+h,x=u*p,v=u*g,b=u*y,E=f*g,S=f*y,_=h*y,A=d*p,C=d*g,R=d*y,N=r.x,k=r.y,P=r.z;return l[0]=(1-(E+_))*N,l[1]=(v+R)*N,l[2]=(b-C)*N,l[3]=0,l[4]=(v-R)*k,l[5]=(1-(x+_))*k,l[6]=(S+A)*k,l[7]=0,l[8]=(b+C)*P,l[9]=(S-A)*P,l[10]=(1-(x+E))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=as.set(l[0],l[1],l[2]).length();const f=as.set(l[4],l[5],l[6]).length(),h=as.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],ci.copy(this);const p=1/u,g=1/f,y=1/h;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=g,ci.elements[5]*=g,ci.elements[6]*=g,ci.elements[8]*=y,ci.elements[9]*=y,ci.elements[10]*=y,i.setFromRotationMatrix(ci),r.x=u,r.y=f,r.z=h,this}makePerspective(e,i,r,l,u,f,h=ea){const d=this.elements,p=2*u/(i-e),g=2*u/(r-l),y=(i+e)/(i-e),x=(r+l)/(r-l);let v,b;if(h===ea)v=-(f+u)/(f-u),b=-2*f*u/(f-u);else if(h===Au)v=-f/(f-u),b=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=y,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=v,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,l,u,f,h=ea){const d=this.elements,p=1/(i-e),g=1/(r-l),y=1/(f-u),x=(i+e)*p,v=(r+l)*g;let b,E;if(h===ea)b=(f+u)*y,E=-2*y;else if(h===Au)b=u*y,E=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-x,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-v,d[2]=0,d[6]=0,d[10]=E,d[14]=-b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const as=new ct,ci=new Ze,sS=new ct(0,0,0),oS=new ct(1,1,1),La=new ct,eu=new ct,jn=new ct,pg=new Ze,mg=new Oo;class Ai{constructor(e=0,i=0,r=0,l=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],p=l[5],g=l[9],y=l[2],x=l[6],v=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,v),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,v),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,v),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(d,u));break;case"ZYX":this._y=Math.asin(-Ee(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,v),this._z=Math.atan2(d,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(h,v));break;case"XZY":this._z=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return pg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return mg.setFromEuler(this),this.setFromQuaternion(mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class T0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lS=0;const _g=new ct,rs=new Oo,ji=new Ze,nu=new ct,bo=new ct,uS=new ct,cS=new Oo,gg=new ct(1,0,0),vg=new ct(0,1,0),yg=new ct(0,0,1),xg={type:"added"},fS={type:"removed"},ss={type:"childadded",child:null},Qf={type:"childremoved",child:null};class Rn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new ct,i=new Ai,r=new Oo,l=new ct(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new pe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new T0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return rs.setFromAxisAngle(e,i),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,i){return rs.setFromAxisAngle(e,i),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(gg,e)}rotateY(e){return this.rotateOnAxis(vg,e)}rotateZ(e){return this.rotateOnAxis(yg,e)}translateOnAxis(e,i){return _g.copy(e).applyQuaternion(this.quaternion),this.position.add(_g.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(gg,e)}translateY(e){return this.translateOnAxis(vg,e)}translateZ(e){return this.translateOnAxis(yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?nu.copy(e):nu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(bo,nu,this.up):ji.lookAt(nu,bo,this.up),this.quaternion.setFromRotationMatrix(ji),l&&(ji.extractRotation(l.matrixWorld),rs.setFromRotationMatrix(ji),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xg),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(fS),Qf.child=e,this.dispatchEvent(Qf),Qf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xg),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,cS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const y=d[p];u(e.shapes,y)}else u(e.shapes,d)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(u(e.materials,this.material[d]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];l.animations.push(u(e.animations,d))}}if(i){const h=f(e.geometries),d=f(e.materials),p=f(e.textures),g=f(e.images),y=f(e.shapes),x=f(e.skeletons),v=f(e.animations),b=f(e.nodes);h.length>0&&(r.geometries=h),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),v.length>0&&(r.animations=v),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new ct(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new ct,Ki=new ct,Jf=new ct,Qi=new ct,os=new ct,ls=new ct,Sg=new ct,$f=new ct,th=new ct,eh=new ct,nh=new He,ih=new He,ah=new He;class hi{constructor(e=new ct,i=new ct,r=new ct){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),fi.subVectors(e,i),l.cross(fi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){fi.subVectors(l,i),Ki.subVectors(r,i),Jf.subVectors(e,i);const f=fi.dot(fi),h=fi.dot(Ki),d=fi.dot(Jf),p=Ki.dot(Ki),g=Ki.dot(Jf),y=f*p-h*h;if(y===0)return u.set(0,0,0),null;const x=1/y,v=(p*d-h*g)*x,b=(f*g-h*d)*x;return u.set(1-v-b,b,v)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,i,r,l,u,f,h,d){return this.getBarycoord(e,i,r,l,Qi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(u,Qi.x),d.addScaledVector(f,Qi.y),d.addScaledVector(h,Qi.z),d)}static getInterpolatedAttribute(e,i,r,l,u,f){return nh.setScalar(0),ih.setScalar(0),ah.setScalar(0),nh.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,r),ah.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(nh,u.x),f.addScaledVector(ih,u.y),f.addScaledVector(ah,u.z),f}static isFrontFacing(e,i,r,l){return fi.subVectors(r,i),Ki.subVectors(e,i),fi.cross(Ki).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),fi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return hi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let f,h;os.subVectors(l,r),ls.subVectors(u,r),$f.subVectors(e,r);const d=os.dot($f),p=ls.dot($f);if(d<=0&&p<=0)return i.copy(r);th.subVectors(e,l);const g=os.dot(th),y=ls.dot(th);if(g>=0&&y<=g)return i.copy(l);const x=d*y-g*p;if(x<=0&&d>=0&&g<=0)return f=d/(d-g),i.copy(r).addScaledVector(os,f);eh.subVectors(e,u);const v=os.dot(eh),b=ls.dot(eh);if(b>=0&&v<=b)return i.copy(u);const E=v*p-d*b;if(E<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(ls,h);const S=g*b-v*y;if(S<=0&&y-g>=0&&v-b>=0)return Sg.subVectors(u,l),h=(y-g)/(y-g+(v-b)),i.copy(l).addScaledVector(Sg,h);const _=1/(S+E+x);return f=E*_,h=x*_,i.copy(r).addScaledVector(os,f).addScaledVector(ls,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const A0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},iu={h:0,s:0,l:0};function rh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Re.workingColorSpace){return this.r=e,this.g=i,this.b=r,Re.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Re.workingColorSpace){if(e=Yx(e,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=rh(f,u,e+1/3),this.g=rh(f,u,e),this.b=rh(f,u,e-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(e,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=A0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Re.workingToColorSpace(wn.copy(this),e),Math.round(Ee(wn.r*255,0,255))*65536+Math.round(Ee(wn.g*255,0,255))*256+Math.round(Ee(wn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Re.workingColorSpace){Re.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,f=Math.max(r,l,u),h=Math.min(r,l,u);let d,p;const g=(h+f)/2;if(h===f)d=0,p=0;else{const y=f-h;switch(p=g<=.5?y/(f+h):y/(2-f-h),f){case r:d=(l-u)/y+(l<u?6:0);break;case l:d=(u-r)/y+2;break;case u:d=(r-l)/y+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,i=Re.workingColorSpace){return Re.workingToColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ri){Re.workingToColorSpace(wn.copy(this),e);const i=wn.r,r=wn.g,l=wn.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Na),this.setHSL(Na.h+e,Na.s+i,Na.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Na),e.getHSL(iu);const r=kf(Na.h,iu.h,i),l=kf(Na.s,iu.s,i),u=kf(Na.l,iu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ce;Ce.NAMES=A0;let hS=0;class zo extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=No(),this.name="",this.type="Material",this.blending=ms,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=yh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vh&&(r.blendSrc=this.blendSrc),this.blendDst!==yh&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==og&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const h in u){const d=u[h];delete d.metadata,f.push(d)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class w0 extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new ct,au=new Le;let dS=0;class Ei{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=lg,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)au.fromBufferAttribute(this,i),au.applyMatrix3(e),this.setXY(i,au.x,au.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=So(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=So(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=So(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=So(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=So(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lg&&(e.usage=this.usage),e}}class R0 extends Ei{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class C0 extends Ei{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class bi extends Ei{constructor(e,i,r){super(new Float32Array(e),i,r)}}let pS=0;const ai=new Ze,sh=new Rn,us=new ct,Kn=new Po,To=new Po,_n=new ct;class Ga extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E0(e)?C0:R0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,i,r){return ai.makeTranslation(e,i,r),this.applyMatrix4(ai),this}scale(e,i,r){return ai.makeScale(e,i,r),this.applyMatrix4(ai),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new bi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new md);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];To.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(Kn.min,To.min),Kn.expandByPoint(_n),_n.addVectors(Kn.max,To.max),Kn.expandByPoint(_n)):(Kn.expandByPoint(To.min),Kn.expandByPoint(To.max))}Kn.getCenter(r);let l=0;for(let u=0,f=e.count;u<f;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)_n.fromBufferAttribute(h,p),d&&(us.fromBufferAttribute(e,p),_n.add(us)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],d=[];for(let W=0;W<r.count;W++)h[W]=new ct,d[W]=new ct;const p=new ct,g=new ct,y=new ct,x=new Le,v=new Le,b=new Le,E=new ct,S=new ct;function _(W,U,L){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,U),y.fromBufferAttribute(r,L),x.fromBufferAttribute(u,W),v.fromBufferAttribute(u,U),b.fromBufferAttribute(u,L),g.sub(p),y.sub(p),v.sub(x),b.sub(x);const Z=1/(v.x*b.y-b.x*v.y);isFinite(Z)&&(E.copy(g).multiplyScalar(b.y).addScaledVector(y,-v.y).multiplyScalar(Z),S.copy(y).multiplyScalar(v.x).addScaledVector(g,-b.x).multiplyScalar(Z),h[W].add(E),h[U].add(E),h[L].add(E),d[W].add(S),d[U].add(S),d[L].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let W=0,U=A.length;W<U;++W){const L=A[W],Z=L.start,B=L.count;for(let Y=Z,T=Z+B;Y<T;Y+=3)_(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const C=new ct,R=new ct,N=new ct,k=new ct;function P(W){N.fromBufferAttribute(l,W),k.copy(N);const U=h[W];C.copy(U),C.sub(N.multiplyScalar(N.dot(U))).normalize(),R.crossVectors(k,U);const Z=R.dot(d[W])<0?-1:1;f.setXYZW(W,C.x,C.y,C.z,Z)}for(let W=0,U=A.length;W<U;++W){const L=A[W],Z=L.start,B=L.count;for(let Y=Z,T=Z+B;Y<T;Y+=3)P(e.getX(Y+0)),P(e.getX(Y+1)),P(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,v=r.count;x<v;x++)r.setXYZ(x,0,0,0);const l=new ct,u=new ct,f=new ct,h=new ct,d=new ct,p=new ct,g=new ct,y=new ct;if(e)for(let x=0,v=e.count;x<v;x+=3){const b=e.getX(x+0),E=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),g.subVectors(f,u),y.subVectors(l,u),g.cross(y),h.fromBufferAttribute(r,b),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,S),h.add(g),d.add(g),p.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,v=i.count;x<v;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,u),y.subVectors(l,u),g.cross(y),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(h,d){const p=h.array,g=h.itemSize,y=h.normalized,x=new p.constructor(d.length*g);let v=0,b=0;for(let E=0,S=d.length;E<S;E++){h.isInterleavedBufferAttribute?v=d[E]*h.data.stride+h.offset:v=d[E]*g;for(let _=0;_<g;_++)x[b++]=p[v++]}return new Ei(x,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ga,r=this.index.array,l=this.attributes;for(const h in l){const d=l[h],p=e(d,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const d=[],p=u[h];for(let g=0,y=p.length;g<y;g++){const x=p[g],v=e(x,r);d.push(v)}i.morphAttributes[h]=d}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,d=f.length;h<d;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const l={};let u=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let y=0,x=p.length;y<x;y++){const v=p[y];g.push(v.toJSON(e.data))}g.length>0&&(l[d]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],y=u[p];for(let x=0,v=y.length;x<v;x++)g.push(y[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const y=f[p];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mg=new Ze,cr=new rS,ru=new md,Eg=new ct,su=new ct,ou=new ct,lu=new ct,oh=new ct,uu=new ct,bg=new ct,cu=new ct;class Un extends Rn{constructor(e=new Ga,i=new w0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){uu.set(0,0,0);for(let d=0,p=u.length;d<p;d++){const g=h[d],y=u[d];g!==0&&(oh.fromBufferAttribute(y,e),f?uu.addScaledVector(oh,g):uu.addScaledVector(oh.sub(i),g))}i.add(uu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(u),cr.copy(e.ray).recast(e.near),!(ru.containsPoint(cr.origin)===!1&&(cr.intersectSphere(ru,Eg)===null||cr.origin.distanceToSquared(Eg)>(e.far-e.near)**2))&&(Mg.copy(u).invert(),cr.copy(e.ray).applyMatrix4(Mg),!(r.boundingBox!==null&&cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,cr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,f=this.material,h=u.index,d=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,x=u.groups,v=u.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,E=x.length;b<E;b++){const S=x[b],_=f[S.materialIndex],A=Math.max(S.start,v.start),C=Math.min(h.count,Math.min(S.start+S.count,v.start+v.count));for(let R=A,N=C;R<N;R+=3){const k=h.getX(R),P=h.getX(R+1),W=h.getX(R+2);l=fu(this,_,e,r,p,g,y,k,P,W),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,v.start),E=Math.min(h.count,v.start+v.count);for(let S=b,_=E;S<_;S+=3){const A=h.getX(S),C=h.getX(S+1),R=h.getX(S+2);l=fu(this,f,e,r,p,g,y,A,C,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(d!==void 0)if(Array.isArray(f))for(let b=0,E=x.length;b<E;b++){const S=x[b],_=f[S.materialIndex],A=Math.max(S.start,v.start),C=Math.min(d.count,Math.min(S.start+S.count,v.start+v.count));for(let R=A,N=C;R<N;R+=3){const k=R,P=R+1,W=R+2;l=fu(this,_,e,r,p,g,y,k,P,W),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,v.start),E=Math.min(d.count,v.start+v.count);for(let S=b,_=E;S<_;S+=3){const A=S,C=S+1,R=S+2;l=fu(this,f,e,r,p,g,y,A,C,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function mS(o,e,i,r,l,u,f,h){let d;if(e.side===Fn?d=r.intersectTriangle(f,u,l,!0,h):d=r.intersectTriangle(l,u,f,e.side===ka,h),d===null)return null;cu.copy(h),cu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(cu);return p<i.near||p>i.far?null:{distance:p,point:cu.clone(),object:o}}function fu(o,e,i,r,l,u,f,h,d,p){o.getVertexPosition(h,su),o.getVertexPosition(d,ou),o.getVertexPosition(p,lu);const g=mS(o,e,i,r,su,ou,lu,bg);if(g){const y=new ct;hi.getBarycoord(bg,su,ou,lu,y),l&&(g.uv=hi.getInterpolatedAttribute(l,h,d,p,y,new Le)),u&&(g.uv1=hi.getInterpolatedAttribute(u,h,d,p,y,new Le)),f&&(g.normal=hi.getInterpolatedAttribute(f,h,d,p,y,new ct),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:d,c:p,normal:new ct,materialIndex:0};hi.getNormal(su,ou,lu,x.normal),g.face=x,g.barycoord=y}return g}class Bo extends Ga{constructor(e=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const d=[],p=[],g=[],y=[];let x=0,v=0;b("z","y","x",-1,-1,r,i,e,f,u,0),b("z","y","x",1,-1,r,i,-e,f,u,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(d),this.setAttribute("position",new bi(p,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(y,2));function b(E,S,_,A,C,R,N,k,P,W,U){const L=R/P,Z=N/W,B=R/2,Y=N/2,T=k/2,$=P+1,X=W+1;let q=0,et=0;const rt=new ct;for(let H=0;H<X;H++){const G=H*Z-Y;for(let K=0;K<$;K++){const dt=K*L-B;rt[E]=dt*A,rt[S]=G*C,rt[_]=T,p.push(rt.x,rt.y,rt.z),rt[E]=0,rt[S]=0,rt[_]=k>0?1:-1,g.push(rt.x,rt.y,rt.z),y.push(K/P),y.push(1-H/W),q+=1}}for(let H=0;H<W;H++)for(let G=0;G<P;G++){const K=x+G+$*H,dt=x+G+$*(H+1),j=x+(G+1)+$*(H+1),nt=x+(G+1)+$*H;d.push(K,dt,nt),d.push(dt,j,nt),et+=6}h.addGroup(v,et,U),v+=et,x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(o){const e={};for(let i=0;i<o.length;i++){const r=Ms(o[i]);for(const l in r)e[l]=r[l]}return e}function _S(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function D0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Re.workingColorSpace}const gS={clone:Ms,merge:Dn};var vS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vS,this.fragmentShader=yS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=_S(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class U0 extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ea}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new ct,Tg=new Le,Ag=new Le;class In extends U0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,i){return this.getViewBounds(e,Tg,Ag),i.subVectors(Ag,Tg)}setViewOffset(e,i,r,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Hf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/d,i-=f.offsetY*r/p,l*=f.width/d,r*=f.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const cs=-90,fs=1;class xS extends Rn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new In(cs,fs,e,i);l.layers=this.layers,this.add(l);const u=new In(cs,fs,e,i);u.layers=this.layers,this.add(u);const f=new In(cs,fs,e,i);f.layers=this.layers,this.add(f);const h=new In(cs,fs,e,i);h.layers=this.layers,this.add(h);const d=new In(cs,fs,e,i);d.layers=this.layers,this.add(d);const p=new In(cs,fs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,h,d]=i;for(const p of i)this.remove(p);if(e===ea)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Au)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,d,p,g]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,d),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(y,x,v),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class L0 extends Hn{constructor(e=[],i=ys,r,l,u,f,h,d,p,g){super(e,i,r,l,u,f,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SS extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new L0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Bo(5,5,5),u=new wi({name:"CubemapFromEquirect",uniforms:Ms(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Fa});u.uniforms.tEquirect.value=i;const f=new Un(l,u),h=i.minFilter;return i.minFilter===yr&&(i.minFilter=Mi),new xS(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(u)}}class hu extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MS={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,f=null;const h=this._targetRay,d=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const E of e.hand.values()){const S=i.getJointPose(E,r),_=this._getHandJoint(p,E);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],x=g.position.distanceTo(y.position),v=.02,b=.005;p.inputState.pinching&&x>v+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=v-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(MS)))}return h!==null&&(h.visible=l!==null),d!==null&&(d.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new hu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class wg extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const uh=new ct,ES=new ct,bS=new pe;class pr{constructor(e=new ct(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=uh.subVectors(r,i).cross(ES.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(uh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||bS.getNormalMatrix(e),l=this.coplanarPoint(uh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new md,du=new ct;class _d{constructor(e=new pr,i=new pr,r=new pr,l=new pr,u=new pr,f=new pr){this.planes=[e,i,r,l,u,f]}set(e,i,r,l,u,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ea){const r=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],d=l[3],p=l[4],g=l[5],y=l[6],x=l[7],v=l[8],b=l[9],E=l[10],S=l[11],_=l[12],A=l[13],C=l[14],R=l[15];if(r[0].setComponents(d-u,x-p,S-v,R-_).normalize(),r[1].setComponents(d+u,x+p,S+v,R+_).normalize(),r[2].setComponents(d+f,x+g,S+b,R+A).normalize(),r[3].setComponents(d-f,x-g,S-b,R-A).normalize(),r[4].setComponents(d-h,x-y,S-E,R-C).normalize(),i===ea)r[5].setComponents(d+h,x+y,S+E,R+C).normalize();else if(i===Au)r[5].setComponents(h,y,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(du.x=l.normal.x>0?e.max.x:e.min.x,du.y=l.normal.y>0?e.max.y:e.min.y,du.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(du)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class N0 extends Hn{constructor(e,i,r=xr,l,u,f,h=pi,d=pi,p,g=Do,y=1){if(g!==Do&&g!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:y};super(x,l,u,f,h,d,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Es extends Ga{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,f=i/2,h=Math.floor(r),d=Math.floor(l),p=h+1,g=d+1,y=e/h,x=i/d,v=[],b=[],E=[],S=[];for(let _=0;_<g;_++){const A=_*x-f;for(let C=0;C<p;C++){const R=C*y-u;b.push(R,-A,0),E.push(0,0,1),S.push(C/h),S.push(1-_/d)}}for(let _=0;_<d;_++)for(let A=0;A<h;A++){const C=A+p*_,R=A+p*(_+1),N=A+1+p*(_+1),k=A+1+p*_;v.push(C,R,k),v.push(R,N,k)}this.setIndex(v),this.setAttribute("position",new bi(b,3)),this.setAttribute("normal",new bi(E,3)),this.setAttribute("uv",new bi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}class ds extends Ga{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const d=Math.min(f+h,Math.PI);let p=0;const g=[],y=new ct,x=new ct,v=[],b=[],E=[],S=[];for(let _=0;_<=r;_++){const A=[],C=_/r;let R=0;_===0&&f===0?R=.5/i:_===r&&d===Math.PI&&(R=-.5/i);for(let N=0;N<=i;N++){const k=N/i;y.x=-e*Math.cos(l+k*u)*Math.sin(f+C*h),y.y=e*Math.cos(f+C*h),y.z=e*Math.sin(l+k*u)*Math.sin(f+C*h),b.push(y.x,y.y,y.z),x.copy(y).normalize(),E.push(x.x,x.y,x.z),S.push(k+R,1-C),A.push(p++)}g.push(A)}for(let _=0;_<r;_++)for(let A=0;A<i;A++){const C=g[_][A+1],R=g[_][A],N=g[_+1][A],k=g[_+1][A+1];(_!==0||f>0)&&v.push(C,R,k),(_!==r-1||d<Math.PI)&&v.push(R,N,k)}this.setIndex(v),this.setAttribute("position",new bi(b,3)),this.setAttribute("normal",new bi(E,3)),this.setAttribute("uv",new bi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pu extends zo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S0,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class TS extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AS extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gd extends Rn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const ch=new Ze,Rg=new ct,Cg=new ct;class O0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Rg.setFromMatrixPosition(e.matrixWorld),i.position.copy(Rg),Cg.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Cg),i.updateMatrixWorld(),ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dg=new Ze,Ao=new ct,fh=new ct;class wS extends O0{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new ct(1,0,0),new ct(-1,0,0),new ct(0,0,1),new ct(0,0,-1),new ct(0,1,0),new ct(0,-1,0)],this._cubeUps=[new ct(0,1,0),new ct(0,1,0),new ct(0,1,0),new ct(0,1,0),new ct(0,0,1),new ct(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Ao.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ao),fh.copy(r.position),fh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(fh),r.updateMatrixWorld(),l.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Dg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dg)}}class Ug extends gd{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new wS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class P0 extends U0{constructor(e=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,f=r+e,h=l+i,d=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class RS extends O0{constructor(){super(new P0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lg extends gd{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new RS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ng extends gd{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class CS extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Og(o,e,i,r){const l=DS(r);switch(i){case _0:return o*e;case v0:return o*e/l.components*l.byteLength;case fd:return o*e/l.components*l.byteLength;case y0:return o*e*2/l.components*l.byteLength;case hd:return o*e*2/l.components*l.byteLength;case g0:return o*e*3/l.components*l.byteLength;case di:return o*e*4/l.components*l.byteLength;case dd:return o*e*4/l.components*l.byteLength;case yu:case xu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Su:case Mu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Oh:return Math.max(o,16)*Math.max(e,8)/4;case Uh:case Nh:return Math.max(o,8)*Math.max(e,8)/2;case Ph:case zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Eu:case Jh:case $h:return Math.ceil(o/4)*Math.ceil(e/4)*16;case x0:case td:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ed:case nd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function DS(o){switch(o){case Ti:case d0:return{byteLength:1,components:1};case Ro:case p0:case Lo:return{byteLength:2,components:1};case ud:case cd:return{byteLength:2,components:4};case xr:case ld:case ta:return{byteLength:4,components:1};case m0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function z0(){let o=null,e=!1,i=null,r=null;function l(u,f){i(u,f),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function US(o){const e=new WeakMap;function i(h,d){const p=h.array,g=h.usage,y=p.byteLength,x=o.createBuffer();o.bindBuffer(d,x),o.bufferData(d,p,g),h.onUploadCallback();let v;if(p instanceof Float32Array)v=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=o.SHORT;else if(p instanceof Uint32Array)v=o.UNSIGNED_INT;else if(p instanceof Int32Array)v=o.INT;else if(p instanceof Int8Array)v=o.BYTE;else if(p instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:y}}function r(h,d,p){const g=d.array,y=d.updateRanges;if(o.bindBuffer(p,h),y.length===0)o.bufferSubData(p,0,g);else{y.sort((v,b)=>v.start-b.start);let x=0;for(let v=1;v<y.length;v++){const b=y[x],E=y[v];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++x,y[x]=E)}y.length=x+1;for(let v=0,b=y.length;v<b;v++){const E=y[v];o.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(o.deleteBuffer(d.buffer),e.delete(h))}function f(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,d),p.version=h.version}}return{get:l,remove:u,update:f}}var LS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NS=`#ifdef USE_ALPHAHASH
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
#endif`,OS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IS=`#ifdef USE_AOMAP
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
#endif`,FS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HS=`#ifdef USE_BATCHING
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
#endif`,kS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WS=`#ifdef USE_IRIDESCENCE
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
#endif`,qS=`#ifdef USE_BUMPMAP
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
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eM=`#define PI 3.141592653589793
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
} // validated`,nM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iM=`vec3 transformedNormal = objectNormal;
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
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lM="gl_FragColor = linearToOutputTexel( gl_FragColor );",uM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
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
}`,xM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EM=`uniform bool receiveShadow;
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
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CM=`PhysicalMaterial material;
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
#endif`,DM=`struct PhysicalMaterial {
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
}`,UM=`
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
#endif`,LM=`#if defined( RE_IndirectDiffuse )
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
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kM=`#if defined( USE_POINTS_UV )
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
#endif`,GM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YM=`#ifdef USE_MORPHTARGETS
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
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tE=`#ifdef USE_NORMALMAP
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
#endif`,eE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_E=`float getShadowMask() {
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
}`,gE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
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
#endif`,AE=`#ifdef USE_TRANSMISSION
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`uniform samplerCube tCube;
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
}`,IE=`#if DEPTH_PACKING == 3200
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
}`,FE=`#define DISTANCE
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
}`,HE=`#define DISTANCE
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
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
}`,XE=`uniform vec3 diffuse;
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
}`,WE=`#include <common>
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
}`,qE=`uniform vec3 diffuse;
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
}`,YE=`#define LAMBERT
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
}`,ZE=`#define LAMBERT
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
}`,jE=`#define MATCAP
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
}`,KE=`#define MATCAP
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
}`,QE=`#define NORMAL
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
}`,JE=`#define NORMAL
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
}`,$E=`#define PHONG
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
}`,t1=`#define PHONG
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
}`,e1=`#define STANDARD
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
}`,n1=`#define STANDARD
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
}`,i1=`#define TOON
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
}`,a1=`#define TOON
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
}`,r1=`uniform float size;
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
}`,s1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,l1=`uniform vec3 color;
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
}`,u1=`uniform float rotation;
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
}`,c1=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:LS,alphahash_pars_fragment:NS,alphamap_fragment:OS,alphamap_pars_fragment:PS,alphatest_fragment:zS,alphatest_pars_fragment:BS,aomap_fragment:IS,aomap_pars_fragment:FS,batching_pars_vertex:HS,batching_vertex:kS,begin_vertex:GS,beginnormal_vertex:VS,bsdfs:XS,iridescence_fragment:WS,bumpmap_pars_fragment:qS,clipping_planes_fragment:YS,clipping_planes_pars_fragment:ZS,clipping_planes_pars_vertex:jS,clipping_planes_vertex:KS,color_fragment:QS,color_pars_fragment:JS,color_pars_vertex:$S,color_vertex:tM,common:eM,cube_uv_reflection_fragment:nM,defaultnormal_vertex:iM,displacementmap_pars_vertex:aM,displacementmap_vertex:rM,emissivemap_fragment:sM,emissivemap_pars_fragment:oM,colorspace_fragment:lM,colorspace_pars_fragment:uM,envmap_fragment:cM,envmap_common_pars_fragment:fM,envmap_pars_fragment:hM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:bM,envmap_vertex:pM,fog_vertex:mM,fog_pars_vertex:_M,fog_fragment:gM,fog_pars_fragment:vM,gradientmap_pars_fragment:yM,lightmap_pars_fragment:xM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:MM,lights_pars_begin:EM,lights_toon_fragment:TM,lights_toon_pars_fragment:AM,lights_phong_fragment:wM,lights_phong_pars_fragment:RM,lights_physical_fragment:CM,lights_physical_pars_fragment:DM,lights_fragment_begin:UM,lights_fragment_maps:LM,lights_fragment_end:NM,logdepthbuf_fragment:OM,logdepthbuf_pars_fragment:PM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:BM,map_fragment:IM,map_pars_fragment:FM,map_particle_fragment:HM,map_particle_pars_fragment:kM,metalnessmap_fragment:GM,metalnessmap_pars_fragment:VM,morphinstance_vertex:XM,morphcolor_vertex:WM,morphnormal_vertex:qM,morphtarget_pars_vertex:YM,morphtarget_vertex:ZM,normal_fragment_begin:jM,normal_fragment_maps:KM,normal_pars_fragment:QM,normal_pars_vertex:JM,normal_vertex:$M,normalmap_pars_fragment:tE,clearcoat_normal_fragment_begin:eE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:aE,opaque_fragment:rE,packing:sE,premultiplied_alpha_fragment:oE,project_vertex:lE,dithering_fragment:uE,dithering_pars_fragment:cE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:_E,skinbase_vertex:gE,skinning_pars_vertex:vE,skinning_vertex:yE,skinnormal_vertex:xE,specularmap_fragment:SE,specularmap_pars_fragment:ME,tonemapping_fragment:EE,tonemapping_pars_fragment:bE,transmission_fragment:TE,transmission_pars_fragment:AE,uv_pars_fragment:wE,uv_pars_vertex:RE,uv_vertex:CE,worldpos_vertex:DE,background_vert:UE,background_frag:LE,backgroundCube_vert:NE,backgroundCube_frag:OE,cube_vert:PE,cube_frag:zE,depth_vert:BE,depth_frag:IE,distanceRGBA_vert:FE,distanceRGBA_frag:HE,equirect_vert:kE,equirect_frag:GE,linedashed_vert:VE,linedashed_frag:XE,meshbasic_vert:WE,meshbasic_frag:qE,meshlambert_vert:YE,meshlambert_frag:ZE,meshmatcap_vert:jE,meshmatcap_frag:KE,meshnormal_vert:QE,meshnormal_frag:JE,meshphong_vert:$E,meshphong_frag:t1,meshphysical_vert:e1,meshphysical_frag:n1,meshtoon_vert:i1,meshtoon_frag:a1,points_vert:r1,points_frag:s1,shadow_vert:o1,shadow_frag:l1,sprite_vert:u1,sprite_frag:c1},Wt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Si={basic:{uniforms:Dn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Dn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Dn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Dn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Dn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Dn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Dn([Wt.points,Wt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Dn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Dn([Wt.common,Wt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Dn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Dn([Wt.sprite,Wt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Dn([Wt.common,Wt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Dn([Wt.lights,Wt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Si.physical={uniforms:Dn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const mu={r:0,b:0,g:0},hr=new Ai,f1=new Ze;function h1(o,e,i,r,l,u,f){const h=new Ce(0);let d=u===!0?0:1,p,g,y=null,x=0,v=null;function b(C){let R=C.isScene===!0?C.background:null;return R&&R.isTexture&&(R=(C.backgroundBlurriness>0?i:e).get(R)),R}function E(C){let R=!1;const N=b(C);N===null?_(h,d):N&&N.isColor&&(_(N,1),R=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(C,R){const N=b(R);N&&(N.isCubeTexture||N.mapping===Ru)?(g===void 0&&(g=new Un(new Bo(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Ms(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,P,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),hr.copy(R.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(f1.makeRotationFromEuler(hr)),g.material.toneMapped=Re.getTransfer(N.colorSpace)!==Fe,(y!==N||x!==N.version||v!==o.toneMapping)&&(g.material.needsUpdate=!0,y=N,x=N.version,v=o.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new Un(new Es(2,2),new wi({name:"BackgroundMaterial",uniforms:Ms(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Re.getTransfer(N.colorSpace)!==Fe,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(y!==N||x!==N.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,y=N,x=N.version,v=o.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function _(C,R){C.getRGB(mu,D0(o)),r.buffers.color.setClear(mu.r,mu.g,mu.b,R,f)}function A(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,R=1){h.set(C),d=R,_(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,_(h,d)},render:E,addToRenderList:S,dispose:A}}function d1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function h(L,Z,B,Y,T){let $=!1;const X=y(Y,B,Z);u!==X&&(u=X,p(u.object)),$=v(L,Y,B,T),$&&b(L,Y,B,T),T!==null&&e.update(T,o.ELEMENT_ARRAY_BUFFER),($||f)&&(f=!1,R(L,Z,B,Y),T!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(T).buffer))}function d(){return o.createVertexArray()}function p(L){return o.bindVertexArray(L)}function g(L){return o.deleteVertexArray(L)}function y(L,Z,B){const Y=B.wireframe===!0;let T=r[L.id];T===void 0&&(T={},r[L.id]=T);let $=T[Z.id];$===void 0&&($={},T[Z.id]=$);let X=$[Y];return X===void 0&&(X=x(d()),$[Y]=X),X}function x(L){const Z=[],B=[],Y=[];for(let T=0;T<i;T++)Z[T]=0,B[T]=0,Y[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:B,attributeDivisors:Y,object:L,attributes:{},index:null}}function v(L,Z,B,Y){const T=u.attributes,$=Z.attributes;let X=0;const q=B.getAttributes();for(const et in q)if(q[et].location>=0){const H=T[et];let G=$[et];if(G===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),H===void 0||H.attribute!==G||G&&H.data!==G.data)return!0;X++}return u.attributesNum!==X||u.index!==Y}function b(L,Z,B,Y){const T={},$=Z.attributes;let X=0;const q=B.getAttributes();for(const et in q)if(q[et].location>=0){let H=$[et];H===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const G={};G.attribute=H,H&&H.data&&(G.data=H.data),T[et]=G,X++}u.attributes=T,u.attributesNum=X,u.index=Y}function E(){const L=u.newAttributes;for(let Z=0,B=L.length;Z<B;Z++)L[Z]=0}function S(L){_(L,0)}function _(L,Z){const B=u.newAttributes,Y=u.enabledAttributes,T=u.attributeDivisors;B[L]=1,Y[L]===0&&(o.enableVertexAttribArray(L),Y[L]=1),T[L]!==Z&&(o.vertexAttribDivisor(L,Z),T[L]=Z)}function A(){const L=u.newAttributes,Z=u.enabledAttributes;for(let B=0,Y=Z.length;B<Y;B++)Z[B]!==L[B]&&(o.disableVertexAttribArray(B),Z[B]=0)}function C(L,Z,B,Y,T,$,X){X===!0?o.vertexAttribIPointer(L,Z,B,T,$):o.vertexAttribPointer(L,Z,B,Y,T,$)}function R(L,Z,B,Y){E();const T=Y.attributes,$=B.getAttributes(),X=Z.defaultAttributeValues;for(const q in $){const et=$[q];if(et.location>=0){let rt=T[q];if(rt===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor)),rt!==void 0){const H=rt.normalized,G=rt.itemSize,K=e.get(rt);if(K===void 0)continue;const dt=K.buffer,j=K.type,nt=K.bytesPerElement,yt=j===o.INT||j===o.UNSIGNED_INT||rt.gpuType===ld;if(rt.isInterleavedBufferAttribute){const Tt=rt.data,wt=Tt.stride,zt=rt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<et.locationSize;Ht++)_(et.location+Ht,Tt.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Ht=0;Ht<et.locationSize;Ht++)S(et.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,dt);for(let Ht=0;Ht<et.locationSize;Ht++)C(et.location+Ht,G/et.locationSize,j,H,wt*nt,(zt+G/et.locationSize*Ht)*nt,yt)}else{if(rt.isInstancedBufferAttribute){for(let Tt=0;Tt<et.locationSize;Tt++)_(et.location+Tt,rt.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Tt=0;Tt<et.locationSize;Tt++)S(et.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,dt);for(let Tt=0;Tt<et.locationSize;Tt++)C(et.location+Tt,G/et.locationSize,j,H,G*nt,G/et.locationSize*Tt*nt,yt)}}else if(X!==void 0){const H=X[q];if(H!==void 0)switch(H.length){case 2:o.vertexAttrib2fv(et.location,H);break;case 3:o.vertexAttrib3fv(et.location,H);break;case 4:o.vertexAttrib4fv(et.location,H);break;default:o.vertexAttrib1fv(et.location,H)}}}}A()}function N(){W();for(const L in r){const Z=r[L];for(const B in Z){const Y=Z[B];for(const T in Y)g(Y[T].object),delete Y[T];delete Z[B]}delete r[L]}}function k(L){if(r[L.id]===void 0)return;const Z=r[L.id];for(const B in Z){const Y=Z[B];for(const T in Y)g(Y[T].object),delete Y[T];delete Z[B]}delete r[L.id]}function P(L){for(const Z in r){const B=r[Z];if(B[L.id]===void 0)continue;const Y=B[L.id];for(const T in Y)g(Y[T].object),delete Y[T];delete B[L.id]}}function W(){U(),f=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:U,dispose:N,releaseStatesOfGeometry:k,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:S,disableUnusedAttributes:A}}function p1(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,y){y!==0&&(o.drawArraysInstanced(r,p,g,y),i.update(g,r,y))}function h(p,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,y);let v=0;for(let b=0;b<y;b++)v+=g[b];i.update(v,r,1)}function d(p,g,y,x){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<p.length;b++)f(p[b],g[b],x[b]);else{v.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,y);let b=0;for(let E=0;E<y;E++)b+=g[E]*x[E];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function m1(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==di&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const W=P===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ti&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ta&&!W)}function d(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const y=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=b>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:d,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:v,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:R,vertexTextures:N,maxSamples:k}}function _1(o){const e=this;let i=null,r=0,l=!1,u=!1;const f=new pr,h=new pe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const v=y.length!==0||x||r!==0||l;return l=x,r=y.length,v},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){i=g(y,x,0)},this.setState=function(y,x,v){const b=y.clippingPlanes,E=y.clipIntersection,S=y.clipShadows,_=o.get(y);if(!l||b===null||b.length===0||u&&!S)u?g(null):p();else{const A=u?0:r,C=A*4;let R=_.clippingState||null;d.value=R,R=g(b,x,C,v);for(let N=0;N!==C;++N)R[N]=i[N];_.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function p(){d.value!==i&&(d.value=i,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,x,v,b){const E=y!==null?y.length:0;let S=null;if(E!==0){if(S=d.value,b!==!0||S===null){const _=v+E*4,A=x.matrixWorldInverse;h.getNormalMatrix(A),(S===null||S.length<_)&&(S=new Float32Array(_));for(let C=0,R=v;C!==E;++C,R+=4)f.copy(y[C]).applyMatrix4(A,h),f.normal.toArray(S,R),S[R+3]=f.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function g1(o){let e=new WeakMap;function i(f,h){return h===wh?f.mapping=ys:h===Rh&&(f.mapping=xs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===wh||h===Rh)if(e.has(f)){const d=e.get(f).texture;return i(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const p=new SS(d.height);return p.fromEquirectangularTexture(o,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ps=4,Pg=[.125,.215,.35,.446,.526,.582],gr=20,hh=new P0,zg=new Ce;let dh=null,ph=0,mh=0,_h=!1;const mr=(1+Math.sqrt(5))/2,hs=1/mr,Bg=[new ct(-mr,hs,0),new ct(mr,hs,0),new ct(-hs,0,mr),new ct(hs,0,mr),new ct(0,mr,-hs),new ct(0,mr,hs),new ct(-1,1,-1),new ct(1,1,-1),new ct(-1,1,1),new ct(1,1,1)],v1=new ct;class Ig{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:f=256,position:h=v1}=u;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,l,d,h),i>0&&this._blur(d,0,0,i),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=_h,e.scissorTest=!1,_u(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ys||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Lo,format:di,colorSpace:Ss,depthBuffer:!1},l=Fg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fg(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y1(u)),this._blurMaterial=x1(u,e,i)}return l}_compileMaterial(e){const i=new Un(this._lodPlanes[0],e);this._renderer.compile(i,hh)}_sceneToCubeUV(e,i,r,l,u){const d=new In(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],y=this._renderer,x=y.autoClear,v=y.toneMapping;y.getClearColor(zg),y.toneMapping=Ha,y.autoClear=!1;const b=new w0({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),E=new Un(new Bo,b);let S=!1;const _=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,S=!0):(b.color.copy(zg),S=!0);for(let A=0;A<6;A++){const C=A%3;C===0?(d.up.set(0,p[A],0),d.position.set(u.x,u.y,u.z),d.lookAt(u.x+g[A],u.y,u.z)):C===1?(d.up.set(0,0,p[A]),d.position.set(u.x,u.y,u.z),d.lookAt(u.x,u.y+g[A],u.z)):(d.up.set(0,p[A],0),d.position.set(u.x,u.y,u.z),d.lookAt(u.x,u.y,u.z+g[A]));const R=this._cubeSize;_u(l,C*R,A>2?R:0,R,R),y.setRenderTarget(l),S&&y.render(E,d),y.render(e,d)}E.geometry.dispose(),E.material.dispose(),y.toneMapping=v,y.autoClear=x,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ys||e.mapping===xs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hg());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new Un(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const d=this._cubeSize;_u(i,0,0,3*d,2*d),r.setRenderTarget(i),r.render(f,hh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=Bg[(l-u-1)%Bg.length];this._blur(e,u-1,u,f,h)}i.autoClear=r}_blur(e,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",u),this._halfBlur(f,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,f,h){const d=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Un(this._lodPlanes[l],p),x=p.uniforms,v=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*v):2*Math.PI/(2*gr-1),E=u/b,S=isFinite(u)?1+Math.floor(g*E):gr;S>gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${gr}`);const _=[];let A=0;for(let P=0;P<gr;++P){const W=P/E,U=Math.exp(-W*W/2);_.push(U),P===0?A+=U:P<S&&(A+=2*U)}for(let P=0;P<_.length;P++)_[P]=_[P]/A;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:C}=this;x.dTheta.value=b,x.mipInt.value=C-r;const R=this._sizeLods[l],N=3*R*(l>C-ps?l-C+ps:0),k=4*(this._cubeSize-R);_u(i,N,k,3*R,2*R),d.setRenderTarget(i),d.render(y,hh)}}function y1(o){const e=[],i=[],r=[];let l=o;const u=o-ps+1+Pg.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);i.push(h);let d=1/h;f>o-ps?d=Pg[f-o+ps-1]:f===0&&(d=0),r.push(d);const p=1/(h-2),g=-p,y=1+p,x=[g,g,y,g,y,y,g,g,y,y,g,y],v=6,b=6,E=3,S=2,_=1,A=new Float32Array(E*b*v),C=new Float32Array(S*b*v),R=new Float32Array(_*b*v);for(let k=0;k<v;k++){const P=k%3*2/3-1,W=k>2?0:-1,U=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];A.set(U,E*b*k),C.set(x,S*b*k);const L=[k,k,k,k,k,k];R.set(L,_*b*k)}const N=new Ga;N.setAttribute("position",new Ei(A,E)),N.setAttribute("uv",new Ei(C,S)),N.setAttribute("faceIndex",new Ei(R,_)),e.push(N),l>ps&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Fg(o,e,i){const r=new Sr(o,e,i);return r.texture.mapping=Ru,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _u(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function x1(o,e,i){const r=new Float32Array(gr),l=new ct(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:vd(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Hg(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function kg(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function vd(){return`

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
	`}function S1(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const d=h.mapping,p=d===wh||d===Rh,g=d===ys||d===xs;if(p||g){let y=e.get(h);const x=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new Ig(o)),y=p?i.fromEquirectangular(h,y):i.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),y.texture;if(y!==void 0)return y.texture;{const v=h.image;return p&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new Ig(o)),y=p?i.fromEquirectangular(h):i.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),h.addEventListener("dispose",u),y.texture):null}}}return h}function l(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function M1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&_s("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function E1(o,e,i,r){const l={},u=new WeakMap;function f(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const v=u.get(x);v&&(e.remove(v),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(y,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function d(y){const x=y.attributes;for(const v in x)e.update(x[v],o.ARRAY_BUFFER)}function p(y){const x=[],v=y.index,b=y.attributes.position;let E=0;if(v!==null){const A=v.array;E=v.version;for(let C=0,R=A.length;C<R;C+=3){const N=A[C+0],k=A[C+1],P=A[C+2];x.push(N,k,k,P,P,N)}}else if(b!==void 0){const A=b.array;E=b.version;for(let C=0,R=A.length/3-1;C<R;C+=3){const N=C+0,k=C+1,P=C+2;x.push(N,k,k,P,P,N)}}else return;const S=new(E0(x)?C0:R0)(x,1);S.version=E;const _=u.get(y);_&&e.remove(_),u.set(y,S)}function g(y){const x=u.get(y);if(x){const v=y.index;v!==null&&x.version<v.version&&p(y)}else p(y);return u.get(y)}return{get:h,update:d,getWireframeAttribute:g}}function b1(o,e,i){let r;function l(x){r=x}let u,f;function h(x){u=x.type,f=x.bytesPerElement}function d(x,v){o.drawElements(r,v,u,x*f),i.update(v,r,1)}function p(x,v,b){b!==0&&(o.drawElementsInstanced(r,v,u,x*f,b),i.update(v,r,b))}function g(x,v,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,u,x,0,b);let S=0;for(let _=0;_<b;_++)S+=v[_];i.update(S,r,1)}function y(x,v,b,E){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,v[_],E[_]);else{S.multiDrawElementsInstancedWEBGL(r,v,0,u,x,0,E,0,b);let _=0;for(let A=0;A<b;A++)_+=v[A]*E[A];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function T1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function A1(o,e,i){const r=new WeakMap,l=new He;function u(f,h,d){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==y){let L=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",L)};var v=L;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let R=0;b===!0&&(R=1),E===!0&&(R=2),S===!0&&(R=3);let N=h.attributes.position.count*R,k=1;N>e.maxTextureSize&&(k=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const P=new Float32Array(N*k*4*y),W=new b0(P,N,k,y);W.type=ta,W.needsUpdate=!0;const U=R*4;for(let Z=0;Z<y;Z++){const B=_[Z],Y=A[Z],T=C[Z],$=N*k*4*Z;for(let X=0;X<B.count;X++){const q=X*U;b===!0&&(l.fromBufferAttribute(B,X),P[$+q+0]=l.x,P[$+q+1]=l.y,P[$+q+2]=l.z,P[$+q+3]=0),E===!0&&(l.fromBufferAttribute(Y,X),P[$+q+4]=l.x,P[$+q+5]=l.y,P[$+q+6]=l.z,P[$+q+7]=0),S===!0&&(l.fromBufferAttribute(T,X),P[$+q+8]=l.x,P[$+q+9]=l.y,P[$+q+10]=l.z,P[$+q+11]=T.itemSize===4?l.w:1)}}x={count:y,texture:W,size:new Le(N,k)},r.set(h,x),h.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const E=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),d.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function w1(o,e,i,r){let l=new WeakMap;function u(d){const p=r.render.frame,g=d.geometry,y=e.get(d,g);if(l.get(y)!==p&&(e.update(y),l.set(y,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),l.get(d)!==p&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),l.set(d,p))),d.isSkinnedMesh){const x=d.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return y}function f(){l=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const B0=new Hn,Gg=new N0(1,1),I0=new b0,F0=new iS,H0=new L0,Vg=[],Xg=[],Wg=new Float32Array(16),qg=new Float32Array(9),Yg=new Float32Array(4);function Ts(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=Vg[l];if(u===void 0&&(u=new Float32Array(l),Vg[l]=u),e!==0){r.toArray(u,0);for(let f=1,h=0;f!==e;++f)h+=i,o[f].toArray(u,h)}return u}function un(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Cu(o,e){let i=Xg[e];i===void 0&&(i=new Int32Array(e),Xg[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function R1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function C1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function D1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(un(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function U1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function L1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;Yg.set(r),o.uniformMatrix2fv(this.addr,!1,Yg),cn(i,r)}}function N1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;qg.set(r),o.uniformMatrix3fv(this.addr,!1,qg),cn(i,r)}}function O1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(un(i,r))return;Wg.set(r),o.uniformMatrix4fv(this.addr,!1,Wg),cn(i,r)}}function P1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function z1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function B1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function I1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function F1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function H1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(un(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function k1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(un(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function G1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(un(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function V1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Gg.compareFunction=M0,u=Gg):u=B0,i.setTexture2D(e||u,l)}function X1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||F0,l)}function W1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||H0,l)}function q1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||I0,l)}function Y1(o){switch(o){case 5126:return R1;case 35664:return C1;case 35665:return D1;case 35666:return U1;case 35674:return L1;case 35675:return N1;case 35676:return O1;case 5124:case 35670:return P1;case 35667:case 35671:return z1;case 35668:case 35672:return B1;case 35669:case 35673:return I1;case 5125:return F1;case 36294:return H1;case 36295:return k1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return q1}}function Z1(o,e){o.uniform1fv(this.addr,e)}function j1(o,e){const i=Ts(e,this.size,2);o.uniform2fv(this.addr,i)}function K1(o,e){const i=Ts(e,this.size,3);o.uniform3fv(this.addr,i)}function Q1(o,e){const i=Ts(e,this.size,4);o.uniform4fv(this.addr,i)}function J1(o,e){const i=Ts(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function $1(o,e){const i=Ts(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function tb(o,e){const i=Ts(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function eb(o,e){o.uniform1iv(this.addr,e)}function nb(o,e){o.uniform2iv(this.addr,e)}function ib(o,e){o.uniform3iv(this.addr,e)}function ab(o,e){o.uniform4iv(this.addr,e)}function rb(o,e){o.uniform1uiv(this.addr,e)}function sb(o,e){o.uniform2uiv(this.addr,e)}function ob(o,e){o.uniform3uiv(this.addr,e)}function lb(o,e){o.uniform4uiv(this.addr,e)}function ub(o,e,i){const r=this.cache,l=e.length,u=Cu(i,l);un(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||B0,u[f])}function cb(o,e,i){const r=this.cache,l=e.length,u=Cu(i,l);un(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||F0,u[f])}function fb(o,e,i){const r=this.cache,l=e.length,u=Cu(i,l);un(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||H0,u[f])}function hb(o,e,i){const r=this.cache,l=e.length,u=Cu(i,l);un(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||I0,u[f])}function db(o){switch(o){case 5126:return Z1;case 35664:return j1;case 35665:return K1;case 35666:return Q1;case 35674:return J1;case 35675:return $1;case 35676:return tb;case 5124:case 35670:return eb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return ab;case 5125:return rb;case 36294:return sb;case 36295:return ob;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return hb}}class pb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Y1(i.type)}}class mb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=db(i.type)}}class _b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function Zg(o,e){o.seq.push(e),o.map[e.id]=e}function gb(o,e,i){const r=o.name,l=r.length;for(gh.lastIndex=0;;){const u=gh.exec(r),f=gh.lastIndex;let h=u[1];const d=u[2]==="]",p=u[3];if(d&&(h=h|0),p===void 0||p==="["&&f+2===l){Zg(i,p===void 0?new pb(h,o,e):new mb(h,o,e));break}else{let y=i.map[h];y===void 0&&(y=new _b(h),Zg(i,y)),i=y}}}class bu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),f=e.getUniformLocation(i,u.name);gb(u,f,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],d=r[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function jg(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const vb=37297;let yb=0;function xb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const Kg=new pe;function Sb(o){Re._getMatrix(Kg,Re.workingColorSpace,o);const e=`mat3( ${Kg.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case Tu:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Qg(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+xb(o.getShaderSource(e),f)}else return l}function Mb(o,e){const i=Sb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Eb(o,e){let i;switch(e){case Cx:i="Linear";break;case Dx:i="Reinhard";break;case Ux:i="Cineon";break;case Lx:i="ACESFilmic";break;case Ox:i="AgX";break;case Px:i="Neutral";break;case Nx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gu=new ct;function bb(){Re.getLuminanceCoefficients(gu);const o=gu.x.toFixed(4),e=gu.y.toFixed(4),i=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function Ab(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function wb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),f=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:h}}return i}function wo(o){return o!==""}function Jg(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $g(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(o){return o.replace(Rb,Db)}const Cb=new Map;function Db(o,e){let i=me[e];if(i===void 0){const r=Cb.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ad(i)}const Ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(o){return o.replace(Ub,Lb)}function Lb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function e0(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===f0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Ob(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ys:case xs:e="ENVMAP_TYPE_CUBE";break;case Ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function zb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case od:e="ENVMAP_BLENDING_MULTIPLY";break;case wx:e="ENVMAP_BLENDING_MIX";break;case Rx:e="ENVMAP_BLENDING_ADD";break}return e}function Bb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Ib(o,e,i,r){const l=o.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const d=Nb(i),p=Ob(i),g=Pb(i),y=zb(i),x=Bb(i),v=Tb(i),b=Ab(u),E=l.createProgram();let S,_,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wo).join(`
`),_.length>0&&(_+=`
`)):(S=[e0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+d:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),_=[e0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+d:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?me.tonemapping_pars_fragment:"",i.toneMapping!==Ha?Eb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,Mb("linearToOutputTexel",i.outputColorSpace),bb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wo).join(`
`)),f=ad(f),f=Jg(f,i),f=$g(f,i),h=ad(h),h=Jg(h,i),h=$g(h,i),f=t0(f),h=t0(h),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=A+S+f,R=A+_+h,N=jg(l,l.VERTEX_SHADER,C),k=jg(l,l.FRAGMENT_SHADER,R);l.attachShader(E,N),l.attachShader(E,k),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function P(Z){if(o.debug.checkShaderErrors){const B=l.getProgramInfoLog(E).trim(),Y=l.getShaderInfoLog(N).trim(),T=l.getShaderInfoLog(k).trim();let $=!0,X=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if($=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,E,N,k);else{const q=Qg(l,N,"vertex"),et=Qg(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+B+`
`+q+`
`+et)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(Y===""||T==="")&&(X=!1);X&&(Z.diagnostics={runnable:$,programLog:B,vertexShader:{log:Y,prefix:S},fragmentShader:{log:T,prefix:_}})}l.deleteShader(N),l.deleteShader(k),W=new bu(l,E),U=wb(l,E)}let W;this.getUniforms=function(){return W===void 0&&P(this),W};let U;this.getAttributes=function(){return U===void 0&&P(this),U};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(E,vb)),L},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yb++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=N,this.fragmentShader=k,this}let Fb=0;class Hb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new kb(e),i.set(e,r)),r}}class kb{constructor(e){this.id=Fb++,this.code=e,this.usedTimes=0}}function Gb(o,e,i,r,l,u,f){const h=new T0,d=new Hb,p=new Set,g=[],y=l.logarithmicDepthBuffer,x=l.vertexTextures;let v=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,L,Z,B,Y){const T=B.fog,$=Y.geometry,X=U.isMeshStandardMaterial?B.environment:null,q=(U.isMeshStandardMaterial?i:e).get(U.envMap||X),et=q&&q.mapping===Ru?q.image.height:null,rt=b[U.type];U.precision!==null&&(v=l.getMaxPrecision(U.precision),v!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",v,"instead."));const H=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,G=H!==void 0?H.length:0;let K=0;$.morphAttributes.position!==void 0&&(K=1),$.morphAttributes.normal!==void 0&&(K=2),$.morphAttributes.color!==void 0&&(K=3);let dt,j,nt,yt;if(rt){const Ae=Si[rt];dt=Ae.vertexShader,j=Ae.fragmentShader}else dt=U.vertexShader,j=U.fragmentShader,d.update(U),nt=d.getVertexShaderID(U),yt=d.getFragmentShaderID(U);const Tt=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),zt=Y.isInstancedMesh===!0,Ht=Y.isBatchedMesh===!0,Zt=!!U.map,ee=!!U.matcap,Qt=!!q,M=!!U.aoMap,At=!!U.lightMap,ot=!!U.bumpMap,V=!!U.normalMap,I=!!U.displacementMap,tt=!!U.emissiveMap,pt=!!U.metalnessMap,xt=!!U.roughnessMap,st=U.anisotropy>0,z=U.clearcoat>0,D=U.dispersion>0,Q=U.iridescence>0,ft=U.sheen>0,Mt=U.transmission>0,mt=st&&!!U.anisotropyMap,Ft=z&&!!U.clearcoatMap,Bt=z&&!!U.clearcoatNormalMap,qt=z&&!!U.clearcoatRoughnessMap,Jt=Q&&!!U.iridescenceMap,Rt=Q&&!!U.iridescenceThicknessMap,kt=ft&&!!U.sheenColorMap,ne=ft&&!!U.sheenRoughnessMap,Kt=!!U.specularMap,It=!!U.specularColorMap,re=!!U.specularIntensityMap,at=Mt&&!!U.transmissionMap,Gt=Mt&&!!U.thicknessMap,Nt=!!U.gradientMap,Xt=!!U.alphaMap,Ot=U.alphaTest>0,Lt=!!U.alphaHash,$t=!!U.extensions;let he=Ha;U.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(he=o.toneMapping);const Ne={shaderID:rt,shaderType:U.type,shaderName:U.name,vertexShader:dt,fragmentShader:j,defines:U.defines,customVertexShaderID:nt,customFragmentShaderID:yt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:v,batching:Ht,batchingColor:Ht&&Y._colorsTexture!==null,instancing:zt,instancingColor:zt&&Y.instanceColor!==null,instancingMorph:zt&&Y.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ss,alphaToCoverage:!!U.alphaToCoverage,map:Zt,matcap:ee,envMap:Qt,envMapMode:Qt&&q.mapping,envMapCubeUVHeight:et,aoMap:M,lightMap:At,bumpMap:ot,normalMap:V,displacementMap:x&&I,emissiveMap:tt,normalMapObjectSpace:V&&U.normalMapType===Fx,normalMapTangentSpace:V&&U.normalMapType===S0,metalnessMap:pt,roughnessMap:xt,anisotropy:st,anisotropyMap:mt,clearcoat:z,clearcoatMap:Ft,clearcoatNormalMap:Bt,clearcoatRoughnessMap:qt,dispersion:D,iridescence:Q,iridescenceMap:Jt,iridescenceThicknessMap:Rt,sheen:ft,sheenColorMap:kt,sheenRoughnessMap:ne,specularMap:Kt,specularColorMap:It,specularIntensityMap:re,transmission:Mt,transmissionMap:at,thicknessMap:Gt,gradientMap:Nt,opaque:U.transparent===!1&&U.blending===ms&&U.alphaToCoverage===!1,alphaMap:Xt,alphaTest:Ot,alphaHash:Lt,combine:U.combine,mapUv:Zt&&E(U.map.channel),aoMapUv:M&&E(U.aoMap.channel),lightMapUv:At&&E(U.lightMap.channel),bumpMapUv:ot&&E(U.bumpMap.channel),normalMapUv:V&&E(U.normalMap.channel),displacementMapUv:I&&E(U.displacementMap.channel),emissiveMapUv:tt&&E(U.emissiveMap.channel),metalnessMapUv:pt&&E(U.metalnessMap.channel),roughnessMapUv:xt&&E(U.roughnessMap.channel),anisotropyMapUv:mt&&E(U.anisotropyMap.channel),clearcoatMapUv:Ft&&E(U.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&E(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&E(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&E(U.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&E(U.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&E(U.sheenColorMap.channel),sheenRoughnessMapUv:ne&&E(U.sheenRoughnessMap.channel),specularMapUv:Kt&&E(U.specularMap.channel),specularColorMapUv:It&&E(U.specularColorMap.channel),specularIntensityMapUv:re&&E(U.specularIntensityMap.channel),transmissionMapUv:at&&E(U.transmissionMap.channel),thicknessMapUv:Gt&&E(U.thicknessMap.channel),alphaMapUv:Xt&&E(U.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(V||st),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!$.attributes.uv&&(Zt||Xt),fog:!!T,useFog:U.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:wt,skinning:Y.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:K,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&Z.length>0,shadowMapType:o.shadowMap.type,toneMapping:he,decodeVideoTexture:Zt&&U.map.isVideoTexture===!0&&Re.getTransfer(U.map.colorSpace)===Fe,decodeVideoTextureEmissive:tt&&U.emissiveMap.isVideoTexture===!0&&Re.getTransfer(U.emissiveMap.colorSpace)===Fe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===$i,flipSided:U.side===Fn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:$t&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&U.extensions.multiDraw===!0||Ht)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function _(U){const L=[];if(U.shaderID?L.push(U.shaderID):(L.push(U.customVertexShaderID),L.push(U.customFragmentShaderID)),U.defines!==void 0)for(const Z in U.defines)L.push(Z),L.push(U.defines[Z]);return U.isRawShaderMaterial===!1&&(A(L,U),C(L,U),L.push(o.outputColorSpace)),L.push(U.customProgramCacheKey),L.join()}function A(U,L){U.push(L.precision),U.push(L.outputColorSpace),U.push(L.envMapMode),U.push(L.envMapCubeUVHeight),U.push(L.mapUv),U.push(L.alphaMapUv),U.push(L.lightMapUv),U.push(L.aoMapUv),U.push(L.bumpMapUv),U.push(L.normalMapUv),U.push(L.displacementMapUv),U.push(L.emissiveMapUv),U.push(L.metalnessMapUv),U.push(L.roughnessMapUv),U.push(L.anisotropyMapUv),U.push(L.clearcoatMapUv),U.push(L.clearcoatNormalMapUv),U.push(L.clearcoatRoughnessMapUv),U.push(L.iridescenceMapUv),U.push(L.iridescenceThicknessMapUv),U.push(L.sheenColorMapUv),U.push(L.sheenRoughnessMapUv),U.push(L.specularMapUv),U.push(L.specularColorMapUv),U.push(L.specularIntensityMapUv),U.push(L.transmissionMapUv),U.push(L.thicknessMapUv),U.push(L.combine),U.push(L.fogExp2),U.push(L.sizeAttenuation),U.push(L.morphTargetsCount),U.push(L.morphAttributeCount),U.push(L.numDirLights),U.push(L.numPointLights),U.push(L.numSpotLights),U.push(L.numSpotLightMaps),U.push(L.numHemiLights),U.push(L.numRectAreaLights),U.push(L.numDirLightShadows),U.push(L.numPointLightShadows),U.push(L.numSpotLightShadows),U.push(L.numSpotLightShadowsWithMaps),U.push(L.numLightProbes),U.push(L.shadowMapType),U.push(L.toneMapping),U.push(L.numClippingPlanes),U.push(L.numClipIntersection),U.push(L.depthPacking)}function C(U,L){h.disableAll(),L.supportsVertexTextures&&h.enable(0),L.instancing&&h.enable(1),L.instancingColor&&h.enable(2),L.instancingMorph&&h.enable(3),L.matcap&&h.enable(4),L.envMap&&h.enable(5),L.normalMapObjectSpace&&h.enable(6),L.normalMapTangentSpace&&h.enable(7),L.clearcoat&&h.enable(8),L.iridescence&&h.enable(9),L.alphaTest&&h.enable(10),L.vertexColors&&h.enable(11),L.vertexAlphas&&h.enable(12),L.vertexUv1s&&h.enable(13),L.vertexUv2s&&h.enable(14),L.vertexUv3s&&h.enable(15),L.vertexTangents&&h.enable(16),L.anisotropy&&h.enable(17),L.alphaHash&&h.enable(18),L.batching&&h.enable(19),L.dispersion&&h.enable(20),L.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reverseDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),U.push(h.mask)}function R(U){const L=b[U.type];let Z;if(L){const B=Si[L];Z=gS.clone(B.uniforms)}else Z=U.uniforms;return Z}function N(U,L){let Z;for(let B=0,Y=g.length;B<Y;B++){const T=g[B];if(T.cacheKey===L){Z=T,++Z.usedTimes;break}}return Z===void 0&&(Z=new Ib(o,L,U,u),g.push(Z)),Z}function k(U){if(--U.usedTimes===0){const L=g.indexOf(U);g[L]=g[g.length-1],g.pop(),U.destroy()}}function P(U){d.remove(U)}function W(){d.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:R,acquireProgram:N,releaseProgram:k,releaseShaderCache:P,programs:g,dispose:W}}function Vb(){let o=new WeakMap;function e(f){return o.has(f)}function i(f){let h=o.get(f);return h===void 0&&(h={},o.set(f,h)),h}function r(f){o.delete(f)}function l(f,h,d){o.get(f)[h]=d}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Xb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function n0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function i0(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function f(y,x,v,b,E,S){let _=o[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:v,groupOrder:b,renderOrder:y.renderOrder,z:E,group:S},o[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=v,_.groupOrder=b,_.renderOrder=y.renderOrder,_.z=E,_.group=S),e++,_}function h(y,x,v,b,E,S){const _=f(y,x,v,b,E,S);v.transmission>0?r.push(_):v.transparent===!0?l.push(_):i.push(_)}function d(y,x,v,b,E,S){const _=f(y,x,v,b,E,S);v.transmission>0?r.unshift(_):v.transparent===!0?l.unshift(_):i.unshift(_)}function p(y,x){i.length>1&&i.sort(y||Xb),r.length>1&&r.sort(x||n0),l.length>1&&l.sort(x||n0)}function g(){for(let y=e,x=o.length;y<x;y++){const v=o[y];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:d,finish:g,sort:p}}function Wb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let f;return u===void 0?(f=new i0,o.set(r,[f])):l>=u.length?(f=new i0,u.push(f)):f=u[l],f}function i(){o=new WeakMap}return{get:e,dispose:i}}function qb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ct,color:new Ce};break;case"SpotLight":i={position:new ct,direction:new ct,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ct,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ct,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return o[e.id]=i,i}}}function Yb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Zb=0;function jb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Kb(o){const e=new qb,i=Yb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ct);const l=new ct,u=new Ze,f=new Ze;function h(p){let g=0,y=0,x=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let v=0,b=0,E=0,S=0,_=0,A=0,C=0,R=0,N=0,k=0,P=0;p.sort(jb);for(let U=0,L=p.length;U<L;U++){const Z=p[U],B=Z.color,Y=Z.intensity,T=Z.distance,$=Z.shadow&&Z.shadow.map?Z.shadow.map.texture:null;if(Z.isAmbientLight)g+=B.r*Y,y+=B.g*Y,x+=B.b*Y;else if(Z.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(Z.sh.coefficients[X],Y);P++}else if(Z.isDirectionalLight){const X=e.get(Z);if(X.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){const q=Z.shadow,et=i.get(Z);et.shadowIntensity=q.intensity,et.shadowBias=q.bias,et.shadowNormalBias=q.normalBias,et.shadowRadius=q.radius,et.shadowMapSize=q.mapSize,r.directionalShadow[v]=et,r.directionalShadowMap[v]=$,r.directionalShadowMatrix[v]=Z.shadow.matrix,A++}r.directional[v]=X,v++}else if(Z.isSpotLight){const X=e.get(Z);X.position.setFromMatrixPosition(Z.matrixWorld),X.color.copy(B).multiplyScalar(Y),X.distance=T,X.coneCos=Math.cos(Z.angle),X.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),X.decay=Z.decay,r.spot[E]=X;const q=Z.shadow;if(Z.map&&(r.spotLightMap[N]=Z.map,N++,q.updateMatrices(Z),Z.castShadow&&k++),r.spotLightMatrix[E]=q.matrix,Z.castShadow){const et=i.get(Z);et.shadowIntensity=q.intensity,et.shadowBias=q.bias,et.shadowNormalBias=q.normalBias,et.shadowRadius=q.radius,et.shadowMapSize=q.mapSize,r.spotShadow[E]=et,r.spotShadowMap[E]=$,R++}E++}else if(Z.isRectAreaLight){const X=e.get(Z);X.color.copy(B).multiplyScalar(Y),X.halfWidth.set(Z.width*.5,0,0),X.halfHeight.set(0,Z.height*.5,0),r.rectArea[S]=X,S++}else if(Z.isPointLight){const X=e.get(Z);if(X.color.copy(Z.color).multiplyScalar(Z.intensity),X.distance=Z.distance,X.decay=Z.decay,Z.castShadow){const q=Z.shadow,et=i.get(Z);et.shadowIntensity=q.intensity,et.shadowBias=q.bias,et.shadowNormalBias=q.normalBias,et.shadowRadius=q.radius,et.shadowMapSize=q.mapSize,et.shadowCameraNear=q.camera.near,et.shadowCameraFar=q.camera.far,r.pointShadow[b]=et,r.pointShadowMap[b]=$,r.pointShadowMatrix[b]=Z.shadow.matrix,C++}r.point[b]=X,b++}else if(Z.isHemisphereLight){const X=e.get(Z);X.skyColor.copy(Z.color).multiplyScalar(Y),X.groundColor.copy(Z.groundColor).multiplyScalar(Y),r.hemi[_]=X,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Wt.LTC_FLOAT_1,r.rectAreaLTC2=Wt.LTC_FLOAT_2):(r.rectAreaLTC1=Wt.LTC_HALF_1,r.rectAreaLTC2=Wt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==v||W.pointLength!==b||W.spotLength!==E||W.rectAreaLength!==S||W.hemiLength!==_||W.numDirectionalShadows!==A||W.numPointShadows!==C||W.numSpotShadows!==R||W.numSpotMaps!==N||W.numLightProbes!==P)&&(r.directional.length=v,r.spot.length=E,r.rectArea.length=S,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+N-k,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=P,W.directionalLength=v,W.pointLength=b,W.spotLength=E,W.rectAreaLength=S,W.hemiLength=_,W.numDirectionalShadows=A,W.numPointShadows=C,W.numSpotShadows=R,W.numSpotMaps=N,W.numLightProbes=P,r.version=Zb++)}function d(p,g){let y=0,x=0,v=0,b=0,E=0;const S=g.matrixWorldInverse;for(let _=0,A=p.length;_<A;_++){const C=p[_];if(C.isDirectionalLight){const R=r.directional[y];R.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),y++}else if(C.isSpotLight){const R=r.spot[v];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),v++}else if(C.isRectAreaLight){const R=r.rectArea[b];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),f.identity(),u.copy(C.matrixWorld),u.premultiply(S),f.extractRotation(u),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),b++}else if(C.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(C.matrixWorld),R.position.applyMatrix4(S),x++}else if(C.isHemisphereLight){const R=r.hemi[E];R.direction.setFromMatrixPosition(C.matrixWorld),R.direction.transformDirection(S),E++}}}return{setup:h,setupView:d,state:r}}function a0(o){const e=new Kb(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function h(){e.setup(i)}function d(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:d,pushLight:u,pushShadow:f}}function Qb(o){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let h;return f===void 0?(h=new a0(o),e.set(l,[h])):u>=f.length?(h=new a0(o),f.push(h)):h=f[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const Jb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$b=`uniform sampler2D shadow_pass;
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
}`;function tT(o,e,i){let r=new _d;const l=new Le,u=new Le,f=new He,h=new TS({depthPacking:Ix}),d=new AS,p={},g=i.maxTextureSize,y={[ka]:Fn,[Fn]:ka,[$i]:$i},x=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Jb,fragmentShader:$b}),v=x.clone();v.defines.HORIZONTAL_PASS=1;const b=new Ga;b.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Un(b,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f0;let _=this.type;this.render=function(k,P,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const U=o.getRenderTarget(),L=o.getActiveCubeFace(),Z=o.getActiveMipmapLevel(),B=o.state;B.setBlending(Fa),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Y=_!==Ji&&this.type===Ji,T=_===Ji&&this.type!==Ji;for(let $=0,X=k.length;$<X;$++){const q=k[$],et=q.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;l.copy(et.mapSize);const rt=et.getFrameExtents();if(l.multiply(rt),u.copy(et.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/rt.x),l.x=u.x*rt.x,et.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/rt.y),l.y=u.y*rt.y,et.mapSize.y=u.y)),et.map===null||Y===!0||T===!0){const G=this.type!==Ji?{minFilter:pi,magFilter:pi}:{};et.map!==null&&et.map.dispose(),et.map=new Sr(l.x,l.y,G),et.map.texture.name=q.name+".shadowMap",et.camera.updateProjectionMatrix()}o.setRenderTarget(et.map),o.clear();const H=et.getViewportCount();for(let G=0;G<H;G++){const K=et.getViewport(G);f.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),B.viewport(f),et.updateMatrices(q,G),r=et.getFrustum(),R(P,W,et.camera,q,this.type)}et.isPointLightShadow!==!0&&this.type===Ji&&A(et,W),et.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(U,L,Z)};function A(k,P){const W=e.update(E);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,v.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,v.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Sr(l.x,l.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(P,null,W,x,E,null),v.uniforms.shadow_pass.value=k.mapPass.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(P,null,W,v,E,null)}function C(k,P,W,U){let L=null;const Z=W.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(Z!==void 0)L=Z;else if(L=W.isPointLight===!0?d:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=L.uuid,Y=P.uuid;let T=p[B];T===void 0&&(T={},p[B]=T);let $=T[Y];$===void 0&&($=L.clone(),T[Y]=$,P.addEventListener("dispose",N)),L=$}if(L.visible=P.visible,L.wireframe=P.wireframe,U===Ji?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:y[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,W.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=o.properties.get(L);B.light=W}return L}function R(k,P,W,U,L){if(k.visible===!1)return;if(k.layers.test(P.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&L===Ji)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,k.matrixWorld);const Y=e.update(k),T=k.material;if(Array.isArray(T)){const $=Y.groups;for(let X=0,q=$.length;X<q;X++){const et=$[X],rt=T[et.materialIndex];if(rt&&rt.visible){const H=C(k,rt,U,L);k.onBeforeShadow(o,k,P,W,Y,H,et),o.renderBufferDirect(W,null,Y,H,k,et),k.onAfterShadow(o,k,P,W,Y,H,et)}}}else if(T.visible){const $=C(k,T,U,L);k.onBeforeShadow(o,k,P,W,Y,$,null),o.renderBufferDirect(W,null,Y,$,k,null),k.onAfterShadow(o,k,P,W,Y,$,null)}}const B=k.children;for(let Y=0,T=B.length;Y<T;Y++)R(B[Y],P,W,U,L)}function N(k){k.target.removeEventListener("dispose",N);for(const W in p){const U=p[W],L=k.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}const eT={[xh]:Sh,[Mh]:Th,[Eh]:Ah,[vs]:bh,[Sh]:xh,[Th]:Mh,[Ah]:Eh,[bh]:vs};function nT(o,e){function i(){let at=!1;const Gt=new He;let Nt=null;const Xt=new He(0,0,0,0);return{setMask:function(Ot){Nt!==Ot&&!at&&(o.colorMask(Ot,Ot,Ot,Ot),Nt=Ot)},setLocked:function(Ot){at=Ot},setClear:function(Ot,Lt,$t,he,Ne){Ne===!0&&(Ot*=he,Lt*=he,$t*=he),Gt.set(Ot,Lt,$t,he),Xt.equals(Gt)===!1&&(o.clearColor(Ot,Lt,$t,he),Xt.copy(Gt))},reset:function(){at=!1,Nt=null,Xt.set(-1,0,0,0)}}}function r(){let at=!1,Gt=!1,Nt=null,Xt=null,Ot=null;return{setReversed:function(Lt){if(Gt!==Lt){const $t=e.get("EXT_clip_control");Lt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Gt=Lt;const he=Ot;Ot=null,this.setClear(he)}},getReversed:function(){return Gt},setTest:function(Lt){Lt?Tt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(Lt){Nt!==Lt&&!at&&(o.depthMask(Lt),Nt=Lt)},setFunc:function(Lt){if(Gt&&(Lt=eT[Lt]),Xt!==Lt){switch(Lt){case xh:o.depthFunc(o.NEVER);break;case Sh:o.depthFunc(o.ALWAYS);break;case Mh:o.depthFunc(o.LESS);break;case vs:o.depthFunc(o.LEQUAL);break;case Eh:o.depthFunc(o.EQUAL);break;case bh:o.depthFunc(o.GEQUAL);break;case Th:o.depthFunc(o.GREATER);break;case Ah:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xt=Lt}},setLocked:function(Lt){at=Lt},setClear:function(Lt){Ot!==Lt&&(Gt&&(Lt=1-Lt),o.clearDepth(Lt),Ot=Lt)},reset:function(){at=!1,Nt=null,Xt=null,Ot=null,Gt=!1}}}function l(){let at=!1,Gt=null,Nt=null,Xt=null,Ot=null,Lt=null,$t=null,he=null,Ne=null;return{setTest:function(Ae){at||(Ae?Tt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Ae){Gt!==Ae&&!at&&(o.stencilMask(Ae),Gt=Ae)},setFunc:function(Ae,kn,fn){(Nt!==Ae||Xt!==kn||Ot!==fn)&&(o.stencilFunc(Ae,kn,fn),Nt=Ae,Xt=kn,Ot=fn)},setOp:function(Ae,kn,fn){(Lt!==Ae||$t!==kn||he!==fn)&&(o.stencilOp(Ae,kn,fn),Lt=Ae,$t=kn,he=fn)},setLocked:function(Ae){at=Ae},setClear:function(Ae){Ne!==Ae&&(o.clearStencil(Ae),Ne=Ae)},reset:function(){at=!1,Gt=null,Nt=null,Xt=null,Ot=null,Lt=null,$t=null,he=null,Ne=null}}}const u=new i,f=new r,h=new l,d=new WeakMap,p=new WeakMap;let g={},y={},x=new WeakMap,v=[],b=null,E=!1,S=null,_=null,A=null,C=null,R=null,N=null,k=null,P=new Ce(0,0,0),W=0,U=!1,L=null,Z=null,B=null,Y=null,T=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const et=o.getParameter(o.VERSION);et.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(et)[1]),X=q>=1):et.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),X=q>=2);let rt=null,H={};const G=o.getParameter(o.SCISSOR_BOX),K=o.getParameter(o.VIEWPORT),dt=new He().fromArray(G),j=new He().fromArray(K);function nt(at,Gt,Nt,Xt){const Ot=new Uint8Array(4),Lt=o.createTexture();o.bindTexture(at,Lt),o.texParameteri(at,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(at,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<Nt;$t++)at===o.TEXTURE_3D||at===o.TEXTURE_2D_ARRAY?o.texImage3D(Gt,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,Ot):o.texImage2D(Gt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ot);return Lt}const yt={};yt[o.TEXTURE_2D]=nt(o.TEXTURE_2D,o.TEXTURE_2D,1),yt[o.TEXTURE_CUBE_MAP]=nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[o.TEXTURE_2D_ARRAY]=nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),yt[o.TEXTURE_3D]=nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Tt(o.DEPTH_TEST),f.setFunc(vs),ot(!1),V(ig),Tt(o.CULL_FACE),M(Fa);function Tt(at){g[at]!==!0&&(o.enable(at),g[at]=!0)}function wt(at){g[at]!==!1&&(o.disable(at),g[at]=!1)}function zt(at,Gt){return y[at]!==Gt?(o.bindFramebuffer(at,Gt),y[at]=Gt,at===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=Gt),at===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=Gt),!0):!1}function Ht(at,Gt){let Nt=v,Xt=!1;if(at){Nt=x.get(Gt),Nt===void 0&&(Nt=[],x.set(Gt,Nt));const Ot=at.textures;if(Nt.length!==Ot.length||Nt[0]!==o.COLOR_ATTACHMENT0){for(let Lt=0,$t=Ot.length;Lt<$t;Lt++)Nt[Lt]=o.COLOR_ATTACHMENT0+Lt;Nt.length=Ot.length,Xt=!0}}else Nt[0]!==o.BACK&&(Nt[0]=o.BACK,Xt=!0);Xt&&o.drawBuffers(Nt)}function Zt(at){return b!==at?(o.useProgram(at),b=at,!0):!1}const ee={[_r]:o.FUNC_ADD,[cx]:o.FUNC_SUBTRACT,[fx]:o.FUNC_REVERSE_SUBTRACT};ee[hx]=o.MIN,ee[dx]=o.MAX;const Qt={[px]:o.ZERO,[mx]:o.ONE,[_x]:o.SRC_COLOR,[vh]:o.SRC_ALPHA,[Mx]:o.SRC_ALPHA_SATURATE,[xx]:o.DST_COLOR,[vx]:o.DST_ALPHA,[gx]:o.ONE_MINUS_SRC_COLOR,[yh]:o.ONE_MINUS_SRC_ALPHA,[Sx]:o.ONE_MINUS_DST_COLOR,[yx]:o.ONE_MINUS_DST_ALPHA,[Ex]:o.CONSTANT_COLOR,[bx]:o.ONE_MINUS_CONSTANT_COLOR,[Tx]:o.CONSTANT_ALPHA,[Ax]:o.ONE_MINUS_CONSTANT_ALPHA};function M(at,Gt,Nt,Xt,Ot,Lt,$t,he,Ne,Ae){if(at===Fa){E===!0&&(wt(o.BLEND),E=!1);return}if(E===!1&&(Tt(o.BLEND),E=!0),at!==ux){if(at!==S||Ae!==U){if((_!==_r||R!==_r)&&(o.blendEquation(o.FUNC_ADD),_=_r,R=_r),Ae)switch(at){case ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ag:o.blendFunc(o.ONE,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case sg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}else switch(at){case ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ag:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case sg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}A=null,C=null,N=null,k=null,P.set(0,0,0),W=0,S=at,U=Ae}return}Ot=Ot||Gt,Lt=Lt||Nt,$t=$t||Xt,(Gt!==_||Ot!==R)&&(o.blendEquationSeparate(ee[Gt],ee[Ot]),_=Gt,R=Ot),(Nt!==A||Xt!==C||Lt!==N||$t!==k)&&(o.blendFuncSeparate(Qt[Nt],Qt[Xt],Qt[Lt],Qt[$t]),A=Nt,C=Xt,N=Lt,k=$t),(he.equals(P)===!1||Ne!==W)&&(o.blendColor(he.r,he.g,he.b,Ne),P.copy(he),W=Ne),S=at,U=!1}function At(at,Gt){at.side===$i?wt(o.CULL_FACE):Tt(o.CULL_FACE);let Nt=at.side===Fn;Gt&&(Nt=!Nt),ot(Nt),at.blending===ms&&at.transparent===!1?M(Fa):M(at.blending,at.blendEquation,at.blendSrc,at.blendDst,at.blendEquationAlpha,at.blendSrcAlpha,at.blendDstAlpha,at.blendColor,at.blendAlpha,at.premultipliedAlpha),f.setFunc(at.depthFunc),f.setTest(at.depthTest),f.setMask(at.depthWrite),u.setMask(at.colorWrite);const Xt=at.stencilWrite;h.setTest(Xt),Xt&&(h.setMask(at.stencilWriteMask),h.setFunc(at.stencilFunc,at.stencilRef,at.stencilFuncMask),h.setOp(at.stencilFail,at.stencilZFail,at.stencilZPass)),tt(at.polygonOffset,at.polygonOffsetFactor,at.polygonOffsetUnits),at.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ot(at){L!==at&&(at?o.frontFace(o.CW):o.frontFace(o.CCW),L=at)}function V(at){at!==sx?(Tt(o.CULL_FACE),at!==Z&&(at===ig?o.cullFace(o.BACK):at===ox?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),Z=at}function I(at){at!==B&&(X&&o.lineWidth(at),B=at)}function tt(at,Gt,Nt){at?(Tt(o.POLYGON_OFFSET_FILL),(Y!==Gt||T!==Nt)&&(o.polygonOffset(Gt,Nt),Y=Gt,T=Nt)):wt(o.POLYGON_OFFSET_FILL)}function pt(at){at?Tt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function xt(at){at===void 0&&(at=o.TEXTURE0+$-1),rt!==at&&(o.activeTexture(at),rt=at)}function st(at,Gt,Nt){Nt===void 0&&(rt===null?Nt=o.TEXTURE0+$-1:Nt=rt);let Xt=H[Nt];Xt===void 0&&(Xt={type:void 0,texture:void 0},H[Nt]=Xt),(Xt.type!==at||Xt.texture!==Gt)&&(rt!==Nt&&(o.activeTexture(Nt),rt=Nt),o.bindTexture(at,Gt||yt[at]),Xt.type=at,Xt.texture=Gt)}function z(){const at=H[rt];at!==void 0&&at.type!==void 0&&(o.bindTexture(at.type,null),at.type=void 0,at.texture=void 0)}function D(){try{o.compressedTexImage2D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function ft(){try{o.texSubImage2D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function mt(){try{o.compressedTexSubImage2D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ft(){try{o.compressedTexSubImage3D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Bt(){try{o.texStorage2D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function qt(){try{o.texStorage3D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Jt(){try{o.texImage2D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Rt(){try{o.texImage3D(...arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function kt(at){dt.equals(at)===!1&&(o.scissor(at.x,at.y,at.z,at.w),dt.copy(at))}function ne(at){j.equals(at)===!1&&(o.viewport(at.x,at.y,at.z,at.w),j.copy(at))}function Kt(at,Gt){let Nt=p.get(Gt);Nt===void 0&&(Nt=new WeakMap,p.set(Gt,Nt));let Xt=Nt.get(at);Xt===void 0&&(Xt=o.getUniformBlockIndex(Gt,at.name),Nt.set(at,Xt))}function It(at,Gt){const Xt=p.get(Gt).get(at);d.get(Gt)!==Xt&&(o.uniformBlockBinding(Gt,Xt,at.__bindingPointIndex),d.set(Gt,Xt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},rt=null,H={},y={},x=new WeakMap,v=[],b=null,E=!1,S=null,_=null,A=null,C=null,R=null,N=null,k=null,P=new Ce(0,0,0),W=0,U=!1,L=null,Z=null,B=null,Y=null,T=null,dt.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:Tt,disable:wt,bindFramebuffer:zt,drawBuffers:Ht,useProgram:Zt,setBlending:M,setMaterial:At,setFlipSided:ot,setCullFace:V,setLineWidth:I,setPolygonOffset:tt,setScissorTest:pt,activeTexture:xt,bindTexture:st,unbindTexture:z,compressedTexImage2D:D,compressedTexImage3D:Q,texImage2D:Jt,texImage3D:Rt,updateUBOMapping:Kt,uniformBlockBinding:It,texStorage2D:Bt,texStorage3D:qt,texSubImage2D:ft,texSubImage3D:Mt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Ft,scissor:kt,viewport:ne,reset:re}}function iT(o,e,i,r,l,u,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Le,g=new WeakMap;let y;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,D){return v?new OffscreenCanvas(z,D):wu("canvas")}function E(z,D,Q){let ft=1;const Mt=st(z);if((Mt.width>Q||Mt.height>Q)&&(ft=Q/Math.max(Mt.width,Mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const mt=Math.floor(ft*Mt.width),Ft=Math.floor(ft*Mt.height);y===void 0&&(y=b(mt,Ft));const Bt=D?b(mt,Ft):y;return Bt.width=mt,Bt.height=Ft,Bt.getContext("2d").drawImage(z,0,0,mt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+mt+"x"+Ft+")."),Bt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),z;return z}function S(z){return z.generateMipmaps}function _(z){o.generateMipmap(z)}function A(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(z,D,Q,ft,Mt=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let mt=D;if(D===o.RED&&(Q===o.FLOAT&&(mt=o.R32F),Q===o.HALF_FLOAT&&(mt=o.R16F),Q===o.UNSIGNED_BYTE&&(mt=o.R8)),D===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(mt=o.R8UI),Q===o.UNSIGNED_SHORT&&(mt=o.R16UI),Q===o.UNSIGNED_INT&&(mt=o.R32UI),Q===o.BYTE&&(mt=o.R8I),Q===o.SHORT&&(mt=o.R16I),Q===o.INT&&(mt=o.R32I)),D===o.RG&&(Q===o.FLOAT&&(mt=o.RG32F),Q===o.HALF_FLOAT&&(mt=o.RG16F),Q===o.UNSIGNED_BYTE&&(mt=o.RG8)),D===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(mt=o.RG8UI),Q===o.UNSIGNED_SHORT&&(mt=o.RG16UI),Q===o.UNSIGNED_INT&&(mt=o.RG32UI),Q===o.BYTE&&(mt=o.RG8I),Q===o.SHORT&&(mt=o.RG16I),Q===o.INT&&(mt=o.RG32I)),D===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),Q===o.UNSIGNED_INT&&(mt=o.RGB32UI),Q===o.BYTE&&(mt=o.RGB8I),Q===o.SHORT&&(mt=o.RGB16I),Q===o.INT&&(mt=o.RGB32I)),D===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),Q===o.UNSIGNED_INT&&(mt=o.RGBA32UI),Q===o.BYTE&&(mt=o.RGBA8I),Q===o.SHORT&&(mt=o.RGBA16I),Q===o.INT&&(mt=o.RGBA32I)),D===o.RGB&&Q===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),D===o.RGBA){const Ft=Mt?Tu:Re.getTransfer(ft);Q===o.FLOAT&&(mt=o.RGBA32F),Q===o.HALF_FLOAT&&(mt=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(mt=Ft===Fe?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),mt}function R(z,D){let Q;return z?D===null||D===xr||D===Co?Q=o.DEPTH24_STENCIL8:D===ta?Q=o.DEPTH32F_STENCIL8:D===Ro&&(Q=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===xr||D===Co?Q=o.DEPTH_COMPONENT24:D===ta?Q=o.DEPTH_COMPONENT32F:D===Ro&&(Q=o.DEPTH_COMPONENT16),Q}function N(z,D){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==pi&&z.minFilter!==Mi?Math.log2(Math.max(D.width,D.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?D.mipmaps.length:1}function k(z){const D=z.target;D.removeEventListener("dispose",k),W(D),D.isVideoTexture&&g.delete(D)}function P(z){const D=z.target;D.removeEventListener("dispose",P),L(D)}function W(z){const D=r.get(z);if(D.__webglInit===void 0)return;const Q=z.source,ft=x.get(Q);if(ft){const Mt=ft[D.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&U(z),Object.keys(ft).length===0&&x.delete(Q)}r.remove(z)}function U(z){const D=r.get(z);o.deleteTexture(D.__webglTexture);const Q=z.source,ft=x.get(Q);delete ft[D.__cacheKey],f.memory.textures--}function L(z){const D=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(D.__webglFramebuffer[ft]))for(let Mt=0;Mt<D.__webglFramebuffer[ft].length;Mt++)o.deleteFramebuffer(D.__webglFramebuffer[ft][Mt]);else o.deleteFramebuffer(D.__webglFramebuffer[ft]);D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer[ft])}else{if(Array.isArray(D.__webglFramebuffer))for(let ft=0;ft<D.__webglFramebuffer.length;ft++)o.deleteFramebuffer(D.__webglFramebuffer[ft]);else o.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&o.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let ft=0;ft<D.__webglColorRenderbuffer.length;ft++)D.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(D.__webglColorRenderbuffer[ft]);D.__webglDepthRenderbuffer&&o.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const Q=z.textures;for(let ft=0,Mt=Q.length;ft<Mt;ft++){const mt=r.get(Q[ft]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),f.memory.textures--),r.remove(Q[ft])}r.remove(z)}let Z=0;function B(){Z=0}function Y(){const z=Z;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),Z+=1,z}function T(z){const D=[];return D.push(z.wrapS),D.push(z.wrapT),D.push(z.wrapR||0),D.push(z.magFilter),D.push(z.minFilter),D.push(z.anisotropy),D.push(z.internalFormat),D.push(z.format),D.push(z.type),D.push(z.generateMipmaps),D.push(z.premultiplyAlpha),D.push(z.flipY),D.push(z.unpackAlignment),D.push(z.colorSpace),D.join()}function $(z,D){const Q=r.get(z);if(z.isVideoTexture&&pt(z),z.isRenderTargetTexture===!1&&z.version>0&&Q.__version!==z.version){const ft=z.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(Q,z,D);return}}i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+D)}function X(z,D){const Q=r.get(z);if(z.version>0&&Q.__version!==z.version){yt(Q,z,D);return}i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+D)}function q(z,D){const Q=r.get(z);if(z.version>0&&Q.__version!==z.version){yt(Q,z,D);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+D)}function et(z,D){const Q=r.get(z);if(z.version>0&&Q.__version!==z.version){Tt(Q,z,D);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+D)}const rt={[Ch]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[Dh]:o.MIRRORED_REPEAT},H={[pi]:o.NEAREST,[zx]:o.NEAREST_MIPMAP_NEAREST,[jl]:o.NEAREST_MIPMAP_LINEAR,[Mi]:o.LINEAR,[Ff]:o.LINEAR_MIPMAP_NEAREST,[yr]:o.LINEAR_MIPMAP_LINEAR},G={[Hx]:o.NEVER,[qx]:o.ALWAYS,[kx]:o.LESS,[M0]:o.LEQUAL,[Gx]:o.EQUAL,[Wx]:o.GEQUAL,[Vx]:o.GREATER,[Xx]:o.NOTEQUAL};function K(z,D){if(D.type===ta&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===Mi||D.magFilter===Ff||D.magFilter===jl||D.magFilter===yr||D.minFilter===Mi||D.minFilter===Ff||D.minFilter===jl||D.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,rt[D.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,rt[D.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,rt[D.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,H[D.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,H[D.minFilter]),D.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,G[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===pi||D.minFilter!==jl&&D.minFilter!==yr||D.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||r.get(D).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(z,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,l.getMaxAnisotropy())),r.get(D).__currentAnisotropy=D.anisotropy}}}function dt(z,D){let Q=!1;z.__webglInit===void 0&&(z.__webglInit=!0,D.addEventListener("dispose",k));const ft=D.source;let Mt=x.get(ft);Mt===void 0&&(Mt={},x.set(ft,Mt));const mt=T(D);if(mt!==z.__cacheKey){Mt[mt]===void 0&&(Mt[mt]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),Mt[mt].usedTimes++;const Ft=Mt[z.__cacheKey];Ft!==void 0&&(Mt[z.__cacheKey].usedTimes--,Ft.usedTimes===0&&U(D)),z.__cacheKey=mt,z.__webglTexture=Mt[mt].texture}return Q}function j(z,D,Q){return Math.floor(Math.floor(z/Q)/D)}function nt(z,D,Q,ft){const mt=z.updateRanges;if(mt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,D.width,D.height,Q,ft,D.data);else{mt.sort((Rt,kt)=>Rt.start-kt.start);let Ft=0;for(let Rt=1;Rt<mt.length;Rt++){const kt=mt[Ft],ne=mt[Rt],Kt=kt.start+kt.count,It=j(ne.start,D.width,4),re=j(kt.start,D.width,4);ne.start<=Kt+1&&It===re&&j(ne.start+ne.count-1,D.width,4)===It?kt.count=Math.max(kt.count,ne.start+ne.count-kt.start):(++Ft,mt[Ft]=ne)}mt.length=Ft+1;const Bt=o.getParameter(o.UNPACK_ROW_LENGTH),qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,D.width);for(let Rt=0,kt=mt.length;Rt<kt;Rt++){const ne=mt[Rt],Kt=Math.floor(ne.start/4),It=Math.ceil(ne.count/4),re=Kt%D.width,at=Math.floor(Kt/D.width),Gt=It,Nt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,at),i.texSubImage2D(o.TEXTURE_2D,0,re,at,Gt,Nt,Q,ft,D.data)}z.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Bt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Jt)}}function yt(z,D,Q){let ft=o.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),D.isData3DTexture&&(ft=o.TEXTURE_3D);const Mt=dt(z,D),mt=D.source;i.bindTexture(ft,z.__webglTexture,o.TEXTURE0+Q);const Ft=r.get(mt);if(mt.version!==Ft.__version||Mt===!0){i.activeTexture(o.TEXTURE0+Q);const Bt=Re.getPrimaries(Re.workingColorSpace),qt=D.colorSpace===Ba?null:Re.getPrimaries(D.colorSpace),Jt=D.colorSpace===Ba||Bt===qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Rt=E(D.image,!1,l.maxTextureSize);Rt=xt(D,Rt);const kt=u.convert(D.format,D.colorSpace),ne=u.convert(D.type);let Kt=C(D.internalFormat,kt,ne,D.colorSpace,D.isVideoTexture);K(ft,D);let It;const re=D.mipmaps,at=D.isVideoTexture!==!0,Gt=Ft.__version===void 0||Mt===!0,Nt=mt.dataReady,Xt=N(D,Rt);if(D.isDepthTexture)Kt=R(D.format===Uo,D.type),Gt&&(at?i.texStorage2D(o.TEXTURE_2D,1,Kt,Rt.width,Rt.height):i.texImage2D(o.TEXTURE_2D,0,Kt,Rt.width,Rt.height,0,kt,ne,null));else if(D.isDataTexture)if(re.length>0){at&&Gt&&i.texStorage2D(o.TEXTURE_2D,Xt,Kt,re[0].width,re[0].height);for(let Ot=0,Lt=re.length;Ot<Lt;Ot++)It=re[Ot],at?Nt&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,It.width,It.height,kt,ne,It.data):i.texImage2D(o.TEXTURE_2D,Ot,Kt,It.width,It.height,0,kt,ne,It.data);D.generateMipmaps=!1}else at?(Gt&&i.texStorage2D(o.TEXTURE_2D,Xt,Kt,Rt.width,Rt.height),Nt&&nt(D,Rt,kt,ne)):i.texImage2D(o.TEXTURE_2D,0,Kt,Rt.width,Rt.height,0,kt,ne,Rt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){at&&Gt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Kt,re[0].width,re[0].height,Rt.depth);for(let Ot=0,Lt=re.length;Ot<Lt;Ot++)if(It=re[Ot],D.format!==di)if(kt!==null)if(at){if(Nt)if(D.layerUpdates.size>0){const $t=Og(It.width,It.height,D.format,D.type);for(const he of D.layerUpdates){const Ne=It.data.subarray(he*$t/It.data.BYTES_PER_ELEMENT,(he+1)*$t/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,he,It.width,It.height,1,kt,Ne)}D.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,0,It.width,It.height,Rt.depth,kt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ot,Kt,It.width,It.height,Rt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Nt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ot,0,0,0,It.width,It.height,Rt.depth,kt,ne,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ot,Kt,It.width,It.height,Rt.depth,0,kt,ne,It.data)}else{at&&Gt&&i.texStorage2D(o.TEXTURE_2D,Xt,Kt,re[0].width,re[0].height);for(let Ot=0,Lt=re.length;Ot<Lt;Ot++)It=re[Ot],D.format!==di?kt!==null?at?Nt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ot,0,0,It.width,It.height,kt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,Ot,Kt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Nt&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,It.width,It.height,kt,ne,It.data):i.texImage2D(o.TEXTURE_2D,Ot,Kt,It.width,It.height,0,kt,ne,It.data)}else if(D.isDataArrayTexture)if(at){if(Gt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Kt,Rt.width,Rt.height,Rt.depth),Nt)if(D.layerUpdates.size>0){const Ot=Og(Rt.width,Rt.height,D.format,D.type);for(const Lt of D.layerUpdates){const $t=Rt.data.subarray(Lt*Ot/Rt.data.BYTES_PER_ELEMENT,(Lt+1)*Ot/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Lt,Rt.width,Rt.height,1,kt,ne,$t)}D.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,kt,ne,Rt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,Rt.width,Rt.height,Rt.depth,0,kt,ne,Rt.data);else if(D.isData3DTexture)at?(Gt&&i.texStorage3D(o.TEXTURE_3D,Xt,Kt,Rt.width,Rt.height,Rt.depth),Nt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,kt,ne,Rt.data)):i.texImage3D(o.TEXTURE_3D,0,Kt,Rt.width,Rt.height,Rt.depth,0,kt,ne,Rt.data);else if(D.isFramebufferTexture){if(Gt)if(at)i.texStorage2D(o.TEXTURE_2D,Xt,Kt,Rt.width,Rt.height);else{let Ot=Rt.width,Lt=Rt.height;for(let $t=0;$t<Xt;$t++)i.texImage2D(o.TEXTURE_2D,$t,Kt,Ot,Lt,0,kt,ne,null),Ot>>=1,Lt>>=1}}else if(re.length>0){if(at&&Gt){const Ot=st(re[0]);i.texStorage2D(o.TEXTURE_2D,Xt,Kt,Ot.width,Ot.height)}for(let Ot=0,Lt=re.length;Ot<Lt;Ot++)It=re[Ot],at?Nt&&i.texSubImage2D(o.TEXTURE_2D,Ot,0,0,kt,ne,It):i.texImage2D(o.TEXTURE_2D,Ot,Kt,kt,ne,It);D.generateMipmaps=!1}else if(at){if(Gt){const Ot=st(Rt);i.texStorage2D(o.TEXTURE_2D,Xt,Kt,Ot.width,Ot.height)}Nt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,kt,ne,Rt)}else i.texImage2D(o.TEXTURE_2D,0,Kt,kt,ne,Rt);S(D)&&_(ft),Ft.__version=mt.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function Tt(z,D,Q){if(D.image.length!==6)return;const ft=dt(z,D),Mt=D.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+Q);const mt=r.get(Mt);if(Mt.version!==mt.__version||ft===!0){i.activeTexture(o.TEXTURE0+Q);const Ft=Re.getPrimaries(Re.workingColorSpace),Bt=D.colorSpace===Ba?null:Re.getPrimaries(D.colorSpace),qt=D.colorSpace===Ba||Ft===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Jt=D.isCompressedTexture||D.image[0].isCompressedTexture,Rt=D.image[0]&&D.image[0].isDataTexture,kt=[];for(let Lt=0;Lt<6;Lt++)!Jt&&!Rt?kt[Lt]=E(D.image[Lt],!0,l.maxCubemapSize):kt[Lt]=Rt?D.image[Lt].image:D.image[Lt],kt[Lt]=xt(D,kt[Lt]);const ne=kt[0],Kt=u.convert(D.format,D.colorSpace),It=u.convert(D.type),re=C(D.internalFormat,Kt,It,D.colorSpace),at=D.isVideoTexture!==!0,Gt=mt.__version===void 0||ft===!0,Nt=Mt.dataReady;let Xt=N(D,ne);K(o.TEXTURE_CUBE_MAP,D);let Ot;if(Jt){at&&Gt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,re,ne.width,ne.height);for(let Lt=0;Lt<6;Lt++){Ot=kt[Lt].mipmaps;for(let $t=0;$t<Ot.length;$t++){const he=Ot[$t];D.format!==di?Kt!==null?at?Nt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,$t,0,0,he.width,he.height,Kt,he.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,$t,re,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,$t,0,0,he.width,he.height,Kt,It,he.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,$t,re,he.width,he.height,0,Kt,It,he.data)}}}else{if(Ot=D.mipmaps,at&&Gt){Ot.length>0&&Xt++;const Lt=st(kt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,re,Lt.width,Lt.height)}for(let Lt=0;Lt<6;Lt++)if(Rt){at?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,kt[Lt].width,kt[Lt].height,Kt,It,kt[Lt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,re,kt[Lt].width,kt[Lt].height,0,Kt,It,kt[Lt].data);for(let $t=0;$t<Ot.length;$t++){const Ne=Ot[$t].image[Lt].image;at?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,$t+1,0,0,Ne.width,Ne.height,Kt,It,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,$t+1,re,Ne.width,Ne.height,0,Kt,It,Ne.data)}}else{at?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,Kt,It,kt[Lt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,re,Kt,It,kt[Lt]);for(let $t=0;$t<Ot.length;$t++){const he=Ot[$t];at?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,$t+1,0,0,Kt,It,he.image[Lt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,$t+1,re,Kt,It,he.image[Lt])}}}S(D)&&_(o.TEXTURE_CUBE_MAP),mt.__version=Mt.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function wt(z,D,Q,ft,Mt,mt){const Ft=u.convert(Q.format,Q.colorSpace),Bt=u.convert(Q.type),qt=C(Q.internalFormat,Ft,Bt,Q.colorSpace),Jt=r.get(D),Rt=r.get(Q);if(Rt.__renderTarget=D,!Jt.__hasExternalTextures){const kt=Math.max(1,D.width>>mt),ne=Math.max(1,D.height>>mt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,mt,qt,kt,ne,D.depth,0,Ft,Bt,null):i.texImage2D(Mt,mt,qt,kt,ne,0,Ft,Bt,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),tt(D)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,Mt,Rt.__webglTexture,0,I(D)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,Mt,Rt.__webglTexture,mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(z,D,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,z),D.depthBuffer){const ft=D.depthTexture,Mt=ft&&ft.isDepthTexture?ft.type:null,mt=R(D.stencilBuffer,Mt),Ft=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Bt=I(D);tt(D)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Bt,mt,D.width,D.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,mt,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,mt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ft,o.RENDERBUFFER,z)}else{const ft=D.textures;for(let Mt=0;Mt<ft.length;Mt++){const mt=ft[Mt],Ft=u.convert(mt.format,mt.colorSpace),Bt=u.convert(mt.type),qt=C(mt.internalFormat,Ft,Bt,mt.colorSpace),Jt=I(D);Q&&tt(D)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,qt,D.width,D.height):tt(D)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Jt,qt,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,qt,D.width,D.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(z,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(D.depthTexture);ft.__renderTarget=D,(!ft.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),$(D.depthTexture,0);const Mt=ft.__webglTexture,mt=I(D);if(D.depthTexture.format===Do)tt(D)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(D.depthTexture.format===Uo)tt(D)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Zt(z){const D=r.get(z),Q=z.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==z.depthTexture){const ft=z.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),ft){const Mt=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,ft.removeEventListener("dispose",Mt)};ft.addEventListener("dispose",Mt),D.__depthDisposeCallback=Mt}D.__boundDepthTexture=ft}if(z.depthTexture&&!D.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const ft=z.texture.mipmaps;ft&&ft.length>0?Ht(D.__webglFramebuffer[0],z):Ht(D.__webglFramebuffer,z)}else if(Q){D.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[ft]),D.__webglDepthbuffer[ft]===void 0)D.__webglDepthbuffer[ft]=o.createRenderbuffer(),zt(D.__webglDepthbuffer[ft],z,!1);else{const Mt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=D.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,mt)}}else{const ft=z.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=o.createRenderbuffer(),zt(D.__webglDepthbuffer,z,!1);else{const Mt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=D.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,mt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ee(z,D,Q){const ft=r.get(z);D!==void 0&&wt(ft.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Zt(z)}function Qt(z){const D=z.texture,Q=r.get(z),ft=r.get(D);z.addEventListener("dispose",P);const Mt=z.textures,mt=z.isWebGLCubeRenderTarget===!0,Ft=Mt.length>1;if(Ft||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=D.version,f.memory.textures++),mt){Q.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(D.mipmaps&&D.mipmaps.length>0){Q.__webglFramebuffer[Bt]=[];for(let qt=0;qt<D.mipmaps.length;qt++)Q.__webglFramebuffer[Bt][qt]=o.createFramebuffer()}else Q.__webglFramebuffer[Bt]=o.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Bt=0;Bt<D.mipmaps.length;Bt++)Q.__webglFramebuffer[Bt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Ft)for(let Bt=0,qt=Mt.length;Bt<qt;Bt++){const Jt=r.get(Mt[Bt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=o.createTexture(),f.memory.textures++)}if(z.samples>0&&tt(z)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Bt=0;Bt<Mt.length;Bt++){const qt=Mt[Bt];Q.__webglColorRenderbuffer[Bt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Bt]);const Jt=u.convert(qt.format,qt.colorSpace),Rt=u.convert(qt.type),kt=C(qt.internalFormat,Jt,Rt,qt.colorSpace,z.isXRRenderTarget===!0),ne=I(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,kt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Bt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(Q.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),K(o.TEXTURE_CUBE_MAP,D);for(let Bt=0;Bt<6;Bt++)if(D.mipmaps&&D.mipmaps.length>0)for(let qt=0;qt<D.mipmaps.length;qt++)wt(Q.__webglFramebuffer[Bt][qt],z,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,qt);else wt(Q.__webglFramebuffer[Bt],z,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);S(D)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let Bt=0,qt=Mt.length;Bt<qt;Bt++){const Jt=Mt[Bt],Rt=r.get(Jt);i.bindTexture(o.TEXTURE_2D,Rt.__webglTexture),K(o.TEXTURE_2D,Jt),wt(Q.__webglFramebuffer,z,Jt,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,0),S(Jt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Bt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Bt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,ft.__webglTexture),K(Bt,D),D.mipmaps&&D.mipmaps.length>0)for(let qt=0;qt<D.mipmaps.length;qt++)wt(Q.__webglFramebuffer[qt],z,D,o.COLOR_ATTACHMENT0,Bt,qt);else wt(Q.__webglFramebuffer,z,D,o.COLOR_ATTACHMENT0,Bt,0);S(D)&&_(Bt),i.unbindTexture()}z.depthBuffer&&Zt(z)}function M(z){const D=z.textures;for(let Q=0,ft=D.length;Q<ft;Q++){const Mt=D[Q];if(S(Mt)){const mt=A(z),Ft=r.get(Mt).__webglTexture;i.bindTexture(mt,Ft),_(mt),i.unbindTexture()}}}const At=[],ot=[];function V(z){if(z.samples>0){if(tt(z)===!1){const D=z.textures,Q=z.width,ft=z.height;let Mt=o.COLOR_BUFFER_BIT;const mt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ft=r.get(z),Bt=D.length>1;if(Bt)for(let Jt=0;Jt<D.length;Jt++)i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const qt=z.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Jt=0;Jt<D.length;Jt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Bt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ft.__webglColorRenderbuffer[Jt]);const Rt=r.get(D[Jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,Q,ft,0,0,Q,ft,Mt,o.NEAREST),d===!0&&(At.length=0,ot.length=0,At.push(o.COLOR_ATTACHMENT0+Jt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(At.push(mt),ot.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ot)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,At))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Bt)for(let Jt=0;Jt<D.length;Jt++){i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,Ft.__webglColorRenderbuffer[Jt]);const Rt=r.get(D[Jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,Rt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&d){const D=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[D])}}}function I(z){return Math.min(l.maxSamples,z.samples)}function tt(z){const D=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function pt(z){const D=f.render.frame;g.get(z)!==D&&(g.set(z,D),z.update())}function xt(z,D){const Q=z.colorSpace,ft=z.format,Mt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Q!==Ss&&Q!==Ba&&(Re.getTransfer(Q)===Fe?(ft!==di||Mt!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),D}function st(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=et,this.rebindTextures=ee,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=M,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=tt}function aT(o,e){function i(r,l=Ba){let u;const f=Re.getTransfer(l);if(r===Ti)return o.UNSIGNED_BYTE;if(r===ud)return o.UNSIGNED_SHORT_4_4_4_4;if(r===cd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===m0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===d0)return o.BYTE;if(r===p0)return o.SHORT;if(r===Ro)return o.UNSIGNED_SHORT;if(r===ld)return o.INT;if(r===xr)return o.UNSIGNED_INT;if(r===ta)return o.FLOAT;if(r===Lo)return o.HALF_FLOAT;if(r===_0)return o.ALPHA;if(r===g0)return o.RGB;if(r===di)return o.RGBA;if(r===Do)return o.DEPTH_COMPONENT;if(r===Uo)return o.DEPTH_STENCIL;if(r===v0)return o.RED;if(r===fd)return o.RED_INTEGER;if(r===y0)return o.RG;if(r===hd)return o.RG_INTEGER;if(r===dd)return o.RGBA_INTEGER;if(r===yu||r===xu||r===Su||r===Mu)if(f===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Su)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Su)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uh||r===Lh||r===Nh||r===Oh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Uh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Oh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ph||r===zh||r===Bh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ph||r===zh)return f===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Bh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===Fh||r===Hh||r===kh||r===Gh||r===Vh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===jh||r===Kh||r===Qh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ih)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qh)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eu||r===Jh||r===$h)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Eu)return f===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$h)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===x0||r===td||r===ed||r===nd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Eu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===td)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ed)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Co?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const rT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sT=`
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

}`;class oT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Hn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new wi({vertexShader:rT,fragmentShader:sT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Un(new Es(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lT extends bs{constructor(e,i){super();const r=this;let l=null,u=1,f=null,h="local-floor",d=1,p=null,g=null,y=null,x=null,v=null,b=null;const E=new oT,S=i.getContextAttributes();let _=null,A=null;const C=[],R=[],N=new Le;let k=null;const P=new In;P.viewport=new He;const W=new In;W.viewport=new He;const U=[P,W],L=new CS;let Z=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=C[j];return nt===void 0&&(nt=new lh,C[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=C[j];return nt===void 0&&(nt=new lh,C[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=C[j];return nt===void 0&&(nt=new lh,C[j]=nt),nt.getHandSpace()};function Y(j){const nt=R.indexOf(j.inputSource);if(nt===-1)return;const yt=C[nt];yt!==void 0&&(yt.update(j.inputSource,j.frame,p||f),yt.dispatchEvent({type:j.type,data:j.inputSource}))}function T(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",T),l.removeEventListener("inputsourceschange",$);for(let j=0;j<C.length;j++){const nt=R[j];nt!==null&&(R[j]=null,C[j].disconnect(nt))}Z=null,B=null,E.reset(),e.setRenderTarget(_),v=null,x=null,y=null,l=null,A=null,dt.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return x!==null?x:v},this.getBinding=function(){return y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",T),l.addEventListener("inputsourceschange",$),S.xrCompatible!==!0&&await i.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Tt=null,wt=null;S.depth&&(wt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=S.stencil?Uo:Do,Tt=S.stencil?Co:xr);const zt={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};y=new XRWebGLBinding(l,i),x=y.createProjectionLayer(zt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),A=new Sr(x.textureWidth,x.textureHeight,{format:di,type:Ti,depthTexture:new N0(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};v=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),A=new Sr(v.framebufferWidth,v.framebufferHeight,{format:di,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),p=null,f=await l.requestReferenceSpace(h),dt.setContext(l),dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function $(j){for(let nt=0;nt<j.removed.length;nt++){const yt=j.removed[nt],Tt=R.indexOf(yt);Tt>=0&&(R[Tt]=null,C[Tt].disconnect(yt))}for(let nt=0;nt<j.added.length;nt++){const yt=j.added[nt];let Tt=R.indexOf(yt);if(Tt===-1){for(let zt=0;zt<C.length;zt++)if(zt>=R.length){R.push(yt),Tt=zt;break}else if(R[zt]===null){R[zt]=yt,Tt=zt;break}if(Tt===-1)break}const wt=C[Tt];wt&&wt.connect(yt)}}const X=new ct,q=new ct;function et(j,nt,yt){X.setFromMatrixPosition(nt.matrixWorld),q.setFromMatrixPosition(yt.matrixWorld);const Tt=X.distanceTo(q),wt=nt.projectionMatrix.elements,zt=yt.projectionMatrix.elements,Ht=wt[14]/(wt[10]-1),Zt=wt[14]/(wt[10]+1),ee=(wt[9]+1)/wt[5],Qt=(wt[9]-1)/wt[5],M=(wt[8]-1)/wt[0],At=(zt[8]+1)/zt[0],ot=Ht*M,V=Ht*At,I=Tt/(-M+At),tt=I*-M;if(nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(tt),j.translateZ(I),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),wt[10]===-1)j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const pt=Ht+I,xt=Zt+I,st=ot-tt,z=V+(Tt-tt),D=ee*Zt/xt*pt,Q=Qt*Zt/xt*pt;j.projectionMatrix.makePerspective(st,z,D,Q,pt,xt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function rt(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let nt=j.near,yt=j.far;E.texture!==null&&(E.depthNear>0&&(nt=E.depthNear),E.depthFar>0&&(yt=E.depthFar)),L.near=W.near=P.near=nt,L.far=W.far=P.far=yt,(Z!==L.near||B!==L.far)&&(l.updateRenderState({depthNear:L.near,depthFar:L.far}),Z=L.near,B=L.far),P.layers.mask=j.layers.mask|2,W.layers.mask=j.layers.mask|4,L.layers.mask=P.layers.mask|W.layers.mask;const Tt=j.parent,wt=L.cameras;rt(L,Tt);for(let zt=0;zt<wt.length;zt++)rt(wt[zt],Tt);wt.length===2?et(L,P,W):L.projectionMatrix.copy(P.projectionMatrix),H(j,L,Tt)};function H(j,nt,yt){yt===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(yt.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=id*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(x===null&&v===null))return d},this.setFoveation=function(j){d=j,x!==null&&(x.fixedFoveation=j),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=j)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(L)};let G=null;function K(j,nt){if(g=nt.getViewerPose(p||f),b=nt,g!==null){const yt=g.views;v!==null&&(e.setRenderTargetFramebuffer(A,v.framebuffer),e.setRenderTarget(A));let Tt=!1;yt.length!==L.cameras.length&&(L.cameras.length=0,Tt=!0);for(let Ht=0;Ht<yt.length;Ht++){const Zt=yt[Ht];let ee=null;if(v!==null)ee=v.getViewport(Zt);else{const M=y.getViewSubImage(x,Zt);ee=M.viewport,Ht===0&&(e.setRenderTargetTextures(A,M.colorTexture,M.depthStencilTexture),e.setRenderTarget(A))}let Qt=U[Ht];Qt===void 0&&(Qt=new In,Qt.layers.enable(Ht),Qt.viewport=new He,U[Ht]=Qt),Qt.matrix.fromArray(Zt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Zt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ee.x,ee.y,ee.width,ee.height),Ht===0&&(L.matrix.copy(Qt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Tt===!0&&L.cameras.push(Qt)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&y){const Ht=y.getDepthInformation(yt[0]);Ht&&Ht.isValid&&Ht.texture&&E.init(e,Ht,l.renderState)}}for(let yt=0;yt<C.length;yt++){const Tt=R[yt],wt=C[yt];Tt!==null&&wt!==void 0&&wt.update(Tt,nt,p||f)}G&&G(j,nt),nt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:nt}),b=null}const dt=new z0;dt.setAnimationLoop(K),this.setAnimationLoop=function(j){G=j},this.dispose=function(){}}}const dr=new Ai,uT=new Ze;function cT(o,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,D0(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,A,C,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),y(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),x(S,_),_.isMeshPhysicalMaterial&&v(S,_,R)):_.isMeshMatcapMaterial?(u(S,_),b(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),E(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?d(S,_,A,C):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Fn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Fn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const A=e.get(_),C=A.envMap,R=A.envMapRotation;C&&(S.envMap.value=C,dr.copy(R),dr.x*=-1,dr.y*=-1,dr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),S.envMapRotation.value.setFromMatrix4(uT.makeRotationFromEuler(dr)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function d(S,_,A,C){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*A,S.scale.value=C*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function y(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function v(S,_,A){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function E(S,_){const A=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function fT(o,e,i,r){let l={},u={},f=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,C){const R=C.program;r.uniformBlockBinding(A,R)}function p(A,C){let R=l[A.id];R===void 0&&(b(A),R=g(A),l[A.id]=R,A.addEventListener("dispose",S));const N=C.program;r.updateUBOMapping(A,N);const k=e.render.frame;u[A.id]!==k&&(x(A),u[A.id]=k)}function g(A){const C=y();A.__bindingPointIndex=C;const R=o.createBuffer(),N=A.__size,k=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,N,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,R),R}function y(){for(let A=0;A<h;A++)if(f.indexOf(A)===-1)return f.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(A){const C=l[A.id],R=A.uniforms,N=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let k=0,P=R.length;k<P;k++){const W=Array.isArray(R[k])?R[k]:[R[k]];for(let U=0,L=W.length;U<L;U++){const Z=W[U];if(v(Z,k,U,N)===!0){const B=Z.__offset,Y=Array.isArray(Z.value)?Z.value:[Z.value];let T=0;for(let $=0;$<Y.length;$++){const X=Y[$],q=E(X);typeof X=="number"||typeof X=="boolean"?(Z.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,B+T,Z.__data)):X.isMatrix3?(Z.__data[0]=X.elements[0],Z.__data[1]=X.elements[1],Z.__data[2]=X.elements[2],Z.__data[3]=0,Z.__data[4]=X.elements[3],Z.__data[5]=X.elements[4],Z.__data[6]=X.elements[5],Z.__data[7]=0,Z.__data[8]=X.elements[6],Z.__data[9]=X.elements[7],Z.__data[10]=X.elements[8],Z.__data[11]=0):(X.toArray(Z.__data,T),T+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,B,Z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(A,C,R,N){const k=A.value,P=C+"_"+R;if(N[P]===void 0)return typeof k=="number"||typeof k=="boolean"?N[P]=k:N[P]=k.clone(),!0;{const W=N[P];if(typeof k=="number"||typeof k=="boolean"){if(W!==k)return N[P]=k,!0}else if(W.equals(k)===!1)return W.copy(k),!0}return!1}function b(A){const C=A.uniforms;let R=0;const N=16;for(let P=0,W=C.length;P<W;P++){const U=Array.isArray(C[P])?C[P]:[C[P]];for(let L=0,Z=U.length;L<Z;L++){const B=U[L],Y=Array.isArray(B.value)?B.value:[B.value];for(let T=0,$=Y.length;T<$;T++){const X=Y[T],q=E(X),et=R%N,rt=et%q.boundary,H=et+rt;R+=rt,H!==0&&N-H<q.storage&&(R+=N-H),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=R,R+=q.storage}}}const k=R%N;return k>0&&(R+=N-k),A.__size=R,A.__cache={},this}function E(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),C}function S(A){const C=A.target;C.removeEventListener("dispose",S);const R=f.indexOf(C.__bindingPointIndex);f.splice(R,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function _(){for(const A in l)o.deleteBuffer(l[A]);f=[],l={},u={}}return{bind:d,update:p,dispose:_}}class r0{constructor(e={}){const{canvas:i=Zx(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let v;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=r.getContextAttributes().alpha}else v=f;const b=new Uint32Array(4),E=new Int32Array(4);let S=null,_=null;const A=[],C=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1;this._outputColorSpace=ri;let k=0,P=0,W=null,U=-1,L=null;const Z=new He,B=new He;let Y=null;const T=new Ce(0);let $=0,X=i.width,q=i.height,et=1,rt=null,H=null;const G=new He(0,0,X,q),K=new He(0,0,X,q);let dt=!1;const j=new _d;let nt=!1,yt=!1;const Tt=new Ze,wt=new Ze,zt=new ct,Ht=new He,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Qt(){return W===null?et:1}let M=r;function At(F,ut){return i.getContext(F,ut)}try{const F={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sd}`),i.addEventListener("webglcontextlost",Xt,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),M===null){const ut="webgl2";if(M=At(ut,F),M===null)throw At(ut)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let ot,V,I,tt,pt,xt,st,z,D,Q,ft,Mt,mt,Ft,Bt,qt,Jt,Rt,kt,ne,Kt,It,re,at;function Gt(){ot=new M1(M),ot.init(),It=new aT(M,ot),V=new m1(M,ot,e,It),I=new nT(M,ot),V.reverseDepthBuffer&&x&&I.buffers.depth.setReversed(!0),tt=new T1(M),pt=new Vb,xt=new iT(M,ot,I,pt,V,It,tt),st=new g1(R),z=new S1(R),D=new US(M),re=new d1(M,D),Q=new E1(M,D,tt,re),ft=new w1(M,Q,D,tt),kt=new A1(M,V,xt),qt=new _1(pt),Mt=new Gb(R,st,z,ot,V,re,qt),mt=new cT(R,pt),Ft=new Wb,Bt=new Qb(ot),Rt=new h1(R,st,z,I,ft,v,d),Jt=new tT(R,ft,V),at=new fT(M,tt,V,I),ne=new p1(M,ot,tt),Kt=new b1(M,ot,tt),tt.programs=Mt.programs,R.capabilities=V,R.extensions=ot,R.properties=pt,R.renderLists=Ft,R.shadowMap=Jt,R.state=I,R.info=tt}Gt();const Nt=new lT(R,M);this.xr=Nt,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const F=ot.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=ot.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(F){F!==void 0&&(et=F,this.setSize(X,q,!1))},this.getSize=function(F){return F.set(X,q)},this.setSize=function(F,ut,Et=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=F,q=ut,i.width=Math.floor(F*et),i.height=Math.floor(ut*et),Et===!0&&(i.style.width=F+"px",i.style.height=ut+"px"),this.setViewport(0,0,F,ut)},this.getDrawingBufferSize=function(F){return F.set(X*et,q*et).floor()},this.setDrawingBufferSize=function(F,ut,Et){X=F,q=ut,et=Et,i.width=Math.floor(F*Et),i.height=Math.floor(ut*Et),this.setViewport(0,0,F,ut)},this.getCurrentViewport=function(F){return F.copy(Z)},this.getViewport=function(F){return F.copy(G)},this.setViewport=function(F,ut,Et,bt){F.isVector4?G.set(F.x,F.y,F.z,F.w):G.set(F,ut,Et,bt),I.viewport(Z.copy(G).multiplyScalar(et).round())},this.getScissor=function(F){return F.copy(K)},this.setScissor=function(F,ut,Et,bt){F.isVector4?K.set(F.x,F.y,F.z,F.w):K.set(F,ut,Et,bt),I.scissor(B.copy(K).multiplyScalar(et).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(F){I.setScissorTest(dt=F)},this.setOpaqueSort=function(F){rt=F},this.setTransparentSort=function(F){H=F},this.getClearColor=function(F){return F.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(F=!0,ut=!0,Et=!0){let bt=0;if(F){let ht=!1;if(W!==null){const Pt=W.texture.format;ht=Pt===dd||Pt===hd||Pt===fd}if(ht){const Pt=W.texture.type,Vt=Pt===Ti||Pt===xr||Pt===Ro||Pt===Co||Pt===ud||Pt===cd,Yt=Rt.getClearColor(),jt=Rt.getClearAlpha(),ue=Yt.r,se=Yt.g,ie=Yt.b;Vt?(b[0]=ue,b[1]=se,b[2]=ie,b[3]=jt,M.clearBufferuiv(M.COLOR,0,b)):(E[0]=ue,E[1]=se,E[2]=ie,E[3]=jt,M.clearBufferiv(M.COLOR,0,E))}else bt|=M.COLOR_BUFFER_BIT}ut&&(bt|=M.DEPTH_BUFFER_BIT),Et&&(bt|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(bt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Xt,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Rt.dispose(),Ft.dispose(),Bt.dispose(),pt.dispose(),st.dispose(),z.dispose(),ft.dispose(),re.dispose(),at.dispose(),Mt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",rn),Nt.removeEventListener("sessionend",gn),Ln.stop()};function Xt(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const F=tt.autoReset,ut=Jt.enabled,Et=Jt.autoUpdate,bt=Jt.needsUpdate,ht=Jt.type;Gt(),tt.autoReset=F,Jt.enabled=ut,Jt.autoUpdate=Et,Jt.needsUpdate=bt,Jt.type=ht}function Lt(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function $t(F){const ut=F.target;ut.removeEventListener("dispose",$t),he(ut)}function he(F){Ne(F),pt.remove(F)}function Ne(F){const ut=pt.get(F).programs;ut!==void 0&&(ut.forEach(function(Et){Mt.releaseProgram(Et)}),F.isShaderMaterial&&Mt.releaseShaderCache(F))}this.renderBufferDirect=function(F,ut,Et,bt,ht,Pt){ut===null&&(ut=Zt);const Vt=ht.isMesh&&ht.matrixWorld.determinant()<0,Yt=Wa(F,ut,Et,bt,ht);I.setMaterial(bt,Vt);let jt=Et.index,ue=1;if(bt.wireframe===!0){if(jt=Q.getWireframeAttribute(Et),jt===void 0)return;ue=2}const se=Et.drawRange,ie=Et.attributes.position;let _e=se.start*ue,De=(se.start+se.count)*ue;Pt!==null&&(_e=Math.max(_e,Pt.start*ue),De=Math.min(De,(Pt.start+Pt.count)*ue)),jt!==null?(_e=Math.max(_e,0),De=Math.min(De,jt.count)):ie!=null&&(_e=Math.max(_e,0),De=Math.min(De,ie.count));const Ve=De-_e;if(Ve<0||Ve===1/0)return;re.setup(ht,bt,Yt,Et,jt);let Se,Me=ne;if(jt!==null&&(Se=D.get(jt),Me=Kt,Me.setIndex(Se)),ht.isMesh)bt.wireframe===!0?(I.setLineWidth(bt.wireframeLinewidth*Qt()),Me.setMode(M.LINES)):Me.setMode(M.TRIANGLES);else if(ht.isLine){let oe=bt.linewidth;oe===void 0&&(oe=1),I.setLineWidth(oe*Qt()),ht.isLineSegments?Me.setMode(M.LINES):ht.isLineLoop?Me.setMode(M.LINE_LOOP):Me.setMode(M.LINE_STRIP)}else ht.isPoints?Me.setMode(M.POINTS):ht.isSprite&&Me.setMode(M.TRIANGLES);if(ht.isBatchedMesh)if(ht._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Me.renderMultiDrawInstances(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount,ht._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))Me.renderMultiDraw(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount);else{const oe=ht._multiDrawStarts,je=ht._multiDrawCounts,Te=ht._multiDrawCount,Mn=jt?D.get(jt).bytesPerElement:1,sa=pt.get(bt).currentProgram.getUniforms();for(let Xe=0;Xe<Te;Xe++)sa.setValue(M,"_gl_DrawID",Xe),Me.render(oe[Xe]/Mn,je[Xe])}else if(ht.isInstancedMesh)Me.renderInstances(_e,Ve,ht.count);else if(Et.isInstancedBufferGeometry){const oe=Et._maxInstanceCount!==void 0?Et._maxInstanceCount:1/0,je=Math.min(Et.instanceCount,oe);Me.renderInstances(_e,Ve,je)}else Me.render(_e,Ve)};function Ae(F,ut,Et){F.transparent===!0&&F.side===$i&&F.forceSinglePass===!1?(F.side=Fn,F.needsUpdate=!0,aa(F,ut,Et),F.side=ka,F.needsUpdate=!0,aa(F,ut,Et),F.side=$i):aa(F,ut,Et)}this.compile=function(F,ut,Et=null){Et===null&&(Et=F),_=Bt.get(Et),_.init(ut),C.push(_),Et.traverseVisible(function(ht){ht.isLight&&ht.layers.test(ut.layers)&&(_.pushLight(ht),ht.castShadow&&_.pushShadow(ht))}),F!==Et&&F.traverseVisible(function(ht){ht.isLight&&ht.layers.test(ut.layers)&&(_.pushLight(ht),ht.castShadow&&_.pushShadow(ht))}),_.setupLights();const bt=new Set;return F.traverse(function(ht){if(!(ht.isMesh||ht.isPoints||ht.isLine||ht.isSprite))return;const Pt=ht.material;if(Pt)if(Array.isArray(Pt))for(let Vt=0;Vt<Pt.length;Vt++){const Yt=Pt[Vt];Ae(Yt,Et,ht),bt.add(Yt)}else Ae(Pt,Et,ht),bt.add(Pt)}),_=C.pop(),bt},this.compileAsync=function(F,ut,Et=null){const bt=this.compile(F,ut,Et);return new Promise(ht=>{function Pt(){if(bt.forEach(function(Vt){pt.get(Vt).currentProgram.isReady()&&bt.delete(Vt)}),bt.size===0){ht(F);return}setTimeout(Pt,10)}ot.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let kn=null;function fn(F){kn&&kn(F)}function rn(){Ln.stop()}function gn(){Ln.start()}const Ln=new z0;Ln.setAnimationLoop(fn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(F){kn=F,Nt.setAnimationLoop(F),F===null?Ln.stop():Ln.start()},Nt.addEventListener("sessionstart",rn),Nt.addEventListener("sessionend",gn),this.render=function(F,ut){if(ut!==void 0&&ut.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ut.parent===null&&ut.matrixWorldAutoUpdate===!0&&ut.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(ut),ut=Nt.getCamera()),F.isScene===!0&&F.onBeforeRender(R,F,ut,W),_=Bt.get(F,C.length),_.init(ut),C.push(_),wt.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),j.setFromProjectionMatrix(wt),yt=this.localClippingEnabled,nt=qt.init(this.clippingPlanes,yt),S=Ft.get(F,A.length),S.init(),A.push(S),Nt.enabled===!0&&Nt.isPresenting===!0){const Pt=R.xr.getDepthSensingMesh();Pt!==null&&Va(Pt,ut,-1/0,R.sortObjects)}Va(F,ut,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(rt,H),ee=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,ee&&Rt.addToRenderList(S,F),this.info.render.frame++,nt===!0&&qt.beginShadows();const Et=_.state.shadowsArray;Jt.render(Et,F,ut),nt===!0&&qt.endShadows(),this.info.autoReset===!0&&this.info.reset();const bt=S.opaque,ht=S.transmissive;if(_.setupLights(),ut.isArrayCamera){const Pt=ut.cameras;if(ht.length>0)for(let Vt=0,Yt=Pt.length;Vt<Yt;Vt++){const jt=Pt[Vt];Fo(bt,ht,F,jt)}ee&&Rt.render(F);for(let Vt=0,Yt=Pt.length;Vt<Yt;Vt++){const jt=Pt[Vt];Io(S,F,jt,jt.viewport)}}else ht.length>0&&Fo(bt,ht,F,ut),ee&&Rt.render(F),Io(S,F,ut);W!==null&&P===0&&(xt.updateMultisampleRenderTarget(W),xt.updateRenderTargetMipmap(W)),F.isScene===!0&&F.onAfterRender(R,F,ut),re.resetDefaultState(),U=-1,L=null,C.pop(),C.length>0?(_=C[C.length-1],nt===!0&&qt.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Va(F,ut,Et,bt){if(F.visible===!1)return;if(F.layers.test(ut.layers)){if(F.isGroup)Et=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ut);else if(F.isLight)_.pushLight(F),F.castShadow&&_.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||j.intersectsSprite(F)){bt&&Ht.setFromMatrixPosition(F.matrixWorld).applyMatrix4(wt);const Vt=ft.update(F),Yt=F.material;Yt.visible&&S.push(F,Vt,Yt,Et,Ht.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||j.intersectsObject(F))){const Vt=ft.update(F),Yt=F.material;if(bt&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Ht.copy(F.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Ht.copy(Vt.boundingSphere.center)),Ht.applyMatrix4(F.matrixWorld).applyMatrix4(wt)),Array.isArray(Yt)){const jt=Vt.groups;for(let ue=0,se=jt.length;ue<se;ue++){const ie=jt[ue],_e=Yt[ie.materialIndex];_e&&_e.visible&&S.push(F,Vt,_e,Et,Ht.z,ie)}}else Yt.visible&&S.push(F,Vt,Yt,Et,Ht.z,null)}}const Pt=F.children;for(let Vt=0,Yt=Pt.length;Vt<Yt;Vt++)Va(Pt[Vt],ut,Et,bt)}function Io(F,ut,Et,bt){const ht=F.opaque,Pt=F.transmissive,Vt=F.transparent;_.setupLightsView(Et),nt===!0&&qt.setGlobalState(R.clippingPlanes,Et),bt&&I.viewport(Z.copy(bt)),ht.length>0&&Xa(ht,ut,Et),Pt.length>0&&Xa(Pt,ut,Et),Vt.length>0&&Xa(Vt,ut,Et),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Fo(F,ut,Et,bt){if((Et.isScene===!0?Et.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[bt.id]===void 0&&(_.state.transmissionRenderTarget[bt.id]=new Sr(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Lo:Ti,minFilter:yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Pt=_.state.transmissionRenderTarget[bt.id],Vt=bt.viewport||Z;Pt.setSize(Vt.z*R.transmissionResolutionScale,Vt.w*R.transmissionResolutionScale);const Yt=R.getRenderTarget();R.setRenderTarget(Pt),R.getClearColor(T),$=R.getClearAlpha(),$<1&&R.setClearColor(16777215,.5),R.clear(),ee&&Rt.render(Et);const jt=R.toneMapping;R.toneMapping=Ha;const ue=bt.viewport;if(bt.viewport!==void 0&&(bt.viewport=void 0),_.setupLightsView(bt),nt===!0&&qt.setGlobalState(R.clippingPlanes,bt),Xa(F,Et,bt),xt.updateMultisampleRenderTarget(Pt),xt.updateRenderTargetMipmap(Pt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ie=0,_e=ut.length;ie<_e;ie++){const De=ut[ie],Ve=De.object,Se=De.geometry,Me=De.material,oe=De.group;if(Me.side===$i&&Ve.layers.test(bt.layers)){const je=Me.side;Me.side=Fn,Me.needsUpdate=!0,ia(Ve,Et,bt,Se,Me,oe),Me.side=je,Me.needsUpdate=!0,se=!0}}se===!0&&(xt.updateMultisampleRenderTarget(Pt),xt.updateRenderTargetMipmap(Pt))}R.setRenderTarget(Yt),R.setClearColor(T,$),ue!==void 0&&(bt.viewport=ue),R.toneMapping=jt}function Xa(F,ut,Et){const bt=ut.isScene===!0?ut.overrideMaterial:null;for(let ht=0,Pt=F.length;ht<Pt;ht++){const Vt=F[ht],Yt=Vt.object,jt=Vt.geometry,ue=Vt.group;let se=Vt.material;se.allowOverride===!0&&bt!==null&&(se=bt),Yt.layers.test(Et.layers)&&ia(Yt,ut,Et,jt,se,ue)}}function ia(F,ut,Et,bt,ht,Pt){F.onBeforeRender(R,ut,Et,bt,ht,Pt),F.modelViewMatrix.multiplyMatrices(Et.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ht.onBeforeRender(R,ut,Et,bt,F,Pt),ht.transparent===!0&&ht.side===$i&&ht.forceSinglePass===!1?(ht.side=Fn,ht.needsUpdate=!0,R.renderBufferDirect(Et,ut,bt,ht,F,Pt),ht.side=ka,ht.needsUpdate=!0,R.renderBufferDirect(Et,ut,bt,ht,F,Pt),ht.side=$i):R.renderBufferDirect(Et,ut,bt,ht,F,Pt),F.onAfterRender(R,ut,Et,bt,ht,Pt)}function aa(F,ut,Et){ut.isScene!==!0&&(ut=Zt);const bt=pt.get(F),ht=_.state.lights,Pt=_.state.shadowsArray,Vt=ht.state.version,Yt=Mt.getParameters(F,ht.state,Pt,ut,Et),jt=Mt.getProgramCacheKey(Yt);let ue=bt.programs;bt.environment=F.isMeshStandardMaterial?ut.environment:null,bt.fog=ut.fog,bt.envMap=(F.isMeshStandardMaterial?z:st).get(F.envMap||bt.environment),bt.envMapRotation=bt.environment!==null&&F.envMap===null?ut.environmentRotation:F.envMapRotation,ue===void 0&&(F.addEventListener("dispose",$t),ue=new Map,bt.programs=ue);let se=ue.get(jt);if(se!==void 0){if(bt.currentProgram===se&&bt.lightsStateVersion===Vt)return Ci(F,Yt),se}else Yt.uniforms=Mt.getUniforms(F),F.onBeforeCompile(Yt,R),se=Mt.acquireProgram(Yt,jt),ue.set(jt,se),bt.uniforms=Yt.uniforms;const ie=bt.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(ie.clippingPlanes=qt.uniform),Ci(F,Yt),bt.needsLights=tn(F),bt.lightsStateVersion=Vt,bt.needsLights&&(ie.ambientLightColor.value=ht.state.ambient,ie.lightProbe.value=ht.state.probe,ie.directionalLights.value=ht.state.directional,ie.directionalLightShadows.value=ht.state.directionalShadow,ie.spotLights.value=ht.state.spot,ie.spotLightShadows.value=ht.state.spotShadow,ie.rectAreaLights.value=ht.state.rectArea,ie.ltc_1.value=ht.state.rectAreaLTC1,ie.ltc_2.value=ht.state.rectAreaLTC2,ie.pointLights.value=ht.state.point,ie.pointLightShadows.value=ht.state.pointShadow,ie.hemisphereLights.value=ht.state.hemi,ie.directionalShadowMap.value=ht.state.directionalShadowMap,ie.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,ie.spotShadowMap.value=ht.state.spotShadowMap,ie.spotLightMatrix.value=ht.state.spotLightMatrix,ie.spotLightMap.value=ht.state.spotLightMap,ie.pointShadowMap.value=ht.state.pointShadowMap,ie.pointShadowMatrix.value=ht.state.pointShadowMatrix),bt.currentProgram=se,bt.uniformsList=null,se}function Ri(F){if(F.uniformsList===null){const ut=F.currentProgram.getUniforms();F.uniformsList=bu.seqWithValue(ut.seq,F.uniforms)}return F.uniformsList}function Ci(F,ut){const Et=pt.get(F);Et.outputColorSpace=ut.outputColorSpace,Et.batching=ut.batching,Et.batchingColor=ut.batchingColor,Et.instancing=ut.instancing,Et.instancingColor=ut.instancingColor,Et.instancingMorph=ut.instancingMorph,Et.skinning=ut.skinning,Et.morphTargets=ut.morphTargets,Et.morphNormals=ut.morphNormals,Et.morphColors=ut.morphColors,Et.morphTargetsCount=ut.morphTargetsCount,Et.numClippingPlanes=ut.numClippingPlanes,Et.numIntersection=ut.numClipIntersection,Et.vertexAlphas=ut.vertexAlphas,Et.vertexTangents=ut.vertexTangents,Et.toneMapping=ut.toneMapping}function Wa(F,ut,Et,bt,ht){ut.isScene!==!0&&(ut=Zt),xt.resetTextureUnits();const Pt=ut.fog,Vt=bt.isMeshStandardMaterial?ut.environment:null,Yt=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ss,jt=(bt.isMeshStandardMaterial?z:st).get(bt.envMap||Vt),ue=bt.vertexColors===!0&&!!Et.attributes.color&&Et.attributes.color.itemSize===4,se=!!Et.attributes.tangent&&(!!bt.normalMap||bt.anisotropy>0),ie=!!Et.morphAttributes.position,_e=!!Et.morphAttributes.normal,De=!!Et.morphAttributes.color;let Ve=Ha;bt.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ve=R.toneMapping);const Se=Et.morphAttributes.position||Et.morphAttributes.normal||Et.morphAttributes.color,Me=Se!==void 0?Se.length:0,oe=pt.get(bt),je=_.state.lights;if(nt===!0&&(yt===!0||F!==L)){const hn=F===L&&bt.id===U;qt.setState(bt,F,hn)}let Te=!1;bt.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==je.state.version||oe.outputColorSpace!==Yt||ht.isBatchedMesh&&oe.batching===!1||!ht.isBatchedMesh&&oe.batching===!0||ht.isBatchedMesh&&oe.batchingColor===!0&&ht.colorTexture===null||ht.isBatchedMesh&&oe.batchingColor===!1&&ht.colorTexture!==null||ht.isInstancedMesh&&oe.instancing===!1||!ht.isInstancedMesh&&oe.instancing===!0||ht.isSkinnedMesh&&oe.skinning===!1||!ht.isSkinnedMesh&&oe.skinning===!0||ht.isInstancedMesh&&oe.instancingColor===!0&&ht.instanceColor===null||ht.isInstancedMesh&&oe.instancingColor===!1&&ht.instanceColor!==null||ht.isInstancedMesh&&oe.instancingMorph===!0&&ht.morphTexture===null||ht.isInstancedMesh&&oe.instancingMorph===!1&&ht.morphTexture!==null||oe.envMap!==jt||bt.fog===!0&&oe.fog!==Pt||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==qt.numPlanes||oe.numIntersection!==qt.numIntersection)||oe.vertexAlphas!==ue||oe.vertexTangents!==se||oe.morphTargets!==ie||oe.morphNormals!==_e||oe.morphColors!==De||oe.toneMapping!==Ve||oe.morphTargetsCount!==Me)&&(Te=!0):(Te=!0,oe.__version=bt.version);let Mn=oe.currentProgram;Te===!0&&(Mn=aa(bt,ut,ht));let sa=!1,Xe=!1,Ui=!1;const ke=Mn.getUniforms(),En=oe.uniforms;if(I.useProgram(Mn.program)&&(sa=!0,Xe=!0,Ui=!0),bt.id!==U&&(U=bt.id,Xe=!0),sa||L!==F){I.buffers.depth.getReversed()?(Tt.copy(F.projectionMatrix),Kx(Tt),Qx(Tt),ke.setValue(M,"projectionMatrix",Tt)):ke.setValue(M,"projectionMatrix",F.projectionMatrix),ke.setValue(M,"viewMatrix",F.matrixWorldInverse);const vn=ke.map.cameraPosition;vn!==void 0&&vn.setValue(M,zt.setFromMatrixPosition(F.matrixWorld)),V.logarithmicDepthBuffer&&ke.setValue(M,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(bt.isMeshPhongMaterial||bt.isMeshToonMaterial||bt.isMeshLambertMaterial||bt.isMeshBasicMaterial||bt.isMeshStandardMaterial||bt.isShaderMaterial)&&ke.setValue(M,"isOrthographic",F.isOrthographicCamera===!0),L!==F&&(L=F,Xe=!0,Ui=!0)}if(ht.isSkinnedMesh){ke.setOptional(M,ht,"bindMatrix"),ke.setOptional(M,ht,"bindMatrixInverse");const hn=ht.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),ke.setValue(M,"boneTexture",hn.boneTexture,xt))}ht.isBatchedMesh&&(ke.setOptional(M,ht,"batchingTexture"),ke.setValue(M,"batchingTexture",ht._matricesTexture,xt),ke.setOptional(M,ht,"batchingIdTexture"),ke.setValue(M,"batchingIdTexture",ht._indirectTexture,xt),ke.setOptional(M,ht,"batchingColorTexture"),ht._colorsTexture!==null&&ke.setValue(M,"batchingColorTexture",ht._colorsTexture,xt));const sn=Et.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&kt.update(ht,Et,Mn),(Xe||oe.receiveShadow!==ht.receiveShadow)&&(oe.receiveShadow=ht.receiveShadow,ke.setValue(M,"receiveShadow",ht.receiveShadow)),bt.isMeshGouraudMaterial&&bt.envMap!==null&&(En.envMap.value=jt,En.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),bt.isMeshStandardMaterial&&bt.envMap===null&&ut.environment!==null&&(En.envMapIntensity.value=ut.environmentIntensity),Xe&&(ke.setValue(M,"toneMappingExposure",R.toneMappingExposure),oe.needsLights&&ra(En,Ui),Pt&&bt.fog===!0&&mt.refreshFogUniforms(En,Pt),mt.refreshMaterialUniforms(En,bt,et,q,_.state.transmissionRenderTarget[F.id]),bu.upload(M,Ri(oe),En,xt)),bt.isShaderMaterial&&bt.uniformsNeedUpdate===!0&&(bu.upload(M,Ri(oe),En,xt),bt.uniformsNeedUpdate=!1),bt.isSpriteMaterial&&ke.setValue(M,"center",ht.center),ke.setValue(M,"modelViewMatrix",ht.modelViewMatrix),ke.setValue(M,"normalMatrix",ht.normalMatrix),ke.setValue(M,"modelMatrix",ht.matrixWorld),bt.isShaderMaterial||bt.isRawShaderMaterial){const hn=bt.uniformsGroups;for(let vn=0,mi=hn.length;vn<mi;vn++){const Li=hn[vn];at.update(Li,Mn),at.bind(Li,Mn)}}return Mn}function ra(F,ut){F.ambientLightColor.needsUpdate=ut,F.lightProbe.needsUpdate=ut,F.directionalLights.needsUpdate=ut,F.directionalLightShadows.needsUpdate=ut,F.pointLights.needsUpdate=ut,F.pointLightShadows.needsUpdate=ut,F.spotLights.needsUpdate=ut,F.spotLightShadows.needsUpdate=ut,F.rectAreaLights.needsUpdate=ut,F.hemisphereLights.needsUpdate=ut}function tn(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(F,ut,Et){const bt=pt.get(F);bt.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,bt.__autoAllocateDepthBuffer===!1&&(bt.__useRenderToTexture=!1),pt.get(F.texture).__webglTexture=ut,pt.get(F.depthTexture).__webglTexture=bt.__autoAllocateDepthBuffer?void 0:Et,bt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,ut){const Et=pt.get(F);Et.__webglFramebuffer=ut,Et.__useDefaultFramebuffer=ut===void 0};const Ho=M.createFramebuffer();this.setRenderTarget=function(F,ut=0,Et=0){W=F,k=ut,P=Et;let bt=!0,ht=null,Pt=!1,Vt=!1;if(F){const jt=pt.get(F);if(jt.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(M.FRAMEBUFFER,null),bt=!1;else if(jt.__webglFramebuffer===void 0)xt.setupRenderTarget(F);else if(jt.__hasExternalTextures)xt.rebindTextures(F,pt.get(F.texture).__webglTexture,pt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const ie=F.depthTexture;if(jt.__boundDepthTexture!==ie){if(ie!==null&&pt.has(ie)&&(F.width!==ie.image.width||F.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(F)}}const ue=F.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(Vt=!0);const se=pt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(se[ut])?ht=se[ut][Et]:ht=se[ut],Pt=!0):F.samples>0&&xt.useMultisampledRTT(F)===!1?ht=pt.get(F).__webglMultisampledFramebuffer:Array.isArray(se)?ht=se[Et]:ht=se,Z.copy(F.viewport),B.copy(F.scissor),Y=F.scissorTest}else Z.copy(G).multiplyScalar(et).floor(),B.copy(K).multiplyScalar(et).floor(),Y=dt;if(Et!==0&&(ht=Ho),I.bindFramebuffer(M.FRAMEBUFFER,ht)&&bt&&I.drawBuffers(F,ht),I.viewport(Z),I.scissor(B),I.setScissorTest(Y),Pt){const jt=pt.get(F.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+ut,jt.__webglTexture,Et)}else if(Vt){const jt=pt.get(F.texture),ue=ut;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,jt.__webglTexture,Et,ue)}else if(F!==null&&Et!==0){const jt=pt.get(F.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,jt.__webglTexture,Et)}U=-1},this.readRenderTargetPixels=function(F,ut,Et,bt,ht,Pt,Vt,Yt=0){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=pt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Vt!==void 0&&(jt=jt[Vt]),jt){I.bindFramebuffer(M.FRAMEBUFFER,jt);try{const ue=F.textures[Yt],se=ue.format,ie=ue.type;if(!V.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ut>=0&&ut<=F.width-bt&&Et>=0&&Et<=F.height-ht&&(F.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Yt),M.readPixels(ut,Et,bt,ht,It.convert(se),It.convert(ie),Pt))}finally{const ue=W!==null?pt.get(W).__webglFramebuffer:null;I.bindFramebuffer(M.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(F,ut,Et,bt,ht,Pt,Vt,Yt=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=pt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Vt!==void 0&&(jt=jt[Vt]),jt)if(ut>=0&&ut<=F.width-bt&&Et>=0&&Et<=F.height-ht){I.bindFramebuffer(M.FRAMEBUFFER,jt);const ue=F.textures[Yt],se=ue.format,ie=ue.type;if(!V.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,_e),M.bufferData(M.PIXEL_PACK_BUFFER,Pt.byteLength,M.STREAM_READ),F.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Yt),M.readPixels(ut,Et,bt,ht,It.convert(se),It.convert(ie),0);const De=W!==null?pt.get(W).__webglFramebuffer:null;I.bindFramebuffer(M.FRAMEBUFFER,De);const Ve=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await jx(M,Ve,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,_e),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,Pt),M.deleteBuffer(_e),M.deleteSync(Ve),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,ut=null,Et=0){const bt=Math.pow(2,-Et),ht=Math.floor(F.image.width*bt),Pt=Math.floor(F.image.height*bt),Vt=ut!==null?ut.x:0,Yt=ut!==null?ut.y:0;xt.setTexture2D(F,0),M.copyTexSubImage2D(M.TEXTURE_2D,Et,0,0,Vt,Yt,ht,Pt),I.unbindTexture()};const ko=M.createFramebuffer(),Di=M.createFramebuffer();this.copyTextureToTexture=function(F,ut,Et=null,bt=null,ht=0,Pt=null){Pt===null&&(ht!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=ht,ht=0):Pt=0);let Vt,Yt,jt,ue,se,ie,_e,De,Ve;const Se=F.isCompressedTexture?F.mipmaps[Pt]:F.image;if(Et!==null)Vt=Et.max.x-Et.min.x,Yt=Et.max.y-Et.min.y,jt=Et.isBox3?Et.max.z-Et.min.z:1,ue=Et.min.x,se=Et.min.y,ie=Et.isBox3?Et.min.z:0;else{const sn=Math.pow(2,-ht);Vt=Math.floor(Se.width*sn),Yt=Math.floor(Se.height*sn),F.isDataArrayTexture?jt=Se.depth:F.isData3DTexture?jt=Math.floor(Se.depth*sn):jt=1,ue=0,se=0,ie=0}bt!==null?(_e=bt.x,De=bt.y,Ve=bt.z):(_e=0,De=0,Ve=0);const Me=It.convert(ut.format),oe=It.convert(ut.type);let je;ut.isData3DTexture?(xt.setTexture3D(ut,0),je=M.TEXTURE_3D):ut.isDataArrayTexture||ut.isCompressedArrayTexture?(xt.setTexture2DArray(ut,0),je=M.TEXTURE_2D_ARRAY):(xt.setTexture2D(ut,0),je=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,ut.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ut.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,ut.unpackAlignment);const Te=M.getParameter(M.UNPACK_ROW_LENGTH),Mn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),sa=M.getParameter(M.UNPACK_SKIP_PIXELS),Xe=M.getParameter(M.UNPACK_SKIP_ROWS),Ui=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Se.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Se.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,ue),M.pixelStorei(M.UNPACK_SKIP_ROWS,se),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ie);const ke=F.isDataArrayTexture||F.isData3DTexture,En=ut.isDataArrayTexture||ut.isData3DTexture;if(F.isDepthTexture){const sn=pt.get(F),hn=pt.get(ut),vn=pt.get(sn.__renderTarget),mi=pt.get(hn.__renderTarget);I.bindFramebuffer(M.READ_FRAMEBUFFER,vn.__webglFramebuffer),I.bindFramebuffer(M.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Li=0;Li<jt;Li++)ke&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,pt.get(F).__webglTexture,ht,ie+Li),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,pt.get(ut).__webglTexture,Pt,Ve+Li)),M.blitFramebuffer(ue,se,Vt,Yt,_e,De,Vt,Yt,M.DEPTH_BUFFER_BIT,M.NEAREST);I.bindFramebuffer(M.READ_FRAMEBUFFER,null),I.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(ht!==0||F.isRenderTargetTexture||pt.has(F)){const sn=pt.get(F),hn=pt.get(ut);I.bindFramebuffer(M.READ_FRAMEBUFFER,ko),I.bindFramebuffer(M.DRAW_FRAMEBUFFER,Di);for(let vn=0;vn<jt;vn++)ke?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,sn.__webglTexture,ht,ie+vn):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,sn.__webglTexture,ht),En?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,hn.__webglTexture,Pt,Ve+vn):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,hn.__webglTexture,Pt),ht!==0?M.blitFramebuffer(ue,se,Vt,Yt,_e,De,Vt,Yt,M.COLOR_BUFFER_BIT,M.NEAREST):En?M.copyTexSubImage3D(je,Pt,_e,De,Ve+vn,ue,se,Vt,Yt):M.copyTexSubImage2D(je,Pt,_e,De,ue,se,Vt,Yt);I.bindFramebuffer(M.READ_FRAMEBUFFER,null),I.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else En?F.isDataTexture||F.isData3DTexture?M.texSubImage3D(je,Pt,_e,De,Ve,Vt,Yt,jt,Me,oe,Se.data):ut.isCompressedArrayTexture?M.compressedTexSubImage3D(je,Pt,_e,De,Ve,Vt,Yt,jt,Me,Se.data):M.texSubImage3D(je,Pt,_e,De,Ve,Vt,Yt,jt,Me,oe,Se):F.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,Pt,_e,De,Vt,Yt,Me,oe,Se.data):F.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,Pt,_e,De,Se.width,Se.height,Me,Se.data):M.texSubImage2D(M.TEXTURE_2D,Pt,_e,De,Vt,Yt,Me,oe,Se);M.pixelStorei(M.UNPACK_ROW_LENGTH,Te),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Mn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,sa),M.pixelStorei(M.UNPACK_SKIP_ROWS,Xe),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Ui),Pt===0&&ut.generateMipmaps&&M.generateMipmap(je),I.unbindTexture()},this.copyTextureToTexture3D=function(F,ut,Et=null,bt=null,ht=0){return _s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,ut,Et,bt,ht)},this.initRenderTarget=function(F){pt.get(F).__webglFramebuffer===void 0&&xt.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?xt.setTextureCube(F,0):F.isData3DTexture?xt.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?xt.setTexture2DArray(F,0):xt.setTexture2D(F,0),I.unbindTexture()},this.resetState=function(){k=0,P=0,W=null,I.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(e),i.unpackColorSpace=Re._getUnpackColorSpace()}}const s0=5e3,hT=1e3;function dT(o){return o*o*o}function pT(o){return 1-(1-o)**3}function o0(o){return o<.6?.5*dT(o/.6):.5+.5*pT((o-.6)/.4)}const l0=`
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
`;function mT({onExportFrames:o}){const e=za.useRef(null),i=za.useRef(null),r=za.useRef(null);za.useEffect(()=>{let u,f,h;const d=[],p=[];let g=null,y=null;const x=4e3,v=10;let b=null,E=null,S=null,_=null,A=null,C=null,R=null,N=null,k=!1,P=null,W=null,U=null,L,Z;const B=4.5,Y=.4,T=.08;let $=0;const X=.2,q=.4;function et(){const dt=new ds(.05,32,32),j=new pu({color:3829413,specular:2236962,shininess:30,flatShading:!1});P=new Un(dt,j),u.add(P);const nt=new ds(.013,24,24),yt=new pu({color:12237498,specular:1118481,shininess:10});W=new Un(nt,yt),u.add(W),U=new Ug(16777215,10,0,2.2),u.add(U),L=new Ng(16777215,.22),u.add(L),Z=new Lg(16777215,.55),Z.position.set(20,30,40),u.add(Z)}function rt(dt,j){u=new wg,f=new In(10,dt/j,.1,2e3),f.position.z=400,h=new r0({antialias:!0}),h.setSize(dt,j),i.current=h,e.current&&e.current.appendChild(h.domElement);for(let yt=0;yt<s0;yt++){const Tt=new Es(1.5,1.5),wt=new wi({transparent:!0,depthWrite:!1,uniforms:{glowStrength:{value:2.2},colorShift:{value:Math.random()}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv - 0.5;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            varying vec2 vUv;
            uniform float glowStrength;
            uniform float colorShift;
            ${l0}
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
          `}),zt=new Un(Tt,wt);zt.position.set(0,0,0),u.add(zt),d.push(zt);const Ht=Math.random()*2*Math.PI,Zt=Math.acos(2*Math.random()-1),ee=X+Math.random()*(q-X);p.push(new ct(Math.sin(Zt)*Math.cos(Ht)*ee,Math.sin(Zt)*Math.sin(Ht)*ee,Math.cos(Zt)*ee))}const nt=[];for(let yt=0;yt<p.length;yt++){const Tt=p[yt];Tt.z>.15&&Math.abs(Tt.x)<.25&&Math.abs(Tt.y)<.25&&nt.push(yt)}if(nt.length>0){nt.sort((Tt,wt)=>p[Tt].length()-p[wt].length());const yt=Math.floor(nt.length/2);y=nt[yt]}else{for(let yt=0;yt<p.length;yt++)if(p[yt].z>0){y=yt;break}y===null&&(y=0)}if(y!==null&&d[y]){g=d[y],A=p[y].clone().normalize();const yt=new ct().crossVectors(A,new ct(0,0,1)).normalize().multiplyScalar(3);_=A.clone().multiplyScalar(B).add(yt)}E=performance.now(),b=null,et()}function H(){r.current=requestAnimationFrame(H),G(performance.now())}function G(dt){for(let j=0;j<d.length;j++)d[j].position.add(p[j]);if(g&&y!==null&&P&&W&&U){let j=0;if(E!==null){const nt=dt-E;j=Math.min(nt/x,1),j=o0(j)}if(_&&P!==null){const nt=new ct(0,0,0).lerp(_,j);P.position.copy(nt)}if(A&&P!==null&&W!==null){const nt=new ct().crossVectors(A,new ct(0,0,1)).normalize(),yt=new ct().crossVectors(nt,A).normalize(),Tt=new ct().crossVectors(nt,yt).normalize();$+=T*(1/60);const wt=yt.clone().multiplyScalar(Math.cos($)*Y).add(Tt.clone().multiplyScalar(Math.sin($)*Y)),zt=P.position.clone().add(wt);W!==null&&W.position.copy(zt)}U!==null&&(U!=null&&U.position)&&g&&"position"in g&&U.position.copy(g.position)}if(P&&g&&y!==null&&b===null&&E!==null&&dt-E>=hT){b=dt;const j=P.position.clone(),nt=new ct;f.getWorldDirection(nt);const Tt=j.clone().sub(f.position).dot(nt);S=f.position.clone().add(nt.multiplyScalar(Tt))}if(P&&g&&y!==null&&b!==null&&S){const j=Math.min(dt-b,x);let nt=j/x;nt=nt**4;const yt=v,Tt=.002;let zt=Tt+(.25-Tt)*nt;zt=Math.min(zt,.08);const Ht=g.position,Zt=P.position,ee=S.clone().lerp(Zt,zt),Qt=Ht.clone().lerp(Zt,1.18),M=1500,At=x-M;if(j>=At){let ot=(j-At)/M;ot=Math.min(Math.max(ot,0),1),ot=1-(1-ot)**10;const I=.5*.7;if(!k){C=f.position.clone(),R=Zt.clone().sub(f.position).normalize();const pt=new ct;f.getWorldDirection(pt),N=f.position.clone().add(pt),k=!0}if(C&&R)if(ot<1){const tt=Zt.clone().sub(R.clone().multiplyScalar(I));if(f.position.copy(C.clone().lerp(tt,ot)),N){const pt=N.clone().lerp(Zt,ot);f.lookAt(pt)}else f.lookAt(Zt)}else{const tt=Zt.clone().sub(R.clone().multiplyScalar(I));f.position.copy(tt),f.lookAt(Zt)}}else{k=!1,f.position.x+=(Qt.x-f.position.x)*zt,f.position.y+=(Qt.y-f.position.y)*zt;const ot=zt,V=f.position.z,I=Zt.z,tt=p[y].z,pt=.01,xt=I+yt;let st=Math.log(pt/Math.abs(xt-V))/Math.log(1-ot);(!Number.isFinite(st)||st<0)&&(st=0),st=Math.min(st,15);const Q=I+tt*st+yt;f.position.z+=(Q-f.position.z)*ot,f.lookAt(ee)}}h.render(u,f)}function K(){if(!h||!f||!e.current)return;const dt=e.current.clientWidth,j=e.current.clientHeight;f.aspect=dt/j,f.updateProjectionMatrix(),h.setSize(dt,j)}if(e.current){const dt=e.current.clientWidth,j=e.current.clientHeight;rt(dt,j),H(),window.addEventListener("resize",K)}return()=>{var dt;r.current&&cancelAnimationFrame(r.current),window.removeEventListener("resize",K),i.current&&e.current&&e.current.removeChild(i.current.domElement),(dt=i.current)==null||dt.dispose()}},[]);const l=za.useCallback(async()=>{const h=new wg,d=new In(10,1920/1080,.1,2e3);d.position.z=400;const p=new r0({antialias:!0,preserveDrawingBuffer:!0});p.setSize(1920,1080);const g=[],y=[];let x=null,v=null;const b=4e3,E=10;let S=null,_=null;const A=null;let C=null,R=null,N=null,k=null,P=null,W=!1,U=null,L=null,Z=null,B,Y;const T=4.5,$=.4,X=.08;let q=0;const et=.2,rt=.4;function H(){const Tt=new ds(.05,32,32),wt=new pu({color:3829413,specular:2236962,shininess:30,flatShading:!1});U=new Un(Tt,wt),h.add(U);const zt=new ds(.013,24,24),Ht=new pu({color:12237498,specular:1118481,shininess:10});L=new Un(zt,Ht),h.add(L),Z=new Ug(16777215,10,0,2.2),h.add(Z),B=new Ng(16777215,.22),h.add(B),Y=new Lg(16777215,.55),Y.position.set(20,30,40),h.add(Y)}for(let Tt=0;Tt<s0;Tt++){const wt=new Es(1.5,1.5),zt=new wi({transparent:!0,depthWrite:!1,uniforms:{glowStrength:{value:2.2},colorShift:{value:Math.random()}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv - 0.5;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec2 vUv;
          uniform float glowStrength;
          uniform float colorShift;
          ${l0}
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
        `}),Ht=new Un(wt,zt);Ht.position.set(0,0,0),h.add(Ht),g.push(Ht);const Zt=Math.random()*2*Math.PI,ee=Math.acos(2*Math.random()-1),Qt=et+Math.random()*(rt-et);y.push(new ct(Math.sin(ee)*Math.cos(Zt)*Qt,Math.sin(ee)*Math.sin(Zt)*Qt,Math.cos(ee)*Qt))}const G=[];for(let Tt=0;Tt<y.length;Tt++){const wt=y[Tt];wt.z>.15&&Math.abs(wt.x)<.25&&Math.abs(wt.y)<.25&&G.push(Tt)}if(G.length>0){G.sort((wt,zt)=>y[wt].length()-y[zt].length());const Tt=Math.floor(G.length/2);v=G[Tt]}else{for(let Tt=0;Tt<y.length;Tt++)if(y[Tt].z>0){v=Tt;break}v===null&&(v=0)}if(v!==null&&g[v]){x=g[v],R=y[v].clone().normalize();const Tt=new ct().crossVectors(R,new ct(0,0,1)).normalize().multiplyScalar(3);C=R.clone().multiplyScalar(T).add(Tt)}_=0,S=null,H();const K=new rx,dt=b+500,j=60,nt=Math.ceil(dt/1e3*j);q=0;for(let Tt=0;Tt<nt;Tt++){const wt=Tt*(1e3/j);for(let ee=0;ee<g.length;ee++)g[ee].position.add(y[ee]);if(x&&v!==null&&U&&L&&Z){let ee=0;if(_!==null){const Qt=wt-_;ee=Math.min(Qt/b,1),ee=o0(ee)}if(C&&U!==null){const Qt=new ct(0,0,0).lerp(C,ee);U.position.copy(Qt)}if(R&&U!==null&&L!==null){const Qt=new ct().crossVectors(R,new ct(0,0,1)).normalize(),M=new ct().crossVectors(Qt,R).normalize(),At=new ct().crossVectors(Qt,M).normalize();q+=X*(1/60);const ot=M.clone().multiplyScalar(Math.cos(q)*$).add(At.clone().multiplyScalar(Math.sin(q)*$)),V=U.position.clone().add(ot);L!==null&&L.position.copy(V)}Z!==null&&(Z!=null&&Z.position)&&x&&"position"in x&&Z.position.copy(x.position)}if(x&&v!==null&&U&&S!==null&&A){const ee=Math.min(wt-S,b);let Qt=ee/b;Qt=Qt**4;const M=E,At=.002;let V=At+(.25-At)*Qt;V=Math.min(V,.08);const I=x.position,tt=U.position,pt=A.clone().lerp(tt,V),xt=I.clone().lerp(tt,1.18),st=1500,z=b-st;if(ee>=z){let kt=(ee-z)/st;kt=Math.min(Math.max(kt,0),1),kt=1-(1-kt)**10;const Kt=.5*.7;if(!W){N=d.position.clone(),k=tt.clone().sub(d.position).normalize();const re=new ct;d.getWorldDirection(re),P=d.position.clone().add(re),W=!0}if(N&&k)if(kt<1){const It=tt.clone().sub(k.clone().multiplyScalar(Kt));if(d.position.copy(N.clone().lerp(It,kt)),P){const re=P.clone().lerp(tt,kt);d.lookAt(re)}else d.lookAt(tt)}else{const It=tt.clone().sub(k.clone().multiplyScalar(Kt));d.position.copy(It),d.lookAt(tt)}}W=!1,d.position.x+=(xt.x-d.position.x)*V,d.position.y+=(xt.y-d.position.y)*V;const D=V,Q=d.position.z,ft=tt.z,Mt=y[v].z,mt=.01,Ft=ft+M;let Bt=Math.log(mt/Math.abs(Ft-Q))/Math.log(1-D);(!Number.isFinite(Bt)||Bt<0)&&(Bt=0),Bt=Math.min(Bt,15);const Rt=ft+Mt*Bt+M;d.position.z+=(Rt-d.position.z)*D,d.lookAt(pt)}p.render(h,d);const zt=p.domElement.toDataURL("image/png"),Zt=await(await fetch(zt)).blob();K.file(`frame_${String(Tt+1).padStart(4,"0")}.png`,Zt)}const yt=await K.generateAsync({type:"blob"});nx.saveAs(yt,"starfield_frames.zip")},[]);return za.useEffect(()=>{o&&o(l)},[o,l]),Pa.jsx("div",{ref:e,style:{width:"100%",height:"100%",minHeight:400}})}function _T(){const[o,e]=za.useState(0),[i,r]=za.useState(null),l=f=>{r(()=>f)},u=async()=>{i&&await i()};return Pa.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#181a1b"},children:[Pa.jsxs("div",{style:{display:"flex",gap:16,margin:"32px 0 24px 0"},children:[Pa.jsx("button",{onClick:()=>e(f=>f+1),style:{padding:"0.7em 2.2em",fontSize:"1.2em",fontWeight:600,borderRadius:8,border:"1px solid #333",background:"linear-gradient(90deg, #232526 0%, #414345 100%)",color:"#fff",boxShadow:"0 2px 8px #0004",cursor:"pointer",letterSpacing:1},type:"button",children:"Restart Animation"}),Pa.jsx("button",{onClick:u,style:{padding:"0.7em 2.2em",fontSize:"1.2em",fontWeight:600,borderRadius:8,border:"1px solid #333",background:"linear-gradient(90deg, #232526 0%, #414345 100%)",color:"#fff",boxShadow:"0 2px 8px #0004",cursor:"pointer",letterSpacing:1},type:"button",children:"Export Frames (ZIP)"})]}),Pa.jsx("div",{style:{width:"70vw",maxWidth:1100,aspectRatio:"16 / 9",background:"#111",borderRadius:16,overflow:"hidden",boxShadow:"0 4px 32px #000a",border:"1px solid #222",display:"flex",alignItems:"center",justifyContent:"center"},children:Pa.jsx(mT,{onExportFrames:l},o)})]})}const u0=document.getElementById("root");if(u0)$y.createRoot(u0).render(Pa.jsx(_T,{}));else throw new Error('Root element with id "root" not found');
