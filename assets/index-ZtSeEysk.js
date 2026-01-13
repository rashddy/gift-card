(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Xf={exports:{}},Co={};var f0;function nS(){if(f0)return Co;f0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var h0;function iS(){return h0||(h0=1,Xf.exports=nS()),Xf.exports}var ie=iS(),kf={exports:{}},ae={};var d0;function aS(){if(d0)return ae;d0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function v(N,et,gt){this.props=N,this.context=et,this.refs=M,this.updater=gt||R}v.prototype.isReactComponent={},v.prototype.setState=function(N,et){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,et,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function z(){}z.prototype=v.prototype;function L(N,et,gt){this.props=N,this.context=et,this.refs=M,this.updater=gt||R}var O=L.prototype=new z;O.constructor=L,C(O,v.prototype),O.isPureReactComponent=!0;var F=Array.isArray;function B(){}var w={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function A(N,et,gt){var bt=gt.ref;return{$$typeof:o,type:N,key:et,ref:bt!==void 0?bt:null,props:gt}}function D(N,et){return A(N.type,et,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function it(N){var et={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(gt){return et[gt]})}var at=/\/+/g;function ht(N,et){return typeof N=="object"&&N!==null&&N.key!=null?it(""+N.key):et.toString(36)}function ct(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(et){N.status==="pending"&&(N.status="fulfilled",N.value=et)},function(et){N.status==="pending"&&(N.status="rejected",N.reason=et)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function P(N,et,gt,bt,It){var tt=typeof N;(tt==="undefined"||tt==="boolean")&&(N=null);var ut=!1;if(N===null)ut=!0;else switch(tt){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(N.$$typeof){case o:case e:ut=!0;break;case x:return ut=N._init,P(ut(N._payload),et,gt,bt,It)}}if(ut)return It=It(N),ut=bt===""?"."+ht(N,0):bt,F(It)?(gt="",ut!=null&&(gt=ut.replace(at,"$&/")+"/"),P(It,et,gt,"",function(Bt){return Bt})):It!=null&&(V(It)&&(It=D(It,gt+(It.key==null||N&&N.key===It.key?"":(""+It.key).replace(at,"$&/")+"/")+ut)),et.push(It)),1;ut=0;var Dt=bt===""?".":bt+":";if(F(N))for(var Vt=0;Vt<N.length;Vt++)bt=N[Vt],tt=Dt+ht(bt,Vt),ut+=P(bt,et,gt,tt,It);else if(Vt=E(N),typeof Vt=="function")for(N=Vt.call(N),Vt=0;!(bt=N.next()).done;)bt=bt.value,tt=Dt+ht(bt,Vt++),ut+=P(bt,et,gt,tt,It);else if(tt==="object"){if(typeof N.then=="function")return P(ct(N),et,gt,bt,It);throw et=String(N),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ut}function H(N,et,gt){if(N==null)return N;var bt=[],It=0;return P(N,bt,"","",function(tt){return et.call(gt,tt,It++)}),bt}function nt(N){if(N._status===-1){var et=N._result;et=et(),et.then(function(gt){(N._status===0||N._status===-1)&&(N._status=1,N._result=gt)},function(gt){(N._status===0||N._status===-1)&&(N._status=2,N._result=gt)}),N._status===-1&&(N._status=0,N._result=et)}if(N._status===1)return N._result.default;throw N._result}var Mt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},xt={map:H,forEach:function(N,et,gt){H(N,function(){et.apply(this,arguments)},gt)},count:function(N){var et=0;return H(N,function(){et++}),et},toArray:function(N){return H(N,function(et){return et})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ae.Activity=_,ae.Children=xt,ae.Component=v,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=L,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,ae.__COMPILER_RUNTIME={__proto__:null,c:function(N){return w.H.useMemoCache(N)}},ae.cache=function(N){return function(){return N.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(N,et,gt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var bt=C({},N.props),It=N.key;if(et!=null)for(tt in et.key!==void 0&&(It=""+et.key),et)!Z.call(et,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&et.ref===void 0||(bt[tt]=et[tt]);var tt=arguments.length-2;if(tt===1)bt.children=gt;else if(1<tt){for(var ut=Array(tt),Dt=0;Dt<tt;Dt++)ut[Dt]=arguments[Dt+2];bt.children=ut}return A(N.type,It,bt)},ae.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ae.createElement=function(N,et,gt){var bt,It={},tt=null;if(et!=null)for(bt in et.key!==void 0&&(tt=""+et.key),et)Z.call(et,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(It[bt]=et[bt]);var ut=arguments.length-2;if(ut===1)It.children=gt;else if(1<ut){for(var Dt=Array(ut),Vt=0;Vt<ut;Vt++)Dt[Vt]=arguments[Vt+2];It.children=Dt}if(N&&N.defaultProps)for(bt in ut=N.defaultProps,ut)It[bt]===void 0&&(It[bt]=ut[bt]);return A(N,tt,It)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(N){return{$$typeof:d,render:N}},ae.isValidElement=V,ae.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:nt}},ae.memo=function(N,et){return{$$typeof:p,type:N,compare:et===void 0?null:et}},ae.startTransition=function(N){var et=w.T,gt={};w.T=gt;try{var bt=N(),It=w.S;It!==null&&It(gt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(B,Mt)}catch(tt){Mt(tt)}finally{et!==null&&gt.types!==null&&(et.types=gt.types),w.T=et}},ae.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},ae.use=function(N){return w.H.use(N)},ae.useActionState=function(N,et,gt){return w.H.useActionState(N,et,gt)},ae.useCallback=function(N,et){return w.H.useCallback(N,et)},ae.useContext=function(N){return w.H.useContext(N)},ae.useDebugValue=function(){},ae.useDeferredValue=function(N,et){return w.H.useDeferredValue(N,et)},ae.useEffect=function(N,et){return w.H.useEffect(N,et)},ae.useEffectEvent=function(N){return w.H.useEffectEvent(N)},ae.useId=function(){return w.H.useId()},ae.useImperativeHandle=function(N,et,gt){return w.H.useImperativeHandle(N,et,gt)},ae.useInsertionEffect=function(N,et){return w.H.useInsertionEffect(N,et)},ae.useLayoutEffect=function(N,et){return w.H.useLayoutEffect(N,et)},ae.useMemo=function(N,et){return w.H.useMemo(N,et)},ae.useOptimistic=function(N,et){return w.H.useOptimistic(N,et)},ae.useReducer=function(N,et,gt){return w.H.useReducer(N,et,gt)},ae.useRef=function(N){return w.H.useRef(N)},ae.useState=function(N){return w.H.useState(N)},ae.useSyncExternalStore=function(N,et,gt){return w.H.useSyncExternalStore(N,et,gt)},ae.useTransition=function(){return w.H.useTransition()},ae.version="19.2.3",ae}var p0;function Sd(){return p0||(p0=1,kf.exports=aS()),kf.exports}var Ke=Sd(),Wf={exports:{}},Do={},qf={exports:{}},Yf={};var m0;function rS(){return m0||(m0=1,(function(o){function e(P,H){var nt=P.length;P.push(H);t:for(;0<nt;){var Mt=nt-1>>>1,xt=P[Mt];if(0<l(xt,H))P[Mt]=H,P[nt]=xt,nt=Mt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var H=P[0],nt=P.pop();if(nt!==H){P[0]=nt;t:for(var Mt=0,xt=P.length,N=xt>>>1;Mt<N;){var et=2*(Mt+1)-1,gt=P[et],bt=et+1,It=P[bt];if(0>l(gt,nt))bt<xt&&0>l(It,gt)?(P[Mt]=It,P[bt]=nt,Mt=bt):(P[Mt]=gt,P[et]=nt,Mt=et);else if(bt<xt&&0>l(It,nt))P[Mt]=It,P[bt]=nt,Mt=bt;else break t}}return H}function l(P,H){var nt=P.sortIndex-H.sortIndex;return nt!==0?nt:P.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,_=null,S=3,E=!1,R=!1,C=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function O(P){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=P)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function F(P){if(C=!1,O(P),!R)if(i(m)!==null)R=!0,B||(B=!0,it());else{var H=i(p);H!==null&&ct(F,H.startTime-P)}}var B=!1,w=-1,Z=5,A=-1;function D(){return M?!0:!(o.unstable_now()-A<Z)}function V(){if(M=!1,B){var P=o.unstable_now();A=P;var H=!0;try{t:{R=!1,C&&(C=!1,z(w),w=-1),E=!0;var nt=S;try{e:{for(O(P),_=i(m);_!==null&&!(_.expirationTime>P&&D());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,S=_.priorityLevel;var xt=Mt(_.expirationTime<=P);if(P=o.unstable_now(),typeof xt=="function"){_.callback=xt,O(P),H=!0;break e}_===i(m)&&r(m),O(P)}else r(m);_=i(m)}if(_!==null)H=!0;else{var N=i(p);N!==null&&ct(F,N.startTime-P),H=!1}}break t}finally{_=null,S=nt,E=!1}H=void 0}}finally{H?it():B=!1}}}var it;if(typeof L=="function")it=function(){L(V)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ht=at.port2;at.port1.onmessage=V,it=function(){ht.postMessage(null)}}else it=function(){v(V,0)};function ct(P,H){w=v(function(){P(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var nt=S;S=H;try{return P()}finally{S=nt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var nt=S;S=P;try{return H()}finally{S=nt}},o.unstable_scheduleCallback=function(P,H,nt){var Mt=o.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?Mt+nt:Mt):nt=Mt,P){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=nt+xt,P={id:x++,callback:H,priorityLevel:P,startTime:nt,expirationTime:xt,sortIndex:-1},nt>Mt?(P.sortIndex=nt,e(p,P),i(m)===null&&P===i(p)&&(C?(z(w),w=-1):C=!0,ct(F,nt-Mt))):(P.sortIndex=xt,e(m,P),R||E||(R=!0,B||(B=!0,it()))),P},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(P){var H=S;return function(){var nt=S;S=H;try{return P.apply(this,arguments)}finally{S=nt}}}})(Yf)),Yf}var g0;function sS(){return g0||(g0=1,qf.exports=rS()),qf.exports}var jf={exports:{}},wn={};var _0;function oS(){if(_0)return wn;_0=1;var o=Sd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},wn.flushSync=function(m){var p=h.T,x=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=x,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=d(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.2.3",wn}var v0;function lS(){if(v0)return jf.exports;v0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),jf.exports=oS(),jf.exports}var x0;function uS(){if(x0)return Do;x0=1;var o=sS(),e=Sd(),i=lS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,T=u.child;T;){if(T===a){g=!0,a=u,s=f;break}if(T===s){g=!0,s=u,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=u;break}if(T===s){g=!0,s=f,a=u;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case L:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case w:return n=t.displayName||null,n!==null?n:ht(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return ht(t(n))}catch{}}return null}var ct=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},Mt=[],xt=-1;function N(t){return{current:t}}function et(t){0>xt||(t.current=Mt[xt],Mt[xt]=null,xt--)}function gt(t,n){xt++,Mt[xt]=t.current,t.current=n}var bt=N(null),It=N(null),tt=N(null),ut=N(null);function Dt(t,n){switch(gt(tt,n),gt(It,t),gt(bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Og(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Og(n),t=Pg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}et(bt),gt(bt,t)}function Vt(){et(bt),et(It),et(tt)}function Bt(t){t.memoizedState!==null&&gt(ut,t);var n=bt.current,a=Pg(n,t.type);n!==a&&(gt(It,t),gt(bt,a))}function he(t){It.current===t&&(et(bt),et(It)),ut.current===t&&(et(ut),To._currentValue=nt)}var Qe,ge;function de(t){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+t+ge}var Re=!1;function se(t,n){if(!t||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var $=ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(ot){$=ot}t.call(mt.prototype)}}else{try{throw Error()}catch(ot){$=ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&$&&typeof ot.stack=="string")return[ot.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var I=g.split(`
`),Q=T.split(`
`);for(u=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(s===I.length||u===Q.length)for(s=I.length-1,u=Q.length-1;1<=s&&0<=u&&I[s]!==Q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(I[s]!==Q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||I[s]!==Q[u]){var ft=`
`+I[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=u);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?de(a):""}function Je(t,n){switch(t.tag){case 26:case 27:case 5:return de(t.type);case 16:return de("Lazy");case 13:return t.child!==n&&n!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return se(t.type,!1);case 11:return se(t.type.render,!1);case 1:return se(t.type,!0);case 31:return de("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Je(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ye=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,Ue=o.unstable_cancelCallback,qt=o.unstable_shouldYield,U=o.unstable_requestPaint,y=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,jt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Xt=o.log,te=o.unstable_setDisableYieldValue,yt=null,Et=null;function zt(t){if(typeof Xt=="function"&&te(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(yt,t)}catch{}}var Ot=Math.clz32?Math.clz32:k,Ct=Math.log,le=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(Ct(t)/le|0)|0}var Ut=256,Tt=262144,Pt=4194304;function St(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=St(s):(g&=T,g!==0?u=St(g):a||(a=T&~t,a!==0&&(u=St(a))))):(T=s&~f,T!==0?u=St(T):g!==0?u=St(g):a||(a=s&~t,a!==0&&(u=St(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function At(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ee(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pi(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Ot(a),mt=1<<ft;T[ft]=0,I[ft]=-1;var $=Q[ft];if($!==null)for(Q[ft]=null,ft=0;ft<$.length;ft++){var ot=$[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}s!==0&&jo(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function jo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ot(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ps(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ot(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function wr(t,n){var a=n&-n;return a=(a&42)!==0?1:zs(a),(a&(t.suspendedLanes|n))!==0?0:a}function zs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ur(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:a0(t.type))}function Ri(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ei=Math.random().toString(36).slice(2),rn="__reactFiber$"+ei,vn="__reactProps$"+ei,mi="__reactContainer$"+ei,Nr="__reactEvents$"+ei,Lr="__reactListeners$"+ei,Zo="__reactHandles$"+ei,Is="__reactResources$"+ei,tr="__reactMarker$"+ei;function Bs(t){delete t[rn],delete t[vn],delete t[Nr],delete t[Lr],delete t[Zo]}function xa(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[mi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Vg(t);t!==null;){if(a=t[rn])return a;t=Vg(t)}return n}t=a,a=t.parentNode}return null}function Sa(t){if(t=t[rn]||t[mi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function er(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ma(t){var n=t[Is];return n||(n=t[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function b(t){t[tr]=!0}var q=new Set,st={};function J(t,n){j(t,n),j(t+"Capture",n)}function j(t,n){for(st[t]=n,t=0;t<n.length;t++)q.add(n[t])}var wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ft={},Nt={};function Ht(t){return Ye.call(Nt,t)?!0:Ye.call(Ft,t)?!1:wt.test(t)?Nt[t]=!0:(Ft[t]=!0,!1)}function kt(t,n,a){if(Ht(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Qt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Wt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Jt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ce(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ke(t){if(!t._valueTracker){var n=Ce(t)?"checked":"value";t._valueTracker=je(t,n,""+t[n])}}function Ne(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ce(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var De=/[\n"\\]/g;function ne(t){return t.replace(De,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xn(t,n,a,s,u,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Jt(n)):t.value!==""+Jt(n)&&(t.value=""+Jt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,g,Jt(n)):a!=null?Sn(t,g,Jt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Jt(T):t.removeAttribute("name")}function Gi(t,n,a,s,u,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ke(t);return}a=a!=null?""+Jt(a):"",n=n!=null?""+Jt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),ke(t)}function Sn(t,n,a){n==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ni(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Jt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Oe(t,n,a){if(n!=null&&(n=""+Jt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Jt(a):""}function Mn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Jt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),ke(t)}function hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var yn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||yn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Or(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&En(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&En(t,f,n[f])}function gi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(t){return $_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Vi(){}var Bu=null;function Hu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pr=null,zr=null;function Ld(t){var n=Sa(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(xn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ne(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[vn]||null;if(!u)throw Error(r(90));xn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ne(s)}break t;case"textarea":Oe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ni(t,!!a.multiple,n,!1)}}}var Gu=!1;function Od(t,n,a){if(Gu)return t(n,a);Gu=!0;try{var s=t(n);return s}finally{if(Gu=!1,(Pr!==null||zr!==null)&&(Fl(),Pr&&(n=Pr,t=zr,zr=Pr=null,Ld(n),t)))for(n=0;n<t.length;n++)Ld(t[n])}}function Hs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=!1;if(Xi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Vu=!1}var ya=null,Xu=null,Qo=null;function Pd(){if(Qo)return Qo;var t,n=Xu,a=n.length,s,u="value"in ya?ya.value:ya.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return Qo=u.slice(t,1<s?1-s:void 0)}function Jo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function zd(){return!1}function Fn(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:zd,this.isPropagationStopped=zd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Fn(nr),Vs=_({},nr,{view:0,detail:0}),tv=Fn(Vs),ku,Wu,Xs,el=_({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(ku=t.screenX-Xs.screenX,Wu=t.screenY-Xs.screenY):Wu=ku=0,Xs=t),ku)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),Fd=Fn(el),ev=_({},el,{dataTransfer:0}),nv=Fn(ev),iv=_({},Vs,{relatedTarget:0}),qu=Fn(iv),av=_({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),rv=Fn(av),sv=_({},nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ov=Fn(sv),lv=_({},nr,{data:0}),Id=Fn(lv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=fv[t])?!!n[t]:!1}function Yu(){return hv}var dv=_({},Vs,{key:function(t){if(t.key){var n=uv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pv=Fn(dv),mv=_({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=Fn(mv),gv=_({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),_v=Fn(gv),vv=_({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xv=Fn(vv),Sv=_({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mv=Fn(Sv),yv=_({},nr,{newState:0,oldState:0}),Ev=Fn(yv),Tv=[9,13,27,32],ju=Xi&&"CompositionEvent"in window,ks=null;Xi&&"documentMode"in document&&(ks=document.documentMode);var bv=Xi&&"TextEvent"in window&&!ks,Hd=Xi&&(!ju||ks&&8<ks&&11>=ks),Gd=" ",Vd=!1;function Xd(t,n){switch(t){case"keyup":return Tv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fr=!1;function Av(t,n){switch(t){case"compositionend":return kd(n);case"keypress":return n.which!==32?null:(Vd=!0,Gd);case"textInput":return t=n.data,t===Gd&&Vd?null:t;default:return null}}function Rv(t,n){if(Fr)return t==="compositionend"||!ju&&Xd(t,n)?(t=Pd(),Qo=Xu=ya=null,Fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hd&&n.locale!=="ko"?null:n.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Cv[t.type]:n==="textarea"}function qd(t,n,a,s){Pr?zr?zr.push(s):zr=[s]:Pr=s,n=kl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ws=null,qs=null;function Dv(t){Cg(t,0)}function nl(t){var n=er(t);if(Ne(n))return t}function Yd(t,n){if(t==="change")return n}var jd=!1;if(Xi){var Zu;if(Xi){var Ku="oninput"in document;if(!Ku){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),Ku=typeof Zd.oninput=="function"}Zu=Ku}else Zu=!1;jd=Zu&&(!document.documentMode||9<document.documentMode)}function Kd(){Ws&&(Ws.detachEvent("onpropertychange",Qd),qs=Ws=null)}function Qd(t){if(t.propertyName==="value"&&nl(qs)){var n=[];qd(n,qs,t,Hu(t)),Od(Dv,n)}}function wv(t,n,a){t==="focusin"?(Kd(),Ws=n,qs=a,Ws.attachEvent("onpropertychange",Qd)):t==="focusout"&&Kd()}function Uv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nl(qs)}function Nv(t,n){if(t==="click")return nl(n)}function Lv(t,n){if(t==="input"||t==="change")return nl(n)}function Ov(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Ov;function Ys(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ye.call(n,u)||!Wn(t[u],n[u]))return!1}return!0}function Jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $d(t,n){var a=Jd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Jd(a)}}function tp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?tp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ep(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Zt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Zt(t.document)}return n}function Qu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Pv=Xi&&"documentMode"in document&&11>=document.documentMode,Ir=null,Ju=null,js=null,$u=!1;function np(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$u||Ir==null||Ir!==Zt(s)||(s=Ir,"selectionStart"in s&&Qu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&Ys(js,s)||(js=s,s=kl(Ju,"onSelect"),0<s.length&&(n=new tl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ir)))}function ir(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Br={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},tc={},ip={};Xi&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function ar(t){if(tc[t])return tc[t];if(!Br[t])return t;var n=Br[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ip)return tc[t]=n[a];return t}var ap=ar("animationend"),rp=ar("animationiteration"),sp=ar("animationstart"),zv=ar("transitionrun"),Fv=ar("transitionstart"),Iv=ar("transitioncancel"),op=ar("transitionend"),lp=new Map,ec="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ec.push("scrollEnd");function _i(t,n){lp.set(t,n),J(n,[t])}var il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Hr=0,nc=0;function al(){for(var t=Hr,n=nc=Hr=0;n<t;){var a=ii[n];ii[n++]=null;var s=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&up(a,u,f)}}function rl(t,n,a,s){ii[Hr++]=t,ii[Hr++]=n,ii[Hr++]=a,ii[Hr++]=s,nc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function ic(t,n,a,s){return rl(t,n,a,s),sl(t)}function rr(t,n){return rl(t,null,null,n),sl(t)}function up(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ot(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function sl(t){if(50<_o)throw _o=0,df=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gr={};function Bv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new Bv(t,n,a,s)}function ac(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ki(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function cp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ol(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")ac(t)&&(g=1);else if(typeof t=="string")g=kx(t,a,bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return t=qn(31,a,n,u),t.elementType=A,t.lanes=f,t;case C:return sr(a.children,u,f,n);case M:g=8,u|=24;break;case v:return t=qn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case F:return t=qn(13,a,n,u),t.elementType=F,t.lanes=f,t;case B:return t=qn(19,a,n,u),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:g=10;break t;case z:g=9;break t;case O:g=11;break t;case w:g=14;break t;case Z:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function sr(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function rc(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function fp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function sc(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var hp=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=hp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},hp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Vr=[],Xr=0,ll=null,Zs=0,ri=[],si=0,Ea=null,Ci=1,Di="";function Wi(t,n){Vr[Xr++]=Zs,Vr[Xr++]=ll,ll=t,Zs=n}function dp(t,n,a){ri[si++]=Ci,ri[si++]=Di,ri[si++]=Ea,Ea=t;var s=Ci;t=Di;var u=32-Ot(s)-1;s&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Ci=1<<32-Ot(n)+u|a<<u|s,Di=f+t}else Ci=1<<f|a<<u|s,Di=t}function oc(t){t.return!==null&&(Wi(t,1),dp(t,1,0))}function lc(t){for(;t===ll;)ll=Vr[--Xr],Vr[Xr]=null,Zs=Vr[--Xr],Vr[Xr]=null;for(;t===Ea;)Ea=ri[--si],ri[si]=null,Di=ri[--si],ri[si]=null,Ci=ri[--si],ri[si]=null}function pp(t,n){ri[si++]=Ci,ri[si++]=Di,ri[si++]=Ea,Ci=n.id,Di=n.overflow,Ea=t}var Tn=null,We=null,xe=!1,Ta=null,oi=!1,uc=Error(r(519));function ba(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ks(ai(n,t)),uc}function mp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[vn]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)me(xo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Gi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Mn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ng(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=Vi),n=!0):n=!1,n||ba(t,!0)}function gp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:Tn=Tn.return}}function kr(t){if(t!==Tn)return!1;if(!xe)return gp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Cf(t.type,t.memoizedProps)),a=!a),a&&We&&ba(t),gp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=Gg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=Gg(t)}else n===27?(n=We,Ba(t.type)?(t=Lf,Lf=null,We=t):We=n):We=Tn?ui(t.stateNode.nextSibling):null;return!0}function or(){We=Tn=null,xe=!1}function cc(){var t=Ta;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),Ta=null),t}function Ks(t){Ta===null?Ta=[t]:Ta.push(t)}var fc=N(null),lr=null,qi=null;function Aa(t,n,a){gt(fc,n._currentValue),n._currentValue=a}function Yi(t){t._currentValue=fc.current,et(fc)}function hc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function dc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),hc(f.return,a,t),s||(g=null);break t}f=T.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),hc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Wr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=u.type;Wn(u.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(u===ut.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(To):t=[To])}u=u.return}t!==null&&dc(n,t,a,s),n.flags|=262144}function ul(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ur(t){lr=t,qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return _p(lr,t)}function cl(t,n){return lr===null&&ur(t),_p(t,n)}function _p(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(t===null)throw Error(r(308));qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else qi=qi.next=n;return a}var Hv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Gv=o.unstable_scheduleCallback,Vv=o.unstable_NormalPriority,sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pc(){return{controller:new Hv,data:new Map,refCount:0}}function Qs(t){t.refCount--,t.refCount===0&&Gv(Vv,function(){t.controller.abort()})}var Js=null,mc=0,qr=0,Yr=null;function Xv(t,n){if(Js===null){var a=Js=[];mc=0,qr=xf(),Yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return mc++,n.then(vp,vp),n}function vp(){if(--mc===0&&Js!==null){Yr!==null&&(Yr.status="fulfilled");var t=Js;Js=null,qr=0,Yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function kv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var xp=P.S;P.S=function(t,n){ng=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xv(t,n),xp!==null&&xp(t,n)};var cr=N(null);function gc(){var t=cr.current;return t!==null?t:Xe.pooledCache}function fl(t,n){n===null?gt(cr,cr.current):gt(cr,n.pool)}function Sp(){var t=gc();return t===null?null:{parent:sn._currentValue,pool:t}}var jr=Error(r(460)),_c=Error(r(474)),hl=Error(r(542)),dl={then:function(){}};function Mp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Vi,Vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t;default:if(typeof n.status=="string")n.then(Vi,Vi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tp(t),t}throw hr=n,jr}}function fr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hr=a,jr):a}}var hr=null;function Ep(){if(hr===null)throw Error(r(459));var t=hr;return hr=null,t}function Tp(t){if(t===jr||t===hl)throw Error(r(483))}var Zr=null,$s=0;function pl(t){var n=$s;return $s+=1,Zr===null&&(Zr=[]),yp(Zr,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ml(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function bp(t){function n(Y,X){if(t){var K=Y.deletions;K===null?(Y.deletions=[X],Y.flags|=16):K.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function s(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=ki(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<X?(Y.flags|=67108866,X):K):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,X,K,pt){return X===null||X.tag!==6?(X=rc(K,Y.mode,pt),X.return=Y,X):(X=u(X,K),X.return=Y,X)}function I(Y,X,K,pt){var Kt=K.type;return Kt===C?ft(Y,X,K.props.children,pt,K.key):X!==null&&(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===Z&&fr(Kt)===X.type)?(X=u(X,K.props),to(X,K),X.return=Y,X):(X=ol(K.type,K.key,K.props,null,Y.mode,pt),to(X,K),X.return=Y,X)}function Q(Y,X,K,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==K.containerInfo||X.stateNode.implementation!==K.implementation?(X=sc(K,Y.mode,pt),X.return=Y,X):(X=u(X,K.children||[]),X.return=Y,X)}function ft(Y,X,K,pt,Kt){return X===null||X.tag!==7?(X=sr(K,Y.mode,pt,Kt),X.return=Y,X):(X=u(X,K),X.return=Y,X)}function mt(Y,X,K){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=rc(""+X,Y.mode,K),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return K=ol(X.type,X.key,X.props,null,Y.mode,K),to(K,X),K.return=Y,K;case R:return X=sc(X,Y.mode,K),X.return=Y,X;case Z:return X=fr(X),mt(Y,X,K)}if(ct(X)||it(X))return X=sr(X,Y.mode,K,null),X.return=Y,X;if(typeof X.then=="function")return mt(Y,pl(X),K);if(X.$$typeof===L)return mt(Y,cl(Y,X),K);ml(Y,X)}return null}function $(Y,X,K,pt){var Kt=X!==null?X.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Kt!==null?null:T(Y,X,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Kt?I(Y,X,K,pt):null;case R:return K.key===Kt?Q(Y,X,K,pt):null;case Z:return K=fr(K),$(Y,X,K,pt)}if(ct(K)||it(K))return Kt!==null?null:ft(Y,X,K,pt,null);if(typeof K.then=="function")return $(Y,X,pl(K),pt);if(K.$$typeof===L)return $(Y,X,cl(Y,K),pt);ml(Y,K)}return null}function ot(Y,X,K,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(K)||null,T(X,Y,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return Y=Y.get(pt.key===null?K:pt.key)||null,I(X,Y,pt,Kt);case R:return Y=Y.get(pt.key===null?K:pt.key)||null,Q(X,Y,pt,Kt);case Z:return pt=fr(pt),ot(Y,X,K,pt,Kt)}if(ct(pt)||it(pt))return Y=Y.get(K)||null,ft(X,Y,pt,Kt,null);if(typeof pt.then=="function")return ot(Y,X,K,pl(pt),Kt);if(pt.$$typeof===L)return ot(Y,X,K,cl(X,pt),Kt);ml(X,pt)}return null}function Gt(Y,X,K,pt){for(var Kt=null,Te=null,Yt=X,ue=X=0,ve=null;Yt!==null&&ue<K.length;ue++){Yt.index>ue?(ve=Yt,Yt=null):ve=Yt.sibling;var be=$(Y,Yt,K[ue],pt);if(be===null){Yt===null&&(Yt=ve);break}t&&Yt&&be.alternate===null&&n(Y,Yt),X=f(be,X,ue),Te===null?Kt=be:Te.sibling=be,Te=be,Yt=ve}if(ue===K.length)return a(Y,Yt),xe&&Wi(Y,ue),Kt;if(Yt===null){for(;ue<K.length;ue++)Yt=mt(Y,K[ue],pt),Yt!==null&&(X=f(Yt,X,ue),Te===null?Kt=Yt:Te.sibling=Yt,Te=Yt);return xe&&Wi(Y,ue),Kt}for(Yt=s(Yt);ue<K.length;ue++)ve=ot(Yt,Y,ue,K[ue],pt),ve!==null&&(t&&ve.alternate!==null&&Yt.delete(ve.key===null?ue:ve.key),X=f(ve,X,ue),Te===null?Kt=ve:Te.sibling=ve,Te=ve);return t&&Yt.forEach(function(ka){return n(Y,ka)}),xe&&Wi(Y,ue),Kt}function $t(Y,X,K,pt){if(K==null)throw Error(r(151));for(var Kt=null,Te=null,Yt=X,ue=X=0,ve=null,be=K.next();Yt!==null&&!be.done;ue++,be=K.next()){Yt.index>ue?(ve=Yt,Yt=null):ve=Yt.sibling;var ka=$(Y,Yt,be.value,pt);if(ka===null){Yt===null&&(Yt=ve);break}t&&Yt&&ka.alternate===null&&n(Y,Yt),X=f(ka,X,ue),Te===null?Kt=ka:Te.sibling=ka,Te=ka,Yt=ve}if(be.done)return a(Y,Yt),xe&&Wi(Y,ue),Kt;if(Yt===null){for(;!be.done;ue++,be=K.next())be=mt(Y,be.value,pt),be!==null&&(X=f(be,X,ue),Te===null?Kt=be:Te.sibling=be,Te=be);return xe&&Wi(Y,ue),Kt}for(Yt=s(Yt);!be.done;ue++,be=K.next())be=ot(Yt,Y,ue,be.value,pt),be!==null&&(t&&be.alternate!==null&&Yt.delete(be.key===null?ue:be.key),X=f(be,X,ue),Te===null?Kt=be:Te.sibling=be,Te=be);return t&&Yt.forEach(function(eS){return n(Y,eS)}),xe&&Wi(Y,ue),Kt}function Ve(Y,X,K,pt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:t:{for(var Kt=K.key;X!==null;){if(X.key===Kt){if(Kt=K.type,Kt===C){if(X.tag===7){a(Y,X.sibling),pt=u(X,K.props.children),pt.return=Y,Y=pt;break t}}else if(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===Z&&fr(Kt)===X.type){a(Y,X.sibling),pt=u(X,K.props),to(pt,K),pt.return=Y,Y=pt;break t}a(Y,X);break}else n(Y,X);X=X.sibling}K.type===C?(pt=sr(K.props.children,Y.mode,pt,K.key),pt.return=Y,Y=pt):(pt=ol(K.type,K.key,K.props,null,Y.mode,pt),to(pt,K),pt.return=Y,Y=pt)}return g(Y);case R:t:{for(Kt=K.key;X!==null;){if(X.key===Kt)if(X.tag===4&&X.stateNode.containerInfo===K.containerInfo&&X.stateNode.implementation===K.implementation){a(Y,X.sibling),pt=u(X,K.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,X);break}else n(Y,X);X=X.sibling}pt=sc(K,Y.mode,pt),pt.return=Y,Y=pt}return g(Y);case Z:return K=fr(K),Ve(Y,X,K,pt)}if(ct(K))return Gt(Y,X,K,pt);if(it(K)){if(Kt=it(K),typeof Kt!="function")throw Error(r(150));return K=Kt.call(K),$t(Y,X,K,pt)}if(typeof K.then=="function")return Ve(Y,X,pl(K),pt);if(K.$$typeof===L)return Ve(Y,X,cl(Y,K),pt);ml(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,X!==null&&X.tag===6?(a(Y,X.sibling),pt=u(X,K),pt.return=Y,Y=pt):(a(Y,X),pt=rc(K,Y.mode,pt),pt.return=Y,Y=pt),g(Y)):a(Y,X)}return function(Y,X,K,pt){try{$s=0;var Kt=Ve(Y,X,K,pt);return Zr=null,Kt}catch(Yt){if(Yt===jr||Yt===hl)throw Yt;var Te=qn(29,Yt,null,Y.mode);return Te.lanes=pt,Te.return=Y,Te}}}var dr=bp(!0),Ap=bp(!1),Ra=!1;function vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=sl(t),up(t,null,a),n}return rl(t,s,n,a),sl(t)}function eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ps(t,a)}}function Sc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mc=!1;function no(){if(Mc){var t=Yr;if(t!==null)throw t}}function io(t,n,a,s){Mc=!1;var u=t.updateQueue;Ra=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,Q=I.next;I.next=null,g===null?f=Q:g.next=Q,g=I;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==g&&(T===null?ft.firstBaseUpdate=Q:T.next=Q,ft.lastBaseUpdate=I))}if(f!==null){var mt=u.baseState;g=0,ft=Q=I=null,T=f;do{var $=T.lane&-536870913,ot=$!==T.lane;if(ot?(_e&$)===$:(s&$)===$){$!==0&&$===qr&&(Mc=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Gt=t,$t=T;$=n;var Ve=a;switch($t.tag){case 1:if(Gt=$t.payload,typeof Gt=="function"){mt=Gt.call(Ve,mt,$);break t}mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=$t.payload,$=typeof Gt=="function"?Gt.call(Ve,mt,$):Gt,$==null)break t;mt=_({},mt,$);break t;case 2:Ra=!0}}$=T.callback,$!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[$]:ot.push($))}else ot={lane:$,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(Q=ft=ot,I=mt):ft=ft.next=ot,g|=$;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(I=mt),u.baseState=I,u.firstBaseUpdate=Q,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Oa|=g,t.lanes=g,t.memoizedState=mt}}function Rp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Cp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Rp(a[t],n)}var Kr=N(null),gl=N(0);function Dp(t,n){t=na,gt(gl,t),gt(Kr,n),na=t|n.baseLanes}function yc(){gt(gl,na),gt(Kr,Kr.current)}function Ec(){na=gl.current,et(Kr),et(gl)}var Yn=N(null),li=null;function wa(t){var n=t.alternate;gt(en,en.current&1),gt(Yn,t),li===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(li=t)}function Tc(t){gt(en,en.current),gt(Yn,t),li===null&&(li=t)}function wp(t){t.tag===22?(gt(en,en.current),gt(Yn,t),li===null&&(li=t)):Ua()}function Ua(){gt(en,en.current),gt(Yn,Yn.current)}function jn(t){et(Yn),li===t&&(li=null),et(en)}var en=N(0);function _l(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Uf(a)||Nf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ji=0,oe=null,He=null,on=null,vl=!1,Qr=!1,pr=!1,xl=0,ao=0,Jr=null,Wv=0;function $e(){throw Error(r(321))}function bc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Ac(t,n,a,s,u,f){return ji=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?dm:Gc,pr=!1,f=a(s,u),pr=!1,Qr&&(f=Np(n,a,s,u)),Up(t),f}function Up(t){P.H=oo;var n=He!==null&&He.next!==null;if(ji=0,on=He=oe=null,vl=!1,ao=0,Jr=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&ul(t)&&(ln=!0))}function Np(t,n,a,s){oe=t;var u=0;do{if(Qr&&(Jr=null),ao=0,Qr=!1,25<=u)throw Error(r(301));if(u+=1,on=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=pm,f=n(a,s)}while(Qr);return f}function qv(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(oe.flags|=1024),n}function Rc(){var t=xl!==0;return xl=0,t}function Cc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Dc(t){if(vl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vl=!1}ji=0,on=He=oe=null,Qr=!1,ao=xl=0,Jr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?oe.memoizedState=on=t:on=on.next=t,on}function nn(){if(He===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=on===null?oe.memoizedState:on.next;if(n!==null)on=n,He=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},on===null?oe.memoizedState=on=t:on=on.next=t}return on}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=ao;return ao+=1,Jr===null&&(Jr=[]),t=yp(Jr,t,n),n=oe,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?dm:Gc),t}function Ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===L)return bn(t)}throw Error(r(438,String(t)))}function wc(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=D;return n.index++,a}function Zi(t,n){return typeof n=="function"?n(t):n}function yl(t){var n=nn();return Uc(n,He,t)}function Uc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=g=null,I=null,Q=n,ft=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(_e&mt)===mt:(ji&mt)===mt){var $=Q.revertLane;if($===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===qr&&(ft=!0);else if((ji&$)===$){Q=Q.next,$===qr&&(ft=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(T=I=mt,g=f):I=I.next=mt,oe.lanes|=$,Oa|=$;mt=Q.action,pr&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else $={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(T=I=$,g=f):I=I.next=$,oe.lanes|=mt,Oa|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?g=f:I.next=T,!Wn(f,t.memoizedState)&&(ln=!0,ft&&(a=Yr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=I,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Nc(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Lp(t,n,a){var s=oe,u=nn(),f=xe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Wn((He||u).memoizedState,a);if(g&&(u.memoizedState=a,ln=!0),u=u.queue,Pc(zp.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,$r(9,{destroy:void 0},Pp.bind(null,s,u,a,n),null),Xe===null)throw Error(r(349));f||(ji&127)!==0||Op(s,n,a)}return a}function Op(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Sl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Pp(t,n,a,s){n.value=a,n.getSnapshot=s,Fp(n)&&Ip(t)}function zp(t,n,a){return a(function(){Fp(n)&&Ip(t)})}function Fp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Ip(t){var n=rr(t,2);n!==null&&Vn(n,t,2)}function Lc(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),pr){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},n}function Bp(t,n,a,s){return t.baseState=a,Uc(t,He,typeof s=="function"?s:Zi)}function Yv(t,n,a,s,u){if(bl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Hp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Hp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=P.T,g={};P.T=g;try{var T=a(u,s),I=P.S;I!==null&&I(g,T),Gp(t,n,T)}catch(Q){Oc(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),P.T=f}}else try{f=a(u,s),Gp(t,n,f)}catch(Q){Oc(t,n,Q)}}function Gp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Vp(t,n,s)},function(s){return Oc(t,n,s)}):Vp(t,n,a)}function Vp(t,n,a){n.status="fulfilled",n.value=a,Xp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Hp(t,a)))}function Oc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Xp(n),n=n.next;while(n!==s)}t.action=null}function Xp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function kp(t,n){return n}function Wp(t,n){if(xe){var a=Xe.formState;if(a!==null){t:{var s=oe;if(xe){if(We){e:{for(var u=We,f=oi;u.nodeType!==8;){if(!f){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=ui(u.nextSibling),s=u.data==="F!";break t}}ba(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kp,lastRenderedState:n},a.queue=s,a=cm.bind(null,oe,s),s.dispatch=a,s=Lc(!1),f=Hc.bind(null,oe,!1,s.queue),s=On(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Yv.bind(null,oe,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function qp(t){var n=nn();return Yp(n,He,t)}function Yp(t,n,a){if(n=Uc(t,n,kp)[0],t=yl(Zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ro(n)}catch(g){throw g===jr?hl:g}else s=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,$r(9,{destroy:void 0},jv.bind(null,u,a),null)),[s,f,t]}function jv(t,n){t.action=n}function jp(t){var n=nn(),a=He;if(a!==null)return Yp(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function $r(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Sl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Zp(){return nn().memoizedState}function El(t,n,a,s){var u=On();oe.flags|=t,u.memoizedState=$r(1|n,{destroy:void 0},a,s===void 0?null:s)}function Tl(t,n,a,s){var u=nn();s=s===void 0?null:s;var f=u.memoizedState.inst;He!==null&&s!==null&&bc(s,He.memoizedState.deps)?u.memoizedState=$r(n,f,a,s):(oe.flags|=t,u.memoizedState=$r(1|n,f,a,s))}function Kp(t,n){El(8390656,8,t,n)}function Pc(t,n){Tl(2048,8,t,n)}function Zv(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Sl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Qp(t){var n=nn().memoizedState;return Zv({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Jp(t,n){return Tl(4,2,t,n)}function $p(t,n){return Tl(4,4,t,n)}function tm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function em(t,n,a){a=a!=null?a.concat([t]):null,Tl(4,4,tm.bind(null,n,t),a)}function zc(){}function nm(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&bc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function im(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&bc(n,s[1]))return s[0];if(s=t(),pr){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[s,n],s}function Fc(t,n,a){return a===void 0||(ji&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ag(),oe.lanes|=t,Oa|=t,a)}function am(t,n,a,s){return Wn(a,n)?a:Kr.current!==null?(t=Fc(t,a,s),Wn(t,n)||(ln=!0),t):(ji&42)===0||(ji&1073741824)!==0&&(_e&261930)===0?(ln=!0,t.memoizedState=a):(t=ag(),oe.lanes|=t,Oa|=t,n)}function rm(t,n,a,s,u){var f=H.p;H.p=f!==0&&8>f?f:8;var g=P.T,T={};P.T=T,Hc(t,!1,n,a);try{var I=u(),Q=P.S;if(Q!==null&&Q(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ft=kv(I,s);so(t,n,ft,Qn(t))}else so(t,n,s,Qn(t))}catch(mt){so(t,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{H.p=f,g!==null&&T.types!==null&&(g.types=T.types),P.T=g}}function Kv(){}function Ic(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=sm(t).queue;rm(t,u,n,nt,a===null?Kv:function(){return om(t),a(s)})}function sm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:nt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function om(t){var n=sm(t);n.next===null&&(n=t.alternate.memoizedState),so(t,n.next.queue,{},Qn())}function Bc(){return bn(To)}function lm(){return nn().memoizedState}function um(){return nn().memoizedState}function Qv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Ca(a);var s=Da(n,t,a);s!==null&&(Vn(s,n,a),eo(s,n,a)),n={cache:pc()},t.payload=n;return}n=n.return}}function Jv(t,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(t)?fm(n,a):(a=ic(t,n,a,s),a!==null&&(Vn(a,t,s),hm(a,n,s)))}function cm(t,n,a){var s=Qn();so(t,n,a,s)}function so(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(t))fm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(u.hasEagerState=!0,u.eagerState=T,Wn(T,g))return rl(t,n,u,0),Xe===null&&al(),!1}catch{}if(a=ic(t,n,u,s),a!==null)return Vn(a,t,s),hm(a,n,s),!0}return!1}function Hc(t,n,a,s){if(s={lane:2,revertLane:xf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},bl(t)){if(n)throw Error(r(479))}else n=ic(t,a,s,2),n!==null&&Vn(n,t,2)}function bl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function fm(t,n){Qr=vl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function hm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ps(t,a)}}var oo={readContext:bn,use:Ml,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};oo.useEffectEvent=$e;var dm={readContext:bn,use:Ml,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:Kp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,El(4194308,4,tm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return El(4194308,4,t,n)},useInsertionEffect:function(t,n){El(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(pr){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var u=a(n);if(pr){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Jv.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=Lc(t);var n=t.queue,a=cm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:zc,useDeferredValue:function(t,n){var a=On();return Fc(a,t,n)},useTransition:function(){var t=Lc(!1);return t=rm.bind(null,oe,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,u=On();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(_e&127)!==0||Op(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Kp(zp.bind(null,s,f,t),[t]),s.flags|=2048,$r(9,{destroy:void 0},Pp.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=Xe.identifierPrefix;if(xe){var a=Di,s=Ci;a=(s&~(1<<32-Ot(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Wv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Bc,useFormState:Wp,useActionState:Wp,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hc.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:wc,useCacheRefresh:function(){return On().memoizedState=Qv.bind(null,oe)},useEffectEvent:function(t){var n=On(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Gc={readContext:bn,use:Ml,useCallback:nm,useContext:bn,useEffect:Pc,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:yl,useRef:Zp,useState:function(){return yl(Zi)},useDebugValue:zc,useDeferredValue:function(t,n){var a=nn();return am(a,He.memoizedState,t,n)},useTransition:function(){var t=yl(Zi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Lp,useId:lm,useHostTransitionStatus:Bc,useFormState:qp,useActionState:qp,useOptimistic:function(t,n){var a=nn();return Bp(a,He,t,n)},useMemoCache:wc,useCacheRefresh:um};Gc.useEffectEvent=Qp;var pm={readContext:bn,use:Ml,useCallback:nm,useContext:bn,useEffect:Pc,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:Nc,useRef:Zp,useState:function(){return Nc(Zi)},useDebugValue:zc,useDeferredValue:function(t,n){var a=nn();return He===null?Fc(a,t,n):am(a,He.memoizedState,t,n)},useTransition:function(){var t=Nc(Zi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Lp,useId:lm,useHostTransitionStatus:Bc,useFormState:jp,useActionState:jp,useOptimistic:function(t,n){var a=nn();return He!==null?Bp(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:wc,useCacheRefresh:um};pm.useEffectEvent=Qp;function Vc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),u=Ca(s);u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,s),n!==null&&(Vn(n,t,s),eo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),u=Ca(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(t,u,s),n!==null&&(Vn(n,t,s),eo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=Ca(a);s.tag=2,n!=null&&(s.callback=n),n=Da(t,s,a),n!==null&&(Vn(n,t,a),eo(n,t,a))}};function mm(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Ys(a,s)||!Ys(u,f):!0}function gm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Xc.enqueueReplaceState(n,n.state,null)}function mr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function _m(t){il(t)}function vm(t){console.error(t)}function xm(t){il(t)}function Al(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Sm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function kc(t,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(t,n)},a}function Mm(t){return t=Ca(t),t.tag=3,t}function ym(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Sm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Sm(n,a,s),typeof u!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function $v(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Il():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),gf(t,s,u)),!1;case 22:return a.flags|=65536,s===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),gf(t,s,u)),!1}throw Error(r(435,a.tag))}return gf(t,s,u),Il(),!1}if(xe)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==uc&&(t=Error(r(422),{cause:s}),Ks(ai(t,a)))):(s!==uc&&(n=Error(r(423),{cause:s}),Ks(ai(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=ai(s,a),u=kc(t.stateNode,s,u),Sc(t,u),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ai(f,a),go===null?go=[f]:go.push(f),tn!==4&&(tn=2),n===null)return!0;s=ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=kc(a.stateNode,s,t),Sc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Mm(u),ym(u,t,a,s),Sc(a,u),!1}a=a.return}while(a!==null);return!1}var Wc=Error(r(461)),ln=!1;function An(t,n,a,s){n.child=t===null?Ap(n,null,a,s):dr(n,t.child,a,s)}function Em(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return ur(n),s=Ac(t,n,a,g,f,u),T=Rc(),t!==null&&!ln?(Cc(t,n,u),Ki(t,n,u)):(xe&&T&&oc(n),n.flags|=1,An(t,n,s,u),n.child)}function Tm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!ac(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bm(t,n,f,s,u)):(t=ol(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!$c(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ys,a(g,s)&&t.ref===n.ref)return Ki(t,n,u)}return n.flags|=1,t=ki(f,s),t.ref=n.ref,t.return=n,n.child=t}function bm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Ys(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,$c(t,u))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,Ki(t,n,u)}return qc(t,n,a,s,u)}function Am(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Rm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Dp(n,f):yc(),wp(n);else return s=n.lanes=536870912,Rm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(fl(n,f.cachePool),Dp(n,f),Ua(),n.memoizedState=null):(t!==null&&fl(n,null),yc(),Ua());return An(t,n,u,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Rm(t,n,a,s,u){var f=gc();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&fl(n,null),yc(),wp(n),t!==null&&Wr(t,n,s,!0),n.childLanes=u,null}function Rl(t,n){return n=Dl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Cm(t,n,a){return dr(n,t.child,null,a),t=Rl(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function tx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=Rl(n,s),n.lanes=536870912,lo(null,t);if(Tc(n),(t=We)?(t=Hg(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ci,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=fp(t),a.return=n,n.child=a,Tn=n,We=null)):t=null,t===null)throw ba(n);return n.lanes=536870912,null}return Rl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Tc(n),u)if(n.flags&256)n.flags&=-257,n=Cm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Wr(t,n,a,!1),u=(a&t.childLanes)!==0,ln||u){if(s=Xe,s!==null&&(g=wr(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,rr(t,g),Vn(s,t,g),Wc;Il(),n=Cm(t,n,a)}else t=f.treeContext,We=ui(g.nextSibling),Tn=n,xe=!0,Ta=null,oi=!1,t!==null&&pp(n,t),n=Rl(n,s),n.flags|=4096;return n}return t=ki(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Cl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function qc(t,n,a,s,u){return ur(n),a=Ac(t,n,a,s,void 0,u),s=Rc(),t!==null&&!ln?(Cc(t,n,u),Ki(t,n,u)):(xe&&s&&oc(n),n.flags|=1,An(t,n,a,u),n.child)}function Dm(t,n,a,s,u,f){return ur(n),n.updateQueue=null,a=Np(n,s,a,u),Up(t),s=Rc(),t!==null&&!ln?(Cc(t,n,f),Ki(t,n,f)):(xe&&s&&oc(n),n.flags|=1,An(t,n,a,f),n.child)}function wm(t,n,a,s,u){if(ur(n),n.stateNode===null){var f=Gr,g=a.contextType;typeof g=="object"&&g!==null&&(f=bn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Xc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},vc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?bn(g):Gr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Vc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Xc.enqueueReplaceState(f,f.state,null),io(n,s,f,u),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,I=mr(a,T);f.props=I;var Q=f.context,ft=a.contextType;g=Gr,typeof ft=="object"&&ft!==null&&(g=bn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==g)&&gm(n,f,s,g),Ra=!1;var $=n.memoizedState;f.state=$,io(n,s,f,u),no(),Q=n.memoizedState,T||$!==Q||Ra?(typeof mt=="function"&&(Vc(n,a,mt,s),Q=n.memoizedState),(I=Ra||mm(n,a,I,s,$,Q,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,xc(t,n),g=n.memoizedProps,ft=mr(a,g),f.props=ft,mt=n.pendingProps,$=f.context,Q=a.contextType,I=Gr,typeof Q=="object"&&Q!==null&&(I=bn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||$!==I)&&gm(n,f,s,I),Ra=!1,$=n.memoizedState,f.state=$,io(n,s,f,u),no();var ot=n.memoizedState;g!==mt||$!==ot||Ra||t!==null&&t.dependencies!==null&&ul(t.dependencies)?(typeof T=="function"&&(Vc(n,a,T,s),ot=n.memoizedState),(ft=Ra||mm(n,a,ft,s,$,ot,I)||t!==null&&t.dependencies!==null&&ul(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=I,s=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Cl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=dr(n,t.child,null,u),n.child=dr(n,null,a,u)):An(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Ki(t,n,u),t}function Um(t,n,a,s){return or(),n.flags|=256,An(t,n,a,s),n.child}var Yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jc(t){return{baseLanes:t,cachePool:Sp()}}function Zc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Nm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(u?wa(n):Ua(),(t=We)?(t=Hg(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ci,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=fp(t),a.return=n,n.child=a,Tn=n,We=null)):t=null,t===null)throw ba(n);return Nf(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Ua(),u=n.mode,T=Dl({mode:"hidden",children:T},u),s=sr(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=jc(a),s.childLanes=Zc(t,g,a),n.memoizedState=Yc,lo(null,s)):(wa(n),Kc(n,T))}var I=t.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(wa(n),n.flags&=-257,n=Qc(t,n,a)):n.memoizedState!==null?(Ua(),n.child=t.child,n.flags|=128,n=null):(Ua(),T=s.fallback,u=n.mode,s=Dl({mode:"visible",children:s.children},u),T=sr(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,dr(n,t.child,null,a),s=n.child,s.memoizedState=jc(a),s.childLanes=Zc(t,g,a),n.memoizedState=Yc,n=lo(null,s));else if(wa(n),Nf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,Ks({value:s,source:null,stack:null}),n=Qc(t,n,a)}else if(ln||Wr(t,n,a,!1),g=(a&t.childLanes)!==0,ln||g){if(g=Xe,g!==null&&(s=wr(g,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,rr(t,s),Vn(g,t,s),Wc;Uf(T)||Il(),n=Qc(t,n,a)}else Uf(T)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,We=ui(T.nextSibling),Tn=n,xe=!0,Ta=null,oi=!1,t!==null&&pp(n,t),n=Kc(n,s.children),n.flags|=4096);return n}return u?(Ua(),T=s.fallback,u=n.mode,I=t.child,Q=I.sibling,s=ki(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,Q!==null?T=ki(Q,T):(T=sr(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,lo(null,s),s=n.child,T=t.child.memoizedState,T===null?T=jc(a):(u=T.cachePool,u!==null?(I=sn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Sp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=Zc(t,g,a),n.memoizedState=Yc,lo(t.child,s)):(wa(n),a=t.child,t=a.sibling,a=ki(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Kc(t,n){return n=Dl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Dl(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function Qc(t,n,a){return dr(n,t.child,null,a),t=Kc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Lm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),hc(t.return,n,a)}function Jc(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Om(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=en.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,gt(en,g),An(t,n,s,a),s=xe?Zs:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lm(t,a,n);else if(t.tag===19)Lm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&_l(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Jc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&_l(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Jc(n,!0,a,null,f,s);break;case"together":Jc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function $c(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ul(t)))}function ex(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Aa(n,sn,t.memoizedState.cache),or();break;case 27:case 5:Bt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Nm(t,n,a):(wa(n),t=Ki(t,n,a),t!==null?t.sibling:null);wa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Wr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Om(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(en,en.current),s)break;return null;case 22:return n.lanes=0,Am(t,n,a,n.pendingProps);case 24:Aa(n,sn,t.memoizedState.cache)}return Ki(t,n,a)}function Pm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!$c(t,a)&&(n.flags&128)===0)return ln=!1,ex(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,xe&&(n.flags&1048576)!==0&&dp(n,Zs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=fr(n.elementType),n.type=t,typeof t=="function")ac(t)?(s=mr(t,s),n.tag=1,n=wm(null,n,t,s,a)):(n.tag=0,n=qc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=Em(null,n,t,s,a);break t}else if(u===w){n.tag=14,n=Tm(null,n,t,s,a);break t}}throw n=ht(t)||t,Error(r(306,n,""))}}return n;case 0:return qc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=mr(s,n.pendingProps),wm(t,n,s,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,xc(t,n),io(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Aa(n,sn,s),s!==f.cache&&dc(n,[sn],a,!0),no(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Um(t,n,s,a);break t}else if(s!==u){u=ai(Error(r(424)),n),Ks(u),n=Um(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,We=ui(t.firstChild),Tn=n,xe=!0,Ta=null,oi=!0,a=Ap(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(or(),s===u){n=Ki(t,n,a);break t}An(t,n,s,a)}n=n.child}return n;case 26:return Cl(t,n),t===null?(a=qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,s=Wl(tt.current).createElement(a),s[rn]=n,s[vn]=t,Rn(s,a,t),b(s),n.stateNode=s):n.memoizedState=qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Bt(n),t===null&&xe&&(s=n.stateNode=Xg(n.type,n.pendingProps,tt.current),Tn=n,oi=!0,u=We,Ba(n.type)?(Lf=u,We=ui(s.firstChild)):We=u),An(t,n,n.pendingProps.children,a),Cl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((u=s=We)&&(s=Ux(s,n.type,n.pendingProps,oi),s!==null?(n.stateNode=s,Tn=n,We=ui(s.firstChild),oi=!1,u=!0):u=!1),u||ba(n)),Bt(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Cf(u,f)?s=null:g!==null&&Cf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Ac(t,n,qv,null,null,a),To._currentValue=u),Cl(t,n),An(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=We)&&(a=Nx(a,n.pendingProps,oi),a!==null?(n.stateNode=a,Tn=n,We=null,t=!0):t=!1),t||ba(n)),null;case 13:return Nm(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=dr(n,null,s,a):An(t,n,s,a),n.child;case 11:return Em(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Aa(n,n.type,s.value),An(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ur(n),u=bn(u),s=s(u),n.flags|=1,An(t,n,s,a),n.child;case 14:return Tm(t,n,n.type,n.pendingProps,a);case 15:return bm(t,n,n.type,n.pendingProps,a);case 19:return Om(t,n,a);case 31:return tx(t,n,a);case 22:return Am(t,n,a,n.pendingProps);case 24:return ur(n),s=bn(sn),t===null?(u=gc(),u===null&&(u=Xe,f=pc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},vc(n),Aa(n,sn,u)):((t.lanes&a)!==0&&(xc(t,n),io(n,null,null,a),no()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Aa(n,sn,s)):(s=f.cache,Aa(n,sn,s),s!==u.cache&&dc(n,[sn],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Qi(t){t.flags|=4}function tf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(lg())t.flags|=8192;else throw hr=dl,_c}else t.flags&=-16777217}function zm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Qg(n))if(lg())t.flags|=8192;else throw hr=dl,_c}function wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,is|=n)}function uo(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function nx(t,n,a){var s=n.pendingProps;switch(lc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Yi(sn),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(kr(n)?Qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cc())),qe(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Qi(n),f!==null?(qe(n),zm(n,f)):(qe(n),tf(n,u,null,s,a))):f?f!==t.memoizedState?(Qi(n),qe(n),zm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Qi(n),qe(n),tf(n,u,t,s,a)),null;case 27:if(he(n),a=tt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=bt.current,kr(n)?mp(n):(t=Xg(u,s,a),n.stateNode=t,Qi(n))}return qe(n),null;case 5:if(he(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(f=bt.current,kr(n))mp(n);else{var g=Wl(tt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[rn]=n,f[vn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Rn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Qi(n)}}return qe(n),tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=tt.current,kr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ng(t.nodeValue,a)),t||ba(n,!0)}else t=Wl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=kr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=cc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=kr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=cc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),qe(n),null);case 4:return Vt(),t===null&&Ef(n.stateNode.containerInfo),qe(n),null;case 10:return Yi(n.type),qe(n),null;case 19:if(et(en),s=n.memoizedState,s===null)return qe(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)uo(s,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=_l(t),f!==null){for(n.flags|=128,uo(s,!1),t=f.updateQueue,n.updateQueue=t,wl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)cp(a,t),a=a.sibling;return gt(en,en.current&1|2),xe&&Wi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&y()>Pl&&(n.flags|=128,u=!0,uo(s,!1),n.lanes=4194304)}else{if(!u)if(t=_l(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,wl(n,t),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xe)return qe(n),null}else 2*y()-s.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,u=!0,uo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=y(),t.sibling=null,a=en.current,gt(en,u?a&1|2:a&1),xe&&Wi(n,s.treeForkCount),t):(qe(n),null);case 22:case 23:return jn(n),Ec(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&et(cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(sn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ix(t,n){switch(lc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Yi(sn),Vt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return et(en),null;case 4:return Vt(),null;case 10:return Yi(n.type),null;case 22:case 23:return jn(n),Ec(),t!==null&&et(cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Yi(sn),null;case 25:return null;default:return null}}function Fm(t,n){switch(lc(n),n.tag){case 3:Yi(sn),Vt();break;case 26:case 27:case 5:he(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:et(en);break;case 10:Yi(n.type);break;case 22:case 23:jn(n),Ec(),t!==null&&et(cr);break;case 24:Yi(sn)}}function co(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(T){ze(n,n.return,T)}}function Na(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,u=n;var I=a,Q=T;try{Q()}catch(ft){ze(u,I,ft)}}}s=s.next}while(s!==f)}}catch(ft){ze(n,n.return,ft)}}function Im(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Cp(n,a)}catch(s){ze(t,t.return,s)}}}function Bm(t,n,a){a.props=mr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ze(t,n,s)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){ze(t,n,u)}}function wi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ze(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(t,n,u)}else a.current=null}function Hm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ze(t,t.return,u)}}function ef(t,n,a){try{var s=t.stateNode;bx(s,t.type,a,n),s[vn]=n}catch(u){ze(t,t.return,u)}}function Gm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ba(t.type)||t.tag===4}function nf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ba(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vi));else if(s!==4&&(s===27&&Ba(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(af(t,n,a),t=t.sibling;t!==null;)af(t,n,a),t=t.sibling}function Ul(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ba(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ul(t,n,a),t=t.sibling;t!==null;)Ul(t,n,a),t=t.sibling}function Vm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,s,a),n[rn]=t,n[vn]=a}catch(f){ze(t,t.return,f)}}var Ji=!1,un=!1,rf=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function ax(t,n){if(t=t.containerInfo,Af=Jl,t=ep(t),Qu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,I=-1,Q=0,ft=0,mt=t,$=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(T=g+u),mt!==f||s!==0&&mt.nodeType!==3||(I=g+s),mt.nodeType===3&&(g+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)$=mt,mt=ot;for(;;){if(mt===t)break e;if($===a&&++Q===u&&(T=g),$===f&&++ft===s&&(I=g),(ot=mt.nextSibling)!==null)break;mt=$,$=mt.parentNode}mt=ot}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:t,selectionRange:a},Jl=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Gt=mr(a.type,u);t=s.getSnapshotBeforeUpdate(Gt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($t){ze(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)wf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function km(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),s&4&&co(5,a);break;case 1:if(ta(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){ze(a,a.return,g)}else{var u=mr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ze(a,a.return,g)}}s&64&&Im(a),s&512&&fo(a,a.return);break;case 3:if(ta(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cp(t,n)}catch(g){ze(a,a.return,g)}}break;case 27:n===null&&s&4&&Vm(a);case 26:case 5:ta(t,a),n===null&&s&4&&Hm(a),s&512&&fo(a,a.return);break;case 12:ta(t,a);break;case 31:ta(t,a),s&4&&Ym(t,a);break;case 13:ta(t,a),s&4&&jm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dx.bind(null,a),Lx(t,a))));break;case 22:if(s=a.memoizedState!==null||Ji,!s){n=n!==null&&n.memoizedState!==null||un,u=Ji;var f=un;Ji=s,(un=n)&&!f?ea(t,a,(a.subtreeFlags&8772)!==0):ta(t,a),Ji=u,un=f}break;case 30:break;default:ta(t,a)}}function Wm(t){var n=t.alternate;n!==null&&(t.alternate=null,Wm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Bs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,In=!1;function $i(t,n,a){for(a=a.child;a!==null;)qm(t,n,a),a=a.sibling}function qm(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:un||wi(a,n),$i(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||wi(a,n);var s=Ze,u=In;Ba(a.type)&&(Ze=a.stateNode,In=!1),$i(t,n,a),Mo(a.stateNode),Ze=s,In=u;break;case 5:un||wi(a,n);case 6:if(s=Ze,u=In,Ze=null,$i(t,n,a),Ze=s,In=u,Ze!==null)if(In)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Ze!==null&&(In?(t=Ze,Ig(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fs(t)):Ig(Ze,a.stateNode));break;case 4:s=Ze,u=In,Ze=a.stateNode.containerInfo,In=!0,$i(t,n,a),Ze=s,In=u;break;case 0:case 11:case 14:case 15:Na(2,a,n),un||Na(4,a,n),$i(t,n,a);break;case 1:un||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Bm(a,n,s)),$i(t,n,a);break;case 21:$i(t,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,$i(t,n,a),un=s;break;default:$i(t,n,a)}}function Ym(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fs(t)}catch(a){ze(n,n.return,a)}}}function jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fs(t)}catch(a){ze(n,n.return,a)}}function rx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Xm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Xm),n;default:throw Error(r(435,t.tag))}}function Nl(t,n){var a=rx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=px.bind(null,t,s);s.then(u,u)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(Ba(T.type)){Ze=T.stateNode,In=!1;break t}break;case 5:Ze=T.stateNode,In=!1;break t;case 3:case 4:Ze=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(Ze===null)throw Error(r(160));qm(f,g,u),Ze=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zm(n,t),n=n.sibling}var vi=null;function Zm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),Hn(t),s&4&&(Na(3,t,t.return),co(3,t),Na(5,t,t.return));break;case 1:Bn(n,t),Hn(t),s&512&&(un||a===null||wi(a,a.return)),s&64&&Ji&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=vi;if(Bn(n,t),Hn(t),s&512&&(un||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[tr]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,s,a),f[rn]=t,b(f),s=f;break t;case"link":var g=Zg("link","href",u).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=u.createElement(s),Rn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=Zg("meta","content",u).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=u.createElement(s),Rn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,b(f),s=f}t.stateNode=s}else Kg(u,t.type,t.stateNode);else t.stateNode=jg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Kg(u,t.type,t.stateNode):jg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&ef(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),Hn(t),s&512&&(un||a===null||wi(a,a.return)),a!==null&&s&4&&ef(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),Hn(t),s&512&&(un||a===null||wi(a,a.return)),t.flags&32){u=t.stateNode;try{hn(u,"")}catch(Gt){ze(t,t.return,Gt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,ef(t,u,a!==null?a.memoizedProps:u)),s&1024&&(rf=!0);break;case 6:if(Bn(n,t),Hn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Gt){ze(t,t.return,Gt)}}break;case 3:if(jl=null,u=vi,vi=ql(n.containerInfo),Bn(n,t),vi=u,Hn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(Gt){ze(t,t.return,Gt)}rf&&(rf=!1,Km(t));break;case 4:s=vi,vi=ql(t.stateNode.containerInfo),Bn(n,t),Hn(t),vi=s;break;case 12:Bn(n,t),Hn(t);break;case 31:Bn(n,t),Hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 13:Bn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=y()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 22:u=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=Ji,ft=un;if(Ji=Q||u,un=ft||I,Bn(n,t),un=ft,Ji=Q,Hn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Ji||un||gr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=I.stateNode;var mt=I.memoizedProps.style,$=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Gt){ze(I,I.return,Gt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Gt){ze(I,I.return,Gt)}}}else if(n.tag===18){if(a===null){I=n;try{var ot=I.stateNode;u?Bg(ot,!0):Bg(I.stateNode,!1)}catch(Gt){ze(I,I.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Nl(t,a))));break;case 19:Bn(n,t),Hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 30:break;case 21:break;default:Bn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Gm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=nf(t);Ul(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(hn(g,""),a.flags&=-33);var T=nf(t);Ul(t,T,g);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=nf(t);af(t,Q,I);break;default:throw Error(r(161))}}catch(ft){ze(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Km(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Km(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)km(t,n.alternate,n),n=n.sibling}function gr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),gr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bm(n,n.return,a),gr(n);break;case 27:Mo(n.stateNode);case 26:case 5:wi(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}t=t.sibling}}function ea(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ea(u,f,a),co(4,f);break;case 1:if(ea(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){ze(s,s.return,Q)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Rp(I[u],T)}catch(Q){ze(s,s.return,Q)}}a&&g&64&&Im(f),fo(f,f.return);break;case 27:Vm(f);case 26:case 5:ea(u,f,a),a&&s===null&&g&4&&Hm(f),fo(f,f.return);break;case 12:ea(u,f,a);break;case 31:ea(u,f,a),a&&g&4&&Ym(u,f);break;case 13:ea(u,f,a),a&&g&4&&jm(u,f);break;case 22:f.memoizedState===null&&ea(u,f,a),fo(f,f.return);break;case 30:break;default:ea(u,f,a)}n=n.sibling}}function sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qs(a))}function of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t))}function xi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qm(t,n,a,s),n=n.sibling}function Qm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,s),u&2048&&co(9,n);break;case 1:xi(t,n,a,s);break;case 3:xi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qs(t)));break;case 12:if(u&2048){xi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){ze(n,n.return,I)}}else xi(t,n,a,s);break;case 31:xi(t,n,a,s);break;case 13:xi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?xi(t,n,a,s):ho(t,n):f._visibility&2?xi(t,n,a,s):(f._visibility|=2,ts(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&sf(g,n);break;case 24:xi(t,n,a,s),u&2048&&of(n.alternate,n);break;default:xi(t,n,a,s)}}function ts(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,I=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:ts(f,g,T,I,u),co(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?ts(f,g,T,I,u):ho(f,g):(ft._visibility|=2,ts(f,g,T,I,u)),u&&Q&2048&&sf(g.alternate,g);break;case 24:ts(f,g,T,I,u),u&&Q&2048&&of(g.alternate,g);break;default:ts(f,g,T,I,u)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:ho(a,s),u&2048&&sf(s.alternate,s);break;case 24:ho(a,s),u&2048&&of(s.alternate,s);break;default:ho(a,s)}n=n.sibling}}var po=8192;function es(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)Jm(t,n,a),t=t.sibling}function Jm(t,n,a){switch(t.tag){case 26:es(t,n,a),t.flags&po&&t.memoizedState!==null&&Wx(a,vi,t.memoizedState,t.memoizedProps);break;case 5:es(t,n,a);break;case 3:case 4:var s=vi;vi=ql(t.stateNode.containerInfo),es(t,n,a),vi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=po,po=16777216,es(t,n,a),po=s):es(t,n,a));break;default:es(t,n,a)}}function $m(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,eg(s,t)}$m(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tg(t),t=t.sibling}function tg(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&Na(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ll(t)):mo(t);break;default:mo(t)}}function Ll(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,eg(s,t)}$m(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Na(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}t=t.sibling}}function eg(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else t:for(a=t;gn!==null;){s=gn;var u=s.sibling,f=s.return;if(Wm(s),s===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var sx={getCacheForType:function(t){var n=bn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(sn).controller.signal}},ox=typeof WeakMap=="function"?WeakMap:Map,we=0,Xe=null,pe=null,_e=0,Pe=0,Zn=null,La=!1,ns=!1,lf=!1,na=0,tn=0,Oa=0,_r=0,uf=0,Kn=0,is=0,go=null,Gn=null,cf=!1,Ol=0,ng=0,Pl=1/0,zl=null,Pa=null,dn=0,za=null,as=null,ia=0,ff=0,hf=null,ig=null,_o=0,df=null;function Qn(){return(we&2)!==0&&_e!==0?_e&-_e:P.T!==null?xf():Fs()}function ag(){if(Kn===0)if((_e&536870912)===0||xe){var t=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Vn(t,n,a){(t===Xe&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(rs(t,0),Fa(t,_e,Kn,!1)),Dn(t,a),((we&2)===0||t!==Xe)&&(t===Xe&&((we&2)===0&&(_r|=a),tn===4&&Fa(t,_e,Kn,!1)),Ui(t))}function rg(t,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||At(t,n),u=s?cx(t,n):mf(t,n,!0),f=s;do{if(u===0){ns&&!s&&Fa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!lx(a)){u=mf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;u=go;var I=T.current.memoizedState.isDehydrated;if(I&&(rs(T,g).flags|=256),g=mf(T,g,!1),g!==2){if(lf&&!I){T.errorRecoveryDisabledLanes|=f,_r|=f,u=4;break t}f=Gn,Gn=u,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){rs(t,0),Fa(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(s,n,Kn,!La);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ol+300-y(),10<u)){if(Fa(s,n,Kn,!La),_t(s,0,!0)!==0)break t;ia=n,s.timeoutHandle=zg(sg.bind(null,s,a,Gn,zl,cf,n,Kn,_r,is,La,f,"Throttled",-0,0),u);break t}sg(s,a,Gn,zl,cf,n,Kn,_r,is,La,f,null,-0,0)}}break}while(!0);Ui(t)}function sg(t,n,a,s,u,f,g,T,I,Q,ft,mt,$,ot){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},Jm(n,f,mt);var Gt=(f&62914560)===f?Ol-y():(f&4194048)===f?ng-y():0;if(Gt=qx(mt,Gt),Gt!==null){ia=f,t.cancelPendingCommit=Gt(pg.bind(null,t,n,f,a,s,u,g,T,I,ft,mt,null,$,ot)),Fa(t,f,g,!Q);return}}pg(t,n,f,a,s,u,g,T,I)}function lx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Wn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(t,n,a,s){n&=~uf,n&=~_r,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&jo(t,a,n)}function Fl(){return(we&6)===0?(vo(0),!1):!0}function pf(){if(pe!==null){if(Pe===0)var t=pe.return;else t=pe,qi=lr=null,Dc(t),Zr=null,$s=0,t=pe;for(;t!==null;)Fm(t.alternate,t),t=t.return;pe=null}}function rs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Cx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ia=0,pf(),Xe=t,pe=a=ki(t.current,null),_e=n,Pe=0,Zn=null,La=!1,ns=At(t,n),lf=!1,is=Kn=uf=_r=Oa=tn=0,Gn=go=null,cf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Ot(s),f=1<<u;n|=t[u],s&=~f}return na=n,al(),a}function og(t,n){oe=null,P.H=oo,n===jr||n===hl?(n=Ep(),Pe=3):n===_c?(n=Ep(),Pe=4):Pe=n===Wc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,pe===null&&(tn=1,Al(t,ai(n,t.current)))}function lg(){var t=Yn.current;return t===null?!0:(_e&4194048)===_e?li===null:(_e&62914560)===_e||(_e&536870912)!==0?t===li:!1}function ug(){var t=P.H;return P.H=oo,t===null?oo:t}function cg(){var t=P.A;return P.A=sx,t}function Il(){tn=4,La||(_e&4194048)!==_e&&Yn.current!==null||(ns=!0),(Oa&134217727)===0&&(_r&134217727)===0||Xe===null||Fa(Xe,_e,Kn,!1)}function mf(t,n,a){var s=we;we|=2;var u=ug(),f=cg();(Xe!==t||_e!==n)&&(zl=null,rs(t,n)),n=!1;var g=tn;t:do try{if(Pe!==0&&pe!==null){var T=pe,I=Zn;switch(Pe){case 8:pf(),g=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var Q=Pe;if(Pe=0,Zn=null,ss(t,T,I,Q),a&&ns){g=0;break t}break;default:Q=Pe,Pe=0,Zn=null,ss(t,T,I,Q)}}ux(),g=tn;break}catch(ft){og(t,ft)}while(!0);return n&&t.shellSuspendCounter++,qi=lr=null,we=s,P.H=u,P.A=f,pe===null&&(Xe=null,_e=0,al()),g}function ux(){for(;pe!==null;)fg(pe)}function cx(t,n){var a=we;we|=2;var s=ug(),u=cg();Xe!==t||_e!==n?(zl=null,Pl=y()+500,rs(t,n)):ns=At(t,n);t:do try{if(Pe!==0&&pe!==null){n=pe;var f=Zn;e:switch(Pe){case 1:Pe=0,Zn=null,ss(t,n,f,1);break;case 2:case 9:if(Mp(f)){Pe=0,Zn=null,hg(n);break}n=function(){Pe!==2&&Pe!==9||Xe!==t||(Pe=7),Ui(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Mp(f)?(Pe=0,Zn=null,hg(n)):(Pe=0,Zn=null,ss(t,n,f,7));break;case 5:var g=null;switch(pe.tag){case 26:g=pe.memoizedState;case 5:case 27:var T=pe;if(g?Qg(g):T.stateNode.complete){Pe=0,Zn=null;var I=T.sibling;if(I!==null)pe=I;else{var Q=T.return;Q!==null?(pe=Q,Bl(Q)):pe=null}break e}}Pe=0,Zn=null,ss(t,n,f,5);break;case 6:Pe=0,Zn=null,ss(t,n,f,6);break;case 8:pf(),tn=6;break t;default:throw Error(r(462))}}fx();break}catch(ft){og(t,ft)}while(!0);return qi=lr=null,P.H=s,P.A=u,we=a,pe!==null?0:(Xe=null,_e=0,al(),tn)}function fx(){for(;pe!==null&&!qt();)fg(pe)}function fg(t){var n=Pm(t.alternate,t,na);t.memoizedProps=t.pendingProps,n===null?Bl(t):pe=n}function hg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Dm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Dm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Dc(n);default:Fm(a,n),n=pe=cp(n,na),n=Pm(a,n,na)}t.memoizedProps=t.pendingProps,n===null?Bl(t):pe=n}function ss(t,n,a,s){qi=lr=null,Dc(n),Zr=null,$s=0;var u=n.return;try{if($v(t,u,n,a,_e)){tn=1,Al(t,ai(a,t.current)),pe=null;return}}catch(f){if(u!==null)throw pe=u,f;tn=1,Al(t,ai(a,t.current)),pe=null;return}n.flags&32768?(xe||s===1?t=!0:ns||(_e&536870912)!==0?t=!1:(La=t=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),dg(n,t)):Bl(n)}function Bl(t){var n=t;do{if((n.flags&32768)!==0){dg(n,La);return}t=n.return;var a=nx(n.alternate,n,na);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);tn===0&&(tn=5)}function dg(t,n){do{var a=ix(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);tn=6,pe=null}function pg(t,n,a,s,u,f,g,T,I){t.cancelPendingCommit=null;do Hl();while(dn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=nc,pi(t,a,f,g,T,I),t===Xe&&(pe=Xe=null,_e=0),as=n,za=t,ia=a,ff=f,hf=u,ig=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,mx(lt,function(){return xg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=H.p,H.p=2,g=we,we|=4;try{ax(t,n,a)}finally{we=g,H.p=u,P.T=s}}dn=1,mg(),gg(),_g()}}function mg(){if(dn===1){dn=0;var t=za,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=H.p;H.p=2;var u=we;we|=4;try{Zm(n,t);var f=Rf,g=ep(t.containerInfo),T=f.focusedElem,I=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&tp(T.ownerDocument.documentElement,T)){if(I!==null&&Qu(T)){var Q=I.start,ft=I.end;if(ft===void 0&&(ft=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ft,T.value.length);else{var mt=T.ownerDocument||document,$=mt&&mt.defaultView||window;if($.getSelection){var ot=$.getSelection(),Gt=T.textContent.length,$t=Math.min(I.start,Gt),Ve=I.end===void 0?$t:Math.min(I.end,Gt);!ot.extend&&$t>Ve&&(g=Ve,Ve=$t,$t=g);var Y=$d(T,$t),X=$d(T,Ve);if(Y&&X&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var K=mt.createRange();K.setStart(Y.node,Y.offset),ot.removeAllRanges(),$t>Ve?(ot.addRange(K),ot.extend(X.node,X.offset)):(K.setEnd(X.node,X.offset),ot.addRange(K))}}}}for(mt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Jl=!!Af,Rf=Af=null}finally{we=u,H.p=s,P.T=a}}t.current=n,dn=2}}function gg(){if(dn===2){dn=0;var t=za,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=H.p;H.p=2;var u=we;we|=4;try{km(t,n.alternate,n)}finally{we=u,H.p=s,P.T=a}}dn=3}}function _g(){if(dn===4||dn===3){dn=0,U();var t=za,n=as,a=ia,s=ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,as=za=null,vg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Pa=null),Ur(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=H.p,H.p=2,P.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{P.T=n,H.p=u}}(ia&3)!==0&&Hl(),Ui(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===df?_o++:(_o=0,df=t):_o=0,vo(0)}}function vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qs(n)))}function Hl(){return mg(),gg(),_g(),xg()}function xg(){if(dn!==5)return!1;var t=za,n=ff;ff=0;var a=Ur(ia),s=P.T,u=H.p;try{H.p=32>a?32:a,P.T=null,a=hf,hf=null;var f=za,g=ia;if(dn=0,as=za=null,ia=0,(we&6)!==0)throw Error(r(331));var T=we;if(we|=4,tg(f.current),Qm(f,f.current,g,a),we=T,vo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{H.p=u,P.T=s,vg(t,n)}}function Sg(t,n,a){n=ai(a,n),n=kc(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(Dn(t,2),Ui(t))}function ze(t,n,a){if(t.tag===3)Sg(t,t,a);else for(;n!==null;){if(n.tag===3){Sg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))){t=ai(a,t),a=Mm(2),s=Da(n,a,2),s!==null&&(ym(a,s,n,t),Dn(s,2),Ui(s));break}}n=n.return}}function gf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new ox;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(lf=!0,u.add(a),t=hx.bind(null,t,n,a),n.then(t,t))}function hx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(_e&a)===a&&(tn===4||tn===3&&(_e&62914560)===_e&&300>y()-Ol?(we&2)===0&&rs(t,0):uf|=a,is===_e&&(is=0)),Ui(t)}function Mg(t,n){n===0&&(n=Le()),t=rr(t,n),t!==null&&(Dn(t,n),Ui(t))}function dx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Mg(t,a)}function px(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Mg(t,a)}function mx(t,n){return Me(t,n)}var Gl=null,os=null,_f=!1,Vl=!1,vf=!1,Ia=0;function Ui(t){t!==os&&t.next===null&&(os===null?Gl=os=t:os=os.next=t),Vl=!0,_f||(_f=!0,_x())}function vo(t,n){if(!vf&&Vl){vf=!0;do for(var a=!1,s=Gl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Ot(42|t)+1)-1,f&=u&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,bg(s,f))}else f=_e,f=_t(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||At(s,f)||(a=!0,bg(s,f));s=s.next}while(a);vf=!1}}function gx(){yg()}function yg(){Vl=_f=!1;var t=0;Ia!==0&&Rx()&&(t=Ia);for(var n=y(),a=null,s=Gl;s!==null;){var u=s.next,f=Eg(s,n);f===0?(s.next=null,a===null?Gl=u:a.next=u,u===null&&(os=a)):(a=s,(t!==0||(f&3)!==0)&&(Vl=!0)),s=u}dn!==0&&dn!==5||vo(t),Ia!==0&&(Ia=0)}function Eg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Ot(f),T=1<<g,I=u[g];I===-1?((T&a)===0||(T&s)!==0)&&(u[g]=ee(T,n)):I<=n&&(t.expiredLanes|=T),f&=~T}if(n=Xe,a=_e,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ue(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||At(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ue(s),Ur(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Rt;break;default:a=lt}return s=Tg.bind(null,t),a=Me(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ue(s),t.callbackPriority=2,t.callbackNode=null,2}function Tg(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Hl()&&t.callbackNode!==a)return null;var s=_e;return s=_t(t,t===Xe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(rg(t,s,n),Eg(t,y()),t.callbackNode!=null&&t.callbackNode===a?Tg.bind(null,t):null)}function bg(t,n){if(Hl())return null;rg(t,n,!0)}function _x(){Dx(function(){(we&6)!==0?Me(dt,gx):yg()})}function xf(){if(Ia===0){var t=qr;t===0&&(t=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Ia=t}return Ia}function Ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ko(""+t)}function Rg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function vx(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ag((u[vn]||null).action),g=s.submitter;g&&(n=(n=g[vn]||null)?Ag(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new tl("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ia!==0){var I=g?Rg(u,g):new FormData(u);Ic(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=g?Rg(u,g):new FormData(u),Ic(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Sf=0;Sf<ec.length;Sf++){var Mf=ec[Sf],xx=Mf.toLowerCase(),Sx=Mf[0].toUpperCase()+Mf.slice(1);_i(xx,"on"+Sx)}_i(ap,"onAnimationEnd"),_i(rp,"onAnimationIteration"),_i(sp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(zv,"onTransitionRun"),_i(Fv,"onTransitionStart"),_i(Iv,"onTransitionCancel"),_i(op,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],I=T.instance,Q=T.currentTarget;if(T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ft){il(ft)}u.currentTarget=null,f=I}else for(g=0;g<s.length;g++){if(T=s[g],I=T.instance,Q=T.currentTarget,T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ft){il(ft)}u.currentTarget=null,f=I}}}}function me(t,n){var a=n[Nr];a===void 0&&(a=n[Nr]=new Set);var s=t+"__bubble";a.has(s)||(Dg(n,t,2,!1),a.add(s))}function yf(t,n,a){var s=0;n&&(s|=4),Dg(a,t,s,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Ef(t){if(!t[Xl]){t[Xl]=!0,q.forEach(function(a){a!=="selectionchange"&&(Mx.has(a)||yf(a,!1,t),yf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,yf("selectionchange",!1,n))}}function Dg(t,n,a,s){switch(a0(n)){case 2:var u=Zx;break;case 8:u=Kx;break;default:u=If}a=u.bind(null,n,a,t),u=void 0,!Vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Tf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===u)break;if(g===4)for(g=s.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;T!==null;){if(g=xa(T),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){s=f=g;continue t}T=T.parentNode}}s=s.return}Od(function(){var Q=f,ft=Hu(a),mt=[];t:{var $=lp.get(t);if($!==void 0){var ot=tl,Gt=t;switch(t){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":ot=pv;break;case"focusin":Gt="focus",ot=qu;break;case"focusout":Gt="blur",ot=qu;break;case"beforeblur":case"afterblur":ot=qu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=_v;break;case ap:case rp:case sp:ot=rv;break;case op:ot=xv;break;case"scroll":case"scrollend":ot=tv;break;case"wheel":ot=Mv;break;case"copy":case"cut":case"paste":ot=ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Bd;break;case"toggle":case"beforetoggle":ot=Ev}var $t=(n&4)!==0,Ve=!$t&&(t==="scroll"||t==="scrollend"),Y=$t?$!==null?$+"Capture":null:$;$t=[];for(var X=Q,K;X!==null;){var pt=X;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||Y===null||(pt=Hs(X,Y),pt!=null&&$t.push(So(X,pt,K))),Ve)break;X=X.return}0<$t.length&&($=new ot($,Gt,null,a,ft),mt.push({event:$,listeners:$t}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",$&&a!==Bu&&(Gt=a.relatedTarget||a.fromElement)&&(xa(Gt)||Gt[mi]))break t;if((ot||$)&&($=ft.window===ft?ft:($=ft.ownerDocument)?$.defaultView||$.parentWindow:window,ot?(Gt=a.relatedTarget||a.toElement,ot=Q,Gt=Gt?xa(Gt):null,Gt!==null&&(Ve=c(Gt),$t=Gt.tag,Gt!==Ve||$t!==5&&$t!==27&&$t!==6)&&(Gt=null)):(ot=null,Gt=Q),ot!==Gt)){if($t=Fd,pt="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&($t=Bd,pt="onPointerLeave",Y="onPointerEnter",X="pointer"),Ve=ot==null?$:er(ot),K=Gt==null?$:er(Gt),$=new $t(pt,X+"leave",ot,a,ft),$.target=Ve,$.relatedTarget=K,pt=null,xa(ft)===Q&&($t=new $t(Y,X+"enter",Gt,a,ft),$t.target=K,$t.relatedTarget=Ve,pt=$t),Ve=pt,ot&&Gt)e:{for($t=yx,Y=ot,X=Gt,K=0,pt=Y;pt;pt=$t(pt))K++;pt=0;for(var Kt=X;Kt;Kt=$t(Kt))pt++;for(;0<K-pt;)Y=$t(Y),K--;for(;0<pt-K;)X=$t(X),pt--;for(;K--;){if(Y===X||X!==null&&Y===X.alternate){$t=Y;break e}Y=$t(Y),X=$t(X)}$t=null}else $t=null;ot!==null&&wg(mt,$,ot,$t,!1),Gt!==null&&Ve!==null&&wg(mt,Ve,Gt,$t,!0)}}t:{if($=Q?er(Q):window,ot=$.nodeName&&$.nodeName.toLowerCase(),ot==="select"||ot==="input"&&$.type==="file")var Te=Yd;else if(Wd($))if(jd)Te=Lv;else{Te=Uv;var Yt=wv}else ot=$.nodeName,!ot||ot.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&gi(Q.elementType)&&(Te=Yd):Te=Nv;if(Te&&(Te=Te(t,Q))){qd(mt,Te,a,ft);break t}Yt&&Yt(t,$,Q),t==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&Sn($,"number",$.value)}switch(Yt=Q?er(Q):window,t){case"focusin":(Wd(Yt)||Yt.contentEditable==="true")&&(Ir=Yt,Ju=Q,js=null);break;case"focusout":js=Ju=Ir=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,np(mt,a,ft);break;case"selectionchange":if(Pv)break;case"keydown":case"keyup":np(mt,a,ft)}var ue;if(ju)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Fr?Xd(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Hd&&a.locale!=="ko"&&(Fr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Fr&&(ue=Pd()):(ya=ft,Xu="value"in ya?ya.value:ya.textContent,Fr=!0)),Yt=kl(Q,ve),0<Yt.length&&(ve=new Id(ve,t,null,a,ft),mt.push({event:ve,listeners:Yt}),ue?ve.data=ue:(ue=kd(a),ue!==null&&(ve.data=ue)))),(ue=bv?Av(t,a):Rv(t,a))&&(ve=kl(Q,"onBeforeInput"),0<ve.length&&(Yt=new Id("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Yt,listeners:ve}),Yt.data=ue)),vx(mt,t,Q,a,ft)}Cg(mt,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function kl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Hs(t,a),u!=null&&s.unshift(So(t,u,f)),u=Hs(t,n),u!=null&&s.push(So(t,u,f))),t.tag===3)return s;t=t.return}return[]}function yx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wg(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,I=T.alternate,Q=T.stateNode;if(T=T.tag,I!==null&&I===s)break;T!==5&&T!==26&&T!==27||Q===null||(I=Q,u?(Q=Hs(a,f),Q!=null&&g.unshift(So(a,Q,I))):u||(Q=Hs(a,f),Q!=null&&g.push(So(a,Q,I)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Ex=/\r\n?/g,Tx=/\u0000|\uFFFD/g;function Ug(t){return(typeof t=="string"?t:""+t).replace(Ex,`
`).replace(Tx,"")}function Ng(t,n){return n=Ug(n),Ug(t)===n}function Ge(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||hn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&hn(t,""+s);break;case"className":Qt(t,"class",s);break;case"tabIndex":Qt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(t,a,s);break;case"style":Or(t,s,f);break;case"data":if(n!=="object"){Qt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",u.name,u,null),Ge(t,n,"formEncType",u.formEncType,u,null),Ge(t,n,"formMethod",u.formMethod,u,null),Ge(t,n,"formTarget",u.formTarget,u,null)):(Ge(t,n,"encType",u.encType,u,null),Ge(t,n,"method",u.method,u,null),Ge(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Vi);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),kt(t,"popover",s);break;case"xlinkActuate":Wt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Wt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Wt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Wt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Wt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Wt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":kt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=J_.get(a)||a,kt(t,a,s))}}function bf(t,n,a,s,u,f){switch(a){case"style":Or(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?hn(t,s):(typeof s=="number"||typeof s=="bigint")&&hn(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):kt(t,a,s)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,f,g,a,null)}}u&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var T=f=g=u=null,I=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":u=ft;break;case"type":g=ft;break;case"checked":I=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ge(t,n,s,ft,a,null)}}Gi(t,f,T,I,Q,g,u,!1);return;case"select":me("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:Ge(t,n,u,T,a,null)}n=f,a=g,t.multiple=!!s,n!=null?ni(t,!!s,n,!1):a!=null&&ni(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ge(t,n,g,T,a,null)}Mn(t,s,u,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ge(t,n,I,s,a,null));return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<xo.length;s++)me(xo[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,Q,s,a,null)}return;default:if(gi(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&bf(t,n,ft,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ge(t,n,T,s,a,null))}function bx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,T=null,I=null,Q=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=mt;default:s.hasOwnProperty(ot)||Ge(t,n,ot,null,s,mt)}}for(var $ in s){var ot=s[$];if(mt=a[$],s.hasOwnProperty($)&&(ot!=null||mt!=null))switch($){case"type":f=ot;break;case"name":u=ot;break;case"checked":Q=ot;break;case"defaultChecked":ft=ot;break;case"value":g=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==mt&&Ge(t,n,$,ot,s,mt)}}xn(t,g,T,I,Q,ft,f,u);return;case"select":ot=g=T=$=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ot=I;default:s.hasOwnProperty(f)||Ge(t,n,f,null,s,I)}for(u in s)if(f=s[u],I=a[u],s.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":$=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==I&&Ge(t,n,u,f,s,I)}n=T,a=g,s=ot,$!=null?ni(t,!!a,$,!1):!!s!=!!a&&(n!=null?ni(t,!!a,n,!0):ni(t,!!a,a?[]:"",!1));return;case"textarea":ot=$=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(t,n,T,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":$=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ge(t,n,g,u,s,f)}Oe(t,$,ot);return;case"option":for(var Gt in a)$=a[Gt],a.hasOwnProperty(Gt)&&$!=null&&!s.hasOwnProperty(Gt)&&(Gt==="selected"?t.selected=!1:Ge(t,n,Gt,null,s,$));for(I in s)$=s[I],ot=a[I],s.hasOwnProperty(I)&&$!==ot&&($!=null||ot!=null)&&(I==="selected"?t.selected=$&&typeof $!="function"&&typeof $!="symbol":Ge(t,n,I,$,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)$=a[$t],a.hasOwnProperty($t)&&$!=null&&!s.hasOwnProperty($t)&&Ge(t,n,$t,null,s,$);for(Q in s)if($=s[Q],ot=a[Q],s.hasOwnProperty(Q)&&$!==ot&&($!=null||ot!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Ge(t,n,Q,$,s,ot)}return;default:if(gi(n)){for(var Ve in a)$=a[Ve],a.hasOwnProperty(Ve)&&$!==void 0&&!s.hasOwnProperty(Ve)&&bf(t,n,Ve,void 0,s,$);for(ft in s)$=s[ft],ot=a[ft],!s.hasOwnProperty(ft)||$===ot||$===void 0&&ot===void 0||bf(t,n,ft,$,s,ot);return}}for(var Y in a)$=a[Y],a.hasOwnProperty(Y)&&$!=null&&!s.hasOwnProperty(Y)&&Ge(t,n,Y,null,s,$);for(mt in s)$=s[mt],ot=a[mt],!s.hasOwnProperty(mt)||$===ot||$==null&&ot==null||Ge(t,n,mt,$,s,ot)}function Lg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ax(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,T=u.duration;if(f&&T&&Lg(g)){for(g=0,T=u.responseEnd,s+=1;s<a.length;s++){var I=a[s],Q=I.startTime;if(Q>T)break;var ft=I.transferSize,mt=I.initiatorType;ft&&Lg(mt)&&(I=I.responseEnd,g+=ft*(I<T?1:(T-Q)/(I-Q)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Af=null,Rf=null;function Wl(t){return t.nodeType===9?t:t.ownerDocument}function Og(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Cf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Df=null;function Rx(){var t=window.event;return t&&t.type==="popstate"?t===Df?!1:(Df=t,!0):(Df=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,Cx=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(t){return Fg.resolve(null).then(t).catch(wx)}:zg;function wx(t){setTimeout(function(){throw t})}function Ba(t){return t==="head"}function Ig(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),fs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[tr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(t.ownerDocument.body);a=u}while(a);fs(n)}function Bg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function wf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wf(a),Bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ux(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[tr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function Nx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Hg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function Uf(t){return t.data==="$?"||t.data==="$~"}function Nf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Lx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Lf=null;function Gg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Xg(t,n,a){switch(n=Wl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Bs(t)}var ci=new Map,kg=new Set;function ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=H.d;H.d={f:Ox,r:Px,D:zx,C:Fx,L:Ix,m:Bx,X:Gx,S:Hx,M:Vx};function Ox(){var t=aa.f(),n=Fl();return t||n}function Px(t){var n=Sa(t);n!==null&&n.tag===5&&n.type==="form"?om(n):aa.r(t)}var ls=typeof document>"u"?null:document;function Wg(t,n,a){var s=ls;if(s&&typeof n=="string"&&n){var u=ne(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),kg.has(u)||(kg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Rn(n,"link",t),b(n),s.head.appendChild(n)))}}function zx(t){aa.D(t),Wg("dns-prefetch",t,null)}function Fx(t,n){aa.C(t,n),Wg("preconnect",t,n)}function Ix(t,n,a){aa.L(t,n,a);var s=ls;if(s&&t&&n){var u='link[rel="preload"][as="'+ne(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ne(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ne(a.imageSizes)+'"]')):u+='[href="'+ne(t)+'"]';var f=u;switch(n){case"style":f=us(t);break;case"script":f=cs(t)}ci.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(Eo(f))||(n=s.createElement("link"),Rn(n,"link",t),b(n),s.head.appendChild(n)))}}function Bx(t,n){aa.m(t,n);var a=ls;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ne(s)+'"][href="'+ne(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cs(t)}if(!ci.has(f)&&(t=_({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}s=a.createElement("link"),Rn(s,"link",t),b(s),a.head.appendChild(s)}}}function Hx(t,n,a){aa.S(t,n,a);var s=ls;if(s&&t){var u=Ma(s).hoistableStyles,f=us(t);n=n||"default";var g=u.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(yo(f)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&Of(t,a);var I=g=s.createElement("link");b(I),Rn(I,"link",t),I._p=new Promise(function(Q,ft){I.onload=Q,I.onerror=ft}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},u.set(f,g)}}}function Gx(t,n){aa.X(t,n);var a=ls;if(a&&t){var s=Ma(a).hoistableScripts,u=cs(t),f=s.get(u);f||(f=a.querySelector(Eo(u)),f||(t=_({src:t,async:!0},n),(n=ci.get(u))&&Pf(t,n),f=a.createElement("script"),b(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Vx(t,n){aa.M(t,n);var a=ls;if(a&&t){var s=Ma(a).hoistableScripts,u=cs(t),f=s.get(u);f||(f=a.querySelector(Eo(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=ci.get(u))&&Pf(t,n),f=a.createElement("script"),b(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function qg(t,n,a,s){var u=(u=tt.current)?ql(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=Ma(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=us(a.href);var f=Ma(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(yo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||Xx(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=Ma(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function us(t){return'href="'+ne(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Yg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Xx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),b(n),t.head.appendChild(n))}function cs(t){return'[src="'+ne(t)+'"]'}function Eo(t){return"script[async]"+t}function jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ne(a.href)+'"]');if(s)return n.instance=s,b(s),s;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),b(s),Rn(s,"style",u),Yl(s,a.precedence,t),n.instance=s;case"stylesheet":u=us(a.href);var f=t.querySelector(yo(u));if(f)return n.state.loading|=4,n.instance=f,b(f),f;s=Yg(a),(u=ci.get(u))&&Of(s,u),f=(t.ownerDocument||t).createElement("link"),b(f);var g=f;return g._p=new Promise(function(T,I){g.onload=T,g.onerror=I}),Rn(f,"link",s),n.state.loading|=4,Yl(f,a.precedence,t),n.instance=f;case"script":return f=cs(a.src),(u=t.querySelector(Eo(f)))?(n.instance=u,b(u),u):(s=a,(u=ci.get(f))&&(s=_({},a),Pf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),b(u),Rn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Yl(s,a.precedence,t));return n.instance}function Yl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var jl=null;function Zg(t,n,a){if(jl===null){var s=new Map,u=jl=new Map;u.set(a,s)}else u=jl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[tr]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function Kg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function kx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Wx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=us(s.href),f=n.querySelector(yo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Zl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,b(f);return}f=n.ownerDocument||n,s=Yg(s),(u=ci.get(u))&&Of(s,u),f=f.createElement("link"),b(f);var g=f;g._p=new Promise(function(T,I){g.onload=T,g.onerror=I}),Rn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Zl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var zf=0;function qx(t,n){return t.stylesheets&&t.count===0&&Ql(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&zf===0&&(zf=62500*Ax());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ql(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Kl=null;function Ql(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Kl=new Map,n.forEach(Yx,t),Kl=null,Zl.call(t))}function Yx(t,n){if(!(n.state.loading&4)){var a=Kl.get(t);if(a)var s=a.get(null);else{a=new Map,Kl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=Zl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var To={$$typeof:L,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function jx(t,n,a,s,u,f,g,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ye(0),this.hiddenUpdates=ye(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Jg(t,n,a,s,u,f,g,T,I,Q,ft,mt){return t=new jx(t,n,a,g,I,Q,ft,mt,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=pc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},vc(f),t}function $g(t){return t?(t=Gr,t):Gr}function t0(t,n,a,s,u,f){u=$g(u),s.context===null?s.context=u:s.pendingContext=u,s=Ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Da(t,s,n),a!==null&&(Vn(a,t,n),eo(a,t,n))}function e0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Ff(t,n){e0(t,n),(t=t.alternate)&&e0(t,n)}function n0(t){if(t.tag===13||t.tag===31){var n=rr(t,67108864);n!==null&&Vn(n,t,67108864),Ff(t,67108864)}}function i0(t){if(t.tag===13||t.tag===31){var n=Qn();n=zs(n);var a=rr(t,n);a!==null&&Vn(a,t,n),Ff(t,n)}}var Jl=!0;function Zx(t,n,a,s){var u=P.T;P.T=null;var f=H.p;try{H.p=2,If(t,n,a,s)}finally{H.p=f,P.T=u}}function Kx(t,n,a,s){var u=P.T;P.T=null;var f=H.p;try{H.p=8,If(t,n,a,s)}finally{H.p=f,P.T=u}}function If(t,n,a,s){if(Jl){var u=Bf(s);if(u===null)Tf(t,n,s,$l,a),r0(t,s);else if(Jx(u,t,n,a,s))s.stopPropagation();else if(r0(t,s),n&4&&-1<Qx.indexOf(t)){for(;u!==null;){var f=Sa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=St(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var I=1<<31-Ot(g);T.entanglements[1]|=I,g&=~I}Ui(f),(we&6)===0&&(Pl=y()+500,vo(0))}}break;case 31:case 13:T=rr(f,2),T!==null&&Vn(T,f,2),Fl(),Ff(f,2)}if(f=Bf(s),f===null&&Tf(t,n,s,$l,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Tf(t,n,s,null,a)}}function Bf(t){return t=Hu(t),Hf(t)}var $l=null;function Hf(t){if($l=null,t=xa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return $l=t,null}function a0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case dt:return 2;case vt:return 8;case lt:case jt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Gf=!1,Ha=null,Ga=null,Va=null,bo=new Map,Ao=new Map,Xa=[],Qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r0(t,n){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Sa(n),n!==null&&n0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Jx(t,n,a,s,u){switch(n){case"focusin":return Ha=Ro(Ha,t,n,a,s,u),!0;case"dragenter":return Ga=Ro(Ga,t,n,a,s,u),!0;case"mouseover":return Va=Ro(Va,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return bo.set(f,Ro(bo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,s,u)),!0}return!1}function s0(t){var n=xa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ri(t.priority,function(){i0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ri(t.priority,function(){i0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Bf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Bu=s,a.target.dispatchEvent(s),Bu=null}else return n=Sa(a),n!==null&&n0(n),t.blockedOn=a,!1;n.shift()}return!0}function o0(t,n,a){tu(t)&&a.delete(n)}function $x(){Gf=!1,Ha!==null&&tu(Ha)&&(Ha=null),Ga!==null&&tu(Ga)&&(Ga=null),Va!==null&&tu(Va)&&(Va=null),bo.forEach(o0),Ao.forEach(o0)}function eu(t,n){t.blockedOn===n&&(t.blockedOn=null,Gf||(Gf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$x)))}var nu=null;function l0(t){nu!==t&&(nu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nu===t&&(nu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Hf(s||a)===null)continue;break}var f=Sa(a);f!==null&&(t.splice(n,3),n-=3,Ic(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function fs(t){function n(I){return eu(I,t)}Ha!==null&&eu(Ha,t),Ga!==null&&eu(Ga,t),Va!==null&&eu(Va,t),bo.forEach(n),Ao.forEach(n);for(var a=0;a<Xa.length;a++){var s=Xa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)s0(a),a.blockedOn===null&&Xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[vn]||null;if(typeof f=="function")g||l0(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[vn]||null)T=g.formAction;else if(Hf(u)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),l0(a)}}}function u0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Vf(t){this._internalRoot=t}iu.prototype.render=Vf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();t0(a,s,t,n,null,null)},iu.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t0(t.current,2,null,t,null,null),Fl(),n[mi]=null}};function iu(t){this._internalRoot=t}iu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Fs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,t),a===0&&s0(t)}};var c0=e.version;if(c0!=="19.2.3")throw Error(r(527,c0,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var tS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{yt=au.inject(tS),Et=au}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=_m,f=vm,g=xm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Jg(t,1,!1,null,null,a,s,null,u,f,g,u0),t[mi]=n.current,Ef(t),new Vf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=_m,g=vm,T=xm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Jg(t,1,!0,n,a??null,s,u,I,f,g,T,u0),n.context=$g(null),a=n.current,s=Qn(),s=zs(s),u=Ca(s),u.callback=null,Da(a,u,s),a=s,n.current.lanes=a,Dn(n,a),Ui(n),t[mi]=n.current,Ef(t),new iu(n)},Do.version="19.2.3",Do}var S0;function cS(){if(S0)return Wf.exports;S0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Wf.exports=uS(),Wf.exports}var fS=cS();const Md="182",hS=0,M0=1,dS=2,Au=1,pS=2,Fo=3,$a=0,kn=1,ca=2,ha=0,As=1,y0=2,E0=3,T0=4,mS=5,br=100,gS=101,_S=102,vS=103,xS=104,SS=200,MS=201,yS=202,ES=203,Ah=204,Rh=205,TS=206,bS=207,AS=208,RS=209,CS=210,DS=211,wS=212,US=213,NS=214,Ch=0,Dh=1,wh=2,Cs=3,Uh=4,Nh=5,Lh=6,Oh=7,v_=0,LS=1,OS=2,zi=0,x_=1,S_=2,M_=3,y_=4,E_=5,T_=6,b_=7,A_=300,Dr=301,Ds=302,Ph=303,zh=304,Pu=306,Fh=1e3,fa=1001,Ih=1002,Cn=1003,PS=1004,ru=1005,Ln=1006,Zf=1007,Rr=1008,di=1009,R_=1010,C_=1011,Bo=1012,yd=1013,Bi=1014,Oi=1015,ma=1016,Ed=1017,Td=1018,Ho=1020,D_=35902,w_=35899,U_=1021,N_=1022,bi=1023,ga=1026,Cr=1027,L_=1028,bd=1029,ws=1030,Ad=1031,Rd=1033,Ru=33776,Cu=33777,Du=33778,wu=33779,Bh=35840,Hh=35841,Gh=35842,Vh=35843,Xh=36196,kh=37492,Wh=37496,qh=37488,Yh=37489,jh=37490,Zh=37491,Kh=37808,Qh=37809,Jh=37810,$h=37811,td=37812,ed=37813,nd=37814,id=37815,ad=37816,rd=37817,sd=37818,od=37819,ld=37820,ud=37821,cd=36492,fd=36494,hd=36495,dd=36283,pd=36284,md=36285,gd=36286,zS=3200,FS=0,IS=1,Qa="",hi="srgb",Us="srgb-linear",Nu="linear",Fe="srgb",hs=7680,b0=519,BS=512,HS=513,GS=514,Cd=515,VS=516,XS=517,Dd=518,kS=519,A0=35044,R0="300 es",Pi=2e3,Lu=2001;function O_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ou(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function WS(){const o=Ou("canvas");return o.style.display="block",o}const C0={};function D0(...o){const e="THREE."+o.shift();console.log(e,...o)}function re(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ae(...o){const e="THREE."+o.shift();console.error(e,...o)}function Go(...o){const e=o.join(" ");e in C0||(C0[e]=!0,re(...o))}function qS(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Ls{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=Math.PI/180,_d=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function YS(o,e){return(o%e+e)%e}function Qf(o,e,i){return(1-i)*o+i*e}function wo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,i=0){Be.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ko{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],x=r[l+2],_=r[l+3],S=c[h+0],E=c[h+1],R=c[h+2],C=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=_;return}if(d>=1){e[i+0]=S,e[i+1]=E,e[i+2]=R,e[i+3]=C;return}if(_!==C||m!==S||p!==E||x!==R){let M=m*S+p*E+x*R+_*C;M<0&&(S=-S,E=-E,R=-R,C=-C,M=-M);let v=1-d;if(M<.9995){const z=Math.acos(M),L=Math.sin(z);v=Math.sin(v*z)/L,d=Math.sin(d*z)/L,m=m*v+S*d,p=p*v+E*d,x=x*v+R*d,_=_*v+C*d}else{m=m*v+S*d,p=p*v+E*d,x=x*v+R*d,_=_*v+C*d;const z=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=z,p*=z,x*=z,_*=z}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],x=r[l+3],_=c[h],S=c[h+1],E=c[h+2],R=c[h+3];return e[i]=d*R+x*_+m*E-p*S,e[i+1]=m*R+x*S+p*_-d*E,e[i+2]=p*R+x*E+d*S-m*_,e[i+3]=x*R-d*_-m*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),x=d(l/2),_=d(c/2),S=m(r/2),E=m(l/2),R=m(c/2);switch(h){case"XYZ":this._x=S*x*_+p*E*R,this._y=p*E*_-S*x*R,this._z=p*x*R+S*E*_,this._w=p*x*_-S*E*R;break;case"YXZ":this._x=S*x*_+p*E*R,this._y=p*E*_-S*x*R,this._z=p*x*R-S*E*_,this._w=p*x*_+S*E*R;break;case"ZXY":this._x=S*x*_-p*E*R,this._y=p*E*_+S*x*R,this._z=p*x*R+S*E*_,this._w=p*x*_-S*E*R;break;case"ZYX":this._x=S*x*_-p*E*R,this._y=p*E*_+S*x*R,this._z=p*x*R-S*E*_,this._w=p*x*_+S*E*R;break;case"YZX":this._x=S*x*_+p*E*R,this._y=p*E*_+S*x*R,this._z=p*x*R-S*E*_,this._w=p*x*_-S*E*R;break;case"XZY":this._x=S*x*_-p*E*R,this._y=p*E*_-S*x*R,this._z=p*x*R+S*E*_,this._w=p*x*_+S*E*R;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],_=i[10],S=r+d+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(r>d&&r>_){const E=2*Math.sqrt(1+r-d-_);this._w=(x-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>_){const E=2*Math.sqrt(1+d-r-_);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+_-r-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+h*d+l*p-c*m,this._y=l*x+h*m+c*d-r*p,this._z=c*x+h*p+r*m-l*d,this._w=h*x-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(w0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(w0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),x=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+m*p+h*_-d*x,this.y=r+m*x+d*p-c*_,this.z=l+m*_+c*x-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new rt,w0=new ko;class ce{constructor(e,i,r,l,c,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],x=r[4],_=r[7],S=r[2],E=r[5],R=r[8],C=l[0],M=l[3],v=l[6],z=l[1],L=l[4],O=l[7],F=l[2],B=l[5],w=l[8];return c[0]=h*C+d*z+m*F,c[3]=h*M+d*L+m*B,c[6]=h*v+d*O+m*w,c[1]=p*C+x*z+_*F,c[4]=p*M+x*L+_*B,c[7]=p*v+x*O+_*w,c[2]=S*C+E*z+R*F,c[5]=S*M+E*L+R*B,c[8]=S*v+E*O+R*w,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return i*h*x-i*d*p-r*c*x+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],_=x*h-d*p,S=d*m-x*c,E=p*c-h*m,R=i*_+r*S+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=_*C,e[1]=(l*p-x*r)*C,e[2]=(d*r-l*h)*C,e[3]=S*C,e[4]=(x*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=E*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply($f.makeScale(e,i)),this}rotate(e){return this.premultiply($f.makeRotation(-e)),this}translate(e,i){return this.premultiply($f.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $f=new ce,U0=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N0=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jS(){const o={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Fe&&(l.r=da(l.r),l.g=da(l.g),l.b=da(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?Nu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Us]:{primaries:e,whitePoint:r,transfer:Nu,toXYZ:U0,fromXYZ:N0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Fe,toXYZ:U0,fromXYZ:N0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Ee=jS();function da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ds;class ZS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ds===void 0&&(ds=Ou("canvas")),ds.width=e.width,ds.height=e.height;const l=ds.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ds}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ou("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=da(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(da(i[r]/255)*255):i[r]=da(i[r]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(th(l[h].image)):c.push(th(l[h]))}else c=th(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function th(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ZS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let QS=0;const eh=new rt;class zn extends Ls{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=fa,l=fa,c=Ln,h=Rr,d=bi,m=di,p=zn.DEFAULT_ANISOTROPY,x=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Xo(),this.name="",this.source=new wd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fh:e.x=e.x-Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fh:e.y=e.y-Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=A_;zn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],x=m[4],_=m[8],S=m[1],E=m[5],R=m[9],C=m[2],M=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(_-C)<.01&&Math.abs(R-M)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+C)<.1&&Math.abs(R+M)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,O=(E+1)/2,F=(v+1)/2,B=(x+S)/4,w=(_+C)/4,Z=(R+M)/4;return L>O&&L>F?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=B/r,c=w/r):O>F?O<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),r=B/l,c=Z/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=w/c,l=Z/c),this.set(r,l,c,i),this}let z=Math.sqrt((M-R)*(M-R)+(_-C)*(_-C)+(S-x)*(S-x));return Math.abs(z)<.001&&(z=1),this.x=(M-R)/z,this.y=(_-C)/z,this.z=(S-x)/z,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends Ls{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new wd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends JS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class P_ extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $S extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Si.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Si.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Si.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Si):Si.fromBufferAttribute(c,h),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),su.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),su.copy(r.boundingBox)),su.applyMatrix4(e.matrixWorld),this.union(su)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),ou.subVectors(this.max,Uo),ps.subVectors(e.a,Uo),ms.subVectors(e.b,Uo),gs.subVectors(e.c,Uo),Wa.subVectors(ms,ps),qa.subVectors(gs,ms),vr.subVectors(ps,gs);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-vr.z,vr.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,vr.z,0,-vr.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-vr.y,vr.x,0];return!nh(i,ps,ms,gs,ou)||(i=[1,0,0,0,1,0,0,0,1],!nh(i,ps,ms,gs,ou))?!1:(lu.crossVectors(Wa,qa),i=[lu.x,lu.y,lu.z],nh(i,ps,ms,gs,ou))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ra=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Si=new rt,su=new Wo,ps=new rt,ms=new rt,gs=new rt,Wa=new rt,qa=new rt,vr=new rt,Uo=new rt,ou=new rt,lu=new rt,xr=new rt;function nh(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){xr.fromArray(o,c);const d=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=e.dot(xr),p=i.dot(xr),x=r.dot(xr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const tM=new Wo,No=new rt,ih=new rt;class Ud{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):tM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(ih)),this.expandByPoint(No.copy(e.center).sub(ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sa=new rt,ah=new rt,uu=new rt,Ya=new rt,rh=new rt,cu=new rt,sh=new rt;class eM{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ah.copy(e).add(i).multiplyScalar(.5),uu.copy(i).sub(e).normalize(),Ya.copy(this.origin).sub(ah);const c=e.distanceTo(i)*.5,h=-this.direction.dot(uu),d=Ya.dot(this.direction),m=-Ya.dot(uu),p=Ya.lengthSq(),x=Math.abs(1-h*h);let _,S,E,R;if(x>0)if(_=h*m-d,S=h*d-m,R=c*x,_>=0)if(S>=-R)if(S<=R){const C=1/x;_*=C,S*=C,E=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S<=-R?(_=Math.max(0,-(-h*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+p):S<=R?(_=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+p):(_=Math.max(0,-(h*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),E=-_*_+S*(S+2*m)+p);else S=h>0?-c:c,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ah).addScaledVector(uu,S),E}intersectSphere(e,i){sa.subVectors(e.center,this.origin);const r=sa.dot(this.direction),l=sa.dot(sa)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(c=(e.min.y-S.y)*x,h=(e.max.y-S.y)*x):(c=(e.max.y-S.y)*x,h=(e.min.y-S.y)*x),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(d=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,sa)!==null}intersectTriangle(e,i,r,l,c){rh.subVectors(i,e),cu.subVectors(r,e),sh.crossVectors(rh,cu);let h=this.direction.dot(sh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ya.subVectors(this.origin,e);const m=d*this.direction.dot(cu.crossVectors(Ya,cu));if(m<0)return null;const p=d*this.direction.dot(rh.cross(Ya));if(p<0||m+p>h)return null;const x=-d*Ya.dot(sh);return x<0?null:this.at(x/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,i,r,l,c,h,d,m,p,x,_,S,E,R,C,M){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,x,_,S,E,R,C,M)}set(e,i,r,l,c,h,d,m,p,x,_,S,E,R,C,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=x,v[10]=_,v[14]=S,v[3]=E,v[7]=R,v[11]=C,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),c=1/_s.setFromMatrixColumn(e,1).length(),h=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const S=h*x,E=h*_,R=d*x,C=d*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=E+R*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=R+E*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*x,E=m*_,R=p*x,C=p*_;i[0]=S+C*d,i[4]=R*d-E,i[8]=h*p,i[1]=h*_,i[5]=h*x,i[9]=-d,i[2]=E*d-R,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*x,E=m*_,R=p*x,C=p*_;i[0]=S-C*d,i[4]=-h*_,i[8]=R+E*d,i[1]=E+R*d,i[5]=h*x,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*x,E=h*_,R=d*x,C=d*_;i[0]=m*x,i[4]=R*p-E,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=E*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,E=h*p,R=d*m,C=d*p;i[0]=m*x,i[4]=C-S*_,i[8]=R*_+E,i[1]=_,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=E*_+R,i[10]=S-C*_}else if(e.order==="XZY"){const S=h*m,E=h*p,R=d*m,C=d*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=S*_+C,i[5]=h*x,i[9]=E*_-R,i[2]=R*_-E,i[6]=d*x,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nM,e,iM)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),ja.crossVectors(r,Jn),ja.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),ja.crossVectors(r,Jn)),ja.normalize(),fu.crossVectors(Jn,ja),l[0]=ja.x,l[4]=fu.x,l[8]=Jn.x,l[1]=ja.y,l[5]=fu.y,l[9]=Jn.y,l[2]=ja.z,l[6]=fu.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],x=r[1],_=r[5],S=r[9],E=r[13],R=r[2],C=r[6],M=r[10],v=r[14],z=r[3],L=r[7],O=r[11],F=r[15],B=l[0],w=l[4],Z=l[8],A=l[12],D=l[1],V=l[5],it=l[9],at=l[13],ht=l[2],ct=l[6],P=l[10],H=l[14],nt=l[3],Mt=l[7],xt=l[11],N=l[15];return c[0]=h*B+d*D+m*ht+p*nt,c[4]=h*w+d*V+m*ct+p*Mt,c[8]=h*Z+d*it+m*P+p*xt,c[12]=h*A+d*at+m*H+p*N,c[1]=x*B+_*D+S*ht+E*nt,c[5]=x*w+_*V+S*ct+E*Mt,c[9]=x*Z+_*it+S*P+E*xt,c[13]=x*A+_*at+S*H+E*N,c[2]=R*B+C*D+M*ht+v*nt,c[6]=R*w+C*V+M*ct+v*Mt,c[10]=R*Z+C*it+M*P+v*xt,c[14]=R*A+C*at+M*H+v*N,c[3]=z*B+L*D+O*ht+F*nt,c[7]=z*w+L*V+O*ct+F*Mt,c[11]=z*Z+L*it+O*P+F*xt,c[15]=z*A+L*at+O*H+F*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],x=e[2],_=e[6],S=e[10],E=e[14],R=e[3],C=e[7],M=e[11],v=e[15],z=m*E-p*S,L=d*E-p*_,O=d*S-m*_,F=h*E-p*x,B=h*S-m*x,w=h*_-d*x;return i*(C*z-M*L+v*O)-r*(R*z-M*F+v*B)+l*(R*L-C*F+v*w)-c*(R*O-C*B+M*w)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],_=e[9],S=e[10],E=e[11],R=e[12],C=e[13],M=e[14],v=e[15],z=_*M*p-C*S*p+C*m*E-d*M*E-_*m*v+d*S*v,L=R*S*p-x*M*p-R*m*E+h*M*E+x*m*v-h*S*v,O=x*C*p-R*_*p+R*d*E-h*C*E-x*d*v+h*_*v,F=R*_*m-x*C*m-R*d*S+h*C*S+x*d*M-h*_*M,B=i*z+r*L+l*O+c*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/B;return e[0]=z*w,e[1]=(C*S*c-_*M*c-C*l*E+r*M*E+_*l*v-r*S*v)*w,e[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*v+r*m*v)*w,e[3]=(_*m*c-d*S*c-_*l*p+r*S*p+d*l*E-r*m*E)*w,e[4]=L*w,e[5]=(x*M*c-R*S*c+R*l*E-i*M*E-x*l*v+i*S*v)*w,e[6]=(R*m*c-h*M*c-R*l*p+i*M*p+h*l*v-i*m*v)*w,e[7]=(h*S*c-x*m*c+x*l*p-i*S*p-h*l*E+i*m*E)*w,e[8]=O*w,e[9]=(R*_*c-x*C*c-R*r*E+i*C*E+x*r*v-i*_*v)*w,e[10]=(h*C*c-R*d*c+R*r*p-i*C*p-h*r*v+i*d*v)*w,e[11]=(x*d*c-h*_*c-x*r*p+i*_*p+h*r*E-i*d*E)*w,e[12]=F*w,e[13]=(x*C*l-R*_*l+R*r*S-i*C*S-x*r*M+i*_*M)*w,e[14]=(R*d*l-h*C*l-R*r*m+i*C*m+h*r*M-i*d*M)*w,e[15]=(h*_*l-x*d*l+x*r*m-i*_*m-h*r*S+i*d*S)*w,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,x=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+r,x*m-l*h,0,p*m-l*d,x*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,x=h+h,_=d+d,S=c*p,E=c*x,R=c*_,C=h*x,M=h*_,v=d*_,z=m*p,L=m*x,O=m*_,F=r.x,B=r.y,w=r.z;return l[0]=(1-(C+v))*F,l[1]=(E+O)*F,l[2]=(R-L)*F,l[3]=0,l[4]=(E-O)*B,l[5]=(1-(S+v))*B,l[6]=(M+z)*B,l[7]=0,l[8]=(R+L)*w,l[9]=(M-z)*w,l[10]=(1-(S+C))*w,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=_s.set(l[0],l[1],l[2]).length();const h=_s.set(l[4],l[5],l[6]).length(),d=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Mi.copy(this);const p=1/c,x=1/h,_=1/d;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=x,Mi.elements[5]*=x,Mi.elements[6]*=x,Mi.elements[8]*=_,Mi.elements[9]*=_,Mi.elements[10]*=_,i.setFromRotationMatrix(Mi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Pi,m=!1){const p=this.elements,x=2*c/(i-e),_=2*c/(r-l),S=(i+e)/(i-e),E=(r+l)/(r-l);let R,C;if(m)R=c/(h-c),C=h*c/(h-c);else if(d===Pi)R=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Lu)R=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Pi,m=!1){const p=this.elements,x=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),E=-(r+l)/(r-l);let R,C;if(m)R=1/(h-c),C=h/(h-c);else if(d===Pi)R=-2/(h-c),C=-(h+c)/(h-c);else if(d===Lu)R=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new rt,Mi=new fn,nM=new rt(0,0,0),iM=new rt(1,1,1),ja=new rt,fu=new rt,Jn=new rt,L0=new fn,O0=new ko;class _a{constructor(e=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return L0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return O0.setFromEuler(this),this.setFromQuaternion(O0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class z_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aM=0;const P0=new rt,vs=new ko,oa=new fn,hu=new rt,Lo=new rt,rM=new rt,sM=new ko,z0=new rt(1,0,0),F0=new rt(0,1,0),I0=new rt(0,0,1),B0={type:"added"},oM={type:"removed"},xs={type:"childadded",child:null},oh={type:"childremoved",child:null};class ti extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new rt,i=new _a,r=new ko,l=new rt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new ce}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(z0,e)}rotateY(e){return this.rotateOnAxis(F0,e)}rotateZ(e){return this.rotateOnAxis(I0,e)}translateOnAxis(e,i){return P0.copy(e).applyQuaternion(this.quaternion),this.position.add(P0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(z0,e)}translateY(e){return this.translateOnAxis(F0,e)}translateZ(e){return this.translateOnAxis(I0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?hu.copy(e):hu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Lo,hu,this.up):oa.lookAt(hu,Lo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(oa),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ae("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(B0),xs.child=e,this.dispatchEvent(xs),xs.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(oM),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(B0),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,rM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,sM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),x=h(e.images),_=h(e.shapes),S=h(e.skeletons),E=h(e.animations),R=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),R.length>0&&(r.nodes=R)}return r.object=l,r;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new rt(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new rt,la=new rt,lh=new rt,ua=new rt,Ss=new rt,Ms=new rt,H0=new rt,uh=new rt,ch=new rt,fh=new rt,hh=new an,dh=new an,ph=new an;class Ti{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){yi.subVectors(l,i),la.subVectors(r,i),lh.subVectors(e,i);const h=yi.dot(yi),d=yi.dot(la),m=yi.dot(lh),p=la.dot(la),x=la.dot(lh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,E=(p*m-d*x)*S,R=(h*x-d*m)*S;return c.set(1-E-R,R,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ua.x),m.addScaledVector(h,ua.y),m.addScaledVector(d,ua.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return hh.setScalar(0),dh.setScalar(0),ph.setScalar(0),hh.fromBufferAttribute(e,i),dh.fromBufferAttribute(e,r),ph.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(hh,c.x),h.addScaledVector(dh,c.y),h.addScaledVector(ph,c.z),h}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),la.subVectors(e,i),yi.cross(la).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),la.subVectors(this.a,this.b),yi.cross(la).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ti.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;Ss.subVectors(l,r),Ms.subVectors(c,r),uh.subVectors(e,r);const m=Ss.dot(uh),p=Ms.dot(uh);if(m<=0&&p<=0)return i.copy(r);ch.subVectors(e,l);const x=Ss.dot(ch),_=Ms.dot(ch);if(x>=0&&_<=x)return i.copy(l);const S=m*_-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(r).addScaledVector(Ss,h);fh.subVectors(e,c);const E=Ss.dot(fh),R=Ms.dot(fh);if(R>=0&&E<=R)return i.copy(c);const C=E*p-m*R;if(C<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(r).addScaledVector(Ms,d);const M=x*R-E*_;if(M<=0&&_-x>=0&&E-R>=0)return H0.subVectors(c,l),d=(_-x)/(_-x+(E-R)),i.copy(l).addScaledVector(H0,d);const v=1/(M+C+S);return h=C*v,d=S*v,i.copy(r).addScaledVector(Ss,h).addScaledVector(Ms,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},du={h:0,s:0,l:0};function mh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ie{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ee.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ee.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ee.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ee.workingColorSpace){if(e=YS(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=mh(h,c,e+1/3),this.g=mh(h,c,e),this.b=mh(h,c,e-1/3)}return Ee.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(c){c!==void 0&&parseFloat(c)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=F_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Ee.workingToColorSpace(Nn.copy(this),e),Math.round(Se(Nn.r*255,0,255))*65536+Math.round(Se(Nn.g*255,0,255))*256+Math.round(Se(Nn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ee.workingColorSpace){Ee.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,c=Nn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=x<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Ee.workingColorSpace){return Ee.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=hi){Ee.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,r=Nn.g,l=Nn.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(du);const r=Qf(Za.h,du.h,i),l=Qf(Za.s,du.s,i),c=Qf(Za.l,du.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ie;Ie.NAMES=F_;let lM=0;class zu extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=As,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ah&&(r.blendSrc=this.blendSrc),this.blendDst!==Rh&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class I_ extends zu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=v_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new rt,pu=new Be;let uM=0;class Ii{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=A0,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pu.fromBufferAttribute(this,i),pu.applyMatrix3(e),this.setXY(i,pu.x,pu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=wo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==A0&&(e.usage=this.usage),e}}class B_ extends Ii{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class H_ extends Ii{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pa extends Ii{constructor(e,i,r){super(new Float32Array(e),i,r)}}let cM=0;const fi=new fn,gh=new ti,ys=new rt,$n=new Wo,Oo=new Wo,_n=new rt;class va extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O_(e)?H_:B_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new pa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ud);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors($n.min,Oo.min),$n.expandByPoint(_n),_n.addVectors($n.max,Oo.max),$n.expandByPoint(_n)):($n.expandByPoint(Oo.min),$n.expandByPoint(Oo.max))}$n.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)_n.fromBufferAttribute(d,p),m&&(ys.fromBufferAttribute(e,p),_n.add(ys)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new rt,m[Z]=new rt;const p=new rt,x=new rt,_=new rt,S=new Be,E=new Be,R=new Be,C=new rt,M=new rt;function v(Z,A,D){p.fromBufferAttribute(r,Z),x.fromBufferAttribute(r,A),_.fromBufferAttribute(r,D),S.fromBufferAttribute(c,Z),E.fromBufferAttribute(c,A),R.fromBufferAttribute(c,D),x.sub(p),_.sub(p),E.sub(S),R.sub(S);const V=1/(E.x*R.y-R.x*E.y);isFinite(V)&&(C.copy(x).multiplyScalar(R.y).addScaledVector(_,-E.y).multiplyScalar(V),M.copy(_).multiplyScalar(E.x).addScaledVector(x,-R.x).multiplyScalar(V),d[Z].add(C),d[A].add(C),d[D].add(C),m[Z].add(M),m[A].add(M),m[D].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let Z=0,A=z.length;Z<A;++Z){const D=z[Z],V=D.start,it=D.count;for(let at=V,ht=V+it;at<ht;at+=3)v(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const L=new rt,O=new rt,F=new rt,B=new rt;function w(Z){F.fromBufferAttribute(l,Z),B.copy(F);const A=d[Z];L.copy(A),L.sub(F.multiplyScalar(F.dot(A))).normalize(),O.crossVectors(B,A);const V=O.dot(m[Z])<0?-1:1;h.setXYZW(Z,L.x,L.y,L.z,V)}for(let Z=0,A=z.length;Z<A;++Z){const D=z[Z],V=D.start,it=D.count;for(let at=V,ht=V+it;at<ht;at+=3)w(e.getX(at+0)),w(e.getX(at+1)),w(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new rt,c=new rt,h=new rt,d=new rt,m=new rt,p=new rt,x=new rt,_=new rt;if(e)for(let S=0,E=e.count;S<E;S+=3){const R=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),x.subVectors(h,c),_.subVectors(l,c),x.cross(_),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(x),m.add(x),p.add(x),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,c),_.subVectors(l,c),x.cross(_),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,_=d.normalized,S=new p.constructor(m.length*x);let E=0,R=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*x;for(let v=0;v<x;v++)S[R++]=p[E++]}return new Ii(S,x,_)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new va,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,_=p.length;x<_;x++){const S=p[x],E=e(S,r);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];x.push(E.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],_=c[p];for(let S=0,E=_.length;S<E;S++)x.push(_[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,x=h.length;p<x;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const G0=new fn,Sr=new eM,mu=new Ud,V0=new rt,gu=new rt,_u=new rt,vu=new rt,_h=new rt,xu=new rt,X0=new rt,Su=new rt;class Hi extends ti{constructor(e=new va,i=new I_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){xu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],_=c[m];x!==0&&(_h.fromBufferAttribute(_,e),h?xu.addScaledVector(_h,x):xu.addScaledVector(_h.sub(i),x))}i.add(xu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mu.copy(r.boundingSphere),mu.applyMatrix4(c),Sr.copy(e.ray).recast(e.near),!(mu.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(mu,V0)===null||Sr.origin.distanceToSquared(V0)>(e.far-e.near)**2))&&(G0.copy(c).invert(),Sr.copy(e.ray).applyMatrix4(G0),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Sr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,S=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,C=S.length;R<C;R++){const M=S[R],v=h[M.materialIndex],z=Math.max(M.start,E.start),L=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let O=z,F=L;O<F;O+=3){const B=d.getX(O),w=d.getX(O+1),Z=d.getX(O+2);l=Mu(this,v,e,r,p,x,_,B,w,Z),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let M=R,v=C;M<v;M+=3){const z=d.getX(M),L=d.getX(M+1),O=d.getX(M+2);l=Mu(this,h,e,r,p,x,_,z,L,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,C=S.length;R<C;R++){const M=S[R],v=h[M.materialIndex],z=Math.max(M.start,E.start),L=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let O=z,F=L;O<F;O+=3){const B=O,w=O+1,Z=O+2;l=Mu(this,v,e,r,p,x,_,B,w,Z),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=R,v=C;M<v;M+=3){const z=M,L=M+1,O=M+2;l=Mu(this,h,e,r,p,x,_,z,L,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function fM(o,e,i,r,l,c,h,d){let m;if(e.side===kn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===$a,d),m===null)return null;Su.copy(d),Su.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Su);return p<i.near||p>i.far?null:{distance:p,point:Su.clone(),object:o}}function Mu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,gu),o.getVertexPosition(m,_u),o.getVertexPosition(p,vu);const x=fM(o,e,i,r,gu,_u,vu,X0);if(x){const _=new rt;Ti.getBarycoord(X0,gu,_u,vu,_),l&&(x.uv=Ti.getInterpolatedAttribute(l,d,m,p,_,new Be)),c&&(x.uv1=Ti.getInterpolatedAttribute(c,d,m,p,_,new Be)),h&&(x.normal=Ti.getInterpolatedAttribute(h,d,m,p,_,new rt),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new rt,materialIndex:0};Ti.getNormal(gu,_u,vu,S.normal),x.face=S,x.barycoord=_}return x}class qo extends va{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],x=[],_=[];let S=0,E=0;R("z","y","x",-1,-1,r,i,e,h,c,0),R("z","y","x",1,-1,r,i,-e,h,c,1),R("x","z","y",1,1,e,r,i,l,h,2),R("x","z","y",1,-1,e,r,-i,l,h,3),R("x","y","z",1,-1,e,i,r,l,c,4),R("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new pa(p,3)),this.setAttribute("normal",new pa(x,3)),this.setAttribute("uv",new pa(_,2));function R(C,M,v,z,L,O,F,B,w,Z,A){const D=O/w,V=F/Z,it=O/2,at=F/2,ht=B/2,ct=w+1,P=Z+1;let H=0,nt=0;const Mt=new rt;for(let xt=0;xt<P;xt++){const N=xt*V-at;for(let et=0;et<ct;et++){const gt=et*D-it;Mt[C]=gt*z,Mt[M]=N*L,Mt[v]=ht,p.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[M]=0,Mt[v]=B>0?1:-1,x.push(Mt.x,Mt.y,Mt.z),_.push(et/w),_.push(1-xt/Z),H+=1}}for(let xt=0;xt<Z;xt++)for(let N=0;N<w;N++){const et=S+N+ct*xt,gt=S+N+ct*(xt+1),bt=S+(N+1)+ct*(xt+1),It=S+(N+1)+ct*xt;m.push(et,gt,It),m.push(gt,bt,It),nt+=6}d.addGroup(E,nt,A),E+=nt,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Pn(o){const e={};for(let i=0;i<o.length;i++){const r=Ns(o[i]);for(const l in r)e[l]=r[l]}return e}function hM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function G_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ee.workingColorSpace}const dM={clone:Ns,merge:Pn};var pM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends zu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pM,this.fragmentShader=mM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=hM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class V_ extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new rt,k0=new Be,W0=new Be;class Ei extends V_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(Kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,i){return this.getViewBounds(e,k0,W0),i.subVectors(W0,k0)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Kf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ts=1;class gM extends ti{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Es,Ts,e,i);l.layers=this.layers,this.add(l);const c=new Ei(Es,Ts,e,i);c.layers=this.layers,this.add(c);const h=new Ei(Es,Ts,e,i);h.layers=this.layers,this.add(h);const d=new Ei(Es,Ts,e,i);d.layers=this.layers,this.add(d);const m=new Ei(Es,Ts,e,i);m.layers=this.layers,this.add(m);const p=new Ei(Es,Ts,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Lu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,x]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(_,S,E),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class X_ extends zn{constructor(e=[],i=Dr,r,l,c,h,d,m,p,x){super(e,i,r,l,c,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class k_ extends Fi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new X_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qo(5,5,5),c=new Ai({name:"CubemapFromEquirect",uniforms:Ns(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ha});c.uniforms.tEquirect.value=i;const h=new Hi(l,c),d=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Ln),new gM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class yu extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _M={type:"move"};class vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),v=this._getHandJoint(p,C);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=x.position.distanceTo(_.position),E=.02,R=.005;p.inputState.pinching&&S>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_M)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new yu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class vM extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class xM extends zn{constructor(e=null,i=1,r=1,l,c,h,d,m,p=Cn,x=Cn,_,S){super(null,h,d,m,p,x,l,c,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xh=new rt,SM=new rt,MM=new ce;class Tr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=xh.subVectors(r,i).cross(SM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(xh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||MM.getNormalMatrix(e),l=this.coplanarPoint(xh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Ud,yM=new Be(.5,.5),Eu=new rt;class W_{constructor(e=new Tr,i=new Tr,r=new Tr,l=new Tr,c=new Tr,h=new Tr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Pi,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],x=c[4],_=c[5],S=c[6],E=c[7],R=c[8],C=c[9],M=c[10],v=c[11],z=c[12],L=c[13],O=c[14],F=c[15];if(l[0].setComponents(p-h,E-x,v-R,F-z).normalize(),l[1].setComponents(p+h,E+x,v+R,F+z).normalize(),l[2].setComponents(p+d,E+_,v+C,F+L).normalize(),l[3].setComponents(p-d,E-_,v-C,F-L).normalize(),r)l[4].setComponents(m,S,M,O).normalize(),l[5].setComponents(p-m,E-S,v-M,F-O).normalize();else if(l[4].setComponents(p-m,E-S,v-M,F-O).normalize(),i===Pi)l[5].setComponents(p+m,E+S,v+M,F+O).normalize();else if(i===Lu)l[5].setComponents(m,S,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const i=yM.distanceTo(e.center);return Mr.radius=.7071067811865476+i,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Eu.x=l.normal.x>0?e.max.x:e.min.x,Eu.y=l.normal.y>0?e.max.y:e.min.y,Eu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vo extends zn{constructor(e,i,r=Bi,l,c,h,d=Cn,m=Cn,p,x=ga,_=1){if(x!==ga&&x!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,c,h,d,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class EM extends Vo{constructor(e,i=Bi,r=Dr,l,c,h=Cn,d=Cn,m,p=ga){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,i,r,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class q_ extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yo extends va{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,x=m+1,_=e/d,S=i/m,E=[],R=[],C=[],M=[];for(let v=0;v<x;v++){const z=v*S-h;for(let L=0;L<p;L++){const O=L*_-c;R.push(O,-z,0),C.push(0,0,1),M.push(L/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<d;z++){const L=z+p*v,O=z+p*(v+1),F=z+1+p*(v+1),B=z+1+p*v;E.push(L,O,B),E.push(O,F,B)}this.setIndex(E),this.setAttribute("position",new pa(R,3)),this.setAttribute("normal",new pa(C,3)),this.setAttribute("uv",new pa(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class TM extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bM extends zu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AM extends zu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nd extends V_{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class RM extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function q0(o,e,i,r){const l=CM(r);switch(i){case U_:return o*e;case L_:return o*e/l.components*l.byteLength;case bd:return o*e/l.components*l.byteLength;case ws:return o*e*2/l.components*l.byteLength;case Ad:return o*e*2/l.components*l.byteLength;case N_:return o*e*3/l.components*l.byteLength;case bi:return o*e*4/l.components*l.byteLength;case Rd:return o*e*4/l.components*l.byteLength;case Ru:case Cu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Du:case wu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hh:case Vh:return Math.max(o,16)*Math.max(e,8)/4;case Bh:case Gh:return Math.max(o,8)*Math.max(e,8)/2;case Xh:case kh:case qh:case Yh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Wh:case jh:case Zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case nd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case id:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case rd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case sd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case ld:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case cd:case fd:case hd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case dd:case pd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case md:case gd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function CM(o){switch(o){case di:case R_:return{byteLength:1,components:1};case Bo:case C_:case ma:return{byteLength:2,components:1};case Ed:case Td:return{byteLength:2,components:4};case Bi:case yd:case Oi:return{byteLength:4,components:1};case D_:case w_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);function Y_(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function DM(o){const e=new WeakMap;function i(d,m){const p=d.array,x=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const x=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,x);else{_.sort((E,R)=>E.start-R.start);let S=0;for(let E=1;E<_.length;E++){const R=_[S],C=_[E];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++S,_[S]=C)}_.length=S+1;for(let E=0,R=_.length;E<R;E++){const C=_[E];o.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UM=`#ifdef USE_ALPHAHASH
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
#endif`,NM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zM=`#ifdef USE_AOMAP
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
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
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
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XM=`#ifdef USE_IRIDESCENCE
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
#endif`,kM=`#ifdef USE_BUMPMAP
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$M=`#define PI 3.141592653589793
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
} // validated`,ty=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ey=`vec3 transformedNormal = objectNormal;
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
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ly=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,my=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_y=`#ifdef USE_GRADIENTMAP
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
}`,vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,My=`uniform bool receiveShadow;
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
#endif`,yy=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,by=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ry=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Cy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dy=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,By=`#if defined( USE_POINTS_UV )
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
#endif`,Hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
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
#endif`,qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jy=`#ifdef USE_NORMALMAP
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
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
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
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ME=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TE=`#ifdef USE_TRANSMISSION
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wE=`uniform sampler2D t2D;
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`#include <common>
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
}`,zE=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
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
}`,IE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
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
}`,VE=`uniform vec3 diffuse;
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
}`,XE=`#include <common>
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
}`,kE=`uniform vec3 diffuse;
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
}`,WE=`#define LAMBERT
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
}`,qE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,YE=`#define MATCAP
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
}`,jE=`#define MATCAP
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
}`,ZE=`#define NORMAL
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
}`,KE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QE=`#define PHONG
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
}`,JE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,$E=`#define STANDARD
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
}`,tT=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,eT=`#define TOON
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
}`,nT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,iT=`uniform float size;
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
}`,aT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,sT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,oT=`uniform float rotation;
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
}`,lT=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:wM,alphahash_pars_fragment:UM,alphamap_fragment:NM,alphamap_pars_fragment:LM,alphatest_fragment:OM,alphatest_pars_fragment:PM,aomap_fragment:zM,aomap_pars_fragment:FM,batching_pars_vertex:IM,batching_vertex:BM,begin_vertex:HM,beginnormal_vertex:GM,bsdfs:VM,iridescence_fragment:XM,bumpmap_pars_fragment:kM,clipping_planes_fragment:WM,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:YM,clipping_planes_vertex:jM,color_fragment:ZM,color_pars_fragment:KM,color_pars_vertex:QM,color_vertex:JM,common:$M,cube_uv_reflection_fragment:ty,defaultnormal_vertex:ey,displacementmap_pars_vertex:ny,displacementmap_vertex:iy,emissivemap_fragment:ay,emissivemap_pars_fragment:ry,colorspace_fragment:sy,colorspace_pars_fragment:oy,envmap_fragment:ly,envmap_common_pars_fragment:uy,envmap_pars_fragment:cy,envmap_pars_vertex:fy,envmap_physical_pars_fragment:yy,envmap_vertex:hy,fog_vertex:dy,fog_pars_vertex:py,fog_fragment:my,fog_pars_fragment:gy,gradientmap_pars_fragment:_y,lightmap_pars_fragment:vy,lights_lambert_fragment:xy,lights_lambert_pars_fragment:Sy,lights_pars_begin:My,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ty,lights_phong_fragment:by,lights_phong_pars_fragment:Ay,lights_physical_fragment:Ry,lights_physical_pars_fragment:Cy,lights_fragment_begin:Dy,lights_fragment_maps:wy,lights_fragment_end:Uy,logdepthbuf_fragment:Ny,logdepthbuf_pars_fragment:Ly,logdepthbuf_pars_vertex:Oy,logdepthbuf_vertex:Py,map_fragment:zy,map_pars_fragment:Fy,map_particle_fragment:Iy,map_particle_pars_fragment:By,metalnessmap_fragment:Hy,metalnessmap_pars_fragment:Gy,morphinstance_vertex:Vy,morphcolor_vertex:Xy,morphnormal_vertex:ky,morphtarget_pars_vertex:Wy,morphtarget_vertex:qy,normal_fragment_begin:Yy,normal_fragment_maps:jy,normal_pars_fragment:Zy,normal_pars_vertex:Ky,normal_vertex:Qy,normalmap_pars_fragment:Jy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:tE,clearcoat_pars_fragment:eE,iridescence_pars_fragment:nE,opaque_fragment:iE,packing:aE,premultiplied_alpha_fragment:rE,project_vertex:sE,dithering_fragment:oE,dithering_pars_fragment:lE,roughnessmap_fragment:uE,roughnessmap_pars_fragment:cE,shadowmap_pars_fragment:fE,shadowmap_pars_vertex:hE,shadowmap_vertex:dE,shadowmask_pars_fragment:pE,skinbase_vertex:mE,skinning_pars_vertex:gE,skinning_vertex:_E,skinnormal_vertex:vE,specularmap_fragment:xE,specularmap_pars_fragment:SE,tonemapping_fragment:ME,tonemapping_pars_fragment:yE,transmission_fragment:EE,transmission_pars_fragment:TE,uv_pars_fragment:bE,uv_pars_vertex:AE,uv_vertex:RE,worldpos_vertex:CE,background_vert:DE,background_frag:wE,backgroundCube_vert:UE,backgroundCube_frag:NE,cube_vert:LE,cube_frag:OE,depth_vert:PE,depth_frag:zE,distance_vert:FE,distance_frag:IE,equirect_vert:BE,equirect_frag:HE,linedashed_vert:GE,linedashed_frag:VE,meshbasic_vert:XE,meshbasic_frag:kE,meshlambert_vert:WE,meshlambert_frag:qE,meshmatcap_vert:YE,meshmatcap_frag:jE,meshnormal_vert:ZE,meshnormal_frag:KE,meshphong_vert:QE,meshphong_frag:JE,meshphysical_vert:$E,meshphysical_frag:tT,meshtoon_vert:eT,meshtoon_frag:nT,points_vert:iT,points_frag:aT,shadow_vert:rT,shadow_frag:sT,sprite_vert:oT,sprite_frag:lT},Lt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Li={basic:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Pn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Pn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Pn([Lt.points,Lt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Pn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Pn([Lt.common,Lt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Pn([Lt.sprite,Lt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Pn([Lt.common,Lt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Pn([Lt.lights,Lt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Li.physical={uniforms:Pn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Tu={r:0,b:0,g:0},yr=new _a,uT=new fn;function cT(o,e,i,r,l,c,h){const d=new Ie(0);let m=c===!0?0:1,p,x,_=null,S=0,E=null;function R(L){let O=L.isScene===!0?L.background:null;return O&&O.isTexture&&(O=(L.backgroundBlurriness>0?i:e).get(O)),O}function C(L){let O=!1;const F=R(L);F===null?v(d,m):F&&F.isColor&&(v(F,1),O=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(L,O){const F=R(O);F&&(F.isCubeTexture||F.mapping===Pu)?(x===void 0&&(x=new Hi(new qo(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Ns(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(B,w,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),yr.copy(O.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),x.material.uniforms.envMap.value=F,x.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(uT.makeRotationFromEuler(yr)),x.material.toneMapped=Ee.getTransfer(F.colorSpace)!==Fe,(_!==F||S!==F.version||E!==o.toneMapping)&&(x.material.needsUpdate=!0,_=F,S=F.version,E=o.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Hi(new Yo(2,2),new Ai({name:"BackgroundMaterial",uniforms:Ns(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(F.colorSpace)!==Fe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||S!==F.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,_=F,S=F.version,E=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,O){L.getRGB(Tu,G_(o)),r.buffers.color.setClear(Tu.r,Tu.g,Tu.b,O,h)}function z(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,O=1){d.set(L),m=O,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:C,addToRenderList:M,dispose:z}}function fT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(D,V,it,at,ht){let ct=!1;const P=_(at,it,V);c!==P&&(c=P,p(c.object)),ct=E(D,at,it,ht),ct&&R(D,at,it,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,O(D,V,it,at),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function x(D){return o.deleteVertexArray(D)}function _(D,V,it){const at=it.wireframe===!0;let ht=r[D.id];ht===void 0&&(ht={},r[D.id]=ht);let ct=ht[V.id];ct===void 0&&(ct={},ht[V.id]=ct);let P=ct[at];return P===void 0&&(P=S(m()),ct[at]=P),P}function S(D){const V=[],it=[],at=[];for(let ht=0;ht<i;ht++)V[ht]=0,it[ht]=0,at[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:it,attributeDivisors:at,object:D,attributes:{},index:null}}function E(D,V,it,at){const ht=c.attributes,ct=V.attributes;let P=0;const H=it.getAttributes();for(const nt in H)if(H[nt].location>=0){const xt=ht[nt];let N=ct[nt];if(N===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),xt===void 0||xt.attribute!==N||N&&xt.data!==N.data)return!0;P++}return c.attributesNum!==P||c.index!==at}function R(D,V,it,at){const ht={},ct=V.attributes;let P=0;const H=it.getAttributes();for(const nt in H)if(H[nt].location>=0){let xt=ct[nt];xt===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor));const N={};N.attribute=xt,xt&&xt.data&&(N.data=xt.data),ht[nt]=N,P++}c.attributes=ht,c.attributesNum=P,c.index=at}function C(){const D=c.newAttributes;for(let V=0,it=D.length;V<it;V++)D[V]=0}function M(D){v(D,0)}function v(D,V){const it=c.newAttributes,at=c.enabledAttributes,ht=c.attributeDivisors;it[D]=1,at[D]===0&&(o.enableVertexAttribArray(D),at[D]=1),ht[D]!==V&&(o.vertexAttribDivisor(D,V),ht[D]=V)}function z(){const D=c.newAttributes,V=c.enabledAttributes;for(let it=0,at=V.length;it<at;it++)V[it]!==D[it]&&(o.disableVertexAttribArray(it),V[it]=0)}function L(D,V,it,at,ht,ct,P){P===!0?o.vertexAttribIPointer(D,V,it,ht,ct):o.vertexAttribPointer(D,V,it,at,ht,ct)}function O(D,V,it,at){C();const ht=at.attributes,ct=it.getAttributes(),P=V.defaultAttributeValues;for(const H in ct){const nt=ct[H];if(nt.location>=0){let Mt=ht[H];if(Mt===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Mt=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Mt=D.instanceColor)),Mt!==void 0){const xt=Mt.normalized,N=Mt.itemSize,et=e.get(Mt);if(et===void 0)continue;const gt=et.buffer,bt=et.type,It=et.bytesPerElement,tt=bt===o.INT||bt===o.UNSIGNED_INT||Mt.gpuType===yd;if(Mt.isInterleavedBufferAttribute){const ut=Mt.data,Dt=ut.stride,Vt=Mt.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<nt.locationSize;Bt++)v(nt.location+Bt,ut.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<nt.locationSize;Bt++)M(nt.location+Bt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Bt=0;Bt<nt.locationSize;Bt++)L(nt.location+Bt,N/nt.locationSize,bt,xt,Dt*It,(Vt+N/nt.locationSize*Bt)*It,tt)}else{if(Mt.isInstancedBufferAttribute){for(let ut=0;ut<nt.locationSize;ut++)v(nt.location+ut,Mt.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ut=0;ut<nt.locationSize;ut++)M(nt.location+ut);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ut=0;ut<nt.locationSize;ut++)L(nt.location+ut,N/nt.locationSize,bt,xt,N*It,N/nt.locationSize*ut*It,tt)}}else if(P!==void 0){const xt=P[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(nt.location,xt);break;case 3:o.vertexAttrib3fv(nt.location,xt);break;case 4:o.vertexAttrib4fv(nt.location,xt);break;default:o.vertexAttrib1fv(nt.location,xt)}}}}z()}function F(){Z();for(const D in r){const V=r[D];for(const it in V){const at=V[it];for(const ht in at)x(at[ht].object),delete at[ht];delete V[it]}delete r[D]}}function B(D){if(r[D.id]===void 0)return;const V=r[D.id];for(const it in V){const at=V[it];for(const ht in at)x(at[ht].object),delete at[ht];delete V[it]}delete r[D.id]}function w(D){for(const V in r){const it=r[V];if(it[D.id]===void 0)continue;const at=it[D.id];for(const ht in at)x(at[ht].object),delete at[ht];delete it[D.id]}}function Z(){A(),h=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:A,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:w,initAttributes:C,enableAttribute:M,disableUnusedAttributes:z}}function hT(o,e,i){let r;function l(p){r=p}function c(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function h(p,x,_){_!==0&&(o.drawArraysInstanced(r,p,x,_),i.update(x,r,_))}function d(p,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let E=0;for(let R=0;R<_;R++)E+=x[R];i.update(E,r,1)}function m(p,x,_,S){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<p.length;R++)h(p[R],x[R],S[R]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,_);let R=0;for(let C=0;C<_;C++)R+=x[C]*S[C];i.update(R,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function dT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(w){return!(w!==bi&&r.convert(w)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(w){const Z=w===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==di&&r.convert(w)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Oi&&!Z)}function m(w){if(w==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(re("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:O,maxSamples:F,samples:B}}function pT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Tr,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||r!==0||l;return l=S,r=_.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=x(_,S,0)},this.setState=function(_,S,E){const R=_.clippingPlanes,C=_.clipIntersection,M=_.clipShadows,v=o.get(_);if(!l||R===null||R.length===0||c&&!M)c?x(null):p();else{const z=c?0:r,L=z*4;let O=v.clippingState||null;m.value=O,O=x(R,S,L,E);for(let F=0;F!==L;++F)O[F]=i[F];v.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,S,E,R){const C=_!==null?_.length:0;let M=null;if(C!==0){if(M=m.value,R!==!0||M===null){const v=E+C*4,z=S.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<v)&&(M=new Float32Array(v));for(let L=0,O=E;L!==C;++L,O+=4)h.copy(_[L]).applyMatrix4(z,d),h.normal.toArray(M,O),M[O+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function mT(o){let e=new WeakMap;function i(h,d){return d===Ph?h.mapping=Dr:d===zh&&(h.mapping=Ds),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ph||d===zh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new k_(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ja=4,Y0=[.125,.215,.35,.446,.526,.582],Ar=20,gT=256,Po=new Nd,j0=new Ie;let Sh=null,Mh=0,yh=0,Eh=!1;const _T=new rt;class Z0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=_T}=c;Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,Mh,yh),this._renderer.xr.enabled=Eh,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Dr||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ma,format:bi,colorSpace:Us,depthBuffer:!1},l=K0(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K0(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vT(c)),this._blurMaterial=ST(c,e,i),this._ggxMaterial=xT(c,e,i)}return l}_compileMaterial(e){const i=new Hi(new va,e);this._renderer.compile(i,Po)}_sceneToCubeUV(e,i,r,l,c){const m=new Ei(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(j0),_.toneMapping=zi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hi(new qo,new I_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let v=!1;const z=e.background;z?z.isColor&&(M.color.copy(z),e.background=null,v=!0):(M.color.copy(j0),v=!0);for(let L=0;L<6;L++){const O=L%3;O===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[L],c.y,c.z)):O===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[L]));const F=this._cubeSize;bs(l,O*F,L>2?F:0,F,F),_.setRenderTarget(l),v&&_.render(C,m),_.render(e,m)}_.toneMapping=E,_.autoClear=S,e.background=z}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Dr||e.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;bs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Po)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),S=0+p*1.25,E=_*S,{_lodMax:R}=this,C=this._sizeLods[r],M=3*C*(r>R-Ja?r-R+Ja:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=R-i,bs(c,M,v,3*C,2*C),l.setRenderTarget(c),l.render(d,Po),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=R-r,bs(e,M,v,3*C,2*C),l.setRenderTarget(e),l.render(d,Po)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Ar-1),C=c/R,M=isFinite(c)?1+Math.floor(x*C):Ar;M>Ar&&re(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ar}`);const v=[];let z=0;for(let w=0;w<Ar;++w){const Z=w/C,A=Math.exp(-Z*Z/2);v.push(A),w===0?z+=A:w<M&&(z+=2*A)}for(let w=0;w<v.length;w++)v[w]=v[w]/z;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=R,S.mipInt.value=L-r;const O=this._sizeLods[l],F=3*O*(l>L-Ja?l-L+Ja:0),B=4*(this._cubeSize-O);bs(i,F,B,3*O,2*O),m.setRenderTarget(i),m.render(_,Po)}}function vT(o){const e=[],i=[],r=[];let l=o;const c=o-Ja+1+Y0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-Ja?m=Y0[h-o+Ja-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),x=-p,_=1+p,S=[x,x,_,x,_,_,x,x,_,_,x,_],E=6,R=6,C=3,M=2,v=1,z=new Float32Array(C*R*E),L=new Float32Array(M*R*E),O=new Float32Array(v*R*E);for(let B=0;B<E;B++){const w=B%3*2/3-1,Z=B>2?0:-1,A=[w,Z,0,w+2/3,Z,0,w+2/3,Z+1,0,w,Z,0,w+2/3,Z+1,0,w,Z+1,0];z.set(A,C*R*B),L.set(S,M*R*B);const D=[B,B,B,B,B,B];O.set(D,v*R*B)}const F=new va;F.setAttribute("position",new Ii(z,C)),F.setAttribute("uv",new Ii(L,M)),F.setAttribute("faceIndex",new Ii(O,v)),r.push(new Hi(F,null)),l>Ja&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function K0(o,e,i){const r=new Fi(o,e,i);return r.texture.mapping=Pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bs(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function xT(o,e,i){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function ST(o,e,i){const r=new Float32Array(Ar),l=new rt(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Q0(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function J0(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Fu(){return`

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
	`}function MT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ph||m===zh,x=m===Dr||m===Ds;if(p||x){let _=e.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Z0(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const E=d.image;return p&&E&&E.height>0||x&&E&&l(E)?(i===null&&(i=new Z0(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function yT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Go("WebGLRenderer: "+r+" extension not supported."),l}}}function ET(o,e,i,r){const l={},c=new WeakMap;function h(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);S.removeEventListener("dispose",h),delete l[S.id];const E=c.get(S);E&&(e.remove(E),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,R=_.attributes.position;let C=0;if(E!==null){const z=E.array;C=E.version;for(let L=0,O=z.length;L<O;L+=3){const F=z[L+0],B=z[L+1],w=z[L+2];S.push(F,B,B,w,w,F)}}else if(R!==void 0){const z=R.array;C=R.version;for(let L=0,O=z.length/3-1;L<O;L+=3){const F=L+0,B=L+1,w=L+2;S.push(F,B,B,w,w,F)}}else return;const M=new(O_(S)?H_:B_)(S,1);M.version=C;const v=c.get(_);v&&e.remove(v),c.set(_,M)}function x(_){const S=c.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:x}}function TT(o,e,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,E){o.drawElements(r,E,c,S*h),i.update(E,r,1)}function p(S,E,R){R!==0&&(o.drawElementsInstanced(r,E,c,S*h,R),i.update(E,r,R))}function x(S,E,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,c,S,0,R);let M=0;for(let v=0;v<R;v++)M+=E[v];i.update(M,r,1)}function _(S,E,R,C){if(R===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<S.length;v++)p(S[v]/h,E[v],C[v]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,c,S,0,C,0,R);let v=0;for(let z=0;z<R;z++)v+=E[z]*C[z];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function bT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Ae("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function AT(o,e,i){const r=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let D=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var E=D;S!==void 0&&S.texture.dispose();const R=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let O=0;R===!0&&(O=1),C===!0&&(O=2),M===!0&&(O=3);let F=d.attributes.position.count*O,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const w=new Float32Array(F*B*4*_),Z=new P_(w,F,B,_);Z.type=Oi,Z.needsUpdate=!0;const A=O*4;for(let V=0;V<_;V++){const it=v[V],at=z[V],ht=L[V],ct=F*B*4*V;for(let P=0;P<it.count;P++){const H=P*A;R===!0&&(l.fromBufferAttribute(it,P),w[ct+H+0]=l.x,w[ct+H+1]=l.y,w[ct+H+2]=l.z,w[ct+H+3]=0),C===!0&&(l.fromBufferAttribute(at,P),w[ct+H+4]=l.x,w[ct+H+5]=l.y,w[ct+H+6]=l.z,w[ct+H+7]=0),M===!0&&(l.fromBufferAttribute(ht,P),w[ct+H+8]=l.x,w[ct+H+9]=l.y,w[ct+H+10]=l.z,w[ct+H+11]=ht.itemSize===4?l.w:1)}}S={count:_,texture:Z,size:new Be(F,B)},r.set(d,S),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let M=0;M<p.length;M++)R+=p[M];const C=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function RT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,_=e.get(m,x);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const CT={[x_]:"LINEAR_TONE_MAPPING",[S_]:"REINHARD_TONE_MAPPING",[M_]:"CINEON_TONE_MAPPING",[y_]:"ACES_FILMIC_TONE_MAPPING",[T_]:"AGX_TONE_MAPPING",[b_]:"NEUTRAL_TONE_MAPPING",[E_]:"CUSTOM_TONE_MAPPING"};function DT(o,e,i,r,l){const c=new Fi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Fi(e,i,{type:ma,depthBuffer:!1,stencilBuffer:!1}),d=new va;d.setAttribute("position",new pa([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new pa([0,2,0,0,2,0],2));const m=new TM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Hi(d,m),x=new Nd(-1,1,1,-1,0,1);let _=null,S=null,E=!1,R,C=null,M=[],v=!1;this.setSize=function(z,L){c.setSize(z,L),h.setSize(z,L);for(let O=0;O<M.length;O++){const F=M[O];F.setSize&&F.setSize(z,L)}},this.setEffects=function(z){M=z,v=M.length>0&&M[0].isRenderPass===!0;const L=c.width,O=c.height;for(let F=0;F<M.length;F++){const B=M[F];B.setSize&&B.setSize(L,O)}},this.begin=function(z,L){if(E||z.toneMapping===zi&&M.length===0)return!1;if(C=L,L!==null){const O=L.width,F=L.height;(c.width!==O||c.height!==F)&&this.setSize(O,F)}return v===!1&&z.setRenderTarget(c),R=z.toneMapping,z.toneMapping=zi,!0},this.hasRenderPass=function(){return v},this.end=function(z,L){z.toneMapping=R,E=!0;let O=c,F=h;for(let B=0;B<M.length;B++){const w=M[B];if(w.enabled!==!1&&(w.render(z,F,O,L),w.needsSwap!==!1)){const Z=O;O=F,F=Z}}if(_!==z.outputColorSpace||S!==z.toneMapping){_=z.outputColorSpace,S=z.toneMapping,m.defines={},Ee.getTransfer(_)===Fe&&(m.defines.SRGB_TRANSFER="");const B=CT[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,z.setRenderTarget(C),z.render(p,x),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const j_=new zn,vd=new Vo(1,1),Z_=new P_,K_=new $S,Q_=new X_,$0=[],t_=[],e_=new Float32Array(16),n_=new Float32Array(9),i_=new Float32Array(4);function Os(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=$0[l];if(c===void 0&&(c=new Float32Array(l),$0[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Iu(o,e){let i=t_[e];i===void 0&&(i=new Int32Array(e),t_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function wT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function OT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;i_.set(r),o.uniformMatrix2fv(this.addr,!1,i_),mn(i,r)}}function PT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;n_.set(r),o.uniformMatrix3fv(this.addr,!1,n_),mn(i,r)}}function zT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;e_.set(r),o.uniformMatrix4fv(this.addr,!1,e_),mn(i,r)}}function FT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function GT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function WT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(vd.compareFunction=i.isReversedDepthBuffer()?Dd:Cd,c=vd):c=j_,i.setTexture2D(e||c,l)}function qT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||K_,l)}function YT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Q_,l)}function jT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Z_,l)}function ZT(o){switch(o){case 5126:return wT;case 35664:return UT;case 35665:return NT;case 35666:return LT;case 35674:return OT;case 35675:return PT;case 35676:return zT;case 5124:case 35670:return FT;case 35667:case 35671:return IT;case 35668:case 35672:return BT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return XT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return jT}}function KT(o,e){o.uniform1fv(this.addr,e)}function QT(o,e){const i=Os(e,this.size,2);o.uniform2fv(this.addr,i)}function JT(o,e){const i=Os(e,this.size,3);o.uniform3fv(this.addr,i)}function $T(o,e){const i=Os(e,this.size,4);o.uniform4fv(this.addr,i)}function tb(o,e){const i=Os(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function eb(o,e){const i=Os(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function nb(o,e){const i=Os(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ib(o,e){o.uniform1iv(this.addr,e)}function ab(o,e){o.uniform2iv(this.addr,e)}function rb(o,e){o.uniform3iv(this.addr,e)}function sb(o,e){o.uniform4iv(this.addr,e)}function ob(o,e){o.uniform1uiv(this.addr,e)}function lb(o,e){o.uniform2uiv(this.addr,e)}function ub(o,e){o.uniform3uiv(this.addr,e)}function cb(o,e){o.uniform4uiv(this.addr,e)}function fb(o,e,i){const r=this.cache,l=e.length,c=Iu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=vd:h=j_;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function hb(o,e,i){const r=this.cache,l=e.length,c=Iu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||K_,c[h])}function db(o,e,i){const r=this.cache,l=e.length,c=Iu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Q_,c[h])}function pb(o,e,i){const r=this.cache,l=e.length,c=Iu(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Z_,c[h])}function mb(o){switch(o){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return tb;case 35675:return eb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return ab;case 35668:case 35672:return rb;case 35669:case 35673:return sb;case 5125:return ob;case 36294:return lb;case 36295:return ub;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return pb}}class gb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ZT(i.type)}}class _b{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mb(i.type)}}class vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Th=/(\w+)(\])?(\[|\.)?/g;function a_(o,e){o.seq.push(e),o.map[e.id]=e}function xb(o,e,i){const r=o.name,l=r.length;for(Th.lastIndex=0;;){const c=Th.exec(r),h=Th.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){a_(i,p===void 0?new gb(d,o,e):new _b(d,o,e));break}else{let _=i.map[d];_===void 0&&(_=new vb(d),a_(i,_)),i=_}}}class Uu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);xb(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function r_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Sb=37297;let Mb=0;function yb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const s_=new ce;function Eb(o){Ee._getMatrix(s_,Ee.workingColorSpace,o);const e=`mat3( ${s_.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case Nu:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function o_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+yb(o.getShaderSource(e),d)}else return c}function Tb(o,e){const i=Eb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const bb={[x_]:"Linear",[S_]:"Reinhard",[M_]:"Cineon",[y_]:"ACESFilmic",[T_]:"AgX",[b_]:"Neutral",[E_]:"Custom"};function Ab(o,e){const i=bb[e];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bu=new rt;function Rb(){Ee.getLuminanceCoefficients(bu);const o=bu.x.toFixed(4),e=bu.y.toFixed(4),i=bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function Db(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function wb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Io(o){return o!==""}function l_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(o){return o.replace(Ub,Lb)}const Nb=new Map;function Lb(o,e){let i=fe[e];if(i===void 0){const r=Nb.get(e);if(r!==void 0)i=fe[r],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return xd(i)}const Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(o){return o.replace(Ob,Pb)}function Pb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function f_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const zb={[Au]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function Fb(o){return zb[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ib={[Dr]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function Bb(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Ib[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Hb={[Ds]:"ENVMAP_MODE_REFRACTION"};function Gb(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Hb[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vb={[v_]:"ENVMAP_BLENDING_MULTIPLY",[LS]:"ENVMAP_BLENDING_MIX",[OS]:"ENVMAP_BLENDING_ADD"};function Xb(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Vb[o.combine]||"ENVMAP_BLENDING_NONE"}function kb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Wb(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Fb(i),p=Bb(i),x=Gb(i),_=Xb(i),S=kb(i),E=Cb(i),R=Db(c),C=l.createProgram();let M,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Io).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Io).join(`
`),v.length>0&&(v+=`
`)):(M=[f_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),v=[f_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==zi?"#define TONE_MAPPING":"",i.toneMapping!==zi?fe.tonemapping_pars_fragment:"",i.toneMapping!==zi?Ab("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Tb("linearToOutputTexel",i.outputColorSpace),Rb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),h=xd(h),h=l_(h,i),h=u_(h,i),d=xd(d),d=l_(d,i),d=u_(d,i),h=c_(h),d=c_(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===R0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=z+M+h,O=z+v+d,F=r_(l,l.VERTEX_SHADER,L),B=r_(l,l.FRAGMENT_SHADER,O);l.attachShader(C,F),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function w(V){if(o.debug.checkShaderErrors){const it=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(F)||"",ht=l.getShaderInfoLog(B)||"",ct=it.trim(),P=at.trim(),H=ht.trim();let nt=!0,Mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(nt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,B);else{const xt=o_(l,F,"vertex"),N=o_(l,B,"fragment");Ae("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ct+`
`+xt+`
`+N)}else ct!==""?re("WebGLProgram: Program Info Log:",ct):(P===""||H==="")&&(Mt=!1);Mt&&(V.diagnostics={runnable:nt,programLog:ct,vertexShader:{log:P,prefix:M},fragmentShader:{log:H,prefix:v}})}l.deleteShader(F),l.deleteShader(B),Z=new Uu(l,C),A=wb(l,C)}let Z;this.getUniforms=function(){return Z===void 0&&w(this),Z};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,Sb)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Mb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=B,this}let qb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new jb(e),i.set(e,r)),r}}class jb{constructor(e){this.id=qb++,this.code=e,this.usedTimes=0}}function Zb(o,e,i,r,l,c,h){const d=new z_,m=new Yb,p=new Set,x=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,D,V,it,at){const ht=it.fog,ct=at.geometry,P=A.isMeshStandardMaterial?it.environment:null,H=(A.isMeshStandardMaterial?i:e).get(A.envMap||P),nt=H&&H.mapping===Pu?H.image.height:null,Mt=R[A.type];A.precision!==null&&(E=l.getMaxPrecision(A.precision),E!==A.precision&&re("WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const xt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,N=xt!==void 0?xt.length:0;let et=0;ct.morphAttributes.position!==void 0&&(et=1),ct.morphAttributes.normal!==void 0&&(et=2),ct.morphAttributes.color!==void 0&&(et=3);let gt,bt,It,tt;if(Mt){const ye=Li[Mt];gt=ye.vertexShader,bt=ye.fragmentShader}else gt=A.vertexShader,bt=A.fragmentShader,m.update(A),It=m.getVertexShaderID(A),tt=m.getFragmentShaderID(A);const ut=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),Vt=at.isInstancedMesh===!0,Bt=at.isBatchedMesh===!0,he=!!A.map,Qe=!!A.matcap,ge=!!H,de=!!A.aoMap,Re=!!A.lightMap,se=!!A.bumpMap,Je=!!A.normalMap,G=!!A.displacementMap,Ye=!!A.emissiveMap,Me=!!A.metalnessMap,Ue=!!A.roughnessMap,qt=A.anisotropy>0,U=A.clearcoat>0,y=A.dispersion>0,W=A.iridescence>0,dt=A.sheen>0,vt=A.transmission>0,lt=qt&&!!A.anisotropyMap,jt=U&&!!A.clearcoatMap,Rt=U&&!!A.clearcoatNormalMap,Xt=U&&!!A.clearcoatRoughnessMap,te=W&&!!A.iridescenceMap,yt=W&&!!A.iridescenceThicknessMap,Et=dt&&!!A.sheenColorMap,zt=dt&&!!A.sheenRoughnessMap,Ot=!!A.specularMap,Ct=!!A.specularColorMap,le=!!A.specularIntensityMap,k=vt&&!!A.transmissionMap,Ut=vt&&!!A.thicknessMap,Tt=!!A.gradientMap,Pt=!!A.alphaMap,St=A.alphaTest>0,_t=!!A.alphaHash,At=!!A.extensions;let ee=zi;A.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ee=o.toneMapping);const Le={shaderID:Mt,shaderType:A.type,shaderName:A.name,vertexShader:gt,fragmentShader:bt,defines:A.defines,customVertexShaderID:It,customFragmentShaderID:tt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:Bt,batchingColor:Bt&&at._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&at.instanceColor!==null,instancingMorph:Vt&&at.morphTexture!==null,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Us,alphaToCoverage:!!A.alphaToCoverage,map:he,matcap:Qe,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:nt,aoMap:de,lightMap:Re,bumpMap:se,normalMap:Je,displacementMap:G,emissiveMap:Ye,normalMapObjectSpace:Je&&A.normalMapType===IS,normalMapTangentSpace:Je&&A.normalMapType===FS,metalnessMap:Me,roughnessMap:Ue,anisotropy:qt,anisotropyMap:lt,clearcoat:U,clearcoatMap:jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:y,iridescence:W,iridescenceMap:te,iridescenceThicknessMap:yt,sheen:dt,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:le,transmission:vt,transmissionMap:k,thicknessMap:Ut,gradientMap:Tt,opaque:A.transparent===!1&&A.blending===As&&A.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:_t,combine:A.combine,mapUv:he&&C(A.map.channel),aoMapUv:de&&C(A.aoMap.channel),lightMapUv:Re&&C(A.lightMap.channel),bumpMapUv:se&&C(A.bumpMap.channel),normalMapUv:Je&&C(A.normalMap.channel),displacementMapUv:G&&C(A.displacementMap.channel),emissiveMapUv:Ye&&C(A.emissiveMap.channel),metalnessMapUv:Me&&C(A.metalnessMap.channel),roughnessMapUv:Ue&&C(A.roughnessMap.channel),anisotropyMapUv:lt&&C(A.anisotropyMap.channel),clearcoatMapUv:jt&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:zt&&C(A.sheenRoughnessMap.channel),specularMapUv:Ot&&C(A.specularMap.channel),specularColorMapUv:Ct&&C(A.specularColorMap.channel),specularIntensityMapUv:le&&C(A.specularIntensityMap.channel),transmissionMapUv:k&&C(A.transmissionMap.channel),thicknessMapUv:Ut&&C(A.thicknessMap.channel),alphaMapUv:Pt&&C(A.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Je||qt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ct.attributes.uv&&(he||Pt),fog:!!ht,useFog:A.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Dt,skinning:at.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:et,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ee,decodeVideoTexture:he&&A.map.isVideoTexture===!0&&Ee.getTransfer(A.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ye&&A.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(A.emissiveMap.colorSpace)===Fe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ca,flipSided:A.side===kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:At&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&A.extensions.multiDraw===!0||Bt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Le.vertexUv1s=p.has(1),Le.vertexUv2s=p.has(2),Le.vertexUv3s=p.has(3),p.clear(),Le}function v(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)D.push(V),D.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(z(D,A),L(D,A),D.push(o.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function z(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function L(A,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),A.push(d.mask)}function O(A){const D=R[A.type];let V;if(D){const it=Li[D];V=dM.clone(it.uniforms)}else V=A.uniforms;return V}function F(A,D){let V=_.get(D);return V!==void 0?++V.usedTimes:(V=new Wb(o,D,A,c),x.push(V),_.set(D,V)),V}function B(A){if(--A.usedTimes===0){const D=x.indexOf(A);x[D]=x[x.length-1],x.pop(),_.delete(A.cacheKey),A.destroy()}}function w(A){m.remove(A)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:O,acquireProgram:F,releaseProgram:B,releaseShaderCache:w,programs:x,dispose:Z}}function Kb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Qb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function h_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function d_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(_,S,E,R,C,M){let v=o[e];return v===void 0?(v={id:_.id,object:_,geometry:S,material:E,groupOrder:R,renderOrder:_.renderOrder,z:C,group:M},o[e]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=E,v.groupOrder=R,v.renderOrder=_.renderOrder,v.z=C,v.group=M),e++,v}function d(_,S,E,R,C,M){const v=h(_,S,E,R,C,M);E.transmission>0?r.push(v):E.transparent===!0?l.push(v):i.push(v)}function m(_,S,E,R,C,M){const v=h(_,S,E,R,C,M);E.transmission>0?r.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||Qb),r.length>1&&r.sort(S||h_),l.length>1&&l.sort(S||h_)}function x(){for(let _=e,S=o.length;_<S;_++){const E=o[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function Jb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new d_,o.set(r,[h])):l>=c.length?(h=new d_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function $b(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Ie};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function tA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let eA=0;function nA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function iA(o){const e=new $b,i=tA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,c=new fn,h=new fn;function d(p){let x=0,_=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let E=0,R=0,C=0,M=0,v=0,z=0,L=0,O=0,F=0,B=0,w=0;p.sort(nA);for(let A=0,D=p.length;A<D;A++){const V=p[A],it=V.color,at=V.intensity,ht=V.distance;let ct=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ws?ct=V.shadow.map.texture:ct=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)x+=it.r*at,_+=it.g*at,S+=it.b*at;else if(V.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(V.sh.coefficients[P],at);w++}else if(V.isDirectionalLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,nt=i.get(V);nt.shadowIntensity=H.intensity,nt.shadowBias=H.bias,nt.shadowNormalBias=H.normalBias,nt.shadowRadius=H.radius,nt.shadowMapSize=H.mapSize,r.directionalShadow[E]=nt,r.directionalShadowMap[E]=ct,r.directionalShadowMatrix[E]=V.shadow.matrix,z++}r.directional[E]=P,E++}else if(V.isSpotLight){const P=e.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(it).multiplyScalar(at),P.distance=ht,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,r.spot[C]=P;const H=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,H.updateMatrices(V),V.castShadow&&B++),r.spotLightMatrix[C]=H.matrix,V.castShadow){const nt=i.get(V);nt.shadowIntensity=H.intensity,nt.shadowBias=H.bias,nt.shadowNormalBias=H.normalBias,nt.shadowRadius=H.radius,nt.shadowMapSize=H.mapSize,r.spotShadow[C]=nt,r.spotShadowMap[C]=ct,O++}C++}else if(V.isRectAreaLight){const P=e.get(V);P.color.copy(it).multiplyScalar(at),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=P,M++}else if(V.isPointLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const H=V.shadow,nt=i.get(V);nt.shadowIntensity=H.intensity,nt.shadowBias=H.bias,nt.shadowNormalBias=H.normalBias,nt.shadowRadius=H.radius,nt.shadowMapSize=H.mapSize,nt.shadowCameraNear=H.camera.near,nt.shadowCameraFar=H.camera.far,r.pointShadow[R]=nt,r.pointShadowMap[R]=ct,r.pointShadowMatrix[R]=V.shadow.matrix,L++}r.point[R]=P,R++}else if(V.isHemisphereLight){const P=e.get(V);P.skyColor.copy(V.color).multiplyScalar(at),P.groundColor.copy(V.groundColor).multiplyScalar(at),r.hemi[v]=P,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=S;const Z=r.hash;(Z.directionalLength!==E||Z.pointLength!==R||Z.spotLength!==C||Z.rectAreaLength!==M||Z.hemiLength!==v||Z.numDirectionalShadows!==z||Z.numPointShadows!==L||Z.numSpotShadows!==O||Z.numSpotMaps!==F||Z.numLightProbes!==w)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=M,r.point.length=R,r.hemi.length=v,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=O+F-B,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=w,Z.directionalLength=E,Z.pointLength=R,Z.spotLength=C,Z.rectAreaLength=M,Z.hemiLength=v,Z.numDirectionalShadows=z,Z.numPointShadows=L,Z.numSpotShadows=O,Z.numSpotMaps=F,Z.numLightProbes=w,r.version=eA++)}function m(p,x){let _=0,S=0,E=0,R=0,C=0;const M=x.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const L=p[v];if(L.isDirectionalLight){const O=r.directional[_];O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),_++}else if(L.isSpotLight){const O=r.spot[E];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),E++}else if(L.isRectAreaLight){const O=r.rectArea[R];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),R++}else if(L.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(M),S++}else if(L.isHemisphereLight){const O=r.hemi[C];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function p_(o){const e=new iA(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function h(x){r.push(x)}function d(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function aA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new p_(o),e.set(l,[d])):c>=h.length?(d=new p_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oA=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],lA=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],m_=new fn,zo=new rt,bh=new rt;function uA(o,e,i){let r=new W_;const l=new Be,c=new Be,h=new an,d=new bM,m=new AM,p={},x=i.maxTextureSize,_={[$a]:kn,[kn]:$a,[ca]:ca},S=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:rA,fragmentShader:sA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const R=new va;R.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Hi(R,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Au;let v=this.type;this.render=function(B,w,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===pS&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Au);const A=o.getRenderTarget(),D=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),it=o.state;it.setBlending(ha),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const at=v!==this.type;at&&w.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(ct=>ct.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,ct=B.length;ht<ct;ht++){const P=B[ht],H=P.shadow;if(H===void 0){re("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const nt=H.getFrameExtents();if(l.multiply(nt),c.copy(H.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/nt.x),l.x=c.x*nt.x,H.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/nt.y),l.y=c.y*nt.y,H.mapSize.y=c.y)),H.map===null||at===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Fo){if(P.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Fi(l.x,l.y,{format:ws,type:ma,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new Vo(l.x,l.y,Oi),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=ga,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else{P.isPointLight?(H.map=new k_(l.x),H.map.depthTexture=new EM(l.x,Bi)):(H.map=new Fi(l.x,l.y),H.map.depthTexture=new Vo(l.x,l.y,Bi)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=ga;const xt=o.state.buffers.depth.getReversed();this.type===Au?(H.map.depthTexture.compareFunction=xt?Dd:Cd,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn)}H.camera.updateProjectionMatrix()}const Mt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<Mt;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const N=H.getViewport(xt);h.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),it.viewport(h)}if(P.isPointLight){const N=H.camera,et=H.matrix,gt=P.distance||N.far;gt!==N.far&&(N.far=gt,N.updateProjectionMatrix()),zo.setFromMatrixPosition(P.matrixWorld),N.position.copy(zo),bh.copy(N.position),bh.add(oA[xt]),N.up.copy(lA[xt]),N.lookAt(bh),N.updateMatrixWorld(),et.makeTranslation(-zo.x,-zo.y,-zo.z),m_.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(m_,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(P);r=H.getFrustum(),O(w,Z,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===Fo&&z(H,Z),H.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(A,D,V)};function z(B,w){const Z=e.update(C);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Fi(l.x,l.y,{format:ws,type:ma})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(w,null,Z,S,C,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(w,null,Z,E,C,null)}function L(B,w,Z,A){let D=null;const V=Z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)D=V;else if(D=Z.isPointLight===!0?m:d,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const it=D.uuid,at=w.uuid;let ht=p[it];ht===void 0&&(ht={},p[it]=ht);let ct=ht[at];ct===void 0&&(ct=D.clone(),ht[at]=ct,w.addEventListener("dispose",F)),D=ct}if(D.visible=w.visible,D.wireframe=w.wireframe,A===Fo?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:_[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,Z.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const it=o.properties.get(D);it.light=Z}return D}function O(B,w,Z,A,D){if(B.visible===!1)return;if(B.layers.test(w.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===Fo)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,B.matrixWorld);const at=e.update(B),ht=B.material;if(Array.isArray(ht)){const ct=at.groups;for(let P=0,H=ct.length;P<H;P++){const nt=ct[P],Mt=ht[nt.materialIndex];if(Mt&&Mt.visible){const xt=L(B,Mt,A,D);B.onBeforeShadow(o,B,w,Z,at,xt,nt),o.renderBufferDirect(Z,null,at,xt,B,nt),B.onAfterShadow(o,B,w,Z,at,xt,nt)}}}else if(ht.visible){const ct=L(B,ht,A,D);B.onBeforeShadow(o,B,w,Z,at,ct,null),o.renderBufferDirect(Z,null,at,ct,B,null),B.onAfterShadow(o,B,w,Z,at,ct,null)}}const it=B.children;for(let at=0,ht=it.length;at<ht;at++)O(it[at],w,Z,A,D)}function F(B){B.target.removeEventListener("dispose",F);for(const Z in p){const A=p[Z],D=B.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}const cA={[Ch]:Dh,[wh]:Lh,[Uh]:Oh,[Cs]:Nh,[Dh]:Ch,[Lh]:wh,[Oh]:Uh,[Nh]:Cs};function fA(o,e){function i(){let k=!1;const Ut=new an;let Tt=null;const Pt=new an(0,0,0,0);return{setMask:function(St){Tt!==St&&!k&&(o.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){k=St},setClear:function(St,_t,At,ee,Le){Le===!0&&(St*=ee,_t*=ee,At*=ee),Ut.set(St,_t,At,ee),Pt.equals(Ut)===!1&&(o.clearColor(St,_t,At,ee),Pt.copy(Ut))},reset:function(){k=!1,Tt=null,Pt.set(-1,0,0,0)}}}function r(){let k=!1,Ut=!1,Tt=null,Pt=null,St=null;return{setReversed:function(_t){if(Ut!==_t){const At=e.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ee=St;St=null,this.setClear(ee)}},getReversed:function(){return Ut},setTest:function(_t){_t?ut(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!k&&(o.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Ut&&(_t=cA[_t]),Pt!==_t){switch(_t){case Ch:o.depthFunc(o.NEVER);break;case Dh:o.depthFunc(o.ALWAYS);break;case wh:o.depthFunc(o.LESS);break;case Cs:o.depthFunc(o.LEQUAL);break;case Uh:o.depthFunc(o.EQUAL);break;case Nh:o.depthFunc(o.GEQUAL);break;case Lh:o.depthFunc(o.GREATER);break;case Oh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){St!==_t&&(Ut&&(_t=1-_t),o.clearDepth(_t),St=_t)},reset:function(){k=!1,Tt=null,Pt=null,St=null,Ut=!1}}}function l(){let k=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ee=null,Le=null;return{setTest:function(ye){k||(ye?ut(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(ye){Ut!==ye&&!k&&(o.stencilMask(ye),Ut=ye)},setFunc:function(ye,Dn,pi){(Tt!==ye||Pt!==Dn||St!==pi)&&(o.stencilFunc(ye,Dn,pi),Tt=ye,Pt=Dn,St=pi)},setOp:function(ye,Dn,pi){(_t!==ye||At!==Dn||ee!==pi)&&(o.stencilOp(ye,Dn,pi),_t=ye,At=Dn,ee=pi)},setLocked:function(ye){k=ye},setClear:function(ye){Le!==ye&&(o.clearStencil(ye),Le=ye)},reset:function(){k=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ee=null,Le=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let x={},_={},S=new WeakMap,E=[],R=null,C=!1,M=null,v=null,z=null,L=null,O=null,F=null,B=null,w=new Ie(0,0,0),Z=0,A=!1,D=null,V=null,it=null,at=null,ht=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const nt=o.getParameter(o.VERSION);nt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(nt)[1]),P=H>=1):nt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),P=H>=2);let Mt=null,xt={};const N=o.getParameter(o.SCISSOR_BOX),et=o.getParameter(o.VIEWPORT),gt=new an().fromArray(N),bt=new an().fromArray(et);function It(k,Ut,Tt,Pt){const St=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let At=0;At<Tt;At++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,St):o.texImage2D(Ut+At,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,St);return _t}const tt={};tt[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(o.DEPTH_TEST),h.setFunc(Cs),se(!1),Je(M0),ut(o.CULL_FACE),de(ha);function ut(k){x[k]!==!0&&(o.enable(k),x[k]=!0)}function Dt(k){x[k]!==!1&&(o.disable(k),x[k]=!1)}function Vt(k,Ut){return _[k]!==Ut?(o.bindFramebuffer(k,Ut),_[k]=Ut,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ut),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Bt(k,Ut){let Tt=E,Pt=!1;if(k){Tt=S.get(Ut),Tt===void 0&&(Tt=[],S.set(Ut,Tt));const St=k.textures;if(Tt.length!==St.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)Tt[_t]=o.COLOR_ATTACHMENT0+_t;Tt.length=St.length,Pt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Tt)}function he(k){return R!==k?(o.useProgram(k),R=k,!0):!1}const Qe={[br]:o.FUNC_ADD,[gS]:o.FUNC_SUBTRACT,[_S]:o.FUNC_REVERSE_SUBTRACT};Qe[vS]=o.MIN,Qe[xS]=o.MAX;const ge={[SS]:o.ZERO,[MS]:o.ONE,[yS]:o.SRC_COLOR,[Ah]:o.SRC_ALPHA,[CS]:o.SRC_ALPHA_SATURATE,[AS]:o.DST_COLOR,[TS]:o.DST_ALPHA,[ES]:o.ONE_MINUS_SRC_COLOR,[Rh]:o.ONE_MINUS_SRC_ALPHA,[RS]:o.ONE_MINUS_DST_COLOR,[bS]:o.ONE_MINUS_DST_ALPHA,[DS]:o.CONSTANT_COLOR,[wS]:o.ONE_MINUS_CONSTANT_COLOR,[US]:o.CONSTANT_ALPHA,[NS]:o.ONE_MINUS_CONSTANT_ALPHA};function de(k,Ut,Tt,Pt,St,_t,At,ee,Le,ye){if(k===ha){C===!0&&(Dt(o.BLEND),C=!1);return}if(C===!1&&(ut(o.BLEND),C=!0),k!==mS){if(k!==M||ye!==A){if((v!==br||O!==br)&&(o.blendEquation(o.FUNC_ADD),v=br,O=br),ye)switch(k){case As:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case y0:o.blendFunc(o.ONE,o.ONE);break;case E0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case T0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ae("WebGLState: Invalid blending: ",k);break}else switch(k){case As:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case y0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case E0:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T0:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",k);break}z=null,L=null,F=null,B=null,w.set(0,0,0),Z=0,M=k,A=ye}return}St=St||Ut,_t=_t||Tt,At=At||Pt,(Ut!==v||St!==O)&&(o.blendEquationSeparate(Qe[Ut],Qe[St]),v=Ut,O=St),(Tt!==z||Pt!==L||_t!==F||At!==B)&&(o.blendFuncSeparate(ge[Tt],ge[Pt],ge[_t],ge[At]),z=Tt,L=Pt,F=_t,B=At),(ee.equals(w)===!1||Le!==Z)&&(o.blendColor(ee.r,ee.g,ee.b,Le),w.copy(ee),Z=Le),M=k,A=!1}function Re(k,Ut){k.side===ca?Dt(o.CULL_FACE):ut(o.CULL_FACE);let Tt=k.side===kn;Ut&&(Tt=!Tt),se(Tt),k.blending===As&&k.transparent===!1?de(ha):de(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Pt=k.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){D!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),D=k)}function Je(k){k!==hS?(ut(o.CULL_FACE),k!==V&&(k===M0?o.cullFace(o.BACK):k===dS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),V=k}function G(k){k!==it&&(P&&o.lineWidth(k),it=k)}function Ye(k,Ut,Tt){k?(ut(o.POLYGON_OFFSET_FILL),(at!==Ut||ht!==Tt)&&(o.polygonOffset(Ut,Tt),at=Ut,ht=Tt)):Dt(o.POLYGON_OFFSET_FILL)}function Me(k){k?ut(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Ue(k){k===void 0&&(k=o.TEXTURE0+ct-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function qt(k,Ut,Tt){Tt===void 0&&(Mt===null?Tt=o.TEXTURE0+ct-1:Tt=Mt);let Pt=xt[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[Tt]=Pt),(Pt.type!==k||Pt.texture!==Ut)&&(Mt!==Tt&&(o.activeTexture(Tt),Mt=Tt),o.bindTexture(k,Ut||tt[k]),Pt.type=k,Pt.texture=Ut)}function U(){const k=xt[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function dt(){try{o.texSubImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function vt(){try{o.texSubImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function Rt(){try{o.texStorage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function Xt(){try{o.texStorage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function te(){try{o.texImage2D(...arguments)}catch(k){Ae("WebGLState:",k)}}function yt(){try{o.texImage3D(...arguments)}catch(k){Ae("WebGLState:",k)}}function Et(k){gt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),gt.copy(k))}function zt(k){bt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),bt.copy(k))}function Ot(k,Ut){let Tt=p.get(Ut);Tt===void 0&&(Tt=new WeakMap,p.set(Ut,Tt));let Pt=Tt.get(k);Pt===void 0&&(Pt=o.getUniformBlockIndex(Ut,k.name),Tt.set(k,Pt))}function Ct(k,Ut){const Pt=p.get(Ut).get(k);m.get(Ut)!==Pt&&(o.uniformBlockBinding(Ut,Pt,k.__bindingPointIndex),m.set(Ut,Pt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Mt=null,xt={},_={},S=new WeakMap,E=[],R=null,C=!1,M=null,v=null,z=null,L=null,O=null,F=null,B=null,w=new Ie(0,0,0),Z=0,A=!1,D=null,V=null,it=null,at=null,ht=null,gt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ut,disable:Dt,bindFramebuffer:Vt,drawBuffers:Bt,useProgram:he,setBlending:de,setMaterial:Re,setFlipSided:se,setCullFace:Je,setLineWidth:G,setPolygonOffset:Ye,setScissorTest:Me,activeTexture:Ue,bindTexture:qt,unbindTexture:U,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:te,texImage3D:yt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:jt,scissor:Et,viewport:zt,reset:le}}function hA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Be,x=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(U,y){return E?new OffscreenCanvas(U,y):Ou("canvas")}function C(U,y,W){let dt=1;const vt=qt(U);if((vt.width>W||vt.height>W)&&(dt=W/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const lt=Math.floor(dt*vt.width),jt=Math.floor(dt*vt.height);_===void 0&&(_=R(lt,jt));const Rt=y?R(lt,jt):_;return Rt.width=lt,Rt.height=jt,Rt.getContext("2d").drawImage(U,0,0,lt,jt),re("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+jt+")."),Rt}else return"data"in U&&re("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function M(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,y,W,dt,vt=!1){if(U!==null){if(o[U]!==void 0)return o[U];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let lt=y;if(y===o.RED&&(W===o.FLOAT&&(lt=o.R32F),W===o.HALF_FLOAT&&(lt=o.R16F),W===o.UNSIGNED_BYTE&&(lt=o.R8)),y===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.R8UI),W===o.UNSIGNED_SHORT&&(lt=o.R16UI),W===o.UNSIGNED_INT&&(lt=o.R32UI),W===o.BYTE&&(lt=o.R8I),W===o.SHORT&&(lt=o.R16I),W===o.INT&&(lt=o.R32I)),y===o.RG&&(W===o.FLOAT&&(lt=o.RG32F),W===o.HALF_FLOAT&&(lt=o.RG16F),W===o.UNSIGNED_BYTE&&(lt=o.RG8)),y===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RG8UI),W===o.UNSIGNED_SHORT&&(lt=o.RG16UI),W===o.UNSIGNED_INT&&(lt=o.RG32UI),W===o.BYTE&&(lt=o.RG8I),W===o.SHORT&&(lt=o.RG16I),W===o.INT&&(lt=o.RG32I)),y===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),W===o.UNSIGNED_INT&&(lt=o.RGB32UI),W===o.BYTE&&(lt=o.RGB8I),W===o.SHORT&&(lt=o.RGB16I),W===o.INT&&(lt=o.RGB32I)),y===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),W===o.UNSIGNED_INT&&(lt=o.RGBA32UI),W===o.BYTE&&(lt=o.RGBA8I),W===o.SHORT&&(lt=o.RGBA16I),W===o.INT&&(lt=o.RGBA32I)),y===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),y===o.RGBA){const jt=vt?Nu:Ee.getTransfer(dt);W===o.FLOAT&&(lt=o.RGBA32F),W===o.HALF_FLOAT&&(lt=o.RGBA16F),W===o.UNSIGNED_BYTE&&(lt=jt===Fe?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function O(U,y){let W;return U?y===null||y===Bi||y===Ho?W=o.DEPTH24_STENCIL8:y===Oi?W=o.DEPTH32F_STENCIL8:y===Bo&&(W=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Bi||y===Ho?W=o.DEPTH_COMPONENT24:y===Oi?W=o.DEPTH_COMPONENT32F:y===Bo&&(W=o.DEPTH_COMPONENT16),W}function F(U,y){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Cn&&U.minFilter!==Ln?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function B(U){const y=U.target;y.removeEventListener("dispose",B),Z(y),y.isVideoTexture&&x.delete(y)}function w(U){const y=U.target;y.removeEventListener("dispose",w),D(y)}function Z(U){const y=r.get(U);if(y.__webglInit===void 0)return;const W=U.source,dt=S.get(W);if(dt){const vt=dt[y.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&A(U),Object.keys(dt).length===0&&S.delete(W)}r.remove(U)}function A(U){const y=r.get(U);o.deleteTexture(y.__webglTexture);const W=U.source,dt=S.get(W);delete dt[y.__cacheKey],h.memory.textures--}function D(U){const y=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(y.__webglFramebuffer[dt]))for(let vt=0;vt<y.__webglFramebuffer[dt].length;vt++)o.deleteFramebuffer(y.__webglFramebuffer[dt][vt]);else o.deleteFramebuffer(y.__webglFramebuffer[dt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[dt])}else{if(Array.isArray(y.__webglFramebuffer))for(let dt=0;dt<y.__webglFramebuffer.length;dt++)o.deleteFramebuffer(y.__webglFramebuffer[dt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let dt=0;dt<y.__webglColorRenderbuffer.length;dt++)y.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[dt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=U.textures;for(let dt=0,vt=W.length;dt<vt;dt++){const lt=r.get(W[dt]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(W[dt])}r.remove(U)}let V=0;function it(){V=0}function at(){const U=V;return U>=l.maxTextures&&re("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function ht(U){const y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function ct(U,y){const W=r.get(U);if(U.isVideoTexture&&Me(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&W.__version!==U.version){const dt=U.image;if(dt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(W,U,y);return}}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+y)}function P(U,y){const W=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){tt(W,U,y);return}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+y)}function H(U,y){const W=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){tt(W,U,y);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+y)}function nt(U,y){const W=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&W.__version!==U.version){ut(W,U,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+y)}const Mt={[Fh]:o.REPEAT,[fa]:o.CLAMP_TO_EDGE,[Ih]:o.MIRRORED_REPEAT},xt={[Cn]:o.NEAREST,[PS]:o.NEAREST_MIPMAP_NEAREST,[ru]:o.NEAREST_MIPMAP_LINEAR,[Ln]:o.LINEAR,[Zf]:o.LINEAR_MIPMAP_NEAREST,[Rr]:o.LINEAR_MIPMAP_LINEAR},N={[BS]:o.NEVER,[kS]:o.ALWAYS,[HS]:o.LESS,[Cd]:o.LEQUAL,[GS]:o.EQUAL,[Dd]:o.GEQUAL,[VS]:o.GREATER,[XS]:o.NOTEQUAL};function et(U,y){if(y.type===Oi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ln||y.magFilter===Zf||y.magFilter===ru||y.magFilter===Rr||y.minFilter===Ln||y.minFilter===Zf||y.minFilter===ru||y.minFilter===Rr)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Mt[y.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Mt[y.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Mt[y.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,xt[y.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,xt[y.minFilter]),y.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,N[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Cn||y.minFilter!==ru&&y.minFilter!==Rr||y.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function gt(U,y){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",B));const dt=y.source;let vt=S.get(dt);vt===void 0&&(vt={},S.set(dt,vt));const lt=ht(y);if(lt!==U.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),vt[lt].usedTimes++;const jt=vt[U.__cacheKey];jt!==void 0&&(vt[U.__cacheKey].usedTimes--,jt.usedTimes===0&&A(y)),U.__cacheKey=lt,U.__webglTexture=vt[lt].texture}return W}function bt(U,y,W){return Math.floor(Math.floor(U/W)/y)}function It(U,y,W,dt){const lt=U.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,W,dt,y.data);else{lt.sort((yt,Et)=>yt.start-Et.start);let jt=0;for(let yt=1;yt<lt.length;yt++){const Et=lt[jt],zt=lt[yt],Ot=Et.start+Et.count,Ct=bt(zt.start,y.width,4),le=bt(Et.start,y.width,4);zt.start<=Ot+1&&Ct===le&&bt(zt.start+zt.count-1,y.width,4)===Ct?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++jt,lt[jt]=zt)}lt.length=jt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let yt=0,Et=lt.length;yt<Et;yt++){const zt=lt[yt],Ot=Math.floor(zt.start/4),Ct=Math.ceil(zt.count/4),le=Ot%y.width,k=Math.floor(Ot/y.width),Ut=Ct,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,le,k,Ut,Tt,W,dt,y.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function tt(U,y,W){let dt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(dt=o.TEXTURE_3D);const vt=gt(U,y),lt=y.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+W);const jt=r.get(lt);if(lt.version!==jt.__version||vt===!0){i.activeTexture(o.TEXTURE0+W);const Rt=Ee.getPrimaries(Ee.workingColorSpace),Xt=y.colorSpace===Qa?null:Ee.getPrimaries(y.colorSpace),te=y.colorSpace===Qa||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let yt=C(y.image,!1,l.maxTextureSize);yt=Ue(y,yt);const Et=c.convert(y.format,y.colorSpace),zt=c.convert(y.type);let Ot=L(y.internalFormat,Et,zt,y.colorSpace,y.isVideoTexture);et(dt,y);let Ct;const le=y.mipmaps,k=y.isVideoTexture!==!0,Ut=jt.__version===void 0||vt===!0,Tt=lt.dataReady,Pt=F(y,yt);if(y.isDepthTexture)Ot=O(y.format===Cr,y.type),Ut&&(k?i.texStorage2D(o.TEXTURE_2D,1,Ot,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Ot,yt.width,yt.height,0,Et,zt,null));else if(y.isDataTexture)if(le.length>0){k&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data);y.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,yt.width,yt.height),Tt&&It(y,yt,Et,zt)):i.texImage2D(o.TEXTURE_2D,0,Ot,yt.width,yt.height,0,Et,zt,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,le[0].width,le[0].height,yt.depth);for(let St=0,_t=le.length;St<_t;St++)if(Ct=le[St],y.format!==bi)if(Et!==null)if(k){if(Tt)if(y.layerUpdates.size>0){const At=q0(Ct.width,Ct.height,y.format,y.type);for(const ee of y.layerUpdates){const Le=Ct.data.subarray(ee*At/Ct.data.BYTES_PER_ELEMENT,(ee+1)*At/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,ee,Ct.width,Ct.height,1,Et,Le)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,yt.depth,Et,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,yt.depth,0,Ct.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,yt.depth,Et,zt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,yt.depth,0,Et,zt,Ct.data)}else{k&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],y.format!==bi?Et!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data)}else if(y.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,yt.width,yt.height,yt.depth),Tt)if(y.layerUpdates.size>0){const St=q0(yt.width,yt.height,y.format,y.type);for(const _t of y.layerUpdates){const At=yt.data.subarray(_t*St/yt.data.BYTES_PER_ELEMENT,(_t+1)*St/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,Et,zt,At)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Et,zt,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,yt.width,yt.height,yt.depth,0,Et,zt,yt.data);else if(y.isData3DTexture)k?(Ut&&i.texStorage3D(o.TEXTURE_3D,Pt,Ot,yt.width,yt.height,yt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Et,zt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Ot,yt.width,yt.height,yt.depth,0,Et,zt,yt.data);else if(y.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(o.TEXTURE_2D,Pt,Ot,yt.width,yt.height);else{let St=yt.width,_t=yt.height;for(let At=0;At<Pt;At++)i.texImage2D(o.TEXTURE_2D,At,Ot,St,_t,0,Et,zt,null),St>>=1,_t>>=1}}else if(le.length>0){if(k&&Ut){const St=qt(le[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],k?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Et,zt,Ct):i.texImage2D(o.TEXTURE_2D,St,Ot,Et,zt,Ct);y.generateMipmaps=!1}else if(k){if(Ut){const St=qt(yt);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,zt,yt)}else i.texImage2D(o.TEXTURE_2D,0,Ot,Et,zt,yt);M(y)&&v(dt),jt.__version=lt.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function ut(U,y,W){if(y.image.length!==6)return;const dt=gt(U,y),vt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+W);const lt=r.get(vt);if(vt.version!==lt.__version||dt===!0){i.activeTexture(o.TEXTURE0+W);const jt=Ee.getPrimaries(Ee.workingColorSpace),Rt=y.colorSpace===Qa?null:Ee.getPrimaries(y.colorSpace),Xt=y.colorSpace===Qa||jt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const te=y.isCompressedTexture||y.image[0].isCompressedTexture,yt=y.image[0]&&y.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!te&&!yt?Et[_t]=C(y.image[_t],!0,l.maxCubemapSize):Et[_t]=yt?y.image[_t].image:y.image[_t],Et[_t]=Ue(y,Et[_t]);const zt=Et[0],Ot=c.convert(y.format,y.colorSpace),Ct=c.convert(y.type),le=L(y.internalFormat,Ot,Ct,y.colorSpace),k=y.isVideoTexture!==!0,Ut=lt.__version===void 0||dt===!0,Tt=vt.dataReady;let Pt=F(y,zt);et(o.TEXTURE_CUBE_MAP,y);let St;if(te){k&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,le,zt.width,zt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ee=St[At];y.format!==bi?Ot!==null?k?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ee.width,ee.height,Ot,ee.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ee.width,ee.height,0,ee.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ee.width,ee.height,Ot,Ct,ee.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ee.width,ee.height,0,Ot,Ct,ee.data)}}}else{if(St=y.mipmaps,k&&Ut){St.length>0&&Pt++;const _t=qt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Ct,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Et[_t].width,Et[_t].height,0,Ot,Ct,Et[_t].data);for(let At=0;At<St.length;At++){const Le=St[At].image[_t].image;k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Le.width,Le.height,Ot,Ct,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Le.width,Le.height,0,Ot,Ct,Le.data)}}else{k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Ct,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Ot,Ct,Et[_t]);for(let At=0;At<St.length;At++){const ee=St[At];k?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Ct,ee.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Ot,Ct,ee.image[_t])}}}M(y)&&v(o.TEXTURE_CUBE_MAP),lt.__version=vt.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function Dt(U,y,W,dt,vt,lt){const jt=c.convert(W.format,W.colorSpace),Rt=c.convert(W.type),Xt=L(W.internalFormat,jt,Rt,W.colorSpace),te=r.get(y),yt=r.get(W);if(yt.__renderTarget=y,!te.__hasExternalTextures){const Et=Math.max(1,y.width>>lt),zt=Math.max(1,y.height>>lt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,Xt,Et,zt,y.depth,0,jt,Rt,null):i.texImage2D(vt,lt,Xt,Et,zt,0,jt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ye(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,vt,yt.__webglTexture,0,G(y)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,vt,yt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(U,y,W){if(o.bindRenderbuffer(o.RENDERBUFFER,U),y.depthBuffer){const dt=y.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,lt=O(y.stencilBuffer,vt),jt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ye(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),lt,y.width,y.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),lt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,lt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,U)}else{const dt=y.textures;for(let vt=0;vt<dt.length;vt++){const lt=dt[vt],jt=c.convert(lt.format,lt.colorSpace),Rt=c.convert(lt.type),Xt=L(lt.internalFormat,jt,Rt,lt.colorSpace);Ye(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),Xt,y.width,y.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),Xt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Bt(U,y,W){const dt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(y.depthTexture);if(vt.__renderTarget=y,(!vt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),dt){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,y.depthTexture.addEventListener("dispose",B)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),et(o.TEXTURE_CUBE_MAP,y.depthTexture);const te=c.convert(y.depthTexture.format),yt=c.convert(y.depthTexture.type);let Et;y.depthTexture.format===ga?Et=o.DEPTH_COMPONENT24:y.depthTexture.format===Cr&&(Et=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,y.width,y.height,0,te,yt,null)}}else ct(y.depthTexture,0);const lt=vt.__webglTexture,jt=G(y),Rt=dt?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xt=y.depthTexture.format===Cr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===ga)Ye(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else if(y.depthTexture.format===Cr)Ye(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else throw new Error("Unknown depthTexture format")}function he(U){const y=r.get(U),W=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),dt){const vt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),y.__depthDisposeCallback=vt}y.__boundDepthTexture=dt}if(U.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let dt=0;dt<6;dt++)Bt(y.__webglFramebuffer[dt],U,dt);else{const dt=U.texture.mipmaps;dt&&dt.length>0?Bt(y.__webglFramebuffer[0],U,0):Bt(y.__webglFramebuffer,U,0)}else if(W){y.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[dt]),y.__webglDepthbuffer[dt]===void 0)y.__webglDepthbuffer[dt]=o.createRenderbuffer(),Vt(y.__webglDepthbuffer[dt],U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Vt(y.__webglDepthbuffer,U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(U,y,W){const dt=r.get(U);y!==void 0&&Dt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&he(U)}function ge(U){const y=U.texture,W=r.get(U),dt=r.get(y);U.addEventListener("dispose",w);const vt=U.textures,lt=U.isWebGLCubeRenderTarget===!0,jt=vt.length>1;if(jt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=y.version,h.memory.textures++),lt){W.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<y.mipmaps.length;Xt++)W.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else W.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let Rt=0;Rt<y.mipmaps.length;Rt++)W.__webglFramebuffer[Rt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const te=r.get(vt[Rt]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ye(U)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];W.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Rt]);const te=c.convert(Xt.format,Xt.colorSpace),yt=c.convert(Xt.type),Et=L(Xt.internalFormat,te,yt,Xt.colorSpace,U.isXRRenderTarget===!0),zt=G(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Et,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,W.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(W.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),et(o.TEXTURE_CUBE_MAP,y);for(let Rt=0;Rt<6;Rt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Xt=0;Xt<y.mipmaps.length;Xt++)Dt(W.__webglFramebuffer[Rt][Xt],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else Dt(W.__webglFramebuffer[Rt],U,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(y)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const te=vt[Rt],yt=r.get(te);let Et=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Et=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,yt.__webglTexture),et(Et,te),Dt(W.__webglFramebuffer,U,te,o.COLOR_ATTACHMENT0+Rt,Et,0),M(te)&&v(Et)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),et(Rt,y),y.mipmaps&&y.mipmaps.length>0)for(let Xt=0;Xt<y.mipmaps.length;Xt++)Dt(W.__webglFramebuffer[Xt],U,y,o.COLOR_ATTACHMENT0,Rt,Xt);else Dt(W.__webglFramebuffer,U,y,o.COLOR_ATTACHMENT0,Rt,0);M(y)&&v(Rt),i.unbindTexture()}U.depthBuffer&&he(U)}function de(U){const y=U.textures;for(let W=0,dt=y.length;W<dt;W++){const vt=y[W];if(M(vt)){const lt=z(U),jt=r.get(vt).__webglTexture;i.bindTexture(lt,jt),v(lt),i.unbindTexture()}}}const Re=[],se=[];function Je(U){if(U.samples>0){if(Ye(U)===!1){const y=U.textures,W=U.width,dt=U.height;let vt=o.COLOR_BUFFER_BIT;const lt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=r.get(U),Rt=y.length>1;if(Rt)for(let te=0;te<y.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Xt=U.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let te=0;te<y.length;te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[te]);const yt=r.get(y[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,W,dt,0,0,W,dt,vt,o.NEAREST),m===!0&&(Re.length=0,se.length=0,Re.push(o.COLOR_ATTACHMENT0+te),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Re.push(lt),se.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let te=0;te<y.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,jt.__webglColorRenderbuffer[te]);const yt=r.get(y[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const y=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function G(U){return Math.min(l.maxSamples,U.samples)}function Ye(U){const y=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Me(U){const y=h.render.frame;x.get(U)!==y&&(x.set(U,y),U.update())}function Ue(U,y){const W=U.colorSpace,dt=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==Us&&W!==Qa&&(Ee.getTransfer(W)===Fe?(dt!==bi||vt!==di)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",W)),y}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=it,this.setTexture2D=ct,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=nt,this.rebindTextures=Qe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function dA(o,e){function i(r,l=Qa){let c;const h=Ee.getTransfer(l);if(r===di)return o.UNSIGNED_BYTE;if(r===Ed)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Td)return o.UNSIGNED_SHORT_5_5_5_1;if(r===D_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===w_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===R_)return o.BYTE;if(r===C_)return o.SHORT;if(r===Bo)return o.UNSIGNED_SHORT;if(r===yd)return o.INT;if(r===Bi)return o.UNSIGNED_INT;if(r===Oi)return o.FLOAT;if(r===ma)return o.HALF_FLOAT;if(r===U_)return o.ALPHA;if(r===N_)return o.RGB;if(r===bi)return o.RGBA;if(r===ga)return o.DEPTH_COMPONENT;if(r===Cr)return o.DEPTH_STENCIL;if(r===L_)return o.RED;if(r===bd)return o.RED_INTEGER;if(r===ws)return o.RG;if(r===Ad)return o.RG_INTEGER;if(r===Rd)return o.RGBA_INTEGER;if(r===Ru||r===Cu||r===Du||r===wu)if(h===Fe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Ru)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Ru)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bh||r===Hh||r===Gh||r===Vh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Bh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xh||r===kh||r===Wh||r===qh||r===Yh||r===jh||r===Zh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Xh||r===kh)return h===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Wh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===qh)return c.COMPRESSED_R11_EAC;if(r===Yh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===jh)return c.COMPRESSED_RG11_EAC;if(r===Zh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===ud)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Kh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$h)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===td)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ed)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===id)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ad)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===od)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ld)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ud)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cd||r===fd||r===hd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===cd)return h===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dd||r===pd||r===md||r===gd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===dd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===pd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===md)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ho?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const pA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mA=`
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

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new q_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ai({vertexShader:pA,fragmentShader:mA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Hi(new Yo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _A extends Ls{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,x=null,_=null,S=null,E=null,R=null;const C=typeof XRWebGLBinding<"u",M=new gA,v={},z=i.getContextAttributes();let L=null,O=null;const F=[],B=[],w=new Be;let Z=null;const A=new Ei;A.viewport=new an;const D=new Ei;D.viewport=new an;const V=[A,D],it=new RM;let at=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ut=F[tt];return ut===void 0&&(ut=new vh,F[tt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(tt){let ut=F[tt];return ut===void 0&&(ut=new vh,F[tt]=ut),ut.getGripSpace()},this.getHand=function(tt){let ut=F[tt];return ut===void 0&&(ut=new vh,F[tt]=ut),ut.getHandSpace()};function ct(tt){const ut=B.indexOf(tt.inputSource);if(ut===-1)return;const Dt=F[ut];Dt!==void 0&&(Dt.update(tt.inputSource,tt.frame,p||h),Dt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function P(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let tt=0;tt<F.length;tt++){const ut=B[tt];ut!==null&&(B[tt]=null,F[tt].disconnect(ut))}at=null,ht=null,M.reset();for(const tt in v)delete v[tt];e.setRenderTarget(L),E=null,S=null,_=null,l=null,O=null,It.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(w.width,w.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,r.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,r.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),z.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(w),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Vt=null,Bt=null;z.depth&&(Bt=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=z.stencil?Cr:ga,Vt=z.stencil?Ho:Bi);const he={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(he),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),O=new Fi(S.textureWidth,S.textureHeight,{format:bi,type:di,depthTexture:new Vo(S.textureWidth,S.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Dt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new Fi(E.framebufferWidth,E.framebufferHeight,{format:bi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),It.setContext(l),It.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(tt){for(let ut=0;ut<tt.removed.length;ut++){const Dt=tt.removed[ut],Vt=B.indexOf(Dt);Vt>=0&&(B[Vt]=null,F[Vt].disconnect(Dt))}for(let ut=0;ut<tt.added.length;ut++){const Dt=tt.added[ut];let Vt=B.indexOf(Dt);if(Vt===-1){for(let he=0;he<F.length;he++)if(he>=B.length){B.push(Dt),Vt=he;break}else if(B[he]===null){B[he]=Dt,Vt=he;break}if(Vt===-1)break}const Bt=F[Vt];Bt&&Bt.connect(Dt)}}const nt=new rt,Mt=new rt;function xt(tt,ut,Dt){nt.setFromMatrixPosition(ut.matrixWorld),Mt.setFromMatrixPosition(Dt.matrixWorld);const Vt=nt.distanceTo(Mt),Bt=ut.projectionMatrix.elements,he=Dt.projectionMatrix.elements,Qe=Bt[14]/(Bt[10]-1),ge=Bt[14]/(Bt[10]+1),de=(Bt[9]+1)/Bt[5],Re=(Bt[9]-1)/Bt[5],se=(Bt[8]-1)/Bt[0],Je=(he[8]+1)/he[0],G=Qe*se,Ye=Qe*Je,Me=Vt/(-se+Je),Ue=Me*-se;if(ut.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ue),tt.translateZ(Me),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Bt[10]===-1)tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qt=Qe+Me,U=ge+Me,y=G-Ue,W=Ye+(Vt-Ue),dt=de*ge/U*qt,vt=Re*ge/U*qt;tt.projectionMatrix.makePerspective(y,W,dt,vt,qt,U),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function N(tt,ut){ut===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ut.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let ut=tt.near,Dt=tt.far;M.texture!==null&&(M.depthNear>0&&(ut=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),it.near=D.near=A.near=ut,it.far=D.far=A.far=Dt,(at!==it.near||ht!==it.far)&&(l.updateRenderState({depthNear:it.near,depthFar:it.far}),at=it.near,ht=it.far),it.layers.mask=tt.layers.mask|6,A.layers.mask=it.layers.mask&3,D.layers.mask=it.layers.mask&5;const Vt=tt.parent,Bt=it.cameras;N(it,Vt);for(let he=0;he<Bt.length;he++)N(Bt[he],Vt);Bt.length===2?xt(it,A,D):it.projectionMatrix.copy(A.projectionMatrix),et(tt,it,Vt)};function et(tt,ut,Dt){Dt===null?tt.matrix.copy(ut.matrixWorld):(tt.matrix.copy(Dt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ut.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=_d*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(tt){m=tt,S!==null&&(S.fixedFoveation=tt),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(it)},this.getCameraTexture=function(tt){return v[tt]};let gt=null;function bt(tt,ut){if(x=ut.getViewerPose(p||h),R=ut,x!==null){const Dt=x.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let Vt=!1;Dt.length!==it.cameras.length&&(it.cameras.length=0,Vt=!0);for(let ge=0;ge<Dt.length;ge++){const de=Dt[ge];let Re=null;if(E!==null)Re=E.getViewport(de);else{const Je=_.getViewSubImage(S,de);Re=Je.viewport,ge===0&&(e.setRenderTargetTextures(O,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(O))}let se=V[ge];se===void 0&&(se=new Ei,se.layers.enable(ge),se.viewport=new an,V[ge]=se),se.matrix.fromArray(de.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(de.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Re.x,Re.y,Re.width,Re.height),ge===0&&(it.matrix.copy(se.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),Vt===!0&&it.cameras.push(se)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ge=_.getDepthInformation(Dt[0]);ge&&ge.isValid&&ge.texture&&M.init(ge,l.renderState)}if(Bt&&Bt.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ge=0;ge<Dt.length;ge++){const de=Dt[ge].camera;if(de){let Re=v[de];Re||(Re=new q_,v[de]=Re);const se=_.getCameraImage(de);Re.sourceTexture=se}}}}for(let Dt=0;Dt<F.length;Dt++){const Vt=B[Dt],Bt=F[Dt];Vt!==null&&Bt!==void 0&&Bt.update(Vt,ut,p||h)}gt&&gt(tt,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),R=null}const It=new Y_;It.setAnimationLoop(bt),this.setAnimationLoop=function(tt){gt=tt},this.dispose=function(){}}}const Er=new _a,vA=new fn;function xA(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,G_(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,z,L,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),x(M,v)):v.isMeshStandardMaterial?(c(M,v),S(M,v),v.isMeshPhysicalMaterial&&E(M,v,O)):v.isMeshMatcapMaterial?(c(M,v),R(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),C(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,z,L):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===kn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===kn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const z=e.get(v),L=z.envMap,O=z.envMapRotation;L&&(M.envMap.value=L,Er.copy(O),Er.x*=-1,Er.y*=-1,Er.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),M.envMapRotation.value.setFromMatrix4(vA.makeRotationFromEuler(Er)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,z,L){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*z,M.scale.value=L*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function x(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function S(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function E(M,v,z){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,v){v.matcap&&(M.matcap.value=v.matcap)}function C(M,v){const z=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function SA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,L){const O=L.program;r.uniformBlockBinding(z,O)}function p(z,L){let O=l[z.id];O===void 0&&(R(z),O=x(z),l[z.id]=O,z.addEventListener("dispose",M));const F=L.program;r.updateUBOMapping(z,F);const B=e.render.frame;c[z.id]!==B&&(S(z),c[z.id]=B)}function x(z){const L=_();z.__bindingPointIndex=L;const O=o.createBuffer(),F=z.__size,B=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,F,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,O),O}function _(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const L=l[z.id],O=z.uniforms,F=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let B=0,w=O.length;B<w;B++){const Z=Array.isArray(O[B])?O[B]:[O[B]];for(let A=0,D=Z.length;A<D;A++){const V=Z[A];if(E(V,B,A,F)===!0){const it=V.__offset,at=Array.isArray(V.value)?V.value:[V.value];let ht=0;for(let ct=0;ct<at.length;ct++){const P=at[ct],H=C(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,it+ht,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,ht),ht+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,it,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(z,L,O,F){const B=z.value,w=L+"_"+O;if(F[w]===void 0)return typeof B=="number"||typeof B=="boolean"?F[w]=B:F[w]=B.clone(),!0;{const Z=F[w];if(typeof B=="number"||typeof B=="boolean"){if(Z!==B)return F[w]=B,!0}else if(Z.equals(B)===!1)return Z.copy(B),!0}return!1}function R(z){const L=z.uniforms;let O=0;const F=16;for(let w=0,Z=L.length;w<Z;w++){const A=Array.isArray(L[w])?L[w]:[L[w]];for(let D=0,V=A.length;D<V;D++){const it=A[D],at=Array.isArray(it.value)?it.value:[it.value];for(let ht=0,ct=at.length;ht<ct;ht++){const P=at[ht],H=C(P),nt=O%F,Mt=nt%H.boundary,xt=nt+Mt;O+=Mt,xt!==0&&F-xt<H.storage&&(O+=F-xt),it.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=O,O+=H.storage}}}const B=O%F;return B>0&&(O+=F-B),z.__size=O,z.__cache={},this}function C(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",z),L}function M(z){const L=z.target;L.removeEventListener("dispose",M);const O=h.indexOf(L.__bindingPointIndex);h.splice(O,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const MA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function yA(){return Ni===null&&(Ni=new xM(MA,16,16,ws,ma),Ni.name="DFG_LUT",Ni.minFilter=Ln,Ni.magFilter=Ln,Ni.wrapS=fa,Ni.wrapT=fa,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class EA{constructor(e={}){const{canvas:i=WS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=di}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=h;const C=E,M=new Set([Rd,Ad,bd]),v=new Set([di,Bi,Bo,Ho,Ed,Td]),z=new Uint32Array(4),L=new Int32Array(4);let O=null,F=null;const B=[],w=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1;this._outputColorSpace=hi;let V=0,it=0,at=null,ht=-1,ct=null;const P=new an,H=new an;let nt=null;const Mt=new Ie(0);let xt=0,N=i.width,et=i.height,gt=1,bt=null,It=null;const tt=new an(0,0,N,et),ut=new an(0,0,N,et);let Dt=!1;const Vt=new W_;let Bt=!1,he=!1;const Qe=new fn,ge=new rt,de=new an,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Je(){return at===null?gt:1}let G=r;function Ye(b,q){return i.getContext(b,q)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Md}`),i.addEventListener("webglcontextlost",ee,!1),i.addEventListener("webglcontextrestored",Le,!1),i.addEventListener("webglcontextcreationerror",ye,!1),G===null){const q="webgl2";if(G=Ye(q,b),G===null)throw Ye(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ae("WebGLRenderer: "+b.message),b}let Me,Ue,qt,U,y,W,dt,vt,lt,jt,Rt,Xt,te,yt,Et,zt,Ot,Ct,le,k,Ut,Tt,Pt,St;function _t(){Me=new yT(G),Me.init(),Tt=new dA(G,Me),Ue=new dT(G,Me,e,Tt),qt=new fA(G,Me),Ue.reversedDepthBuffer&&S&&qt.buffers.depth.setReversed(!0),U=new bT(G),y=new Kb,W=new hA(G,Me,qt,y,Ue,Tt,U),dt=new mT(A),vt=new MT(A),lt=new DM(G),Pt=new fT(G,lt),jt=new ET(G,lt,U,Pt),Rt=new RT(G,jt,lt,U),le=new AT(G,Ue,W),zt=new pT(y),Xt=new Zb(A,dt,vt,Me,Ue,Pt,zt),te=new xA(A,y),yt=new Jb,Et=new aA(Me),Ct=new cT(A,dt,vt,qt,Rt,R,m),Ot=new uA(A,Rt,Ue),St=new SA(G,U,Ue,qt),k=new hT(G,Me,U),Ut=new TT(G,Me,U),U.programs=Xt.programs,A.capabilities=Ue,A.extensions=Me,A.properties=y,A.renderLists=yt,A.shadowMap=Ot,A.state=qt,A.info=U}_t(),C!==di&&(Z=new DT(C,i.width,i.height,l,c));const At=new _A(A,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=Me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(b){b!==void 0&&(gt=b,this.setSize(N,et,!1))},this.getSize=function(b){return b.set(N,et)},this.setSize=function(b,q,st=!0){if(At.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,et=q,i.width=Math.floor(b*gt),i.height=Math.floor(q*gt),st===!0&&(i.style.width=b+"px",i.style.height=q+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(N*gt,et*gt).floor()},this.setDrawingBufferSize=function(b,q,st){N=b,et=q,gt=st,i.width=Math.floor(b*st),i.height=Math.floor(q*st),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(C===di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(tt)},this.setViewport=function(b,q,st,J){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,q,st,J),qt.viewport(P.copy(tt).multiplyScalar(gt).round())},this.getScissor=function(b){return b.copy(ut)},this.setScissor=function(b,q,st,J){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,q,st,J),qt.scissor(H.copy(ut).multiplyScalar(gt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){qt.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){It=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,st=!0){let J=0;if(b){let j=!1;if(at!==null){const wt=at.texture.format;j=M.has(wt)}if(j){const wt=at.texture.type,Ft=v.has(wt),Nt=Ct.getClearColor(),Ht=Ct.getClearAlpha(),kt=Nt.r,Qt=Nt.g,Wt=Nt.b;Ft?(z[0]=kt,z[1]=Qt,z[2]=Wt,z[3]=Ht,G.clearBufferuiv(G.COLOR,0,z)):(L[0]=kt,L[1]=Qt,L[2]=Wt,L[3]=Ht,G.clearBufferiv(G.COLOR,0,L))}else J|=G.COLOR_BUFFER_BIT}q&&(J|=G.DEPTH_BUFFER_BIT),st&&(J|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ee,!1),i.removeEventListener("webglcontextrestored",Le,!1),i.removeEventListener("webglcontextcreationerror",ye,!1),Ct.dispose(),yt.dispose(),Et.dispose(),y.dispose(),dt.dispose(),vt.dispose(),Rt.dispose(),Pt.dispose(),St.dispose(),Xt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Ur),At.removeEventListener("sessionend",Fs),Ri.stop()};function ee(b){b.preventDefault(),D0("WebGLRenderer: Context Lost."),D=!0}function Le(){D0("WebGLRenderer: Context Restored."),D=!1;const b=U.autoReset,q=Ot.enabled,st=Ot.autoUpdate,J=Ot.needsUpdate,j=Ot.type;_t(),U.autoReset=b,Ot.enabled=q,Ot.autoUpdate=st,Ot.needsUpdate=J,Ot.type=j}function ye(b){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Dn(b){const q=b.target;q.removeEventListener("dispose",Dn),pi(q)}function pi(b){jo(b),y.remove(b)}function jo(b){const q=y.get(b).programs;q!==void 0&&(q.forEach(function(st){Xt.releaseProgram(st)}),b.isShaderMaterial&&Xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,st,J,j,wt){q===null&&(q=Re);const Ft=j.isMesh&&j.matrixWorld.determinant()<0,Nt=tr(b,q,st,J,j);qt.setMaterial(J,Ft);let Ht=st.index,kt=1;if(J.wireframe===!0){if(Ht=jt.getWireframeAttribute(st),Ht===void 0)return;kt=2}const Qt=st.drawRange,Wt=st.attributes.position;let Jt=Qt.start*kt,Ce=(Qt.start+Qt.count)*kt;wt!==null&&(Jt=Math.max(Jt,wt.start*kt),Ce=Math.min(Ce,(wt.start+wt.count)*kt)),Ht!==null?(Jt=Math.max(Jt,0),Ce=Math.min(Ce,Ht.count)):Wt!=null&&(Jt=Math.max(Jt,0),Ce=Math.min(Ce,Wt.count));const je=Ce-Jt;if(je<0||je===1/0)return;Pt.setup(j,J,Nt,st,Ht);let ke,Ne=k;if(Ht!==null&&(ke=lt.get(Ht),Ne=Ut,Ne.setIndex(ke)),j.isMesh)J.wireframe===!0?(qt.setLineWidth(J.wireframeLinewidth*Je()),Ne.setMode(G.LINES)):Ne.setMode(G.TRIANGLES);else if(j.isLine){let Zt=J.linewidth;Zt===void 0&&(Zt=1),qt.setLineWidth(Zt*Je()),j.isLineSegments?Ne.setMode(G.LINES):j.isLineLoop?Ne.setMode(G.LINE_LOOP):Ne.setMode(G.LINE_STRIP)}else j.isPoints?Ne.setMode(G.POINTS):j.isSprite&&Ne.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Go("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,De=j._multiDrawCounts,ne=j._multiDrawCount,xn=Ht?lt.get(Ht).bytesPerElement:1,Gi=y.get(J).currentProgram.getUniforms();for(let Sn=0;Sn<ne;Sn++)Gi.setValue(G,"_gl_DrawID",Sn),Ne.render(Zt[Sn]/xn,De[Sn])}else if(j.isInstancedMesh)Ne.renderInstances(Jt,je,j.count);else if(st.isInstancedBufferGeometry){const Zt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,De=Math.min(st.instanceCount,Zt);Ne.renderInstances(Jt,je,De)}else Ne.render(Jt,je)};function Ps(b,q,st){b.transparent===!0&&b.side===ca&&b.forceSinglePass===!1?(b.side=kn,b.needsUpdate=!0,Lr(b,q,st),b.side=$a,b.needsUpdate=!0,Lr(b,q,st),b.side=ca):Lr(b,q,st)}this.compile=function(b,q,st=null){st===null&&(st=b),F=Et.get(st),F.init(q),w.push(F),st.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(F.pushLight(j),j.castShadow&&F.pushShadow(j))}),b!==st&&b.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(F.pushLight(j),j.castShadow&&F.pushShadow(j))}),F.setupLights();const J=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const wt=j.material;if(wt)if(Array.isArray(wt))for(let Ft=0;Ft<wt.length;Ft++){const Nt=wt[Ft];Ps(Nt,st,j),J.add(Nt)}else Ps(wt,st,j),J.add(wt)}),F=w.pop(),J},this.compileAsync=function(b,q,st=null){const J=this.compile(b,q,st);return new Promise(j=>{function wt(){if(J.forEach(function(Ft){y.get(Ft).currentProgram.isReady()&&J.delete(Ft)}),J.size===0){j(b);return}setTimeout(wt,10)}Me.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let wr=null;function zs(b){wr&&wr(b)}function Ur(){Ri.stop()}function Fs(){Ri.start()}const Ri=new Y_;Ri.setAnimationLoop(zs),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(b){wr=b,At.setAnimationLoop(b),b===null?Ri.stop():Ri.start()},At.addEventListener("sessionstart",Ur),At.addEventListener("sessionend",Fs),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const st=At.enabled===!0&&At.isPresenting===!0,J=Z!==null&&(at===null||st)&&Z.begin(A,at);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,q,at),F=Et.get(b,w.length),F.init(q),w.push(F),Qe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Vt.setFromProjectionMatrix(Qe,Pi,q.reversedDepth),he=this.localClippingEnabled,Bt=zt.init(this.clippingPlanes,he),O=yt.get(b,B.length),O.init(),B.push(O),At.enabled===!0&&At.isPresenting===!0){const Ft=A.xr.getDepthSensingMesh();Ft!==null&&ei(Ft,q,-1/0,A.sortObjects)}ei(b,q,0,A.sortObjects),O.finish(),A.sortObjects===!0&&O.sort(bt,It),se=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,se&&Ct.addToRenderList(O,b),this.info.render.frame++,Bt===!0&&zt.beginShadows();const j=F.state.shadowsArray;if(Ot.render(j,b,q),Bt===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&Z.hasRenderPass())===!1){const Ft=O.opaque,Nt=O.transmissive;if(F.setupLights(),q.isArrayCamera){const Ht=q.cameras;if(Nt.length>0)for(let kt=0,Qt=Ht.length;kt<Qt;kt++){const Wt=Ht[kt];vn(Ft,Nt,b,Wt)}se&&Ct.render(b);for(let kt=0,Qt=Ht.length;kt<Qt;kt++){const Wt=Ht[kt];rn(O,b,Wt,Wt.viewport)}}else Nt.length>0&&vn(Ft,Nt,b,q),se&&Ct.render(b),rn(O,b,q)}at!==null&&it===0&&(W.updateMultisampleRenderTarget(at),W.updateRenderTargetMipmap(at)),J&&Z.end(A),b.isScene===!0&&b.onAfterRender(A,b,q),Pt.resetDefaultState(),ht=-1,ct=null,w.pop(),w.length>0?(F=w[w.length-1],Bt===!0&&zt.setGlobalState(A.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?O=B[B.length-1]:O=null};function ei(b,q,st,J){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)st=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)F.pushLight(b),b.castShadow&&F.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Vt.intersectsSprite(b)){J&&de.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Qe);const Ft=Rt.update(b),Nt=b.material;Nt.visible&&O.push(b,Ft,Nt,st,de.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Vt.intersectsObject(b))){const Ft=Rt.update(b),Nt=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),de.copy(b.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),de.copy(Ft.boundingSphere.center)),de.applyMatrix4(b.matrixWorld).applyMatrix4(Qe)),Array.isArray(Nt)){const Ht=Ft.groups;for(let kt=0,Qt=Ht.length;kt<Qt;kt++){const Wt=Ht[kt],Jt=Nt[Wt.materialIndex];Jt&&Jt.visible&&O.push(b,Ft,Jt,st,de.z,Wt)}}else Nt.visible&&O.push(b,Ft,Nt,st,de.z,null)}}const wt=b.children;for(let Ft=0,Nt=wt.length;Ft<Nt;Ft++)ei(wt[Ft],q,st,J)}function rn(b,q,st,J){const{opaque:j,transmissive:wt,transparent:Ft}=b;F.setupLightsView(st),Bt===!0&&zt.setGlobalState(A.clippingPlanes,st),J&&qt.viewport(P.copy(J)),j.length>0&&mi(j,q,st),wt.length>0&&mi(wt,q,st),Ft.length>0&&mi(Ft,q,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function vn(b,q,st,J){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[J.id]===void 0){const Jt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[J.id]=new Fi(1,1,{generateMipmaps:!0,type:Jt?ma:di,minFilter:Rr,samples:Ue.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}const wt=F.state.transmissionRenderTarget[J.id],Ft=J.viewport||P;wt.setSize(Ft.z*A.transmissionResolutionScale,Ft.w*A.transmissionResolutionScale);const Nt=A.getRenderTarget(),Ht=A.getActiveCubeFace(),kt=A.getActiveMipmapLevel();A.setRenderTarget(wt),A.getClearColor(Mt),xt=A.getClearAlpha(),xt<1&&A.setClearColor(16777215,.5),A.clear(),se&&Ct.render(st);const Qt=A.toneMapping;A.toneMapping=zi;const Wt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),F.setupLightsView(J),Bt===!0&&zt.setGlobalState(A.clippingPlanes,J),mi(b,st,J),W.updateMultisampleRenderTarget(wt),W.updateRenderTargetMipmap(wt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ce=0,je=q.length;Ce<je;Ce++){const ke=q[Ce],{object:Ne,geometry:Zt,material:De,group:ne}=ke;if(De.side===ca&&Ne.layers.test(J.layers)){const xn=De.side;De.side=kn,De.needsUpdate=!0,Nr(Ne,st,J,Zt,De,ne),De.side=xn,De.needsUpdate=!0,Jt=!0}}Jt===!0&&(W.updateMultisampleRenderTarget(wt),W.updateRenderTargetMipmap(wt))}A.setRenderTarget(Nt,Ht,kt),A.setClearColor(Mt,xt),Wt!==void 0&&(J.viewport=Wt),A.toneMapping=Qt}function mi(b,q,st){const J=q.isScene===!0?q.overrideMaterial:null;for(let j=0,wt=b.length;j<wt;j++){const Ft=b[j],{object:Nt,geometry:Ht,group:kt}=Ft;let Qt=Ft.material;Qt.allowOverride===!0&&J!==null&&(Qt=J),Nt.layers.test(st.layers)&&Nr(Nt,q,st,Ht,Qt,kt)}}function Nr(b,q,st,J,j,wt){b.onBeforeRender(A,q,st,J,j,wt),b.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(A,q,st,J,b,wt),j.transparent===!0&&j.side===ca&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,A.renderBufferDirect(st,q,J,j,b,wt),j.side=$a,j.needsUpdate=!0,A.renderBufferDirect(st,q,J,j,b,wt),j.side=ca):A.renderBufferDirect(st,q,J,j,b,wt),b.onAfterRender(A,q,st,J,j,wt)}function Lr(b,q,st){q.isScene!==!0&&(q=Re);const J=y.get(b),j=F.state.lights,wt=F.state.shadowsArray,Ft=j.state.version,Nt=Xt.getParameters(b,j.state,wt,q,st),Ht=Xt.getProgramCacheKey(Nt);let kt=J.programs;J.environment=b.isMeshStandardMaterial?q.environment:null,J.fog=q.fog,J.envMap=(b.isMeshStandardMaterial?vt:dt).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",Dn),kt=new Map,J.programs=kt);let Qt=kt.get(Ht);if(Qt!==void 0){if(J.currentProgram===Qt&&J.lightsStateVersion===Ft)return Is(b,Nt),Qt}else Nt.uniforms=Xt.getUniforms(b),b.onBeforeCompile(Nt,A),Qt=Xt.acquireProgram(Nt,Ht),kt.set(Ht,Qt),J.uniforms=Nt.uniforms;const Wt=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Wt.clippingPlanes=zt.uniform),Is(b,Nt),J.needsLights=xa(b),J.lightsStateVersion=Ft,J.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),J.currentProgram=Qt,J.uniformsList=null,Qt}function Zo(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Uu.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Is(b,q){const st=y.get(b);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function tr(b,q,st,J,j){q.isScene!==!0&&(q=Re),W.resetTextureUnits();const wt=q.fog,Ft=J.isMeshStandardMaterial?q.environment:null,Nt=at===null?A.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Us,Ht=(J.isMeshStandardMaterial?vt:dt).get(J.envMap||Ft),kt=J.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Qt=!!st.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Wt=!!st.morphAttributes.position,Jt=!!st.morphAttributes.normal,Ce=!!st.morphAttributes.color;let je=zi;J.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(je=A.toneMapping);const ke=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ne=ke!==void 0?ke.length:0,Zt=y.get(J),De=F.state.lights;if(Bt===!0&&(he===!0||b!==ct)){const yn=b===ct&&J.id===ht;zt.setState(J,b,yn)}let ne=!1;J.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==De.state.version||Zt.outputColorSpace!==Nt||j.isBatchedMesh&&Zt.batching===!1||!j.isBatchedMesh&&Zt.batching===!0||j.isBatchedMesh&&Zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Zt.instancing===!1||!j.isInstancedMesh&&Zt.instancing===!0||j.isSkinnedMesh&&Zt.skinning===!1||!j.isSkinnedMesh&&Zt.skinning===!0||j.isInstancedMesh&&Zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Zt.instancingMorph===!1&&j.morphTexture!==null||Zt.envMap!==Ht||J.fog===!0&&Zt.fog!==wt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==zt.numPlanes||Zt.numIntersection!==zt.numIntersection)||Zt.vertexAlphas!==kt||Zt.vertexTangents!==Qt||Zt.morphTargets!==Wt||Zt.morphNormals!==Jt||Zt.morphColors!==Ce||Zt.toneMapping!==je||Zt.morphTargetsCount!==Ne)&&(ne=!0):(ne=!0,Zt.__version=J.version);let xn=Zt.currentProgram;ne===!0&&(xn=Lr(J,q,j));let Gi=!1,Sn=!1,ni=!1;const Oe=xn.getUniforms(),Mn=Zt.uniforms;if(qt.useProgram(xn.program)&&(Gi=!0,Sn=!0,ni=!0),J.id!==ht&&(ht=J.id,Sn=!0),Gi||ct!==b){qt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Oe.setValue(G,"projectionMatrix",b.projectionMatrix),Oe.setValue(G,"viewMatrix",b.matrixWorldInverse);const En=Oe.map.cameraPosition;En!==void 0&&En.setValue(G,ge.setFromMatrixPosition(b.matrixWorld)),Ue.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),ct!==b&&(ct=b,Sn=!0,ni=!0)}if(Zt.needsLights&&(De.state.directionalShadowMap.length>0&&Oe.setValue(G,"directionalShadowMap",De.state.directionalShadowMap,W),De.state.spotShadowMap.length>0&&Oe.setValue(G,"spotShadowMap",De.state.spotShadowMap,W),De.state.pointShadowMap.length>0&&Oe.setValue(G,"pointShadowMap",De.state.pointShadowMap,W)),j.isSkinnedMesh){Oe.setOptional(G,j,"bindMatrix"),Oe.setOptional(G,j,"bindMatrixInverse");const yn=j.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Oe.setValue(G,"boneTexture",yn.boneTexture,W))}j.isBatchedMesh&&(Oe.setOptional(G,j,"batchingTexture"),Oe.setValue(G,"batchingTexture",j._matricesTexture,W),Oe.setOptional(G,j,"batchingIdTexture"),Oe.setValue(G,"batchingIdTexture",j._indirectTexture,W),Oe.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&Oe.setValue(G,"batchingColorTexture",j._colorsTexture,W));const hn=st.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&le.update(j,st,xn),(Sn||Zt.receiveShadow!==j.receiveShadow)&&(Zt.receiveShadow=j.receiveShadow,Oe.setValue(G,"receiveShadow",j.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Mn.envMap.value=Ht,Mn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&q.environment!==null&&(Mn.envMapIntensity.value=q.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=yA()),Sn&&(Oe.setValue(G,"toneMappingExposure",A.toneMappingExposure),Zt.needsLights&&Bs(Mn,ni),wt&&J.fog===!0&&te.refreshFogUniforms(Mn,wt),te.refreshMaterialUniforms(Mn,J,gt,et,F.state.transmissionRenderTarget[b.id]),Uu.upload(G,Zo(Zt),Mn,W)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Uu.upload(G,Zo(Zt),Mn,W),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Oe.setValue(G,"center",j.center),Oe.setValue(G,"modelViewMatrix",j.modelViewMatrix),Oe.setValue(G,"normalMatrix",j.normalMatrix),Oe.setValue(G,"modelMatrix",j.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const yn=J.uniformsGroups;for(let En=0,Or=yn.length;En<Or;En++){const gi=yn[En];St.update(gi,xn),St.bind(gi,xn)}}return xn}function Bs(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function xa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return it},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(b,q,st){const J=y.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),y.get(b.texture).__webglTexture=q,y.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:st,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const st=y.get(b);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const Sa=G.createFramebuffer();this.setRenderTarget=function(b,q=0,st=0){at=b,V=q,it=st;let J=null,j=!1,wt=!1;if(b){const Nt=y.get(b);if(Nt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,Nt.__webglFramebuffer),P.copy(b.viewport),H.copy(b.scissor),nt=b.scissorTest,qt.viewport(P),qt.scissor(H),qt.setScissorTest(nt),ht=-1;return}else if(Nt.__webglFramebuffer===void 0)W.setupRenderTarget(b);else if(Nt.__hasExternalTextures)W.rebindTextures(b,y.get(b.texture).__webglTexture,y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Qt=b.depthTexture;if(Nt.__boundDepthTexture!==Qt){if(Qt!==null&&y.has(Qt)&&(b.width!==Qt.image.width||b.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(b)}}const Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(wt=!0);const kt=y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[q])?J=kt[q][st]:J=kt[q],j=!0):b.samples>0&&W.useMultisampledRTT(b)===!1?J=y.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?J=kt[st]:J=kt,P.copy(b.viewport),H.copy(b.scissor),nt=b.scissorTest}else P.copy(tt).multiplyScalar(gt).floor(),H.copy(ut).multiplyScalar(gt).floor(),nt=Dt;if(st!==0&&(J=Sa),qt.bindFramebuffer(G.FRAMEBUFFER,J)&&qt.drawBuffers(b,J),qt.viewport(P),qt.scissor(H),qt.setScissorTest(nt),j){const Nt=y.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,st)}else if(wt){const Nt=q;for(let Ht=0;Ht<b.textures.length;Ht++){const kt=y.get(b.textures[Ht]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ht,kt.__webglTexture,st,Nt)}}else if(b!==null&&st!==0){const Nt=y.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Nt.__webglTexture,st)}ht=-1},this.readRenderTargetPixels=function(b,q,st,J,j,wt,Ft,Nt=0){if(!(b&&b.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);try{const kt=b.textures[Nt],Qt=kt.format,Wt=kt.type;if(!Ue.textureFormatReadable(Qt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Wt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-J&&st>=0&&st<=b.height-j&&(b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt),G.readPixels(q,st,J,j,Tt.convert(Qt),Tt.convert(Wt),wt))}finally{const kt=at!==null?y.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(b,q,st,J,j,wt,Ft,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht)if(q>=0&&q<=b.width-J&&st>=0&&st<=b.height-j){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);const kt=b.textures[Nt],Qt=kt.format,Wt=kt.type;if(!Ue.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Jt),G.bufferData(G.PIXEL_PACK_BUFFER,wt.byteLength,G.STREAM_READ),b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt),G.readPixels(q,st,J,j,Tt.convert(Qt),Tt.convert(Wt),0);const Ce=at!==null?y.get(at).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,Ce);const je=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await qS(G,je,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Jt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,wt),G.deleteBuffer(Jt),G.deleteSync(je),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,st=0){const J=Math.pow(2,-st),j=Math.floor(b.image.width*J),wt=Math.floor(b.image.height*J),Ft=q!==null?q.x:0,Nt=q!==null?q.y:0;W.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Ft,Nt,j,wt),qt.unbindTexture()};const er=G.createFramebuffer(),Ma=G.createFramebuffer();this.copyTextureToTexture=function(b,q,st=null,J=null,j=0,wt=null){wt===null&&(j!==0?(Go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=j,j=0):wt=0);let Ft,Nt,Ht,kt,Qt,Wt,Jt,Ce,je;const ke=b.isCompressedTexture?b.mipmaps[wt]:b.image;if(st!==null)Ft=st.max.x-st.min.x,Nt=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,Qt=st.min.y,Wt=st.isBox3?st.min.z:0;else{const hn=Math.pow(2,-j);Ft=Math.floor(ke.width*hn),Nt=Math.floor(ke.height*hn),b.isDataArrayTexture?Ht=ke.depth:b.isData3DTexture?Ht=Math.floor(ke.depth*hn):Ht=1,kt=0,Qt=0,Wt=0}J!==null?(Jt=J.x,Ce=J.y,je=J.z):(Jt=0,Ce=0,je=0);const Ne=Tt.convert(q.format),Zt=Tt.convert(q.type);let De;q.isData3DTexture?(W.setTexture3D(q,0),De=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),De=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),De=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ne=G.getParameter(G.UNPACK_ROW_LENGTH),xn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Gi=G.getParameter(G.UNPACK_SKIP_PIXELS),Sn=G.getParameter(G.UNPACK_SKIP_ROWS),ni=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ke.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ke.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Oe=b.isDataArrayTexture||b.isData3DTexture,Mn=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const hn=y.get(b),yn=y.get(q),En=y.get(hn.__renderTarget),Or=y.get(yn.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let gi=0;gi<Ht;gi++)Oe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(b).__webglTexture,j,Wt+gi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(q).__webglTexture,wt,je+gi)),G.blitFramebuffer(kt,Qt,Ft,Nt,Jt,Ce,Ft,Nt,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||y.has(b)){const hn=y.get(b),yn=y.get(q);qt.bindFramebuffer(G.READ_FRAMEBUFFER,er),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ma);for(let En=0;En<Ht;En++)Oe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hn.__webglTexture,j,Wt+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hn.__webglTexture,j),Mn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yn.__webglTexture,wt,je+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yn.__webglTexture,wt),j!==0?G.blitFramebuffer(kt,Qt,Ft,Nt,Jt,Ce,Ft,Nt,G.COLOR_BUFFER_BIT,G.NEAREST):Mn?G.copyTexSubImage3D(De,wt,Jt,Ce,je+En,kt,Qt,Ft,Nt):G.copyTexSubImage2D(De,wt,Jt,Ce,kt,Qt,Ft,Nt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Mn?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(De,wt,Jt,Ce,je,Ft,Nt,Ht,Ne,Zt,ke.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(De,wt,Jt,Ce,je,Ft,Nt,Ht,Ne,ke.data):G.texSubImage3D(De,wt,Jt,Ce,je,Ft,Nt,Ht,Ne,Zt,ke):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,wt,Jt,Ce,Ft,Nt,Ne,Zt,ke.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,wt,Jt,Ce,ke.width,ke.height,Ne,ke.data):G.texSubImage2D(G.TEXTURE_2D,wt,Jt,Ce,Ft,Nt,Ne,Zt,ke);G.pixelStorei(G.UNPACK_ROW_LENGTH,ne),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Gi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Sn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ni),wt===0&&q.generateMipmaps&&G.generateMipmap(De),qt.unbindTexture()},this.initRenderTarget=function(b){y.get(b).__webglFramebuffer===void 0&&W.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?W.setTextureCube(b,0):b.isData3DTexture?W.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?W.setTexture2DArray(b,0):W.setTexture2D(b,0),qt.unbindTexture()},this.resetState=function(){V=0,it=0,at=null,qt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ee._getUnpackColorSpace()}}const TA=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,bA=`
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uFlakeSize;
uniform float uMinFlakeSize;
uniform float uPixelResolution;
uniform float uSpeed;
uniform float uDepthFade;
uniform float uFarPlane;
uniform vec3 uColor;
uniform float uBrightness;
uniform float uGamma;
uniform float uDensity;
uniform float uVariant;
uniform float uDirection;

// Precomputed constants
#define PI 3.14159265
#define PI_OVER_6 0.5235988
#define PI_OVER_3 1.0471976
#define INV_SQRT3 0.57735027
#define M1 1597334677U
#define M2 3812015801U
#define M3 3299493293U
#define F0 2.3283064e-10

// Optimized hash - inline multiplication
#define hash(n) (n * (n ^ (n >> 15)))
#define coord3(p) (uvec3(p).x * M1 ^ uvec3(p).y * M2 ^ uvec3(p).z * M3)

// Precomputed camera basis vectors (normalized vec3(1,1,1), vec3(1,0,-1))
const vec3 camK = vec3(0.57735027, 0.57735027, 0.57735027);
const vec3 camI = vec3(0.70710678, 0.0, -0.70710678);
const vec3 camJ = vec3(-0.40824829, 0.81649658, -0.40824829);

// Precomputed branch direction
const vec2 b1d = vec2(0.574, 0.819);

vec3 hash3(uint n) {
  uvec3 hashed = hash(n) * uvec3(1U, 511U, 262143U);
  return vec3(hashed) * F0;
}

float snowflakeDist(vec2 p) {
  float r = length(p);
  float a = atan(p.y, p.x);
  a = abs(mod(a + PI_OVER_6, PI_OVER_3) - PI_OVER_6);
  vec2 q = r * vec2(cos(a), sin(a));
  float dMain = max(abs(q.y), max(-q.x, q.x - 1.0));
  float b1t = clamp(dot(q - vec2(0.4, 0.0), b1d), 0.0, 0.4);
  float dB1 = length(q - vec2(0.4, 0.0) - b1t * b1d);
  float b2t = clamp(dot(q - vec2(0.7, 0.0), b1d), 0.0, 0.25);
  float dB2 = length(q - vec2(0.7, 0.0) - b2t * b1d);
  return min(dMain, min(dB1, dB2)) * 10.0;
}

void main() {
  // Precompute reciprocals to avoid division
  float invPixelRes = 1.0 / uPixelResolution;
  float pixelSize = max(1.0, floor(0.5 + uResolution.x * invPixelRes));
  float invPixelSize = 1.0 / pixelSize;
  
  vec2 fragCoord = floor(gl_FragCoord.xy * invPixelSize);
  vec2 res = uResolution * invPixelSize;
  float invResX = 1.0 / res.x;

  vec3 ray = normalize(vec3((fragCoord - res * 0.5) * invResX, 1.0));
  ray = ray.x * camI + ray.y * camJ + ray.z * camK;

  // Precompute time-based values
  float timeSpeed = uTime * uSpeed;
  float windX = cos(uDirection) * 0.4;
  float windY = sin(uDirection) * 0.4;
  vec3 camPos = (windX * camI + windY * camJ + 0.1 * camK) * timeSpeed;
  vec3 pos = camPos;

  // Precompute ray reciprocal for strides
  vec3 absRay = max(abs(ray), vec3(0.001));
  vec3 strides = 1.0 / absRay;
  vec3 raySign = step(ray, vec3(0.0));
  vec3 phase = fract(pos) * strides;
  phase = mix(strides - phase, phase, raySign);

  // Precompute for intersection test
  float rayDotCamK = dot(ray, camK);
  float invRayDotCamK = 1.0 / rayDotCamK;
  float invDepthFade = 1.0 / uDepthFade;
  float halfInvResX = 0.5 * invResX;
  vec3 timeAnim = timeSpeed * 0.1 * vec3(7.0, 8.0, 5.0);

  float t = 0.0;
  for (int i = 0; i < 128; i++) {
    if (t >= uFarPlane) break;
    
    vec3 fpos = floor(pos);
    uint cellCoord = coord3(fpos);
    float cellHash = hash3(cellCoord).x;

    if (cellHash < uDensity) {
      vec3 h = hash3(cellCoord);
      
      // Optimized flake position calculation
      vec3 sinArg1 = fpos.yzx * 0.073;
      vec3 sinArg2 = fpos.zxy * 0.27;
      vec3 flakePos = 0.5 - 0.5 * cos(4.0 * sin(sinArg1) + 4.0 * sin(sinArg2) + 2.0 * h + timeAnim);
      flakePos = flakePos * 0.8 + 0.1 + fpos;

      float toIntersection = dot(flakePos - pos, camK) * invRayDotCamK;
      
      if (toIntersection > 0.0) {
        vec3 testPos = pos + ray * toIntersection - flakePos;
        float testX = dot(testPos, camI);
        float testY = dot(testPos, camJ);
        vec2 testUV = abs(vec2(testX, testY));
        
        float depth = dot(flakePos - camPos, camK);
        float flakeSize = max(uFlakeSize, uMinFlakeSize * depth * halfInvResX);
        
        float dist;
        if (uVariant < 0.5) {
          dist = max(testUV.x, testUV.y);
        } else if (uVariant < 1.5) {
          dist = length(testUV);
        } else {
          float invFlakeSize = 1.0 / flakeSize;
          dist = snowflakeDist(vec2(testX, testY) * invFlakeSize) * flakeSize;
        }

        if (dist < flakeSize) {
          float flakeSizeRatio = uFlakeSize / flakeSize;
          float intensity = exp2(-(t + toIntersection) * invDepthFade) *
                           min(1.0, flakeSizeRatio * flakeSizeRatio) * uBrightness;
          gl_FragColor = vec4(uColor * pow(vec3(intensity), vec3(uGamma)), 1.0);
          return;
        }
      }
    }

    float nextStep = min(min(phase.x, phase.y), phase.z);
    vec3 sel = step(phase, vec3(nextStep));
    phase = phase - nextStep + strides * sel;
    t += nextStep;
    pos = mix(pos + ray * nextStep, floor(pos + ray * nextStep + 0.5), sel);
  }

  gl_FragColor = vec4(0.0);
}
`;function g_({color:o="#ffffff",flakeSize:e=.01,minFlakeSize:i=1.25,pixelResolution:r=200,speed:l=1.25,depthFade:c=8,farPlane:h=20,brightness:d=1,gamma:m=.4545,density:p=.3,variant:x="square",direction:_=125,className:S="",style:E={}}){const R=Ke.useRef(null),C=Ke.useRef(0),M=Ke.useRef(!0),v=Ke.useRef(null),z=Ke.useRef(null),L=Ke.useRef(null),O=Ke.useMemo(()=>x==="round"?1:x==="snowflake"?2:0,[x]),F=Ke.useMemo(()=>{const w=new Ie(o);return new rt(w.r,w.g,w.b)},[o]),B=Ke.useCallback(()=>{L.current&&clearTimeout(L.current),L.current=window.setTimeout(()=>{const w=R.current,Z=v.current,A=z.current;if(!w||!Z||!A)return;const D=w.offsetWidth,V=w.offsetHeight;Z.setSize(D,V),A.uniforms.uResolution.value.set(D,V)},100)},[]);return Ke.useEffect(()=>{const w=R.current;if(!w)return;const Z=new IntersectionObserver(([A])=>{M.current=A.isIntersecting},{threshold:0});return Z.observe(w),()=>Z.disconnect()},[]),Ke.useEffect(()=>{const w=R.current;if(!w)return;const Z=new vM,A=new Nd(-1,1,1,-1,0,1),D=new EA({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(w.offsetWidth,w.offsetHeight),D.setClearColor(0,0),w.appendChild(D.domElement),v.current=D;const V=new Ai({vertexShader:TA,fragmentShader:bA,uniforms:{uTime:{value:0},uResolution:{value:new Be(w.offsetWidth,w.offsetHeight)},uFlakeSize:{value:e},uMinFlakeSize:{value:i},uPixelResolution:{value:r},uSpeed:{value:l},uDepthFade:{value:c},uFarPlane:{value:h},uColor:{value:F.clone()},uBrightness:{value:d},uGamma:{value:m},uDensity:{value:p},uVariant:{value:O},uDirection:{value:_*Math.PI/180}},transparent:!0});z.current=V;const it=new Yo(2,2);Z.add(new Hi(it,V)),window.addEventListener("resize",B);const at=performance.now(),ht=()=>{C.current=requestAnimationFrame(ht),M.current&&(V.uniforms.uTime.value=(performance.now()-at)*.001,D.render(Z,A))};return ht(),()=>{cancelAnimationFrame(C.current),window.removeEventListener("resize",B),L.current&&clearTimeout(L.current),w.contains(D.domElement)&&w.removeChild(D.domElement),D.dispose(),it.dispose(),V.dispose(),v.current=null,z.current=null}},[B]),Ke.useEffect(()=>{const w=z.current;w&&(w.uniforms.uFlakeSize.value=e,w.uniforms.uMinFlakeSize.value=i,w.uniforms.uPixelResolution.value=r,w.uniforms.uSpeed.value=l,w.uniforms.uDepthFade.value=c,w.uniforms.uFarPlane.value=h,w.uniforms.uBrightness.value=d,w.uniforms.uGamma.value=m,w.uniforms.uDensity.value=p,w.uniforms.uVariant.value=O,w.uniforms.uDirection.value=_*Math.PI/180,w.uniforms.uColor.value.copy(F))},[e,i,r,l,c,h,d,m,p,O,_,F]),ie.jsx("div",{ref:R,className:`pixel-snow-container ${S}`,style:E})}const AA="https://raw.githubusercontent.com/rashddy/gift-card/gh-pages/You%20Make%20It%20Right.mp3",RA="101325",CA=`My BabyMhieemaaaa,

Happy monthsary my love. Today I just want to slow down and speak from my heart because you mean so much to me and this month together reminds me how lucky I am to have you in my life. I know I am not perfect and there are times when I made small mistakes that grew bigger because of my jealousy and my fear of losing you. The hardest part for me to accept is that there were moments when I caused you pain without even realizing it and that truth hurts me deeply. I regret those moments more than I can explain because the last thing I ever want is to be the reason you feel sad or heavy or unloved. I am sorry for the times I did not think enough before reacting and for the times my emotions spoke louder than my care. Please know that none of it came from a lack of love but from loving you so much that I am still learning how to love you the right way. I am learning how to be more patient more understanding and more gentle with your heart because you deserve peace and safety when you are with me. Thank you for staying thank you for trying and thank you for loving me even when I still have so much to work on. I promise that I am choosing you every day and I am choosing to grow not just for myself but for us. I love you deeply in a way that is calm and real and I hope that as we continue this journey you always feel how important you are to me. Happy monthsary my love and I hope we create more memories filled with warmth laughter and healing together.,
Your One & Only 💕`,DA="My Love";function __(){const[o,e]=Ke.useState([]);return Ke.useEffect(()=>{const r=setInterval(()=>{const l=Date.now()+Math.random(),c={id:l,left:Math.random()*100,animationDuration:3+Math.random()*4,size:12+Math.random()*16,opacity:.3+Math.random()*.4};e(h=>[...h,c]),setTimeout(()=>{e(h=>h.filter(d=>d.id!==l))},c.animationDuration*1e3)},800);return()=>clearInterval(r)},[]),ie.jsx("div",{className:"floating-hearts",children:o.map(i=>ie.jsx("span",{className:"floating-heart",style:{left:`${i.left}%`,animationDuration:`${i.animationDuration}s`,fontSize:`${i.size}px`,opacity:i.opacity},children:"💕"},i.id))})}function wA(){const[o,e]=Ke.useState(""),[i,r]=Ke.useState(!1),[l,c]=Ke.useState(""),[h,d]=Ke.useState(!1),[m,p]=Ke.useState(0),[x,_]=Ke.useState(!1),S=Ke.useRef(null);Ke.useEffect(()=>{const v=new Audio(AA);v.loop=!0,v.volume=.3,S.current=v,(async()=>{try{await v.play(),_(!0)}catch{console.log("Autoplay blocked, waiting for user interaction")}})();const L=async()=>{if(!x&&S.current)try{await S.current.play(),_(!0)}catch{console.log("Could not play audio")}document.removeEventListener("click",L),document.removeEventListener("touchstart",L)};return document.addEventListener("click",L),document.addEventListener("touchstart",L),()=>{v.pause(),v.src="",document.removeEventListener("click",L),document.removeEventListener("touchstart",L)}},[]);const E=()=>{S.current&&(x?(S.current.pause(),_(!1)):(S.current.play(),_(!0)))},R=["Not quite , Some days become memories forever… try that one.💫","Almost there its really important to us ...I know your heart knows the way 🌸","That's not it, but don't give up on love...The key is a day that changed everything for us. 💝","The right code will reveal something special... 🌷","Keep believing... some treasures need patience 🦋"],C=v=>{v.preventDefault(),o.trim().toUpperCase()===RA.toUpperCase()?(r(!0),c("")):(d(!0),p(z=>z+1),c(R[m%R.length]),setTimeout(()=>d(!1),500))},M=v=>{e(v.target.value),l&&c("")};return i?ie.jsxs(ie.Fragment,{children:[ie.jsx(g_,{className:"snow-background",color:"#ffffff",variant:"round",flakeSize:.015,minFlakeSize:1.5,pixelResolution:280,speed:.6,density:.25,brightness:1.5,gamma:.5,depthFade:12,style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}}),ie.jsx("button",{className:"music-toggle",onClick:E,"aria-label":"Toggle music",children:x?"🔊":"🔇"}),ie.jsxs("div",{className:"gift-card unlocked",children:[ie.jsx(__,{}),ie.jsxs("div",{className:"card-content",children:[ie.jsx("div",{className:"unlock-animation",children:ie.jsx("span",{className:"big-heart",children:"💝"})}),ie.jsxs("h1",{className:"recipient-name",children:["For ",DA]}),ie.jsxs("div",{className:"message-container",children:[ie.jsx("div",{className:"ribbon top-ribbon"}),ie.jsx("p",{className:"secret-message",children:CA}),ie.jsx("div",{className:"ribbon bottom-ribbon"})]}),ie.jsxs("div",{className:"decorative-footer",children:[ie.jsx("span",{children:"✨"}),ie.jsx("span",{children:"💕"}),ie.jsx("span",{children:"✨"})]})]})]})]}):ie.jsxs(ie.Fragment,{children:[ie.jsx(g_,{className:"snow-background",color:"#ffffff",variant:"round",flakeSize:.015,minFlakeSize:1.5,pixelResolution:280,speed:.6,density:.25,brightness:1.5,gamma:.5,depthFade:12,style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}}),ie.jsx("button",{className:"music-toggle",onClick:E,"aria-label":"Toggle music",children:x?"🔊":"🔇"}),ie.jsxs("div",{className:"gift-card locked",children:[ie.jsx(__,{}),ie.jsxs("div",{className:"card-content",children:[ie.jsxs("div",{className:"gift-icon",children:[ie.jsx("span",{className:"gift-emoji",children:"🎁"}),ie.jsx("div",{className:"gift-glow"})]}),ie.jsx("h1",{className:"title",children:"A Special Gift Awaits"}),ie.jsx("p",{className:"subtitle",children:"Enter your secret code to unlock something magical..."}),ie.jsx("p",{className:"subtitle",children:"The key is a day that changed everything for us."}),ie.jsxs("form",{onSubmit:C,className:"code-form",children:[ie.jsxs("div",{className:`input-wrapper ${h?"shake":""}`,children:[ie.jsx("input",{type:"text",value:o,onChange:M,placeholder:"Enter gift code...",className:"code-input",autoComplete:"off",spellCheck:"false"}),ie.jsx("span",{className:"input-icon",children:"🔐"})]}),ie.jsxs("button",{type:"submit",className:"unlock-btn",children:[ie.jsx("span",{children:"Unlock My Gift"}),ie.jsx("span",{className:"btn-icon",children:"💌"})]})]}),l&&ie.jsx("p",{className:"error-message",children:l}),ie.jsx("p",{className:"hint-text",children:"Someone special has a message waiting just for you"})]})]})]})}fS.createRoot(document.getElementById("root")).render(ie.jsx(Ke.StrictMode,{children:ie.jsx(wA,{})}));
