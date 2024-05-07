import{d as t,j as e,H as r,r as i,F as c,C as l,T as n,dp as a,bb as d}from"./index-cy1M6gwN.js";import{F as o}from"./FuseExample-0-XNuDGL.js";import{D as h}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{C as m}from"./CssBaseline-NTb4p4Ek.js";import{C as s}from"./Container-i6Mq7V8z.js";import"./DocumentationNavigation-fvt_Eo8n.js";function f(){return t(i.Fragment,{children:[e(m,{}),e(s,{maxWidth:"sm",children:e(r,{sx:{bgcolor:"#cfe8fc",height:"100vh"}})})]})}const p=`import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
export default function SimpleContainer() {
    return (<React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}/>
      </Container>
    </React.Fragment>);
}
`;function u(){return t(i.Fragment,{children:[e(m,{}),e(s,{fixed:!0,children:e(r,{sx:{bgcolor:"#cfe8fc",height:"100vh"}})})]})}const x=`import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
export default function FixedContainer() {
    return (<React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}/>
      </Container>
    </React.Fragment>);
}
`;function v(C){return t(d,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(h,{}),e(l,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/container",target:"_blank",role:"button",size:"small",startIcon:e(c,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(n,{className:"text-32 my-16 font-700",component:"h1",children:"Container"}),e(n,{className:"description",children:"The container centers your content horizontally. It's the most basic layout element."}),e(n,{className:"text-14 mb-32",component:"div",children:"While containers can be nested, most layouts do not require a nested container."}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Fluid"}),t(n,{className:"text-14 mb-32",component:"div",children:["A fluid container width is bounded by the ",e("code",{children:"maxWidth"})," prop value."]}),e(n,{className:"text-14 mb-32",component:"div",children:e(o,{name:"SimpleContainer.js",className:"my-16",iframe:!0,component:f,raw:p})}),e(a,{component:"pre",className:"language-jsx",children:` 
<Container maxWidth="sm">
`}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Fixed"}),t(n,{className:"text-14 mb-32",component:"div",children:["If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the ",e("code",{children:"fixed"})," prop. The max-width matches the min-width of the current breakpoint."]}),e(n,{className:"text-14 mb-32",component:"div",children:e(o,{name:"FixedContainer.js",className:"my-16",iframe:!0,component:u,raw:x})}),e(a,{component:"pre",className:"language-jsx",children:` 
<Container fixed>
`})]})}export{v as default};
