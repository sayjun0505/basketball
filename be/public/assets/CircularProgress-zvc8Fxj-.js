import{aF as N,aE as U,bT as D,s as v,ay as n,bU as o,bV as M,r as z,bW as E,bX as w,bY as g,x as F,az as I}from"./index-cy1M6gwN.js";function W(r){return U("MuiCircularProgress",r)}const K=N("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]),A=K,T=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,b,S,$;const a=44,V=D(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),B=D(b||(b=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),G=r=>{const{classes:s,variant:e,color:t,disableShrink:d}=r,u={root:["root",e,`color${n(t)}`],svg:["svg"],circle:["circle",`circle${n(e)}`,d&&"circleDisableShrink"]};return I(u,W,s)},L=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${n(e.color)}`]]}})(({ownerState:r,theme:s})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:s.transitions.create("transform")},r.color!=="inherit"&&{color:(s.vars||s).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&M(S||(S=l`
      animation: ${0} 1.4s linear infinite;
    `),V)),X=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,s)=>s.svg})({display:"block"}),Y=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,s[`circle${n(e.variant)}`],e.disableShrink&&s.circleDisableShrink]}})(({ownerState:r,theme:s})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:s.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&M($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),B)),Z=z.forwardRef(function(s,e){const t=E({props:s,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:R=!1,size:m=40,style:_,thickness:i=3.6,value:h=0,variant:k="indeterminate"}=t,j=w(t,T),c=o({},t,{color:u,disableShrink:R,size:m,thickness:i,value:h,variant:k}),p=G(c),f={},x={},C={};if(k==="determinate"){const y=2*Math.PI*((a-i)/2);f.strokeDasharray=y.toFixed(3),C["aria-valuenow"]=Math.round(h),f.strokeDashoffset=`${((100-h)/100*y).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(L,o({className:F(p.root,d),style:o({width:m,height:m},x,_),ownerState:c,ref:e,role:"progressbar"},C,j,{children:g.jsx(X,{className:p.svg,ownerState:c,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:g.jsx(Y,{className:p.circle,style:f,ownerState:c,cx:a,cy:a,r:(a-i)/2,fill:"none",strokeWidth:i})})}))}),H=Z;export{H as C,A as c};
