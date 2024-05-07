import{ay as b,az as f,ag as v,r as h,d as r,cW as B,j as e,d0 as l,H as o,s as m,aN as Z,T as a,A as ee,eq as ae,K as te,z as V,F as re,C as le,dz as ie,bx as oe}from"./index-3voNJrtd.js";import{F as u}from"./FuseExample-L3LbvVcu.js";import{D as ne}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{G as C}from"./Grid-tp5bxruy.js";import"./DocumentationNavigation-us8sikvN.js";var R={},ue=f;Object.defineProperty(R,"__esModule",{value:!0});var q=R.default=void 0,se=ue(b()),de=v;q=R.default=(0,se.default)((0,de.jsx)("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M5 9v6h4l5 5V4L9 9z"}),"VolumeDown");var D={},ce=f;Object.defineProperty(D,"__esModule",{value:!0});var N=D.default=void 0,me=ce(b()),pe=v;N=D.default=(0,me.default)((0,pe.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77"}),"VolumeUp");function he(){const[t,i]=h.useState(30);return r(o,{sx:{width:200},children:[r(B,{spacing:2,direction:"row",sx:{mb:1},alignItems:"center",children:[e(q,{}),e(l,{"aria-label":"Volume",value:t,onChange:(c,s)=>{i(s)}}),e(N,{})]}),e(l,{disabled:!0,defaultValue:30,"aria-label":"Disabled slider"})]})}const be=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
export default function ContinuousSlider() {
    const [value, setValue] = React.useState(30);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (<Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange}/>
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider"/>
    </Box>);
}
`;function fe(){return r(o,{sx:{width:300},children:[e(l,{size:"small",defaultValue:70,"aria-label":"Small",valueLabelDisplay:"auto"}),e(l,{defaultValue:50,"aria-label":"Default",valueLabelDisplay:"auto"})]})}const ve=`import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
export default function SliderSizes() {
    return (<Box sx={{ width: 300 }}>
      <Slider size="small" defaultValue={70} aria-label="Small" valueLabelDisplay="auto"/>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/>
    </Box>);
}
`;function xe(t){return`${t}°C`}function ge(){return r(o,{sx:{width:300},children:[e(l,{"aria-label":"Temperature",defaultValue:30,getAriaValueText:xe,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110}),e(l,{defaultValue:30,step:10,marks:!0,min:10,max:110,disabled:!0})]})}const Se=`import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
function valuetext(value) {
    return \`\${value}°C\`;
}
export default function DiscreteSlider() {
    return (<Box sx={{ width: 300 }}>
      <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} valueLabelDisplay="auto" step={10} marks min={10} max={110}/>
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled/>
    </Box>);
}
`;function ye(t){return`${t}°C`}function we(){return e(o,{sx:{width:300},children:e(l,{"aria-label":"Small steps",defaultValue:5e-8,getAriaValueText:ye,step:1e-8,marks:!0,min:-5e-8,max:1e-7,valueLabelDisplay:"auto"})})}const Ce=`import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
function valuetext(value) {
    return \`\${value}°C\`;
}
export default function DiscreteSliderSteps() {
    return (<Box sx={{ width: 300 }}>
      <Slider aria-label="Small steps" defaultValue={0.00000005} getAriaValueText={valuetext} step={0.00000001} marks min={-0.00000005} max={0.0000001} valueLabelDisplay="auto"/>
    </Box>);
}
`,ke=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}];function Ve(t){return`${t}°C`}function Te(){return e(o,{sx:{width:300},children:e(l,{"aria-label":"Custom marks",defaultValue:20,getAriaValueText:Ve,step:10,valueLabelDisplay:"auto",marks:ke})})}const Be=`import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];
function valuetext(value) {
    return \`\${value}°C\`;
}
export default function DiscreteSliderMarks() {
    return (<Box sx={{ width: 300 }}>
      <Slider aria-label="Custom marks" defaultValue={20} getAriaValueText={valuetext} step={10} valueLabelDisplay="auto" marks={marks}/>
    </Box>);
}
`,H=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}];function Re(t){return`${t}°C`}function De(t){return H.findIndex(i=>i.value===t)+1}function Ne(){return e(o,{sx:{width:300},children:e(l,{"aria-label":"Restricted values",defaultValue:20,valueLabelFormat:De,getAriaValueText:Re,step:null,valueLabelDisplay:"auto",marks:H})})}const Me=`import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];
function valuetext(value) {
    return \`\${value}°C\`;
}
function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
}
export default function DiscreteSliderValues() {
    return (<Box sx={{ width: 300 }}>
      <Slider aria-label="Restricted values" defaultValue={20} valueLabelFormat={valueLabelFormat} getAriaValueText={valuetext} step={null} valueLabelDisplay="auto" marks={marks}/>
    </Box>);
}
`,Le=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}];function Ie(t){return`${t}°C`}function Ae(){return e(o,{sx:{width:300},children:e(l,{"aria-label":"Always visible",defaultValue:80,getAriaValueText:Ie,step:10,marks:Le,valueLabelDisplay:"on"})})}const $e=`import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];
function valuetext(value) {
    return \`\${value}°C\`;
}
export default function DiscreteSliderLabel() {
    return (<Box sx={{ width: 300 }}>
      <Slider aria-label="Always visible" defaultValue={80} getAriaValueText={valuetext} step={10} marks={marks} valueLabelDisplay="on"/>
    </Box>);
}
`;function je(t){return`${t}°C`}function ze(){const[t,i]=h.useState([20,37]);return e(o,{sx:{width:300},children:e(l,{getAriaLabel:()=>"Temperature range",value:t,onChange:(c,s)=>{i(s)},valueLabelDisplay:"auto",getAriaValueText:je})})}const _e=`import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
function valuetext(value) {
    return \`\${value}°C\`;
}
export default function RangeSlider() {
    const [value, setValue] = React.useState([20, 37]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (<Box sx={{ width: 300 }}>
      <Slider getAriaLabel={() => 'Temperature range'} value={value} onChange={handleChange} valueLabelDisplay="auto" getAriaValueText={valuetext}/>
    </Box>);
}
`;function z(t){return`${t}°C`}const x=10;function Fe(){const[t,i]=h.useState([20,37]),n=(S,d,y)=>{Array.isArray(d)&&i(y===0?[Math.min(d[0],t[1]-x),t[1]]:[t[0],Math.max(d[1],t[0]+x)])},[c,s]=h.useState([20,37]);return r(o,{sx:{width:300},children:[e(l,{getAriaLabel:()=>"Minimum distance",value:t,onChange:n,valueLabelDisplay:"auto",getAriaValueText:z,disableSwap:!0}),e(l,{getAriaLabel:()=>"Minimum distance shift",value:c,onChange:(S,d,y)=>{if(Array.isArray(d))if(d[1]-d[0]<x)if(y===0){const p=Math.min(d[0],100-x);s([p,p+x])}else{const p=Math.max(d[1],x);s([p-x,p])}else s(d)},valueLabelDisplay:"auto",getAriaValueText:z,disableSwap:!0})]})}const Pe=`import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
function valuetext(value) {
    return \`\${value}°C\`;
}
const minDistance = 10;
export default function MinimumDistanceSlider() {
    const [value1, setValue1] = React.useState([20, 37]);
    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        }
        else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };
    const [value2, setValue2] = React.useState([20, 37]);
    const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            }
            else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        }
        else {
            setValue2(newValue);
        }
    };
    return (<Box sx={{ width: 300 }}>
      <Slider getAriaLabel={() => 'Minimum distance'} value={value1} onChange={handleChange1} valueLabelDisplay="auto" getAriaValueText={valuetext} disableSwap/>
      <Slider getAriaLabel={() => 'Minimum distance shift'} value={value2} onChange={handleChange2} valueLabelDisplay="auto" getAriaValueText={valuetext} disableSwap/>
    </Box>);
}
`,We=m(Z)`
  width: 42px;
`;function Oe(){const[t,i]=h.useState(30);return r(o,{sx:{width:250},children:[e(a,{id:"input-slider",gutterBottom:!0,children:"Volume"}),r(C,{container:!0,spacing:2,alignItems:"center",children:[e(C,{item:!0,children:e(N,{})}),e(C,{item:!0,xs:!0,children:e(l,{value:typeof t=="number"?t:0,onChange:(g,S)=>{i(S)},"aria-labelledby":"input-slider"})}),e(C,{item:!0,children:e(We,{value:t,size:"small",onChange:g=>{i(g.target.value===""?0:Number(g.target.value))},onBlur:()=>{t<0?i(0):t>100&&i(100)},inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]})]})}const Ge=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
const Input = styled(MuiInput) \`
  width: 42px;
\`;
export default function InputSlider() {
    const [value, setValue] = React.useState(30);
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? 0 : Number(event.target.value));
    };
    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        }
        else if (value > 100) {
            setValue(100);
        }
    };
    return (<Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider value={typeof value === 'number' ? value : 0} onChange={handleSliderChange} aria-labelledby="input-slider"/>
        </Grid>
        <Grid item>
          <Input value={value} size="small" onChange={handleInputChange} onBlur={handleBlur} inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: 'number',
            'aria-labelledby': 'input-slider',
        }}/>
        </Grid>
      </Grid>
    </Box>);
}
`;function Ue(t){return`${t}°C`}function qe(){return e(o,{sx:{width:300},children:e(l,{"aria-label":"Temperature",defaultValue:30,getAriaValueText:Ue,color:"secondary"})})}const He=`import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
function valuetext(value) {
    return \`\${value}°C\`;
}
export default function ColorSlider() {
    return (<Box sx={{ width: 300 }}>
      <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} color="secondary"/>
    </Box>);
}
`;function Ye(t){const{children:i,value:n}=t;return e(ee,{enterTouchDelay:0,placement:"top",title:n,children:i})}const Ee="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",Ke=m(l)(({theme:t})=>({color:t.palette.mode==="dark"?"#0a84ff":"#007bff",height:5,padding:"15px 0","& .MuiSlider-thumb":{height:20,width:20,backgroundColor:"#fff",boxShadow:"0 0 2px 0px rgba(0, 0, 0, 0.1)","&:focus, &:hover, &.Mui-active":{boxShadow:"0px 0px 3px 1px rgba(0, 0, 0, 0.1)","@media (hover: none)":{boxShadow:Ee}},"&:before":{boxShadow:"0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)"}},"& .MuiSlider-valueLabel":{fontSize:12,fontWeight:"normal",top:-6,backgroundColor:"unset",color:t.palette.text.primary,"&::before":{display:"none"},"& *":{background:"transparent",color:t.palette.mode==="dark"?"#fff":"#000"}},"& .MuiSlider-track":{border:"none",height:5},"& .MuiSlider-rail":{opacity:.5,boxShadow:"inset 0px 0px 4px -2px #000",backgroundColor:"#d0d0d0"}})),Je=m(l)({color:"#52af77",height:8,"& .MuiSlider-track":{border:"none"},"& .MuiSlider-thumb":{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&::before":{display:"none"}},"& .MuiSlider-valueLabel":{lineHeight:1.2,fontSize:12,background:"unset",padding:0,width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"#52af77",transformOrigin:"bottom left",transform:"translate(50%, -100%) rotate(-45deg) scale(0)","&::before":{display:"none"},"&.MuiSlider-valueLabelOpen":{transform:"translate(50%, -100%) rotate(-45deg) scale(1)"},"& > *":{transform:"rotate(45deg)"}}}),Qe=m(l)(({theme:t})=>({color:"#3a8589",height:3,padding:"13px 0","& .MuiSlider-thumb":{height:27,width:27,backgroundColor:"#fff",border:"1px solid currentColor","&:hover":{boxShadow:"0 0 0 8px rgba(58, 133, 137, 0.16)"},"& .airbnb-bar":{height:9,width:1,backgroundColor:"currentColor",marginLeft:1,marginRight:1}},"& .MuiSlider-track":{height:3},"& .MuiSlider-rail":{color:t.palette.mode==="dark"?"#bfbfbf":"#d8d8d8",opacity:t.palette.mode==="dark"?void 0:1,height:3}}));function Xe(t){const{children:i,...n}=t;return r(ae,{...n,children:[i,e("span",{className:"airbnb-bar"}),e("span",{className:"airbnb-bar"}),e("span",{className:"airbnb-bar"})]})}function Ze(){return r(o,{sx:{width:320},children:[e(a,{gutterBottom:!0,children:"iOS"}),e(Ke,{"aria-label":"ios slider",defaultValue:60,valueLabelDisplay:"on"}),e(o,{sx:{m:3}}),e(a,{gutterBottom:!0,children:"pretto.fr"}),e(Je,{valueLabelDisplay:"auto","aria-label":"pretto slider",defaultValue:20}),e(o,{sx:{m:3}}),e(a,{gutterBottom:!0,children:"Tooltip value label"}),e(l,{valueLabelDisplay:"auto",slots:{valueLabel:Ye},"aria-label":"custom thumb label",defaultValue:20}),e(o,{sx:{m:3}}),e(a,{gutterBottom:!0,children:"Airbnb"}),e(Qe,{slots:{thumb:Xe},getAriaLabel:t=>t===0?"Minimum price":"Maximum price",defaultValue:[20,40]})]})}const ea=`import * as React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
function ValueLabelComponent(props) {
    const { children, value } = props;
    return (<Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>);
}
const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
const IOSSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#0a84ff' : '#007bff',
    height: 5,
    padding: '15px 0',
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
        '&:focus, &:hover, &.Mui-active': {
            boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
        '&:before': {
            boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
        },
    },
    '& .MuiSlider-valueLabel': {
        fontSize: 12,
        fontWeight: 'normal',
        top: -6,
        backgroundColor: 'unset',
        color: theme.palette.text.primary,
        '&::before': {
            display: 'none',
        },
        '& *': {
            background: 'transparent',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        },
    },
    '& .MuiSlider-track': {
        border: 'none',
        height: 5,
    },
    '& .MuiSlider-rail': {
        opacity: 0.5,
        boxShadow: 'inset 0px 0px 4px -2px #000',
        backgroundColor: '#d0d0d0',
    },
}));
const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&::before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&::before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});
const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));
function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (<SliderThumb {...other}>
      {children}
      <span className="airbnb-bar"/>
      <span className="airbnb-bar"/>
      <span className="airbnb-bar"/>
    </SliderThumb>);
}
export default function CustomizedSlider() {
    return (<Box sx={{ width: 320 }}>
      <Typography gutterBottom>iOS</Typography>
      <IOSSlider aria-label="ios slider" defaultValue={60} valueLabelDisplay="on"/>
      <Box sx={{ m: 3 }}/>
      <Typography gutterBottom>pretto.fr</Typography>
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20}/>
      <Box sx={{ m: 3 }}/>
      <Typography gutterBottom>Tooltip value label</Typography>
      <Slider valueLabelDisplay="auto" slots={{
            valueLabel: ValueLabelComponent,
        }} aria-label="custom thumb label" defaultValue={20}/>
      <Box sx={{ m: 3 }}/>
      <Typography gutterBottom>Airbnb</Typography>
      <AirbnbSlider slots={{ thumb: AirbnbThumbComponent }} getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')} defaultValue={[20, 40]}/>
    </Box>);
}
`;var M={},aa=f;Object.defineProperty(M,"__esModule",{value:!0});var Y=M.default=void 0,ta=aa(b()),ra=v;Y=M.default=(0,ta.default)((0,ra.jsx)("path",{d:"M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"}),"PauseRounded");var L={},la=f;Object.defineProperty(L,"__esModule",{value:!0});var E=L.default=void 0,ia=la(b()),oa=v;E=L.default=(0,ia.default)((0,oa.jsx)("path",{d:"M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82"}),"PlayArrowRounded");var I={},na=f;Object.defineProperty(I,"__esModule",{value:!0});var K=I.default=void 0,ua=na(b()),sa=v;K=I.default=(0,ua.default)((0,sa.jsx)("path",{d:"m5.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82M13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81"}),"FastForwardRounded");var A={},da=f;Object.defineProperty(A,"__esModule",{value:!0});var J=A.default=void 0,ca=da(b()),ma=v;J=A.default=(0,ca.default)((0,ma.jsx)("path",{d:"M11 16.07V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.56.4-.56 1.24 0 1.63l5.77 4.07c.67.47 1.58 0 1.58-.81m1.66-3.25 5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64"}),"FastRewindRounded");var $={},pa=f;Object.defineProperty($,"__esModule",{value:!0});var Q=$.default=void 0,ha=pa(b()),ba=v;Q=$.default=(0,ha.default)((0,ba.jsx)("path",{d:"M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1m13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85"}),"VolumeUpRounded");var j={},fa=f;Object.defineProperty(j,"__esModule",{value:!0});var X=j.default=void 0,va=fa(b()),xa=v;X=j.default=(0,va.default)((0,xa.jsx)("path",{d:"M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M5 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L9 9H6c-.55 0-1 .45-1 1"}),"VolumeDownRounded");const ga=m("div")({position:"absolute",width:"100%",height:"100%",top:0,left:0,overflow:"hidden",background:"linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",transition:"all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s","&::before":{content:'""',width:"140%",height:"140%",position:"absolute",top:"-40%",right:"-50%",background:"radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)"},"&::after":{content:'""',width:"140%",height:"140%",position:"absolute",bottom:"-50%",left:"-30%",background:"radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",transform:"rotate(30deg)"}}),Sa=m("div")(({theme:t})=>({padding:16,borderRadius:16,width:343,maxWidth:"100%",margin:"auto",position:"relative",zIndex:1,backgroundColor:t.palette.mode==="dark"?"rgba(0,0,0,0.6)":"rgba(255,255,255,0.4)",backdropFilter:"blur(40px)"})),ya=m("div")({width:100,height:100,objectFit:"cover",overflow:"hidden",flexShrink:0,borderRadius:8,backgroundColor:"rgba(0,0,0,0.08)","& > img":{width:"100%"}}),_=m(a)({fontSize:"0.75rem",opacity:.38,fontWeight:500,letterSpacing:.2});function wa(){const t=te(),i=200,[n,c]=h.useState(32),[s,g]=h.useState(!1);function S(p){const w=Math.floor(p/60),k=p-w*60;return`${w}:${k<10?`0${k}`:k}`}const d=t.palette.mode==="dark"?"#fff":"#000",y=t.palette.mode==="dark"?"rgba(255,255,255,0.4)":"rgba(0,0,0,0.4)";return r(o,{sx:{width:"100%",overflow:"hidden"},children:[r(Sa,{children:[r(o,{sx:{display:"flex",alignItems:"center"},children:[e(ya,{children:e("img",{alt:"can't win - Chilling Sunday",src:"/material-ui-static/images/sliders/chilling-sunday.jpg"})}),r(o,{sx:{ml:1.5,minWidth:0},children:[e(a,{variant:"caption",color:"text.secondary",fontWeight:500,children:"Jun Pulse"}),e(a,{noWrap:!0,children:e("b",{children:"คนเก่าเขาทำไว้ดี (Can't win)"})}),e(a,{noWrap:!0,letterSpacing:-.25,children:"Chilling Sunday — คนเก่าเขาทำไว้ดี"})]})]}),e(l,{"aria-label":"time-indicator",size:"small",value:n,min:0,step:1,max:i,onChange:(p,w)=>c(w),sx:{color:t.palette.mode==="dark"?"#fff":"rgba(0,0,0,0.87)",height:4,"& .MuiSlider-thumb":{width:8,height:8,transition:"0.3s cubic-bezier(.47,1.64,.41,.8)","&::before":{boxShadow:"0 2px 12px 0 rgba(0,0,0,0.4)"},"&:hover, &.Mui-focusVisible":{boxShadow:`0px 0px 0px 8px ${t.palette.mode==="dark"?"rgb(255 255 255 / 16%)":"rgb(0 0 0 / 16%)"}`},"&.Mui-active":{width:20,height:20}},"& .MuiSlider-rail":{opacity:.28}}}),r(o,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mt:-2},children:[e(_,{children:S(n)}),r(_,{children:["-",S(i-n)]})]}),r(o,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mt:-1},children:[e(V,{"aria-label":"previous song",children:e(J,{fontSize:"large",htmlColor:d})}),e(V,{"aria-label":s?"play":"pause",onClick:()=>g(!s),children:s?e(E,{sx:{fontSize:"3rem"},htmlColor:d}):e(Y,{sx:{fontSize:"3rem"},htmlColor:d})}),e(V,{"aria-label":"next song",children:e(K,{fontSize:"large",htmlColor:d})})]}),r(B,{spacing:2,direction:"row",sx:{mb:1,px:1},alignItems:"center",children:[e(X,{htmlColor:y}),e(l,{"aria-label":"Volume",defaultValue:30,sx:{color:t.palette.mode==="dark"?"#fff":"rgba(0,0,0,0.87)","& .MuiSlider-track":{border:"none"},"& .MuiSlider-thumb":{width:24,height:24,backgroundColor:"#fff","&::before":{boxShadow:"0 4px 8px rgba(0,0,0,0.4)"},"&:hover, &.Mui-focusVisible, &.Mui-active":{boxShadow:"none"}}}}),e(Q,{htmlColor:y})]})]}),e(ga,{})]})}const Ca=`import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
const WallPaper = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
    transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
    '&::before': {
        content: '""',
        width: '140%',
        height: '140%',
        position: 'absolute',
        top: '-40%',
        right: '-50%',
        background: 'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
    },
    '&::after': {
        content: '""',
        width: '140%',
        height: '140%',
        position: 'absolute',
        bottom: '-50%',
        left: '-30%',
        background: 'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
        transform: 'rotate(30deg)',
    },
});
const Widget = styled('div')(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 343,
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
}));
const CoverImage = styled('div')({
    width: 100,
    height: 100,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
        width: '100%',
    },
});
const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});
export default function MusicPlayerSlider() {
    const theme = useTheme();
    const duration = 200; // seconds
    const [position, setPosition] = React.useState(32);
    const [paused, setPaused] = React.useState(false);
    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return \`\${minute}:\${secondLeft < 10 ? \`0\${secondLeft}\` : secondLeft}\`;
    }
    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    const lightIconColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
    return (<Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Widget>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CoverImage>
            <img alt="can't win - Chilling Sunday" src="/material-ui-static/images/sliders/chilling-sunday.jpg"/>
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography variant="caption" color="text.secondary" fontWeight={500}>
              Jun Pulse
            </Typography>
            <Typography noWrap>
              <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
            </Typography>
            <Typography noWrap letterSpacing={-0.25}>
              Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
            </Typography>
          </Box>
        </Box>
        <Slider aria-label="time-indicator" size="small" value={position} min={0} step={1} max={duration} onChange={(_, value) => setPosition(value)} sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&::before': {
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                    boxShadow: \`0px 0px 0px 8px \${theme.palette.mode === 'dark'
                        ? 'rgb(255 255 255 / 16%)'
                        : 'rgb(0 0 0 / 16%)'}\`,
                },
                '&.Mui-active': {
                    width: 20,
                    height: 20,
                },
            },
            '& .MuiSlider-rail': {
                opacity: 0.28,
            },
        }}/>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
        }}>
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
        }}>
          <IconButton aria-label="previous song">
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor}/>
          </IconButton>
          <IconButton aria-label={paused ? 'play' : 'pause'} onClick={() => setPaused(!paused)}>
            {paused ? (<PlayArrowRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor}/>) : (<PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor}/>)}
          </IconButton>
          <IconButton aria-label="next song">
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor}/>
          </IconButton>
        </Box>
        <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
          <VolumeDownRounded htmlColor={lightIconColor}/>
          <Slider aria-label="Volume" defaultValue={30} sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            '& .MuiSlider-track': {
                border: 'none',
            },
            '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                '&::before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                },
            },
        }}/>
          <VolumeUpRounded htmlColor={lightIconColor}/>
        </Stack>
      </Widget>
      <WallPaper />
    </Box>);
}
`;function F(t){return`${t}°C`}const ka=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}];function Va(){return r(B,{sx:{height:300},spacing:1,direction:"row",children:[e(l,{"aria-label":"Temperature",orientation:"vertical",getAriaValueText:F,valueLabelDisplay:"auto",defaultValue:30}),e(l,{"aria-label":"Temperature",orientation:"vertical",defaultValue:30,valueLabelDisplay:"auto",disabled:!0}),e(l,{getAriaLabel:()=>"Temperature",orientation:"vertical",getAriaValueText:F,defaultValue:[20,37],valueLabelDisplay:"auto",marks:ka})]})}const Ta=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
function valuetext(value) {
    return \`\${value}°C\`;
}
const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];
export default function VerticalSlider() {
    return (<Stack sx={{ height: 300 }} spacing={1} direction="row">
      <Slider aria-label="Temperature" orientation="vertical" getAriaValueText={valuetext} valueLabelDisplay="auto" defaultValue={30}/>
      <Slider aria-label="Temperature" orientation="vertical" defaultValue={30} valueLabelDisplay="auto" disabled/>
      <Slider getAriaLabel={() => 'Temperature'} orientation="vertical" getAriaValueText={valuetext} defaultValue={[20, 37]} valueLabelDisplay="auto" marks={marks}/>
    </Stack>);
}
`;function Ba(){function t(i){(i.key==="ArrowLeft"||i.key==="ArrowRight")&&i.preventDefault()}return e(o,{sx:{height:300},children:e(l,{sx:{'& input[type="range"]':{WebkitAppearance:"slider-vertical"}},orientation:"vertical",defaultValue:30,"aria-label":"Temperature",valueLabelDisplay:"auto",onKeyDown:t})})}const Ra=`import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
export default function VerticalAccessibleSlider() {
    function preventHorizontalKeyboardNavigation(event) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
        }
    }
    return (<Box sx={{ height: 300 }}>
      <Slider sx={{
            '& input[type="range"]': {
                WebkitAppearance: 'slider-vertical',
            },
        }} orientation="vertical" defaultValue={30} aria-label="Temperature" valueLabelDisplay="auto" onKeyDown={preventHorizontalKeyboardNavigation}/>
    </Box>);
}
`,Da=m("div")(({theme:t})=>`
  height: ${t.spacing(3)};
`),P=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}];function W(t){return`${t}°C`}function Na(){return r(o,{sx:{width:250},children:[e(a,{id:"track-false-slider",gutterBottom:!0,children:"Removed track"}),e(l,{track:!1,"aria-labelledby":"track-false-slider",getAriaValueText:W,defaultValue:30,marks:P}),e(Da,{}),e(a,{id:"track-false-range-slider",gutterBottom:!0,children:"Removed track range slider"}),e(l,{track:!1,"aria-labelledby":"track-false-range-slider",getAriaValueText:W,defaultValue:[20,37,50],marks:P})]})}const Ma=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
const Separator = styled('div')(({ theme }) => \`
  height: \${theme.spacing(3)};
\`);
const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];
function valuetext(value) {
    return \`\${value}°C\`;
}
export default function TrackFalseSlider() {
    return (<Box sx={{ width: 250 }}>
      <Typography id="track-false-slider" gutterBottom>
        Removed track
      </Typography>
      <Slider track={false} aria-labelledby="track-false-slider" getAriaValueText={valuetext} defaultValue={30} marks={marks}/>
      <Separator />
      <Typography id="track-false-range-slider" gutterBottom>
        Removed track range slider
      </Typography>
      <Slider track={false} aria-labelledby="track-false-range-slider" getAriaValueText={valuetext} defaultValue={[20, 37, 50]} marks={marks}/>
    </Box>);
}
`,La=m("div")(({theme:t})=>`
  height: ${t.spacing(3)};
`),O=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}];function G(t){return`${t}°C`}function Ia(){return r(o,{sx:{width:250},children:[e(a,{id:"track-inverted-slider",gutterBottom:!0,children:"Inverted track"}),e(l,{track:"inverted","aria-labelledby":"track-inverted-slider",getAriaValueText:G,defaultValue:30,marks:O}),e(La,{}),e(a,{id:"track-inverted-range-slider",gutterBottom:!0,children:"Inverted track range"}),e(l,{track:"inverted","aria-labelledby":"track-inverted-range-slider",getAriaValueText:G,defaultValue:[20,37],marks:O})]})}const Aa=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
const Separator = styled('div')(({ theme }) => \`
  height: \${theme.spacing(3)};
\`);
const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];
function valuetext(value) {
    return \`\${value}°C\`;
}
export default function TrackInvertedSlider() {
    return (<Box sx={{ width: 250 }}>
      <Typography id="track-inverted-slider" gutterBottom>
        Inverted track
      </Typography>
      <Slider track="inverted" aria-labelledby="track-inverted-slider" getAriaValueText={valuetext} defaultValue={30} marks={marks}/>
      <Separator />
      <Typography id="track-inverted-range-slider" gutterBottom>
        Inverted track range
      </Typography>
      <Slider track="inverted" aria-labelledby="track-inverted-range-slider" getAriaValueText={valuetext} defaultValue={[20, 37]} marks={marks}/>
    </Box>);
}
`;function T(t){const i=["KB","MB","GB","TB"];let n=0,c=t;for(;c>=1024&&n<i.length-1;)n+=1,c/=1024;return`${c} ${i[n]}`}function U(t){return 2**t}function $a(){const[t,i]=h.useState(10),n=(c,s)=>{typeof s=="number"&&i(s)};return r(o,{sx:{width:250},children:[r(a,{id:"non-linear-slider",gutterBottom:!0,children:["Storage: ",T(U(t))]}),e(l,{value:t,min:5,step:1,max:30,scale:U,getAriaValueText:T,valueLabelFormat:T,onChange:n,valueLabelDisplay:"auto","aria-labelledby":"non-linear-slider"})]})}const ja=`import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
function valueLabelFormat(value) {
    const units = ['KB', 'MB', 'GB', 'TB'];
    let unitIndex = 0;
    let scaledValue = value;
    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
        unitIndex += 1;
        scaledValue /= 1024;
    }
    return \`\${scaledValue} \${units[unitIndex]}\`;
}
function calculateValue(value) {
    return 2 ** value;
}
export default function NonLinearSlider() {
    const [value, setValue] = React.useState(10);
    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };
    return (<Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Storage: {valueLabelFormat(calculateValue(value))}
      </Typography>
      <Slider value={value} min={5} step={1} max={30} scale={calculateValue} getAriaValueText={valueLabelFormat} valueLabelFormat={valueLabelFormat} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="non-linear-slider"/>
    </Box>);
}
`;function Oa(t){return r(oe,{children:[r("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(ne,{}),e(le,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/slider",target:"_blank",role:"button",size:"small",startIcon:e(re,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(a,{className:"text-32 my-16 font-700",component:"h1",children:"Slider"}),e(a,{className:"description",children:"Sliders allow users to make selections from a range of values."}),e(a,{className:"text-14 mb-32",component:"div",children:"Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters."}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Continuous sliders"}),e(a,{className:"text-14 mb-32",component:"div",children:"Continuous sliders allow users to select a value along a subjective range."}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"ContinuousSlider.js",className:"my-16",iframe:!1,component:he,raw:be})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Sizes"}),r(a,{className:"text-14 mb-32",component:"div",children:["For smaller slider, use the prop ",e("code",{children:'size="small"'}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"SliderSizes.js",className:"my-16",iframe:!1,component:fe,raw:ve})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Discrete sliders"}),r(a,{className:"text-14 mb-32",component:"div",children:["Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with ",e("code",{children:"marks={true}"}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"DiscreteSlider.js",className:"my-16",iframe:!1,component:ge,raw:Se})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Small steps"}),e(a,{className:"text-14 mb-32",component:"div",children:"You can change the default step increment."}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"DiscreteSliderSteps.js",className:"my-16",iframe:!1,component:we,raw:Ce})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Custom marks"}),r(a,{className:"text-14 mb-32",component:"div",children:["You can have custom marks by providing a rich array to the ",e("code",{children:"marks"})," prop."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"DiscreteSliderMarks.js",className:"my-16",iframe:!1,component:Te,raw:Be})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Restricted values"}),r(a,{className:"text-14 mb-32",component:"div",children:["You can restrict the selectable values to those provided with the ",e("code",{children:"marks"})," prop with ",e("code",{children:"step={null}"}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"DiscreteSliderValues.js",className:"my-16",iframe:!1,component:Ne,raw:Me})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Label always visible"}),r(a,{className:"text-14 mb-32",component:"div",children:["You can force the thumb label to be always visible with ",e("code",{children:'valueLabelDisplay="on"'}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"DiscreteSliderLabel.js",className:"my-16",iframe:!1,component:Ae,raw:$e})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Range slider"}),r(a,{className:"text-14 mb-32",component:"div",children:["The slider can be used to set the start and end of a range by supplying an array of values to the ",e("code",{children:"value"})," prop."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"RangeSlider.js",className:"my-16",iframe:!1,component:ze,raw:_e})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Minimum distance"}),r(a,{className:"text-14 mb-32",component:"div",children:["You can enforce a minimum distance between values in the ",e("code",{children:"onChange"})," event handler. By default, when you move the pointer over a thumb while dragging another thumb, the active thumb will swap to the hovered thumb. You can disable this behavior with the ",e("code",{children:"disableSwap"})," prop. If you want the range to shift when reaching minimum distance, you can utilize the ",e("code",{children:"activeThumb"})," parameter in ",e("code",{children:"onChange"}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"MinimumDistanceSlider.js",className:"my-16",iframe:!1,component:Fe,raw:Pe})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Slider with input field"}),e(a,{className:"text-14 mb-32",component:"div",children:"In this example, an input allows a discrete value to be set."}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"InputSlider.js",className:"my-16",iframe:!1,component:Oe,raw:Ge})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"ColorSlider.js",className:"my-16",iframe:!1,component:qe,raw:He})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),r(a,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"CustomizedSlider.js",className:"my-16",iframe:!1,component:Ze,raw:ea})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Music player"}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"MusicPlayerSlider.js",className:"my-16",iframe:!1,component:wa,raw:Ca})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Vertical sliders"}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"VerticalSlider.js",className:"my-16",iframe:!1,component:Va,raw:Ta})}),r(a,{className:"text-14 mb-32",component:"div",children:[e("strong",{children:"WARNING"}),": Chrome, Safari and newer Edge versions i.e. any browser based on WebKit exposes ",e("code",{children:'<Slider orientation="vertical" />'})," as horizontal (",e("a",{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=1158217",children:"chromium issue #1158217"}),"). By applying ",e("code",{children:"-webkit-appearance: slider-vertical;"})," the slider is exposed as vertical."]}),r(a,{className:"text-14 mb-32",component:"div",children:["However, by applying ",e("code",{children:"-webkit-appearance: slider-vertical;"})," keyboard navigation for horizontal keys (",e("kbd",{className:"key",children:"Arrow Left"}),", ",e("kbd",{className:"key",children:"Arrow Right"}),") is reversed (",e("a",{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=1162640",children:"chromium issue #1162640"}),"). Usually, up and right should increase and left and down should decrease the value. If you apply ",e("code",{children:"-webkit-appearance"})," you could prevent keyboard navigation for horizontal arrow keys for a truly vertical slider. This might be less confusing to users compared to a change in direction."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"VerticalAccessibleSlider.js",className:"my-16",iframe:!1,component:Ba,raw:Ra})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Track"}),e(a,{className:"text-14 mb-32",component:"div",children:"The track shows the range available for user selection."}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Removed track"}),r(a,{className:"text-14 mb-32",component:"div",children:["The track can be turned off with ",e("code",{children:"track={false}"}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"TrackFalseSlider.js",className:"my-16",iframe:!1,component:Na,raw:Ma})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Inverted track"}),r(a,{className:"text-14 mb-32",component:"div",children:["The track can be inverted with ",e("code",{children:'track="inverted"'}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"TrackInvertedSlider.js",className:"my-16",iframe:!1,component:Ia,raw:Aa})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Non-linear scale"}),r(a,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"scale"})," prop to represent the ",e("code",{children:"value"})," on a different scale."]}),r(a,{className:"text-14 mb-32",component:"div",children:["In the following demo, the value ",e("em",{children:"x"})," represents the value ",e("em",{children:"2^x"}),". Increasing ",e("em",{children:"x"})," by one increases the represented value by factor ",e("em",{children:"2"}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(u,{name:"NonLinearSlider.js",className:"my-16",iframe:!1,component:$a,raw:ja})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),r(a,{className:"text-14 mb-32",component:"div",children:["(WAI-ARIA: ",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/"}),")"]}),e(a,{className:"text-14 mb-32",component:"div",children:"The component handles most of the work necessary to make it accessible. However, you need to make sure that:"}),r("ul",{className:"space-y-16",children:[r("li",{children:["Each thumb has a user-friendly label (",e("code",{children:"aria-label"}),", ",e("code",{children:"aria-labelledby"})," or ",e("code",{children:"getAriaLabel"})," prop)."]}),r("li",{children:["Each thumb has a user-friendly text for its current value. This is not required if the value matches the semantics of the label. You can change the name with the ",e("code",{children:"getAriaValueText"})," or ",e("code",{children:"aria-valuetext"})," prop."]})]}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"IE 11"}),e(a,{className:"text-14 mb-32",component:"div",children:"The slider's value label is not centered in IE 11. The alignment is not handled to make customizations easier with the latest browsers. You can solve the issue with:"}),e(ie,{component:"pre",className:"language-css",children:` 
.MuiSlider-valueLabel {
  left: calc(-50% - 4px);
}
`})]})}export{Oa as default};
