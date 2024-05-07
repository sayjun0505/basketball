import{r as b,d as o,j as e,bl as p,bm as i,H as d,T as n,F as u,C as h,bx as x}from"./index-3voNJrtd.js";import{F as T}from"./FuseExample-L3LbvVcu.js";import{D as f}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import"./DocumentationNavigation-us8sikvN.js";function m(a){const{children:l,value:r,index:t,...s}=a;return e("div",{role:"tabpanel",hidden:r!==t,id:`simple-tabpanel-${t}`,"aria-labelledby":`simple-tab-${t}`,...s,children:r===t&&e(d,{sx:{p:3},children:e(n,{children:l})})})}function c(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}function v(){const[a,l]=b.useState(0);return o(d,{sx:{width:"100%"},children:[e(d,{sx:{borderBottom:1,borderColor:"divider"},children:o(p,{value:a,onChange:(t,s)=>{l(s)},"aria-label":"basic tabs example",children:[e(i,{label:"Item One",...c(0)}),e(i,{label:"Item Two",...c(1)}),e(i,{label:"Item Three",...c(2)})]})}),e(m,{value:a,index:0,children:"Item One"}),e(m,{value:a,index:1,children:"Item Two"}),e(m,{value:a,index:2,children:"Item Three"})]})}const y=`import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (<div role="tabpanel" hidden={value !== index} id={\`simple-tabpanel-\${index}\`} aria-labelledby={\`simple-tab-\${index}\`} {...other}>
      {value === index && (<Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>)}
    </div>);
}
function a11yProps(index) {
    return {
        id: \`simple-tab-\${index}\`,
        'aria-controls': \`simple-tabpanel-\${index}\`,
    };
}
export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)}/>
          <Tab label="Item Two" {...a11yProps(1)}/>
          <Tab label="Item Three" {...a11yProps(2)}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>);
}
`;function I(a){return o(x,{children:[o("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(f,{}),e(h,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/tabs",target:"_blank",role:"button",size:"small",startIcon:e(u,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(n,{className:"text-32 my-16 font-700",component:"h1",children:"Tabs"}),e(n,{className:"description",children:"Tabs make it easy to explore and switch between different views."}),e(n,{className:"text-14 mb-32",component:"div",children:"Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy."}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic tabs"}),e(n,{className:"text-14 mb-32",component:"div",children:"A basic example with tab panels."}),e(n,{className:"text-14 mb-32",component:"div",children:e(T,{name:"BasicTabs.js",className:"my-16",iframe:!1,component:v,raw:y})})]})}export{I as default};
