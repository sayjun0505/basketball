import{ac as c,dN as W,dO as k,ap as l,r as v,ae as R,ag as $,x as G,dP as P,ah as T,b1 as M,s as S,cc as N}from"./index-3voNJrtd.js";const j=["className","component","disableGutters","fixed","maxWidth","classes"],y=W(),L=k("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),U=a=>P({props:a,name:"MuiContainer",defaultTheme:y}),_=(a,e)=>{const o=i=>M(e,i),{classes:p,fixed:u,disableGutters:x,maxWidth:t}=a,s={root:["root",t&&`maxWidth${l(String(t))}`,u&&"fixed",x&&"disableGutters"]};return T(s,o,p)};function z(a={}){const{createStyledComponent:e=L,useThemeProps:o=U,componentName:p="MuiContainer"}=a,u=e(({theme:t,ownerState:s})=>c({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:s})=>s.fixed&&Object.keys(t.breakpoints.values).reduce((i,n)=>{const d=n,r=t.breakpoints.values[d];return r!==0&&(i[t.breakpoints.up(d)]={maxWidth:`${r}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:s})=>c({},s.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[t.breakpoints.up(s.maxWidth)]:{maxWidth:`${t.breakpoints.values[s.maxWidth]}${t.breakpoints.unit}`}}));return v.forwardRef(function(s,i){const n=o(s),{className:d,component:r="div",disableGutters:b=!1,fixed:f=!1,maxWidth:C="lg"}=n,g=R(n,j),m=c({},n,{component:r,disableGutters:b,fixed:f,maxWidth:C}),h=_(m,p);return $.jsx(u,c({as:r,ownerState:m,className:G(h.root,d),ref:i},g))})}const E=z({createStyledComponent:S("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&e.fixed,o.disableGutters&&e.disableGutters]}}),useThemeProps:a=>N({props:a,name:"MuiContainer"})}),w=E;export{w as C};
