import{S as ne,i as le,s as oe,k as D,q as V,a as I,J as re,l as k,m as T,h as _,r as $,c as M,K as ae,n as P,D as v,b as x,C as N,V as R,o as ce,N as se,u as te,e as Y}from"../chunks/index.e145b144.js";const{document:q}=se;function J(s,e,i){const t=s.slice();return t[3]=e[i],t}function K(s,e,i){const t=s.slice();return t[6]=e[i],t}function W(s,e,i){const t=s.slice();return t[9]=e[i],t}function F(s,e,i){const t=s.slice();return t[6]=e[i],t}function G(s){let e,i=s[6]+"",t;return{c(){e=D("th"),t=V(i)},l(l){e=k(l,"TH",{});var r=T(e);t=$(r,i),r.forEach(_)},m(l,r){x(l,e,r),v(e,t)},p:N,d(l){l&&_(e)}}}function Q(s){let e,i;return{c(){e=D("td"),i=V("-")},l(t){e=k(t,"TD",{});var l=T(e);i=$(l,"-"),l.forEach(_)},m(t,l){x(t,e,l),v(e,i)},p:N,d(t){t&&_(e)}}}function U(s){let e,i=s[9].value+"",t;return{c(){e=D("td"),t=V(i)},l(l){e=k(l,"TD",{});var r=T(e);t=$(r,i),r.forEach(_)},m(l,r){x(l,e,r),v(e,t)},p(l,r){r&1&&i!==(i=l[9].value+"")&&te(t,i)},d(l){l&&_(e)}}}function X(s){let e;function i(...o){return s[2](s[3],s[6],...o)}let t=s[0].filter(i),l=[];for(let o=0;o<t.length;o+=1)l[o]=U(W(s,t,o));let r=null;return t.length||(r=Q()),{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=Y(),r&&r.c()},l(o){for(let u=0;u<l.length;u+=1)l[u].l(o);e=Y(),r&&r.l(o)},m(o,u){for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(o,u);x(o,e,u),r&&r.m(o,u)},p(o,u){if(s=o,u&3){t=s[0].filter(i);let n;for(n=0;n<t.length;n+=1){const f=W(s,t,n);l[n]?l[n].p(f,u):(l[n]=U(f),l[n].c(),l[n].m(e.parentNode,e))}for(;n<l.length;n+=1)l[n].d(1);l.length=t.length,!t.length&&r?r.p(s,u):t.length?r&&(r.d(1),r=null):(r=Q(),r.c(),r.m(e.parentNode,e))}},d(o){R(l,o),o&&_(e),r&&r.d(o)}}}function Z(s){let e,i,t=s[3]+"",l,r,o,u=s[1],n=[];for(let f=0;f<u.length;f+=1)n[f]=X(K(s,u,f));return{c(){e=D("tr"),i=D("td"),l=V(t),r=I();for(let f=0;f<n.length;f+=1)n[f].c();o=I()},l(f){e=k(f,"TR",{});var p=T(e);i=k(p,"TD",{});var d=T(i);l=$(d,t),d.forEach(_),r=M(p);for(let h=0;h<n.length;h+=1)n[h].l(p);o=M(p),p.forEach(_)},m(f,p){x(f,e,p),v(e,i),v(i,l),v(e,r);for(let d=0;d<n.length;d+=1)n[d]&&n[d].m(e,null);v(e,o)},p(f,p){if(p&1&&t!==(t=f[3]+"")&&te(l,t),p&3){u=f[1];let d;for(d=0;d<u.length;d+=1){const h=K(f,u,d);n[d]?n[d].p(h,p):(n[d]=X(h),n[d].c(),n[d].m(e,o))}for(;d<n.length;d+=1)n[d].d(1);n.length=u.length}},d(f){f&&_(e),R(n,f)}}}function ie(s){let e,i,t,l,r,o,u,n,f,p,d,h,m,w,y,S=s[1],g=[];for(let a=0;a<S.length;a+=1)g[a]=G(F(s,S,a));let C=[...new Set(s[0].map(ee))],b=[];for(let a=0;a<C.length;a+=1)b[a]=Z(J(s,C,a));return{c(){e=D("script"),t=D("style"),l=V(`table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }

    th,
    td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ccc;
    }

    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    td {
      background-color: #ffffff;
    }

    #chart_div {
      width: 100%;
      height: 400px;
    }`),r=I(),o=D("div"),u=I(),n=D("table"),f=D("thead"),p=D("tr"),d=D("th"),h=V("Moneda"),m=I();for(let a=0;a<g.length;a+=1)g[a].c();w=I(),y=D("tbody");for(let a=0;a<b.length;a+=1)b[a].c();this.h()},l(a){const E=re("svelte-nwtvyr",q.head);e=k(E,"SCRIPT",{src:!0});var c=T(e);c.forEach(_),t=k(E,"STYLE",{});var j=T(t);l=$(j,`table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }

    th,
    td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ccc;
    }

    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    td {
      background-color: #ffffff;
    }

    #chart_div {
      width: 100%;
      height: 400px;
    }`),j.forEach(_),E.forEach(_),r=M(a),o=k(a,"DIV",{id:!0}),T(o).forEach(_),u=M(a),n=k(a,"TABLE",{});var z=T(n);f=k(z,"THEAD",{});var A=T(f);p=k(A,"TR",{});var B=T(p);d=k(B,"TH",{});var H=T(d);h=$(H,"Moneda"),H.forEach(_),m=M(B);for(let O=0;O<g.length;O+=1)g[O].l(B);B.forEach(_),A.forEach(_),w=M(z),y=k(z,"TBODY",{});var L=T(y);for(let O=0;O<b.length;O+=1)b[O].l(L);L.forEach(_),z.forEach(_),this.h()},h(){ae(e.src,i="https://www.gstatic.com/charts/loader.js")||P(e,"src",i),P(o,"id","chart_div")},m(a,E){v(q.head,e),v(q.head,t),v(t,l),x(a,r,E),x(a,o,E),x(a,u,E),x(a,n,E),v(n,f),v(f,p),v(p,d),v(d,h),v(p,m);for(let c=0;c<g.length;c+=1)g[c]&&g[c].m(p,null);v(n,w),v(n,y);for(let c=0;c<b.length;c+=1)b[c]&&b[c].m(y,null)},p(a,[E]){if(E&2){S=a[1];let c;for(c=0;c<S.length;c+=1){const j=F(a,S,c);g[c]?g[c].p(j,E):(g[c]=G(j),g[c].c(),g[c].m(p,null))}for(;c<g.length;c+=1)g[c].d(1);g.length=S.length}if(E&3){C=[...new Set(a[0].map(ee))];let c;for(c=0;c<C.length;c+=1){const j=J(a,C,c);b[c]?b[c].p(j,E):(b[c]=Z(j),b[c].c(),b[c].m(y,null))}for(;c<b.length;c+=1)b[c].d(1);b.length=C.length}},i:N,o:N,d(a){_(e),_(t),a&&_(r),a&&_(o),a&&_(u),a&&_(n),R(g,a),R(b,a)}}}const ee=s=>s.currency;function fe(s,e,i){let t=[],l=[];return ce(async()=>{try{let d=function(){const h=new google.visualization.DataTable;h.addColumn("string","Monedas"),h.addColumn("number","Diferencia"),p.forEach(({currency:y,difference:S})=>{h.addRow([y,S])});const m={title:"Top 20 Monedas con los mayores cambios",width:"100%",height:400,bar:{groupWidth:"70%"},legend:{position:"top"},backgroundColor:{fill:"transparent"},colors:["#0077cc"],fontName:"Arial",titleTextStyle:{fontSize:18,bold:!0,color:"#333"}};new google.visualization.BarChart(document.getElementById("chart_div")).draw(h,m)};const o=new Date,u=o.toISOString().split("T")[0];for(let h=0;h<6;h++){const m=new Date;m.setDate(o.getDate()-h);const w=m.toISOString().split("T")[0];l.push(w)}for(const h of l){const m=await fetch(`/api/proxy-mas/?url=https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${h}/currencies/eur.json`),{date:w,eur:y}=await m.json(),S=Object.entries(y).map(([g,C])=>({date:w,currency:g,value:C}));i(0,t=[...t,...S])}const n={};t.forEach(({currency:h,date:m,value:w})=>{n[h]||(n[h]=[]),n[h].push({date:m,value:w})});const f=[];Object.entries(n).forEach(([h,m])=>{if(m.length>=2)for(let w=1;w<m.length;w++){const y=m[w-1].value,g=m[w].value-y;f.push({currency:h,difference:g})}}),f.sort((h,m)=>m.difference-h.difference);const p=f.slice(0,20);google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(d)}catch(o){console.error("Error consiguiendo los datos",o)}}),[t,l,(o,u,n)=>n.currency===o&&n.date===u]}class de extends ne{constructor(e){super(),le(this,e,fe,ie,oe,{})}}export{de as default};
