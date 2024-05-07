import{b2 as pe,b1 as de,s as C,ap as ie,ac as s,dk as xe,r as l,cc as me,K as Ae,ae as z,bb as $e,ab as Be,ag as u,x as G,b5 as ke,ah as ue,aR as Me,e2 as je,A as Ee,cf as _e,ay as ve,az as ge,j as e,H as A,d as p,l as He,bD as E,bB as ze,bN as Ge,e5 as Ue,cZ as oe,e0 as Ze,F as Ke,C as Ve,T as r,bx as qe}from"./index-3voNJrtd.js";import{F as _}from"./FuseExample-L3LbvVcu.js";import{D as We}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{d as U}from"./Save-92ZtmFNV.js";import{d as Z}from"./Share-NrmGvzXP.js";import{Z as Ye}from"./Zoom-XzNULSg5.js";import{d as Je}from"./Edit-r8yxAjZb.js";import"./DocumentationNavigation-us8sikvN.js";function Qe(o){return de("MuiSpeedDial",o)}const Xe=pe("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),ne=Xe,eo=["ref"],oo=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],no=["ref"],to=o=>{const{classes:n,open:t,direction:a}=o,c={root:["root",`direction${ie(a)}`],fab:["fab"],actions:["actions",!t&&"actionsClosed"]};return ue(c,Qe,n)};function H(o){if(o==="up"||o==="down")return"vertical";if(o==="right"||o==="left")return"horizontal"}const y=32,te=16,io=C("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:t}=o;return[n.root,n[`direction${ie(t.direction)}`]]}})(({theme:o,ownerState:n})=>s({zIndex:(o.vars||o).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},n.direction==="up"&&{flexDirection:"column-reverse",[`& .${ne.actions}`]:{flexDirection:"column-reverse",marginBottom:-y,paddingBottom:te+y}},n.direction==="down"&&{flexDirection:"column",[`& .${ne.actions}`]:{flexDirection:"column",marginTop:-y,paddingTop:te+y}},n.direction==="left"&&{flexDirection:"row-reverse",[`& .${ne.actions}`]:{flexDirection:"row-reverse",marginRight:-y,paddingRight:te+y}},n.direction==="right"&&{flexDirection:"row",[`& .${ne.actions}`]:{flexDirection:"row",marginLeft:-y,paddingLeft:te+y}})),ao=C(xe,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(o,n)=>n.fab})(()=>({pointerEvents:"auto"})),ro=C("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(o,n)=>{const{ownerState:t}=o;return[n.actions,!t.open&&n.actionsClosed]}})(({ownerState:o})=>s({display:"flex",pointerEvents:"auto"},!o.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})),lo=l.forwardRef(function(n,t){const a=me({props:n,name:"MuiSpeedDial"}),c=Ae(),I={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{ariaLabel:d,FabProps:{ref:k}={},children:S,className:D,direction:v="up",hidden:g=!1,icon:b,onBlur:M,onClose:f,onFocus:R,onKeyDown:P,onMouseEnter:j,onMouseLeave:w,onOpen:F,open:ae,TransitionComponent:W=Ye,transitionDuration:Y=I,TransitionProps:Ce}=a,J=z(a.FabProps,eo),Ie=z(a,oo),[h,N]=$e({controlled:ae,default:!1,name:"SpeedDial",state:"open"}),Q=s({},a,{open:h,direction:v}),X=to(Q),L=l.useRef();l.useEffect(()=>()=>{clearTimeout(L.current)},[]);const re=l.useRef(0),le=l.useRef(),T=l.useRef([]);T.current=[T.current[0]];const Re=l.useCallback(i=>{T.current[0]=i},[]),Te=Be(k,Re),Oe=(i,m)=>x=>{T.current[i+1]=x,m&&m(x)},Pe=i=>{P&&P(i);const m=i.key.replace("Arrow","").toLowerCase(),{current:x=m}=le;if(i.key==="Escape"){N(!1),T.current[0].focus(),f&&f(i,"escapeKeyDown");return}if(H(m)===H(x)&&H(m)!==void 0){i.preventDefault();const se=m===x?1:-1,ee=Me(re.current+se,0,T.current.length-1);T.current[ee].focus(),re.current=ee,le.current=x}};l.useEffect(()=>{h||(re.current=0,le.current=void 0)},[h]);const Se=i=>{i.type==="mouseleave"&&w&&w(i),i.type==="blur"&&M&&M(i),clearTimeout(L.current),i.type==="blur"?L.current=setTimeout(()=>{N(!1),f&&f(i,"blur")}):(N(!1),f&&f(i,"mouseLeave"))},we=i=>{J.onClick&&J.onClick(i),clearTimeout(L.current),h?(N(!1),f&&f(i,"toggle")):(N(!0),F&&F(i,"toggle"))},De=i=>{i.type==="mouseenter"&&j&&j(i),i.type==="focus"&&R&&R(i),clearTimeout(L.current),h||(L.current=setTimeout(()=>{N(!0),F&&F(i,{focus:"focus",mouseenter:"mouseEnter"}[i.type])}))},ce=d.replace(/^[^a-z]+|[^\w:.-]+/gi,""),be=l.Children.toArray(S).filter(i=>l.isValidElement(i)),Fe=be.map((i,m)=>{const x=i.props,{FabProps:{ref:se}={},tooltipPlacement:ee}=x,Ne=z(x.FabProps,no),Le=ee||(H(v)==="vertical"?"left":"top");return l.cloneElement(i,{FabProps:s({},Ne,{ref:Oe(m,se)}),delay:30*(h?m:be.length-m),open:h,tooltipPlacement:Le,id:`${ce}-action-${m}`})});return u.jsxs(io,s({className:G(X.root,D),ref:t,role:"presentation",onKeyDown:Pe,onBlur:Se,onFocus:De,onMouseEnter:De,onMouseLeave:Se,ownerState:Q},Ie,{children:[u.jsx(W,s({in:!g,timeout:Y,unmountOnExit:!0},Ce,{children:u.jsx(ao,s({color:"primary","aria-label":d,"aria-haspopup":"true","aria-expanded":h,"aria-controls":`${ce}-actions`},J,{onClick:we,className:G(X.fab,J.className),ref:Te,ownerState:Q,children:l.isValidElement(b)&&ke(b,["SpeedDialIcon"])?l.cloneElement(b,{open:h}):b}))})),u.jsx(ro,{id:`${ce}-actions`,role:"menu","aria-orientation":H(v),className:G(X.actions,!h&&X.actionsClosed),ownerState:Q,children:Fe})]}))}),K=lo;function co(o){return de("MuiSpeedDialAction",o)}const so=pe("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),po=so,mo=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],uo=o=>{const{open:n,tooltipPlacement:t,classes:a}=o,c={fab:["fab",!n&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${ie(t)}`,!n&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return ue(c,co,a)},fo=C(xe,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(o,n)=>{const{ownerState:t}=o;return[n.fab,!t.open&&n.fabClosed]}})(({theme:o,ownerState:n})=>s({margin:8,color:(o.vars||o).palette.text.secondary,backgroundColor:(o.vars||o).palette.background.paper,"&:hover":{backgroundColor:o.vars?o.vars.palette.SpeedDialAction.fabHoverBg:je(o.palette.background.paper,.15)},transition:`${o.transitions.create("transform",{duration:o.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!n.open&&{opacity:0,transform:"scale(0)"})),ho=C("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(o,n)=>{const{ownerState:t}=o;return[n.staticTooltip,!t.open&&n.staticTooltipClosed,n[`tooltipPlacement${ie(t.tooltipPlacement)}`]]}})(({theme:o,ownerState:n})=>({position:"relative",display:"flex",alignItems:"center",[`& .${po.staticTooltipLabel}`]:s({transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.shorter}),opacity:1},!n.open&&{opacity:0,transform:"scale(0.5)"},n.tooltipPlacement==="left"&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},n.tooltipPlacement==="right"&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})})),So=C("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(o,n)=>n.staticTooltipLabel})(({theme:o})=>s({position:"absolute"},o.typography.body1,{backgroundColor:(o.vars||o).palette.background.paper,borderRadius:(o.vars||o).shape.borderRadius,boxShadow:(o.vars||o).shadows[1],color:(o.vars||o).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})),Do=l.forwardRef(function(n,t){const a=me({props:n,name:"MuiSpeedDialAction"}),{className:c,delay:I=0,FabProps:d={},icon:k,id:S,open:D,TooltipClasses:v,tooltipOpen:g=!1,tooltipPlacement:b="left",tooltipTitle:M}=a,f=z(a,mo),R=s({},a,{tooltipPlacement:b}),P=uo(R),[j,w]=l.useState(g),F=()=>{w(!1)},ae=()=>{w(!0)},W={transitionDelay:`${I}ms`},Y=u.jsx(fo,s({size:"small",className:G(P.fab,c),tabIndex:-1,role:"menuitem",ownerState:R},d,{style:s({},W,d.style),children:k}));return g?u.jsxs(ho,s({id:S,ref:t,className:P.staticTooltip,ownerState:R},f,{children:[u.jsx(So,{style:W,id:`${S}-label`,className:P.staticTooltipLabel,ownerState:R,children:M}),l.cloneElement(Y,{"aria-labelledby":`${S}-label`})]})):(!D&&j&&w(!1),u.jsx(Ee,s({id:S,ref:t,title:M,placement:b,onClose:F,onOpen:ae,open:D&&j,classes:v},f,{children:Y})))}),V=Do,bo=_e(u.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function xo(o){return de("MuiSpeedDialIcon",o)}const vo=pe("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),O=vo,go=["className","icon","open","openIcon"],yo=o=>{const{classes:n,open:t,openIcon:a}=o;return ue({root:["root"],icon:["icon",t&&"iconOpen",a&&t&&"iconWithOpenIconOpen"],openIcon:["openIcon",t&&"openIconOpen"]},xo,n)},Co=C("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(o,n)=>{const{ownerState:t}=o;return[{[`& .${O.icon}`]:n.icon},{[`& .${O.icon}`]:t.open&&n.iconOpen},{[`& .${O.icon}`]:t.open&&t.openIcon&&n.iconWithOpenIconOpen},{[`& .${O.openIcon}`]:n.openIcon},{[`& .${O.openIcon}`]:t.open&&n.openIconOpen},n.root]}})(({theme:o,ownerState:n})=>({height:24,[`& .${O.icon}`]:s({transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short})},n.open&&s({transform:"rotate(45deg)"},n.openIcon&&{opacity:0})),[`& .${O.openIcon}`]:s({position:"absolute",transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},n.open&&{transform:"rotate(0deg)",opacity:1})})),ye=l.forwardRef(function(n,t){const a=me({props:n,name:"MuiSpeedDialIcon"}),{className:c,icon:I,openIcon:d}=a,k=z(a,go),S=a,D=yo(S);function v(g,b){return l.isValidElement(g)?l.cloneElement(g,{className:b}):g}return u.jsxs(Co,s({className:G(D.root,c),ref:t,ownerState:S},k,{children:[d?v(d,D.openIcon):null,I?v(I,D.icon):u.jsx(bo,{className:D.icon})]}))});ye.muiName="SpeedDialIcon";const q=ye;var fe={},Io=ge;Object.defineProperty(fe,"__esModule",{value:!0});var $=fe.default=void 0,Ro=Io(ve()),To=u;$=fe.default=(0,Ro.default)((0,To.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z"}),"FileCopyOutlined");var he={},Oo=ge;Object.defineProperty(he,"__esModule",{value:!0});var B=he.default=void 0,Po=Oo(ve()),wo=u;B=he.default=(0,Po.default)((0,wo.jsx)("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"}),"Print");const Fo=[{icon:e($,{}),name:"Copy"},{icon:e(U,{}),name:"Save"},{icon:e(B,{}),name:"Print"},{icon:e(Z,{}),name:"Share"}];function No(){return e(A,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e(K,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:e(q,{}),children:Fo.map(o=>e(V,{icon:o.icon,tooltipTitle:o.name},o.name))})})}const Lo=`import * as React from 'react';
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
`,Ao=C(K)(({theme:o})=>({position:"absolute","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:o.spacing(2),right:o.spacing(2)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:o.spacing(2),left:o.spacing(2)}})),$o=[{icon:e($,{}),name:"Copy"},{icon:e(U,{}),name:"Save"},{icon:e(B,{}),name:"Print"},{icon:e(Z,{}),name:"Share"}];function Bo(){const[o,n]=l.useState("up"),[t,a]=l.useState(!1);return p(A,{sx:{transform:"translateZ(0px)",flexGrow:1},children:[e(E,{control:e(He,{checked:t,onChange:d=>{a(d.target.checked)},color:"primary"}),label:"Hidden"}),p(ze,{component:"fieldset",sx:{mt:1,display:"flex"},children:[e(Ge,{component:"legend",children:"Direction"}),p(Ue,{"aria-label":"direction",name:"direction",value:o,onChange:d=>{n(d.target.value)},row:!0,children:[e(E,{value:"up",control:e(oe,{}),label:"Up"}),e(E,{value:"right",control:e(oe,{}),label:"Right"}),e(E,{value:"down",control:e(oe,{}),label:"Down"}),e(E,{value:"left",control:e(oe,{}),label:"Left"})]})]}),e(A,{sx:{position:"relative",mt:3,height:320},children:e(Ao,{ariaLabel:"SpeedDial playground example",hidden:t,icon:e(q,{}),direction:o,children:$o.map(d=>e(V,{icon:d.icon,tooltipTitle:d.name},d.name))})})]})}const ko=`import * as React from 'react';
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
`,Mo=[{icon:e($,{}),name:"Copy"},{icon:e(U,{}),name:"Save"},{icon:e(B,{}),name:"Print"},{icon:e(Z,{}),name:"Share"}];function jo(){const[o,n]=l.useState(!1),t=()=>n(!0),a=()=>n(!1);return e(A,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e(K,{ariaLabel:"SpeedDial controlled open example",sx:{position:"absolute",bottom:16,right:16},icon:e(q,{}),onClose:a,onOpen:t,open:o,children:Mo.map(c=>e(V,{icon:c.icon,tooltipTitle:c.name,onClick:a},c.name))})})}const Eo=`import * as React from 'react';
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
`,_o=[{icon:e($,{}),name:"Copy"},{icon:e(U,{}),name:"Save"},{icon:e(B,{}),name:"Print"},{icon:e(Z,{}),name:"Share"}];function Ho(){return e(A,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e(K,{ariaLabel:"SpeedDial openIcon example",sx:{position:"absolute",bottom:16,right:16},icon:e(q,{openIcon:e(Je,{})}),children:_o.map(o=>e(V,{icon:o.icon,tooltipTitle:o.name},o.name))})})}const zo=`import * as React from 'react';
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
`,Go=[{icon:e($,{}),name:"Copy"},{icon:e(U,{}),name:"Save"},{icon:e(B,{}),name:"Print"},{icon:e(Z,{}),name:"Share"}];function Uo(){const[o,n]=l.useState(!1),t=()=>n(!0),a=()=>n(!1);return p(A,{sx:{height:330,transform:"translateZ(0px)",flexGrow:1},children:[e(Ze,{open:o}),e(K,{ariaLabel:"SpeedDial tooltip example",sx:{position:"absolute",bottom:16,right:16},icon:e(q,{}),onClose:a,onOpen:t,open:o,children:Go.map(c=>e(V,{icon:c.icon,tooltipTitle:c.name,tooltipOpen:!0,onClick:a},c.name))})]})}const Zo=`import * as React from 'react';
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
`;function en(o){return p(qe,{children:[p("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(We,{}),e(Ve,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/speed-dial",target:"_blank",role:"button",size:"small",startIcon:e(Ke,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(r,{className:"text-32 my-16 font-700",component:"h1",children:"Speed Dial"}),e(r,{className:"description",children:"When pressed, a floating action button can display three to six related actions in the form of a Speed Dial."}),e(r,{className:"text-14 mb-32",component:"div",children:"If more than six actions are needed, something other than a FAB should be used to present them."}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic speed dial"}),e(r,{className:"text-14 mb-32",component:"div",children:"The floating action button can display related actions."}),e(r,{className:"text-14 mb-32",component:"div",children:e(_,{name:"BasicSpeedDial.js",className:"my-16",iframe:!1,component:No,raw:Lo})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Playground"}),e(r,{className:"text-14 mb-32",component:"div",children:e(_,{name:"PlaygroundSpeedDial.js",className:"my-16",iframe:!1,component:Bo,raw:ko})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Controlled speed dial"}),p(r,{className:"text-14 mb-32",component:"div",children:["The open state of the component can be controlled with the ",e("code",{children:"open"}),"/",e("code",{children:"onOpen"}),"/",e("code",{children:"onClose"})," props."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(_,{name:"ControlledOpenSpeedDial.js",className:"my-16",iframe:!1,component:jo,raw:Eo})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Custom close icon"}),p(r,{className:"text-14 mb-32",component:"div",children:["You can provide an alternate icon for the closed and open states using the ",e("code",{children:"icon"})," and ",e("code",{children:"openIcon"})," props of the ",e("code",{children:"SpeedDialIcon"})," component."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(_,{name:"OpenIconSpeedDial.js",className:"my-16",iframe:!1,component:Ho,raw:zo})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Persistent action tooltips"}),e(r,{className:"text-14 mb-32",component:"div",children:"The SpeedDialActions tooltips can be displayed persistently so that users don't have to long-press to see the tooltip on touch devices."}),p(r,{className:"text-14 mb-32",component:"div",children:["It is enabled here across all devices for demo purposes, but in production it could use the ",e("code",{children:"isTouch"})," logic to conditionally set the prop."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(_,{name:"SpeedDialTooltipOpen.js",className:"my-16",iframe:!1,component:Uo,raw:Zo})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),e(r,{className:"text-14 mt-12 mb-10",component:"h4",children:"Required"}),p("ul",{className:"space-y-16",children:[p("li",{children:["You should provide an ",e("code",{children:"ariaLabel"})," for the speed dial component."]}),p("li",{children:["You should provide a ",e("code",{children:"tooltipTitle"})," for each speed dial action."]})]}),e(r,{className:"text-14 mt-12 mb-10",component:"h4",children:"Provided"}),p("ul",{className:"space-y-16",children:[p("li",{children:["The Fab has ",e("code",{children:"aria-haspopup"}),", ",e("code",{children:"aria-expanded"})," and ",e("code",{children:"aria-controls"})," attributes."]}),p("li",{children:["The speed dial actions container has ",e("code",{children:'role="menu"'})," and ",e("code",{children:"aria-orientation"})," set according to the direction."]}),p("li",{children:["The speed dial actions have ",e("code",{children:'role="menuitem"'}),", and an ",e("code",{children:"aria-describedby"})," attribute that references the associated tooltip."]})]}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),p("ul",{className:"space-y-16",children:[e("li",{children:"The speed dial opens on focus."}),e("li",{children:"The Space and Enter keys trigger the selected speed dial action, and toggle the speed dial open state."}),e("li",{children:"The cursor keys move focus to the next or previous speed dial action. (Note that any cursor direction can be used initially to open the speed dial. This enables the expected behavior for the actual or perceived orientation of the speed dial, for example for a screen reader user who perceives the speed dial as a drop-down menu.)"}),e("li",{children:"The Escape key closes the speed dial and, if a speed dial action was focused, returns focus to the Fab."})]})]})}export{en as default};
