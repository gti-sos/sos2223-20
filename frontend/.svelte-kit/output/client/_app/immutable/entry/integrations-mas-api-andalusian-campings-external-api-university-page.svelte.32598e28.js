import{S as ae,i as ne,s as re,k as m,a as R,q as U,l as b,m as T,c as H,r as I,h as u,n as p,b as M,D as r,O as K,L as W,C as z,M as se,Z as oe,o as ce,_ as S,X as ie,Y as he,u as q,V as fe}from"../chunks/index.e145b144.js";function Q(c,e,t){const l=c.slice();return l[10]=e[t],l[12]=t,l}function $(c,e,t){const l=c.slice();return l[13]=e[t],l}function ue(c){let e,t;return{c(){e=m("p"),t=U("No universities found.")},l(l){e=b(l,"P",{});var a=T(e);t=I(a,"No universities found."),a.forEach(u)},m(l,a){M(l,e,a),r(e,t)},p:z,d(l){l&&u(e)}}}function _e(c){let e,t,l,a,_,f,n,L,A,P,C,o,i,d,D,N,w=[],E=new Map,g,k,s=c[1]==="name"&&x(c),v=c[1]==="country"&&ee(c),O=c[0];const V=h=>h[10].id;for(let h=0;h<O.length;h+=1){let y=Q(c,O,h),B=V(y);E.set(B,w[h]=le(B,y))}return{c(){e=m("table"),t=m("thead"),l=m("tr"),a=m("th"),_=U(`Name
            `),s&&s.c(),f=R(),n=m("th"),L=U(`Country
            `),v&&v.c(),A=R(),P=m("th"),C=U("Domains"),o=R(),i=m("th"),d=U("Web Pages"),D=R(),N=m("tbody");for(let h=0;h<w.length;h+=1)w[h].c();this.h()},l(h){e=b(h,"TABLE",{class:!0});var y=T(e);t=b(y,"THEAD",{});var B=T(t);l=b(B,"TR",{class:!0});var j=T(l);a=b(j,"TH",{class:!0});var Y=T(a);_=I(Y,`Name
            `),s&&s.l(Y),Y.forEach(u),f=H(j),n=b(j,"TH",{class:!0});var X=T(n);L=I(X,`Country
            `),v&&v.l(X),X.forEach(u),A=H(j),P=b(j,"TH",{class:!0});var F=T(P);C=I(F,"Domains"),F.forEach(u),o=H(j),i=b(j,"TH",{class:!0});var G=T(i);d=I(G,"Web Pages"),G.forEach(u),j.forEach(u),B.forEach(u),D=H(y),N=b(y,"TBODY",{});var J=T(N);for(let Z=0;Z<w.length;Z+=1)w[Z].l(J);J.forEach(u),y.forEach(u),this.h()},h(){p(a,"class","svelte-12082en"),S(a,"sortable",c[1]==="name"),p(n,"class","svelte-12082en"),S(n,"sortable",c[1]==="country"),p(P,"class","svelte-12082en"),p(i,"class","svelte-12082en"),p(l,"class","svelte-12082en"),p(e,"class","svelte-12082en")},m(h,y){M(h,e,y),r(e,t),r(t,l),r(l,a),r(a,_),s&&s.m(a,null),r(l,f),r(l,n),r(n,L),v&&v.m(n,null),r(l,A),r(l,P),r(P,C),r(l,o),r(l,i),r(i,d),r(e,D),r(e,N);for(let B=0;B<w.length;B+=1)w[B]&&w[B].m(N,null);g||(k=[W(a,"click",c[7]),W(n,"click",c[8])],g=!0)},p(h,y){h[1]==="name"?s?s.p(h,y):(s=x(h),s.c(),s.m(a,null)):s&&(s.d(1),s=null),y&2&&S(a,"sortable",h[1]==="name"),h[1]==="country"?v?v.p(h,y):(v=ee(h),v.c(),v.m(n,null)):v&&(v.d(1),v=null),y&2&&S(n,"sortable",h[1]==="country"),y&1&&(O=h[0],w=ie(w,y,V,1,h,O,E,N,he,le,null,Q))},d(h){h&&u(e),s&&s.d(),v&&v.d();for(let y=0;y<w.length;y+=1)w[y].d();g=!1,se(k)}}}function x(c){let e;return{c(){e=m("span"),this.h()},l(t){e=b(t,"SPAN",{class:!0}),T(e).forEach(u),this.h()},h(){p(e,"class","svelte-12082en"),S(e,"sorted",sorted),S(e,"ascending",c[2]===1)},m(t,l){M(t,e,l)},p(t,l){l&0&&S(e,"sorted",sorted),l&4&&S(e,"ascending",t[2]===1)},d(t){t&&u(e)}}}function ee(c){let e;return{c(){e=m("span"),this.h()},l(t){e=b(t,"SPAN",{class:!0}),T(e).forEach(u),this.h()},h(){p(e,"class","svelte-12082en"),S(e,"sorted",sorted),S(e,"ascending",c[2]===1)},m(t,l){M(t,e,l)},p(t,l){l&0&&S(e,"sorted",sorted),l&4&&S(e,"ascending",t[2]===1)},d(t){t&&u(e)}}}function te(c){let e,t=c[13]+"",l,a,_;return{c(){e=m("a"),l=U(t),_=m("br"),this.h()},l(f){e=b(f,"A",{href:!0,target:!0,rel:!0});var n=T(e);l=I(n,t),n.forEach(u),_=b(f,"BR",{}),this.h()},h(){p(e,"href",a=c[13]),p(e,"target","_blank"),p(e,"rel","noopener noreferrer")},m(f,n){M(f,e,n),r(e,l),M(f,_,n)},p(f,n){n&1&&t!==(t=f[13]+"")&&q(l,t),n&1&&a!==(a=f[13])&&p(e,"href",a)},d(f){f&&u(e),f&&u(_)}}}function le(c,e){let t,l,a=e[10].name+"",_,f,n,L=e[10].country+"",A,P,C,o=e[10].domains.join(", ")+"",i,d,D,N,w=e[10].web_pages,E=[];for(let g=0;g<w.length;g+=1)E[g]=te($(e,w,g));return{key:c,first:null,c(){t=m("tr"),l=m("td"),_=U(a),f=R(),n=m("td"),A=U(L),P=R(),C=m("td"),i=U(o),d=R(),D=m("td");for(let g=0;g<E.length;g+=1)E[g].c();N=R(),this.h()},l(g){t=b(g,"TR",{class:!0});var k=T(t);l=b(k,"TD",{class:!0});var s=T(l);_=I(s,a),s.forEach(u),f=H(k),n=b(k,"TD",{class:!0});var v=T(n);A=I(v,L),v.forEach(u),P=H(k),C=b(k,"TD",{class:!0});var O=T(C);i=I(O,o),O.forEach(u),d=H(k),D=b(k,"TD",{class:!0});var V=T(D);for(let h=0;h<E.length;h+=1)E[h].l(V);V.forEach(u),N=H(k),k.forEach(u),this.h()},h(){p(l,"class","svelte-12082en"),p(n,"class","svelte-12082en"),p(C,"class","svelte-12082en"),p(D,"class","svelte-12082en"),p(t,"class","svelte-12082en"),S(t,"colored-row",e[12]%2!==0),this.first=t},m(g,k){M(g,t,k),r(t,l),r(l,_),r(t,f),r(t,n),r(n,A),r(t,P),r(t,C),r(C,i),r(t,d),r(t,D);for(let s=0;s<E.length;s+=1)E[s]&&E[s].m(D,null);r(t,N)},p(g,k){if(e=g,k&1&&a!==(a=e[10].name+"")&&q(_,a),k&1&&L!==(L=e[10].country+"")&&q(A,L),k&1&&o!==(o=e[10].domains.join(", ")+"")&&q(i,o),k&1){w=e[10].web_pages;let s;for(s=0;s<w.length;s+=1){const v=$(e,w,s);E[s]?E[s].p(v,k):(E[s]=te(v),E[s].c(),E[s].m(D,null))}for(;s<E.length;s+=1)E[s].d(1);E.length=w.length}k&1&&S(t,"colored-row",e[12]%2!==0)},d(g){g&&u(t),fe(E,g)}}}function de(c){let e,t,l,a,_,f,n,L,A;function P(i,d){return i[0].length>0?_e:ue}let C=P(c),o=C(c);return{c(){e=m("div"),t=m("div"),l=m("input"),a=R(),_=m("button"),f=U("Search"),n=R(),o.c(),this.h()},l(i){e=b(i,"DIV",{class:!0});var d=T(e);t=b(d,"DIV",{class:!0});var D=T(t);l=b(D,"INPUT",{type:!0,class:!0,placeholder:!0}),a=H(D),_=b(D,"BUTTON",{class:!0});var N=T(_);f=I(N,"Search"),N.forEach(u),D.forEach(u),n=H(d),o.l(d),d.forEach(u),this.h()},h(){p(l,"type","text"),p(l,"class","search-input svelte-12082en"),p(l,"placeholder","Search by name"),p(_,"class","search-button svelte-12082en"),p(t,"class","search-bar svelte-12082en"),p(e,"class","table-container svelte-12082en")},m(i,d){M(i,e,d),r(e,t),r(t,l),K(l,c[3]),r(t,a),r(t,_),r(_,f),r(e,n),o.m(e,null),L||(A=[W(l,"input",c[6]),W(_,"click",c[5])],L=!0)},p(i,[d]){d&8&&l.value!==i[3]&&K(l,i[3]),C===(C=P(i))&&o?o.p(i,d):(o.d(1),o=C(i),o&&(o.c(),o.m(e,null)))},i:z,o:z,d(i){i&&u(e),o.d(),L=!1,se(A)}}}function pe(c,e,t){oe();let l=[],a="",_=1,f="";ce(async()=>{try{const d=await(await fetch("/api/proxy-mas/?url="+encodeURIComponent("http://universities.hipolabs.com/search?name="))).json();t(0,l=d)}catch(o){console.error("Error fetching data:",o)}});function n(o){a===o?t(2,_*=-1):t(2,_=1),t(1,a=o),t(0,l=l.sort((i,d)=>{const D=i[o]?i[o].toLowerCase():"",N=d[o]?d[o].toLowerCase():"";return D<N?-1*_:D>N?1*_:0}))}function L(){const o=l.filter(i=>i.name.toLowerCase().includes(f.toLowerCase()));t(0,l=o)}function A(){f=this.value,t(3,f)}return[l,a,_,f,n,L,A,()=>n("name"),()=>n("country")]}class me extends ae{constructor(e){super(),ne(this,e,pe,de,re,{})}}export{me as default};
