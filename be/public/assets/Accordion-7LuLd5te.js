import{aE as N,aF as C,s as h,bU as f,r as A,bW as M,bX as L,bY as D,x as R,az as j,d as n,cQ as i,j as e,cR as r,cS as t,C as S,T as o,cK as F,c8 as k,aX as U,F as P,dp as u,bb as q}from"./index-cy1M6gwN.js";import{F as m}from"./FuseExample-0-XNuDGL.js";import{D as B}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d}from"./ExpandMore-piUiZbDG.js";import{d as _}from"./ArrowDownward-rKU5bwaL.js";import{d as z}from"./ArrowDropDown-7rz8FW_L.js";import"./DocumentationNavigation-fvt_Eo8n.js";function G(a){return N("MuiAccordionActions",a)}C("MuiAccordionActions",["root","spacing"]);const $=["className","disableSpacing"],W=a=>{const{classes:s,disableSpacing:c}=a;return j({root:["root",!c&&"spacing"]},G,s)},O=h("div",{name:"MuiAccordionActions",slot:"Root",overridesResolver:(a,s)=>{const{ownerState:c}=a;return[s.root,!c.disableSpacing&&s.spacing]}})(({ownerState:a})=>f({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end"},!a.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),H=A.forwardRef(function(s,c){const l=M({props:s,name:"MuiAccordionActions"}),{className:g,disableSpacing:p=!1}=l,w=L(l,$),T=f({},l,{disableSpacing:p}),E=W(T);return D.jsx(O,f({className:R(E.root,g),ref:c,ownerState:T},w))}),Y=H;function X(){return n("div",{children:[n(i,{children:[e(r,{expandIcon:e(d,{}),"aria-controls":"panel1-content",id:"panel1-header",children:"Accordion 1"}),e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]}),n(i,{children:[e(r,{expandIcon:e(d,{}),"aria-controls":"panel2-content",id:"panel2-header",children:"Accordion 2"}),e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]}),n(i,{defaultExpanded:!0,children:[e(r,{expandIcon:e(d,{}),"aria-controls":"panel3-content",id:"panel3-header",children:"Accordion Actions"}),e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}),n(Y,{children:[e(S,{children:"Cancel"}),e(S,{children:"Agree"})]})]})]})}const K=`import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
export default function AccordionUsage() {
    return (<div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>);
}
`;function Q(){return n("div",{children:[n(i,{children:[e(r,{expandIcon:e(_,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e(o,{children:"Accordion 1"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(i,{children:[e(r,{expandIcon:e(z,{}),"aria-controls":"panel2-content",id:"panel2-header",children:e(o,{children:"Accordion 2"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}const J=`import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function AccordionExpandIcon() {
    return (<div>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>);
}
`;function V(){return n("div",{children:[n(i,{defaultExpanded:!0,children:[e(r,{expandIcon:e(d,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e(o,{children:"Expanded by default"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(i,{children:[e(r,{expandIcon:e(d,{}),"aria-controls":"panel2-content",id:"panel2-header",children:e(o,{children:"Header"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}const Z=`import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function AccordionExpandDefault() {
    return (<div>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>);
}
`;function ee(){const[a,s]=A.useState(!1);return n("div",{children:[n(i,{expanded:a,onChange:()=>{s(l=>!l)},slots:{transition:F},slotProps:{transition:{timeout:400}},sx:{"& .MuiAccordion-region":{height:a?"auto":0},"& .MuiAccordionDetails-root":{display:a?"block":"none"}},children:[e(r,{expandIcon:e(d,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e(o,{children:"Custom transition using Fade"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(i,{children:[e(r,{expandIcon:e(d,{}),"aria-controls":"panel2-content",id:"panel2-header",children:e(o,{children:"Default transition using Collapse"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}const oe=`import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
export default function AccordionTransition() {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };
    return (<div>
      <Accordion expanded={expanded} onChange={handleExpansion} slots={{ transition: Fade }} slotProps={{ transition: { timeout: 400 } }} sx={{
            '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
            '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography>Custom transition using Fade</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography>Default transition using Collapse</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>);
}
`;function ne(){return n("div",{children:[n(i,{children:[e(r,{expandIcon:e(d,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e(o,{children:"Accordion 1"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(i,{children:[e(r,{expandIcon:e(d,{}),"aria-controls":"panel2-content",id:"panel2-header",children:e(o,{children:"Accordion 2"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e(i,{disabled:!0,children:e(r,{expandIcon:e(d,{}),"aria-controls":"panel3-content",id:"panel3-header",children:e(o,{children:"Disabled Accordion"})})})]})}const ae=`import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function DisabledAccordion() {
    return (<div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>);
}
`;function ie(){const[a,s]=A.useState(!1),c=l=>(g,p)=>{s(p?l:!1)};return n("div",{children:[n(i,{expanded:a==="panel1",onChange:c("panel1"),children:[n(r,{expandIcon:e(d,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[e(o,{sx:{width:"33%",flexShrink:0},children:"General settings"}),e(o,{sx:{color:"text.secondary"},children:"I am an accordion"})]}),e(t,{children:e(o,{children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."})})]}),n(i,{expanded:a==="panel2",onChange:c("panel2"),children:[n(r,{expandIcon:e(d,{}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:[e(o,{sx:{width:"33%",flexShrink:0},children:"Users"}),e(o,{sx:{color:"text.secondary"},children:"You are currently not an owner"})]}),e(t,{children:e(o,{children:"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."})})]}),n(i,{expanded:a==="panel3",onChange:c("panel3"),children:[n(r,{expandIcon:e(d,{}),"aria-controls":"panel3bh-content",id:"panel3bh-header",children:[e(o,{sx:{width:"33%",flexShrink:0},children:"Advanced settings"}),e(o,{sx:{color:"text.secondary"},children:"Filtering has been entirely disabled for whole web server"})]}),e(t,{children:e(o,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]}),n(i,{expanded:a==="panel4",onChange:c("panel4"),children:[e(r,{expandIcon:e(d,{}),"aria-controls":"panel4bh-content",id:"panel4bh-header",children:e(o,{sx:{width:"33%",flexShrink:0},children:"Personal data"})}),e(t,{children:e(o,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]})]})}const re=`import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (<div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>);
}
`;var v={},te=U;Object.defineProperty(v,"__esModule",{value:!0});var I=v.default=void 0,ce=te(k()),de=D;I=v.default=(0,ce.default)((0,de.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIosSharp");const y=h(a=>e(i,{disableGutters:!0,elevation:0,square:!0,...a}))(({theme:a})=>({border:`1px solid ${a.palette.divider}`,"&:not(:last-child)":{borderBottom:0},"&::before":{display:"none"}})),x=h(a=>e(r,{expandIcon:e(I,{sx:{fontSize:"0.9rem"}}),...a}))(({theme:a})=>({backgroundColor:a.palette.mode==="dark"?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:a.spacing(1)}})),b=h(t)(({theme:a})=>({padding:a.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}));function se(){const[a,s]=A.useState("panel1"),c=l=>(g,p)=>{s(p?l:!1)};return n("div",{children:[n(y,{expanded:a==="panel1",onChange:c("panel1"),children:[e(x,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e(o,{children:"Collapsible Group Item #1"})}),e(b,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(y,{expanded:a==="panel2",onChange:c("panel2"),children:[e(x,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e(o,{children:"Collapsible Group Item #2"})}),e(b,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(y,{expanded:a==="panel3",onChange:c("panel3"),children:[e(x,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e(o,{children:"Collapsible Group Item #3"})}),e(b,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}const le=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const Accordion = styled((props) => (<MuiAccordion disableGutters elevation={0} square {...props}/>))(({ theme }) => ({
    border: \`1px solid \${theme.palette.divider}\`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));
const AccordionSummary = styled((props) => (<MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }}/>} {...props}/>))(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (<div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>);
}
`;function xe(a){return n(q,{children:[n("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(B,{}),e(S,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/accordion",target:"_blank",role:"button",size:"small",startIcon:e(P,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Accordion"}),e(o,{className:"description",children:"The Accordion component lets users show and hide sections of related content on a page."}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Introduction"}),e(o,{className:"text-14 mb-32",component:"div",children:"The Material UI Accordion component includes several complementary utility components to handle various use cases:"}),n("ul",{className:"space-y-16",children:[e("li",{children:"Accordion: the wrapper for grouping related components."}),e("li",{children:"Accordion Summary: the wrapper for the Accordion header, which expands or collapses the content when clicked."}),e("li",{children:"Accordion Details: the wrapper for the Accordion content."}),e("li",{children:"Accordion Actions: an optional wrapper that groups a set of buttons."})]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"AccordionUsage.js",className:"my-16",iframe:!1,component:X,raw:K})}),e("div",{className:"border border-1 p-16 rounded-16 my-12",children:n(o,{className:"text-14 mb-32",component:"div",children:["This component is no longer documented in the ",e("a",{href:"https://m2.material.io/",children:"Material Design guidelines"}),", but Material UI will continue to support it."]})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basics"}),e(u,{component:"pre",className:"language-jsx",children:` 
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
`}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Expand icon"}),n(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"expandIcon"})," prop on the Accordion Summary component to change the expand indicator icon. The component handles the turning upside-down transition automatically."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"AccordionExpandIcon.js",className:"my-16",iframe:!1,component:Q,raw:J})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Expanded by default"}),n(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"defaultExpanded"})," prop on the Accordion component to have it opened by default."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"AccordionExpandDefault.js",className:"my-16",iframe:!1,component:V,raw:Z})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Transition"}),n(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"slots.transition"})," and ",e("code",{children:"slotProps.transition"})," props to change the Accordion's default transition."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"AccordionTransition.js",className:"my-16",iframe:!1,component:ee,raw:oe})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Disabled item"}),n(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"disabled"})," prop on the Accordion component to disable interaction and focus."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"DisabledAccordion.js",className:"my-16",iframe:!1,component:ne,raw:ae})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Controlled Accordion"}),e(o,{className:"text-14 mb-32",component:"div",children:"The Accordion component can be controlled or uncontrolled."}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"ControlledAccordions.js",className:"my-16",iframe:!1,component:ie,raw:re})}),n("div",{className:"border border-1 p-16 rounded-16 my-12",children:[n("ul",{className:"space-y-16",children:[n("li",{children:["A component is ",e("strong",{children:"controlled"})," when it's managed by its parent using props."]}),n("li",{children:["A component is ",e("strong",{children:"uncontrolled"})," when it's managed by its own local state."]})]}),n(o,{className:"text-14 mb-32",component:"div",children:["Learn more about controlled and uncontrolled components in the ",e("a",{href:"https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components",children:"React documentation"}),"."]})]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Only one expanded at a time"}),n(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"expanded"})," prop with React's ",e("code",{children:"useState"})," hook to allow only one Accordion item to be expanded at a time. The demo below also shows a bit of visual customziation."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(m,{name:"CustomizedAccordions.js",className:"my-16",iframe:!1,component:se,raw:le})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Performance"}),e(o,{className:"text-14 mb-32",component:"div",children:"The Accordion content is mounted by default even if it's not expanded. This default behavior has server-side rendering and SEO in mind."}),n(o,{className:"text-14 mb-32",component:"div",children:["If you render the Accordion Details with a big component tree nested inside, or if you have many Accordions, you may want to change this behavior by setting ",e("code",{children:"unmountOnExit"})," to ",e("code",{children:"true"})," inside the ",e("code",{children:"slotProps.transition"})," prop to improve performance:"]}),e(u,{component:"pre",className:"language-jsx",children:` 
<Accordion slotProps={{ transition: { unmountOnExit: true } }} />
`}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),n(o,{className:"text-14 mb-32",component:"div",children:["The ",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",children:"WAI-ARIA guidelines for accordions"})," recommend setting an ",e("code",{children:"id"})," and ",e("code",{children:"aria-controls"}),", which in this case would apply to the Accordion Summary component. The Accordion component then derives the necessary ",e("code",{children:"aria-labelledby"})," and ",e("code",{children:"id"})," from its content."]}),e(u,{component:"pre",className:"language-jsx",children:` 
<Accordion>
  <AccordionSummary id="panel-header" aria-controls="panel-content">
    Header
  </AccordionSummary>
  <AccordionDetails>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </AccordionDetails>
</Accordion>
`}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Anatomy"}),n(o,{className:"text-14 mb-32",component:"div",children:["The Accordion component is composed of a root ",e("code",{children:"<div>"})," that houses interior elements like the Accordion Summary and other optional components (such as buttons or decorators)."]}),e(u,{component:"pre",className:"language-jsx",children:` 
<div className="MuiAccordion-root">
  <div className="MuiButtonBase-root MuiAccordionSummary-root" role="button" aria-expanded="">
      <!-- Accordion header button goes here -->
  </div>
  <div className="MuiAccordion-region" role="region">
    <div className="MuiAccordionDetails-root">
      <!-- Accordion content goes here -->
    </div>
  </div>
</div>
`})]})}export{xe as default};
