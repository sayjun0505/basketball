import{aE as ae,aF as se,s as p,r as H,bW as ie,bX as re,bU as C,aP as me,aR as ce,bY as q,x as le,az as de,dN as G,e4 as pe,aq as T,dO as j,bk as he,e5 as E,P as y,j as t,H as x,d as i,cQ as ue,cR as ge,T as o,cS as fe,F as ye,C as xe,bb as be}from"./index-cy1M6gwN.js";import{F as g}from"./FuseExample-0-XNuDGL.js";import{D as Me}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d as ke}from"./ExpandMore-piUiZbDG.js";import"./DocumentationNavigation-fvt_Eo8n.js";function we(e){return ae("MuiMasonry",e)}se("MuiMasonry",["root"]);const Ce=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],f=e=>Number(e.replace("px","")),Be={flexBasis:"100%",width:0,margin:0,padding:0},Ne=e=>{const{classes:n}=e;return de({root:["root"]},we,n)},ve=({ownerState:e,theme:n})=>{let m={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const h={};if(e.isSSR){const s={},a=f(n.spacing(e.defaultSpacing));for(let r=1;r<=e.defaultColumns;r+=1)s[`&:nth-of-type(${e.defaultColumns}n+${r%e.defaultColumns})`]={order:r};return h.height=e.defaultHeight,h.margin=-(a/2),h["& > *"]=C({},m["& > *"],s,{margin:a/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${a}px)`}),C({},m,h)}const c=G({values:e.spacing,breakpoints:n.breakpoints.values}),B=pe(n);m=T(m,j({theme:n},c,s=>{let a;if(typeof s=="string"&&!Number.isNaN(Number(s))||typeof s=="number"){const r=Number(s);a=E(B,r)}else a=s;return C({margin:`calc(0px - (${a} / 2))`,"& > *":{margin:`calc(${a} / 2)`}},e.maxColumnHeight&&{height:typeof a=="number"?Math.ceil(e.maxColumnHeight+f(a)):`calc(${e.maxColumnHeight}px + ${a})`})}));const l=G({values:e.columns,breakpoints:n.breakpoints.values});return m=T(m,j({theme:n},l,s=>{const r=`${(100/Number(s)).toFixed(2)}%`,N=typeof c=="string"&&!Number.isNaN(Number(c))||typeof c=="number"?E(B,Number(c)):"0px";return{"& > *":{width:`calc(${r} - ${N})`}}})),typeof c=="object"&&(m=T(m,j({theme:n},c,(s,a)=>{if(a){const r=Number(s),N=Object.keys(l).pop(),u=E(B,r);return{"& > *":{width:`calc(${`${(100/(typeof l=="object"?l[a]||l[N]:l)).toFixed(2)}%`} - ${u})`}}}return null}))),m},Re=p("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,n)=>[n.root]})(ve),Se=H.forwardRef(function(n,m){const h=ie({props:n,name:"MuiMasonry"}),{children:c,className:B,component:L="div",columns:l=4,spacing:P=1,defaultColumns:s,defaultHeight:a,defaultSpacing:r}=h,N=re(h,Ce),u=H.useRef(),[$,z]=H.useState(),D=!$&&a&&s!==void 0&&r!==void 0,[Q,X]=H.useState(D?s-1:0),V=C({},h,{spacing:P,columns:l,maxColumnHeight:$,defaultColumns:s,defaultHeight:a,defaultSpacing:r,isSSR:D}),Y=Ne(V),J=M=>{if(!u.current||!M||M.length===0)return;const d=u.current,R=u.current.firstChild,O=d.clientWidth,W=R.clientWidth;if(O===0||W===0)return;const _=window.getComputedStyle(R),ee=f(_.marginLeft),te=f(_.marginRight),F=Math.round(O/(W+ee+te)),S=new Array(F).fill(0);let v=!1;d.childNodes.forEach(k=>{if(k.nodeType!==Node.ELEMENT_NODE||k.dataset.class==="line-break"||v)return;const A=window.getComputedStyle(k),ne=f(A.marginTop),oe=f(A.marginBottom),U=f(A.height)?Math.ceil(f(A.height))+ne+oe:0;if(U===0){v=!0;return}for(let w=0;w<k.childNodes.length;w+=1){const I=k.childNodes[w];if(I.tagName==="IMG"&&I.clientHeight===0){v=!0;break}}if(!v){const w=S.indexOf(Math.min(...S));S[w]+=U;const I=w+1;k.style.order=I}}),v||he.flushSync(()=>{z(Math.max(...S)),X(F>0?F-1:0)})};me(()=>{if(typeof ResizeObserver>"u")return;let M;const d=new ResizeObserver(()=>{M=requestAnimationFrame(J)});return u.current&&u.current.childNodes.forEach(R=>{d.observe(R)}),()=>{M&&window.cancelAnimationFrame(M),d&&d.disconnect()}},[l,P,c]);const K=ce(m,u),Z=new Array(Q).fill("").map((M,d)=>q.jsx("span",{"data-class":"line-break",style:C({},Be,{order:d+1})},d));return q.jsxs(Re,C({as:L,className:le(Y.root,B),ref:K,ownerState:V},N,{children:[c,Z]}))}),b=Se,Ae=[150,30,90,70,110,150,130,80,50,90,100,150,30,50,80],Ie=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function He(){return t(x,{sx:{width:500,minHeight:393},children:t(b,{columns:4,spacing:2,children:Ae.map((e,n)=>t(Ie,{sx:{height:e},children:n+1},n))})})}const Pe=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function BasicMasonry() {
    return (<Box sx={{ width: 500, minHeight: 393 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (<Item key={index} sx={{ height }}>
            {index + 1}
          </Item>))}
      </Masonry>
    </Box>);
}
`,$e=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary,borderBottomLeftRadius:0,borderBottomRightRadius:0}));function Fe(){return t(x,{sx:{width:500,minHeight:829},children:t(b,{columns:3,spacing:2,children:Te.map((e,n)=>i("div",{children:[t($e,{children:n+1}),t("img",{srcSet:`${e.img}?w=162&auto=format&dpr=2 2x`,src:`${e.img}?w=162&auto=format`,alt:e.title,loading:"lazy",style:{borderBottomLeftRadius:4,borderBottomRightRadius:4,display:"block",width:"100%"}})]},n))})})}const Te=[{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern"},{img:"https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",title:"Snacks"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms"},{img:"https://images.unsplash.com/photo-1529655683826-aba9b3e77383",title:"Tower"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star"},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey"},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball"},{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",title:"Tree"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee"},{img:"https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",title:"Camping Car"},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats"},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil"},{img:"https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",title:"Mountain"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike"}],je=`import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));
export default function ImageMasonry() {
    return (<Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (<div key={index}>
            <Label>{index + 1}</Label>
            <img srcSet={\`\${item.img}?w=162&auto=format&dpr=2 2x\`} src={\`\${item.img}?w=162&auto=format\`} alt={item.title} loading="lazy" style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
            }}/>
          </div>))}
      </Masonry>
    </Box>);
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
        title: 'Snacks',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
        title: 'Tower',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
        title: 'Tree',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
        title: 'Camping Car',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
        title: 'Mountain',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
`,Ee=[150,30,90,70,90,100,150,30,50,80],Le=p(ue)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",color:e.palette.text.secondary}));function ze(){return t(x,{sx:{width:500,minHeight:377},children:t(b,{columns:3,spacing:2,children:Ee.map((e,n)=>t(y,{children:i(Le,{sx:{minHeight:e},children:[t(ge,{expandIcon:t(ke,{}),children:i(o,{children:["Accordion ",n+1]})}),t(fe,{children:"Contents"})]})},n))})})}const De=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import { Accordion, AccordionDetails, AccordionSummary, Typography, } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
}));
export default function MasonryWithVariableHeightItems() {
    return (<Box sx={{ width: 500, minHeight: 377 }}>
      <Masonry columns={3} spacing={2}>
        {heights.map((height, index) => (<Paper key={index}>
            <StyledAccordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Contents</AccordionDetails>
            </StyledAccordion>
          </Paper>))}
      </Masonry>
    </Box>);
}
`,Ve=[150,30,90,70,90,100,150,30,50,80],Oe=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function We(){return t(x,{sx:{width:500,minHeight:253},children:t(b,{columns:4,spacing:2,children:Ve.map((e,n)=>t(Oe,{sx:{height:e},children:n+1},n))})})}const _e=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function FixedColumns() {
    return (<Box sx={{ width: 500, minHeight: 253 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (<Item key={index} sx={{ height }}>
            {index + 1}
          </Item>))}
      </Masonry>
    </Box>);
}
`,Ue=[150,30,90,70,90,100,150,30,50,80],qe=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function Ge(){return t(x,{sx:{width:500,minHeight:253},children:t(b,{columns:{xs:3,sm:4},spacing:2,children:Ue.map((e,n)=>t(qe,{sx:{height:e},children:n+1},n))})})}const Qe=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function ResponsiveColumns() {
    return (<Box sx={{ width: 500, minHeight: 253 }}>
      <Masonry columns={{ xs: 3, sm: 4 }} spacing={2}>
        {heights.map((height, index) => (<Item key={index} sx={{ height }}>
            {index + 1}
          </Item>))}
      </Masonry>
    </Box>);
}
`,Xe=[150,30,90,70,90,100,150,30,50,80],Ye=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function Je(){return t(x,{sx:{width:500,minHeight:377},children:t(b,{columns:3,spacing:3,children:Xe.map((e,n)=>t(Ye,{sx:{height:e},children:n+1},n))})})}const Ke=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function FixedSpacing() {
    return (<Box sx={{ width: 500, minHeight: 377 }}>
      <Masonry columns={3} spacing={3}>
        {heights.map((height, index) => (<Item key={index} sx={{ height }}>
            {index + 1}
          </Item>))}
      </Masonry>
    </Box>);
}
`,Ze=[150,30,90,70,90,100,150,30,50,80],et=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function tt(){return t(x,{sx:{width:500,minHeight:377},children:t(b,{columns:3,spacing:{xs:1,sm:2,md:3},children:Ze.map((e,n)=>t(et,{sx:{height:e},children:n+1},n))})})}const nt=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function ResponsiveSpacing() {
    return (<Box sx={{ width: 500, minHeight: 377 }}>
      <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
        {heights.map((height, index) => (<Item key={index} sx={{ height }}>
            {index + 1}
          </Item>))}
      </Masonry>
    </Box>);
}
`,ot=[150,30,90,70,110,150,130,80,50,90,100,150,30,50,80],at=p(y)(({theme:e})=>({backgroundColor:e.palette.mode==="dark"?"#1A2027":"#fff",...e.typography.body2,padding:e.spacing(.5),textAlign:"center",color:e.palette.text.secondary}));function st(){return t(x,{sx:{width:500,minHeight:393},children:t(b,{columns:4,spacing:2,defaultHeight:450,defaultColumns:4,defaultSpacing:1,children:ot.map((e,n)=>t(at,{sx:{height:e},children:n+1},n))})})}const it=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function SSRMasonry() {
    return (<Box sx={{ width: 500, minHeight: 393 }}>
      <Masonry columns={4} spacing={2} defaultHeight={450} defaultColumns={4} defaultSpacing={1}>
        {heights.map((height, index) => (<Item key={index} sx={{ height }}>
            {index + 1}
          </Item>))}
      </Masonry>
    </Box>);
}
`;function pt(e){return i(be,{children:[i("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[t(Me,{}),t(xe,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/masonry",target:"_blank",role:"button",size:"small",startIcon:t(ye,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),t(o,{className:"text-32 my-16 font-700",component:"h1",children:"Masonry"}),t(o,{className:"description",children:"Masonry lays out contents of varying dimensions as blocks of the same width and different height with configurable gaps."}),t(o,{className:"text-14 mb-32",component:"div",children:"Masonry maintains a list of content blocks with a consistent width but different height. The contents are ordered by row. If a row is already filled with the specified number of columns, the next item starts another row, and it is added to the shortest column in order to optimize the use of space."}),t(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic masonry"}),i(o,{className:"text-14 mb-32",component:"div",children:["A simple example of a ",t("code",{children:"Masonry"}),". ",t("code",{children:"Masonry"})," is a container for one or more items. It can receive any element including ",t("code",{children:"<div />"})," and ",t("code",{children:"<img //>"}),"."]}),t(o,{className:"text-14 mb-32",component:"div",children:t(g,{name:"BasicMasonry.js",className:"my-16",iframe:!1,component:He,raw:Pe})}),t(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Image masonry"}),i(o,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of ",t("code",{children:"Masonry"})," for images. ",t("code",{children:"Masonry"})," orders its children by row. If you'd like to order images by column, check out ",t("a",{href:"/material-ui/react-image-list/#masonry-image-list",children:"ImageList"}),"."]}),t(o,{className:"text-14 mb-32",component:"div",children:t(g,{name:"ImageMasonry.js",className:"my-16",iframe:!1,component:Fe,raw:je})}),t(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Items with variable height"}),i(o,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of ",t("code",{children:"Masonry"})," for items with variable height. Items can move to other columns in order to abide by the rule that items are always added to the shortest column and hence optimize the use of space."]}),t(o,{className:"text-14 mb-32",component:"div",children:t(g,{name:"MasonryWithVariableHeightItems.js",className:"my-16",iframe:!1,component:ze,raw:De})}),t(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Columns"}),i(o,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of the ",t("code",{children:"columns"})," to configure the number of columns of a ",t("code",{children:"Masonry"}),"."]}),t(o,{className:"text-14 mb-32",component:"div",children:t(g,{name:"FixedColumns.js",className:"my-16",iframe:!1,component:We,raw:_e})}),i(o,{className:"text-14 mb-32",component:"div",children:[t("code",{children:"columns"})," accepts responsive values:"]}),t(o,{className:"text-14 mb-32",component:"div",children:t(g,{name:"ResponsiveColumns.js",className:"my-16",iframe:!1,component:Ge,raw:Qe})}),t(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Spacing"}),i(o,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of the ",t("code",{children:"spacing"})," to configure the spacing between items. It is important to note that the value provided to the ",t("code",{children:"spacing"})," prop is multiplied by the theme's spacing field."]}),t(o,{className:"text-14 mb-32",component:"div",children:t(g,{name:"FixedSpacing.js",className:"my-16",iframe:!1,component:Je,raw:Ke})}),i(o,{className:"text-14 mb-32",component:"div",children:[t("code",{children:"spacing"})," accepts responsive values:"]}),t(o,{className:"text-14 mb-32",component:"div",children:t(g,{name:"ResponsiveSpacing.js",className:"my-16",iframe:!1,component:tt,raw:nt})}),t(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Server-side rendering"}),i(o,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of the ",t("code",{children:"defaultHeight"}),", ",t("code",{children:"defaultColumns"})," and ",t("code",{children:"defaultSpacing"}),", which are used to support server-side rendering."]}),t("div",{className:"border border-1 p-16 rounded-16 my-12",children:i(o,{className:"text-14 mb-32",component:"div",children:[t("code",{children:"defaultHeight"})," should be large enough to render all rows. Also, it is worth mentioning that items are not added to the shortest column in case of server-side rendering."]})}),t(o,{className:"text-14 mb-32",component:"div",children:t(g,{name:"SSRMasonry.js",className:"my-16",iframe:!1,component:st,raw:it})})]})}export{pt as default};
