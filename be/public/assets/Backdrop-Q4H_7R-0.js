import{r as s,d as a,j as e,C as t,dT as i,F as l,T as o,bb as m}from"./index-cy1M6gwN.js";import{F as d}from"./FuseExample-0-XNuDGL.js";import{D as p}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{C as h}from"./CircularProgress-zvc8Fxj-.js";import"./DocumentationNavigation-fvt_Eo8n.js";function u(){const[r,n]=s.useState(!1);return a("div",{children:[e(t,{onClick:()=>{n(!0)},children:"Show backdrop"}),e(i,{sx:{color:"#fff",zIndex:c=>c.zIndex.drawer+1},open:r,onClick:()=>{n(!1)},children:e(h,{color:"inherit"})})]})}const f=`import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
export default function SimpleBackdrop() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (<div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
        <CircularProgress color="inherit"/>
      </Backdrop>
    </div>);
}
`;function y(r){return a(m,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(p,{}),e(t,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/backdrop",target:"_blank",role:"button",size:"small",startIcon:e(l,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Backdrop"}),e(o,{className:"description",children:"The Backdrop component narrows the user's focus to a particular element on the screen."}),e(o,{className:"text-14 mb-32",component:"div",children:"The Backdrop signals a state change within the application and can be used for creating loaders, dialogs, and more. In its simplest form, the Backdrop component will add a dimmed layer over your application."}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Example"}),a(o,{className:"text-14 mb-32",component:"div",children:["The demo below shows a basic Backdrop with a Circular Progress component in the foreground to indicate a loading state. After clicking ",e("strong",{children:"Show Backdrop"}),", you can click anywhere on the page to close it."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(d,{name:"SimpleBackdrop.js",className:"my-16",iframe:!1,component:u,raw:f})})]})}export{y as default};
