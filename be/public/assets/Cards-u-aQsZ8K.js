import{b2 as H,b1 as P,s as w,cg as W,r as B,cc as $,ae as F,ag as h,ac as q,x as N,ah as D,d as t,bz as i,j as e,T as a,C as s,bA as d,H as u,z as c,B as O,d4 as V,ck as U,ay as T,az as M,K,F as G,dz as J,bx as Q}from"./index-3voNJrtd.js";import{F as n}from"./FuseExample-L3LbvVcu.js";import{D as X}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{C as m}from"./CardActions-AIz6vnQw.js";import{d as Y}from"./Favorite-fZvGZ4-Q.js";import{d as Z}from"./Share-NrmGvzXP.js";import{d as ee}from"./ExpandMore-XrZvfZqR.js";import{d as ae}from"./MoreVert-w3bGWZJk.js";import{C as te}from"./CardHeader-TzKe9F5w.js";import{C as p}from"./CardMedia--SkDO_oj.js";import"./DocumentationNavigation-us8sikvN.js";function re(r){return P("MuiCardActionArea",r)}const oe=H("MuiCardActionArea",["root","focusVisible","focusHighlight"]),C=oe,ie=["children","className","focusVisibleClassName"],ne=r=>{const{classes:o}=r;return D({root:["root"],focusHighlight:["focusHighlight"]},re,o)},se=w(W,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(r,o)=>o.root})(({theme:r})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${C.focusHighlight}`]:{opacity:(r.vars||r).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${C.focusVisible} .${C.focusHighlight}`]:{opacity:(r.vars||r).palette.action.focusOpacity}})),de=w("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(r,o)=>o.focusHighlight})(({theme:r})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:r.transitions.create("opacity",{duration:r.transitions.duration.short})})),ce=B.forwardRef(function(o,l){const g=$({props:o,name:"MuiCardActionArea"}),{children:S,className:L,focusVisibleClassName:_}=g,E=F(g,ie),f=g,y=ne(f);return h.jsxs(se,q({className:N(y.root,L),focusVisibleClassName:N(_,y.focusVisible),ref:l,ownerState:f},E,{children:[S,h.jsx(de,{className:y.focusHighlight,ownerState:f})]}))}),j=ce,x=e(u,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"•"});function le(){return t(d,{sx:{minWidth:275},children:[t(i,{children:[e(a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),t(a,{variant:"h5",component:"div",children:["be",x,"nev",x,"o",x,"lent"]}),e(a,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),t(a,{variant:"body2",children:["well meaning and kindly.",e("br",{}),'"a benevolent smile"']})]}),e(m,{children:e(s,{size:"small",children:"Learn More"})})]})}const me=`import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const bull = (<Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>);
export default function BasicCard() {
    return (<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>);
}
`,v=e(u,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"•"}),pe=t(B.Fragment,{children:[t(i,{children:[e(a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),t(a,{variant:"h5",component:"div",children:["be",v,"nev",v,"o",v,"lent"]}),e(a,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),t(a,{variant:"body2",children:["well meaning and kindly.",e("br",{}),'"a benevolent smile"']})]}),e(m,{children:e(s,{size:"small",children:"Learn More"})})]});function he(){return e(u,{sx:{minWidth:275},children:e(d,{variant:"outlined",children:pe})})}const ue=`import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const bull = (<Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>);
const card = (<React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>);
export default function OutlinedCard() {
    return (<Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>);
}
`,ge=w(r=>{const{expand:o,...l}=r;return e(c,{...l})})(({theme:r,expand:o})=>({transform:o?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:r.transitions.create("transform",{duration:r.transitions.duration.shortest})}));function fe(){const[r,o]=B.useState(!1),l=()=>{o(!r)};return t(d,{sx:{maxWidth:345},children:[e(te,{avatar:e(O,{sx:{bgcolor:V[500]},"aria-label":"recipe",children:"R"}),action:e(c,{"aria-label":"settings",children:e(ae,{})}),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),e(p,{component:"img",height:"194",image:"/material-ui-static/images/cards/paella.jpg",alt:"Paella dish"}),e(i,{children:e(a,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),t(m,{disableSpacing:!0,children:[e(c,{"aria-label":"add to favorites",children:e(Y,{})}),e(c,{"aria-label":"share",children:e(Z,{})}),e(ge,{expand:r,onClick:l,"aria-expanded":r,"aria-label":"show more",children:e(ee,{})})]}),e(U,{in:r,timeout:"auto",unmountOnExit:!0,children:t(i,{children:[e(a,{paragraph:!0,children:"Method:"}),e(a,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."}),e(a,{paragraph:!0,children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."}),e(a,{paragraph:!0,children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.)"}),e(a,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]})}const ye=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other}/>;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (<Card sx={{ maxWidth: 345 }}>
      <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>} action={<IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>} title="Shrimp and Chorizo Paella" subheader="September 14, 2016"/>
      <CardMedia component="img" height="194" image="/material-ui-static/images/cards/paella.jpg" alt="Paella dish"/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>);
}
`;function Ce(){return t(d,{sx:{maxWidth:345},children:[e(p,{sx:{height:140},image:"/material-ui-static/images/cards/contemplative-reptile.jpg",title:"green iguana"}),t(i,{children:[e(a,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),e(a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]}),t(m,{children:[e(s,{size:"small",children:"Share"}),e(s,{size:"small",children:"Learn More"})]})]})}const xe=`import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function MediaCard() {
    return (<Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image="/material-ui-static/images/cards/contemplative-reptile.jpg" title="green iguana"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>);
}
`;function ve(){return t(d,{sx:{maxWidth:345},children:[e(p,{component:"img",alt:"green iguana",height:"140",image:"/material-ui-static/images/cards/contemplative-reptile.jpg"}),t(i,{children:[e(a,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),e(a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]}),t(m,{children:[e(s,{size:"small",children:"Share"}),e(s,{size:"small",children:"Learn More"})]})]})}const be=`import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function ImgMediaCard() {
    return (<Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="140" image="/material-ui-static/images/cards/contemplative-reptile.jpg"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>);
}
`;function Ae(){return e(d,{sx:{maxWidth:345},children:t(j,{children:[e(p,{component:"img",height:"140",image:"/material-ui-static/images/cards/contemplative-reptile.jpg",alt:"green iguana"}),t(i,{children:[e(a,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),e(a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]})})}const we=`import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export default function ActionAreaCard() {
    return (<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image="/material-ui-static/images/cards/contemplative-reptile.jpg" alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>);
}
`;function Be(){return t(d,{sx:{maxWidth:345},children:[t(j,{children:[e(p,{component:"img",height:"140",image:"/material-ui-static/images/cards/contemplative-reptile.jpg",alt:"green iguana"}),t(i,{children:[e(a,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),e(a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),e(m,{children:e(s,{size:"small",color:"primary",children:"Share"})})]})}const Te=`import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
export default function MultiActionAreaCard() {
    return (<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image="/material-ui-static/images/cards/contemplative-reptile.jpg" alt="green iguana"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>);
}
`;var k={},Me=M;Object.defineProperty(k,"__esModule",{value:!0});var b=k.default=void 0,ke=Me(T()),Ie=h;b=k.default=(0,ke.default)((0,Ie.jsx)("path",{d:"M6 6h2v12H6zm3.5 6 8.5 6V6z"}),"SkipPrevious");var I={},ze=M;Object.defineProperty(I,"__esModule",{value:!0});var R=I.default=void 0,Ne=ze(T()),je=h;R=I.default=(0,Ne.default)((0,je.jsx)("path",{d:"M8 5v14l11-7z"}),"PlayArrow");var z={},Re=M;Object.defineProperty(z,"__esModule",{value:!0});var A=z.default=void 0,Se=Re(T()),Le=h;A=z.default=(0,Se.default)((0,Le.jsx)("path",{d:"m6 18 8.5-6L6 6zM16 6v12h2V6z"}),"SkipNext");function _e(){const r=K();return t(d,{sx:{display:"flex"},children:[t(u,{sx:{display:"flex",flexDirection:"column"},children:[t(i,{sx:{flex:"1 0 auto"},children:[e(a,{component:"div",variant:"h5",children:"Live From Space"}),e(a,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}),t(u,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},children:[e(c,{"aria-label":"previous",children:r.direction==="rtl"?e(A,{}):e(b,{})}),e(c,{"aria-label":"play/pause",children:e(R,{sx:{height:38,width:38}})}),e(c,{"aria-label":"next",children:r.direction==="rtl"?e(b,{}):e(A,{})})]})]}),e(p,{component:"img",sx:{width:151},image:"/material-ui-static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]})}const Ee=`import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
export default function MediaControlCard() {
    const theme = useTheme();
    return (<Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }}/>
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia component="img" sx={{ width: 151 }} image="/material-ui-static/images/cards/live-from-space.jpg" alt="Live from space album cover"/>
    </Card>);
}
`;function Ge(r){return t(Q,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(X,{}),e(s,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/cards",target:"_blank",role:"button",size:"small",startIcon:e(G,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(a,{className:"text-32 my-16 font-700",component:"h1",children:"Card"}),e(a,{className:"description",children:"Cards contain content and actions about a single subject."}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Introduction"}),e(a,{className:"text-14 mb-32",component:"div",children:"Cards are surfaces that display content and actions on a single topic. The Material UI Card component includes several complementary utility components to handle various use cases:"}),t("ul",{className:"space-y-16",children:[e("li",{children:"Card: a surface-level container for grouping related components."}),e("li",{children:"Card Content: the wrapper for the Card content."}),e("li",{children:"Card Header: an optional wrapper for the Card header."}),e("li",{children:"Card Media: an optional container for displaying background images and gradient layers behind the Card Content."}),e("li",{children:"Card Actions: an optional wrapper that groups a set of buttons."}),e("li",{children:"Card Action Area: an optional wrapper that allows users to interact with the specified area of the Card."})]}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"BasicCard.js",className:"my-16",iframe:!1,component:le,raw:me})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basics"}),e(J,{component:"pre",className:"language-jsx",children:` 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
`}),e(a,{className:"text-14 mb-32",component:"div",children:":::success Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are meant to be entry points to more complex and detailed information. :::"}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Outlined Card"}),t(a,{className:"text-14 mb-32",component:"div",children:["Set ",e("code",{children:'variant="outlined"'})," to render an outlined card."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"OutlinedCard.js",className:"my-16",iframe:!1,component:he,raw:ue})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Complex Interaction"}),e(a,{className:"text-14 mb-32",component:"div",children:"On desktop, card content can expand. (Click the downward chevron to view the recipe.)"}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"RecipeReviewCard.js",className:"my-16",iframe:!1,component:fe,raw:ye})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Media"}),e(a,{className:"text-14 mb-32",component:"div",children:"Example of a card using an image to reinforce the content."}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"MediaCard.js",className:"my-16",iframe:!1,component:Ce,raw:xe})}),t(a,{className:"text-14 mb-32",component:"div",children:["By default, we use the combination of a ",e("code",{children:"<div>"})," element and a ",e("em",{children:"background image"})," to display the media. It can be problematic in some situations, for example, you might want to display a video or a responsive image. Use the ",e("code",{children:"component"})," prop for these use cases:"]}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"ImgMediaCard.js",className:"my-16",iframe:!1,component:ve,raw:be})}),t(a,{className:"text-14 mb-32",component:"div",children:[":::warning When ",e("code",{children:'component="img"'}),", CardMedia relies on ",e("code",{children:"object-fit"})," for centering the image. It's not supported by IE11. :::"]}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Primary action"}),t(a,{className:"text-14 mb-32",component:"div",children:["Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a ",e("code",{children:"CardActionArea"})," component."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"ActionAreaCard.js",className:"my-16",iframe:!1,component:Ae,raw:we})}),e(a,{className:"text-14 mb-32",component:"div",children:"A card can also offer supplemental actions which should stand detached from the main action area in order to avoid event overlap."}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"MultiActionAreaCard.js",className:"my-16",iframe:!1,component:Be,raw:Te})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"UI Controls"}),e(a,{className:"text-14 mb-32",component:"div",children:"Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card."}),e(a,{className:"text-14 mb-32",component:"div",children:"Here's an example of a media control card."}),e(a,{className:"text-14 mb-32",component:"div",children:e(n,{name:"MediaControlCard.js",className:"my-16",iframe:!1,component:_e,raw:Ee})}),t(a,{className:"text-14 mb-32",component:"div",children:["🎨 If you are looking for inspiration, you can check ",e("a",{href:"https://mui-treasury.com/?path=/docs/card-introduction--docs",children:"MUI Treasury's customization examples"}),"."]})]})}export{Ge as default};
