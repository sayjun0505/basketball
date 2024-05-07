import{d as i,j as e,l as a,bD as r,dK as d,s as c,d$ as p,bk as S,r as w,bN as f,d1 as k,bB as g,cW as C,T as o,F as x,C as v,dz as y,bx as M}from"./index-3voNJrtd.js";import{F as l}from"./FuseExample-L3LbvVcu.js";import{D as F}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import"./DocumentationNavigation-us8sikvN.js";const m={inputProps:{"aria-label":"Switch demo"}};function L(){return i("div",{children:[e(a,{...m,defaultChecked:!0}),e(a,{...m}),e(a,{...m,disabled:!0,defaultChecked:!0}),e(a,{...m,disabled:!0})]})}const z=`import * as React from 'react';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function BasicSwitches() {
    return (<div>
      <Switch {...label} defaultChecked/>
      <Switch {...label}/>
      <Switch {...label} disabled defaultChecked/>
      <Switch {...label} disabled/>
    </div>);
}
`;function N(){return i(d,{children:[e(r,{control:e(a,{defaultChecked:!0}),label:"Label"}),e(r,{required:!0,control:e(a,{}),label:"Required"}),e(r,{disabled:!0,control:e(a,{}),label:"Disabled"})]})}const R=`import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
export default function SwitchLabels() {
    return (<FormGroup>
      <FormControlLabel control={<Switch defaultChecked/>} label="Label"/>
      <FormControlLabel required control={<Switch />} label="Required"/>
      <FormControlLabel disabled control={<Switch />} label="Disabled"/>
    </FormGroup>);
}
`,b={inputProps:{"aria-label":"Size switch demo"}};function I(){return i("div",{children:[e(a,{...b,defaultChecked:!0,size:"small"}),e(a,{...b,defaultChecked:!0})]})}const P=`import * as React from 'react';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Size switch demo' } };
export default function SwitchesSize() {
    return (<div>
      <Switch {...label} defaultChecked size="small"/>
      <Switch {...label} defaultChecked/>
    </div>);
}
`,B=c(a)(({theme:t})=>({"& .MuiSwitch-switchBase.Mui-checked":{color:p[600],"&:hover":{backgroundColor:S(p[600],t.palette.action.hoverOpacity)}},"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{backgroundColor:p[600]}})),n={inputProps:{"aria-label":"Color switch demo"}};function A(){return i("div",{children:[e(a,{...n,defaultChecked:!0}),e(a,{...n,defaultChecked:!0,color:"secondary"}),e(a,{...n,defaultChecked:!0,color:"warning"}),e(a,{...n,defaultChecked:!0,color:"default"}),e(B,{...n,defaultChecked:!0})]})}const G=`import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
    },
}));
const label = { inputProps: { 'aria-label': 'Color switch demo' } };
export default function ColorSwitches() {
    return (<div>
      <Switch {...label} defaultChecked/>
      <Switch {...label} defaultChecked color="secondary"/>
      <Switch {...label} defaultChecked color="warning"/>
      <Switch {...label} defaultChecked color="default"/>
      <PinkSwitch {...label} defaultChecked/>
    </div>);
}
`;function T(){const[t,u]=w.useState(!0);return e(a,{checked:t,onChange:h=>{u(h.target.checked)},inputProps:{"aria-label":"controlled"}})}const j=`import * as React from 'react';
import Switch from '@mui/material/Switch';
export default function ControlledSwitches() {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (<Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }}/>);
}
`;function V(){const[t,u]=w.useState({gilad:!0,jason:!1,antoine:!0}),s=h=>{u({...t,[h.target.name]:h.target.checked})};return i(g,{component:"fieldset",variant:"standard",children:[e(f,{component:"legend",children:"Assign responsibility"}),i(d,{children:[e(r,{control:e(a,{checked:t.gilad,onChange:s,name:"gilad"}),label:"Gilad Gray"}),e(r,{control:e(a,{checked:t.jason,onChange:s,name:"jason"}),label:"Jason Killian"}),e(r,{control:e(a,{checked:t.antoine,onChange:s,name:"antoine"}),label:"Antoine Llorca"})]}),e(k,{children:"Be careful"})]})}const U=`import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
export default function SwitchesGroup() {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: true,
    });
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };
    return (<FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Switch checked={state.gilad} onChange={handleChange} name="gilad"/>} label="Gilad Gray"/>
        <FormControlLabel control={<Switch checked={state.jason} onChange={handleChange} name="jason"/>} label="Jason Killian"/>
        <FormControlLabel control={<Switch checked={state.antoine} onChange={handleChange} name="antoine"/>} label="Antoine Llorca"/>
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>);
}
`,H=c(a)(({theme:t})=>({width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`},"& + .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:t.palette.mode==="dark"?"#003892":"#001e3c",width:32,height:32,"&::before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`}},"& .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be",borderRadius:20/2}})),E=c(a)(({theme:t})=>({padding:8,"& .MuiSwitch-track":{borderRadius:22/2,"&::before, &::after":{content:'""',position:"absolute",top:"50%",transform:"translateY(-50%)",width:16,height:16},"&::before":{backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(t.palette.getContrastText(t.palette.primary.main))}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,left:12},"&::after":{backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(t.palette.getContrastText(t.palette.primary.main))}" d="M19,13H5V11H19V13Z" /></svg>')`,right:12}},"& .MuiSwitch-thumb":{boxShadow:"none",width:16,height:16,margin:2}})),O=c(t=>e(a,{focusVisibleClassName:".Mui-focusVisible",disableRipple:!0,...t}))(({theme:t})=>({width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:t.palette.mode==="dark"?"#2ECA45":"#65C466",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:t.palette.mode==="light"?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:26/2,backgroundColor:t.palette.mode==="light"?"#E9E9EA":"#39393D",opacity:1,transition:t.transitions.create(["background-color"],{duration:500})}})),$=c(a)(({theme:t})=>({width:28,height:16,padding:0,display:"flex","&:active":{"& .MuiSwitch-thumb":{width:15},"& .MuiSwitch-switchBase.Mui-checked":{transform:"translateX(9px)"}},"& .MuiSwitch-switchBase":{padding:2,"&.Mui-checked":{transform:"translateX(12px)",color:"#fff","& + .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#177ddc":"#1890ff"}}},"& .MuiSwitch-thumb":{boxShadow:"0 2px 4px 0 rgb(0 35 11 / 20%)",width:12,height:12,borderRadius:6,transition:t.transitions.create(["width"],{duration:200})},"& .MuiSwitch-track":{borderRadius:16/2,opacity:1,backgroundColor:t.palette.mode==="dark"?"rgba(255,255,255,.35)":"rgba(0,0,0,.25)",boxSizing:"border-box"}}));function D(){return i(d,{children:[e(r,{control:e(H,{sx:{m:1},defaultChecked:!0}),label:"MUI switch"}),e(r,{control:e(E,{defaultChecked:!0}),label:"Android 12"}),e(r,{control:e(O,{sx:{m:1},defaultChecked:!0}),label:"iOS style"}),i(C,{direction:"row",spacing:1,alignItems:"center",children:[e(o,{children:"Off"}),e($,{defaultChecked:!0,inputProps:{"aria-label":"ant design"}}),e(o,{children:"On"})]})]})}const X=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: \`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="\${encodeURIComponent('#fff')}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')\`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: \`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="\${encodeURIComponent('#fff')}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')\`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));
const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&::before': {
            backgroundImage: \`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="\${encodeURIComponent(theme.palette.getContrastText(theme.palette.primary.main))}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')\`,
            left: 12,
        },
        '&::after': {
            backgroundImage: \`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="\${encodeURIComponent(theme.palette.getContrastText(theme.palette.primary.main))}" d="M19,13H5V11H19V13Z" /></svg>')\`,
            right: 12,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}));
const IOSSwitch = styled((props) => (<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props}/>))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));
const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));
export default function CustomizedSwitches() {
    return (<FormGroup>
      <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked/>} label="MUI switch"/>
      <FormControlLabel control={<Android12Switch defaultChecked/>} label="Android 12"/>
      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked/>} label="iOS style"/>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }}/>
        <Typography>On</Typography>
      </Stack>
    </FormGroup>);
}
`;function Y(){return i(g,{component:"fieldset",children:[e(f,{component:"legend",children:"Label placement"}),i(d,{"aria-label":"position",row:!0,children:[e(r,{value:"top",control:e(a,{color:"primary"}),label:"Top",labelPlacement:"top"}),e(r,{value:"start",control:e(a,{color:"primary"}),label:"Start",labelPlacement:"start"}),e(r,{value:"bottom",control:e(a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),e(r,{value:"end",control:e(a,{color:"primary"}),label:"End",labelPlacement:"end"})]})]})}const q=`import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function FormControlLabelPosition() {
    return (<FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel value="top" control={<Switch color="primary"/>} label="Top" labelPlacement="top"/>
        <FormControlLabel value="start" control={<Switch color="primary"/>} label="Start" labelPlacement="start"/>
        <FormControlLabel value="bottom" control={<Switch color="primary"/>} label="Bottom" labelPlacement="bottom"/>
        <FormControlLabel value="end" control={<Switch color="primary"/>} label="End" labelPlacement="end"/>
      </FormGroup>
    </FormControl>);
}
`;function _(t){return i(M,{children:[i("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(F,{}),e(v,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/switches",target:"_blank",role:"button",size:"small",startIcon:e(x,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Switch"}),e(o,{className:"description",children:"Switches toggle the state of a single setting on or off."}),e(o,{className:"text-14 mb-32",component:"div",children:"Switches are the preferred way to adjust settings on mobile. The option that the switch controls, as well as the state it's in, should be made clear from the corresponding inline label."}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic switches"}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"BasicSwitches.js",className:"my-16",iframe:!1,component:L,raw:z})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Label"}),i(o,{className:"text-14 mb-32",component:"div",children:["You can provide a label to the ",e("code",{children:"Switch"})," thanks to the ",e("code",{children:"FormControlLabel"})," component."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"SwitchLabels.js",className:"my-16",iframe:!1,component:N,raw:R})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Size"}),i(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"size"})," prop to change the size of the switch."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"SwitchesSize.js",className:"my-16",iframe:!1,component:I,raw:P})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"ColorSwitches.js",className:"my-16",iframe:!1,component:A,raw:G})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Controlled"}),i(o,{className:"text-14 mb-32",component:"div",children:["You can control the switch with the ",e("code",{children:"checked"})," and ",e("code",{children:"onChange"})," props:"]}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"ControlledSwitches.js",className:"my-16",iframe:!1,component:T,raw:j})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Switches with FormGroup"}),i(o,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"FormGroup"})," is a helpful wrapper used to group selection controls components that provides an easier API. However, you are encouraged to use ",e("a",{href:"/material-ui/react-checkbox/",children:"Checkboxes"})," instead if multiple related controls are required. (See: ",e("a",{href:"#when-to-use",children:"When to use"}),")."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"SwitchesGroup.js",className:"my-16",iframe:!1,component:V,raw:U})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),i(o,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"CustomizedSwitches.js",className:"my-16",iframe:!1,component:D,raw:X})}),i(o,{className:"text-14 mb-32",component:"div",children:["🎨 If you are looking for inspiration, you can check ",e("a",{href:"https://mui-treasury.com/?path=/docs/switch-introduction--docs",children:"MUI Treasury's customization examples"}),"."]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Label placement"}),e(o,{className:"text-14 mb-32",component:"div",children:"You can change the placement of the label:"}),e(o,{className:"text-14 mb-32",component:"div",children:e(l,{name:"FormControlLabelPosition.js",className:"my-16",iframe:!1,component:Y,raw:q})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"When to use"}),e("ul",{className:"space-y-16",children:e("li",{children:e("a",{href:"https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8",children:"Checkboxes vs. Switches"})})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),i("ul",{className:"space-y-16",children:[i("li",{children:["It will render an element with the ",e("code",{children:"checkbox"})," role not ",e("code",{children:"switch"})," role since this role isn't widely supported yet. Please test first if assistive technology of your target audience supports this role properly. Then you can change the role with",e("code",{children:"<Switch inputProps={{ role: 'switch' }}>"})]}),i("li",{children:["All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the ",e("code",{children:"<label>"})," element (",e("a",{href:"/material-ui/api/form-control-label/",children:"FormControlLabel"}),")."]}),i("li",{children:["When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. ",e("code",{children:"aria-label"}),", ",e("code",{children:"aria-labelledby"}),", ",e("code",{children:"title"}),") via the ",e("code",{children:"inputProps"})," prop."]})]}),e(y,{component:"pre",className:"language-jsx",children:` 
<Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
`})]})}export{_ as default};
