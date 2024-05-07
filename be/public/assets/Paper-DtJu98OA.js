import{d as a,j as e,P as r,H as p,s as m,dM as h,bn as g,cW as u,F as x,C as v,T as t,dz as c,bx as y}from"./index-3voNJrtd.js";import{F as o}from"./FuseExample-L3LbvVcu.js";import{D as b}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{G as s}from"./Grid-tp5bxruy.js";import"./DocumentationNavigation-us8sikvN.js";function P(){return a(p,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:128,height:128}},children:[e(r,{elevation:0}),e(r,{}),e(r,{elevation:3})]})}const w=`import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
export default function SimplePaper() {
    return (<Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
            },
        }}>
      <Paper elevation={0}/>
      <Paper />
      <Paper elevation={3}/>
    </Box>);
}
`,N=m(r)(({theme:n})=>({...n.typography.body2,textAlign:"center",color:n.palette.text.secondary,height:60,lineHeight:"60px"})),k=h({palette:{mode:"dark"}}),T=h({palette:{mode:"light"}});function S(){return e(s,{container:!0,spacing:2,children:[T,k].map((n,f)=>e(s,{item:!0,xs:6,children:e(g,{theme:n,children:e(p,{sx:{p:2,borderRadius:2,bgcolor:"background.default",display:"grid",gridTemplateColumns:{md:"1fr 1fr"},gap:2},children:[0,1,2,3,4,6,8,12,16,24].map(i=>e(N,{elevation:i,children:`elevation=${i}`},i))})})},f))})}const D=`import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));
const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });
export default function Elevation() {
    return (<Grid container spacing={2}>
      {[lightTheme, darkTheme].map((theme, index) => (<Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
            }}>
              {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (<Item key={elevation} elevation={elevation}>
                  {\`elevation=\${elevation}\`}
                </Item>))}
            </Box>
          </ThemeProvider>
        </Grid>))}
    </Grid>);
}
`,l=m(r)(({theme:n})=>({width:120,height:120,padding:n.spacing(2),...n.typography.body2,textAlign:"center"}));function q(){return a(u,{direction:"row",spacing:2,children:[e(l,{variant:"elevation",children:"default variant"}),e(l,{variant:"outlined",children:"outlined variant"})]})}const B=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));
export default function Variants() {
    return (<Stack direction="row" spacing={2}>
      <DemoPaper variant="elevation">default variant</DemoPaper>
      <DemoPaper variant="outlined">outlined variant</DemoPaper>
    </Stack>);
}
`,d=m(r)(({theme:n})=>({width:120,height:120,padding:n.spacing(2),...n.typography.body2,textAlign:"center"}));function C(){return a(u,{direction:"row",spacing:2,children:[e(d,{square:!1,children:"rounded corners"}),e(d,{square:!0,children:"square corners"})]})}const j=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));
export default function SquareCorners() {
    return (<Stack direction="row" spacing={2}>
      <DemoPaper square={false}>rounded corners</DemoPaper>
      <DemoPaper square>square corners</DemoPaper>
    </Stack>);
}
`;function F(n){return a(y,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(b,{}),e(v,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/paper",target:"_blank",role:"button",size:"small",startIcon:e(x,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Paper"}),e(t,{className:"description",children:"The Paper component is a container for displaying content on an elevated surface."}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Introduction"}),e(t,{className:"text-14 mb-32",component:"div",children:"In Material Design, surface components and shadow styles are heavily influenced by their real-world physical counterparts."}),a(t,{className:"text-14 mb-32",component:"div",children:["Material UI implements this concept with the Paper component, a container-like surface that features the ",e("a",{href:"#elevation",children:e("code",{children:"elevation"})})," prop for pulling box-shadow values from the theme."]}),a(t,{className:"text-14 mb-32",component:"div",children:[":::success The Paper component is ideally suited for designs that follow ",e("a",{href:"https://m2.material.io/design/environment/elevation.html#elevation-in-material-design",children:"Material Design's elevation system"}),", which is meant to replicate how light casts shadows in the physical world."]}),a(t,{className:"text-14 mb-32",component:"div",children:["If you just need a generic container, you may prefer to use the ",e("a",{href:"/material-ui/react-box/",children:"Box"})," or ",e("a",{href:"/material-ui/react-container/",children:"Container"})," components. :::"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"SimplePaper.js",className:"my-16",iframe:!1,component:P,raw:w})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Component"}),e(c,{component:"pre",className:"language-jsx",children:` 
import Paper from '@mui/material/Paper';
`}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Elevation"}),a(t,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"elevation"})," prop to establish hierarchy through the use of shadows. The Paper component's default elevation level is ",e("code",{children:"1"}),". The prop accepts values from ",e("code",{children:"0"})," to ",e("code",{children:"24"}),". The higher the number, the further away the Paper appears to be from its background."]}),a(t,{className:"text-14 mb-32",component:"div",children:["In dark mode, increasing the elevation also makes the background color lighter. This is done by applying a semi-transparent gradient with the ",e("code",{children:"background-image"})," CSS property."]}),a(t,{className:"text-14 mb-32",component:"div",children:[":::warning The aforementioned dark mode behavior can lead to confusion when overriding the Paper component, because changing the ",e("code",{children:"background-color"})," property won't affect the lighter shading. To override it, you must either use a new background value, or customize the values for both ",e("code",{children:"background-color"})," and ",e("code",{children:"background-image"}),". :::"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"Elevation.js",className:"my-16",iframe:!1,component:S,raw:D})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Variants"}),a(t,{className:"text-14 mb-32",component:"div",children:["Set the ",e("code",{children:"variant"})," prop to ",e("code",{children:'"outlined"'})," for a flat, outlined Paper with no shadows:"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"Variants.js",className:"my-16",iframe:!1,component:q,raw:B})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Corners"}),a(t,{className:"text-14 mb-32",component:"div",children:["The Paper component features rounded corners by default. Add the ",e("code",{children:"square"})," prop for square corners:"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"SquareCorners.js",className:"my-16",iframe:!1,component:C,raw:j})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Anatomy"}),a(t,{className:"text-14 mb-32",component:"div",children:["The Paper component is composed of a single root ",e("code",{children:"<div>"})," that wraps around its contents:"]}),e(c,{component:"pre",className:"language-html",children:` 
<div className="MuiPaper-root">
  <!-- Paper contents -->
</div>
`})]})}export{F as default};
