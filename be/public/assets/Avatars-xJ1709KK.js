import{d as e,j as a,B as t,cI as s,dQ as m,dR as j,c8 as h,aX as f,bY as A,dS as y,ak as b,ai as d,s as x,cN as S,F as N,C as R,T as r,bb as T}from"./index-cy1M6gwN.js";import{F as o}from"./FuseExample-0-XNuDGL.js";import{D as B}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d as I}from"./Folder-bJ7gJi7i.js";import"./DocumentationNavigation-fvt_Eo8n.js";function C(){return e(s,{direction:"row",spacing:2,children:[a(t,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),a(t,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),a(t,{alt:"Cindy Baker",src:"/material-ui-static/images/avatar/3.jpg"})]})}const H=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export default function ImageAvatars() {
    return (<Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg"/>
      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg"/>
      <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg"/>
    </Stack>);
}
`;function G(){return e(s,{direction:"row",spacing:2,children:[a(t,{children:"H"}),a(t,{sx:{bgcolor:m[500]},children:"N"}),a(t,{sx:{bgcolor:j[500]},children:"OP"})]})}const z=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
export default function LetterAvatars() {
    return (<Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </Stack>);
}
`;function O(i){let c=0,n;for(n=0;n<i.length;n+=1)c=i.charCodeAt(n)+((c<<5)-c);let g="#";for(n=0;n<3;n+=1){const w=c>>n*8&255;g+=`00${w.toString(16)}`.slice(-2)}return g}function l(i){return{sx:{bgcolor:O(i)},children:`${i.split(" ")[0][0]}${i.split(" ")[1][0]}`}}function $(){return e(s,{direction:"row",spacing:2,children:[a(t,{...l("Kent Dodds")}),a(t,{...l("Jed Watson")}),a(t,{...l("Tim Neutkens")})]})}const _=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function stringToColor(string) {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += \`00\${value.toString(16)}\`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
}
function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: \`\${name.split(' ')[0][0]}\${name.split(' ')[1][0]}\`,
    };
}
export default function BackgroundLetterAvatars() {
    return (<Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar('Kent Dodds')}/>
      <Avatar {...stringAvatar('Jed Watson')}/>
      <Avatar {...stringAvatar('Tim Neutkens')}/>
    </Stack>);
}
`;function F(){return e(s,{direction:"row",spacing:2,children:[a(t,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg",sx:{width:24,height:24}}),a(t,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),a(t,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg",sx:{width:56,height:56}})]})}const P=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export default function SizeAvatars() {
    return (<Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" sx={{ width: 24, height: 24 }}/>
      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg"/>
      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }}/>
    </Stack>);
}
`;var p={},L=f;Object.defineProperty(p,"__esModule",{value:!0});var k=p.default=void 0,W=L(h()),D=A;k=p.default=(0,W.default)((0,D.jsx)("path",{d:"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-3.21 14.21-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9z"}),"Pageview");var u={},V=f;Object.defineProperty(u,"__esModule",{value:!0});var v=u.default=void 0,q=V(h()),M=A;v=u.default=(0,q.default)((0,M.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Assignment");function E(){return e(s,{direction:"row",spacing:2,children:[a(t,{children:a(I,{})}),a(t,{sx:{bgcolor:y[500]},children:a(k,{})}),a(t,{sx:{bgcolor:b[500]},children:a(v,{})})]})}const Y=`import * as React from 'react';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
export default function IconAvatars() {
    return (<Stack direction="row" spacing={2}>
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: pink[500] }}>
        <PageviewIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }}>
        <AssignmentIcon />
      </Avatar>
    </Stack>);
}
`;function J(){return e(s,{direction:"row",spacing:2,children:[a(t,{sx:{bgcolor:m[500]},variant:"square",children:"N"}),a(t,{sx:{bgcolor:b[500]},variant:"rounded",children:a(v,{})})]})}const K=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
export default function VariantAvatars() {
    return (<Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
        N
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
        <AssignmentIcon />
      </Avatar>
    </Stack>);
}
`;function Q(){return e(s,{direction:"row",spacing:2,children:[a(t,{sx:{bgcolor:m[500]},alt:"Remy Sharp",src:"/broken-image.jpg",children:"B"}),a(t,{sx:{bgcolor:m[500]},alt:"Remy Sharp",src:"/broken-image.jpg"}),a(t,{src:"/broken-image.jpg"})]})}const U=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
export default function FallbackAvatars() {
    return (<Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Remy Sharp" src="/broken-image.jpg">
        B
      </Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }} alt="Remy Sharp" src="/broken-image.jpg"/>
      <Avatar src="/broken-image.jpg"/>
    </Stack>);
}
`;function X(){return e(d,{max:4,children:[a(t,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),a(t,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),a(t,{alt:"Cindy Baker",src:"/material-ui-static/images/avatar/3.jpg"}),a(t,{alt:"Agnes Walker",src:"/material-ui-static/images/avatar/4.jpg"}),a(t,{alt:"Trevor Henderson",src:"/material-ui-static/images/avatar/5.jpg"})]})}const Z=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
export default function GroupAvatars() {
    return (<AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg"/>
      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg"/>
      <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg"/>
      <Avatar alt="Agnes Walker" src="/material-ui-static/images/avatar/4.jpg"/>
      <Avatar alt="Trevor Henderson" src="/material-ui-static/images/avatar/5.jpg"/>
    </AvatarGroup>);
}
`;function aa(){return e(d,{total:24,children:[a(t,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),a(t,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),a(t,{alt:"Agnes Walker",src:"/material-ui-static/images/avatar/4.jpg"}),a(t,{alt:"Trevor Henderson",src:"/material-ui-static/images/avatar/5.jpg"})]})}const ta=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
export default function TotalAvatars() {
    return (<AvatarGroup total={24}>
      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg"/>
      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg"/>
      <Avatar alt="Agnes Walker" src="/material-ui-static/images/avatar/4.jpg"/>
      <Avatar alt="Trevor Henderson" src="/material-ui-static/images/avatar/5.jpg"/>
    </AvatarGroup>);
}
`;function ra(){return e(d,{renderSurplus:i=>e("span",{children:["+",i.toString()[0],"k"]}),total:4251,children:[a(t,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),a(t,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),a(t,{alt:"Agnes Walker",src:"/material-ui-static/images/avatar/4.jpg"}),a(t,{alt:"Trevor Henderson",src:"/material-ui-static/images/avatar/5.jpg"})]})}const ea=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
export default function CustomSurplusAvatars() {
    return (<AvatarGroup renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>} total={4251}>
      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg"/>
      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg"/>
      <Avatar alt="Agnes Walker" src="/material-ui-static/images/avatar/4.jpg"/>
      <Avatar alt="Trevor Henderson" src="/material-ui-static/images/avatar/5.jpg"/>
    </AvatarGroup>);
}
`,ia=x(S)(({theme:i})=>({"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:`0 0 0 2px ${i.palette.background.paper}`,"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}})),oa=x(t)(({theme:i})=>({width:22,height:22,border:`2px solid ${i.palette.background.paper}`}));function na(){return e(s,{direction:"row",spacing:2,children:[a(ia,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:a(t,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"})}),a(S,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:a(oa,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),children:a(t,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"})})]})}const sa=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: \`0 0 0 2px \${theme.palette.background.paper}\`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: \`2px solid \${theme.palette.background.paper}\`,
}));
export default function BadgeAvatars() {
    return (<Stack direction="row" spacing={2}>
      <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
        <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg"/>
      </StyledBadge>
      <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={<SmallAvatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg"/>}>
        <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg"/>
      </Badge>
    </Stack>);
}
`;function ua(i){return e(T,{children:[e("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[a(B,{}),a(R,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/avatars",target:"_blank",role:"button",size:"small",startIcon:a(N,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),a(r,{className:"text-32 my-16 font-700",component:"h1",children:"Avatar"}),a(r,{className:"description",children:"Avatars are found throughout material design with uses in everything from tables to dialog menus."}),a(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Image avatars"}),e(r,{className:"text-14 mb-32",component:"div",children:["Image avatars can be created by passing standard ",a("code",{children:"img"})," props ",a("code",{children:"src"})," or ",a("code",{children:"srcSet"})," to the component."]}),a(r,{className:"text-14 mb-32",component:"div",children:a(o,{name:"ImageAvatars.js",className:"my-16",iframe:!1,component:C,raw:H})}),a(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Letter avatars"}),e(r,{className:"text-14 mb-32",component:"div",children:["Avatars containing simple characters can be created by passing a string as ",a("code",{children:"children"}),"."]}),a(r,{className:"text-14 mb-32",component:"div",children:a(o,{name:"LetterAvatars.js",className:"my-16",iframe:!1,component:G,raw:z})}),a(r,{className:"text-14 mb-32",component:"div",children:"You can use different background colors for the avatar. The following demo generates the color based on the name of the person."}),a(r,{className:"text-14 mb-32",component:"div",children:a(o,{name:"BackgroundLetterAvatars.js",className:"my-16",iframe:!1,component:$,raw:_})}),a(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Sizes"}),e(r,{className:"text-14 mb-32",component:"div",children:["You can change the size of the avatar with the ",a("code",{children:"height"})," and ",a("code",{children:"width"})," CSS properties."]}),a(r,{className:"text-14 mb-32",component:"div",children:a(o,{name:"SizeAvatars.js",className:"my-16",iframe:!1,component:F,raw:P})}),a(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Icon avatars"}),e(r,{className:"text-14 mb-32",component:"div",children:["Icon avatars are created by passing an icon as ",a("code",{children:"children"}),"."]}),a(r,{className:"text-14 mb-32",component:"div",children:a(o,{name:"IconAvatars.js",className:"my-16",iframe:!1,component:E,raw:Y})}),a(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Variants"}),e(r,{className:"text-14 mb-32",component:"div",children:["If you need square or rounded avatars, use the ",a("code",{children:"variant"})," prop."]}),a(r,{className:"text-14 mb-32",component:"div",children:a(o,{name:"VariantAvatars.js",className:"my-16",iframe:!1,component:J,raw:K})}),a(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Fallbacks"}),a(r,{className:"text-14 mb-32",component:"div",children:"If there is an error loading the avatar image, the component falls back to an alternative in the following order:"}),e("ul",{className:"space-y-16",children:[a("li",{children:"the provided children"}),e("li",{children:["the first letter of the ",a("code",{children:"alt"})," text"]}),a("li",{children:"a generic avatar icon"})]}),a(r,{className:"text-14 mb-32",component:"div",children:a(o,{name:"FallbackAvatars.js",className:"my-16",iframe:!1,component:Q,raw:U})}),a(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Grouped"}),e(r,{className:"text-14 mb-32",component:"div",children:[a("code",{children:"AvatarGroup"})," renders its children as a stack. Use the ",a("code",{children:"max"})," prop to limit the number of avatars."]}),a(r,{className:"text-14 mb-32",component:"div",children:a(o,{name:"GroupAvatars.js",className:"my-16",iframe:!1,component:X,raw:Z})}),a(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Total avatars"}),e(r,{className:"text-14 mb-32",component:"div",children:["If you need to control the total number of avatars not shown, you can use the ",a("code",{children:"total"})," prop."]}),a(r,{className:"text-14 mb-32",component:"div",children:a(o,{name:"TotalAvatars.js",className:"my-16",iframe:!1,component:aa,raw:ta})}),a(r,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Custom surplus"}),e(r,{className:"text-14 mb-32",component:"div",children:["Set the ",a("code",{children:"renderSurplus"})," prop as a callback to customize the surplus avatar. The callback will receive the surplus number as an argument based on the children and the ",a("code",{children:"max"})," prop, and should return a ",a("code",{children:"React.ReactNode"}),"."]}),e(r,{className:"text-14 mb-32",component:"div",children:["The ",a("code",{children:"renderSurplus"})," prop is useful when you need to render the surplus based on the data sent from the server."]}),a(r,{className:"text-14 mb-32",component:"div",children:a(o,{name:"CustomSurplusAvatars.js",className:"my-16",iframe:!1,component:ra,raw:ea})}),a(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"With badge"}),a(r,{className:"text-14 mb-32",component:"div",children:a(o,{name:"BadgeAvatars.js",className:"my-16",iframe:!1,component:na,raw:sa})})]})}export{ua as default};
