import{bU as A,dD as Ie,dE as Ce,r as v,e2 as Ne,dM as Se,bX as Be,bY as ie,aI as Ae,x as Re,dF as je,az as Oe,aE as Pe,s as u,bW as _e,P as h,j as e,d as t,H as c,bf as $e,bt as Te,dY as We,bh as Le,cL as Ee,B as M,F as Fe,C as ze,T as r,dp as B,bb as Ue}from"./index-cy1M6gwN.js";import{F as p}from"./FuseExample-0-XNuDGL.js";import{D as De}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{H as qe}from"./HighlightedCode-fTezzlqK.js";import"./DocumentationNavigation-fvt_Eo8n.js";const He=(n,i)=>n.filter(a=>i.includes(a)),I=(n,i,a)=>{const s=n.keys[0];Array.isArray(i)?i.forEach((d,l)=>{a((m,y)=>{l<=n.keys.length-1&&(l===0?Object.assign(m,y):m[n.up(n.keys[l])]=y)},d)}):i&&typeof i=="object"?(Object.keys(i).length>n.keys.length?n.keys:He(n.keys,Object.keys(i))).forEach(l=>{if(n.keys.indexOf(l)!==-1){const m=i[l];m!==void 0&&a((y,C)=>{s===l?Object.assign(y,C):y[n.up(l)]=C},m)}}):(typeof i=="number"||typeof i=="string")&&a((d,l)=>{Object.assign(d,l)},i)};function b(n){return n?`Level${n}`:""}function R(n){return n.unstable_level>0&&n.container}function se(n){return function(a){return`var(--Grid-${a}Spacing${b(n.unstable_level)})`}}function X(n){return function(a){return n.unstable_level===0?`var(--Grid-${a}Spacing)`:`var(--Grid-${a}Spacing${b(n.unstable_level-1)})`}}function K(n){return n.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${b(n.unstable_level-1)})`}const Me=({theme:n,ownerState:i})=>{const a=se(i),s={};return I(n.breakpoints,i.gridSize,(d,l)=>{let m={};l===!0&&(m={flexBasis:0,flexGrow:1,maxWidth:"100%"}),l==="auto"&&(m={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof l=="number"&&(m={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${l} / ${K(i)}${R(i)?` + ${a("column")}`:""})`}),d(s,m)}),s},Ve=({theme:n,ownerState:i})=>{const a={};return I(n.breakpoints,i.gridOffset,(s,d)=>{let l={};d==="auto"&&(l={marginLeft:"auto"}),typeof d=="number"&&(l={marginLeft:d===0?"0px":`calc(100% * ${d} / ${K(i)})`}),s(a,l)}),a},Ye=({theme:n,ownerState:i})=>{if(!i.container)return{};const a=R(i)?{[`--Grid-columns${b(i.unstable_level)}`]:K(i)}:{"--Grid-columns":12};return I(n.breakpoints,i.columns,(s,d)=>{s(a,{[`--Grid-columns${b(i.unstable_level)}`]:d})}),a},Xe=({theme:n,ownerState:i})=>{if(!i.container)return{};const a=X(i),s=R(i)?{[`--Grid-rowSpacing${b(i.unstable_level)}`]:a("row")}:{};return I(n.breakpoints,i.rowSpacing,(d,l)=>{var m;d(s,{[`--Grid-rowSpacing${b(i.unstable_level)}`]:typeof l=="string"?l:(m=n.spacing)==null?void 0:m.call(n,l)})}),s},Ke=({theme:n,ownerState:i})=>{if(!i.container)return{};const a=X(i),s=R(i)?{[`--Grid-columnSpacing${b(i.unstable_level)}`]:a("column")}:{};return I(n.breakpoints,i.columnSpacing,(d,l)=>{var m;d(s,{[`--Grid-columnSpacing${b(i.unstable_level)}`]:typeof l=="string"?l:(m=n.spacing)==null?void 0:m.call(n,l)})}),s},Je=({theme:n,ownerState:i})=>{if(!i.container)return{};const a={};return I(n.breakpoints,i.direction,(s,d)=>{s(a,{flexDirection:d})}),a},Qe=({ownerState:n})=>{const i=se(n),a=X(n);return A({minWidth:0,boxSizing:"border-box"},n.container&&A({display:"flex",flexWrap:"wrap"},n.wrap&&n.wrap!=="wrap"&&{flexWrap:n.wrap},{margin:`calc(${i("row")} / -2) calc(${i("column")} / -2)`},n.disableEqualOverflow&&{margin:`calc(${i("row")} * -1) 0px 0px calc(${i("column")} * -1)`}),(!n.container||R(n))&&A({padding:`calc(${a("row")} / 2) calc(${a("column")} / 2)`},(n.disableEqualOverflow||n.parentDisableEqualOverflow)&&{padding:`${a("row")} 0px 0px ${a("column")}`}))},Ze=n=>{const i=[];return Object.entries(n).forEach(([a,s])=>{s!==!1&&s!==void 0&&i.push(`grid-${a}-${String(s)}`)}),i},en=(n,i="xs")=>{function a(s){return s===void 0?!1:typeof s=="string"&&!Number.isNaN(Number(s))||typeof s=="number"&&s>0}if(a(n))return[`spacing-${i}-${String(n)}`];if(typeof n=="object"&&!Array.isArray(n)){const s=[];return Object.entries(n).forEach(([d,l])=>{a(l)&&s.push(`spacing-${d}-${String(l)}`)}),s}return[]},nn=n=>n===void 0?[]:typeof n=="object"?Object.entries(n).map(([i,a])=>`direction-${i}-${a}`):[`direction-xs-${String(n)}`],rn=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],tn=Ie(),on=Ce("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,i)=>i.root});function an(n){return je({props:n,name:"MuiGrid",defaultTheme:tn})}function sn(n={}){const{createStyledComponent:i=on,useThemeProps:a=an,componentName:s="MuiGrid"}=n,d=v.createContext(void 0),l=(C,x)=>{const{container:j,direction:O,spacing:P,wrap:N,gridSize:_}=C,$={root:["root",j&&"container",N!=="wrap"&&`wrap-xs-${String(N)}`,...nn(O),...Ze(_),...j?en(P,x.breakpoints.keys[0]):[]]};return Oe($,T=>Pe(s,T),{})},m=i(Ye,Ke,Xe,Me,Je,Qe,Ve),y=v.forwardRef(function(x,j){var O,P,N,_,$,T,J,Q;const U=Ne(),le=a(x),D=Se(le),W=v.useContext(d),{className:de,children:ce,columns:me=12,container:pe=!1,component:he="div",direction:ue="row",wrap:fe="wrap",spacing:q=0,rowSpacing:xe=q,columnSpacing:ge=q,disableEqualOverflow:Z,unstable_level:G=0}=D,be=Be(D,rn);let S=Z;G&&Z!==void 0&&(S=x.disableEqualOverflow);const ee={},ne={},re={};Object.entries(be).forEach(([f,w])=>{U.breakpoints.values[f]!==void 0?ee[f]=w:U.breakpoints.values[f.replace("Offset","")]!==void 0?ne[f.replace("Offset","")]=w:re[f]=w});const ye=(O=x.columns)!=null?O:G?void 0:me,Ge=(P=x.spacing)!=null?P:G?void 0:q,ve=(N=(_=x.rowSpacing)!=null?_:x.spacing)!=null?N:G?void 0:xe,we=($=(T=x.columnSpacing)!=null?T:x.spacing)!=null?$:G?void 0:ge,te=A({},D,{level:G,columns:ye,container:pe,direction:ue,wrap:fe,spacing:Ge,rowSpacing:ve,columnSpacing:we,gridSize:ee,gridOffset:ne,disableEqualOverflow:(J=(Q=S)!=null?Q:W)!=null?J:!1,parentDisableEqualOverflow:W}),ke=l(te,U);let H=ie.jsx(m,A({ref:j,as:he,ownerState:te,className:Re(ke.root,de)},re,{children:v.Children.map(ce,f=>{if(v.isValidElement(f)&&Ae(f,["Grid"])){var w;return v.cloneElement(f,{unstable_level:(w=f.props.unstable_level)!=null?w:G+1})}return f})}));return S!==void 0&&S!==(W??!1)&&(H=ie.jsx(d.Provider,{value:S,children:H})),H});return y.muiName="Grid",y}const ln=sn({createStyledComponent:u("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(n,i)=>i.root}),componentName:"MuiGrid2",useThemeProps:n=>_e({props:n,name:"MuiGrid2"})}),o=ln,L=u(h)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function dn(){return e(c,{sx:{flexGrow:1},children:t(o,{container:!0,spacing:2,children:[e(o,{xs:8,children:e(L,{children:"xs=8"})}),e(o,{xs:4,children:e(L,{children:"xs=4"})}),e(o,{xs:4,children:e(L,{children:"xs=4"})}),e(o,{xs:8,children:e(L,{children:"xs=8"})})]})})}const cn=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
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
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>);
}
`,E=u(h)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function mn(){return e(c,{sx:{flexGrow:1},children:t(o,{container:!0,spacing:2,children:[e(o,{xs:6,md:8,children:e(E,{children:"xs=6 md=8"})}),e(o,{xs:6,md:4,children:e(E,{children:"xs=6 md=4"})}),e(o,{xs:6,md:4,children:e(E,{children:"xs=6 md=4"})}),e(o,{xs:6,md:8,children:e(E,{children:"xs=6 md=8"})})]})})}const pn=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
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
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>);
}
`;function hn(){const[n,i]=v.useState(2),a=d=>{i(Number(d.target.value))},s=`
<Grid container spacing={${n}}>
`;return t(c,{sx:{flexGrow:1,display:"flex",flexDirection:"column",gap:2,pt:2,"&& pre":{margin:0}},children:[e(o,{container:!0,justifyContent:"center",spacing:n,children:[0,1,2].map(d=>e(o,{children:e(h,{sx:{height:140,width:100,backgroundColor:l=>l.palette.mode==="dark"?"#1A2027":"#fff"}})},d))}),e(h,{sx:{p:2},children:t($e,{component:"fieldset",children:[e(Te,{component:"legend",children:"spacing"}),e(We,{name:"spacing","aria-label":"spacing",value:n.toString(),onChange:a,row:!0,children:[0,.5,1,2,3,4,8,12].map(d=>e(Le,{value:d.toString(),control:e(Ee,{}),label:d.toString()},d))})]})}),e(qe,{code:s,language:"jsx"})]})}const un=`import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
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
    return (<Box sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            pt: 2,
            '&& pre': { margin: 0 },
        }}>
      <Grid container justifyContent="center" spacing={spacing}>
        {[0, 1, 2].map((value) => (<Grid key={value}>
            <Paper sx={{
                height: 140,
                width: 100,
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}/>
          </Grid>))}
      </Grid>
      <Paper sx={{ p: 2 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">spacing</FormLabel>
          <RadioGroup name="spacing" aria-label="spacing" value={spacing.toString()} onChange={handleChange} row>
            {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (<FormControlLabel key={value} value={value.toString()} control={<Radio />} label={value.toString()}/>))}
          </RadioGroup>
        </FormControl>
      </Paper>
      <HighlightedCode code={jsx} language="jsx"/>
    </Box>);
}
`,F=u(h)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function fn(){return e(c,{sx:{width:"100%"},children:t(o,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[e(o,{xs:6,children:e(F,{children:"1"})}),e(o,{xs:6,children:e(F,{children:"2"})}),e(o,{xs:6,children:e(F,{children:"3"})}),e(o,{xs:6,children:e(F,{children:"4"})})]})})}const xn=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
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
        <Grid xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>);
}
`,gn=u(h)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(2),textAlign:"center",color:n.palette.text.secondary}));function bn(){return e(c,{sx:{flexGrow:1},children:e(o,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:Array.from(Array(6)).map((n,i)=>e(o,{xs:2,sm:4,md:4,children:e(gn,{children:"xs=2"})},i))})})}const yn=`import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
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
        {Array.from(Array(6)).map((_, index) => (<Grid xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>))}
      </Grid>
    </Box>);
}
`,V=u(h)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function Gn(){return e(c,{sx:{flexGrow:1},children:t(o,{container:!0,spacing:3,children:[e(o,{xs:!0,children:e(V,{children:"xs"})}),e(o,{xs:6,children:e(V,{children:"xs=6"})}),e(o,{xs:!0,children:e(V,{children:"xs"})})]})})}const vn=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
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
        <Grid xs>
          <Item>xs</Item>
        </Grid>
        <Grid xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>);
}
`,Y=u(h)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function wn(){return e(c,{sx:{flexGrow:1},children:t(o,{container:!0,spacing:3,children:[e(o,{xs:"auto",children:e(Y,{children:"variable width content"})}),e(o,{xs:6,children:e(Y,{children:"xs=6"})}),e(o,{xs:!0,children:e(Y,{children:"xs"})})]})})}const kn=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
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
        <Grid xs="auto">
          <Item>variable width content</Item>
        </Grid>
        <Grid xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>);
}
`,g=u(h)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function In(){return e(c,{sx:{flexGrow:1},children:t(o,{container:!0,spacing:2,children:[e(o,{xs:12,md:5,lg:4,children:e(g,{children:"Email subscribe section"})}),t(o,{container:!0,xs:12,md:7,lg:8,spacing:4,children:[e(o,{xs:6,lg:3,children:t(g,{children:[e(c,{id:"category-a",sx:{fontSize:"12px",textTransform:"uppercase"},children:"Category A"}),t(c,{component:"ul","aria-labelledby":"category-a",sx:{pl:2},children:[e("li",{children:"Link 1.1"}),e("li",{children:"Link 1.2"}),e("li",{children:"Link 1.3"})]})]})}),e(o,{xs:6,lg:3,children:t(g,{children:[e(c,{id:"category-b",sx:{fontSize:"12px",textTransform:"uppercase"},children:"Category B"}),t(c,{component:"ul","aria-labelledby":"category-b",sx:{pl:2},children:[e("li",{children:"Link 2.1"}),e("li",{children:"Link 2.2"}),e("li",{children:"Link 2.3"})]})]})}),e(o,{xs:6,lg:3,children:t(g,{children:[e(c,{id:"category-c",sx:{fontSize:"12px",textTransform:"uppercase"},children:"Category C"}),t(c,{component:"ul","aria-labelledby":"category-c",sx:{pl:2},children:[e("li",{children:"Link 3.1"}),e("li",{children:"Link 3.2"}),e("li",{children:"Link 3.3"})]})]})}),e(o,{xs:6,lg:3,children:t(g,{children:[e(c,{id:"category-d",sx:{fontSize:"12px",textTransform:"uppercase"},children:"Category D"}),t(c,{component:"ul","aria-labelledby":"category-d",sx:{pl:2},children:[e("li",{children:"Link 4.1"}),e("li",{children:"Link 4.2"}),e("li",{children:"Link 4.3"})]})]})})]}),t(o,{xs:12,container:!0,justifyContent:"space-between",alignItems:"center",flexDirection:{xs:"column",sm:"row"},sx:{fontSize:"12px"},children:[e(o,{sx:{order:{xs:2,sm:1}},children:e(g,{children:"© Copyright"})}),t(o,{container:!0,columnSpacing:1,sx:{order:{xs:1,sm:2}},children:[e(o,{children:e(g,{children:"Link A"})}),e(o,{children:e(g,{children:"Link B"})}),e(o,{children:e(g,{children:"Link C"})})]})]})]})})}const Cn=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function NestedGrid() {
    return (<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
          <Item>Email subscribe section</Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <Item>
              <Box id="category-a" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Category A
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li>Link 1.1</li>
                <li>Link 1.2</li>
                <li>Link 1.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box id="category-b" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Category B
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box id="category-c" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Category C
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <li>Link 3.1</li>
                <li>Link 3.2</li>
                <li>Link 3.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box id="category-d" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Category D
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <li>Link 4.1</li>
                <li>Link 4.2</li>
                <li>Link 4.3</li>
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid xs={12} container justifyContent="space-between" alignItems="center" flexDirection={{ xs: 'column', sm: 'row' }} sx={{ fontSize: '12px' }}>
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>© Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>Link A</Item>
            </Grid>
            <Grid>
              <Item>Link B</Item>
            </Grid>
            <Grid>
              <Item>Link C</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>);
}
`,k=u(h)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function Nn(){return e(c,{sx:{flexGrow:1},children:t(o,{container:!0,spacing:2,columns:24,children:[e(o,{xs:8,children:e(k,{children:"xs=8/24"})}),t(o,{container:!0,xs:16,children:[e(o,{xs:12,children:e(k,{children:"nested xs=12/24"})}),e(o,{xs:12,children:e(k,{children:"nested xs=12/24"})})]}),e(o,{xs:8,children:e(k,{children:"xs=8/24"})}),t(o,{container:!0,xs:16,columns:12,children:[e(o,{xs:6,children:e(k,{children:"nested xs=6/12"})}),e(o,{xs:6,children:e(k,{children:"nested xs=6/12"})})]})]})})}const Sn=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function NestedGridColumns() {
    return (<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={24}>
        <Grid xs={8}>
          <Item>xs=8/24</Item>
        </Grid>
        <Grid container xs={16}>
          <Grid xs={12}>
            <Item>nested xs=12/24</Item>
          </Grid>
          <Grid xs={12}>
            <Item>nested xs=12/24</Item>
          </Grid>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8/24</Item>
        </Grid>
        <Grid container xs={16} columns={12}>
          <Grid xs={6}>
            <Item>nested xs=6/12</Item>
          </Grid>
          <Grid xs={6}>
            <Item>nested xs=6/12</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>);
}
`,oe=u(h)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function Bn(){return e(c,{sx:{flexGrow:1},children:t(o,{container:!0,spacing:2,columns:16,children:[e(o,{xs:8,children:e(oe,{children:"xs=8"})}),e(o,{xs:8,children:e(oe,{children:"xs=8"})})]})})}const An=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
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
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>);
}
`,z=u(h)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function Rn(){return t(o,{container:!0,spacing:3,sx:{flexGrow:1},children:[e(o,{xs:6,xsOffset:3,md:2,mdOffset:0,children:e(z,{children:"1"})}),e(o,{xs:4,md:2,mdOffset:"auto",children:e(z,{children:"2"})}),e(o,{xs:4,xsOffset:4,md:2,mdOffset:0,children:e(z,{children:"3"})}),e(o,{xs:!0,md:6,mdOffset:2,children:e(z,{children:"4"})})]})}const jn=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function OffsetGrid() {
    return (<Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid xs={6} xsOffset={3} md={2} mdOffset={0}>
        <Item>1</Item>
      </Grid>
      <Grid xs={4} md={2} mdOffset="auto">
        <Item>2</Item>
      </Grid>
      <Grid xs={4} xsOffset={4} md={2} mdOffset={0}>
        <Item>3</Item>
      </Grid>
      <Grid xs md={6} mdOffset={2}>
        <Item>4</Item>
      </Grid>
    </Grid>);
}
`,ae=u(h)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}));function On(){return t(c,{sx:n=>({display:"flex",flexDirection:"column",gap:3,width:200,"& > div":{overflow:"auto hidden","&::-webkit-scrollbar":{height:10,WebkitAppearance:"none"},"&::-webkit-scrollbar-thumb":{borderRadius:8,border:"2px solid",borderColor:n.palette.mode==="dark"?"":"#E7EBF0",backgroundColor:"rgba(0 0 0 / 0.5)"}}}),children:[e("div",{children:e(o,{container:!0,spacing:3,children:e(o,{xs:12,children:e(ae,{children:"Scroll bar appears"})})})}),e("div",{children:e(o,{container:!0,spacing:3,disableEqualOverflow:!0,children:e(o,{xs:12,children:e(ae,{children:"`disableEqualOverflow` prevents scrollbar"})})})})]})}const Pn=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function OverflowGrid() {
    return (<Box sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: 200,
            '& > div': {
                overflow: 'auto hidden',
                '&::-webkit-scrollbar': { height: 10, WebkitAppearance: 'none' },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: 8,
                    border: '2px solid',
                    borderColor: theme.palette.mode === 'dark' ? '' : '#E7EBF0',
                    backgroundColor: 'rgba(0 0 0 / 0.5)',
                },
            },
        })}>
      <div>
        <Grid container spacing={3}>
          <Grid xs={12}>
            <Item>Scroll bar appears</Item>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={3} disableEqualOverflow>
          <Grid xs={12}>
            <Item>\`disableEqualOverflow\` prevents scrollbar</Item>
          </Grid>
        </Grid>
      </div>
    </Box>);
}
`;function _n(){return e(c,{sx:{flexGrow:1},children:t(o,{container:!0,spacing:2,minHeight:160,children:[e(o,{xs:!0,display:"flex",justifyContent:"center",alignItems:"center",children:e(M,{src:"/material-ui-static/images/avatar/1.jpg"})}),e(o,{display:"flex",justifyContent:"center",alignItems:"center",children:e(M,{src:"/material-ui-static/images/avatar/2.jpg"})}),e(o,{xs:!0,display:"flex",justifyContent:"center",alignItems:"center",children:e(M,{src:"/material-ui-static/images/avatar/3.jpg"})})]})})}const $n=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
export default function CenteredElementGrid() {
    return (<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Avatar src="/material-ui-static/images/avatar/1.jpg"/>
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Avatar src="/material-ui-static/images/avatar/2.jpg"/>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Avatar src="/material-ui-static/images/avatar/3.jpg"/>
        </Grid>
      </Grid>
    </Box>);
}
`;function Tn(){return e(c,{sx:{flexGrow:1,p:2},children:e(o,{container:!0,spacing:2,sx:{"--Grid-borderWidth":"1px",borderTop:"var(--Grid-borderWidth) solid",borderLeft:"var(--Grid-borderWidth) solid",borderColor:"divider","& > div":{borderRight:"var(--Grid-borderWidth) solid",borderBottom:"var(--Grid-borderWidth) solid",borderColor:"divider"}},children:[...Array(6)].map((n,i)=>e(o,{xs:12,sm:6,md:4,lg:3,minHeight:160},i))})})}const Wn=`import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
export default function FullBorderedGrid() {
    return (<Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2} sx={{
            '--Grid-borderWidth': '1px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            '& > div': {
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
            },
        }}>
        {[...Array(6)].map((_, index) => (<Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} minHeight={160}/>))}
      </Grid>
    </Box>);
}
`;function Ln(){const n={xs:12,sm:6,md:4,lg:3};return e(c,{sx:{flexGrow:1,p:2},children:e(o,{container:!0,spacing:2,sx:i=>({"--Grid-borderWidth":"1px",borderTop:"var(--Grid-borderWidth) solid",borderColor:"divider","& > div":{borderRight:"var(--Grid-borderWidth) solid",borderBottom:"var(--Grid-borderWidth) solid",borderColor:"divider",...Object.keys(n).reduce((a,s)=>({...a,[`&:nth-of-type(${12/n[s]}n)`]:{[i.breakpoints.only(s)]:{borderRight:"none"}}}),{})}}),children:[...Array(6)].map((i,a)=>e(o,{...n,minHeight:160},a))})})}const En=`import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
export default function HalfBorderedGrid() {
    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
    return (<Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2} sx={(theme) => ({
            '--Grid-borderWidth': '1px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            '& > div': {
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
                ...Object.keys(colWidth).reduce((result, key) => ({
                    ...result,
                    [\`&:nth-of-type(\${12 / colWidth[key]}n)\`]: {
                        [theme.breakpoints.only(key)]: {
                            borderRight: 'none',
                        },
                    },
                }), {}),
            },
        })}>
        {[...Array(6)].map((_, index) => (<Grid key={index} {...colWidth} minHeight={160}/>))}
      </Grid>
    </Box>);
}
`;function Hn(n){return t(Ue,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(De,{}),e(ze,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/grid2",target:"_blank",role:"button",size:"small",startIcon:e(Fe,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(r,{className:"text-32 my-16 font-700",component:"h1",children:"Grid version 2"}),e(r,{className:"description",children:"The responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts."}),t(r,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"Grid"})," component works well for a layout with a known number of columns. The columns can be configured with multiple breakpoints to specify the column span of each child."]}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"What's changed"}),t(r,{className:"text-14 mb-32",component:"div",children:["We built the ",e("code",{children:"Grid"})," component from scratch in order to:"]}),t("ul",{className:"space-y-16",children:[t("li",{children:["Fix ",e("a",{href:"https://github.com/mui/material-ui/pull/32746",children:"known issues"})," introduced in Material UI v5."]}),t("li",{children:["Simplify the logic with CSS variables, removing the unnecessary ",e("code",{children:"item"})," prop and reducing CSS specificity."]}),t("li",{children:["Introduce a proper fix for ",e("a",{href:"#prevent-scrollbar",children:"preventing a scrollbar"})," by switching between negative margin approaches."]}),e("li",{children:"Set negative margins of equal size on all sides of the grid container by default."})]}),t(r,{className:"text-14 mb-32",component:"div",children:["Since the new implementation is considered a breaking change, we introduced it as ",e("code",{children:"Unstable_Grid2"})," to gather feedbacks from the community before making it stable in the next major release of Material UI."]}),t(r,{className:"text-14 mb-32",component:"div",children:["We encourage everyone to try the new version of the ",e("code",{children:"Grid"})," by visiting the ",e("a",{href:"/material-ui/migration/migration-grid-v2/",children:"Grid v2 migration guide"}),"."]}),t("div",{className:"border border-1 p-16 rounded-16 my-12",children:[t(r,{className:"text-14 mb-32",component:"div",children:["From now on, the ",e("code",{children:"Grid"})," v1 and ",e("code",{children:"Grid"})," v2 refer to the import as:"]}),e(B,{component:"pre",className:"language-js",children:` 
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
`})]}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"How it works"}),t(r,{className:"text-14 mb-32",component:"div",children:["The grid system is implemented with the ",e("code",{children:"Grid"})," component:"]}),t("ul",{className:"space-y-16",children:[t("li",{children:["It uses ",e("a",{href:"https://www.w3.org/TR/css-flexbox-1/",children:"CSS Flexbox"})," (rather than CSS Grid) for high flexibility."]}),t("li",{children:["The grid is always a flex item. Use the ",e("code",{children:"container"})," prop to add a flex container."]}),e("li",{children:"Item widths are set in percentages, so they're always fluid and sized relative to their parent element."}),t("li",{children:["There are five default grid breakpoints: xs, sm, md, lg, and xl. If you need custom breakpoints, check out ",e("a",{href:"#custom-breakpoints",children:"custom breakpoints grid"}),"."]}),t("li",{children:["You can give integer values for each breakpoint, to indicate how many of the 12 available columns are occupied by the component when the viewport width satisfies the ",e("a",{href:"/material-ui/customization/breakpoints/#default-breakpoints",children:"breakpoint constraints"}),"."]}),t("li",{children:["It uses negative margins and padding to create gaps between children, which behave similarly to ",t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/gap",children:["the ",e("code",{children:"gap"})," CSS property"]}),"."]}),t("li",{children:["It does ",e("em",{children:"not"})," support row spanning. Children elements cannot span multiple rows. We recommend using ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",children:"CSS Grid"})," if you need this functionality."]}),t("li",{children:["It does ",e("em",{children:"not"})," automatically place children. It will try to fit the children one by one, and if there is not enough space, the rest of the children will start on the next line, and so on. If you need auto-placement, we recommend using ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout",children:"CSS Grid"})," instead."]})]}),t(r,{className:"text-14 mb-32",component:"div",children:[":::warning The ",e("code",{children:"Grid"})," component is a ",e("em",{children:"layout"})," grid, not a ",e("em",{children:"data"})," grid. If you need a data grid, check out ",t("a",{href:"/x/react-data-grid/",children:["the MUI X ",e("code",{children:"DataGrid"})," component"]}),". :::"]}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Fluid grids"}),e(r,{className:"text-14 mb-32",component:"div",children:"Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically."}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Basic grid"}),t(r,{className:"text-14 mb-32",component:"div",children:["In order to create a grid layout, you need a container. Use the ",e("code",{children:"container"})," prop to create a grid container that wraps the grid items (the ",e("code",{children:"Grid"})," is always an item)."]}),e(r,{className:"text-14 mb-32",component:"div",children:"Column widths are integer values between 1 and 12. They can be applied at any breakpoint to indicate how many columns are occupied by the component."}),t(r,{className:"text-14 mb-32",component:"div",children:["A value given to a breakpoint applies to all the other wider breakpoints unless overridden—see ",e("a",{href:"#multiple-breakpoints",children:"Multiple breakpoints"})," for details. For example, a component with ",e("code",{children:"xs={12}"})," occupies the whole viewport width regardless of its size."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"BasicGrid.js",className:"my-16",iframe:!1,component:dn,raw:cn})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Multiple breakpoints"}),e(r,{className:"text-14 mb-32",component:"div",children:"Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints."}),t(r,{className:"text-14 mb-32",component:"div",children:["For example, a component with ",e("code",{children:"xs={12} sm={6}"})," occupies the entire viewport width when the viewport is ",e("a",{href:"/material-ui/customization/breakpoints/#default-breakpoints",children:"less than 600 pixels wide"}),". When the viewport grows beyond this size, the component occupies half of the total width—six columns rather than 12."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"FullWidthGrid.js",className:"my-16",iframe:!1,component:mn,raw:pn})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Spacing"}),t(r,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"spacing"})," prop to control the space between children. The spacing value can be any positive number (including decimals) or a string. The prop is converted into a CSS property using the ",e("a",{href:"/material-ui/customization/spacing/",children:e("code",{children:"theme.spacing()"})})," helper."]}),t(r,{className:"text-14 mb-32",component:"div",children:["The following demo illustrates the use of the ",e("code",{children:"spacing"})," prop:"]}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"SpacingGrid.js",className:"my-16",iframe:!1,component:hn,raw:un})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Row and column spacing"}),t(r,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"rowSpacing"})," and ",e("code",{children:"columnSpacing"})," props let you specify row and column gaps independently of one another. They behave similarly to the ",e("code",{children:"row-gap"})," and ",e("code",{children:"column-gap"})," properties of ",e("a",{href:"/system/grid/#row-gap-amp-column-gap",children:"CSS Grid"}),"."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"RowAndColumnSpacing.js",className:"my-16",iframe:!1,component:fn,raw:xn})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Responsive values"}),t(r,{className:"text-14 mb-32",component:"div",children:["You can set prop values to change when a given breakpoint is active. For instance, we can implement Material Design's ",e("a",{href:"https://m2.material.io/design/layout/responsive-layout-grid.html",children:"recommended"})," responsive layout grid, as seen in the following demo:"]}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"ResponsiveGrid.js",className:"my-16",iframe:!1,component:bn,raw:yn})}),e(r,{className:"text-14 mb-32",component:"div",children:"Responsive values are supported by:"}),t("ul",{className:"space-y-16",children:[e("li",{children:e("code",{children:"columns"})}),e("li",{children:e("code",{children:"columnSpacing"})}),e("li",{children:e("code",{children:"direction"})}),e("li",{children:e("code",{children:"rowSpacing"})}),e("li",{children:e("code",{children:"spacing"})}),t("li",{children:["all other ",e("a",{href:"#system-props",children:"MUI System props"})]})]}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Auto-layout"}),e(r,{className:"text-14 mb-32",component:"div",children:"The auto-layout feature gives equal space to all items present. When you set the width of one item, the others will automatically resize to match it."}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"AutoGrid.js",className:"my-16",iframe:!1,component:Gn,raw:vn})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Variable width content"}),t(r,{className:"text-14 mb-32",component:"div",children:["When a breakpoint's value is given as ",e("code",{children:'"auto"'})," instead of ",e("code",{children:"true"})," or a number, then a column's size will automatically adjust to match the width of its content. The demo below shows how this works:"]}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"VariableWidthGrid.js",className:"my-16",iframe:!1,component:wn,raw:kn})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Nested grid"}),t(r,{className:"text-14 mb-32",component:"div",children:["The grid container that renders as a ",e("strong",{children:"direct child"})," inside another grid container is a nested grid that inherits its ",e("a",{href:"#columns",children:e("code",{children:"columns"})})," and ",e("a",{href:"#spacing",children:e("code",{children:"spacing"})})," from the top level. It will also inherit the props of the top-level grid if it receives those props."]}),e(r,{className:"text-14 mb-32",component:"div",children:":::success"}),e(r,{className:"text-14 mb-32",component:"div",children:"Note that a nested grid container should be a direct child of another grid container. If there are non-grid elements in between, the grid container will start as the new root container."}),e(B,{component:"pre",className:"language-js",children:` 
<Grid container>
  <Grid container> // A nested grid container that inherits columns and spacing from above.
    <div>
      <Grid container> // A new root grid container with its own variables scope.
`}),e(r,{className:"text-14 mb-32",component:"div",children:":::"}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Inheriting spacing"}),t(r,{className:"text-14 mb-32",component:"div",children:["A nested grid container will inherits the row and column spacing from its parent unless the ",e("code",{children:"spacing"})," prop is specified to the instance."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"NestedGrid.js",className:"my-16",iframe:!1,component:In,raw:Cn})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Inheriting columns"}),t(r,{className:"text-14 mb-32",component:"div",children:["A nested grid container will inherits the columns from its parent unless the ",e("code",{children:"columns"})," prop is specified to the instance."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"NestedGridColumns.js",className:"my-16",iframe:!1,component:Nn,raw:Sn})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Columns"}),t(r,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"columns"})," prop to change the default number of columns (12) in the grid, as shown below:"]}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"ColumnsGrid.js",className:"my-16",iframe:!1,component:Bn,raw:An})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Offset"}),t(r,{className:"text-14 mb-32",component:"div",children:["Offset props (such as ",e("code",{children:"smOffset"}),", ",e("code",{children:"mdOffset"}),") push an item to the right side of the grid. These props accept:"]}),t("ul",{className:"space-y-16",children:[t("li",{children:["numbers—for example, ",e("code",{children:"mdOffset={2}"})," pushes an item two columns to the right when the viewport size is equal to or greater than the ",e("code",{children:"md"})," breakpoint."]}),t("li",{children:[e("code",{children:'"auto"'}),"—this pushes the item to the far right side of the grid container."]})]}),e(r,{className:"text-14 mb-32",component:"div",children:"The demo below illustrates how to use the offset props:"}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"OffsetGrid.js",className:"my-16",iframe:!1,component:Rn,raw:jn})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Custom breakpoints"}),e(r,{className:"text-14 mb-32",component:"div",children:"If you specify custom breakpoints in the theme, you can use those names as grid item props in responsive values:"}),e(B,{component:"pre",className:"language-js",children:` 
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Demo() {
  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
      <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid mobile={6} tablet={4} laptop={3} key={index}>
            <div>{index + 1}</div>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
`}),t("div",{className:"border border-1 p-16 rounded-16 my-12",children:[e(r,{className:"text-14 mb-32",component:"div",children:"Custom breakpoints affect both size and offset props:"}),e(B,{component:"pre",className:"language-diff",children:` 
- <Grid xs={6} xsOffset={2}>
+ <Grid mobile={6} mobileOffset={2}>
`})]}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"TypeScript"}),t(r,{className:"text-14 mb-32",component:"div",children:["You have to set module augmentation on the theme breakpoints interface. Properties set to ",e("code",{children:"true"})," will appear as ",e("code",{children:"{key}"}),"(size prop) and ",e("code",{children:"{key}Offset"}),"(offset prop)."]}),e(B,{component:"pre",className:"language-ts",children:` 
declare module '@mui/system' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
`}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Disable the scrollbar"}),e(r,{className:"text-14 mb-32",component:"div",children:"If you use grid as a container in a small viewport, you might see a horizontal scrollbar because the negative margin is applied on all sides of the grid container."}),t(r,{className:"text-14 mb-32",component:"div",children:["To disable this scrollbar, set the ",e("code",{children:"disableEqualOverflow"})," prop to ",e("code",{children:"true"}),". This removes the negative margins from the bottom and right sides of the grid to prevent overflow."]}),e(r,{className:"text-14 mb-32",component:"div",children:"The demo below shows how this works:"}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"OverflowGrid.js",className:"my-16",iframe:!1,component:On,raw:Pn})}),t(r,{className:"text-14 mb-32",component:"div",children:[":::warning You should avoid adding borders and backgrounds to the grid when ",e("code",{children:"disableEqualOverflow"})," is ",e("code",{children:"true"})," because the negative margin (applied only at the top and left sides) causes the grid to be visually misaligned. :::"]}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Centered elements"}),t(r,{className:"text-14 mb-32",component:"div",children:["To center a grid item's content, specify ",e("code",{children:'display="flex"'})," directly on the item. Then use ",e("code",{children:"justifyContent"})," and/or ",e("code",{children:"alignItems"})," to adjust the position of the content, as shown below:"]}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"CenteredElementGrid.js",className:"my-16",iframe:!1,component:_n,raw:$n})}),t(r,{className:"text-14 mb-32",component:"div",children:[":::warning Using the ",e("code",{children:"container"})," prop does not work in this situation because the grid container is designed exclusively to wrap grid items. It cannot wrap other elements. :::"]}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Full border"}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"FullBorderedGrid.js",className:"my-16",iframe:!1,component:Tn,raw:Wn})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Half border"}),e(r,{className:"text-14 mb-32",component:"div",children:e(p,{name:"HalfBorderedGrid.js",className:"my-16",iframe:!1,component:Ln,raw:En})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Column direction and reversing"}),t(r,{className:"text-14 mb-32",component:"div",children:["The column width (",e("code",{children:"xs"}),", ..., ",e("code",{children:"xl"}),") and offset props are ",e("em",{children:"not"})," supported within containers that use ",e("code",{children:'direction="column"'})," or ",e("code",{children:'direction="column-reverse"'}),"."]}),t(r,{className:"text-14 mb-32",component:"div",children:["Size and offset props define the number of columns the component will use for a given breakpoint. They are intended to control the width using ",e("code",{children:"flex-basis"})," in ",e("code",{children:"row"})," containers, but they will impact the height in ",e("code",{children:"column"})," containers. If used, these props may have undesirable effects on the height of the ",e("code",{children:"Grid"})," item elements."]})]})}export{Hn as default};
