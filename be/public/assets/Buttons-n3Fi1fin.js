import{d as o,j as t,C as n,cW as c,H as x,ay as m,az as d,ag as u,z as r,s as l,e4 as p,cg as k,T as e,F as C,dz as h,bx as N}from"./index-3voNJrtd.js";import{F as i}from"./FuseExample-L3LbvVcu.js";import{D as z}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{d as s}from"./Delete-iFJrx99s.js";import{d as j}from"./Send-TH5Vlb4h.js";import"./DocumentationNavigation-us8sikvN.js";function M(){return o(c,{spacing:2,direction:"row",children:[t(n,{variant:"text",children:"Text"}),t(n,{variant:"contained",children:"Contained"}),t(n,{variant:"outlined",children:"Outlined"})]})}const R=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function BasicButtons() {
    return (<Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>);
}
`;function D(){return o(c,{direction:"row",spacing:2,children:[t(n,{children:"Primary"}),t(n,{disabled:!0,children:"Disabled"}),t(n,{href:"#text-buttons",children:"Link"})]})}const T=`import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function TextButtons() {
    return (<Stack direction="row" spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>);
}
`;function _(){return o(c,{direction:"row",spacing:2,children:[t(n,{variant:"contained",children:"Contained"}),t(n,{variant:"contained",disabled:!0,children:"Disabled"}),t(n,{variant:"contained",href:"#contained-buttons",children:"Link"})]})}const F=`import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function ContainedButtons() {
    return (<Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </Stack>);
}
`;function U(){return t(n,{variant:"contained",disableElevation:!0,children:"Disable elevation"})}const H=`import * as React from 'react';
import Button from '@mui/material/Button';
export default function DisableElevation() {
    return (<Button variant="contained" disableElevation>
      Disable elevation
    </Button>);
}
`;function L(){return o(c,{direction:"row",spacing:2,children:[t(n,{variant:"outlined",children:"Primary"}),t(n,{variant:"outlined",disabled:!0,children:"Disabled"}),t(n,{variant:"outlined",href:"#outlined-buttons",children:"Link"})]})}const A=`import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function OutlinedButtons() {
    return (<Stack direction="row" spacing={2}>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </Stack>);
}
`;function $(){return o(c,{direction:"row",spacing:2,children:[t(n,{color:"secondary",children:"Secondary"}),t(n,{variant:"contained",color:"success",children:"Success"}),t(n,{variant:"outlined",color:"error",children:"Error"})]})}const O=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function ColorButtons() {
    return (<Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>);
}
`;function E(){return o(x,{sx:{"& button":{m:1}},children:[o("div",{children:[t(n,{size:"small",children:"Small"}),t(n,{size:"medium",children:"Medium"}),t(n,{size:"large",children:"Large"})]}),o("div",{children:[t(n,{variant:"outlined",size:"small",children:"Small"}),t(n,{variant:"outlined",size:"medium",children:"Medium"}),t(n,{variant:"outlined",size:"large",children:"Large"})]}),o("div",{children:[t(n,{variant:"contained",size:"small",children:"Small"}),t(n,{variant:"contained",size:"medium",children:"Medium"}),t(n,{variant:"contained",size:"large",children:"Large"})]})]})}const P=`import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
export default function ButtonSizes() {
    return (<Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
    </Box>);
}
`;function V(){return o(c,{direction:"row",spacing:2,children:[t(n,{variant:"outlined",startIcon:t(s,{}),children:"Delete"}),t(n,{variant:"contained",endIcon:t(j,{}),children:"Send"})]})}const q=`import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
export default function IconLabelButtons() {
    return (<Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>);
}
`;var b={},Y=d;Object.defineProperty(b,"__esModule",{value:!0});var y=b.default=void 0,W=Y(m()),X=u;y=b.default=(0,W.default)((0,X.jsx)("path",{d:"m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7"}),"Alarm");var B={},G=d;Object.defineProperty(B,"__esModule",{value:!0});var I=B.default=void 0,J=G(m()),K=u;I=B.default=(0,J.default)((0,K.jsx)("path",{d:"M11 9h2V6h3V4h-3V1h-2v3H8v2h3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25"}),"AddShoppingCart");function Q(){return o(c,{direction:"row",spacing:1,children:[t(r,{"aria-label":"delete",children:t(s,{})}),t(r,{"aria-label":"delete",disabled:!0,color:"primary",children:t(s,{})}),t(r,{color:"secondary","aria-label":"add an alarm",children:t(y,{})}),t(r,{color:"primary","aria-label":"add to shopping cart",children:t(I,{})})]})}const Z=`import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function IconButtons() {
    return (<Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>);
}
`;function tt(){return o(c,{direction:"row",alignItems:"center",spacing:1,children:[t(r,{"aria-label":"delete",size:"small",children:t(s,{fontSize:"inherit"})}),t(r,{"aria-label":"delete",size:"small",children:t(s,{fontSize:"small"})}),t(r,{"aria-label":"delete",size:"large",children:t(s,{})}),t(r,{"aria-label":"delete",size:"large",children:t(s,{fontSize:"inherit"})})]})}const et=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
export default function IconButtonSizes() {
    return (<Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit"/>
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small"/>
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit"/>
      </IconButton>
    </Stack>);
}
`;var g={},ot=d;Object.defineProperty(g,"__esModule",{value:!0});var f=g.default=void 0,nt=ot(m()),at=u;f=g.default=(0,nt.default)((0,at.jsx)("path",{d:"M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28M3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21m6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15m7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12M14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38"}),"Fingerprint");function it(){return o(c,{direction:"row",spacing:1,children:[t(r,{"aria-label":"fingerprint",color:"secondary",children:t(f,{})}),t(r,{"aria-label":"fingerprint",color:"success",children:t(f,{})})]})}const rt=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
export default function IconButtonColors() {
    return (<Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
    </Stack>);
}
`;var v={},ct=d;Object.defineProperty(v,"__esModule",{value:!0});var w=v.default=void 0,lt=ct(m()),st=u;w=v.default=(0,lt.default)((0,st.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload");const mt=l("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});function dt(){return o(n,{component:"label",variant:"contained",startIcon:t(w,{}),children:["Upload file",t(mt,{type:"file"})]})}const ut=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
export default function InputFileUpload() {
    return (<Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file"/>
    </Button>);
}
`,pt=l(n)({boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#0063cc",borderColor:"#0063cc",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}),ht=l(n)(({theme:a})=>({color:a.palette.getContrastText(p[500]),backgroundColor:p[500],"&:hover":{backgroundColor:p[700]}}));function ft(){return o(c,{spacing:2,direction:"row",children:[t(ht,{variant:"contained",children:"Custom CSS"}),t(pt,{variant:"contained",disableRipple:!0,children:"Bootstrap"})]})}const bt=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));
export default function CustomizedButtons() {
    return (<Stack spacing={2} direction="row">
      <ColorButton variant="contained">Custom CSS</ColorButton>
      <BootstrapButton variant="contained" disableRipple>
        Bootstrap
      </BootstrapButton>
    </Stack>);
}
`,Bt=[{url:"/material-ui-static/images/buttons/breakfast.jpg",title:"Breakfast",width:"40%"},{url:"/material-ui-static/images/buttons/burgers.jpg",title:"Burgers",width:"30%"},{url:"/material-ui-static/images/buttons/camera.jpg",title:"Camera",width:"30%"}],gt=l(k)(({theme:a})=>({position:"relative",height:200,[a.breakpoints.down("sm")]:{width:"100% !important",height:100},"&:hover, &.Mui-focusVisible":{zIndex:1,"& .MuiImageBackdrop-root":{opacity:.15},"& .MuiImageMarked-root":{opacity:0},"& .MuiTypography-root":{border:"4px solid currentColor"}}})),vt=l("span")({position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"}),xt=l("span")(({theme:a})=>({position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:a.palette.common.white})),yt=l("span")(({theme:a})=>({position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:a.palette.common.black,opacity:.4,transition:a.transitions.create("opacity")})),It=l("span")(({theme:a})=>({height:3,width:18,backgroundColor:a.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:a.transitions.create("opacity")}));function wt(){return t(x,{sx:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%"},children:Bt.map(a=>o(gt,{focusRipple:!0,style:{width:a.width},children:[t(vt,{style:{backgroundImage:`url(${a.url})`}}),t(yt,{className:"MuiImageBackdrop-root"}),t(xt,{children:o(e,{component:"span",variant:"subtitle1",color:"inherit",sx:{position:"relative",p:4,pt:2,pb:S=>`calc(${S.spacing(1)} + 6px)`},children:[a.title,t(It,{className:"MuiImageMarked-root"})]})})]},a.title))})}const St=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
const images = [
    {
        url: '/material-ui-static/images/buttons/breakfast.jpg',
        title: 'Breakfast',
        width: '40%',
    },
    {
        url: '/material-ui-static/images/buttons/burgers.jpg',
        title: 'Burgers',
        width: '30%',
    },
    {
        url: '/material-ui-static/images/buttons/camera.jpg',
        title: 'Camera',
        width: '30%',
    },
];
const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));
const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});
const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));
const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));
const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));
export default function ButtonBaseDemo() {
    return (<Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (<ImageButton focusRipple key={image.title} style={{
                width: image.width,
            }}>
          <ImageSrc style={{ backgroundImage: \`url(\${image.url})\` }}/>
          <ImageBackdrop className="MuiImageBackdrop-root"/>
          <Image>
            <Typography component="span" variant="subtitle1" color="inherit" sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => \`calc(\${theme.spacing(1)} + 6px)\`,
            }}>
              {image.title}
              <ImageMarked className="MuiImageMarked-root"/>
            </Typography>
          </Image>
        </ImageButton>))}
    </Box>);
}
`;function Rt(a){return o(N,{children:[o("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[t(z,{}),t(n,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/buttons",target:"_blank",role:"button",size:"small",startIcon:t(C,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),t(e,{className:"text-32 my-16 font-700",component:"h1",children:"Button"}),t(e,{className:"description",children:"Buttons allow users to take actions, and make choices, with a single tap."}),t(e,{className:"text-14 mb-32",component:"div",children:"Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:"}),o("ul",{className:"space-y-16",children:[t("li",{children:"Modal windows"}),t("li",{children:"Forms"}),t("li",{children:"Cards"}),t("li",{children:"Toolbars"})]}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic button"}),o(e,{className:"text-14 mb-32",component:"div",children:["The ",t("code",{children:"Button"})," comes with three variants: text (default), contained, and outlined."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"BasicButtons.js",className:"my-16",iframe:!1,component:M,raw:R})}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Text button"}),o(e,{className:"text-14 mb-32",component:"div",children:[t("a",{href:"https://m2.material.io/components/buttons#text-button",children:"Text buttons"}),"are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"TextButtons.js",className:"my-16",iframe:!1,component:D,raw:T})}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Contained button"}),o(e,{className:"text-14 mb-32",component:"div",children:[t("a",{href:"https://m2.material.io/components/buttons#contained-button",children:"Contained buttons"}),"are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"ContainedButtons.js",className:"my-16",iframe:!1,component:_,raw:F})}),o(e,{className:"text-14 mb-32",component:"div",children:["You can remove the elevation with the ",t("code",{children:"disableElevation"})," prop."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"DisableElevation.js",className:"my-16",iframe:!1,component:U,raw:H})}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Outlined button"}),o(e,{className:"text-14 mb-32",component:"div",children:[t("a",{href:"https://m2.material.io/components/buttons#outlined-button",children:"Outlined buttons"})," are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app."]}),t(e,{className:"text-14 mb-32",component:"div",children:"Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons."}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"OutlinedButtons.js",className:"my-16",iframe:!1,component:L,raw:A})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Handling clicks"}),o(e,{className:"text-14 mb-32",component:"div",children:["All components accept an ",t("code",{children:"onClick"})," handler that is applied to the root DOM element."]}),t(h,{component:"pre",className:"language-jsx",children:` 
<Button
  onClick={() => {
    alert('clicked');
  
>
  Click me
</Button>
`}),o(e,{className:"text-14 mb-32",component:"div",children:["Note that the documentation ",t("a",{href:"/material-ui/guides/api/#native-properties",children:"avoids"})," mentioning native props (there are a lot) in the API section of the components."]}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"ColorButtons.js",className:"my-16",iframe:!1,component:$,raw:O})}),o(e,{className:"text-14 mb-32",component:"div",children:["In addition to using the default button colors, you can add custom ones, or disable any you don't need. See the ",t("a",{href:"/material-ui/customization/palette/#custom-colors",children:"Adding new colors"})," examples for more info."]}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Sizes"}),o(e,{className:"text-14 mb-32",component:"div",children:["For larger or smaller buttons, use the ",t("code",{children:"size"})," prop."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"ButtonSizes.js",className:"my-16",iframe:!1,component:E,raw:P})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Buttons with icons and label"}),t(e,{className:"text-14 mb-32",component:"div",children:"Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon."}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"IconLabelButtons.js",className:"my-16",iframe:!1,component:V,raw:q})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Icon button"}),t(e,{className:"text-14 mb-32",component:"div",children:"Icon buttons are commonly found in app bars and toolbars."}),t(e,{className:"text-14 mb-32",component:"div",children:"Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item."}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"IconButtons.js",className:"my-16",iframe:!1,component:Q,raw:Z})}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Sizes"}),o(e,{className:"text-14 mb-32",component:"div",children:["For larger or smaller icon buttons, use the ",t("code",{children:"size"})," prop."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"IconButtonSizes.js",className:"my-16",iframe:!1,component:tt,raw:et})}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Colors"}),o(e,{className:"text-14 mb-32",component:"div",children:["Use ",t("code",{children:"color"})," prop to apply theme color palette to component."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"IconButtonColors.js",className:"my-16",iframe:!1,component:it,raw:rt})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"File upload"}),o(e,{className:"text-14 mb-32",component:"div",children:["To create a file upload button, turn the button into a label using ",t("code",{children:'component="label"'})," and then create a visually-hidden input with type ",t("code",{children:"file"}),"."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"InputFileUpload.js",className:"my-16",iframe:!1,component:dt,raw:ut})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),o(e,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the ",t("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"CustomizedButtons.js",className:"my-16",iframe:!1,component:ft,raw:bt})}),o(e,{className:"text-14 mb-32",component:"div",children:["🎨 If you are looking for inspiration, you can check ",t("a",{href:"https://mui-treasury.com/?path=/docs/button-introduction--docs",children:"MUI Treasury's customization examples"}),"."]}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Complex button"}),o(e,{className:"text-14 mb-32",component:"div",children:["The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ",t("code",{children:"ButtonBase"}),". You can take advantage of this lower-level component to build custom interactions."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"ButtonBaseDemo.js",className:"my-16",iframe:!1,component:wt,raw:St})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Third-party routing library"}),o(e,{className:"text-14 mb-32",component:"div",children:["One frequent use case is to perform navigation on the client only, without an HTTP round-trip to the server. The ",t("code",{children:"ButtonBase"})," component provides the ",t("code",{children:"component"})," prop to handle this use case. Here is a ",t("a",{href:"/material-ui/guides/routing/#button",children:"more detailed guide"}),"."]}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Cursor not-allowed"}),o(e,{className:"text-14 mb-32",component:"div",children:["The ButtonBase component sets ",t("code",{children:"pointer-events: none;"})," on disabled buttons, which prevents the appearance of a disabled cursor."]}),o(e,{className:"text-14 mb-32",component:"div",children:["If you wish to use ",t("code",{children:"not-allowed"}),", you have two options:"]}),t("ol",{children:o("li",{children:[t("strong",{children:"CSS only"}),". You can remove the pointer-events style on the disabled state of the ",t("code",{children:"<button>"})," element:"]})}),t(h,{component:"pre",className:"language-css",children:` 
.MuiButtonBase-root:disabled {
  cursor: not-allowed;
  pointer-events: auto;
}
`}),t(e,{className:"text-14 mb-32",component:"div",children:"However:"}),o("ul",{className:"space-y-16",children:[o("li",{children:["You should add ",t("code",{children:"pointer-events: none;"})," back when you need to display ",t("a",{href:"/material-ui/react-tooltip/#disabled-elements",children:"tooltips on disabled elements"}),"."]}),o("li",{children:["The cursor won't change if you render something other than a button element, for instance, a link ",t("code",{children:"<a>"})," element."]})]}),t("ol",{start:2,children:o("li",{children:[t("strong",{children:"DOM change"}),". You can wrap the button:"]})}),t(h,{component:"pre",className:"language-jsx",children:` 
<span style={{ cursor: 'not-allowed' }}>
  <Button component={Link} disabled>
    disabled
  </Button>
</span>
`}),o(e,{className:"text-14 mb-32",component:"div",children:["This has the advantage of supporting any element, for instance, a link ",t("code",{children:"<a>"})," element."]})]})}export{Rt as default};
