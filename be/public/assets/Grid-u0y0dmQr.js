import{s,P as d,j as e,d as i,H as l,r as g,bf as v,bt as w,dY as C,bh as o,cL as a,c0 as $,T as t,B as R,F as z,C as D,dp as x,bb as H}from"./index-cy1M6gwN.js";import{F as m}from"./FuseExample-0-XNuDGL.js";import{D as M}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{G as n}from"./Grid-zsqRuuCl.js";import{H as j}from"./HighlightedCode-fTezzlqK.js";import"./DocumentationNavigation-fvt_Eo8n.js";const f=s(d)(({theme:r})=>({backgroundColor:r.palette.mode==="dark"?"#1A2027":"#fff",...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function J(){return e(l,{sx:{flexGrow:1},children:i(n,{container:!0,spacing:2,children:[e(n,{item:!0,xs:8,children:e(f,{children:"xs=8"})}),e(n,{item:!0,xs:4,children:e(f,{children:"xs=4"})}),e(n,{item:!0,xs:4,children:e(f,{children:"xs=4"})}),e(n,{item:!0,xs:8,children:e(f,{children:"xs=8"})})]})})}const V=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function BasicGrid() {
    return (<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>);
}
`,y=s(d)(({theme:r})=>({backgroundColor:r.palette.mode==="dark"?"#1A2027":"#fff",...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function Y(){return e(l,{sx:{flexGrow:1},children:i(n,{container:!0,spacing:2,children:[e(n,{item:!0,xs:6,md:8,children:e(y,{children:"xs=6 md=8"})}),e(n,{item:!0,xs:6,md:4,children:e(y,{children:"xs=6 md=4"})}),e(n,{item:!0,xs:6,md:4,children:e(y,{children:"xs=6 md=4"})}),e(n,{item:!0,xs:6,md:8,children:e(y,{children:"xs=6 md=8"})})]})})}const E=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function FullWidthGrid() {
    return (<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>);
}
`;function _(){const[r,h]=g.useState(2),u=c=>{h(Number(c.target.value))},I=`
<Grid container spacing={${r}}>
`;return i(n,{sx:{flexGrow:1},container:!0,spacing:2,children:[e(n,{item:!0,xs:12,children:e(n,{container:!0,justifyContent:"center",spacing:r,children:[0,1,2].map(c=>e(n,{item:!0,children:e(d,{sx:{height:140,width:100,backgroundColor:N=>N.palette.mode==="dark"?"#1A2027":"#fff"}})},c))})}),i(n,{item:!0,xs:12,children:[e(d,{sx:{p:2},children:e(n,{container:!0,children:e(n,{item:!0,children:i(v,{component:"fieldset",children:[e(w,{component:"legend",children:"spacing"}),e(C,{name:"spacing","aria-label":"spacing",value:r.toString(),onChange:u,row:!0,children:[0,.5,1,2,3,4,8,12].map(c=>e(o,{value:c.toString(),control:e(a,{}),label:c.toString()},c))})]})})})}),e(j,{code:I,language:"jsx"})]})]})}const q=`import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import HighlightedCode from '../../utils/HighlightedCode';
export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };
    const jsx = \`
<Grid container spacing={\${spacing}}>
\`;
    return (<Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (<Grid key={value} item>
              <Paper sx={{
                height: 140,
                width: 100,
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}/>
            </Grid>))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Grid container>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">spacing</FormLabel>
                <RadioGroup name="spacing" aria-label="spacing" value={spacing.toString()} onChange={handleChange} row>
                  {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (<FormControlLabel key={value} value={value.toString()} control={<Radio />} label={value.toString()}/>))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
        <HighlightedCode code={jsx} language="jsx"/>
      </Grid>
    </Grid>);
}
`,b=s(d)(({theme:r})=>({backgroundColor:r.palette.mode==="dark"?"#1A2027":"#fff",...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function U(){return e(l,{sx:{width:"100%"},children:i(n,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[e(n,{item:!0,xs:6,children:e(b,{children:"1"})}),e(n,{item:!0,xs:6,children:e(b,{children:"2"})}),e(n,{item:!0,xs:6,children:e(b,{children:"3"})}),e(n,{item:!0,xs:6,children:e(b,{children:"4"})})]})})}const K=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function RowAndColumnSpacing() {
    return (<Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>);
}
`,O=s(d)(({theme:r})=>({backgroundColor:r.palette.mode==="dark"?"#1A2027":"#fff",...r.typography.body2,padding:r.spacing(2),textAlign:"center",color:r.palette.text.secondary}));function Q(){return e(l,{sx:{flexGrow:1},children:e(n,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:Array.from(Array(6)).map((r,h)=>e(n,{item:!0,xs:2,sm:4,md:4,children:e(O,{children:"xs=2"})},h))})})}const X=`import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function ResponsiveGrid() {
    return (<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (<Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>))}
      </Grid>
    </Box>);
}
`;function Z(){const[r,h]=g.useState("row"),[u,I]=g.useState("center"),[c,N]=g.useState("center"),L=`
<Grid
  container
  direction="${r}"
  justifyContent="${u}"
  alignItems="${c}"
>
`;return i(n,{sx:{flexGrow:1},container:!0,children:[e(n,{item:!0,xs:12,children:e(n,{sx:{height:300,pb:2},container:!0,spacing:2,alignItems:c,direction:r,justifyContent:u,children:[0,1,2].map(p=>e(n,{item:!0,children:e(d,{sx:{p:2,backgroundColor:W=>W.palette.mode==="dark"?"#1A2027":"#fff",height:"100%",color:"text.secondary",pt:`${(p+1)*10}px`,pb:`${(p+1)*10}px`},children:`Cell ${p+1}`})},p))})}),e(n,{item:!0,xs:12,children:e(d,{sx:{p:2},children:i(n,{container:!0,spacing:3,children:[e(n,{item:!0,xs:12,children:i(v,{component:"fieldset",children:[e(w,{component:"legend",children:"direction"}),i(C,{row:!0,name:"direction","aria-label":"direction",value:r,onChange:p=>{h(p.target.value)},children:[e(o,{value:"row",control:e(a,{}),label:"row"}),e(o,{value:"row-reverse",control:e(a,{}),label:"row-reverse"}),e(o,{value:"column",control:e(a,{}),label:"column"}),e(o,{value:"column-reverse",control:e(a,{}),label:"column-reverse"})]})]})}),e(n,{item:!0,xs:12,children:i(v,{component:"fieldset",children:[e(w,{component:"legend",children:"justifyContent"}),i(C,{row:!0,name:"justifyContent","aria-label":"justifyContent",value:u,onChange:p=>{I(p.target.value)},children:[e(o,{value:"flex-start",control:e(a,{}),label:"flex-start"}),e(o,{value:"center",control:e(a,{}),label:"center"}),e(o,{value:"flex-end",control:e(a,{}),label:"flex-end"}),e(o,{value:"space-between",control:e(a,{}),label:"space-between"}),e(o,{value:"space-around",control:e(a,{}),label:"space-around"}),e(o,{value:"space-evenly",control:e(a,{}),label:"space-evenly"})]})]})}),e(n,{item:!0,xs:12,children:i(v,{component:"fieldset",children:[e(w,{component:"legend",children:"alignItems"}),i(C,{row:!0,name:"alignItems","aria-label":"align items",value:c,onChange:p=>{N(p.target.value)},children:[e(o,{value:"flex-start",control:e(a,{}),label:"flex-start"}),e(o,{value:"center",control:e(a,{}),label:"center"}),e(o,{value:"flex-end",control:e(a,{}),label:"flex-end"}),e(o,{value:"stretch",control:e(a,{}),label:"stretch"}),e(o,{value:"baseline",control:e(a,{}),label:"baseline"})]})]})})]})})}),e(n,{item:!0,xs:12,children:e(j,{code:L,language:"jsx"})})]})}const ee=`import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import HighlightedCode from '../../utils/HighlightedCode';
export default function InteractiveGrid() {
    const [direction, setDirection] = React.useState('row');
    const [justifyContent, setJustifyContent] = React.useState('center');
    const [alignItems, setAlignItems] = React.useState('center');
    const jsx = \`
<Grid
  container
  direction="\${direction}"
  justifyContent="\${justifyContent}"
  alignItems="\${alignItems}"
>
\`;
    return (<Grid sx={{ flexGrow: 1 }} container>
      <Grid item xs={12}>
        <Grid sx={{ height: 300, pb: 2 }} container spacing={2} alignItems={alignItems} direction={direction} justifyContent={justifyContent}>
          {[0, 1, 2].map((value) => (<Grid key={value} item>
              <Paper sx={{
                p: 2,
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                height: '100%',
                color: 'text.secondary',
                pt: \`\${(value + 1) * 10}px\`,
                pb: \`\${(value + 1) * 10}px\`,
            }}>
                {\`Cell \${value + 1}\`}
              </Paper>
            </Grid>))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
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
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <HighlightedCode code={jsx} language="jsx"/>
      </Grid>
    </Grid>);
}
`,k=s(d)(({theme:r})=>({backgroundColor:r.palette.mode==="dark"?"#1A2027":"#fff",...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function te(){return e(l,{sx:{flexGrow:1},children:i(n,{container:!0,spacing:3,children:[e(n,{item:!0,xs:!0,children:e(k,{children:"xs"})}),e(n,{item:!0,xs:6,children:e(k,{children:"xs=6"})}),e(n,{item:!0,xs:!0,children:e(k,{children:"xs"})})]})})}const ne=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function AutoGrid() {
    return (<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>);
}
`,A=s(d)(({theme:r})=>({backgroundColor:r.palette.mode==="dark"?"#1A2027":"#fff",...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function re(){return e(l,{sx:{flexGrow:1},children:i(n,{container:!0,spacing:3,children:[e(n,{item:!0,xs:"auto",children:e(A,{children:"variable width content"})}),e(n,{item:!0,xs:6,children:e(A,{children:"xs=6"})}),e(n,{item:!0,xs:!0,children:e(A,{children:"xs"})})]})})}const ie=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function VariableWidthGrid() {
    return (<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs="auto">
          <Item>variable width content</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>);
}
`,oe=s("img")({margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"});function ae(){return e(d,{sx:{p:2,margin:"auto",maxWidth:500,flexGrow:1,backgroundColor:r=>r.palette.mode==="dark"?"#1A2027":"#fff"},children:i(n,{container:!0,spacing:2,children:[e(n,{item:!0,children:e($,{sx:{width:128,height:128},children:e(oe,{alt:"complex",src:"/material-ui-static/images/grid/complex.jpg"})})}),i(n,{item:!0,xs:12,sm:!0,container:!0,children:[i(n,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,children:[i(n,{item:!0,xs:!0,children:[e(t,{gutterBottom:!0,variant:"subtitle1",component:"div",children:"Standard license"}),e(t,{variant:"body2",gutterBottom:!0,children:"Full resolution 1920x1080 • JPEG"}),e(t,{variant:"body2",color:"text.secondary",children:"ID: 1030114"})]}),e(n,{item:!0,children:e(t,{sx:{cursor:"pointer"},variant:"body2",children:"Remove"})})]}),e(n,{item:!0,children:e(t,{variant:"subtitle1",component:"div",children:"$19.00"})})]})]})})}const le=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
export default function ComplexGrid() {
    return (<Paper sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/material-ui-static/images/grid/complex.jpg"/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>);
}
`,F=s(d)(({theme:r})=>({backgroundColor:r.palette.mode==="dark"?"#1A2027":"#fff",...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function B(){return i(g.Fragment,{children:[e(n,{item:!0,xs:4,children:e(F,{children:"Item"})}),e(n,{item:!0,xs:4,children:e(F,{children:"Item"})}),e(n,{item:!0,xs:4,children:e(F,{children:"Item"})})]})}function de(){return e(l,{sx:{flexGrow:1},children:i(n,{container:!0,spacing:1,children:[e(n,{container:!0,item:!0,spacing:3,children:e(B,{})}),e(n,{container:!0,item:!0,spacing:3,children:e(B,{})}),e(n,{container:!0,item:!0,spacing:3,children:e(B,{})})]})})}const me=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function FormRow() {
    return (<React.Fragment>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>);
}
export default function NestedGrid() {
    return (<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>);
}
`,T=s(d)(({theme:r})=>({backgroundColor:r.palette.mode==="dark"?"#1A2027":"#fff",...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function ce(){return e(l,{sx:{flexGrow:1},children:i(n,{container:!0,spacing:2,columns:16,children:[e(n,{item:!0,xs:8,children:e(T,{children:"xs=8"})}),e(n,{item:!0,xs:8,children:e(T,{children:"xs=8"})})]})})}const se=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function ColumnsGrid() {
    return (<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>);
}
`,S=s(d)(({theme:r})=>({backgroundColor:r.palette.mode==="dark"?"#1A2027":"#fff",...r.typography.body2,padding:r.spacing(2),maxWidth:400,color:r.palette.text.primary})),P=`Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;function pe(){return i(l,{sx:{flexGrow:1,overflow:"hidden",px:3},children:[e(S,{sx:{my:1,mx:"auto",p:2},children:i(n,{container:!0,wrap:"nowrap",spacing:2,children:[e(n,{item:!0,children:e(R,{children:"W"})}),e(n,{item:!0,xs:!0,zeroMinWidth:!0,children:e(t,{noWrap:!0,children:P})})]})}),e(S,{sx:{my:1,mx:"auto",p:2},children:i(n,{container:!0,wrap:"nowrap",spacing:2,children:[e(n,{item:!0,children:e(R,{children:"W"})}),e(n,{item:!0,xs:!0,children:e(t,{noWrap:!0,children:P})})]})}),e(S,{sx:{my:1,mx:"auto",p:2},children:i(n,{container:!0,wrap:"nowrap",spacing:2,children:[e(n,{item:!0,children:e(R,{children:"W"})}),e(n,{item:!0,xs:!0,children:e(t,{children:P})})]})})]})}const he=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
}));
const message = \`Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. \`;
export default function AutoGridNoWrap() {
    return (<Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper sx={{
            my: 1,
            mx: 'auto',
            p: 2,
        }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper sx={{
            my: 1,
            mx: 'auto',
            p: 2,
        }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper sx={{
            my: 1,
            mx: 'auto',
            p: 2,
        }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>);
}
`,G=s(d)(({theme:r})=>({backgroundColor:r.palette.mode==="dark"?"#1A2027":"#fff",...r.typography.body2,padding:r.spacing(1),textAlign:"center",color:r.palette.text.secondary}));function ue(){return e(l,{sx:{width:1},children:i(l,{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:2,children:[e(l,{gridColumn:"span 8",children:e(G,{children:"xs=8"})}),e(l,{gridColumn:"span 4",children:e(G,{children:"xs=4"})}),e(l,{gridColumn:"span 4",children:e(G,{children:"xs=4"})}),e(l,{gridColumn:"span 8",children:e(G,{children:"xs=8"})})]})})}const xe=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function CSSGrid() {
    return (<Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <Item>xs=8</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
        <Box gridColumn="span 8">
          <Item>xs=8</Item>
        </Box>
      </Box>
    </Box>);
}
`;function we(r){return i(H,{children:[i("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(M,{}),e(D,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/grid",target:"_blank",role:"button",size:"small",startIcon:e(z,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Grid"}),e(t,{className:"description",children:"The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts."}),i(t,{className:"text-14 mb-32",component:"div",children:["The ",e("a",{href:"https://m2.material.io/design/layout/responsive-layout-grid.html",children:"grid"})," creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout."]}),i(t,{className:"text-14 mb-32",component:"div",children:[":::warning The ",e("code",{children:"Grid"})," component shouldn't be confused with a data grid; it is closer to a layout grid. For a data grid head to ",i("a",{href:"/x/react-data-grid/",children:["the ",e("code",{children:"DataGrid"})," component"]}),". :::"]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"How it works"}),i(t,{className:"text-14 mb-32",component:"div",children:["The grid system is implemented with the ",e("code",{children:"Grid"})," component:"]}),i("ul",{className:"space-y-16",children:[i("li",{children:["It uses ",e("a",{href:"https://www.w3.org/TR/css-flexbox-1/",children:"CSS's Flexible Box module"})," for high flexibility."]}),i("li",{children:["There are two types of layout: ",e("em",{children:"containers"})," and ",e("em",{children:"items"}),"."]}),e("li",{children:"Item widths are set in percentages, so they're always fluid and sized relative to their parent element."}),e("li",{children:"Items have padding to create the spacing between individual items."}),e("li",{children:"There are five grid breakpoints: xs, sm, md, lg, and xl."}),i("li",{children:["Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the component when the viewport width satisfies the ",e("a",{href:"/material-ui/customization/breakpoints/#default-breakpoints",children:"breakpoint constraints"}),"."]})]}),i(t,{className:"text-14 mb-32",component:"div",children:["If you are ",e("strong",{children:"new to or unfamiliar with flexbox"}),", we encourage you to read this ",e("a",{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",children:"CSS-Tricks flexbox"})," guide."]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Fluid grids"}),e(t,{className:"text-14 mb-32",component:"div",children:"Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically."}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Basic grid"}),e(t,{className:"text-14 mb-32",component:"div",children:"Column widths are integer values between 1 and 12; they apply at any breakpoint and indicate how many columns are occupied by the component."}),i(t,{className:"text-14 mb-32",component:"div",children:["A value passed to any given breakpoint also applies to all wider breakpoints (if they have no values explicitly defined). For example, ",e("code",{children:"xs={12}"})," sizes a component to occupy the full width of its parent container, regardless of the viewport size."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"BasicGrid.js",className:"my-16",iframe:!1,component:J,raw:V})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Grid with multiple breakpoints"}),e(t,{className:"text-14 mb-32",component:"div",children:"Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints."}),i(t,{className:"text-14 mb-32",component:"div",children:["For example, ",e("code",{children:"xs={12} sm={6}"})," sizes a component to occupy half of the viewport width (6 columns) when viewport width is ",e("a",{href:"/material-ui/customization/breakpoints/#default-breakpoints",children:"600 or more pixels"}),". For smaller viewports, the component fills all 12 available columns."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"FullWidthGrid.js",className:"my-16",iframe:!1,component:Y,raw:E})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Spacing"}),i(t,{className:"text-14 mb-32",component:"div",children:["To control space between children, use the ",e("code",{children:"spacing"})," prop. The spacing value can be any positive number, including decimals and any string. The prop is converted into a CSS property using the ",e("a",{href:"/material-ui/customization/spacing/",children:e("code",{children:"theme.spacing()"})})," helper."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"SpacingGrid.js",className:"my-16",iframe:!1,component:_,raw:q})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Row & column spacing"}),i(t,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"rowSpacing"})," and ",e("code",{children:"columnSpacing"})," props allow for specifying the row and column gaps independently. It's similar to the ",e("code",{children:"row-gap"})," and ",e("code",{children:"column-gap"})," properties of ",e("a",{href:"/system/grid/#row-gap-amp-column-gap",children:"CSS Grid"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"RowAndColumnSpacing.js",className:"my-16",iframe:!1,component:U,raw:K})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Responsive values"}),i(t,{className:"text-14 mb-32",component:"div",children:["You can switch the props' value based on the active breakpoint. For instance, we can implement the ",e("a",{href:"https://m2.material.io/design/layout/responsive-layout-grid.html",children:'"recommended"'})," responsive layout grid of Material Design."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"ResponsiveGrid.js",className:"my-16",iframe:!1,component:Q,raw:X})}),e(t,{className:"text-14 mb-32",component:"div",children:"Responsive values is supported by:"}),i("ul",{className:"space-y-16",children:[e("li",{children:e("code",{children:"columns"})}),e("li",{children:e("code",{children:"columnSpacing"})}),e("li",{children:e("code",{children:"direction"})}),e("li",{children:e("code",{children:"rowSpacing"})}),e("li",{children:e("code",{children:"spacing"})}),i("li",{children:["all the ",e("a",{href:"#system-props",children:"other props"})," of the system"]})]}),i(t,{className:"text-14 mb-32",component:"div",children:[":::warning When using a responsive ",e("code",{children:"columns"})," prop, each grid item needs its corresponding breakpoint. For instance, this is not working. The grid item misses the value for ",e("code",{children:"md"}),":"]}),e(x,{component:"pre",className:"language-jsx",children:` 
<Grid container columns={{ xs: 4, md: 12 }}>
  <Grid item xs={2} />
</Grid>
`}),e(t,{className:"text-14 mb-32",component:"div",children:":::"}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Interactive"}),e(t,{className:"text-14 mb-32",component:"div",children:"Below is an interactive demo that lets you explore the visual results of the different settings:"}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"InteractiveGrid.js",className:"my-16",iframe:!1,component:Z,raw:ee})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Auto-layout"}),i(t,{className:"text-14 mb-32",component:"div",children:["The Auto-layout makes the ",e("em",{children:"items"})," equitably share the available space. That also means you can set the width of one ",e("em",{children:"item"})," and the others will automatically resize around it."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"AutoGrid.js",className:"my-16",iframe:!1,component:te,raw:ne})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Variable width content"}),i(t,{className:"text-14 mb-32",component:"div",children:["Set one of the size breakpoint props to ",e("code",{children:'"auto"'})," instead of ",e("code",{children:"true"})," / a ",e("code",{children:"number"})," to size a column based on the natural width of its content."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"VariableWidthGrid.js",className:"my-16",iframe:!1,component:re,raw:ie})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Complex Grid"}),e(t,{className:"text-14 mb-32",component:"div",children:"The following demo doesn't follow the Material Design guidelines, but illustrates how the grid can be used to build complex layouts."}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"ComplexGrid.js",className:"my-16",iframe:!1,component:ae,raw:le})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Nested Grid"}),i(t,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"container"})," and ",e("code",{children:"item"})," props are two independent booleans; they can be combined to allow a Grid component to be both a flex container and child."]}),e("div",{className:"border border-1 p-16 rounded-16 my-12",children:i(t,{className:"text-14 mb-32",component:"div",children:["A flex ",e("strong",{children:"container"})," is the box generated by an element with a computed display of ",e("code",{children:"flex"})," or ",e("code",{children:"inline-flex"}),". In-flow children of a flex container are called flex ",e("strong",{children:"items"})," and are laid out using the flex layout model."]})}),e(t,{className:"text-14 mb-32",component:"div",children:e("a",{href:"https://www.w3.org/TR/css-flexbox-1/#box-model",children:"https://www.w3.org/TR/css-flexbox-1/#box-model"})}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"NestedGrid.js",className:"my-16",iframe:!1,component:de,raw:me})}),e(t,{className:"text-14 mb-32",component:"div",children:"⚠️ Defining an explicit width to a Grid element that is flex container, flex item, and has spacing at the same time leads to unexpected behavior, avoid doing it:"}),e(x,{component:"pre",className:"language-jsx",children:` 
<Grid spacing={1} container item xs={12}>
`}),e(t,{className:"text-14 mb-32",component:"div",children:"If you need to do such, remove one of the props."}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Columns"}),i(t,{className:"text-14 mb-32",component:"div",children:["You can change the default number of columns (12) with the ",e("code",{children:"columns"})," prop."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"ColumnsGrid.js",className:"my-16",iframe:!1,component:ce,raw:se})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Negative margin"}),i(t,{className:"text-14 mb-32",component:"div",children:["The spacing between items is implemented with a negative margin. This might lead to unexpected behaviors. For instance, to apply a background color, you need to apply ",e("code",{children:"display: flex;"})," to the parent."]}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"white-space: nowrap"}),i(t,{className:"text-14 mb-32",component:"div",children:["The initial setting on flex items is ",e("code",{children:"min-width: auto"}),". This causes a positioning conflict when children use ",e("code",{children:"white-space: nowrap;"}),". You can reproduce the issue with:"]}),e(x,{component:"pre",className:"language-jsx",children:` 
<Grid item xs>
  <Typography noWrap>
`}),i(t,{className:"text-14 mb-32",component:"div",children:["In order for the item to stay within the container you need to set ",e("code",{children:"min-width: 0"}),". In practice, you can set the ",e("code",{children:"zeroMinWidth"})," prop:"]}),e(x,{component:"pre",className:"language-jsx",children:` 
<Grid item xs zeroMinWidth>
  <Typography noWrap>
`}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"AutoGridNoWrap.js",className:"my-16",iframe:!1,component:pe,raw:he})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"direction: column | column-reverse"}),i(t,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"xs"}),", ",e("code",{children:"sm"}),", ",e("code",{children:"md"}),", ",e("code",{children:"lg"}),", and ",e("code",{children:"xl"})," props are ",e("strong",{children:"not supported"})," within ",e("code",{children:'direction="column"'})," and ",e("code",{children:'direction="column-reverse"'})," containers."]}),i(t,{className:"text-14 mb-32",component:"div",children:["They define the number of grids the component will use for a given breakpoint. They are intended to control ",e("strong",{children:"width"})," using ",e("code",{children:"flex-basis"})," in ",e("code",{children:"row"})," containers but they will impact height in ",e("code",{children:"column"})," containers. If used, these props may have undesirable effects on the height of the ",e("code",{children:"Grid"})," item elements."]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"CSS Grid Layout"}),i(t,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"Grid"})," component is using CSS flexbox internally. But as seen below, you can easily use ",e("a",{href:"/system/grid/",children:"the system"})," and CSS Grid to layout your pages."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"CSSGrid.js",className:"my-16",iframe:!1,component:ue,raw:xe})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"System props"}),i(t,{className:"text-14 mb-32",component:"div",children:["As a CSS utility component, the ",e("code",{children:"Grid"})," supports all ",e("a",{href:"/system/properties/",children:e("code",{children:"system"})})," properties. You can use them as props directly on the component. For instance, a padding:"]}),e(x,{component:"pre",className:"language-jsx",children:` 
<Grid item p={2}>
`})]})}export{we as default};
