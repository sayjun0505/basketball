import{ay as I,az as w,ag as T,d as t,j as e,dk as n,H as d,aM as F,K as N,r as S,bl as E,bm as x,N as z,T as a,F as C,C as P,bx as R}from"./index-3voNJrtd.js";import{F as p}from"./FuseExample-L3LbvVcu.js";import{D as $}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{d as m}from"./Add-VN-Okj89.js";import{d as B}from"./Edit-r8yxAjZb.js";import{d as j}from"./Favorite-fZvGZ4-Q.js";import{S as D}from"./index-4gl379rG.js";import{d as Z}from"./KeyboardArrowUp-EiimYI_t.js";import{Z as _}from"./Zoom-XzNULSg5.js";import"./DocumentationNavigation-us8sikvN.js";var y={},V=w;Object.defineProperty(y,"__esModule",{value:!0});var s=y.default=void 0,O=V(I()),k=T;s=y.default=(0,O.default)((0,k.jsx)("path",{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");function U(){return t(d,{sx:{"& > :not(style)":{m:1}},children:[e(n,{color:"primary","aria-label":"add",children:e(m,{})}),e(n,{color:"secondary","aria-label":"edit",children:e(B,{})}),t(n,{variant:"extended",children:[e(s,{sx:{mr:1}}),"Navigate"]}),e(n,{disabled:!0,"aria-label":"like",children:e(j,{})})]})}const q=`import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
export default function FloatingActionButtons() {
    return (<Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }}/>
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>);
}
`;function G(){return t(d,{sx:{"& > :not(style)":{m:1}},children:[e(n,{size:"small",color:"secondary","aria-label":"add",children:e(m,{})}),e(n,{size:"medium",color:"secondary","aria-label":"add",children:e(m,{})}),e(n,{color:"secondary","aria-label":"add",children:e(m,{})})]})}const H=`import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
export default function FloatingActionButtonSize() {
    return (<Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>);
}
`;function M(){return t(d,{sx:{"& > :not(style)":{m:1}},children:[t(n,{variant:"extended",size:"small",color:"primary",children:[e(s,{sx:{mr:1}}),"Extended"]}),t(n,{variant:"extended",size:"medium",color:"primary",children:[e(s,{sx:{mr:1}}),"Extended"]}),t(n,{variant:"extended",color:"primary",children:[e(s,{sx:{mr:1}}),"Extended"]})]})}const K=`import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
export default function FloatingActionButtonExtendedSize() {
    return (<Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" size="small" color="primary">
        <NavigationIcon sx={{ mr: 1 }}/>
        Extended
      </Fab>
      <Fab variant="extended" size="medium" color="primary">
        <NavigationIcon sx={{ mr: 1 }}/>
        Extended
      </Fab>
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }}/>
        Extended
      </Fab>
    </Box>);
}
`;function h(o){const{children:i,value:c,index:l,...b}=o;return e(a,{component:"div",role:"tabpanel",hidden:c!==l,id:`action-tabpanel-${l}`,"aria-labelledby":`action-tab-${l}`,...b,children:c===l&&e(d,{sx:{p:3},children:i})})}function f(o){return{id:`action-tab-${o}`,"aria-controls":`action-tabpanel-${o}`}}const g={position:"absolute",bottom:16,right:16},W={color:"common.white",bgcolor:F[500],"&:hover":{bgcolor:F[600]}};function L(){const o=N(),[i,c]=S.useState(0),l=(r,u)=>{c(u)},b=r=>{c(r)},v={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},A=[{color:"primary",sx:g,icon:e(m,{}),label:"Add"},{color:"secondary",sx:g,icon:e(B,{}),label:"Edit"},{color:"inherit",sx:{...g,...W},icon:e(Z,{}),label:"Expand"}];return t(d,{sx:{bgcolor:"background.paper",width:500,position:"relative",minHeight:200},children:[e(z,{position:"static",color:"default",children:t(E,{value:i,onChange:l,indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example",children:[e(x,{label:"Item One",...f(0)}),e(x,{label:"Item Two",...f(1)}),e(x,{label:"Item Three",...f(2)})]})}),t(D,{axis:o.direction==="rtl"?"x-reverse":"x",index:i,onChangeIndex:b,children:[e(h,{value:i,index:0,dir:o.direction,children:"Item One"}),e(h,{value:i,index:1,dir:o.direction,children:"Item Two"}),e(h,{value:i,index:2,dir:o.direction,children:"Item Three"})]}),A.map((r,u)=>e(_,{in:i===u,timeout:v,style:{transitionDelay:`${i===u?v.exit:0}ms`},unmountOnExit:!0,children:e(n,{sx:r.sx,"aria-label":r.label,color:r.color,children:r.icon})},r.color))]})}const J=`import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (<Typography component="div" role="tabpanel" hidden={value !== index} id={\`action-tabpanel-\${index}\`} aria-labelledby={\`action-tab-\${index}\`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>);
}
function a11yProps(index) {
    return {
        id: \`action-tab-\${index}\`,
        'aria-controls': \`action-tabpanel-\${index}\`,
    };
}
const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};
const fabGreenStyle = {
    color: 'common.white',
    bgcolor: green[500],
    '&:hover': {
        bgcolor: green[600],
    },
};
export default function FloatingActionButtonZoom() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };
    const fabs = [
        {
            color: 'primary',
            sx: fabStyle,
            icon: <AddIcon />,
            label: 'Add',
        },
        {
            color: 'secondary',
            sx: fabStyle,
            icon: <EditIcon />,
            label: 'Edit',
        },
        {
            color: 'inherit',
            sx: { ...fabStyle, ...fabGreenStyle },
            icon: <UpIcon />,
            label: 'Expand',
        },
    ];
    return (<Box sx={{
            bgcolor: 'background.paper',
            width: 500,
            position: 'relative',
            minHeight: 200,
        }}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="action tabs example">
          <Tab label="Item One" {...a11yProps(0)}/>
          <Tab label="Item Two" {...a11yProps(1)}/>
          <Tab label="Item Three" {...a11yProps(2)}/>
        </Tabs>
      </AppBar>
      <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (<Zoom key={fab.color} in={value === index} timeout={transitionDuration} style={{
                transitionDelay: \`\${value === index ? transitionDuration.exit : 0}ms\`,
            }} unmountOnExit>
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>))}
    </Box>);
}
`;function le(o){return t(R,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e($,{}),e(P,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/floating-action-button",target:"_blank",role:"button",size:"small",startIcon:e(C,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(a,{className:"text-32 my-16 font-700",component:"h1",children:"Floating Action Button"}),e(a,{className:"description",children:"A Floating Action Button (FAB) performs the primary, or most common, action on a screen."}),e(a,{className:"text-14 mb-32",component:"div",children:"A floating action button appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended."}),e(a,{className:"text-14 mb-32",component:"div",children:"Only use a FAB if it is the most suitable way to present a screen's primary action. Only one component is recommended per screen to represent the most common action."}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic FAB"}),e(a,{className:"text-14 mb-32",component:"div",children:e(p,{name:"FloatingActionButtons.js",className:"my-16",iframe:!1,component:U,raw:q})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Size"}),t(a,{className:"text-14 mb-32",component:"div",children:["By default, the size is ",e("code",{children:"large"}),". Use the ",e("code",{children:"size"})," prop for smaller floating action buttons."]}),t(a,{className:"text-14 mb-32",component:"div",children:[e(p,{name:"FloatingActionButtonSize.js",className:"my-16",iframe:!1,component:G,raw:H}),e(p,{name:"FloatingActionButtonExtendedSize.js",className:"my-16",iframe:!1,component:M,raw:K})]}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Animation"}),e(a,{className:"text-14 mb-32",component:"div",children:"The floating action button animates onto the screen as an expanding piece of material, by default."}),e(a,{className:"text-14 mb-32",component:"div",children:"A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes."}),t(a,{className:"text-14 mb-32",component:"div",children:["The Zoom transition can be used to achieve this. Note that since both the exiting and entering animations are triggered at the same time, we use ",e("code",{children:"enterDelay"})," to allow the outgoing Floating Action Button's animation to finish before the new one enters."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(p,{name:"FloatingActionButtonZoom.js",className:"my-16",iframe:!1,component:L,raw:J})})]})}export{le as default};
