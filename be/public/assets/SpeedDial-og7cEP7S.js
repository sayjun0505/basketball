import{aF as pe,aE as de,s as C,ay as ie,bU as s,d9 as xe,r as l,bW as me,K as Ae,bX as z,aO as $e,aR as Be,bY as u,x as G,aI as ke,az as ue,ap as Me,dV as Ee,A as je,b$ as _e,c8 as ve,aX as ge,j as e,H as A,d as p,l as He,bh as j,bf as ze,bt as Ge,dY as Ue,cL as oe,dT as Ze,F as Ke,C as Ve,T as r,bb as We}from"./index-cy1M6gwN.js";import{F as _}from"./FuseExample-0-XNuDGL.js";import{D as qe}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d as U}from"./Save-8fQlLibY.js";import{d as Z}from"./Share-vHEalQjF.js";import{Z as Ye}from"./Zoom-_cx7dPjB.js";import{d as Xe}from"./Edit-7SYRS06s.js";import"./DocumentationNavigation-fvt_Eo8n.js";function Je(o){return de("MuiSpeedDial",o)}const Qe=pe("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),ne=Qe,eo=["ref"],oo=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],no=["ref"],to=o=>{const{classes:n,open:t,direction:a}=o,c={root:["root",`direction${ie(a)}`],fab:["fab"],actions:["actions",!t&&"actionsClosed"]};return ue(c,Je,n)};function H(o){if(o==="up"||o==="down")return"vertical";if(o==="right"||o==="left")return"horizontal"}const y=32,te=16,io=C("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:t}=o;return[n.root,n[`direction${ie(t.direction)}`]]}})(({theme:o,ownerState:n})=>s({zIndex:(o.vars||o).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},n.direction==="up"&&{flexDirection:"column-reverse",[`& .${ne.actions}`]:{flexDirection:"column-reverse",marginBottom:-y,paddingBottom:te+y}},n.direction==="down"&&{flexDirection:"column",[`& .${ne.actions}`]:{flexDirection:"column",marginTop:-y,paddingTop:te+y}},n.direction==="left"&&{flexDirection:"row-reverse",[`& .${ne.actions}`]:{flexDirection:"row-reverse",marginRight:-y,paddingRight:te+y}},n.direction==="right"&&{flexDirection:"row",[`& .${ne.actions}`]:{flexDirection:"row",marginLeft:-y,paddingLeft:te+y}})),ao=C(xe,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(o,n)=>n.fab})(()=>({pointerEvents:"auto"})),ro=C("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(o,n)=>{const{ownerState:t}=o;return[n.actions,!t.open&&n.actionsClosed]}})(({ownerState:o})=>s({display:"flex",pointerEvents:"auto"},!o.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})),lo=l.forwardRef(function(n,t){const a=me({props:n,name:"MuiSpeedDial"}),c=Ae(),I={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{ariaLabel:d,FabProps:{ref:k}={},children:S,className:D,direction:v="up",hidden:g=!1,icon:b,onBlur:M,onClose:f,onFocus:T,onKeyDown:P,onMouseEnter:E,onMouseLeave:F,onOpen:w,open:ae,TransitionComponent:q=Ye,transitionDuration:Y=I,TransitionProps:Ce}=a,X=z(a.FabProps,eo),Ie=z(a,oo),[h,L]=$e({controlled:ae,default:!1,name:"SpeedDial",state:"open"}),J=s({},a,{open:h,direction:v}),Q=to(J),N=l.useRef();l.useEffect(()=>()=>{clearTimeout(N.current)},[]);const re=l.useRef(0),le=l.useRef(),O=l.useRef([]);O.current=[O.current[0]];const Te=l.useCallback(i=>{O.current[0]=i},[]),Oe=Be(k,Te),Re=(i,m)=>x=>{O.current[i+1]=x,m&&m(x)},Pe=i=>{P&&P(i);const m=i.key.replace("Arrow","").toLowerCase(),{current:x=m}=le;if(i.key==="Escape"){L(!1),O.current[0].focus(),f&&f(i,"escapeKeyDown");return}if(H(m)===H(x)&&H(m)!==void 0){i.preventDefault();const se=m===x?1:-1,ee=Me(re.current+se,0,O.current.length-1);O.current[ee].focus(),re.current=ee,le.current=x}};l.useEffect(()=>{h||(re.current=0,le.current=void 0)},[h]);const Se=i=>{i.type==="mouseleave"&&F&&F(i),i.type==="blur"&&M&&M(i),clearTimeout(N.current),i.type==="blur"?N.current=setTimeout(()=>{L(!1),f&&f(i,"blur")}):(L(!1),f&&f(i,"mouseLeave"))},Fe=i=>{X.onClick&&X.onClick(i),clearTimeout(N.current),h?(L(!1),f&&f(i,"toggle")):(L(!0),w&&w(i,"toggle"))},De=i=>{i.type==="mouseenter"&&E&&E(i),i.type==="focus"&&T&&T(i),clearTimeout(N.current),h||(N.current=setTimeout(()=>{L(!0),w&&w(i,{focus:"focus",mouseenter:"mouseEnter"}[i.type])}))},ce=d.replace(/^[^a-z]+|[^\w:.-]+/gi,""),be=l.Children.toArray(S).filter(i=>l.isValidElement(i)),we=be.map((i,m)=>{const x=i.props,{FabProps:{ref:se}={},tooltipPlacement:ee}=x,Le=z(x.FabProps,no),Ne=ee||(H(v)==="vertical"?"left":"top");return l.cloneElement(i,{FabProps:s({},Le,{ref:Re(m,se)}),delay:30*(h?m:be.length-m),open:h,tooltipPlacement:Ne,id:`${ce}-action-${m}`})});return u.jsxs(io,s({className:G(Q.root,D),ref:t,role:"presentation",onKeyDown:Pe,onBlur:Se,onFocus:De,onMouseEnter:De,onMouseLeave:Se,ownerState:J},Ie,{children:[u.jsx(q,s({in:!g,timeout:Y,unmountOnExit:!0},Ce,{children:u.jsx(ao,s({color:"primary","aria-label":d,"aria-haspopup":"true","aria-expanded":h,"aria-controls":`${ce}-actions`},X,{onClick:Fe,className:G(Q.fab,X.className),ref:Oe,ownerState:J,children:l.isValidElement(b)&&ke(b,["SpeedDialIcon"])?l.cloneElement(b,{open:h}):b}))})),u.jsx(ro,{id:`${ce}-actions`,role:"menu","aria-orientation":H(v),className:G(Q.actions,!h&&Q.actionsClosed),ownerState:J,children:we})]}))}),K=lo;function co(o){return de("MuiSpeedDialAction",o)}const so=pe("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),po=so,mo=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],uo=o=>{const{open:n,tooltipPlacement:t,classes:a}=o,c={fab:["fab",!n&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${ie(t)}`,!n&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return ue(c,co,a)},fo=C(xe,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(o,n)=>{const{ownerState:t}=o;return[n.fab,!t.open&&n.fabClosed]}})(({theme:o,ownerState:n})=>s({margin:8,color:(o.vars||o).palette.text.secondary,backgroundColor:(o.vars||o).palette.background.paper,"&:hover":{backgroundColor:o.vars?o.vars.palette.SpeedDialAction.fabHoverBg:Ee(o.palette.background.paper,.15)},transition:`${o.transitions.create("transform",{duration:o.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!n.open&&{opacity:0,transform:"scale(0)"})),ho=C("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(o,n)=>{const{ownerState:t}=o;return[n.staticTooltip,!t.open&&n.staticTooltipClosed,n[`tooltipPlacement${ie(t.tooltipPlacement)}`]]}})(({theme:o,ownerState:n})=>({position:"relative",display:"flex",alignItems:"center",[`& .${po.staticTooltipLabel}`]:s({transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.shorter}),opacity:1},!n.open&&{opacity:0,transform:"scale(0.5)"},n.tooltipPlacement==="left"&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},n.tooltipPlacement==="right"&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})})),So=C("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(o,n)=>n.staticTooltipLabel})(({theme:o})=>s({position:"absolute"},o.typography.body1,{backgroundColor:(o.vars||o).palette.background.paper,borderRadius:(o.vars||o).shape.borderRadius,boxShadow:(o.vars||o).shadows[1],color:(o.vars||o).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})),Do=l.forwardRef(function(n,t){const a=me({props:n,name:"MuiSpeedDialAction"}),{className:c,delay:I=0,FabProps:d={},icon:k,id:S,open:D,TooltipClasses:v,tooltipOpen:g=!1,tooltipPlacement:b="left",tooltipTitle:M}=a,f=z(a,mo),T=s({},a,{tooltipPlacement:b}),P=uo(T),[E,F]=l.useState(g),w=()=>{F(!1)},ae=()=>{F(!0)},q={transitionDelay:`${I}ms`},Y=u.jsx(fo,s({size:"small",className:G(P.fab,c),tabIndex:-1,role:"menuitem",ownerState:T},d,{style:s({},q,d.style),children:k}));return g?u.jsxs(ho,s({id:S,ref:t,className:P.staticTooltip,ownerState:T},f,{children:[u.jsx(So,{style:q,id:`${S}-label`,className:P.staticTooltipLabel,ownerState:T,children:M}),l.cloneElement(Y,{"aria-labelledby":`${S}-label`})]})):(!D&&E&&F(!1),u.jsx(je,s({id:S,ref:t,title:M,placement:b,onClose:w,onOpen:ae,open:D&&E,classes:v},f,{children:Y})))}),V=Do,bo=_e(u.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function xo(o){return de("MuiSpeedDialIcon",o)}const vo=pe("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),R=vo,go=["className","icon","open","openIcon"],yo=o=>{const{classes:n,open:t,openIcon:a}=o;return ue({root:["root"],icon:["icon",t&&"iconOpen",a&&t&&"iconWithOpenIconOpen"],openIcon:["openIcon",t&&"openIconOpen"]},xo,n)},Co=C("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:t}=o;return[{[`& .${R.icon}`]:n.icon},{[`& .${R.icon}`]:t.open&&n.iconOpen},{[`& .${R.icon}`]:t.open&&t.openIcon&&n.iconWithOpenIconOpen},{[`& .${R.openIcon}`]:n.openIcon},{[`& .${R.openIcon}`]:t.open&&n.openIconOpen},n.root]}})(({theme:o,ownerState:n})=>({height:24,[`& .${R.icon}`]:s({transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short})},n.open&&s({transform:"rotate(45deg)"},n.openIcon&&{opacity:0})),[`& .${R.openIcon}`]:s({position:"absolute",transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},n.open&&{transform:"rotate(0deg)",opacity:1})})),ye=l.forwardRef(function(n,t){const a=me({props:n,name:"MuiSpeedDialIcon"}),{className:c,icon:I,openIcon:d}=a,k=z(a,go),S=a,D=yo(S);function v(g,b){return l.isValidElement(g)?l.cloneElement(g,{className:b}):g}return u.jsxs(Co,s({className:G(D.root,c),ref:t,ownerState:S},k,{children:[d?v(d,D.openIcon):null,I?v(I,D.icon):u.jsx(bo,{className:D.icon})]}))});ye.muiName="SpeedDialIcon";const W=ye;var fe={},Io=ge;Object.defineProperty(fe,"__esModule",{value:!0});var $=fe.default=void 0,To=Io(ve()),Oo=u;$=fe.default=(0,To.default)((0,Oo.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z"}),"FileCopyOutlined");var he={},Ro=ge;Object.defineProperty(he,"__esModule",{value:!0});var B=he.default=void 0,Po=Ro(ve()),Fo=u;B=he.default=(0,Po.default)((0,Fo.jsx)("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"}),"Print");const wo=[{icon:e($,{}),name:"Copy"},{icon:e(U,{}),name:"Save"},{icon:e(B,{}),name:"Print"},{icon:e(Z,{}),name:"Share"}];function Lo(){return e(A,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e(K,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:e(W,{}),children:wo.map(o=>e(V,{icon:o.icon,tooltipTitle:o.name},o.name))})})}const No=`import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];
export default function BasicSpeedDial() {
    return (<Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial basic example" sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
        {actions.map((action) => (<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name}/>))}
      </SpeedDial>
    </Box>);
}
`,Ao=C(K)(({theme:o})=>({position:"absolute","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:o.spacing(2),right:o.spacing(2)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:o.spacing(2),left:o.spacing(2)}})),$o=[{icon:e($,{}),name:"Copy"},{icon:e(U,{}),name:"Save"},{icon:e(B,{}),name:"Print"},{icon:e(Z,{}),name:"Share"}];function Bo(){const[o,n]=l.useState("up"),[t,a]=l.useState(!1);return p(A,{sx:{transform:"translateZ(0px)",flexGrow:1},children:[e(j,{control:e(He,{checked:t,onChange:d=>{a(d.target.checked)},color:"primary"}),label:"Hidden"}),p(ze,{component:"fieldset",sx:{mt:1,display:"flex"},children:[e(Ge,{component:"legend",children:"Direction"}),p(Ue,{"aria-label":"direction",name:"direction",value:o,onChange:d=>{n(d.target.value)},row:!0,children:[e(j,{value:"up",control:e(oe,{}),label:"Up"}),e(j,{value:"right",control:e(oe,{}),label:"Right"}),e(j,{value:"down",control:e(oe,{}),label:"Down"}),e(j,{value:"left",control:e(oe,{}),label:"Left"})]})]}),e(A,{sx:{position:"relative",mt:3,height:320},children:e(Ao,{ariaLabel:"SpeedDial playground example",hidden:t,icon:e(W,{}),direction:o,children:$o.map(d=>e(V,{icon:d.icon,tooltipTitle:d.name},d.name))})})]})}const ko=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}));
const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];
export default function PlaygroundSpeedDial() {
    const [direction, setDirection] = React.useState('up');
    const [hidden, setHidden] = React.useState(false);
    const handleDirectionChange = (event) => {
        setDirection(event.target.value);
    };
    const handleHiddenChange = (event) => {
        setHidden(event.target.checked);
    };
    return (<Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <FormControlLabel control={<Switch checked={hidden} onChange={handleHiddenChange} color="primary"/>} label="Hidden"/>
      <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
        <FormLabel component="legend">Direction</FormLabel>
        <RadioGroup aria-label="direction" name="direction" value={direction} onChange={handleDirectionChange} row>
          <FormControlLabel value="up" control={<Radio />} label="Up"/>
          <FormControlLabel value="right" control={<Radio />} label="Right"/>
          <FormControlLabel value="down" control={<Radio />} label="Down"/>
          <FormControlLabel value="left" control={<Radio />} label="Left"/>
        </RadioGroup>
      </FormControl>
      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
        <StyledSpeedDial ariaLabel="SpeedDial playground example" hidden={hidden} icon={<SpeedDialIcon />} direction={direction}>
          {actions.map((action) => (<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name}/>))}
        </StyledSpeedDial>
      </Box>
    </Box>);
}
`,Mo=[{icon:e($,{}),name:"Copy"},{icon:e(U,{}),name:"Save"},{icon:e(B,{}),name:"Print"},{icon:e(Z,{}),name:"Share"}];function Eo(){const[o,n]=l.useState(!1),t=()=>n(!0),a=()=>n(!1);return e(A,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e(K,{ariaLabel:"SpeedDial controlled open example",sx:{position:"absolute",bottom:16,right:16},icon:e(W,{}),onClose:a,onOpen:t,open:o,children:Mo.map(c=>e(V,{icon:c.icon,tooltipTitle:c.name,onClick:a},c.name))})})}const jo=`import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];
export default function ControlledOpenSpeedDial() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial controlled open example" sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />} onClose={handleClose} onOpen={handleOpen} open={open}>
        {actions.map((action) => (<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose}/>))}
      </SpeedDial>
    </Box>);
}
`,_o=[{icon:e($,{}),name:"Copy"},{icon:e(U,{}),name:"Save"},{icon:e(B,{}),name:"Print"},{icon:e(Z,{}),name:"Share"}];function Ho(){return e(A,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e(K,{ariaLabel:"SpeedDial openIcon example",sx:{position:"absolute",bottom:16,right:16},icon:e(W,{openIcon:e(Xe,{})}),children:_o.map(o=>e(V,{icon:o.icon,tooltipTitle:o.name},o.name))})})}const zo=`import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];
export default function OpenIconSpeedDial() {
    return (<Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial openIcon example" sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon openIcon={<EditIcon />}/>}>
        {actions.map((action) => (<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name}/>))}
      </SpeedDial>
    </Box>);
}
`,Go=[{icon:e($,{}),name:"Copy"},{icon:e(U,{}),name:"Save"},{icon:e(B,{}),name:"Print"},{icon:e(Z,{}),name:"Share"}];function Uo(){const[o,n]=l.useState(!1),t=()=>n(!0),a=()=>n(!1);return p(A,{sx:{height:330,transform:"translateZ(0px)",flexGrow:1},children:[e(Ze,{open:o}),e(K,{ariaLabel:"SpeedDial tooltip example",sx:{position:"absolute",bottom:16,right:16},icon:e(W,{}),onClose:a,onOpen:t,open:o,children:Go.map(c=>e(V,{icon:c.icon,tooltipTitle:c.name,tooltipOpen:!0,onClick:a},c.name))})]})}const Zo=`import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];
export default function SpeedDialTooltipOpen() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open}/>
      <SpeedDial ariaLabel="SpeedDial tooltip example" sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />} onClose={handleClose} onOpen={handleOpen} open={open}>
        {actions.map((action) => (<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} tooltipOpen onClick={handleClose}/>))}
      </SpeedDial>
    </Box>);
}
`;function en(o){return p(We,{children:[p("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(qe,{}),e(Ve,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/speed-dial",target:"_blank",role:"button",size:"small",startIcon:e(Ke,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(r,{className:"text-32 my-16 font-700",component:"h1",children:"Speed Dial"}),e(r,{className:"description",children:"When pressed, a floating action button can display three to six related actions in the form of a Speed Dial."}),e(r,{className:"text-14 mb-32",component:"div",children:"If more than six actions are needed, something other than a FAB should be used to present them."}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic speed dial"}),e(r,{className:"text-14 mb-32",component:"div",children:"The floating action button can display related actions."}),e(r,{className:"text-14 mb-32",component:"div",children:e(_,{name:"BasicSpeedDial.js",className:"my-16",iframe:!1,component:Lo,raw:No})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Playground"}),e(r,{className:"text-14 mb-32",component:"div",children:e(_,{name:"PlaygroundSpeedDial.js",className:"my-16",iframe:!1,component:Bo,raw:ko})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Controlled speed dial"}),p(r,{className:"text-14 mb-32",component:"div",children:["The open state of the component can be controlled with the ",e("code",{children:"open"}),"/",e("code",{children:"onOpen"}),"/",e("code",{children:"onClose"})," props."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(_,{name:"ControlledOpenSpeedDial.js",className:"my-16",iframe:!1,component:Eo,raw:jo})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Custom close icon"}),p(r,{className:"text-14 mb-32",component:"div",children:["You can provide an alternate icon for the closed and open states using the ",e("code",{children:"icon"})," and ",e("code",{children:"openIcon"})," props of the ",e("code",{children:"SpeedDialIcon"})," component."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(_,{name:"OpenIconSpeedDial.js",className:"my-16",iframe:!1,component:Ho,raw:zo})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Persistent action tooltips"}),e(r,{className:"text-14 mb-32",component:"div",children:"The SpeedDialActions tooltips can be displayed persistently so that users don't have to long-press to see the tooltip on touch devices."}),p(r,{className:"text-14 mb-32",component:"div",children:["It is enabled here across all devices for demo purposes, but in production it could use the ",e("code",{children:"isTouch"})," logic to conditionally set the prop."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(_,{name:"SpeedDialTooltipOpen.js",className:"my-16",iframe:!1,component:Uo,raw:Zo})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),e(r,{className:"text-14 mt-12 mb-10",component:"h4",children:"Required"}),p("ul",{className:"space-y-16",children:[p("li",{children:["You should provide an ",e("code",{children:"ariaLabel"})," for the speed dial component."]}),p("li",{children:["You should provide a ",e("code",{children:"tooltipTitle"})," for each speed dial action."]})]}),e(r,{className:"text-14 mt-12 mb-10",component:"h4",children:"Provided"}),p("ul",{className:"space-y-16",children:[p("li",{children:["The Fab has ",e("code",{children:"aria-haspopup"}),", ",e("code",{children:"aria-expanded"})," and ",e("code",{children:"aria-controls"})," attributes."]}),p("li",{children:["The speed dial actions container has ",e("code",{children:'role="menu"'})," and ",e("code",{children:"aria-orientation"})," set according to the direction."]}),p("li",{children:["The speed dial actions have ",e("code",{children:'role="menuitem"'}),", and an ",e("code",{children:"aria-describedby"})," attribute that references the associated tooltip."]})]}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),p("ul",{className:"space-y-16",children:[e("li",{children:"The speed dial opens on focus."}),e("li",{children:"The Space and Enter keys trigger the selected speed dial action, and toggle the speed dial open state."}),e("li",{children:"The cursor keys move focus to the next or previous speed dial action. (Note that any cursor direction can be used initially to open the speed dial. This enables the expected behavior for the actual or perceived orientation of the speed dial, for example for a screen reader user who perceives the speed dial as a drop-down menu.)"}),e("li",{children:"The Escape key closes the speed dial and, if a speed dial action was focused, returns focus to the Fab."})]})]})}export{en as default};
