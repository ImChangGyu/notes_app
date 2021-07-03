(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{27:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,s,x,p,l,d,b,j,h,u=t(0),g=t.n(u),f=t(18),O=t.n(f),m=(t(27),t(7)),v=t(2),y=t(3),w=t(4),N=w.a.div(r||(r=Object(y.a)(["\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;\n    a {\n        text-decoration: none;\n    }\n    h1 {\n        color: #333;\n    }\n"]))),k=w.a.div(o||(o=Object(y.a)(["\n    cursor: pointer;\n    width: 140px;\n    height: 50px;\n    background-color: #868e96;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50px;\n    box-shadow: 1px 1px 1px 1px gray;\n"]))),S=t(1),C=function(){return Object(S.jsxs)(N,{children:[Object(S.jsx)(m.b,{to:"/",children:Object(S.jsx)("h1",{children:"Notes App"})}),Object(S.jsx)(m.b,{to:"/create",children:Object(S.jsx)(k,{children:"Create Note"})})]})},F=t(11),I=t(22),J=w.a.input(c||(c=Object(y.a)(["\n    width: 81vh;\n    height: 7vh;\n    background-color: #e9ecef;\n    margin-top: 10vh;\n    border-radius: 50px;\n    border: none;\n    outline: none;\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n    padding-left: 15px;\n    font-size: 3vh;\n"]))),z=w.a.textarea(a||(a=Object(y.a)(["\n    width: 81vh;\n    height: 50vh;\n    background-color: #e9ecef;\n    margin-top: 5vh;\n    border-radius: 50px;\n    outline: none;\n    border: none;\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n    padding: 20px 0 0 15px;\n    font-size: 2vh;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n"]))),T=w.a.div(i||(i=Object(y.a)(["\n    display: flex;\n    justify-content: end;\n    a {\n        text-decoration: none;\n    }\n"]))),A=w.a.div(s||(s=Object(y.a)(["\n    cursor: pointer;\n    width: 140px;\n    height: 50px;\n    background-color: #868e96;\n    color: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50px;\n    box-shadow: 1px 1px 1px 1px gray;\n    margin: 30px 10px 0 10px;\n"]))),B=w.a.div(x||(x=Object(y.a)(["\n    cursor: pointer;\n    width: 140px;\n    height: 50px;\n    background-color: #fa5252;\n    color: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50px;\n    box-shadow: 1px 1px 1px 1px gray;\n    margin: 30px 10px 0 10px;\n"]))),D=function(){var n=Object(u.useState)([]),e=Object(F.a)(n,2),t=e[0],r=e[1],o=Object(u.useState)([]),c=Object(F.a)(o,2),a=c[0],i=c[1],s=Object(u.useState)(Object(I.a)()),x=Object(F.a)(s,2),p=x[0];x[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(J,{placeholder:"\uc81c\ubaa9\uc744 \uc791\uc131\ud574\uc918 \u270f\ufe0f",onChange:function(n){i(n.target.value)}}),Object(S.jsx)(z,{placeholder:"\ub0b4\uc6a9\uc744 \uc791\uc131\ud574\uc918 \u270f\ufe0f",onChange:function(n){r(n.target.value)}}),Object(S.jsxs)(T,{children:[Object(S.jsx)(m.b,{to:"/",children:Object(S.jsx)(A,{onClick:function(){var n=localStorage.getItem("Note");try{(n=n?JSON.parse(n):[]).push({id:p,Title:a,Note:t}),localStorage.setItem("Note",JSON.stringify(n))}catch(e){return console.log(e),[]}},children:"Create Note"})}),Object(S.jsx)(B,{children:"Delete Note"})]})]})},L=w.a.div(p||(p=Object(y.a)(["\n    width: 500px;\n    height: 280px;\n    background-color: #e9ecef;\n    margin: 0 auto;\n    margin-top: 40px;\n    border-radius: 50px;\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n    display: flex;\n    flex-direction: column;\n    overflow: scroll;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n    position: relative;\n"]))),P=w.a.span(l||(l=Object(y.a)(["\n    font-size: 20px;\n    font-weight: bold;\n    margin: 30px 30px 5px 30px;\n"]))),E=w.a.span(d||(d=Object(y.a)(["\n    font-size: 16px;\n    margin: 5px 30px 0 30px;\n    word-break: break-all;\n"]))),M=w.a.div(b||(b=Object(y.a)(["\n    cursor: pointer;\n    position: absolute;\n    right: 8%;\n    top: 8%;\n"]))),q=function(n){var e=n.memo,t=n.Notes;return Object(S.jsxs)(L,{children:[Object(S.jsx)(P,{children:e.Title}),Object(S.jsx)(E,{children:e.Note}),Object(S.jsx)(m.b,{to:"/",children:Object(S.jsx)(M,{onClick:function(){console.log(e.id),localStorage.setItem("Note",JSON.stringify(t.filter((function(n){return n.id!==e.id}))))},children:"\u274c"})})]})},G=w.a.div(j||(j=Object(y.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;\n"]))),H=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(C,{}),Object(S.jsx)(G,{children:Object(S.jsx)(D,{})})]})},K=w.a.div(h||(h=Object(y.a)(["\n    width: 1400px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n"]))),Q=function(){var n=function(){var n=localStorage.getItem("Note");try{return n?JSON.parse(n):[]}catch(e){return[]}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(C,{}),Object(S.jsx)(K,{children:g.a.Children.toArray(n.map((function(e){return Object(S.jsx)(q,{memo:e,Notes:n})})))})]})};var R=function(){return Object(S.jsxs)(m.a,{children:[Object(S.jsx)(v.a,{exact:!0,path:"/",component:Q}),Object(S.jsx)(v.a,{path:"/create",component:H})]})},U=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))};O.a.render(Object(S.jsx)(g.a.StrictMode,{children:Object(S.jsx)(R,{})}),document.getElementById("root")),U()}},[[35,1,2]]]);
//# sourceMappingURL=main.9c190ad3.chunk.js.map