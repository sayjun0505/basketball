import{ay as I,az as f,ag as L,d as t,j as e,e as d,g as m,b$ as c,i as u,h as r,D as y,H as k,r as h,L as P,ck as re,B as b,s as J,dK as ne,aE as B,bD as V,T as i,z as T,l as q,bn as oe,dM as me,P as se,A as ce,ec as le,F as de,C as ue,dz as pe,bx as he}from"./index-3voNJrtd.js";import{F as p}from"./FuseExample-L3LbvVcu.js";import{D as Ie}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{d as A}from"./Drafts-1MsRI9Zs.js";import{d as fe}from"./MoveToInbox-seVHVOXE.js";import{d as Le}from"./Send-TH5Vlb4h.js";import{d as xe}from"./ExpandMore-XrZvfZqR.js";import{d as be}from"./StarBorder-KN8abLkG.js";import{L as g}from"./ListItemAvatar-AiJLZAPd.js";import{d as C}from"./Folder-iXfA6xdA.js";import{d as ge}from"./Delete-iFJrx99s.js";import{G as v}from"./Grid-tp5bxruy.js";import{d as ve}from"./Star-TMTxqwJ8.js";import{F as ye}from"./index.esm-rA9Ky7E3.js";import{d as ke}from"./ArrowRight-2FgtN1jr.js";import{d as we}from"./Home-B7Mf2ob4.js";import{d as Se}from"./Settings-z2e6Dv4E.js";import"./DocumentationNavigation-us8sikvN.js";import"./memoize-one.esm-hqe5SRxC.js";var R={},Be=f;Object.defineProperty(R,"__esModule",{value:!0});var _=R.default=void 0,Te=Be(I()),Ce=L;_=R.default=(0,Te.default)((0,Ce.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19z"}),"Inbox");function Pe(){return t(k,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[e("nav",{"aria-label":"main mailbox folders",children:t(d,{children:[e(m,{disablePadding:!0,children:t(c,{children:[e(u,{children:e(_,{})}),e(r,{primary:"Inbox"})]})}),e(m,{disablePadding:!0,children:t(c,{children:[e(u,{children:e(A,{})}),e(r,{primary:"Drafts"})]})})]})}),e(y,{}),e("nav",{"aria-label":"secondary mailbox folders",children:t(d,{children:[e(m,{disablePadding:!0,children:e(c,{children:e(r,{primary:"Trash"})})}),e(m,{disablePadding:!0,children:e(c,{component:"a",href:"#simple-list",children:e(r,{primary:"Spam"})})})]})})]})}const Ae=`import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
export default function BasicList() {
    return (<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts"/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam"/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>);
}
`;var $={},Re=f;Object.defineProperty($,"__esModule",{value:!0});var K=$.default=void 0,_e=Re(I()),$e=L;K=$.default=(0,_e.default)((0,$e.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");function De(){const[a,s]=h.useState(!0);return t(d,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:e(P,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),children:[t(c,{children:[e(u,{children:e(Le,{})}),e(r,{primary:"Sent mail"})]}),t(c,{children:[e(u,{children:e(A,{})}),e(r,{primary:"Drafts"})]}),t(c,{onClick:()=>{s(!a)},children:[e(u,{children:e(fe,{})}),e(r,{primary:"Inbox"}),a?e(K,{}):e(xe,{})]}),e(re,{in:a,timeout:"auto",unmountOnExit:!0,children:e(d,{component:"div",disablePadding:!0,children:t(c,{sx:{pl:4},children:[e(u,{children:e(be,{})}),e(r,{primary:"Starred"})]})})})]})}const Ne=`import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
export default function NestedList() {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    return (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader" subheader={<ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>}>
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail"/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts"/>
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox"/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred"/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>);
}
`;var D={},je=f;Object.defineProperty(D,"__esModule",{value:!0});var X=D.default=void 0,We=je(I()),ze=L;X=D.default=(0,We.default)((0,ze.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image");var N={},Fe=f;Object.defineProperty(N,"__esModule",{value:!0});var Y=N.default=void 0,Me=Fe(I()),Oe=L;Y=N.default=(0,Me.default)((0,Oe.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"}),"Work");var j={},He=f;Object.defineProperty(j,"__esModule",{value:!0});var Q=j.default=void 0,Ge=He(I()),Ee=L;Q=j.default=(0,Ge.default)((0,Ee.jsx)("path",{d:"m13.127 14.56 1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73 2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88M5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98m.02-.02-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3"}),"BeachAccess");function Ve(){return t(d,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[t(m,{children:[e(g,{children:e(b,{children:e(X,{})})}),e(r,{primary:"Photos",secondary:"Jan 9, 2014"})]}),t(m,{children:[e(g,{children:e(b,{children:e(Y,{})})}),e(r,{primary:"Work",secondary:"Jan 7, 2014"})]}),t(m,{children:[e(g,{children:e(b,{children:e(Q,{})})}),e(r,{primary:"Vacation",secondary:"July 20, 2014"})]})]})}const qe=`import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
export default function FolderList() {
    return (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014"/>
      </ListItem>
    </List>);
}
`;function w(a){return[0,1,2].map(s=>h.cloneElement(a,{key:s}))}const S=J("div")(({theme:a})=>({backgroundColor:a.palette.background.paper}));function Je(){const[a,s]=h.useState(!1),[o,n]=h.useState(!1);return t(k,{sx:{flexGrow:1,maxWidth:752},children:[t(ne,{row:!0,children:[e(V,{control:e(B,{checked:a,onChange:l=>s(l.target.checked)}),label:"Enable dense"}),e(V,{control:e(B,{checked:o,onChange:l=>n(l.target.checked)}),label:"Enable secondary text"})]}),t(v,{container:!0,spacing:2,children:[t(v,{item:!0,xs:12,md:6,children:[e(i,{sx:{mt:4,mb:2},variant:"h6",component:"div",children:"Text only"}),e(S,{children:e(d,{dense:a,children:w(e(m,{children:e(r,{primary:"Single-line item",secondary:o?"Secondary text":null})}))})})]}),t(v,{item:!0,xs:12,md:6,children:[e(i,{sx:{mt:4,mb:2},variant:"h6",component:"div",children:"Icon with text"}),e(S,{children:e(d,{dense:a,children:w(t(m,{children:[e(u,{children:e(C,{})}),e(r,{primary:"Single-line item",secondary:o?"Secondary text":null})]}))})})]})]}),t(v,{container:!0,spacing:2,children:[t(v,{item:!0,xs:12,md:6,children:[e(i,{sx:{mt:4,mb:2},variant:"h6",component:"div",children:"Avatar with text"}),e(S,{children:e(d,{dense:a,children:w(t(m,{children:[e(g,{children:e(b,{children:e(C,{})})}),e(r,{primary:"Single-line item",secondary:o?"Secondary text":null})]}))})})]}),t(v,{item:!0,xs:12,md:6,children:[e(i,{sx:{mt:4,mb:2},variant:"h6",component:"div",children:"Avatar with text and icon"}),e(S,{children:e(d,{dense:a,children:w(t(m,{secondaryAction:e(T,{edge:"end","aria-label":"delete",children:e(ge,{})}),children:[e(g,{children:e(b,{children:e(C,{})})}),e(r,{primary:"Single-line item",secondary:o?"Secondary text":null})]}))})})]})]})]})}const Ke=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
function generate(element) {
    return [0, 1, 2].map((value) => React.cloneElement(element, {
        key: value,
    }));
}
const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));
export default function InteractiveList() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (<Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <FormGroup row>
        <FormControlLabel control={<Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)}/>} label="Enable dense"/>
        <FormControlLabel control={<Checkbox checked={secondary} onChange={(event) => setSecondary(event.target.checked)}/>} label="Enable secondary text"/>
      </FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Text only
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(<ListItem>
                  <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null}/>
                </ListItem>)}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(<ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null}/>
                </ListItem>)}
            </List>
          </Demo>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(<ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null}/>
                </ListItem>)}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(<ListItem secondaryAction={<IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null}/>
                </ListItem>)}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>);
}
`;function Xe(){const[a,s]=h.useState(1),o=(n,l)=>{s(l)};return t(k,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[t(d,{component:"nav","aria-label":"main mailbox folders",children:[t(c,{selected:a===0,onClick:n=>o(n,0),children:[e(u,{children:e(_,{})}),e(r,{primary:"Inbox"})]}),t(c,{selected:a===1,onClick:n=>o(n,1),children:[e(u,{children:e(A,{})}),e(r,{primary:"Drafts"})]})]}),e(y,{}),t(d,{component:"nav","aria-label":"secondary mailbox folder",children:[e(c,{selected:a===2,onClick:n=>o(n,2),children:e(r,{primary:"Trash"})}),e(c,{selected:a===3,onClick:n=>o(n,3),children:e(r,{primary:"Spam"})})]})]})}const Ye=`import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
export default function SelectedListItem() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox"/>
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts"/>
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
          <ListItemText primary="Trash"/>
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
          <ListItemText primary="Spam"/>
        </ListItemButton>
      </List>
    </Box>);
}
`;function Qe(){return t(d,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[t(m,{alignItems:"flex-start",children:[e(g,{children:e(b,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"})}),e(r,{primary:"Brunch this weekend?",secondary:t(h.Fragment,{children:[e(i,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"Ali Connors"})," — I'll be in your neighborhood doing errands this…"]})})]}),e(y,{variant:"inset",component:"li"}),t(m,{alignItems:"flex-start",children:[e(g,{children:e(b,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"})}),e(r,{primary:"Summer BBQ",secondary:t(h.Fragment,{children:[e(i,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"to Scott, Alex, Jennifer"})," — Wish I could come, but I'm out of town this…"]})})]}),e(y,{variant:"inset",component:"li"}),t(m,{alignItems:"flex-start",children:[e(g,{children:e(b,{alt:"Cindy Baker",src:"/material-ui-static/images/avatar/3.jpg"})}),e(r,{primary:"Oui Oui",secondary:t(h.Fragment,{children:[e(i,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"Sandra Adams"})," — Do you have Paris recommendations? Have you ever…"]})})]})]})}const Ue=`import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
export default function AlignItemsList() {
    return (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Brunch this weekend?" secondary={<React.Fragment>
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>}/>
      </ListItem>
      <Divider variant="inset" component="li"/>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Summer BBQ" secondary={<React.Fragment>
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>}/>
      </ListItem>
      <Divider variant="inset" component="li"/>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg"/>
        </ListItemAvatar>
        <ListItemText primary="Oui Oui" secondary={<React.Fragment>
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>}/>
      </ListItem>
    </List>);
}
`;var W={},Ze=f;Object.defineProperty(W,"__esModule",{value:!0});var z=W.default=void 0,et=Ze(I()),tt=L;z=W.default=(0,et.default)((0,tt.jsx)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"}),"Comment");function it(){const[a,s]=h.useState([0]),o=n=>()=>{const l=a.indexOf(n),x=[...a];l===-1?x.push(n):x.splice(l,1),s(x)};return e(d,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[0,1,2,3].map(n=>{const l=`checkbox-list-label-${n}`;return e(m,{secondaryAction:e(T,{edge:"end","aria-label":"comments",children:e(z,{})}),disablePadding:!0,children:t(c,{role:void 0,onClick:o(n),dense:!0,children:[e(u,{children:e(B,{edge:"start",checked:a.indexOf(n)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":l}})}),e(r,{id:l,primary:`Line item ${n+1}`})]})},n)})})}const at=`import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
export default function CheckboxList() {
    const [checked, setChecked] = React.useState([0]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    return (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
            const labelId = \`checkbox-list-label-\${value}\`;
            return (<ListItem key={value} secondaryAction={<IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>} disablePadding>
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox edge="start" checked={checked.indexOf(value) !== -1} tabIndex={-1} disableRipple inputProps={{ 'aria-labelledby': labelId }}/>
              </ListItemIcon>
              <ListItemText id={labelId} primary={\`Line item \${value + 1}\`}/>
            </ListItemButton>
          </ListItem>);
        })}
    </List>);
}
`;function rt(){const[a,s]=h.useState([1]),o=n=>()=>{const l=a.indexOf(n),x=[...a];l===-1?x.push(n):x.splice(l,1),s(x)};return e(d,{dense:!0,sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[0,1,2,3].map(n=>{const l=`checkbox-list-secondary-label-${n}`;return e(m,{secondaryAction:e(B,{edge:"end",onChange:o(n),checked:a.indexOf(n)!==-1,inputProps:{"aria-labelledby":l}}),disablePadding:!0,children:t(c,{children:[e(g,{children:e(b,{alt:`Avatar n°${n+1}`,src:`/material-ui-static/images/avatar/${n+1}.jpg`})}),e(r,{id:l,primary:`Line item ${n+1}`})]})},n)})})}const nt=`import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
export default function CheckboxListSecondary() {
    const [checked, setChecked] = React.useState([1]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    return (<List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
            const labelId = \`checkbox-list-secondary-label-\${value}\`;
            return (<ListItem key={value} secondaryAction={<Checkbox edge="end" onChange={handleToggle(value)} checked={checked.indexOf(value) !== -1} inputProps={{ 'aria-labelledby': labelId }}/>} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={\`Avatar n°\${value + 1}\`} src={\`/material-ui-static/images/avatar/\${value + 1}.jpg\`}/>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={\`Line item \${value + 1}\`}/>
            </ListItemButton>
          </ListItem>);
        })}
    </List>);
}
`;var F={},ot=f;Object.defineProperty(F,"__esModule",{value:!0});var U=F.default=void 0,mt=ot(I()),st=L;U=F.default=(0,mt.default)((0,st.jsx)("path",{d:"m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9m8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0m-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13"}),"Wifi");var M={},ct=f;Object.defineProperty(M,"__esModule",{value:!0});var Z=M.default=void 0,lt=ct(I()),dt=L;Z=M.default=(0,lt.default)((0,dt.jsx)("path",{d:"M17.71 7.71 12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29zM13 5.83l1.88 1.88L13 9.59zm1.88 10.46L13 18.17v-3.76z"}),"Bluetooth");function ut(){const[a,s]=h.useState(["wifi"]),o=n=>()=>{const l=a.indexOf(n),x=[...a];l===-1?x.push(n):x.splice(l,1),s(x)};return t(d,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},subheader:e(P,{children:"Settings"}),children:[t(m,{children:[e(u,{children:e(U,{})}),e(r,{id:"switch-list-label-wifi",primary:"Wi-Fi"}),e(q,{edge:"end",onChange:o("wifi"),checked:a.indexOf("wifi")!==-1,inputProps:{"aria-labelledby":"switch-list-label-wifi"}})]}),t(m,{children:[e(u,{children:e(Z,{})}),e(r,{id:"switch-list-label-bluetooth",primary:"Bluetooth"}),e(q,{edge:"end",onChange:o("bluetooth"),checked:a.indexOf("bluetooth")!==-1,inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})]})]})}const pt=`import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
export default function SwitchListSecondary() {
    const [checked, setChecked] = React.useState(['wifi']);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    return (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} subheader={<ListSubheader>Settings</ListSubheader>}>
      <ListItem>
        <ListItemIcon>
          <WifiIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary="Wi-Fi"/>
        <Switch edge="end" onChange={handleToggle('wifi')} checked={checked.indexOf('wifi') !== -1} inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
        }}/>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BluetoothIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth"/>
        <Switch edge="end" onChange={handleToggle('bluetooth')} checked={checked.indexOf('bluetooth') !== -1} inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth',
        }}/>
      </ListItem>
    </List>);
}
`;function ht(){return e(d,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:300,"& ul":{padding:0}},subheader:e("li",{}),children:[0,1,2,3,4].map(a=>e("li",{children:t("ul",{children:[e(P,{children:`I'm sticky ${a}`}),[0,1,2].map(s=>e(m,{children:e(r,{primary:`Item ${s}`})},`item-${a}-${s}`))]})},`section-${a}`))})}const It=`import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
export default function PinnedSubheaderList() {
    return (<List sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
        }} subheader={<li />}>
      {[0, 1, 2, 3, 4].map((sectionId) => (<li key={\`section-\${sectionId}\`}>
          <ul>
            <ListSubheader>{\`I'm sticky \${sectionId}\`}</ListSubheader>
            {[0, 1, 2].map((item) => (<ListItem key={\`item-\${sectionId}-\${item}\`}>
                <ListItemText primary={\`Item \${item}\`}/>
              </ListItem>))}
          </ul>
        </li>))}
    </List>);
}
`;function ft(){return t(d,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},"aria-label":"contacts",children:[e(m,{disablePadding:!0,children:t(c,{children:[e(u,{children:e(ve,{})}),e(r,{primary:"Chelsea Otakan"})]})}),e(m,{disablePadding:!0,children:e(c,{children:e(r,{inset:!0,primary:"Eric Hoffman"})})})]})}const Lt=`import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
export default function InsetList() {
    return (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts">
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Chelsea Otakan"/>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="Eric Hoffman"/>
        </ListItemButton>
      </ListItem>
    </List>);
}
`;function xt(){return e(d,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[1,2,3].map(a=>e(m,{disableGutters:!0,secondaryAction:e(T,{"aria-label":"comment",children:e(z,{})}),children:e(r,{primary:`Line item ${a}`})},a))})}const bt=`import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
export default function GutterlessList() {
    return (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[1, 2, 3].map((value) => (<ListItem key={value} disableGutters secondaryAction={<IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>}>
          <ListItemText primary={\`Line item \${value}\`}/>
        </ListItem>))}
    </List>);
}
`;function gt(a){const{index:s,style:o}=a;return e(m,{style:o,component:"div",disablePadding:!0,children:e(c,{children:e(r,{primary:`Item ${s+1}`})})},s)}function vt(){return e(k,{sx:{width:"100%",height:400,maxWidth:360,bgcolor:"background.paper"},children:e(ye,{height:400,width:360,itemSize:46,itemCount:200,overscanCount:5,children:gt})})}const yt=`import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
function renderRow(props) {
    const { index, style } = props;
    return (<ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={\`Item \${index + 1}\`}/>
      </ListItemButton>
    </ListItem>);
}
export default function VirtualizedList() {
    return (<Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
      <FixedSizeList height={400} width={360} itemSize={46} itemCount={200} overscanCount={5}>
        {renderRow}
      </FixedSizeList>
    </Box>);
}
`;var O={},kt=f;Object.defineProperty(O,"__esModule",{value:!0});var ee=O.default=void 0,wt=kt(I()),St=L;ee=O.default=(0,wt.default)((0,St.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"People");var H={},Bt=f;Object.defineProperty(H,"__esModule",{value:!0});var te=H.default=void 0,Tt=Bt(I()),Ct=L;te=H.default=(0,Tt.default)((0,Ct.jsx)("path",{d:"M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7 15l4.5-6 3.5 4.51 2.5-3.01L21 15z"}),"PermMedia");var G={},Pt=f;Object.defineProperty(G,"__esModule",{value:!0});var ie=G.default=void 0,At=Pt(I()),Rt=L;ie=G.default=(0,At.default)((0,Rt.jsx)("path",{d:"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"}),"Dns");var E={},_t=f;Object.defineProperty(E,"__esModule",{value:!0});var ae=E.default=void 0,$t=_t(I()),Dt=L;ae=E.default=(0,$t.default)((0,Dt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39"}),"Public");const Nt=[{icon:e(ee,{}),label:"Authentication"},{icon:e(ie,{}),label:"Database"},{icon:e(te,{}),label:"Storage"},{icon:e(ae,{}),label:"Hosting"}],jt=J(d)({"& .MuiListItemButton-root":{paddingLeft:24,paddingRight:24},"& .MuiListItemIcon-root":{minWidth:0,marginRight:16},"& .MuiSvgIcon-root":{fontSize:20}});function Wt(){const[a,s]=h.useState(!0);return e(k,{sx:{display:"flex"},children:e(oe,{theme:me({components:{MuiListItemButton:{defaultProps:{disableTouchRipple:!0}}},palette:{mode:"dark",primary:{main:"rgb(102, 157, 246)"},background:{paper:"rgb(5, 30, 52)"}}}),children:e(se,{elevation:0,sx:{maxWidth:256},children:t(jt,{component:"nav",disablePadding:!0,children:[t(c,{component:"a",href:"#customized-list",children:[e(u,{sx:{fontSize:20},children:"🔥"}),e(r,{sx:{my:0},primary:"Firebash",primaryTypographyProps:{fontSize:20,fontWeight:"medium",letterSpacing:0}})]}),e(y,{}),t(m,{component:"div",disablePadding:!0,children:[t(c,{sx:{height:56},children:[e(u,{children:e(we,{color:"primary"})}),e(r,{primary:"Project Overview",primaryTypographyProps:{color:"primary",fontWeight:"medium",variant:"body2"}})]}),e(ce,{title:"Project Settings",children:t(T,{size:"large",sx:{"& svg":{color:"rgba(255,255,255,0.8)",transition:"0.2s",transform:"translateX(0) rotate(0)"},"&:hover, &:focus":{bgcolor:"unset","& svg:first-of-type":{transform:"translateX(-4px) rotate(-20deg)"},"& svg:last-of-type":{right:0,opacity:1}},"&::after":{content:'""',position:"absolute",height:"80%",display:"block",left:0,width:"1px",bgcolor:"divider"}},children:[e(Se,{}),e(ke,{sx:{position:"absolute",right:4,opacity:0}})]})})]}),e(y,{}),t(k,{sx:{bgcolor:a?"rgba(71, 98, 130, 0.2)":null,pb:a?2:0},children:[t(c,{alignItems:"flex-start",onClick:()=>s(!a),sx:{px:3,pt:2.5,pb:a?0:2.5,"&:hover, &:focus":{"& svg":{opacity:a?1:0}}},children:[e(r,{primary:"Build",primaryTypographyProps:{fontSize:15,fontWeight:"medium",lineHeight:"20px",mb:"2px"},secondary:"Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning",secondaryTypographyProps:{noWrap:!0,fontSize:12,lineHeight:"16px",color:a?"rgba(0,0,0,0)":"rgba(255,255,255,0.5)"},sx:{my:0}}),e(le,{sx:{mr:-1,opacity:0,transform:a?"rotate(-180deg)":"rotate(0)",transition:"0.2s"}})]}),a&&Nt.map(o=>t(c,{sx:{py:0,minHeight:32,color:"rgba(255,255,255,.8)"},children:[e(u,{sx:{color:"inherit"},children:o.icon}),e(r,{primary:o.label,primaryTypographyProps:{fontSize:14,fontWeight:"medium"}})]},o.label))]})]})})})})}const zt=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
const data = [
    { icon: <People />, label: 'Authentication' },
    { icon: <Dns />, label: 'Database' },
    { icon: <PermMedia />, label: 'Storage' },
    { icon: <Public />, label: 'Hosting' },
];
const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});
export default function CustomizedList() {
    const [open, setOpen] = React.useState(true);
    return (<Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={createTheme({
            components: {
                MuiListItemButton: {
                    defaultProps: {
                        disableTouchRipple: true,
                    },
                },
            },
            palette: {
                mode: 'dark',
                primary: { main: 'rgb(102, 157, 246)' },
                background: { paper: 'rgb(5, 30, 52)' },
            },
        })}>
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
              <ListItemText sx={{ my: 0 }} primary="Firebash" primaryTypographyProps={{
            fontSize: 20,
            fontWeight: 'medium',
            letterSpacing: 0,
        }}/>
            </ListItemButton>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <Home color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Project Overview" primaryTypographyProps={{
            color: 'primary',
            fontWeight: 'medium',
            variant: 'body2',
        }}/>
              </ListItemButton>
              <Tooltip title="Project Settings">
                <IconButton size="large" sx={{
            '& svg': {
                color: 'rgba(255,255,255,0.8)',
                transition: '0.2s',
                transform: 'translateX(0) rotate(0)',
            },
            '&:hover, &:focus': {
                bgcolor: 'unset',
                '& svg:first-of-type': {
                    transform: 'translateX(-4px) rotate(-20deg)',
                },
                '& svg:last-of-type': {
                    right: 0,
                    opacity: 1,
                },
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                height: '80%',
                display: 'block',
                left: 0,
                width: '1px',
                bgcolor: 'divider',
            },
        }}>
                  <Settings />
                  <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }}/>
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <Box sx={{
            bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
            pb: open ? 2 : 0,
        }}>
              <ListItemButton alignItems="flex-start" onClick={() => setOpen(!open)} sx={{
            px: 3,
            pt: 2.5,
            pb: open ? 0 : 2.5,
            '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
        }}>
                <ListItemText primary="Build" primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium',
            lineHeight: '20px',
            mb: '2px',
        }} secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning" secondaryTypographyProps={{
            noWrap: true,
            fontSize: 12,
            lineHeight: '16px',
            color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
        }} sx={{ my: 0 }}/>
                <KeyboardArrowDown sx={{
            mr: -1,
            opacity: 0,
            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '0.2s',
        }}/>
              </ListItemButton>
              {open &&
            data.map((item) => (<ListItemButton key={item.label} sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}>
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}/>
                  </ListItemButton>))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>);
}
`;function ri(a){return t(he,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(Ie,{}),e(ue,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/lists",target:"_blank",role:"button",size:"small",startIcon:e(de,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(i,{className:"text-32 my-16 font-700",component:"h1",children:"Lists"}),e(i,{className:"description",children:"Lists are continuous, vertical indexes of text or images."}),e(i,{className:"text-14 mb-32",component:"div",children:"Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text."}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic List"}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"BasicList.js",className:"my-16",iframe:!1,component:Pe,raw:Ae})}),e(i,{className:"text-14 mb-32",component:"div",children:"The last item of the previous demo shows how you can render a link:"}),e(pe,{component:"pre",className:"language-jsx",children:` 
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemButton>
`}),t(i,{className:"text-14 mb-32",component:"div",children:["You can find a ",e("a",{href:"/material-ui/guides/routing/#list",children:"demo with React Router following this section"})," of the documentation."]}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Nested List"}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"NestedList.js",className:"my-16",iframe:!1,component:De,raw:Ne})}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Folder List"}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"FolderList.js",className:"my-16",iframe:!1,component:Ve,raw:qe})}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Interactive"}),e(i,{className:"text-14 mb-32",component:"div",children:"Below is an interactive demo that lets you explore the visual results of the different settings:"}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"InteractiveList.js",className:"my-16",iframe:!1,component:Je,raw:Ke})}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Selected ListItem"}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"SelectedListItem.js",className:"my-16",iframe:!1,component:Xe,raw:Ye})}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Align list items"}),t(i,{className:"text-14 mb-32",component:"div",children:["When displaying three lines or more, the avatar is not aligned at the top. You should set the ",e("code",{children:'alignItems="flex-start"'})," prop to align the avatar at the top, following the Material Design guidelines:"]}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"AlignItemsList.js",className:"my-16",iframe:!1,component:Qe,raw:Ue})}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"List Controls"}),e(i,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Checkbox"}),e(i,{className:"text-14 mb-32",component:"div",children:"A checkbox can either be a primary action or a secondary action."}),e(i,{className:"text-14 mb-32",component:"div",children:"The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target."}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"CheckboxList.js",className:"my-16",iframe:!1,component:it,raw:at})}),e(i,{className:"text-14 mb-32",component:"div",children:"The checkbox is the secondary action for the list item and a separate target."}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"CheckboxListSecondary.js",className:"my-16",iframe:!1,component:rt,raw:nt})}),e(i,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Switch"}),e(i,{className:"text-14 mb-32",component:"div",children:"The switch is the secondary action and a separate target."}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"SwitchListSecondary.js",className:"my-16",iframe:!1,component:ut,raw:pt})}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Sticky subheader"}),e(i,{className:"text-14 mb-32",component:"div",children:"Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader. This feature relies on CSS sticky positioning. (⚠️ no IE 11 support)"}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"PinnedSubheaderList.js",className:"my-16",iframe:!1,component:ht,raw:It})}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Inset List Item"}),t(i,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"inset"})," prop enables a list item that does not have a leading icon or avatar to align correctly with items that do."]}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"InsetList.js",className:"my-16",iframe:!1,component:ft,raw:Lt})}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Gutterless list"}),t(i,{className:"text-14 mb-32",component:"div",children:["When rendering a list within a component that defines its own gutters, ",e("code",{children:"ListItem"})," gutters can be disabled with ",e("code",{children:"disableGutters"}),"."]}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"GutterlessList.js",className:"my-16",iframe:!1,component:xt,raw:bt})}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Virtualized List"}),t(i,{className:"text-14 mb-32",component:"div",children:["In the following example, we demonstrate how to use ",e("a",{href:"https://github.com/bvaughn/react-window",children:"react-window"})," with the ",e("code",{children:"List"})," component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues."]}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"VirtualizedList.js",className:"my-16",iframe:!1,component:vt,raw:yt})}),t(i,{className:"text-14 mb-32",component:"div",children:["The use of ",e("a",{href:"https://github.com/bvaughn/react-window",children:"react-window"})," when possible is encouraged. If this library doesn't cover your use case, you should consider using alternatives like ",e("a",{href:"https://github.com/petyosi/react-virtuoso",children:"react-virtuoso"}),"."]}),e(i,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),t(i,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(i,{className:"text-14 mb-32",component:"div",children:e(p,{name:"CustomizedList.js",className:"my-16",iframe:!1,component:Wt,raw:zt})})]})}export{ri as default};
