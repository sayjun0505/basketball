import{j as t,z as x,A as o,d as i,C as n,H as f,s as d,eq as p,r as m,T as e,d8 as v,cK as y,F as w,dp as u,bb as B}from"./index-cy1M6gwN.js";import{F as a}from"./FuseExample-0-XNuDGL.js";import{D as A}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d as g}from"./Delete-xi4hnd4s.js";import{G as s}from"./Grid-zsqRuuCl.js";import{Z as C}from"./Zoom-_cx7dPjB.js";import"./DocumentationNavigation-fvt_Eo8n.js";function N(){return t(o,{title:"Delete",children:t(x,{children:t(g,{})})})}const R=`import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
export default function BasicTooltip() {
    return (<Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>);
}
`;function D(){return i(f,{sx:{width:500},children:[t(s,{container:!0,justifyContent:"center",children:i(s,{item:!0,children:[t(o,{title:"Add",placement:"top-start",children:t(n,{children:"top-start"})}),t(o,{title:"Add",placement:"top",children:t(n,{children:"top"})}),t(o,{title:"Add",placement:"top-end",children:t(n,{children:"top-end"})})]})}),i(s,{container:!0,justifyContent:"center",children:[i(s,{item:!0,xs:6,children:[t(o,{title:"Add",placement:"left-start",children:t(n,{children:"left-start"})}),t("br",{}),t(o,{title:"Add",placement:"left",children:t(n,{children:"left"})}),t("br",{}),t(o,{title:"Add",placement:"left-end",children:t(n,{children:"left-end"})})]}),i(s,{item:!0,container:!0,xs:6,alignItems:"flex-end",direction:"column",children:[t(s,{item:!0,children:t(o,{title:"Add",placement:"right-start",children:t(n,{children:"right-start"})})}),t(s,{item:!0,children:t(o,{title:"Add",placement:"right",children:t(n,{children:"right"})})}),t(s,{item:!0,children:t(o,{title:"Add",placement:"right-end",children:t(n,{children:"right-end"})})})]})]}),t(s,{container:!0,justifyContent:"center",children:i(s,{item:!0,children:[t(o,{title:"Add",placement:"bottom-start",children:t(n,{children:"bottom-start"})}),t(o,{title:"Add",placement:"bottom",children:t(n,{children:"bottom"})}),t(o,{title:"Add",placement:"bottom-end",children:t(n,{children:"bottom-end"})})]})})]})}const M=`import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
export default function PositionedTooltips() {
    return (<Box sx={{ width: 500 }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip title="Add" placement="top-start">
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top">
            <Button>top</Button>
          </Tooltip>
          <Tooltip title="Add" placement="top-end">
            <Button>top-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Tooltip title="Add" placement="left-start">
            <Button>left-start</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left">
            <Button>left</Button>
          </Tooltip>
          <br />
          <Tooltip title="Add" placement="left-end">
            <Button>left-end</Button>
          </Tooltip>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Tooltip title="Add" placement="right-start">
              <Button>right-start</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Add" placement="right">
              <Button>right</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Add" placement="right-end">
              <Button>right-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip title="Add" placement="bottom-start">
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom-end">
            <Button>bottom-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>);
}
`,G=d(({className:l,...r})=>t(o,{...r,classes:{popper:l}}))(({theme:l})=>({[`& .${p.tooltip}`]:{backgroundColor:l.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:l.shadows[1],fontSize:11}})),I=d(({className:l,...r})=>t(o,{...r,arrow:!0,classes:{popper:l}}))(({theme:l})=>({[`& .${p.arrow}`]:{color:l.palette.common.black},[`& .${p.tooltip}`]:{backgroundColor:l.palette.common.black}})),j=d(({className:l,...r})=>t(o,{...r,classes:{popper:l}}))(({theme:l})=>({[`& .${p.tooltip}`]:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:l.typography.pxToRem(12),border:"1px solid #dadde9"}}));function O(){return i("div",{children:[t(G,{title:"Add",children:t(n,{children:"Light"})}),t(I,{title:"Add",children:t(n,{children:"Bootstrap"})}),t(j,{title:i(m.Fragment,{children:[t(e,{color:"inherit",children:"Tooltip with HTML"}),t("em",{children:"And here's"})," ",t("b",{children:"some"})," ",t("u",{children:"amazing content"}),"."," ","It's very engaging. Right?"]}),children:t(n,{children:"HTML"})})]})}const W=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
const LightTooltip = styled(({ className, ...props }) => (<Tooltip {...props} classes={{ popper: className }}/>))(({ theme }) => ({
    [\`& .\${tooltipClasses.tooltip}\`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));
const BootstrapTooltip = styled(({ className, ...props }) => (<Tooltip {...props} arrow classes={{ popper: className }}/>))(({ theme }) => ({
    [\`& .\${tooltipClasses.arrow}\`]: {
        color: theme.palette.common.black,
    },
    [\`& .\${tooltipClasses.tooltip}\`]: {
        backgroundColor: theme.palette.common.black,
    },
}));
const HtmlTooltip = styled(({ className, ...props }) => (<Tooltip {...props} classes={{ popper: className }}/>))(({ theme }) => ({
    [\`& .\${tooltipClasses.tooltip}\`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));
export default function CustomizedTooltips() {
    return (<div>
      <LightTooltip title="Add">
        <Button>Light</Button>
      </LightTooltip>
      <BootstrapTooltip title="Add">
        <Button>Bootstrap</Button>
      </BootstrapTooltip>
      <HtmlTooltip title={<React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>}>
        <Button>HTML</Button>
      </HtmlTooltip>
    </div>);
}
`;function k(){return t(o,{title:"Add",arrow:!0,children:t(n,{children:"Arrow"})})}const L=`import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
export default function ArrowTooltips() {
    return (<Tooltip title="Add" arrow>
      <Button>Arrow</Button>
    </Tooltip>);
}
`;function F(){return t(o,{title:"Add",slotProps:{popper:{modifiers:[{name:"offset",options:{offset:[0,-14]}}]}},children:t(n,{children:"Offset"})})}const $=`import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
export default function TooltipOffset() {
    return (<Tooltip title="Add" slotProps={{
            popper: {
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, -14],
                        },
                    },
                ],
            },
        }}>
      <Button>Offset</Button>
    </Tooltip>);
}
`;function P(){return t(o,{title:"Add",slotProps:{popper:{sx:{[`&.${p.popper}[data-popper-placement*="bottom"] .${p.tooltip}`]:{marginTop:"0px"},[`&.${p.popper}[data-popper-placement*="top"] .${p.tooltip}`]:{marginBottom:"0px"},[`&.${p.popper}[data-popper-placement*="right"] .${p.tooltip}`]:{marginLeft:"0px"},[`&.${p.popper}[data-popper-placement*="left"] .${p.tooltip}`]:{marginRight:"0px"}}}},children:t(n,{children:"Margin"})})}const H=`import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
export default function TooltipMargin() {
    return (<Tooltip title="Add" slotProps={{
            popper: {
                sx: {
                    [\`&.\${tooltipClasses.popper}[data-popper-placement*="bottom"] .\${tooltipClasses.tooltip}\`]: {
                        marginTop: '0px',
                    },
                    [\`&.\${tooltipClasses.popper}[data-popper-placement*="top"] .\${tooltipClasses.tooltip}\`]: {
                        marginBottom: '0px',
                    },
                    [\`&.\${tooltipClasses.popper}[data-popper-placement*="right"] .\${tooltipClasses.tooltip}\`]: {
                        marginLeft: '0px',
                    },
                    [\`&.\${tooltipClasses.popper}[data-popper-placement*="left"] .\${tooltipClasses.tooltip}\`]: {
                        marginRight: '0px',
                    },
                },
            },
        }}>
      <Button>Margin</Button>
    </Tooltip>);
}
`;function S(){const[l,r]=m.useState(!1),c=()=>{r(!1)};return t("div",{children:i(s,{container:!0,justifyContent:"center",children:[t(s,{item:!0,children:t(o,{disableFocusListener:!0,title:"Add",children:t(n,{children:"Hover or touch"})})}),t(s,{item:!0,children:t(o,{disableHoverListener:!0,title:"Add",children:t(n,{children:"Focus or touch"})})}),t(s,{item:!0,children:t(o,{disableFocusListener:!0,disableTouchListener:!0,title:"Add",children:t(n,{children:"Hover"})})}),t(s,{item:!0,children:t(v,{onClickAway:c,children:t("div",{children:t(o,{PopperProps:{disablePortal:!0},onClose:c,open:l,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Add",children:t(n,{onClick:()=>{r(!0)},children:"Click"})})})})})]})})}const z=`import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
export default function TriggersTooltips() {
    const [open, setOpen] = React.useState(false);
    const handleTooltipClose = () => {
        setOpen(false);
    };
    const handleTooltipOpen = () => {
        setOpen(true);
    };
    return (<div>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip disableFocusListener title="Add">
            <Button>Hover or touch</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip disableHoverListener title="Add">
            <Button>Focus or touch</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip disableFocusListener disableTouchListener title="Add">
            <Button>Hover</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip PopperProps={{
            disablePortal: true,
        }} onClose={handleTooltipClose} open={open} disableFocusListener disableHoverListener disableTouchListener title="Add">
                <Button onClick={handleTooltipOpen}>Click</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>);
}
`;function Y(){const[l,r]=m.useState(!1);return t(o,{open:l,onClose:()=>{r(!1)},onOpen:()=>{r(!0)},title:"Add",children:t(n,{children:"Controlled"})})}const E=`import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
export default function ControlledTooltips() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (<Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Add">
      <Button>Controlled</Button>
    </Tooltip>);
}
`,q=d(({className:l,...r})=>t(o,{...r,classes:{popper:l}}))({[`& .${p.tooltip}`]:{maxWidth:500}}),V=d(({className:l,...r})=>t(o,{...r,classes:{popper:l}}))({[`& .${p.tooltip}`]:{maxWidth:"none"}}),h=`
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;function Z(){return i("div",{children:[t(o,{title:h,children:t(n,{sx:{m:1},children:"Default Width [300px]"})}),t(q,{title:h,children:t(n,{sx:{m:1},children:"Custom Width [500px]"})}),t(V,{title:h,children:t(n,{sx:{m:1},children:"No wrapping"})})]})}const U=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
const CustomWidthTooltip = styled(({ className, ...props }) => (<Tooltip {...props} classes={{ popper: className }}/>))({
    [\`& .\${tooltipClasses.tooltip}\`]: {
        maxWidth: 500,
    },
});
const NoMaxWidthTooltip = styled(({ className, ...props }) => (<Tooltip {...props} classes={{ popper: className }}/>))({
    [\`& .\${tooltipClasses.tooltip}\`]: {
        maxWidth: 'none',
    },
});
const longText = \`
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
\`;
export default function VariableWidth() {
    return (<div>
      <Tooltip title={longText}>
        <Button sx={{ m: 1 }}>Default Width [300px]</Button>
      </Tooltip>
      <CustomWidthTooltip title={longText}>
        <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
      </CustomWidthTooltip>
      <NoMaxWidthTooltip title={longText}>
        <Button sx={{ m: 1 }}>No wrapping</Button>
      </NoMaxWidthTooltip>
    </div>);
}
`;function X(){return t(o,{title:"Add",disableInteractive:!0,children:t(n,{children:"Not interactive"})})}const _=`import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
export default function NonInteractiveTooltips() {
    return (<Tooltip title="Add" disableInteractive>
      <Button>Not interactive</Button>
    </Tooltip>);
}
`;function K(){return t(o,{title:"You don't have permission to do this",children:t("span",{children:t(n,{disabled:!0,children:"A Disabled Button"})})})}const J=`import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
export default function DisabledTooltips() {
    return (<Tooltip title="You don't have permission to do this">
      <span>
        <Button disabled>A Disabled Button</Button>
      </span>
    </Tooltip>);
}
`;function Q(){return i("div",{children:[t(o,{title:"Add",children:t(n,{children:"Grow"})}),t(o,{TransitionComponent:y,TransitionProps:{timeout:600},title:"Add",children:t(n,{children:"Fade"})}),t(o,{TransitionComponent:C,title:"Add",children:t(n,{children:"Zoom"})})]})}const tt=`import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
export default function TransitionsTooltips() {
    return (<div>
      <Tooltip title="Add">
        <Button>Grow</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
        <Button>Fade</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Add">
        <Button>Zoom</Button>
      </Tooltip>
    </div>);
}
`;function et(){return t(o,{title:"You don't have permission to do this",followCursor:!0,children:t(f,{sx:{bgcolor:"text.disabled",color:"background.paper",p:2},children:"Disabled Action"})})}const ot=`import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
export default function FollowCursorTooltips() {
    return (<Tooltip title="You don't have permission to do this" followCursor>
      <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>
        Disabled Action
      </Box>
    </Tooltip>);
}
`;function nt(){const l=m.useRef({x:0,y:0}),r=m.useRef(null),c=m.useRef(null);return t(o,{title:"Add",placement:"top",arrow:!0,PopperProps:{popperRef:r,anchorEl:{getBoundingClientRect:()=>new DOMRect(l.current.x,c.current.getBoundingClientRect().y,0,0)}},children:t(f,{ref:c,onMouseMove:b=>{l.current={x:b.clientX,y:b.clientY},r.current!=null&&r.current.update()},sx:{bgcolor:"primary.main",color:"primary.contrastText",p:2},children:"Hover"})})}const it=`import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
export default function AnchorElTooltips() {
    const positionRef = React.useRef({
        x: 0,
        y: 0,
    });
    const popperRef = React.useRef(null);
    const areaRef = React.useRef(null);
    const handleMouseMove = (event) => {
        positionRef.current = { x: event.clientX, y: event.clientY };
        if (popperRef.current != null) {
            popperRef.current.update();
        }
    };
    return (<Tooltip title="Add" placement="top" arrow PopperProps={{
            popperRef,
            anchorEl: {
                getBoundingClientRect: () => {
                    return new DOMRect(positionRef.current.x, areaRef.current.getBoundingClientRect().y, 0, 0);
                },
            },
        }}>
      <Box ref={areaRef} onMouseMove={handleMouseMove} sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            p: 2,
        }}>
        Hover
      </Box>
    </Tooltip>);
}
`;function lt(){return t(o,{title:"Add",enterDelay:500,leaveDelay:200,children:t(n,{children:"[500ms, 200ms]"})})}const rt=`import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
export default function DelayTooltips() {
    return (<Tooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button>[500ms, 200ms]</Button>
    </Tooltip>);
}
`;function at(){return i("div",{children:[t(o,{title:"Delete",children:t(x,{children:t(g,{})})}),t(o,{describeChild:!0,title:"Does not add if it already exists.",children:t(n,{children:"Add"})})]})}const st=`import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
export default function AccessibilityTooltips() {
    return (<div>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip describeChild title="Does not add if it already exists.">
        <Button>Add</Button>
      </Tooltip>
    </div>);
}
`;function Tt(l){return i(B,{children:[i("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[t(A,{}),t(n,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/tooltips",target:"_blank",role:"button",size:"small",startIcon:t(w,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),t(e,{className:"text-32 my-16 font-700",component:"h1",children:"Tooltip"}),t(e,{className:"description",children:"Tooltips display informative text when users hover over, focus on, or tap an element."}),t(e,{className:"text-14 mb-32",component:"div",children:"When activated, Tooltips display a text label identifying an element, such as a description of its function."}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic tooltip"}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"BasicTooltip.js",className:"my-16",iframe:!1,component:N,raw:R})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Positioned tooltips"}),i(e,{className:"text-14 mb-32",component:"div",children:["The ",t("code",{children:"Tooltip"})," has 12 ",t("strong",{children:"placement"})," choices. They don't have directional arrows; instead, they rely on motion emanating from the source to convey direction."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"PositionedTooltips.js",className:"my-16",iframe:!1,component:D,raw:M})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),i(e,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the ",t("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"CustomizedTooltips.js",className:"my-16",iframe:!1,component:O,raw:W})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Arrow tooltips"}),i(e,{className:"text-14 mb-32",component:"div",children:["You can use the ",t("code",{children:"arrow"})," prop to give your tooltip an arrow indicating which element it refers to."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"ArrowTooltips.js",className:"my-16",iframe:!1,component:k,raw:L})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Distance from anchor"}),i(e,{className:"text-14 mb-32",component:"div",children:["To adjust the distance between the tooltip and its anchor, you can use the ",t("code",{children:"slotProps"})," prop to modify the ",t("a",{href:"https://popper.js.org/docs/v2/modifiers/offset/",children:"offset"})," of the popper."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"TooltipOffset.js",className:"my-16",iframe:!1,component:F,raw:$})}),i(e,{className:"text-14 mb-32",component:"div",children:["Alternatively, you can use the ",t("code",{children:"slotProps"})," prop to customize the margin of the popper."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"TooltipMargin.js",className:"my-16",iframe:!1,component:P,raw:H})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Custom child element"}),t(e,{className:"text-14 mb-32",component:"div",children:"The tooltip needs to apply DOM event listeners to its child element. If the child is a custom React element, you need to make sure that it spreads its props to the underlying DOM element."}),t(u,{component:"pre",className:"language-jsx",children:` 
const MyComponent = React.forwardRef(function MyComponent(props, ref) {
  //  Spread the props to the underlying DOM element.
  return (
    <div {...props} ref={ref}>
      Bin
    </div>
  );
});

// ...

<Tooltip title="Delete">
  <MyComponent />
</Tooltip>;
`}),i(e,{className:"text-14 mb-32",component:"div",children:["You can find a similar concept in the ",t("a",{href:"/material-ui/guides/composition/#wrapping-components",children:"wrapping components"})," guide."]}),t(e,{className:"text-14 mb-32",component:"div",children:"If using a class component as a child, you'll also need to ensure that the ref is forwarded to the underlying DOM element. (A ref to the class component itself will not work.)"}),t(u,{component:"pre",className:"language-jsx",children:` 
class MyComponent extends React.Component {
  render() {
    const { innerRef, ...props } = this.props;
    //  Spread the props to the underlying DOM element.
    return (
      <div {...props} ref={innerRef}>
        Bin
      </div>
    );
  }
}

// Wrap MyComponent to forward the ref as expected by Tooltip
const WrappedMyComponent = React.forwardRef(function WrappedMyComponent(props, ref) {
  return <MyComponent {...props} innerRef={ref} />;
});

// ...

<Tooltip title="Delete">
  <WrappedMyComponent />
</Tooltip>;
`}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Triggers"}),t(e,{className:"text-14 mb-32",component:"div",children:"You can define the types of events that cause a tooltip to show."}),i(e,{className:"text-14 mb-32",component:"div",children:["The touch action requires a long press due to the ",t("code",{children:"enterTouchDelay"})," prop being set to ",t("code",{children:"700"}),"ms by default."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"TriggersTooltips.js",className:"my-16",iframe:!1,component:S,raw:z})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Controlled tooltips"}),i(e,{className:"text-14 mb-32",component:"div",children:["You can use the ",t("code",{children:"open"}),", ",t("code",{children:"onOpen"})," and ",t("code",{children:"onClose"})," props to control the behavior of the tooltip."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"ControlledTooltips.js",className:"my-16",iframe:!1,component:Y,raw:E})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Variable width"}),i(e,{className:"text-14 mb-32",component:"div",children:["The ",t("code",{children:"Tooltip"})," wraps long text by default to make it readable."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"VariableWidth.js",className:"my-16",iframe:!1,component:Z,raw:U})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Interactive"}),i(e,{className:"text-14 mb-32",component:"div",children:["Tooltips are interactive by default (to pass ",t("a",{href:"https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus",children:"WCAG 2.1 success criterion 1.4.13"}),"). It won't close when the user hovers over the tooltip before the ",t("code",{children:"leaveDelay"})," is expired. You can disable this behavior (thus failing the success criterion which is required to reach level AA) by passing ",t("code",{children:"disableInteractive"}),"."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"NonInteractiveTooltips.js",className:"my-16",iframe:!1,component:X,raw:_})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Disabled elements"}),i(e,{className:"text-14 mb-32",component:"div",children:["By default disabled elements like ",t("code",{children:"<button>"})," do not trigger user interactions so a ",t("code",{children:"Tooltip"})," will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a ",t("code",{children:"span"}),"."]}),t(e,{className:"text-14 mb-32",component:"div",children:":::warning In order to work with Safari, you need at least one display block or flex item below the tooltip wrapper. :::"}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"DisabledTooltips.js",className:"my-16",iframe:!1,component:K,raw:J})}),i(e,{className:"text-14 mb-32",component:"div",children:[":::warning If you're not wrapping a Material UI component that inherits from ",t("code",{children:"ButtonBase"}),", for instance, a native ",t("code",{children:"<button>"})," element, you should also add the CSS property ",t("em",{children:"pointer-events: none;"})," to your element when disabled: :::"]}),t(u,{component:"pre",className:"language-jsx",children:` 
<Tooltip title="You don't have permission to do this">
  <span>
    <button disabled={disabled} style={disabled ? { pointerEvents: 'none' } : {}}>
      A disabled button
    </button>
  </span>
</Tooltip>
`}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Transitions"}),t(e,{className:"text-14 mb-32",component:"div",children:"Use a different transition."}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"TransitionsTooltips.js",className:"my-16",iframe:!1,component:Q,raw:tt})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Follow cursor"}),i(e,{className:"text-14 mb-32",component:"div",children:["You can enable the tooltip to follow the cursor by setting ",t("code",{children:"followCursor={true}"}),"."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"FollowCursorTooltips.js",className:"my-16",iframe:!1,component:et,raw:ot})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Virtual element"}),i(e,{className:"text-14 mb-32",component:"div",children:["In the event you need to implement a custom placement, you can use the ",t("code",{children:"anchorEl"})," prop: The value of the ",t("code",{children:"anchorEl"})," prop can be a reference to a fake DOM element. You need to create an object shaped like the ",t("a",{href:"https://popper.js.org/docs/v2/virtual-elements/",children:t("code",{children:"VirtualElement"})}),"."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"AnchorElTooltips.js",className:"my-16",iframe:!1,component:nt,raw:it})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Showing and hiding"}),i(e,{className:"text-14 mb-32",component:"div",children:["The tooltip is normally shown immediately when the user's mouse hovers over the element, and hides immediately when the user's mouse leaves. A delay in showing or hiding the tooltip can be added through the ",t("code",{children:"enterDelay"})," and ",t("code",{children:"leaveDelay"})," props."]}),i(e,{className:"text-14 mb-32",component:"div",children:["On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You can disable this feature with the ",t("code",{children:"disableTouchListener"})," prop."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"DelayTooltips.js",className:"my-16",iframe:!1,component:lt,raw:rt})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),i(e,{className:"text-14 mb-32",component:"div",children:["(WAI-ARIA: ",t("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/"}),")"]}),i(e,{className:"text-14 mb-32",component:"div",children:["By default, the tooltip only labels its child element. This is notably different from ",t("code",{children:"title"})," which can either label ",t("strong",{children:"or"})," describe its child depending on whether the child already has a label. For example, in:"]}),t(u,{component:"pre",className:"language-html",children:` 
<button title="some more information">A button</button>
`}),i(e,{className:"text-14 mb-32",component:"div",children:["the ",t("code",{children:"title"})," acts as an accessible description. If you want the tooltip to act as an accessible description you can pass ",t("code",{children:"describeChild"}),". Note that you shouldn't use ",t("code",{children:"describeChild"})," if the tooltip provides the only visual label. Otherwise, the child would have no accessible name and the tooltip would violate ",t("a",{href:"https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html",children:"success criterion 2.5.3 in WCAG 2.1"}),"."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(a,{name:"AccessibilityTooltips.js",className:"my-16",iframe:!1,component:at,raw:st})})]})}export{Tt as default};
