import{r as f,b1 as R,b2 as D,ap as E,s as N,cc as O,ae as w,ac as T,ag as x,x as M,ah as $,T as o,b5 as K,d as i,j as e,ay as A,az as _,F as Q,C as X,bx as Z}from"./index-3voNJrtd.js";import{F as y}from"./FuseExample-L3LbvVcu.js";import{D as ee}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import"./DocumentationNavigation-us8sikvN.js";const ie=f.createContext({}),j=ie;function ne(n){return R("MuiTimeline",n)}D("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function g(n){return n==="alternate-reverse"?"positionAlternateReverse":`position${E(n)}`}const te=["position","className"],oe=n=>{const{position:t,classes:l}=n,r={root:["root",t&&g(t)]};return $(r,ne,l)},le=N("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:l}=n;return[t.root,l.position&&t[g(l.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),re=f.forwardRef(function(t,l){const r=O({props:t,name:"MuiTimeline"}),{position:d="right",className:C}=r,h=w(r,te),u=T({},r,{position:d}),v=oe(u),I=f.useMemo(()=>({position:d}),[d]);return x.jsx(j.Provider,{value:I,children:x.jsx(le,T({className:M(v.root,C),ownerState:u,ref:l},h))})}),b=re;function me(n){return R("MuiTimelineConnector",n)}D("MuiTimelineConnector",["root"]);const ae=["className"],se=n=>{const{classes:t}=n;return $({root:["root"]},me,t)},ce=N("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(n,t)=>t.root})(({theme:n})=>({width:2,backgroundColor:(n.vars||n).palette.grey[400],flexGrow:1})),pe=f.forwardRef(function(t,l){const r=O({props:t,name:"MuiTimelineConnector"}),{className:d}=r,C=w(r,ae),h=r,u=se(h);return x.jsx(ce,T({className:M(u.root,d),ownerState:h,ref:l},C))}),p=pe;function Te(n){return R("MuiTimelineContent",n)}const de=D("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),B=de,ue=["className"],he=n=>{const{position:t,classes:l}=n,r={root:["root",g(t)]};return $(r,Te,l)},fe=N(o,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:l}=n;return[t.root,t[g(l.position)]]}})(({ownerState:n})=>T({flex:1,padding:"6px 16px",textAlign:"left"},n.position==="left"&&{textAlign:"right"})),Ce=f.forwardRef(function(t,l){const r=O({props:t,name:"MuiTimelineContent"}),{className:d}=r,C=w(r,ue),{position:h}=f.useContext(j),u=T({},r,{position:h||"right"}),v=he(u);return x.jsx(fe,T({component:"div",className:M(v.root,d),ownerState:u,ref:l},C))}),m=Ce;function xe(n){return R("MuiTimelineDot",n)}D("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const ve=["className","color","variant"],ye=n=>{const{color:t,variant:l,classes:r}=n,d={root:["root",l,t!=="inherit"&&`${l}${E(t)}`]};return $(d,xe,r)},be=N("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:l}=n;return[t.root,t[l.color!=="inherit"&&`${l.variant}${E(l.color)}`],t[l.variant]]}})(({ownerState:n,theme:t})=>T({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},n.variant==="filled"&&T({borderColor:"transparent"},n.color!=="inherit"&&T({},n.color==="grey"?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[n.color].contrastText,backgroundColor:(t.vars||t).palette[n.color].main})),n.variant==="outlined"&&T({boxShadow:"none",backgroundColor:"transparent"},n.color!=="inherit"&&T({},n.color==="grey"?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[n.color].main})))),Se=f.forwardRef(function(t,l){const r=O({props:t,name:"MuiTimelineDot"}),{className:d,color:C="grey",variant:h="filled"}=r,u=w(r,ve),v=T({},r,{color:C,variant:h}),I=ye(v);return x.jsx(be,T({className:M(I.root,d),ownerState:v,ref:l},u))}),a=Se;function Ie(n){return R("MuiTimelineOppositeContent",n)}const ge=D("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),H=ge,Re=["className"],De=n=>{const{position:t,classes:l}=n,r={root:["root",g(t)]};return $(r,Ie,l)},Ne=N(o,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:l}=n;return[t.root,t[g(l.position)]]}})(({ownerState:n})=>T({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},n.position==="left"&&{textAlign:"left"})),F=f.forwardRef(function(t,l){const r=O({props:t,name:"MuiTimelineOppositeContent"}),{className:d}=r,C=w(r,Re),{position:h}=f.useContext(j),u=T({},r,{position:h||"left"}),v=De(u);return x.jsx(Ne,T({component:"div",className:M(v.root,d),ownerState:u,ref:l},C))});F.muiName="TimelineOppositeContent";const S=F;function Oe(n){return R("MuiTimelineItem",n)}const we=D("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]),Me=we,$e=["position","className"],je=n=>{const{position:t,classes:l,hasOppositeContent:r}=n,d={root:["root",g(t),!r&&"missingOppositeContent"]};return $(d,Oe,l)},Ae=N("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:l}=n;return[t.root,t[g(l.position)]]}})(({ownerState:n})=>T({listStyle:"none",display:"flex",position:"relative",minHeight:70},n.position==="left"&&{flexDirection:"row-reverse"},(n.position==="alternate"||n.position==="alternate-reverse")&&{[`&:nth-of-type(${n.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${B.root}`]:{textAlign:"right"},[`& .${H.root}`]:{textAlign:"left"}}},!n.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}})),_e=f.forwardRef(function(t,l){const r=O({props:t,name:"MuiTimelineItem"}),{position:d,className:C}=r,h=w(r,$e),{position:u}=f.useContext(j);let v=!1;f.Children.forEach(r.children,J=>{K(J,["TimelineOppositeContent"])&&(v=!0)});const I=T({},r,{position:d||u||"right",hasOppositeContent:v}),W=je(I),Y=f.useMemo(()=>({position:I.position}),[I.position]);return x.jsx(j.Provider,{value:Y,children:x.jsx(Ae,T({className:M(W.root,C),ownerState:I,ref:l},h))})}),s=_e;function Ee(n){return R("MuiTimelineSeparator",n)}D("MuiTimelineSeparator",["root"]);const Le=["className"],ze=n=>{const{classes:t}=n;return $({root:["root"]},Ee,t)},Pe=N("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(n,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),Ue=f.forwardRef(function(t,l){const r=O({props:t,name:"MuiTimelineSeparator"}),{className:d}=r,C=w(r,Le),h=r,u=ze(h);return x.jsx(Pe,T({className:M(u.root,d),ownerState:h,ref:l},C))}),c=Ue;function Be(){return i(b,{children:[i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Eat"})]}),i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Code"})]}),i(s,{children:[e(c,{children:e(a,{})}),e(m,{children:"Sleep"})]})]})}const He=`import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
export default function BasicTimeline() {
    return (<Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
    </Timeline>);
}
`;function Fe(){return i(b,{position:"left",children:[i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Eat"})]}),i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Code"})]}),i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Sleep"})]}),i(s,{children:[e(c,{children:e(a,{})}),e(m,{children:"Repeat"})]})]})}const ke=`import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
export default function LeftPositionedTimeline() {
    return (<Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>);
}
`;function qe(){return i(b,{position:"alternate",children:[i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Eat"})]}),i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Code"})]}),i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Sleep"})]}),i(s,{children:[e(c,{children:e(a,{})}),e(m,{children:"Repeat"})]})]})}const Ve=`import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
export default function AlternateTimeline() {
    return (<Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>);
}
`;function Ge(){return i(b,{position:"alternate-reverse",children:[i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Eat"})]}),i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Code"})]}),i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Sleep"})]}),i(s,{children:[e(c,{children:e(a,{})}),e(m,{children:"Repeat"})]})]})}const We=`import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
export default function AlternateReverseTimeline() {
    return (<Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>);
}
`;function Ye(){return i(b,{position:"alternate",children:[i(s,{children:[i(c,{children:[e(a,{color:"secondary"}),e(p,{})]}),e(m,{children:"Secondary"})]}),i(s,{children:[e(c,{children:e(a,{color:"success"})}),e(m,{children:"Success"})]})]})}const Je=`import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
export default function ColorsTimeline() {
    return (<Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Secondary</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success"/>
        </TimelineSeparator>
        <TimelineContent>Success</TimelineContent>
      </TimelineItem>
    </Timeline>);
}
`;function Ke(){return i(b,{position:"alternate",children:[i(s,{children:[i(c,{children:[e(a,{variant:"outlined"}),e(p,{})]}),e(m,{children:"Eat"})]}),i(s,{children:[i(c,{children:[e(a,{variant:"outlined",color:"primary"}),e(p,{})]}),e(m,{children:"Code"})]}),i(s,{children:[i(c,{children:[e(a,{variant:"outlined",color:"secondary"}),e(p,{})]}),e(m,{children:"Sleep"})]}),i(s,{children:[e(c,{children:e(a,{variant:"outlined"})}),e(m,{children:"Repeat"})]})]})}const Qe=`import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
export default function OutlinedTimeline() {
    return (<Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined"/>
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>);
}
`;function Xe(){return i(b,{position:"alternate",children:[i(s,{children:[e(S,{color:"text.secondary",children:"09:30 am"}),i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Eat"})]}),i(s,{children:[e(S,{color:"text.secondary",children:"10:00 am"}),i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Code"})]}),i(s,{children:[e(S,{color:"text.secondary",children:"12:00 am"}),i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Sleep"})]}),i(s,{children:[e(S,{color:"text.secondary",children:"9:00 am"}),i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Repeat"})]})]})}const Ze=`import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
export default function OppositeContentTimeline() {
    return (<Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>);
}
`;var L={},ei=_;Object.defineProperty(L,"__esModule",{value:!0});var k=L.default=void 0,ii=ei(A()),ni=x;k=L.default=(0,ii.default)((0,ni.jsx)("path",{d:"M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1m15.03-7c0-8-15.03-8-15.03 0zM1.02 17h15v2h-15z"}),"Fastfood");var z={},ti=_;Object.defineProperty(z,"__esModule",{value:!0});var q=z.default=void 0,oi=ti(A()),li=x;q=z.default=(0,oi.default)((0,li.jsx)("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}),"LaptopMac");var P={},ri=_;Object.defineProperty(P,"__esModule",{value:!0});var V=P.default=void 0,mi=ri(A()),ai=x;V=P.default=(0,mi.default)((0,ai.jsx)("path",{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3m12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4"}),"Hotel");var U={},si=_;Object.defineProperty(U,"__esModule",{value:!0});var G=U.default=void 0,ci=si(A()),pi=x;G=U.default=(0,ci.default)((0,pi.jsx)("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2z"}),"Repeat");function Ti(){return i(b,{position:"alternate",children:[i(s,{children:[e(S,{sx:{m:"auto 0"},align:"right",variant:"body2",color:"text.secondary",children:"9:30 am"}),i(c,{children:[e(p,{}),e(a,{children:e(k,{})}),e(p,{})]}),i(m,{sx:{py:"12px",px:2},children:[e(o,{variant:"h6",component:"span",children:"Eat"}),e(o,{children:"Because you need strength"})]})]}),i(s,{children:[e(S,{sx:{m:"auto 0"},variant:"body2",color:"text.secondary",children:"10:00 am"}),i(c,{children:[e(p,{}),e(a,{color:"primary",children:e(q,{})}),e(p,{})]}),i(m,{sx:{py:"12px",px:2},children:[e(o,{variant:"h6",component:"span",children:"Code"}),e(o,{children:"Because it's awesome!"})]})]}),i(s,{children:[i(c,{children:[e(p,{}),e(a,{color:"primary",variant:"outlined",children:e(V,{})}),e(p,{sx:{bgcolor:"secondary.main"}})]}),i(m,{sx:{py:"12px",px:2},children:[e(o,{variant:"h6",component:"span",children:"Sleep"}),e(o,{children:"Because you need rest"})]})]}),i(s,{children:[i(c,{children:[e(p,{sx:{bgcolor:"secondary.main"}}),e(a,{color:"secondary",children:e(G,{})}),e(p,{})]}),i(m,{sx:{py:"12px",px:2},children:[e(o,{variant:"h6",component:"span",children:"Repeat"}),e(o,{children:"Because this is the life you love!"})]})]})]})}const di=`import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
export default function CustomizedTimeline() {
    return (<Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>);
}
`;function ui(){return i(b,{sx:{[`& .${H.root}`]:{flex:.2}},children:[i(s,{children:[e(S,{color:"textSecondary",children:"09:30 am"}),i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Eat"})]}),i(s,{children:[e(S,{color:"textSecondary",children:"10:00 am"}),e(c,{children:e(a,{})}),e(m,{children:"Code"})]})]})}const hi=`import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses, } from '@mui/lab/TimelineOppositeContent';
export default function LeftAlignedTimeline() {
    return (<Timeline sx={{
            [\`& .\${timelineOppositeContentClasses.root}\`]: {
                flex: 0.2,
            },
        }}>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>);
}
`;function fi(){return i(b,{sx:{[`& .${B.root}`]:{flex:.2}},children:[i(s,{children:[e(S,{color:"textSecondary",children:"09:30 am"}),i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Eat"})]}),i(s,{children:[e(S,{color:"textSecondary",children:"10:00 am"}),e(c,{children:e(a,{})}),e(m,{children:"Code"})]})]})}const Ci=`import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent, { timelineContentClasses } from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
export default function RightAlignedTimeline() {
    return (<Timeline sx={{
            [\`& .\${timelineContentClasses.root}\`]: {
                flex: 0.2,
            },
        }}>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>);
}
`;function xi(){return i(b,{sx:{[`& .${Me.root}:before`]:{flex:0,padding:0}},children:[i(s,{children:[i(c,{children:[e(a,{}),e(p,{})]}),e(m,{children:"Eat"})]}),i(s,{children:[e(c,{children:e(a,{})}),e(m,{children:"Code"})]})]})}const vi=`import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
export default function NoOppositeContent() {
    return (<Timeline sx={{
            [\`& .\${timelineItemClasses.root}:before\`]: {
                flex: 0,
                padding: 0,
            },
        }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>);
}
`;function gi(n){return i(Z,{children:[i("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(ee,{}),e(X,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/timeline",target:"_blank",role:"button",size:"small",startIcon:e(Q,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Timeline"}),e(o,{className:"description",children:"The timeline displays a list of events in chronological order."}),e("div",{className:"border border-1 p-16 rounded-16 my-12",children:i(o,{className:"text-14 mb-32",component:"div",children:["This component is not documented in the ",e("a",{href:"https://m2.material.io/",children:"Material Design guidelines"}),", but it is available in Material UI."]})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic timeline"}),e(o,{className:"text-14 mb-32",component:"div",children:"A basic timeline showing list of events."}),e(o,{className:"text-14 mb-32",component:"div",children:e(y,{name:"BasicTimeline.js",className:"my-16",iframe:!1,component:Be,raw:He})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Left-positioned timeline"}),e(o,{className:"text-14 mb-32",component:"div",children:"The main content of the timeline can be positioned on the left side relative to the time axis."}),e(o,{className:"text-14 mb-32",component:"div",children:e(y,{name:"LeftPositionedTimeline.js",className:"my-16",iframe:!1,component:Fe,raw:ke})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Alternating timeline"}),e(o,{className:"text-14 mb-32",component:"div",children:"The timeline can display the events on alternating sides."}),e(o,{className:"text-14 mb-32",component:"div",children:e(y,{name:"AlternateTimeline.js",className:"my-16",iframe:!1,component:qe,raw:Ve})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Reverse Alternating timeline"}),e(o,{className:"text-14 mb-32",component:"div",children:"The timeline can display the events on alternating sides in reverse order."}),e(o,{className:"text-14 mb-32",component:"div",children:e(y,{name:"AlternateReverseTimeline.js",className:"my-16",iframe:!1,component:Ge,raw:We})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),i(o,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"TimelineDot"})," can appear in different colors from theme palette."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(y,{name:"ColorsTimeline.js",className:"my-16",iframe:!1,component:Ye,raw:Je})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Outlined"}),e(o,{className:"text-14 mb-32",component:"div",children:e(y,{name:"OutlinedTimeline.js",className:"my-16",iframe:!1,component:Ke,raw:Qe})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Opposite content"}),e(o,{className:"text-14 mb-32",component:"div",children:"The timeline can display content on opposite sides."}),e(o,{className:"text-14 mb-32",component:"div",children:e(y,{name:"OppositeContentTimeline.js",className:"my-16",iframe:!1,component:Xe,raw:Ze})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),i(o,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(y,{name:"CustomizedTimeline.js",className:"my-16",iframe:!1,component:Ti,raw:di})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Alignment"}),e(o,{className:"text-14 mb-32",component:"div",children:"There are different ways in which a Timeline can be placed within the container."}),e(o,{className:"text-14 mb-32",component:"div",children:"You can do it by overriding the styles."}),e(o,{className:"text-14 mb-32",component:"div",children:"A Timeline centers itself in the container by default."}),e(o,{className:"text-14 mb-32",component:"div",children:"The demos below show how to adjust the relative width of the left and right sides of a Timeline:"}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Left-aligned"}),e(o,{className:"text-14 mb-32",component:"div",children:e(y,{name:"LeftAlignedTimeline.js",className:"my-16",iframe:!1,component:ui,raw:hi})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Right-aligned"}),e(o,{className:"text-14 mb-32",component:"div",children:e(y,{name:"RightAlignedTimeline.js",className:"my-16",iframe:!1,component:fi,raw:Ci})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Left-aligned with no opposite content"}),e(o,{className:"text-14 mb-32",component:"div",children:e(y,{name:"NoOppositeContent.js",className:"my-16",iframe:!1,component:xi,raw:vi})})]})}export{gi as default};
