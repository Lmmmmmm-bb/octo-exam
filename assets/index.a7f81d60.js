var Cn=Object.defineProperty,En=Object.defineProperties;var Fn=Object.getOwnPropertyDescriptors;var st=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var te=(t,e,n)=>e in t?Cn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,M=(t,e)=>{for(var n in e||(e={}))ee.call(e,n)&&te(t,n,e[n]);if(st)for(var n of st(e))ne.call(e,n)&&te(t,n,e[n]);return t},P=(t,e)=>En(t,Fn(e));var Ot=(t,e)=>{var n={};for(var s in t)ee.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&st)for(var s of st(t))e.indexOf(s)<0&&ne.call(t,s)&&(n[s]=t[s]);return n};import{d as Se,o as it,n as $e,p as Ae,R as Rn,S as Dn,T as Nn,U as In,u as $,V as S,f as C,e as Pt,W as At,X as A,Y as Ln,c as se,w as W,a as xt,G as Vn,Z as kn,H as re,I as oe,F as Pn,_ as Wn,$ as Bn,v as Un,a0 as Hn}from"./vendor.2a757ea6.js";/* empty css               *//* empty css               *//* empty css             */import{u as zn}from"./useLocale.3fe9dc1b.js";import{c as ae,s as Zn,d as Kn}from"./index.007ccf8f.js";import{_ as Yn}from"./plugin-vue_export-helper.1c6f6f40.js";const Co={initial:{opacity:0,y:100},enter:{opacity:1,y:0},leave:{opacity:0,y:100,transition:{y:{duration:300}}}},qn=Se({name:"ArrowDown"}),Xn={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Gn=Ae("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"},null,-1),Jn=[Gn];function Qn(t,e,n,s,r,a){return it(),$e("svg",Xn,Jn)}var ts=Yn(qn,[["render",Qn]]);function _e(t){return Nn()?(In(t),!0):!1}const je=typeof window!="undefined",es=Object.prototype.toString,ns=t=>typeof t=="string",ss=t=>es.call(t)==="[object Object]",I=()=>{};function Wt(t){Rn()&&Dn(t)}function k(t){var e;const n=$(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Ce=je?window:void 0;function rs(...t){let e,n,s,r;if(ns(t[0])?([n,s,r]=t,e=Ce):[e,n,s,r]=t,!e)return I;let a=I;const o=S(()=>k(e),c=>{a(),!!c&&(c.addEventListener(n,s,r),a=()=>{c.removeEventListener(n,s,r),a=I})},{immediate:!0,flush:"post"}),i=()=>{o(),a()};return _e(i),i}const _t=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},jt="__vueuse_ssr_handlers__";_t[jt]=_t[jt]||{};_t[jt];function os(t,e,n={}){const{root:s,rootMargin:r="0px",threshold:a=.1,window:o=Ce}=n,i=o&&"IntersectionObserver"in o;let c=I;const l=i?S(()=>({el:k(t),root:k(s)}),({el:f,root:p})=>{if(c(),!f)return;const m=new IntersectionObserver(e,{root:p,rootMargin:r,threshold:a});m.observe(f),c=()=>{m.disconnect(),c=I}},{immediate:!0,flush:"post"}):I,u=()=>{c(),l()};return _e(u),{isSupported:i,stop:u}}var ie,ce;je&&(window==null?void 0:window.navigator)&&((ie=window==null?void 0:window.navigator)==null?void 0:ie.platform)&&/iP(ad|hone|od)/.test((ce=window==null?void 0:window.navigator)==null?void 0:ce.platform);const Ee=1/60*1e3,as=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Fe=typeof window!="undefined"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(as()),Ee);function is(t){let e=[],n=[],s=0,r=!1,a=!1;const o=new WeakSet,i={schedule:(c,l=!1,u=!1)=>{const f=u&&r,p=f?e:n;return l&&o.add(c),p.indexOf(c)===-1&&(p.push(c),f&&r&&(s=e.length)),c},cancel:c=>{const l=n.indexOf(c);l!==-1&&n.splice(l,1),o.delete(c)},process:c=>{if(r){a=!0;return}if(r=!0,[e,n]=[n,e],n.length=0,s=e.length,s)for(let l=0;l<s;l++){const u=e[l];u(c),o.has(u)&&(i.schedule(u),t())}r=!1,a&&(a=!1,i.process(c))}};return i}const cs=40;let Ct=!0,Y=!1,Et=!1;const L={delta:0,timestamp:0},G=["read","update","preRender","render","postRender"],dt=G.reduce((t,e)=>(t[e]=is(()=>Y=!0),t),{}),le=G.reduce((t,e)=>{const n=dt[e];return t[e]=(s,r=!1,a=!1)=>(Y||us(),n.schedule(s,r,a)),t},{});G.reduce((t,e)=>(t[e]=dt[e].cancel,t),{});G.reduce((t,e)=>(t[e]=()=>dt[e].process(L),t),{});const ls=t=>dt[t].process(L),Re=t=>{Y=!1,L.delta=Ct?Ee:Math.max(Math.min(t-L.timestamp,cs),1),L.timestamp=t,Et=!0,G.forEach(ls),Et=!1,Y&&(Ct=!1,Fe(Re))},us=()=>{Y=!0,Ct=!0,Et||Fe(Re)},fs=()=>L;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function De(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}var ps=function(){},ue=function(){};const Ft=(t,e,n)=>Math.min(Math.max(n,t),e),wt=.001,ds=.01,fe=10,ms=.05,hs=1;function gs({duration:t=800,bounce:e=.25,velocity:n=0,mass:s=1}){let r,a;ps(t<=fe*1e3);let o=1-e;o=Ft(ms,hs,o),t=Ft(ds,fe,t/1e3),o<1?(r=l=>{const u=l*o,f=u*t,p=u-n,m=Rt(l,o),d=Math.exp(-f);return wt-p/m*d},a=l=>{const f=l*o*t,p=f*n+n,m=Math.pow(o,2)*Math.pow(l,2)*t,d=Math.exp(-f),x=Rt(Math.pow(l,2),o);return(-r(l)+wt>0?-1:1)*((p-m)*d)/x}):(r=l=>{const u=Math.exp(-l*t),f=(l-n)*t+1;return-wt+u*f},a=l=>{const u=Math.exp(-l*t),f=(n-l)*(t*t);return u*f});const i=5/t,c=ys(r,a,i);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const l=Math.pow(c,2)*s;return{stiffness:l,damping:o*2*Math.sqrt(s*l),duration:t}}}const bs=12;function ys(t,e,n){let s=n;for(let r=1;r<bs;r++)s=s-t(s)/e(s);return s}function Rt(t,e){return t*Math.sqrt(1-e*e)}const Os=["duration","bounce"],xs=["stiffness","damping","mass"];function pe(t,e){return e.some(n=>t[n]!==void 0)}function ws(t){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!pe(t,xs)&&pe(t,Os)){const n=gs(t);e=Object.assign(Object.assign(Object.assign({},e),n),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function Bt(t){var{from:e=0,to:n=1,restSpeed:s=2,restDelta:r}=t,a=De(t,["from","to","restSpeed","restDelta"]);const o={done:!1,value:e};let{stiffness:i,damping:c,mass:l,velocity:u,duration:f,isResolvedFromDuration:p}=ws(a),m=de,d=de;function x(){const v=u?-(u/1e3):0,w=n-e,O=c/(2*Math.sqrt(i*l)),g=Math.sqrt(i/l)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-e)/100,.4)),O<1){const b=Rt(g,O);m=y=>{const T=Math.exp(-O*g*y);return n-T*((v+O*g*w)/b*Math.sin(b*y)+w*Math.cos(b*y))},d=y=>{const T=Math.exp(-O*g*y);return O*g*T*(Math.sin(b*y)*(v+O*g*w)/b+w*Math.cos(b*y))-T*(Math.cos(b*y)*(v+O*g*w)-b*w*Math.sin(b*y))}}else if(O===1)m=b=>n-Math.exp(-g*b)*(w+(v+g*w)*b);else{const b=g*Math.sqrt(O*O-1);m=y=>{const T=Math.exp(-O*g*y),j=Math.min(b*y,300);return n-T*((v+O*g*w)*Math.sinh(j)+b*w*Math.cosh(j))/b}}}return x(),{next:v=>{const w=m(v);if(p)o.done=v>=f;else{const O=d(v)*1e3,g=Math.abs(O)<=s,b=Math.abs(n-w)<=r;o.done=g&&b}return o.value=o.done?n:w,o},flipTarget:()=>{u=-u,[e,n]=[n,e],x()}}}Bt.needsInterpolation=(t,e)=>typeof t=="string"||typeof e=="string";const de=t=>0,Ne=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s},Ut=(t,e,n)=>-n*t+n*e+t,Ie=(t,e)=>n=>Math.max(Math.min(n,e),t),U=t=>t%1?Number(t.toFixed(5)):t,ut=/(-)?([\d]*\.?[\d])+/g,Dt=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,vs=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function J(t){return typeof t=="string"}const mt={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Le=Object.assign(Object.assign({},mt),{transform:Ie(0,1)});Object.assign(Object.assign({},mt),{default:1});const Ts=t=>({test:e=>J(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),H=Ts("%");Object.assign(Object.assign({},H),{parse:t=>H.parse(t)/100,transform:t=>H.transform(t*100)});const Ht=(t,e)=>n=>Boolean(J(n)&&vs.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Ve=(t,e,n)=>s=>{if(!J(s))return s;const[r,a,o,i]=s.match(ut);return{[t]:parseFloat(r),[e]:parseFloat(a),[n]:parseFloat(o),alpha:i!==void 0?parseFloat(i):1}},N={test:Ht("hsl","hue"),parse:Ve("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+H.transform(U(e))+", "+H.transform(U(n))+", "+U(Le.transform(s))+")"},Ms=Ie(0,255),vt=Object.assign(Object.assign({},mt),{transform:t=>Math.round(Ms(t))}),F={test:Ht("rgb","red"),parse:Ve("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+vt.transform(t)+", "+vt.transform(e)+", "+vt.transform(n)+", "+U(Le.transform(s))+")"};function Ss(t){let e="",n="",s="",r="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),s=t.substr(5,2),r=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),s=t.substr(3,1),r=t.substr(4,1),e+=e,n+=n,s+=s,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const Nt={test:Ht("#"),parse:Ss,transform:F.transform},ht={test:t=>F.test(t)||Nt.test(t)||N.test(t),parse:t=>F.test(t)?F.parse(t):N.test(t)?N.parse(t):Nt.parse(t),transform:t=>J(t)?t:t.hasOwnProperty("red")?F.transform(t):N.transform(t)},ke="${c}",Pe="${n}";function $s(t){var e,n,s,r;return isNaN(t)&&J(t)&&((n=(e=t.match(ut))===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0)+((r=(s=t.match(Dt))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function We(t){typeof t=="number"&&(t=`${t}`);const e=[];let n=0;const s=t.match(Dt);s&&(n=s.length,t=t.replace(Dt,ke),e.push(...s.map(ht.parse)));const r=t.match(ut);return r&&(t=t.replace(ut,Pe),e.push(...r.map(mt.parse))),{values:e,numColors:n,tokenised:t}}function Be(t){return We(t).values}function Ue(t){const{values:e,numColors:n,tokenised:s}=We(t),r=e.length;return a=>{let o=s;for(let i=0;i<r;i++)o=o.replace(i<n?ke:Pe,i<n?ht.transform(a[i]):U(a[i]));return o}}const As=t=>typeof t=="number"?0:t;function _s(t){const e=Be(t);return Ue(t)(e.map(As))}const He={test:$s,parse:Be,createTransformer:Ue,getAnimatableNone:_s};function Tt(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function me({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let r=0,a=0,o=0;if(!e)r=a=o=n;else{const i=n<.5?n*(1+e):n+e-n*e,c=2*n-i;r=Tt(c,i,t+1/3),a=Tt(c,i,t),o=Tt(c,i,t-1/3)}return{red:Math.round(r*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:s}}const js=(t,e,n)=>{const s=t*t,r=e*e;return Math.sqrt(Math.max(0,n*(r-s)+s))},Cs=[Nt,F,N],he=t=>Cs.find(e=>e.test(t)),ze=(t,e)=>{let n=he(t),s=he(e),r=n.parse(t),a=s.parse(e);n===N&&(r=me(r),n=F),s===N&&(a=me(a),s=F);const o=Object.assign({},r);return i=>{for(const c in o)c!=="alpha"&&(o[c]=js(r[c],a[c],i));return o.alpha=Ut(r.alpha,a.alpha,i),n.transform(o)}},Es=t=>typeof t=="number",Fs=(t,e)=>n=>e(t(n)),Ze=(...t)=>t.reduce(Fs);function Ke(t,e){return Es(t)?n=>Ut(t,e,n):ht.test(t)?ze(t,e):qe(t,e)}const Ye=(t,e)=>{const n=[...t],s=n.length,r=t.map((a,o)=>Ke(a,e[o]));return a=>{for(let o=0;o<s;o++)n[o]=r[o](a);return n}},Rs=(t,e)=>{const n=Object.assign(Object.assign({},t),e),s={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(s[r]=Ke(t[r],e[r]));return r=>{for(const a in s)n[a]=s[a](r);return n}};function ge(t){const e=He.parse(t),n=e.length;let s=0,r=0,a=0;for(let o=0;o<n;o++)s||typeof e[o]=="number"?s++:e[o].hue!==void 0?a++:r++;return{parsed:e,numNumbers:s,numRGB:r,numHSL:a}}const qe=(t,e)=>{const n=He.createTransformer(e),s=ge(t),r=ge(e);return s.numHSL===r.numHSL&&s.numRGB===r.numRGB&&s.numNumbers>=r.numNumbers?Ze(Ye(s.parsed,r.parsed),n):o=>`${o>0?e:t}`},Ds=(t,e)=>n=>Ut(t,e,n);function Ns(t){if(typeof t=="number")return Ds;if(typeof t=="string")return ht.test(t)?ze:qe;if(Array.isArray(t))return Ye;if(typeof t=="object")return Rs}function Is(t,e,n){const s=[],r=n||Ns(t[0]),a=t.length-1;for(let o=0;o<a;o++){let i=r(t[o],t[o+1]);if(e){const c=Array.isArray(e)?e[o]:e;i=Ze(c,i)}s.push(i)}return s}function Ls([t,e],[n]){return s=>n(Ne(t,e,s))}function Vs(t,e){const n=t.length,s=n-1;return r=>{let a=0,o=!1;if(r<=t[0]?o=!0:r>=t[s]&&(a=s-1,o=!0),!o){let c=1;for(;c<n&&!(t[c]>r||c===s);c++);a=c-1}const i=Ne(t[a],t[a+1],r);return e[a](i)}}function Xe(t,e,{clamp:n=!0,ease:s,mixer:r}={}){const a=t.length;ue(a===e.length),ue(!s||!Array.isArray(s)||s.length===a-1),t[0]>t[a-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const o=Is(e,s,r),i=a===2?Ls(t,o):Vs(t,o);return n?c=>i(Ft(t[0],t[a-1],c)):i}const gt=t=>e=>1-t(1-e),zt=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ks=t=>e=>Math.pow(e,t),Ge=t=>e=>e*e*((t+1)*e-t),Ps=t=>{const e=Ge(t);return n=>(n*=2)<1?.5*e(n):.5*(2-Math.pow(2,-10*(n-1)))},Je=1.525,Ws=4/11,Bs=8/11,Us=9/10,Qe=t=>t,Zt=ks(2),Hs=gt(Zt),tn=zt(Zt),en=t=>1-Math.sin(Math.acos(t)),nn=gt(en),zs=zt(nn),Kt=Ge(Je),Zs=gt(Kt),Ks=zt(Kt),Ys=Ps(Je),qs=4356/361,Xs=35442/1805,Gs=16061/1805,ft=t=>{if(t===1||t===0)return t;const e=t*t;return t<Ws?7.5625*e:t<Bs?9.075*e-9.9*t+3.4:t<Us?qs*e-Xs*t+Gs:10.8*t*t-20.52*t+10.72},Js=gt(ft),Qs=t=>t<.5?.5*(1-ft(1-t*2)):.5*ft(t*2-1)+.5;function tr(t,e){return t.map(()=>e||tn).splice(0,t.length-1)}function er(t){const e=t.length;return t.map((n,s)=>s!==0?s/(e-1):0)}function nr(t,e){return t.map(n=>n*e)}function ct({from:t=0,to:e=1,ease:n,offset:s,duration:r=300}){const a={done:!1,value:t},o=Array.isArray(e)?e:[t,e],i=nr(s&&s.length===o.length?s:er(o),r);function c(){return Xe(i,o,{ease:Array.isArray(n)?n:tr(o,n)})}let l=c();return{next:u=>(a.value=l(u),a.done=u>=r,a),flipTarget:()=>{o.reverse(),l=c()}}}function sr({velocity:t=0,from:e=0,power:n=.8,timeConstant:s=350,restDelta:r=.5,modifyTarget:a}){const o={done:!1,value:e};let i=n*t;const c=e+i,l=a===void 0?c:a(c);return l!==c&&(i=l-e),{next:u=>{const f=-i*Math.exp(-u/s);return o.done=!(f>r||f<-r),o.value=o.done?l:l+f,o},flipTarget:()=>{}}}const be={keyframes:ct,spring:Bt,decay:sr};function rr(t){if(Array.isArray(t.to))return ct;if(be[t.type])return be[t.type];const e=new Set(Object.keys(t));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?ct:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?Bt:ct}const sn=1/60*1e3,or=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),rn=typeof window!="undefined"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(or()),sn);function ar(t){let e=[],n=[],s=0,r=!1,a=!1;const o=new WeakSet,i={schedule:(c,l=!1,u=!1)=>{const f=u&&r,p=f?e:n;return l&&o.add(c),p.indexOf(c)===-1&&(p.push(c),f&&r&&(s=e.length)),c},cancel:c=>{const l=n.indexOf(c);l!==-1&&n.splice(l,1),o.delete(c)},process:c=>{if(r){a=!0;return}if(r=!0,[e,n]=[n,e],n.length=0,s=e.length,s)for(let l=0;l<s;l++){const u=e[l];u(c),o.has(u)&&(i.schedule(u),t())}r=!1,a&&(a=!1,i.process(c))}};return i}const ir=40;let It=!0,q=!1,Lt=!1;const V={delta:0,timestamp:0},Q=["read","update","preRender","render","postRender"],bt=Q.reduce((t,e)=>(t[e]=ar(()=>q=!0),t),{}),cr=Q.reduce((t,e)=>{const n=bt[e];return t[e]=(s,r=!1,a=!1)=>(q||fr(),n.schedule(s,r,a)),t},{}),lr=Q.reduce((t,e)=>(t[e]=bt[e].cancel,t),{});Q.reduce((t,e)=>(t[e]=()=>bt[e].process(V),t),{});const ur=t=>bt[t].process(V),on=t=>{q=!1,V.delta=It?sn:Math.max(Math.min(t-V.timestamp,ir),1),V.timestamp=t,Lt=!0,Q.forEach(ur),Lt=!1,q&&(It=!1,rn(on))},fr=()=>{q=!0,It=!0,Lt||rn(on)},pr=()=>V;function an(t,e,n=0){return t-e-n}function dr(t,e,n=0,s=!0){return s?an(e+-t,e,n):e-(t-e)+n}function mr(t,e,n,s){return s?t>=e+n:t<=-n}const hr=t=>{const e=({delta:n})=>t(n);return{start:()=>cr.update(e,!0),stop:()=>lr.update(e)}};function cn(t){var e,n,{from:s,autoplay:r=!0,driver:a=hr,elapsed:o=0,repeat:i=0,repeatType:c="loop",repeatDelay:l=0,onPlay:u,onStop:f,onComplete:p,onRepeat:m,onUpdate:d}=t,x=De(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=x,w,O=0,g=x.duration,b,y=!1,T=!0,j;const nt=rr(x);((n=(e=nt).needsInterpolation)===null||n===void 0?void 0:n.call(e,s,v))&&(j=Xe([0,100],[s,v],{clamp:!1}),s=0,v=100);const E=nt(Object.assign(Object.assign({},x),{from:s,to:v}));function $n(){O++,c==="reverse"?(T=O%2===0,o=dr(o,g,l,T)):(o=an(o,g,l),c==="mirror"&&E.flipTarget()),y=!1,m&&m()}function An(){w.stop(),p&&p()}function _n(yt){if(T||(yt=-yt),o+=yt,!y){const Qt=E.next(Math.max(0,o));b=Qt.value,j&&(b=j(b)),y=T?Qt.done:o<=0}d==null||d(b),y&&(O===0&&(g!=null||(g=o)),O<i?mr(o,g,l,T)&&$n():An())}function jn(){u==null||u(),w=a(_n),w.start()}return r&&jn(),{stop:()=>{f==null||f(),w.stop()}}}function ln(t,e){return e?t*(1e3/e):0}function gr({from:t=0,velocity:e=0,min:n,max:s,power:r=.8,timeConstant:a=750,bounceStiffness:o=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:l,driver:u,onUpdate:f,onComplete:p,onStop:m}){let d;function x(g){return n!==void 0&&g<n||s!==void 0&&g>s}function v(g){return n===void 0?s:s===void 0||Math.abs(n-g)<Math.abs(s-g)?n:s}function w(g){d==null||d.stop(),d=cn(Object.assign(Object.assign({},g),{driver:u,onUpdate:b=>{var y;f==null||f(b),(y=g.onUpdate)===null||y===void 0||y.call(g,b)},onComplete:p,onStop:m}))}function O(g){w(Object.assign({type:"spring",stiffness:o,damping:i,restDelta:c},g))}if(x(t))O({from:t,velocity:e,to:v(t)});else{let g=r*e+t;typeof l!="undefined"&&(g=l(g));const b=v(g),y=b===n?-1:1;let T,j;const nt=E=>{T=j,j=E,e=ln(E-T,pr().delta),(y===1&&E>b||y===-1&&E<b)&&O({from:E,to:b,velocity:e})};w({type:"decay",from:t,velocity:e,timeConstant:a,power:r,restDelta:c,modifyTarget:l,onUpdate:x(g)?nt:void 0})}return{stop:()=>d==null?void 0:d.stop()}}const un=(t,e)=>1-3*e+3*t,fn=(t,e)=>3*e-6*t,pn=t=>3*t,pt=(t,e,n)=>((un(e,n)*t+fn(e,n))*t+pn(e))*t,dn=(t,e,n)=>3*un(e,n)*t*t+2*fn(e,n)*t+pn(e),br=1e-7,yr=10;function Or(t,e,n,s,r){let a,o,i=0;do o=e+(n-e)/2,a=pt(o,s,r)-t,a>0?n=o:e=o;while(Math.abs(a)>br&&++i<yr);return o}const xr=8,wr=.001;function vr(t,e,n,s){for(let r=0;r<xr;++r){const a=dn(e,n,s);if(a===0)return e;e-=(pt(e,n,s)-t)/a}return e}const lt=11,rt=1/(lt-1);function Tr(t,e,n,s){if(t===e&&n===s)return Qe;const r=new Float32Array(lt);for(let o=0;o<lt;++o)r[o]=pt(o*rt,t,n);function a(o){let i=0,c=1;const l=lt-1;for(;c!==l&&r[c]<=o;++c)i+=rt;--c;const u=(o-r[c])/(r[c+1]-r[c]),f=i+u*rt,p=dn(f,t,n);return p>=wr?vr(o,f,t,n):p===0?f:Or(o,i,i+rt,t,n)}return o=>o===0||o===1?o:pt(a(o),e,s)}const mn=(t,e)=>n=>Math.max(Math.min(n,e),t),z=t=>t%1?Number(t.toFixed(5)):t,X=/(-)?([\d]*\.?[\d])+/g,Vt=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,Mr=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function tt(t){return typeof t=="string"}const et={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Z=Object.assign(Object.assign({},et),{transform:mn(0,1)}),ot=Object.assign(Object.assign({},et),{default:1}),Yt=t=>({test:e=>tt(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),R=Yt("deg"),K=Yt("%"),h=Yt("px"),ye=Object.assign(Object.assign({},K),{parse:t=>K.parse(t)/100,transform:t=>K.transform(t*100)}),qt=(t,e)=>n=>Boolean(tt(n)&&Mr.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),hn=(t,e,n)=>s=>{if(!tt(s))return s;const[r,a,o,i]=s.match(X);return{[t]:parseFloat(r),[e]:parseFloat(a),[n]:parseFloat(o),alpha:i!==void 0?parseFloat(i):1}},at={test:qt("hsl","hue"),parse:hn("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+K.transform(z(e))+", "+K.transform(z(n))+", "+z(Z.transform(s))+")"},Sr=mn(0,255),Mt=Object.assign(Object.assign({},et),{transform:t=>Math.round(Sr(t))}),B={test:qt("rgb","red"),parse:hn("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+Mt.transform(t)+", "+Mt.transform(e)+", "+Mt.transform(n)+", "+z(Z.transform(s))+")"};function $r(t){let e="",n="",s="",r="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),s=t.substr(5,2),r=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),s=t.substr(3,1),r=t.substr(4,1),e+=e,n+=n,s+=s,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const Oe={test:qt("#"),parse:$r,transform:B.transform},_={test:t=>B.test(t)||Oe.test(t)||at.test(t),parse:t=>B.test(t)?B.parse(t):at.test(t)?at.parse(t):Oe.parse(t),transform:t=>tt(t)?t:t.hasOwnProperty("red")?B.transform(t):at.transform(t)},gn="${c}",bn="${n}";function Ar(t){var e,n,s,r;return isNaN(t)&&tt(t)&&((n=(e=t.match(X))===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0)+((r=(s=t.match(Vt))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function yn(t){typeof t=="number"&&(t=`${t}`);const e=[];let n=0;const s=t.match(Vt);s&&(n=s.length,t=t.replace(Vt,gn),e.push(...s.map(_.parse)));const r=t.match(X);return r&&(t=t.replace(X,bn),e.push(...r.map(et.parse))),{values:e,numColors:n,tokenised:t}}function On(t){return yn(t).values}function xn(t){const{values:e,numColors:n,tokenised:s}=yn(t),r=e.length;return a=>{let o=s;for(let i=0;i<r;i++)o=o.replace(i<n?gn:bn,i<n?_.transform(a[i]):z(a[i]));return o}}const _r=t=>typeof t=="number"?0:t;function jr(t){const e=On(t);return xn(t)(e.map(_r))}const Xt={test:Ar,parse:On,createTransformer:xn,getAnimatableNone:jr},Cr=new Set(["brightness","contrast","saturate","opacity"]);function Er(t){let[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[s]=n.match(X)||[];if(!s)return t;const r=n.replace(s,"");let a=Cr.has(e)?1:0;return s!==n&&(a*=100),e+"("+a+r+")"}const Fr=/([a-z-]*)\(.*?\)/g,kt=Object.assign(Object.assign({},Xt),{getAnimatableNone:t=>{const e=t.match(Fr);return e?e.map(Er).join(" "):t}});class Rr{constructor(){this.subscriptions=new Set}add(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}notify(e,n,s){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(e,n,s)}clear(){this.subscriptions.clear()}}const xe=t=>!isNaN(parseFloat(t));class Dr{constructor(e){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Rr,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:r}=fs();this.lastUpdated!==r&&(this.timeDelta=s,this.lastUpdated=r),le.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>le.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=xe(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=e,this.canTrackVelocity=xe(this.current)}onChange(e){return this.updateSubscribers.add(e)}clearListeners(){this.updateSubscribers.clear()}set(e){this.updateAndNotify(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ln(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{const{stop:s}=e(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Nr(t){return new Dr(t)}const{isArray:Ir}=Array;function Lr(){const t=C({}),e=s=>{const r=a=>{!t.value[a]||(t.value[a].stop(),t.value[a].destroy(),Ln(t.value,a))};s?Ir(s)?s.forEach(r):r(s):Object.keys(t.value).forEach(r)},n=(s,r,a)=>{if(t.value[s])return t.value[s];const o=Nr(r);return o.onChange(i=>{A(a,s,i)}),A(t.value,s,o),o};return Wt(e),{motionValues:t,get:n,stop:e}}const Vr=t=>Array.isArray(t),D=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),St=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),kr=t=>({type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}),$t=()=>({type:"keyframes",ease:"linear",duration:300}),Pr=t=>({type:"keyframes",duration:800,values:t}),we={default:kr,x:D,y:D,z:D,rotate:D,rotateX:D,rotateY:D,rotateZ:D,scaleX:St,scaleY:St,scale:St,backgroundColor:$t,color:$t,opacity:$t},wn=(t,e)=>{let n;return Vr(e)?n=Pr:n=we[t]||we.default,M({to:e},n(e))},ve=P(M({},et),{transform:Math.round}),vn={color:_,backgroundColor:_,outlineColor:_,fill:_,stroke:_,borderColor:_,borderTopColor:_,borderRightColor:_,borderBottomColor:_,borderLeftColor:_,borderWidth:h,borderTopWidth:h,borderRightWidth:h,borderBottomWidth:h,borderLeftWidth:h,borderRadius:h,radius:h,borderTopLeftRadius:h,borderTopRightRadius:h,borderBottomRightRadius:h,borderBottomLeftRadius:h,width:h,maxWidth:h,height:h,maxHeight:h,size:h,top:h,right:h,bottom:h,left:h,padding:h,paddingTop:h,paddingRight:h,paddingBottom:h,paddingLeft:h,margin:h,marginTop:h,marginRight:h,marginBottom:h,marginLeft:h,rotate:R,rotateX:R,rotateY:R,rotateZ:R,scale:ot,scaleX:ot,scaleY:ot,scaleZ:ot,skew:R,skewX:R,skewY:R,distance:h,translateX:h,translateY:h,translateZ:h,x:h,y:h,z:h,perspective:h,transformPerspective:h,opacity:Z,originX:ye,originY:ye,originZ:h,zIndex:ve,filter:kt,WebkitFilter:kt,fillOpacity:Z,strokeOpacity:Z,numOctaves:ve},Gt=t=>vn[t],Tn=(t,e)=>e&&typeof t=="number"&&e.transform?e.transform(t):t;function Wr(t,e){let n=Gt(t);return n!==kt&&(n=Xt),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Br={linear:Qe,easeIn:Zt,easeInOut:tn,easeOut:Hs,circIn:en,circInOut:zs,circOut:nn,backIn:Kt,backInOut:Ks,backOut:Zs,anticipate:Ys,bounceIn:Js,bounceInOut:Qs,bounceOut:ft},Te=t=>{if(Array.isArray(t)){const[e,n,s,r]=t;return Tr(e,n,s,r)}else if(typeof t=="string")return Br[t];return t},Ur=t=>Array.isArray(t)&&typeof t[0]!="number",Me=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&Xt.test(e)&&!e.startsWith("url("));function Hr(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function zr(r){var a=r,{ease:t,times:e,delay:n}=a,s=Ot(a,["ease","times","delay"]);const o=M({},s);return e&&(o.offset=e),t&&(o.ease=Ur(t)?t.map(Te):Te(t)),n&&(o.elapsed=-n),o}function Zr(t,e,n){return Array.isArray(e.to)&&(t.duration||(t.duration=800)),Hr(e),Kr(t)||(t=M(M({},t),wn(n,e.to))),M(M({},e),zr(t))}function Kr(o){var i=o,{delay:t,repeat:e,repeatType:n,repeatDelay:s,from:r}=i,a=Ot(i,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(a).length}function Yr(t,e){return t[e]||t.default||t}function qr(t,e,n,s,r){const a=Yr(s,t);let o=a.from===null||a.from===void 0?e.get():a.from;const i=Me(t,n);o==="none"&&i&&typeof n=="string"&&(o=Wr(t,n));const c=Me(t,o);function l(f){const p={from:o,to:n,velocity:s.velocity?s.velocity:e.getVelocity(),onUpdate:m=>e.set(m)};return a.type==="inertia"||a.type==="decay"?gr(M(M({},p),a)):cn(P(M({},Zr(a,p,t)),{onUpdate:m=>{p.onUpdate(m),a.onUpdate&&a.onUpdate(m)},onComplete:()=>{s.onComplete&&s.onComplete(),r&&r(),f&&f()}}))}function u(f){return e.set(n),s.onComplete&&s.onComplete(),r&&r(),f&&f(),{stop:()=>{}}}return!c||!i||a.type===!1?u:l}function Xr(){const{motionValues:t,stop:e,get:n}=Lr();return{motionValues:t,stop:e,push:(r,a,o,i={},c)=>{const l=o[r],u=n(r,l,o);if(i&&i.immediate){u.set(a);return}const f=qr(r,u,a,i,c);u.start(f)}}}function Gr(t,e={},{motionValues:n,push:s,stop:r}=Xr()){const a=$(e),o=C(!1),i=S(n,p=>{o.value=Object.values(p).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0}),c=p=>{if(!a||!a[p])throw new Error(`The variant ${p} does not exist.`);return a[p]},l=p=>(typeof p=="string"&&(p=c(p)),Promise.all(Object.entries(p).map(([m,d])=>{if(m!=="transition")return new Promise(x=>{s(m,d,t,p.transition||wn(m,p[m]),x)})}).filter(Boolean)));return{isAnimating:o,apply:l,set:p=>{const m=ss(p)?p:c(p);Object.entries(m).forEach(([d,x])=>{d!=="transition"&&s(d,x,t,{immediate:!0})})},stopTransitions:()=>{i(),r()},leave:async p=>{let m;if(a&&(a.leave&&(m=a.leave),!a.leave&&a.initial&&(m=a.initial)),!m){p();return}await l(m),p()}}}const Jt=typeof window!="undefined",Jr=()=>Jt&&window.onpointerdown===null,Qr=()=>Jt&&window.ontouchstart===null,to=()=>Jt&&window.onmousedown===null;function eo({target:t,state:e,variants:n,apply:s}){const r=$(n),a=[],o=(...d)=>{const x=rs.apply(null,d);return a.push(x),x},i=C(!1),c=C(!1),l=C(!1),u=At(()=>{let d=[];return r&&(r.hovered&&(d=[...d,...Object.keys(r.hovered)]),r.tapped&&(d=[...d,...Object.keys(r.tapped)]),r.focused&&(d=[...d,...Object.keys(r.focused)])),d}),f=At(()=>{const d={};Object.assign(d,e.value),i.value&&r.hovered&&Object.assign(d,r.hovered),c.value&&r.tapped&&Object.assign(d,r.tapped),l.value&&r.focused&&Object.assign(d,r.focused);for(const x in d)u.value.includes(x)||delete d[x];return d});r.hovered&&(o(t,"mouseenter",()=>{i.value=!0}),o(t,"mouseleave",()=>{i.value=!1,c.value=!1}),o(t,"mouseout",()=>{i.value=!1,c.value=!1})),r.tapped&&(to()&&(o(t,"mousedown",()=>{c.value=!0}),o(t,"mouseup",()=>{c.value=!1})),Jr()&&(o(t,"pointerdown",()=>{c.value=!0}),o(t,"pointerup",()=>{c.value=!1})),Qr()&&(o(t,"touchstart",()=>{c.value=!0}),o(t,"touchend",()=>{c.value=!1}))),r.focused&&(o(t,"focus",()=>{l.value=!0}),o(t,"blur",()=>{l.value=!1}));const p=S(f,s);return{stop:()=>{a.forEach(d=>d()),p()}}}function no({set:t,target:e,variants:n,variant:s}){const r=$(n);return{stop:S(()=>e,()=>{!r||(r.initial&&t("initial"),r.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}}function so({state:t,apply:e}){return{stop:S(t,s=>{s&&e(s)},{immediate:!0})}}function ro({target:t,variants:e,variant:n}){const s=$(e);let r=I;if(s&&(s.visible||s.visibleOnce)){const{stop:a}=os(t,([{isIntersecting:o}])=>{s.visible?o?n.value="visible":n.value="initial":s.visibleOnce&&(o?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});r=a}return{stop:r}}function oo(t,e={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=C([]);if(e.lifeCycleHooks){const{stop:r}=no(t);n.value.push(r)}if(e.syncVariants){const{stop:r}=so(t);n.value.push(r)}if(e.visibilityHooks){const{stop:r}=ro(t);n.value.push(r)}if(e.eventListeners){const{stop:r}=eo(t);n.value.push(r)}const s=()=>n.value.forEach(r=>r());return Wt(s),{stop:s}}function ao(t={}){const e=Pt(M({},t)),n=C({});return S(e,()=>{const s={};for(const[r,a]of Object.entries(e)){const o=Gt(r),i=Tn(a,o);s[r]=i}n.value=s},{immediate:!0,deep:!0}),{state:e,style:n}}const io=["","X","Y","Z"],co=["perspective","translate","scale","rotate","skew"],Mn=["transformPerspective","x","y","z"];co.forEach(t=>{io.forEach(e=>{const n=t+e;Mn.push(n)})});const lo=new Set(Mn);function Sn(t){return lo.has(t)}const uo=new Set(["originX","originY","originZ"]);function fo(t){return uo.has(t)}function po(t,e){let n,s;const{state:r,style:a}=ao(),o=S(()=>k(t),l=>{if(!!l){s=l;for(const u of Object.keys(vn))l.style[u]===null||l.style[u]===""||Sn(u)||fo(u)||A(r,u,l.style[u]);n&&Object.entries(n).forEach(([u,f])=>A(l.style,u,f)),e&&e(r)}},{immediate:!0}),i=S(a,l=>{if(!s){n=l;return}for(const u in l)A(s.style,u,l[u])},{immediate:!0});return{style:r,stop:()=>{s=void 0,n=void 0,o(),i()}}}const mo={x:"translateX",y:"translateY",z:"translateZ"};function ho(t={},e=!0){const n=Pt(M({},t)),s=C("");return S(n,r=>{let a="",o=!1;e&&(r.x||r.y||r.z)&&(a+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(h.transform).join(",")}) `,o=!0);for(const[i,c]of Object.entries(r)){if(e&&(i==="x"||i==="y"||i==="z"))continue;const l=Gt(i),u=Tn(c,l);a+=`${mo[i]||i}(${u}) `}e&&!o&&(a+="translateZ(0px) "),s.value=a.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}function go(t){const e=t.trim().split(/\) |\)/);if(e.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return e.reduce((s,r)=>{if(!r)return s;const[a,o]=r.split("("),c=o.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),l=c.length===1?c[0]:c;return P(M({},s),{[a]:l})},{})}function bo(t,e){Object.entries(go(e)).forEach(([n,s])=>{s=parseFloat(s);const r=["x","y","z"];if(n==="translate3d"){if(s===0){r.forEach(a=>{A(t,a,0)});return}s.forEach((a,o)=>{A(t,r[o],a)});return}if(n==="translateX"){A(t,"x",s);return}if(n==="translateY"){A(t,"y",s);return}if(n==="translateZ"){A(t,"z",s);return}A(t,n,s)})}function yo(t,e){let n,s;const{state:r,transform:a}=ho(),o=S(()=>k(t),l=>{!l||(s=l,l.style.transform&&bo(r,l.style.transform),n&&(l.style.transform=n),e&&e(r))},{immediate:!0}),i=S(a,l=>{if(!s){n=l;return}s.style.transform=l},{immediate:!0});return{transform:r,stop:()=>{n=void 0,s=void 0,o(),i()}}}function Oo(t,e){const n=Pt({}),s=f=>{Object.entries(f).forEach(([p,m])=>{A(n,p,m)})},{style:r,stop:a}=po(t,s),{transform:o,stop:i}=yo(t,s),c=S(n,f=>{Object.entries(f).forEach(([p,m])=>{const d=Sn(p)?o:r;d[p]&&d[p]===m||A(d,p,m)})},{immediate:!0,deep:!0}),l=S(()=>k(t),f=>{!f||e&&s(e)},{immediate:!0});return{motionProperties:n,style:r,transform:o,stop:()=>{a(),i(),c(),l()}}}function xo(t={}){const e=$(t),n=C();return{state:At(()=>{if(!!n.value)return e[n.value]}),variant:n}}function Eo(t,e={},n){const{motionProperties:s,stop:r}=Oo(t),{variant:a,state:o}=xo(e),i=Gr(s,e),c=P(M({target:t,variant:a,variants:e,state:o,motionProperties:s},i),{stop:(u=!1)=>{}}),{stop:l}=oo(c,n);return c.stop=(u=!1)=>{const f=()=>{c.stopTransitions(),r(),l()};if(!u&&e.value&&e.value.leave){const p=S(c.isAnimating,m=>{m||(p(),f())})}else f()},Wt(()=>c.stop()),c}const wo=new Map([[ae.ZH_CN,"\u7B80\u4F53\u4E2D\u6587"],[ae.EN_US,"English"]]),Fo=Se({props:{class:{default:"text-xs"}},setup(t){const e=t,n=(r,a)=>{a.locale=r,Zn(Kn,r)},{t:s}=zn();return(r,a)=>(it(),se($(Hn),{class:"flex items-center justify-center",onCommand:a[0]||(a[0]=o=>n(o,r.$i18n))},{dropdown:W(()=>[xt($(Wn),null,{default:W(()=>[(it(!0),$e(Pn,null,Vn(r.$i18n.availableLocales,o=>(it(),se($(kn),{key:o,command:o},{default:W(()=>[re(oe($(wo).get(o)),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:W(()=>[Ae("span",{class:Un(`flex items-center cursor-pointer ${e.class}`)},[re(oe($(s)("common.locale"))+" ",1),xt($(Bn),{class:"el-icon--right"},{default:W(()=>[xt($(ts))]),_:1})],2)]),_:1}))}});export{Fo as _,Co as b,Eo as u};
