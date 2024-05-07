import{d as i,j as e,b2 as t,cI as o,B as d,c8 as u,aX as C,bY as f,H as x,s as y,r as D,P as S,F as g,C as w,T as a,bb as N}from"./index-cy1M6gwN.js";import{F as n}from"./FuseExample-0-XNuDGL.js";import{D as I}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d as R}from"./Done-MKvceoUG.js";import{d as j}from"./Delete-xi4hnd4s.js";import"./DocumentationNavigation-fvt_Eo8n.js";function A(){return i(o,{direction:"row",spacing:1,children:[e(t,{label:"Chip Filled"}),e(t,{label:"Chip Outlined",variant:"outlined"})]})}const F=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function BasicChips() {
    return (<Stack direction="row" spacing={1}>
      <Chip label="Chip Filled"/>
      <Chip label="Chip Outlined" variant="outlined"/>
    </Stack>);
}
`;function Y(){const l=()=>{console.info("You clicked the Chip.")};return i(o,{direction:"row",spacing:1,children:[e(t,{label:"Clickable",onClick:l}),e(t,{label:"Clickable",variant:"outlined",onClick:l})]})}const M=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function ClickableChips() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    return (<Stack direction="row" spacing={1}>
      <Chip label="Clickable" onClick={handleClick}/>
      <Chip label="Clickable" variant="outlined" onClick={handleClick}/>
    </Stack>);
}
`;function _(){const l=()=>{console.info("You clicked the delete icon.")};return i(o,{direction:"row",spacing:1,children:[e(t,{label:"Deletable",onDelete:l}),e(t,{label:"Deletable",variant:"outlined",onDelete:l})]})}const B=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function DeletableChips() {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (<Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={handleDelete}/>
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete}/>
    </Stack>);
}
`;function T(){const l=()=>{console.info("You clicked the Chip.")},c=()=>{console.info("You clicked the delete icon.")};return i(o,{direction:"row",spacing:1,children:[e(t,{label:"Clickable Deletable",onClick:l,onDelete:c}),e(t,{label:"Clickable Deletable",variant:"outlined",onClick:l,onDelete:c})]})}const z=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function ClickableAndDeletableChips() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (<Stack direction="row" spacing={1}>
      <Chip label="Clickable Deletable" onClick={handleClick} onDelete={handleDelete}/>
      <Chip label="Clickable Deletable" variant="outlined" onClick={handleClick} onDelete={handleDelete}/>
    </Stack>);
}
`;function L(){return i(o,{direction:"row",spacing:1,children:[e(t,{label:"Clickable Link",component:"a",href:"#basic-chip",clickable:!0}),e(t,{label:"Clickable Link",component:"a",href:"#basic-chip",variant:"outlined",clickable:!0})]})}const P=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function ClickableLinkChips() {
    return (<Stack direction="row" spacing={1}>
      <Chip label="Clickable Link" component="a" href="#basic-chip" clickable/>
      <Chip label="Clickable Link" component="a" href="#basic-chip" variant="outlined" clickable/>
    </Stack>);
}
`;function W(){const l=()=>{console.info("You clicked the Chip.")},c=()=>{console.info("You clicked the delete icon.")};return i(o,{direction:"row",spacing:1,children:[e(t,{label:"Custom delete icon",onClick:l,onDelete:c,deleteIcon:e(R,{})}),e(t,{label:"Custom delete icon",onClick:l,onDelete:c,deleteIcon:e(j,{}),variant:"outlined"})]})}const $=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
export default function CustomDeleteIconChips() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (<Stack direction="row" spacing={1}>
      <Chip label="Custom delete icon" onClick={handleClick} onDelete={handleDelete} deleteIcon={<DoneIcon />}/>
      <Chip label="Custom delete icon" onClick={handleClick} onDelete={handleDelete} deleteIcon={<DeleteIcon />} variant="outlined"/>
    </Stack>);
}
`;function q(){return i(o,{direction:"row",spacing:1,children:[e(t,{avatar:e(d,{children:"M"}),label:"Avatar"}),e(t,{avatar:e(d,{alt:"Natacha",src:"/material-ui-static/images/avatar/1.jpg"}),label:"Avatar",variant:"outlined"})]})}const E=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function AvatarChips() {
    return (<Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar"/>
      <Chip avatar={<Avatar alt="Natacha" src="/material-ui-static/images/avatar/1.jpg"/>} label="Avatar" variant="outlined"/>
    </Stack>);
}
`;var p={},O=C;Object.defineProperty(p,"__esModule",{value:!0});var m=p.default=void 0,H=O(u()),Q=f;m=p.default=(0,H.default)((0,Q.jsx)("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8"}),"Face");function U(){return i(o,{direction:"row",spacing:1,children:[e(t,{icon:e(m,{}),label:"With Icon"}),e(t,{icon:e(m,{}),label:"With Icon",variant:"outlined"})]})}const V=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
export default function IconChips() {
    return (<Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="With Icon"/>
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined"/>
    </Stack>);
}
`;function X(){return i(o,{spacing:1,alignItems:"center",children:[i(o,{direction:"row",spacing:1,children:[e(t,{label:"primary",color:"primary"}),e(t,{label:"success",color:"success"})]}),i(o,{direction:"row",spacing:1,children:[e(t,{label:"primary",color:"primary",variant:"outlined"}),e(t,{label:"success",color:"success",variant:"outlined"})]})]})}const G=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function ColorChips() {
    return (<Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary"/>
        <Chip label="success" color="success"/>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined"/>
        <Chip label="success" color="success" variant="outlined"/>
      </Stack>
    </Stack>);
}
`;function J(){return i(o,{direction:"row",spacing:1,children:[e(t,{label:"Small",size:"small"}),e(t,{label:"Small",size:"small",variant:"outlined"})]})}const K=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function SizesChips() {
    return (<Stack direction="row" spacing={1}>
      <Chip label="Small" size="small"/>
      <Chip label="Small" size="small" variant="outlined"/>
    </Stack>);
}
`;function Z(){return e(x,{sx:{width:100},children:e(t,{sx:{height:"auto","& .MuiChip-label":{display:"block",whiteSpace:"normal"}},label:"This is a chip that has multiple lines."})})}const ee=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
export default function MultilineChips() {
    return (<Box sx={{ width: 100 }}>
      <Chip sx={{
            height: 'auto',
            '& .MuiChip-label': {
                display: 'block',
                whiteSpace: 'normal',
            },
        }} label="This is a chip that has multiple lines."/>
    </Box>);
}
`;var h={},ae=C;Object.defineProperty(h,"__esModule",{value:!0});var b=h.default=void 0,te=ae(u()),ie=f;b=h.default=(0,te.default)((0,ie.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5"}),"TagFaces");const le=y("li")(({theme:l})=>({margin:l.spacing(.5)}));function ne(){const[l,c]=D.useState([{key:0,label:"Angular"},{key:1,label:"jQuery"},{key:2,label:"Polymer"},{key:3,label:"React"},{key:4,label:"Vue.js"}]),k=r=>()=>{c(s=>s.filter(v=>v.key!==r.key))};return e(S,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",p:.5,m:0},component:"ul",children:l.map(r=>{let s;return r.label==="React"&&(s=e(b,{})),e(le,{children:e(t,{icon:s,label:r.label,onDelete:r.label==="React"?void 0:k(r)})},r.key)})})}const oe=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));
export default function ChipsArray() {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ]);
    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    return (<Paper sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 0.5,
            m: 0,
        }} component="ul">
      {chipData.map((data) => {
            let icon;
            if (data.label === 'React') {
                icon = <TagFacesIcon />;
            }
            return (<ListItem key={data.key}>
            <Chip icon={icon} label={data.label} onDelete={data.label === 'React' ? undefined : handleDelete(data)}/>
          </ListItem>);
        })}
    </Paper>);
}
`;function de(l){return i(N,{children:[i("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(I,{}),e(w,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/chips",target:"_blank",role:"button",size:"small",startIcon:e(g,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(a,{className:"text-32 my-16 font-700",component:"h1",children:"Chip"}),e(a,{className:"description",children:"Chips are compact elements that represent an input, attribute, or action."}),e(a,{className:"text-14 mb-32",component:"div",children:"Chips allow users to enter information, make selections, filter content, or trigger actions."}),e(a,{className:"text-14 mb-32",component:"div",children:"While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context."}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic chip"}),i(a,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"Chip"})," component supports outlined and filled styling."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"BasicChips.js",className:"my-16",iframe:!1,component:A,raw:F})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Chip actions"}),e(a,{className:"text-14 mb-32",component:"div",children:"You can use the following actions."}),i("ul",{className:"space-y-16",children:[i("li",{children:["Chips with the ",e("code",{children:"onClick"})," prop defined change appearance on focus, hover, and click."]}),i("li",{children:["Chips with the ",e("code",{children:"onDelete"})," prop defined will display a delete icon which changes appearance on hover."]})]}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Clickable"}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"ClickableChips.js",className:"my-16",iframe:!1,component:Y,raw:M})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Deletable"}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"DeletableChips.js",className:"my-16",iframe:!1,component:_,raw:B})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Clickable and deletable"}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"ClickableAndDeletableChips.js",className:"my-16",iframe:!1,component:T,raw:z})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Clickable link"}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"ClickableLinkChips.js",className:"my-16",iframe:!1,component:L,raw:P})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Custom delete icon"}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"CustomDeleteIconChips.js",className:"my-16",iframe:!1,component:W,raw:$})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Chip adornments"}),e(a,{className:"text-14 mb-32",component:"div",children:"You can add ornaments to the beginning of the component."}),i(a,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"avatar"})," prop to add an avatar or use the ",e("code",{children:"icon"})," prop to add an icon."]}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Avatar chip"}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"AvatarChips.js",className:"my-16",iframe:!1,component:q,raw:E})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Icon chip"}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"IconChips.js",className:"my-16",iframe:!1,component:U,raw:V})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color chip"}),i(a,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"color"})," prop to define a color from theme palette."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"ColorChips.js",className:"my-16",iframe:!1,component:X,raw:G})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Sizes chip"}),i(a,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"size"})," prop to define a small Chip."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"SizesChips.js",className:"my-16",iframe:!1,component:J,raw:K})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Multiline chip"}),i(a,{className:"text-14 mb-32",component:"div",children:["By default, Chips displays labels only in a single line. To have them support multiline content, use the ",e("code",{children:"sx"})," prop to add ",e("code",{children:"height:auto"})," to the Chip component, and ",e("code",{children:"whiteSpace: normal"})," to the ",e("code",{children:"label"})," styles."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"MultilineChips.js",className:"my-16",iframe:!1,component:Z,raw:ee})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Chip array"}),i(a,{className:"text-14 mb-32",component:"div",children:["An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no",e("code",{children:"onClick"})," prop is defined, the ",e("code",{children:"Chip"})," can be focused, but does not gain depth while clicked or touched."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"ChipsArray.js",className:"my-16",iframe:!1,component:ne,raw:oe})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Chip playground"})]})}export{de as default};
