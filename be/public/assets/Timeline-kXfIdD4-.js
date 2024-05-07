import{s as L,T as n,bU as x,r as g,bW as $,bX as z,bY as u,x as B,az as H,d as i,j as e,c8 as f,aX as C,F as P,C as F,bb as q}from"./index-cy1M6gwN.js";import{F as a}from"./FuseExample-0-XNuDGL.js";import{D as U}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{f as D,g as V,h as Y,d as t,T as o,a as m,b as r,c as l,e as c,t as k,i as W,j as X}from"./TimelineSeparator-RSxDGJMz.js";import"./DocumentationNavigation-fvt_Eo8n.js";const G=["className"],J=p=>{const{position:s,classes:d}=p,h={root:["root",D(s)]};return H(h,Y,d)},K=L(n,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(p,s)=>{const{ownerState:d}=p;return[s.root,s[D(d.position)]]}})(({ownerState:p})=>x({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},p.position==="left"&&{textAlign:"left"})),R=g.forwardRef(function(s,d){const h=$({props:s,name:"MuiTimelineOppositeContent"}),{className:_}=h,E=z(h,G),{position:A}=g.useContext(V),I=x({},h,{position:A||"left"}),M=J(I);return u.jsx(K,x({component:"div",className:B(M.root,_),ownerState:I,ref:d},E))});R.muiName="TimelineOppositeContent";const T=R;function Q(){return i(c,{children:[i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Eat"})]}),i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Code"})]}),i(t,{children:[e(o,{children:e(m,{})}),e(l,{children:"Sleep"})]})]})}const Z=`import * as React from 'react';
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
`;function ee(){return i(c,{position:"left",children:[i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Eat"})]}),i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Code"})]}),i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Sleep"})]}),i(t,{children:[e(o,{children:e(m,{})}),e(l,{children:"Repeat"})]})]})}const ie=`import * as React from 'react';
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
`;function ne(){return i(c,{position:"alternate",children:[i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Eat"})]}),i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Code"})]}),i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Sleep"})]}),i(t,{children:[e(o,{children:e(m,{})}),e(l,{children:"Repeat"})]})]})}const te=`import * as React from 'react';
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
`;function oe(){return i(c,{position:"alternate-reverse",children:[i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Eat"})]}),i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Code"})]}),i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Sleep"})]}),i(t,{children:[e(o,{children:e(m,{})}),e(l,{children:"Repeat"})]})]})}const me=`import * as React from 'react';
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
`;function le(){return i(c,{position:"alternate",children:[i(t,{children:[i(o,{children:[e(m,{color:"secondary"}),e(r,{})]}),e(l,{children:"Secondary"})]}),i(t,{children:[e(o,{children:e(m,{color:"success"})}),e(l,{children:"Success"})]})]})}const re=`import * as React from 'react';
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
`;function ae(){return i(c,{position:"alternate",children:[i(t,{children:[i(o,{children:[e(m,{variant:"outlined"}),e(r,{})]}),e(l,{children:"Eat"})]}),i(t,{children:[i(o,{children:[e(m,{variant:"outlined",color:"primary"}),e(r,{})]}),e(l,{children:"Code"})]}),i(t,{children:[i(o,{children:[e(m,{variant:"outlined",color:"secondary"}),e(r,{})]}),e(l,{children:"Sleep"})]}),i(t,{children:[e(o,{children:e(m,{variant:"outlined"})}),e(l,{children:"Repeat"})]})]})}const ce=`import * as React from 'react';
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
`;function Te(){return i(c,{position:"alternate",children:[i(t,{children:[e(T,{color:"text.secondary",children:"09:30 am"}),i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Eat"})]}),i(t,{children:[e(T,{color:"text.secondary",children:"10:00 am"}),i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Code"})]}),i(t,{children:[e(T,{color:"text.secondary",children:"12:00 am"}),i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Sleep"})]}),i(t,{children:[e(T,{color:"text.secondary",children:"9:00 am"}),i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Repeat"})]})]})}const pe=`import * as React from 'react';
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
`;var b={},se=C;Object.defineProperty(b,"__esModule",{value:!0});var N=b.default=void 0,de=se(f()),he=u;N=b.default=(0,de.default)((0,he.jsx)("path",{d:"M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1m15.03-7c0-8-15.03-8-15.03 0zM1.02 17h15v2h-15z"}),"Fastfood");var S={},ue=C;Object.defineProperty(S,"__esModule",{value:!0});var O=S.default=void 0,fe=ue(f()),Ce=u;O=S.default=(0,fe.default)((0,Ce.jsx)("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}),"LaptopMac");var y={},xe=C;Object.defineProperty(y,"__esModule",{value:!0});var w=y.default=void 0,be=xe(f()),Se=u;w=y.default=(0,be.default)((0,Se.jsx)("path",{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3m12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4"}),"Hotel");var v={},ye=C;Object.defineProperty(v,"__esModule",{value:!0});var j=v.default=void 0,ve=ye(f()),Ie=u;j=v.default=(0,ve.default)((0,Ie.jsx)("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2z"}),"Repeat");function ge(){return i(c,{position:"alternate",children:[i(t,{children:[e(T,{sx:{m:"auto 0"},align:"right",variant:"body2",color:"text.secondary",children:"9:30 am"}),i(o,{children:[e(r,{}),e(m,{children:e(N,{})}),e(r,{})]}),i(l,{sx:{py:"12px",px:2},children:[e(n,{variant:"h6",component:"span",children:"Eat"}),e(n,{children:"Because you need strength"})]})]}),i(t,{children:[e(T,{sx:{m:"auto 0"},variant:"body2",color:"text.secondary",children:"10:00 am"}),i(o,{children:[e(r,{}),e(m,{color:"primary",children:e(O,{})}),e(r,{})]}),i(l,{sx:{py:"12px",px:2},children:[e(n,{variant:"h6",component:"span",children:"Code"}),e(n,{children:"Because it's awesome!"})]})]}),i(t,{children:[i(o,{children:[e(r,{}),e(m,{color:"primary",variant:"outlined",children:e(w,{})}),e(r,{sx:{bgcolor:"secondary.main"}})]}),i(l,{sx:{py:"12px",px:2},children:[e(n,{variant:"h6",component:"span",children:"Sleep"}),e(n,{children:"Because you need rest"})]})]}),i(t,{children:[i(o,{children:[e(r,{sx:{bgcolor:"secondary.main"}}),e(m,{color:"secondary",children:e(j,{})}),e(r,{})]}),i(l,{sx:{py:"12px",px:2},children:[e(n,{variant:"h6",component:"span",children:"Repeat"}),e(n,{children:"Because this is the life you love!"})]})]})]})}const De=`import * as React from 'react';
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
`;function Re(){return i(c,{sx:{[`& .${k.root}`]:{flex:.2}},children:[i(t,{children:[e(T,{color:"textSecondary",children:"09:30 am"}),i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Eat"})]}),i(t,{children:[e(T,{color:"textSecondary",children:"10:00 am"}),e(o,{children:e(m,{})}),e(l,{children:"Code"})]})]})}const Ne=`import * as React from 'react';
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
`;function Oe(){return i(c,{sx:{[`& .${W.root}`]:{flex:.2}},children:[i(t,{children:[e(T,{color:"textSecondary",children:"09:30 am"}),i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Eat"})]}),i(t,{children:[e(T,{color:"textSecondary",children:"10:00 am"}),e(o,{children:e(m,{})}),e(l,{children:"Code"})]})]})}const we=`import * as React from 'react';
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
`;function je(){return i(c,{sx:{[`& .${X.root}:before`]:{flex:0,padding:0}},children:[i(t,{children:[i(o,{children:[e(m,{}),e(r,{})]}),e(l,{children:"Eat"})]}),i(t,{children:[e(o,{children:e(m,{})}),e(l,{children:"Code"})]})]})}const _e=`import * as React from 'react';
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
`;function ze(p){return i(q,{children:[i("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(U,{}),e(F,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/timeline",target:"_blank",role:"button",size:"small",startIcon:e(P,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(n,{className:"text-32 my-16 font-700",component:"h1",children:"Timeline"}),e(n,{className:"description",children:"The timeline displays a list of events in chronological order."}),e("div",{className:"border border-1 p-16 rounded-16 my-12",children:i(n,{className:"text-14 mb-32",component:"div",children:["This component is not documented in the ",e("a",{href:"https://m2.material.io/",children:"Material Design guidelines"}),", but it is available in Material UI."]})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic timeline"}),e(n,{className:"text-14 mb-32",component:"div",children:"A basic timeline showing list of events."}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"BasicTimeline.js",className:"my-16",iframe:!1,component:Q,raw:Z})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Left-positioned timeline"}),e(n,{className:"text-14 mb-32",component:"div",children:"The main content of the timeline can be positioned on the left side relative to the time axis."}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"LeftPositionedTimeline.js",className:"my-16",iframe:!1,component:ee,raw:ie})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Alternating timeline"}),e(n,{className:"text-14 mb-32",component:"div",children:"The timeline can display the events on alternating sides."}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"AlternateTimeline.js",className:"my-16",iframe:!1,component:ne,raw:te})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Reverse Alternating timeline"}),e(n,{className:"text-14 mb-32",component:"div",children:"The timeline can display the events on alternating sides in reverse order."}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"AlternateReverseTimeline.js",className:"my-16",iframe:!1,component:oe,raw:me})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),i(n,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"TimelineDot"})," can appear in different colors from theme palette."]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"ColorsTimeline.js",className:"my-16",iframe:!1,component:le,raw:re})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Outlined"}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"OutlinedTimeline.js",className:"my-16",iframe:!1,component:ae,raw:ce})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Opposite content"}),e(n,{className:"text-14 mb-32",component:"div",children:"The timeline can display content on opposite sides."}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"OppositeContentTimeline.js",className:"my-16",iframe:!1,component:Te,raw:pe})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),i(n,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"CustomizedTimeline.js",className:"my-16",iframe:!1,component:ge,raw:De})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Alignment"}),e(n,{className:"text-14 mb-32",component:"div",children:"There are different ways in which a Timeline can be placed within the container."}),e(n,{className:"text-14 mb-32",component:"div",children:"You can do it by overriding the styles."}),e(n,{className:"text-14 mb-32",component:"div",children:"A Timeline centers itself in the container by default."}),e(n,{className:"text-14 mb-32",component:"div",children:"The demos below show how to adjust the relative width of the left and right sides of a Timeline:"}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Left-aligned"}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"LeftAlignedTimeline.js",className:"my-16",iframe:!1,component:Re,raw:Ne})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Right-aligned"}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"RightAlignedTimeline.js",className:"my-16",iframe:!1,component:Oe,raw:we})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Left-aligned with no opposite content"}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"NoOppositeContent.js",className:"my-16",iframe:!1,component:je,raw:_e})})]})}export{ze as default};
