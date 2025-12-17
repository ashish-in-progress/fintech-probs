(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function l(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=l(s);fetch(s.href,c)}})();function ko(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ps={exports:{}},Tl={};var ep;function H0(){if(ep)return Tl;ep=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(o,s,c){var f=null;if(c!==void 0&&(f=""+c),s.key!==void 0&&(f=""+s.key),"key"in s){c={};for(var h in s)h!=="key"&&(c[h]=s[h])}else c=s;return s=c.ref,{$$typeof:n,type:o,key:f,ref:s!==void 0?s:null,props:c}}return Tl.Fragment=r,Tl.jsx=l,Tl.jsxs=l,Tl}var tp;function j0(){return tp||(tp=1,Ps.exports=H0()),Ps.exports}var K=j0(),Ks={exports:{}},ge={};var np;function q0(){if(np)return ge;np=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function b(w){return w===null||typeof w!="object"?null:(w=x&&w[x]||w["@@iterator"],typeof w=="function"?w:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,O={};function R(w,Y,A){this.props=w,this.context=Y,this.refs=O,this.updater=A||T}R.prototype.isReactComponent={},R.prototype.setState=function(w,Y){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,Y,"setState")},R.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function H(){}H.prototype=R.prototype;function B(w,Y,A){this.props=w,this.context=Y,this.refs=O,this.updater=A||T}var ne=B.prototype=new H;ne.constructor=B,L(ne,R.prototype),ne.isPureReactComponent=!0;var ae=Array.isArray;function j(){}var W={H:null,A:null,T:null,S:null},de=Object.prototype.hasOwnProperty;function me(w,Y,A){var te=A.ref;return{$$typeof:n,type:w,key:Y,ref:te!==void 0?te:null,props:A}}function I(w,Y){return me(w.type,Y,w.props)}function $(w){return typeof w=="object"&&w!==null&&w.$$typeof===n}function ee(w){var Y={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(A){return Y[A]})}var xe=/\/+/g;function le(w,Y){return typeof w=="object"&&w!==null&&w.key!=null?ee(""+w.key):Y.toString(36)}function Z(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(j,j):(w.status="pending",w.then(function(Y){w.status==="pending"&&(w.status="fulfilled",w.value=Y)},function(Y){w.status==="pending"&&(w.status="rejected",w.reason=Y)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function N(w,Y,A,te,he){var ue=typeof w;(ue==="undefined"||ue==="boolean")&&(w=null);var we=!1;if(w===null)we=!0;else switch(ue){case"bigint":case"string":case"number":we=!0;break;case"object":switch(w.$$typeof){case n:case r:we=!0;break;case v:return we=w._init,N(we(w._payload),Y,A,te,he)}}if(we)return he=he(w),we=te===""?"."+le(w,0):te,ae(he)?(A="",we!=null&&(A=we.replace(xe,"$&/")+"/"),N(he,Y,A,"",function(qt){return qt})):he!=null&&($(he)&&(he=I(he,A+(he.key==null||w&&w.key===he.key?"":(""+he.key).replace(xe,"$&/")+"/")+we)),Y.push(he)),1;we=0;var Ke=te===""?".":te+":";if(ae(w))for(var Be=0;Be<w.length;Be++)te=w[Be],ue=Ke+le(te,Be),we+=N(te,Y,A,ue,he);else if(Be=b(w),typeof Be=="function")for(w=Be.call(w),Be=0;!(te=w.next()).done;)te=te.value,ue=Ke+le(te,Be++),we+=N(te,Y,A,ue,he);else if(ue==="object"){if(typeof w.then=="function")return N(Z(w),Y,A,te,he);throw Y=String(w),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return we}function X(w,Y,A){if(w==null)return w;var te=[],he=0;return N(w,te,"","",function(ue){return Y.call(A,ue,he++)}),te}function oe(w){if(w._status===-1){var Y=w._result;Y=Y(),Y.then(function(A){(w._status===0||w._status===-1)&&(w._status=1,w._result=A)},function(A){(w._status===0||w._status===-1)&&(w._status=2,w._result=A)}),w._status===-1&&(w._status=0,w._result=Y)}if(w._status===1)return w._result.default;throw w._result}var Se=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},k={map:X,forEach:function(w,Y,A){X(w,function(){Y.apply(this,arguments)},A)},count:function(w){var Y=0;return X(w,function(){Y++}),Y},toArray:function(w){return X(w,function(Y){return Y})||[]},only:function(w){if(!$(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ge.Activity=g,ge.Children=k,ge.Component=R,ge.Fragment=l,ge.Profiler=s,ge.PureComponent=B,ge.StrictMode=o,ge.Suspense=p,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,ge.__COMPILER_RUNTIME={__proto__:null,c:function(w){return W.H.useMemoCache(w)}},ge.cache=function(w){return function(){return w.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(w,Y,A){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var te=L({},w.props),he=w.key;if(Y!=null)for(ue in Y.key!==void 0&&(he=""+Y.key),Y)!de.call(Y,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&Y.ref===void 0||(te[ue]=Y[ue]);var ue=arguments.length-2;if(ue===1)te.children=A;else if(1<ue){for(var we=Array(ue),Ke=0;Ke<ue;Ke++)we[Ke]=arguments[Ke+2];te.children=we}return me(w.type,he,te)},ge.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:c,_context:w},w},ge.createElement=function(w,Y,A){var te,he={},ue=null;if(Y!=null)for(te in Y.key!==void 0&&(ue=""+Y.key),Y)de.call(Y,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(he[te]=Y[te]);var we=arguments.length-2;if(we===1)he.children=A;else if(1<we){for(var Ke=Array(we),Be=0;Be<we;Be++)Ke[Be]=arguments[Be+2];he.children=Ke}if(w&&w.defaultProps)for(te in we=w.defaultProps,we)he[te]===void 0&&(he[te]=we[te]);return me(w,ue,he)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(w){return{$$typeof:h,render:w}},ge.isValidElement=$,ge.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:oe}},ge.memo=function(w,Y){return{$$typeof:m,type:w,compare:Y===void 0?null:Y}},ge.startTransition=function(w){var Y=W.T,A={};W.T=A;try{var te=w(),he=W.S;he!==null&&he(A,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(j,Se)}catch(ue){Se(ue)}finally{Y!==null&&A.types!==null&&(Y.types=A.types),W.T=Y}},ge.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},ge.use=function(w){return W.H.use(w)},ge.useActionState=function(w,Y,A){return W.H.useActionState(w,Y,A)},ge.useCallback=function(w,Y){return W.H.useCallback(w,Y)},ge.useContext=function(w){return W.H.useContext(w)},ge.useDebugValue=function(){},ge.useDeferredValue=function(w,Y){return W.H.useDeferredValue(w,Y)},ge.useEffect=function(w,Y){return W.H.useEffect(w,Y)},ge.useEffectEvent=function(w){return W.H.useEffectEvent(w)},ge.useId=function(){return W.H.useId()},ge.useImperativeHandle=function(w,Y,A){return W.H.useImperativeHandle(w,Y,A)},ge.useInsertionEffect=function(w,Y){return W.H.useInsertionEffect(w,Y)},ge.useLayoutEffect=function(w,Y){return W.H.useLayoutEffect(w,Y)},ge.useMemo=function(w,Y){return W.H.useMemo(w,Y)},ge.useOptimistic=function(w,Y){return W.H.useOptimistic(w,Y)},ge.useReducer=function(w,Y,A){return W.H.useReducer(w,Y,A)},ge.useRef=function(w){return W.H.useRef(w)},ge.useState=function(w){return W.H.useState(w)},ge.useSyncExternalStore=function(w,Y,A){return W.H.useSyncExternalStore(w,Y,A)},ge.useTransition=function(){return W.H.useTransition()},ge.version="19.2.3",ge}var ap;function zc(){return ap||(ap=1,Ks.exports=q0()),Ks.exports}var V=zc();const Y0=ko(V);var Xs={exports:{}},wl={},Qs={exports:{}},Zs={};var ip;function G0(){return ip||(ip=1,(function(n){function r(N,X){var oe=N.length;N.push(X);e:for(;0<oe;){var Se=oe-1>>>1,k=N[Se];if(0<s(k,X))N[Se]=X,N[oe]=k,oe=Se;else break e}}function l(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var X=N[0],oe=N.pop();if(oe!==X){N[0]=oe;e:for(var Se=0,k=N.length,w=k>>>1;Se<w;){var Y=2*(Se+1)-1,A=N[Y],te=Y+1,he=N[te];if(0>s(A,oe))te<k&&0>s(he,A)?(N[Se]=he,N[te]=oe,Se=te):(N[Se]=A,N[Y]=oe,Se=Y);else if(te<k&&0>s(he,oe))N[Se]=he,N[te]=oe,Se=te;else break e}}return X}function s(N,X){var oe=N.sortIndex-X.sortIndex;return oe!==0?oe:N.id-X.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var p=[],m=[],v=1,g=null,x=3,b=!1,T=!1,L=!1,O=!1,R=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function ne(N){for(var X=l(m);X!==null;){if(X.callback===null)o(m);else if(X.startTime<=N)o(m),X.sortIndex=X.expirationTime,r(p,X);else break;X=l(m)}}function ae(N){if(L=!1,ne(N),!T)if(l(p)!==null)T=!0,j||(j=!0,ee());else{var X=l(m);X!==null&&Z(ae,X.startTime-N)}}var j=!1,W=-1,de=5,me=-1;function I(){return O?!0:!(n.unstable_now()-me<de)}function $(){if(O=!1,j){var N=n.unstable_now();me=N;var X=!0;try{e:{T=!1,L&&(L=!1,H(W),W=-1),b=!0;var oe=x;try{t:{for(ne(N),g=l(p);g!==null&&!(g.expirationTime>N&&I());){var Se=g.callback;if(typeof Se=="function"){g.callback=null,x=g.priorityLevel;var k=Se(g.expirationTime<=N);if(N=n.unstable_now(),typeof k=="function"){g.callback=k,ne(N),X=!0;break t}g===l(p)&&o(p),ne(N)}else o(p);g=l(p)}if(g!==null)X=!0;else{var w=l(m);w!==null&&Z(ae,w.startTime-N),X=!1}}break e}finally{g=null,x=oe,b=!1}X=void 0}}finally{X?ee():j=!1}}}var ee;if(typeof B=="function")ee=function(){B($)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,le=xe.port2;xe.port1.onmessage=$,ee=function(){le.postMessage(null)}}else ee=function(){R($,0)};function Z(N,X){W=R(function(){N(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(N){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var oe=x;x=X;try{return N()}finally{x=oe}},n.unstable_requestPaint=function(){O=!0},n.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var oe=x;x=N;try{return X()}finally{x=oe}},n.unstable_scheduleCallback=function(N,X,oe){var Se=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Se+oe:Se):oe=Se,N){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=oe+k,N={id:v++,callback:X,priorityLevel:N,startTime:oe,expirationTime:k,sortIndex:-1},oe>Se?(N.sortIndex=oe,r(m,N),l(p)===null&&N===l(m)&&(L?(H(W),W=-1):L=!0,Z(ae,oe-Se))):(N.sortIndex=k,r(p,N),T||b||(T=!0,j||(j=!0,ee()))),N},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(N){var X=x;return function(){var oe=x;x=X;try{return N.apply(this,arguments)}finally{x=oe}}}})(Zs)),Zs}var lp;function F0(){return lp||(lp=1,Qs.exports=G0()),Qs.exports}var Js={exports:{}},ht={};var rp;function V0(){if(rp)return ht;rp=1;var n=zc();function r(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(p,m,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:p,containerInfo:m,implementation:v}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ht.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return c(p,m,null,v)},ht.flushSync=function(p){var m=f.T,v=o.p;try{if(f.T=null,o.p=2,p)return p()}finally{f.T=m,o.p=v,o.d.f()}},ht.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(p,m))},ht.prefetchDNS=function(p){typeof p=="string"&&o.d.D(p)},ht.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,g=h(v,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?o.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:b}):v==="script"&&o.d.X(p,{crossOrigin:g,integrity:x,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ht.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=h(m.as,m.crossOrigin);o.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(p)},ht.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,g=h(v,m.crossOrigin);o.d.L(p,v,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ht.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=h(m.as,m.crossOrigin);o.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(p)},ht.requestFormReset=function(p){o.d.r(p)},ht.unstable_batchedUpdates=function(p,m){return p(m)},ht.useFormState=function(p,m,v){return f.H.useFormState(p,m,v)},ht.useFormStatus=function(){return f.H.useHostTransitionStatus()},ht.version="19.2.3",ht}var op;function P0(){if(op)return Js.exports;op=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Js.exports=V0(),Js.exports}var up;function K0(){if(up)return wl;up=1;var n=F0(),r=zc(),l=P0();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,i=t;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(i=u.return,i!==null){a=i;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),e;if(d===i)return p(u),t;d=d.sibling}throw Error(o(188))}if(a.return!==i.return)a=u,i=d;else{for(var y=!1,S=u.child;S;){if(S===a){y=!0,a=u,i=d;break}if(S===i){y=!0,i=u,a=d;break}S=S.sibling}if(!y){for(S=d.child;S;){if(S===a){y=!0,a=d,i=u;break}if(S===i){y=!0,i=d,a=u;break}S=S.sibling}if(!y)throw Error(o(189))}}if(a.alternate!==i)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),B=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case R:return"Profiler";case O:return"StrictMode";case ae:return"Suspense";case j:return"SuspenseList";case me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case B:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var Z=Array.isArray,N=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},Se=[],k=-1;function w(e){return{current:e}}function Y(e){0>k||(e.current=Se[k],Se[k]=null,k--)}function A(e,t){k++,Se[k]=e.current,e.current=t}var te=w(null),he=w(null),ue=w(null),we=w(null);function Ke(e,t){switch(A(ue,t),A(he,e),A(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?kh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=kh(t),e=Ch(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(te),A(te,e)}function Be(){Y(te),Y(he),Y(ue)}function qt(e){e.memoizedState!==null&&A(we,e);var t=te.current,a=Ch(t,e.type);t!==a&&(A(he,e),A(te,a))}function hn(e){he.current===e&&(Y(te),Y(he)),we.current===e&&(Y(we),xl._currentValue=oe)}var Oi,Gl;function pn(e){if(Oi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Oi=t&&t[1]||"",Gl=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Oi+e+Gl}var _a=!1;function Na(e,t){if(!e||_a)return"";_a=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(U){var _=U}Reflect.construct(e,[],P)}else{try{P.call()}catch(U){_=U}e.call(P.prototype)}}else{try{throw Error()}catch(U){_=U}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(U){if(U&&_&&typeof U.stack=="string")return[U.stack,_.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=i.DetermineComponentFrameRoot(),y=d[0],S=d[1];if(y&&S){var C=y.split(`
`),z=S.split(`
`);for(u=i=0;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;for(;u<z.length&&!z[u].includes("DetermineComponentFrameRoot");)u++;if(i===C.length||u===z.length)for(i=C.length-1,u=z.length-1;1<=i&&0<=u&&C[i]!==z[u];)u--;for(;1<=i&&0<=u;i--,u--)if(C[i]!==z[u]){if(i!==1||u!==1)do if(i--,u--,0>u||C[i]!==z[u]){var q=`
`+C[i].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=i&&0<=u);break}}}finally{_a=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pn(a):""}function Fl(e,t){switch(e.tag){case 26:case 27:case 5:return pn(e.type);case 16:return pn("Lazy");case 13:return e.child!==t&&t!==null?pn("Suspense Fallback"):pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return Na(e.type,!1);case 11:return Na(e.type.render,!1);case 1:return Na(e.type,!0);case 31:return pn("Activity");default:return""}}function Vl(e){try{var t="",a=null;do t+=Fl(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ia=Object.prototype.hasOwnProperty,Ba=n.unstable_scheduleCallback,Li=n.unstable_cancelCallback,zo=n.unstable_shouldYield,Oo=n.unstable_requestPaint,yt=n.unstable_now,Lo=n.unstable_getCurrentPriorityLevel,G=n.unstable_ImmediatePriority,J=n.unstable_UserBlockingPriority,pe=n.unstable_NormalPriority,Ae=n.unstable_LowPriority,_e=n.unstable_IdlePriority,zt=n.log,gn=n.unstable_setDisableYieldValue,vt=null,lt=null;function xt(e){if(typeof zt=="function"&&gn(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(vt,e)}catch{}}var qe=Math.clz32?Math.clz32:Ty,Hn=Math.log,tn=Math.LN2;function Ty(e){return e>>>=0,e===0?32:31-(Hn(e)/tn|0)|0}var Pl=256,Kl=262144,Xl=4194304;function ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ql(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var u=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var S=i&134217727;return S!==0?(i=S&~d,i!==0?u=ma(i):(y&=S,y!==0?u=ma(y):a||(a=S&~e,a!==0&&(u=ma(a))))):(S=i&~d,S!==0?u=ma(S):y!==0?u=ma(y):a||(a=i&~e,a!==0&&(u=ma(a)))),u===0?0:t!==0&&t!==u&&(t&d)===0&&(d=u&-u,a=t&-t,d>=a||d===32&&(a&4194048)!==0)?t:u}function _i(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function af(){var e=Xl;return Xl<<=1,(Xl&62914560)===0&&(Xl=4194304),e}function _o(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ni(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ey(e,t,a,i,u,d){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var S=e.entanglements,C=e.expirationTimes,z=e.hiddenUpdates;for(a=y&~a;0<a;){var q=31-qe(a),P=1<<q;S[q]=0,C[q]=-1;var _=z[q];if(_!==null)for(z[q]=null,q=0;q<_.length;q++){var U=_[q];U!==null&&(U.lane&=-536870913)}a&=~P}i!==0&&lf(e,i,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~t))}function lf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-qe(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function rf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-qe(a),u=1<<i;u&t|e[i]&t&&(e[i]|=t),a&=~u}}function of(e,t){var a=t&-t;return a=(a&42)!==0?1:No(a),(a&(e.suspendedLanes|t))!==0?0:a}function No(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Io(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uf(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Kh(e.type))}function sf(e,t){var a=X.p;try{return X.p=e,t()}finally{X.p=a}}var jn=Math.random().toString(36).slice(2),st="__reactFiber$"+jn,At="__reactProps$"+jn,Ua="__reactContainer$"+jn,Bo="__reactEvents$"+jn,Ry="__reactListeners$"+jn,My="__reactHandles$"+jn,cf="__reactResources$"+jn,Ii="__reactMarker$"+jn;function Uo(e){delete e[st],delete e[At],delete e[Bo],delete e[Ry],delete e[My]}function Ha(e){var t=e[st];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ua]||a[st]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=zh(e);e!==null;){if(a=e[st])return a;e=zh(e)}return t}e=a,a=e.parentNode}return null}function ja(e){if(e=e[st]||e[Ua]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function qa(e){var t=e[cf];return t||(t=e[cf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[Ii]=!0}var ff=new Set,df={};function ha(e,t){Ya(e,t),Ya(e+"Capture",t)}function Ya(e,t){for(df[e]=t,e=0;e<t.length;e++)ff.add(t[e])}var Dy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mf={},hf={};function zy(e){return Ia.call(hf,e)?!0:Ia.call(mf,e)?!1:Dy.test(e)?hf[e]=!0:(mf[e]=!0,!1)}function Zl(e,t,a){if(zy(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Jl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function yn(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oy(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,d=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ho(e){if(!e._valueTracker){var t=pf(e)?"checked":"value";e._valueTracker=Oy(e,t,""+e[t])}}function gf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=pf(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ly=/[\n"\\]/g;function Gt(e){return e.replace(Ly,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jo(e,t,a,i,u,d,y,S){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yt(t)):e.value!==""+Yt(t)&&(e.value=""+Yt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?qo(e,y,Yt(t)):a!=null?qo(e,y,Yt(a)):i!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Yt(S):e.removeAttribute("name")}function yf(e,t,a,i,u,d,y,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||t!=null)){Ho(e);return}a=a!=null?""+Yt(a):"",t=t!=null?""+Yt(t):a,S||t===e.value||(e.value=t),e.defaultValue=t}i=i??u,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=S?e.checked:!!i,e.defaultChecked=!!i,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Ho(e)}function qo(e,t,a){t==="number"&&Wl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ga(e,t,a,i){if(e=e.options,t){t={};for(var u=0;u<a.length;u++)t["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=t.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Yt(a),t=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,i&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function vf(e,t,a){if(t!=null&&(t=""+Yt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Yt(a):""}function bf(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(o(92));if(Z(i)){if(1<i.length)throw Error(o(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Yt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Ho(e)}function Fa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var _y=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sf(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||_y.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function xf(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var u in t)i=t[u],t.hasOwnProperty(u)&&a[u]!==i&&Sf(e,u,i)}else for(var d in t)t.hasOwnProperty(d)&&Sf(e,d,t[d])}function Yo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(e){return Iy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function vn(){}var Go=null;function Fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Va=null,Pa=null;function Af(e){var t=ja(e);if(t&&(e=t.stateNode)){var a=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(jo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var u=i[At]||null;if(!u)throw Error(o(90));jo(i,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&gf(i)}break e;case"textarea":vf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ga(e,!!a.multiple,t,!1)}}}var Vo=!1;function kf(e,t,a){if(Vo)return e(t,a);Vo=!0;try{var i=e(t);return i}finally{if(Vo=!1,(Va!==null||Pa!==null)&&(jr(),Va&&(t=Va,e=Pa,Pa=Va=null,Af(t),e)))for(t=0;t<e.length;t++)Af(e[t])}}function Ui(e,t){var a=e.stateNode;if(a===null)return null;var i=a[At]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=!1;if(bn)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Po=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Po=!1}var qn=null,Ko=null,er=null;function Cf(){if(er)return er;var e,t=Ko,a=t.length,i,u="value"in qn?qn.value:qn.textContent,d=u.length;for(e=0;e<a&&t[e]===u[e];e++);var y=a-e;for(i=1;i<=y&&t[a-i]===u[d-i];i++);return er=u.slice(e,1<i?1-i:void 0)}function tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nr(){return!0}function Tf(){return!1}function kt(e){function t(a,i,u,d,y){this._reactName=a,this._targetInst=u,this.type=i,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(a=e[S],this[S]=a?a(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?nr:Tf,this.isPropagationStopped=Tf,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nr)},persist:function(){},isPersistent:nr}),t}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ar=kt(pa),ji=g({},pa,{view:0,detail:0}),By=kt(ji),Xo,Qo,qi,ir=g({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qi&&(qi&&e.type==="mousemove"?(Xo=e.screenX-qi.screenX,Qo=e.screenY-qi.screenY):Qo=Xo=0,qi=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Qo}}),wf=kt(ir),Uy=g({},ir,{dataTransfer:0}),Hy=kt(Uy),jy=g({},ji,{relatedTarget:0}),Zo=kt(jy),qy=g({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Yy=kt(qy),Gy=g({},pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fy=kt(Gy),Vy=g({},pa,{data:0}),Ef=kt(Vy),Py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xy[e])?!!t[e]:!1}function Jo(){return Qy}var Zy=g({},ji,{key:function(e){if(e.key){var t=Py[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ky[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jo,charCode:function(e){return e.type==="keypress"?tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jy=kt(Zy),Wy=g({},ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rf=kt(Wy),$y=g({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jo}),e1=kt($y),t1=g({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),n1=kt(t1),a1=g({},ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),i1=kt(a1),l1=g({},pa,{newState:0,oldState:0}),r1=kt(l1),o1=[9,13,27,32],Wo=bn&&"CompositionEvent"in window,Yi=null;bn&&"documentMode"in document&&(Yi=document.documentMode);var u1=bn&&"TextEvent"in window&&!Yi,Mf=bn&&(!Wo||Yi&&8<Yi&&11>=Yi),Df=" ",zf=!1;function Of(e,t){switch(e){case"keyup":return o1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function s1(e,t){switch(e){case"compositionend":return Lf(t);case"keypress":return t.which!==32?null:(zf=!0,Df);case"textInput":return e=t.data,e===Df&&zf?null:e;default:return null}}function c1(e,t){if(Ka)return e==="compositionend"||!Wo&&Of(e,t)?(e=Cf(),er=Ko=qn=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mf&&t.locale!=="ko"?null:t.data;default:return null}}var f1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f1[e.type]:t==="textarea"}function Nf(e,t,a,i){Va?Pa?Pa.push(i):Pa=[i]:Va=i,t=Kr(t,"onChange"),0<t.length&&(a=new ar("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Gi=null,Fi=null;function d1(e){yh(e,0)}function lr(e){var t=Bi(e);if(gf(t))return e}function If(e,t){if(e==="change")return t}var Bf=!1;if(bn){var $o;if(bn){var eu="oninput"in document;if(!eu){var Uf=document.createElement("div");Uf.setAttribute("oninput","return;"),eu=typeof Uf.oninput=="function"}$o=eu}else $o=!1;Bf=$o&&(!document.documentMode||9<document.documentMode)}function Hf(){Gi&&(Gi.detachEvent("onpropertychange",jf),Fi=Gi=null)}function jf(e){if(e.propertyName==="value"&&lr(Fi)){var t=[];Nf(t,Fi,e,Fo(e)),kf(d1,t)}}function m1(e,t,a){e==="focusin"?(Hf(),Gi=t,Fi=a,Gi.attachEvent("onpropertychange",jf)):e==="focusout"&&Hf()}function h1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lr(Fi)}function p1(e,t){if(e==="click")return lr(t)}function g1(e,t){if(e==="input"||e==="change")return lr(t)}function y1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:y1;function Vi(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var u=a[i];if(!Ia.call(t,u)||!Ot(e[u],t[u]))return!1}return!0}function qf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yf(e,t){var a=qf(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qf(a)}}function Gf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ff(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wl(e.document)}return t}function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var v1=bn&&"documentMode"in document&&11>=document.documentMode,Xa=null,nu=null,Pi=null,au=!1;function Vf(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||Xa==null||Xa!==Wl(i)||(i=Xa,"selectionStart"in i&&tu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pi&&Vi(Pi,i)||(Pi=i,i=Kr(nu,"onSelect"),0<i.length&&(t=new ar("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Xa)))}function ga(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Qa={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionrun:ga("Transition","TransitionRun"),transitionstart:ga("Transition","TransitionStart"),transitioncancel:ga("Transition","TransitionCancel"),transitionend:ga("Transition","TransitionEnd")},iu={},Pf={};bn&&(Pf=document.createElement("div").style,"AnimationEvent"in window||(delete Qa.animationend.animation,delete Qa.animationiteration.animation,delete Qa.animationstart.animation),"TransitionEvent"in window||delete Qa.transitionend.transition);function ya(e){if(iu[e])return iu[e];if(!Qa[e])return e;var t=Qa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Pf)return iu[e]=t[a];return e}var Kf=ya("animationend"),Xf=ya("animationiteration"),Qf=ya("animationstart"),b1=ya("transitionrun"),S1=ya("transitionstart"),x1=ya("transitioncancel"),Zf=ya("transitionend"),Jf=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function nn(e,t){Jf.set(e,t),ha(t,[e])}var rr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ft=[],Za=0,ru=0;function or(){for(var e=Za,t=ru=Za=0;t<e;){var a=Ft[t];Ft[t++]=null;var i=Ft[t];Ft[t++]=null;var u=Ft[t];Ft[t++]=null;var d=Ft[t];if(Ft[t++]=null,i!==null&&u!==null){var y=i.pending;y===null?u.next=u:(u.next=y.next,y.next=u),i.pending=u}d!==0&&Wf(a,u,d)}}function ur(e,t,a,i){Ft[Za++]=e,Ft[Za++]=t,Ft[Za++]=a,Ft[Za++]=i,ru|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ou(e,t,a,i){return ur(e,t,a,i),sr(e)}function va(e,t){return ur(e,null,null,t),sr(e)}function Wf(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,i=d.alternate,i!==null&&(i.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&t!==null&&(u=31-qe(a),e=d.hiddenUpdates,i=e[u],i===null?e[u]=[t]:i.push(t),t.lane=a|536870912),d):null}function sr(e){if(50<hl)throw hl=0,gs=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ja={};function A1(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,a,i){return new A1(e,t,a,i)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sn(e,t){var a=e.alternate;return a===null?(a=Lt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $f(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cr(e,t,a,i,u,d){var y=0;if(i=e,typeof e=="function")uu(e)&&(y=1);else if(typeof e=="string")y=E0(e,a,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case me:return e=Lt(31,a,t,u),e.elementType=me,e.lanes=d,e;case L:return ba(a.children,u,d,t);case O:y=8,u|=24;break;case R:return e=Lt(12,a,t,u|2),e.elementType=R,e.lanes=d,e;case ae:return e=Lt(13,a,t,u),e.elementType=ae,e.lanes=d,e;case j:return e=Lt(19,a,t,u),e.elementType=j,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:y=10;break e;case H:y=9;break e;case ne:y=11;break e;case W:y=14;break e;case de:y=16,i=null;break e}y=29,a=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Lt(y,a,t,u),t.elementType=e,t.type=i,t.lanes=d,t}function ba(e,t,a,i){return e=Lt(7,e,i,t),e.lanes=a,e}function su(e,t,a){return e=Lt(6,e,null,t),e.lanes=a,e}function ed(e){var t=Lt(18,null,null,0);return t.stateNode=e,t}function cu(e,t,a){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var td=new WeakMap;function Vt(e,t){if(typeof e=="object"&&e!==null){var a=td.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Vl(t)},td.set(e,t),t)}return{value:e,source:t,stack:Vl(t)}}var Wa=[],$a=0,fr=null,Ki=0,Pt=[],Kt=0,Yn=null,un=1,sn="";function xn(e,t){Wa[$a++]=Ki,Wa[$a++]=fr,fr=e,Ki=t}function nd(e,t,a){Pt[Kt++]=un,Pt[Kt++]=sn,Pt[Kt++]=Yn,Yn=e;var i=un;e=sn;var u=32-qe(i)-1;i&=~(1<<u),a+=1;var d=32-qe(t)+u;if(30<d){var y=u-u%5;d=(i&(1<<y)-1).toString(32),i>>=y,u-=y,un=1<<32-qe(t)+u|a<<u|i,sn=d+e}else un=1<<d|a<<u|i,sn=e}function fu(e){e.return!==null&&(xn(e,1),nd(e,1,0))}function du(e){for(;e===fr;)fr=Wa[--$a],Wa[$a]=null,Ki=Wa[--$a],Wa[$a]=null;for(;e===Yn;)Yn=Pt[--Kt],Pt[Kt]=null,sn=Pt[--Kt],Pt[Kt]=null,un=Pt[--Kt],Pt[Kt]=null}function ad(e,t){Pt[Kt++]=un,Pt[Kt++]=sn,Pt[Kt++]=Yn,un=t.id,sn=t.overflow,Yn=e}var ct=null,Ve=null,Me=!1,Gn=null,Xt=!1,mu=Error(o(519));function Fn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xi(Vt(t,e)),mu}function id(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[st]=e,t[At]=i,a){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(a=0;a<gl.length;a++)Ce(gl[a],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),yf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),bf(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||xh(t.textContent,a)?(i.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),i.onScroll!=null&&Ce("scroll",t),i.onScrollEnd!=null&&Ce("scrollend",t),i.onClick!=null&&(t.onclick=vn),t=!0):t=!1,t||Fn(e,!0)}function ld(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:ct=ct.return}}function ei(e){if(e!==ct)return!1;if(!Me)return ld(e),Me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zs(e.type,e.memoizedProps)),a=!a),a&&Ve&&Fn(e),ld(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ve=Dh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ve=Dh(e)}else t===27?(t=Ve,ia(e.type)?(e=Is,Is=null,Ve=e):Ve=t):Ve=ct?Zt(e.stateNode.nextSibling):null;return!0}function Sa(){Ve=ct=null,Me=!1}function hu(){var e=Gn;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),Gn=null),e}function Xi(e){Gn===null?Gn=[e]:Gn.push(e)}var pu=w(null),xa=null,An=null;function Vn(e,t,a){A(pu,t._currentValue),t._currentValue=a}function kn(e){e._currentValue=pu.current,Y(pu)}function gu(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function yu(e,t,a,i){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var S=d;d=u;for(var C=0;C<t.length;C++)if(S.context===t[C]){d.lanes|=a,S=d.alternate,S!==null&&(S.lanes|=a),gu(d.return,a,e),i||(y=null);break e}d=S.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(o(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),gu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function ti(e,t,a,i){e=null;for(var u=t,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(o(387));if(y=y.memoizedProps,y!==null){var S=u.type;Ot(u.pendingProps.value,y.value)||(e!==null?e.push(S):e=[S])}}else if(u===we.current){if(y=u.alternate,y===null)throw Error(o(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(xl):e=[xl])}u=u.return}e!==null&&yu(t,e,a,i),t.flags|=262144}function dr(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){xa=e,An=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return rd(xa,e)}function mr(e,t){return xa===null&&Aa(e),rd(e,t)}function rd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},An===null){if(e===null)throw Error(o(308));An=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else An=An.next=t;return a}var k1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},C1=n.unstable_scheduleCallback,T1=n.unstable_NormalPriority,et={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vu(){return{controller:new k1,data:new Map,refCount:0}}function Qi(e){e.refCount--,e.refCount===0&&C1(T1,function(){e.controller.abort()})}var Zi=null,bu=0,ni=0,ai=null;function w1(e,t){if(Zi===null){var a=Zi=[];bu=0,ni=As(),ai={status:"pending",value:void 0,then:function(i){a.push(i)}}}return bu++,t.then(od,od),t}function od(){if(--bu===0&&Zi!==null){ai!==null&&(ai.status="fulfilled");var e=Zi;Zi=null,ni=0,ai=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function E1(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var u=0;u<a.length;u++)(0,a[u])(t)},function(u){for(i.status="rejected",i.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),i}var ud=N.S;N.S=function(e,t){Vm=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&w1(e,t),ud!==null&&ud(e,t)};var ka=w(null);function Su(){var e=ka.current;return e!==null?e:Ye.pooledCache}function hr(e,t){t===null?A(ka,ka.current):A(ka,t.pool)}function sd(){var e=Su();return e===null?null:{parent:et._currentValue,pool:e}}var ii=Error(o(460)),xu=Error(o(474)),pr=Error(o(542)),gr={then:function(){}};function cd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(vn,vn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,md(e),e;default:if(typeof t.status=="string")t.then(vn,vn);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=i}},function(i){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,md(e),e}throw Ta=t,ii}}function Ca(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ta=a,ii):a}}var Ta=null;function dd(){if(Ta===null)throw Error(o(459));var e=Ta;return Ta=null,e}function md(e){if(e===ii||e===pr)throw Error(o(483))}var li=null,Ji=0;function yr(e){var t=Ji;return Ji+=1,li===null&&(li=[]),fd(li,e,t)}function Wi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vr(e,t){throw t.$$typeof===x?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hd(e){function t(M,E){if(e){var D=M.deletions;D===null?(M.deletions=[E],M.flags|=16):D.push(E)}}function a(M,E){if(!e)return null;for(;E!==null;)t(M,E),E=E.sibling;return null}function i(M){for(var E=new Map;M!==null;)M.key!==null?E.set(M.key,M):E.set(M.index,M),M=M.sibling;return E}function u(M,E){return M=Sn(M,E),M.index=0,M.sibling=null,M}function d(M,E,D){return M.index=D,e?(D=M.alternate,D!==null?(D=D.index,D<E?(M.flags|=67108866,E):D):(M.flags|=67108866,E)):(M.flags|=1048576,E)}function y(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function S(M,E,D,F){return E===null||E.tag!==6?(E=su(D,M.mode,F),E.return=M,E):(E=u(E,D),E.return=M,E)}function C(M,E,D,F){var se=D.type;return se===L?q(M,E,D.props.children,F,D.key):E!==null&&(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===de&&Ca(se)===E.type)?(E=u(E,D.props),Wi(E,D),E.return=M,E):(E=cr(D.type,D.key,D.props,null,M.mode,F),Wi(E,D),E.return=M,E)}function z(M,E,D,F){return E===null||E.tag!==4||E.stateNode.containerInfo!==D.containerInfo||E.stateNode.implementation!==D.implementation?(E=cu(D,M.mode,F),E.return=M,E):(E=u(E,D.children||[]),E.return=M,E)}function q(M,E,D,F,se){return E===null||E.tag!==7?(E=ba(D,M.mode,F,se),E.return=M,E):(E=u(E,D),E.return=M,E)}function P(M,E,D){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=su(""+E,M.mode,D),E.return=M,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case b:return D=cr(E.type,E.key,E.props,null,M.mode,D),Wi(D,E),D.return=M,D;case T:return E=cu(E,M.mode,D),E.return=M,E;case de:return E=Ca(E),P(M,E,D)}if(Z(E)||ee(E))return E=ba(E,M.mode,D,null),E.return=M,E;if(typeof E.then=="function")return P(M,yr(E),D);if(E.$$typeof===B)return P(M,mr(M,E),D);vr(M,E)}return null}function _(M,E,D,F){var se=E!==null?E.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return se!==null?null:S(M,E,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case b:return D.key===se?C(M,E,D,F):null;case T:return D.key===se?z(M,E,D,F):null;case de:return D=Ca(D),_(M,E,D,F)}if(Z(D)||ee(D))return se!==null?null:q(M,E,D,F,null);if(typeof D.then=="function")return _(M,E,yr(D),F);if(D.$$typeof===B)return _(M,E,mr(M,D),F);vr(M,D)}return null}function U(M,E,D,F,se){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return M=M.get(D)||null,S(E,M,""+F,se);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case b:return M=M.get(F.key===null?D:F.key)||null,C(E,M,F,se);case T:return M=M.get(F.key===null?D:F.key)||null,z(E,M,F,se);case de:return F=Ca(F),U(M,E,D,F,se)}if(Z(F)||ee(F))return M=M.get(D)||null,q(E,M,F,se,null);if(typeof F.then=="function")return U(M,E,D,yr(F),se);if(F.$$typeof===B)return U(M,E,D,mr(E,F),se);vr(E,F)}return null}function ie(M,E,D,F){for(var se=null,ze=null,re=E,ve=E=0,Re=null;re!==null&&ve<D.length;ve++){re.index>ve?(Re=re,re=null):Re=re.sibling;var Oe=_(M,re,D[ve],F);if(Oe===null){re===null&&(re=Re);break}e&&re&&Oe.alternate===null&&t(M,re),E=d(Oe,E,ve),ze===null?se=Oe:ze.sibling=Oe,ze=Oe,re=Re}if(ve===D.length)return a(M,re),Me&&xn(M,ve),se;if(re===null){for(;ve<D.length;ve++)re=P(M,D[ve],F),re!==null&&(E=d(re,E,ve),ze===null?se=re:ze.sibling=re,ze=re);return Me&&xn(M,ve),se}for(re=i(re);ve<D.length;ve++)Re=U(re,M,ve,D[ve],F),Re!==null&&(e&&Re.alternate!==null&&re.delete(Re.key===null?ve:Re.key),E=d(Re,E,ve),ze===null?se=Re:ze.sibling=Re,ze=Re);return e&&re.forEach(function(sa){return t(M,sa)}),Me&&xn(M,ve),se}function fe(M,E,D,F){if(D==null)throw Error(o(151));for(var se=null,ze=null,re=E,ve=E=0,Re=null,Oe=D.next();re!==null&&!Oe.done;ve++,Oe=D.next()){re.index>ve?(Re=re,re=null):Re=re.sibling;var sa=_(M,re,Oe.value,F);if(sa===null){re===null&&(re=Re);break}e&&re&&sa.alternate===null&&t(M,re),E=d(sa,E,ve),ze===null?se=sa:ze.sibling=sa,ze=sa,re=Re}if(Oe.done)return a(M,re),Me&&xn(M,ve),se;if(re===null){for(;!Oe.done;ve++,Oe=D.next())Oe=P(M,Oe.value,F),Oe!==null&&(E=d(Oe,E,ve),ze===null?se=Oe:ze.sibling=Oe,ze=Oe);return Me&&xn(M,ve),se}for(re=i(re);!Oe.done;ve++,Oe=D.next())Oe=U(re,M,ve,Oe.value,F),Oe!==null&&(e&&Oe.alternate!==null&&re.delete(Oe.key===null?ve:Oe.key),E=d(Oe,E,ve),ze===null?se=Oe:ze.sibling=Oe,ze=Oe);return e&&re.forEach(function(U0){return t(M,U0)}),Me&&xn(M,ve),se}function je(M,E,D,F){if(typeof D=="object"&&D!==null&&D.type===L&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case b:e:{for(var se=D.key;E!==null;){if(E.key===se){if(se=D.type,se===L){if(E.tag===7){a(M,E.sibling),F=u(E,D.props.children),F.return=M,M=F;break e}}else if(E.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===de&&Ca(se)===E.type){a(M,E.sibling),F=u(E,D.props),Wi(F,D),F.return=M,M=F;break e}a(M,E);break}else t(M,E);E=E.sibling}D.type===L?(F=ba(D.props.children,M.mode,F,D.key),F.return=M,M=F):(F=cr(D.type,D.key,D.props,null,M.mode,F),Wi(F,D),F.return=M,M=F)}return y(M);case T:e:{for(se=D.key;E!==null;){if(E.key===se)if(E.tag===4&&E.stateNode.containerInfo===D.containerInfo&&E.stateNode.implementation===D.implementation){a(M,E.sibling),F=u(E,D.children||[]),F.return=M,M=F;break e}else{a(M,E);break}else t(M,E);E=E.sibling}F=cu(D,M.mode,F),F.return=M,M=F}return y(M);case de:return D=Ca(D),je(M,E,D,F)}if(Z(D))return ie(M,E,D,F);if(ee(D)){if(se=ee(D),typeof se!="function")throw Error(o(150));return D=se.call(D),fe(M,E,D,F)}if(typeof D.then=="function")return je(M,E,yr(D),F);if(D.$$typeof===B)return je(M,E,mr(M,D),F);vr(M,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,E!==null&&E.tag===6?(a(M,E.sibling),F=u(E,D),F.return=M,M=F):(a(M,E),F=su(D,M.mode,F),F.return=M,M=F),y(M)):a(M,E)}return function(M,E,D,F){try{Ji=0;var se=je(M,E,D,F);return li=null,se}catch(re){if(re===ii||re===pr)throw re;var ze=Lt(29,re,null,M.mode);return ze.lanes=F,ze.return=M,ze}}}var wa=hd(!0),pd=hd(!1),Pn=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Le&2)!==0){var u=i.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),i.pending=t,t=sr(e),Wf(e,null,a),t}return ur(e,i,t,a),sr(e)}function $i(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,rf(e,a)}}function Cu(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=t:d=d.next=t}else u=d=t;a={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Tu=!1;function el(){if(Tu){var e=ai;if(e!==null)throw e}}function tl(e,t,a,i){Tu=!1;var u=e.updateQueue;Pn=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,S=u.shared.pending;if(S!==null){u.shared.pending=null;var C=S,z=C.next;C.next=null,y===null?d=z:y.next=z,y=C;var q=e.alternate;q!==null&&(q=q.updateQueue,S=q.lastBaseUpdate,S!==y&&(S===null?q.firstBaseUpdate=z:S.next=z,q.lastBaseUpdate=C))}if(d!==null){var P=u.baseState;y=0,q=z=C=null,S=d;do{var _=S.lane&-536870913,U=_!==S.lane;if(U?(Ee&_)===_:(i&_)===_){_!==0&&_===ni&&(Tu=!0),q!==null&&(q=q.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ie=e,fe=S;_=t;var je=a;switch(fe.tag){case 1:if(ie=fe.payload,typeof ie=="function"){P=ie.call(je,P,_);break e}P=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=fe.payload,_=typeof ie=="function"?ie.call(je,P,_):ie,_==null)break e;P=g({},P,_);break e;case 2:Pn=!0}}_=S.callback,_!==null&&(e.flags|=64,U&&(e.flags|=8192),U=u.callbacks,U===null?u.callbacks=[_]:U.push(_))}else U={lane:_,tag:S.tag,payload:S.payload,callback:S.callback,next:null},q===null?(z=q=U,C=P):q=q.next=U,y|=_;if(S=S.next,S===null){if(S=u.shared.pending,S===null)break;U=S,S=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);q===null&&(C=P),u.baseState=C,u.firstBaseUpdate=z,u.lastBaseUpdate=q,d===null&&(u.shared.lanes=0),$n|=y,e.lanes=y,e.memoizedState=P}}function gd(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function yd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gd(a[e],t)}var ri=w(null),br=w(0);function vd(e,t){e=On,A(br,e),A(ri,t),On=e|t.baseLanes}function wu(){A(br,On),A(ri,ri.current)}function Eu(){On=br.current,Y(ri),Y(br)}var _t=w(null),Qt=null;function Qn(e){var t=e.alternate;A(We,We.current&1),A(_t,e),Qt===null&&(t===null||ri.current!==null||t.memoizedState!==null)&&(Qt=e)}function Ru(e){A(We,We.current),A(_t,e),Qt===null&&(Qt=e)}function bd(e){e.tag===22?(A(We,We.current),A(_t,e),Qt===null&&(Qt=e)):Zn()}function Zn(){A(We,We.current),A(_t,_t.current)}function Nt(e){Y(_t),Qt===e&&(Qt=null),Y(We)}var We=w(0);function Sr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_s(a)||Ns(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cn=0,ye=null,Ue=null,tt=null,xr=!1,oi=!1,Ea=!1,Ar=0,nl=0,ui=null,R1=0;function Ze(){throw Error(o(321))}function Mu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ot(e[a],t[a]))return!1;return!0}function Du(e,t,a,i,u,d){return Cn=d,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?nm:Vu,Ea=!1,d=a(i,u),Ea=!1,oi&&(d=xd(t,a,i,u)),Sd(e),d}function Sd(e){N.H=ll;var t=Ue!==null&&Ue.next!==null;if(Cn=0,tt=Ue=ye=null,xr=!1,nl=0,ui=null,t)throw Error(o(300));e===null||nt||(e=e.dependencies,e!==null&&dr(e)&&(nt=!0))}function xd(e,t,a,i){ye=e;var u=0;do{if(oi&&(ui=null),nl=0,oi=!1,25<=u)throw Error(o(301));if(u+=1,tt=Ue=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}N.H=am,d=t(a,i)}while(oi);return d}function M1(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?al(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(ye.flags|=1024),t}function zu(){var e=Ar!==0;return Ar=0,e}function Ou(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Lu(e){if(xr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xr=!1}Cn=0,tt=Ue=ye=null,oi=!1,nl=Ar=0,ui=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?ye.memoizedState=tt=e:tt=tt.next=e,tt}function $e(){if(Ue===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=tt===null?ye.memoizedState:tt.next;if(t!==null)tt=t,Ue=e;else{if(e===null)throw ye.alternate===null?Error(o(467)):Error(o(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},tt===null?ye.memoizedState=tt=e:tt=tt.next=e}return tt}function kr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var t=nl;return nl+=1,ui===null&&(ui=[]),e=fd(ui,e,t),t=ye,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?nm:Vu),e}function Cr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===B)return ft(e)}throw Error(o(438,String(e)))}function _u(e){var t=null,a=ye.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=ye.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=kr(),ye.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=I;return t.index++,a}function Tn(e,t){return typeof t=="function"?t(e):t}function Tr(e){var t=$e();return Nu(t,Ue,e)}function Nu(e,t,a){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=a;var u=e.baseQueue,d=i.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}t.baseQueue=u=d,i.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{t=u.next;var S=y=null,C=null,z=t,q=!1;do{var P=z.lane&-536870913;if(P!==z.lane?(Ee&P)===P:(Cn&P)===P){var _=z.revertLane;if(_===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),P===ni&&(q=!0);else if((Cn&_)===_){z=z.next,_===ni&&(q=!0);continue}else P={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(S=C=P,y=d):C=C.next=P,ye.lanes|=_,$n|=_;P=z.action,Ea&&a(d,P),d=z.hasEagerState?z.eagerState:a(d,P)}else _={lane:P,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(S=C=_,y=d):C=C.next=_,ye.lanes|=P,$n|=P;z=z.next}while(z!==null&&z!==t);if(C===null?y=d:C.next=S,!Ot(d,e.memoizedState)&&(nt=!0,q&&(a=ai,a!==null)))throw a;e.memoizedState=d,e.baseState=y,e.baseQueue=C,i.lastRenderedState=d}return u===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Iu(e){var t=$e(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var i=a.dispatch,u=a.pending,d=t.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=e(d,y.action),y=y.next;while(y!==u);Ot(d,t.memoizedState)||(nt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),a.lastRenderedState=d}return[d,i]}function Ad(e,t,a){var i=ye,u=$e(),d=Me;if(d){if(a===void 0)throw Error(o(407));a=a()}else a=t();var y=!Ot((Ue||u).memoizedState,a);if(y&&(u.memoizedState=a,nt=!0),u=u.queue,Hu(Td.bind(null,i,u,e),[e]),u.getSnapshot!==t||y||tt!==null&&tt.memoizedState.tag&1){if(i.flags|=2048,si(9,{destroy:void 0},Cd.bind(null,i,u,a,t),null),Ye===null)throw Error(o(349));d||(Cn&127)!==0||kd(i,t,a)}return a}function kd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ye.updateQueue,t===null?(t=kr(),ye.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Cd(e,t,a,i){t.value=a,t.getSnapshot=i,wd(t)&&Ed(e)}function Td(e,t,a){return a(function(){wd(t)&&Ed(e)})}function wd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ot(e,a)}catch{return!0}}function Ed(e){var t=va(e,2);t!==null&&Rt(t,e,2)}function Bu(e){var t=bt();if(typeof e=="function"){var a=e;if(e=a(),Ea){xt(!0);try{a()}finally{xt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function Rd(e,t,a,i){return e.baseState=a,Nu(e,Ue,typeof i=="function"?i:Tn)}function D1(e,t,a,i,u){if(Rr(e))throw Error(o(485));if(e=t.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};N.T!==null?a(!0):d.isTransition=!1,i(d),a=t.pending,a===null?(d.next=t.pending=d,Md(t,d)):(d.next=a.next,t.pending=a.next=d)}}function Md(e,t){var a=t.action,i=t.payload,u=e.state;if(t.isTransition){var d=N.T,y={};N.T=y;try{var S=a(u,i),C=N.S;C!==null&&C(y,S),Dd(e,t,S)}catch(z){Uu(e,t,z)}finally{d!==null&&y.types!==null&&(d.types=y.types),N.T=d}}else try{d=a(u,i),Dd(e,t,d)}catch(z){Uu(e,t,z)}}function Dd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){zd(e,t,i)},function(i){return Uu(e,t,i)}):zd(e,t,a)}function zd(e,t,a){t.status="fulfilled",t.value=a,Od(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Md(e,a)))}function Uu(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,Od(t),t=t.next;while(t!==i)}e.action=null}function Od(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ld(e,t){return t}function _d(e,t){if(Me){var a=Ye.formState;if(a!==null){e:{var i=ye;if(Me){if(Ve){t:{for(var u=Ve,d=Xt;u.nodeType!==8;){if(!d){u=null;break t}if(u=Zt(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ve=Zt(u.nextSibling),i=u.data==="F!";break e}}Fn(i)}i=!1}i&&(t=a[0])}}return a=bt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ld,lastRenderedState:t},a.queue=i,a=$d.bind(null,ye,i),i.dispatch=a,i=Bu(!1),d=Fu.bind(null,ye,!1,i.queue),i=bt(),u={state:t,dispatch:null,action:e,pending:null},i.queue=u,a=D1.bind(null,ye,u,d,a),u.dispatch=a,i.memoizedState=e,[t,a,!1]}function Nd(e){var t=$e();return Id(t,Ue,e)}function Id(e,t,a){if(t=Nu(e,t,Ld)[0],e=Tr(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=al(t)}catch(y){throw y===ii?pr:y}else i=t;t=$e();var u=t.queue,d=u.dispatch;return a!==t.memoizedState&&(ye.flags|=2048,si(9,{destroy:void 0},z1.bind(null,u,a),null)),[i,d,e]}function z1(e,t){e.action=t}function Bd(e){var t=$e(),a=Ue;if(a!==null)return Id(t,a,e);$e(),t=t.memoizedState,a=$e();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function si(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=ye.updateQueue,t===null&&(t=kr(),ye.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function Ud(){return $e().memoizedState}function wr(e,t,a,i){var u=bt();ye.flags|=e,u.memoizedState=si(1|t,{destroy:void 0},a,i===void 0?null:i)}function Er(e,t,a,i){var u=$e();i=i===void 0?null:i;var d=u.memoizedState.inst;Ue!==null&&i!==null&&Mu(i,Ue.memoizedState.deps)?u.memoizedState=si(t,d,a,i):(ye.flags|=e,u.memoizedState=si(1|t,d,a,i))}function Hd(e,t){wr(8390656,8,e,t)}function Hu(e,t){Er(2048,8,e,t)}function O1(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=kr(),ye.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function jd(e){var t=$e().memoizedState;return O1({ref:t,nextImpl:e}),function(){if((Le&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function qd(e,t){return Er(4,2,e,t)}function Yd(e,t){return Er(4,4,e,t)}function Gd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fd(e,t,a){a=a!=null?a.concat([e]):null,Er(4,4,Gd.bind(null,t,e),a)}function ju(){}function Vd(e,t){var a=$e();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Mu(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function Pd(e,t){var a=$e();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Mu(t,i[1]))return i[0];if(i=e(),Ea){xt(!0);try{e()}finally{xt(!1)}}return a.memoizedState=[i,t],i}function qu(e,t,a){return a===void 0||(Cn&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Km(),ye.lanes|=e,$n|=e,a)}function Kd(e,t,a,i){return Ot(a,t)?a:ri.current!==null?(e=qu(e,a,i),Ot(e,t)||(nt=!0),e):(Cn&42)===0||(Cn&1073741824)!==0&&(Ee&261930)===0?(nt=!0,e.memoizedState=a):(e=Km(),ye.lanes|=e,$n|=e,t)}function Xd(e,t,a,i,u){var d=X.p;X.p=d!==0&&8>d?d:8;var y=N.T,S={};N.T=S,Fu(e,!1,t,a);try{var C=u(),z=N.S;if(z!==null&&z(S,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var q=E1(C,i);il(e,t,q,Ut(e))}else il(e,t,i,Ut(e))}catch(P){il(e,t,{then:function(){},status:"rejected",reason:P},Ut())}finally{X.p=d,y!==null&&S.types!==null&&(y.types=S.types),N.T=y}}function L1(){}function Yu(e,t,a,i){if(e.tag!==5)throw Error(o(476));var u=Qd(e).queue;Xd(e,u,t,oe,a===null?L1:function(){return Zd(e),a(i)})}function Qd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:oe},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zd(e){var t=Qd(e);t.next===null&&(t=e.alternate.memoizedState),il(e,t.next.queue,{},Ut())}function Gu(){return ft(xl)}function Jd(){return $e().memoizedState}function Wd(){return $e().memoizedState}function _1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ut();e=Kn(a);var i=Xn(t,e,a);i!==null&&(Rt(i,t,a),$i(i,t,a)),t={cache:vu()},e.payload=t;return}t=t.return}}function N1(e,t,a){var i=Ut();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rr(e)?em(t,a):(a=ou(e,t,a,i),a!==null&&(Rt(a,e,i),tm(a,t,i)))}function $d(e,t,a){var i=Ut();il(e,t,a,i)}function il(e,t,a,i){var u={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rr(e))em(t,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var y=t.lastRenderedState,S=d(y,a);if(u.hasEagerState=!0,u.eagerState=S,Ot(S,y))return ur(e,t,u,0),Ye===null&&or(),!1}catch{}if(a=ou(e,t,u,i),a!==null)return Rt(a,e,i),tm(a,t,i),!0}return!1}function Fu(e,t,a,i){if(i={lane:2,revertLane:As(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Rr(e)){if(t)throw Error(o(479))}else t=ou(e,a,i,2),t!==null&&Rt(t,e,2)}function Rr(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function em(e,t){oi=xr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function tm(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,rf(e,a)}}var ll={readContext:ft,use:Cr,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};ll.useEffectEvent=Ze;var nm={readContext:ft,use:Cr,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Hd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,wr(4194308,4,Gd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return wr(4194308,4,e,t)},useInsertionEffect:function(e,t){wr(4,2,e,t)},useMemo:function(e,t){var a=bt();t=t===void 0?null:t;var i=e();if(Ea){xt(!0);try{e()}finally{xt(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=bt();if(a!==void 0){var u=a(t);if(Ea){xt(!0);try{a(t)}finally{xt(!1)}}}else u=t;return i.memoizedState=i.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},i.queue=e,e=e.dispatch=N1.bind(null,ye,e),[i.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Bu(e);var t=e.queue,a=$d.bind(null,ye,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,t){var a=bt();return qu(a,e,t)},useTransition:function(){var e=Bu(!1);return e=Xd.bind(null,ye,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=ye,u=bt();if(Me){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Ye===null)throw Error(o(349));(Ee&127)!==0||kd(i,t,a)}u.memoizedState=a;var d={value:a,getSnapshot:t};return u.queue=d,Hd(Td.bind(null,i,d,e),[e]),i.flags|=2048,si(9,{destroy:void 0},Cd.bind(null,i,d,a,t),null),a},useId:function(){var e=bt(),t=Ye.identifierPrefix;if(Me){var a=sn,i=un;a=(i&~(1<<32-qe(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ar++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=R1++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Gu,useFormState:_d,useActionState:_d,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Fu.bind(null,ye,!0,a),a.dispatch=t,[e,t]},useMemoCache:_u,useCacheRefresh:function(){return bt().memoizedState=_1.bind(null,ye)},useEffectEvent:function(e){var t=bt(),a={impl:e};return t.memoizedState=a,function(){if((Le&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Vu={readContext:ft,use:Cr,useCallback:Vd,useContext:ft,useEffect:Hu,useImperativeHandle:Fd,useInsertionEffect:qd,useLayoutEffect:Yd,useMemo:Pd,useReducer:Tr,useRef:Ud,useState:function(){return Tr(Tn)},useDebugValue:ju,useDeferredValue:function(e,t){var a=$e();return Kd(a,Ue.memoizedState,e,t)},useTransition:function(){var e=Tr(Tn)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:Ad,useId:Jd,useHostTransitionStatus:Gu,useFormState:Nd,useActionState:Nd,useOptimistic:function(e,t){var a=$e();return Rd(a,Ue,e,t)},useMemoCache:_u,useCacheRefresh:Wd};Vu.useEffectEvent=jd;var am={readContext:ft,use:Cr,useCallback:Vd,useContext:ft,useEffect:Hu,useImperativeHandle:Fd,useInsertionEffect:qd,useLayoutEffect:Yd,useMemo:Pd,useReducer:Iu,useRef:Ud,useState:function(){return Iu(Tn)},useDebugValue:ju,useDeferredValue:function(e,t){var a=$e();return Ue===null?qu(a,e,t):Kd(a,Ue.memoizedState,e,t)},useTransition:function(){var e=Iu(Tn)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:Ad,useId:Jd,useHostTransitionStatus:Gu,useFormState:Bd,useActionState:Bd,useOptimistic:function(e,t){var a=$e();return Ue!==null?Rd(a,Ue,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_u,useCacheRefresh:Wd};am.useEffectEvent=jd;function Pu(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:g({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ku={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Ut(),u=Kn(i);u.payload=t,a!=null&&(u.callback=a),t=Xn(e,u,i),t!==null&&(Rt(t,e,i),$i(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Ut(),u=Kn(i);u.tag=1,u.payload=t,a!=null&&(u.callback=a),t=Xn(e,u,i),t!==null&&(Rt(t,e,i),$i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ut(),i=Kn(a);i.tag=2,t!=null&&(i.callback=t),t=Xn(e,i,a),t!==null&&(Rt(t,e,a),$i(t,e,a))}};function im(e,t,a,i,u,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,y):t.prototype&&t.prototype.isPureReactComponent?!Vi(a,i)||!Vi(u,d):!0}function lm(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Ku.enqueueReplaceState(t,t.state,null)}function Ra(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function rm(e){rr(e)}function om(e){console.error(e)}function um(e){rr(e)}function Mr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function sm(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Xu(e,t,a){return a=Kn(a),a.tag=3,a.payload={element:null},a.callback=function(){Mr(e,t)},a}function cm(e){return e=Kn(e),e.tag=3,e}function fm(e,t,a,i){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;e.payload=function(){return u(d)},e.callback=function(){sm(t,a,i)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){sm(t,a,i),typeof u!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})})}function I1(e,t,a,i,u){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&ti(t,a,u,!0),a=_t.current,a!==null){switch(a.tag){case 31:case 13:return Qt===null?qr():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,i===gr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),bs(e,i,u)),!1;case 22:return a.flags|=65536,i===gr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),bs(e,i,u)),!1}throw Error(o(435,a.tag))}return bs(e,i,u),qr(),!1}if(Me)return t=_t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,i!==mu&&(e=Error(o(422),{cause:i}),Xi(Vt(e,a)))):(i!==mu&&(t=Error(o(423),{cause:i}),Xi(Vt(t,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,i=Vt(i,a),u=Xu(e.stateNode,i,u),Cu(e,u),Je!==4&&(Je=2)),!1;var d=Error(o(520),{cause:i});if(d=Vt(d,a),ml===null?ml=[d]:ml.push(d),Je!==4&&(Je=2),t===null)return!0;i=Vt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Xu(a.stateNode,i,e),Cu(a,e),!1;case 1:if(t=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ea===null||!ea.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=cm(u),fm(u,e,a,i),Cu(a,u),!1}a=a.return}while(a!==null);return!1}var Qu=Error(o(461)),nt=!1;function dt(e,t,a,i){t.child=e===null?pd(t,null,a,i):wa(t,e.child,a,i)}function dm(e,t,a,i,u){a=a.render;var d=t.ref;if("ref"in i){var y={};for(var S in i)S!=="ref"&&(y[S]=i[S])}else y=i;return Aa(t),i=Du(e,t,a,y,d,u),S=zu(),e!==null&&!nt?(Ou(e,t,u),wn(e,t,u)):(Me&&S&&fu(t),t.flags|=1,dt(e,t,i,u),t.child)}function mm(e,t,a,i,u){if(e===null){var d=a.type;return typeof d=="function"&&!uu(d)&&d.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=d,hm(e,t,d,i,u)):(e=cr(a.type,null,i,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!as(e,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:Vi,a(y,i)&&e.ref===t.ref)return wn(e,t,u)}return t.flags|=1,e=Sn(d,i),e.ref=t.ref,e.return=t,t.child=e}function hm(e,t,a,i,u){if(e!==null){var d=e.memoizedProps;if(Vi(d,i)&&e.ref===t.ref)if(nt=!1,t.pendingProps=i=d,as(e,u))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,wn(e,t,u)}return Zu(e,t,a,i,u)}function pm(e,t,a,i){var u=i.children,d=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(i=t.child=e.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;i=u&~d}else i=0,t.child=null;return gm(e,t,d,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hr(t,d!==null?d.cachePool:null),d!==null?vd(t,d):wu(),bd(t);else return i=t.lanes=536870912,gm(e,t,d!==null?d.baseLanes|a:a,a,i)}else d!==null?(hr(t,d.cachePool),vd(t,d),Zn(),t.memoizedState=null):(e!==null&&hr(t,null),wu(),Zn());return dt(e,t,u,a),t.child}function rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gm(e,t,a,i,u){var d=Su();return d=d===null?null:{parent:et._currentValue,pool:d},t.memoizedState={baseLanes:a,cachePool:d},e!==null&&hr(t,null),wu(),bd(t),e!==null&&ti(e,t,i,!0),t.childLanes=u,null}function Dr(e,t){return t=Or({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ym(e,t,a){return wa(t,e.child,null,a),e=Dr(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function B1(e,t,a){var i=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Me){if(i.mode==="hidden")return e=Dr(t,i),t.lanes=536870912,rl(null,e);if(Ru(t),(e=Ve)?(e=Mh(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:un,overflow:sn}:null,retryLane:536870912,hydrationErrors:null},a=ed(e),a.return=t,t.child=a,ct=t,Ve=null)):e=null,e===null)throw Fn(t);return t.lanes=536870912,null}return Dr(t,i)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(Ru(t),u)if(t.flags&256)t.flags&=-257,t=ym(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(nt||ti(e,t,a,!1),u=(a&e.childLanes)!==0,nt||u){if(i=Ye,i!==null&&(y=of(i,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,va(e,y),Rt(i,e,y),Qu;qr(),t=ym(e,t,a)}else e=d.treeContext,Ve=Zt(y.nextSibling),ct=t,Me=!0,Gn=null,Xt=!1,e!==null&&ad(t,e),t=Dr(t,i),t.flags|=4096;return t}return e=Sn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Zu(e,t,a,i,u){return Aa(t),a=Du(e,t,a,i,void 0,u),i=zu(),e!==null&&!nt?(Ou(e,t,u),wn(e,t,u)):(Me&&i&&fu(t),t.flags|=1,dt(e,t,a,u),t.child)}function vm(e,t,a,i,u,d){return Aa(t),t.updateQueue=null,a=xd(t,i,a,u),Sd(e),i=zu(),e!==null&&!nt?(Ou(e,t,d),wn(e,t,d)):(Me&&i&&fu(t),t.flags|=1,dt(e,t,a,d),t.child)}function bm(e,t,a,i,u){if(Aa(t),t.stateNode===null){var d=Ja,y=a.contextType;typeof y=="object"&&y!==null&&(d=ft(y)),d=new a(i,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ku,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=i,d.state=t.memoizedState,d.refs={},Au(t),y=a.contextType,d.context=typeof y=="object"&&y!==null?ft(y):Ja,d.state=t.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Pu(t,a,y,i),d.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Ku.enqueueReplaceState(d,d.state,null),tl(t,i,d,u),el(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){d=t.stateNode;var S=t.memoizedProps,C=Ra(a,S);d.props=C;var z=d.context,q=a.contextType;y=Ja,typeof q=="object"&&q!==null&&(y=ft(q));var P=a.getDerivedStateFromProps;q=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||z!==y)&&lm(t,d,i,y),Pn=!1;var _=t.memoizedState;d.state=_,tl(t,i,d,u),el(),z=t.memoizedState,S||_!==z||Pn?(typeof P=="function"&&(Pu(t,a,P,i),z=t.memoizedState),(C=Pn||im(t,a,C,i,_,z,y))?(q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=z),d.props=i,d.state=z,d.context=y,i=C):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,ku(e,t),y=t.memoizedProps,q=Ra(a,y),d.props=q,P=t.pendingProps,_=d.context,z=a.contextType,C=Ja,typeof z=="object"&&z!==null&&(C=ft(z)),S=a.getDerivedStateFromProps,(z=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==P||_!==C)&&lm(t,d,i,C),Pn=!1,_=t.memoizedState,d.state=_,tl(t,i,d,u),el();var U=t.memoizedState;y!==P||_!==U||Pn||e!==null&&e.dependencies!==null&&dr(e.dependencies)?(typeof S=="function"&&(Pu(t,a,S,i),U=t.memoizedState),(q=Pn||im(t,a,q,i,_,U,C)||e!==null&&e.dependencies!==null&&dr(e.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,U,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,U,C)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=U),d.props=i,d.state=U,d.context=C,i=q):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),i=!1)}return d=i,zr(e,t),i=(t.flags&128)!==0,d||i?(d=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&i?(t.child=wa(t,e.child,null,u),t.child=wa(t,null,a,u)):dt(e,t,a,u),t.memoizedState=d.state,e=t.child):e=wn(e,t,u),e}function Sm(e,t,a,i){return Sa(),t.flags|=256,dt(e,t,a,i),t.child}var Ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wu(e){return{baseLanes:e,cachePool:sd()}}function $u(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Bt),e}function xm(e,t,a){var i=t.pendingProps,u=!1,d=(t.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),y&&(u=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(Me){if(u?Qn(t):Zn(),(e=Ve)?(e=Mh(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:un,overflow:sn}:null,retryLane:536870912,hydrationErrors:null},a=ed(e),a.return=t,t.child=a,ct=t,Ve=null)):e=null,e===null)throw Fn(t);return Ns(e)?t.lanes=32:t.lanes=536870912,null}var S=i.children;return i=i.fallback,u?(Zn(),u=t.mode,S=Or({mode:"hidden",children:S},u),i=ba(i,u,a,null),S.return=t,i.return=t,S.sibling=i,t.child=S,i=t.child,i.memoizedState=Wu(a),i.childLanes=$u(e,y,a),t.memoizedState=Ju,rl(null,i)):(Qn(t),es(t,S))}var C=e.memoizedState;if(C!==null&&(S=C.dehydrated,S!==null)){if(d)t.flags&256?(Qn(t),t.flags&=-257,t=ts(e,t,a)):t.memoizedState!==null?(Zn(),t.child=e.child,t.flags|=128,t=null):(Zn(),S=i.fallback,u=t.mode,i=Or({mode:"visible",children:i.children},u),S=ba(S,u,a,null),S.flags|=2,i.return=t,S.return=t,i.sibling=S,t.child=i,wa(t,e.child,null,a),i=t.child,i.memoizedState=Wu(a),i.childLanes=$u(e,y,a),t.memoizedState=Ju,t=rl(null,i));else if(Qn(t),Ns(S)){if(y=S.nextSibling&&S.nextSibling.dataset,y)var z=y.dgst;y=z,i=Error(o(419)),i.stack="",i.digest=y,Xi({value:i,source:null,stack:null}),t=ts(e,t,a)}else if(nt||ti(e,t,a,!1),y=(a&e.childLanes)!==0,nt||y){if(y=Ye,y!==null&&(i=of(y,a),i!==0&&i!==C.retryLane))throw C.retryLane=i,va(e,i),Rt(y,e,i),Qu;_s(S)||qr(),t=ts(e,t,a)}else _s(S)?(t.flags|=192,t.child=e.child,t=null):(e=C.treeContext,Ve=Zt(S.nextSibling),ct=t,Me=!0,Gn=null,Xt=!1,e!==null&&ad(t,e),t=es(t,i.children),t.flags|=4096);return t}return u?(Zn(),S=i.fallback,u=t.mode,C=e.child,z=C.sibling,i=Sn(C,{mode:"hidden",children:i.children}),i.subtreeFlags=C.subtreeFlags&65011712,z!==null?S=Sn(z,S):(S=ba(S,u,a,null),S.flags|=2),S.return=t,i.return=t,i.sibling=S,t.child=i,rl(null,i),i=t.child,S=e.child.memoizedState,S===null?S=Wu(a):(u=S.cachePool,u!==null?(C=et._currentValue,u=u.parent!==C?{parent:C,pool:C}:u):u=sd(),S={baseLanes:S.baseLanes|a,cachePool:u}),i.memoizedState=S,i.childLanes=$u(e,y,a),t.memoizedState=Ju,rl(e.child,i)):(Qn(t),a=e.child,e=a.sibling,a=Sn(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=a,t.memoizedState=null,a)}function es(e,t){return t=Or({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Or(e,t){return e=Lt(22,e,null,t),e.lanes=0,e}function ts(e,t,a){return wa(t,e.child,null,a),e=es(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Am(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),gu(e.return,t,a)}function ns(e,t,a,i,u,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=i,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function km(e,t,a){var i=t.pendingProps,u=i.revealOrder,d=i.tail;i=i.children;var y=We.current,S=(y&2)!==0;if(S?(y=y&1|2,t.flags|=128):y&=1,A(We,y),dt(e,t,i,a),i=Me?Ki:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Am(e,a,t);else if(e.tag===19)Am(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=t.child,u=null;a!==null;)e=a.alternate,e!==null&&Sr(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=t.child,t.child=null):(u=a.sibling,a.sibling=null),ns(t,!1,u,a,d,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Sr(e)===null){t.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ns(t,!0,a,null,d,i);break;case"together":ns(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function wn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ti(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Sn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Sn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function as(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&dr(e)))}function U1(e,t,a){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),Vn(t,et,e.memoizedState.cache),Sa();break;case 27:case 5:qt(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:Vn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ru(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Qn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?xm(e,t,a):(Qn(t),e=wn(e,t,a),e!==null?e.sibling:null);Qn(t);break;case 19:var u=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(ti(e,t,a,!1),i=(a&t.childLanes)!==0),u){if(i)return km(e,t,a);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),A(We,We.current),i)break;return null;case 22:return t.lanes=0,pm(e,t,a,t.pendingProps);case 24:Vn(t,et,e.memoizedState.cache)}return wn(e,t,a)}function Cm(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!as(e,a)&&(t.flags&128)===0)return nt=!1,U1(e,t,a);nt=(e.flags&131072)!==0}else nt=!1,Me&&(t.flags&1048576)!==0&&nd(t,Ki,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Ca(t.elementType),t.type=e,typeof e=="function")uu(e)?(i=Ra(e,i),t.tag=1,t=bm(null,t,e,i,a)):(t.tag=0,t=Zu(null,t,e,i,a));else{if(e!=null){var u=e.$$typeof;if(u===ne){t.tag=11,t=dm(null,t,e,i,a);break e}else if(u===W){t.tag=14,t=mm(null,t,e,i,a);break e}}throw t=le(e)||e,Error(o(306,t,""))}}return t;case 0:return Zu(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,u=Ra(i,t.pendingProps),bm(e,t,i,u,a);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var d=t.memoizedState;u=d.element,ku(e,t),tl(t,i,null,a);var y=t.memoizedState;if(i=y.cache,Vn(t,et,i),i!==d.cache&&yu(t,[et],a,!0),el(),i=y.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=Sm(e,t,i,a);break e}else if(i!==u){u=Vt(Error(o(424)),t),Xi(u),t=Sm(e,t,i,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ve=Zt(e.firstChild),ct=t,Me=!0,Gn=null,Xt=!0,a=pd(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Sa(),i===u){t=wn(e,t,a);break e}dt(e,t,i,a)}t=t.child}return t;case 26:return zr(e,t),e===null?(a=Nh(t.type,null,t.pendingProps,null))?t.memoizedState=a:Me||(a=t.type,e=t.pendingProps,i=Xr(ue.current).createElement(a),i[st]=t,i[At]=e,mt(i,a,e),ot(i),t.stateNode=i):t.memoizedState=Nh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qt(t),e===null&&Me&&(i=t.stateNode=Oh(t.type,t.pendingProps,ue.current),ct=t,Xt=!0,u=Ve,ia(t.type)?(Is=u,Ve=Zt(i.firstChild)):Ve=u),dt(e,t,t.pendingProps.children,a),zr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Me&&((u=i=Ve)&&(i=h0(i,t.type,t.pendingProps,Xt),i!==null?(t.stateNode=i,ct=t,Ve=Zt(i.firstChild),Xt=!1,u=!0):u=!1),u||Fn(t)),qt(t),u=t.type,d=t.pendingProps,y=e!==null?e.memoizedProps:null,i=d.children,zs(u,d)?i=null:y!==null&&zs(u,y)&&(t.flags|=32),t.memoizedState!==null&&(u=Du(e,t,M1,null,null,a),xl._currentValue=u),zr(e,t),dt(e,t,i,a),t.child;case 6:return e===null&&Me&&((e=a=Ve)&&(a=p0(a,t.pendingProps,Xt),a!==null?(t.stateNode=a,ct=t,Ve=null,e=!0):e=!1),e||Fn(t)),null;case 13:return xm(e,t,a);case 4:return Ke(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=wa(t,null,i,a):dt(e,t,i,a),t.child;case 11:return dm(e,t,t.type,t.pendingProps,a);case 7:return dt(e,t,t.pendingProps,a),t.child;case 8:return dt(e,t,t.pendingProps.children,a),t.child;case 12:return dt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Vn(t,t.type,i.value),dt(e,t,i.children,a),t.child;case 9:return u=t.type._context,i=t.pendingProps.children,Aa(t),u=ft(u),i=i(u),t.flags|=1,dt(e,t,i,a),t.child;case 14:return mm(e,t,t.type,t.pendingProps,a);case 15:return hm(e,t,t.type,t.pendingProps,a);case 19:return km(e,t,a);case 31:return B1(e,t,a);case 22:return pm(e,t,a,t.pendingProps);case 24:return Aa(t),i=ft(et),e===null?(u=Su(),u===null&&(u=Ye,d=vu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),t.memoizedState={parent:i,cache:u},Au(t),Vn(t,et,u)):((e.lanes&a)!==0&&(ku(e,t),tl(t,null,null,a),el()),u=e.memoizedState,d=t.memoizedState,u.parent!==i?(u={parent:i,cache:i},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),Vn(t,et,i)):(i=d.cache,Vn(t,et,i),i!==u.cache&&yu(t,[et],a,!0))),dt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function En(e){e.flags|=4}function is(e,t,a,i,u){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Jm())e.flags|=8192;else throw Ta=gr,xu}else e.flags&=-16777217}function Tm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jh(t))if(Jm())e.flags|=8192;else throw Ta=gr,xu}function Lr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?af():536870912,e.lanes|=t,mi|=t)}function ol(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags&65011712,i|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function H1(e,t,a){var i=t.pendingProps;switch(du(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Pe(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),kn(et),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ei(t)?En(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hu())),Pe(t),null;case 26:var u=t.type,d=t.memoizedState;return e===null?(En(t),d!==null?(Pe(t),Tm(t,d)):(Pe(t),is(t,u,null,i,a))):d?d!==e.memoizedState?(En(t),Pe(t),Tm(t,d)):(Pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&En(t),Pe(t),is(t,u,e,i,a)),null;case 27:if(hn(t),a=ue.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Pe(t),null}e=te.current,ei(t)?id(t):(e=Oh(u,i,a),t.stateNode=e,En(t))}return Pe(t),null;case 5:if(hn(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Pe(t),null}if(d=te.current,ei(t))id(t);else{var y=Xr(ue.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof i.is=="string"?y.createElement("select",{is:i.is}):y.createElement("select"),i.multiple?d.multiple=!0:i.size&&(d.size=i.size);break;default:d=typeof i.is=="string"?y.createElement(u,{is:i.is}):y.createElement(u)}}d[st]=t,d[At]=i;e:for(y=t.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}t.stateNode=d;e:switch(mt(d,u,i),u){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&En(t)}}return Pe(t),is(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&En(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ue.current,ei(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,u=ct,u!==null)switch(u.tag){case 27:case 5:i=u.memoizedProps}e[st]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||xh(e.nodeValue,a)),e||Fn(t,!0)}else e=Xr(e).createTextNode(i),e[st]=t,t.stateNode=e}return Pe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=ei(t),a!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[st]=t}else Sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),e=!1}else a=hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Pe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ei(t),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[st]=t}else Sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),u=!1}else u=hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,u=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(u=i.alternate.memoizedState.cachePool.pool),d=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==u&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Lr(t,t.updateQueue),Pe(t),null);case 4:return Be(),e===null&&ws(t.stateNode.containerInfo),Pe(t),null;case 10:return kn(t.type),Pe(t),null;case 19:if(Y(We),i=t.memoizedState,i===null)return Pe(t),null;if(u=(t.flags&128)!==0,d=i.rendering,d===null)if(u)ol(i,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Sr(e),d!==null){for(t.flags|=128,ol(i,!1),e=d.updateQueue,t.updateQueue=e,Lr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$f(a,e),a=a.sibling;return A(We,We.current&1|2),Me&&xn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&yt()>Ur&&(t.flags|=128,u=!0,ol(i,!1),t.lanes=4194304)}else{if(!u)if(e=Sr(d),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,Lr(t,e),ol(i,!0),i.tail===null&&i.tailMode==="hidden"&&!d.alternate&&!Me)return Pe(t),null}else 2*yt()-i.renderingStartTime>Ur&&a!==536870912&&(t.flags|=128,u=!0,ol(i,!1),t.lanes=4194304);i.isBackwards?(d.sibling=t.child,t.child=d):(e=i.last,e!==null?e.sibling=d:t.child=d,i.last=d)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=yt(),e.sibling=null,a=We.current,A(We,u?a&1|2:a&1),Me&&xn(t,i.treeForkCount),e):(Pe(t),null);case 22:case 23:return Nt(t),Eu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),a=t.updateQueue,a!==null&&Lr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&Y(ka),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),kn(et),Pe(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function j1(e,t){switch(du(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(et),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return hn(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(o(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(We),null;case 4:return Be(),null;case 10:return kn(t.type),null;case 22:case 23:return Nt(t),Eu(),e!==null&&Y(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kn(et),null;case 25:return null;default:return null}}function wm(e,t){switch(du(t),t.tag){case 3:kn(et),Be();break;case 26:case 27:case 5:hn(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:Y(We);break;case 10:kn(t.type);break;case 22:case 23:Nt(t),Eu(),e!==null&&Y(ka);break;case 24:kn(et)}}function ul(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var u=i.next;a=u;do{if((a.tag&e)===e){i=void 0;var d=a.create,y=a.inst;i=d(),y.destroy=i}a=a.next}while(a!==u)}}catch(S){Ie(t,t.return,S)}}function Jn(e,t,a){try{var i=t.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var d=u.next;i=d;do{if((i.tag&e)===e){var y=i.inst,S=y.destroy;if(S!==void 0){y.destroy=void 0,u=t;var C=a,z=S;try{z()}catch(q){Ie(u,C,q)}}}i=i.next}while(i!==d)}}catch(q){Ie(t,t.return,q)}}function Em(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{yd(t,a)}catch(i){Ie(e,e.return,i)}}}function Rm(e,t,a){a.props=Ra(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Ie(e,t,i)}}function sl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(u){Ie(e,t,u)}}function cn(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(u){Ie(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(e,t,u)}else a.current=null}function Mm(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(u){Ie(e,e.return,u)}}function ls(e,t,a){try{var i=e.stateNode;u0(i,e.type,a,t),i[At]=t}catch(u){Ie(e,e.return,u)}}function Dm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function rs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function os(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=vn));else if(i!==4&&(i===27&&ia(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(os(e,t,a),e=e.sibling;e!==null;)os(e,t,a),e=e.sibling}function _r(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(_r(e,t,a),e=e.sibling;e!==null;)_r(e,t,a),e=e.sibling}function zm(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);mt(t,i,a),t[st]=e,t[At]=a}catch(d){Ie(e,e.return,d)}}var Rn=!1,at=!1,us=!1,Om=typeof WeakSet=="function"?WeakSet:Set,ut=null;function q1(e,t){if(e=e.containerInfo,Ms=to,e=Ff(e),tu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var u=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,S=-1,C=-1,z=0,q=0,P=e,_=null;t:for(;;){for(var U;P!==a||u!==0&&P.nodeType!==3||(S=y+u),P!==d||i!==0&&P.nodeType!==3||(C=y+i),P.nodeType===3&&(y+=P.nodeValue.length),(U=P.firstChild)!==null;)_=P,P=U;for(;;){if(P===e)break t;if(_===a&&++z===u&&(S=y),_===d&&++q===i&&(C=y),(U=P.nextSibling)!==null)break;P=_,_=P.parentNode}P=U}a=S===-1||C===-1?null:{start:S,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ds={focusedElem:e,selectionRange:a},to=!1,ut=t;ut!==null;)if(t=ut,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ut=e;else for(;ut!==null;){switch(t=ut,d=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=t,u=d.memoizedProps,d=d.memoizedState,i=a.stateNode;try{var ie=Ra(a.type,u);e=i.getSnapshotBeforeUpdate(ie,d),i.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Ie(a,a.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ls(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ls(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,ut=e;break}ut=t.return}}function Lm(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Dn(e,a),i&4&&ul(5,a);break;case 1:if(Dn(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(y){Ie(a,a.return,y)}else{var u=Ra(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ie(a,a.return,y)}}i&64&&Em(a),i&512&&sl(a,a.return);break;case 3:if(Dn(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{yd(e,t)}catch(y){Ie(a,a.return,y)}}break;case 27:t===null&&i&4&&zm(a);case 26:case 5:Dn(e,a),t===null&&i&4&&Mm(a),i&512&&sl(a,a.return);break;case 12:Dn(e,a);break;case 31:Dn(e,a),i&4&&Im(e,a);break;case 13:Dn(e,a),i&4&&Bm(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Z1.bind(null,a),g0(e,a))));break;case 22:if(i=a.memoizedState!==null||Rn,!i){t=t!==null&&t.memoizedState!==null||at,u=Rn;var d=at;Rn=i,(at=t)&&!d?zn(e,a,(a.subtreeFlags&8772)!==0):Dn(e,a),Rn=u,at=d}break;case 30:break;default:Dn(e,a)}}function _m(e){var t=e.alternate;t!==null&&(e.alternate=null,_m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Uo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Ct=!1;function Mn(e,t,a){for(a=a.child;a!==null;)Nm(e,t,a),a=a.sibling}function Nm(e,t,a){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(vt,a)}catch{}switch(a.tag){case 26:at||cn(a,t),Mn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:at||cn(a,t);var i=Xe,u=Ct;ia(a.type)&&(Xe=a.stateNode,Ct=!1),Mn(e,t,a),vl(a.stateNode),Xe=i,Ct=u;break;case 5:at||cn(a,t);case 6:if(i=Xe,u=Ct,Xe=null,Mn(e,t,a),Xe=i,Ct=u,Xe!==null)if(Ct)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(d){Ie(a,t,d)}else try{Xe.removeChild(a.stateNode)}catch(d){Ie(a,t,d)}break;case 18:Xe!==null&&(Ct?(e=Xe,Eh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xi(e)):Eh(Xe,a.stateNode));break;case 4:i=Xe,u=Ct,Xe=a.stateNode.containerInfo,Ct=!0,Mn(e,t,a),Xe=i,Ct=u;break;case 0:case 11:case 14:case 15:Jn(2,a,t),at||Jn(4,a,t),Mn(e,t,a);break;case 1:at||(cn(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Rm(a,t,i)),Mn(e,t,a);break;case 21:Mn(e,t,a);break;case 22:at=(i=at)||a.memoizedState!==null,Mn(e,t,a),at=i;break;default:Mn(e,t,a)}}function Im(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xi(e)}catch(a){Ie(t,t.return,a)}}}function Bm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xi(e)}catch(a){Ie(t,t.return,a)}}function Y1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Om),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Om),t;default:throw Error(o(435,e.tag))}}function Nr(e,t){var a=Y1(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var u=J1.bind(null,e,i);i.then(u,u)}})}function Tt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var u=a[i],d=e,y=t,S=y;e:for(;S!==null;){switch(S.tag){case 27:if(ia(S.type)){Xe=S.stateNode,Ct=!1;break e}break;case 5:Xe=S.stateNode,Ct=!1;break e;case 3:case 4:Xe=S.stateNode.containerInfo,Ct=!0;break e}S=S.return}if(Xe===null)throw Error(o(160));Nm(d,y,u),Xe=null,Ct=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Um(t,e),t=t.sibling}var an=null;function Um(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tt(t,e),wt(e),i&4&&(Jn(3,e,e.return),ul(3,e),Jn(5,e,e.return));break;case 1:Tt(t,e),wt(e),i&512&&(at||a===null||cn(a,a.return)),i&64&&Rn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var u=an;if(Tt(t,e),wt(e),i&512&&(at||a===null||cn(a,a.return)),i&4){var d=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(i){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ii]||d[st]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(i),u.head.insertBefore(d,u.querySelector("head > title"))),mt(d,i,a),d[st]=e,ot(d),i=d;break e;case"link":var y=Uh("link","href",u).get(i+(a.href||""));if(y){for(var S=0;S<y.length;S++)if(d=y[S],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(S,1);break t}}d=u.createElement(i),mt(d,i,a),u.head.appendChild(d);break;case"meta":if(y=Uh("meta","content",u).get(i+(a.content||""))){for(S=0;S<y.length;S++)if(d=y[S],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(S,1);break t}}d=u.createElement(i),mt(d,i,a),u.head.appendChild(d);break;default:throw Error(o(468,i))}d[st]=e,ot(d),i=d}e.stateNode=i}else Hh(u,e.type,e.stateNode);else e.stateNode=Bh(u,i,e.memoizedProps);else d!==i?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,i===null?Hh(u,e.type,e.stateNode):Bh(u,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ls(e,e.memoizedProps,a.memoizedProps)}break;case 27:Tt(t,e),wt(e),i&512&&(at||a===null||cn(a,a.return)),a!==null&&i&4&&ls(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Tt(t,e),wt(e),i&512&&(at||a===null||cn(a,a.return)),e.flags&32){u=e.stateNode;try{Fa(u,"")}catch(ie){Ie(e,e.return,ie)}}i&4&&e.stateNode!=null&&(u=e.memoizedProps,ls(e,u,a!==null?a.memoizedProps:u)),i&1024&&(us=!0);break;case 6:if(Tt(t,e),wt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(ie){Ie(e,e.return,ie)}}break;case 3:if(Jr=null,u=an,an=Qr(t.containerInfo),Tt(t,e),an=u,wt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{xi(t.containerInfo)}catch(ie){Ie(e,e.return,ie)}us&&(us=!1,Hm(e));break;case 4:i=an,an=Qr(e.stateNode.containerInfo),Tt(t,e),wt(e),an=i;break;case 12:Tt(t,e),wt(e);break;case 31:Tt(t,e),wt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nr(e,i)));break;case 13:Tt(t,e),wt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Br=yt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nr(e,i)));break;case 22:u=e.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,z=Rn,q=at;if(Rn=z||u,at=q||C,Tt(t,e),at=q,Rn=z,wt(e),i&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(a===null||C||Rn||at||Ma(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){C=a=t;try{if(d=C.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{S=C.stateNode;var P=C.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null;S.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(ie){Ie(C,C.return,ie)}}}else if(t.tag===6){if(a===null){C=t;try{C.stateNode.nodeValue=u?"":C.memoizedProps}catch(ie){Ie(C,C.return,ie)}}}else if(t.tag===18){if(a===null){C=t;try{var U=C.stateNode;u?Rh(U,!0):Rh(C.stateNode,!1)}catch(ie){Ie(C,C.return,ie)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Nr(e,a))));break;case 19:Tt(t,e),wt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Nr(e,i)));break;case 30:break;case 21:break;default:Tt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Dm(i)){a=i;break}i=i.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var u=a.stateNode,d=rs(e);_r(e,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(Fa(y,""),a.flags&=-33);var S=rs(e);_r(e,S,y);break;case 3:case 4:var C=a.stateNode.containerInfo,z=rs(e);os(e,z,C);break;default:throw Error(o(161))}}catch(q){Ie(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Hm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Dn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Lm(e,t.alternate,t),t=t.sibling}function Ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jn(4,t,t.return),Ma(t);break;case 1:cn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Rm(t,t.return,a),Ma(t);break;case 27:vl(t.stateNode);case 26:case 5:cn(t,t.return),Ma(t);break;case 22:t.memoizedState===null&&Ma(t);break;case 30:Ma(t);break;default:Ma(t)}e=e.sibling}}function zn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,u=e,d=t,y=d.flags;switch(d.tag){case 0:case 11:case 15:zn(u,d,a),ul(4,d);break;case 1:if(zn(u,d,a),i=d,u=i.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(z){Ie(i,i.return,z)}if(i=d,u=i.updateQueue,u!==null){var S=i.stateNode;try{var C=u.shared.hiddenCallbacks;if(C!==null)for(u.shared.hiddenCallbacks=null,u=0;u<C.length;u++)gd(C[u],S)}catch(z){Ie(i,i.return,z)}}a&&y&64&&Em(d),sl(d,d.return);break;case 27:zm(d);case 26:case 5:zn(u,d,a),a&&i===null&&y&4&&Mm(d),sl(d,d.return);break;case 12:zn(u,d,a);break;case 31:zn(u,d,a),a&&y&4&&Im(u,d);break;case 13:zn(u,d,a),a&&y&4&&Bm(u,d);break;case 22:d.memoizedState===null&&zn(u,d,a),sl(d,d.return);break;case 30:break;default:zn(u,d,a)}t=t.sibling}}function ss(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qi(a))}function cs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qi(e))}function ln(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jm(e,t,a,i),t=t.sibling}function jm(e,t,a,i){var u=t.flags;switch(t.tag){case 0:case 11:case 15:ln(e,t,a,i),u&2048&&ul(9,t);break;case 1:ln(e,t,a,i);break;case 3:ln(e,t,a,i),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qi(e)));break;case 12:if(u&2048){ln(e,t,a,i),e=t.stateNode;try{var d=t.memoizedProps,y=d.id,S=d.onPostCommit;typeof S=="function"&&S(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Ie(t,t.return,C)}}else ln(e,t,a,i);break;case 31:ln(e,t,a,i);break;case 13:ln(e,t,a,i);break;case 23:break;case 22:d=t.stateNode,y=t.alternate,t.memoizedState!==null?d._visibility&2?ln(e,t,a,i):cl(e,t):d._visibility&2?ln(e,t,a,i):(d._visibility|=2,ci(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),u&2048&&ss(y,t);break;case 24:ln(e,t,a,i),u&2048&&cs(t.alternate,t);break;default:ln(e,t,a,i)}}function ci(e,t,a,i,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var d=e,y=t,S=a,C=i,z=y.flags;switch(y.tag){case 0:case 11:case 15:ci(d,y,S,C,u),ul(8,y);break;case 23:break;case 22:var q=y.stateNode;y.memoizedState!==null?q._visibility&2?ci(d,y,S,C,u):cl(d,y):(q._visibility|=2,ci(d,y,S,C,u)),u&&z&2048&&ss(y.alternate,y);break;case 24:ci(d,y,S,C,u),u&&z&2048&&cs(y.alternate,y);break;default:ci(d,y,S,C,u)}t=t.sibling}}function cl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,u=i.flags;switch(i.tag){case 22:cl(a,i),u&2048&&ss(i.alternate,i);break;case 24:cl(a,i),u&2048&&cs(i.alternate,i);break;default:cl(a,i)}t=t.sibling}}var fl=8192;function fi(e,t,a){if(e.subtreeFlags&fl)for(e=e.child;e!==null;)qm(e,t,a),e=e.sibling}function qm(e,t,a){switch(e.tag){case 26:fi(e,t,a),e.flags&fl&&e.memoizedState!==null&&R0(a,an,e.memoizedState,e.memoizedProps);break;case 5:fi(e,t,a);break;case 3:case 4:var i=an;an=Qr(e.stateNode.containerInfo),fi(e,t,a),an=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=fl,fl=16777216,fi(e,t,a),fl=i):fi(e,t,a));break;default:fi(e,t,a)}}function Ym(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ut=i,Fm(i,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gm(e),e=e.sibling}function Gm(e){switch(e.tag){case 0:case 11:case 15:dl(e),e.flags&2048&&Jn(9,e,e.return);break;case 3:dl(e);break;case 12:dl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ir(e)):dl(e);break;default:dl(e)}}function Ir(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ut=i,Fm(i,e)}Ym(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jn(8,t,t.return),Ir(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ir(t));break;default:Ir(t)}e=e.sibling}}function Fm(e,t){for(;ut!==null;){var a=ut;switch(a.tag){case 0:case 11:case 15:Jn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Qi(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ut=i;else e:for(a=e;ut!==null;){i=ut;var u=i.sibling,d=i.return;if(_m(i),i===a){ut=null;break e}if(u!==null){u.return=d,ut=u;break e}ut=d}}}var G1={getCacheForType:function(e){var t=ft(et),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ft(et).controller.signal}},F1=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ye=null,ke=null,Ee=0,Ne=0,It=null,Wn=!1,di=!1,fs=!1,On=0,Je=0,$n=0,Da=0,ds=0,Bt=0,mi=0,ml=null,Et=null,ms=!1,Br=0,Vm=0,Ur=1/0,Hr=null,ea=null,rt=0,ta=null,hi=null,Ln=0,hs=0,ps=null,Pm=null,hl=0,gs=null;function Ut(){return(Le&2)!==0&&Ee!==0?Ee&-Ee:N.T!==null?As():uf()}function Km(){if(Bt===0)if((Ee&536870912)===0||Me){var e=Kl;Kl<<=1,(Kl&3932160)===0&&(Kl=262144),Bt=e}else Bt=536870912;return e=_t.current,e!==null&&(e.flags|=32),Bt}function Rt(e,t,a){(e===Ye&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(pi(e,0),na(e,Ee,Bt,!1)),Ni(e,a),((Le&2)===0||e!==Ye)&&(e===Ye&&((Le&2)===0&&(Da|=a),Je===4&&na(e,Ee,Bt,!1)),fn(e))}function Xm(e,t,a){if((Le&6)!==0)throw Error(o(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||_i(e,t),u=i?K1(e,t):vs(e,t,!0),d=i;do{if(u===0){di&&!i&&na(e,t,0,!1);break}else{if(a=e.current.alternate,d&&!V1(a)){u=vs(e,t,!1),d=!1;continue}if(u===2){if(d=t,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var S=e;u=ml;var C=S.current.memoizedState.isDehydrated;if(C&&(pi(S,y).flags|=256),y=vs(S,y,!1),y!==2){if(fs&&!C){S.errorRecoveryDisabledLanes|=d,Da|=d,u=4;break e}d=Et,Et=u,d!==null&&(Et===null?Et=d:Et.push.apply(Et,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){pi(e,0),na(e,t,0,!0);break}e:{switch(i=e,d=u,d){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:na(i,t,Bt,!Wn);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(u=Br+300-yt(),10<u)){if(na(i,t,Bt,!Wn),Ql(i,0,!0)!==0)break e;Ln=t,i.timeoutHandle=Th(Qm.bind(null,i,a,Et,Hr,ms,t,Bt,Da,mi,Wn,d,"Throttled",-0,0),u);break e}Qm(i,a,Et,Hr,ms,t,Bt,Da,mi,Wn,d,null,-0,0)}}break}while(!0);fn(e)}function Qm(e,t,a,i,u,d,y,S,C,z,q,P,_,U){if(e.timeoutHandle=-1,P=t.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vn},qm(t,d,P);var ie=(d&62914560)===d?Br-yt():(d&4194048)===d?Vm-yt():0;if(ie=M0(P,ie),ie!==null){Ln=d,e.cancelPendingCommit=ie(ah.bind(null,e,t,d,a,i,u,y,S,C,q,P,null,_,U)),na(e,d,y,!z);return}}ah(e,t,d,a,i,u,y,S,C)}function V1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var u=a[i],d=u.getSnapshot;u=u.value;try{if(!Ot(d(),u))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,a,i){t&=~ds,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var u=t;0<u;){var d=31-qe(u),y=1<<d;i[d]=-1,u&=~y}a!==0&&lf(e,a,t)}function jr(){return(Le&6)===0?(pl(0),!1):!0}function ys(){if(ke!==null){if(Ne===0)var e=ke.return;else e=ke,An=xa=null,Lu(e),li=null,Ji=0,e=ke;for(;e!==null;)wm(e.alternate,e),e=e.return;ke=null}}function pi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,f0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ln=0,ys(),Ye=e,ke=a=Sn(e.current,null),Ee=t,Ne=0,It=null,Wn=!1,di=_i(e,t),fs=!1,mi=Bt=ds=Da=$n=Je=0,Et=ml=null,ms=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var u=31-qe(i),d=1<<u;t|=e[u],i&=~d}return On=t,or(),a}function Zm(e,t){ye=null,N.H=ll,t===ii||t===pr?(t=dd(),Ne=3):t===xu?(t=dd(),Ne=4):Ne=t===Qu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,It=t,ke===null&&(Je=1,Mr(e,Vt(t,e.current)))}function Jm(){var e=_t.current;return e===null?!0:(Ee&4194048)===Ee?Qt===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===Qt:!1}function Wm(){var e=N.H;return N.H=ll,e===null?ll:e}function $m(){var e=N.A;return N.A=G1,e}function qr(){Je=4,Wn||(Ee&4194048)!==Ee&&_t.current!==null||(di=!0),($n&134217727)===0&&(Da&134217727)===0||Ye===null||na(Ye,Ee,Bt,!1)}function vs(e,t,a){var i=Le;Le|=2;var u=Wm(),d=$m();(Ye!==e||Ee!==t)&&(Hr=null,pi(e,t)),t=!1;var y=Je;e:do try{if(Ne!==0&&ke!==null){var S=ke,C=It;switch(Ne){case 8:ys(),y=6;break e;case 3:case 2:case 9:case 6:_t.current===null&&(t=!0);var z=Ne;if(Ne=0,It=null,gi(e,S,C,z),a&&di){y=0;break e}break;default:z=Ne,Ne=0,It=null,gi(e,S,C,z)}}P1(),y=Je;break}catch(q){Zm(e,q)}while(!0);return t&&e.shellSuspendCounter++,An=xa=null,Le=i,N.H=u,N.A=d,ke===null&&(Ye=null,Ee=0,or()),y}function P1(){for(;ke!==null;)eh(ke)}function K1(e,t){var a=Le;Le|=2;var i=Wm(),u=$m();Ye!==e||Ee!==t?(Hr=null,Ur=yt()+500,pi(e,t)):di=_i(e,t);e:do try{if(Ne!==0&&ke!==null){t=ke;var d=It;t:switch(Ne){case 1:Ne=0,It=null,gi(e,t,d,1);break;case 2:case 9:if(cd(d)){Ne=0,It=null,th(t);break}t=function(){Ne!==2&&Ne!==9||Ye!==e||(Ne=7),fn(e)},d.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:cd(d)?(Ne=0,It=null,th(t)):(Ne=0,It=null,gi(e,t,d,7));break;case 5:var y=null;switch(ke.tag){case 26:y=ke.memoizedState;case 5:case 27:var S=ke;if(y?jh(y):S.stateNode.complete){Ne=0,It=null;var C=S.sibling;if(C!==null)ke=C;else{var z=S.return;z!==null?(ke=z,Yr(z)):ke=null}break t}}Ne=0,It=null,gi(e,t,d,5);break;case 6:Ne=0,It=null,gi(e,t,d,6);break;case 8:ys(),Je=6;break e;default:throw Error(o(462))}}X1();break}catch(q){Zm(e,q)}while(!0);return An=xa=null,N.H=i,N.A=u,Le=a,ke!==null?0:(Ye=null,Ee=0,or(),Je)}function X1(){for(;ke!==null&&!zo();)eh(ke)}function eh(e){var t=Cm(e.alternate,e,On);e.memoizedProps=e.pendingProps,t===null?Yr(e):ke=t}function th(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=vm(a,t,t.pendingProps,t.type,void 0,Ee);break;case 11:t=vm(a,t,t.pendingProps,t.type.render,t.ref,Ee);break;case 5:Lu(t);default:wm(a,t),t=ke=$f(t,On),t=Cm(a,t,On)}e.memoizedProps=e.pendingProps,t===null?Yr(e):ke=t}function gi(e,t,a,i){An=xa=null,Lu(t),li=null,Ji=0;var u=t.return;try{if(I1(e,u,t,a,Ee)){Je=1,Mr(e,Vt(a,e.current)),ke=null;return}}catch(d){if(u!==null)throw ke=u,d;Je=1,Mr(e,Vt(a,e.current)),ke=null;return}t.flags&32768?(Me||i===1?e=!0:di||(Ee&536870912)!==0?e=!1:(Wn=e=!0,(i===2||i===9||i===3||i===6)&&(i=_t.current,i!==null&&i.tag===13&&(i.flags|=16384))),nh(t,e)):Yr(t)}function Yr(e){var t=e;do{if((t.flags&32768)!==0){nh(t,Wn);return}e=t.return;var a=H1(t.alternate,t,On);if(a!==null){ke=a;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Je===0&&(Je=5)}function nh(e,t){do{var a=j1(e.alternate,e);if(a!==null){a.flags&=32767,ke=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ke=e;return}ke=e=a}while(e!==null);Je=6,ke=null}function ah(e,t,a,i,u,d,y,S,C){e.cancelPendingCommit=null;do Gr();while(rt!==0);if((Le&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(d=t.lanes|t.childLanes,d|=ru,Ey(e,a,d,y,S,C),e===Ye&&(ke=Ye=null,Ee=0),hi=t,ta=e,Ln=a,hs=d,ps=u,Pm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,W1(pe,function(){return uh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=N.T,N.T=null,u=X.p,X.p=2,y=Le,Le|=4;try{q1(e,t,a)}finally{Le=y,X.p=u,N.T=i}}rt=1,ih(),lh(),rh()}}function ih(){if(rt===1){rt=0;var e=ta,t=hi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var i=X.p;X.p=2;var u=Le;Le|=4;try{Um(t,e);var d=Ds,y=Ff(e.containerInfo),S=d.focusedElem,C=d.selectionRange;if(y!==S&&S&&S.ownerDocument&&Gf(S.ownerDocument.documentElement,S)){if(C!==null&&tu(S)){var z=C.start,q=C.end;if(q===void 0&&(q=z),"selectionStart"in S)S.selectionStart=z,S.selectionEnd=Math.min(q,S.value.length);else{var P=S.ownerDocument||document,_=P&&P.defaultView||window;if(_.getSelection){var U=_.getSelection(),ie=S.textContent.length,fe=Math.min(C.start,ie),je=C.end===void 0?fe:Math.min(C.end,ie);!U.extend&&fe>je&&(y=je,je=fe,fe=y);var M=Yf(S,fe),E=Yf(S,je);if(M&&E&&(U.rangeCount!==1||U.anchorNode!==M.node||U.anchorOffset!==M.offset||U.focusNode!==E.node||U.focusOffset!==E.offset)){var D=P.createRange();D.setStart(M.node,M.offset),U.removeAllRanges(),fe>je?(U.addRange(D),U.extend(E.node,E.offset)):(D.setEnd(E.node,E.offset),U.addRange(D))}}}}for(P=[],U=S;U=U.parentNode;)U.nodeType===1&&P.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<P.length;S++){var F=P[S];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}to=!!Ms,Ds=Ms=null}finally{Le=u,X.p=i,N.T=a}}e.current=t,rt=2}}function lh(){if(rt===2){rt=0;var e=ta,t=hi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var i=X.p;X.p=2;var u=Le;Le|=4;try{Lm(e,t.alternate,t)}finally{Le=u,X.p=i,N.T=a}}rt=3}}function rh(){if(rt===4||rt===3){rt=0,Oo();var e=ta,t=hi,a=Ln,i=Pm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,hi=ta=null,oh(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ea=null),Io(a),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(vt,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=N.T,u=X.p,X.p=2,N.T=null;try{for(var d=e.onRecoverableError,y=0;y<i.length;y++){var S=i[y];d(S.value,{componentStack:S.stack})}}finally{N.T=t,X.p=u}}(Ln&3)!==0&&Gr(),fn(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===gs?hl++:(hl=0,gs=e):hl=0,pl(0)}}function oh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qi(t)))}function Gr(){return ih(),lh(),rh(),uh()}function uh(){if(rt!==5)return!1;var e=ta,t=hs;hs=0;var a=Io(Ln),i=N.T,u=X.p;try{X.p=32>a?32:a,N.T=null,a=ps,ps=null;var d=ta,y=Ln;if(rt=0,hi=ta=null,Ln=0,(Le&6)!==0)throw Error(o(331));var S=Le;if(Le|=4,Gm(d.current),jm(d,d.current,y,a),Le=S,pl(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(vt,d)}catch{}return!0}finally{X.p=u,N.T=i,oh(e,t)}}function sh(e,t,a){t=Vt(a,t),t=Xu(e.stateNode,t,2),e=Xn(e,t,2),e!==null&&(Ni(e,2),fn(e))}function Ie(e,t,a){if(e.tag===3)sh(e,e,a);else for(;t!==null;){if(t.tag===3){sh(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ea===null||!ea.has(i))){e=Vt(a,e),a=cm(2),i=Xn(t,a,2),i!==null&&(fm(a,i,t,e),Ni(i,2),fn(i));break}}t=t.return}}function bs(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new F1;var u=new Set;i.set(t,u)}else u=i.get(t),u===void 0&&(u=new Set,i.set(t,u));u.has(a)||(fs=!0,u.add(a),e=Q1.bind(null,e,t,a),t.then(e,e))}function Q1(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Ee&a)===a&&(Je===4||Je===3&&(Ee&62914560)===Ee&&300>yt()-Br?(Le&2)===0&&pi(e,0):ds|=a,mi===Ee&&(mi=0)),fn(e)}function ch(e,t){t===0&&(t=af()),e=va(e,t),e!==null&&(Ni(e,t),fn(e))}function Z1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ch(e,a)}function J1(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),ch(e,a)}function W1(e,t){return Ba(e,t)}var Fr=null,yi=null,Ss=!1,Vr=!1,xs=!1,aa=0;function fn(e){e!==yi&&e.next===null&&(yi===null?Fr=yi=e:yi=yi.next=e),Vr=!0,Ss||(Ss=!0,e0())}function pl(e,t){if(!xs&&Vr){xs=!0;do for(var a=!1,i=Fr;i!==null;){if(e!==0){var u=i.pendingLanes;if(u===0)var d=0;else{var y=i.suspendedLanes,S=i.pingedLanes;d=(1<<31-qe(42|e)+1)-1,d&=u&~(y&~S),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,hh(i,d))}else d=Ee,d=Ql(i,i===Ye?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(d&3)===0||_i(i,d)||(a=!0,hh(i,d));i=i.next}while(a);xs=!1}}function $1(){fh()}function fh(){Vr=Ss=!1;var e=0;aa!==0&&c0()&&(e=aa);for(var t=yt(),a=null,i=Fr;i!==null;){var u=i.next,d=dh(i,t);d===0?(i.next=null,a===null?Fr=u:a.next=u,u===null&&(yi=a)):(a=i,(e!==0||(d&3)!==0)&&(Vr=!0)),i=u}rt!==0&&rt!==5||pl(e),aa!==0&&(aa=0)}function dh(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-qe(d),S=1<<y,C=u[y];C===-1?((S&a)===0||(S&i)!==0)&&(u[y]=wy(S,t)):C<=t&&(e.expiredLanes|=S),d&=~S}if(t=Ye,a=Ee,a=Ql(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Li(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||_i(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&Li(i),Io(a)){case 2:case 8:a=J;break;case 32:a=pe;break;case 268435456:a=_e;break;default:a=pe}return i=mh.bind(null,e),a=Ba(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&Li(i),e.callbackPriority=2,e.callbackNode=null,2}function mh(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gr()&&e.callbackNode!==a)return null;var i=Ee;return i=Ql(e,e===Ye?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Xm(e,i,t),dh(e,yt()),e.callbackNode!=null&&e.callbackNode===a?mh.bind(null,e):null)}function hh(e,t){if(Gr())return null;Xm(e,t,!0)}function e0(){d0(function(){(Le&6)!==0?Ba(G,$1):fh()})}function As(){if(aa===0){var e=ni;e===0&&(e=Pl,Pl<<=1,(Pl&261888)===0&&(Pl=256)),aa=e}return aa}function ph(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$l(""+e)}function gh(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function t0(e,t,a,i,u){if(t==="submit"&&a&&a.stateNode===u){var d=ph((u[At]||null).action),y=i.submitter;y&&(t=(t=y[At]||null)?ph(t.formAction):y.getAttribute("formAction"),t!==null&&(d=t,y=null));var S=new ar("action","action",null,i,u);e.push({event:S,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(aa!==0){var C=y?gh(u,y):new FormData(u);Yu(a,{pending:!0,data:C,method:u.method,action:d},null,C)}}else typeof d=="function"&&(S.preventDefault(),C=y?gh(u,y):new FormData(u),Yu(a,{pending:!0,data:C,method:u.method,action:d},d,C))},currentTarget:u}]})}}for(var ks=0;ks<lu.length;ks++){var Cs=lu[ks],n0=Cs.toLowerCase(),a0=Cs[0].toUpperCase()+Cs.slice(1);nn(n0,"on"+a0)}nn(Kf,"onAnimationEnd"),nn(Xf,"onAnimationIteration"),nn(Qf,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(b1,"onTransitionRun"),nn(S1,"onTransitionStart"),nn(x1,"onTransitionCancel"),nn(Zf,"onTransitionEnd"),Ya("onMouseEnter",["mouseout","mouseover"]),Ya("onMouseLeave",["mouseout","mouseover"]),Ya("onPointerEnter",["pointerout","pointerover"]),Ya("onPointerLeave",["pointerout","pointerover"]),ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function yh(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],u=i.event;i=i.listeners;e:{var d=void 0;if(t)for(var y=i.length-1;0<=y;y--){var S=i[y],C=S.instance,z=S.currentTarget;if(S=S.listener,C!==d&&u.isPropagationStopped())break e;d=S,u.currentTarget=z;try{d(u)}catch(q){rr(q)}u.currentTarget=null,d=C}else for(y=0;y<i.length;y++){if(S=i[y],C=S.instance,z=S.currentTarget,S=S.listener,C!==d&&u.isPropagationStopped())break e;d=S,u.currentTarget=z;try{d(u)}catch(q){rr(q)}u.currentTarget=null,d=C}}}}function Ce(e,t){var a=t[Bo];a===void 0&&(a=t[Bo]=new Set);var i=e+"__bubble";a.has(i)||(vh(t,e,2,!1),a.add(i))}function Ts(e,t,a){var i=0;t&&(i|=4),vh(a,e,i,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function ws(e){if(!e[Pr]){e[Pr]=!0,ff.forEach(function(a){a!=="selectionchange"&&(i0.has(a)||Ts(a,!1,e),Ts(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,Ts("selectionchange",!1,t))}}function vh(e,t,a,i){switch(Kh(t)){case 2:var u=O0;break;case 8:u=L0;break;default:u=qs}a=u.bind(null,t,a,e),u=void 0,!Po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),i?u!==void 0?e.addEventListener(t,a,{capture:!0,passive:u}):e.addEventListener(t,a,!0):u!==void 0?e.addEventListener(t,a,{passive:u}):e.addEventListener(t,a,!1)}function Es(e,t,a,i,u){var d=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var y=i.tag;if(y===3||y===4){var S=i.stateNode.containerInfo;if(S===u)break;if(y===4)for(y=i.return;y!==null;){var C=y.tag;if((C===3||C===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;S!==null;){if(y=Ha(S),y===null)return;if(C=y.tag,C===5||C===6||C===26||C===27){i=d=y;continue e}S=S.parentNode}}i=i.return}kf(function(){var z=d,q=Fo(a),P=[];e:{var _=Jf.get(e);if(_!==void 0){var U=ar,ie=e;switch(e){case"keypress":if(tr(a)===0)break e;case"keydown":case"keyup":U=Jy;break;case"focusin":ie="focus",U=Zo;break;case"focusout":ie="blur",U=Zo;break;case"beforeblur":case"afterblur":U=Zo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=e1;break;case Kf:case Xf:case Qf:U=Yy;break;case Zf:U=n1;break;case"scroll":case"scrollend":U=By;break;case"wheel":U=i1;break;case"copy":case"cut":case"paste":U=Fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Rf;break;case"toggle":case"beforetoggle":U=r1}var fe=(t&4)!==0,je=!fe&&(e==="scroll"||e==="scrollend"),M=fe?_!==null?_+"Capture":null:_;fe=[];for(var E=z,D;E!==null;){var F=E;if(D=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||D===null||M===null||(F=Ui(E,M),F!=null&&fe.push(yl(E,F,D))),je)break;E=E.return}0<fe.length&&(_=new U(_,ie,null,a,q),P.push({event:_,listeners:fe}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",_&&a!==Go&&(ie=a.relatedTarget||a.fromElement)&&(Ha(ie)||ie[Ua]))break e;if((U||_)&&(_=q.window===q?q:(_=q.ownerDocument)?_.defaultView||_.parentWindow:window,U?(ie=a.relatedTarget||a.toElement,U=z,ie=ie?Ha(ie):null,ie!==null&&(je=c(ie),fe=ie.tag,ie!==je||fe!==5&&fe!==27&&fe!==6)&&(ie=null)):(U=null,ie=z),U!==ie)){if(fe=wf,F="onMouseLeave",M="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Rf,F="onPointerLeave",M="onPointerEnter",E="pointer"),je=U==null?_:Bi(U),D=ie==null?_:Bi(ie),_=new fe(F,E+"leave",U,a,q),_.target=je,_.relatedTarget=D,F=null,Ha(q)===z&&(fe=new fe(M,E+"enter",ie,a,q),fe.target=D,fe.relatedTarget=je,F=fe),je=F,U&&ie)t:{for(fe=l0,M=U,E=ie,D=0,F=M;F;F=fe(F))D++;F=0;for(var se=E;se;se=fe(se))F++;for(;0<D-F;)M=fe(M),D--;for(;0<F-D;)E=fe(E),F--;for(;D--;){if(M===E||E!==null&&M===E.alternate){fe=M;break t}M=fe(M),E=fe(E)}fe=null}else fe=null;U!==null&&bh(P,_,U,fe,!1),ie!==null&&je!==null&&bh(P,je,ie,fe,!0)}}e:{if(_=z?Bi(z):window,U=_.nodeName&&_.nodeName.toLowerCase(),U==="select"||U==="input"&&_.type==="file")var ze=If;else if(_f(_))if(Bf)ze=g1;else{ze=h1;var re=m1}else U=_.nodeName,!U||U.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?z&&Yo(z.elementType)&&(ze=If):ze=p1;if(ze&&(ze=ze(e,z))){Nf(P,ze,a,q);break e}re&&re(e,_,z),e==="focusout"&&z&&_.type==="number"&&z.memoizedProps.value!=null&&qo(_,"number",_.value)}switch(re=z?Bi(z):window,e){case"focusin":(_f(re)||re.contentEditable==="true")&&(Xa=re,nu=z,Pi=null);break;case"focusout":Pi=nu=Xa=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Vf(P,a,q);break;case"selectionchange":if(v1)break;case"keydown":case"keyup":Vf(P,a,q)}var ve;if(Wo)e:{switch(e){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Ka?Of(e,a)&&(Re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Re="onCompositionStart");Re&&(Mf&&a.locale!=="ko"&&(Ka||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Ka&&(ve=Cf()):(qn=q,Ko="value"in qn?qn.value:qn.textContent,Ka=!0)),re=Kr(z,Re),0<re.length&&(Re=new Ef(Re,e,null,a,q),P.push({event:Re,listeners:re}),ve?Re.data=ve:(ve=Lf(a),ve!==null&&(Re.data=ve)))),(ve=u1?s1(e,a):c1(e,a))&&(Re=Kr(z,"onBeforeInput"),0<Re.length&&(re=new Ef("onBeforeInput","beforeinput",null,a,q),P.push({event:re,listeners:Re}),re.data=ve)),t0(P,e,z,a,q)}yh(P,t)})}function yl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Kr(e,t){for(var a=t+"Capture",i=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ui(e,a),u!=null&&i.unshift(yl(e,u,d)),u=Ui(e,t),u!=null&&i.push(yl(e,u,d))),e.tag===3)return i;e=e.return}return[]}function l0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bh(e,t,a,i,u){for(var d=t._reactName,y=[];a!==null&&a!==i;){var S=a,C=S.alternate,z=S.stateNode;if(S=S.tag,C!==null&&C===i)break;S!==5&&S!==26&&S!==27||z===null||(C=z,u?(z=Ui(a,d),z!=null&&y.unshift(yl(a,z,C))):u||(z=Ui(a,d),z!=null&&y.push(yl(a,z,C)))),a=a.return}y.length!==0&&e.push({event:t,listeners:y})}var r0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function Sh(e){return(typeof e=="string"?e:""+e).replace(r0,`
`).replace(o0,"")}function xh(e,t){return t=Sh(t),Sh(e)===t}function He(e,t,a,i,u,d){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Fa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Fa(e,""+i);break;case"className":Jl(e,"class",i);break;case"tabIndex":Jl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Jl(e,a,i);break;case"style":xf(e,i,d);break;case"data":if(t!=="object"){Jl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=$l(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(t!=="input"&&He(e,t,"name",u.name,u,null),He(e,t,"formEncType",u.formEncType,u,null),He(e,t,"formMethod",u.formMethod,u,null),He(e,t,"formTarget",u.formTarget,u,null)):(He(e,t,"encType",u.encType,u,null),He(e,t,"method",u.method,u,null),He(e,t,"target",u.target,u,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=$l(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=vn);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=$l(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Zl(e,"popover",i);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Zl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ny.get(a)||a,Zl(e,a,i))}}function Rs(e,t,a,i,u,d){switch(a){case"style":xf(e,i,d);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(a=i.__html,a!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Fa(e,i):(typeof i=="number"||typeof i=="bigint")&&Fa(e,""+i);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"onClick":i!=null&&(e.onclick=vn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!df.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),t=a.slice(2,u?a.length-7:void 0),d=e[At]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(t,d,u),typeof i=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,u);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Zl(e,a,i)}}}function mt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var i=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":i=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:He(e,t,d,y,a,null)}}u&&He(e,t,"srcSet",a.srcSet,a,null),i&&He(e,t,"src",a.src,a,null);return;case"input":Ce("invalid",e);var S=d=y=u=null,C=null,z=null;for(i in a)if(a.hasOwnProperty(i)){var q=a[i];if(q!=null)switch(i){case"name":u=q;break;case"type":y=q;break;case"checked":C=q;break;case"defaultChecked":z=q;break;case"value":d=q;break;case"defaultValue":S=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,t));break;default:He(e,t,i,q,a,null)}}yf(e,d,S,C,z,y,u,!1);return;case"select":Ce("invalid",e),i=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(S=a[u],S!=null))switch(u){case"value":d=S;break;case"defaultValue":y=S;break;case"multiple":i=S;default:He(e,t,u,S,a,null)}t=d,a=y,e.multiple=!!i,t!=null?Ga(e,!!i,t,!1):a!=null&&Ga(e,!!i,a,!0);return;case"textarea":Ce("invalid",e),d=u=i=null;for(y in a)if(a.hasOwnProperty(y)&&(S=a[y],S!=null))switch(y){case"value":i=S;break;case"defaultValue":u=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(o(91));break;default:He(e,t,y,S,a,null)}bf(e,i,u,d);return;case"option":for(C in a)a.hasOwnProperty(C)&&(i=a[C],i!=null)&&(C==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":He(e,t,C,i,a,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(i=0;i<gl.length;i++)Ce(gl[i],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(i=a[z],i!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:He(e,t,z,i,a,null)}return;default:if(Yo(t)){for(q in a)a.hasOwnProperty(q)&&(i=a[q],i!==void 0&&Rs(e,t,q,i,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(i=a[S],i!=null&&He(e,t,S,i,a,null))}function u0(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,S=null,C=null,z=null,q=null;for(U in a){var P=a[U];if(a.hasOwnProperty(U)&&P!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":C=P;default:i.hasOwnProperty(U)||He(e,t,U,null,i,P)}}for(var _ in i){var U=i[_];if(P=a[_],i.hasOwnProperty(_)&&(U!=null||P!=null))switch(_){case"type":d=U;break;case"name":u=U;break;case"checked":z=U;break;case"defaultChecked":q=U;break;case"value":y=U;break;case"defaultValue":S=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:U!==P&&He(e,t,_,U,i,P)}}jo(e,y,S,C,z,q,d,u);return;case"select":U=y=S=_=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":U=C;default:i.hasOwnProperty(d)||He(e,t,d,null,i,C)}for(u in i)if(d=i[u],C=a[u],i.hasOwnProperty(u)&&(d!=null||C!=null))switch(u){case"value":_=d;break;case"defaultValue":S=d;break;case"multiple":y=d;default:d!==C&&He(e,t,u,d,i,C)}t=S,a=y,i=U,_!=null?Ga(e,!!a,_,!1):!!i!=!!a&&(t!=null?Ga(e,!!a,t,!0):Ga(e,!!a,a?[]:"",!1));return;case"textarea":U=_=null;for(S in a)if(u=a[S],a.hasOwnProperty(S)&&u!=null&&!i.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:He(e,t,S,null,i,u)}for(y in i)if(u=i[y],d=a[y],i.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":_=u;break;case"defaultValue":U=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==d&&He(e,t,y,u,i,d)}vf(e,_,U);return;case"option":for(var ie in a)_=a[ie],a.hasOwnProperty(ie)&&_!=null&&!i.hasOwnProperty(ie)&&(ie==="selected"?e.selected=!1:He(e,t,ie,null,i,_));for(C in i)_=i[C],U=a[C],i.hasOwnProperty(C)&&_!==U&&(_!=null||U!=null)&&(C==="selected"?e.selected=_&&typeof _!="function"&&typeof _!="symbol":He(e,t,C,_,i,U));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in a)_=a[fe],a.hasOwnProperty(fe)&&_!=null&&!i.hasOwnProperty(fe)&&He(e,t,fe,null,i,_);for(z in i)if(_=i[z],U=a[z],i.hasOwnProperty(z)&&_!==U&&(_!=null||U!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,t));break;default:He(e,t,z,_,i,U)}return;default:if(Yo(t)){for(var je in a)_=a[je],a.hasOwnProperty(je)&&_!==void 0&&!i.hasOwnProperty(je)&&Rs(e,t,je,void 0,i,_);for(q in i)_=i[q],U=a[q],!i.hasOwnProperty(q)||_===U||_===void 0&&U===void 0||Rs(e,t,q,_,i,U);return}}for(var M in a)_=a[M],a.hasOwnProperty(M)&&_!=null&&!i.hasOwnProperty(M)&&He(e,t,M,null,i,_);for(P in i)_=i[P],U=a[P],!i.hasOwnProperty(P)||_===U||_==null&&U==null||He(e,t,P,_,i,U)}function Ah(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function s0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var u=a[i],d=u.transferSize,y=u.initiatorType,S=u.duration;if(d&&S&&Ah(y)){for(y=0,S=u.responseEnd,i+=1;i<a.length;i++){var C=a[i],z=C.startTime;if(z>S)break;var q=C.transferSize,P=C.initiatorType;q&&Ah(P)&&(C=C.responseEnd,y+=q*(C<S?1:(S-z)/(C-z)))}if(--i,t+=8*(d+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ms=null,Ds=null;function Xr(e){return e.nodeType===9?e:e.ownerDocument}function kh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ch(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Os=null;function c0(){var e=window.event;return e&&e.type==="popstate"?e===Os?!1:(Os=e,!0):(Os=null,!1)}var Th=typeof setTimeout=="function"?setTimeout:void 0,f0=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,d0=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(e){return wh.resolve(null).then(e).catch(m0)}:Th;function m0(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function Eh(e,t){var a=t,i=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(u),xi(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")vl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,vl(a);for(var d=a.firstChild;d;){var y=d.nextSibling,S=d.nodeName;d[Ii]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&vl(e.ownerDocument.body);a=u}while(a);xi(t)}function Rh(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Ls(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ls(a),Uo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function h0(e,t,a,i){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ii])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function p0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Zt(e.nextSibling),e===null))return null;return e}function Mh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function _s(e){return e.data==="$?"||e.data==="$~"}function Ns(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function g0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Is=null;function Dh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function zh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Oh(e,t,a){switch(t=Xr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function vl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Uo(e)}var Jt=new Map,Lh=new Set;function Qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _n=X.d;X.d={f:y0,r:v0,D:b0,C:S0,L:x0,m:A0,X:C0,S:k0,M:T0};function y0(){var e=_n.f(),t=jr();return e||t}function v0(e){var t=ja(e);t!==null&&t.tag===5&&t.type==="form"?Zd(t):_n.r(e)}var vi=typeof document>"u"?null:document;function _h(e,t,a){var i=vi;if(i&&typeof t=="string"&&t){var u=Gt(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Lh.has(u)||(Lh.add(u),e={rel:e,crossOrigin:a,href:t},i.querySelector(u)===null&&(t=i.createElement("link"),mt(t,"link",e),ot(t),i.head.appendChild(t)))}}function b0(e){_n.D(e),_h("dns-prefetch",e,null)}function S0(e,t){_n.C(e,t),_h("preconnect",e,t)}function x0(e,t,a){_n.L(e,t,a);var i=vi;if(i&&e&&t){var u='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Gt(a.imageSizes)+'"]')):u+='[href="'+Gt(e)+'"]';var d=u;switch(t){case"style":d=bi(e);break;case"script":d=Si(e)}Jt.has(d)||(e=g({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Jt.set(d,e),i.querySelector(u)!==null||t==="style"&&i.querySelector(bl(d))||t==="script"&&i.querySelector(Sl(d))||(t=i.createElement("link"),mt(t,"link",e),ot(t),i.head.appendChild(t)))}}function A0(e,t){_n.m(e,t);var a=vi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+Gt(i)+'"][href="'+Gt(e)+'"]',d=u;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Si(e)}if(!Jt.has(d)&&(e=g({rel:"modulepreload",href:e},t),Jt.set(d,e),a.querySelector(u)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(d)))return}i=a.createElement("link"),mt(i,"link",e),ot(i),a.head.appendChild(i)}}}function k0(e,t,a){_n.S(e,t,a);var i=vi;if(i&&e){var u=qa(i).hoistableStyles,d=bi(e);t=t||"default";var y=u.get(d);if(!y){var S={loading:0,preload:null};if(y=i.querySelector(bl(d)))S.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Jt.get(d))&&Bs(e,a);var C=y=i.createElement("link");ot(C),mt(C,"link",e),C._p=new Promise(function(z,q){C.onload=z,C.onerror=q}),C.addEventListener("load",function(){S.loading|=1}),C.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Zr(y,t,i)}y={type:"stylesheet",instance:y,count:1,state:S},u.set(d,y)}}}function C0(e,t){_n.X(e,t);var a=vi;if(a&&e){var i=qa(a).hoistableScripts,u=Si(e),d=i.get(u);d||(d=a.querySelector(Sl(u)),d||(e=g({src:e,async:!0},t),(t=Jt.get(u))&&Us(e,t),d=a.createElement("script"),ot(d),mt(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(u,d))}}function T0(e,t){_n.M(e,t);var a=vi;if(a&&e){var i=qa(a).hoistableScripts,u=Si(e),d=i.get(u);d||(d=a.querySelector(Sl(u)),d||(e=g({src:e,async:!0,type:"module"},t),(t=Jt.get(u))&&Us(e,t),d=a.createElement("script"),ot(d),mt(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(u,d))}}function Nh(e,t,a,i){var u=(u=ue.current)?Qr(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=bi(a.href),a=qa(u).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=bi(a.href);var d=qa(u).hoistableStyles,y=d.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=u.querySelector(bl(e)))&&!d._p&&(y.instance=d,y.state.loading=5),Jt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Jt.set(e,a),d||w0(u,e,a,y.state))),t&&i===null)throw Error(o(528,""));return y}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Si(a),a=qa(u).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function bi(e){return'href="'+Gt(e)+'"'}function bl(e){return'link[rel="stylesheet"]['+e+"]"}function Ih(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function w0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),mt(t,"link",a),ot(t),e.head.appendChild(t))}function Si(e){return'[src="'+Gt(e)+'"]'}function Sl(e){return"script[async]"+e}function Bh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(i)return t.instance=i,ot(i),i;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ot(i),mt(i,"style",u),Zr(i,a.precedence,e),t.instance=i;case"stylesheet":u=bi(a.href);var d=e.querySelector(bl(u));if(d)return t.state.loading|=4,t.instance=d,ot(d),d;i=Ih(a),(u=Jt.get(u))&&Bs(i,u),d=(e.ownerDocument||e).createElement("link"),ot(d);var y=d;return y._p=new Promise(function(S,C){y.onload=S,y.onerror=C}),mt(d,"link",i),t.state.loading|=4,Zr(d,a.precedence,e),t.instance=d;case"script":return d=Si(a.src),(u=e.querySelector(Sl(d)))?(t.instance=u,ot(u),u):(i=a,(u=Jt.get(d))&&(i=g({},a),Us(i,u)),e=e.ownerDocument||e,u=e.createElement("script"),ot(u),mt(u,"link",i),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Zr(i,a.precedence,e));return t.instance}function Zr(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=i.length?i[i.length-1]:null,d=u,y=0;y<i.length;y++){var S=i[y];if(S.dataset.precedence===t)d=S;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Bs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Us(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Jr=null;function Uh(e,t,a){if(Jr===null){var i=new Map,u=Jr=new Map;u.set(a,i)}else u=Jr,i=u.get(a),i||(i=new Map,u.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Ii]||d[st]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(t)||"";y=e+y;var S=i.get(y);S?S.push(d):i.set(y,[d])}}return i}function Hh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function E0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function R0(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=bi(i.href),d=t.querySelector(bl(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=d,ot(d);return}d=t.ownerDocument||t,i=Ih(i),(u=Jt.get(u))&&Bs(i,u),d=d.createElement("link"),ot(d);var y=d;y._p=new Promise(function(S,C){y.onload=S,y.onerror=C}),mt(d,"link",i),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Hs=0;function M0(e,t){return e.stylesheets&&e.count===0&&eo(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&eo(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+t);0<e.imgBytes&&Hs===0&&(Hs=62500*s0());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&eo(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Hs?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(u)}}:null}function Wr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $r=null;function eo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$r=new Map,t.forEach(D0,e),$r=null,Wr.call(e))}function D0(e,t){if(!(t.state.loading&4)){var a=$r.get(e);if(a)var i=a.get(null);else{a=new Map,$r.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),i=y)}i&&a.set(null,i)}u=t.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||i,d===i&&a.set(null,u),a.set(y,u),this.count++,i=Wr.bind(this),u.addEventListener("load",i),u.addEventListener("error",i),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var xl={$$typeof:B,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function z0(e,t,a,i,u,d,y,S,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.hiddenUpdates=_o(null),this.identifierPrefix=i,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function qh(e,t,a,i,u,d,y,S,C,z,q,P){return e=new z0(e,t,a,y,C,z,q,P,S),t=1,d===!0&&(t|=24),d=Lt(3,null,null,t),e.current=d,d.stateNode=e,t=vu(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:i,isDehydrated:a,cache:t},Au(d),e}function Yh(e){return e?(e=Ja,e):Ja}function Gh(e,t,a,i,u,d){u=Yh(u),i.context===null?i.context=u:i.pendingContext=u,i=Kn(t),i.payload={element:a},d=d===void 0?null:d,d!==null&&(i.callback=d),a=Xn(e,i,t),a!==null&&(Rt(a,e,t),$i(a,e,t))}function Fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function js(e,t){Fh(e,t),(e=e.alternate)&&Fh(e,t)}function Vh(e){if(e.tag===13||e.tag===31){var t=va(e,67108864);t!==null&&Rt(t,e,67108864),js(e,67108864)}}function Ph(e){if(e.tag===13||e.tag===31){var t=Ut();t=No(t);var a=va(e,t);a!==null&&Rt(a,e,t),js(e,t)}}var to=!0;function O0(e,t,a,i){var u=N.T;N.T=null;var d=X.p;try{X.p=2,qs(e,t,a,i)}finally{X.p=d,N.T=u}}function L0(e,t,a,i){var u=N.T;N.T=null;var d=X.p;try{X.p=8,qs(e,t,a,i)}finally{X.p=d,N.T=u}}function qs(e,t,a,i){if(to){var u=Ys(i);if(u===null)Es(e,t,i,no,a),Xh(e,i);else if(N0(u,e,t,a,i))i.stopPropagation();else if(Xh(e,i),t&4&&-1<_0.indexOf(e)){for(;u!==null;){var d=ja(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=ma(d.pendingLanes);if(y!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;y;){var C=1<<31-qe(y);S.entanglements[1]|=C,y&=~C}fn(d),(Le&6)===0&&(Ur=yt()+500,pl(0))}}break;case 31:case 13:S=va(d,2),S!==null&&Rt(S,d,2),jr(),js(d,2)}if(d=Ys(i),d===null&&Es(e,t,i,no,a),d===u)break;u=d}u!==null&&i.stopPropagation()}else Es(e,t,i,null,a)}}function Ys(e){return e=Fo(e),Gs(e)}var no=null;function Gs(e){if(no=null,e=Ha(e),e!==null){var t=c(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=f(t),e!==null)return e;e=null}else if(a===31){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return no=e,null}function Kh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lo()){case G:return 2;case J:return 8;case pe:case Ae:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Fs=!1,la=null,ra=null,oa=null,Al=new Map,kl=new Map,ua=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xh(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":Al.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(t.pointerId)}}function Cl(e,t,a,i,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:d,targetContainers:[u]},t!==null&&(t=ja(t),t!==null&&Vh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function N0(e,t,a,i,u){switch(t){case"focusin":return la=Cl(la,e,t,a,i,u),!0;case"dragenter":return ra=Cl(ra,e,t,a,i,u),!0;case"mouseover":return oa=Cl(oa,e,t,a,i,u),!0;case"pointerover":var d=u.pointerId;return Al.set(d,Cl(Al.get(d)||null,e,t,a,i,u)),!0;case"gotpointercapture":return d=u.pointerId,kl.set(d,Cl(kl.get(d)||null,e,t,a,i,u)),!0}return!1}function Qh(e){var t=Ha(e.target);if(t!==null){var a=c(t);if(a!==null){if(t=a.tag,t===13){if(t=f(a),t!==null){e.blockedOn=t,sf(e.priority,function(){Ph(a)});return}}else if(t===31){if(t=h(a),t!==null){e.blockedOn=t,sf(e.priority,function(){Ph(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ys(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Go=i,a.target.dispatchEvent(i),Go=null}else return t=ja(a),t!==null&&Vh(t),e.blockedOn=a,!1;t.shift()}return!0}function Zh(e,t,a){ao(e)&&a.delete(t)}function I0(){Fs=!1,la!==null&&ao(la)&&(la=null),ra!==null&&ao(ra)&&(ra=null),oa!==null&&ao(oa)&&(oa=null),Al.forEach(Zh),kl.forEach(Zh)}function io(e,t){e.blockedOn===t&&(e.blockedOn=null,Fs||(Fs=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,I0)))}var lo=null;function Jh(e){lo!==e&&(lo=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){lo===e&&(lo=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],u=e[t+2];if(typeof i!="function"){if(Gs(i||a)===null)continue;break}var d=ja(a);d!==null&&(e.splice(t,3),t-=3,Yu(d,{pending:!0,data:u,method:a.method,action:i},i,u))}}))}function xi(e){function t(C){return io(C,e)}la!==null&&io(la,e),ra!==null&&io(ra,e),oa!==null&&io(oa,e),Al.forEach(t),kl.forEach(t);for(var a=0;a<ua.length;a++){var i=ua[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ua.length&&(a=ua[0],a.blockedOn===null);)Qh(a),a.blockedOn===null&&ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var u=a[i],d=a[i+1],y=u[At]||null;if(typeof d=="function")y||Jh(a);else if(y){var S=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[At]||null)S=y.formAction;else if(Gs(u)!==null)continue}else S=y.action;typeof S=="function"?a[i+1]=S:(a.splice(i,3),i-=3),Jh(a)}}}function Wh(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function Vs(e){this._internalRoot=e}ro.prototype.render=Vs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,i=Ut();Gh(a,i,e,t,null,null)},ro.prototype.unmount=Vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gh(e.current,2,null,e,null,null),jr(),t[Ua]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=uf();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ua.length&&t!==0&&t<ua[a].priority;a++);ua.splice(a,0,e),a===0&&Qh(e)}};var $h=r.version;if($h!=="19.2.3")throw Error(o(527,$h,"19.2.3"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var B0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{vt=oo.inject(B0),lt=oo}catch{}}return wl.createRoot=function(e,t){if(!s(e))throw Error(o(299));var a=!1,i="",u=rm,d=om,y=um;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=qh(e,1,!1,null,null,a,i,null,u,d,y,Wh),e[Ua]=t.current,ws(e),new Vs(t)},wl.hydrateRoot=function(e,t,a){if(!s(e))throw Error(o(299));var i=!1,u="",d=rm,y=om,S=um,C=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.formState!==void 0&&(C=a.formState)),t=qh(e,1,!0,t,a??null,i,u,C,d,y,S,Wh),t.context=Yh(null),a=t.current,i=Ut(),i=No(i),u=Kn(i),u.callback=null,Xn(a,u,i),a=i,t.current.lanes=a,Ni(t,a),fn(t),e[Ua]=t.current,ws(e),new ro(t)},wl.version="19.2.3",wl}var sp;function X0(){if(sp)return Xs.exports;sp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Xs.exports=K0(),Xs.exports}var Q0=X0();const Z0=ko(Q0);var cp="popstate";function J0(n={}){function r(o,s){let{pathname:c,search:f,hash:h}=o.location;return yc("",{pathname:c,search:f,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function l(o,s){return typeof s=="string"?s:Nl(s)}return $0(r,l,null,n)}function Qe(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function $t(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function W0(){return Math.random().toString(36).substring(2,10)}function fp(n,r){return{usr:n.state,key:n.key,idx:r}}function yc(n,r,l=null,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof r=="string"?Ei(r):r,state:l,key:r&&r.key||o||W0()}}function Nl({pathname:n="/",search:r="",hash:l=""}){return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function Ei(n){let r={};if(n){let l=n.indexOf("#");l>=0&&(r.hash=n.substring(l),n=n.substring(0,l));let o=n.indexOf("?");o>=0&&(r.search=n.substring(o),n=n.substring(0,o)),n&&(r.pathname=n)}return r}function $0(n,r,l,o={}){let{window:s=document.defaultView,v5Compat:c=!1}=o,f=s.history,h="POP",p=null,m=v();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function v(){return(f.state||{idx:null}).idx}function g(){h="POP";let O=v(),R=O==null?null:O-m;m=O,p&&p({action:h,location:L.location,delta:R})}function x(O,R){h="PUSH";let H=yc(L.location,O,R);m=v()+1;let B=fp(H,m),ne=L.createHref(H);try{f.pushState(B,"",ne)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;s.location.assign(ne)}c&&p&&p({action:h,location:L.location,delta:1})}function b(O,R){h="REPLACE";let H=yc(L.location,O,R);m=v();let B=fp(H,m),ne=L.createHref(H);f.replaceState(B,"",ne),c&&p&&p({action:h,location:L.location,delta:0})}function T(O){return ev(O)}let L={get action(){return h},get location(){return n(s,f)},listen(O){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(cp,g),p=O,()=>{s.removeEventListener(cp,g),p=null}},createHref(O){return r(s,O)},createURL:T,encodeLocation(O){let R=T(O);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:x,replace:b,go(O){return f.go(O)}};return L}function ev(n,r=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(l,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:Nl(n);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=l+o),new URL(o,l)}function lg(n,r,l="/"){return tv(n,r,l,!1)}function tv(n,r,l,o){let s=typeof r=="string"?Ei(r):r,c=Bn(s.pathname||"/",l);if(c==null)return null;let f=rg(n);nv(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=mv(c);h=fv(f[p],m,o)}return h}function rg(n,r=[],l=[],o="",s=!1){let c=(f,h,p=s,m)=>{let v={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(o)&&p)return;Qe(v.relativePath.startsWith(o),`Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(o.length)}let g=In([o,v.relativePath]),x=l.concat(v);f.children&&f.children.length>0&&(Qe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),rg(f.children,r,x,g,p)),!(f.path==null&&!f.index)&&r.push({path:g,score:sv(g,f.index),routesMeta:x})};return n.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let p of og(f.path))c(f,h,!0,p)}),r}function og(n){let r=n.split("/");if(r.length===0)return[];let[l,...o]=r,s=l.endsWith("?"),c=l.replace(/\?$/,"");if(o.length===0)return s?[c,""]:[c];let f=og(o.join("/")),h=[];return h.push(...f.map(p=>p===""?c:[c,p].join("/"))),s&&h.push(...f),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function nv(n){n.sort((r,l)=>r.score!==l.score?l.score-r.score:cv(r.routesMeta.map(o=>o.childrenIndex),l.routesMeta.map(o=>o.childrenIndex)))}var av=/^:[\w-]+$/,iv=3,lv=2,rv=1,ov=10,uv=-2,dp=n=>n==="*";function sv(n,r){let l=n.split("/"),o=l.length;return l.some(dp)&&(o+=uv),r&&(o+=lv),l.filter(s=>!dp(s)).reduce((s,c)=>s+(av.test(c)?iv:c===""?rv:ov),o)}function cv(n,r){return n.length===r.length&&n.slice(0,-1).every((o,s)=>o===r[s])?n[n.length-1]-r[r.length-1]:0}function fv(n,r,l=!1){let{routesMeta:o}=n,s={},c="/",f=[];for(let h=0;h<o.length;++h){let p=o[h],m=h===o.length-1,v=c==="/"?r:r.slice(c.length)||"/",g=vo({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},v),x=p.route;if(!g&&m&&l&&!o[o.length-1].route.index&&(g=vo({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!g)return null;Object.assign(s,g.params),f.push({params:s,pathname:In([c,g.pathname]),pathnameBase:vv(In([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=In([c,g.pathnameBase]))}return f}function vo(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[l,o]=dv(n.path,n.caseSensitive,n.end),s=r.match(l);if(!s)return null;let c=s[0],f=c.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:o.reduce((m,{paramName:v,isOptional:g},x)=>{if(v==="*"){let T=h[x]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const b=h[x];return g&&!b?m[v]=void 0:m[v]=(b||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:n}}function dv(n,r=!1,l=!0){$t(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(o.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),o]}function mv(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return $t(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),n}}function Bn(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let l=r.endsWith("/")?r.length-1:r.length,o=n.charAt(l);return o&&o!=="/"?null:n.slice(l)||"/"}var hv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pv=n=>hv.test(n);function gv(n,r="/"){let{pathname:l,search:o="",hash:s=""}=typeof n=="string"?Ei(n):n,c;if(l)if(pv(l))c=l;else{if(l.includes("//")){let f=l;l=l.replace(/\/\/+/g,"/"),$t(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${l}`)}l.startsWith("/")?c=mp(l.substring(1),"/"):c=mp(l,r)}else c=r;return{pathname:c,search:bv(o),hash:Sv(s)}}function mp(n,r){let l=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?l.length>1&&l.pop():s!=="."&&l.push(s)}),l.length>1?l.join("/"):"/"}function Ws(n,r,l,o){return`Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function yv(n){return n.filter((r,l)=>l===0||r.route.path&&r.route.path.length>0)}function Oc(n){let r=yv(n);return r.map((l,o)=>o===r.length-1?l.pathname:l.pathnameBase)}function Lc(n,r,l,o=!1){let s;typeof n=="string"?s=Ei(n):(s={...n},Qe(!s.pathname||!s.pathname.includes("?"),Ws("?","pathname","search",s)),Qe(!s.pathname||!s.pathname.includes("#"),Ws("#","pathname","hash",s)),Qe(!s.search||!s.search.includes("#"),Ws("#","search","hash",s)));let c=n===""||s.pathname==="",f=c?"/":s.pathname,h;if(f==null)h=l;else{let g=r.length-1;if(!o&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;s.pathname=x.join("/")}h=g>=0?r[g]:"/"}let p=gv(s,h),m=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&l.endsWith("/");return!p.pathname.endsWith("/")&&(m||v)&&(p.pathname+="/"),p}var In=n=>n.join("/").replace(/\/\/+/g,"/"),vv=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),bv=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Sv=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function xv(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function Av(n){return n.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ug=["POST","PUT","PATCH","DELETE"];new Set(ug);var kv=["GET",...ug];new Set(kv);var Ri=V.createContext(null);Ri.displayName="DataRouter";var Co=V.createContext(null);Co.displayName="DataRouterState";V.createContext(!1);var sg=V.createContext({isTransitioning:!1});sg.displayName="ViewTransition";var Cv=V.createContext(new Map);Cv.displayName="Fetchers";var Tv=V.createContext(null);Tv.displayName="Await";var en=V.createContext(null);en.displayName="Navigation";var Ul=V.createContext(null);Ul.displayName="Location";var on=V.createContext({outlet:null,matches:[],isDataRoute:!1});on.displayName="Route";var _c=V.createContext(null);_c.displayName="RouteError";function wv(n,{relative:r}={}){Qe(Mi(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:o}=V.useContext(en),{hash:s,pathname:c,search:f}=Hl(n,{relative:r}),h=c;return l!=="/"&&(h=c==="/"?l:In([l,c])),o.createHref({pathname:h,search:f,hash:s})}function Mi(){return V.useContext(Ul)!=null}function fa(){return Qe(Mi(),"useLocation() may be used only in the context of a <Router> component."),V.useContext(Ul).location}var cg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fg(n){V.useContext(en).static||V.useLayoutEffect(n)}function dg(){let{isDataRoute:n}=V.useContext(on);return n?jv():Ev()}function Ev(){Qe(Mi(),"useNavigate() may be used only in the context of a <Router> component.");let n=V.useContext(Ri),{basename:r,navigator:l}=V.useContext(en),{matches:o}=V.useContext(on),{pathname:s}=fa(),c=JSON.stringify(Oc(o)),f=V.useRef(!1);return fg(()=>{f.current=!0}),V.useCallback((p,m={})=>{if($t(f.current,cg),!f.current)return;if(typeof p=="number"){l.go(p);return}let v=Lc(p,JSON.parse(c),s,m.relative==="path");n==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:In([r,v.pathname])),(m.replace?l.replace:l.push)(v,m.state,m)},[r,l,c,s,n])}V.createContext(null);function Rv(){let{matches:n}=V.useContext(on),r=n[n.length-1];return r?r.params:{}}function Hl(n,{relative:r}={}){let{matches:l}=V.useContext(on),{pathname:o}=fa(),s=JSON.stringify(Oc(l));return V.useMemo(()=>Lc(n,JSON.parse(s),o,r==="path"),[n,s,o,r])}function Mv(n,r){return mg(n,r)}function mg(n,r,l,o,s){Qe(Mi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=V.useContext(en),{matches:f}=V.useContext(on),h=f[f.length-1],p=h?h.params:{},m=h?h.pathname:"/",v=h?h.pathnameBase:"/",g=h&&h.route;{let H=g&&g.path||"";hg(m,!g||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let x=fa(),b;if(r){let H=typeof r=="string"?Ei(r):r;Qe(v==="/"||H.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${H.pathname}" was given in the \`location\` prop.`),b=H}else b=x;let T=b.pathname||"/",L=T;if(v!=="/"){let H=v.replace(/^\//,"").split("/");L="/"+T.replace(/^\//,"").split("/").slice(H.length).join("/")}let O=lg(n,{pathname:L});$t(g||O!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),$t(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=_v(O&&O.map(H=>Object.assign({},H,{params:Object.assign({},p,H.params),pathname:In([v,c.encodeLocation?c.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?v:In([v,c.encodeLocation?c.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),f,l,o,s);return r&&R?V.createElement(Ul.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},R):R}function Dv(){let n=Hv(),r=xv(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),l=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=V.createElement(V.Fragment,null,V.createElement("p",null,"💿 Hey developer 👋"),V.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",V.createElement("code",{style:c},"ErrorBoundary")," or"," ",V.createElement("code",{style:c},"errorElement")," prop on your route.")),V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},r),l?V.createElement("pre",{style:s},l):null,f)}var zv=V.createElement(Dv,null),Ov=class extends V.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){this.props.onError?this.props.onError(n,r):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?V.createElement(on.Provider,{value:this.props.routeContext},V.createElement(_c.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Lv({routeContext:n,match:r,children:l}){let o=V.useContext(Ri);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),V.createElement(on.Provider,{value:n},l)}function _v(n,r=[],l=null,o=null,s=null){if(n==null){if(!l)return null;if(l.errors)n=l.matches;else if(r.length===0&&!l.initialized&&l.matches.length>0)n=l.matches;else return null}let c=n,f=l?.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Qe(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,p=-1;if(l)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=v),g.route.id){let{loaderData:x,errors:b}=l,T=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||T){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}let m=l&&o?(v,g)=>{o(v,{location:l.location,params:l.matches?.[0]?.params??{},unstable_pattern:Av(l.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,x)=>{let b,T=!1,L=null,O=null;l&&(b=f&&g.route.id?f[g.route.id]:void 0,L=g.route.errorElement||zv,h&&(p<0&&x===0?(hg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,O=null):p===x&&(T=!0,O=g.route.hydrateFallbackElement||null)));let R=r.concat(c.slice(0,x+1)),H=()=>{let B;return b?B=L:T?B=O:g.route.Component?B=V.createElement(g.route.Component,null):g.route.element?B=g.route.element:B=v,V.createElement(Lv,{match:g,routeContext:{outlet:v,matches:R,isDataRoute:l!=null},children:B})};return l&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?V.createElement(Ov,{location:l.location,revalidation:l.revalidation,component:L,error:b,children:H(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:m}):H()},null)}function Nc(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nv(n){let r=V.useContext(Ri);return Qe(r,Nc(n)),r}function Iv(n){let r=V.useContext(Co);return Qe(r,Nc(n)),r}function Bv(n){let r=V.useContext(on);return Qe(r,Nc(n)),r}function Ic(n){let r=Bv(n),l=r.matches[r.matches.length-1];return Qe(l.route.id,`${n} can only be used on routes that contain a unique "id"`),l.route.id}function Uv(){return Ic("useRouteId")}function Hv(){let n=V.useContext(_c),r=Iv("useRouteError"),l=Ic("useRouteError");return n!==void 0?n:r.errors?.[l]}function jv(){let{router:n}=Nv("useNavigate"),r=Ic("useNavigate"),l=V.useRef(!1);return fg(()=>{l.current=!0}),V.useCallback(async(s,c={})=>{$t(l.current,cg),l.current&&(typeof s=="number"?await n.navigate(s):await n.navigate(s,{fromRouteId:r,...c}))},[n,r])}var hp={};function hg(n,r,l){!r&&!hp[n]&&(hp[n]=!0,$t(!1,l))}V.memo(qv);function qv({routes:n,future:r,state:l,unstable_onError:o}){return mg(n,void 0,l,o,r)}function Yv({to:n,replace:r,state:l,relative:o}){Qe(Mi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=V.useContext(en);$t(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=V.useContext(on),{pathname:f}=fa(),h=dg(),p=Lc(n,Oc(c),f,o==="path"),m=JSON.stringify(p);return V.useEffect(()=>{h(JSON.parse(m),{replace:r,state:l,relative:o})},[h,m,o,r,l]),null}function ho(n){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Gv({basename:n="/",children:r=null,location:l,navigationType:o="POP",navigator:s,static:c=!1,unstable_useTransitions:f}){Qe(!Mi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),p=V.useMemo(()=>({basename:h,navigator:s,static:c,unstable_useTransitions:f,future:{}}),[h,s,c,f]);typeof l=="string"&&(l=Ei(l));let{pathname:m="/",search:v="",hash:g="",state:x=null,key:b="default"}=l,T=V.useMemo(()=>{let L=Bn(m,h);return L==null?null:{location:{pathname:L,search:v,hash:g,state:x,key:b},navigationType:o}},[h,m,v,g,x,b,o]);return $t(T!=null,`<Router basename="${h}"> is not able to match the URL "${m}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:V.createElement(en.Provider,{value:p},V.createElement(Ul.Provider,{children:r,value:T}))}function Fv({children:n,location:r}){return Mv(vc(n),r)}function vc(n,r=[]){let l=[];return V.Children.forEach(n,(o,s)=>{if(!V.isValidElement(o))return;let c=[...r,s];if(o.type===V.Fragment){l.push.apply(l,vc(o.props.children,c));return}Qe(o.type===ho,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=vc(o.props.children,c)),l.push(f)}),l}var po="get",go="application/x-www-form-urlencoded";function To(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function Vv(n){return To(n)&&n.tagName.toLowerCase()==="button"}function Pv(n){return To(n)&&n.tagName.toLowerCase()==="form"}function Kv(n){return To(n)&&n.tagName.toLowerCase()==="input"}function Xv(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Qv(n,r){return n.button===0&&(!r||r==="_self")&&!Xv(n)}var uo=null;function Zv(){if(uo===null)try{new FormData(document.createElement("form"),0),uo=!1}catch{uo=!0}return uo}var Jv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $s(n){return n!=null&&!Jv.has(n)?($t(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${go}"`),null):n}function Wv(n,r){let l,o,s,c,f;if(Pv(n)){let h=n.getAttribute("action");o=h?Bn(h,r):null,l=n.getAttribute("method")||po,s=$s(n.getAttribute("enctype"))||go,c=new FormData(n)}else if(Vv(n)||Kv(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(o=p?Bn(p,r):null,l=n.getAttribute("formmethod")||h.getAttribute("method")||po,s=$s(n.getAttribute("formenctype"))||$s(h.getAttribute("enctype"))||go,c=new FormData(h,n),!Zv()){let{name:m,type:v,value:g}=n;if(v==="image"){let x=m?`${m}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else m&&c.append(m,g)}}else{if(To(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=po,o=null,s=go,f=n}return c&&s==="text/plain"&&(f=c,c=void 0),{action:o,method:l.toLowerCase(),encType:s,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Bc(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function $v(n,r,l){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname=`_root.${l}`:r&&Bn(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.${l}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${l}`,o}async function eb(n,r){if(n.id in r)return r[n.id];try{let l=await import(n.module);return r[n.id]=l,l}catch(l){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function tb(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function nb(n,r,l){let o=await Promise.all(n.map(async s=>{let c=r.routes[s.route.id];if(c){let f=await eb(c,l);return f.links?f.links():[]}return[]}));return rb(o.flat(1).filter(tb).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function pp(n,r,l,o,s,c){let f=(p,m)=>l[m]?p.route.id!==l[m].route.id:!0,h=(p,m)=>l[m].pathname!==p.pathname||l[m].route.path?.endsWith("*")&&l[m].params["*"]!==p.params["*"];return c==="assets"?r.filter((p,m)=>f(p,m)||h(p,m)):c==="data"?r.filter((p,m)=>{let v=o.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let g=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function ab(n,r,{includeHydrateFallback:l}={}){return ib(n.map(o=>{let s=r.routes[o.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),l&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function ib(n){return[...new Set(n)]}function lb(n){let r={},l=Object.keys(n).sort();for(let o of l)r[o]=n[o];return r}function rb(n,r){let l=new Set;return new Set(r),n.reduce((o,s)=>{let c=JSON.stringify(lb(s));return l.has(c)||(l.add(c),o.push({key:c,link:s})),o},[])}function pg(){let n=V.useContext(Ri);return Bc(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function ob(){let n=V.useContext(Co);return Bc(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Uc=V.createContext(void 0);Uc.displayName="FrameworkContext";function gg(){let n=V.useContext(Uc);return Bc(n,"You must render this element inside a <HydratedRouter> element"),n}function ub(n,r){let l=V.useContext(Uc),[o,s]=V.useState(!1),[c,f]=V.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:v,onTouchStart:g}=r,x=V.useRef(null);V.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let L=R=>{R.forEach(H=>{f(H.isIntersecting)})},O=new IntersectionObserver(L,{threshold:.5});return x.current&&O.observe(x.current),()=>{O.disconnect()}}},[n]),V.useEffect(()=>{if(o){let L=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(L)}}},[o]);let b=()=>{s(!0)},T=()=>{s(!1),f(!1)};return l?n!=="intent"?[c,x,{}]:[c,x,{onFocus:El(h,b),onBlur:El(p,T),onMouseEnter:El(m,b),onMouseLeave:El(v,T),onTouchStart:El(g,b)}]:[!1,x,{}]}function El(n,r){return l=>{n&&n(l),l.defaultPrevented||r(l)}}function sb({page:n,...r}){let{router:l}=pg(),o=V.useMemo(()=>lg(l.routes,n,l.basename),[l.routes,n,l.basename]);return o?V.createElement(fb,{page:n,matches:o,...r}):null}function cb(n){let{manifest:r,routeModules:l}=gg(),[o,s]=V.useState([]);return V.useEffect(()=>{let c=!1;return nb(n,r,l).then(f=>{c||s(f)}),()=>{c=!0}},[n,r,l]),o}function fb({page:n,matches:r,...l}){let o=fa(),{manifest:s,routeModules:c}=gg(),{basename:f}=pg(),{loaderData:h,matches:p}=ob(),m=V.useMemo(()=>pp(n,r,p,s,o,"data"),[n,r,p,s,o]),v=V.useMemo(()=>pp(n,r,p,s,o,"assets"),[n,r,p,s,o]),g=V.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let T=new Set,L=!1;if(r.forEach(R=>{let H=s.routes[R.route.id];!H||!H.hasLoader||(!m.some(B=>B.route.id===R.route.id)&&R.route.id in h&&c[R.route.id]?.shouldRevalidate||H.hasClientLoader?L=!0:T.add(R.route.id))}),T.size===0)return[];let O=$v(n,f,"data");return L&&T.size>0&&O.searchParams.set("_routes",r.filter(R=>T.has(R.route.id)).map(R=>R.route.id).join(",")),[O.pathname+O.search]},[f,h,o,s,m,r,n,c]),x=V.useMemo(()=>ab(v,s),[v,s]),b=cb(v);return V.createElement(V.Fragment,null,g.map(T=>V.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...l})),x.map(T=>V.createElement("link",{key:T,rel:"modulepreload",href:T,...l})),b.map(({key:T,link:L})=>V.createElement("link",{key:T,nonce:l.nonce,...L})))}function db(...n){return r=>{n.forEach(l=>{typeof l=="function"?l(r):l!=null&&(l.current=r)})}}var yg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yg&&(window.__reactRouterVersion="7.10.1")}catch{}function mb({basename:n,children:r,unstable_useTransitions:l,window:o}){let s=V.useRef();s.current==null&&(s.current=J0({window:o,v5Compat:!0}));let c=s.current,[f,h]=V.useState({action:c.action,location:c.location}),p=V.useCallback(m=>{l===!1?h(m):V.startTransition(()=>h(m))},[l]);return V.useLayoutEffect(()=>c.listen(p),[c,p]),V.createElement(Gv,{basename:n,children:r,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:l===!0})}var vg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nn=V.forwardRef(function({onClick:r,discover:l="render",prefetch:o="none",relative:s,reloadDocument:c,replace:f,state:h,target:p,to:m,preventScrollReset:v,viewTransition:g,...x},b){let{basename:T,unstable_useTransitions:L}=V.useContext(en),O=typeof m=="string"&&vg.test(m),R,H=!1;if(typeof m=="string"&&O&&(R=m,yg))try{let I=new URL(window.location.href),$=m.startsWith("//")?new URL(I.protocol+m):new URL(m),ee=Bn($.pathname,T);$.origin===I.origin&&ee!=null?m=ee+$.search+$.hash:H=!0}catch{$t(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=wv(m,{relative:s}),[ne,ae,j]=ub(o,x),W=gb(m,{replace:f,state:h,target:p,preventScrollReset:v,relative:s,viewTransition:g,unstable_useTransitions:L});function de(I){r&&r(I),I.defaultPrevented||W(I)}let me=V.createElement("a",{...x,...j,href:R||B,onClick:H||c?r:de,ref:db(b,ae),target:p,"data-discover":!O&&l==="render"?"true":void 0});return ne&&!O?V.createElement(V.Fragment,null,me,V.createElement(sb,{page:B})):me});Nn.displayName="Link";var bc=V.forwardRef(function({"aria-current":r="page",caseSensitive:l=!1,className:o="",end:s=!1,style:c,to:f,viewTransition:h,children:p,...m},v){let g=Hl(f,{relative:m.relative}),x=fa(),b=V.useContext(Co),{navigator:T,basename:L}=V.useContext(en),O=b!=null&&xb(g)&&h===!0,R=T.encodeLocation?T.encodeLocation(g).pathname:g.pathname,H=x.pathname,B=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;l||(H=H.toLowerCase(),B=B?B.toLowerCase():null,R=R.toLowerCase()),B&&L&&(B=Bn(B,L)||B);const ne=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let ae=H===R||!s&&H.startsWith(R)&&H.charAt(ne)==="/",j=B!=null&&(B===R||!s&&B.startsWith(R)&&B.charAt(R.length)==="/"),W={isActive:ae,isPending:j,isTransitioning:O},de=ae?r:void 0,me;typeof o=="function"?me=o(W):me=[o,ae?"active":null,j?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let I=typeof c=="function"?c(W):c;return V.createElement(Nn,{...m,"aria-current":de,className:me,ref:v,style:I,to:f,viewTransition:h},typeof p=="function"?p(W):p)});bc.displayName="NavLink";var hb=V.forwardRef(({discover:n="render",fetcherKey:r,navigate:l,reloadDocument:o,replace:s,state:c,method:f=po,action:h,onSubmit:p,relative:m,preventScrollReset:v,viewTransition:g,...x},b)=>{let{unstable_useTransitions:T}=V.useContext(en),L=bb(),O=Sb(h,{relative:m}),R=f.toLowerCase()==="get"?"get":"post",H=typeof h=="string"&&vg.test(h),B=ne=>{if(p&&p(ne),ne.defaultPrevented)return;ne.preventDefault();let ae=ne.nativeEvent.submitter,j=ae?.getAttribute("formmethod")||f,W=()=>L(ae||ne.currentTarget,{fetcherKey:r,method:j,navigate:l,replace:s,state:c,relative:m,preventScrollReset:v,viewTransition:g});T&&l!==!1?V.startTransition(()=>W()):W()};return V.createElement("form",{ref:b,method:R,action:O,onSubmit:o?p:B,...x,"data-discover":!H&&n==="render"?"true":void 0})});hb.displayName="Form";function pb(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bg(n){let r=V.useContext(Ri);return Qe(r,pb(n)),r}function gb(n,{target:r,replace:l,state:o,preventScrollReset:s,relative:c,viewTransition:f,unstable_useTransitions:h}={}){let p=dg(),m=fa(),v=Hl(n,{relative:c});return V.useCallback(g=>{if(Qv(g,r)){g.preventDefault();let x=l!==void 0?l:Nl(m)===Nl(v),b=()=>p(n,{replace:x,state:o,preventScrollReset:s,relative:c,viewTransition:f});h?V.startTransition(()=>b()):b()}},[m,p,v,l,o,r,n,s,c,f,h])}var yb=0,vb=()=>`__${String(++yb)}__`;function bb(){let{router:n}=bg("useSubmit"),{basename:r}=V.useContext(en),l=Uv(),o=n.fetch,s=n.navigate;return V.useCallback(async(c,f={})=>{let{action:h,method:p,encType:m,formData:v,body:g}=Wv(c,r);if(f.navigate===!1){let x=f.fetcherKey||vb();await o(x,l,f.action||h,{preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||p,formEncType:f.encType||m,flushSync:f.flushSync})}else await s(f.action||h,{preventScrollReset:f.preventScrollReset,formData:v,body:g,formMethod:f.method||p,formEncType:f.encType||m,replace:f.replace,state:f.state,fromRouteId:l,flushSync:f.flushSync,viewTransition:f.viewTransition})},[o,s,r,l])}function Sb(n,{relative:r}={}){let{basename:l}=V.useContext(en),o=V.useContext(on);Qe(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),c={...Hl(n||".",{relative:r})},f=fa();if(n==null){c.search=f.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(v=>v==="")){h.delete("index"),p.filter(g=>g).forEach(g=>h.append("index",g));let v=h.toString();c.search=v?`?${v}`:""}}return(!n||n===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(c.pathname=c.pathname==="/"?l:In([l,c.pathname])),Nl(c)}function xb(n,{relative:r}={}){let l=V.useContext(sg);Qe(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=bg("useViewTransitionState"),s=Hl(n,{relative:r});if(!l.isTransitioning)return!1;let c=Bn(l.currentLocation.pathname,o)||l.currentLocation.pathname,f=Bn(l.nextLocation.pathname,o)||l.nextLocation.pathname;return vo(s.pathname,f)!=null||vo(s.pathname,c)!=null}const Ab=`# FINTECH AUTOMATION SUITE: FILES CREATED ✅

## 📦 What You Have

I've created a **complete fintech operations automation documentation suite** with 8 comprehensive files covering 55 specific automation processes.

---

## 📁 Files Created (Ready to Download)

### 1. **fintech_processes_index.md** (Master Index)
Your navigation hub. Contains:
- Overview of all 55 processes
- Quick navigation by ROI, time savings, and role
- Market opportunity analysis (TAM)
- Competitive positioning
- Recommended roadmap (Year 1-3)

**Use this to:** Get oriented and find what's relevant to your business

---

### 2. **payment_ops_detailed.md** (10 Processes)
**Payment & Transaction Operations** - Core payment infrastructure

**Processes covered:**
- ✅ Payment Reconciliation (Your current focus)
- ✅ Chargebacks & Dispute Resolution
- ✅ Accounts Receivable (Collections)
- ✅ Transaction Monitoring & Settlement
- ✅ Fraud Detection & Transaction Screening
- ✅ Duplicate Payment Detection
- ✅ Payout Processing & Settlement
- ✅ Cross-Border Payment Reconciliation
- ✅ Card Processing & Authorization
- ✅ Cash Application

**Key stats:**
- ROI: 80-97% time savings
- Impact: ₹50-100K/year per merchant
- India vendors: Gaviti, Growfin, Kapittx, Cointab, AI Accountant

**Use this to:** Build your payment operations automation product

---

### 3. **lending_ops_detailed.md** (8 Processes)
**Loan & Credit Operations** - Lending workflow automation

**Processes covered:**
- ✅ Loan Processing & Approval (80-90% faster)
- ✅ Credit Scoring & Risk Assessment
- ✅ Loan Disbursement & Tracking
- ✅ Debt Service Tracking
- ✅ Loan Modification & Refinancing
- ✅ Portfolio Risk Management
- ✅ Collections & Recovery
- ✅ Loan Default Prediction

**Key stats:**
- ROI: 2-5x faster approvals
- Impact: ₹2-3Cr/year for ₹50Cr NBFC
- India vendors: Roopya, Biz2X, SynoFin

**Use this to:** Build lending platform automation or expand payment product to lending

---

### 4. **compliance_ops_detailed.md** (10 Processes)
**Compliance & Regulatory** - KYC, AML, tax, regulatory

**Processes covered:**
- ✅ KYC Verification (95% faster)
- ✅ AML (Anti-Money Laundering) Compliance
- ✅ Tax Compliance & Filing (GST, TDS)
- ✅ Regulatory Reporting (RBI, SEBI, MCA)
- ✅ Sanctions List Screening
- ✅ Risk & Compliance Monitoring
- ✅ Document Verification & Authentication
- ✅ Policy Violation Detection
- ✅ Adverse Media Screening
- ✅ Beneficial Owner Verification

**Key stats:**
- ROI: 90-99% automation, zero audit failures
- Impact: ₹2-5Cr/year for fintech with ₹100Cr AUM
- India vendors: Signzy, HyperVerge, KYCPlus, Karza, AuthBridge, Sumsub, Flagright

**Use this to:** Add compliance layer to your product OR build compliance-as-a-service

---

### 5. **fintech_ops_detailed.md** (10 Processes)
**Fintech-Specific Operations** - Trading, crypto, treasury

**Processes covered:**
- ✅ Brokerage Settlement (T+0/T+1)
- ✅ Dividend Processing
- ✅ Margin Call Management
- ✅ Fund Transfer Processing
- ✅ Cryptocurrency/Digital Asset Reconciliation
- ✅ Interest Rate Swap Management
- ✅ FX Reconciliation (RBI compliance)
- ✅ Trade Confirmation & Settlement
- ✅ Coupon Payment Processing
- ✅ Portfolio Rebalancing

**Key stats:**
- ROI: 90%+ automation, regulatory-grade accuracy
- Impact: Complex operations fully automated
- India vendors: KGiSL, Helios Global, OSTTRA, State Street, Duco, Koinx

**Use this to:** Build for trading platforms, brokers, or crypto fintechs

---

### 6. **customer_treasury_detailed.md** (11 Processes)
**Customer Operations & Treasury/Liquidity Management**

**Customer Operations (6 processes):**
- ✅ Customer Onboarding (Fintech KYC)
- ✅ Customer KYC Updates (Periodic Re-verification)
- ✅ Customer Segmentation & Targeting
- ✅ Customer Churn Prediction
- ✅ Support Ticket Routing
- ✅ Complaint Resolution

**Treasury/Liquidity (5 processes):**
- ✅ Cash Flow Forecasting
- ✅ Working Capital Management
- ✅ Interest Calculation
- ✅ Commission Calculation & Payouts
- ✅ Liquidity Management (NBFC/banks)

**Key stats:**
- ROI: Instant onboarding, predictive retention
- Impact: ₹25-50L/year for mid-sized fintech
- India vendors: Growfin, Kapittx, Signzy, HyperVerge

**Use this to:** Add customer lifecycle and treasury features

---

### 7. **strategic_processes_detailed.md** (6 Processes)
**Strategic Fintech Processes** - Analytics, risk, revenue

**Processes covered:**
- ✅ Scenario Analysis & Modeling (Stress testing)
- ✅ Stress Testing (Capital adequacy, liquidity)
- ✅ Business Intelligence & Insights (Fintech metrics)
- ✅ Revenue Recognition (Ind AS 115)
- ✅ Deferred Revenue Management (SaaS fintech)
- ✅ Portfolio Risk Analytics

**Key stats:**
- ROI: Multiplicative (better decisions = better business outcomes)
- Impact: 5-20% default reduction = ₹1-2Cr saved
- India vendors: Roopya, Biz2X, ScrUT.io, Tableau, Looker

**Use this to:** Add decision-enablement layer for enterprise customers

---

### 8. **quickstart_guide.md** (Action Plan)
**Your 12-Month Roadmap**

Contains:
- Highest ROI processes (pick these first)
- Market opportunity breakdown (₹250-550Cr TAM in India)
- 12-month execution plan
- Unit economics & pricing recommendations
- Technology stack recommendations
- Partnership opportunities
- Key vendor contacts

**Use this to:** Build your go-to-market strategy and roadmap

---

## 🎯 How to Use These Files

### If You're Building Payment Reconciliation
**Read in order:**
1. fintech_processes_index.md (context)
2. payment_ops_detailed.md (deep dive)
3. quickstart_guide.md (roadmap)

→ You have everything to build product specs, customer pitch, and 12-month roadmap

### If You're Building for Lenders (NBFC/Banks)
**Read in order:**
1. lending_ops_detailed.md (main focus)
2. compliance_ops_detailed.md (regulatory)
3. strategic_processes_detailed.md (risk analytics)
4. quickstart_guide.md (roadmap)

→ Build loan processing + portfolio analytics stack

### If You're Building for Brokers/Trading Platforms
**Read in order:**
1. fintech_ops_detailed.md (main focus)
2. strategic_processes_detailed.md (risk)
3. payment_ops_detailed.md (settlement)
4. quickstart_guide.md (roadmap)

→ Build brokerage ops automation suite

### If You're Building Compliance/KYC Product
**Read in order:**
1. compliance_ops_detailed.md (core)
2. customer_treasury_detailed.md (customer onboarding)
3. payment_ops_detailed.md (fraud context)
4. quickstart_guide.md (roadmap)

→ Build KYC + AML + compliance suite

---

## 📊 Key Takeaways from Entire Suite

### Highest Priority Processes (Do First)
1. **Payment Reconciliation** - 80-90% time savings, ₹50-100K/year impact
2. **Loan Processing** - 2-5x faster, instant approvals
3. **KYC Verification** - 95% faster, 25-35% conversion lift
4. **Collections/AR** - 60-75% time savings, ₹30-100L/year impact
5. **Fraud Detection** - 70-85% review reduction

### Market Opportunity
- **D2C Merchants:** ₹50-100Cr TAM (payment reconciliation + collections)
- **Lenders/NBFC:** ₹100-200Cr TAM (loan processing + portfolio analytics)
- **Brokers/Trading:** ₹50-100Cr TAM (settlement + risk analytics)
- **Total India TAM: ₹250-550Cr/year**

### Competitive Advantage
- Most fintechs do 1-2 automation processes
- **You can own the entire "Fintech Operations Stack"**
- Build payment ops → lending → compliance → analytics in sequence
- Become the "Stripe/Razorpay" of backend automation

### Go-to-Market Strategy
- **Year 1:** Payment reconciliation SaaS for merchants (₹10-30L ARR)
- **Year 2:** Lending automation (expand to lenders) + lending SaaS (₹50-100L ARR)
- **Year 3:** Compliance + strategic analytics (₹1-2Cr ARR)
- **By Year 4:** ₹5-10Cr ARR with "Fintech Ops Stack" positioning

---

## 🔗 Citation System

Every process document includes numbered citations [114]-[176] linked to:
- Real market research
- India-specific vendor data
- ROI studies
- Implementation examples

Use these citations in:
- Customer conversations ("According to [145], AR teams spend 40-50 hours/month on reconciliation")
- Investor pitches ("Chargebacks cost merchants 0.5-2% of GMV [144]")
- Product specs (link to research data)

---

## ✅ What's Complete

- ✅ All 55 processes documented
- ✅ India-specific vendors identified (30+)
- ✅ ROI quantified for each process
- ✅ Manual vs automated comparisons
- ✅ Implementation examples
- ✅ 12-month roadmap
- ✅ Unit economics
- ✅ Partnership opportunities
- ✅ Citations throughout

---

## 🚀 Next Steps (This Week)

1. **Download all 8 files** (you can share with team)
2. **Pick your focus area** (payments? lending? compliance?)
3. **Deep read** the relevant 2-3 files (4-6 hours total)
4. **Talk to 5 potential customers** using this docs as talking points
5. **Build detailed product spec** for your top 1-2 processes

---

## 💬 Questions to Ask Yourself

Use these docs to answer:

- **Which process should we automate first?** (Look at ROI table)
- **What's the competitive landscape?** (Vendor lists in each file)
- **How much should we charge?** (quickstart_guide.md unit economics)
- **Who should we target first?** (Market segmentation by role)
- **What's our 12-month roadmap?** (quickstart_guide.md has timeline)
- **What tech do we need?** (Tech stack section)

---

## 📞 Questions? 

All files are markdown, easy to:
- Share with your team (upload to Notion, GitHub, Confluence)
- Update as market changes
- Reference in pitches and product specs
- Iterate on as you learn more

---

**Total Content:** ~50,000 words across 8 files  
**Total Processes:** 55 unique automation opportunities  
**Total India Vendors:** 30+ companies identified  
**Total Citations:** 176 research sources  
**Ready to:** Build, pitch, fundraise, execute

**Now get to work! 🚀**

---

*Generated: December 17, 2025*  
*Status: Complete and ready for implementation*  
*Last updated: Today*
`,kb=`# FINTECH PROCESSES AUTOMATION: COMPLETE GUIDE

## 📋 Overview

This is a **complete documentation suite** for **55 fintech-specific automation processes** across 6 major categories. Each process includes:

- **Goal:** What the process accomplishes
- **Manual Work Today:** How it's done without automation
- **Where AI/Automation Is Needed:** The bottlenecks automation solves
- **India Vendors:** Companies providing these solutions (with citations)

---

## 📁 Files in This Suite

### 1. **PAYMENT & TRANSACTION OPERATIONS** (payment_ops_detailed.md)
**10 processes** - Core payment infrastructure automation

- Payment Reconciliation ⭐ (Your current focus)
- Chargebacks & Dispute Resolution
- Accounts Receivable (Collections)
- Transaction Monitoring & Settlement
- Fraud Detection & Transaction Screening
- Duplicate Payment Detection
- Payout Processing & Settlement
- Cross-Border Payment Reconciliation
- Card Processing & Authorization
- Cash Application

**ROI Snapshot:** 80-97% time savings, ₹1-2 crore/year impact per merchant

---

### 2. **LOAN & CREDIT OPERATIONS** (lending_ops_detailed.md)
**8 processes** - Lending workflow automation

- Loan Processing & Approval ⭐ (80-90% time savings)
- Credit Scoring & Risk Assessment
- Loan Disbursement & Tracking
- Debt Service Tracking
- Loan Modification & Refinancing
- Portfolio Risk Management
- Collections & Recovery
- Loan Default Prediction

**ROI Snapshot:** Instant approvals, 50-70% reduction in manual underwriting

---

### 3. **COMPLIANCE & REGULATORY** (compliance_ops_detailed.md)
**10 processes** - Regulatory and AML automation

- KYC Verification ⭐ (95% time savings)
- AML Compliance
- Tax Compliance & Filing (GST, TDS for India)
- Regulatory Reporting (RBI, SEBI, MCA filings)
- Sanctions List Screening
- Risk & Compliance Monitoring
- Document Verification & Authentication
- Policy Violation Detection
- Adverse Media Screening
- Beneficial Owner Verification

**ROI Snapshot:** Real-time compliance, zero audit failures

---

### 4. **FINTECH-SPECIFIC OPERATIONS** (fintech_ops_detailed.md)
**10 processes** - Trading, crypto, treasury operations

- Brokerage Settlement (T+0/T+1 automation)
- Dividend Processing
- Margin Call Management
- Fund Transfer Processing
- Cryptocurrency/Digital Asset Reconciliation
- Interest Rate Swap Management
- FX Reconciliation (RBI compliance)
- Trade Confirmation & Settlement
- Coupon Payment Processing
- Portfolio Rebalancing

**ROI Snapshot:** 90%+ automation for complex operations, regulatory-grade accuracy

---

### 5. **CUSTOMER OPERATIONS & TREASURY/LIQUIDITY** (customer_treasury_detailed.md)
**11 processes** - Customer lifecycle and treasury

**Customer Operations (6):**
- Customer Onboarding (Fintech KYC) - 95% faster
- Customer KYC Updates (Re-verification)
- Customer Segmentation & Targeting
- Customer Churn Prediction
- Support Ticket Routing
- Complaint Resolution

**Treasury/Liquidity (5):**
- Cash Flow Forecasting
- Working Capital Management
- Interest Calculation
- Commission Calculation & Payouts
- Liquidity Management (NBFC/banks)

**ROI Snapshot:** Instant onboarding, predictive customer retention

---

### 6. **STRATEGIC FINTECH PROCESSES** (strategic_processes_detailed.md)
**6 processes** - Decision-enablement and analytics

- Scenario Analysis & Modeling (Stress testing)
- Stress Testing (Capital adequacy, liquidity)
- Business Intelligence & Insights (Fintech metrics)
- Revenue Recognition (Ind AS 115)
- Deferred Revenue Management
- Portfolio Risk Analytics

**ROI Snapshot:** Better insights → Better decisions → Multiplicative business impact (5-20% reduction in defaults = ₹1-2 crore saved)

---

## 🎯 Quick Navigation

### By Time Savings
1. **95%+ savings:** KYC, Invoice Processing, Customer Onboarding, Loan Processing
2. **90-94% savings:** Payment Reconciliation, Fraud Detection, Tax Filing, Chargebacks
3. **80-89% savings:** Collections, Portfolio Analytics, Stress Testing
4. **70-79% savings:** Treasury, Scenario Analysis

### By India Relevance
**India-focused vendors:**
- KYC: Signzy, HyperVerge, KYCPlus, Karza, AuthBridge
- AR/Collections: Gaviti, Growfin, Kapittx, AI Accountant
- Lending: Roopya, Biz2X, SynoFin (via Decentro)
- FX/Crypto: AI Accountant, Duco, Koinx
- Trading: KGiSL, Helios Global

**Global tools used in India:**
- Stripe, Razorpay (payments)
- Sumsub, Flagright (AML)
- OSTTRA (settlement)
- State Street (post-trade)

### By Your Role
**If building for D2C / Merchants:**
→ Start with: Payment Reconciliation → Chargebacks → Fraud Detection

**If building for Lenders (NBFC, Banks):**
→ Start with: Loan Processing → Credit Scoring → Portfolio Risk Analytics

**If building for Trading Platforms:**
→ Start with: Brokerage Settlement → FX Reconciliation → Stress Testing

**If building for Payment Gateways / PSPs:**
→ Start with: Transaction Monitoring → Fraud Detection → AML Compliance

---

## 💡 Key Insights

### 1. **Operational vs Strategic Automation**
- **Operational** (payments, loans, compliance): Reduce manual work by 80-95%
- **Strategic** (analytics, risk, revenue): Enable better decisions → Multiplicative ROI

### 2. **India-Specific Opportunities**
- **GST, TDS, RBI compliance:** Built-in automation not available globally
- **NEFT/UPI/IMPS infrastructure:** Unique fintech-specific reconciliation
- **Video KYC via Aadhaar:** Instant onboarding (Indian advantage)
- **T+1 settlement for equities:** Broker back-office automation is critical

### 3. **Competitive Moat**
Most Indian fintechs focus on 1-2 processes (e.g., payment reconciliation OR KYC).
**Your advantage:** Build the **end-to-end fintech operations stack** (payments + compliance + lending + analytics).

### 4. **Market Opportunity**
- **SME/D2C merchants:** ₹10-50 lakh/month revenue, spend ₹15-30K/month on ops automation → TAM ₹50-100 crore (India)
- **Lenders (NBFC):** ₹50 crore+ asset book, 5-10% annual cost of funds → 1% improvement in defaults worth ₹50+ lakhs → TAM ₹100-200 crore
- **Brokers:** 5000+ brokers in India, each processing ₹50L-5Cr/month → TAM ₹50-100 crore

---

## 🚀 Recommended Roadmap

### Year 1: Master Payment Operations
- Payment Reconciliation (core)
- Chargebacks & Dispute Resolution
- Fraud Detection
- Duplicate Payment Detection

**Target:** ₹15-30K/month SaaS per merchant, 100-200 customers

### Year 2: Expand to Lending / Collections
- Loan Processing (if shifting) OR Accounts Receivable
- Portfolio Risk Analytics
- Collections & Recovery automation

**Target:** ₹30-50K/month SaaS per NBFC, 20-50 customers

### Year 3: Add Compliance & Treasury
- KYC automation
- Regulatory Reporting
- Liquidity Management
- FX Reconciliation (for exporters, fintechs)

**Target:** Become the **"Fintech Operations Stack"** for India

### Year 4+: Integrate Trading / Crypto (Optional)
- Brokerage Settlement
- Crypto Reconciliation
- Advanced analytics (stress testing, scenario modeling)

**Target:** Expand to larger institutional customers

---

## 📊 Competitive Positioning

| Vendor | Focus | India Presence | Your Opportunity |
|--------|-------|---|---|
| **Cointab** | Payment reconciliation | Strong | Different gateways, D2C focus |
| **Growfin** | AR/Collections | Growing | Fintech-specific, lending-focus |
| **Signzy** | KYC | Very Strong | Integration with payments/lending |
| **Roopya** | Lending LOS | Strong | End-to-end ops, not just origination |
| **Helios** | Broker ops | Focused | Payments + broker settlement combo |

**Your advantage:** Build for **multi-gateway, multi-product fintechs** that existing solutions don't serve well.

---

## 🎓 Citation Guide

Each process doc includes citations to sources:
- [114] to [176]: Web research results
- Use these to deepen understanding or pitch to customers

Example: "According to [144], chargebacks cost merchants 0.5-2% of GMV. Our automation reduces this by 30-40%."

---

## 📞 Next Steps

1. **Pick your target vertical:** Merchants? Lenders? Brokers? Crypto?
2. **Go deep on 1-2 processes:** Read the detailed docs, understand the pain
3. **Map to your tech stack:** Can your current platform support these automations?
4. **Competitive analysis:** Who's already doing this in India? What's the gap?
5. **Build the roadmap:** Year 1-3 specific deliverables, hiring, go-to-market

---

## 📚 Reference

**Total processes documented:** 55  
**Total vendors mentioned:** 30+  
**Total citations:** 176 sources  
**India focus:** 100% (all solutions adapted for Indian regulatory/market context)

---

## Questions?

This suite is designed to help you think deeply about fintech automation.

- **Deep dive:** Each file is 3000-5000 words; spend 30-45 mins per category
- **Action:** Pick 3 processes, write a "build spec" for how you'd automate each
- **Validation:** Talk to 10 potential customers about their pain (use these docs as talking points)
- **Build:** Once you've validated, start building the MVP

---

**Last Updated:** December 17, 2025  
**Status:** Complete (55 processes, 6 categories)  
**Confidentiality:** For your strategic planning only

[Master Index Complete]
`,Cb=`# PAYMENT & TRANSACTION OPERATIONS (10 Processes)

## 1. Payment Reconciliation ⭐

### Goal
Match all payments received (gateways, banks, PSPs) against orders/invoices so AR ledger is 100% accurate and cash position is known.[145][148][161]

### Manual Work Today
- Download statement CSVs from 5-10 different gateways (Razorpay, PayU, PhonePe, Paytm, etc.).
- Export invoices/orders from ERP/billing system.
- Manually map transactions to orders via reference IDs, amounts, dates.
- Handle partial payments, failed transactions, refunds separately.
- Track unmatched cash and follow up with customers.
- Monthly reconciliation takes **2-4 days** for medium merchant.[145][148][161]

### Where AI/Automation Is Needed
- **Multi-gateway ingestion:** Automatically pull from all PSPs via APIs (Razorpay Connect, etc.).
- **Smart fuzzy matching:** OCR + NLP on remittance references; handle "Ordr123", "ORDER_123", "123" → same invoice.[148][161]
- **Partial payment & deduction handling:** Auto-classify short-payments (customer paid 95%), gateway fees (1.8%), TDS deductions.[145][148]
- **Reconciliation exceptions dashboard:** Flagged mismatches for quick resolution.
- **Automated journals:** Create GL entries directly to accounting system (Tally, Zoho, SAP).
- **Real-time cash position:** Know incoming cash 24 hours before settlement hits bank.[145][161]

### Manual Work vs Automated
| Task | Manual | Automated |
|------|--------|-----------|
| Download gateway statements | 30 mins (10 gateways) | 2 mins (API automated) |
| Export invoices | 10 mins | Instant (API sync) |
| Match transactions | 120-180 mins | 20-30 mins (review exceptions) |
| Handle deductions | 45-60 mins | 10 mins (rule-based) |
| Create GL journals | 30-45 mins | 5 mins (auto-generated) |
| **Total monthly** | **40-50 hours** | **4-6 hours** | 

**Impact:** ₹50-100K annual cost saved per merchant; DSO reduced by 3-5 days.[145][148][161]

### India Vendors
- **Gaviti** (AI-powered cash application, founded in India).[145]
- **Growfin** (multi-gateway reconciliation, used by 100+ Indian merchants).[148]
- **Kapittx** (AR + reconciliation suite, India-focused on Tally/SAP).[158]
- **Cointab** (Payment reconciliation for D2C, Series-A startup).[160]
- **AI Accountant** (Multi-gateway recon with GST/TDS focus).[161]

### Validation Questions to Ask Customers
- "How much time do you spend on payment reconciliation monthly?" (Usually 40-80 hours for ₹5Cr+ revenue)
- "How often do you find cash mismatches?" (15-30% of merchants have ₹50K+ unreconciled monthly)
- "When do you know final cash position?" (Usually 3-5 days post-month-end due to delayed matching)

---

## 2. Chargebacks & Dispute Resolution

### Goal
Resolve customer disputes and chargebacks with card schemes (Visa, Mastercard, RuPay) and UPI/wallets while minimizing revenue loss and keeping chargeback ratios within scheme thresholds (typically <0.1%).[144][147][150]

### Manual Work Today
- Download chargeback reports from gateways/processors and banks.
- Manually collect evidence (invoice, shipment proof, logs, KYC, communication).
- Fill dispute forms/portals for Visa/Mastercard/RuPay/UPI.
- Track status per case in Excel; follow up on deadlines (10-30 days per scheme).
- Analyze reasons (fraud, friendly fraud, service issue) to tune policies.[144][150][153]

### Where AI/Automation Is Needed
- **Auto-ingest chargeback alerts** from gateways and schemes in real-time.[144][150]
- **Classify reason codes** (true fraud vs friendly fraud vs service failure).
- **Auto-assemble evidence packets** from CRM, order system, gateway logs.[144][147][150]
- **Predict "win probability"** per case; decide fight vs accept (optimize for recovery %).
- **Friendly fraud detection:** Pattern detection on repeat offenders, device/IP abuse.
- **SLA tracking:** Automated reminders so no dispute deadline is missed.[147][150]
- **Root cause analysis:** Why are chargebacks happening? (Product quality? Delivery delays? Customer confusion?)

### Where Chargebacks Happen in India
- **3D Secure failures:** 15-20% of chargebacks (OTP not received, timeout).
- **Non-receipt of goods:** 30-35% (delayed shipping, lost parcels).
- **Service quality issues:** 20-25% (customer expected different product).
- **Friendly fraud:** 15-20% (customer claims didn't receive goods despite proof).
- **Card not present (CNP) fraud:** 10-15% (true fraud, hard to win).[144][147][150]

### ROI for Merchant
- **Chargeback rate improvement:** From 0.15% to 0.05% (typical for automated tool) = 3-5% increase in net revenue.
- **Win rate improvement:** From 30-40% to 60-70% of cases (AI-assisted evidence + friendly fraud detection).
- **Time savings:** ₹2-5 lakhs/year in ops team time.

### India Vendors
- **Chargeflow** (AI chargeback automation, global + India).[147]
- **Justt** (AI chargeback + friendly fraud detection).[150]
- **Stripe Radar** (integrated into Stripe; used by Indian entities).[144]
- Various chargeback tools available for Indian merchants on Capterra.[153]

---

## 3. Accounts Receivable (Collections)

### Goal
Get customers to pay open invoices faster, reduce DSO (Days Sales Outstanding), and keep customer relationships healthy while reducing bad debt write-offs.[145][148][161]

### Manual Work Today
- Export overdue invoices from Tally/Zoho/ERP to Excel.
- Manually segment customers and send reminder emails/WhatsApp/SMS.
- Track promises-to-pay in notes; maintain follow-up calendars.
- Manually reconcile incoming payments to invoices.
- Build DSO and aging reports in spreadsheets (10-20 hours monthly).[161]

### Where AI/Automation Is Needed
- **Automated reminder cadences** via email/WhatsApp/SMS/IVR tuned to Indian channels.[161]
- **Behavioral scoring:** Likelihood to pay, risk of delay → prioritize collector effort.
- **Smart message templates:** Adapt tone/language and timing per customer segment (e.g., polite for new customers, firm for repeat offenders).[145][148]
- **AI-based cash application:** Auto-match remittances to invoices (not payment recon, but applies incoming payments).
- **Cash-flow forecasting:** When will overdue invoices convert to cash? (95% accuracy vs 50% manual forecast).[145][148]
- **Collection strategy optimization:** Digital vs field visit vs legal path → AI recommends based on historical recovery rates.

### Collections Workflow in India
\`\`\`
Invoice Due → +5 days: Auto email reminder
           → +10 days: WhatsApp + SMS reminder
           → +15 days: Behavioral score < 50? → Escalate to field team
           → +30 days: Behavioral score < 30? → Legal notice
           → +45 days: Writeoff decision
\`\`\`

**Typical DSO without automation:** 45-60 days  
**Typical DSO with automation:** 30-40 days  
**Impact for ₹10 Cr revenue:** ₹25-40 lakhs additional cash freed up.[148][161]

### India Vendors
- **Kapittx** (Collections automation, India-focused on ERP integration).[158]
- **AI Accountant** (AR + Collections with behavioral AI, GST/TDS focus).[161]
- **Growfin** (AR automation with behavioral AI, used by 50+ Indian entities).[148]
- **Gaviti** (Cash application + collections insights).[145]

---

## 4. Transaction Monitoring & Settlement

### Goal
Monitor all transactions in real time for AML/fraud/compliance and ensure expected settlements from PSPs actually arrive in bank accounts on time and in full.[146][149][152]

### Manual Work Today
- Export daily transaction logs from gateways/banks (tedious CSV downloads).
- Manually scan for large/unusual transactions and sanctioned countries.
- Manually reconcile settlement reports vs internal expected amounts.
- Create STR (Suspicious Transaction Report)/SAR (Suspicious Activity Report) reports by hand for suspicious cases.
- Often takes 5-10 days post-incident to detect, by which time damage is done.[149][152]

### Where AI/Automation Is Needed
- **Real-time rule + ML-based transaction scoring:** Flag anomalies instantly (velocity exceeded, unusual geography, new payment method).
- **Settlement monitoring per PSP/bank:** Expected settlement vs actual; variance detection (missing ₹5 lakhs? System alerts immediately).
- **Automated case management:** Workflow for alerts, investigations, approvals.
- **Auto-generate regulatory reports:** STR/SAR/CTR with full audit trail per compliance template.[146][149][152]
- **Integration with fraud detection:** Combine transaction patterns with device/IP/behavioral data.

### Settlement Reconciliation in India
PSPs (Razorpay, PayU, Cashfree, etc.) settle on T+0, T+1, T+2 depending on agreement.

**Typical manual process:**
- T+2: Settlement initiated by PSP
- T+3: Settlement file sent to bank
- T+4: Settlement appears in bank account
- T+5-7: Merchant reconciles (if they notice the delay)

**With automation:**
- T+2 evening: Settlement reconciliation system flags any variance (e.g., expected ₹1Cr, got ₹95 lakhs).
- T+3 morning: Auto-alert to ops + finance, with root cause analysis (gateway fee deduction? Failed transactions refunded?).
- T+3 EOD: Variance investigated and resolved or escalated to PSP.

### India Vendors
- **Sumsub** (AI AML transaction monitoring, global + India).[146]
- **Fenergo** (AML transaction monitoring, used by Indian banks).[149]
- **Flagright** (AI-native transaction monitoring & AML, used by 20+ Indian fintechs).[152]

---

## 5. Fraud Detection & Transaction Screening

### Goal
Prevent fraudulent payments, account takeovers, and money-laundering attempts without killing conversion (reject <1% of legitimate transactions).[146][149][152][159]

### Manual Work Today
- Rule-based blocks (country/IP/velocity) maintained in spreadsheets or hardcoded rules.
- Manual review queues for risky transactions (1000+ per day for mid-sized merchant).
- Manual blacklist/whitelist management (painful on scale).
- Ad-hoc investigations using logs and bank statements (reactive, not preventive).

### Where AI/Automation Is Needed
- **Device, behavior, and network risk scoring** using ML (phone, IP, geolocation, billing address, payment method).
- **Graph analysis** to spot fraud rings and mule networks (e.g., 50 different customers paying same bank account).
- **Continuous model learning** from new fraud patterns (retrains weekly using latest data).
- **Integration with KYC/AML** and chargebacks to close the loop (blacklist after 3rd chargeback).[146][149][152][159]
- **Adaptive rules:** Instead of "block all international transactions", learn "block international transactions with new devices".

### Fraud Impact in India
- **Card-not-present (CNP) fraud:** 0.1-0.5% of volume for most merchants
- **Account takeover:** Growing threat (phishing, SIM swap)
- **Mule networks:** Criminals use multiple fake accounts to move stolen money
- **3D Secure bypass:** Fraudsters bypass 3D Secure using device manipulation

**Typical ROI:** 50-70% reduction in fraud losses (0.3% → 0.1% of volume)[146][152]

### India Vendors
- **Sumsub** (Fraud + AML risk scoring).[146]
- **Flagright** (AI fraud detection, used by fintechs).[152]
- Many KYC vendors (Signzy, Shufti Pro, Karza, IDfy) now bundle fraud/risk models.[156][159]

---

## 6. Duplicate Payment Detection

### Goal
Detect and resolve cases where the same customer/order is charged twice across the same or multiple gateways.

### Manual Work Today
- Handle customer complaints ("I was charged twice") via support.
- Manually search gateway/bank statements to confirm.
- Manually issue refunds per PSP (each has different refund process).
- Very few merchants systematically scan for duplicates across gateways (reactive, not proactive).

### Where AI/Automation Is Needed
- **Pattern-based detection:** Same customer, same amount, short time window (<5 mins), similar metadata across gateways.
- **Cross-gateway, cross-bank matching:** Razorpay + Paytm + PhonePe, all banks combined.
- **Auto-refund or queue for agent approval** (with risk scoring: is this really a duplicate or a legitimate repeat purchase?).
- **Analytics to quantify impact:** How many duplicates per month? Root causes (UI double-click? Timeout retry? Gateway bug?).

### Manual vs Automated
| Scenario | Manual | Automated |
|----------|--------|-----------|
| Customer calls: "I was charged twice" | 10-20 mins investigation | 2-3 mins (search + confirmation) |
| Duplicate detection monthly | 0 (unless customer complains) | 30 mins (scan all transactions) |
| Refund processing | 15-30 mins per case | 2 mins (auto-process) |

### ROI
- **Duplicate detection:** Typically 0.1-0.5% of transaction volume (rare but costly to reputation).
- **Example:** ₹1Cr monthly volume → 100-500 duplicates → ₹1-5 lakhs impact → 3-5 day resolution cycle.

### India Vendors
- This is usually a feature inside payment reconciliation / AR tools rather than a standalone product.
- **Gaviti** (AI cash application + duplicate detection).[145]
- **Growfin** (Duplicate payment workflows).[148]
- **Kapittx** (Short-payment + duplicate detection).[158]

---

## 7. Payout Processing & Settlement

### Goal
Automate and optimize payouts to sellers/partners/drivers/agents and ensure they match underlying transactions and fee structures. Critical for marketplaces, delivery, lending.

### Manual Work Today
- Build CSVs from orders/commissions and upload to bank/API (error-prone).
- Manually compute fees, TDS, GST, commissions per seller/partner.
- Track failed payouts and retries in spreadsheets.
- Tie payouts back to funding and settlement cycles manually (complex for multi-pool scenarios).[151][161]
- Regulatory tracking (TDS payments to NSDL, GST on commission).[161]

### Where AI/Automation Is Needed
- **Automated payout file generation** per seller/partner, reconciled to underlying transactions.
- **Rule-based and ML-assisted payout timing** (e.g., hold high-risk seller 3 days, verify, then payout).
- **Automated TDS/GST calculation and filing hooks** (compute, generate e-memos, file with tax authorities).
- **Anomaly detection** on payout patterns (mule accounts, sudden spikes in payout velocity).
- **Multi-pool management:** Separate pools for sellers vs partners vs affiliates, each with different settlement cycles and rules.

### TDS/GST Complexity in India
- **TDS on commissions:** 10% on commission paid to partners (but depends on PAN status, section 194H rules).
- **GST on services:** If seller is GST-registered, no GST. If not registered, need reverse charge.
- **Payout settlement:** NEFT/RTGS for bank accounts, UPI for UPI IDs, wallet load for wallet partners.

**Before automation:** Manual tracking → Errors → Late TDS filing → Penalties  
**After automation:** Rules-based → 99%+ compliance → Auto-filing.

### India Vendors
- Payment gateways (RazorpayX, Cashfree Payouts, PayU, etc.) with payout APIs (not in search results, but standard market offerings).[161]
- AR/collections suites that integrate payouts and settlement insights (Growfin, Kapittx).[148][158][151]

---

## 8. Cross-Border Payment Reconciliation

### Goal
Reconcile FX payments across currencies, PSPs, and correspondent banks, including fees, FX spreads, and regulatory reporting. Critical for exporters, remittance fintechs, B2B payment platforms.

### Manual Work Today
- Manual mapping of FX deals, SWIFT messages, PSP reports, and bank statements (very manual).
- Manual FX gain/loss calculations (which rate to use? Deal date? Settlement date? Realization date?).
- Sanctions/AML checks done as separate process (not integrated).
- High dependence on operations team knowledge; hard to scale.[127][134][169]

### Where AI/Automation Is Needed
- **Multi-currency, multi-hop matching** (PSP → correspondent bank → local bank; trace the flow).
- **Automatic extraction from SWIFT/MT messages** and mapping to internal deals (parse SWIFT 100/200/400 fields).
- **FX rate anomaly detection** vs reference rates (Did we get ripped off on the FX conversion?).
- **Sanctions pattern recognition** per corridor (e.g., extra checks for high-risk routes).
- **RBI compliance packing:** FIRC, BRC, purpose code automation.[127][134][169]

### FX Reconciliation in India (Complex)
- **RBI rules:** Every USD transaction needs FIRC/BRC (Foreign Inward/Outward Remittance Certificate).
- **Purpose codes:** Every payment has a specific purpose code (B1 = services, C1 = travel, etc.); mismatch → RBI scrutiny.
- **Rate realizations:** Match FX deal rate to actual settlement rate; track unrealized gain/loss.
- **Month-end revaluation:** AS 11 / Ind AS 21 compliance (unrealized FX gain/loss on balance sheet).

**Before automation:** 5-10 days month-end close for exporters; frequent RBI audits due to documentation gaps.  
**After automation:** 1-2 hours month-end close; audit-ready compliance packs.[169]

### India Vendors
- **AI Accountant** (FX reconciliation for India with RBI compliance packs).[169]
- **SolveXia, Coda** (Cross-border reconciliation, limited India presence but used by Indian exporters).
- **OSTTRA** (Global FX settlement automation, used by larger Indian entities).[127][134]

---

## 9. Card Processing & Authorization

### Goal
Decide in real time whether to approve or decline a card transaction based on risk, compliance, issuer rules, and customer behavior. Critical for acquirers, PSPs, and issuers.

### Manual Work Today (Issuer Side)
- Static rule tuning by risk teams (amount limits, MCC blocks, geo blocks).
- Manual post-facto review of declines and false positives ("I tried to buy online but got declined, so I called customer support").
- Coordination between issuer, network, and processor on fraud parameters (slow).

### Where AI/Automation Is Needed
- **Real-time ML authorization decisioning** (issuer/processor side).
- **Modeling optimal risk thresholds** to reduce false declines while catching fraud.[146][149][152]
- **Adaptive 3DS challenge logic** (who to step up and when? Don't challenge if low-risk, do if high-risk).
- **Feedback loop from chargebacks and confirmed fraud** (retrain model weekly).
- **Alternative data integration:** Device fingerprinting, behavioral scoring, transaction history graph.

### Optimization Example
**Typical scenario (issuer rules-based):**
- Rule: "Block all transactions >₹50K"
- Result: Customer wants to buy ₹60K laptop → Declined → Abandonment

**ML-optimized scenario:**
- Score: ₹60K from known device, billing address matches customer address, has 10-year transaction history → Approve
- Score: ₹60K from new device, VPN detected, high-risk country IP → Step-up 3DS challenge
- Score: ₹60K, new-to-bank customer, multiple failed auth attempts → Decline

**ROI:** 2-5% reduction in decline rate = millions for large issuers.

### India Vendors
- Networks and processors (Visa, Mastercard, Stripe, Checkout, etc.).[144]
- Risk/AML platforms that plug into issuer/processor flows (Sumsub, Flagright).[146][149][152]

---

## 10. Cash Application

### Goal
Match incoming payments (from gateways/NEFT/UPI/RTGS) to open invoices or orders so AR and ledgers are accurate. (Similar to reconciliation but focused on the matching logic.)

### Manual Work Today
- Download bank/gateway statements and remittance emails.
- Manually map references/UTR/notes to invoice IDs (very manual: "Ordr12345", "Order_12345", "12345" = same invoice?).
- Track unapplied cash in spreadsheets.
- Follow up with customers when references are missing.[145][148][158][161]

### Where AI/Automation Is Needed
- **OCR + NLP on remittances and email advice** (extract invoice ID from "Pmt for inv INV-2024-1234 received, TDS withheld").
- **Fuzzy matching** of payer names/amounts/dates to invoices (80% match → auto-apply; <80% → review).
- **Auto-coding of deductions and short-payments** (customer paid 95%, rest withheld as TDS → auto-record).
- **Continuous learning** from human corrections (model improves as ops team corrects matches).[145][148]

### Example
**Before:** Customer transfers ₹95,000 to bank account with note "Thanks for invoice" (no invoice ID).  
**After automation:** System finds invoice INV-1234 for ₹95,000 from same customer, same week → Auto-match (95% confidence) → GL entry created.

### India Vendors
- **Gaviti** (AI cash application).[145]
- **Growfin** (AI matching remittances to invoices).[148]
- **Kapittx** (collections + reconciliation focused on Indian ERPs).[158]

---

## 💡 Summary & Roadmap

### Payment Ops ROI Table

| Process | Time Savings | Impact Size | India Vendors | Priority |
|---------|---|---|---|---|
| **Payment Reconciliation** | 80-90% | ₹25-50L/year | Gaviti, Growfin, Kapittx | 🔴 **HIGH** |
| **Collections (AR)** | 60-75% | ₹30-100L/year | Growfin, Kapittx, AI Accountant | 🔴 **HIGH** |
| **Fraud Detection** | 70-85% (manual review) | ₹50K-5L/year | Flagright, Sumsub | 🟡 **MEDIUM** |
| **Chargebacks** | 60-75% | ₹10-50L/year | Chargeflow, Justt | 🟡 **MEDIUM** |
| **Cross-Border Recon** | 80-90% | ₹20-100L/year (exporters) | AI Accountant | 🟡 **MEDIUM** |
| **Payout Processing** | 70-80% | ₹20-50L/year | Growfin, Kapittx | 🟡 **MEDIUM** |
| **Transaction Monitoring** | 70-85% | ₹10-30L/year | Flagright, Sumsub | 🟡 **MEDIUM** |

---

### Recommended Go-to-Market

1. **Year 1:** Payment Reconciliation + Collections + Chargebacks → Target ₹5-50Cr revenue merchants
2. **Year 2:** Add Fraud Detection + Payout Processing → Expand to gateways and marketplaces
3. **Year 3:** Add Cross-Border Recon + Settlement Monitoring → Exporters, remittance fintechs

[Source citations: 127, 134, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 156, 158, 159, 161, 169]
`,Tb=`# LOAN & CREDIT OPERATIONS (8 Processes)

## 1. Loan Processing & Approval ⭐

### Goal
Move from application to approval quickly with accurate risk assessment and full compliance, for retail and SME borrowers. Target: Days to weeks → Hours to days.[155][157][160]

### Manual Work Today
- Collect PDFs/photos of KYC, income proofs, bank statements via email/WhatsApp.
- Manually key data into LOS/LMS (error-prone, time-consuming).
- Underwriters manually compute ratios (DSCR, FOIR, debt ratios) using spreadsheets.
- Apply policy rules by hand ("FOIR < 50%? Approve").
- Many back-and-forths with borrowers for missing documents.
- Turnaround time: 5-15 days for retail loans, 10-30 days for SME loans.[155][157][160]

### Where AI/Automation Is Needed
- **OCR and data extraction** from bank statements, ITR, GST, salary slips (90%+ accuracy).[155][157][160]
- **Rule engines + ML scorecards** for automated underwriting (DSCR computation, bureau score interpretation, risk scoring).
- **Workflow automation** from onboarding → document collection → underwriting → approval → disbursal.
- **Risk-based pricing:** Instant approvals for low-risk segments (pre-approved offers).
- **Alternative data ingestion:** GST data (business revenue), bank data (cash flow patterns), bureau data (payment history).
- **KYC + compliance checks** built into workflow (no manual RBI/SEBI cross-check needed).

### Manual Work vs Automated
| Stage | Manual | Automated |
|-------|--------|-----------|
| KYC collection | 1-3 days | 2 hours (digital form + auto-KYC) |
| Document upload & data entry | 2-5 days | 30 mins (OCR auto-fills) |
| Underwriting analysis | 3-7 days | 30 mins (ML scoring) |
| Credit committee review | 2-5 days | 30 mins (auto-flag exceptions) |
| Approval decision | 1-2 days | Instant (rules engine) |
| Disbursal setup | 1-2 days | 2 hours |
| **Total turnaround** | **10-22 days** | **1-2 days** |

**Impact for ₹50 Cr loan book:**
- 2000 loan applications/year → 40% faster → 10,000+ hours saved
- Approval rate improvement: 70% → 85% (fewer manual rejections)
- Default rate improvement: 2% → 1.5% (better risk assessment).

### Core Lending Automation Components
1. **Document Intelligence:** OCR on ITR, bank statements, GST, salary slips
2. **Data Extraction:** Auto-fill underwriting templates from documents
3. **Decisioning Engine:** Rules + ML for approval/pricing
4. **KYC Integration:** Real-time PAN/Aadhaar verification
5. **Credit Bureau:** Automated CIBIL/Experian bureau pulls
6. **Alternative Data:** GST, MCA filings, bank accounts (via APIs)
7. **Workflow Management:** Status tracking, document reminders
8. **Disbursal Integration:** Auto-setup NACH, loan agreement e-sign

### India Vendors
- **Roopya LOS** (India loan origination platform with document OCR, bureau integration).[155]
- **Biz2X** (AI-powered LOS/LMS used by 30+ Indian lenders).[157]
- **SynoFin** (Lending platform listed on Decentro with full LOS/LMS suite).[160]

### Implementation Example (Retail Personal Loan)

**Before Automation:**
- Day 1-2: Customer submits form + documents via email
- Day 2-4: Data entry team manually keys into LOS
- Day 4-7: Underwriter reviews, computes ratios, creates scorecard
- Day 7-10: Credit team approves
- Day 10-15: Disbursal setup (NACH setup, agreement, etc.)

**After Automation:**
- Day 1: Customer submits digital form + selfie KYC + GST/ITR via app
- Day 1 EOD: System auto-extracts data, pulls bureau, flags exceptions (none in this case)
- Day 1 EOD: ML model scores (low-risk), rules engine auto-approves
- Day 2: Auto-generated offer + agreement sent for e-sign
- Day 2 EOD: Disbursal initiated
- **Total: 24-48 hours vs 10-15 days**

---

## 2. Credit Scoring & Risk Assessment

### Goal
Quantify the probability of default and set limits, pricing, and policies accordingly.[155][157][160]

### Manual Work Today
- Pull CIBIL/Experian reports manually (or via vendor).
- Use simple scorecards (cut-offs) and human judgment (inconsistent).
- Spreadsheets for ratio analysis (DSCR, FOIR, etc.).
- Limited use of alternative data (GST, bank behavior, cash flow).
- Models rarely updated (outdated after 6-12 months).

### Where AI/Automation Is Needed
- **ML models on multi-source data:** Bureau scores, bank statements (income pattern, balance, stability), GST (business revenue), device/location (fraud signal), payment history.[155][157][160]
- **Continuous model recalibration:** Retrain monthly using loan performance data (who defaulted? Who didn't?).
- **Portfolio-level risk segmentation:** Cluster customers into buckets; risk profile per bucket.
- **Early warning system:** Flag customers at-risk of default 30-90 days before it happens.
- **Explainable AI:** Why was this customer scored 45/100? Which factors contributed?

### Scoring Example
**Traditional scorecard:**
- CIBIL < 600 → Reject
- DSCR < 2.0 → Reject
- FOIR > 40% → Reject

**ML model:**
- CIBIL 580, DSCR 1.8, FOIR 45% → **BUT** GST shows 50% revenue growth YoY, bank balance >₹2 lakhs, zero payment delays in 5-year history → ML score: 72/100 (Approve at 1.5% interest premium)

**Result:** More nuanced decisions, fewer false rejections, better risk-adjusted pricing.

### India Vendors
- LOS/LMS vendors (Roopya, Biz2X, SynoFin) embed scorecards.[155][157][160]
- **Karza / Perfios** for bank-statement and cash-flow analytics.[156]

---

## 3. Loan Disbursement & Tracking / Debt Service Tracking

### Goal
Disburse loans correctly and track EMI/instalments, prepayments, and delinquencies.

### Manual Work Today
- Manual preparation of disbursement files to banks/NACH/UPI.
- Manual setup of repayment schedules in LMS (copy-paste from Excel).
- Manual tracking of missed EMIs and follow-ups.
- Frequent errors: wrong bank account, wrong amount, wrong tenure.

### Where AI/Automation Is Needed
- **Automated schedule generation and adjustment** (pre-closures, top-ups, moratoriums).
- **Predictive delinquency signals:** Flag customers likely to miss EMI 15-30 days before it happens.
- **Automated nudges:** Pre-due reminders, post-miss follow-ups, payment links via SMS.
- **Collateral management integration:** For secured loans, track collateral status, valuation changes.
- **NACH / UPI automation:** Setup mandates automatically, reconcile collections daily.

### Delinquency Pipeline
\`\`\`
Day 0: EMI Due
Day 3: Pre-due reminder SMS ("Your EMI of ₹5000 is due in 2 days")
Day 0 EOD: EMI missed → Flag for collection
Day 1-5: Automated WhatsApp + email reminders
Day 7: Escalate to field team if high-value loan
Day 30+: Regulatory escalation (stress-test impact analysis)
\`\`\`

### India Vendors
- Handled as modules within LMS/LOS suites (Roopya, Biz2X, SynoFin).[155][157][160]

---

## 4. Loan Modification & Refinancing

### Goal
Restructure loans (tenor/EMI changes, moratoriums, refinance to new product) while controlling risk.

### Manual Work Today
- Case-by-case manual analysis (can we restructure?).
- Manual recomputation of amortization schedules (using Calc/Excel).
- Manual agreement generation and tracking.

### Where AI/Automation Is Needed
- **Eligibility rules and loss-given-modification models:** Can we restructure this customer without exceeding loss thresholds?
- **Scenario simulation:** "If I extend tenure by 12 months, EMI drops from ₹5000 to ₹4200. What's the loss impact?"
- **Automated document generation and e-sign workflows.**
- **Regulatory reporting:** GST, TDS compliance on modification fees.

### Vendors
- Handled within LMS/LOS suites.[155][157][160]

---

## 5. Portfolio Risk Management, Collections & Recovery, Loan Default Prediction

### Goal
Manage the book as a whole: detect early stress, prioritize collections, and recover as much as possible.

### Manual Work Today
- Static buckets (CURRENT/30/60/90+ days past due).
- Manual prioritization of accounts for field collection.
- Simple roll-rate analysis in Excel (error-prone).
- Limited recovery strategy (mostly field collection, rarely legal action).

### Where AI/Automation Is Needed
- **Portfolio-level risk scoring:** Which segments are deteriorating? Which geographies?
- **Default probability and LGD models** per segment (use historical data to predict loss given default).
- **Allocation of collectors:** Who should our team prioritize? Which accounts have highest recovery probability?
- **Collection strategy optimization:** Digital vs field vs legal path per account (maximize expected recovery).
- **Early warning:** Identify accounts turning bad 60-90 days before default (pro-active vs reactive).[148][158][161]

### Example
**Before:**
- Portfolio: ₹100 Cr, 5000 customers
- Delinquent: ₹10 Cr, 500 accounts
- Field team: 50 collectors, visiting 10 accounts/day each
- Collection rate: 30% (recover ₹3Cr)

**After AI-optimized allocation:**
- Portfolio: ₹100 Cr, 5000 customers
- Delinquent: ₹10 Cr, 500 accounts
- Field team: 50 collectors, visiting 10 high-recovery-probability accounts/day
- Early warning: 200 accounts flagged as at-risk, preventive action taken
- Collection rate: 45% (recover ₹4.5Cr) → ₹1.5Cr incremental recovery

### India Vendors
- AR/collections tools (Growfin, Kapittx) for receivables, adapted for lending.[148][158][161]
- Specialized collection/analytics platforms within LMS vendors (Roopya, Biz2X).[155][157][160]

---

## 💡 Summary: Lending Ops ROI

| Process | Time Savings | Impact | Priority |
|---------|---|---|---|
| **Loan Processing & Approval** | 80-90% | 2-5x faster turnaround → 20-30% higher application conversion | 🔴 HIGH |
| **Credit Scoring** | 70-80% (manual review) | 1-2% reduction in default rate | 🔴 HIGH |
| **Delinquency Management** | 60-70% | 5-15% improvement in collection rates | 🟡 MEDIUM |
| **Portfolio Risk Analytics** | 75-85% | Better capital allocation, 2-3% improvement in ROA | 🟡 MEDIUM |
| **Default Prediction** | 80-90% (manual review) | Catch defaults 60-90 days early | 🟡 MEDIUM |

**Overall ROI for ₹50Cr NBFC:**
- Loan processing speedup: 40% faster approval → 15-20% more loans approved → ₹10-15Cr additional AUM
- Default rate improvement: 2% → 1.5% → ₹50L saved annually
- Collection efficiency: 30% → 40% → ₹1.5Cr additional recovery
- **Total annual benefit: ₹2-3 crore**

[Source citations: 148, 155, 156, 157, 158, 160, 161]
`,wb=`# COMPLIANCE & REGULATORY (10 Processes)

## 1. KYC Verification ⭐

### Goal
Verify customer identity and suitability per RBI/SEBI/IRDAI rules with minimal friction and instant activation.[154][156][159][162]

### Manual Work Today
- Collect PAN/Aadhaar/ID scans via email/WhatsApp.
- Manually verify photos, names, DOB, address (error-prone).
- Check against internal blacklists and sometimes external sanctioned lists.
- Store documents manually in folders (security risk, compliance nightmare).
- Document collection takes 3-7 days; many customers drop off during process.
- Overall onboarding time: 7-15 days.[154][156][162]

### Where AI/Automation Is Needed
- **Video KYC with face-match and liveness checks** (detect spoofing attempts).[154][156][162]
- **Direct PAN/Aadhaar/bank-account verification** through government APIs (UIDAI, NSDL, NPCI).
- **Risk-based routing:** Low-risk customers (existing bank account, age 25-60, metro) → Simplified KYC (2 mins). High-risk (new to country, PEP status) → Full video KYC.[154][156][159]
- **OCR on documents:** Auto-extract PAN number, DOB, address from Aadhaar/PAN cards.
- **One-click account activation** post-KYC (no manual approval queue).
- **Integration with credit bureau** (CIBIL for risk assessment).[156][162]
- **Continuous KYC during lifecycle:** Flag when customer details change (address on new transaction ≠ KYC address).

### Manual Work vs Automated
| Step | Manual | Automated |
|------|--------|-----------|
| Document collection | 3-7 days | 5-10 mins (digital form) |
| Document verification | 2-5 days | 30 secs (OCR + face match) |
| Sanctioned list check | 1-2 days | 2 secs (real-time database) |
| PAN verification | 1-2 days | 5 secs (API to NSDL) |
| Aadhaar verification | 1-2 days | 5 secs (API to UIDAI) |
| Account activation | 1-2 days | Instant |
| **Total KYC time** | **9-21 days** | **10-15 mins** |

**Impact:** Conversion improvement: 60% → 85% of applicants complete KYC (fewer drop-offs). ₹50 Cr revenue fintechs save ₹5-10L annually in ops time + customer acquisition cost.[154][156][159][162]

### India Video KYC Ecosystem
- **UIDAI eKYC:** Direct Aadhaar biometric authentication (most secure, fastest).
- **Bank eKYC:** Link existing bank account (instant, if customer willing).
- **Video KYC:** Manual operator watches customer (fallback for edge cases).

### India Vendors
- **Signzy** (Video KYC + biometric + document verification; used by 50+ Indian fintech platforms).[156]
- **HyperVerge** (Video KYC, face match, liveness detection; enterprise customer).[156]
- **Karza** (KYC APIs + credit data integration).[156]
- **AuthBridge** (Aadhaar eKYC specialist).[159]
- **KYCPlus** (eKYC/KYB, ReKYC automation, India-native).[162]

### Implementation Timeline
**Day 1:** Customer opens app → Sees KYC form → Submits Aadhaar + selfie  
**Day 1 (15 mins later):** System verifies Aadhaar → Face match → Liveness check → KYC complete  
**Day 1 (30 mins later):** Account active, customer can transact  

---

## 2. AML (Anti-Money Laundering) Compliance

### Goal
Detect and prevent money laundering and terrorist financing while maintaining customer experience.[146][149][152]

### Manual Work Today
- Manual screening of customer names against FATF/UN sanctions lists (slow, outdated).
- Suspicious Transaction Report (STR) filed manually by compliance team (error-prone, late).
- Limited ongoing monitoring (mostly initial KYC, not continuous).
- Sanctions list updates lag (sometimes weeks behind official updates).

### Where AI/Automation Is Needed
- **Real-time rule + ML-based transaction scoring:** Flag high-risk patterns instantly.
- **Continuous sanctions screening:** Auto-check customer names + transaction details against all sanctions lists (daily updates).[146][149][152]
- **Automated STR generation:** System detects suspicious patterns → Auto-drafts STR → Compliance team approves (vs drafting from scratch).
- **Integration with payment gateway:** Flag high-risk transactions before they settle.
- **Ongoing monitoring:** Not just KYC; monitor throughout customer lifecycle for changes in behavior/risk.

### AML Risk Signals in India
- **Politically Exposed Persons (PEP):** High-risk if they hold public office or have family members in office.
- **Country risk:** Transactions from FATF grey-list countries (higher scrutiny).
- **Structuring (smurfing):** Multiple transfers just below ₹10L (attempted CTR avoidance).
- **Rapid account turnover:** Open account, receive large transfer, send abroad (money-laundering pattern).
- **Inconsistent occupation:** Customer says "retired" but receives ₹5Cr/month (red flag).

### India Vendors
- **Sumsub** (AI AML transaction monitoring, global + India).[146]
- **Fenergo** (AML compliance platform, used by Indian banks).[149]
- **Flagright** (AI-native transaction monitoring & AML, used by 20+ Indian fintechs).[152]

---

## 3. Tax Compliance & Filing (Fintech-specific: GST, TDS)

### Goal
Accurately calculate and file GST and TDS per transaction, with full RBI/Income Tax compliance.

### Manual Work Today
- Manual spreadsheet tracking of GST (2% on commissions, 5% on services, 0% on certain products).
- Manual TDS calculation (10% commission, 20% contractor payments, etc.).
- Month-end GST return filing is complex multi-day manual process.
- Frequent corrections and penalties due to errors.

### Where AI/Automation Is Needed
- **Rule-based tax classification:** Every transaction auto-tagged for GST/TDS per applicable rules.[114][120][122]
- **Automated tax journal generation:** GST due, TDS due, etc. → GL entries auto-created.
- **GSTR-1/GSTR-2/GSTR-3B auto-generation:** System auto-fills return forms from transaction data (80-90% of entries auto-populated).
- **TDS reconciliation:** Verify TDS payments to income tax portal monthly.
- **E-way bill integration:** Auto-generate for goods movement (if applicable).
- **Tax audit reports:** Ready-to-go reconciliation for auditors (no manual compilation).

### Indian Tax Filing Complexity for Fintechs
- **GST on commission:** If you're a marketplace, commission is 5% GST (mostly).
- **TDS on payment to agents:** If you pay agents commission >₹30K/year, 10% TDS withholding.
- **GST on interest:** 0% on loans (interest is not GST-taxable).
- **GST on investment advice:** 5% GST on investment platform charges.

**Example:** D2C lending fintech with ₹10Cr/year commission from customers.
- Manual approach: 3-4 days month-end calculating GST + TDS, filing returns manually.
- Automated approach: System auto-generates GST/TDS liabilities, GSTR-1 ready by EOD, 30 mins filing time.

### India Vendors
- **AI Accountant** (Tax compliance + reconciliation focused on GST/TDS).[114][120][122]
- Accounting suites (Tally, Zoho Books) with tax modules.

---

## 4. Regulatory Reporting (RBI, SEBI, MCA Filings)

### Goal
Generate and file regulatory reports (RBI, SEBI, MCA) per schedule with 100% accuracy.

### Manual Work Today
- Quarterly/annual reporting done manually (CTR/STR to FIU for banks, quarterly statements to RBI for NBFCs).
- Manual consolidation from multiple systems (payment gateway data + core lending data + treasury data).
- Frequent errors → RBI notices → penalties.

### Where AI/Automation Is Needed
- **Regulatory data model:** System knows which transactions feed which RBI reports.
- **Automated report generation:** CTR (Cash Transaction Report) for >₹10L transactions, auto-generated from payment data.
- **Filing automation:** Auto-upload to FIU/RBI portals (reduce manual errors).
- **Audit trail:** Every number in the report traceable back to source transaction.

### RBI Reporting for Fintechs (India)
- **CTR (Cash Transaction Report):** Every cash transaction >₹10L (for banks/NBFCs).
- **STR (Suspicious Transaction Report):** Flagged transactions.
- **Quarterly return:** AUM, NPAs, capital adequacy (for NBFCs).
- **Delinquency report:** Default rates by product segment (for lenders).

### India Vendors
- Compliance platforms (ScrUT.io, others) include regulatory reporting modules.[139]
- Larger ERP systems (SAP, Finacle) have regulatory modules.

---

## 5. Sanctions List Screening

### Goal
Screen customers and transactions against FATF, UN, OFAC, and Indian sanctions lists to prevent financing of terrorism.

### Manual Work Today
- Periodic manual screening (maybe monthly or quarterly) against outdated lists.
- Naming mismatches cause false positives (e.g., "Ahmad" vs "Ahmed").

### Where AI/Automation Is Needed
- **Real-time screening:** Every new customer and high-value transaction auto-screened against all sanctions lists.[146][149][152]
- **Fuzzy matching:** Handle naming variations (transliteration, nicknames).
- **Daily list updates:** Automated updates from FATF/UN/OFAC/RBI (not manual).
- **Integrated workflow:** Auto-block transactions that hit sanctions list.

### Sanctions Lists Used in India
- **FATF grey list:** Countries under increased scrutiny (some high-risk).
- **UN sanctions:** UN-designated individuals and entities.
- **OFAC SDN list:** US Office of Foreign Assets Control (applicable for global fintechs).
- **RBI circular:** India-specific entities with special monitoring.

### India Vendors
- **Sumsub, Fenergo, Flagright** (mentioned above).[146][149][152]

---

## 6-10. Risk & Compliance Monitoring, Document Verification & Authentication, Policy Violation Detection, Adverse Media Screening, Beneficial Owner Verification

These are typically integrated modules within larger KYC/AML platforms:

- **Risk & Compliance Monitoring:** Continuous risk scoring; periodic re-verification per regulations.
- **Document Verification:** OCR + ML on document images; fraud detection (forged docs).
- **Policy Violation Detection:** Rule engine; flag customers violating internal policies (e.g., high-velocity transactions, PEP status).
- **Adverse Media Screening:** Scan news/social media for negative mentions (reputational risk); flag customers.
- **Beneficial Owner Verification:** For corporates, identify true ownership; prevent shell company fraud.

### ROI Summary: Compliance & Regulatory

| Process | Time Savings | Impact | Priority |
|---------|---|---|---|
| **KYC Verification** | 95% (9-21 days → 10-15 mins) | 25-35% improvement in customer conversion | 🔴 HIGH |
| **AML/Sanctions** | 80% (manual review) | 99%+ coverage vs 60% manual | 🔴 HIGH |
| **Tax Compliance** | 90% (3-4 days → 30 mins/month) | Zero audit adjustments vs 5-10% currently | 🟡 MEDIUM |
| **Regulatory Reporting** | 85% | On-time, 100% accurate filings vs current 70-80% | 🟡 MEDIUM |
| **Document Verification** | 75% | Real-time fraud detection | 🟡 MEDIUM |

**Overall ROI for fintech with ₹100Cr AUM:**
- Faster customer onboarding: 20-30% higher application conversion → ₹20-30Cr AUM lift
- Lower audit/regulatory issues: ₹10-20L penalty avoidance/year
- Faster regulatory close: 2-3 days close-time vs 1 week currently
- **Total annual benefit: ₹2-5 crore**

---

## Implementation Roadmap for Compliance Automation

### Phase 1 (Months 1-3): KYC + Basic AML
- Video KYC integration (Signzy or HyperVerge)
- Basic sanctions list screening (FATF, UN)
- Continuous KYC flag on material changes

### Phase 2 (Months 4-6): Tax + Regulatory
- GST/TDS automation for your specific business model
- RBI reporting automation (if lending/payment platform)
- AML transaction monitoring integration

### Phase 3 (Months 7-9): Advanced Compliance
- Adverse media screening
- Beneficial owner verification (for corporate customers)
- Policy violation detection

### Phase 4 (Months 10-12): Analytics + Optimization
- Compliance analytics dashboard (which rules flag most? Which are false positives?)
- Model tuning (reduce false positives while maintaining coverage)
- Regulatory optimization (which filings can we batch-process?)

---

## India Vendor Landscape Summary

| Vendor | Strength | Use Case | Integration |
|--------|----------|----------|---|
| **Signzy** | Video KYC, biometrics | Enterprise fintechs, banks | API + white-label |
| **HyperVerge** | Face match, liveness | Payment platforms | API + embedded |
| **Karza** | KYC + credit data | Lending platforms | API bundle |
| **AuthBridge** | Aadhaar eKYC specialist | Pure digital onboarding | Direct API |
| **KYCPlus** | eKYC/KYB + ReKYC | Compliance-heavy platforms | Enterprise suite |
| **Sumsub** | AML + transaction monitoring | Global reach + India | API + platform |
| **Flagright** | AI-native AML | Modern fintech | Modern API |
| **AI Accountant** | Tax + FX compliance | Exporters, payment platforms | Embedded accounting |

---

[Source citations: 114, 120, 122, 139, 146, 149, 152, 154, 156, 159, 162]
`,Eb=`# FINTECH-SPECIFIC OPERATIONS (10 Processes)

## 1. Brokerage Settlement (Trading platforms)

### Goal
Settle equity, futures, options, and commodity trades between brokers, exchanges, and clearing corporations (NSCCL/NCCEX in India) in real time or T+0/T+1.[164][165][166]

### Manual Work Today
- Export trade files from exchange connectivity layer (NSE/BSE APIs).
- Manually cross-check trade IDs, quantities, prices against exchange reports.
- Generate settlement files (demat movements, cash), upload to NSDL/CDSL/clearing corp.
- Track rejected settlements and follow up with clients.
- Reconcile contra broker statements manually against clearing corporation data.[164][165][166]

### Where AI/Automation Is Needed
- Real-time trade capture and automated settlement file generation per exchange/product.[164][165][166]
- STP (Straight-Through Processing) workflows from trade to clearing to settlement.[164][165][166]
- Anomaly detection: mismatched quantities, prices, symbols before settlement fails.[164][165][167]
- Automated margin and collateral tracking and calls.[166][167]
- Multi-exchange and multi-product settlement in one platform.[164][165]

### India Vendors
- **KGiSL** (Clearing & Settlement System for brokers).[164]
- **Helios Global** (Broker back-office integration and settlement automation).[165]
- **OSTTRA** (Settlement automation, SWIFT instruction generation).[167]
- **State Street** (T+1 settlement and post-trade solutions, used by Indian banks/brokers).[168]

---

## 2. Dividend Processing

### Goal
Process corporate dividend payments to shareholders/clients accurately and timely per stock date, record date, and payment date.

### Manual Work Today
- Receive dividend announcements from companies via CDSL/NSDL.
- Manually calculate per shareholder based on holdings.
- Generate dividend payment files (bank accounts, NEFT/RTGS).
- Track failed/returned dividends and follow up.
- Reconcile dividend payments post-settlement.

### Where AI/Automation Is Needed
- Real-time ingestion of dividend announcements and corporate actions feeds.
- Automated per-shareholder calculation based on demat holdings (integrated with CDSL/NSDL).
- Auto-generation of payment files and status tracking.
- Anomaly detection: missing/duplicate dividends.
- Reconciliation with bank settlement confirmation.

### India Vendors
- Typically integrated into LMS/brokerage settlement platforms (KGiSL, Helios).[164][165]

---

## 3. Margin Call Management

### Goal
Monitor margin requirements for leveraged trades, trigger margin calls when needed, and manage collateral.

### Manual Work Today
- Daily manual calculation of margin based on open positions.
- Spreadsheet-based triggers and notifications to clients.
- Manual follow-up on margin fulfillment.
- Manual collateral acceptance/rejection decisions.

### Where AI/Automation Is Needed
- Real-time margin computation per trade/account.
- ML-based prediction of margin adequacy and optimal collateral allocation.
- Automated margin call initiation and escalation workflows.
- Integration with collateral management (STAMP, tri-party accounts).[165][166][167]
- Proactive alerts before breach happens.

### India Vendors
- Brokerage platforms (KGiSL, Helios, others).[164][165]
- Institutional collateral platforms (OSTTRA).[167]

---

## 4. Fund Transfer Processing

### Goal
Move funds between customer accounts, brokers, clearing corps, and banks with full compliance and error handling.

### Manual Work Today
- Generate NEFT/RTGS/UPI files from fund requests.
- Manually verify bank details and amounts.
- Upload to bank APIs with error checking.
- Track failed transfers and retry manually.

### Where AI/Automation Is Needed
- Automated verification of bank details (via RBI payment systems APIs).
- Real-time fund movement status tracking.
- ML-based fraud detection on unusual fund flows.
- Auto-retry logic with exponential backoff.
- Compliance reporting (AML checks on large transfers).[164][165]

### India Vendors
- PSPs (RazorpayX, Cashfree) with transfer APIs.
- Brokerage platforms (KGiSL, Helios).[164][165]

---

## 5. Cryptocurrency/Digital Asset Reconciliation

### Goal
Reconcile blockchain records (wallets, exchanges, custody) with internal ledgers and ensure compliance.[170][173]

### Manual Work Today
- Export blockchain transaction history from multiple wallets/exchanges.
- Manually cross-check against internal ledger.
- Manual FX and gain/loss calculation.
- Spreadsheet-based tax reporting (TDS, capital gains).

### Where AI/Automation Is Needed
- Real-time blockchain data ingestion from multiple sources (exchanges, wallets, layer-2s).[170][173]
- Fuzzy matching between blockchain records and internal transactions.
- Automated gain/loss calculation and tax reporting per jurisdiction.
- AI-based anomaly detection (unauthorized transfers, hacks).[170][173]
- Compliance pack generation (TDS reconciliation, income classification).[173]

### India Vendors
- **Duco** (Crypto reconciliation platform).[170]
- **Koinx** (Crypto tax + reconciliation, India-focused with TDS compliance).[173]
- **ClearTax** (Crypto income and tax filing for India).[173]

---

## 6. Interest Rate Swap Management

### Goal
Book, value, settle interest rate swaps and manage P&L and counterparty risk.

### Manual Work Today
- Manual swap pricing calculations (fixed vs floating legs).
- Spreadsheet P&L calculations.
- Manual settlement instruction generation.
- Manual counterparty risk tracking.

### Where AI/Automation Is Needed
- Real-time valuation using market curves and models.
- Automated cash-flow prediction and settlement instruction generation.
- ML-based CVA (credit valuation adjustment) and counterparty risk scoring.
- Regulatory reporting (EMIR, FRTB compliance).[167]

### India Vendors
- Typically handled within larger treasury platforms; limited India-native vendors visible.
- International platforms (Bloomberg, Murex, etc.) used by Indian banks.

---

## 7. FX Reconciliation

### Goal
Match FX transactions across trading, settlement, and bank records; track FX gain/loss; ensure RBI compliance.[169][172]

### Manual Work Today
- Manual matching of trade FX deals to bank settlement confirmations.
- Manual FX rate lookups and gain/loss calculations.
- Manual FIRC/BRC document collection.
- Manual compliance reporting per RBI purpose codes and remittance tracking.[169]

### Where AI/Automation Is Needed
- Multi-currency, multi-bank matching with fee/timing adjustments.[169]
- Automated FX rate application per AS 11 / Ind AS 21 standards.[169]
- Automated month-end revaluation and unrealized gain/loss journalization.[169]
- Compliance pack generation (FIRC, BRC, purpose code mapping, audit trail).[169]
- Smart routing to optimize FX corridors and minimize conversion loss.[172]

### India Vendors
- **AI Accountant** (FX reconciliation for India with RBI compliance packs).[169]
- Larger reconciliation/treasury platforms (SolveXia, Coda, etc., adapted for India).[169]

---

## 8. Trade Confirmation & Settlement

### Goal
Confirm trades with counterparties, resolve breaks, and ensure settlement on time.[164][165][166]

### Manual Work Today
- Receive/send trade confirmations via email, FTP, or manual portal entries.
- Manually match own vs counterparty data (quantity, price, settlement terms).
- Escalate and manually resolve breaks.
- Track STP rate (% settled without manual intervention).

### Where AI/Automation Is Needed
- Automated ingestion of confirmations from counterparties (SWIFT, ISO 20022, APIs).[164][165][167]
- ML-based matching and automatic confirmation when aligned.[164][166]
- Intelligent workflow routing (escalate only exceptions).
- Automated break investigation using trade logs and market data.[165][166]

### India Vendors
- Brokerage platforms (KGiSL, Helios).[164][165]
- Post-trade solutions (OSTTRA, State Street).[167][168]

---

## 9. Coupon Payment Processing

### Goal
Process coupon (interest) payments on bonds, debentures, and other fixed-income securities.

### Manual Work Today
- Receive coupon schedules from issuers.
- Manually calculate per investor based on holdings.
- Generate payment instructions (bank files).
- Track failed coupons and follow up.

### Where AI/Automation Is Needed
- Real-time coupon announcement ingestion.
- Automated calculation per investor (integrated with holdings data).
- Automated payment file generation and status tracking.
- Anomaly detection (missing coupons, timing mismatches).

### India Vendors
- Typically within brokerage/custodial platforms (KGiSL, Helios).[164][165]

---

## 10. Portfolio Rebalancing

### Goal
Systematically realign portfolio allocations to target weights, minimizing drift and execution costs.

### Manual work Today
- Monthly/quarterly manual calculation of portfolio drift.
- Spreadsheet analysis of rebalancing need.
- Manual order generation to rebalance.
- Manual trade execution and tracking.

### Where AI/Automation Is Needed
- Real-time portfolio tracking against target allocations.
- ML-optimized rebalancing algorithms (minimize fees, tax impact, slippage).
- Automated order generation and execution.
- Scenario analysis for "what-if" rebalancing decisions.
- Integration with execution and settlement systems.

### India Vendors
- Wealth/portfolio platforms (some wealth tech companies like Smallcase, others).
- Institutional portfolio management systems.

---

## Summary: Fintech-Specific Automation ROI

| Process | Manual Time | Automated Time | Savings | Key Vendors (India) |
|---------|------------|---|---|---|
| **Brokerage Settlement** | 2-3 hrs daily | 10-15 mins | 90%+ | KGiSL, Helios |
| **Dividend Processing** | 1-2 hrs per event | 5 mins | 95%+ | KGiSL, Helios |
| **Margin Calls** | 30-45 mins daily | Real-time | 95%+ | Helios, brokerage platforms |
| **FX Reconciliation** | 2-3 hrs monthly | 30 mins | 90%+ | AI Accountant, SolveXia |
| **Crypto Reconciliation** | 3-5 hrs weekly | 30 mins | 92%+ | Duco, Koinx |
| **Trade Confirmation** | 1-2 hrs daily | 10-15 mins | 90%+ | KGiSL, OSTTRA |

---

## Next Steps for You

**If building for trading platforms / brokers:**
- Prioritize: Brokerage Settlement → FX Reconciliation → Trade Confirmation
- Use KGiSL/Helios/OSTTRA as reference for feature parity.

**If building for crypto fintechs:**
- Prioritize: Crypto Reconciliation → Tax reporting
- Use Duco/Koinx as reference.

**If building for wealth/portfolio management:**
- Prioritize: Portfolio Risk Analytics → Rebalancing automation.

[Source citations: 164, 165, 166, 167, 168, 169, 170, 172, 173]
`,Rb=`# CUSTOMER OPERATIONS & TREASURY/LIQUIDITY MANAGEMENT (11 Processes)

## CUSTOMER OPERATIONS (Fintech-focused) (6)

### 1. Customer Onboarding (Fintech KYC)

**Goal**  
Acquire customers with full KYC/AML compliance, minimal friction, and instant account activation for lending/investment/payment platforms.

**Manual Work Today**
- Collect documents via email/WhatsApp/branch.
- Manual PAN/Aadhaar/address verification.
- Crosscheck against blacklists/sanctions manually.
- Manual account setup in core system.
- Follow-up on missing documents (delays of days/weeks).[154][156][162]

**Where AI/Automation Is Needed**
- Video KYC with face-match and liveness detection.[154][156][162]
- Direct PAN/Aadhaar verification via government APIs.
- Automated risk-based routing (full KYC vs simplified vs video).[154][156][159]
- One-click account activation post-KYC.[154][156][162]
- Integration with credit bureau (CIBIL for risk assessment).[156]

**India Vendors**
- Signzy (video KYC, biometric, document verification).[156]
- HyperVerge (video KYC, face match).[156]
- Karza (KYC APIs + credit data).[156]
- AuthBridge (Aadhaar eKYC).[159]
- KYCPlus (eKYC/KYB, ReKYC automation).[162]

---

### 2. Customer KYC Updates (Periodic Re-verification)

**Goal**  
Automatically trigger and manage periodic KYC updates per RBI/SEBI rules (typically yearly for retail).

**Manual Work Today**
- Track KYC expiry dates in spreadsheets.
- Manual email reminders to customers.
- Manual re-verification process (similar to onboarding).
- Compliance reports tracking completion rates.

**Where AI/Automation Is Needed**
- Automated re-KYC trigger based on duration and transaction risk.
- Self-service re-KYC workflows (video/document re-verification).
- Risk-based re-KYC intervals (frequent traders need more frequent checks).[159][162]
- Automated compliance reporting to RBI.[159][162]

**India Vendors**
- Signzy, HyperVerge, KYCPlus (KYC + ReKYC workflows).[156][162]

---

### 3. Customer Segmentation & Targeting (Behavioral Finance)

**Goal**  
Segment customers by behavior, risk, profitability and target them with personalized products/offers.

**Manual Work Today**
- SQL queries or Excel pivot tables to segment customers.
- Manual creation of marketing lists.
- Manual campaign setup and targeting.
- Manual tracking of campaign ROI.

**Where AI/Automation Is Needed**
- Real-time behavioral segmentation (transaction patterns, product usage, lifecycle stage).
- Propensity modeling (who will buy loan/investment product?).[148][158]
- Personalized offer optimization (best product, pricing, timing per customer).
- A/B testing automation for campaign messages.

**India Vendors**
- CDP/marketing automation platforms (Segment, Traction, etc., adapted for fintech).
- Some embedded in AR/collections tools (Growfin, Kapittx).[148][158]

---

### 4. Customer Churn Prediction (Fintech Customers)

**Goal**  
Identify at-risk customers before they leave and trigger retention offers/engagement.

**Manual Work Today**
- Manual analysis of user engagement trends.
- Spreadsheet-based churn calculations.
- Manual outreach to high-risk customers.

**Where AI/Automation Is Needed**
- ML churn prediction models trained on transaction/usage/NPS history.
- Automated risk scoring with 30-60 day lead time.
- Automated retention workflows (personalized offers, priority support).
- ML-optimized retention offer targeting (what product keeps them).[148][158]

**India Vendors**
- AR platforms (Growfin, Kapittx) include some customer health metrics.[148][158]
- Specialized churn/retention platforms (limited India-native, mostly international).

---

### 5. Support Ticket Routing (Payment/Loan Disputes)

**Goal**  
Automatically route and prioritize customer complaints (disputed charges, payment failures, loan denials) to the right specialist teams.

**Manual Work Today**
- Manual categorization of support tickets.
- Manual assignment to agents.
- Manual escalation for complex issues.
- Long resolution times due to misrouting.

**Where AI/Automation Is Needed**
- NLP-based ticket categorization (payment issue, chargeback, loan query, etc.).
- Intelligent routing based on agent expertise and current load.
- Sentiment analysis to detect escalation need early.
- Auto-resolution of common issues (FAQ bot).[161]

**India Vendors**
- Typical support/ticketing features within fintech platforms.
- Zendesk, Freshdesk, Intercom adapted for Indian fintech.[161]

---

### 6. Complaint Resolution (Financial Disputes)

**Goal**  
Resolve customer disputes systematically with audit trail and regulatory compliance (OMBUDSMAN rules in India).

**Manual Work Today**
- Manual investigation of complaints.
- Manual evidence gathering from systems.
- Manual redressal decisions and follow-up.
- Manual OMBUDSMAN filing (if needed).[139]

**Where AI/Automation Is Needed**
- Automated complaint classification and eligibility check.
- Auto-extraction of evidence from transactions/KYC/communications.
- Workflow automation for investigation and approval gates.[139]
- Automated redressal (refund, waiver) execution and communication.
- Regulatory reporting and OMBUDSMAN filing automation.[139]

**India Vendors**
- Compliance platforms within fintech stacks.
- Compliance suites (ScrUT.io, fintech compliance platforms) include complaint management.[139]

---

## TREASURY & LIQUIDITY MANAGEMENT (5)

### 7. Cash Flow Forecasting (Fintech-specific)

**Goal**  
Predict daily/weekly cash inflows (customer deposits, loan disbursements) and outflows (withdrawals, payouts) for liquidity planning.

**Manual Work Today**
- Manual aggregation of transaction forecasts from different product lines.
- Spreadsheet-based projections using historical averages.
- Daily/weekly re-forecasting by hand.
- Often inaccurate due to product/seasonal dynamics not captured.

**Where AI/Automation Is Needed**
- ML cash-flow forecasting using transaction patterns, seasonality, product mix, market events.
- Real-time reforecasting as actuals flow in.
- Stress testing (what if churn spikes, markets crash?).
- Automated alerts for liquidity shortfalls.[169][172]

**India Vendors**
- Treasury platforms (limited India-native; mostly enterprise systems from international vendors).
- FP&A tools with cash forecasting modules (Anaplan, Forecast.io).[122]

---

### 8. Working Capital Management

**Goal**  
Optimize the cash-to-operations cycle: manage inventory days, payable days, receivable days to maximize cash flow.

**Manual Work Today**
- Spreadsheet analysis of DSO/DPO/DIO (Days Sales/Payables/Inventory Outstanding).
- Manual negotiations with vendors/customers on payment terms.
- Manual monitoring of float and liquidity buffers.

**Where AI/Automation Is Needed**
- Automated DSO/DPO/DIO calculation with trend analysis.
- ML-based optimization recommendations (negotiate longer DPO? Tighten DSO?).
- Predictive modeling of working capital needs per business scenario.
- Automated negotiation support (suggested terms based on benchmarks).

**India Vendors**
- AR/collections platforms (Growfin, Kapittx) include WC analytics.[148][158]

---

### 9. Interest Calculation (Loans, Deposits)

**Goal**  
Accurately calculate accrued interest on loans and deposits per regulatory rules (compounding frequency, day-count conventions, rate resets).

**Manual Work Today**
- Manual per-loan/deposit interest calculations in Excel.
- Manual month-end interest accrual journalization.
- Manual reconciliation with core system calculations.
- Error-prone and audit-intensive.

**Where AI/Automation Is Needed**
- Automated real-time interest calculation per RBI schedules and product rules.
- Automated month-end accrual and GL journalization.
- Rule engine for complex scenarios (floating-rate reset, early-payoff adjustments).
- Audit trail and regulatory reconciliation reports.[155][157][160]

**India Vendors**
- LOS/LMS platforms (Roopya, Biz2X, SynoFin) embed interest calc engines.[155][157][160]

---

### 10. Commission Calculation & Payouts (Agents, Partners)

**Goal**  
Calculate sales commissions for agents/partners based on rules (volume, product, timing) and automate payouts.[148][158][161]

**Manual Work Today**
- Manual spreadsheet commission calculations per agent/tier.
- Verification against sales data.
- Manual bank file generation for payouts.
- Frequent disputes over calculations.

**Where AI/Automation Is Needed**
- Rules engine for complex commission structures (tiered, splits, clawbacks).
- Automated commission calculation with audit trail.
- Reconciliation with actual sales.
- Automated payout file generation and status tracking.
- Commission disputes resolution workflows.[148][158][161]

**India Vendors**
- AR platforms (Growfin, Kapittx).[148][158]
- Collections/payout suites (AI Accountant).[161]

---

### 11. Liquidity Management (NBFC, Banks)

**Goal**  
Manage overall liquidity position across funding sources, ensure regulatory compliance (SLR, CRR buffers) and optimize cost of funds.

**Manual Work Today**
- Manual tracking of deposit balances and maturities.
- Manual borrowing decisions (repo, CD market, banks) based on spreadsheets.
- Manual compliance reporting to RBI.[139]
- Ad-hoc liquidity crisis response.

**Where AI/Automation Is Needed**
- Real-time liquidity position dashboard (inflows, outflows, holdings by maturity).
- ML-based liquidity forecasting and stress testing.
- Automated funding decisions (when to borrow, from where, at what rate).
- Automated regulatory reporting (liquidity coverage ratio, etc.).[139]
- Scenario planning for ALM (asset-liability management).

**India Vendors**
- Core banking platforms (Finacle, etc.) have liquidity modules.
- Treasury solutions from international vendors adapted for India.

---

## Summary: Customer Ops & Treasury Automation ROI

| Process | Manual Time | Automated Time | Savings | Key Vendors (India) |
|---------|------------|---|---|---|
| **Customer Onboarding** | 2-4 hrs per customer | 5-10 mins | 95%+ | Signzy, HyperVerge, KYCPlus |
| **KYC Re-verification** | 30-45 mins per update | 5-10 mins | 90%+ | Signzy, KYCPlus |
| **Churn Prediction** | Manual analysis, hours | Real-time scoring | 90%+ | Growfin, Kapittx |
| **Interest Calculation** | 2-3 hrs monthly | Real-time | 99%+ | Roopya, Biz2X |
| **Commission Calc** | 3-4 hrs per cycle | 30-45 mins | 90%+ | Growfin, Kapittx |
| **Complaint Resolution** | 1-3 days per case | 1-4 hrs per case | 80%+ | Compliance suites |

---

## Next Steps

**If building for fintech lenders:**
- Prioritize: Customer Onboarding → Interest Calculation → Churn Prediction

**If building for fintechs with agents/partnerships:**
- Prioritize: Commission Calculation → Customer Segmentation → Churn Prediction

**If building for NBFC/banks:**
- Prioritize: Liquidity Management → Cash Flow Forecasting → Treasury optimization

[Source citations: 139, 148, 154, 156, 158, 159, 161, 162, 169, 172]
`,Mb=`# STRATEGIC FINTECH PROCESSES (6 Processes)

## 1. Scenario Analysis & Modeling (Credit Stress Testing)

**Goal**  
Model "what-if" scenarios for credit portfolio (e.g., GDP down 2%, unemployment up 1%) to predict portfolio losses and manage capital buffers.

**Manual Work Today**
- Manual Excel models with macros.
- Limited to a few pre-defined scenarios.
- Requires weeks to build new scenarios.
- Hard to collaborate on model updates.
- Often siloed in risk departments.

**Where AI/Automation Is Needed**
- Scenario building UI (drag-and-drop macro variables).
- Real-time portfolio re-valuation under each scenario.
- ML-based correlation inference between variables and defaults.
- Automated sensitivity analysis (which variables matter most?).
- Instant export of results to regulatory reports.[120][122][125]

**India Vendors**
- Risk management tools within larger fintech platforms (Biz2X, Roopya for lending).
- Specialized scenario/stress tools within treasury/risk suites (limited India-native products).

---

## 2. Stress Testing (Capital Adequacy, Liquidity)

**Goal**  
Measure how resilient the fintech is to extreme market/credit events (e.g., 30% customer churn, 50% asset decline) and ensure capital/liquidity buffers are adequate.[120][122][125]

**Manual Work Today**
- Regulatory stress tests (RBI-mandated) done manually once/year or quarter.
- Ad-hoc stress testing for board risk committee.
- Often done in Excel with many assumptions that are hard to document.
- Slow iteration; hard to explore multiple scenarios.

**Where AI/Automation Is Needed**
- Automated regulatory stress test generation per RBI guidelines.
- Interactive scenario builder for exploratory stress testing.
- Multi-dimensional stress (credit + market + liquidity shocks simultaneously).
- Automated impact on regulatory ratios (CAR, LCR, NSFR).
- Visualization and automated report generation for board/RBI.[120][122][125]

**India Vendors**
- Regulatory reporting suites (ScrUT.io, others) include stress-test modules.[139]
- Banking/NBFC platforms (Finacle, etc.) have stress-testing modules.

---

## 3. Business Intelligence & Insights (Fintech Metrics)

**Goal**  
Build fintech-specific dashboards and metrics (active customers, GMV, take-rate, DSO, CAC, LTV) to enable data-driven decisions.

**Manual Work Today**
- Manual data extraction from core/billing/payment systems.
- Spreadsheet consolidation and formatting.
- Monthly/weekly report generation (slow cycle).
- Inconsistent definitions across teams (finance calculates GMV differently than ops).

**Where AI/Automation Is Needed**
- Data warehouse with automated ETL from all source systems.
- Data catalog and lineage (know where every metric comes from).
- Self-service BI for business users (no SQL needed).
- Automated alerts (GMV down 10%, LTV/CAC ratio broke).
- ML-based anomaly detection and root-cause analysis.[122][125][140]

**India Vendors**
- BI platforms (Tableau, Looker, etc.) used by Indian fintechs.
- Some FP&A tools (Anaplan, Forecast.io) with BI components.[122][125]
- Data warehousing (Snowflake, BigQuery) increasingly adopted by Indian fintechs.

---

## 4. Revenue Recognition (Complex Fintech Models)

**Goal**  
Recognize revenue correctly per Ind AS 115 / ASC 606 for complex fintech products (loan origination fees, interest, upfront discounts, agent commissions).

**Manual Work Today**
- Manual spreadsheet tracking of revenue events per transaction.
- Manual month-end journal entries.
- Manual reconciliation with billing system.
- Frequent audit adjustments for revenue misstatement.

**Where AI/Automation Is Needed**
- Automated revenue event detection from transaction logs.
- Rule engine for complex recognition patterns (e.g., "recognize upfront fee over loan tenure").
- Automated month-end journal generation per Ind AS 115.
- Continuous audit trail (what transaction led to which journal entry).
- Regulatory reporting (revenue by product line, geography, etc.).[114][120][122]

**India Vendors**
- Accounting/ERP suites (Tally, Zoho Books) with revenue modules.
- Specialized revenue recognition platforms (finite India presence; mostly international).

---

## 5. Deferred Revenue Management (SaaS Fintech)

**Goal**  
Track customer prepayments (e.g., subscription, API credits) and recognize them over time correctly.[114][120][122]

**Manual Work Today**
- Manual prepayment receipt and reconciliation.
- Manual monthly revenue recognition calculations.
- Difficult tracking of usage vs deferred amount.

**Where AI/Automation Is Needed**
- Real-time prepayment ingestion and GL posting.
- Usage-based revenue recognition (recognize as customer consumes credits).
- Automated month-end deferred revenue adjustments.
- Customer prepayment balance dashboard for support.[114][120][122]

**India Vendors**
- Billing platforms (Zuora, etc., used by SaaS fintechs in India).
- Accounting automation within ERP/accounting tools.

---

## 6. Portfolio Risk Analytics

**Goal**  
Analyze portfolio composition, concentration risk, correlation, and expected loss to guide underwriting and capital allocation.

**Manual Work Today**
- Manual segmentation of portfolio (by product, risk grade, geography, etc.).
- Spreadsheet-based concentration analysis.
- Infrequent updates (quarterly/annually).
- Limited ability to explore "what-if" scenarios.

**Where AI/Automation Is Needed**
- Real-time portfolio dashboards with drilldown by any dimension.
- ML-based portfolio segmentation and risk bucketing.
- Concentration risk alerts (e.g., "Top 10 customers = 25% of book, breach threshold").
- Correlation and default probability modeling.
- Monte Carlo simulation for portfolio loss distribution.
- Automated underwriting guidance (decline high-concentration risk).[120][122][125]

**India Vendors**
- Risk management within LOS/LMS (Roopya, Biz2X).[155][157]
- BI platforms (Tableau, Looker) for visualization.
- Specialized risk analytics (limited India-native; mostly global vendors).

---

## Summary: Strategic Process ROI

| Process | Manual Time | Automated Time | Savings | Key Vendors (India) |
|---------|------------|---|---|---|
| **Scenario Analysis** | 10-40 hrs per scenario | 30-60 mins | 95%+ | Roopya, Biz2X (embedded) |
| **Stress Testing** | 20-40 hrs per test | 2-4 hrs | 80%+ | ScrUT.io, Finacle |
| **BI Dashboard Updates** | 10-20 hrs weekly | Real-time (automated) | 95%+ | Tableau, Looker |
| **Revenue Recognition** | 8-12 hrs monthly | 2-3 hrs | 90%+ | Zoho Books, Tally |
| **Portfolio Analytics** | 15-30 hrs monthly | Real-time (automated) | 90%+ | Roopya, Biz2X |
| **Deferred Revenue Mgmt** | 5-8 hrs monthly | 30-60 mins | 92%+ | Zuora, billing platforms |

---

## Strategic Impact

**Strategic processes are decision-enablers:**
- They consume data from operational processes (payment recon, loan origination, etc.).
- They guide high-stakes decisions (underwriting policy, pricing, product mix, capital allocation).
- **Automation ROI is MULTIPLICATIVE:** Better insights → Better decisions → Better business outcomes.

**Example:** If better portfolio analytics prevents 5% of defaults (worth ₹1-2 crore for a mid-sized NBFC), that **single process automation pays for the entire fintech stack.**

---

## Next Steps for You

**If you're an NBFC/bank:**
- Prioritize: Portfolio Risk Analytics → Stress Testing → Liquidity Management

**If you're a lending fintech:**
- Prioritize: Portfolio Risk Analytics → Credit Scenario Analysis → Default Prediction

**If you're a SaaS fintech:**
- Prioritize: Revenue Recognition → Deferred Revenue → BI/Metrics

**If you're a trading/brokerage platform:**
- Prioritize: Portfolio Rebalancing Analytics → Stress Testing → Scenario Analysis

---

## Cross-Process Synergies

**Payment Reconciliation** (your current focus) + **Strategic Processes** = **Complete fintech stack:**

\`\`\`
Operational Layer (Automation):
├─ Payment Reconciliation ← (Your focus) ✓
├─ Transaction Monitoring ← (Feeds into strategic)
├─ Fraud Detection ← (Feeds into risk)
└─ Duplicate Detection ← (Quality metric)

Strategic Layer (Insights):
├─ Portfolio Risk Analytics ← (Uses payment/transaction data)
├─ Scenario Analysis ← (Uses portfolio data)
├─ Revenue Recognition ← (Uses transaction data)
└─ Business Intelligence ← (Aggregates all)

Result: End-to-end fintech automation
\`\`\`

---

## Your Competitive Advantage

**Most Indian fintechs focus on operational automation (payments, lending).**
**Few have deep strategic process automation (risk analytics, scenario modeling).**

**By building both operational (payment recon) + strategic (portfolio analytics) tools, you can own the entire "fintech operations stack."**

[Source citations: 114, 120, 122, 125, 139, 140, 155, 157]
`,Db=`# QUICK START GUIDE: FINTECH AUTOMATION ROADMAP

## 📊 Complete Documentation Created

You now have **6 comprehensive markdown files** covering **55 fintech-specific automation processes:**

1. **payment_ops_detailed.md** (10 processes) - Payment infrastructure
2. **lending_ops_detailed.md** (8 processes) - Lending workflows
3. **compliance_ops_detailed.md** (10 processes) - Regulatory & AML
4. **fintech_ops_detailed.md** (10 processes) - Trading & crypto
5. **customer_treasury_detailed.md** (11 processes) - Customer & treasury
6. **strategic_processes_detailed.md** (6 processes) - Analytics & risk

**Plus:** Master index file (fintech_processes_index.md)

---

## 🎯 What Each File Contains

Each process document has:
- **Goal** - What the process accomplishes
- **Manual Work Today** - Current state (hours/days per task)
- **Where AI/Automation Is Needed** - Specific automation opportunities
- **Manual vs Automated** - Comparison table (time savings)
- **India Vendors** - Companies doing this now (with citations)
- **Implementation Examples** - Real-world scenarios
- **ROI Analysis** - Quantified impact

---

## 💡 Key Findings

### Highest ROI Processes (Your Priority)

| Process | ROI | Time Saved | Effort |
|---------|-----|-----------|--------|
| **Payment Reconciliation** | ₹50-100K/year per merchant | 80-90% | Medium |
| **KYC Verification** | 95% faster | Days → Minutes | Medium |
| **Loan Processing** | 2-5x speedup | Days → Hours | High |
| **Collections/AR** | ₹30-100L/year | 60-75% | Medium |
| **Fraud Detection** | ₹50K-5L/year | 70-85% review time | High |

### Market Opportunity in India

| Segment | Size | Spend/Entity | Annual TAM |
|---------|------|---|---|
| **D2C/E-commerce merchants** | ₹5-100Cr revenue | ₹15-50K/month | ₹50-100Cr |
| **Lending/NBFC** | ₹50Cr+ asset book | ₹50-200K/month | ₹100-200Cr |
| **Trading/Brokers** | 5000+ brokers | ₹50-100K/month | ₹50-100Cr |
| **Exporters/B2B** | 10000+ exporters | ₹20-50K/month | ₹20-50Cr |
| **Fintechs (payments)** | 200+ fintechs | ₹100-500K/month | ₹50-100Cr |

**Total TAM: ₹250-550 crore/year** (India, fintech ops automation)

---

## 🚀 Recommended 12-Month Roadmap

### Quarter 1: Master Your Core (Payments)
- [ ] Payment Reconciliation (deep product spec)
- [ ] Collections/AR (extend to lenders too)
- [ ] Chargebacks & dispute resolution

**Target:** MVP with payment reconciliation, 10-20 pilot customers

### Quarter 2: Expand Product + Move to Lending
- [ ] Add to current product: Fraud detection, duplicate detection
- [ ] New product: Loan processing automation
- [ ] Customer testimonials + case studies from Q1

**Target:** Payment product stable (50+ paying customers), Lending MVP (5-10 pilots)

### Quarter 3: Add Compliance + Scale Sales
- [ ] KYC automation integration (with Signzy/HyperVerge)
- [ ] Basic AML + tax compliance
- [ ] Scale payment product to 100+ customers

**Target:** Become "Fintech Operations Stack" positioning

### Quarter 4: Add Analytics + Enterprise
- [ ] Portfolio risk analytics (lending customers)
- [ ] Revenue recognition + deferred revenue (SaaS fintechs)
- [ ] Enterprise sales cycle for larger fintechs

**Target:** Top 50 fintech customer set, ₹1-2Cr ARR

---

## 🎬 Immediate Next Steps

### This Week
1. **Deep read:** Pick 2 process docs (payment_ops + lending_ops)
2. **Customer interviews:** Talk to 5 potential customers (use docs as talking points)
3. **Competitive analysis:** Who's doing this in India? Gaps?

### This Month
1. **Build detailed spec:** Pick 1 process (payment reconciliation?), write 10-page build spec
2. **Competitive positioning:** Create matrix vs Gaviti, Growfin, Kapittx
3. **Go-to-market:** Decide: B2B SaaS or white-label to gateways?

### This Quarter
1. **Prototype:** Build MVP of top 1-2 processes
2. **Pilot:** Identify 3-5 pilot customers, get feedback
3. **Funding:** Ready deck + financials for seed round

---

## 💰 Unit Economics (Illustrative)

### SaaS Model (Payment Reconciliation)

**Customer Profile:** D2C merchant with ₹5-10Cr annual revenue

**Pricing:** ₹2,000-5,000/month (based on transaction volume)

**Unit Economics:**
- CAC: ₹20-30K (paid search + partnerships with gateways)
- LTV: ₹2,000 × 36 months = ₹72,000 (3-year retention)
- LTV:CAC ratio: 3.6x (healthy for SaaS)
- Payback: 10-15 months

**ARR Potential:**
- Year 1: 50 customers × ₹3,000/month × 6 months = ₹9 lakhs
- Year 2: 200 customers × ₹3,000/month × 12 months = ₹72 lakhs
- Year 3: 500 customers × ₹3,500/month × 12 months = ₹2.1 crores

---

## 🛠️ Technology Stack Recommendation

### Frontend
- React + TypeScript (for SaaS dashboard)
- Tailwind CSS (styling)
- React Query (data fetching)

### Backend
- Python FastAPI or Node.js (your preference)
- PostgreSQL (transaction data)
- Redis (caching, real-time updates)
- Kafka/RabbitMQ (message queue for async processing)

### Integrations
- PSP APIs (Razorpay, PayU, Cashfree connect)
- Bank APIs (NEFT, RTGS via third-party providers)
- Accounting APIs (Tally, Zoho, SAP)
- KYC APIs (Signzy, HyperVerge)

### ML/AI (Optional Phase)
- TensorFlow / PyTorch for cash-flow forecasting, churn prediction
- Spacy / HuggingFace for NLP (document extraction, text analysis)
- Scikit-learn for faster classical ML models

---

## 📋 Documentation Checklist for Your Platform

Use these docs to build:
- [ ] Product requirements (PRD)
- [ ] Feature specifications
- [ ] Customer education content
- [ ] Sales collateral (ROI calculator, case studies)
- [ ] Technical design documents
- [ ] Go-to-market strategy

---

## 🤝 Partnership Opportunities

**To accelerate growth, consider partnerships with:**

1. **Payment Gateways** (Razorpay, PayU, Cashfree)
   - White-label reconciliation feature in their dashboard
   - Revenue share or fixed fee model

2. **Accounting Software** (Tally, Zoho Books)
   - Integration as add-on
   - Cross-selling

3. **ERP/CRM systems** (SAP, Zoho CRM)
   - Embedded automation for their users

4. **KYC/Compliance vendors** (Signzy, HyperVerge)
   - Bundle KYC + payment reconciliation

5. **Broker platforms** (Zerodha, Angel Broking)
   - Custom settlement automation

---

## 📞 Key Contacts & Vendors to Reach Out To

### Payment Recon/Collections
- Gaviti (gaviti.com)
- Growfin (growfin.ai)
- Kapittx (kapittx.com)
- Cointab (cointab.com)

### Lending
- Roopya (roopya.co.in)
- Biz2X (biz2x.com)
- SynoFin (via Decentro)

### KYC/Compliance
- Signzy (signzy.com)
- HyperVerge (hyperverge.co)
- KYCPlus (kycplus.com)
- Flagright (flagright.com)

### FX/Tax
- AI Accountant (aiaccountant.com)
- Duco (du.co) - for crypto

---

## 💬 Last Word

**This is not a market analysis document. This is a battle plan.**

Each process doc shows:
1. **Where the money is** (ROI, impact)
2. **How to win** (automation opportunities)
3. **Who's winning now** (Indian vendors)
4. **How to beat them** (your unique angle)

Pick your top 3 processes, build great products for them, and own a ₹100Cr+ market in India.

**You've got the map. Time to execute.**

---

**Generated:** December 17, 2025  
**Status:** Ready for implementation  
**Next review:** Quarterly (market updates, new vendors, emerging opportunities)

---

## 📚 Full File List

1. **fintech_processes_index.md** - Master overview + navigation
2. **payment_ops_detailed.md** - Payment & transaction operations
3. **lending_ops_detailed.md** - Loan & credit operations
4. **compliance_ops_detailed.md** - Compliance & regulatory
5. **fintech_ops_detailed.md** - Trading, crypto, treasury
6. **customer_treasury_detailed.md** - Customer ops, treasury & liquidity
7. **strategic_processes_detailed.md** - Strategic fintech processes
8. **quickstart_guide.md** - This file

Total: 8 comprehensive markdown files  
Total pages: ~100 pages  
Total processes: 55  
Ready to download and share.

Good luck! 🚀
`,Sg=[{id:"files-readme",title:"Fintech Automation Suite",subtitle:"Overview of all 55 processes, ROI, TAM and roadmap",badge:"Start here",estTime:"10–15 min read",content:Ab},{id:"index",title:"Master Index: 55 Processes",subtitle:"Navigation by category, time savings, vendors and roadmap",badge:"Index",estTime:"15–20 min read",content:kb},{id:"payment-ops",title:"Payment Transaction Operations",subtitle:"Reconciliation, chargebacks, AR, monitoring, fraud and more",badge:"Payments",estTime:"20–25 min read",content:Cb},{id:"lending-ops",title:"Loan & Credit Operations",subtitle:"Loan processing, credit scoring, collections and default prediction",badge:"Lending",estTime:"20–25 min read",content:Tb},{id:"compliance-ops",title:"Compliance & Regulatory",subtitle:"KYC, AML, tax, sanctions, reporting and risk monitoring",badge:"Compliance",estTime:"20–25 min read",content:wb},{id:"fintech-ops",title:"Fintech-Specific Operations",subtitle:"Trading, crypto, treasury and complex operations automation",badge:"Trading/Crypto",estTime:"20–25 min read",content:Eb},{id:"customer-treasury",title:"Customer Ops & Treasury",subtitle:"Onboarding, churn, cash flow forecasting, liquidity and payouts",badge:"Customer & Treasury",estTime:"20–25 min read",content:Rb},{id:"strategic-processes",title:"Strategic Fintech Processes",subtitle:"Scenario analysis, stress testing, BI and revenue recognition",badge:"Strategy",estTime:"15–20 min read",content:Mb},{id:"quickstart",title:"Quick Start Roadmap",subtitle:"12‑month roadmap, unit economics, GTM and vendor contacts",badge:"Roadmap",estTime:"15–20 min read",content:Db}],zb=n=>Sg.find(r=>r.id===n),Ob=()=>K.jsxs("aside",{className:"sidebar",children:[K.jsxs("div",{className:"sidebar-header",children:[K.jsx("div",{className:"sidebar-title",children:"Fintech Automation Suite"}),K.jsx("div",{className:"sidebar-subtitle",children:"55 processes • 8 files • India‑focused"})]}),K.jsxs("nav",{className:"sidebar-nav",children:[K.jsx(bc,{to:"/",className:({isActive:n})=>"sidebar-link"+(n?" sidebar-link-active":""),children:"🧭 Overview dashboard"}),K.jsx("div",{className:"sidebar-section-label",children:"Documents"}),Sg.map(n=>K.jsxs(bc,{to:`/docs/${n.id}`,className:({isActive:r})=>"sidebar-doc-link"+(r?" sidebar-doc-link-active":""),children:[K.jsxs("div",{className:"sidebar-doc-title-row",children:[K.jsx("span",{children:n.title}),K.jsx("span",{className:"sidebar-doc-badge",children:n.badge})]}),K.jsx("div",{className:"sidebar-doc-subtitle",children:n.subtitle})]},n.id))]})]}),Lb=({children:n})=>K.jsxs("div",{className:"app-root",children:[K.jsx(Ob,{}),K.jsx("main",{className:"app-main",children:K.jsx("div",{className:"app-main-inner",children:n})})]}),_b=()=>K.jsxs("div",{className:"home",children:[K.jsxs("section",{children:[K.jsx("h1",{className:"home-title",children:"Fintech Automation Battle Plan"}),K.jsx("p",{className:"home-subtitle",children:"Explore 55 automation opportunities across payments, lending, compliance, trading, customer ops and strategic analytics. Turn this into a concrete 12‑month roadmap."})]}),K.jsxs("section",{className:"home-grid",children:[K.jsxs(Nn,{to:"/docs/files-readme",className:"home-card",children:[K.jsx("div",{className:"home-card-label home-card-label-green",children:"Start"}),K.jsx("div",{className:"home-card-title",children:"What you have"}),K.jsx("p",{className:"home-card-text",children:"Overview of all 8 files, 55 processes, ROI tables, TAM and how to navigate the suite."})]}),K.jsxs(Nn,{to:"/docs/index",className:"home-card",children:[K.jsx("div",{className:"home-card-label home-card-label-blue",children:"Map"}),K.jsx("div",{className:"home-card-title",children:"Master index"}),K.jsx("p",{className:"home-card-text",children:"Jump by category, time savings, India‑specific vendors and market opportunities."})]}),K.jsxs(Nn,{to:"/docs/quickstart",className:"home-card",children:[K.jsx("div",{className:"home-card-label home-card-label-amber",children:"Execute"}),K.jsx("div",{className:"home-card-title",children:"12‑month roadmap"}),K.jsx("p",{className:"home-card-text",children:"Step‑by‑step plan, unit economics, GTM strategy and vendor contacts."})]})]}),K.jsxs("section",{className:"home-bottom-grid",children:[K.jsxs("div",{className:"home-bottom-card",children:[K.jsx("h2",{className:"home-bottom-title",children:"Build by vertical"}),K.jsxs("ul",{className:"home-bottom-list",children:[K.jsxs("li",{children:["• D2C merchants →"," ",K.jsx(Nn,{to:"/docs/payment-ops",className:"home-link",children:"Payment transaction operations"})]}),K.jsxs("li",{children:["• Lenders NBFC →"," ",K.jsx(Nn,{to:"/docs/lending-ops",className:"home-link",children:"Loan & credit operations"})]}),K.jsxs("li",{children:["• Brokers & trading →"," ",K.jsx(Nn,{to:"/docs/fintech-ops",className:"home-link",children:"Fintech‑specific operations"})]}),K.jsxs("li",{children:["• Compliance/KYC product →"," ",K.jsx(Nn,{to:"/docs/compliance-ops",className:"home-link",children:"Compliance & regulatory"})]})]})]}),K.jsxs("div",{className:"home-bottom-card",children:[K.jsx("h2",{className:"home-bottom-title",children:"Immediate actions"}),K.jsxs("ol",{className:"home-bottom-list home-bottom-list-ol",children:[K.jsx("li",{children:"Pick your primary vertical."}),K.jsx("li",{children:"Deep‑read the 2–3 most relevant docs."}),K.jsx("li",{children:"Draft specs for your first automation process."}),K.jsx("li",{children:"Use vendor lists to line up discovery calls."})]})]})]})]});function Nb(n,r){const l={};return(n[n.length-1]===""?[...n,""]:n).join((l.padRight?" ":"")+","+(l.padLeft===!1?"":" ")).trim()}const Ib=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Bb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ub={};function gp(n,r){return(Ub.jsx?Bb:Ib).test(n)}const Hb=/[ \t\n\f\r]/g;function jb(n){return typeof n=="object"?n.type==="text"?yp(n.value):!1:yp(n)}function yp(n){return n.replace(Hb,"")===""}class jl{constructor(r,l,o){this.normal=l,this.property=r,o&&(this.space=o)}}jl.prototype.normal={};jl.prototype.property={};jl.prototype.space=void 0;function xg(n,r){const l={},o={};for(const s of n)Object.assign(l,s.property),Object.assign(o,s.normal);return new jl(l,o,r)}function Sc(n){return n.toLowerCase()}class Dt{constructor(r,l){this.attribute=l,this.property=r}}Dt.prototype.attribute="";Dt.prototype.booleanish=!1;Dt.prototype.boolean=!1;Dt.prototype.commaOrSpaceSeparated=!1;Dt.prototype.commaSeparated=!1;Dt.prototype.defined=!1;Dt.prototype.mustUseProperty=!1;Dt.prototype.number=!1;Dt.prototype.overloadedBoolean=!1;Dt.prototype.property="";Dt.prototype.spaceSeparated=!1;Dt.prototype.space=void 0;let qb=0;const be=La(),it=La(),xc=La(),Q=La(),Fe=La(),Ti=La(),Ht=La();function La(){return 2**++qb}const Ac=Object.freeze(Object.defineProperty({__proto__:null,boolean:be,booleanish:it,commaOrSpaceSeparated:Ht,commaSeparated:Ti,number:Q,overloadedBoolean:xc,spaceSeparated:Fe},Symbol.toStringTag,{value:"Module"})),ec=Object.keys(Ac);class Hc extends Dt{constructor(r,l,o,s){let c=-1;if(super(r,l),vp(this,"space",s),typeof o=="number")for(;++c<ec.length;){const f=ec[c];vp(this,ec[c],(o&Ac[f])===Ac[f])}}}Hc.prototype.defined=!0;function vp(n,r,l){l&&(n[r]=l)}function Di(n){const r={},l={};for(const[o,s]of Object.entries(n.properties)){const c=new Hc(o,n.transform(n.attributes||{},o),s,n.space);n.mustUseProperty&&n.mustUseProperty.includes(o)&&(c.mustUseProperty=!0),r[o]=c,l[Sc(o)]=o,l[Sc(c.attribute)]=o}return new jl(r,l,n.space)}const Ag=Di({properties:{ariaActiveDescendant:null,ariaAtomic:it,ariaAutoComplete:null,ariaBusy:it,ariaChecked:it,ariaColCount:Q,ariaColIndex:Q,ariaColSpan:Q,ariaControls:Fe,ariaCurrent:null,ariaDescribedBy:Fe,ariaDetails:null,ariaDisabled:it,ariaDropEffect:Fe,ariaErrorMessage:null,ariaExpanded:it,ariaFlowTo:Fe,ariaGrabbed:it,ariaHasPopup:null,ariaHidden:it,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Fe,ariaLevel:Q,ariaLive:null,ariaModal:it,ariaMultiLine:it,ariaMultiSelectable:it,ariaOrientation:null,ariaOwns:Fe,ariaPlaceholder:null,ariaPosInSet:Q,ariaPressed:it,ariaReadOnly:it,ariaRelevant:null,ariaRequired:it,ariaRoleDescription:Fe,ariaRowCount:Q,ariaRowIndex:Q,ariaRowSpan:Q,ariaSelected:it,ariaSetSize:Q,ariaSort:null,ariaValueMax:Q,ariaValueMin:Q,ariaValueNow:Q,ariaValueText:null,role:null},transform(n,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function kg(n,r){return r in n?n[r]:r}function Cg(n,r){return kg(n,r.toLowerCase())}const Yb=Di({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ti,acceptCharset:Fe,accessKey:Fe,action:null,allow:null,allowFullScreen:be,allowPaymentRequest:be,allowUserMedia:be,alt:null,as:null,async:be,autoCapitalize:null,autoComplete:Fe,autoFocus:be,autoPlay:be,blocking:Fe,capture:null,charSet:null,checked:be,cite:null,className:Fe,cols:Q,colSpan:null,content:null,contentEditable:it,controls:be,controlsList:Fe,coords:Q|Ti,crossOrigin:null,data:null,dateTime:null,decoding:null,default:be,defer:be,dir:null,dirName:null,disabled:be,download:xc,draggable:it,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:be,formTarget:null,headers:Fe,height:Q,hidden:xc,high:Q,href:null,hrefLang:null,htmlFor:Fe,httpEquiv:Fe,id:null,imageSizes:null,imageSrcSet:null,inert:be,inputMode:null,integrity:null,is:null,isMap:be,itemId:null,itemProp:Fe,itemRef:Fe,itemScope:be,itemType:Fe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:be,low:Q,manifest:null,max:null,maxLength:Q,media:null,method:null,min:null,minLength:Q,multiple:be,muted:be,name:null,nonce:null,noModule:be,noValidate:be,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:be,optimum:Q,pattern:null,ping:Fe,placeholder:null,playsInline:be,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:be,referrerPolicy:null,rel:Fe,required:be,reversed:be,rows:Q,rowSpan:Q,sandbox:Fe,scope:null,scoped:be,seamless:be,selected:be,shadowRootClonable:be,shadowRootDelegatesFocus:be,shadowRootMode:null,shape:null,size:Q,sizes:null,slot:null,span:Q,spellCheck:it,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Q,step:null,style:null,tabIndex:Q,target:null,title:null,translate:null,type:null,typeMustMatch:be,useMap:null,value:it,width:Q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Fe,axis:null,background:null,bgColor:null,border:Q,borderColor:null,bottomMargin:Q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:be,declare:be,event:null,face:null,frame:null,frameBorder:null,hSpace:Q,leftMargin:Q,link:null,longDesc:null,lowSrc:null,marginHeight:Q,marginWidth:Q,noResize:be,noHref:be,noShade:be,noWrap:be,object:null,profile:null,prompt:null,rev:null,rightMargin:Q,rules:null,scheme:null,scrolling:it,standby:null,summary:null,text:null,topMargin:Q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:be,disableRemotePlayback:be,prefix:null,property:null,results:Q,security:null,unselectable:null},space:"html",transform:Cg}),Gb=Di({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ht,accentHeight:Q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Q,amplitude:Q,arabicForm:null,ascent:Q,attributeName:null,attributeType:null,azimuth:Q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Q,by:null,calcMode:null,capHeight:Q,className:Fe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Q,diffuseConstant:Q,direction:null,display:null,dur:null,divisor:Q,dominantBaseline:null,download:be,dx:null,dy:null,edgeMode:null,editable:null,elevation:Q,enableBackground:null,end:null,event:null,exponent:Q,externalResourcesRequired:null,fill:null,fillOpacity:Q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ti,g2:Ti,glyphName:Ti,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Q,horizOriginX:Q,horizOriginY:Q,id:null,ideographic:Q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Q,k:Q,k1:Q,k2:Q,k3:Q,k4:Q,kernelMatrix:Ht,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Q,overlineThickness:Q,paintOrder:null,panose1:null,path:null,pathLength:Q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Fe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Q,pointsAtY:Q,pointsAtZ:Q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ht,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ht,rev:Ht,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ht,requiredFeatures:Ht,requiredFonts:Ht,requiredFormats:Ht,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Q,specularExponent:Q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Q,strikethroughThickness:Q,string:null,stroke:null,strokeDashArray:Ht,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Q,strokeOpacity:Q,strokeWidth:null,style:null,surfaceScale:Q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ht,tabIndex:Q,tableValues:null,target:null,targetX:Q,targetY:Q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ht,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Q,underlineThickness:Q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Q,values:null,vAlphabetic:Q,vMathematical:Q,vectorEffect:null,vHanging:Q,vIdeographic:Q,version:null,vertAdvY:Q,vertOriginX:Q,vertOriginY:Q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:kg}),Tg=Di({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,r){return"xlink:"+r.slice(5).toLowerCase()}}),wg=Di({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Cg}),Eg=Di({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,r){return"xml:"+r.slice(3).toLowerCase()}}),Fb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Vb=/[A-Z]/g,bp=/-[a-z]/g,Pb=/^data[-\w.:]+$/i;function Kb(n,r){const l=Sc(r);let o=r,s=Dt;if(l in n.normal)return n.property[n.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&Pb.test(r)){if(r.charAt(4)==="-"){const c=r.slice(5).replace(bp,Qb);o="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=r.slice(4);if(!bp.test(c)){let f=c.replace(Vb,Xb);f.charAt(0)!=="-"&&(f="-"+f),r="data"+f}}s=Hc}return new s(o,r)}function Xb(n){return"-"+n.toLowerCase()}function Qb(n){return n.charAt(1).toUpperCase()}const Zb=xg([Ag,Yb,Tg,wg,Eg],"html"),jc=xg([Ag,Gb,Tg,wg,Eg],"svg");function Jb(n){return n.join(" ").trim()}var Ai={},tc,Sp;function Wb(){if(Sp)return tc;Sp=1;var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,l=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,h=/^\s+|\s+$/g,p=`
`,m="/",v="*",g="",x="comment",b="declaration";function T(O,R){if(typeof O!="string")throw new TypeError("First argument must be a string");if(!O)return[];R=R||{};var H=1,B=1;function ne(le){var Z=le.match(r);Z&&(H+=Z.length);var N=le.lastIndexOf(p);B=~N?le.length-N:B+le.length}function ae(){var le={line:H,column:B};return function(Z){return Z.position=new j(le),me(),Z}}function j(le){this.start=le,this.end={line:H,column:B},this.source=R.source}j.prototype.content=O;function W(le){var Z=new Error(R.source+":"+H+":"+B+": "+le);if(Z.reason=le,Z.filename=R.source,Z.line=H,Z.column=B,Z.source=O,!R.silent)throw Z}function de(le){var Z=le.exec(O);if(Z){var N=Z[0];return ne(N),O=O.slice(N.length),Z}}function me(){de(l)}function I(le){var Z;for(le=le||[];Z=$();)Z!==!1&&le.push(Z);return le}function $(){var le=ae();if(!(m!=O.charAt(0)||v!=O.charAt(1))){for(var Z=2;g!=O.charAt(Z)&&(v!=O.charAt(Z)||m!=O.charAt(Z+1));)++Z;if(Z+=2,g===O.charAt(Z-1))return W("End of comment missing");var N=O.slice(2,Z-2);return B+=2,ne(N),O=O.slice(Z),B+=2,le({type:x,comment:N})}}function ee(){var le=ae(),Z=de(o);if(Z){if($(),!de(s))return W("property missing ':'");var N=de(c),X=le({type:b,property:L(Z[0].replace(n,g)),value:N?L(N[0].replace(n,g)):g});return de(f),X}}function xe(){var le=[];I(le);for(var Z;Z=ee();)Z!==!1&&(le.push(Z),I(le));return le}return me(),xe()}function L(O){return O?O.replace(h,g):g}return tc=T,tc}var xp;function $b(){if(xp)return Ai;xp=1;var n=Ai&&Ai.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Ai,"__esModule",{value:!0}),Ai.default=l;const r=n(Wb());function l(o,s){let c=null;if(!o||typeof o!="string")return c;const f=(0,r.default)(o),h=typeof s=="function";return f.forEach(p=>{if(p.type!=="declaration")return;const{property:m,value:v}=p;h?s(m,v,p):v&&(c=c||{},c[m]=v)}),c}return Ai}var Rl={},Ap;function eS(){if(Ap)return Rl;Ap=1,Object.defineProperty(Rl,"__esModule",{value:!0}),Rl.camelCase=void 0;var n=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,l=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,c=function(m){return!m||l.test(m)||n.test(m)},f=function(m,v){return v.toUpperCase()},h=function(m,v){return"".concat(v,"-")},p=function(m,v){return v===void 0&&(v={}),c(m)?m:(m=m.toLowerCase(),v.reactCompat?m=m.replace(s,h):m=m.replace(o,h),m.replace(r,f))};return Rl.camelCase=p,Rl}var Ml,kp;function tS(){if(kp)return Ml;kp=1;var n=Ml&&Ml.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},r=n($b()),l=eS();function o(s,c){var f={};return!s||typeof s!="string"||(0,r.default)(s,function(h,p){h&&p&&(f[(0,l.camelCase)(h,c)]=p)}),f}return o.default=o,Ml=o,Ml}var nS=tS();const aS=ko(nS),Rg=Mg("end"),qc=Mg("start");function Mg(n){return r;function r(l){const o=l&&l.position&&l.position[n]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function iS(n){const r=qc(n),l=Rg(n);if(r&&l)return{start:r,end:l}}function Ol(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?Cp(n.position):"start"in n||"end"in n?Cp(n):"line"in n||"column"in n?kc(n):""}function kc(n){return Tp(n&&n.line)+":"+Tp(n&&n.column)}function Cp(n){return kc(n&&n.start)+"-"+kc(n&&n.end)}function Tp(n){return n&&typeof n=="number"?n:1}class gt extends Error{constructor(r,l,o){super(),typeof l=="string"&&(o=l,l=void 0);let s="",c={},f=!1;if(l&&("line"in l&&"column"in l?c={place:l}:"start"in l&&"end"in l?c={place:l}:"type"in l?c={ancestors:[l],place:l.position}:c={...l}),typeof r=="string"?s=r:!c.cause&&r&&(f=!0,s=r.message,c.cause=r),!c.ruleId&&!c.source&&typeof o=="string"){const p=o.indexOf(":");p===-1?c.ruleId=o:(c.source=o.slice(0,p),c.ruleId=o.slice(p+1))}if(!c.place&&c.ancestors&&c.ancestors){const p=c.ancestors[c.ancestors.length-1];p&&(c.place=p.position)}const h=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=h?h.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=h?h.line:void 0,this.name=Ol(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=f&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}gt.prototype.file="";gt.prototype.name="";gt.prototype.reason="";gt.prototype.message="";gt.prototype.stack="";gt.prototype.column=void 0;gt.prototype.line=void 0;gt.prototype.ancestors=void 0;gt.prototype.cause=void 0;gt.prototype.fatal=void 0;gt.prototype.place=void 0;gt.prototype.ruleId=void 0;gt.prototype.source=void 0;const Yc={}.hasOwnProperty,lS=new Map,rS=/[A-Z]/g,oS=new Set(["table","tbody","thead","tfoot","tr"]),uS=new Set(["td","th"]),Dg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function sS(n,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const l=r.filePath||void 0;let o;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=yS(l,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=gS(l,r.jsx,r.jsxs)}const s={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:o,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:l,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?jc:Zb,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},c=zg(s,n,void 0);return c&&typeof c!="string"?c:s.create(n,s.Fragment,{children:c||void 0},void 0)}function zg(n,r,l){if(r.type==="element")return cS(n,r,l);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return fS(n,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return mS(n,r,l);if(r.type==="mdxjsEsm")return dS(n,r);if(r.type==="root")return hS(n,r,l);if(r.type==="text")return pS(n,r)}function cS(n,r,l){const o=n.schema;let s=o;r.tagName.toLowerCase()==="svg"&&o.space==="html"&&(s=jc,n.schema=s),n.ancestors.push(r);const c=Lg(n,r.tagName,!1),f=vS(n,r);let h=Fc(n,r);return oS.has(r.tagName)&&(h=h.filter(function(p){return typeof p=="string"?!jb(p):!0})),Og(n,f,c,r),Gc(f,h),n.ancestors.pop(),n.schema=o,n.create(r,c,f,l)}function fS(n,r){if(r.data&&r.data.estree&&n.evaluater){const o=r.data.estree.body[0];return o.type,n.evaluater.evaluateExpression(o.expression)}Il(n,r.position)}function dS(n,r){if(r.data&&r.data.estree&&n.evaluater)return n.evaluater.evaluateProgram(r.data.estree);Il(n,r.position)}function mS(n,r,l){const o=n.schema;let s=o;r.name==="svg"&&o.space==="html"&&(s=jc,n.schema=s),n.ancestors.push(r);const c=r.name===null?n.Fragment:Lg(n,r.name,!0),f=bS(n,r),h=Fc(n,r);return Og(n,f,c,r),Gc(f,h),n.ancestors.pop(),n.schema=o,n.create(r,c,f,l)}function hS(n,r,l){const o={};return Gc(o,Fc(n,r)),n.create(r,n.Fragment,o,l)}function pS(n,r){return r.value}function Og(n,r,l,o){typeof l!="string"&&l!==n.Fragment&&n.passNode&&(r.node=o)}function Gc(n,r){if(r.length>0){const l=r.length>1?r:r[0];l&&(n.children=l)}}function gS(n,r,l){return o;function o(s,c,f,h){const m=Array.isArray(f.children)?l:r;return h?m(c,f,h):m(c,f)}}function yS(n,r){return l;function l(o,s,c,f){const h=Array.isArray(c.children),p=qc(o);return r(s,c,f,h,{columnNumber:p?p.column-1:void 0,fileName:n,lineNumber:p?p.line:void 0},void 0)}}function vS(n,r){const l={};let o,s;for(s in r.properties)if(s!=="children"&&Yc.call(r.properties,s)){const c=SS(n,s,r.properties[s]);if(c){const[f,h]=c;n.tableCellAlignToStyle&&f==="align"&&typeof h=="string"&&uS.has(r.tagName)?o=h:l[f]=h}}if(o){const c=l.style||(l.style={});c[n.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return l}function bS(n,r){const l={};for(const o of r.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&n.evaluater){const c=o.data.estree.body[0];c.type;const f=c.expression;f.type;const h=f.properties[0];h.type,Object.assign(l,n.evaluater.evaluateExpression(h.argument))}else Il(n,r.position);else{const s=o.name;let c;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&n.evaluater){const h=o.value.data.estree.body[0];h.type,c=n.evaluater.evaluateExpression(h.expression)}else Il(n,r.position);else c=o.value===null?!0:o.value;l[s]=c}return l}function Fc(n,r){const l=[];let o=-1;const s=n.passKeys?new Map:lS;for(;++o<r.children.length;){const c=r.children[o];let f;if(n.passKeys){const p=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(p){const m=s.get(p)||0;f=p+"-"+m,s.set(p,m+1)}}const h=zg(n,c,f);h!==void 0&&l.push(h)}return l}function SS(n,r,l){const o=Kb(n.schema,r);if(!(l==null||typeof l=="number"&&Number.isNaN(l))){if(Array.isArray(l)&&(l=o.commaSeparated?Nb(l):Jb(l)),o.property==="style"){let s=typeof l=="object"?l:xS(n,String(l));return n.stylePropertyNameCase==="css"&&(s=AS(s)),["style",s]}return[n.elementAttributeNameCase==="react"&&o.space?Fb[o.property]||o.property:o.attribute,l]}}function xS(n,r){try{return aS(r,{reactCompat:!0})}catch(l){if(n.ignoreInvalidStyle)return{};const o=l,s=new gt("Cannot parse `style` attribute",{ancestors:n.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=n.filePath||void 0,s.url=Dg+"#cannot-parse-style-attribute",s}}function Lg(n,r,l){let o;if(!l)o={type:"Literal",value:r};else if(r.includes(".")){const s=r.split(".");let c=-1,f;for(;++c<s.length;){const h=gp(s[c])?{type:"Identifier",name:s[c]}:{type:"Literal",value:s[c]};f=f?{type:"MemberExpression",object:f,property:h,computed:!!(c&&h.type==="Literal"),optional:!1}:h}o=f}else o=gp(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(o.type==="Literal"){const s=o.value;return Yc.call(n.components,s)?n.components[s]:s}if(n.evaluater)return n.evaluater.evaluateExpression(o);Il(n)}function Il(n,r){const l=new gt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:n.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw l.file=n.filePath||void 0,l.url=Dg+"#cannot-handle-mdx-estrees-without-createevaluater",l}function AS(n){const r={};let l;for(l in n)Yc.call(n,l)&&(r[kS(l)]=n[l]);return r}function kS(n){let r=n.replace(rS,CS);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function CS(n){return"-"+n.toLowerCase()}const nc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},TS={};function Vc(n,r){const l=TS,o=typeof l.includeImageAlt=="boolean"?l.includeImageAlt:!0,s=typeof l.includeHtml=="boolean"?l.includeHtml:!0;return _g(n,o,s)}function _g(n,r,l){if(wS(n)){if("value"in n)return n.type==="html"&&!l?"":n.value;if(r&&"alt"in n&&n.alt)return n.alt;if("children"in n)return wp(n.children,r,l)}return Array.isArray(n)?wp(n,r,l):""}function wp(n,r,l){const o=[];let s=-1;for(;++s<n.length;)o[s]=_g(n[s],r,l);return o.join("")}function wS(n){return!!(n&&typeof n=="object")}const Ep=document.createElement("i");function Pc(n){const r="&"+n+";";Ep.innerHTML=r;const l=Ep.textContent;return l.charCodeAt(l.length-1)===59&&n!=="semi"||l===r?!1:l}function jt(n,r,l,o){const s=n.length;let c=0,f;if(r<0?r=-r>s?0:s+r:r=r>s?s:r,l=l>0?l:0,o.length<1e4)f=Array.from(o),f.unshift(r,l),n.splice(...f);else for(l&&n.splice(r,l);c<o.length;)f=o.slice(c,c+1e4),f.unshift(r,0),n.splice(...f),c+=1e4,r+=1e4}function Wt(n,r){return n.length>0?(jt(n,n.length,0,r),n):r}const Rp={}.hasOwnProperty;function Ng(n){const r={};let l=-1;for(;++l<n.length;)ES(r,n[l]);return r}function ES(n,r){let l;for(l in r){const s=(Rp.call(n,l)?n[l]:void 0)||(n[l]={}),c=r[l];let f;if(c)for(f in c){Rp.call(s,f)||(s[f]=[]);const h=c[f];RS(s[f],Array.isArray(h)?h:h?[h]:[])}}}function RS(n,r){let l=-1;const o=[];for(;++l<r.length;)(r[l].add==="after"?n:o).push(r[l]);jt(n,0,0,o)}function Ig(n,r){const l=Number.parseInt(n,r);return l<9||l===11||l>13&&l<32||l>126&&l<160||l>55295&&l<57344||l>64975&&l<65008||(l&65535)===65535||(l&65535)===65534||l>1114111?"�":String.fromCodePoint(l)}function rn(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const St=da(/[A-Za-z]/),pt=da(/[\dA-Za-z]/),MS=da(/[#-'*+\--9=?A-Z^-~]/);function bo(n){return n!==null&&(n<32||n===127)}const Cc=da(/\d/),DS=da(/[\dA-Fa-f]/),zS=da(/[!-/:-@[-`{-~]/);function ce(n){return n!==null&&n<-2}function Ge(n){return n!==null&&(n<0||n===32)}function Te(n){return n===-2||n===-1||n===32}const wo=da(new RegExp("\\p{P}|\\p{S}","u")),Oa=da(/\s/);function da(n){return r;function r(l){return l!==null&&l>-1&&n.test(String.fromCharCode(l))}}function zi(n){const r=[];let l=-1,o=0,s=0;for(;++l<n.length;){const c=n.charCodeAt(l);let f="";if(c===37&&pt(n.charCodeAt(l+1))&&pt(n.charCodeAt(l+2)))s=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(f=String.fromCharCode(c));else if(c>55295&&c<57344){const h=n.charCodeAt(l+1);c<56320&&h>56319&&h<57344?(f=String.fromCharCode(c,h),s=1):f="�"}else f=String.fromCharCode(c);f&&(r.push(n.slice(o,l),encodeURIComponent(f)),o=l+s+1,f=""),s&&(l+=s,s=0)}return r.join("")+n.slice(o)}function De(n,r,l,o){const s=o?o-1:Number.POSITIVE_INFINITY;let c=0;return f;function f(p){return Te(p)?(n.enter(l),h(p)):r(p)}function h(p){return Te(p)&&c++<s?(n.consume(p),h):(n.exit(l),r(p))}}const OS={tokenize:LS};function LS(n){const r=n.attempt(this.parser.constructs.contentInitial,o,s);let l;return r;function o(h){if(h===null){n.consume(h);return}return n.enter("lineEnding"),n.consume(h),n.exit("lineEnding"),De(n,r,"linePrefix")}function s(h){return n.enter("paragraph"),c(h)}function c(h){const p=n.enter("chunkText",{contentType:"text",previous:l});return l&&(l.next=p),l=p,f(h)}function f(h){if(h===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(h);return}return ce(h)?(n.consume(h),n.exit("chunkText"),c):(n.consume(h),f)}}const _S={tokenize:NS},Mp={tokenize:IS};function NS(n){const r=this,l=[];let o=0,s,c,f;return h;function h(B){if(o<l.length){const ne=l[o];return r.containerState=ne[1],n.attempt(ne[0].continuation,p,m)(B)}return m(B)}function p(B){if(o++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,s&&H();const ne=r.events.length;let ae=ne,j;for(;ae--;)if(r.events[ae][0]==="exit"&&r.events[ae][1].type==="chunkFlow"){j=r.events[ae][1].end;break}R(o);let W=ne;for(;W<r.events.length;)r.events[W][1].end={...j},W++;return jt(r.events,ae+1,0,r.events.slice(ne)),r.events.length=W,m(B)}return h(B)}function m(B){if(o===l.length){if(!s)return x(B);if(s.currentConstruct&&s.currentConstruct.concrete)return T(B);r.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return r.containerState={},n.check(Mp,v,g)(B)}function v(B){return s&&H(),R(o),x(B)}function g(B){return r.parser.lazy[r.now().line]=o!==l.length,f=r.now().offset,T(B)}function x(B){return r.containerState={},n.attempt(Mp,b,T)(B)}function b(B){return o++,l.push([r.currentConstruct,r.containerState]),x(B)}function T(B){if(B===null){s&&H(),R(0),n.consume(B);return}return s=s||r.parser.flow(r.now()),n.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:c}),L(B)}function L(B){if(B===null){O(n.exit("chunkFlow"),!0),R(0),n.consume(B);return}return ce(B)?(n.consume(B),O(n.exit("chunkFlow")),o=0,r.interrupt=void 0,h):(n.consume(B),L)}function O(B,ne){const ae=r.sliceStream(B);if(ne&&ae.push(null),B.previous=c,c&&(c.next=B),c=B,s.defineSkip(B.start),s.write(ae),r.parser.lazy[B.start.line]){let j=s.events.length;for(;j--;)if(s.events[j][1].start.offset<f&&(!s.events[j][1].end||s.events[j][1].end.offset>f))return;const W=r.events.length;let de=W,me,I;for(;de--;)if(r.events[de][0]==="exit"&&r.events[de][1].type==="chunkFlow"){if(me){I=r.events[de][1].end;break}me=!0}for(R(o),j=W;j<r.events.length;)r.events[j][1].end={...I},j++;jt(r.events,de+1,0,r.events.slice(W)),r.events.length=j}}function R(B){let ne=l.length;for(;ne-- >B;){const ae=l[ne];r.containerState=ae[1],ae[0].exit.call(r,n)}l.length=B}function H(){s.write([null]),c=void 0,s=void 0,r.containerState._closeFlow=void 0}}function IS(n,r,l){return De(n,n.attempt(this.parser.constructs.document,r,l),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function wi(n){if(n===null||Ge(n)||Oa(n))return 1;if(wo(n))return 2}function Eo(n,r,l){const o=[];let s=-1;for(;++s<n.length;){const c=n[s].resolveAll;c&&!o.includes(c)&&(r=c(r,l),o.push(c))}return r}const Tc={name:"attention",resolveAll:BS,tokenize:US};function BS(n,r){let l=-1,o,s,c,f,h,p,m,v;for(;++l<n.length;)if(n[l][0]==="enter"&&n[l][1].type==="attentionSequence"&&n[l][1]._close){for(o=l;o--;)if(n[o][0]==="exit"&&n[o][1].type==="attentionSequence"&&n[o][1]._open&&r.sliceSerialize(n[o][1]).charCodeAt(0)===r.sliceSerialize(n[l][1]).charCodeAt(0)){if((n[o][1]._close||n[l][1]._open)&&(n[l][1].end.offset-n[l][1].start.offset)%3&&!((n[o][1].end.offset-n[o][1].start.offset+n[l][1].end.offset-n[l][1].start.offset)%3))continue;p=n[o][1].end.offset-n[o][1].start.offset>1&&n[l][1].end.offset-n[l][1].start.offset>1?2:1;const g={...n[o][1].end},x={...n[l][1].start};Dp(g,-p),Dp(x,p),f={type:p>1?"strongSequence":"emphasisSequence",start:g,end:{...n[o][1].end}},h={type:p>1?"strongSequence":"emphasisSequence",start:{...n[l][1].start},end:x},c={type:p>1?"strongText":"emphasisText",start:{...n[o][1].end},end:{...n[l][1].start}},s={type:p>1?"strong":"emphasis",start:{...f.start},end:{...h.end}},n[o][1].end={...f.start},n[l][1].start={...h.end},m=[],n[o][1].end.offset-n[o][1].start.offset&&(m=Wt(m,[["enter",n[o][1],r],["exit",n[o][1],r]])),m=Wt(m,[["enter",s,r],["enter",f,r],["exit",f,r],["enter",c,r]]),m=Wt(m,Eo(r.parser.constructs.insideSpan.null,n.slice(o+1,l),r)),m=Wt(m,[["exit",c,r],["enter",h,r],["exit",h,r],["exit",s,r]]),n[l][1].end.offset-n[l][1].start.offset?(v=2,m=Wt(m,[["enter",n[l][1],r],["exit",n[l][1],r]])):v=0,jt(n,o-1,l-o+3,m),l=o+m.length-v-2;break}}for(l=-1;++l<n.length;)n[l][1].type==="attentionSequence"&&(n[l][1].type="data");return n}function US(n,r){const l=this.parser.constructs.attentionMarkers.null,o=this.previous,s=wi(o);let c;return f;function f(p){return c=p,n.enter("attentionSequence"),h(p)}function h(p){if(p===c)return n.consume(p),h;const m=n.exit("attentionSequence"),v=wi(p),g=!v||v===2&&s||l.includes(p),x=!s||s===2&&v||l.includes(o);return m._open=!!(c===42?g:g&&(s||!x)),m._close=!!(c===42?x:x&&(v||!g)),r(p)}}function Dp(n,r){n.column+=r,n.offset+=r,n._bufferIndex+=r}const HS={name:"autolink",tokenize:jS};function jS(n,r,l){let o=0;return s;function s(b){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(b),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),c}function c(b){return St(b)?(n.consume(b),f):b===64?l(b):m(b)}function f(b){return b===43||b===45||b===46||pt(b)?(o=1,h(b)):m(b)}function h(b){return b===58?(n.consume(b),o=0,p):(b===43||b===45||b===46||pt(b))&&o++<32?(n.consume(b),h):(o=0,m(b))}function p(b){return b===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(b),n.exit("autolinkMarker"),n.exit("autolink"),r):b===null||b===32||b===60||bo(b)?l(b):(n.consume(b),p)}function m(b){return b===64?(n.consume(b),v):MS(b)?(n.consume(b),m):l(b)}function v(b){return pt(b)?g(b):l(b)}function g(b){return b===46?(n.consume(b),o=0,v):b===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(b),n.exit("autolinkMarker"),n.exit("autolink"),r):x(b)}function x(b){if((b===45||pt(b))&&o++<63){const T=b===45?x:g;return n.consume(b),T}return l(b)}}const ql={partial:!0,tokenize:qS};function qS(n,r,l){return o;function o(c){return Te(c)?De(n,s,"linePrefix")(c):s(c)}function s(c){return c===null||ce(c)?r(c):l(c)}}const Bg={continuation:{tokenize:GS},exit:FS,name:"blockQuote",tokenize:YS};function YS(n,r,l){const o=this;return s;function s(f){if(f===62){const h=o.containerState;return h.open||(n.enter("blockQuote",{_container:!0}),h.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(f),n.exit("blockQuoteMarker"),c}return l(f)}function c(f){return Te(f)?(n.enter("blockQuotePrefixWhitespace"),n.consume(f),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),r):(n.exit("blockQuotePrefix"),r(f))}}function GS(n,r,l){const o=this;return s;function s(f){return Te(f)?De(n,c,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):c(f)}function c(f){return n.attempt(Bg,r,l)(f)}}function FS(n){n.exit("blockQuote")}const Ug={name:"characterEscape",tokenize:VS};function VS(n,r,l){return o;function o(c){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(c),n.exit("escapeMarker"),s}function s(c){return zS(c)?(n.enter("characterEscapeValue"),n.consume(c),n.exit("characterEscapeValue"),n.exit("characterEscape"),r):l(c)}}const Hg={name:"characterReference",tokenize:PS};function PS(n,r,l){const o=this;let s=0,c,f;return h;function h(g){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(g),n.exit("characterReferenceMarker"),p}function p(g){return g===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(g),n.exit("characterReferenceMarkerNumeric"),m):(n.enter("characterReferenceValue"),c=31,f=pt,v(g))}function m(g){return g===88||g===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(g),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),c=6,f=DS,v):(n.enter("characterReferenceValue"),c=7,f=Cc,v(g))}function v(g){if(g===59&&s){const x=n.exit("characterReferenceValue");return f===pt&&!Pc(o.sliceSerialize(x))?l(g):(n.enter("characterReferenceMarker"),n.consume(g),n.exit("characterReferenceMarker"),n.exit("characterReference"),r)}return f(g)&&s++<c?(n.consume(g),v):l(g)}}const zp={partial:!0,tokenize:XS},Op={concrete:!0,name:"codeFenced",tokenize:KS};function KS(n,r,l){const o=this,s={partial:!0,tokenize:ae};let c=0,f=0,h;return p;function p(j){return m(j)}function m(j){const W=o.events[o.events.length-1];return c=W&&W[1].type==="linePrefix"?W[2].sliceSerialize(W[1],!0).length:0,h=j,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),v(j)}function v(j){return j===h?(f++,n.consume(j),v):f<3?l(j):(n.exit("codeFencedFenceSequence"),Te(j)?De(n,g,"whitespace")(j):g(j))}function g(j){return j===null||ce(j)?(n.exit("codeFencedFence"),o.interrupt?r(j):n.check(zp,L,ne)(j)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),x(j))}function x(j){return j===null||ce(j)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),g(j)):Te(j)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),De(n,b,"whitespace")(j)):j===96&&j===h?l(j):(n.consume(j),x)}function b(j){return j===null||ce(j)?g(j):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),T(j))}function T(j){return j===null||ce(j)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),g(j)):j===96&&j===h?l(j):(n.consume(j),T)}function L(j){return n.attempt(s,ne,O)(j)}function O(j){return n.enter("lineEnding"),n.consume(j),n.exit("lineEnding"),R}function R(j){return c>0&&Te(j)?De(n,H,"linePrefix",c+1)(j):H(j)}function H(j){return j===null||ce(j)?n.check(zp,L,ne)(j):(n.enter("codeFlowValue"),B(j))}function B(j){return j===null||ce(j)?(n.exit("codeFlowValue"),H(j)):(n.consume(j),B)}function ne(j){return n.exit("codeFenced"),r(j)}function ae(j,W,de){let me=0;return I;function I(Z){return j.enter("lineEnding"),j.consume(Z),j.exit("lineEnding"),$}function $(Z){return j.enter("codeFencedFence"),Te(Z)?De(j,ee,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Z):ee(Z)}function ee(Z){return Z===h?(j.enter("codeFencedFenceSequence"),xe(Z)):de(Z)}function xe(Z){return Z===h?(me++,j.consume(Z),xe):me>=f?(j.exit("codeFencedFenceSequence"),Te(Z)?De(j,le,"whitespace")(Z):le(Z)):de(Z)}function le(Z){return Z===null||ce(Z)?(j.exit("codeFencedFence"),W(Z)):de(Z)}}}function XS(n,r,l){const o=this;return s;function s(f){return f===null?l(f):(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),c)}function c(f){return o.parser.lazy[o.now().line]?l(f):r(f)}}const ac={name:"codeIndented",tokenize:ZS},QS={partial:!0,tokenize:JS};function ZS(n,r,l){const o=this;return s;function s(m){return n.enter("codeIndented"),De(n,c,"linePrefix",5)(m)}function c(m){const v=o.events[o.events.length-1];return v&&v[1].type==="linePrefix"&&v[2].sliceSerialize(v[1],!0).length>=4?f(m):l(m)}function f(m){return m===null?p(m):ce(m)?n.attempt(QS,f,p)(m):(n.enter("codeFlowValue"),h(m))}function h(m){return m===null||ce(m)?(n.exit("codeFlowValue"),f(m)):(n.consume(m),h)}function p(m){return n.exit("codeIndented"),r(m)}}function JS(n,r,l){const o=this;return s;function s(f){return o.parser.lazy[o.now().line]?l(f):ce(f)?(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),s):De(n,c,"linePrefix",5)(f)}function c(f){const h=o.events[o.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?r(f):ce(f)?s(f):l(f)}}const WS={name:"codeText",previous:ex,resolve:$S,tokenize:tx};function $S(n){let r=n.length-4,l=3,o,s;if((n[l][1].type==="lineEnding"||n[l][1].type==="space")&&(n[r][1].type==="lineEnding"||n[r][1].type==="space")){for(o=l;++o<r;)if(n[o][1].type==="codeTextData"){n[l][1].type="codeTextPadding",n[r][1].type="codeTextPadding",l+=2,r-=2;break}}for(o=l-1,r++;++o<=r;)s===void 0?o!==r&&n[o][1].type!=="lineEnding"&&(s=o):(o===r||n[o][1].type==="lineEnding")&&(n[s][1].type="codeTextData",o!==s+2&&(n[s][1].end=n[o-1][1].end,n.splice(s+2,o-s-2),r-=o-s-2,o=s+2),s=void 0);return n}function ex(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function tx(n,r,l){let o=0,s,c;return f;function f(g){return n.enter("codeText"),n.enter("codeTextSequence"),h(g)}function h(g){return g===96?(n.consume(g),o++,h):(n.exit("codeTextSequence"),p(g))}function p(g){return g===null?l(g):g===32?(n.enter("space"),n.consume(g),n.exit("space"),p):g===96?(c=n.enter("codeTextSequence"),s=0,v(g)):ce(g)?(n.enter("lineEnding"),n.consume(g),n.exit("lineEnding"),p):(n.enter("codeTextData"),m(g))}function m(g){return g===null||g===32||g===96||ce(g)?(n.exit("codeTextData"),p(g)):(n.consume(g),m)}function v(g){return g===96?(n.consume(g),s++,v):s===o?(n.exit("codeTextSequence"),n.exit("codeText"),r(g)):(c.type="codeTextData",m(g))}}class nx{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,l){const o=l??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(r,o):r>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(r,l,o){const s=l||0;this.setCursor(Math.trunc(r));const c=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return o&&Dl(this.left,o),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),Dl(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),Dl(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const l=this.left.splice(r,Number.POSITIVE_INFINITY);Dl(this.right,l.reverse())}else{const l=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);Dl(this.left,l.reverse())}}}function Dl(n,r){let l=0;if(r.length<1e4)n.push(...r);else for(;l<r.length;)n.push(...r.slice(l,l+1e4)),l+=1e4}function jg(n){const r={};let l=-1,o,s,c,f,h,p,m;const v=new nx(n);for(;++l<v.length;){for(;l in r;)l=r[l];if(o=v.get(l),l&&o[1].type==="chunkFlow"&&v.get(l-1)[1].type==="listItemPrefix"&&(p=o[1]._tokenizer.events,c=0,c<p.length&&p[c][1].type==="lineEndingBlank"&&(c+=2),c<p.length&&p[c][1].type==="content"))for(;++c<p.length&&p[c][1].type!=="content";)p[c][1].type==="chunkText"&&(p[c][1]._isInFirstContentOfListItem=!0,c++);if(o[0]==="enter")o[1].contentType&&(Object.assign(r,ax(v,l)),l=r[l],m=!0);else if(o[1]._container){for(c=l,s=void 0;c--;)if(f=v.get(c),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(s&&(v.get(s)[1].type="lineEndingBlank"),f[1].type="lineEnding",s=c);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;s&&(o[1].end={...v.get(s)[1].start},h=v.slice(s,l),h.unshift(o),v.splice(s,l-s+1,h))}}return jt(n,0,Number.POSITIVE_INFINITY,v.slice(0)),!m}function ax(n,r){const l=n.get(r)[1],o=n.get(r)[2];let s=r-1;const c=[];let f=l._tokenizer;f||(f=o.parser[l.contentType](l.start),l._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const h=f.events,p=[],m={};let v,g,x=-1,b=l,T=0,L=0;const O=[L];for(;b;){for(;n.get(++s)[1]!==b;);c.push(s),b._tokenizer||(v=o.sliceStream(b),b.next||v.push(null),g&&f.defineSkip(b.start),b._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(v),b._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),g=b,b=b.next}for(b=l;++x<h.length;)h[x][0]==="exit"&&h[x-1][0]==="enter"&&h[x][1].type===h[x-1][1].type&&h[x][1].start.line!==h[x][1].end.line&&(L=x+1,O.push(L),b._tokenizer=void 0,b.previous=void 0,b=b.next);for(f.events=[],b?(b._tokenizer=void 0,b.previous=void 0):O.pop(),x=O.length;x--;){const R=h.slice(O[x],O[x+1]),H=c.pop();p.push([H,H+R.length-1]),n.splice(H,2,R)}for(p.reverse(),x=-1;++x<p.length;)m[T+p[x][0]]=T+p[x][1],T+=p[x][1]-p[x][0]-1;return m}const ix={resolve:rx,tokenize:ox},lx={partial:!0,tokenize:ux};function rx(n){return jg(n),n}function ox(n,r){let l;return o;function o(h){return n.enter("content"),l=n.enter("chunkContent",{contentType:"content"}),s(h)}function s(h){return h===null?c(h):ce(h)?n.check(lx,f,c)(h):(n.consume(h),s)}function c(h){return n.exit("chunkContent"),n.exit("content"),r(h)}function f(h){return n.consume(h),n.exit("chunkContent"),l.next=n.enter("chunkContent",{contentType:"content",previous:l}),l=l.next,s}}function ux(n,r,l){const o=this;return s;function s(f){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),De(n,c,"linePrefix")}function c(f){if(f===null||ce(f))return l(f);const h=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?r(f):n.interrupt(o.parser.constructs.flow,l,r)(f)}}function qg(n,r,l,o,s,c,f,h,p){const m=p||Number.POSITIVE_INFINITY;let v=0;return g;function g(R){return R===60?(n.enter(o),n.enter(s),n.enter(c),n.consume(R),n.exit(c),x):R===null||R===32||R===41||bo(R)?l(R):(n.enter(o),n.enter(f),n.enter(h),n.enter("chunkString",{contentType:"string"}),L(R))}function x(R){return R===62?(n.enter(c),n.consume(R),n.exit(c),n.exit(s),n.exit(o),r):(n.enter(h),n.enter("chunkString",{contentType:"string"}),b(R))}function b(R){return R===62?(n.exit("chunkString"),n.exit(h),x(R)):R===null||R===60||ce(R)?l(R):(n.consume(R),R===92?T:b)}function T(R){return R===60||R===62||R===92?(n.consume(R),b):b(R)}function L(R){return!v&&(R===null||R===41||Ge(R))?(n.exit("chunkString"),n.exit(h),n.exit(f),n.exit(o),r(R)):v<m&&R===40?(n.consume(R),v++,L):R===41?(n.consume(R),v--,L):R===null||R===32||R===40||bo(R)?l(R):(n.consume(R),R===92?O:L)}function O(R){return R===40||R===41||R===92?(n.consume(R),L):L(R)}}function Yg(n,r,l,o,s,c){const f=this;let h=0,p;return m;function m(b){return n.enter(o),n.enter(s),n.consume(b),n.exit(s),n.enter(c),v}function v(b){return h>999||b===null||b===91||b===93&&!p||b===94&&!h&&"_hiddenFootnoteSupport"in f.parser.constructs?l(b):b===93?(n.exit(c),n.enter(s),n.consume(b),n.exit(s),n.exit(o),r):ce(b)?(n.enter("lineEnding"),n.consume(b),n.exit("lineEnding"),v):(n.enter("chunkString",{contentType:"string"}),g(b))}function g(b){return b===null||b===91||b===93||ce(b)||h++>999?(n.exit("chunkString"),v(b)):(n.consume(b),p||(p=!Te(b)),b===92?x:g)}function x(b){return b===91||b===92||b===93?(n.consume(b),h++,g):g(b)}}function Gg(n,r,l,o,s,c){let f;return h;function h(x){return x===34||x===39||x===40?(n.enter(o),n.enter(s),n.consume(x),n.exit(s),f=x===40?41:x,p):l(x)}function p(x){return x===f?(n.enter(s),n.consume(x),n.exit(s),n.exit(o),r):(n.enter(c),m(x))}function m(x){return x===f?(n.exit(c),p(f)):x===null?l(x):ce(x)?(n.enter("lineEnding"),n.consume(x),n.exit("lineEnding"),De(n,m,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),v(x))}function v(x){return x===f||x===null||ce(x)?(n.exit("chunkString"),m(x)):(n.consume(x),x===92?g:v)}function g(x){return x===f||x===92?(n.consume(x),v):v(x)}}function Ll(n,r){let l;return o;function o(s){return ce(s)?(n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),l=!0,o):Te(s)?De(n,o,l?"linePrefix":"lineSuffix")(s):r(s)}}const sx={name:"definition",tokenize:fx},cx={partial:!0,tokenize:dx};function fx(n,r,l){const o=this;let s;return c;function c(b){return n.enter("definition"),f(b)}function f(b){return Yg.call(o,n,h,l,"definitionLabel","definitionLabelMarker","definitionLabelString")(b)}function h(b){return s=rn(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),b===58?(n.enter("definitionMarker"),n.consume(b),n.exit("definitionMarker"),p):l(b)}function p(b){return Ge(b)?Ll(n,m)(b):m(b)}function m(b){return qg(n,v,l,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(b)}function v(b){return n.attempt(cx,g,g)(b)}function g(b){return Te(b)?De(n,x,"whitespace")(b):x(b)}function x(b){return b===null||ce(b)?(n.exit("definition"),o.parser.defined.push(s),r(b)):l(b)}}function dx(n,r,l){return o;function o(h){return Ge(h)?Ll(n,s)(h):l(h)}function s(h){return Gg(n,c,l,"definitionTitle","definitionTitleMarker","definitionTitleString")(h)}function c(h){return Te(h)?De(n,f,"whitespace")(h):f(h)}function f(h){return h===null||ce(h)?r(h):l(h)}}const mx={name:"hardBreakEscape",tokenize:hx};function hx(n,r,l){return o;function o(c){return n.enter("hardBreakEscape"),n.consume(c),s}function s(c){return ce(c)?(n.exit("hardBreakEscape"),r(c)):l(c)}}const px={name:"headingAtx",resolve:gx,tokenize:yx};function gx(n,r){let l=n.length-2,o=3,s,c;return n[o][1].type==="whitespace"&&(o+=2),l-2>o&&n[l][1].type==="whitespace"&&(l-=2),n[l][1].type==="atxHeadingSequence"&&(o===l-1||l-4>o&&n[l-2][1].type==="whitespace")&&(l-=o+1===l?2:4),l>o&&(s={type:"atxHeadingText",start:n[o][1].start,end:n[l][1].end},c={type:"chunkText",start:n[o][1].start,end:n[l][1].end,contentType:"text"},jt(n,o,l-o+1,[["enter",s,r],["enter",c,r],["exit",c,r],["exit",s,r]])),n}function yx(n,r,l){let o=0;return s;function s(v){return n.enter("atxHeading"),c(v)}function c(v){return n.enter("atxHeadingSequence"),f(v)}function f(v){return v===35&&o++<6?(n.consume(v),f):v===null||Ge(v)?(n.exit("atxHeadingSequence"),h(v)):l(v)}function h(v){return v===35?(n.enter("atxHeadingSequence"),p(v)):v===null||ce(v)?(n.exit("atxHeading"),r(v)):Te(v)?De(n,h,"whitespace")(v):(n.enter("atxHeadingText"),m(v))}function p(v){return v===35?(n.consume(v),p):(n.exit("atxHeadingSequence"),h(v))}function m(v){return v===null||v===35||Ge(v)?(n.exit("atxHeadingText"),h(v)):(n.consume(v),m)}}const vx=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Lp=["pre","script","style","textarea"],bx={concrete:!0,name:"htmlFlow",resolveTo:Ax,tokenize:kx},Sx={partial:!0,tokenize:Tx},xx={partial:!0,tokenize:Cx};function Ax(n){let r=n.length;for(;r--&&!(n[r][0]==="enter"&&n[r][1].type==="htmlFlow"););return r>1&&n[r-2][1].type==="linePrefix"&&(n[r][1].start=n[r-2][1].start,n[r+1][1].start=n[r-2][1].start,n.splice(r-2,2)),n}function kx(n,r,l){const o=this;let s,c,f,h,p;return m;function m(A){return v(A)}function v(A){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(A),g}function g(A){return A===33?(n.consume(A),x):A===47?(n.consume(A),c=!0,L):A===63?(n.consume(A),s=3,o.interrupt?r:k):St(A)?(n.consume(A),f=String.fromCharCode(A),O):l(A)}function x(A){return A===45?(n.consume(A),s=2,b):A===91?(n.consume(A),s=5,h=0,T):St(A)?(n.consume(A),s=4,o.interrupt?r:k):l(A)}function b(A){return A===45?(n.consume(A),o.interrupt?r:k):l(A)}function T(A){const te="CDATA[";return A===te.charCodeAt(h++)?(n.consume(A),h===te.length?o.interrupt?r:ee:T):l(A)}function L(A){return St(A)?(n.consume(A),f=String.fromCharCode(A),O):l(A)}function O(A){if(A===null||A===47||A===62||Ge(A)){const te=A===47,he=f.toLowerCase();return!te&&!c&&Lp.includes(he)?(s=1,o.interrupt?r(A):ee(A)):vx.includes(f.toLowerCase())?(s=6,te?(n.consume(A),R):o.interrupt?r(A):ee(A)):(s=7,o.interrupt&&!o.parser.lazy[o.now().line]?l(A):c?H(A):B(A))}return A===45||pt(A)?(n.consume(A),f+=String.fromCharCode(A),O):l(A)}function R(A){return A===62?(n.consume(A),o.interrupt?r:ee):l(A)}function H(A){return Te(A)?(n.consume(A),H):I(A)}function B(A){return A===47?(n.consume(A),I):A===58||A===95||St(A)?(n.consume(A),ne):Te(A)?(n.consume(A),B):I(A)}function ne(A){return A===45||A===46||A===58||A===95||pt(A)?(n.consume(A),ne):ae(A)}function ae(A){return A===61?(n.consume(A),j):Te(A)?(n.consume(A),ae):B(A)}function j(A){return A===null||A===60||A===61||A===62||A===96?l(A):A===34||A===39?(n.consume(A),p=A,W):Te(A)?(n.consume(A),j):de(A)}function W(A){return A===p?(n.consume(A),p=null,me):A===null||ce(A)?l(A):(n.consume(A),W)}function de(A){return A===null||A===34||A===39||A===47||A===60||A===61||A===62||A===96||Ge(A)?ae(A):(n.consume(A),de)}function me(A){return A===47||A===62||Te(A)?B(A):l(A)}function I(A){return A===62?(n.consume(A),$):l(A)}function $(A){return A===null||ce(A)?ee(A):Te(A)?(n.consume(A),$):l(A)}function ee(A){return A===45&&s===2?(n.consume(A),N):A===60&&s===1?(n.consume(A),X):A===62&&s===4?(n.consume(A),w):A===63&&s===3?(n.consume(A),k):A===93&&s===5?(n.consume(A),Se):ce(A)&&(s===6||s===7)?(n.exit("htmlFlowData"),n.check(Sx,Y,xe)(A)):A===null||ce(A)?(n.exit("htmlFlowData"),xe(A)):(n.consume(A),ee)}function xe(A){return n.check(xx,le,Y)(A)}function le(A){return n.enter("lineEnding"),n.consume(A),n.exit("lineEnding"),Z}function Z(A){return A===null||ce(A)?xe(A):(n.enter("htmlFlowData"),ee(A))}function N(A){return A===45?(n.consume(A),k):ee(A)}function X(A){return A===47?(n.consume(A),f="",oe):ee(A)}function oe(A){if(A===62){const te=f.toLowerCase();return Lp.includes(te)?(n.consume(A),w):ee(A)}return St(A)&&f.length<8?(n.consume(A),f+=String.fromCharCode(A),oe):ee(A)}function Se(A){return A===93?(n.consume(A),k):ee(A)}function k(A){return A===62?(n.consume(A),w):A===45&&s===2?(n.consume(A),k):ee(A)}function w(A){return A===null||ce(A)?(n.exit("htmlFlowData"),Y(A)):(n.consume(A),w)}function Y(A){return n.exit("htmlFlow"),r(A)}}function Cx(n,r,l){const o=this;return s;function s(f){return ce(f)?(n.enter("lineEnding"),n.consume(f),n.exit("lineEnding"),c):l(f)}function c(f){return o.parser.lazy[o.now().line]?l(f):r(f)}}function Tx(n,r,l){return o;function o(s){return n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),n.attempt(ql,r,l)}}const wx={name:"htmlText",tokenize:Ex};function Ex(n,r,l){const o=this;let s,c,f;return h;function h(k){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(k),p}function p(k){return k===33?(n.consume(k),m):k===47?(n.consume(k),ae):k===63?(n.consume(k),B):St(k)?(n.consume(k),de):l(k)}function m(k){return k===45?(n.consume(k),v):k===91?(n.consume(k),c=0,T):St(k)?(n.consume(k),H):l(k)}function v(k){return k===45?(n.consume(k),b):l(k)}function g(k){return k===null?l(k):k===45?(n.consume(k),x):ce(k)?(f=g,X(k)):(n.consume(k),g)}function x(k){return k===45?(n.consume(k),b):g(k)}function b(k){return k===62?N(k):k===45?x(k):g(k)}function T(k){const w="CDATA[";return k===w.charCodeAt(c++)?(n.consume(k),c===w.length?L:T):l(k)}function L(k){return k===null?l(k):k===93?(n.consume(k),O):ce(k)?(f=L,X(k)):(n.consume(k),L)}function O(k){return k===93?(n.consume(k),R):L(k)}function R(k){return k===62?N(k):k===93?(n.consume(k),R):L(k)}function H(k){return k===null||k===62?N(k):ce(k)?(f=H,X(k)):(n.consume(k),H)}function B(k){return k===null?l(k):k===63?(n.consume(k),ne):ce(k)?(f=B,X(k)):(n.consume(k),B)}function ne(k){return k===62?N(k):B(k)}function ae(k){return St(k)?(n.consume(k),j):l(k)}function j(k){return k===45||pt(k)?(n.consume(k),j):W(k)}function W(k){return ce(k)?(f=W,X(k)):Te(k)?(n.consume(k),W):N(k)}function de(k){return k===45||pt(k)?(n.consume(k),de):k===47||k===62||Ge(k)?me(k):l(k)}function me(k){return k===47?(n.consume(k),N):k===58||k===95||St(k)?(n.consume(k),I):ce(k)?(f=me,X(k)):Te(k)?(n.consume(k),me):N(k)}function I(k){return k===45||k===46||k===58||k===95||pt(k)?(n.consume(k),I):$(k)}function $(k){return k===61?(n.consume(k),ee):ce(k)?(f=$,X(k)):Te(k)?(n.consume(k),$):me(k)}function ee(k){return k===null||k===60||k===61||k===62||k===96?l(k):k===34||k===39?(n.consume(k),s=k,xe):ce(k)?(f=ee,X(k)):Te(k)?(n.consume(k),ee):(n.consume(k),le)}function xe(k){return k===s?(n.consume(k),s=void 0,Z):k===null?l(k):ce(k)?(f=xe,X(k)):(n.consume(k),xe)}function le(k){return k===null||k===34||k===39||k===60||k===61||k===96?l(k):k===47||k===62||Ge(k)?me(k):(n.consume(k),le)}function Z(k){return k===47||k===62||Ge(k)?me(k):l(k)}function N(k){return k===62?(n.consume(k),n.exit("htmlTextData"),n.exit("htmlText"),r):l(k)}function X(k){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(k),n.exit("lineEnding"),oe}function oe(k){return Te(k)?De(n,Se,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):Se(k)}function Se(k){return n.enter("htmlTextData"),f(k)}}const Kc={name:"labelEnd",resolveAll:zx,resolveTo:Ox,tokenize:Lx},Rx={tokenize:_x},Mx={tokenize:Nx},Dx={tokenize:Ix};function zx(n){let r=-1;const l=[];for(;++r<n.length;){const o=n[r][1];if(l.push(n[r]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const s=o.type==="labelImage"?4:2;o.type="data",r+=s}}return n.length!==l.length&&jt(n,0,n.length,l),n}function Ox(n,r){let l=n.length,o=0,s,c,f,h;for(;l--;)if(s=n[l][1],c){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;n[l][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(f){if(n[l][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(c=l,s.type!=="labelLink")){o=2;break}}else s.type==="labelEnd"&&(f=l);const p={type:n[c][1].type==="labelLink"?"link":"image",start:{...n[c][1].start},end:{...n[n.length-1][1].end}},m={type:"label",start:{...n[c][1].start},end:{...n[f][1].end}},v={type:"labelText",start:{...n[c+o+2][1].end},end:{...n[f-2][1].start}};return h=[["enter",p,r],["enter",m,r]],h=Wt(h,n.slice(c+1,c+o+3)),h=Wt(h,[["enter",v,r]]),h=Wt(h,Eo(r.parser.constructs.insideSpan.null,n.slice(c+o+4,f-3),r)),h=Wt(h,[["exit",v,r],n[f-2],n[f-1],["exit",m,r]]),h=Wt(h,n.slice(f+1)),h=Wt(h,[["exit",p,r]]),jt(n,c,n.length,h),n}function Lx(n,r,l){const o=this;let s=o.events.length,c,f;for(;s--;)if((o.events[s][1].type==="labelImage"||o.events[s][1].type==="labelLink")&&!o.events[s][1]._balanced){c=o.events[s][1];break}return h;function h(x){return c?c._inactive?g(x):(f=o.parser.defined.includes(rn(o.sliceSerialize({start:c.end,end:o.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(x),n.exit("labelMarker"),n.exit("labelEnd"),p):l(x)}function p(x){return x===40?n.attempt(Rx,v,f?v:g)(x):x===91?n.attempt(Mx,v,f?m:g)(x):f?v(x):g(x)}function m(x){return n.attempt(Dx,v,g)(x)}function v(x){return r(x)}function g(x){return c._balanced=!0,l(x)}}function _x(n,r,l){return o;function o(g){return n.enter("resource"),n.enter("resourceMarker"),n.consume(g),n.exit("resourceMarker"),s}function s(g){return Ge(g)?Ll(n,c)(g):c(g)}function c(g){return g===41?v(g):qg(n,f,h,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function f(g){return Ge(g)?Ll(n,p)(g):v(g)}function h(g){return l(g)}function p(g){return g===34||g===39||g===40?Gg(n,m,l,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):v(g)}function m(g){return Ge(g)?Ll(n,v)(g):v(g)}function v(g){return g===41?(n.enter("resourceMarker"),n.consume(g),n.exit("resourceMarker"),n.exit("resource"),r):l(g)}}function Nx(n,r,l){const o=this;return s;function s(h){return Yg.call(o,n,c,f,"reference","referenceMarker","referenceString")(h)}function c(h){return o.parser.defined.includes(rn(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?r(h):l(h)}function f(h){return l(h)}}function Ix(n,r,l){return o;function o(c){return n.enter("reference"),n.enter("referenceMarker"),n.consume(c),n.exit("referenceMarker"),s}function s(c){return c===93?(n.enter("referenceMarker"),n.consume(c),n.exit("referenceMarker"),n.exit("reference"),r):l(c)}}const Bx={name:"labelStartImage",resolveAll:Kc.resolveAll,tokenize:Ux};function Ux(n,r,l){const o=this;return s;function s(h){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(h),n.exit("labelImageMarker"),c}function c(h){return h===91?(n.enter("labelMarker"),n.consume(h),n.exit("labelMarker"),n.exit("labelImage"),f):l(h)}function f(h){return h===94&&"_hiddenFootnoteSupport"in o.parser.constructs?l(h):r(h)}}const Hx={name:"labelStartLink",resolveAll:Kc.resolveAll,tokenize:jx};function jx(n,r,l){const o=this;return s;function s(f){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(f),n.exit("labelMarker"),n.exit("labelLink"),c}function c(f){return f===94&&"_hiddenFootnoteSupport"in o.parser.constructs?l(f):r(f)}}const ic={name:"lineEnding",tokenize:qx};function qx(n,r){return l;function l(o){return n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),De(n,r,"linePrefix")}}const yo={name:"thematicBreak",tokenize:Yx};function Yx(n,r,l){let o=0,s;return c;function c(m){return n.enter("thematicBreak"),f(m)}function f(m){return s=m,h(m)}function h(m){return m===s?(n.enter("thematicBreakSequence"),p(m)):o>=3&&(m===null||ce(m))?(n.exit("thematicBreak"),r(m)):l(m)}function p(m){return m===s?(n.consume(m),o++,p):(n.exit("thematicBreakSequence"),Te(m)?De(n,h,"whitespace")(m):h(m))}}const Mt={continuation:{tokenize:Px},exit:Xx,name:"list",tokenize:Vx},Gx={partial:!0,tokenize:Qx},Fx={partial:!0,tokenize:Kx};function Vx(n,r,l){const o=this,s=o.events[o.events.length-1];let c=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,f=0;return h;function h(b){const T=o.containerState.type||(b===42||b===43||b===45?"listUnordered":"listOrdered");if(T==="listUnordered"?!o.containerState.marker||b===o.containerState.marker:Cc(b)){if(o.containerState.type||(o.containerState.type=T,n.enter(T,{_container:!0})),T==="listUnordered")return n.enter("listItemPrefix"),b===42||b===45?n.check(yo,l,m)(b):m(b);if(!o.interrupt||b===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),p(b)}return l(b)}function p(b){return Cc(b)&&++f<10?(n.consume(b),p):(!o.interrupt||f<2)&&(o.containerState.marker?b===o.containerState.marker:b===41||b===46)?(n.exit("listItemValue"),m(b)):l(b)}function m(b){return n.enter("listItemMarker"),n.consume(b),n.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||b,n.check(ql,o.interrupt?l:v,n.attempt(Gx,x,g))}function v(b){return o.containerState.initialBlankLine=!0,c++,x(b)}function g(b){return Te(b)?(n.enter("listItemPrefixWhitespace"),n.consume(b),n.exit("listItemPrefixWhitespace"),x):l(b)}function x(b){return o.containerState.size=c+o.sliceSerialize(n.exit("listItemPrefix"),!0).length,r(b)}}function Px(n,r,l){const o=this;return o.containerState._closeFlow=void 0,n.check(ql,s,c);function s(h){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,De(n,r,"listItemIndent",o.containerState.size+1)(h)}function c(h){return o.containerState.furtherBlankLines||!Te(h)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,f(h)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,n.attempt(Fx,r,f)(h))}function f(h){return o.containerState._closeFlow=!0,o.interrupt=void 0,De(n,n.attempt(Mt,r,l),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h)}}function Kx(n,r,l){const o=this;return De(n,s,"listItemIndent",o.containerState.size+1);function s(c){const f=o.events[o.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===o.containerState.size?r(c):l(c)}}function Xx(n){n.exit(this.containerState.type)}function Qx(n,r,l){const o=this;return De(n,s,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(c){const f=o.events[o.events.length-1];return!Te(c)&&f&&f[1].type==="listItemPrefixWhitespace"?r(c):l(c)}}const _p={name:"setextUnderline",resolveTo:Zx,tokenize:Jx};function Zx(n,r){let l=n.length,o,s,c;for(;l--;)if(n[l][0]==="enter"){if(n[l][1].type==="content"){o=l;break}n[l][1].type==="paragraph"&&(s=l)}else n[l][1].type==="content"&&n.splice(l,1),!c&&n[l][1].type==="definition"&&(c=l);const f={type:"setextHeading",start:{...n[o][1].start},end:{...n[n.length-1][1].end}};return n[s][1].type="setextHeadingText",c?(n.splice(s,0,["enter",f,r]),n.splice(c+1,0,["exit",n[o][1],r]),n[o][1].end={...n[c][1].end}):n[o][1]=f,n.push(["exit",f,r]),n}function Jx(n,r,l){const o=this;let s;return c;function c(m){let v=o.events.length,g;for(;v--;)if(o.events[v][1].type!=="lineEnding"&&o.events[v][1].type!=="linePrefix"&&o.events[v][1].type!=="content"){g=o.events[v][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||g)?(n.enter("setextHeadingLine"),s=m,f(m)):l(m)}function f(m){return n.enter("setextHeadingLineSequence"),h(m)}function h(m){return m===s?(n.consume(m),h):(n.exit("setextHeadingLineSequence"),Te(m)?De(n,p,"lineSuffix")(m):p(m))}function p(m){return m===null||ce(m)?(n.exit("setextHeadingLine"),r(m)):l(m)}}const Wx={tokenize:$x};function $x(n){const r=this,l=n.attempt(ql,o,n.attempt(this.parser.constructs.flowInitial,s,De(n,n.attempt(this.parser.constructs.flow,s,n.attempt(ix,s)),"linePrefix")));return l;function o(c){if(c===null){n.consume(c);return}return n.enter("lineEndingBlank"),n.consume(c),n.exit("lineEndingBlank"),r.currentConstruct=void 0,l}function s(c){if(c===null){n.consume(c);return}return n.enter("lineEnding"),n.consume(c),n.exit("lineEnding"),r.currentConstruct=void 0,l}}const eA={resolveAll:Vg()},tA=Fg("string"),nA=Fg("text");function Fg(n){return{resolveAll:Vg(n==="text"?aA:void 0),tokenize:r};function r(l){const o=this,s=this.parser.constructs[n],c=l.attempt(s,f,h);return f;function f(v){return m(v)?c(v):h(v)}function h(v){if(v===null){l.consume(v);return}return l.enter("data"),l.consume(v),p}function p(v){return m(v)?(l.exit("data"),c(v)):(l.consume(v),p)}function m(v){if(v===null)return!0;const g=s[v];let x=-1;if(g)for(;++x<g.length;){const b=g[x];if(!b.previous||b.previous.call(o,o.previous))return!0}return!1}}}function Vg(n){return r;function r(l,o){let s=-1,c;for(;++s<=l.length;)c===void 0?l[s]&&l[s][1].type==="data"&&(c=s,s++):(!l[s]||l[s][1].type!=="data")&&(s!==c+2&&(l[c][1].end=l[s-1][1].end,l.splice(c+2,s-c-2),s=c+2),c=void 0);return n?n(l,o):l}}function aA(n,r){let l=0;for(;++l<=n.length;)if((l===n.length||n[l][1].type==="lineEnding")&&n[l-1][1].type==="data"){const o=n[l-1][1],s=r.sliceStream(o);let c=s.length,f=-1,h=0,p;for(;c--;){const m=s[c];if(typeof m=="string"){for(f=m.length;m.charCodeAt(f-1)===32;)h++,f--;if(f)break;f=-1}else if(m===-2)p=!0,h++;else if(m!==-1){c++;break}}if(r._contentTypeTextTrailing&&l===n.length&&(h=0),h){const m={type:l===n.length||p||h<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?f:o.start._bufferIndex+f,_index:o.start._index+c,line:o.end.line,column:o.end.column-h,offset:o.end.offset-h},end:{...o.end}};o.end={...m.start},o.start.offset===o.end.offset?Object.assign(o,m):(n.splice(l,0,["enter",m,r],["exit",m,r]),l+=2)}l++}return n}const iA={42:Mt,43:Mt,45:Mt,48:Mt,49:Mt,50:Mt,51:Mt,52:Mt,53:Mt,54:Mt,55:Mt,56:Mt,57:Mt,62:Bg},lA={91:sx},rA={[-2]:ac,[-1]:ac,32:ac},oA={35:px,42:yo,45:[_p,yo],60:bx,61:_p,95:yo,96:Op,126:Op},uA={38:Hg,92:Ug},sA={[-5]:ic,[-4]:ic,[-3]:ic,33:Bx,38:Hg,42:Tc,60:[HS,wx],91:Hx,92:[mx,Ug],93:Kc,95:Tc,96:WS},cA={null:[Tc,eA]},fA={null:[42,95]},dA={null:[]},mA=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:fA,contentInitial:lA,disable:dA,document:iA,flow:oA,flowInitial:rA,insideSpan:cA,string:uA,text:sA},Symbol.toStringTag,{value:"Module"}));function hA(n,r,l){let o={_bufferIndex:-1,_index:0,line:l&&l.line||1,column:l&&l.column||1,offset:l&&l.offset||0};const s={},c=[];let f=[],h=[];const p={attempt:W(ae),check:W(j),consume:H,enter:B,exit:ne,interrupt:W(j,{interrupt:!0})},m={code:null,containerState:{},defineSkip:L,events:[],now:T,parser:n,previous:null,sliceSerialize:x,sliceStream:b,write:g};let v=r.tokenize.call(m,p);return r.resolveAll&&c.push(r),m;function g($){return f=Wt(f,$),O(),f[f.length-1]!==null?[]:(de(r,0),m.events=Eo(c,m.events,m),m.events)}function x($,ee){return gA(b($),ee)}function b($){return pA(f,$)}function T(){const{_bufferIndex:$,_index:ee,line:xe,column:le,offset:Z}=o;return{_bufferIndex:$,_index:ee,line:xe,column:le,offset:Z}}function L($){s[$.line]=$.column,I()}function O(){let $;for(;o._index<f.length;){const ee=f[o._index];if(typeof ee=="string")for($=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===$&&o._bufferIndex<ee.length;)R(ee.charCodeAt(o._bufferIndex));else R(ee)}}function R($){v=v($)}function H($){ce($)?(o.line++,o.column=1,o.offset+=$===-3?2:1,I()):$!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===f[o._index].length&&(o._bufferIndex=-1,o._index++)),m.previous=$}function B($,ee){const xe=ee||{};return xe.type=$,xe.start=T(),m.events.push(["enter",xe,m]),h.push(xe),xe}function ne($){const ee=h.pop();return ee.end=T(),m.events.push(["exit",ee,m]),ee}function ae($,ee){de($,ee.from)}function j($,ee){ee.restore()}function W($,ee){return xe;function xe(le,Z,N){let X,oe,Se,k;return Array.isArray(le)?Y(le):"tokenize"in le?Y([le]):w(le);function w(ue){return we;function we(Ke){const Be=Ke!==null&&ue[Ke],qt=Ke!==null&&ue.null,hn=[...Array.isArray(Be)?Be:Be?[Be]:[],...Array.isArray(qt)?qt:qt?[qt]:[]];return Y(hn)(Ke)}}function Y(ue){return X=ue,oe=0,ue.length===0?N:A(ue[oe])}function A(ue){return we;function we(Ke){return k=me(),Se=ue,ue.partial||(m.currentConstruct=ue),ue.name&&m.parser.constructs.disable.null.includes(ue.name)?he():ue.tokenize.call(ee?Object.assign(Object.create(m),ee):m,p,te,he)(Ke)}}function te(ue){return $(Se,k),Z}function he(ue){return k.restore(),++oe<X.length?A(X[oe]):N}}}function de($,ee){$.resolveAll&&!c.includes($)&&c.push($),$.resolve&&jt(m.events,ee,m.events.length-ee,$.resolve(m.events.slice(ee),m)),$.resolveTo&&(m.events=$.resolveTo(m.events,m))}function me(){const $=T(),ee=m.previous,xe=m.currentConstruct,le=m.events.length,Z=Array.from(h);return{from:le,restore:N};function N(){o=$,m.previous=ee,m.currentConstruct=xe,m.events.length=le,h=Z,I()}}function I(){o.line in s&&o.column<2&&(o.column=s[o.line],o.offset+=s[o.line]-1)}}function pA(n,r){const l=r.start._index,o=r.start._bufferIndex,s=r.end._index,c=r.end._bufferIndex;let f;if(l===s)f=[n[l].slice(o,c)];else{if(f=n.slice(l,s),o>-1){const h=f[0];typeof h=="string"?f[0]=h.slice(o):f.shift()}c>0&&f.push(n[s].slice(0,c))}return f}function gA(n,r){let l=-1;const o=[];let s;for(;++l<n.length;){const c=n[l];let f;if(typeof c=="string")f=c;else switch(c){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=r?" ":"	";break}case-1:{if(!r&&s)continue;f=" ";break}default:f=String.fromCharCode(c)}s=c===-2,o.push(f)}return o.join("")}function yA(n){const o={constructs:Ng([mA,...(n||{}).extensions||[]]),content:s(OS),defined:[],document:s(_S),flow:s(Wx),lazy:{},string:s(tA),text:s(nA)};return o;function s(c){return f;function f(h){return hA(o,c,h)}}}function vA(n){for(;!jg(n););return n}const Np=/[\0\t\n\r]/g;function bA(){let n=1,r="",l=!0,o;return s;function s(c,f,h){const p=[];let m,v,g,x,b;for(c=r+(typeof c=="string"?c.toString():new TextDecoder(f||void 0).decode(c)),g=0,r="",l&&(c.charCodeAt(0)===65279&&g++,l=void 0);g<c.length;){if(Np.lastIndex=g,m=Np.exec(c),x=m&&m.index!==void 0?m.index:c.length,b=c.charCodeAt(x),!m){r=c.slice(g);break}if(b===10&&g===x&&o)p.push(-3),o=void 0;else switch(o&&(p.push(-5),o=void 0),g<x&&(p.push(c.slice(g,x)),n+=x-g),b){case 0:{p.push(65533),n++;break}case 9:{for(v=Math.ceil(n/4)*4,p.push(-2);n++<v;)p.push(-1);break}case 10:{p.push(-4),n=1;break}default:o=!0,n=1}g=x+1}return h&&(o&&p.push(-5),r&&p.push(r),p.push(null)),p}}const SA=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function xA(n){return n.replace(SA,AA)}function AA(n,r,l){if(r)return r;if(l.charCodeAt(0)===35){const s=l.charCodeAt(1),c=s===120||s===88;return Ig(l.slice(c?2:1),c?16:10)}return Pc(l)||n}const Pg={}.hasOwnProperty;function kA(n,r,l){return typeof r!="string"&&(l=r,r=void 0),CA(l)(vA(yA(l).document().write(bA()(n,r,!0))))}function CA(n){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(Ia),autolinkProtocol:me,autolinkEmail:me,atxHeading:c(_a),blockQuote:c(qt),characterEscape:me,characterReference:me,codeFenced:c(hn),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:c(hn,f),codeText:c(Oi,f),codeTextData:me,data:me,codeFlowValue:me,definition:c(Gl),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:c(pn),hardBreakEscape:c(Na),hardBreakTrailing:c(Na),htmlFlow:c(Fl,f),htmlFlowData:me,htmlText:c(Fl,f),htmlTextData:me,image:c(Vl),label:f,link:c(Ia),listItem:c(Li),listItemValue:x,listOrdered:c(Ba,g),listUnordered:c(Ba),paragraph:c(zo),reference:A,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:c(_a),strong:c(Oo),thematicBreak:c(Lo)},exit:{atxHeading:p(),atxHeadingSequence:ae,autolink:p(),autolinkEmail:Be,autolinkProtocol:Ke,blockQuote:p(),characterEscapeValue:I,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:ue,characterReference:we,codeFenced:p(O),codeFencedFence:L,codeFencedFenceInfo:b,codeFencedFenceMeta:T,codeFlowValue:I,codeIndented:p(R),codeText:p(Z),codeTextData:I,data:I,definition:p(),definitionDestinationString:ne,definitionLabelString:H,definitionTitleString:B,emphasis:p(),hardBreakEscape:p(ee),hardBreakTrailing:p(ee),htmlFlow:p(xe),htmlFlowData:I,htmlText:p(le),htmlTextData:I,image:p(X),label:Se,labelText:oe,lineEnding:$,link:p(N),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:te,resourceDestinationString:k,resourceTitleString:w,resource:Y,setextHeading:p(de),setextHeadingLineSequence:W,setextHeadingText:j,strong:p(),thematicBreak:p()}};Kg(r,(n||{}).mdastExtensions||[]);const l={};return o;function o(G){let J={type:"root",children:[]};const pe={stack:[J],tokenStack:[],config:r,enter:h,exit:m,buffer:f,resume:v,data:l},Ae=[];let _e=-1;for(;++_e<G.length;)if(G[_e][1].type==="listOrdered"||G[_e][1].type==="listUnordered")if(G[_e][0]==="enter")Ae.push(_e);else{const zt=Ae.pop();_e=s(G,zt,_e)}for(_e=-1;++_e<G.length;){const zt=r[G[_e][0]];Pg.call(zt,G[_e][1].type)&&zt[G[_e][1].type].call(Object.assign({sliceSerialize:G[_e][2].sliceSerialize},pe),G[_e][1])}if(pe.tokenStack.length>0){const zt=pe.tokenStack[pe.tokenStack.length-1];(zt[1]||Ip).call(pe,void 0,zt[0])}for(J.position={start:ca(G.length>0?G[0][1].start:{line:1,column:1,offset:0}),end:ca(G.length>0?G[G.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<r.transforms.length;)J=r.transforms[_e](J)||J;return J}function s(G,J,pe){let Ae=J-1,_e=-1,zt=!1,gn,vt,lt,xt;for(;++Ae<=pe;){const qe=G[Ae];switch(qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qe[0]==="enter"?_e++:_e--,xt=void 0;break}case"lineEndingBlank":{qe[0]==="enter"&&(gn&&!xt&&!_e&&!lt&&(lt=Ae),xt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:xt=void 0}if(!_e&&qe[0]==="enter"&&qe[1].type==="listItemPrefix"||_e===-1&&qe[0]==="exit"&&(qe[1].type==="listUnordered"||qe[1].type==="listOrdered")){if(gn){let Hn=Ae;for(vt=void 0;Hn--;){const tn=G[Hn];if(tn[1].type==="lineEnding"||tn[1].type==="lineEndingBlank"){if(tn[0]==="exit")continue;vt&&(G[vt][1].type="lineEndingBlank",zt=!0),tn[1].type="lineEnding",vt=Hn}else if(!(tn[1].type==="linePrefix"||tn[1].type==="blockQuotePrefix"||tn[1].type==="blockQuotePrefixWhitespace"||tn[1].type==="blockQuoteMarker"||tn[1].type==="listItemIndent"))break}lt&&(!vt||lt<vt)&&(gn._spread=!0),gn.end=Object.assign({},vt?G[vt][1].start:qe[1].end),G.splice(vt||Ae,0,["exit",gn,qe[2]]),Ae++,pe++}if(qe[1].type==="listItemPrefix"){const Hn={type:"listItem",_spread:!1,start:Object.assign({},qe[1].start),end:void 0};gn=Hn,G.splice(Ae,0,["enter",Hn,qe[2]]),Ae++,pe++,lt=void 0,xt=!0}}}return G[J][1]._spread=zt,pe}function c(G,J){return pe;function pe(Ae){h.call(this,G(Ae),Ae),J&&J.call(this,Ae)}}function f(){this.stack.push({type:"fragment",children:[]})}function h(G,J,pe){this.stack[this.stack.length-1].children.push(G),this.stack.push(G),this.tokenStack.push([J,pe||void 0]),G.position={start:ca(J.start),end:void 0}}function p(G){return J;function J(pe){G&&G.call(this,pe),m.call(this,pe)}}function m(G,J){const pe=this.stack.pop(),Ae=this.tokenStack.pop();if(Ae)Ae[0].type!==G.type&&(J?J.call(this,G,Ae[0]):(Ae[1]||Ip).call(this,G,Ae[0]));else throw new Error("Cannot close `"+G.type+"` ("+Ol({start:G.start,end:G.end})+"): it’s not open");pe.position.end=ca(G.end)}function v(){return Vc(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function x(G){if(this.data.expectingFirstListItemValue){const J=this.stack[this.stack.length-2];J.start=Number.parseInt(this.sliceSerialize(G),10),this.data.expectingFirstListItemValue=void 0}}function b(){const G=this.resume(),J=this.stack[this.stack.length-1];J.lang=G}function T(){const G=this.resume(),J=this.stack[this.stack.length-1];J.meta=G}function L(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function O(){const G=this.resume(),J=this.stack[this.stack.length-1];J.value=G.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function R(){const G=this.resume(),J=this.stack[this.stack.length-1];J.value=G.replace(/(\r?\n|\r)$/g,"")}function H(G){const J=this.resume(),pe=this.stack[this.stack.length-1];pe.label=J,pe.identifier=rn(this.sliceSerialize(G)).toLowerCase()}function B(){const G=this.resume(),J=this.stack[this.stack.length-1];J.title=G}function ne(){const G=this.resume(),J=this.stack[this.stack.length-1];J.url=G}function ae(G){const J=this.stack[this.stack.length-1];if(!J.depth){const pe=this.sliceSerialize(G).length;J.depth=pe}}function j(){this.data.setextHeadingSlurpLineEnding=!0}function W(G){const J=this.stack[this.stack.length-1];J.depth=this.sliceSerialize(G).codePointAt(0)===61?1:2}function de(){this.data.setextHeadingSlurpLineEnding=void 0}function me(G){const pe=this.stack[this.stack.length-1].children;let Ae=pe[pe.length-1];(!Ae||Ae.type!=="text")&&(Ae=yt(),Ae.position={start:ca(G.start),end:void 0},pe.push(Ae)),this.stack.push(Ae)}function I(G){const J=this.stack.pop();J.value+=this.sliceSerialize(G),J.position.end=ca(G.end)}function $(G){const J=this.stack[this.stack.length-1];if(this.data.atHardBreak){const pe=J.children[J.children.length-1];pe.position.end=ca(G.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(J.type)&&(me.call(this,G),I.call(this,G))}function ee(){this.data.atHardBreak=!0}function xe(){const G=this.resume(),J=this.stack[this.stack.length-1];J.value=G}function le(){const G=this.resume(),J=this.stack[this.stack.length-1];J.value=G}function Z(){const G=this.resume(),J=this.stack[this.stack.length-1];J.value=G}function N(){const G=this.stack[this.stack.length-1];if(this.data.inReference){const J=this.data.referenceType||"shortcut";G.type+="Reference",G.referenceType=J,delete G.url,delete G.title}else delete G.identifier,delete G.label;this.data.referenceType=void 0}function X(){const G=this.stack[this.stack.length-1];if(this.data.inReference){const J=this.data.referenceType||"shortcut";G.type+="Reference",G.referenceType=J,delete G.url,delete G.title}else delete G.identifier,delete G.label;this.data.referenceType=void 0}function oe(G){const J=this.sliceSerialize(G),pe=this.stack[this.stack.length-2];pe.label=xA(J),pe.identifier=rn(J).toLowerCase()}function Se(){const G=this.stack[this.stack.length-1],J=this.resume(),pe=this.stack[this.stack.length-1];if(this.data.inReference=!0,pe.type==="link"){const Ae=G.children;pe.children=Ae}else pe.alt=J}function k(){const G=this.resume(),J=this.stack[this.stack.length-1];J.url=G}function w(){const G=this.resume(),J=this.stack[this.stack.length-1];J.title=G}function Y(){this.data.inReference=void 0}function A(){this.data.referenceType="collapsed"}function te(G){const J=this.resume(),pe=this.stack[this.stack.length-1];pe.label=J,pe.identifier=rn(this.sliceSerialize(G)).toLowerCase(),this.data.referenceType="full"}function he(G){this.data.characterReferenceType=G.type}function ue(G){const J=this.sliceSerialize(G),pe=this.data.characterReferenceType;let Ae;pe?(Ae=Ig(J,pe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Ae=Pc(J);const _e=this.stack[this.stack.length-1];_e.value+=Ae}function we(G){const J=this.stack.pop();J.position.end=ca(G.end)}function Ke(G){I.call(this,G);const J=this.stack[this.stack.length-1];J.url=this.sliceSerialize(G)}function Be(G){I.call(this,G);const J=this.stack[this.stack.length-1];J.url="mailto:"+this.sliceSerialize(G)}function qt(){return{type:"blockquote",children:[]}}function hn(){return{type:"code",lang:null,meta:null,value:""}}function Oi(){return{type:"inlineCode",value:""}}function Gl(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function pn(){return{type:"emphasis",children:[]}}function _a(){return{type:"heading",depth:0,children:[]}}function Na(){return{type:"break"}}function Fl(){return{type:"html",value:""}}function Vl(){return{type:"image",title:null,url:"",alt:null}}function Ia(){return{type:"link",title:null,url:"",children:[]}}function Ba(G){return{type:"list",ordered:G.type==="listOrdered",start:null,spread:G._spread,children:[]}}function Li(G){return{type:"listItem",spread:G._spread,checked:null,children:[]}}function zo(){return{type:"paragraph",children:[]}}function Oo(){return{type:"strong",children:[]}}function yt(){return{type:"text",value:""}}function Lo(){return{type:"thematicBreak"}}}function ca(n){return{line:n.line,column:n.column,offset:n.offset}}function Kg(n,r){let l=-1;for(;++l<r.length;){const o=r[l];Array.isArray(o)?Kg(n,o):TA(n,o)}}function TA(n,r){let l;for(l in r)if(Pg.call(r,l))switch(l){case"canContainEols":{const o=r[l];o&&n[l].push(...o);break}case"transforms":{const o=r[l];o&&n[l].push(...o);break}case"enter":case"exit":{const o=r[l];o&&Object.assign(n[l],o);break}}}function Ip(n,r){throw n?new Error("Cannot close `"+n.type+"` ("+Ol({start:n.start,end:n.end})+"): a different token (`"+r.type+"`, "+Ol({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+Ol({start:r.start,end:r.end})+") is still open")}function wA(n){const r=this;r.parser=l;function l(o){return kA(o,{...r.data("settings"),...n,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function EA(n,r){const l={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(r),!0)};return n.patch(r,l),n.applyData(r,l)}function RA(n,r){const l={type:"element",tagName:"br",properties:{},children:[]};return n.patch(r,l),[n.applyData(r,l),{type:"text",value:`
`}]}function MA(n,r){const l=r.value?r.value+`
`:"",o={},s=r.lang?r.lang.split(/\s+/):[];s.length>0&&(o.className=["language-"+s[0]]);let c={type:"element",tagName:"code",properties:o,children:[{type:"text",value:l}]};return r.meta&&(c.data={meta:r.meta}),n.patch(r,c),c=n.applyData(r,c),c={type:"element",tagName:"pre",properties:{},children:[c]},n.patch(r,c),c}function DA(n,r){const l={type:"element",tagName:"del",properties:{},children:n.all(r)};return n.patch(r,l),n.applyData(r,l)}function zA(n,r){const l={type:"element",tagName:"em",properties:{},children:n.all(r)};return n.patch(r,l),n.applyData(r,l)}function OA(n,r){const l=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",o=String(r.identifier).toUpperCase(),s=zi(o.toLowerCase()),c=n.footnoteOrder.indexOf(o);let f,h=n.footnoteCounts.get(o);h===void 0?(h=0,n.footnoteOrder.push(o),f=n.footnoteOrder.length):f=c+1,h+=1,n.footnoteCounts.set(o,h);const p={type:"element",tagName:"a",properties:{href:"#"+l+"fn-"+s,id:l+"fnref-"+s+(h>1?"-"+h:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};n.patch(r,p);const m={type:"element",tagName:"sup",properties:{},children:[p]};return n.patch(r,m),n.applyData(r,m)}function LA(n,r){const l={type:"element",tagName:"h"+r.depth,properties:{},children:n.all(r)};return n.patch(r,l),n.applyData(r,l)}function _A(n,r){if(n.options.allowDangerousHtml){const l={type:"raw",value:r.value};return n.patch(r,l),n.applyData(r,l)}}function Xg(n,r){const l=r.referenceType;let o="]";if(l==="collapsed"?o+="[]":l==="full"&&(o+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+o}];const s=n.all(r),c=s[0];c&&c.type==="text"?c.value="["+c.value:s.unshift({type:"text",value:"["});const f=s[s.length-1];return f&&f.type==="text"?f.value+=o:s.push({type:"text",value:o}),s}function NA(n,r){const l=String(r.identifier).toUpperCase(),o=n.definitionById.get(l);if(!o)return Xg(n,r);const s={src:zi(o.url||""),alt:r.alt};o.title!==null&&o.title!==void 0&&(s.title=o.title);const c={type:"element",tagName:"img",properties:s,children:[]};return n.patch(r,c),n.applyData(r,c)}function IA(n,r){const l={src:zi(r.url)};r.alt!==null&&r.alt!==void 0&&(l.alt=r.alt),r.title!==null&&r.title!==void 0&&(l.title=r.title);const o={type:"element",tagName:"img",properties:l,children:[]};return n.patch(r,o),n.applyData(r,o)}function BA(n,r){const l={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};n.patch(r,l);const o={type:"element",tagName:"code",properties:{},children:[l]};return n.patch(r,o),n.applyData(r,o)}function UA(n,r){const l=String(r.identifier).toUpperCase(),o=n.definitionById.get(l);if(!o)return Xg(n,r);const s={href:zi(o.url||"")};o.title!==null&&o.title!==void 0&&(s.title=o.title);const c={type:"element",tagName:"a",properties:s,children:n.all(r)};return n.patch(r,c),n.applyData(r,c)}function HA(n,r){const l={href:zi(r.url)};r.title!==null&&r.title!==void 0&&(l.title=r.title);const o={type:"element",tagName:"a",properties:l,children:n.all(r)};return n.patch(r,o),n.applyData(r,o)}function jA(n,r,l){const o=n.all(r),s=l?qA(l):Qg(r),c={},f=[];if(typeof r.checked=="boolean"){const v=o[0];let g;v&&v.type==="element"&&v.tagName==="p"?g=v:(g={type:"element",tagName:"p",properties:{},children:[]},o.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let h=-1;for(;++h<o.length;){const v=o[h];(s||h!==0||v.type!=="element"||v.tagName!=="p")&&f.push({type:"text",value:`
`}),v.type==="element"&&v.tagName==="p"&&!s?f.push(...v.children):f.push(v)}const p=o[o.length-1];p&&(s||p.type!=="element"||p.tagName!=="p")&&f.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:c,children:f};return n.patch(r,m),n.applyData(r,m)}function qA(n){let r=!1;if(n.type==="list"){r=n.spread||!1;const l=n.children;let o=-1;for(;!r&&++o<l.length;)r=Qg(l[o])}return r}function Qg(n){const r=n.spread;return r??n.children.length>1}function YA(n,r){const l={},o=n.all(r);let s=-1;for(typeof r.start=="number"&&r.start!==1&&(l.start=r.start);++s<o.length;){const f=o[s];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){l.className=["contains-task-list"];break}}const c={type:"element",tagName:r.ordered?"ol":"ul",properties:l,children:n.wrap(o,!0)};return n.patch(r,c),n.applyData(r,c)}function GA(n,r){const l={type:"element",tagName:"p",properties:{},children:n.all(r)};return n.patch(r,l),n.applyData(r,l)}function FA(n,r){const l={type:"root",children:n.wrap(n.all(r))};return n.patch(r,l),n.applyData(r,l)}function VA(n,r){const l={type:"element",tagName:"strong",properties:{},children:n.all(r)};return n.patch(r,l),n.applyData(r,l)}function PA(n,r){const l=n.all(r),o=l.shift(),s=[];if(o){const f={type:"element",tagName:"thead",properties:{},children:n.wrap([o],!0)};n.patch(r.children[0],f),s.push(f)}if(l.length>0){const f={type:"element",tagName:"tbody",properties:{},children:n.wrap(l,!0)},h=qc(r.children[1]),p=Rg(r.children[r.children.length-1]);h&&p&&(f.position={start:h,end:p}),s.push(f)}const c={type:"element",tagName:"table",properties:{},children:n.wrap(s,!0)};return n.patch(r,c),n.applyData(r,c)}function KA(n,r,l){const o=l?l.children:void 0,c=(o?o.indexOf(r):1)===0?"th":"td",f=l&&l.type==="table"?l.align:void 0,h=f?f.length:r.children.length;let p=-1;const m=[];for(;++p<h;){const g=r.children[p],x={},b=f?f[p]:void 0;b&&(x.align=b);let T={type:"element",tagName:c,properties:x,children:[]};g&&(T.children=n.all(g),n.patch(g,T),T=n.applyData(g,T)),m.push(T)}const v={type:"element",tagName:"tr",properties:{},children:n.wrap(m,!0)};return n.patch(r,v),n.applyData(r,v)}function XA(n,r){const l={type:"element",tagName:"td",properties:{},children:n.all(r)};return n.patch(r,l),n.applyData(r,l)}const Bp=9,Up=32;function QA(n){const r=String(n),l=/\r?\n|\r/g;let o=l.exec(r),s=0;const c=[];for(;o;)c.push(Hp(r.slice(s,o.index),s>0,!0),o[0]),s=o.index+o[0].length,o=l.exec(r);return c.push(Hp(r.slice(s),s>0,!1)),c.join("")}function Hp(n,r,l){let o=0,s=n.length;if(r){let c=n.codePointAt(o);for(;c===Bp||c===Up;)o++,c=n.codePointAt(o)}if(l){let c=n.codePointAt(s-1);for(;c===Bp||c===Up;)s--,c=n.codePointAt(s-1)}return s>o?n.slice(o,s):""}function ZA(n,r){const l={type:"text",value:QA(String(r.value))};return n.patch(r,l),n.applyData(r,l)}function JA(n,r){const l={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(r,l),n.applyData(r,l)}const WA={blockquote:EA,break:RA,code:MA,delete:DA,emphasis:zA,footnoteReference:OA,heading:LA,html:_A,imageReference:NA,image:IA,inlineCode:BA,linkReference:UA,link:HA,listItem:jA,list:YA,paragraph:GA,root:FA,strong:VA,table:PA,tableCell:XA,tableRow:KA,text:ZA,thematicBreak:JA,toml:so,yaml:so,definition:so,footnoteDefinition:so};function so(){}const Zg=-1,Ro=0,_l=1,So=2,Xc=3,Qc=4,Zc=5,Jc=6,Jg=7,Wg=8,jp=typeof self=="object"?self:globalThis,$A=(n,r)=>{const l=(s,c)=>(n.set(c,s),s),o=s=>{if(n.has(s))return n.get(s);const[c,f]=r[s];switch(c){case Ro:case Zg:return l(f,s);case _l:{const h=l([],s);for(const p of f)h.push(o(p));return h}case So:{const h=l({},s);for(const[p,m]of f)h[o(p)]=o(m);return h}case Xc:return l(new Date(f),s);case Qc:{const{source:h,flags:p}=f;return l(new RegExp(h,p),s)}case Zc:{const h=l(new Map,s);for(const[p,m]of f)h.set(o(p),o(m));return h}case Jc:{const h=l(new Set,s);for(const p of f)h.add(o(p));return h}case Jg:{const{name:h,message:p}=f;return l(new jp[h](p),s)}case Wg:return l(BigInt(f),s);case"BigInt":return l(Object(BigInt(f)),s);case"ArrayBuffer":return l(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:h}=new Uint8Array(f);return l(new DataView(h),f)}}return l(new jp[c](f),s)};return o},qp=n=>$A(new Map,n)(0),ki="",{toString:ek}={},{keys:tk}=Object,zl=n=>{const r=typeof n;if(r!=="object"||!n)return[Ro,r];const l=ek.call(n).slice(8,-1);switch(l){case"Array":return[_l,ki];case"Object":return[So,ki];case"Date":return[Xc,ki];case"RegExp":return[Qc,ki];case"Map":return[Zc,ki];case"Set":return[Jc,ki];case"DataView":return[_l,l]}return l.includes("Array")?[_l,l]:l.includes("Error")?[Jg,l]:[So,l]},co=([n,r])=>n===Ro&&(r==="function"||r==="symbol"),nk=(n,r,l,o)=>{const s=(f,h)=>{const p=o.push(f)-1;return l.set(h,p),p},c=f=>{if(l.has(f))return l.get(f);let[h,p]=zl(f);switch(h){case Ro:{let v=f;switch(p){case"bigint":h=Wg,v=f.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+p);v=null;break;case"undefined":return s([Zg],f)}return s([h,v],f)}case _l:{if(p){let x=f;return p==="DataView"?x=new Uint8Array(f.buffer):p==="ArrayBuffer"&&(x=new Uint8Array(f)),s([p,[...x]],f)}const v=[],g=s([h,v],f);for(const x of f)v.push(c(x));return g}case So:{if(p)switch(p){case"BigInt":return s([p,f.toString()],f);case"Boolean":case"Number":case"String":return s([p,f.valueOf()],f)}if(r&&"toJSON"in f)return c(f.toJSON());const v=[],g=s([h,v],f);for(const x of tk(f))(n||!co(zl(f[x])))&&v.push([c(x),c(f[x])]);return g}case Xc:return s([h,f.toISOString()],f);case Qc:{const{source:v,flags:g}=f;return s([h,{source:v,flags:g}],f)}case Zc:{const v=[],g=s([h,v],f);for(const[x,b]of f)(n||!(co(zl(x))||co(zl(b))))&&v.push([c(x),c(b)]);return g}case Jc:{const v=[],g=s([h,v],f);for(const x of f)(n||!co(zl(x)))&&v.push(c(x));return g}}const{message:m}=f;return s([h,{name:p,message:m}],f)};return c},Yp=(n,{json:r,lossy:l}={})=>{const o=[];return nk(!(r||l),!!r,new Map,o)(n),o},xo=typeof structuredClone=="function"?(n,r)=>r&&("json"in r||"lossy"in r)?qp(Yp(n,r)):structuredClone(n):(n,r)=>qp(Yp(n,r));function ak(n,r){const l=[{type:"text",value:"↩"}];return r>1&&l.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),l}function ik(n,r){return"Back to reference "+(n+1)+(r>1?"-"+r:"")}function lk(n){const r=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",l=n.options.footnoteBackContent||ak,o=n.options.footnoteBackLabel||ik,s=n.options.footnoteLabel||"Footnotes",c=n.options.footnoteLabelTagName||"h2",f=n.options.footnoteLabelProperties||{className:["sr-only"]},h=[];let p=-1;for(;++p<n.footnoteOrder.length;){const m=n.footnoteById.get(n.footnoteOrder[p]);if(!m)continue;const v=n.all(m),g=String(m.identifier).toUpperCase(),x=zi(g.toLowerCase());let b=0;const T=[],L=n.footnoteCounts.get(g);for(;L!==void 0&&++b<=L;){T.length>0&&T.push({type:"text",value:" "});let H=typeof l=="string"?l:l(p,b);typeof H=="string"&&(H={type:"text",value:H}),T.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+x+(b>1?"-"+b:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(p,b),className:["data-footnote-backref"]},children:Array.isArray(H)?H:[H]})}const O=v[v.length-1];if(O&&O.type==="element"&&O.tagName==="p"){const H=O.children[O.children.length-1];H&&H.type==="text"?H.value+=" ":O.children.push({type:"text",value:" "}),O.children.push(...T)}else v.push(...T);const R={type:"element",tagName:"li",properties:{id:r+"fn-"+x},children:n.wrap(v,!0)};n.patch(m,R),h.push(R)}if(h.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...xo(f),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(h,!0)},{type:"text",value:`
`}]}}const Mo=(function(n){if(n==null)return sk;if(typeof n=="function")return Do(n);if(typeof n=="object")return Array.isArray(n)?rk(n):ok(n);if(typeof n=="string")return uk(n);throw new Error("Expected function, string, or object as test")});function rk(n){const r=[];let l=-1;for(;++l<n.length;)r[l]=Mo(n[l]);return Do(o);function o(...s){let c=-1;for(;++c<r.length;)if(r[c].apply(this,s))return!0;return!1}}function ok(n){const r=n;return Do(l);function l(o){const s=o;let c;for(c in n)if(s[c]!==r[c])return!1;return!0}}function uk(n){return Do(r);function r(l){return l&&l.type===n}}function Do(n){return r;function r(l,o,s){return!!(ck(l)&&n.call(this,l,typeof o=="number"?o:void 0,s||void 0))}}function sk(){return!0}function ck(n){return n!==null&&typeof n=="object"&&"type"in n}const $g=[],fk=!0,wc=!1,dk="skip";function ey(n,r,l,o){let s;typeof r=="function"&&typeof l!="function"?(o=l,l=r):s=r;const c=Mo(s),f=o?-1:1;h(n,void 0,[])();function h(p,m,v){const g=p&&typeof p=="object"?p:{};if(typeof g.type=="string"){const b=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(x,"name",{value:"node ("+(p.type+(b?"<"+b+">":""))+")"})}return x;function x(){let b=$g,T,L,O;if((!r||c(p,m,v[v.length-1]||void 0))&&(b=mk(l(p,v)),b[0]===wc))return b;if("children"in p&&p.children){const R=p;if(R.children&&b[0]!==dk)for(L=(o?R.children.length:-1)+f,O=v.concat(R);L>-1&&L<R.children.length;){const H=R.children[L];if(T=h(H,L,O)(),T[0]===wc)return T;L=typeof T[1]=="number"?T[1]:L+f}}return b}}}function mk(n){return Array.isArray(n)?n:typeof n=="number"?[fk,n]:n==null?$g:[n]}function Wc(n,r,l,o){let s,c,f;typeof r=="function"&&typeof l!="function"?(c=void 0,f=r,s=l):(c=r,f=l,s=o),ey(n,c,h,s);function h(p,m){const v=m[m.length-1],g=v?v.children.indexOf(p):void 0;return f(p,g,v)}}const Ec={}.hasOwnProperty,hk={};function pk(n,r){const l=r||hk,o=new Map,s=new Map,c=new Map,f={...WA,...l.handlers},h={all:m,applyData:yk,definitionById:o,footnoteById:s,footnoteCounts:c,footnoteOrder:[],handlers:f,one:p,options:l,patch:gk,wrap:bk};return Wc(n,function(v){if(v.type==="definition"||v.type==="footnoteDefinition"){const g=v.type==="definition"?o:s,x=String(v.identifier).toUpperCase();g.has(x)||g.set(x,v)}}),h;function p(v,g){const x=v.type,b=h.handlers[x];if(Ec.call(h.handlers,x)&&b)return b(h,v,g);if(h.options.passThrough&&h.options.passThrough.includes(x)){if("children"in v){const{children:L,...O}=v,R=xo(O);return R.children=h.all(v),R}return xo(v)}return(h.options.unknownHandler||vk)(h,v,g)}function m(v){const g=[];if("children"in v){const x=v.children;let b=-1;for(;++b<x.length;){const T=h.one(x[b],v);if(T){if(b&&x[b-1].type==="break"&&(!Array.isArray(T)&&T.type==="text"&&(T.value=Gp(T.value)),!Array.isArray(T)&&T.type==="element")){const L=T.children[0];L&&L.type==="text"&&(L.value=Gp(L.value))}Array.isArray(T)?g.push(...T):g.push(T)}}}return g}}function gk(n,r){n.position&&(r.position=iS(n))}function yk(n,r){let l=r;if(n&&n.data){const o=n.data.hName,s=n.data.hChildren,c=n.data.hProperties;if(typeof o=="string")if(l.type==="element")l.tagName=o;else{const f="children"in l?l.children:[l];l={type:"element",tagName:o,properties:{},children:f}}l.type==="element"&&c&&Object.assign(l.properties,xo(c)),"children"in l&&l.children&&s!==null&&s!==void 0&&(l.children=s)}return l}function vk(n,r){const l=r.data||{},o="value"in r&&!(Ec.call(l,"hProperties")||Ec.call(l,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:n.all(r)};return n.patch(r,o),n.applyData(r,o)}function bk(n,r){const l=[];let o=-1;for(r&&l.push({type:"text",value:`
`});++o<n.length;)o&&l.push({type:"text",value:`
`}),l.push(n[o]);return r&&n.length>0&&l.push({type:"text",value:`
`}),l}function Gp(n){let r=0,l=n.charCodeAt(r);for(;l===9||l===32;)r++,l=n.charCodeAt(r);return n.slice(r)}function Fp(n,r){const l=pk(n,r),o=l.one(n,void 0),s=lk(l),c=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return s&&c.children.push({type:"text",value:`
`},s),c}function Sk(n,r){return n&&"run"in n?async function(l,o){const s=Fp(l,{file:o,...r});await n.run(s,o)}:function(l,o){return Fp(l,{file:o,...n||r})}}function Vp(n){if(n)throw n}var lc,Pp;function xk(){if(Pp)return lc;Pp=1;var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=function(m){return typeof Array.isArray=="function"?Array.isArray(m):r.call(m)==="[object Array]"},c=function(m){if(!m||r.call(m)!=="[object Object]")return!1;var v=n.call(m,"constructor"),g=m.constructor&&m.constructor.prototype&&n.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!v&&!g)return!1;var x;for(x in m);return typeof x>"u"||n.call(m,x)},f=function(m,v){l&&v.name==="__proto__"?l(m,v.name,{enumerable:!0,configurable:!0,value:v.newValue,writable:!0}):m[v.name]=v.newValue},h=function(m,v){if(v==="__proto__")if(n.call(m,v)){if(o)return o(m,v).value}else return;return m[v]};return lc=function p(){var m,v,g,x,b,T,L=arguments[0],O=1,R=arguments.length,H=!1;for(typeof L=="boolean"&&(H=L,L=arguments[1]||{},O=2),(L==null||typeof L!="object"&&typeof L!="function")&&(L={});O<R;++O)if(m=arguments[O],m!=null)for(v in m)g=h(L,v),x=h(m,v),L!==x&&(H&&x&&(c(x)||(b=s(x)))?(b?(b=!1,T=g&&s(g)?g:[]):T=g&&c(g)?g:{},f(L,{name:v,newValue:p(H,T,x)})):typeof x<"u"&&f(L,{name:v,newValue:x}));return L},lc}var Ak=xk();const rc=ko(Ak);function Rc(n){if(typeof n!="object"||n===null)return!1;const r=Object.getPrototypeOf(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function kk(){const n=[],r={run:l,use:o};return r;function l(...s){let c=-1;const f=s.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);h(null,...s);function h(p,...m){const v=n[++c];let g=-1;if(p){f(p);return}for(;++g<s.length;)(m[g]===null||m[g]===void 0)&&(m[g]=s[g]);s=m,v?Ck(v,h)(...m):f(null,...m)}}function o(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return n.push(s),r}}function Ck(n,r){let l;return o;function o(...f){const h=n.length>f.length;let p;h&&f.push(s);try{p=n.apply(this,f)}catch(m){const v=m;if(h&&l)throw v;return s(v)}h||(p&&p.then&&typeof p.then=="function"?p.then(c,s):p instanceof Error?s(p):c(p))}function s(f,...h){l||(l=!0,r(f,...h))}function c(f){s(null,f)}}const dn={basename:Tk,dirname:wk,extname:Ek,join:Rk,sep:"/"};function Tk(n,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Yl(n);let l=0,o=-1,s=n.length,c;if(r===void 0||r.length===0||r.length>n.length){for(;s--;)if(n.codePointAt(s)===47){if(c){l=s+1;break}}else o<0&&(c=!0,o=s+1);return o<0?"":n.slice(l,o)}if(r===n)return"";let f=-1,h=r.length-1;for(;s--;)if(n.codePointAt(s)===47){if(c){l=s+1;break}}else f<0&&(c=!0,f=s+1),h>-1&&(n.codePointAt(s)===r.codePointAt(h--)?h<0&&(o=s):(h=-1,o=f));return l===o?o=f:o<0&&(o=n.length),n.slice(l,o)}function wk(n){if(Yl(n),n.length===0)return".";let r=-1,l=n.length,o;for(;--l;)if(n.codePointAt(l)===47){if(o){r=l;break}}else o||(o=!0);return r<0?n.codePointAt(0)===47?"/":".":r===1&&n.codePointAt(0)===47?"//":n.slice(0,r)}function Ek(n){Yl(n);let r=n.length,l=-1,o=0,s=-1,c=0,f;for(;r--;){const h=n.codePointAt(r);if(h===47){if(f){o=r+1;break}continue}l<0&&(f=!0,l=r+1),h===46?s<0?s=r:c!==1&&(c=1):s>-1&&(c=-1)}return s<0||l<0||c===0||c===1&&s===l-1&&s===o+1?"":n.slice(s,l)}function Rk(...n){let r=-1,l;for(;++r<n.length;)Yl(n[r]),n[r]&&(l=l===void 0?n[r]:l+"/"+n[r]);return l===void 0?".":Mk(l)}function Mk(n){Yl(n);const r=n.codePointAt(0)===47;let l=Dk(n,!r);return l.length===0&&!r&&(l="."),l.length>0&&n.codePointAt(n.length-1)===47&&(l+="/"),r?"/"+l:l}function Dk(n,r){let l="",o=0,s=-1,c=0,f=-1,h,p;for(;++f<=n.length;){if(f<n.length)h=n.codePointAt(f);else{if(h===47)break;h=47}if(h===47){if(!(s===f-1||c===1))if(s!==f-1&&c===2){if(l.length<2||o!==2||l.codePointAt(l.length-1)!==46||l.codePointAt(l.length-2)!==46){if(l.length>2){if(p=l.lastIndexOf("/"),p!==l.length-1){p<0?(l="",o=0):(l=l.slice(0,p),o=l.length-1-l.lastIndexOf("/")),s=f,c=0;continue}}else if(l.length>0){l="",o=0,s=f,c=0;continue}}r&&(l=l.length>0?l+"/..":"..",o=2)}else l.length>0?l+="/"+n.slice(s+1,f):l=n.slice(s+1,f),o=f-s-1;s=f,c=0}else h===46&&c>-1?c++:c=-1}return l}function Yl(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const zk={cwd:Ok};function Ok(){return"/"}function Mc(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function Lk(n){if(typeof n=="string")n=new URL(n);else if(!Mc(n)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(n.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return _k(n)}function _k(n){if(n.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const r=n.pathname;let l=-1;for(;++l<r.length;)if(r.codePointAt(l)===37&&r.codePointAt(l+1)===50){const o=r.codePointAt(l+2);if(o===70||o===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(r)}const oc=["history","path","basename","stem","extname","dirname"];class ty{constructor(r){let l;r?Mc(r)?l={path:r}:typeof r=="string"||Nk(r)?l={value:r}:l=r:l={},this.cwd="cwd"in l?"":zk.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<oc.length;){const c=oc[o];c in l&&l[c]!==void 0&&l[c]!==null&&(this[c]=c==="history"?[...l[c]]:l[c])}let s;for(s in l)oc.includes(s)||(this[s]=l[s])}get basename(){return typeof this.path=="string"?dn.basename(this.path):void 0}set basename(r){sc(r,"basename"),uc(r,"basename"),this.path=dn.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?dn.dirname(this.path):void 0}set dirname(r){Kp(this.basename,"dirname"),this.path=dn.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?dn.extname(this.path):void 0}set extname(r){if(uc(r,"extname"),Kp(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=dn.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){Mc(r)&&(r=Lk(r)),sc(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?dn.basename(this.path,this.extname):void 0}set stem(r){sc(r,"stem"),uc(r,"stem"),this.path=dn.join(this.dirname||"",r+(this.extname||""))}fail(r,l,o){const s=this.message(r,l,o);throw s.fatal=!0,s}info(r,l,o){const s=this.message(r,l,o);return s.fatal=void 0,s}message(r,l,o){const s=new gt(r,l,o);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function uc(n,r){if(n&&n.includes(dn.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+dn.sep+"`")}function sc(n,r){if(!n)throw new Error("`"+r+"` cannot be empty")}function Kp(n,r){if(!n)throw new Error("Setting `"+r+"` requires `path` to be set too")}function Nk(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const Ik=(function(n){const o=this.constructor.prototype,s=o[n],c=function(){return s.apply(c,arguments)};return Object.setPrototypeOf(c,o),c}),Bk={}.hasOwnProperty;class $c extends Ik{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=kk()}copy(){const r=new $c;let l=-1;for(;++l<this.attachers.length;){const o=this.attachers[l];r.use(...o)}return r.data(rc(!0,{},this.namespace)),r}data(r,l){return typeof r=="string"?arguments.length===2?(dc("data",this.frozen),this.namespace[r]=l,this):Bk.call(this.namespace,r)&&this.namespace[r]||void 0:r?(dc("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[l,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const s=l.call(r,...o);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const l=fo(r),o=this.parser||this.Parser;return cc("parse",o),o(String(l),l)}process(r,l){const o=this;return this.freeze(),cc("process",this.parser||this.Parser),fc("process",this.compiler||this.Compiler),l?s(void 0,l):new Promise(s);function s(c,f){const h=fo(r),p=o.parse(h);o.run(p,h,function(v,g,x){if(v||!g||!x)return m(v);const b=g,T=o.stringify(b,x);jk(T)?x.value=T:x.result=T,m(v,x)});function m(v,g){v||!g?f(v):c?c(g):l(void 0,g)}}}processSync(r){let l=!1,o;return this.freeze(),cc("processSync",this.parser||this.Parser),fc("processSync",this.compiler||this.Compiler),this.process(r,s),Qp("processSync","process",l),o;function s(c,f){l=!0,Vp(c),o=f}}run(r,l,o){Xp(r),this.freeze();const s=this.transformers;return!o&&typeof l=="function"&&(o=l,l=void 0),o?c(void 0,o):new Promise(c);function c(f,h){const p=fo(l);s.run(r,p,m);function m(v,g,x){const b=g||r;v?h(v):f?f(b):o(void 0,b,x)}}}runSync(r,l){let o=!1,s;return this.run(r,l,c),Qp("runSync","run",o),s;function c(f,h){Vp(f),s=h,o=!0}}stringify(r,l){this.freeze();const o=fo(l),s=this.compiler||this.Compiler;return fc("stringify",s),Xp(r),s(r,o)}use(r,...l){const o=this.attachers,s=this.namespace;if(dc("use",this.frozen),r!=null)if(typeof r=="function")p(r,l);else if(typeof r=="object")Array.isArray(r)?h(r):f(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function c(m){if(typeof m=="function")p(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[v,...g]=m;p(v,g)}else f(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function f(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");h(m.plugins),m.settings&&(s.settings=rc(!0,s.settings,m.settings))}function h(m){let v=-1;if(m!=null)if(Array.isArray(m))for(;++v<m.length;){const g=m[v];c(g)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function p(m,v){let g=-1,x=-1;for(;++g<o.length;)if(o[g][0]===m){x=g;break}if(x===-1)o.push([m,...v]);else if(v.length>0){let[b,...T]=v;const L=o[x][1];Rc(L)&&Rc(b)&&(b=rc(!0,L,b)),o[x]=[m,b,...T]}}}}const Uk=new $c().freeze();function cc(n,r){if(typeof r!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function fc(n,r){if(typeof r!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function dc(n,r){if(r)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Xp(n){if(!Rc(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function Qp(n,r,l){if(!l)throw new Error("`"+n+"` finished async. Use `"+r+"` instead")}function fo(n){return Hk(n)?n:new ty(n)}function Hk(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function jk(n){return typeof n=="string"||qk(n)}function qk(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const Yk="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Zp=[],Jp={allowDangerousHtml:!0},Gk=/^(https?|ircs?|mailto|xmpp)$/i,Fk=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Vk(n){const r=Pk(n),l=Kk(n);return Xk(r.runSync(r.parse(l),l),n)}function Pk(n){const r=n.rehypePlugins||Zp,l=n.remarkPlugins||Zp,o=n.remarkRehypeOptions?{...n.remarkRehypeOptions,...Jp}:Jp;return Uk().use(wA).use(l).use(Sk,o).use(r)}function Kk(n){const r=n.children||"",l=new ty;return typeof r=="string"&&(l.value=r),l}function Xk(n,r){const l=r.allowedElements,o=r.allowElement,s=r.components,c=r.disallowedElements,f=r.skipHtml,h=r.unwrapDisallowed,p=r.urlTransform||Qk;for(const v of Fk)Object.hasOwn(r,v.from)&&(""+v.from+(v.to?"use `"+v.to+"` instead":"remove it")+Yk+v.id,void 0);return Wc(n,m),sS(n,{Fragment:K.Fragment,components:s,ignoreInvalidStyle:!0,jsx:K.jsx,jsxs:K.jsxs,passKeys:!0,passNode:!0});function m(v,g,x){if(v.type==="raw"&&x&&typeof g=="number")return f?x.children.splice(g,1):x.children[g]={type:"text",value:v.value},g;if(v.type==="element"){let b;for(b in nc)if(Object.hasOwn(nc,b)&&Object.hasOwn(v.properties,b)){const T=v.properties[b],L=nc[b];(L===null||L.includes(v.tagName))&&(v.properties[b]=p(String(T||""),b,v))}}if(v.type==="element"){let b=l?!l.includes(v.tagName):c?c.includes(v.tagName):!1;if(!b&&o&&typeof g=="number"&&(b=!o(v,g,x)),b&&x&&typeof g=="number")return h&&v.children?x.children.splice(g,1,...v.children):x.children.splice(g,1),g}}}function Qk(n){const r=n.indexOf(":"),l=n.indexOf("?"),o=n.indexOf("#"),s=n.indexOf("/");return r===-1||s!==-1&&r>s||l!==-1&&r>l||o!==-1&&r>o||Gk.test(n.slice(0,r))?n:""}function Wp(n,r){const l=String(n);if(typeof r!="string")throw new TypeError("Expected character");let o=0,s=l.indexOf(r);for(;s!==-1;)o++,s=l.indexOf(r,s+r.length);return o}function Zk(n){if(typeof n!="string")throw new TypeError("Expected a string");return n.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Jk(n,r,l){const s=Mo((l||{}).ignore||[]),c=Wk(r);let f=-1;for(;++f<c.length;)ey(n,"text",h);function h(m,v){let g=-1,x;for(;++g<v.length;){const b=v[g],T=x?x.children:void 0;if(s(b,T?T.indexOf(b):void 0,x))return;x=b}if(x)return p(m,v)}function p(m,v){const g=v[v.length-1],x=c[f][0],b=c[f][1];let T=0;const O=g.children.indexOf(m);let R=!1,H=[];x.lastIndex=0;let B=x.exec(m.value);for(;B;){const ne=B.index,ae={index:B.index,input:B.input,stack:[...v,m]};let j=b(...B,ae);if(typeof j=="string"&&(j=j.length>0?{type:"text",value:j}:void 0),j===!1?x.lastIndex=ne+1:(T!==ne&&H.push({type:"text",value:m.value.slice(T,ne)}),Array.isArray(j)?H.push(...j):j&&H.push(j),T=ne+B[0].length,R=!0),!x.global)break;B=x.exec(m.value)}return R?(T<m.value.length&&H.push({type:"text",value:m.value.slice(T)}),g.children.splice(O,1,...H)):H=[m],O+H.length}}function Wk(n){const r=[];if(!Array.isArray(n))throw new TypeError("Expected find and replace tuple or list of tuples");const l=!n[0]||Array.isArray(n[0])?n:[n];let o=-1;for(;++o<l.length;){const s=l[o];r.push([$k(s[0]),eC(s[1])])}return r}function $k(n){return typeof n=="string"?new RegExp(Zk(n),"g"):n}function eC(n){return typeof n=="function"?n:function(){return n}}const mc="phrasing",hc=["autolink","link","image","label"];function tC(){return{transforms:[uC],enter:{literalAutolink:aC,literalAutolinkEmail:pc,literalAutolinkHttp:pc,literalAutolinkWww:pc},exit:{literalAutolink:oC,literalAutolinkEmail:rC,literalAutolinkHttp:iC,literalAutolinkWww:lC}}}function nC(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:mc,notInConstruct:hc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:mc,notInConstruct:hc},{character:":",before:"[ps]",after:"\\/",inConstruct:mc,notInConstruct:hc}]}}function aC(n){this.enter({type:"link",title:null,url:"",children:[]},n)}function pc(n){this.config.enter.autolinkProtocol.call(this,n)}function iC(n){this.config.exit.autolinkProtocol.call(this,n)}function lC(n){this.config.exit.data.call(this,n);const r=this.stack[this.stack.length-1];r.type,r.url="http://"+this.sliceSerialize(n)}function rC(n){this.config.exit.autolinkEmail.call(this,n)}function oC(n){this.exit(n)}function uC(n){Jk(n,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,sC],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),cC]],{ignore:["link","linkReference"]})}function sC(n,r,l,o,s){let c="";if(!ny(s)||(/^w/i.test(r)&&(l=r+l,r="",c="http://"),!fC(l)))return!1;const f=dC(l+o);if(!f[0])return!1;const h={type:"link",title:null,url:c+r+f[0],children:[{type:"text",value:r+f[0]}]};return f[1]?[h,{type:"text",value:f[1]}]:h}function cC(n,r,l,o){return!ny(o,!0)||/[-\d_]$/.test(l)?!1:{type:"link",title:null,url:"mailto:"+r+"@"+l,children:[{type:"text",value:r+"@"+l}]}}function fC(n){const r=n.split(".");return!(r.length<2||r[r.length-1]&&(/_/.test(r[r.length-1])||!/[a-zA-Z\d]/.test(r[r.length-1]))||r[r.length-2]&&(/_/.test(r[r.length-2])||!/[a-zA-Z\d]/.test(r[r.length-2])))}function dC(n){const r=/[!"&'),.:;<>?\]}]+$/.exec(n);if(!r)return[n,void 0];n=n.slice(0,r.index);let l=r[0],o=l.indexOf(")");const s=Wp(n,"(");let c=Wp(n,")");for(;o!==-1&&s>c;)n+=l.slice(0,o+1),l=l.slice(o+1),o=l.indexOf(")"),c++;return[n,l]}function ny(n,r){const l=n.input.charCodeAt(n.index-1);return(n.index===0||Oa(l)||wo(l))&&(!r||l!==47)}ay.peek=xC;function mC(){this.buffer()}function hC(n){this.enter({type:"footnoteReference",identifier:"",label:""},n)}function pC(){this.buffer()}function gC(n){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},n)}function yC(n){const r=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=rn(this.sliceSerialize(n)).toLowerCase(),l.label=r}function vC(n){this.exit(n)}function bC(n){const r=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=rn(this.sliceSerialize(n)).toLowerCase(),l.label=r}function SC(n){this.exit(n)}function xC(){return"["}function ay(n,r,l,o){const s=l.createTracker(o);let c=s.move("[^");const f=l.enter("footnoteReference"),h=l.enter("reference");return c+=s.move(l.safe(l.associationId(n),{after:"]",before:c})),h(),f(),c+=s.move("]"),c}function AC(){return{enter:{gfmFootnoteCallString:mC,gfmFootnoteCall:hC,gfmFootnoteDefinitionLabelString:pC,gfmFootnoteDefinition:gC},exit:{gfmFootnoteCallString:yC,gfmFootnoteCall:vC,gfmFootnoteDefinitionLabelString:bC,gfmFootnoteDefinition:SC}}}function kC(n){let r=!1;return n&&n.firstLineBlank&&(r=!0),{handlers:{footnoteDefinition:l,footnoteReference:ay},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function l(o,s,c,f){const h=c.createTracker(f);let p=h.move("[^");const m=c.enter("footnoteDefinition"),v=c.enter("label");return p+=h.move(c.safe(c.associationId(o),{before:p,after:"]"})),v(),p+=h.move("]:"),o.children&&o.children.length>0&&(h.shift(4),p+=h.move((r?`
`:" ")+c.indentLines(c.containerFlow(o,h.current()),r?iy:CC))),m(),p}}function CC(n,r,l){return r===0?n:iy(n,r,l)}function iy(n,r,l){return(l?"":"    ")+n}const TC=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];ly.peek=DC;function wC(){return{canContainEols:["delete"],enter:{strikethrough:RC},exit:{strikethrough:MC}}}function EC(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:TC}],handlers:{delete:ly}}}function RC(n){this.enter({type:"delete",children:[]},n)}function MC(n){this.exit(n)}function ly(n,r,l,o){const s=l.createTracker(o),c=l.enter("strikethrough");let f=s.move("~~");return f+=l.containerPhrasing(n,{...s.current(),before:f,after:"~"}),f+=s.move("~~"),c(),f}function DC(){return"~"}function zC(n){return n.length}function OC(n,r){const l=r||{},o=(l.align||[]).concat(),s=l.stringLength||zC,c=[],f=[],h=[],p=[];let m=0,v=-1;for(;++v<n.length;){const L=[],O=[];let R=-1;for(n[v].length>m&&(m=n[v].length);++R<n[v].length;){const H=LC(n[v][R]);if(l.alignDelimiters!==!1){const B=s(H);O[R]=B,(p[R]===void 0||B>p[R])&&(p[R]=B)}L.push(H)}f[v]=L,h[v]=O}let g=-1;if(typeof o=="object"&&"length"in o)for(;++g<m;)c[g]=$p(o[g]);else{const L=$p(o);for(;++g<m;)c[g]=L}g=-1;const x=[],b=[];for(;++g<m;){const L=c[g];let O="",R="";L===99?(O=":",R=":"):L===108?O=":":L===114&&(R=":");let H=l.alignDelimiters===!1?1:Math.max(1,p[g]-O.length-R.length);const B=O+"-".repeat(H)+R;l.alignDelimiters!==!1&&(H=O.length+H+R.length,H>p[g]&&(p[g]=H),b[g]=H),x[g]=B}f.splice(1,0,x),h.splice(1,0,b),v=-1;const T=[];for(;++v<f.length;){const L=f[v],O=h[v];g=-1;const R=[];for(;++g<m;){const H=L[g]||"";let B="",ne="";if(l.alignDelimiters!==!1){const ae=p[g]-(O[g]||0),j=c[g];j===114?B=" ".repeat(ae):j===99?ae%2?(B=" ".repeat(ae/2+.5),ne=" ".repeat(ae/2-.5)):(B=" ".repeat(ae/2),ne=B):ne=" ".repeat(ae)}l.delimiterStart!==!1&&!g&&R.push("|"),l.padding!==!1&&!(l.alignDelimiters===!1&&H==="")&&(l.delimiterStart!==!1||g)&&R.push(" "),l.alignDelimiters!==!1&&R.push(B),R.push(H),l.alignDelimiters!==!1&&R.push(ne),l.padding!==!1&&R.push(" "),(l.delimiterEnd!==!1||g!==m-1)&&R.push("|")}T.push(l.delimiterEnd===!1?R.join("").replace(/ +$/,""):R.join(""))}return T.join(`
`)}function LC(n){return n==null?"":String(n)}function $p(n){const r=typeof n=="string"?n.codePointAt(0):0;return r===67||r===99?99:r===76||r===108?108:r===82||r===114?114:0}function _C(n,r,l,o){const s=l.enter("blockquote"),c=l.createTracker(o);c.move("> "),c.shift(2);const f=l.indentLines(l.containerFlow(n,c.current()),NC);return s(),f}function NC(n,r,l){return">"+(l?"":" ")+n}function IC(n,r){return eg(n,r.inConstruct,!0)&&!eg(n,r.notInConstruct,!1)}function eg(n,r,l){if(typeof r=="string"&&(r=[r]),!r||r.length===0)return l;let o=-1;for(;++o<r.length;)if(n.includes(r[o]))return!0;return!1}function tg(n,r,l,o){let s=-1;for(;++s<l.unsafe.length;)if(l.unsafe[s].character===`
`&&IC(l.stack,l.unsafe[s]))return/[ \t]/.test(o.before)?"":" ";return`\\
`}function BC(n,r){const l=String(n);let o=l.indexOf(r),s=o,c=0,f=0;if(typeof r!="string")throw new TypeError("Expected substring");for(;o!==-1;)o===s?++c>f&&(f=c):c=1,s=o+r.length,o=l.indexOf(r,s);return f}function UC(n,r){return!!(r.options.fences===!1&&n.value&&!n.lang&&/[^ \r\n]/.test(n.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(n.value))}function HC(n){const r=n.options.fence||"`";if(r!=="`"&&r!=="~")throw new Error("Cannot serialize code with `"+r+"` for `options.fence`, expected `` ` `` or `~`");return r}function jC(n,r,l,o){const s=HC(l),c=n.value||"",f=s==="`"?"GraveAccent":"Tilde";if(UC(n,l)){const g=l.enter("codeIndented"),x=l.indentLines(c,qC);return g(),x}const h=l.createTracker(o),p=s.repeat(Math.max(BC(c,s)+1,3)),m=l.enter("codeFenced");let v=h.move(p);if(n.lang){const g=l.enter(`codeFencedLang${f}`);v+=h.move(l.safe(n.lang,{before:v,after:" ",encode:["`"],...h.current()})),g()}if(n.lang&&n.meta){const g=l.enter(`codeFencedMeta${f}`);v+=h.move(" "),v+=h.move(l.safe(n.meta,{before:v,after:`
`,encode:["`"],...h.current()})),g()}return v+=h.move(`
`),c&&(v+=h.move(c+`
`)),v+=h.move(p),m(),v}function qC(n,r,l){return(l?"":"    ")+n}function ef(n){const r=n.options.quote||'"';if(r!=='"'&&r!=="'")throw new Error("Cannot serialize title with `"+r+"` for `options.quote`, expected `\"`, or `'`");return r}function YC(n,r,l,o){const s=ef(l),c=s==='"'?"Quote":"Apostrophe",f=l.enter("definition");let h=l.enter("label");const p=l.createTracker(o);let m=p.move("[");return m+=p.move(l.safe(l.associationId(n),{before:m,after:"]",...p.current()})),m+=p.move("]: "),h(),!n.url||/[\0- \u007F]/.test(n.url)?(h=l.enter("destinationLiteral"),m+=p.move("<"),m+=p.move(l.safe(n.url,{before:m,after:">",...p.current()})),m+=p.move(">")):(h=l.enter("destinationRaw"),m+=p.move(l.safe(n.url,{before:m,after:n.title?" ":`
`,...p.current()}))),h(),n.title&&(h=l.enter(`title${c}`),m+=p.move(" "+s),m+=p.move(l.safe(n.title,{before:m,after:s,...p.current()})),m+=p.move(s),h()),f(),m}function GC(n){const r=n.options.emphasis||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize emphasis with `"+r+"` for `options.emphasis`, expected `*`, or `_`");return r}function Bl(n){return"&#x"+n.toString(16).toUpperCase()+";"}function Ao(n,r,l){const o=wi(n),s=wi(r);return o===void 0?s===void 0?l==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:o===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}ry.peek=FC;function ry(n,r,l,o){const s=GC(l),c=l.enter("emphasis"),f=l.createTracker(o),h=f.move(s);let p=f.move(l.containerPhrasing(n,{after:s,before:h,...f.current()}));const m=p.charCodeAt(0),v=Ao(o.before.charCodeAt(o.before.length-1),m,s);v.inside&&(p=Bl(m)+p.slice(1));const g=p.charCodeAt(p.length-1),x=Ao(o.after.charCodeAt(0),g,s);x.inside&&(p=p.slice(0,-1)+Bl(g));const b=f.move(s);return c(),l.attentionEncodeSurroundingInfo={after:x.outside,before:v.outside},h+p+b}function FC(n,r,l){return l.options.emphasis||"*"}function VC(n,r){let l=!1;return Wc(n,function(o){if("value"in o&&/\r?\n|\r/.test(o.value)||o.type==="break")return l=!0,wc}),!!((!n.depth||n.depth<3)&&Vc(n)&&(r.options.setext||l))}function PC(n,r,l,o){const s=Math.max(Math.min(6,n.depth||1),1),c=l.createTracker(o);if(VC(n,l)){const v=l.enter("headingSetext"),g=l.enter("phrasing"),x=l.containerPhrasing(n,{...c.current(),before:`
`,after:`
`});return g(),v(),x+`
`+(s===1?"=":"-").repeat(x.length-(Math.max(x.lastIndexOf("\r"),x.lastIndexOf(`
`))+1))}const f="#".repeat(s),h=l.enter("headingAtx"),p=l.enter("phrasing");c.move(f+" ");let m=l.containerPhrasing(n,{before:"# ",after:`
`,...c.current()});return/^[\t ]/.test(m)&&(m=Bl(m.charCodeAt(0))+m.slice(1)),m=m?f+" "+m:f,l.options.closeAtx&&(m+=" "+f),p(),h(),m}oy.peek=KC;function oy(n){return n.value||""}function KC(){return"<"}uy.peek=XC;function uy(n,r,l,o){const s=ef(l),c=s==='"'?"Quote":"Apostrophe",f=l.enter("image");let h=l.enter("label");const p=l.createTracker(o);let m=p.move("![");return m+=p.move(l.safe(n.alt,{before:m,after:"]",...p.current()})),m+=p.move("]("),h(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(h=l.enter("destinationLiteral"),m+=p.move("<"),m+=p.move(l.safe(n.url,{before:m,after:">",...p.current()})),m+=p.move(">")):(h=l.enter("destinationRaw"),m+=p.move(l.safe(n.url,{before:m,after:n.title?" ":")",...p.current()}))),h(),n.title&&(h=l.enter(`title${c}`),m+=p.move(" "+s),m+=p.move(l.safe(n.title,{before:m,after:s,...p.current()})),m+=p.move(s),h()),m+=p.move(")"),f(),m}function XC(){return"!"}sy.peek=QC;function sy(n,r,l,o){const s=n.referenceType,c=l.enter("imageReference");let f=l.enter("label");const h=l.createTracker(o);let p=h.move("![");const m=l.safe(n.alt,{before:p,after:"]",...h.current()});p+=h.move(m+"]["),f();const v=l.stack;l.stack=[],f=l.enter("reference");const g=l.safe(l.associationId(n),{before:p,after:"]",...h.current()});return f(),l.stack=v,c(),s==="full"||!m||m!==g?p+=h.move(g+"]"):s==="shortcut"?p=p.slice(0,-1):p+=h.move("]"),p}function QC(){return"!"}cy.peek=ZC;function cy(n,r,l){let o=n.value||"",s="`",c=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(o);)s+="`";for(/[^ \r\n]/.test(o)&&(/^[ \r\n]/.test(o)&&/[ \r\n]$/.test(o)||/^`|`$/.test(o))&&(o=" "+o+" ");++c<l.unsafe.length;){const f=l.unsafe[c],h=l.compilePattern(f);let p;if(f.atBreak)for(;p=h.exec(o);){let m=p.index;o.charCodeAt(m)===10&&o.charCodeAt(m-1)===13&&m--,o=o.slice(0,m)+" "+o.slice(p.index+1)}}return s+o+s}function ZC(){return"`"}function fy(n,r){const l=Vc(n);return!!(!r.options.resourceLink&&n.url&&!n.title&&n.children&&n.children.length===1&&n.children[0].type==="text"&&(l===n.url||"mailto:"+l===n.url)&&/^[a-z][a-z+.-]+:/i.test(n.url)&&!/[\0- <>\u007F]/.test(n.url))}dy.peek=JC;function dy(n,r,l,o){const s=ef(l),c=s==='"'?"Quote":"Apostrophe",f=l.createTracker(o);let h,p;if(fy(n,l)){const v=l.stack;l.stack=[],h=l.enter("autolink");let g=f.move("<");return g+=f.move(l.containerPhrasing(n,{before:g,after:">",...f.current()})),g+=f.move(">"),h(),l.stack=v,g}h=l.enter("link"),p=l.enter("label");let m=f.move("[");return m+=f.move(l.containerPhrasing(n,{before:m,after:"](",...f.current()})),m+=f.move("]("),p(),!n.url&&n.title||/[\0- \u007F]/.test(n.url)?(p=l.enter("destinationLiteral"),m+=f.move("<"),m+=f.move(l.safe(n.url,{before:m,after:">",...f.current()})),m+=f.move(">")):(p=l.enter("destinationRaw"),m+=f.move(l.safe(n.url,{before:m,after:n.title?" ":")",...f.current()}))),p(),n.title&&(p=l.enter(`title${c}`),m+=f.move(" "+s),m+=f.move(l.safe(n.title,{before:m,after:s,...f.current()})),m+=f.move(s),p()),m+=f.move(")"),h(),m}function JC(n,r,l){return fy(n,l)?"<":"["}my.peek=WC;function my(n,r,l,o){const s=n.referenceType,c=l.enter("linkReference");let f=l.enter("label");const h=l.createTracker(o);let p=h.move("[");const m=l.containerPhrasing(n,{before:p,after:"]",...h.current()});p+=h.move(m+"]["),f();const v=l.stack;l.stack=[],f=l.enter("reference");const g=l.safe(l.associationId(n),{before:p,after:"]",...h.current()});return f(),l.stack=v,c(),s==="full"||!m||m!==g?p+=h.move(g+"]"):s==="shortcut"?p=p.slice(0,-1):p+=h.move("]"),p}function WC(){return"["}function tf(n){const r=n.options.bullet||"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bullet`, expected `*`, `+`, or `-`");return r}function $C(n){const r=tf(n),l=n.options.bulletOther;if(!l)return r==="*"?"-":"*";if(l!=="*"&&l!=="+"&&l!=="-")throw new Error("Cannot serialize items with `"+l+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(l===r)throw new Error("Expected `bullet` (`"+r+"`) and `bulletOther` (`"+l+"`) to be different");return l}function eT(n){const r=n.options.bulletOrdered||".";if(r!=="."&&r!==")")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOrdered`, expected `.` or `)`");return r}function hy(n){const r=n.options.rule||"*";if(r!=="*"&&r!=="-"&&r!=="_")throw new Error("Cannot serialize rules with `"+r+"` for `options.rule`, expected `*`, `-`, or `_`");return r}function tT(n,r,l,o){const s=l.enter("list"),c=l.bulletCurrent;let f=n.ordered?eT(l):tf(l);const h=n.ordered?f==="."?")":".":$C(l);let p=r&&l.bulletLastUsed?f===l.bulletLastUsed:!1;if(!n.ordered){const v=n.children?n.children[0]:void 0;if((f==="*"||f==="-")&&v&&(!v.children||!v.children[0])&&l.stack[l.stack.length-1]==="list"&&l.stack[l.stack.length-2]==="listItem"&&l.stack[l.stack.length-3]==="list"&&l.stack[l.stack.length-4]==="listItem"&&l.indexStack[l.indexStack.length-1]===0&&l.indexStack[l.indexStack.length-2]===0&&l.indexStack[l.indexStack.length-3]===0&&(p=!0),hy(l)===f&&v){let g=-1;for(;++g<n.children.length;){const x=n.children[g];if(x&&x.type==="listItem"&&x.children&&x.children[0]&&x.children[0].type==="thematicBreak"){p=!0;break}}}}p&&(f=h),l.bulletCurrent=f;const m=l.containerFlow(n,o);return l.bulletLastUsed=f,l.bulletCurrent=c,s(),m}function nT(n){const r=n.options.listItemIndent||"one";if(r!=="tab"&&r!=="one"&&r!=="mixed")throw new Error("Cannot serialize items with `"+r+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return r}function aT(n,r,l,o){const s=nT(l);let c=l.bulletCurrent||tf(l);r&&r.type==="list"&&r.ordered&&(c=(typeof r.start=="number"&&r.start>-1?r.start:1)+(l.options.incrementListMarker===!1?0:r.children.indexOf(n))+c);let f=c.length+1;(s==="tab"||s==="mixed"&&(r&&r.type==="list"&&r.spread||n.spread))&&(f=Math.ceil(f/4)*4);const h=l.createTracker(o);h.move(c+" ".repeat(f-c.length)),h.shift(f);const p=l.enter("listItem"),m=l.indentLines(l.containerFlow(n,h.current()),v);return p(),m;function v(g,x,b){return x?(b?"":" ".repeat(f))+g:(b?c:c+" ".repeat(f-c.length))+g}}function iT(n,r,l,o){const s=l.enter("paragraph"),c=l.enter("phrasing"),f=l.containerPhrasing(n,o);return c(),s(),f}const lT=Mo(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function rT(n,r,l,o){return(n.children.some(function(f){return lT(f)})?l.containerPhrasing:l.containerFlow).call(l,n,o)}function oT(n){const r=n.options.strong||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize strong with `"+r+"` for `options.strong`, expected `*`, or `_`");return r}py.peek=uT;function py(n,r,l,o){const s=oT(l),c=l.enter("strong"),f=l.createTracker(o),h=f.move(s+s);let p=f.move(l.containerPhrasing(n,{after:s,before:h,...f.current()}));const m=p.charCodeAt(0),v=Ao(o.before.charCodeAt(o.before.length-1),m,s);v.inside&&(p=Bl(m)+p.slice(1));const g=p.charCodeAt(p.length-1),x=Ao(o.after.charCodeAt(0),g,s);x.inside&&(p=p.slice(0,-1)+Bl(g));const b=f.move(s+s);return c(),l.attentionEncodeSurroundingInfo={after:x.outside,before:v.outside},h+p+b}function uT(n,r,l){return l.options.strong||"*"}function sT(n,r,l,o){return l.safe(n.value,o)}function cT(n){const r=n.options.ruleRepetition||3;if(r<3)throw new Error("Cannot serialize rules with repetition `"+r+"` for `options.ruleRepetition`, expected `3` or more");return r}function fT(n,r,l){const o=(hy(l)+(l.options.ruleSpaces?" ":"")).repeat(cT(l));return l.options.ruleSpaces?o.slice(0,-1):o}const gy={blockquote:_C,break:tg,code:jC,definition:YC,emphasis:ry,hardBreak:tg,heading:PC,html:oy,image:uy,imageReference:sy,inlineCode:cy,link:dy,linkReference:my,list:tT,listItem:aT,paragraph:iT,root:rT,strong:py,text:sT,thematicBreak:fT};function dT(){return{enter:{table:mT,tableData:ng,tableHeader:ng,tableRow:pT},exit:{codeText:gT,table:hT,tableData:gc,tableHeader:gc,tableRow:gc}}}function mT(n){const r=n._align;this.enter({type:"table",align:r.map(function(l){return l==="none"?null:l}),children:[]},n),this.data.inTable=!0}function hT(n){this.exit(n),this.data.inTable=void 0}function pT(n){this.enter({type:"tableRow",children:[]},n)}function gc(n){this.exit(n)}function ng(n){this.enter({type:"tableCell",children:[]},n)}function gT(n){let r=this.resume();this.data.inTable&&(r=r.replace(/\\([\\|])/g,yT));const l=this.stack[this.stack.length-1];l.type,l.value=r,this.exit(n)}function yT(n,r){return r==="|"?r:n}function vT(n){const r=n||{},l=r.tableCellPadding,o=r.tablePipeAlign,s=r.stringLength,c=l?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:x,table:f,tableCell:p,tableRow:h}};function f(b,T,L,O){return m(v(b,L,O),b.align)}function h(b,T,L,O){const R=g(b,L,O),H=m([R]);return H.slice(0,H.indexOf(`
`))}function p(b,T,L,O){const R=L.enter("tableCell"),H=L.enter("phrasing"),B=L.containerPhrasing(b,{...O,before:c,after:c});return H(),R(),B}function m(b,T){return OC(b,{align:T,alignDelimiters:o,padding:l,stringLength:s})}function v(b,T,L){const O=b.children;let R=-1;const H=[],B=T.enter("table");for(;++R<O.length;)H[R]=g(O[R],T,L);return B(),H}function g(b,T,L){const O=b.children;let R=-1;const H=[],B=T.enter("tableRow");for(;++R<O.length;)H[R]=p(O[R],b,T,L);return B(),H}function x(b,T,L){let O=gy.inlineCode(b,T,L);return L.stack.includes("tableCell")&&(O=O.replace(/\|/g,"\\$&")),O}}function bT(){return{exit:{taskListCheckValueChecked:ag,taskListCheckValueUnchecked:ag,paragraph:xT}}}function ST(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:AT}}}function ag(n){const r=this.stack[this.stack.length-2];r.type,r.checked=n.type==="taskListCheckValueChecked"}function xT(n){const r=this.stack[this.stack.length-2];if(r&&r.type==="listItem"&&typeof r.checked=="boolean"){const l=this.stack[this.stack.length-1];l.type;const o=l.children[0];if(o&&o.type==="text"){const s=r.children;let c=-1,f;for(;++c<s.length;){const h=s[c];if(h.type==="paragraph"){f=h;break}}f===l&&(o.value=o.value.slice(1),o.value.length===0?l.children.shift():l.position&&o.position&&typeof o.position.start.offset=="number"&&(o.position.start.column++,o.position.start.offset++,l.position.start=Object.assign({},o.position.start)))}}this.exit(n)}function AT(n,r,l,o){const s=n.children[0],c=typeof n.checked=="boolean"&&s&&s.type==="paragraph",f="["+(n.checked?"x":" ")+"] ",h=l.createTracker(o);c&&h.move(f);let p=gy.listItem(n,r,l,{...o,...h.current()});return c&&(p=p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,m)),p;function m(v){return v+f}}function kT(){return[tC(),AC(),wC(),dT(),bT()]}function CT(n){return{extensions:[nC(),kC(n),EC(),vT(n),ST()]}}const TT={tokenize:zT,partial:!0},yy={tokenize:OT,partial:!0},vy={tokenize:LT,partial:!0},by={tokenize:_T,partial:!0},wT={tokenize:NT,partial:!0},Sy={name:"wwwAutolink",tokenize:MT,previous:Ay},xy={name:"protocolAutolink",tokenize:DT,previous:ky},Un={name:"emailAutolink",tokenize:RT,previous:Cy},mn={};function ET(){return{text:mn}}let za=48;for(;za<123;)mn[za]=Un,za++,za===58?za=65:za===91&&(za=97);mn[43]=Un;mn[45]=Un;mn[46]=Un;mn[95]=Un;mn[72]=[Un,xy];mn[104]=[Un,xy];mn[87]=[Un,Sy];mn[119]=[Un,Sy];function RT(n,r,l){const o=this;let s,c;return f;function f(g){return!Dc(g)||!Cy.call(o,o.previous)||nf(o.events)?l(g):(n.enter("literalAutolink"),n.enter("literalAutolinkEmail"),h(g))}function h(g){return Dc(g)?(n.consume(g),h):g===64?(n.consume(g),p):l(g)}function p(g){return g===46?n.check(wT,v,m)(g):g===45||g===95||pt(g)?(c=!0,n.consume(g),p):v(g)}function m(g){return n.consume(g),s=!0,p}function v(g){return c&&s&&St(o.previous)?(n.exit("literalAutolinkEmail"),n.exit("literalAutolink"),r(g)):l(g)}}function MT(n,r,l){const o=this;return s;function s(f){return f!==87&&f!==119||!Ay.call(o,o.previous)||nf(o.events)?l(f):(n.enter("literalAutolink"),n.enter("literalAutolinkWww"),n.check(TT,n.attempt(yy,n.attempt(vy,c),l),l)(f))}function c(f){return n.exit("literalAutolinkWww"),n.exit("literalAutolink"),r(f)}}function DT(n,r,l){const o=this;let s="",c=!1;return f;function f(g){return(g===72||g===104)&&ky.call(o,o.previous)&&!nf(o.events)?(n.enter("literalAutolink"),n.enter("literalAutolinkHttp"),s+=String.fromCodePoint(g),n.consume(g),h):l(g)}function h(g){if(St(g)&&s.length<5)return s+=String.fromCodePoint(g),n.consume(g),h;if(g===58){const x=s.toLowerCase();if(x==="http"||x==="https")return n.consume(g),p}return l(g)}function p(g){return g===47?(n.consume(g),c?m:(c=!0,p)):l(g)}function m(g){return g===null||bo(g)||Ge(g)||Oa(g)||wo(g)?l(g):n.attempt(yy,n.attempt(vy,v),l)(g)}function v(g){return n.exit("literalAutolinkHttp"),n.exit("literalAutolink"),r(g)}}function zT(n,r,l){let o=0;return s;function s(f){return(f===87||f===119)&&o<3?(o++,n.consume(f),s):f===46&&o===3?(n.consume(f),c):l(f)}function c(f){return f===null?l(f):r(f)}}function OT(n,r,l){let o,s,c;return f;function f(m){return m===46||m===95?n.check(by,p,h)(m):m===null||Ge(m)||Oa(m)||m!==45&&wo(m)?p(m):(c=!0,n.consume(m),f)}function h(m){return m===95?o=!0:(s=o,o=void 0),n.consume(m),f}function p(m){return s||o||!c?l(m):r(m)}}function LT(n,r){let l=0,o=0;return s;function s(f){return f===40?(l++,n.consume(f),s):f===41&&o<l?c(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?n.check(by,r,c)(f):f===null||Ge(f)||Oa(f)?r(f):(n.consume(f),s)}function c(f){return f===41&&o++,n.consume(f),s}}function _T(n,r,l){return o;function o(h){return h===33||h===34||h===39||h===41||h===42||h===44||h===46||h===58||h===59||h===63||h===95||h===126?(n.consume(h),o):h===38?(n.consume(h),c):h===93?(n.consume(h),s):h===60||h===null||Ge(h)||Oa(h)?r(h):l(h)}function s(h){return h===null||h===40||h===91||Ge(h)||Oa(h)?r(h):o(h)}function c(h){return St(h)?f(h):l(h)}function f(h){return h===59?(n.consume(h),o):St(h)?(n.consume(h),f):l(h)}}function NT(n,r,l){return o;function o(c){return n.consume(c),s}function s(c){return pt(c)?l(c):r(c)}}function Ay(n){return n===null||n===40||n===42||n===95||n===91||n===93||n===126||Ge(n)}function ky(n){return!St(n)}function Cy(n){return!(n===47||Dc(n))}function Dc(n){return n===43||n===45||n===46||n===95||pt(n)}function nf(n){let r=n.length,l=!1;for(;r--;){const o=n[r][1];if((o.type==="labelLink"||o.type==="labelImage")&&!o._balanced){l=!0;break}if(o._gfmAutolinkLiteralWalkedInto){l=!1;break}}return n.length>0&&!l&&(n[n.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),l}const IT={tokenize:FT,partial:!0};function BT(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:qT,continuation:{tokenize:YT},exit:GT}},text:{91:{name:"gfmFootnoteCall",tokenize:jT},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:UT,resolveTo:HT}}}}function UT(n,r,l){const o=this;let s=o.events.length;const c=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let f;for(;s--;){const p=o.events[s][1];if(p.type==="labelImage"){f=p;break}if(p.type==="gfmFootnoteCall"||p.type==="labelLink"||p.type==="label"||p.type==="image"||p.type==="link")break}return h;function h(p){if(!f||!f._balanced)return l(p);const m=rn(o.sliceSerialize({start:f.end,end:o.now()}));return m.codePointAt(0)!==94||!c.includes(m.slice(1))?l(p):(n.enter("gfmFootnoteCallLabelMarker"),n.consume(p),n.exit("gfmFootnoteCallLabelMarker"),r(p))}}function HT(n,r){let l=n.length;for(;l--;)if(n[l][1].type==="labelImage"&&n[l][0]==="enter"){n[l][1];break}n[l+1][1].type="data",n[l+3][1].type="gfmFootnoteCallLabelMarker";const o={type:"gfmFootnoteCall",start:Object.assign({},n[l+3][1].start),end:Object.assign({},n[n.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},n[l+3][1].end),end:Object.assign({},n[l+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const c={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},n[n.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},c.start),end:Object.assign({},c.end)},h=[n[l+1],n[l+2],["enter",o,r],n[l+3],n[l+4],["enter",s,r],["exit",s,r],["enter",c,r],["enter",f,r],["exit",f,r],["exit",c,r],n[n.length-2],n[n.length-1],["exit",o,r]];return n.splice(l,n.length-l+1,...h),n}function jT(n,r,l){const o=this,s=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let c=0,f;return h;function h(g){return n.enter("gfmFootnoteCall"),n.enter("gfmFootnoteCallLabelMarker"),n.consume(g),n.exit("gfmFootnoteCallLabelMarker"),p}function p(g){return g!==94?l(g):(n.enter("gfmFootnoteCallMarker"),n.consume(g),n.exit("gfmFootnoteCallMarker"),n.enter("gfmFootnoteCallString"),n.enter("chunkString").contentType="string",m)}function m(g){if(c>999||g===93&&!f||g===null||g===91||Ge(g))return l(g);if(g===93){n.exit("chunkString");const x=n.exit("gfmFootnoteCallString");return s.includes(rn(o.sliceSerialize(x)))?(n.enter("gfmFootnoteCallLabelMarker"),n.consume(g),n.exit("gfmFootnoteCallLabelMarker"),n.exit("gfmFootnoteCall"),r):l(g)}return Ge(g)||(f=!0),c++,n.consume(g),g===92?v:m}function v(g){return g===91||g===92||g===93?(n.consume(g),c++,m):m(g)}}function qT(n,r,l){const o=this,s=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let c,f=0,h;return p;function p(T){return n.enter("gfmFootnoteDefinition")._container=!0,n.enter("gfmFootnoteDefinitionLabel"),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(T),n.exit("gfmFootnoteDefinitionLabelMarker"),m}function m(T){return T===94?(n.enter("gfmFootnoteDefinitionMarker"),n.consume(T),n.exit("gfmFootnoteDefinitionMarker"),n.enter("gfmFootnoteDefinitionLabelString"),n.enter("chunkString").contentType="string",v):l(T)}function v(T){if(f>999||T===93&&!h||T===null||T===91||Ge(T))return l(T);if(T===93){n.exit("chunkString");const L=n.exit("gfmFootnoteDefinitionLabelString");return c=rn(o.sliceSerialize(L)),n.enter("gfmFootnoteDefinitionLabelMarker"),n.consume(T),n.exit("gfmFootnoteDefinitionLabelMarker"),n.exit("gfmFootnoteDefinitionLabel"),x}return Ge(T)||(h=!0),f++,n.consume(T),T===92?g:v}function g(T){return T===91||T===92||T===93?(n.consume(T),f++,v):v(T)}function x(T){return T===58?(n.enter("definitionMarker"),n.consume(T),n.exit("definitionMarker"),s.includes(c)||s.push(c),De(n,b,"gfmFootnoteDefinitionWhitespace")):l(T)}function b(T){return r(T)}}function YT(n,r,l){return n.check(ql,r,n.attempt(IT,r,l))}function GT(n){n.exit("gfmFootnoteDefinition")}function FT(n,r,l){const o=this;return De(n,s,"gfmFootnoteDefinitionIndent",5);function s(c){const f=o.events[o.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?r(c):l(c)}}function VT(n){let l=(n||{}).singleTilde;const o={name:"strikethrough",tokenize:c,resolveAll:s};return l==null&&(l=!0),{text:{126:o},insideSpan:{null:[o]},attentionMarkers:{null:[126]}};function s(f,h){let p=-1;for(;++p<f.length;)if(f[p][0]==="enter"&&f[p][1].type==="strikethroughSequenceTemporary"&&f[p][1]._close){let m=p;for(;m--;)if(f[m][0]==="exit"&&f[m][1].type==="strikethroughSequenceTemporary"&&f[m][1]._open&&f[p][1].end.offset-f[p][1].start.offset===f[m][1].end.offset-f[m][1].start.offset){f[p][1].type="strikethroughSequence",f[m][1].type="strikethroughSequence";const v={type:"strikethrough",start:Object.assign({},f[m][1].start),end:Object.assign({},f[p][1].end)},g={type:"strikethroughText",start:Object.assign({},f[m][1].end),end:Object.assign({},f[p][1].start)},x=[["enter",v,h],["enter",f[m][1],h],["exit",f[m][1],h],["enter",g,h]],b=h.parser.constructs.insideSpan.null;b&&jt(x,x.length,0,Eo(b,f.slice(m+1,p),h)),jt(x,x.length,0,[["exit",g,h],["enter",f[p][1],h],["exit",f[p][1],h],["exit",v,h]]),jt(f,m-1,p-m+3,x),p=m+x.length-2;break}}for(p=-1;++p<f.length;)f[p][1].type==="strikethroughSequenceTemporary"&&(f[p][1].type="data");return f}function c(f,h,p){const m=this.previous,v=this.events;let g=0;return x;function x(T){return m===126&&v[v.length-1][1].type!=="characterEscape"?p(T):(f.enter("strikethroughSequenceTemporary"),b(T))}function b(T){const L=wi(m);if(T===126)return g>1?p(T):(f.consume(T),g++,b);if(g<2&&!l)return p(T);const O=f.exit("strikethroughSequenceTemporary"),R=wi(T);return O._open=!R||R===2&&!!L,O._close=!L||L===2&&!!R,h(T)}}}class PT{constructor(){this.map=[]}add(r,l,o){KT(this,r,l,o)}consume(r){if(this.map.sort(function(c,f){return c[0]-f[0]}),this.map.length===0)return;let l=this.map.length;const o=[];for(;l>0;)l-=1,o.push(r.slice(this.map[l][0]+this.map[l][1]),this.map[l][2]),r.length=this.map[l][0];o.push(r.slice()),r.length=0;let s=o.pop();for(;s;){for(const c of s)r.push(c);s=o.pop()}this.map.length=0}}function KT(n,r,l,o){let s=0;if(!(l===0&&o.length===0)){for(;s<n.map.length;){if(n.map[s][0]===r){n.map[s][1]+=l,n.map[s][2].push(...o);return}s+=1}n.map.push([r,l,o])}}function XT(n,r){let l=!1;const o=[];for(;r<n.length;){const s=n[r];if(l){if(s[0]==="enter")s[1].type==="tableContent"&&o.push(n[r+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(n[r-1][1].type==="tableDelimiterMarker"){const c=o.length-1;o[c]=o[c]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(l=!0);r+=1}return o}function QT(){return{flow:{null:{name:"table",tokenize:ZT,resolveAll:JT}}}}function ZT(n,r,l){const o=this;let s=0,c=0,f;return h;function h(I){let $=o.events.length-1;for(;$>-1;){const le=o.events[$][1].type;if(le==="lineEnding"||le==="linePrefix")$--;else break}const ee=$>-1?o.events[$][1].type:null,xe=ee==="tableHead"||ee==="tableRow"?j:p;return xe===j&&o.parser.lazy[o.now().line]?l(I):xe(I)}function p(I){return n.enter("tableHead"),n.enter("tableRow"),m(I)}function m(I){return I===124||(f=!0,c+=1),v(I)}function v(I){return I===null?l(I):ce(I)?c>1?(c=0,o.interrupt=!0,n.exit("tableRow"),n.enter("lineEnding"),n.consume(I),n.exit("lineEnding"),b):l(I):Te(I)?De(n,v,"whitespace")(I):(c+=1,f&&(f=!1,s+=1),I===124?(n.enter("tableCellDivider"),n.consume(I),n.exit("tableCellDivider"),f=!0,v):(n.enter("data"),g(I)))}function g(I){return I===null||I===124||Ge(I)?(n.exit("data"),v(I)):(n.consume(I),I===92?x:g)}function x(I){return I===92||I===124?(n.consume(I),g):g(I)}function b(I){return o.interrupt=!1,o.parser.lazy[o.now().line]?l(I):(n.enter("tableDelimiterRow"),f=!1,Te(I)?De(n,T,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):T(I))}function T(I){return I===45||I===58?O(I):I===124?(f=!0,n.enter("tableCellDivider"),n.consume(I),n.exit("tableCellDivider"),L):ae(I)}function L(I){return Te(I)?De(n,O,"whitespace")(I):O(I)}function O(I){return I===58?(c+=1,f=!0,n.enter("tableDelimiterMarker"),n.consume(I),n.exit("tableDelimiterMarker"),R):I===45?(c+=1,R(I)):I===null||ce(I)?ne(I):ae(I)}function R(I){return I===45?(n.enter("tableDelimiterFiller"),H(I)):ae(I)}function H(I){return I===45?(n.consume(I),H):I===58?(f=!0,n.exit("tableDelimiterFiller"),n.enter("tableDelimiterMarker"),n.consume(I),n.exit("tableDelimiterMarker"),B):(n.exit("tableDelimiterFiller"),B(I))}function B(I){return Te(I)?De(n,ne,"whitespace")(I):ne(I)}function ne(I){return I===124?T(I):I===null||ce(I)?!f||s!==c?ae(I):(n.exit("tableDelimiterRow"),n.exit("tableHead"),r(I)):ae(I)}function ae(I){return l(I)}function j(I){return n.enter("tableRow"),W(I)}function W(I){return I===124?(n.enter("tableCellDivider"),n.consume(I),n.exit("tableCellDivider"),W):I===null||ce(I)?(n.exit("tableRow"),r(I)):Te(I)?De(n,W,"whitespace")(I):(n.enter("data"),de(I))}function de(I){return I===null||I===124||Ge(I)?(n.exit("data"),W(I)):(n.consume(I),I===92?me:de)}function me(I){return I===92||I===124?(n.consume(I),de):de(I)}}function JT(n,r){let l=-1,o=!0,s=0,c=[0,0,0,0],f=[0,0,0,0],h=!1,p=0,m,v,g;const x=new PT;for(;++l<n.length;){const b=n[l],T=b[1];b[0]==="enter"?T.type==="tableHead"?(h=!1,p!==0&&(ig(x,r,p,m,v),v=void 0,p=0),m={type:"table",start:Object.assign({},T.start),end:Object.assign({},T.end)},x.add(l,0,[["enter",m,r]])):T.type==="tableRow"||T.type==="tableDelimiterRow"?(o=!0,g=void 0,c=[0,0,0,0],f=[0,l+1,0,0],h&&(h=!1,v={type:"tableBody",start:Object.assign({},T.start),end:Object.assign({},T.end)},x.add(l,0,[["enter",v,r]])),s=T.type==="tableDelimiterRow"?2:v?3:1):s&&(T.type==="data"||T.type==="tableDelimiterMarker"||T.type==="tableDelimiterFiller")?(o=!1,f[2]===0&&(c[1]!==0&&(f[0]=f[1],g=mo(x,r,c,s,void 0,g),c=[0,0,0,0]),f[2]=l)):T.type==="tableCellDivider"&&(o?o=!1:(c[1]!==0&&(f[0]=f[1],g=mo(x,r,c,s,void 0,g)),c=f,f=[c[1],l,0,0])):T.type==="tableHead"?(h=!0,p=l):T.type==="tableRow"||T.type==="tableDelimiterRow"?(p=l,c[1]!==0?(f[0]=f[1],g=mo(x,r,c,s,l,g)):f[1]!==0&&(g=mo(x,r,f,s,l,g)),s=0):s&&(T.type==="data"||T.type==="tableDelimiterMarker"||T.type==="tableDelimiterFiller")&&(f[3]=l)}for(p!==0&&ig(x,r,p,m,v),x.consume(r.events),l=-1;++l<r.events.length;){const b=r.events[l];b[0]==="enter"&&b[1].type==="table"&&(b[1]._align=XT(r.events,l))}return n}function mo(n,r,l,o,s,c){const f=o===1?"tableHeader":o===2?"tableDelimiter":"tableData",h="tableContent";l[0]!==0&&(c.end=Object.assign({},Ci(r.events,l[0])),n.add(l[0],0,[["exit",c,r]]));const p=Ci(r.events,l[1]);if(c={type:f,start:Object.assign({},p),end:Object.assign({},p)},n.add(l[1],0,[["enter",c,r]]),l[2]!==0){const m=Ci(r.events,l[2]),v=Ci(r.events,l[3]),g={type:h,start:Object.assign({},m),end:Object.assign({},v)};if(n.add(l[2],0,[["enter",g,r]]),o!==2){const x=r.events[l[2]],b=r.events[l[3]];if(x[1].end=Object.assign({},b[1].end),x[1].type="chunkText",x[1].contentType="text",l[3]>l[2]+1){const T=l[2]+1,L=l[3]-l[2]-1;n.add(T,L,[])}}n.add(l[3]+1,0,[["exit",g,r]])}return s!==void 0&&(c.end=Object.assign({},Ci(r.events,s)),n.add(s,0,[["exit",c,r]]),c=void 0),c}function ig(n,r,l,o,s){const c=[],f=Ci(r.events,l);s&&(s.end=Object.assign({},f),c.push(["exit",s,r])),o.end=Object.assign({},f),c.push(["exit",o,r]),n.add(l+1,0,c)}function Ci(n,r){const l=n[r],o=l[0]==="enter"?"start":"end";return l[1][o]}const WT={name:"tasklistCheck",tokenize:e2};function $T(){return{text:{91:WT}}}function e2(n,r,l){const o=this;return s;function s(p){return o.previous!==null||!o._gfmTasklistFirstContentOfListItem?l(p):(n.enter("taskListCheck"),n.enter("taskListCheckMarker"),n.consume(p),n.exit("taskListCheckMarker"),c)}function c(p){return Ge(p)?(n.enter("taskListCheckValueUnchecked"),n.consume(p),n.exit("taskListCheckValueUnchecked"),f):p===88||p===120?(n.enter("taskListCheckValueChecked"),n.consume(p),n.exit("taskListCheckValueChecked"),f):l(p)}function f(p){return p===93?(n.enter("taskListCheckMarker"),n.consume(p),n.exit("taskListCheckMarker"),n.exit("taskListCheck"),h):l(p)}function h(p){return ce(p)?r(p):Te(p)?n.check({tokenize:t2},r,l)(p):l(p)}}function t2(n,r,l){return De(n,o,"whitespace");function o(s){return s===null?l(s):r(s)}}function n2(n){return Ng([ET(),BT(),VT(n),QT(),$T()])}const a2={};function i2(n){const r=this,l=n||a2,o=r.data(),s=o.micromarkExtensions||(o.micromarkExtensions=[]),c=o.fromMarkdownExtensions||(o.fromMarkdownExtensions=[]),f=o.toMarkdownExtensions||(o.toMarkdownExtensions=[]);s.push(n2(l)),c.push(kT()),f.push(CT(l))}const l2=({label:n,title:r,subtitle:l,tag:o,children:s})=>K.jsxs("section",{className:"proc-card",children:[K.jsxs("header",{className:"proc-card-header",children:[K.jsxs("div",{className:"proc-card-label-row",children:[K.jsx("span",{className:"proc-card-label",children:n}),o&&K.jsx("span",{className:"proc-card-tag",children:o})]}),K.jsx("h2",{className:"proc-card-title",children:r}),l&&K.jsx("p",{className:"proc-card-subtitle",children:l})]}),K.jsx("div",{className:"proc-card-body",children:s})]}),r2=()=>{const{id:n}=Rv(),r=n?zb(n):void 0;return r?K.jsxs("div",{className:"doc-page",children:[K.jsxs("header",{className:"doc-header",children:[K.jsx("span",{className:"doc-badge",children:r.badge}),K.jsx("h1",{className:"doc-title",children:r.title}),K.jsx("p",{className:"doc-subtitle",children:r.subtitle}),K.jsxs("div",{className:"doc-meta-row",children:[K.jsx("span",{className:"doc-pill",children:r.estTime}),K.jsx("span",{className:"doc-pill",children:"Markdown source • 100% content"})]})]}),K.jsx(l2,{label:"Full document",title:"Playbook content",subtitle:"Rendered with rich formatting, nothing cut",tag:"Markdown",children:K.jsx("div",{className:"md-render",children:K.jsx(Vk,{remarkPlugins:[i2],components:{h1:({node:l,...o})=>K.jsx("h2",{className:"md-h1",...o}),h2:({node:l,...o})=>K.jsx("h3",{className:"md-h2",...o}),h3:({node:l,...o})=>K.jsx("h4",{className:"md-h3",...o}),p:({node:l,...o})=>K.jsx("p",{className:"md-p",...o}),ul:({node:l,...o})=>K.jsx("ul",{className:"md-ul",...o}),ol:({node:l,...o})=>K.jsx("ol",{className:"md-ol",...o}),li:({node:l,...o})=>K.jsx("li",{className:"md-li",...o}),code:({inline:l,...o})=>l?K.jsx("code",{className:"md-code-inline",...o}):K.jsx("pre",{className:"md-code-block",children:K.jsx("code",{...o})}),table:({node:l,...o})=>K.jsx("div",{className:"md-table-wrap",children:K.jsx("table",{className:"md-table",...o})}),th:({node:l,...o})=>K.jsx("th",{className:"md-th",...o}),td:({node:l,...o})=>K.jsx("td",{className:"md-td",...o})},children:r.content})})})]}):K.jsx("div",{className:"empty-state",children:"Document not found."})},o2=()=>K.jsx(Lb,{children:K.jsxs(Fv,{children:[K.jsx(ho,{path:"/",element:K.jsx(_b,{})}),K.jsx(ho,{path:"/docs/:id",element:K.jsx(r2,{})}),K.jsx(ho,{path:"*",element:K.jsx(Yv,{to:"/",replace:!0})})]})});Z0.createRoot(document.getElementById("root")).render(K.jsx(Y0.StrictMode,{children:K.jsx(mb,{children:K.jsx(o2,{})})}));
