import{S as Ke,i as We,s as Ze,a as T,k as o,q as S,J as $e,h as u,c as g,l as i,m as I,r as H,n as s,b as G,D as t,L as j,g as he,C as ve,M as Ie,o as xe,N as et,e as we,O as w,P as Pe,Q as ue,R as tt,T as Ge,U as je,V as lt,u as ge}from"../chunks/index.e145b144.js";import{f as Ve}from"../chunks/index.42a1a529.js";const{document:Ae}=et;function Fe(r,l,e){const n=r.slice();return n[62]=l[e],n[63]=l,n[64]=e,n}function Re(r){let l;function e(f,c){return f[10]==="200"?nt:f[10]==="404"?st:rt}let n=e(r),p=n(r);return{c(){p.c(),l=we()},l(f){p.l(f),l=we()},m(f,c){p.m(f,c),G(f,l,c)},p(f,c){n===(n=e(f))&&p?p.p(f,c):(p.d(1),p=n(f),p&&(p.c(),he(p,1),p.m(l.parentNode,l)))},i(f){he(p)},o:ve,d(f){p.d(f),f&&u(l)}}}function rt(r){let l,e;return{c(){l=o("p"),e=S("Lista de recursos vacia")},l(n){l=i(n,"P",{});var p=I(l);e=H(p,"Lista de recursos vacia"),p.forEach(u)},m(n,p){G(n,l,p),t(l,e)},p:ve,i:ve,o:ve,d(n){n&&u(l)}}}function st(r){let l,e;return{c(){l=o("p"),e=S("Error: Data not found")},l(n){l=i(n,"P",{});var p=I(l);e=H(p,"Error: Data not found"),p.forEach(u)},m(n,p){G(n,l,p),t(l,e)},p:ve,i:ve,o:ve,d(n){n&&u(l)}}}function nt(r){let l,e,n,p,f,c,_,B,k,d,b,h,U,N,R,v,a,q,L,V,z,J,O,A,W,Z,re,y,F=r[9],m=[];for(let E=0;E<F.length;E+=1)m[E]=qe(Fe(r,F,E));return{c(){l=o("table"),e=o("thead"),n=o("tr"),p=o("th"),f=S("Uso Actual"),c=T(),_=o("th"),B=S("ID"),k=T(),d=o("th"),b=S("Num Inventario"),h=T(),U=o("th"),N=S("Fecha"),R=T(),v=o("th"),a=S("Naturaleza"),q=T(),L=o("th"),V=S("Provincia"),z=T(),J=o("th"),O=S("Recurso"),A=T(),W=o("th"),Z=T(),re=o("tbody");for(let E=0;E<m.length;E+=1)m[E].c();this.h()},l(E){l=i(E,"TABLE",{class:!0});var x=I(l);e=i(x,"THEAD",{class:!0});var C=I(e);n=i(C,"TR",{class:!0});var Y=I(n);p=i(Y,"TH",{class:!0});var oe=I(p);f=H(oe,"Uso Actual"),oe.forEach(u),c=g(Y),_=i(Y,"TH",{class:!0});var te=I(_);B=H(te,"ID"),te.forEach(u),k=g(Y),d=i(Y,"TH",{class:!0});var ae=I(d);b=H(ae,"Num Inventario"),ae.forEach(u),h=g(Y),U=i(Y,"TH",{class:!0});var fe=I(U);N=H(fe,"Fecha"),fe.forEach(u),R=g(Y),v=i(Y,"TH",{class:!0});var pe=I(v);a=H(pe,"Naturaleza"),pe.forEach(u),q=g(Y),L=i(Y,"TH",{class:!0});var $=I(L);V=H($,"Provincia"),$.forEach(u),z=g(Y),J=i(Y,"TH",{class:!0});var ee=I(J);O=H(ee,"Recurso"),ee.forEach(u),A=g(Y),W=i(Y,"TH",{class:!0}),I(W).forEach(u),Y.forEach(u),C.forEach(u),Z=g(x),re=i(x,"TBODY",{});var le=I(re);for(let M=0;M<m.length;M+=1)m[M].l(le);le.forEach(u),x.forEach(u),this.h()},h(){s(p,"class","svelte-yvge0n"),s(_,"class","svelte-yvge0n"),s(d,"class","svelte-yvge0n"),s(U,"class","svelte-yvge0n"),s(v,"class","svelte-yvge0n"),s(L,"class","svelte-yvge0n"),s(J,"class","svelte-yvge0n"),s(W,"class","svelte-yvge0n"),s(n,"class","svelte-yvge0n"),s(e,"class","svelte-yvge0n"),s(l,"class","svelte-yvge0n")},m(E,x){G(E,l,x),t(l,e),t(e,n),t(n,p),t(p,f),t(n,c),t(n,_),t(_,B),t(n,k),t(n,d),t(d,b),t(n,h),t(n,U),t(U,N),t(n,R),t(n,v),t(v,a),t(n,q),t(n,L),t(L,V),t(n,z),t(n,J),t(J,O),t(n,A),t(n,W),t(l,Z),t(l,re);for(let C=0;C<m.length;C+=1)m[C]&&m[C].m(re,null)},p(E,x){if(x[0]&6291968){F=E[9];let C;for(C=0;C<F.length;C+=1){const Y=Fe(E,F,C);m[C]?m[C].p(Y,x):(m[C]=qe(Y),m[C].c(),m[C].m(re,null))}for(;C<m.length;C+=1)m[C].d(1);m.length=F.length}},i(E){y||Ge(()=>{y=je(l,Ve,{duration:300}),y.start()})},o:ve,d(E){E&&u(l),lt(m,E)}}}function ut(r){let l,e=r[62].current_usage+"",n,p,f,c=r[62].id+"",_,B,k,d=r[62].inventory_num+"",b,h,U,N=r[62].modified_date+"",R,v,a,q=r[62].nature+"",L,V,z,J=r[62].province+"",O,A,W,Z=r[62].resource+"",re;return{c(){l=o("td"),n=S(e),p=T(),f=o("td"),_=S(c),B=T(),k=o("td"),b=S(d),h=T(),U=o("td"),R=S(N),v=T(),a=o("td"),L=S(q),V=T(),z=o("td"),O=S(J),A=T(),W=o("td"),re=S(Z),this.h()},l(y){l=i(y,"TD",{class:!0});var F=I(l);n=H(F,e),F.forEach(u),p=g(y),f=i(y,"TD",{class:!0});var m=I(f);_=H(m,c),m.forEach(u),B=g(y),k=i(y,"TD",{class:!0});var E=I(k);b=H(E,d),E.forEach(u),h=g(y),U=i(y,"TD",{class:!0});var x=I(U);R=H(x,N),x.forEach(u),v=g(y),a=i(y,"TD",{class:!0});var C=I(a);L=H(C,q),C.forEach(u),V=g(y),z=i(y,"TD",{class:!0});var Y=I(z);O=H(Y,J),Y.forEach(u),A=g(y),W=i(y,"TD",{class:!0});var oe=I(W);re=H(oe,Z),oe.forEach(u),this.h()},h(){s(l,"class","svelte-yvge0n"),s(f,"class","svelte-yvge0n"),s(k,"class","svelte-yvge0n"),s(U,"class","svelte-yvge0n"),s(a,"class","svelte-yvge0n"),s(z,"class","svelte-yvge0n"),s(W,"class","svelte-yvge0n")},m(y,F){G(y,l,F),t(l,n),G(y,p,F),G(y,f,F),t(f,_),G(y,B,F),G(y,k,F),t(k,b),G(y,h,F),G(y,U,F),t(U,R),G(y,v,F),G(y,a,F),t(a,L),G(y,V,F),G(y,z,F),t(z,O),G(y,A,F),G(y,W,F),t(W,re)},p(y,F){F[0]&512&&e!==(e=y[62].current_usage+"")&&ge(n,e),F[0]&512&&c!==(c=y[62].id+"")&&ge(_,c),F[0]&512&&d!==(d=y[62].inventory_num+"")&&ge(b,d),F[0]&512&&N!==(N=y[62].modified_date+"")&&ge(R,N),F[0]&512&&q!==(q=y[62].nature+"")&&ge(L,q),F[0]&512&&J!==(J=y[62].province+"")&&ge(O,J),F[0]&512&&Z!==(Z=y[62].resource+"")&&ge(re,Z)},d(y){y&&u(l),y&&u(p),y&&u(f),y&&u(B),y&&u(k),y&&u(h),y&&u(U),y&&u(v),y&&u(a),y&&u(V),y&&u(z),y&&u(A),y&&u(W)}}}function ot(r){let l,e,n,p,f,c,_,B,k,d,b,h,U,N,R,v,a,q,L,V,z,J;function O(){r[27].call(e,r[63],r[64])}function A(){r[28].call(f,r[63],r[64])}function W(){r[29].call(B,r[63],r[64])}function Z(){r[30].call(b,r[63],r[64])}function re(){r[31].call(N,r[63],r[64])}function y(){r[32].call(a,r[63],r[64])}function F(){r[33].call(V,r[63],r[64])}return{c(){l=o("td"),e=o("input"),n=T(),p=o("td"),f=o("input"),c=T(),_=o("td"),B=o("input"),k=T(),d=o("td"),b=o("input"),h=T(),U=o("td"),N=o("input"),R=T(),v=o("td"),a=o("input"),q=T(),L=o("td"),V=o("input"),this.h()},l(m){l=i(m,"TD",{class:!0});var E=I(l);e=i(E,"INPUT",{type:!0}),E.forEach(u),n=g(m),p=i(m,"TD",{class:!0});var x=I(p);f=i(x,"INPUT",{type:!0}),x.forEach(u),c=g(m),_=i(m,"TD",{class:!0});var C=I(_);B=i(C,"INPUT",{type:!0}),C.forEach(u),k=g(m),d=i(m,"TD",{class:!0});var Y=I(d);b=i(Y,"INPUT",{type:!0}),Y.forEach(u),h=g(m),U=i(m,"TD",{class:!0});var oe=I(U);N=i(oe,"INPUT",{type:!0}),oe.forEach(u),R=g(m),v=i(m,"TD",{class:!0});var te=I(v);a=i(te,"INPUT",{type:!0}),te.forEach(u),q=g(m),L=i(m,"TD",{class:!0});var ae=I(L);V=i(ae,"INPUT",{type:!0}),ae.forEach(u),this.h()},h(){s(e,"type","text"),s(l,"class","svelte-yvge0n"),s(f,"type","number"),f.disabled=!0,s(p,"class","svelte-yvge0n"),s(B,"type","number"),s(_,"class","svelte-yvge0n"),s(b,"type","text"),s(d,"class","svelte-yvge0n"),s(N,"type","text"),s(U,"class","svelte-yvge0n"),s(a,"type","text"),s(v,"class","svelte-yvge0n"),s(V,"type","number"),s(L,"class","svelte-yvge0n")},m(m,E){G(m,l,E),t(l,e),w(e,r[62].current_usage),G(m,n,E),G(m,p,E),t(p,f),w(f,r[62].id),G(m,c,E),G(m,_,E),t(_,B),w(B,r[62].inventory_num),G(m,k,E),G(m,d,E),t(d,b),w(b,r[62].modified_date),G(m,h,E),G(m,U,E),t(U,N),w(N,r[62].nature),G(m,R,E),G(m,v,E),t(v,a),w(a,r[62].province),G(m,q,E),G(m,L,E),t(L,V),w(V,r[62].resource),z||(J=[j(e,"input",O),j(f,"input",A),j(B,"input",W),j(b,"input",Z),j(N,"input",re),j(a,"input",y),j(V,"input",F)],z=!0)},p(m,E){r=m,E[0]&512&&e.value!==r[62].current_usage&&w(e,r[62].current_usage),E[0]&512&&ue(f.value)!==r[62].id&&w(f,r[62].id),E[0]&512&&ue(B.value)!==r[62].inventory_num&&w(B,r[62].inventory_num),E[0]&512&&b.value!==r[62].modified_date&&w(b,r[62].modified_date),E[0]&512&&N.value!==r[62].nature&&w(N,r[62].nature),E[0]&512&&a.value!==r[62].province&&w(a,r[62].province),E[0]&512&&ue(V.value)!==r[62].resource&&w(V,r[62].resource)},d(m){m&&u(l),m&&u(n),m&&u(p),m&&u(c),m&&u(_),m&&u(k),m&&u(d),m&&u(h),m&&u(U),m&&u(R),m&&u(v),m&&u(q),m&&u(L),z=!1,Ie(J)}}}function it(r){let l,e,n,p;function f(){return r[35](r[64])}return{c(){l=o("button"),e=S("Guardar")},l(c){l=i(c,"BUTTON",{});var _=I(l);e=H(_,"Guardar"),_.forEach(u)},m(c,_){G(c,l,_),t(l,e),n||(p=j(l,"click",f),n=!0)},p(c,_){r=c},d(c){c&&u(l),n=!1,p()}}}function at(r){let l,e,n,p;function f(){return r[34](r[64])}return{c(){l=o("button"),e=S("Actualizar")},l(c){l=i(c,"BUTTON",{});var _=I(l);e=H(_,"Actualizar"),_.forEach(u)},m(c,_){G(c,l,_),t(l,e),n||(p=j(l,"click",f),n=!0)},p(c,_){r=c},d(c){c&&u(l),n=!1,p()}}}function qe(r){let l,e,n,p;function f(b,h){return b[62].editing?ot:ut}let c=f(r),_=c(r);function B(b,h){return b[62].editing?it:at}let k=B(r),d=k(r);return{c(){l=o("tr"),_.c(),e=T(),n=o("td"),d.c(),p=T(),this.h()},l(b){l=i(b,"TR",{class:!0});var h=I(l);_.l(h),e=g(h),n=i(h,"TD",{class:!0});var U=I(n);d.l(U),U.forEach(u),p=g(h),h.forEach(u),this.h()},h(){s(n,"class","svelte-yvge0n"),s(l,"class","svelte-yvge0n")},m(b,h){G(b,l,h),_.m(l,null),t(l,e),t(l,n),d.m(n,null),t(l,p)},p(b,h){c===(c=f(b))&&_?_.p(b,h):(_.d(1),_=c(b),_&&(_.c(),_.m(l,e))),k===(k=B(b))&&d?d.p(b,h):(d.d(1),d=k(b),d&&(d.c(),d.m(n,null)))},d(b){b&&u(l),_.d(),d.d()}}}function Me(r){let l,e,n,p,f,c,_,B,k,d,b,h,U,N,R;return{c(){l=o("form"),e=o("label"),n=S("Limite"),p=T(),f=o("input"),c=T(),_=o("label"),B=S("Offset"),k=T(),d=o("input"),b=T(),h=o("button"),U=S("Limitar"),this.h()},l(v){l=i(v,"FORM",{});var a=I(l);e=i(a,"LABEL",{for:!0});var q=I(e);n=H(q,"Limite"),q.forEach(u),p=g(a),f=i(a,"INPUT",{type:!0,id:!0}),c=g(a),_=i(a,"LABEL",{for:!0});var L=I(_);B=H(L,"Offset"),L.forEach(u),k=g(a),d=i(a,"INPUT",{type:!0,id:!0}),b=g(a),h=i(a,"BUTTON",{type:!0});var V=I(h);U=H(V,"Limitar"),V.forEach(u),a.forEach(u),this.h()},h(){s(e,"for","limit"),s(f,"type","text"),s(f,"id","limit"),s(_,"for","offset"),s(d,"type","text"),s(d,"id","offset"),s(h,"type","submit")},m(v,a){G(v,l,a),t(l,e),t(e,n),t(l,p),t(l,f),w(f,r[7].limit),t(l,c),t(l,_),t(_,B),t(l,k),t(l,d),w(d,r[7].offset),t(l,b),t(l,h),t(h,U),N||(R=[j(f,"input",r[36]),j(d,"input",r[37]),j(l,"submit",Pe(r[17]))],N=!0)},p(v,a){a[0]&128&&f.value!==v[7].limit&&w(f,v[7].limit),a[0]&128&&d.value!==v[7].offset&&w(d,v[7].offset)},d(v){v&&u(l),N=!1,Ie(R)}}}function Se(r){let l,e,n,p,f,c,_,B,k,d;return{c(){l=o("form"),e=o("label"),n=S("ID"),p=T(),f=o("input"),c=T(),_=o("button"),B=S("Eliminar"),this.h()},l(b){l=i(b,"FORM",{});var h=I(l);e=i(h,"LABEL",{for:!0});var U=I(e);n=H(U,"ID"),U.forEach(u),p=g(h),f=i(h,"INPUT",{type:!0,id:!0}),c=g(h),_=i(h,"BUTTON",{type:!0});var N=I(_);B=H(N,"Eliminar"),N.forEach(u),h.forEach(u),this.h()},h(){s(e,"for","delete_id"),s(f,"type","number"),s(f,"id","delete_id"),f.required=!0,s(_,"type","submit")},m(b,h){G(b,l,h),t(l,e),t(e,n),t(l,p),t(l,f),w(f,r[5].id),t(l,c),t(l,_),t(_,B),k||(d=[j(f,"input",r[38]),j(l,"submit",Pe(r[16]))],k=!0)},p(b,h){h[0]&32&&ue(f.value)!==b[5].id&&w(f,b[5].id)},d(b){b&&u(l),k=!1,Ie(d)}}}function He(r){let l,e,n,p,f,c,_,B,k,d,b,h,U,N,R,v,a,q,L,V,z;return{c(){l=o("div"),e=o("input"),n=T(),p=o("input"),f=T(),c=o("input"),_=T(),B=o("input"),k=T(),d=o("input"),b=T(),h=o("input"),U=T(),N=o("br"),R=o("br"),v=T(),a=o("button"),q=o("i"),L=S(" Buscar"),this.h()},l(J){l=i(J,"DIV",{class:!0});var O=I(l);e=i(O,"INPUT",{type:!0,placeholder:!0}),n=g(O),p=i(O,"INPUT",{type:!0,placeholder:!0}),f=g(O),c=i(O,"INPUT",{type:!0,placeholder:!0}),_=g(O),B=i(O,"INPUT",{type:!0,placeholder:!0}),k=g(O),d=i(O,"INPUT",{type:!0,placeholder:!0}),b=g(O),h=i(O,"INPUT",{type:!0,placeholder:!0}),U=g(O),N=i(O,"BR",{}),R=i(O,"BR",{}),v=g(O),a=i(O,"BUTTON",{type:!0,class:!0});var A=I(a);q=i(A,"I",{class:!0}),I(q).forEach(u),L=H(A," Buscar"),A.forEach(u),O.forEach(u),this.h()},h(){s(e,"type","number"),s(e,"placeholder"," ID"),s(p,"type","text"),s(p,"placeholder","Uso Actual"),s(c,"type","number"),s(c,"placeholder","Numero de Inventario"),s(B,"type","text"),s(B,"placeholder","Naturaleza"),s(d,"type","text"),s(d,"placeholder","Provincia"),s(h,"type","number"),s(h,"placeholder","Recurso"),s(q,"class","fas fa-search"),s(a,"type","submit"),s(a,"class","btn btn-info"),s(l,"class","text-center")},m(J,O){G(J,l,O),t(l,e),w(e,r[8].id),t(l,n),t(l,p),w(p,r[8].current_usage),t(l,f),t(l,c),w(c,r[8].inventory_num),t(l,_),t(l,B),w(B,r[8].nature),t(l,k),t(l,d),w(d,r[8].province),t(l,b),t(l,h),w(h,r[8].resource),t(l,U),t(l,N),t(l,R),t(l,v),t(l,a),t(a,q),t(a,L),V||(z=[j(e,"input",r[39]),j(p,"input",r[40]),j(c,"input",r[41]),j(B,"input",r[42]),j(d,"input",r[43]),j(h,"input",r[44]),j(a,"click",function(){tt(r[18](r[8]))&&r[18](r[8]).apply(this,arguments)})],V=!0)},p(J,O){r=J,O[0]&256&&ue(e.value)!==r[8].id&&w(e,r[8].id),O[0]&256&&p.value!==r[8].current_usage&&w(p,r[8].current_usage),O[0]&256&&ue(c.value)!==r[8].inventory_num&&w(c,r[8].inventory_num),O[0]&256&&B.value!==r[8].nature&&w(B,r[8].nature),O[0]&256&&d.value!==r[8].province&&w(d,r[8].province),O[0]&256&&ue(h.value)!==r[8].resource&&w(h,r[8].resource)},d(J){J&&u(l),V=!1,Ie(z)}}}function ze(r){let l,e,n,p,f,c,_,B,k,d,b,h,U,N,R;return{c(){l=o("form"),e=o("label"),n=S("Desde:"),p=T(),f=o("input"),c=T(),_=o("label"),B=S("Hasta:"),k=T(),d=o("input"),b=T(),h=o("button"),U=S("Buscar"),this.h()},l(v){l=i(v,"FORM",{});var a=I(l);e=i(a,"LABEL",{for:!0});var q=I(e);n=H(q,"Desde:"),q.forEach(u),p=g(a),f=i(a,"INPUT",{type:!0,id:!0}),c=g(a),_=i(a,"LABEL",{for:!0});var L=I(_);B=H(L,"Hasta:"),L.forEach(u),k=g(a),d=i(a,"INPUT",{type:!0,id:!0}),b=g(a),h=i(a,"BUTTON",{type:!0});var V=I(h);U=H(V,"Buscar"),V.forEach(u),a.forEach(u),this.h()},h(){s(e,"for","since"),s(f,"type","text"),s(f,"id","since"),f.required=!0,s(_,"for","until"),s(d,"type","text"),s(d,"id","until"),d.required=!0,s(h,"type","submit")},m(v,a){G(v,l,a),t(l,e),t(e,n),t(l,p),t(l,f),w(f,r[6].since),t(l,c),t(l,_),t(_,B),t(l,k),t(l,d),w(d,r[6].until),t(l,b),t(l,h),t(h,U),N||(R=[j(f,"input",r[45]),j(d,"input",r[46]),j(l,"submit",Pe(r[19]))],N=!0)},p(v,a){a[0]&64&&f.value!==v[6].since&&w(f,v[6].since),a[0]&64&&d.value!==v[6].until&&w(d,v[6].until)},d(v){v&&u(l),N=!1,Ie(R)}}}function Ce(r){let l,e,n,p,f,c,_,B,k,d,b,h,U,N,R,v,a,q,L,V,z,J,O,A,W,Z,re,y,F,m,E,x,C,Y,oe,te,ae,fe,pe,$,ee,le;return{c(){l=o("div"),e=o("form"),n=o("label"),p=S("ID"),f=T(),c=o("input"),_=T(),B=o("label"),k=S("Recurso"),d=T(),b=o("input"),h=T(),U=o("label"),N=S("Naturaleza"),R=T(),v=o("input"),a=T(),q=o("label"),L=S("Provincia"),V=T(),z=o("input"),J=T(),O=o("label"),A=S("Fecha"),W=T(),Z=o("input"),re=T(),y=o("label"),F=S("Num Inventario"),m=T(),E=o("input"),x=T(),C=o("label"),Y=S("Uso Actual"),oe=T(),te=o("input"),ae=T(),fe=o("button"),pe=S("Enviar"),this.h()},l(M){l=i(M,"DIV",{class:!0});var K=I(l);e=i(K,"FORM",{});var P=I(e);n=i(P,"LABEL",{for:!0,class:!0});var X=I(n);p=H(X,"ID"),X.forEach(u),f=g(P),c=i(P,"INPUT",{type:!0,id:!0,class:!0}),_=g(P),B=i(P,"LABEL",{for:!0,class:!0});var ie=I(B);k=H(ie,"Recurso"),ie.forEach(u),d=g(P),b=i(P,"INPUT",{type:!0,id:!0,class:!0}),h=g(P),U=i(P,"LABEL",{for:!0,class:!0});var se=I(U);N=H(se,"Naturaleza"),se.forEach(u),R=g(P),v=i(P,"INPUT",{type:!0,id:!0,class:!0}),a=g(P),q=i(P,"LABEL",{for:!0,class:!0});var me=I(q);L=H(me,"Provincia"),me.forEach(u),V=g(P),z=i(P,"INPUT",{type:!0,id:!0,class:!0}),J=g(P),O=i(P,"LABEL",{for:!0,class:!0});var ne=I(O);A=H(ne,"Fecha"),ne.forEach(u),W=g(P),Z=i(P,"INPUT",{type:!0,id:!0,class:!0}),re=g(P),y=i(P,"LABEL",{for:!0,class:!0});var be=I(y);F=H(be,"Num Inventario"),be.forEach(u),m=g(P),E=i(P,"INPUT",{type:!0,id:!0,class:!0}),x=g(P),C=i(P,"LABEL",{for:!0,class:!0});var ye=I(C);Y=H(ye,"Uso Actual"),ye.forEach(u),oe=g(P),te=i(P,"INPUT",{type:!0,id:!0,class:!0}),ae=g(P),fe=i(P,"BUTTON",{type:!0,class:!0});var Ee=I(fe);pe=H(Ee,"Enviar"),Ee.forEach(u),P.forEach(u),K.forEach(u),this.h()},h(){s(n,"for","id"),s(n,"class","svelte-yvge0n"),s(c,"type","number"),s(c,"id","id"),c.required=!0,s(c,"class","svelte-yvge0n"),s(B,"for","resource"),s(B,"class","svelte-yvge0n"),s(b,"type","number"),s(b,"id","resource"),b.required=!0,s(b,"class","svelte-yvge0n"),s(U,"for","nature"),s(U,"class","svelte-yvge0n"),s(v,"type","text"),s(v,"id","nature"),v.required=!0,s(v,"class","svelte-yvge0n"),s(q,"for","province"),s(q,"class","svelte-yvge0n"),s(z,"type","text"),s(z,"id","province"),z.required=!0,s(z,"class","svelte-yvge0n"),s(O,"for","modified_date"),s(O,"class","svelte-yvge0n"),s(Z,"type","text"),s(Z,"id","modified_date"),Z.required=!0,s(Z,"class","svelte-yvge0n"),s(y,"for","inventory_num"),s(y,"class","svelte-yvge0n"),s(E,"type","number"),s(E,"id","inventory_num"),E.required=!0,s(E,"class","svelte-yvge0n"),s(C,"for","current_usage"),s(C,"class","svelte-yvge0n"),s(te,"type","text"),s(te,"id","current_usage"),te.required=!0,s(te,"class","svelte-yvge0n"),s(fe,"type","submit"),s(fe,"class","svelte-yvge0n"),s(l,"class","form-container svelte-yvge0n")},m(M,K){G(M,l,K),t(l,e),t(e,n),t(n,p),t(e,f),t(e,c),w(c,r[11].id),t(e,_),t(e,B),t(B,k),t(e,d),t(e,b),w(b,r[11].resource),t(e,h),t(e,U),t(U,N),t(e,R),t(e,v),w(v,r[11].nature),t(e,a),t(e,q),t(q,L),t(e,V),t(e,z),w(z,r[11].province),t(e,J),t(e,O),t(O,A),t(e,W),t(e,Z),w(Z,r[11].modified_date),t(e,re),t(e,y),t(y,F),t(e,m),t(e,E),w(E,r[11].inventory_num),t(e,x),t(e,C),t(C,Y),t(e,oe),t(e,te),w(te,r[11].current_usage),t(e,ae),t(e,fe),t(fe,pe),ee||(le=[j(c,"input",r[47]),j(b,"input",r[48]),j(v,"input",r[49]),j(z,"input",r[50]),j(Z,"input",r[51]),j(E,"input",r[52]),j(te,"input",r[53]),j(e,"submit",Pe(r[20]))],ee=!0)},p(M,K){K[0]&2048&&ue(c.value)!==M[11].id&&w(c,M[11].id),K[0]&2048&&ue(b.value)!==M[11].resource&&w(b,M[11].resource),K[0]&2048&&v.value!==M[11].nature&&w(v,M[11].nature),K[0]&2048&&z.value!==M[11].province&&w(z,M[11].province),K[0]&2048&&Z.value!==M[11].modified_date&&w(Z,M[11].modified_date),K[0]&2048&&ue(E.value)!==M[11].inventory_num&&w(E,M[11].inventory_num),K[0]&2048&&te.value!==M[11].current_usage&&w(te,M[11].current_usage)},i(M){$||Ge(()=>{$=je(l,Ve,{duration:300}),$.start()})},o:ve,d(M){M&&u(l),ee=!1,Ie(le)}}}function ft(r){let l,e,n,p,f,c,_,B,k,d,b,h,U,N,R,v,a,q,L,V,z,J,O,A,W,Z,re,y,F,m,E,x,C,Y,oe,te,ae,fe,pe,$=!r[0]&&Re(r),ee=r[4]&&Me(r),le=r[2]&&Se(r),M=r[1]&&He(r),K=r[3]&&ze(r),P=r[0]&&Ce(r);return{c(){l=T(),e=o("main"),n=o("h1"),p=S("API IMMOVABLES - Lorenzo Morales"),f=T(),c=o("div"),_=T(),$&&$.c(),B=T(),k=o("div"),d=o("button"),b=S("Crear recurso"),h=T(),U=o("button"),N=S("Cargar recursos"),R=T(),v=o("button"),a=S("Borrar recursos"),q=T(),L=o("button"),V=S("Borrar un recurso"),z=T(),J=o("button"),O=S("Buscar un recurso"),A=T(),W=o("button"),Z=S("Busca un recurso por fecha"),re=T(),y=o("button"),F=S("◀"),m=T(),E=o("button"),x=S("▶"),C=T(),ee&&ee.c(),Y=T(),le&&le.c(),oe=T(),M&&M.c(),te=T(),K&&K.c(),ae=T(),P&&P.c(),this.h()},l(X){$e("svelte-b7q9w0",Ae.head).forEach(u),l=g(X),e=i(X,"MAIN",{});var se=I(e);n=i(se,"H1",{class:!0});var me=I(n);p=H(me,"API IMMOVABLES - Lorenzo Morales"),me.forEach(u),f=g(se),c=i(se,"DIV",{id:!0,class:!0}),I(c).forEach(u),_=g(se),$&&$.l(se),B=g(se),k=i(se,"DIV",{class:!0});var ne=I(k);d=i(ne,"BUTTON",{class:!0});var be=I(d);b=H(be,"Crear recurso"),be.forEach(u),h=g(ne),U=i(ne,"BUTTON",{class:!0});var ye=I(U);N=H(ye,"Cargar recursos"),ye.forEach(u),R=g(ne),v=i(ne,"BUTTON",{class:!0});var Ee=I(v);a=H(Ee,"Borrar recursos"),Ee.forEach(u),q=g(ne),L=i(ne,"BUTTON",{class:!0});var Ne=I(L);V=H(Ne,"Borrar un recurso"),Ne.forEach(u),z=g(ne),J=i(ne,"BUTTON",{class:!0});var ke=I(J);O=H(ke,"Buscar un recurso"),ke.forEach(u),A=g(ne),W=i(ne,"BUTTON",{class:!0});var Ue=I(W);Z=H(Ue,"Busca un recurso por fecha"),Ue.forEach(u),re=g(ne),y=i(ne,"BUTTON",{class:!0});var Be=I(y);F=H(Be,"◀"),Be.forEach(u),m=g(ne),E=i(ne,"BUTTON",{class:!0});var De=I(E);x=H(De,"▶"),De.forEach(u),ne.forEach(u),C=g(se),ee&&ee.l(se),Y=g(se),le&&le.l(se),oe=g(se),M&&M.l(se),te=g(se),K&&K.l(se),ae=g(se),P&&P.l(se),se.forEach(u),this.h()},h(){Ae.title="Immuebles",s(n,"class","title svelte-yvge0n"),s(c,"id","messages"),s(c,"class","message svelte-yvge0n"),s(d,"class","svelte-yvge0n"),s(U,"class","svelte-yvge0n"),s(v,"class","svelte-yvge0n"),s(L,"class","svelte-yvge0n"),s(J,"class","svelte-yvge0n"),s(W,"class","svelte-yvge0n"),s(y,"class","svelte-yvge0n"),s(E,"class","svelte-yvge0n"),s(k,"class","button-container svelte-yvge0n")},m(X,ie){G(X,l,ie),G(X,e,ie),t(e,n),t(n,p),t(e,f),t(e,c),t(e,_),$&&$.m(e,null),t(e,B),t(e,k),t(k,d),t(d,b),t(k,h),t(k,U),t(U,N),t(k,R),t(k,v),t(v,a),t(k,q),t(k,L),t(L,V),t(k,z),t(k,J),t(J,O),t(k,A),t(k,W),t(W,Z),t(k,re),t(k,y),t(y,F),t(k,m),t(k,E),t(E,x),t(e,C),ee&&ee.m(e,null),t(e,Y),le&&le.m(e,null),t(e,oe),M&&M.m(e,null),t(e,te),K&&K.m(e,null),t(e,ae),P&&P.m(e,null),fe||(pe=[j(d,"click",r[12]),j(U,"click",r[23]),j(v,"click",r[24]),j(L,"click",r[15]),j(J,"click",r[13]),j(W,"click",r[14]),j(y,"click",r[26]),j(E,"click",r[25])],fe=!0)},p(X,ie){X[0]?$&&($.d(1),$=null):$?($.p(X,ie),ie[0]&1&&he($,1)):($=Re(X),$.c(),he($,1),$.m(e,B)),X[4]?ee?ee.p(X,ie):(ee=Me(X),ee.c(),ee.m(e,Y)):ee&&(ee.d(1),ee=null),X[2]?le?le.p(X,ie):(le=Se(X),le.c(),le.m(e,oe)):le&&(le.d(1),le=null),X[1]?M?M.p(X,ie):(M=He(X),M.c(),M.m(e,te)):M&&(M.d(1),M=null),X[3]?K?K.p(X,ie):(K=ze(X),K.c(),K.m(e,ae)):K&&(K.d(1),K=null),X[0]?P?(P.p(X,ie),ie[0]&1&&he(P,1)):(P=Ce(X),P.c(),he(P,1),P.m(e,null)):P&&(P.d(1),P=null)},i(X){he($),he(P)},o:ve,d(X){X&&u(l),X&&u(e),$&&$.d(),ee&&ee.d(),le&&le.d(),M&&M.d(),K&&K.d(),P&&P.d(),fe=!1,Ie(pe)}}}function _e(r,l="success"){const e=document.getElementById("messages"),n=document.createElement("div");n.className=`message ${l}`,n.innerHTML=r,e.appendChild(n),console.log(`Mensaje: ${r}, Tipo: ${l}`),setTimeout(()=>{n.remove()},5e3)}function ct(r,l,e){let n=!1;function p(){e(0,n=!n)}let f=!1,c=!1,_=!1,B=!1;function k(){e(1,f=!f)}function d(){e(3,_=!_)}function b(){e(2,c=!c)}let h={id:""},U={since:"",until:""},N={offset:0,limit:"10"},R={id:"",resource:"",inventory_num:"",current_usage:"",nature:"",province:""};xe(async()=>{a.length===0&&E(),z()});let v="/api/v3/immovables",a=[],q="",L="";async function V(){const D=parseInt(h.id);(await fetch(v+"/"+D,{method:"DELETE"})).ok?(z(),_e("Recurso eliminado correctamente","success")):_e(`Recurso no encontrado: ${h.id}`,"error")}async function z(){e(10,L=q="");let D=await fetch(v,{method:"GET"});N.offset!=""&&N.limit==""&&(D=await fetch(v+"?offset="+N.offset,{method:"GET"})),N.offset==""&&N.limit!=""&&(D=await fetch(v+"?limit="+N.limit,{method:"GET"})),N.offset!=""&&N.limit!=""&&(D=await fetch(v+"?limit="+N.limit+"&offset="+N.offset,{method:"GET"}));try{const Q=await D.json();if(q=JSON.stringify(Q,null,2),e(9,a=Q),D.ok){const ce=await D.status;e(10,L=ce.toString()),a.length===0&&e(10,L="empty")}else e(10,L="Error en la solicitud")}catch(Q){console.log(`Error parsing result:${Q}`),e(10,L="Error en la solicitud")}}async function J(D){let Q="?",ce=Object.keys(D),de=Object.values(D);for(let Te=0;Te<ce.length;Te++){let Xe=ce[Te],Oe=de[Te];Oe!==null&&Oe.length!==0&&(Q+=`${Xe}=${Oe}&`)}Q=Q.substring(0,Q.length-1),console.log("EXTENSION:"+Q);const Le=await fetch(v+Q,{method:"GET"});if(Le.ok){const Te=await Le.json();q=JSON.stringify(Te,null,2),e(9,a=Te)}else _e("No se encontró ningún elemento con ese valor")}async function O(){const D=U.since,Q=U.until;e(10,L=q="");const ce=await fetch(v+`?from=${D}&to=${Q}`,{method:"GET"});try{const de=await ce.json();if(q=JSON.stringify(de,null,2),e(9,a=de),ce.ok){const Le=await ce.status;e(10,L=Le.toString()),a.length===0&&e(10,L="empty")}else e(10,L="Error en la solicitud")}catch(de){console.log(`Error parsing result:${de}`),e(10,L="Error en la solicitud")}}let A={current_usage:"",id:"",inventory_num:"",modified_date:"",nature:"",province:"",resource:""};async function W(){const D=parseInt(A.id),Q=parseInt(A.resource),ce=parseInt(A.inventory_num);if(A.modified_date===null||D===null||A.province===null||A.nature===null||A.current_usage===null||!Number.isInteger(D)||!Number.isInteger(Q)||!Number.isInteger(ce)){_e("Por favor, complete todos los campos con los tipos de datos correctos","error");return}(await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)})).ok?(z(),_e("Recurso creado correctamente","success"),e(0,n=!1)):_e("Error al crear el recurso. Ya existe.","error")}async function Z(D,Q){if(confirm("Seguro que quieres editar este recurso?")){let de={current_usage:D.current_usage,id:D.id,inventory_num:D.inventory_num,modified_date:D.modified_date,nature:D.nature,province:D.province,resource:D.resource};de=await re(de,Q)}}async function re(D,Q){if((await fetch(v+`/${D.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)})).ok)return e(9,a[Q]=D,a),D;_e("Porfavor, rellena todos los campos","warning")}async function y(D){const Q=a[D];await Z(Q,D)}let F=null;function m(D){F!==null&&e(9,a[F].editing=!1,a),F=D,e(9,a[F].editing=!0,a)}async function E(){(await fetch(v+"/loadInitialData",{method:"GET"})).ok?(z(),_e("Datos cargados correctamente","success")):_e("Error al cargar los datos iniciales","error")}async function x(){(await fetch(v,{method:"DELETE"})).ok?(z(),_e("Recursos eliminados correctamente","success")):_e("Error al eliminar los recursos","error")}async function C(){e(7,N.offset=N.offset+10,N),N.offset+10>30&&alert("Has llegado al final de la lista."),z()}async function Y(){e(7,N.offset=N.offset-10,N),N.offset-10<0&&alert("Estás al comienzo de la lista."),console.log(a.length),z()}function oe(D,Q){D[Q].current_usage=this.value,e(9,a)}function te(D,Q){D[Q].id=ue(this.value),e(9,a)}function ae(D,Q){D[Q].inventory_num=ue(this.value),e(9,a)}function fe(D,Q){D[Q].modified_date=this.value,e(9,a)}function pe(D,Q){D[Q].nature=this.value,e(9,a)}function $(D,Q){D[Q].province=this.value,e(9,a)}function ee(D,Q){D[Q].resource=ue(this.value),e(9,a)}const le=D=>m(D),M=D=>y(D);function K(){N.limit=this.value,e(7,N)}function P(){N.offset=this.value,e(7,N)}function X(){h.id=ue(this.value),e(5,h)}function ie(){R.id=ue(this.value),e(8,R)}function se(){R.current_usage=this.value,e(8,R)}function me(){R.inventory_num=ue(this.value),e(8,R)}function ne(){R.nature=this.value,e(8,R)}function be(){R.province=this.value,e(8,R)}function ye(){R.resource=ue(this.value),e(8,R)}function Ee(){U.since=this.value,e(6,U)}function Ne(){U.until=this.value,e(6,U)}function ke(){A.id=ue(this.value),e(11,A)}function Ue(){A.resource=ue(this.value),e(11,A)}function Be(){A.nature=this.value,e(11,A)}function De(){A.province=this.value,e(11,A)}function Je(){A.modified_date=this.value,e(11,A)}function Ye(){A.inventory_num=ue(this.value),e(11,A)}function Qe(){A.current_usage=this.value,e(11,A)}return[n,f,c,_,B,h,U,N,R,a,L,A,p,k,d,b,V,z,J,O,W,y,m,E,x,C,Y,oe,te,ae,fe,pe,$,ee,le,M,K,P,X,ie,se,me,ne,be,ye,Ee,Ne,ke,Ue,Be,De,Je,Ye,Qe]}class dt extends Ke{constructor(l){super(),We(this,l,ct,ft,Ze,{},null,[-1,-1,-1])}}export{dt as default};
