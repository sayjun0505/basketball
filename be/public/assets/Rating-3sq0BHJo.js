import{b$ as be,bY as i,aF as qe,aE as We,s as H,ay as Re,bU as u,aV as Xe,eb as Ye,r as x,bW as Ke,bX as Se,aS as Ve,aO as Je,K as Qe,aT as Ze,aR as et,x as Q,az as tt,ap as nt,d as r,j as e,T as a,H as B,cI as Ie,c8 as P,aX as G,F as at,C as ot,bb as it}from"./index-cy1M6gwN.js";import{F as C}from"./FuseExample-0-XNuDGL.js";import{D as lt}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d as Ce}from"./Star-p-Jqiqk5.js";import{d as rt}from"./Favorite-PH69A2db.js";import{d as st}from"./FavoriteBorder-nxMDITzO.js";import"./DocumentationNavigation-fvt_Eo8n.js";const ct=be(i.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),mt=be(i.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function ut(t){return We("MuiRating",t)}const dt=qe("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),D=dt,pt=["value"],ft=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function ht(t){const n=t.toString().split(".")[1];return n?n.length:0}function oe(t,n){if(t==null)return t;const o=Math.round(t/n)*n;return Number(o.toFixed(ht(n)))}const gt=t=>{const{classes:n,size:o,readOnly:d,disabled:R,emptyValueFocused:h,focusVisible:S}=t,w={root:["root",`size${Re(o)}`,R&&"disabled",S&&"focusVisible",d&&"readOnly"],label:["label","pristine"],labelEmptyValue:[h&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return tt(w,ut,n)},vt=H("span",{name:"MuiRating",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[{[`& .${D.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${Re(o.size)}`],o.readOnly&&n.readOnly]}})(({theme:t,ownerState:n})=>u({display:"inline-flex",position:"relative",fontSize:t.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${D.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${D.focusVisible} .${D.iconActive}`]:{outline:"1px solid #999"},[`& .${D.visuallyHidden}`]:Xe},n.size==="small"&&{fontSize:t.typography.pxToRem(18)},n.size==="large"&&{fontSize:t.typography.pxToRem(30)},n.readOnly&&{pointerEvents:"none"})),we=H("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:t},n)=>[n.label,t.emptyValueFocused&&n.labelEmptyValueActive]})(({ownerState:t})=>u({cursor:"inherit"},t.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),yt=H("span",{name:"MuiRating",slot:"Icon",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})(({theme:t,ownerState:n})=>u({display:"flex",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),pointerEvents:"none"},n.iconActive&&{transform:"scale(1.2)"},n.iconEmpty&&{color:(t.vars||t).palette.action.disabled})),xt=H("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:t=>Ye(t)&&t!=="iconActive",overridesResolver:(t,n)=>{const{iconActive:o}=t;return[n.decimal,o&&n.iconActive]}})(({iconActive:t})=>u({position:"relative"},t&&{transform:"scale(1.2)"}));function bt(t){const n=Se(t,pt);return i.jsx("span",u({},n))}function xe(t){const{classes:n,disabled:o,emptyIcon:d,focus:R,getLabelText:h,highlightSelectedOnly:S,hover:w,icon:U,IconContainerComponent:O,isActive:q,itemValue:p,labelProps:_,name:z,onBlur:Z,onChange:j,onClick:F,onFocus:W,readOnly:X,ownerState:m,ratingValue:g,ratingValueRounded:ee}=t,N=S?p===g:p<=g,Y=p<=w,T=p<=R,te=p===ee,k=Ve(),V=i.jsx(yt,{as:O,value:p,className:Q(n.icon,N?n.iconFilled:n.iconEmpty,Y&&n.iconHover,T&&n.iconFocus,q&&n.iconActive),ownerState:u({},m,{iconEmpty:!N,iconFilled:N,iconHover:Y,iconFocus:T,iconActive:q}),children:d&&!N?d:U});return X?i.jsx("span",u({},_,{children:V})):i.jsxs(x.Fragment,{children:[i.jsxs(we,u({ownerState:u({},m,{emptyValueFocused:void 0}),htmlFor:k},_,{children:[V,i.jsx("span",{className:n.visuallyHidden,children:h(p)})]})),i.jsx("input",{className:n.visuallyHidden,onFocus:W,onBlur:Z,onChange:j,onClick:F,disabled:o,value:p,id:k,type:"radio",name:z,checked:te})]})}const Rt=i.jsx(ct,{fontSize:"inherit"}),St=i.jsx(mt,{fontSize:"inherit"});function Vt(t){return`${t} Star${t!==1?"s":""}`}const It=x.forwardRef(function(n,o){const d=Ke({name:"MuiRating",props:n}),{className:R,defaultValue:h=null,disabled:S=!1,emptyIcon:w=St,emptyLabelText:U="Empty",getLabelText:O=Vt,highlightSelectedOnly:q=!1,icon:p=Rt,IconContainerComponent:_=bt,max:z=5,name:Z,onChange:j,onChangeActive:F,onMouseLeave:W,onMouseMove:X,precision:m=1,readOnly:g=!1,size:ee="medium",value:N}=d,Y=Se(d,ft),T=Ve(Z),[te,k]=Je({controlled:N,default:h,name:"Rating"}),V=oe(te,m),Ae=Qe(),[{hover:v,focus:K},E]=x.useState({hover:-1,focus:-1});let M=V;v!==-1&&(M=v),K!==-1&&(M=K);const{isFocusVisibleRef:he,onBlur:Be,onFocus:He,ref:Oe}=Ze(),[_e,ne]=x.useState(!1),ge=x.useRef(),ke=et(Oe,ge,o),Ee=l=>{X&&X(l);const s=ge.current,{right:f,left:J,width:$}=s.getBoundingClientRect();let A;Ae.direction==="rtl"?A=(f-l.clientX)/$:A=(l.clientX-J)/$;let y=oe(z*A+m/2,m);y=nt(y,m,z),E(I=>I.hover===y&&I.focus===y?I:{hover:y,focus:y}),ne(!1),F&&v!==y&&F(l,y)},Le=l=>{W&&W(l);const s=-1;E({hover:s,focus:s}),F&&v!==s&&F(l,s)},ve=l=>{let s=l.target.value===""?null:parseFloat(l.target.value);v!==-1&&(s=v),k(s),j&&j(l,s)},De=l=>{l.clientX===0&&l.clientY===0||(E({hover:-1,focus:-1}),k(null),j&&parseFloat(l.target.value)===V&&j(l,null))},Pe=l=>{He(l),he.current===!0&&ne(!0);const s=parseFloat(l.target.value);E(f=>({hover:f.hover,focus:s}))},Ge=l=>{if(v!==-1)return;Be(l),he.current===!1&&ne(!1);const s=-1;E(f=>({hover:f.hover,focus:s}))},[Ue,ye]=x.useState(!1),L=u({},d,{defaultValue:h,disabled:S,emptyIcon:w,emptyLabelText:U,emptyValueFocused:Ue,focusVisible:_e,getLabelText:O,icon:p,IconContainerComponent:_,max:z,precision:m,readOnly:g,size:ee}),b=gt(L);return i.jsxs(vt,u({ref:ke,onMouseMove:Ee,onMouseLeave:Le,className:Q(b.root,R,g&&"MuiRating-readOnly"),ownerState:L,role:g?"img":null,"aria-label":g?O(M):null},Y,{children:[Array.from(new Array(z)).map((l,s)=>{const f=s+1,J={classes:b,disabled:S,emptyIcon:w,focus:K,getLabelText:O,highlightSelectedOnly:q,hover:v,icon:p,IconContainerComponent:_,name:T,onBlur:Ge,onChange:ve,onClick:De,onFocus:Pe,ratingValue:M,ratingValueRounded:V,readOnly:g,ownerState:L},$=f===Math.ceil(M)&&(v!==-1||K!==-1);if(m<1){const A=Array.from(new Array(1/m));return i.jsx(xt,{className:Q(b.decimal,$&&b.iconActive),ownerState:L,iconActive:$,children:A.map((y,I)=>{const ae=oe(f-1+(I+1)*m,m);return i.jsx(xe,u({},J,{isActive:!1,itemValue:ae,labelProps:{style:A.length-1===I?{}:{width:ae===M?`${(I+1)*m*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),ae)})},f)}return i.jsx(xe,u({},J,{isActive:$,itemValue:f}),f)}),!g&&!S&&i.jsxs(we,{className:Q(b.label,b.labelEmptyValue),ownerState:L,children:[i.jsx("input",{className:b.visuallyHidden,value:"",id:`${T}-empty`,type:"radio",name:T,checked:V==null,onFocus:()=>ye(!0),onBlur:()=>ye(!1),onChange:ve}),i.jsx("span",{className:b.visuallyHidden,children:U})]})]}))}),c=It;function Ct(){const[t,n]=x.useState(2);return r(B,{sx:{"& > legend":{mt:2}},children:[e(a,{component:"legend",children:"Controlled"}),e(c,{name:"simple-controlled",value:t,onChange:(o,d)=>{n(d)}}),e(a,{component:"legend",children:"Read only"}),e(c,{name:"read-only",value:t,readOnly:!0}),e(a,{component:"legend",children:"Disabled"}),e(c,{name:"disabled",value:t,disabled:!0}),e(a,{component:"legend",children:"No rating given"}),e(c,{name:"no-value",value:null})]})}const wt=`import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
export default function BasicRating() {
    const [value, setValue] = React.useState(2);
    return (<Box sx={{
            '& > legend': { mt: 2 },
        }}>
      <Typography component="legend">Controlled</Typography>
      <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {
            setValue(newValue);
        }}/>
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly/>
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled/>
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null}/>
    </Box>);
}
`;function zt(){return r(Ie,{spacing:1,children:[e(c,{name:"half-rating",defaultValue:2.5,precision:.5}),e(c,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]})}const jt=`import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
export default function HalfRating() {
    return (<Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
    </Stack>);
}
`,ze={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function Ft(t){return`${t} Star${t!==1?"s":""}, ${ze[t]}`}function Nt(){const[t,n]=x.useState(2),[o,d]=x.useState(-1);return r(B,{sx:{width:200,display:"flex",alignItems:"center"},children:[e(c,{name:"hover-feedback",value:t,precision:.5,getLabelText:Ft,onChange:(R,h)=>{n(h)},onChangeActive:(R,h)=>{d(h)},emptyIcon:e(Ce,{style:{opacity:.55},fontSize:"inherit"})}),t!==null&&e(B,{sx:{ml:2},children:ze[o!==-1?o:t]})]})}const Tt=`import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
function getLabelText(value) {
    return \`\${value} Star\${value !== 1 ? 's' : ''}, \${labels[value]}\`;
}
export default function HoverRating() {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    return (<Box sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
        }}>
      <Rating name="hover-feedback" value={value} precision={0.5} getLabelText={getLabelText} onChange={(event, newValue) => {
            setValue(newValue);
        }} onChangeActive={(event, newHover) => {
            setHover(newHover);
        }} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}/>
      {value !== null && (<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>)}
    </Box>);
}
`;function Mt(){return r(Ie,{spacing:1,children:[e(c,{name:"size-small",defaultValue:2,size:"small"}),e(c,{name:"size-medium",defaultValue:2}),e(c,{name:"size-large",defaultValue:2,size:"large"})]})}const $t=`import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
export default function RatingSize() {
    return (<Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small"/>
      <Rating name="size-medium" defaultValue={2}/>
      <Rating name="size-large" defaultValue={2} size="large"/>
    </Stack>);
}
`,At=H(c)({"& .MuiRating-iconFilled":{color:"#ff6d75"},"& .MuiRating-iconHover":{color:"#ff3d47"}});function Bt(){return r(B,{sx:{"& > legend":{mt:2}},children:[e(a,{component:"legend",children:"Custom icon and color"}),e(At,{name:"customized-color",defaultValue:2,getLabelText:t=>`${t} Heart${t!==1?"s":""}`,precision:.5,icon:e(rt,{fontSize:"inherit"}),emptyIcon:e(st,{fontSize:"inherit"})}),e(a,{component:"legend",children:"10 stars"}),e(c,{name:"customized-10",defaultValue:2,max:10})]})}const Ht=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});
export default function CustomizedRating() {
    return (<Box sx={{
            '& > legend': { mt: 2 },
        }}>
      <Typography component="legend">Custom icon and color</Typography>
      <StyledRating name="customized-color" defaultValue={2} getLabelText={(value) => \`\${value} Heart\${value !== 1 ? 's' : ''}\`} precision={0.5} icon={<FavoriteIcon fontSize="inherit"/>} emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}/>
      <Typography component="legend">10 stars</Typography>
      <Rating name="customized-10" defaultValue={2} max={10}/>
    </Box>);
}
`;var me={},Ot=G;Object.defineProperty(me,"__esModule",{value:!0});var je=me.default=void 0,_t=Ot(P()),ie=i;je=me.default=(0,_t.default)([(0,ie.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,ie.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,ie.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5"},"2")],"SentimentVeryDissatisfied");var ue={},kt=G;Object.defineProperty(ue,"__esModule",{value:!0});var Fe=ue.default=void 0,Et=kt(P()),le=i;Fe=ue.default=(0,Et.default)([(0,le.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,le.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,le.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-3.5c.73 0 1.39.19 1.97.53.12-.14.86-.98 1.01-1.14-.85-.56-1.87-.89-2.98-.89-1.11 0-2.13.33-2.99.88.97 1.09.01.02 1.01 1.14.59-.33 1.25-.52 1.98-.52"},"2")],"SentimentDissatisfied");var de={},Lt=G;Object.defineProperty(de,"__esModule",{value:!0});var Ne=de.default=void 0,Dt=Lt(P()),re=i;Ne=de.default=(0,Dt.default)([(0,re.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,re.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,re.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-4c-.73 0-1.38-.18-1.96-.52-.12.14-.86.98-1.01 1.15.86.55 1.87.87 2.97.87 1.11 0 2.12-.33 2.98-.88-.97-1.09-.01-.02-1.01-1.15-.59.35-1.24.53-1.97.53"},"2")],"SentimentSatisfied");var pe={},Pt=G;Object.defineProperty(pe,"__esModule",{value:!0});var Te=pe.default=void 0,Gt=Pt(P()),se=i;Te=pe.default=(0,Gt.default)([(0,se.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,se.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,se.jsx)("path",{d:"M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2m-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"2")],"SentimentSatisfiedAltOutlined");var fe={},Ut=G;Object.defineProperty(fe,"__esModule",{value:!0});var Me=fe.default=void 0,qt=Ut(P()),ce=i;Me=fe.default=(0,qt.default)([(0,ce.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,ce.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,ce.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4z"},"2")],"SentimentVerySatisfied");const Wt=H(c)(({theme:t})=>({"& .MuiRating-iconEmpty .MuiSvgIcon-root":{color:t.palette.action.disabled}})),$e={1:{icon:e(je,{color:"error"}),label:"Very Dissatisfied"},2:{icon:e(Fe,{color:"error"}),label:"Dissatisfied"},3:{icon:e(Ne,{color:"warning"}),label:"Neutral"},4:{icon:e(Te,{color:"success"}),label:"Satisfied"},5:{icon:e(Me,{color:"success"}),label:"Very Satisfied"}};function Xt(t){const{value:n,...o}=t;return e("span",{...o,children:$e[n].icon})}function Yt(){return e(Wt,{name:"highlight-selected-only",defaultValue:2,IconContainerComponent:Xt,getLabelText:t=>$e[t].label,highlightSelectedOnly:!0})}const Kt=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));
const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error"/>,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error"/>,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning"/>,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success"/>,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success"/>,
        label: 'Very Satisfied',
    },
};
function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}
export default function RadioGroupRating() {
    return (<StyledRating name="highlight-selected-only" defaultValue={2} IconContainerComponent={IconContainer} getLabelText={(value) => customIcons[value].label} highlightSelectedOnly/>);
}
`,Jt={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function Qt(){return r(B,{sx:{width:200,display:"flex",alignItems:"center"},children:[e(c,{name:"text-feedback",value:3.5,readOnly:!0,precision:.5,emptyIcon:e(Ce,{style:{opacity:.55},fontSize:"inherit"})}),e(B,{sx:{ml:2},children:Jt[3.5]})]})}const Zt=`import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
export default function TextRating() {
    const value = 3.5;
    return (<Box sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
        }}>
      <Rating name="text-feedback" value={value} readOnly precision={0.5} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}/>
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>);
}
`;function sn(t){return r(it,{children:[r("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(lt,{}),e(ot,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/rating",target:"_blank",role:"button",size:"small",startIcon:e(at,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(a,{className:"text-32 my-16 font-700",component:"h1",children:"Rating"}),e(a,{className:"description",children:"Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own."}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic rating"}),e(a,{className:"text-14 mb-32",component:"div",children:e(C,{name:"BasicRating.js",className:"my-16",iframe:!1,component:Ct,raw:wt})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Rating precision"}),r(a,{className:"text-14 mb-32",component:"div",children:["The rating can display any float number with the ",e("code",{children:"value"})," prop. Use the ",e("code",{children:"precision"})," prop to define the minimum increment value change allowed."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(C,{name:"HalfRating.js",className:"my-16",iframe:!1,component:zt,raw:jt})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Hover feedback"}),r(a,{className:"text-14 mb-32",component:"div",children:["You can display a label on hover to help the user pick the correct rating value. The demo uses the ",e("code",{children:"onChangeActive"})," prop."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(C,{name:"HoverRating.js",className:"my-16",iframe:!1,component:Nt,raw:Tt})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Sizes"}),r(a,{className:"text-14 mb-32",component:"div",children:["For larger or smaller ratings use the ",e("code",{children:"size"})," prop."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(C,{name:"RatingSize.js",className:"my-16",iframe:!1,component:Mt,raw:$t})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),r(a,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(C,{name:"CustomizedRating.js",className:"my-16",iframe:!1,component:Bt,raw:Ht})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Radio group"}),r(a,{className:"text-14 mb-32",component:"div",children:["The rating is implemented with a radio group, set ",e("code",{children:"highlightSelectedOnly"})," to restore the natural behavior."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(C,{name:"RadioGroupRating.js",className:"my-16",iframe:!1,component:Yt,raw:Kt})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),r(a,{className:"text-14 mb-32",component:"div",children:["(",e("a",{href:"https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating",children:"WAI tutorial"}),")"]}),e(a,{className:"text-14 mb-32",component:"div",children:"The accessibility of this component relies on:"}),r("ul",{className:"space-y-16",children:[r("li",{children:["A radio group with its fields visually hidden. It contains six radio buttons, one for each star, and another for 0 stars that is checked by default. Be sure to provide a value for the ",e("code",{children:"name"})," prop that is unique to the parent form."]}),r("li",{children:['Labels for the radio buttons containing actual text ("1 Star", "2 Stars", …). Be sure to provide a suitable function to the ',e("code",{children:"getLabelText"})," prop when the page is in a language other than English. You can use the ",e("a",{href:"https://mui.com/material-ui/guides/localization/",children:"included locales"}),", or provide your own."]}),r("li",{children:["A visually distinct appearance for the rating icons. By default, the rating component uses both a difference of color and shape (filled and empty icons) to indicate the value. In the event that you are using color as the only means to indicate the value, the information should also be also displayed as text, as in this demo. This is important to match ",e("a",{href:"https://www.w3.org/TR/WCAG21/#use-of-color",children:"success Criterion 1.4.1"})," of WCAG2.1."]})]}),e(a,{className:"text-14 mb-32",component:"div",children:e(C,{name:"TextRating.js",className:"my-16",iframe:!1,component:Qt,raw:Zt})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),e(a,{className:"text-14 mb-32",component:"div",children:'The read only rating has a role of "img", and an aria-label that describes the displayed rating.'}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),e(a,{className:"text-14 mb-32",component:"div",children:"Because the rating component uses radio buttons, keyboard interaction follows the native browser behavior. Tab will focus the current rating, and cursor keys control the selected rating."}),e(a,{className:"text-14 mb-32",component:"div",children:"The read only rating is not focusable."})]})}export{sn as default};
