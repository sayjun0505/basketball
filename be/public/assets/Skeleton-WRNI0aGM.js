import{d as a,j as e,cI as y,H as r,T as t,B as d,z as w,r as v,bd as x,be as k,s as b,F as S,C as A,dp as c,bb as C}from"./index-cy1M6gwN.js";import{F as l}from"./FuseExample-0-XNuDGL.js";import{D as B}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{S as o}from"./Skeleton-13Q7Azvm.js";import{G as m}from"./Grid-zsqRuuCl.js";import{d as T}from"./MoreVert-mQ2kCqbl.js";import{C as N}from"./CardHeader-20r1v0U5.js";import{C as I}from"./CardMedia-8pIk072T.js";import"./DocumentationNavigation-fvt_Eo8n.js";function D(){return a(y,{spacing:1,children:[e(o,{variant:"text",sx:{fontSize:"1rem"}}),e(o,{variant:"circular",width:40,height:40}),e(o,{variant:"rectangular",width:210,height:60}),e(o,{variant:"rounded",width:210,height:60})]})}const F=`import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
export default function Variants() {
    return (<Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }}/>

      {/* For other variants, adjust the size with \`width\` and \`height\` */}
      <Skeleton variant="circular" width={40} height={40}/>
      <Skeleton variant="rectangular" width={210} height={60}/>
      <Skeleton variant="rounded" width={210} height={60}/>
    </Stack>);
}
`;function j(){return a(r,{sx:{width:300},children:[e(o,{}),e(o,{animation:"wave"}),e(o,{animation:!1})]})}const M=`import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
export default function Animations() {
    return (<Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave"/>
      <Skeleton animation={false}/>
    </Box>);
}
`,G=[{src:"https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",title:"Don Diablo @ Tomorrowland Main Stage 2019 | Official…",channel:"Don Diablo",views:"396k views",createdAt:"a week ago"},{src:"https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",title:"Queen - Greatest Hits",channel:"Queen Official",views:"40M views",createdAt:"3 years ago"},{src:"https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",title:"Calvin Harris, Sam Smith - Promises (Official Video)",channel:"Calvin Harris",views:"130M views",createdAt:"10 months ago"}];function h(s){const{loading:i=!1}=s;return e(m,{container:!0,wrap:"nowrap",children:(i?Array.from(new Array(3)):G).map((n,f)=>a(r,{sx:{width:210,marginRight:.5,my:5},children:[n?e("img",{style:{width:210,height:118},alt:n.title,src:n.src}):e(o,{variant:"rectangular",width:210,height:118}),n?a(r,{sx:{pr:2},children:[e(t,{gutterBottom:!0,variant:"body2",children:n.title}),e(t,{display:"block",variant:"caption",color:"text.secondary",children:n.channel}),e(t,{variant:"caption",color:"text.secondary",children:`${n.views} • ${n.createdAt}`})]}):a(r,{sx:{pt:.5},children:[e(o,{}),e(o,{width:"60%"})]})]},f))})}function R(){return a(r,{sx:{overflow:"hidden"},children:[e(h,{loading:!0}),e(h,{})]})}const Y=`import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
const data = [
    {
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396k views',
        createdAt: 'a week ago',
    },
    {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40M views',
        createdAt: '3 years ago',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130M views',
        createdAt: '10 months ago',
    },
];
function Media(props) {
    const { loading = false } = props;
    return (<Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (<Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          {item ? (<img style={{ width: 210, height: 118 }} alt={item.title} src={item.src}/>) : (<Skeleton variant="rectangular" width={210} height={118}/>)}
          {item ? (<Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {\`\${item.views} • \${item.createdAt}\`}
              </Typography>
            </Box>) : (<Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%"/>
            </Box>)}
        </Box>))}
    </Grid>);
}
export default function YouTube() {
    return (<Box sx={{ overflow: 'hidden' }}>
      <Media loading/>
      <Media />
    </Box>);
}
`;function p(s){const{loading:i=!1}=s;return a(k,{sx:{maxWidth:345,m:2},children:[e(N,{avatar:i?e(o,{animation:"wave",variant:"circular",width:40,height:40}):e(d,{alt:"Ted talk",src:"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"}),action:i?null:e(w,{"aria-label":"settings",children:e(T,{})}),title:i?e(o,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}):"Ted",subheader:i?e(o,{animation:"wave",height:10,width:"40%"}):"5 hours ago"}),i?e(o,{sx:{height:190},animation:"wave",variant:"rectangular"}):e(I,{component:"img",height:"140",image:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",alt:"Nicola Sturgeon on a TED talk stage"}),e(x,{children:i?a(v.Fragment,{children:[e(o,{animation:"wave",height:10,style:{marginBottom:6}}),e(o,{animation:"wave",height:10,width:"80%"})]}):e(t,{variant:"body2",color:"text.secondary",component:"p",children:"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"})})]})}function q(){return a("div",{children:[e(p,{loading:!0}),e(p,{})]})}const E=`import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
function Media(props) {
    const { loading = false } = props;
    return (<Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader avatar={loading ? (<Skeleton animation="wave" variant="circular" width={40} height={40}/>) : (<Avatar alt="Ted talk" src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"/>)} action={loading ? null : (<IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>)} title={loading ? (<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>) : ('Ted')} subheader={loading ? (<Skeleton animation="wave" height={10} width="40%"/>) : ('5 hours ago')}/>
      {loading ? (<Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular"/>) : (<CardMedia component="img" height="140" image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512" alt="Nicola Sturgeon on a TED talk stage"/>)}
      <CardContent>
        {loading ? (<React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }}/>
            <Skeleton animation="wave" height={10} width="80%"/>
          </React.Fragment>) : (<Typography variant="body2" color="text.secondary" component="p">
            {"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"}
          </Typography>)}
      </CardContent>
    </Card>);
}
export default function Facebook() {
    return (<div>
      <Media loading/>
      <Media />
    </div>);
}
`,P=["h1","h3","body1","caption"];function g(s){const{loading:i=!1}=s;return e("div",{children:P.map(n=>e(t,{component:"div",variant:n,children:i?e(o,{}):n},n))})}function _(){return a(m,{container:!0,spacing:8,children:[e(m,{item:!0,xs:!0,children:e(g,{loading:!0})}),e(m,{item:!0,xs:!0,children:e(g,{})})]})}const X=`import * as React from 'react';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
const variants = [
    'h1',
    'h3',
    'body1',
    'caption',
];
function TypographyDemo(props) {
    const { loading = false } = props;
    return (<div>
      {variants.map((variant) => (<Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>))}
    </div>);
}
export default function SkeletonTypography() {
    return (<Grid container spacing={8}>
      <Grid item xs>
        <TypographyDemo loading/>
      </Grid>
      <Grid item xs>
        <TypographyDemo />
      </Grid>
    </Grid>);
}
`,z=b("img")({width:"100%"});function u(s){const{loading:i=!1}=s;return a("div",{children:[a(r,{sx:{display:"flex",alignItems:"center"},children:[e(r,{sx:{margin:1},children:i?e(o,{variant:"circular",children:e(d,{})}):e(d,{src:"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"})}),e(r,{sx:{width:"100%"},children:i?e(o,{width:"100%",children:e(t,{children:"."})}):e(t,{children:"Ted"})})]}),i?e(o,{variant:"rectangular",width:"100%",children:e("div",{style:{paddingTop:"57%"}})}):e(z,{src:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",alt:""})]})}function H(){return a(m,{container:!0,spacing:8,children:[e(m,{item:!0,xs:!0,children:e(u,{loading:!0})}),e(m,{item:!0,xs:!0,children:e(u,{})})]})}const V=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
const Image = styled('img')({
    width: '100%',
});
function SkeletonChildrenDemo(props) {
    const { loading = false } = props;
    return (<div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ margin: 1 }}>
          {loading ? (<Skeleton variant="circular">
              <Avatar />
            </Skeleton>) : (<Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"/>)}
        </Box>
        <Box sx={{ width: '100%' }}>
          {loading ? (<Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>) : (<Typography>Ted</Typography>)}
        </Box>
      </Box>
      {loading ? (<Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: '57%' }}/>
        </Skeleton>) : (<Image src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512" alt=""/>)}
    </div>);
}
export default function SkeletonChildren() {
    return (<Grid container spacing={8}>
      <Grid item xs>
        <SkeletonChildrenDemo loading/>
      </Grid>
      <Grid item xs>
        <SkeletonChildrenDemo />
      </Grid>
    </Grid>);
}
`;function Q(){return e(r,{sx:{bgcolor:"#121212",p:8,width:"100%",display:"flex",justifyContent:"center"},children:e(o,{sx:{bgcolor:"grey.900"},variant:"rectangular",width:210,height:118})})}const O=`import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
export default function SkeletonColor() {
    return (<Box sx={{
            bgcolor: '#121212',
            p: 8,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        }}>
      <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={210} height={118}/>
    </Box>);
}
`;function ae(s){return a(C,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(B,{}),e(A,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/skeleton",target:"_blank",role:"button",size:"small",startIcon:e(S,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Skeleton"}),e(t,{className:"description",children:"Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration."}),a(t,{className:"text-14 mb-32",component:"div",children:["The data for your components might not be immediately available. You can improve the perceived responsiveness of the page by using skeletons. It feels like things are happening immediately, then the information is incrementally displayed on the screen (Cf. ",e("a",{href:"https://www.lukew.com/ff/entry.asp?1797",children:"Avoid The Spinner"}),")."]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Usage"}),a(t,{className:"text-14 mb-32",component:"div",children:["The component is designed to be used ",e("strong",{children:"directly in your components"}),". For instance:"]}),e(c,{component:"pre",className:"language-jsx",children:` 
{
  item ? (
    <img
      style={{
        width: 210,
        height: 118,
      
      alt={item.title}
      src={item.src}
    //>
  ) : (
    <Skeleton variant="rectangular" width={210} height={118} />
  );
}
`}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Variants"}),e(t,{className:"text-14 mb-32",component:"div",children:"The component supports 4 shape variants:"}),a("ul",{className:"space-y-16",children:[a("li",{children:[e("code",{children:"text"})," (default): represents a single line of text (you can adjust the height via font size)."]}),a("li",{children:[e("code",{children:"circular"}),", ",e("code",{children:"rectangular"}),", and ",e("code",{children:"rounded"}),": come with different border radius to let you take control of the size."]})]}),e(t,{className:"text-14 mb-32",component:"div",children:e(l,{name:"Variants.js",className:"my-16",iframe:!1,component:D,raw:F})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Animations"}),e(t,{className:"text-14 mb-32",component:"div",children:"By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely."}),e(t,{className:"text-14 mb-32",component:"div",children:e(l,{name:"Animations.js",className:"my-16",iframe:!1,component:j,raw:M})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Pulsate example"}),e(t,{className:"text-14 mb-32",component:"div",children:e(l,{name:"YouTube.js",className:"my-16",iframe:!1,component:R,raw:Y})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Wave example"}),e(t,{className:"text-14 mb-32",component:"div",children:e(l,{name:"Facebook.js",className:"my-16",iframe:!1,component:q,raw:E})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Inferring dimensions"}),a(t,{className:"text-14 mb-32",component:"div",children:["In addition to accepting ",e("code",{children:"width"})," and ",e("code",{children:"height"})," props, the component can also infer the dimensions."]}),a(t,{className:"text-14 mb-32",component:"div",children:["It works well when it comes to typography as its height is set using ",e("code",{children:"em"})," units."]}),e(c,{component:"pre",className:"language-jsx",children:` 
<Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>
`}),e(t,{className:"text-14 mb-32",component:"div",children:e(l,{name:"SkeletonTypography.js",className:"my-16",iframe:!1,component:_,raw:X})}),a(t,{className:"text-14 mb-32",component:"div",children:["But when it comes to other components, you may not want to repeat the width and height. In these instances, you can pass ",e("code",{children:"children"})," and it will infer its width and height from them."]}),e(c,{component:"pre",className:"language-jsx",children:` 
loading ? (
  <Skeleton variant="circular">
    <Avatar />
  </Skeleton>
) : (
  <Avatar src={data.avatar} />
);
`}),e(t,{className:"text-14 mb-32",component:"div",children:e(l,{name:"SkeletonChildren.js",className:"my-16",iframe:!1,component:H,raw:V})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),a(t,{className:"text-14 mb-32",component:"div",children:["The color of the component can be customized by changing its ",e("code",{children:"background-color"})," CSS property. This is especially useful when on a black background (as the skeleton will otherwise be invisible)."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(l,{name:"SkeletonColor.js",className:"my-16",iframe:!1,component:Q,raw:O})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),e(t,{className:"text-14 mb-32",component:"div",children:"Skeleton screens provide an alternative to the traditional spinner method. Rather than showing an abstract widget, skeleton screens create anticipation of what is to come and reduce cognitive load."}),e(t,{className:"text-14 mb-32",component:"div",children:"The background color of the skeleton uses the least amount of luminance to be visible in good conditions (good ambient light, good screen, no visual impairments)."}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),e(t,{className:"text-14 mb-32",component:"div",children:"None."}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),e(t,{className:"text-14 mb-32",component:"div",children:"The skeleton is not focusable."})]})}export{ae as default};
