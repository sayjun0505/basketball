import{r as c,K,ae as W,ab as $,ag as q,ac as E,e8 as A,e9 as B,ea as g}from"./index-3voNJrtd.js";const D=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],G={entering:{transform:"none"},entered:{transform:"none"}},H=c.forwardRef(function(l,p){const e=K(),y={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:f,appear:T=!0,children:s,easing:m,in:x,onEnter:u,onEntered:R,onEntering:L,onExit:h,onExited:P,onExiting:v,style:a,timeout:d=y,TransitionComponent:w=A}=l,Z=W(l,D),r=c.useRef(null),b=$(r,s.ref,p),o=n=>t=>{if(n){const i=r.current;t===void 0?n(i):n(i,t)}},j=o(L),C=o((n,t)=>{B(n);const i=g({style:a,timeout:d,easing:m},{mode:"enter"});n.style.webkitTransition=e.transitions.create("transform",i),n.style.transition=e.transitions.create("transform",i),u&&u(n,t)}),_=o(R),k=o(v),S=o(n=>{const t=g({style:a,timeout:d,easing:m},{mode:"exit"});n.style.webkitTransition=e.transitions.create("transform",t),n.style.transition=e.transitions.create("transform",t),h&&h(n)}),z=o(P),F=n=>{f&&f(r.current,n)};return q.jsx(w,E({appear:T,in:x,nodeRef:r,onEnter:C,onEntered:_,onEntering:j,onExit:S,onExited:z,onExiting:k,addEndListener:F,timeout:d},Z,{children:(n,t)=>c.cloneElement(s,E({style:E({transform:"scale(0)",visibility:n==="exited"&&!x?"hidden":void 0},G[n],a,s.props.style),ref:b},t))}))}),N=H;export{N as Z};
