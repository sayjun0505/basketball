import{r as c,d as n,j as e,l as d,bD as h,H as i,ck as f,P as p,cY as I,c_ as w,dl as y,C as B,eA as N,e as T,z as R,h as L,g as P,F as G,T as o,dz as C,bx as E}from"./index-3voNJrtd.js";import{F as m}from"./FuseExample-L3LbvVcu.js";import{D as z}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{Z as k}from"./Zoom-XzNULSg5.js";import{d as j}from"./Delete-iFJrx99s.js";import"./DocumentationNavigation-us8sikvN.js";const x=e(p,{sx:{m:1,width:100,height:100},elevation:4,children:e("svg",{children:e(i,{component:"polygon",points:"0,100 50,00, 100,100",sx:{fill:t=>t.palette.common.white,stroke:t=>t.palette.divider,strokeWidth:1}})})});function D(){const[t,r]=c.useState(!1);return n(i,{sx:{height:300},children:[e(h,{control:e(d,{checked:t,onChange:()=>{r(a=>!a)}}),label:"Show"}),n(i,{sx:{"& > :not(style)":{display:"flex",justifyContent:"space-around",height:120,width:250}},children:[n("div",{children:[e(f,{in:t,children:x}),e(f,{in:t,collapsedSize:40,children:x})]}),n("div",{children:[e(i,{sx:{width:"50%"},children:e(f,{orientation:"horizontal",in:t,children:x})}),e(i,{sx:{width:"50%"},children:e(f,{orientation:"horizontal",in:t,collapsedSize:40,children:x})})]})]})]})}const O=`import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
const icon = (<Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box component="polygon" points="0,100 50,00, 100,100" sx={{
        fill: (theme) => theme.palette.common.white,
        stroke: (theme) => theme.palette.divider,
        strokeWidth: 1,
    }}/>
    </svg>
  </Paper>);
export default function SimpleCollapse() {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (<Box sx={{ height: 300 }}>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>} label="Show"/>
      <Box sx={{
            '& > :not(style)': {
                display: 'flex',
                justifyContent: 'space-around',
                height: 120,
                width: 250,
            },
        }}>
        <div>
          <Collapse in={checked}>{icon}</Collapse>
          <Collapse in={checked} collapsedSize={40}>
            {icon}
          </Collapse>
        </div>
        <div>
          <Box sx={{ width: '50%' }}>
            <Collapse orientation="horizontal" in={checked}>
              {icon}
            </Collapse>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
              {icon}
            </Collapse>
          </Box>
        </div>
      </Box>
    </Box>);
}
`,W=e(p,{sx:{m:1,width:100,height:100},elevation:4,children:e("svg",{children:e(i,{component:"polygon",points:"0,100 50,00, 100,100",sx:{fill:t=>t.palette.common.white,stroke:t=>t.palette.divider,strokeWidth:1}})})});function Z(){const[t,r]=c.useState(!1);return n(i,{sx:{height:180},children:[e(h,{control:e(d,{checked:t,onChange:()=>{r(a=>!a)}}),label:"Show"}),e(i,{sx:{display:"flex"},children:e(I,{in:t,children:W})})]})}const A=`import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
const icon = (<Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box component="polygon" points="0,100 50,00, 100,100" sx={{
        fill: (theme) => theme.palette.common.white,
        stroke: (theme) => theme.palette.divider,
        strokeWidth: 1,
    }}/>
    </svg>
  </Paper>);
export default function SimpleFade() {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (<Box sx={{ height: 180 }}>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>} label="Show"/>
      <Box sx={{ display: 'flex' }}>
        <Fade in={checked}>{icon}</Fade>
      </Box>
    </Box>);
}
`,b=e(p,{sx:{m:1,width:100,height:100},elevation:4,children:e("svg",{children:e(i,{component:"polygon",points:"0,100 50,00, 100,100",sx:{fill:t=>t.palette.common.white,stroke:t=>t.palette.divider,strokeWidth:1}})})});function M(){const[t,r]=c.useState(!1);return n(i,{sx:{height:180},children:[e(h,{control:e(d,{checked:t,onChange:()=>{r(a=>!a)}}),label:"Show"}),n(i,{sx:{display:"flex"},children:[e(w,{in:t,children:b}),e(w,{in:t,style:{transformOrigin:"0 0 0"},...t?{timeout:1e3}:{},children:b})]})]})}const U=`import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
const icon = (<Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box component="polygon" points="0,100 50,00, 100,100" sx={{
        fill: (theme) => theme.palette.common.white,
        stroke: (theme) => theme.palette.divider,
        strokeWidth: 1,
    }}/>
    </svg>
  </Paper>);
export default function SimpleGrow() {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (<Box sx={{ height: 180 }}>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>} label="Show"/>
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
          {icon}
        </Grow>
      </Box>
    </Box>);
}
`,H=e(p,{sx:{m:1,width:100,height:100},elevation:4,children:e("svg",{children:e(i,{component:"polygon",points:"0,100 50,00, 100,100",sx:{fill:t=>t.palette.common.white,stroke:t=>t.palette.divider,strokeWidth:1}})})});function q(){const[t,r]=c.useState(!1);return n(i,{sx:{height:180,width:130,position:"relative",zIndex:1},children:[e(h,{control:e(d,{checked:t,onChange:()=>{r(a=>!a)}}),label:"Show"}),e(y,{direction:"up",in:t,mountOnEnter:!0,unmountOnExit:!0,children:H})]})}const $=`import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
const icon = (<Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box component="polygon" points="0,100 50,00, 100,100" sx={{
        fill: (theme) => theme.palette.common.white,
        stroke: (theme) => theme.palette.divider,
        strokeWidth: 1,
    }}/>
    </svg>
  </Paper>);
export default function SimpleSlide() {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (<Box sx={{
            height: 180,
            width: 130,
            position: 'relative',
            zIndex: 1,
        }}>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>} label="Show"/>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        {icon}
      </Slide>
    </Box>);
}
`,Y=e(p,{sx:{m:1,width:100,height:100},elevation:4,children:e("svg",{children:e(i,{component:"polygon",points:"0,100 50,00, 100,100",sx:{fill:t=>t.palette.common.white,stroke:t=>t.palette.divider,strokeWidth:1}})})});function _(){const[t,r]=c.useState(!1),l=c.useRef(null);return e(i,{sx:{width:240,borderRadius:2,border:"1px solid",borderColor:"divider",backgroundColor:"background.default"},children:n(i,{sx:{p:2,height:200,overflow:"hidden"},ref:l,children:[e(h,{control:e(d,{checked:t,onChange:()=>{r(g=>!g)}}),label:"Show from target"}),e(y,{in:t,container:l.current,children:Y})]})})}const J=`import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
const icon = (<Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box component="polygon" points="0,100 50,00, 100,100" sx={{
        fill: (theme) => theme.palette.common.white,
        stroke: (theme) => theme.palette.divider,
        strokeWidth: 1,
    }}/>
    </svg>
  </Paper>);
export default function SlideFromContainer() {
    const [checked, setChecked] = React.useState(false);
    const containerRef = React.useRef(null);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (<Box sx={{
            width: 240,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.default',
        }}>
      <Box sx={{ p: 2, height: 200, overflow: 'hidden' }} ref={containerRef}>
        <FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>} label="Show from target"/>
        <Slide in={checked} container={containerRef.current}>
          {icon}
        </Slide>
      </Box>
    </Box>);
}
`,S=e(p,{sx:{m:1,width:100,height:100},elevation:4,children:e("svg",{children:e(i,{component:"polygon",points:"0,100 50,00, 100,100",sx:{fill:t=>t.palette.common.white,stroke:t=>t.palette.divider,strokeWidth:1}})})});function K(){const[t,r]=c.useState(!1);return n(i,{sx:{height:180},children:[e(h,{control:e(d,{checked:t,onChange:()=>{r(a=>!a)}}),label:"Show"}),n(i,{sx:{display:"flex"},children:[e(k,{in:t,children:S}),e(k,{in:t,style:{transitionDelay:t?"500ms":"0ms"},children:S})]})]})}const Q=`import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
import FormControlLabel from '@mui/material/FormControlLabel';
const icon = (<Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box component="polygon" points="0,100 50,00, 100,100" sx={{
        fill: (theme) => theme.palette.common.white,
        stroke: (theme) => theme.palette.divider,
        strokeWidth: 1,
    }}/>
    </svg>
  </Paper>);
export default function SimpleZoom() {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (<Box sx={{ height: 180 }}>
      <FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>} label="Show"/>
      <Box sx={{ display: 'flex' }}>
        <Zoom in={checked}>{icon}</Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          {icon}
        </Zoom>
      </Box>
    </Box>);
}
`,v=["🍏 Apple","🍌 Banana","🍍 Pineapple","🥥 Coconut","🍉 Watermelon"];function V({item:t,handleRemoveFruit:r}){return e(P,{secondaryAction:e(R,{edge:"end","aria-label":"delete",title:"Delete",onClick:()=>r(t),children:e(j,{})}),children:e(L,{primary:t})})}function X(){const[t,r]=c.useState(v.slice(0,3)),l=()=>{const s=v.find(u=>!t.includes(u));s&&r(u=>[s,...u])},a=s=>{r(u=>[...u.filter(F=>F!==s)])},g=e(B,{variant:"contained",disabled:t.length>=v.length,onClick:l,children:"Add fruit to basket"});return n("div",{children:[g,e(T,{sx:{mt:1},children:e(N,{children:t.map(s=>e(f,{children:V({item:s,handleRemoveFruit:a})},s))})})]})}const ee=`import * as React from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
const FRUITS = [
    '🍏 Apple',
    '🍌 Banana',
    '🍍 Pineapple',
    '🥥 Coconut',
    '🍉 Watermelon',
];
function renderItem({ item, handleRemoveFruit }) {
    return (<ListItem secondaryAction={<IconButton edge="end" aria-label="delete" title="Delete" onClick={() => handleRemoveFruit(item)}>
          <DeleteIcon />
        </IconButton>}>
      <ListItemText primary={item}/>
    </ListItem>);
}
export default function TransitionGroupExample() {
    const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));
    const handleAddFruit = () => {
        const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
        if (nextHiddenItem) {
            setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
        }
    };
    const handleRemoveFruit = (item) => {
        setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
    };
    const addFruitButton = (<Button variant="contained" disabled={fruitsInBasket.length >= FRUITS.length} onClick={handleAddFruit}>
      Add fruit to basket
    </Button>);
    return (<div>
      {addFruitButton}
      <List sx={{ mt: 1 }}>
        <TransitionGroup>
          {fruitsInBasket.map((item) => (<Collapse key={item}>{renderItem({ item, handleRemoveFruit })}</Collapse>))}
        </TransitionGroup>
      </List>
    </div>);
}
`;function le(t){return n(E,{children:[n("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(z,{}),e(B,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/transitions",target:"_blank",role:"button",size:"small",startIcon:e(G,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Transitions"}),e(o,{className:"description",children:"Transitions help to make a UI expressive and easy to use."}),n(o,{className:"text-14 mb-32",component:"div",children:["Material UI provides transitions that can be used to introduce some basic ",e("a",{href:"https://m2.material.io/design/motion/",children:"motion"})," to your applications."]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Collapse"}),n(o,{className:"text-14 mb-32",component:"div",children:["Expand from the start edge of the child element. Use the ",e("code",{children:"orientation"})," prop if you need a horizontal collapse. The ",e("code",{children:"collapsedSize"})," prop can be used to set the minimum width/height when not expanded."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"SimpleCollapse.js",className:"my-16",iframe:!1,component:D,raw:O})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Fade"}),e(o,{className:"text-14 mb-32",component:"div",children:"Fade in from transparent to opaque."}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"SimpleFade.js",className:"my-16",iframe:!1,component:Z,raw:A})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Grow"}),e(o,{className:"text-14 mb-32",component:"div",children:"Expands outwards from the center of the child element, while also fading in from transparent to opaque."}),n(o,{className:"text-14 mb-32",component:"div",children:["The second example demonstrates how to change the ",e("code",{children:"transform-origin"}),", and conditionally applies the ",e("code",{children:"timeout"})," prop to change the entry speed."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"SimpleGrow.js",className:"my-16",iframe:!1,component:M,raw:U})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Slide"}),n(o,{className:"text-14 mb-32",component:"div",children:["Slide in from the edge of the screen. The ",e("code",{children:"direction"})," prop controls which edge of the screen the transition starts from."]}),n(o,{className:"text-14 mb-32",component:"div",children:["The Transition component's ",e("code",{children:"mountOnEnter"})," prop prevents the child component from being mounted until ",e("code",{children:"in"})," is ",e("code",{children:"true"}),". This prevents the relatively positioned component from scrolling into view from its off-screen position. Similarly, the ",e("code",{children:"unmountOnExit"})," prop removes the component from the DOM after it has been transition off-screen."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"SimpleSlide.js",className:"my-16",iframe:!1,component:q,raw:$})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Slide relative to a container"}),n(o,{className:"text-14 mb-32",component:"div",children:["The Slide component also accepts ",e("code",{children:"container"})," prop, which is a reference to a DOM node. If this prop is set, the Slide component will slide from the edge of that DOM node."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"SlideFromContainer.js",className:"my-16",iframe:!1,component:_,raw:J})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Zoom"}),e(o,{className:"text-14 mb-32",component:"div",children:"Expand outwards from the center of the child element."}),e(o,{className:"text-14 mb-32",component:"div",children:"This example also demonstrates how to delay the enter transition."}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"SimpleZoom.js",className:"my-16",iframe:!1,component:K,raw:Q})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Child requirement"}),n("ul",{className:"space-y-16",children:[n("li",{children:[e("strong",{children:"Forward the style"}),": To better support server rendering, Material UI provides a ",e("code",{children:"style"})," prop to the children of some transition components (Fade, Grow, Zoom, Slide). The ",e("code",{children:"style"})," prop must be applied to the DOM for the animation to work as expected."]}),n("li",{children:[e("strong",{children:"Forward the ref"}),": The transition components require the first child element to forward its ref to the DOM node. For more details about ref, check out ",e("a",{href:"/material-ui/guides/composition/#caveat-with-refs",children:"Caveat with refs"})]}),n("li",{children:[e("strong",{children:"Single element"}),": The transition components require only one child element (",e("code",{children:"React.Fragment"})," is not allowed)."]})]}),e(C,{component:"pre",className:"language-jsx",children:` 
// The \`props\` object contains a \`style\` prop.
// You need to provide it to the \`div\` element as shown here.
const MyComponent = React.forwardRef(function (props, ref) {
  return (
    <div ref={ref} {...props}>
      Fade
    </div>
  );
});

export default function Main() {
  return (
    <Fade>
      {/* MyComponent must be the only child */}
      <MyComponent />
    </Fade>
  );
}
`}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"TransitionGroup"}),n(o,{className:"text-14 mb-32",component:"div",children:["To animate a component when it is mounted or unmounted, you can use the ",e("a",{href:"http://reactcommunity.org/react-transition-group/transition-group/",children:e("code",{children:"TransitionGroup"})})," component from ",e("em",{children:"react-transition-group"}),". As components are added or removed, the ",e("code",{children:"in"})," prop is toggled automatically by ",e("code",{children:"TransitionGroup"}),"."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"TransitionGroupExample.js",className:"my-16",iframe:!1,component:X,raw:ee})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"TransitionComponent prop"}),n(o,{className:"text-14 mb-32",component:"div",children:["Some Material UI components use these transitions internally. These accept a ",e("code",{children:"TransitionComponent"})," prop to customize the default transition. You can use any of the above components or your own. It should respect the following conditions:"]}),n("ul",{className:"space-y-16",children:[n("li",{children:["Accepts an ",e("code",{children:"in"})," prop. This corresponds to the open/close state."]}),n("li",{children:["Call the ",e("code",{children:"onEnter"})," callback prop when the enter transition starts."]}),n("li",{children:["Call the ",e("code",{children:"onExited"})," callback prop when the exit transition is completed. These two callbacks allow to unmount the children when in a closed state and fully transitioned."]})]}),n(o,{className:"text-14 mb-32",component:"div",children:["For more information on creating a custom transition, visit the ",e("em",{children:"react-transition-group"})," ",n("a",{href:"http://reactcommunity.org/react-transition-group/transition/",children:[e("code",{children:"Transition"})," documentation"]}),". You can also visit the dedicated sections of some of the components:"]}),n("ul",{className:"space-y-16",children:[e("li",{children:e("a",{href:"/material-ui/react-modal/#transitions",children:"Modal"})}),e("li",{children:e("a",{href:"/material-ui/react-dialog/#transitions",children:"Dialog"})}),e("li",{children:e("a",{href:"/material-ui/react-popper/#transitions",children:"Popper"})}),e("li",{children:e("a",{href:"/material-ui/react-snackbar/#transitions",children:"Snackbar"})}),e("li",{children:e("a",{href:"/material-ui/react-tooltip/#transitions",children:"Tooltip"})})]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Performance & SEO"}),n(o,{className:"text-14 mb-32",component:"div",children:["The content of transition component is mounted by default even if ",e("code",{children:"in={false}"}),". This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your transition it might be a good idea to change this default behavior by enabling the",e("code",{children:"unmountOnExit"})," prop:"]}),e(C,{component:"pre",className:"language-jsx",children:` 
<Fade in={false} unmountOnExit />
`}),e(o,{className:"text-14 mb-32",component:"div",children:"As with any performance optimization this is not a silver bullet. Be sure to identify bottlenecks first and then try out these optimization strategies."})]})}export{le as default};
