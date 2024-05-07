import{d as n,j as t,C as o,ba as r,H as f,r as c,cM as k,P as C,d8 as I,dW as N,b5 as R,dK as O,F as D,T as e,bb as S}from"./index-cy1M6gwN.js";import{F as i}from"./FuseExample-0-XNuDGL.js";import{D as z}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d as P}from"./ArrowDropDown-7rz8FW_L.js";import"./DocumentationNavigation-fvt_Eo8n.js";function M(){return n(r,{variant:"contained","aria-label":"outlined primary button group",children:[t(o,{children:"One"}),t(o,{children:"Two"}),t(o,{children:"Three"})]})}const j=`import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
export default function BasicButtonGroup() {
    return (<ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>);
}
`;function A(){return n(f,{sx:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{m:1}},children:[n(r,{variant:"outlined","aria-label":"outlined button group",children:[t(o,{children:"One"}),t(o,{children:"Two"}),t(o,{children:"Three"})]}),n(r,{variant:"text","aria-label":"text button group",children:[t(o,{children:"One"}),t(o,{children:"Two"}),t(o,{children:"Three"})]})]})}const E=`import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
export default function VariantButtonGroup() {
    return (<Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                m: 1,
            },
        }}>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>);
}
`,h=[t(o,{children:"One"},"one"),t(o,{children:"Two"},"two"),t(o,{children:"Three"},"three")];function F(){return n(f,{sx:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{m:1}},children:[t(r,{size:"small","aria-label":"small button group",children:h}),t(r,{color:"secondary","aria-label":"medium secondary button group",children:h}),t(r,{size:"large","aria-label":"large button group",children:h})]})}const L=`import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];
export default function GroupSizesColors() {
    return (<Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                m: 1,
            },
        }}>
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>);
}
`,b=[t(o,{children:"One"},"one"),t(o,{children:"Two"},"two"),t(o,{children:"Three"},"three")];function V(){return n(f,{sx:{display:"flex","& > *":{m:1}},children:[t(r,{orientation:"vertical","aria-label":"vertical outlined button group",children:b}),t(r,{orientation:"vertical","aria-label":"vertical contained button group",variant:"contained",children:b}),t(r,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",children:b})]})}const Y=`import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];
export default function GroupOrientation() {
    return (<Box sx={{
            display: 'flex',
            '& > *': {
                m: 1,
            },
        }}>
      <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="contained">
        {buttons}
      </ButtonGroup>
      <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="text">
        {buttons}
      </ButtonGroup>
    </Box>);
}
`,B=["Create a merge commit","Squash and merge","Rebase and merge"];function $(){const[l,s]=c.useState(!1),u=c.useRef(null),[m,g]=c.useState(1),v=()=>{console.info(`You clicked ${B[m]}`)},G=(a,p)=>{g(p),s(!1)},w=()=>{s(a=>!a)},y=a=>{u.current&&u.current.contains(a.target)||s(!1)};return n(c.Fragment,{children:[n(r,{variant:"contained",ref:u,"aria-label":"split button",children:[t(o,{onClick:v,children:B[m]}),t(o,{size:"small","aria-controls":l?"split-button-menu":void 0,"aria-expanded":l?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:w,children:t(P,{})})]}),t(O,{sx:{zIndex:1},open:l,anchorEl:u.current,role:void 0,transition:!0,disablePortal:!0,children:({TransitionProps:a,placement:p})=>t(k,{...a,style:{transformOrigin:p==="bottom"?"center top":"center bottom"},children:t(C,{children:t(I,{onClickAway:y,children:t(N,{id:"split-button-menu",autoFocusItem:!0,children:B.map((x,d)=>t(R,{disabled:d===2,selected:d===m,onClick:T=>G(T,d),children:x},x))})})})})})]})}const q=`import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
export default function SplitButton() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleClick = () => {
        console.info(\`You clicked \${options[selectedIndex]}\`);
    };
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current &&
            anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    return (<React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button size="small" aria-controls={open ? 'split-button-menu' : undefined} aria-expanded={open ? 'true' : undefined} aria-label="select merge strategy" aria-haspopup="menu" onClick={handleToggle}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper sx={{
            zIndex: 1,
        }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (<Grow {...TransitionProps} style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (<MenuItem key={option} disabled={index === 2} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
                      {option}
                    </MenuItem>))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>)}
      </Popper>
    </React.Fragment>);
}
`;function _(){return n(r,{disableElevation:!0,variant:"contained","aria-label":"Disabled elevation buttons",children:[t(o,{children:"One"}),t(o,{children:"Two"})]})}const H=`import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
export default function DisableElevation() {
    return (<ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>);
}
`;function X(l){return n(S,{children:[n("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[t(z,{}),t(o,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/button-group",target:"_blank",role:"button",size:"small",startIcon:t(D,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),t(e,{className:"text-32 my-16 font-700",component:"h1",children:"Button Group"}),t(e,{className:"description",children:"The ButtonGroup component can be used to group related buttons."}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic button group"}),n(e,{className:"text-14 mb-32",component:"div",children:["The buttons can be grouped by wrapping them with the ",t("code",{children:"ButtonGroup"})," component. They need to be immediate children."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"BasicButtonGroup.js",className:"my-16",iframe:!1,component:M,raw:j})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Button variants"}),t(e,{className:"text-14 mb-32",component:"div",children:"All the standard button variants are supported."}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"VariantButtonGroup.js",className:"my-16",iframe:!1,component:A,raw:E})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Sizes and colors"}),n(e,{className:"text-14 mb-32",component:"div",children:["The ",t("code",{children:"size"})," and ",t("code",{children:"color"})," props can be used to control the appearance of the button group."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"GroupSizesColors.js",className:"my-16",iframe:!1,component:F,raw:L})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Vertical group"}),n(e,{className:"text-14 mb-32",component:"div",children:["The button group can be displayed vertically using the ",t("code",{children:"orientation"})," prop."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"GroupOrientation.js",className:"my-16",iframe:!1,component:V,raw:Y})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Split button"}),n(e,{className:"text-14 mb-32",component:"div",children:[t("code",{children:"ButtonGroup"})," can also be used to create a split button. The dropdown can change the button action (as in this example) or be used to immediately trigger a related action."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"SplitButton.js",className:"my-16",iframe:!1,component:$,raw:q})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Disabled elevation"}),n(e,{className:"text-14 mb-32",component:"div",children:["You can remove the elevation with the ",t("code",{children:"disableElevation"})," prop."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"DisableElevation.js",className:"my-16",iframe:!1,component:_,raw:H})})]})}export{X as default};
