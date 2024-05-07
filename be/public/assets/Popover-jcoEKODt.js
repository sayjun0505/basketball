import{r as u,d as t,j as e,C as h,T as o,ax as d,P as f,F as g,dz as P,bx as b}from"./index-3voNJrtd.js";import{F as m}from"./FuseExample-L3LbvVcu.js";import{D as y}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{b as x,c as T,P as E}from"./index-WKsFWzC3.js";import"./DocumentationNavigation-us8sikvN.js";function N(){const[n,r]=u.useState(null),s=c=>{r(c.currentTarget)},i=()=>{r(null)},a=!!n,l=a?"simple-popover":void 0;return t("div",{children:[e(h,{"aria-describedby":l,variant:"contained",onClick:s,children:"Open Popover"}),e(d,{id:l,open:a,anchorEl:n,onClose:i,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:e(o,{sx:{p:2},children:"The content of the Popover."})})]})}const O=`import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function BasicPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (<div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}>
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>);
}
`;function w(){const[n,r]=u.useState(null),s=l=>{r(l.currentTarget)},i=()=>{r(null)},a=!!n;return t("div",{children:[e(o,{"aria-owns":a?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:s,onMouseLeave:i,children:"Hover with a Popover."}),e(d,{id:"mouse-over-popover",sx:{pointerEvents:"none"},open:a,anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:i,disableRestoreFocus:!0,children:e(o,{sx:{p:1},children:"I use Popover."})})]})}const C=`import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
export default function MouseOverPopover() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (<div>
      <Typography aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        Hover with a Popover.
      </Typography>
      <Popover id="mouse-over-popover" sx={{
            pointerEvents: 'none',
        }} open={open} anchorEl={anchorEl} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }} transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }} onClose={handlePopoverClose} disableRestoreFocus>
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
    </div>);
}
`;function R(){const[n,r]=u.useState(!1),[s,i]=u.useState(null),a=()=>{r(!1)},l=()=>{const p=window.getSelection();if(!p||p.anchorOffset===p.focusOffset)return;const v=()=>p.getRangeAt(0).getBoundingClientRect();r(!0),i({getBoundingClientRect:v,nodeType:1})},c=n?"virtual-element-popover":void 0;return t("div",{children:[e(o,{"aria-describedby":c,onMouseUp:l,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus."}),e(d,{id:c,open:n,anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:a,disableAutoFocus:!0,children:e(f,{children:e(o,{sx:{p:2},children:"The content of the Popover."})})})]})}const B=`import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
export default function VirtualElementPopover() {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => {
        setOpen(false);
    };
    const handleMouseUp = () => {
        const selection = window.getSelection();
        // Skip if selection has a length of 0
        if (!selection || selection.anchorOffset === selection.focusOffset) {
            return;
        }
        const getBoundingClientRect = () => {
            return selection.getRangeAt(0).getBoundingClientRect();
        };
        setOpen(true);
        setAnchorEl({ getBoundingClientRect, nodeType: 1 });
    };
    const id = open ? 'virtual-element-popover' : undefined;
    return (<div>
      <Typography aria-describedby={id} onMouseUp={handleMouseUp}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus,
        bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum
        vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor
        porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis
        vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus
        massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit
        amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus
        consequat. Suspendisse lacinia tellus a libero volutpat maximus.
      </Typography>
      <Popover id={id} open={open} anchorEl={anchorEl} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} onClose={handleClose} disableAutoFocus>
        <Paper>
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Paper>
      </Popover>
    </div>);
}
`;function S(){return e(E,{variant:"popover",popupId:"demo-popup-popover",children:n=>t("div",{children:[e(h,{variant:"contained",...x(n),children:"Open Popover"}),e(d,{...T(n),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:e(o,{sx:{p:2},children:"The content of the Popover."})})]})})}const A=`import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
export default function PopoverPopupState() {
    return (<PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (<div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Open Popover
          </Button>
          <Popover {...bindPopover(popupState)} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }} transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}>
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </Popover>
        </div>)}
    </PopupState>);
}
`;function F(n){return t(b,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(y,{}),e(h,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/popover",target:"_blank",role:"button",size:"small",startIcon:e(g,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Popover"}),e(o,{className:"description",children:"A Popover can be used to display some content on top of another."}),t(o,{className:"text-14 mb-32",component:"div",children:["Things to know when using the ",e("code",{children:"Popover"})," component:"]}),t("ul",{className:"space-y-16",children:[t("li",{children:["The component is built on top of the ",e("a",{href:"/material-ui/react-modal/",children:e("code",{children:"Modal"})})," component."]}),t("li",{children:["The scroll and click away are blocked unlike with the ",e("a",{href:"/material-ui/react-popper/",children:e("code",{children:"Popper"})})," component."]})]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic Popover"}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"BasicPopover.js",className:"my-16",iframe:!1,component:N,raw:O})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Anchor playground"}),t(o,{className:"text-14 mb-32",component:"div",children:["Use the radio buttons to adjust the ",e("code",{children:"anchorOrigin"})," and ",e("code",{children:"transformOrigin"})," positions. You can also set the ",e("code",{children:"anchorReference"})," to ",e("code",{children:"anchorPosition"})," or ",e("code",{children:"anchorEl"}),". When it is ",e("code",{children:"anchorPosition"}),", the component will, instead of ",e("code",{children:"anchorEl"}),", refer to the ",e("code",{children:"anchorPosition"})," prop which you can adjust to set the position of the popover."]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Mouse over interaction"}),t(o,{className:"text-14 mb-32",component:"div",children:["This demo demonstrates how to use the ",e("code",{children:"Popover"})," component and the mouseover event to achieve popover behavior."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"MouseOverPopover.js",className:"my-16",iframe:!1,component:w,raw:C})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Virtual element"}),t(o,{className:"text-14 mb-32",component:"div",children:["The value of the ",e("code",{children:"anchorEl"})," prop can be a reference to a fake DOM element. You need to provide an object with the following interface:"]}),e(P,{component:"pre",className:"language-ts",children:` 
interface PopoverVirtualElement {
  nodeType: 1;
  getBoundingClientRect: () => DOMRect;
}
`}),e(o,{className:"text-14 mb-32",component:"div",children:"Highlight part of the text to see the popover:"}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"VirtualElementPopover.js",className:"my-16",iframe:!1,component:R,raw:B})}),e(o,{className:"text-14 mb-32",component:"div",children:"For more information on the virtual element's properties, see the following resources:"}),t("ul",{className:"space-y-16",children:[e("li",{children:e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",children:"getBoundingClientRect"})}),e("li",{children:e("a",{href:"https://drafts.fxtf.org/geometry-1/#domrectreadonly",children:"DOMRect"})}),e("li",{children:e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType",children:"Node types"})})]}),t(o,{className:"text-14 mb-32",component:"div",children:[":::warning The usage of a virtual element for the Popover component requires the ",e("code",{children:"nodeType"})," property. This is different from virtual elements used for the ",e("a",{href:"/material-ui/react-popper/#virtual-element",children:e("code",{children:"Popper"})})," or ",e("a",{href:"/material-ui/react-tooltip/#virtual-element",children:e("code",{children:"Tooltip"})})," components, both of which don't require the property. :::"]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Complementary projects"}),e(o,{className:"text-14 mb-32",component:"div",children:"For more advanced use cases, you might be able to take advantage of:"}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"material-ui-popup-state"}),t(o,{className:"text-14 mb-32",component:"div",children:[e("img",{src:"https://img.shields.io/github/stars/jcoreio/material-ui-popup-state?style=social&label=Star",alt:"stars"}),e("img",{src:"https://img.shields.io/npm/dm/material-ui-popup-state.svg",alt:"npm downloads"})]}),t(o,{className:"text-14 mb-32",component:"div",children:["The package ",e("a",{href:"https://github.com/jcoreio/material-ui-popup-state",children:e("code",{children:"material-ui-popup-state"})})," that takes care of popover state for you in most cases."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"PopoverPopupState.js",className:"my-16",iframe:!1,component:S,raw:A})})]})}export{F as default};
