import{S as at,i as nt,s as lt,e as J,b as F,C as x,h as f,o as ot,k as _,q as E,l as b,m as p,r as g,D as a,a as y,c as D,V as rt,u as M}from"../chunks/index.e145b144.js";function K(e,t,i){const l=e.slice();return l[1]=t[i],l}function st(e){let t,i;return{c(){t=_("p"),i=E("Nada encontrado prueba a recargar.")},l(l){t=b(l,"P",{});var n=p(t);i=g(n,"Nada encontrado prueba a recargar."),n.forEach(f)},m(l,n){F(l,t,n),a(t,i)},p:x,d(l){l&&f(t)}}}function ct(e){let t,i,l,n,c,o,m,H,j,T,P,z,$,q,L,w,A,S,k,N,B,u,s=e[0],h=[];for(let r=0;r<s.length;r+=1)h[r]=W(K(e,s,r));return{c(){t=_("style"),i=E(`table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    th {
      background-color: #f2f2f2;
    }
    
    tr:hover {
      background-color: #f9f9f9;
    }`),l=y(),n=_("table"),c=_("thead"),o=_("tr"),m=_("th"),H=E("Título"),j=y(),T=_("th"),P=E("Fecha Lanzamiento"),z=y(),$=_("th"),q=E("País"),L=y(),w=_("th"),A=E("Estado"),S=y(),k=_("th"),N=E("Calidad"),B=y(),u=_("tbody");for(let r=0;r<h.length;r+=1)h[r].c()},l(r){t=b(r,"STYLE",{});var v=p(t);i=g(v,`table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    th {
      background-color: #f2f2f2;
    }
    
    tr:hover {
      background-color: #f9f9f9;
    }`),v.forEach(f),l=D(r),n=b(r,"TABLE",{});var d=p(n);c=b(d,"THEAD",{});var R=p(c);o=b(R,"TR",{});var C=p(o);m=b(C,"TH",{});var O=p(m);H=g(O,"Título"),O.forEach(f),j=D(C),T=b(C,"TH",{});var Q=p(T);P=g(Q,"Fecha Lanzamiento"),Q.forEach(f),z=D(C),$=b(C,"TH",{});var U=p($);q=g(U,"País"),U.forEach(f),L=D(C),w=b(C,"TH",{});var V=p(w);A=g(V,"Estado"),V.forEach(f),S=D(C),k=b(C,"TH",{});var G=p(k);N=g(G,"Calidad"),G.forEach(f),C.forEach(f),R.forEach(f),B=D(d),u=b(d,"TBODY",{});var I=p(u);for(let Y=0;Y<h.length;Y+=1)h[Y].l(I);I.forEach(f),d.forEach(f)},m(r,v){F(r,t,v),a(t,i),F(r,l,v),F(r,n,v),a(n,c),a(c,o),a(o,m),a(m,H),a(o,j),a(o,T),a(T,P),a(o,z),a(o,$),a($,q),a(o,L),a(o,w),a(w,A),a(o,S),a(o,k),a(k,N),a(n,B),a(n,u);for(let d=0;d<h.length;d+=1)h[d]&&h[d].m(u,null)},p(r,v){if(v&1){s=r[0];let d;for(d=0;d<s.length;d+=1){const R=K(r,s,d);h[d]?h[d].p(R,v):(h[d]=W(R),h[d].c(),h[d].m(u,null))}for(;d<h.length;d+=1)h[d].d(1);h.length=s.length}},d(r){r&&f(t),r&&f(l),r&&f(n),rt(h,r)}}}function W(e){let t,i,l=e[1].title+"",n,c,o,m=X(e[1])+"",H,j,T,P=Z(e[1])+"",z,$,q,L=tt(e[1])+"",w,A,S,k=et(e[1])+"",N,B;return{c(){t=_("tr"),i=_("td"),n=E(l),c=y(),o=_("td"),H=E(m),j=y(),T=_("td"),z=E(P),$=y(),q=_("td"),w=E(L),A=y(),S=_("td"),N=E(k),B=y()},l(u){t=b(u,"TR",{});var s=p(t);i=b(s,"TD",{});var h=p(i);n=g(h,l),h.forEach(f),c=D(s),o=b(s,"TD",{});var r=p(o);H=g(r,m),r.forEach(f),j=D(s),T=b(s,"TD",{});var v=p(T);z=g(v,P),v.forEach(f),$=D(s),q=b(s,"TD",{});var d=p(q);w=g(d,L),d.forEach(f),A=D(s),S=b(s,"TD",{});var R=p(S);N=g(R,k),R.forEach(f),B=D(s),s.forEach(f)},m(u,s){F(u,t,s),a(t,i),a(i,n),a(t,c),a(t,o),a(o,H),a(t,j),a(t,T),a(T,z),a(t,$),a(t,q),a(q,w),a(t,A),a(t,S),a(S,N),a(t,B)},p(u,s){s&1&&l!==(l=u[1].title+"")&&M(n,l),s&1&&m!==(m=X(u[1])+"")&&M(H,m),s&1&&P!==(P=Z(u[1])+"")&&M(z,P),s&1&&L!==(L=tt(u[1])+"")&&M(w,L),s&1&&k!==(k=et(u[1])+"")&&M(N,k)},d(u){u&&f(t)}}}function dt(e){let t;function i(c,o){return c[0].length>0?ct:st}let l=i(e),n=l(e);return{c(){n.c(),t=J()},l(c){n.l(c),t=J()},m(c,o){n.m(c,o),F(c,t,o)},p(c,[o]){l===(l=i(c))&&n?n.p(c,o):(n.d(1),n=l(c),n&&(n.c(),n.m(t.parentNode,t)))},i:x,o:x,d(c){n.d(c),c&&f(t)}}}function X(e){return e&&e.date?e.date:"Desconocido"}function Z(e){return e&&e["release-events"]&&e["release-events"][0]&&e["release-events"][0].area&&e["release-events"][0].area.name?e["release-events"][0].area.name:"Desconocido"}function tt(e){return e&&e.status?e.status:"Desconocido"}function et(e){return e&&e.quality?e.quality:"Unknown"}function ft(e,t,i){let l=[];return ot(async()=>{try{const c=["5b11f4ce-a62d-471e-81fc-a69a8278c7da","83d91898-7763-47d7-b03b-b92132375c47","f4fdbb4c-e4b7-47a0-b83b-d91bbfcfa387"].map(m=>fetch(`https://musicbrainz.org/ws/2/release?artist=${m}&limit=40&fmt=json`).then(H=>H.json())),o=await Promise.all(c);i(0,l=o.flatMap(m=>m.releases||[]))}catch(n){console.error("Error buscando los datos",n)}}),[l]}class ht extends at{constructor(t){super(),nt(this,t,ft,dt,lt,{})}}export{ht as default};
