import{d as i,H as d,cW as p,j as e,T as t,D as r,bo as s,bA as h,h as a,g as n,e as u,s as g,F as b,C as y,dz as l,bx as D}from"./index-3voNJrtd.js";import{F as m}from"./FuseExample-L3LbvVcu.js";import{D as I}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{d as v,a as x,b as f,c,e as L}from"./FormatItalic-fFdnPpp8.js";import"./DocumentationNavigation-us8sikvN.js";function w(){return i(h,{variant:"outlined",sx:{maxWidth:360},children:[i(d,{sx:{p:2},children:[i(p,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e(t,{gutterBottom:!0,variant:"h5",component:"div",children:"Toothbrush"}),e(t,{gutterBottom:!0,variant:"h6",component:"div",children:"$4.50"})]}),e(t,{color:"text.secondary",variant:"body2",children:"Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall."})]}),e(r,{light:!0}),i(d,{sx:{p:2},children:[e(t,{gutterBottom:!0,variant:"body2",children:"Select type"}),i(p,{direction:"row",spacing:1,children:[e(s,{color:"primary",label:"Soft",size:"small"}),e(s,{label:"Medium",size:"small"}),e(s,{label:"Hard",size:"small"})]})]})]})}const T=`import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
export default function IntroDivider() {
    return (<Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            Toothbrush
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            $4.50
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
          just down the hall.
        </Typography>
      </Box>
      <Divider light/>
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Soft" size="small"/>
          <Chip label="Medium" size="small"/>
          <Chip label="Hard" size="small"/>
        </Stack>
      </Box>
    </Card>);
}
`,N={py:0,width:"100%",maxWidth:360,borderRadius:2,border:"1px solid",borderColor:"divider",backgroundColor:"background.paper"};function F(){return i(u,{sx:N,children:[e(n,{children:e(a,{primary:"Full width variant below"})}),e(r,{component:"li"}),e(n,{children:e(a,{primary:"Inset variant below"})}),e(r,{variant:"inset",component:"li"}),e(n,{children:e(a,{primary:"Middle variant below"})}),e(r,{variant:"middle",component:"li"}),e(n,{children:e(a,{primary:"List item"})})]})}const C=`import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
const style = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};
export default function DividerVariants() {
    return (<List sx={style}>
      <ListItem>
        <ListItemText primary="Full width variant below"/>
      </ListItem>
      <Divider component="li"/>
      <ListItem>
        <ListItemText primary="Inset variant below"/>
      </ListItem>
      <Divider variant="inset" component="li"/>
      <ListItem>
        <ListItemText primary="Middle variant below"/>
      </ListItem>
      <Divider variant="middle" component="li"/>
      <ListItem>
        <ListItemText primary="List item"/>
      </ListItem>
    </List>);
}
`;function R(){return i(d,{sx:{display:"flex",alignItems:"center",border:"1px solid",borderColor:"divider",borderRadius:1,bgcolor:"background.paper",color:"text.secondary","& svg":{m:1},"& hr":{mx:.5}},children:[e(v,{}),e(x,{}),e(f,{}),e(r,{orientation:"vertical",flexItem:!0}),e(c,{})]})}const B=`import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
export default function VerticalDividers() {
    return (<Box sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            '& svg': {
                m: 1,
            },
            '& hr': {
                mx: 0.5,
            },
        }}>
      <FormatAlignLeftIcon />
      <FormatAlignCenterIcon />
      <FormatAlignRightIcon />
      <Divider orientation="vertical" flexItem/>
      <FormatBoldIcon />
    </Box>);
}
`;function k(){return i(d,{sx:{display:"flex",alignItems:"center",border:"1px solid",borderColor:"divider",borderRadius:2,bgcolor:"background.paper",color:"text.secondary","& svg":{m:1}},children:[e(c,{}),e(r,{orientation:"vertical",variant:"middle",flexItem:!0}),e(L,{})]})}const A=`import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
export default function FlexDivider() {
    return (<Box sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            '& svg': {
                m: 1,
            },
        }}>
      <FormatBoldIcon />
      <Divider orientation="vertical" variant="middle" flexItem/>
      <FormatItalicIcon />
    </Box>);
}
`,j=g("div")(({theme:o})=>({width:"100%",...o.typography.body2,color:o.palette.text.secondary,"& > :not(style) ~ :not(style)":{marginTop:o.spacing(2)}}));function S(){const o=e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."});return i(j,{children:[o,e(r,{children:"CENTER"}),o,e(r,{textAlign:"left",children:"LEFT"}),o,e(r,{textAlign:"right",children:"RIGHT"}),o,e(r,{children:e(s,{label:"Chip",size:"small"})}),o]})}const z=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));
export default function DividerText() {
    const content = (<p>{\`Lorem ipsum dolor sit amet, consectetur adipiscing elit.\`}</p>);
    return (<Root>
      {content}
      <Divider>CENTER</Divider>
      {content}
      <Divider textAlign="left">LEFT</Divider>
      {content}
      <Divider textAlign="right">RIGHT</Divider>
      {content}
      <Divider>
        <Chip label="Chip" size="small"/>
      </Divider>
      {content}
    </Root>);
}
`,V={p:0,width:"100%",maxWidth:360,borderRadius:2,border:"1px solid",borderColor:"divider",backgroundColor:"background.paper"};function M(){return i(u,{sx:V,"aria-label":"mailbox folders",children:[e(n,{children:e(a,{primary:"Inbox"})}),e(r,{component:"li",light:!0}),e(n,{children:e(a,{primary:"Drafts"})}),e(r,{component:"li",light:!0}),e(n,{children:e(a,{primary:"Trash"})}),e(r,{component:"li",light:!0}),e(n,{children:e(a,{primary:"Spam"})})]})}const W=`import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
const style = {
    p: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
};
export default function ListDividers() {
    return (<List sx={style} aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary="Inbox"/>
      </ListItem>
      <Divider component="li" light/>
      <ListItem>
        <ListItemText primary="Drafts"/>
      </ListItem>
      <Divider component="li" light/>
      <ListItem>
        <ListItemText primary="Trash"/>
      </ListItem>
      <Divider component="li" light/>
      <ListItem>
        <ListItemText primary="Spam"/>
      </ListItem>
    </List>);
}
`;function H(){return i(h,{variant:"outlined",sx:{display:"flex",color:"text.secondary","& svg":{m:1},"& hr":{mx:.5}},children:[e(v,{}),e(x,{}),e(f,{}),e(r,{orientation:"vertical",variant:"middle",flexItem:!0}),e(c,{})]})}const E=`import * as React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
export default function VerticalDividerMiddle() {
    return (<Card variant="outlined" sx={{
            display: 'flex',
            color: 'text.secondary',
            '& svg': {
                m: 1,
            },
            '& hr': {
                mx: 0.5,
            },
        }}>
      <FormatAlignLeftIcon />
      <FormatAlignCenterIcon />
      <FormatAlignRightIcon />
      <Divider orientation="vertical" variant="middle" flexItem/>
      <FormatBoldIcon />
    </Card>);
}
`;function q(o){return i(D,{children:[i("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(I,{}),e(y,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/dividers",target:"_blank",role:"button",size:"small",startIcon:e(b,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Divider"}),e(t,{className:"description",children:"The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Introduction"}),i(t,{className:"text-14 mb-32",component:"div",children:["The Material UI Divider component renders as a dark gray ",e("code",{children:"<hr>"})," by default, and features several useful props for quick style adjustments."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"IntroDivider.js",className:"my-16",iframe:!1,component:w,raw:T})}),i(t,{className:"text-14 mb-32",component:"div",children:[":::success Use the handy ",e("code",{children:"light"})," prop to make the Divider slightly lighter. :::"]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basics"}),e(l,{component:"pre",className:"language-jsx",children:` 
import Divider from '@mui/material/Divider';
`}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Variants"}),i(t,{className:"text-14 mb-32",component:"div",children:["The Divider component supports three variants: ",e("code",{children:"fullWidth"})," (default), ",e("code",{children:"inset"}),", and ",e("code",{children:"middle"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"DividerVariants.js",className:"my-16",iframe:!1,component:F,raw:C})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Orientation"}),i(t,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"orientation"})," prop to change the Divider from horizontal to vertical."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"VerticalDividers.js",className:"my-16",iframe:!1,component:R,raw:B})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Flex item"}),i(t,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"flexItem"})," prop to display the Divider when it's being used in a flex container."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"FlexDivider.js",className:"my-16",iframe:!1,component:k,raw:A})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"With children"}),i(t,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"textAlign"})," prop to align elements that are wrapped by the Divider."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"DividerText.js",className:"my-16",iframe:!1,component:S,raw:z})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Use with a List"}),i(t,{className:"text-14 mb-32",component:"div",children:["When using the Divider to separate items in a List, use the ",e("code",{children:"component"})," prop to render it as an ",e("code",{children:"<li>"}),"—otherwise it won't be a valid HTML element."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"ListDividers.js",className:"my-16",iframe:!1,component:M,raw:W})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Icon grouping"}),i(t,{className:"text-14 mb-32",component:"div",children:["The demo below shows how to combine the props ",e("code",{children:'variant="middle"'})," and ",e("code",{children:'orientation="vertical"'}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(m,{name:"VerticalDividerMiddle.js",className:"my-16",iframe:!1,component:H,raw:E})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),i(t,{className:"text-14 mb-32",component:"div",children:["Due to its implicit role of ",e("code",{children:"separator"}),", the Divider, which is a ",e("code",{children:"<hr>"}),` element, will be announced by screen readers as a "Horziontal Splitter" (or vertical, if you're using the `,e("code",{children:"orientation"})," prop)."]}),i(t,{className:"text-14 mb-32",component:"div",children:["If you're using it as a purely stylistic element, we recommend setting ",e("code",{children:'aria-hidden="true"'})," which will make screen readers bypass it."]}),e(l,{component:"pre",className:"language-js",children:` 
<Divider aria-hidden="true" />
`}),i(t,{className:"text-14 mb-32",component:"div",children:["If you're using the Divider to wrap other elements, such as text or chips, we recommend changing its rendered element to a plain ",e("code",{children:"<div>"})," using the ",e("code",{children:"component"})," prop, and setting ",e("code",{children:'role="presentation"'}),". This ensures that it's not announced by screen readers while still preserving the semantics of the elements inside it."]}),e(l,{component:"pre",className:"language-js",children:` 
<Divider component="div" role="presentation">
  <Typograph>Text element</Typography>
</Divider>
`}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Anatomy"}),i(t,{className:"text-14 mb-32",component:"div",children:["The Divider component is composed of a root ",e("code",{children:"<hr>"}),"."]}),e(l,{component:"pre",className:"language-html",children:` 
<hr className="MuiDivider-root">
  <!-- Divider children goes here -->
</hr>
`})]})}export{q as default};
