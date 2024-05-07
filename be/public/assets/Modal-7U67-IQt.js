import{r as i,d as t,j as e,C as d,H as s,T as o,e6 as c,dT as y,cK as M,F as k,dp as h,bb as T}from"./index-cy1M6gwN.js";import{F as p}from"./FuseExample-0-XNuDGL.js";import{D as C}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{u as B,a as O}from"./react-spring_web.modern-4mMv0Xm9.js";import"./DocumentationNavigation-fvt_Eo8n.js";const N={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function S(){const[n,a]=i.useState(!1);return t("div",{children:[e(d,{onClick:()=>a(!0),children:"Open modal"}),e(c,{open:n,onClose:()=>a(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t(s,{sx:N,children:[e(o,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),e(o,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})}const R=`import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>);
}
`,g={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3};function A(){const[n,a]=i.useState(!1),r=()=>{a(!0)},l=()=>{a(!1)};return t(i.Fragment,{children:[e(d,{onClick:r,children:"Open Child Modal"}),e(c,{open:n,onClose:l,"aria-labelledby":"child-modal-title","aria-describedby":"child-modal-description",children:t(s,{sx:{...g,width:200},children:[e("h2",{id:"child-modal-title",children:"Text in a child modal"}),e("p",{id:"child-modal-description",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}),e(d,{onClick:l,children:"Close Child Modal"})]})})]})}function F(){const[n,a]=i.useState(!1);return t("div",{children:[e(d,{onClick:()=>{a(!0)},children:"Open modal"}),e(c,{open:n,onClose:()=>{a(!1)},"aria-labelledby":"parent-modal-title","aria-describedby":"parent-modal-description",children:t(s,{sx:{...g,width:400},children:[e("h2",{id:"parent-modal-title",children:"Text in a modal"}),e("p",{id:"parent-modal-description",children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}),e(A,{})]})})]})}const I=`import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (<React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>);
}
export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (<div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>);
}
`,j={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function D(){const[n,a]=i.useState(!1);return t("div",{children:[e(d,{onClick:()=>a(!0),children:"Open modal"}),e(c,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:n,onClose:()=>a(!1),closeAfterTransition:!0,slots:{backdrop:y},slotProps:{backdrop:{timeout:500}},children:e(M,{in:n,children:t(s,{sx:j,children:[e(o,{id:"transition-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),e(o,{id:"transition-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})})]})}const E=`import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>);
}
`,b=i.forwardRef(function(a,r){const{children:l,in:m,onClick:x,onEnter:u,onExited:f,ownerState:J,...w}=a,v=B({from:{opacity:0},to:{opacity:m?1:0},onStart:()=>{m&&u&&u(null,!0)},onRest:()=>{!m&&f&&f(null,!0)}});return e(O.div,{ref:r,style:v,...w,children:i.cloneElement(l,{onClick:x})})}),P={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function W(){const[n,a]=i.useState(!1);return t("div",{children:[e(d,{onClick:()=>a(!0),children:"Open modal"}),e(c,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",open:n,onClose:()=>a(!1),closeAfterTransition:!0,slots:{backdrop:y},slotProps:{backdrop:{TransitionComponent:b}},children:e(b,{in:n,children:t(s,{sx:P,children:[e(o,{id:"spring-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),e(o,{id:"spring-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})})]})}const K=`import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';
const Fade = React.forwardRef(function Fade(props, ref) {
    const { children, in: open, onClick, onEnter, onExited, ownerState, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });
    return (<animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>);
});
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function SpringModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal aria-labelledby="spring-modal-title" aria-describedby="spring-modal-description" open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{
            backdrop: {
                TransitionComponent: Fade,
            },
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>);
}
`,z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function $(){const[n,a]=i.useState(!1);return t("div",{children:[e(d,{onClick:()=>a(!0),children:"Open modal"}),e(c,{keepMounted:!0,open:n,onClose:()=>a(!1),"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:t(s,{sx:z,children:[e(o,{id:"keep-mounted-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),e(o,{id:"keep-mounted-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})}const H=`import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function KeepMountedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal keepMounted open={open} onClose={handleClose} aria-labelledby="keep-mounted-modal-title" aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>);
}
`;function L(){const n=i.useRef(null);return e(s,{sx:{height:300,flexGrow:1,minWidth:300,transform:"translateZ(0)","@media all and (-ms-high-contrast: none)":{display:"none"}},ref:n,children:e(c,{disablePortal:!0,disableEnforceFocus:!0,disableAutoFocus:!0,open:!0,"aria-labelledby":"server-modal-title","aria-describedby":"server-modal-description",sx:{display:"flex",p:1,alignItems:"center",justifyContent:"center"},container:()=>n.current,children:t(s,{sx:{position:"relative",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:a=>a.shadows[5],p:4},children:[e(o,{id:"server-modal-title",variant:"h6",component:"h2",children:"Server-side modal"}),e(o,{id:"server-modal-description",sx:{pt:2},children:"If you disable JavaScript, you will still see me."})]})})})}const G=`import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
export default function ServerModal() {
    const rootRef = React.useRef(null);
    return (<Box sx={{
            height: 300,
            flexGrow: 1,
            minWidth: 300,
            transform: 'translateZ(0)',
            // The position fixed scoping doesn't work in IE11.
            // Disable this demo to preserve the others.
            '@media all and (-ms-high-contrast: none)': {
                display: 'none',
            },
        }} ref={rootRef}>
      <Modal disablePortal disableEnforceFocus disableAutoFocus open aria-labelledby="server-modal-title" aria-describedby="server-modal-description" sx={{
            display: 'flex',
            p: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }} container={() => rootRef.current}>
        <Box sx={{
            position: 'relative',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: (theme) => theme.shadows[5],
            p: 4,
        }}>
          <Typography id="server-modal-title" variant="h6" component="h2">
            Server-side modal
          </Typography>
          <Typography id="server-modal-description" sx={{ pt: 2 }}>
            If you disable JavaScript, you will still see me.
          </Typography>
        </Box>
      </Modal>
    </Box>);
}
`;function V(n){return t(T,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(C,{}),e(d,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/modal",target:"_blank",role:"button",size:"small",startIcon:e(k,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Modal"}),e(o,{className:"description",children:"The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else."}),t(o,{className:"text-14 mb-32",component:"div",children:["The component renders its ",e("code",{children:"children"})," node in front of a backdrop component. The ",e("code",{children:"Modal"})," offers important features:"]}),t("ul",{className:"space-y-16",children:[e("li",{children:"💄 Manages modal stacking when one-at-a-time just isn't enough."}),e("li",{children:"🔐 Creates a backdrop, for disabling interaction below the modal."}),e("li",{children:"🔐 It disables scrolling of the page content while open."}),e("li",{children:"♿️ It properly manages focus; moving to the modal content, and keeping it there until the modal is closed."}),e("li",{children:"♿️ Adds the appropriate ARIA roles automatically."})]}),e("div",{className:"border border-1 p-16 rounded-16 my-12",children:t(o,{className:"text-14 mb-32",component:"div",children:['The term "modal" is sometimes used to mean "dialog", but this is a misnomer. A modal window describes parts of a UI. An element is considered modal if ',e("a",{href:"https://en.wikipedia.org/wiki/Modal_window",children:"it blocks interaction with the rest of the application"}),"."]})}),t(o,{className:"text-14 mb-32",component:"div",children:["If you are creating a modal dialog, you probably want to use the ",e("a",{href:"/material-ui/react-dialog/",children:"Dialog"})," component rather than directly using Modal. Modal is a lower-level construct that is leveraged by the following components:"]}),t("ul",{className:"space-y-16",children:[e("li",{children:e("a",{href:"/material-ui/react-dialog/",children:"Dialog"})}),e("li",{children:e("a",{href:"/material-ui/react-drawer/",children:"Drawer"})}),e("li",{children:e("a",{href:"/material-ui/react-menu/",children:"Menu"})}),e("li",{children:e("a",{href:"/material-ui/react-popover/",children:"Popover"})})]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic modal"}),e(o,{className:"text-14 mb-32",component:"div",children:e(p,{name:"BasicModal.js",className:"my-16",iframe:!1,component:S,raw:R})}),t(o,{className:"text-14 mb-32",component:"div",children:["Notice that you can disable the outline (often blue or gold) with the ",e("code",{children:"outline: 0"})," CSS property."]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Nested modal"}),e(o,{className:"text-14 mb-32",component:"div",children:"Modals can be nested, for example a select within a dialog, but stacking of more than two modals, or any two modals with a backdrop is discouraged."}),e(o,{className:"text-14 mb-32",component:"div",children:e(p,{name:"NestedModal.js",className:"my-16",iframe:!1,component:F,raw:I})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Transitions"}),e(o,{className:"text-14 mb-32",component:"div",children:"The open/close state of the modal can be animated with a transition component. This component should respect the following conditions:"}),t("ul",{className:"space-y-16",children:[e("li",{children:"Be a direct child descendent of the modal."}),t("li",{children:["Have an ",e("code",{children:"in"})," prop. This corresponds to the open/close state."]}),t("li",{children:["Call the ",e("code",{children:"onEnter"})," callback prop when the enter transition starts."]}),t("li",{children:["Call the ",e("code",{children:"onExited"})," callback prop when the exit transition is completed. These two callbacks allow the modal to unmount the child content when closed and fully transitioned."]})]}),t(o,{className:"text-14 mb-32",component:"div",children:["Modal has built-in support for ",e("a",{href:"https://github.com/reactjs/react-transition-group",children:"react-transition-group"}),"."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(p,{name:"TransitionsModal.js",className:"my-16",iframe:!1,component:D,raw:E})}),t(o,{className:"text-14 mb-32",component:"div",children:["Alternatively, you can use ",e("a",{href:"https://github.com/pmndrs/react-spring",children:"react-spring"}),"."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(p,{name:"SpringModal.js",className:"my-16",iframe:!1,component:W,raw:K})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Performance"}),t(o,{className:"text-14 mb-32",component:"div",children:["The content of modal is unmounted when closed. If you need to make the content available to search engines or render expensive component trees inside your modal while optimizing for interaction responsiveness it might be a good idea to change this default behavior by enabling the ",e("code",{children:"keepMounted"})," prop:"]}),e(h,{component:"pre",className:"language-jsx",children:` 
<Modal keepMounted />
`}),e(o,{className:"text-14 mb-32",component:"div",children:e(p,{name:"KeepMountedModal.js",className:"my-16",iframe:!1,component:$,raw:H})}),e(o,{className:"text-14 mb-32",component:"div",children:"As with any performance optimization, this is not a silver bullet. Be sure to identify bottlenecks first, and then try out these optimization strategies."}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Server-side modal"}),t(o,{className:"text-14 mb-32",component:"div",children:["React ",e("a",{href:"https://github.com/facebook/react/issues/13097",children:"doesn't support"})," the ",e("a",{href:"https://react.dev/reference/react-dom/createPortal",children:e("code",{children:"createPortal()"})})," API on the server. In order to display the modal, you need to disable the portal feature with the ",e("code",{children:"disablePortal"})," prop:"]}),e(o,{className:"text-14 mb-32",component:"div",children:e(p,{name:"ServerModal.js",className:"my-16",iframe:!1,component:L,raw:G})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Focus trap"}),e(o,{className:"text-14 mb-32",component:"div",children:"The modal moves the focus back to the body of the component if the focus tries to escape it."}),e(o,{className:"text-14 mb-32",component:"div",children:"This is done for accessibility purposes. However, it might create issues. In the event the users need to interact with another part of the page, e.g. with a chatbot window, you can disable the behavior:"}),e(h,{component:"pre",className:"language-jsx",children:` 
<Modal disableEnforceFocus />
`}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),t(o,{className:"text-14 mb-32",component:"div",children:["(WAI-ARIA: ",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"}),")"]}),t("ul",{className:"space-y-16",children:[t("li",{children:[t(o,{className:"text-14 mb-32",component:"div",children:["Be sure to add ",e("code",{children:'aria-labelledby="id..."'}),", referencing the modal title, to the ",e("code",{children:"Modal"}),". Additionally, you may give a description of your modal with the ",e("code",{children:'aria-describedby="id..."'})," prop on the ",e("code",{children:"Modal"}),"."]}),e(h,{component:"pre",className:"language-jsx",children:` 
<Modal aria-labelledby="modal-title" aria-describedby="modal-description">
  <h2 id="modal-title">My Title</h2>
  <Typography id="modal-description">My Description</Typography>
</Modal>
`})]}),e("li",{children:t(o,{className:"text-14 mb-32",component:"div",children:["The ",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/",children:"WAI-ARIA authoring practices"})," can help you set the initial focus on the most relevant element, based on your modal content."]})}),e("li",{children:t(o,{className:"text-14 mb-32",component:"div",children:['Keep in mind that a "modal window" overlays on either the primary window or another modal window. Windows under a modal are ',e("strong",{children:"inert"}),". That is, users cannot interact with content outside an active modal window. This might create ",e("a",{href:"#focus-trap",children:"conflicting behaviors"}),"."]})})]})]})}export{V as default};
