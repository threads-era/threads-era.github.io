import{x as Y,y as O,z as k,A as B,B as $,C as H,D as I,E as j,H as q,v as m,F as L,G as N,I as g,J as T,K as y,L as M,M as R,N as S,w as z,O as G,P as J,Q as K,R as Q,S as U,T as W,U as X,p as Z,k as x,c as ee}from"./runtime.Dputmqpz.js";import{b as ae}from"./disclose-version.CNM8lHfo.js";const re=new Set,C=new Set;function E(e){var D;var a=this,n=a.ownerDocument,d=e.type,f=((D=e.composedPath)==null?void 0:D.call(e))||[],r=f[0]||e.target,u=0,p=e.__root;if(p){var c=f.indexOf(p);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var _=f.indexOf(a);if(_===-1)return;c<=_&&(u=c)}if(r=f[u]||e.target,r!==a){Y(e,"currentTarget",{configurable:!0,get(){return r||n}});var b=$,o=H;O(null),k(null);try{for(var t,s=[];r!==null;){var l=r.assignedSlot||r.parentNode||r.host||null;try{var h=r["__"+d];if(h!==void 0&&!r.disabled)if(B(h)){var[F,...P]=h;F.apply(r,[e,...P])}else h.call(r,e)}catch(w){t?s.push(w):t=w}if(e.cancelBubble||l===a||l===null)break;r=l}if(t){for(let w of s)queueMicrotask(()=>{throw w});throw t}}finally{e.__root=a,delete e.currentTarget,O(b),k(o)}}}let i;function te(){i=void 0}function fe(e){let a=null,n=m;var d;if(m){for(a=y,i===void 0&&(i=M(document.head));i!==null&&(i.nodeType!==8||i.data!==L);)i=N(i);i===null?g(!1):i=T(N(i))}m||(d=document.head.appendChild(I()));try{j(()=>e(d),q)}finally{n&&(g(!0),i=y,T(a))}}const ne=["touchstart","touchmove"];function se(e){return ne.includes(e)}function le(e,a){var n=a==null?"":typeof a=="object"?a+"":a;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function ie(e,a){return V(e,a)}function ue(e,a){R(),a.intro=a.intro??!1;const n=a.target,d=m,f=y;try{for(var r=M(n);r&&(r.nodeType!==8||r.data!==L);)r=N(r);if(!r)throw S;g(!0),T(r),z();const u=V(e,{...a,anchor:r});if(y===null||y.nodeType!==8||y.data!==G)throw J(),S;return g(!1),u}catch(u){if(u===S)return a.recover===!1&&K(),R(),Q(n),g(!1),ie(e,a);throw u}finally{g(d),T(f),te()}}const v=new Map;function V(e,{target:a,anchor:n,props:d={},events:f,context:r,intro:u=!0}){R();var p=new Set,c=o=>{for(var t=0;t<o.length;t++){var s=o[t];if(!p.has(s)){p.add(s);var l=se(s);a.addEventListener(s,E,{passive:l});var h=v.get(s);h===void 0?(document.addEventListener(s,E,{passive:l}),v.set(s,1)):v.set(s,h+1)}}};c(U(re)),C.add(c);var _=void 0,b=W(()=>{var o=n??a.appendChild(I());return X(()=>{if(r){Z({});var t=ee;t.c=r}f&&(d.$$events=f),m&&ae(o,null),_=e(o,d)||{},m&&(H.nodes_end=y),r&&x()}),()=>{var l;for(var t of p){a.removeEventListener(t,E);var s=v.get(t);--s===0?(document.removeEventListener(t,E),v.delete(t)):v.set(t,s)}C.delete(c),A.delete(_),o!==n&&((l=o.parentNode)==null||l.removeChild(o))}});return A.set(_,b),_}let A=new WeakMap;function ce(e){const a=A.get(e);a&&a()}export{ue as a,fe as h,ie as m,le as s,ce as u};
