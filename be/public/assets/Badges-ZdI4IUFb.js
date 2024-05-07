import{j as e,cN as t,d as a,cI as c,c8 as B,aX as b,bY as x,s as I,z as v,r as g,ba as M,C as s,l as N,bh as R,H as l,F as k,T as o,bb as j}from"./index-cy1M6gwN.js";import{F as i}from"./FuseExample-0-XNuDGL.js";import{D as z}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d as n}from"./Mail-H8YjYrCw.js";import{d as _}from"./Add-pMJI9iSV.js";import"./DocumentationNavigation-fvt_Eo8n.js";function D(){return e(t,{badgeContent:4,color:"primary",children:e(n,{color:"action"})})}const $=`import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
export default function SimpleBadge() {
    return (<Badge badgeContent={4} color="primary">
      <MailIcon color="action"/>
    </Badge>);
}
`;function F(){return a(c,{spacing:2,direction:"row",children:[e(t,{badgeContent:4,color:"secondary",children:e(n,{color:"action"})}),e(t,{badgeContent:4,color:"success",children:e(n,{color:"action"})})]})}const A=`import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
export default function ColorBadge() {
    return (<Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="secondary">
        <MailIcon color="action"/>
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon color="action"/>
      </Badge>
    </Stack>);
}
`;var m={},V=b;Object.defineProperty(m,"__esModule",{value:!0});var y=m.default=void 0,Y=V(B()),L=x;y=m.default=(0,Y.default)((0,L.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"}),"ShoppingCart");const O=I(t)(({theme:r})=>({"& .MuiBadge-badge":{right:-3,top:13,border:`2px solid ${r.palette.background.paper}`,padding:"0 4px"}}));function T(){return e(v,{"aria-label":"cart",children:e(O,{badgeContent:4,color:"secondary",children:e(y,{})})})}const Z=`import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: \`2px solid \${theme.palette.background.paper}\`,
        padding: '0 4px',
    },
}));
export default function CustomizedBadges() {
    return (<IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>);
}
`;var p={},E=b;Object.defineProperty(p,"__esModule",{value:!0});var C=p.default=void 0,G=E(B()),H=x;C=p.default=(0,G.default)((0,H.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");function q(){const[r,u]=g.useState(1),[d,w]=g.useState(!1);return a(l,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},children:[a("div",{children:[e(t,{color:"secondary",badgeContent:r,children:e(n,{})}),a(M,{children:[e(s,{"aria-label":"reduce",onClick:()=>{u(Math.max(r-1,0))},children:e(C,{fontSize:"small"})}),e(s,{"aria-label":"increase",onClick:()=>{u(r+1)},children:e(_,{fontSize:"small"})})]})]}),a("div",{children:[e(t,{color:"secondary",variant:"dot",invisible:d,children:e(n,{})}),e(R,{sx:{color:"text.primary"},control:e(N,{checked:!d,onChange:()=>{w(!d)}}),label:"Show Badge"})]})]})}const P=`import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
export default function BadgeVisibility() {
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);
    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };
    return (<Box sx={{
            color: 'action.active',
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
                marginBottom: 2,
            },
            '& .MuiBadge-root': {
                marginRight: 4,
            },
        }}>
      <div>
        <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup>
          <Button aria-label="reduce" onClick={() => {
            setCount(Math.max(count - 1, 0));
        }}>
            <RemoveIcon fontSize="small"/>
          </Button>
          <Button aria-label="increase" onClick={() => {
            setCount(count + 1);
        }}>
            <AddIcon fontSize="small"/>
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <FormControlLabel sx={{ color: 'text.primary' }} control={<Switch checked={!invisible} onChange={handleBadgeVisibility}/>} label="Show Badge"/>
      </div>
    </Box>);
}
`;function U(){return a(c,{spacing:4,direction:"row",sx:{color:"action.active"},children:[e(t,{color:"secondary",badgeContent:0,children:e(n,{})}),e(t,{color:"secondary",badgeContent:0,showZero:!0,children:e(n,{})})]})}const X=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
export default function ShowZeroBadge() {
    return (<Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={0}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={0} showZero>
        <MailIcon />
      </Badge>
    </Stack>);
}
`;function J(){return a(c,{spacing:4,direction:"row",sx:{color:"action.active"},children:[e(t,{color:"secondary",badgeContent:99,children:e(n,{})}),e(t,{color:"secondary",badgeContent:100,children:e(n,{})}),e(t,{color:"secondary",badgeContent:1e3,max:999,children:e(n,{})})]})}const K=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
export default function BadgeMax() {
    return (<Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={99}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999}>
        <MailIcon />
      </Badge>
    </Stack>);
}
`;function Q(){return e(l,{sx:{color:"action.active"},children:e(t,{color:"secondary",variant:"dot",children:e(n,{})})})}const W=`import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
export default function DotBadge() {
    return (<Box sx={{ color: 'action.active' }}>
      <Badge color="secondary" variant="dot">
        <MailIcon />
      </Badge>
    </Box>);
}
`,S={bgcolor:"primary.main",width:40,height:40},ee={borderRadius:"50%"},h=e(l,{component:"span",sx:S}),f=e(l,{component:"span",sx:{...S,...ee}});function oe(){return a(c,{spacing:3,direction:"row",children:[e(t,{color:"secondary",badgeContent:" ",children:h}),e(t,{color:"secondary",badgeContent:" ",variant:"dot",children:h}),e(t,{color:"secondary",overlap:"circular",badgeContent:" ",children:f}),e(t,{color:"secondary",overlap:"circular",badgeContent:" ",variant:"dot",children:f})]})}const ae=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles}/>;
const circle = (<Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }}/>);
export default function BadgeOverlap() {
    return (<Stack spacing={3} direction="row">
      <Badge color="secondary" badgeContent=" ">
        {rectangle}
      </Badge>
      <Badge color="secondary" badgeContent=" " variant="dot">
        {rectangle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" ">
        {circle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
        {circle}
      </Badge>
    </Stack>);
}
`;function te(r){return r===0?"no notifications":r>99?"more than 99 notifications":`${r} notifications`}function ne(){return e(v,{"aria-label":te(100),children:e(t,{badgeContent:100,color:"secondary",children:e(n,{})})})}const re=`import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
function notificationsLabel(count) {
    if (count === 0) {
        return 'no notifications';
    }
    if (count > 99) {
        return 'more than 99 notifications';
    }
    return \`\${count} notifications\`;
}
export default function AccessibleBadges() {
    return (<IconButton aria-label={notificationsLabel(100)}>
      <Badge badgeContent={100} color="secondary">
        <MailIcon />
      </Badge>
    </IconButton>);
}
`;function ue(r){return a(j,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(z,{}),e(s,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/badges",target:"_blank",role:"button",size:"small",startIcon:e(k,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Badge"}),e(o,{className:"description",children:"Badge generates a small badge to the top-right of its child(ren)."}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic badge"}),e(o,{className:"text-14 mb-32",component:"div",children:"Examples of badges containing text, using primary and secondary colors. The badge is applied to its children."}),e(o,{className:"text-14 mb-32",component:"div",children:e(i,{name:"SimpleBadge.js",className:"my-16",iframe:!1,component:D,raw:$})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),a(o,{className:"text-14 mb-32",component:"div",children:["Use ",e("code",{children:"color"})," prop to apply theme palette to component."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(i,{name:"ColorBadge.js",className:"my-16",iframe:!1,component:F,raw:A})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),a(o,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(i,{name:"CustomizedBadges.js",className:"my-16",iframe:!1,component:T,raw:Z})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Badge visibility"}),a(o,{className:"text-14 mb-32",component:"div",children:["The visibility of badges can be controlled using the ",e("code",{children:"invisible"})," prop."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(i,{name:"BadgeVisibility.js",className:"my-16",iframe:!1,component:q,raw:P})}),a(o,{className:"text-14 mb-32",component:"div",children:["The badge hides automatically when ",e("code",{children:"badgeContent"})," is zero. You can override this with the ",e("code",{children:"showZero"})," prop."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(i,{name:"ShowZeroBadge.js",className:"my-16",iframe:!1,component:U,raw:X})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Maximum value"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"max"})," prop to cap the value of the badge content."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(i,{name:"BadgeMax.js",className:"my-16",iframe:!1,component:J,raw:K})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Dot badge"}),a(o,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"dot"})," prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(i,{name:"DotBadge.js",className:"my-16",iframe:!1,component:Q,raw:W})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Badge overlap"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"overlap"})," prop to place the badge relative to the corner of the wrapped element."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(i,{name:"BadgeOverlap.js",className:"my-16",iframe:!1,component:oe,raw:ae})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Badge alignment"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"anchorOrigin"})," prop to move the badge to any corner of the wrapped element."]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can't rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with ",e("code",{children:"aria-label"}),":"]}),e(o,{className:"text-14 mb-32",component:"div",children:e(i,{name:"AccessibleBadges.js",className:"my-16",iframe:!1,component:ne,raw:re})})]})}export{ue as default};
