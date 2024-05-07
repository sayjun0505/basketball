import{r as y,j as e,d as t,C as O,dB as L,g as l,bI as u,i as d,h as c,e as p,D as b,H as f,S as Q,s as w,cW as R,d_ as ie,T as r,O as v,z as D,N as B,K as E,F as te,dp as z,bb as re}from"./index-cy1M6gwN.js";import{F as I}from"./FuseExample-0-XNuDGL.js";import{D as ae}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d as h}from"./MoveToInbox-GcK5JfzF.js";import{d as g}from"./Mail-H8YjYrCw.js";import{C as q}from"./CssBaseline-NTb4p4Ek.js";import{S as ne}from"./Skeleton-13Q7Azvm.js";import{d as N}from"./Menu-1TPiZK2Q.js";import{d as F,a as H}from"./ChevronRight-dN6hiQoq.js";import"./DocumentationNavigation-fvt_Eo8n.js";function se(){const[i,a]=y.useState({top:!1,left:!1,bottom:!1,right:!1}),m=(n,s)=>o=>{o.type==="keydown"&&(o.key==="Tab"||o.key==="Shift")||a({...i,[n]:s})},x=n=>t(f,{sx:{width:n==="top"||n==="bottom"?"auto":250},role:"presentation",onClick:m(n,!1),onKeyDown:m(n,!1),children:[e(p,{children:["Inbox","Starred","Send email","Drafts"].map((s,o)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:o%2===0?e(h,{}):e(g,{})}),e(c,{primary:s})]})},s))}),e(b,{}),e(p,{children:["All mail","Trash","Spam"].map((s,o)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:o%2===0?e(h,{}):e(g,{})}),e(c,{primary:s})]})},s))})]});return e("div",{children:["left","right","top","bottom"].map(n=>t(y.Fragment,{children:[e(O,{onClick:m(n,!0),children:n}),e(L,{anchor:n,open:i[n],onClose:m(n,!1),children:x(n)})]},n))})}const oe=`import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' &&
            (event.key === 'Tab' ||
                event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (<Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (<ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (<ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>))}
      </List>
    </Box>);
    return (<div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (<React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>))}
    </div>);
}
`;function me(){const[i,a]=y.useState({top:!1,left:!1,bottom:!1,right:!1}),m=(n,s)=>o=>{o&&o.type==="keydown"&&(o.key==="Tab"||o.key==="Shift")||a({...i,[n]:s})},x=n=>t(f,{sx:{width:n==="top"||n==="bottom"?"auto":250},role:"presentation",onClick:m(n,!1),onKeyDown:m(n,!1),children:[e(p,{children:["Inbox","Starred","Send email","Drafts"].map((s,o)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:o%2===0?e(h,{}):e(g,{})}),e(c,{primary:s})]})},s))}),e(b,{}),e(p,{children:["All mail","Trash","Spam"].map((s,o)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:o%2===0?e(h,{}):e(g,{})}),e(c,{primary:s})]})},s))})]});return e("div",{children:["left","right","top","bottom"].map(n=>t(y.Fragment,{children:[e(O,{onClick:m(n,!0),children:n}),e(Q,{anchor:n,open:i[n],onClose:m(n,!1),onOpen:m(n,!0),children:x(n)})]},n))})}const le=`import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' ||
                event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (<Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (<ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (<ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>))}
      </List>
    </Box>);
    return (<div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (<React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>))}
    </div>);
}
`,$=56,ue=w("div")(({theme:i})=>({height:"100%",backgroundColor:i.palette.mode==="light"?R[100]:i.palette.background.default})),G=w("div")(({theme:i})=>({backgroundColor:i.palette.mode==="light"?"#fff":R[800]})),de=w("div")(({theme:i})=>({width:30,height:6,backgroundColor:i.palette.mode==="light"?R[300]:R[900],borderRadius:3,position:"absolute",top:8,left:"calc(50% - 15px)"}));function ce(i){const{window:a}=i,[m,x]=y.useState(!1),n=o=>()=>{x(o)},s=a!==void 0?()=>a().document.body:void 0;return t(ue,{children:[e(q,{}),e(ie,{styles:{".MuiDrawer-root > .MuiPaper-root":{height:`calc(50% - ${$}px)`,overflow:"visible"}}}),e(f,{sx:{textAlign:"center",pt:1},children:e(O,{onClick:n(!0),children:"Open"})}),t(Q,{container:s,anchor:"bottom",open:m,onClose:n(!1),onOpen:n(!0),swipeAreaWidth:$,disableSwipeToOpen:!1,ModalProps:{keepMounted:!0},children:[t(G,{sx:{position:"absolute",top:-$,borderTopLeftRadius:8,borderTopRightRadius:8,visibility:"visible",right:0,left:0},children:[e(de,{}),e(r,{sx:{p:2,color:"text.secondary"},children:"51 results"})]}),e(G,{sx:{px:2,pb:2,height:"100%",overflow:"auto"},children:e(ne,{variant:"rectangular",height:"100%"})})]})]})}const pe=`import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
const drawerBleeding = 56;
const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));
const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));
const Puller = styled('div')(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));
export default function SwipeableEdgeDrawer(props) {
    const { window } = props;
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;
    return (<Root>
      <CssBaseline />
      <Global styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
                height: \`calc(50% - \${drawerBleeding}px)\`,
                overflow: 'visible',
            },
        }}/>
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box>
      <SwipeableDrawer container={container} anchor="bottom" open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} swipeAreaWidth={drawerBleeding} disableSwipeToOpen={false} ModalProps={{
            keepMounted: true,
        }}>
        <StyledBox sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
        }}>
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
        </StyledBox>
        <StyledBox sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
        }}>
          <Skeleton variant="rectangular" height="100%"/>
        </StyledBox>
      </SwipeableDrawer>
    </Root>);
}
`,T=240;function he(i){const{window:a}=i,[m,x]=y.useState(!1),[n,s]=y.useState(!1),o=()=>{s(!0),x(!1)},U=()=>{s(!1)},Z=()=>{n||x(!m)},j=t("div",{children:[e(v,{}),e(b,{}),e(p,{children:["Inbox","Starred","Send email","Drafts"].map((S,W)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:W%2===0?e(h,{}):e(g,{})}),e(c,{primary:S})]})},S))}),e(b,{}),e(p,{children:["All mail","Trash","Spam"].map((S,W)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:W%2===0?e(h,{}):e(g,{})}),e(c,{primary:S})]})},S))})]}),ee=a!==void 0?()=>a().document.body:void 0;return t(f,{sx:{display:"flex"},children:[e(q,{}),e(B,{position:"fixed",sx:{width:{sm:`calc(100% - ${T}px)`},ml:{sm:`${T}px`}},children:t(v,{children:[e(D,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:Z,sx:{mr:2,display:{sm:"none"}},children:e(N,{})}),e(r,{variant:"h6",noWrap:!0,component:"div",children:"Responsive drawer"})]})}),t(f,{component:"nav",sx:{width:{sm:T},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[e(L,{container:ee,variant:"temporary",open:m,onTransitionEnd:U,onClose:o,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:T}},children:j}),e(L,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:T}},open:!0,children:j})]}),t(f,{component:"main",sx:{flexGrow:1,p:3,width:{sm:`calc(100% - ${T}px)`}},children:[e(v,{}),e(r,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."}),e(r,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."})]})]})}const ge=`import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const drawerWidth = 240;
export default function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };
    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };
    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const drawer = (<div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (<ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (<ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>))}
      </List>
    </div>);
    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;
    return (<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{
            width: { sm: \`calc(100% - \${drawerWidth}px)\` },
            ml: { sm: \`\${drawerWidth}px\` },
        }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer container={container} variant="temporary" open={mobileOpen} onTransitionEnd={handleDrawerTransitionEnd} onClose={handleDrawerClose} ModalProps={{
            keepMounted: true, // Better open performance on mobile.
        }} sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}>
          {drawer}
        </Drawer>
        <Drawer variant="permanent" sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }} open>
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: \`calc(100% - \${drawerWidth}px)\` } }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>);
}
`,C=240,fe=w("main",{shouldForwardProp:i=>i!=="open"})(({theme:i,open:a})=>({flexGrow:1,padding:i.spacing(3),transition:i.transitions.create("margin",{easing:i.transitions.easing.sharp,duration:i.transitions.duration.leavingScreen}),marginLeft:`-${C}px`,...a&&{transition:i.transitions.create("margin",{easing:i.transitions.easing.easeOut,duration:i.transitions.duration.enteringScreen}),marginLeft:0}})),ve=w(B,{shouldForwardProp:i=>i!=="open"})(({theme:i,open:a})=>({transition:i.transitions.create(["margin","width"],{easing:i.transitions.easing.sharp,duration:i.transitions.duration.leavingScreen}),...a&&{width:`calc(100% - ${C}px)`,marginLeft:`${C}px`,transition:i.transitions.create(["margin","width"],{easing:i.transitions.easing.easeOut,duration:i.transitions.duration.enteringScreen})}})),V=w("div")(({theme:i})=>({display:"flex",alignItems:"center",padding:i.spacing(0,1),...i.mixins.toolbar,justifyContent:"flex-end"}));function be(){const i=E(),[a,m]=y.useState(!1),x=()=>{m(!0)},n=()=>{m(!1)};return t(f,{sx:{display:"flex"},children:[e(q,{}),e(ve,{position:"fixed",open:a,children:t(v,{children:[e(D,{color:"inherit","aria-label":"open drawer",onClick:x,edge:"start",sx:{mr:2,...a&&{display:"none"}},children:e(N,{})}),e(r,{variant:"h6",noWrap:!0,component:"div",children:"Persistent drawer"})]})}),t(L,{sx:{width:C,flexShrink:0,"& .MuiDrawer-paper":{width:C,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:a,children:[e(V,{children:e(D,{onClick:n,children:i.direction==="ltr"?e(F,{}):e(H,{})})}),e(b,{}),e(p,{children:["Inbox","Starred","Send email","Drafts"].map((s,o)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:o%2===0?e(h,{}):e(g,{})}),e(c,{primary:s})]})},s))}),e(b,{}),e(p,{children:["All mail","Trash","Spam"].map((s,o)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:o%2===0?e(h,{}):e(g,{})}),e(c,{primary:s})]})},s))})]}),t(fe,{open:a,children:[e(V,{}),e(r,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."}),e(r,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."})]})]})}const xe=`import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: \`-\${drawerWidth}px\`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: \`calc(100% - \${drawerWidth}px)\`,
        marginLeft: \`\${drawerWidth}px\`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }} variant="persistent" anchor="left" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (<ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (<ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>);
}
`,M=240,we=w("main",{shouldForwardProp:i=>i!=="open"})(({theme:i,open:a})=>({flexGrow:1,padding:i.spacing(3),transition:i.transitions.create("margin",{easing:i.transitions.easing.sharp,duration:i.transitions.duration.leavingScreen}),marginRight:-M,...a&&{transition:i.transitions.create("margin",{easing:i.transitions.easing.easeOut,duration:i.transitions.duration.enteringScreen}),marginRight:0},position:"relative"})),Ie=w(B,{shouldForwardProp:i=>i!=="open"})(({theme:i,open:a})=>({transition:i.transitions.create(["margin","width"],{easing:i.transitions.easing.sharp,duration:i.transitions.duration.leavingScreen}),...a&&{width:`calc(100% - ${M}px)`,transition:i.transitions.create(["margin","width"],{easing:i.transitions.easing.easeOut,duration:i.transitions.duration.enteringScreen}),marginRight:M}})),_=w("div")(({theme:i})=>({display:"flex",alignItems:"center",padding:i.spacing(0,1),...i.mixins.toolbar,justifyContent:"flex-start"}));function ye(){const i=E(),[a,m]=y.useState(!1),x=()=>{m(!0)},n=()=>{m(!1)};return t(f,{sx:{display:"flex"},children:[e(q,{}),e(Ie,{position:"fixed",open:a,children:t(v,{children:[e(r,{variant:"h6",noWrap:!0,sx:{flexGrow:1},component:"div",children:"Persistent drawer"}),e(D,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:x,sx:{...a&&{display:"none"}},children:e(N,{})})]})}),t(we,{open:a,children:[e(_,{}),e(r,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."}),e(r,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."})]}),t(L,{sx:{width:M,flexShrink:0,"& .MuiDrawer-paper":{width:M}},variant:"persistent",anchor:"right",open:a,children:[e(_,{children:e(D,{onClick:n,children:i.direction==="rtl"?e(F,{}):e(H,{})})}),e(b,{}),e(p,{children:["Inbox","Starred","Send email","Drafts"].map((s,o)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:o%2===0?e(h,{}):e(g,{})}),e(c,{primary:s})]})},s))}),e(b,{}),e(p,{children:["All mail","Trash","Spam"].map((s,o)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:o%2===0?e(h,{}):e(g,{})}),e(c,{primary:s})]})},s))})]})]})}const Le=`import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: 'relative',
}));
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: \`calc(100% - \${drawerWidth}px)\`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));
export default function PersistentDrawerRight() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Persistent drawer
          </Typography>
          <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen} sx={{ ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
      <Drawer sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
            },
        }} variant="persistent" anchor="right" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (<ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (<ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>))}
        </List>
      </Drawer>
    </Box>);
}
`,A=240,K=i=>({width:A,transition:i.transitions.create("width",{easing:i.transitions.easing.sharp,duration:i.transitions.duration.enteringScreen}),overflowX:"hidden"}),Y=i=>({transition:i.transitions.create("width",{easing:i.transitions.easing.sharp,duration:i.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${i.spacing(7)} + 1px)`,[i.breakpoints.up("sm")]:{width:`calc(${i.spacing(8)} + 1px)`}}),X=w("div")(({theme:i})=>({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:i.spacing(0,1),...i.mixins.toolbar})),qe=w(B,{shouldForwardProp:i=>i!=="open"})(({theme:i,open:a})=>({zIndex:i.zIndex.drawer+1,transition:i.transitions.create(["width","margin"],{easing:i.transitions.easing.sharp,duration:i.transitions.duration.leavingScreen}),...a&&{marginLeft:A,width:`calc(100% - ${A}px)`,transition:i.transitions.create(["width","margin"],{easing:i.transitions.easing.sharp,duration:i.transitions.duration.enteringScreen})}})),De=w(L,{shouldForwardProp:i=>i!=="open"})(({theme:i,open:a})=>({width:A,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...a&&{...K(i),"& .MuiDrawer-paper":K(i)},...!a&&{...Y(i),"& .MuiDrawer-paper":Y(i)}}));function Be(){const i=E(),[a,m]=y.useState(!1),x=()=>{m(!0)},n=()=>{m(!1)};return t(f,{sx:{display:"flex"},children:[e(q,{}),e(qe,{position:"fixed",open:a,children:t(v,{children:[e(D,{color:"inherit","aria-label":"open drawer",onClick:x,edge:"start",sx:{marginRight:5,...a&&{display:"none"}},children:e(N,{})}),e(r,{variant:"h6",noWrap:!0,component:"div",children:"Mini variant drawer"})]})}),t(De,{variant:"permanent",open:a,children:[e(X,{children:e(D,{onClick:n,children:i.direction==="rtl"?e(H,{}):e(F,{})})}),e(b,{}),e(p,{children:["Inbox","Starred","Send email","Drafts"].map((s,o)=>e(l,{disablePadding:!0,sx:{display:"block"},children:t(u,{sx:{minHeight:48,justifyContent:a?"initial":"center",px:2.5},children:[e(d,{sx:{minWidth:0,mr:a?3:"auto",justifyContent:"center"},children:o%2===0?e(h,{}):e(g,{})}),e(c,{primary:s,sx:{opacity:a?1:0}})]})},s))}),e(b,{}),e(p,{children:["All mail","Trash","Spam"].map((s,o)=>e(l,{disablePadding:!0,sx:{display:"block"},children:t(u,{sx:{minHeight:48,justifyContent:a?"initial":"center",px:2.5},children:[e(d,{sx:{minWidth:0,mr:a?3:"auto",justifyContent:"center"},children:o%2===0?e(h,{}):e(g,{})}),e(c,{primary:s,sx:{opacity:a?1:0}})]})},s))})]}),t(f,{component:"main",sx:{flexGrow:1,p:3},children:[e(X,{}),e(r,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."}),e(r,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."})]})]})}const Te=`import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: \`calc(\${theme.spacing(7)} + 1px)\`,
    [theme.breakpoints.up('sm')]: {
        width: \`calc(\${theme.spacing(8)} + 1px)\`,
    },
});
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: \`calc(100% - \${drawerWidth}px)\`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));
export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
        }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (<ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
            }}>
                <ListItemIcon sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
            }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </ListItem>))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (<ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
            }}>
                <ListItemIcon sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
            }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </ListItem>))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>);
}
`,P=240;function Se(){return t(f,{sx:{display:"flex"},children:[e(q,{}),e(B,{position:"fixed",sx:{width:`calc(100% - ${P}px)`,ml:`${P}px`},children:e(v,{children:e(r,{variant:"h6",noWrap:!0,component:"div",children:"Permanent drawer"})})}),t(L,{sx:{width:P,flexShrink:0,"& .MuiDrawer-paper":{width:P,boxSizing:"border-box"}},variant:"permanent",anchor:"left",children:[e(v,{}),e(b,{}),e(p,{children:["Inbox","Starred","Send email","Drafts"].map((i,a)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:a%2===0?e(h,{}):e(g,{})}),e(c,{primary:i})]})},i))}),e(b,{}),e(p,{children:["All mail","Trash","Spam"].map((i,a)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:a%2===0?e(h,{}):e(g,{})}),e(c,{primary:i})]})},i))})]}),t(f,{component:"main",sx:{flexGrow:1,bgcolor:"background.default",p:3},children:[e(v,{}),e(r,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."}),e(r,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."})]})]})}const Ce=`import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const drawerWidth = 240;
export default function PermanentDrawerLeft() {
    return (<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: \`calc(100% - \${drawerWidth}px)\`, ml: \`\${drawerWidth}px\` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }} variant="permanent" anchor="left">
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (<ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (<ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>);
}
`,k=240;function Me(){return t(f,{sx:{display:"flex"},children:[e(q,{}),e(B,{position:"fixed",sx:{width:`calc(100% - ${k}px)`,mr:`${k}px`},children:e(v,{children:e(r,{variant:"h6",noWrap:!0,component:"div",children:"Permanent drawer"})})}),t(f,{component:"main",sx:{flexGrow:1,bgcolor:"background.default",p:3},children:[e(v,{}),e(r,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."}),e(r,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."})]}),t(L,{sx:{width:k,flexShrink:0,"& .MuiDrawer-paper":{width:k,boxSizing:"border-box"}},variant:"permanent",anchor:"right",children:[e(v,{}),e(b,{}),e(p,{children:["Inbox","Starred","Send email","Drafts"].map((i,a)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:a%2===0?e(h,{}):e(g,{})}),e(c,{primary:i})]})},i))}),e(b,{}),e(p,{children:["All mail","Trash","Spam"].map((i,a)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:a%2===0?e(h,{}):e(g,{})}),e(c,{primary:i})]})},i))})]})]})}const Pe=`import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const drawerWidth = 240;
export default function PermanentDrawerRight() {
    return (<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: \`calc(100% - \${drawerWidth}px)\`, mr: \`\${drawerWidth}px\` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
      <Drawer sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
        }} variant="permanent" anchor="right">
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (<ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (<ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>))}
        </List>
      </Drawer>
    </Box>);
}
`,J=240;function ke(){return t(f,{sx:{display:"flex"},children:[e(q,{}),e(B,{position:"fixed",sx:{zIndex:i=>i.zIndex.drawer+1},children:e(v,{children:e(r,{variant:"h6",noWrap:!0,component:"div",children:"Clipped drawer"})})}),t(L,{variant:"permanent",sx:{width:J,flexShrink:0,"& .MuiDrawer-paper":{width:J,boxSizing:"border-box"}},children:[e(v,{}),t(f,{sx:{overflow:"auto"},children:[e(p,{children:["Inbox","Starred","Send email","Drafts"].map((i,a)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:a%2===0?e(h,{}):e(g,{})}),e(c,{primary:i})]})},i))}),e(b,{}),e(p,{children:["All mail","Trash","Spam"].map((i,a)=>e(l,{disablePadding:!0,children:t(u,{children:[e(d,{children:a%2===0?e(h,{}):e(g,{})}),e(c,{primary:i})]})},i))})]})]}),t(f,{component:"main",sx:{flexGrow:1,p:3},children:[e(v,{}),e(r,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."}),e(r,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."})]})]})}const Re=`import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const drawerWidth = 240;
export default function ClippedDrawer() {
    return (<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" sx={{
            width: drawerWidth,
            flexShrink: 0,
            [\`& .MuiDrawer-paper\`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (<ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text}/>
                </ListItemButton>
              </ListItem>))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (<ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text}/>
                </ListItemButton>
              </ListItem>))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>);
}
`;function Ge(i){return t(re,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(ae,{}),e(O,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/drawers",target:"_blank",role:"button",size:"small",startIcon:e(te,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(r,{className:"text-32 my-16 font-700",component:"h1",children:"Drawer"}),e(r,{className:"description",children:'The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality such as switching accounts.'}),e(r,{className:"text-14 mb-32",component:"div",children:"A navigation drawer can either be permanently on-screen or controlled by a navigation menu icon."}),t(r,{className:"text-14 mb-32",component:"div",children:[e("a",{href:"https://m2.material.io/components/sheets-side",children:"Side sheets"})," are supplementary surfaces primarily used on tablet and desktop."]}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Temporary drawer"}),e(r,{className:"text-14 mb-32",component:"div",children:"Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected."}),t(r,{className:"text-14 mb-32",component:"div",children:["The Drawer can be cancelled by clicking the overlay or pressing the Esc key. It closes when an item is selected, handled by controlling the ",e("code",{children:"open"})," prop."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(I,{name:"TemporaryDrawer.js",className:"my-16",iframe:!1,component:se,raw:oe})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Swipeable"}),t(r,{className:"text-14 mb-32",component:"div",children:["You can make the drawer swipeable with the ",e("code",{children:"SwipeableDrawer"})," component."]}),t(r,{className:"text-14 mb-32",component:"div",children:["This component comes with a 2 kB gzipped payload overhead. Some low-end mobile devices won't be able to follow the fingers at 60 FPS. You can use the ",e("code",{children:"disableBackdropTransition"})," prop to help."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(I,{name:"SwipeableTemporaryDrawer.js",className:"my-16",iframe:!1,component:me,raw:le})}),e(r,{className:"text-14 mb-32",component:"div",children:"The following properties are used in this documentation website for optimal usability of the component:"}),t("ul",{className:"space-y-16",children:[e("li",{children:"iOS is hosted on high-end devices. The backdrop transition can be enabled without dropping frames. The performance will be good enough."}),e("li",{children:'iOS has a "swipe to go back" feature that interferes with the discovery feature, so discovery has to be disabled.'})]}),e(z,{component:"pre",className:"language-jsx",children:` 
const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />;
`}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Swipeable edge"}),t(r,{className:"text-14 mb-32",component:"div",children:["You can configure the ",e("code",{children:"SwipeableDrawer"})," to have a visible edge when closed."]}),e(r,{className:"text-14 mb-32",component:"div",children:'If you are on a desktop, you can toggle the drawer with the "OPEN" button. If you are on mobile, you can open the demo in CodeSandbox ("edit" icon) and swipe.'}),e(r,{className:"text-14 mb-32",component:"div",children:e(I,{name:"SwipeableEdgeDrawer.js",className:"my-16",iframe:!0,component:ce,raw:pe})}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keep mounted"}),t(r,{className:"text-14 mb-32",component:"div",children:["The Modal used internally by the Swipeable Drawer has the ",e("code",{children:"keepMounted"})," prop set by default. This means that the contents of the drawer are always present in the DOM."]}),t(r,{className:"text-14 mb-32",component:"div",children:["You can change this default behavior with the ",e("code",{children:"ModalProps"})," prop, but you may encounter issues with ",e("code",{children:"keepMounted: false"})," in React 18."]}),e(z,{component:"pre",className:"language-jsx",children:` 
<Drawer
  variant="temporary"
  ModalProps={{
    keepMounted: false,
  
/>
`}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Responsive drawer"}),t(r,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"temporary"})," variant to display a drawer for small screens and ",e("code",{children:"permanent"})," for a drawer for wider screens."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(I,{name:"ResponsiveDrawer.js",className:"my-16",iframe:!0,component:he,raw:ge})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Persistent drawer"}),e(r,{className:"text-14 mb-32",component:"div",children:"Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface elevation as the content. It is closed by default and opens by selecting the menu icon, and stays open until closed by the user. The state of the drawer is remembered from action to action and session to session."}),e(r,{className:"text-14 mb-32",component:"div",children:"When the drawer is outside of the page grid and opens, the drawer forces other content to change size and adapt to the smaller viewport."}),e(r,{className:"text-14 mb-32",component:"div",children:"Persistent navigation drawers are acceptable for all sizes larger than mobile. They are not recommended for apps with multiple levels of hierarchy that require using an up arrow for navigation."}),t(r,{className:"text-14 mb-32",component:"div",children:[e(I,{name:"PersistentDrawerLeft.js",className:"my-16",iframe:!0,component:be,raw:xe}),e(I,{name:"PersistentDrawerRight.js",className:"my-16",iframe:!0,component:ye,raw:Le})]}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Mini variant drawer"}),e(r,{className:"text-14 mb-32",component:"div",children:"In this variation, the persistent navigation drawer changes its width. Its resting state is as a mini-drawer at the same elevation as the content, clipped by the app bar. When expanded, it appears as the standard persistent navigation drawer."}),e(r,{className:"text-14 mb-32",component:"div",children:"The mini variant is recommended for apps sections that need quick selection access alongside content."}),e(r,{className:"text-14 mb-32",component:"div",children:e(I,{name:"MiniDrawer.js",className:"my-16",iframe:!0,component:Be,raw:Te})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Permanent drawer"}),e(r,{className:"text-14 mb-32",component:"div",children:"Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed."}),t(r,{className:"text-14 mb-32",component:"div",children:["Permanent navigation drawers are the ",e("strong",{children:"recommended default for desktop"}),"."]}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Full-height navigation"}),e(r,{className:"text-14 mb-32",component:"div",children:"Apps focused on information consumption that use a left-to-right hierarchy."}),t(r,{className:"text-14 mb-32",component:"div",children:[e(I,{name:"PermanentDrawerLeft.js",className:"my-16",iframe:!0,component:Se,raw:Ce}),e(I,{name:"PermanentDrawerRight.js",className:"my-16",iframe:!0,component:Me,raw:Pe})]}),e(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Clipped under the app bar"}),e(r,{className:"text-14 mb-32",component:"div",children:"Apps focused on productivity that require balance across the screen."}),e(r,{className:"text-14 mb-32",component:"div",children:e(I,{name:"ClippedDrawer.js",className:"my-16",iframe:!0,component:ke,raw:Re})})]})}export{Ge as default};
