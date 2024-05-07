import{j as e,cJ as r,d as i,cI as o,C as c,c8 as p,aX as f,bY as A,r as v,z as y,c4 as w,H as g,F as x,T as t,dp as a,bb as b}from"./index-cy1M6gwN.js";import{F as n}from"./FuseExample-0-XNuDGL.js";import{D as T}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d}from"./Check-wMKn8xyS.js";import{A as s}from"./AlertTitle-h_Tmr_bg.js";import{d as N}from"./Close-3McPGxEf.js";import"./DocumentationNavigation-fvt_Eo8n.js";function k(){return e(r,{icon:e(d,{fontSize:"inherit"}),severity:"success",children:"Here is a gentle confirmation that your action was successful."})}const S=`import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
export default function SimpleAlert() {
    return (<Alert icon={<CheckIcon fontSize="inherit"/>} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>);
}
`;function C(){return i(o,{sx:{width:"100%"},spacing:2,children:[e(r,{severity:"success",children:"This is a success Alert."}),e(r,{severity:"info",children:"This is an info Alert."}),e(r,{severity:"warning",children:"This is a warning Alert."}),e(r,{severity:"error",children:"This is an error Alert."})]})}const I=`import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export default function BasicAlerts() {
    return (<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">This is a success Alert.</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert>
      <Alert severity="error">This is an error Alert.</Alert>
    </Stack>);
}
`;function R(){return i(o,{sx:{width:"100%"},spacing:2,children:[e(r,{variant:"filled",severity:"success",children:"This is a filled success Alert."}),e(r,{variant:"filled",severity:"info",children:"This is a filled info Alert."}),e(r,{variant:"filled",severity:"warning",children:"This is a filled warning Alert."}),e(r,{variant:"filled",severity:"error",children:"This is a filled error Alert."})]})}const B=`import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export default function FilledAlerts() {
    return (<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        This is a filled success Alert.
      </Alert>
      <Alert variant="filled" severity="info">
        This is a filled info Alert.
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a filled warning Alert.
      </Alert>
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
    </Stack>);
}
`;function z(){return i(o,{sx:{width:"100%"},spacing:2,children:[e(r,{variant:"outlined",severity:"success",children:"This is an outlined success Alert."}),e(r,{variant:"outlined",severity:"info",children:"This is an outlined info Alert."}),e(r,{variant:"outlined",severity:"warning",children:"This is an outlined warning Alert."}),e(r,{variant:"outlined",severity:"error",children:"This is an outlined error Alert."})]})}const j=`import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export default function OutlinedAlerts() {
    return (<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="success">
        This is an outlined success Alert.
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an outlined info Alert.
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an outlined warning Alert.
      </Alert>
      <Alert variant="outlined" severity="error">
        This is an outlined error Alert.
      </Alert>
    </Stack>);
}
`;function M(){return e(r,{severity:"success",color:"warning",children:"This is a success Alert with warning colors."})}const D=`import * as React from 'react';
import Alert from '@mui/material/Alert';
export default function ColorAlerts() {
    return (<Alert severity="success" color="warning">
      This is a success Alert with warning colors.
    </Alert>);
}
`;function O(){return i(o,{sx:{width:"100%"},spacing:2,children:[e(r,{severity:"warning",onClose:()=>{},children:"This Alert displays the default close icon."}),e(r,{severity:"success",action:e(c,{color:"inherit",size:"small",children:"UNDO"}),children:"This Alert uses a Button component for its action."})]})}const U=`import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function ActionAlerts() {
    return (<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning" onClose={() => { }}>
        This Alert displays the default close icon.
      </Alert>
      <Alert severity="success" action={<Button color="inherit" size="small">
            UNDO
          </Button>}>
        This Alert uses a Button component for its action.
      </Alert>
    </Stack>);
}
`;var m={},F=f;Object.defineProperty(m,"__esModule",{value:!0});var u=m.default=void 0,E=F(p()),_=A;u=m.default=(0,E.default)((0,_.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline");function H(){return i(o,{sx:{width:"100%"},spacing:2,children:[e(r,{icon:e(d,{fontSize:"inherit"}),severity:"success",children:"This success Alert has a custom icon."}),e(r,{icon:!1,severity:"success",children:"This success Alert has no icon."}),e(r,{iconMapping:{success:e(u,{fontSize:"inherit"})},children:"This success Alert uses `iconMapping` to override the default icon."})]})}const W=`import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
export default function IconAlerts() {
    return (<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert icon={<CheckIcon fontSize="inherit"/>} severity="success">
        This success Alert has a custom icon.
      </Alert>
      <Alert icon={false} severity="success">
        This success Alert has no icon.
      </Alert>
      <Alert iconMapping={{
            success: <CheckCircleOutlineIcon fontSize="inherit"/>,
        }}>
        This success Alert uses \`iconMapping\` to override the default icon.
      </Alert>
    </Stack>);
}
`;function q(){return i(o,{sx:{width:"100%"},spacing:2,children:[i(r,{severity:"success",children:[e(s,{children:"Success"}),"This is a success Alert with an encouraging title."]}),i(r,{severity:"info",children:[e(s,{children:"Info"}),"This is an info Alert with an informative title."]}),i(r,{severity:"warning",children:[e(s,{children:"Warning"}),"This is a warning Alert with a cautious title."]}),i(r,{severity:"error",children:[e(s,{children:"Error"}),"This is an error Alert with a scary title."]})]})}const G=`import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
export default function DescriptionAlerts() {
    return (<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success Alert with an encouraging title.
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info Alert with an informative title.
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning Alert with a cautious title.
      </Alert>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error Alert with a scary title.
      </Alert>
    </Stack>);
}
`;function Y(){const[l,h]=v.useState(!0);return i(g,{sx:{width:"100%"},children:[e(w,{in:l,children:e(r,{action:e(y,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{h(!1)},children:e(N,{fontSize:"inherit"})}),sx:{mb:2},children:"Click the close icon to see the Collapse transition in action!"})}),e(c,{disabled:l,variant:"outlined",onClick:()=>{h(!0)},children:"Re-open"})]})}const P=`import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
export default function TransitionAlerts() {
    const [open, setOpen] = React.useState(true);
    return (<Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert action={<IconButton aria-label="close" color="inherit" size="small" onClick={() => {
                setOpen(false);
            }}>
              <CloseIcon fontSize="inherit"/>
            </IconButton>} sx={{ mb: 2 }}>
          Click the close icon to see the Collapse transition in action!
        </Alert>
      </Collapse>
      <Button disabled={open} variant="outlined" onClick={() => {
            setOpen(true);
        }}>
        Re-open
      </Button>
    </Box>);
}
`;function Z(l){return i(b,{children:[i("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(T,{}),e(c,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/alert",target:"_blank",role:"button",size:"small",startIcon:e(x,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Alert"}),e(t,{className:"description",children:"Alerts display brief messages for the user without interrupting their use of the app."}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Introduction"}),e(t,{className:"text-14 mb-32",component:"div",children:"Alerts give users brief and potentially time-sensitive information in an unobtrusive manner."}),e(t,{className:"text-14 mb-32",component:"div",children:"The Material UI Alert component includes several props for quickly customizing its styles to provide immediate visual cues about its contents."}),e(t,{className:"text-14 mb-32",component:"div",children:e(n,{name:"SimpleAlert.js",className:"my-16",iframe:!1,component:k,raw:S})}),e("div",{className:"border border-1 p-16 rounded-16 my-12",children:i(t,{className:"text-14 mb-32",component:"div",children:["This component is no longer documented in the ",e("a",{href:"https://m2.material.io/",children:"Material Design guidelines"}),", but Material UI will continue to support it."]})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Usage"}),i(t,{className:"text-14 mb-32",component:"div",children:["A key trait of the alert pattern is that ",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/alert/",children:"it should not interrupt the user's experience"})," of the app. Alerts should not be confused with alert ",e("em",{children:"dialogs"})," (",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/",children:"ARIA"}),"), which ",e("em",{children:"are"})," intended to interrupt the user to obtain a response. Use the Material UI ",e("a",{href:"https://mui.com/material-ui/react-dialog/",children:"Dialog"})," component if you need this behavior."]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basics"}),e(a,{component:"pre",className:"language-jsx",children:` 
import Alert from '@mui/material/Alert';
`}),e(t,{className:"text-14 mb-32",component:"div",children:"The Alert component wraps around its content, and stretches to fill its enclosing container."}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Severity"}),i(t,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"severity"})," prop accepts four values representing different states—",e("code",{children:"success"})," (the default), ",e("code",{children:"info"}),", ",e("code",{children:"warning"}),", and ",e("code",{children:"error"}),"–with corresponding icon and color combinations for each:"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(n,{name:"BasicAlerts.js",className:"my-16",iframe:!1,component:C,raw:I})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Variants"}),i(t,{className:"text-14 mb-32",component:"div",children:["The Alert component comes with two alternative style options—",e("code",{children:"filled"})," and ",e("code",{children:"outlined"}),"—which you can set using the ",e("code",{children:"variant"})," prop."]}),e(t,{className:"text-14 mt-12 mb-10",component:"h4",children:"Filled"}),e(t,{className:"text-14 mb-32",component:"div",children:e(n,{name:"FilledAlerts.js",className:"my-16",iframe:!1,component:R,raw:B})}),e(t,{className:"text-14 mt-12 mb-10",component:"h4",children:"Outlined"}),e(t,{className:"text-14 mb-32",component:"div",children:e(n,{name:"OutlinedAlerts.js",className:"my-16",iframe:!1,component:z,raw:j})}),i(t,{className:"text-14 mb-32",component:"div",children:[":::warning When using an outlined Alert with the ",e("a",{href:"/material-ui/react-snackbar/",children:"Snackbar"})," component, background content will be visible and bleed through the Alert by default. You can prevent this by adding ",e("code",{children:"bgcolor: 'background.paper'"})," to ",i("a",{href:"/material-ui/customization/how-to-customize/#the-sx-prop",children:["the ",e("code",{children:"sx"})," prop"]})," on the Alert component:"]}),e(a,{component:"pre",className:"language-jsx",children:` 
<Alert sx={{ bgcolor: 'background.paper' }} />
`}),i(t,{className:"text-14 mb-32",component:"div",children:["Check out the ",e("a",{href:"/material-ui/react-snackbar/#customization",children:"Snackbar—customization"})," doc for an example of how to use these two components together. :::"]}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Color"}),i(t,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"color"})," prop to override the default color for the specified ",e("a",{href:"#severity",children:e("code",{children:"severity"})}),"—for instance, to apply ",e("code",{children:"warning"})," colors to a ",e("code",{children:"success"})," Alert:"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(n,{name:"ColorAlerts.js",className:"my-16",iframe:!1,component:M,raw:D})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Actions"}),i(t,{className:"text-14 mb-32",component:"div",children:["Add an action to your Alert with the ",e("code",{children:"action"})," prop. This lets you insert any element—an HTML tag, an SVG icon, or a React component such as a Material UI Button—after the Alert's message, justified to the right."]}),i(t,{className:"text-14 mb-32",component:"div",children:["If you provide an ",e("code",{children:"onClose"})," callback to the Alert without setting the ",e("code",{children:"action"})," prop, the component will display a close icon (✕) by default."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(n,{name:"ActionAlerts.js",className:"my-16",iframe:!1,component:O,raw:U})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Icons"}),i(t,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"icon"})," prop to override an Alert's icon. As with the ",e("a",{href:"#actions",children:e("code",{children:"action"})})," prop, your ",e("code",{children:"icon"})," can be an HTML element, an SVG icon, or a React component. Set this prop to ",e("code",{children:"false"})," to remove the icon altogether."]}),i(t,{className:"text-14 mb-32",component:"div",children:["If you need to override all instances of an icon for a given ",e("a",{href:"#severity",children:e("code",{children:"severity"})}),", you can use the ",e("code",{children:"iconMapping"})," prop instead. You can define this prop globally by customizing your app's theme. See ",e("a",{href:"/material-ui/customization/theme-components/#theme-default-props",children:"Theme components—Default props"})," for details."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(n,{name:"IconAlerts.js",className:"my-16",iframe:!1,component:H,raw:W})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Titles"}),e(t,{className:"text-14 mb-32",component:"div",children:"To add a title to an Alert, import the Alert Title component:"}),e(a,{component:"pre",className:"language-jsx",children:` 
import AlertTitle from '@mui/material/AlertTitle';
`}),e(t,{className:"text-14 mb-32",component:"div",children:"You can nest this component above the message in your Alert for a neatly styled and properly aligned title, as shown below:"}),e(t,{className:"text-14 mb-32",component:"div",children:e(n,{name:"DescriptionAlerts.js",className:"my-16",iframe:!1,component:q,raw:G})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Transitions"}),i(t,{className:"text-14 mb-32",component:"div",children:["You can use ",e("a",{href:"/material-ui/transitions/",children:"Transition components"})," like ",e("a",{href:"/material-ui/transitions/#collapse",children:"Collapse"})," to add motion to an Alert's entrance and exit."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(n,{name:"TransitionAlerts.js",className:"my-16",iframe:!1,component:Y,raw:P})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),e(t,{className:"text-14 mb-32",component:"div",children:"Here are some factors to consider to ensure that your Alert is accessible:"}),i("ul",{className:"space-y-16",children:[i("li",{children:["Because alerts are not intended to interfere with the use of the app, your Alert component should ",e("em",{children:"never"})," affect the keyboard focus."]}),i("li",{children:["If an alert contains an action, that action must have a ",e("code",{children:"tabindex"})," of ",e("code",{children:"0"})," so it can be reached by keyboard-only users."]}),i("li",{children:["Essential alerts should not disappear automatically—",e("a",{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html",children:"timed interactions"})," can make your app inaccessible to users who need extra time to understand or locate the alert."]}),i("li",{children:["Alerts that occur too frequently can ",e("a",{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html",children:"inhibit the usability"})," of your app."]}),i("li",{children:["Dynamically rendered alerts are announced by screen readers; alerts that are already present on the page when it loads are ",e("em",{children:"not"})," announced."]}),e("li",{children:"Color does not add meaning to the UI for users who require assistive technology. You must ensure that any information conveyed through color is also denoted in other ways, such as within the text of the alert itself, or with additional hidden text that's read by screen readers."})]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Anatomy"}),i(t,{className:"text-14 mb-32",component:"div",children:["The Alert component is composed of a root ",e("a",{href:"/material-ui/react-paper/",children:"Paper"})," component (which renders as a ",e("code",{children:"<div>"}),") that houses an icon, a message, and an optional ",e("a",{href:"#actions",children:"action"}),":"]}),e(a,{component:"pre",className:"language-html",children:` 
<div className="MuiPaper-root MuiAlert-root" role="alert">
  <div className="MuiAlert-icon">
    <!-- svg icon here -->
  </div>
  <div className="MuiAlert-message">This is how an Alert renders in the DOM.</div>
  <div className="MuiAlert-action">
    <!-- optional action element here -->
  </div>
</div>
`})]})}export{Z as default};
