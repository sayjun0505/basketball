import{b2 as R,b1 as T,s as c,ac as d,r as j,cc as N,ae as P,T as l,ag as t,x as M,ah as A}from"./index-3voNJrtd.js";function U(a){return T("MuiCardHeader",a)}const $=R("MuiCardHeader",["root","avatar","action","content","title","subheader"]),C=$,_=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],k=a=>{const{classes:e}=a;return A({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},U,e)},w=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>d({[`& .${C.title}`]:e.title,[`& .${C.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),E=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),S=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),B=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),I=j.forwardRef(function(e,h){const p=N({props:e,name:"MuiCardHeader"}),{action:m,avatar:i,className:v,component:y="div",disableTypography:u=!1,subheader:b,subheaderTypographyProps:x,title:g,titleTypographyProps:H}=p,f=P(p,_),r=d({},p,{component:y,disableTypography:u}),s=k(r);let o=g;o!=null&&o.type!==l&&!u&&(o=t.jsx(l,d({variant:i?"body2":"h5",className:s.title,component:"span",display:"block"},H,{children:o})));let n=b;return n!=null&&n.type!==l&&!u&&(n=t.jsx(l,d({variant:i?"body2":"body1",className:s.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:n}))),t.jsxs(w,d({className:M(s.root,v),as:y,ref:h,ownerState:r},f,{children:[i&&t.jsx(E,{className:s.avatar,ownerState:r,children:i}),t.jsxs(B,{className:s.content,ownerState:r,children:[o,n]}),m&&t.jsx(S,{className:s.action,ownerState:r,children:m})]}))}),W=I;export{W as C};
