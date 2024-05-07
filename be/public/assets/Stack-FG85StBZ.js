import{s as d,P as c,j as e,d as o,cW as l,H as C,D as B,r as h,bB as u,bN as g,e5 as f,bD as r,cZ as i,B as N,T as t,F as W,C as D,dz as m,bx as $}from"./index-3voNJrtd.js";import{F as s}from"./FuseExample-L3LbvVcu.js";import{D as z}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{H}from"./HighlightedCode-pqOqf23-.js";import{G as p}from"./Grid-tp5bxruy.js";import"./DocumentationNavigation-us8sikvN.js";const y=d(c)(({theme:a})=>({backgroundColor:a.palette.mode==="dark"?"#1A2027":"#fff",...a.typography.body2,padding:a.spacing(1),textAlign:"center",color:a.palette.text.secondary}));function Z(){return e(C,{sx:{width:"100%"},children:o(l,{spacing:2,children:[e(y,{children:"Item 1"}),e(y,{children:"Item 2"}),e(y,{children:"Item 3"})]})})}const U=`import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function BasicStack() {
    return (<Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>);
}
`,k=d(c)(({theme:a})=>({backgroundColor:a.palette.mode==="dark"?"#1A2027":"#fff",...a.typography.body2,padding:a.spacing(1),textAlign:"center",color:a.palette.text.secondary}));function Y(){return e("div",{children:o(l,{direction:"row",spacing:2,children:[e(k,{children:"Item 1"}),e(k,{children:"Item 2"}),e(k,{children:"Item 3"})]})})}const J=`import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function DirectionStack() {
    return (<div>
      <Stack direction="row" spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>);
}
`,S=d(c)(({theme:a})=>({backgroundColor:a.palette.mode==="dark"?"#1A2027":"#fff",...a.typography.body2,padding:a.spacing(1),textAlign:"center",color:a.palette.text.secondary}));function M(){return e("div",{children:o(l,{direction:"row",divider:e(B,{orientation:"vertical",flexItem:!0}),spacing:2,children:[e(S,{children:"Item 1"}),e(S,{children:"Item 2"}),e(S,{children:"Item 3"})]})})}const E=`import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function DividerStack() {
    return (<div>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>} spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>);
}
`,I=d(c)(({theme:a})=>({backgroundColor:a.palette.mode==="dark"?"#1A2027":"#fff",...a.typography.body2,padding:a.spacing(1),textAlign:"center",color:a.palette.text.secondary}));function _(){return e("div",{children:o(l,{direction:{xs:"column",sm:"row"},spacing:{xs:1,sm:2,md:4},children:[e(I,{children:"Item 1"}),e(I,{children:"Item 2"}),e(I,{children:"Item 3"})]})})}const q=`import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function ResponsiveStack() {
    return (<div>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>);
}
`,w=d(c)(({theme:a})=>({backgroundColor:a.palette.mode==="dark"?"#1A2027":"#fff",...a.typography.body2,padding:a.spacing(1),textAlign:"center",color:a.palette.text.secondary,flexGrow:1}));function K(){return e(C,{sx:{width:200},children:o(l,{spacing:{xs:1,sm:2},direction:"row",useFlexGap:!0,flexWrap:"wrap",children:[e(w,{children:"Item 1"}),e(w,{children:"Item 2"}),e(w,{children:"Long content"})]})})}const O=`import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
}));
export default function FlexboxGapStack() {
    return (<Box sx={{ width: 200 }}>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Long content</Item>
      </Stack>
    </Box>);
}
`;function Q(){const[a,G]=h.useState("row"),[x,A]=h.useState("center"),[b,j]=h.useState("center"),[v,L]=h.useState(2),P=`
<Stack
  direction="${a}"
  justifyContent="${x}"
  alignItems="${b}"
  spacing={${v}}
>
`;return o(l,{sx:{flexGrow:1},children:[e(l,{direction:a,justifyContent:x,alignItems:b,spacing:v,sx:{height:240},children:[0,1,2].map(n=>e(c,{sx:{p:2,pt:n+1,pb:n+1,color:"text.secondary",typography:"body2",backgroundColor:T=>T.palette.mode==="dark"?"#1A2027":"#fff"},children:`Item ${n+1}`},n))}),e(c,{sx:{p:2},children:o(p,{container:!0,spacing:3,children:[e(p,{item:!0,xs:12,children:o(u,{component:"fieldset",children:[e(g,{component:"legend",children:"direction"}),o(f,{row:!0,name:"direction","aria-label":"direction",value:a,onChange:n=>{G(n.target.value)},children:[e(r,{value:"row",control:e(i,{}),label:"row"}),e(r,{value:"row-reverse",control:e(i,{}),label:"row-reverse"}),e(r,{value:"column",control:e(i,{}),label:"column"}),e(r,{value:"column-reverse",control:e(i,{}),label:"column-reverse"})]})]})}),e(p,{item:!0,xs:12,children:o(u,{component:"fieldset",children:[e(g,{component:"legend",children:"alignItems"}),o(f,{row:!0,name:"alignItems","aria-label":"align items",value:b,onChange:n=>{j(n.target.value)},children:[e(r,{value:"flex-start",control:e(i,{}),label:"flex-start"}),e(r,{value:"center",control:e(i,{}),label:"center"}),e(r,{value:"flex-end",control:e(i,{}),label:"flex-end"}),e(r,{value:"stretch",control:e(i,{}),label:"stretch"}),e(r,{value:"baseline",control:e(i,{}),label:"baseline"})]})]})}),e(p,{item:!0,xs:12,children:o(u,{component:"fieldset",children:[e(g,{component:"legend",children:"justifyContent"}),o(f,{row:!0,name:"justifyContent","aria-label":"justifyContent",value:x,onChange:n=>{A(n.target.value)},children:[e(r,{value:"flex-start",control:e(i,{}),label:"flex-start"}),e(r,{value:"center",control:e(i,{}),label:"center"}),e(r,{value:"flex-end",control:e(i,{}),label:"flex-end"}),e(r,{value:"space-between",control:e(i,{}),label:"space-between"}),e(r,{value:"space-around",control:e(i,{}),label:"space-around"}),e(r,{value:"space-evenly",control:e(i,{}),label:"space-evenly"})]})]})}),e(p,{item:!0,xs:12,children:o(u,{component:"fieldset",children:[e(g,{component:"legend",children:"spacing"}),e(f,{row:!0,name:"spacing","aria-label":"spacing",value:v.toString(),onChange:n=>{L(Number(n.target.value))},children:[0,.5,1,2,3,4,8,12].map(n=>e(r,{value:n.toString(),control:e(i,{}),label:n},n))})]})})]})}),e(H,{code:P,language:"jsx"})]})}const V=`import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import HighlightedCode from '../../utils/HighlightedCode';
export default function InteractiveStack() {
    const [direction, setDirection] = React.useState('row');
    const [justifyContent, setJustifyContent] = React.useState('center');
    const [alignItems, setAlignItems] = React.useState('center');
    const [spacing, setSpacing] = React.useState(2);
    const jsx = \`
<Stack
  direction="\${direction}"
  justifyContent="\${justifyContent}"
  alignItems="\${alignItems}"
  spacing={\${spacing}}
>
\`;
    return (<Stack sx={{ flexGrow: 1 }}>
      <Stack direction={direction} justifyContent={justifyContent} alignItems={alignItems} spacing={spacing} sx={{ height: 240 }}>
        {[0, 1, 2].map((value) => (<Paper key={value} sx={{
                p: 2,
                pt: value + 1,
                pb: value + 1,
                color: 'text.secondary',
                typography: 'body2',
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}>
            {\`Item \${value + 1}\`}
          </Paper>))}
      </Stack>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">direction</FormLabel>
              <RadioGroup row name="direction" aria-label="direction" value={direction} onChange={(event) => {
            setDirection(event.target.value);
        }}>
                <FormControlLabel value="row" control={<Radio />} label="row"/>
                <FormControlLabel value="row-reverse" control={<Radio />} label="row-reverse"/>
                <FormControlLabel value="column" control={<Radio />} label="column"/>
                <FormControlLabel value="column-reverse" control={<Radio />} label="column-reverse"/>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">alignItems</FormLabel>
              <RadioGroup row name="alignItems" aria-label="align items" value={alignItems} onChange={(event) => {
            setAlignItems(event.target.value);
        }}>
                <FormControlLabel value="flex-start" control={<Radio />} label="flex-start"/>
                <FormControlLabel value="center" control={<Radio />} label="center"/>
                <FormControlLabel value="flex-end" control={<Radio />} label="flex-end"/>
                <FormControlLabel value="stretch" control={<Radio />} label="stretch"/>
                <FormControlLabel value="baseline" control={<Radio />} label="baseline"/>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">justifyContent</FormLabel>
              <RadioGroup row name="justifyContent" aria-label="justifyContent" value={justifyContent} onChange={(event) => {
            setJustifyContent(event.target.value);
        }}>
                <FormControlLabel value="flex-start" control={<Radio />} label="flex-start"/>
                <FormControlLabel value="center" control={<Radio />} label="center"/>
                <FormControlLabel value="flex-end" control={<Radio />} label="flex-end"/>
                <FormControlLabel value="space-between" control={<Radio />} label="space-between"/>
                <FormControlLabel value="space-around" control={<Radio />} label="space-around"/>
                <FormControlLabel value="space-evenly" control={<Radio />} label="space-evenly"/>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">spacing</FormLabel>
              <RadioGroup row name="spacing" aria-label="spacing" value={spacing.toString()} onChange={(event) => {
            setSpacing(Number(event.target.value));
        }}>
                {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (<FormControlLabel key={value} value={value.toString()} control={<Radio />} label={value}/>))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      <HighlightedCode code={jsx} language="jsx"/>
    </Stack>);
}
`,F=d(c)(({theme:a})=>({backgroundColor:a.palette.mode==="dark"?"#1A2027":"#fff",...a.typography.body2,padding:a.spacing(1),textAlign:"center",color:a.palette.text.secondary,maxWidth:400})),R=`Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.`;function X(){return o(C,{sx:{flexGrow:1,overflow:"hidden",px:3},children:[e(F,{sx:{my:1,mx:"auto",p:2},children:o(l,{spacing:2,direction:"row",alignItems:"center",children:[e(N,{children:"W"}),e(t,{noWrap:!0,children:R})]})}),e(F,{sx:{my:1,mx:"auto",p:2},children:o(l,{spacing:2,direction:"row",alignItems:"center",children:[e(l,{children:e(N,{children:"W"})}),e(l,{sx:{minWidth:0},children:e(t,{noWrap:!0,children:R})})]})})]})}const ee=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
}));
const message = \`Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.\`;
export default function ZeroWidthStack() {
    return (<Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Item sx={{
            my: 1,
            mx: 'auto',
            p: 2,
        }}>
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar>W</Avatar>
          <Typography noWrap>{message}</Typography>
        </Stack>
      </Item>
      <Item sx={{
            my: 1,
            mx: 'auto',
            p: 2,
        }}>
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack>
            <Avatar>W</Avatar>
          </Stack>
          <Stack sx={{ minWidth: 0 }}>
            <Typography noWrap>{message}</Typography>
          </Stack>
        </Stack>
      </Item>
    </Box>);
}
`;function le(a){return o($,{children:[o("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(z,{}),e(D,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/stack",target:"_blank",role:"button",size:"small",startIcon:e(W,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Stack"}),e(t,{className:"description",children:"Stack is a container component for arranging elements vertically or horizontally."}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Introduction"}),e(t,{className:"text-14 mb-32",component:"div",children:"The Stack component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child."}),e("div",{className:"border border-1 p-16 rounded-16 my-12",children:o(t,{className:"text-14 mb-32",component:"div",children:["Stack is ideal for one-dimensional layouts, while Grid is preferable when you need both vertical ",e("em",{children:"and"})," horizontal arrangement."]})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basics"}),e(m,{component:"pre",className:"language-jsx",children:` 
import Stack from '@mui/material/Stack';
`}),e(t,{className:"text-14 mb-32",component:"div",children:"The Stack component acts as a generic container, wrapping around the elements to be arranged."}),o(t,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"spacing"})," prop to control the space between children. The spacing value can be any number, including decimals, or a string. (The prop is converted into a CSS property using the ",e("a",{href:"/material-ui/customization/spacing/",children:e("code",{children:"theme.spacing()"})})," helper.)"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(s,{name:"BasicStack.js",className:"my-16",iframe:!1,component:Z,raw:U})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Stack vs. Grid"}),o(t,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"Stack"})," is concerned with one-dimensional layouts, while ",e("a",{href:"/material-ui/react-grid/",children:"Grid"})," handles two-dimensional layouts. The default direction is ",e("code",{children:"column"})," which stacks children vertically."]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Direction"}),o(t,{className:"text-14 mb-32",component:"div",children:["By default, Stack arranges items vertically in a column. Use the ",e("code",{children:"direction"})," prop to position items horizontally in a row:"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(s,{name:"DirectionStack.js",className:"my-16",iframe:!1,component:Y,raw:J})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Dividers"}),o(t,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"divider"})," prop to insert an element between each child. This works particularly well with the ",e("a",{href:"/material-ui/react-divider/",children:"Divider"})," component, as shown below:"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(s,{name:"DividerStack.js",className:"my-16",iframe:!1,component:M,raw:E})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Responsive values"}),o(t,{className:"text-14 mb-32",component:"div",children:["You can switch the ",e("code",{children:"direction"})," or ",e("code",{children:"spacing"})," values based on the active breakpoint."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(s,{name:"ResponsiveStack.js",className:"my-16",iframe:!1,component:_,raw:q})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Flexbox gap"}),o(t,{className:"text-14 mb-32",component:"div",children:["To use ",o("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/gap",children:["flexbox ",e("code",{children:"gap"})]})," for the spacing implementation, set the ",e("code",{children:"useFlexGap"})," prop to true."]}),o(t,{className:"text-14 mb-32",component:"div",children:["It removes the ",e("a",{href:"#limitations",children:"known limitations"})," of the default implementation that uses CSS nested selector. However, CSS flexbox gap is not fully supported in some browsers."]}),o(t,{className:"text-14 mb-32",component:"div",children:["We recommend checking the ",e("a",{href:"https://caniuse.com/?search=flex%20gap",children:"support percentage"})," before using it."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(s,{name:"FlexboxGapStack.js",className:"my-16",iframe:!1,component:K,raw:O})}),e(t,{className:"text-14 mb-32",component:"div",children:"To set the prop to all stack instances, create a theme with default props:"}),e(m,{component:"pre",className:"language-js",children:` 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>…</Stack> {/* uses flexbox gap by default */}
    </ThemeProvider>
  );
}
`}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Interactive demo"}),e(t,{className:"text-14 mb-32",component:"div",children:"Below is an interactive demo that lets you explore the visual results of the different settings:"}),e(t,{className:"text-14 mb-32",component:"div",children:e(s,{name:"InteractiveStack.js",className:"my-16",iframe:!1,component:Q,raw:V})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"System props"}),o(t,{className:"text-14 mb-32",component:"div",children:["As a CSS utility component, the ",e("code",{children:"Stack"})," supports all ",e("a",{href:"/system/properties/",children:e("code",{children:"system"})})," properties. You can use them as props directly on the component. For instance, a margin-top:"]}),e(m,{component:"pre",className:"language-jsx",children:` 
<Stack mt={2}>
`}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Margin on the children"}),e(t,{className:"text-14 mb-32",component:"div",children:"Customizing the margin on the children is not supported by default."}),o(t,{className:"text-14 mb-32",component:"div",children:["For instance, the top-margin on the ",e("code",{children:"Button"})," component below will be ignored."]}),e(m,{component:"pre",className:"language-jsx",children:` 
<Stack>
  <Button sx={{ marginTop: '30px' }}>...</Button>
</Stack>
`}),o(t,{className:"text-14 mb-32",component:"div",children:[":::success To overcome this limitation, set ",e("a",{href:"#flexbox-gap",children:e("code",{children:"useFlexGap"})})," prop to true to switch to CSS flexbox gap implementation."]}),o(t,{className:"text-14 mb-32",component:"div",children:["You can learn more about this limitation by visiting this ",e("a",{href:"https://github.com/mui/material-ui/issues/33754",children:"RFC"}),". :::"]}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"white-space: nowrap"}),o(t,{className:"text-14 mb-32",component:"div",children:["The initial setting on flex items is ",e("code",{children:"min-width: auto"}),". This causes a positioning conflict when children use ",e("code",{children:"white-space: nowrap;"}),". You can reproduce the issue with:"]}),e(m,{component:"pre",className:"language-jsx",children:` 
<Stack direction="row">
  <Typography noWrap>
`}),o(t,{className:"text-14 mb-32",component:"div",children:["In order for the item to stay within the container you need to set ",e("code",{children:"min-width: 0"}),"."]}),e(m,{component:"pre",className:"language-jsx",children:` 
<Stack direction="row" sx={{ minWidth: 0 }}>
  <Typography noWrap>
`}),e(t,{className:"text-14 mb-32",component:"div",children:e(s,{name:"ZeroWidthStack.js",className:"my-16",iframe:!1,component:X,raw:ee})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Anatomy"}),o(t,{className:"text-14 mb-32",component:"div",children:["The Stack component is composed of a single root ",e("code",{children:"<div>"})," element:"]}),e(m,{component:"pre",className:"language-html",children:` 
<div className="MuiStack-root">
  <!-- Stack contents -->
</div>
`})]})}export{le as default};
