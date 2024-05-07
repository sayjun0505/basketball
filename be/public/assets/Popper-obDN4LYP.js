import{r as m,d as o,j as e,H as g,dK as b,cK as P,P as x,T as t,C as d,F as y,bb as C}from"./index-cy1M6gwN.js";import{F as f}from"./FuseExample-0-XNuDGL.js";import{D as k}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{u as B,a as T}from"./react-spring_web.modern-4mMv0Xm9.js";import{G as h}from"./Grid-zsqRuuCl.js";import{d as E,e as S,P as w}from"./index-AfmIZvGX.js";import"./DocumentationNavigation-fvt_Eo8n.js";function R(){const[r,p]=m.useState(null),i=u=>{p(r?null:u.currentTarget)},s=!!r,c=s?"simple-popper":void 0;return o("div",{children:[e("button",{"aria-describedby":c,type:"button",onClick:i,children:"Toggle Popper"}),e(b,{id:c,open:s,anchorEl:r,children:e(g,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})})]})}const N=`import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
export default function SimplePopper() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return (<div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.
        </Box>
      </Popper>
    </div>);
}
`;function F(){const[r,p]=m.useState(!1),[i,s]=m.useState(null),c=a=>{s(a.currentTarget),p(l=>!l)},n=r&&!!i?"transition-popper":void 0;return o("div",{children:[e("button",{"aria-describedby":n,type:"button",onClick:c,children:"Toggle Popper"}),e(b,{id:n,open:r,anchorEl:i,transition:!0,children:({TransitionProps:a})=>e(P,{...a,timeout:350,children:e(g,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})})})]})}const O=`import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
export default function TransitionsPopper() {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;
    return (<div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (<Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              The content of the Popper.
            </Box>
          </Fade>)}
      </Popper>
    </div>);
}
`,j=m.forwardRef(function(p,i){const{in:s,children:c,onEnter:u,onExited:n,...a}=p,l=B({from:{opacity:0},to:{opacity:s?1:0},onStart:()=>{s&&u&&u()},onRest:()=>{!s&&n&&n()}});return e(T.div,{ref:i,style:l,...a,children:c})});function A(){const[r,p]=m.useState(!1),[i,s]=m.useState(null),c=a=>{s(a.currentTarget),p(l=>!l)},n=r&&!!i?"spring-popper":void 0;return o("div",{children:[e("button",{"aria-describedby":n,type:"button",onClick:c,children:"Toggle Popper"}),e(b,{id:n,open:r,anchorEl:i,transition:!0,children:({TransitionProps:a})=>e(j,{...a,children:e(g,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})})})]})}const G=`import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { useSpring, animated } from '@react-spring/web';
const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });
    return (<animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>);
});
export default function SpringPopper() {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'spring-popper' : undefined;
    return (<div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (<Fade {...TransitionProps}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              The content of the Popper.
            </Box>
          </Fade>)}
      </Popper>
    </div>);
}
`;function I(){const[r,p]=m.useState(null),[i,s]=m.useState(!1),[c,u]=m.useState(),n=a=>l=>{p(l.currentTarget),s(v=>c!==a||!v),u(a)};return o(g,{sx:{width:500},children:[e(b,{sx:{zIndex:1200},open:i,anchorEl:r,placement:c,transition:!0,children:({TransitionProps:a})=>e(P,{...a,timeout:350,children:e(x,{children:e(t,{sx:{p:2},children:"The content of the Popper."})})})}),e(h,{container:!0,justifyContent:"center",children:o(h,{item:!0,children:[e(d,{onClick:n("top-start"),children:"top-start"}),e(d,{onClick:n("top"),children:"top"}),e(d,{onClick:n("top-end"),children:"top-end"})]})}),o(h,{container:!0,justifyContent:"center",children:[o(h,{item:!0,xs:6,children:[e(d,{onClick:n("left-start"),children:"left-start"}),e("br",{}),e(d,{onClick:n("left"),children:"left"}),e("br",{}),e(d,{onClick:n("left-end"),children:"left-end"})]}),o(h,{item:!0,container:!0,xs:6,alignItems:"flex-end",direction:"column",children:[e(h,{item:!0,children:e(d,{onClick:n("right-start"),children:"right-start"})}),e(h,{item:!0,children:e(d,{onClick:n("right"),children:"right"})}),e(h,{item:!0,children:e(d,{onClick:n("right-end"),children:"right-end"})})]})]}),e(h,{container:!0,justifyContent:"center",children:o(h,{item:!0,children:[e(d,{onClick:n("bottom-start"),children:"bottom-start"}),e(d,{onClick:n("bottom"),children:"bottom"}),e(d,{onClick:n("bottom-end"),children:"bottom-end"})]})})]})}const q=`import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
export default function PositionedPopper() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    return (<Box sx={{ width: 500 }}>
      <Popper 
    // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
    sx={{ zIndex: 1200 }} open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (<Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>)}
      </Popper>
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick('top-start')}>top-start</Button>
          <Button onClick={handleClick('top')}>top</Button>
          <Button onClick={handleClick('top-end')}>top-end</Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Button onClick={handleClick('left-start')}>left-start</Button>
          <br />
          <Button onClick={handleClick('left')}>left</Button>
          <br />
          <Button onClick={handleClick('left-end')}>left-end</Button>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Button onClick={handleClick('right-start')}>right-start</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClick('right')}>right</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClick('right-end')}>right-end</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={handleClick('bottom-start')}>bottom-start</Button>
          <Button onClick={handleClick('bottom')}>bottom</Button>
          <Button onClick={handleClick('bottom-end')}>bottom-end</Button>
        </Grid>
      </Grid>
    </Box>);
}
`;function M(){const[r,p]=m.useState(!1),[i,s]=m.useState(null),c=m.useRef(void 0);m.useEffect(()=>{i&&(typeof i=="object"?c.current=i.getBoundingClientRect():c.current=i().getBoundingClientRect())},[i]);const u=()=>{p(!1)},n=()=>{const l=window.getSelection();if(!l||l.anchorOffset===l.focusOffset){u();return}const v=()=>l.rangeCount===0&&c.current?(p(!1),c.current):l.getRangeAt(0).getBoundingClientRect();p(!0),s({getBoundingClientRect:v})},a=r?"virtual-element-popper":void 0;return o("div",{onMouseLeave:u,children:[e(t,{"aria-describedby":a,onMouseUp:n,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus."}),e(b,{id:a,open:r,anchorEl:i,transition:!0,placement:"bottom-start",children:({TransitionProps:l})=>e(P,{...l,timeout:350,children:e(x,{children:e(t,{sx:{p:2},children:"The content of the Popper."})})})})]})}const D=`import * as React from 'react';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
export default function VirtualElementPopper() {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const previousAnchorElPosition = React.useRef(undefined);
    React.useEffect(() => {
        if (anchorEl) {
            if (typeof anchorEl === 'object') {
                previousAnchorElPosition.current = anchorEl.getBoundingClientRect();
            }
            else {
                previousAnchorElPosition.current = anchorEl().getBoundingClientRect();
            }
        }
    }, [anchorEl]);
    const handleClose = () => {
        setOpen(false);
    };
    const handleMouseUp = () => {
        const selection = window.getSelection();
        // Resets when the selection has a length of 0
        if (!selection || selection.anchorOffset === selection.focusOffset) {
            handleClose();
            return;
        }
        const getBoundingClientRect = () => {
            if (selection.rangeCount === 0 && previousAnchorElPosition.current) {
                setOpen(false);
                return previousAnchorElPosition.current;
            }
            return selection.getRangeAt(0).getBoundingClientRect();
        };
        setOpen(true);
        setAnchorEl({ getBoundingClientRect });
    };
    const id = open ? 'virtual-element-popper' : undefined;
    return (<div onMouseLeave={handleClose}>
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
      <Popper id={id} open={open} anchorEl={anchorEl} transition placement="bottom-start">
        {({ TransitionProps }) => (<Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>)}
      </Popper>
    </div>);
}
`;function U(){return e(w,{variant:"popper",popupId:"demo-popup-popper",children:r=>o("div",{children:[e(d,{variant:"contained",...E(r),children:"Toggle Popper"}),e(b,{...S(r),transition:!0,children:({TransitionProps:p})=>e(P,{...p,timeout:350,children:e(x,{children:e(t,{sx:{p:2},children:"The content of the Popper."})})})})]})})}const V=`import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
export default function PopperPopupState() {
    return (<PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (<div>
          <Button variant="contained" {...bindToggle(popupState)}>
            Toggle Popper
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (<Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                </Paper>
              </Fade>)}
          </Popper>
        </div>)}
    </PopupState>);
}
`;function $(r){return o(C,{children:[o("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(k,{}),e(d,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/popper",target:"_blank",role:"button",size:"small",startIcon:e(y,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Popper"}),e(t,{className:"description",children:"A Popper can be used to display some content on top of another. It's an alternative to react-popper."}),o(t,{className:"text-14 mb-32",component:"div",children:["Some important features of the ",e("code",{children:"Popper"})," component:"]}),o("ul",{className:"space-y-16",children:[o("li",{children:["🕷 Popper relies on the 3rd party library (",e("a",{href:"https://popper.js.org/",children:"Popper.js"}),") for perfect positioning."]}),e("li",{children:"💄 It's an alternative API to react-popper. It aims for simplicity."}),o("li",{children:["The children is ",e("a",{href:"/material-ui/react-portal/",children:e("code",{children:"Portal"})})," to the body of the document to avoid rendering problems. You can disable this behavior with ",e("code",{children:"disablePortal"}),"."]}),o("li",{children:["The scroll isn't blocked like with the ",e("a",{href:"/material-ui/react-popover/",children:e("code",{children:"Popover"})})," component. The placement of the popper updates with the available area in the viewport."]}),o("li",{children:["Clicking away does not hide the ",e("code",{children:"Popper"})," component. If you need this behavior, you can use ",e("a",{href:"/material-ui/react-click-away-listener/",children:e("code",{children:"ClickAwayListener"})})," - see the example in the ",e("a",{href:"/material-ui/react-menu/#menulist-composition",children:"menu documentation section"}),"."]}),o("li",{children:["The ",e("code",{children:"anchorEl"})," is passed as the reference object to create a new ",e("code",{children:"Popper.js"})," instance."]})]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic popper"}),e(t,{className:"text-14 mb-32",component:"div",children:e(f,{name:"SimplePopper.js",className:"my-16",iframe:!1,component:R,raw:N})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Transitions"}),e(t,{className:"text-14 mb-32",component:"div",children:"The open/close state of the popper can be animated with a render prop child and a transition component. This component should respect the following conditions:"}),o("ul",{className:"space-y-16",children:[e("li",{children:"Be a direct child descendent of the popper."}),o("li",{children:["Call the ",e("code",{children:"onEnter"})," callback prop when the enter transition starts."]}),o("li",{children:["Call the ",e("code",{children:"onExited"})," callback prop when the exit transition is completed. These two callbacks allow the popper to unmount the child content when closed and fully transitioned."]})]}),o(t,{className:"text-14 mb-32",component:"div",children:["Popper has built-in support for ",e("a",{href:"https://github.com/reactjs/react-transition-group",children:"react-transition-group"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(f,{name:"TransitionsPopper.js",className:"my-16",iframe:!1,component:F,raw:O})}),o(t,{className:"text-14 mb-32",component:"div",children:["Alternatively, you can use ",e("a",{href:"https://github.com/pmndrs/react-spring",children:"react-spring"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(f,{name:"SpringPopper.js",className:"my-16",iframe:!1,component:A,raw:G})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Positioned popper"}),e(t,{className:"text-14 mb-32",component:"div",children:e(f,{name:"PositionedPopper.js",className:"my-16",iframe:!1,component:I,raw:q})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Scroll playground"}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Virtual element"}),o(t,{className:"text-14 mb-32",component:"div",children:["The value of the ",e("code",{children:"anchorEl"})," prop can be a reference to a fake DOM element. You need to create an object shaped like the ",e("a",{href:"https://popper.js.org/docs/v2/virtual-elements/",children:e("code",{children:"VirtualElement"})}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:"Highlight part of the text to see the popper:"}),e(t,{className:"text-14 mb-32",component:"div",children:e(f,{name:"VirtualElementPopper.js",className:"my-16",iframe:!1,component:M,raw:D})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Complementary projects"}),e(t,{className:"text-14 mb-32",component:"div",children:"For more advanced use cases you might be able to take advantage of:"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"material-ui-popup-state"}),o(t,{className:"text-14 mb-32",component:"div",children:[e("img",{src:"https://img.shields.io/github/stars/jcoreio/material-ui-popup-state?style=social&label=Star",alt:"stars"}),e("img",{src:"https://img.shields.io/npm/dm/material-ui-popup-state.svg",alt:"npm downloads"})]}),o(t,{className:"text-14 mb-32",component:"div",children:["The package ",e("a",{href:"https://github.com/jcoreio/material-ui-popup-state",children:e("code",{children:"material-ui-popup-state"})})," that takes care of popper state for you in most cases."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(f,{name:"PopperPopupState.js",className:"my-16",iframe:!1,component:U,raw:V})})]})}export{$ as default};
