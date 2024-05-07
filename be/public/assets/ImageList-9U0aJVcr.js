import{b1 as T,b2 as j,s as H,ac as c,r as f,cc as z,ae as M,ag as b,x as _,ah as R,j as t,H as v,ay as F,az as P,d as n,L as K,z as k,F as W,C as q,T as a,bx as Q}from"./index-3voNJrtd.js";import{F as l}from"./FuseExample-L3LbvVcu.js";import{D as E}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{b as Y,I as m,a as u}from"./ImageListItemBar-GTejK-4h.js";import{d as U}from"./StarBorder-KN8abLkG.js";import"./DocumentationNavigation-us8sikvN.js";function A(e){return T("MuiImageList",e)}j("MuiImageList",["root","masonry","quilted","standard","woven"]);const J=["children","className","cols","component","rowHeight","gap","style","variant"],O=e=>{const{classes:s,variant:o}=e;return R({root:["root",o]},A,s)},V=H("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:o}=e;return[s.root,s[o.variant]]}})(({ownerState:e})=>c({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},e.variant==="masonry"&&{display:"block"})),Z=f.forwardRef(function(s,o){const i=z({props:s,name:"MuiImageList"}),{children:g,className:C,cols:w=2,component:L="ul",rowHeight:d="auto",gap:r=4,style:x,variant:p="standard"}=i,$=M(i,J),D=f.useMemo(()=>({rowHeight:d,gap:r,variant:p}),[d,r,p]);f.useEffect(()=>{},[]);const N=p==="masonry"?c({columnCount:w,columnGap:r},x):c({gridTemplateColumns:`repeat(${w}, 1fr)`,gap:r},x),y=c({},i,{component:L,gap:r,rowHeight:d,variant:p}),B=O(y);return b.jsx(V,c({as:L,className:_(B.root,B[p],C),ref:o,style:N,ownerState:y},$,{children:b.jsx(Y.Provider,{value:D,children:g})}))}),h=Z;function G(){return t(h,{sx:{width:500,height:450},cols:3,rowHeight:164,children:X.map(e=>t(m,{children:t("img",{srcSet:`${e.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`,src:`${e.img}?w=164&h=164&fit=crop&auto=format`,alt:e.title,loading:"lazy"})},e.img))})}const X=[{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee"},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats"},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey"},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball"},{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms"},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike"}],tt=`import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function StandardImageList() {
    return (<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (<ImageListItem key={item.img}>
          <img srcSet={\`\${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x\`} src={\`\${item.img}?w=164&h=164&fit=crop&auto=format\`} alt={item.title} loading="lazy"/>
        </ImageListItem>))}
    </ImageList>);
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
`;function et(e,s,o=1,i=1){return{src:`${e}?w=${s*i}&h=${s*o}&fit=crop&auto=format`,srcSet:`${e}?w=${s*i}&h=${s*o}&fit=crop&auto=format&dpr=2 2x`}}function at(){return t(h,{sx:{width:500,height:450},variant:"quilted",cols:4,rowHeight:121,children:st.map(e=>t(m,{cols:e.cols||1,rows:e.rows||1,children:t("img",{...et(e.img,121,e.rows,e.cols),alt:e.title,loading:"lazy"})},e.img))})}const st=[{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast",rows:2,cols:2},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee",cols:2},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats",cols:2},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey",author:"@arwinneil",rows:2,cols:2},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball"},{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms",rows:2,cols:2},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike",cols:2}],ot=`import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: \`\${image}?w=\${size * cols}&h=\${size * rows}&fit=crop&auto=format\`,
        srcSet: \`\${image}?w=\${size * cols}&h=\${size * rows}&fit=crop&auto=format&dpr=2 2x\`,
    };
}
export default function QuiltedImageList() {
    return (<ImageList sx={{ width: 500, height: 450 }} variant="quilted" cols={4} rowHeight={121}>
      {itemData.map((item) => (<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy"/>
        </ImageListItem>))}
    </ImageList>);
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];
`;function it(){return t(h,{sx:{width:500,height:450},variant:"woven",cols:3,gap:8,children:nt.map(e=>t(m,{children:t("img",{srcSet:`${e.img}?w=161&fit=crop&auto=format&dpr=2 2x`,src:`${e.img}?w=161&fit=crop&auto=format`,alt:e.title,loading:"lazy"})},e.img))})}const nt=[{img:"https://images.unsplash.com/photo-1549388604-817d15aa0110",title:"Bed"},{img:"https://images.unsplash.com/photo-1563298723-dcfebaa392e3",title:"Kitchen"},{img:"https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",title:"Sink"},{img:"https://images.unsplash.com/photo-1525097487452-6278ff080c31",title:"Books"},{img:"https://images.unsplash.com/photo-1574180045827-681f8a1a9622",title:"Chairs"},{img:"https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",title:"Candle"},{img:"https://images.unsplash.com/photo-1530731141654-5993c3016c77",title:"Laptop"},{img:"https://images.unsplash.com/photo-1481277542470-605612bd2d61",title:"Doors"},{img:"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",title:"Coffee"},{img:"https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",title:"Storage"},{img:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4",title:"Coffee table"},{img:"https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",title:"Blinds"}],mt=`import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function WovenImageList() {
    return (<ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (<ImageListItem key={item.img}>
          <img srcSet={\`\${item.img}?w=161&fit=crop&auto=format&dpr=2 2x\`} src={\`\${item.img}?w=161&fit=crop&auto=format\`} alt={item.title} loading="lazy"/>
        </ImageListItem>))}
    </ImageList>);
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
];
`;function lt(){return t(v,{sx:{width:500,height:450,overflowY:"scroll"},children:t(h,{variant:"masonry",cols:3,gap:8,children:ht.map(e=>t(m,{children:t("img",{srcSet:`${e.img}?w=248&fit=crop&auto=format&dpr=2 2x`,src:`${e.img}?w=248&fit=crop&auto=format`,alt:e.title,loading:"lazy"})},e.img))})})}const ht=[{img:"https://images.unsplash.com/photo-1549388604-817d15aa0110",title:"Bed"},{img:"https://images.unsplash.com/photo-1525097487452-6278ff080c31",title:"Books"},{img:"https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",title:"Sink"},{img:"https://images.unsplash.com/photo-1563298723-dcfebaa392e3",title:"Kitchen"},{img:"https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",title:"Blinds"},{img:"https://images.unsplash.com/photo-1574180045827-681f8a1a9622",title:"Chairs"},{img:"https://images.unsplash.com/photo-1530731141654-5993c3016c77",title:"Laptop"},{img:"https://images.unsplash.com/photo-1481277542470-605612bd2d61",title:"Doors"},{img:"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",title:"Coffee"},{img:"https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",title:"Storage"},{img:"https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",title:"Candle"},{img:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4",title:"Coffee table"}],rt=`import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function MasonryImageList() {
    return (<Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (<ImageListItem key={item.img}>
            <img srcSet={\`\${item.img}?w=248&fit=crop&auto=format&dpr=2 2x\`} src={\`\${item.img}?w=248&fit=crop&auto=format\`} alt={item.title} loading="lazy"/>
          </ImageListItem>))}
      </ImageList>
    </Box>);
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
];
`;var I={},pt=P;Object.defineProperty(I,"__esModule",{value:!0});var S=I.default=void 0,ct=pt(F()),gt=b;S=I.default=(0,ct.default)((0,gt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info");function ut(){return n(h,{sx:{width:500,height:450},children:[t(m,{cols:2,children:t(K,{component:"div",children:"December"})},"Subheader"),dt.map(e=>n(m,{children:[t("img",{srcSet:`${e.img}?w=248&fit=crop&auto=format&dpr=2 2x`,src:`${e.img}?w=248&fit=crop&auto=format`,alt:e.title,loading:"lazy"}),t(u,{title:e.title,subtitle:e.author,actionIcon:t(k,{sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":`info about ${e.title}`,children:t(S,{})})})]},e.img))]})}const dt=[{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast",author:"@bkristastucchio",rows:2,cols:2,featured:!0},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger",author:"@rollelflex_graphy726"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera",author:"@helloimnik"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee",author:"@nolanissac",cols:2},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats",author:"@hjrc33",cols:2},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey",author:"@arwinneil",rows:2,cols:2,featured:!0},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball",author:"@tjdragotta"},{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern",author:"@katie_wasserman"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms",author:"@silverdalex",rows:2,cols:2},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil",author:"@shelleypauls"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star",author:"@peterlaster"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike",author:"@southside_customs",cols:2}],ft=`import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
export default function TitlebarImageList() {
    return (<ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (<ImageListItem key={item.img}>
          <img srcSet={\`\${item.img}?w=248&fit=crop&auto=format&dpr=2 2x\`} src={\`\${item.img}?w=248&fit=crop&auto=format\`} alt={item.title} loading="lazy"/>
          <ImageListItemBar title={item.title} subtitle={item.author} actionIcon={<IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={\`info about \${item.title}\`}>
                <InfoIcon />
              </IconButton>}/>
        </ImageListItem>))}
    </ImageList>);
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
    },
];
`;function bt(){return t(h,{sx:{width:500,height:450},children:It.map(e=>n(m,{children:[t("img",{srcSet:`${e.img}?w=248&fit=crop&auto=format&dpr=2 2x`,src:`${e.img}?w=248&fit=crop&auto=format`,alt:e.title,loading:"lazy"}),t(u,{title:e.title,subtitle:n("span",{children:["by: ",e.author]}),position:"below"})]},e.img))})}const It=[{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast",author:"@bkristastucchio"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger",author:"@rollelflex_graphy726"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera",author:"@helloimnik"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee",author:"@nolanissac"},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats",author:"@hjrc33"},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey",author:"@arwinneil"},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball",author:"@tjdragotta"},{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern",author:"@katie_wasserman"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms",author:"@silverdalex"},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil",author:"@shelleypauls"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star",author:"@peterlaster"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike",author:"@southside_customs"}],wt=`import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
export default function TitlebarBelowImageList() {
    return (<ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (<ImageListItem key={item.img}>
          <img srcSet={\`\${item.img}?w=248&fit=crop&auto=format&dpr=2 2x\`} src={\`\${item.img}?w=248&fit=crop&auto=format\`} alt={item.title} loading="lazy"/>
          <ImageListItemBar title={item.title} subtitle={<span>by: {item.author}</span>} position="below"/>
        </ImageListItem>))}
    </ImageList>);
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
];
`;function Lt(){return t(v,{sx:{width:500,height:450,overflowY:"scroll"},children:t(h,{variant:"masonry",cols:3,gap:8,children:xt.map(e=>n(m,{children:[t("img",{srcSet:`${e.img}?w=248&fit=crop&auto=format&dpr=2 2x`,src:`${e.img}?w=248&fit=crop&auto=format`,alt:e.title,loading:"lazy"}),t(u,{position:"below",title:e.author})]},e.img))})})}const xt=[{img:"https://images.unsplash.com/photo-1549388604-817d15aa0110",title:"Bed",author:"swabdesign"},{img:"https://images.unsplash.com/photo-1525097487452-6278ff080c31",title:"Books",author:"Pavel Nekoranec"},{img:"https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",title:"Sink",author:"Charles Deluvio"},{img:"https://images.unsplash.com/photo-1563298723-dcfebaa392e3",title:"Kitchen",author:"Christian Mackie"},{img:"https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",title:"Blinds",author:"Darren Richardson"},{img:"https://images.unsplash.com/photo-1574180045827-681f8a1a9622",title:"Chairs",author:"Taylor Simpson"},{img:"https://images.unsplash.com/photo-1530731141654-5993c3016c77",title:"Laptop",author:"Ben Kolde"},{img:"https://images.unsplash.com/photo-1481277542470-605612bd2d61",title:"Doors",author:"Philipp Berndt"},{img:"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",title:"Coffee",author:"Jen P."},{img:"https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",title:"Storage",author:"Douglas Sheppard"},{img:"https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",title:"Candle",author:"Fi Bell"},{img:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4",title:"Coffee table",author:"Hutomo Abrianto"}],yt=`import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
export default function TitlebarBelowMasonryImageList() {
    return (<Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (<ImageListItem key={item.img}>
            <img srcSet={\`\${item.img}?w=248&fit=crop&auto=format&dpr=2 2x\`} src={\`\${item.img}?w=248&fit=crop&auto=format\`} alt={item.title} loading="lazy"/>
            <ImageListItemBar position="below" title={item.author}/>
          </ImageListItem>))}
      </ImageList>
    </Box>);
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
        author: 'swabdesign',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
        author: 'Pavel Nekoranec',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
        author: 'Charles Deluvio',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
        author: 'Christian Mackie',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
        author: 'Darren Richardson',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
        author: 'Taylor Simpson',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
        author: 'Ben Kolde',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
        author: 'Philipp Berndt',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
        author: 'Jen P.',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
        author: 'Douglas Sheppard',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
        author: 'Fi Bell',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
        author: 'Hutomo Abrianto',
    },
];
`;function Bt(e,s,o,i=1,g=1){return{src:`${e}?w=${s*g}&h=${o*i}&fit=crop&auto=format`,srcSet:`${e}?w=${s*g}&h=${o*i}&fit=crop&auto=format&dpr=2 2x`}}function vt(){return t(h,{sx:{width:500,height:450,transform:"translateZ(0)"},rowHeight:200,gap:1,children:kt.map(e=>{const s=e.featured?2:1,o=e.featured?2:1;return n(m,{cols:s,rows:o,children:[t("img",{...Bt(e.img,250,200,o,s),alt:e.title,loading:"lazy"}),t(u,{sx:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},title:e.title,position:"top",actionIcon:t(k,{sx:{color:"white"},"aria-label":`star ${e.title}`,children:t(U,{})}),actionPosition:"left"})]},e.img)})})}const kt=[{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast",author:"@bkristastucchio",featured:!0},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger",author:"@rollelflex_graphy726"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera",author:"@helloimnik"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee",author:"@nolanissac"},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats",author:"@hjrc33"},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey",author:"@arwinneil",featured:!0},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball",author:"@tjdragotta"},{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern",author:"@katie_wasserman"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms",author:"@silverdalex"},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil",author:"@shelleypauls"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star",author:"@peterlaster"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike",author:"@southside_customs"}],St=`import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: \`\${image}?w=\${width * cols}&h=\${height * rows}&fit=crop&auto=format\`,
        srcSet: \`\${image}?w=\${width * cols}&h=\${height * rows}&fit=crop&auto=format&dpr=2 2x\`,
    };
}
export default function CustomImageList() {
    return (<ImageList sx={{
            width: 500,
            height: 450,
            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
            transform: 'translateZ(0)',
        }} rowHeight={200} gap={1}>
      {itemData.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;
            return (<ImageListItem key={item.img} cols={cols} rows={rows}>
            <img {...srcset(item.img, 250, 200, rows, cols)} alt={item.title} loading="lazy"/>
            <ImageListItemBar sx={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }} title={item.title} position="top" actionIcon={<IconButton sx={{ color: 'white' }} aria-label={\`star \${item.title}\`}>
                  <StarBorderIcon />
                </IconButton>} actionPosition="left"/>
          </ImageListItem>);
        })}
    </ImageList>);
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
];
`;function Ht(e){return n(Q,{children:[n("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[t(E,{}),t(q,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/image-list",target:"_blank",role:"button",size:"small",startIcon:t(W,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),t(a,{className:"text-32 my-16 font-700",component:"h1",children:"Image List"}),t(a,{className:"description",children:"The Image List displays a collection of images in an organized grid."}),t(a,{className:"text-14 mb-32",component:"div",children:"Image lists represent a collection of items in a repeated pattern. They help improve the visual comprehension of the content they hold."}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Standard image list"}),t(a,{className:"text-14 mb-32",component:"div",children:"Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing."}),t(a,{className:"text-14 mb-32",component:"div",children:t(l,{name:"StandardImageList.js",className:"my-16",iframe:!1,component:G,raw:tt})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Quilted image list"}),t(a,{className:"text-14 mb-32",component:"div",children:"Quilted image lists emphasize certain items over others in a collection. They create hierarchy using varied container sizes and ratios."}),t(a,{className:"text-14 mb-32",component:"div",children:t(l,{name:"QuiltedImageList.js",className:"my-16",iframe:!1,component:at,raw:ot})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Woven image list"}),t(a,{className:"text-14 mb-32",component:"div",children:"Woven image lists use alternating container ratios to create a rhythmic layout. A woven image list is best for browsing peer content."}),t(a,{className:"text-14 mb-32",component:"div",children:t(l,{name:"WovenImageList.js",className:"my-16",iframe:!1,component:it,raw:mt})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Masonry image list"}),t(a,{className:"text-14 mb-32",component:"div",children:"Masonry image lists use dynamically sized container heights that reflect the aspect ratio of each image. This image list is best used for browsing uncropped peer content."}),t(a,{className:"text-14 mb-32",component:"div",children:t(l,{name:"MasonryImageList.js",className:"my-16",iframe:!1,component:lt,raw:rt})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Image list with title bars"}),n(a,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of the ",t("code",{children:"ImageListItemBar"})," to add an overlay to each item. The overlay can accommodate a ",t("code",{children:"title"}),", ",t("code",{children:"subtitle"})," and secondary action - in this example an ",t("code",{children:"IconButton"}),"."]}),t(a,{className:"text-14 mb-32",component:"div",children:t(l,{name:"TitlebarImageList.js",className:"my-16",iframe:!1,component:ut,raw:ft})}),t(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Title bar below image (standard)"}),t(a,{className:"text-14 mb-32",component:"div",children:"The title bar can be placed below the image."}),t(a,{className:"text-14 mb-32",component:"div",children:t(l,{name:"TitlebarBelowImageList.js",className:"my-16",iframe:!1,component:bt,raw:wt})}),t(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Title bar below image (masonry)"}),t(a,{className:"text-14 mb-32",component:"div",children:t(l,{name:"TitlebarBelowMasonryImageList.js",className:"my-16",iframe:!1,component:Lt,raw:yt})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Custom image list"}),n(a,{className:"text-14 mb-32",component:"div",children:["In this example the items have a customized titlebar, positioned at the top and with a custom gradient ",t("code",{children:"titleBackground"}),". The secondary action ",t("code",{children:"IconButton"})," is positioned on the left. The ",t("code",{children:"gap"})," prop is used to adjust the gap between items."]}),t(a,{className:"text-14 mb-32",component:"div",children:t(l,{name:"CustomImageList.js",className:"my-16",iframe:!1,component:vt,raw:St})})]})}export{Ht as default};
