import{r as p,cc as B,ae as N,el as E,em as G,ac as C,ag as w,x as _,en as j,ah as V,eo as z,ep as $,aN as K,j as e,d as t,bC as u,bs as d,br as l,bB as s,H as x,d1 as I,s as U,I as q,K as T,di as f,aE as Y,h as Q,bo as J,C as M,bU as X,bQ as Z,bR as ee,bS as te,L as A,F as le,T as n,dz as y,bx as ne}from"./index-3voNJrtd.js";import{F as h}from"./FuseExample-L3LbvVcu.js";import{D as ae}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import"./DocumentationNavigation-us8sikvN.js";const oe=["className","children","classes","IconComponent","input","inputProps","variant"],ie=["root"],re=a=>{const{classes:i}=a;return V({root:["root"]},z,i)},me=w.jsx(K,{}),F=p.forwardRef(function(i,r){const o=B({name:"MuiNativeSelect",props:i}),{className:m,children:c,classes:g={},IconComponent:v=$,input:b=me,inputProps:O}=o,P=N(o,oe),W=E(),k=G({props:o,muiFormControl:W,states:["variant"]}),H=C({},o,{classes:g}),R=re(H),D=N(g,ie);return w.jsx(p.Fragment,{children:p.cloneElement(b,C({inputComponent:j,inputProps:C({children:c,classes:D,IconComponent:v,variant:k.variant,type:void 0},O,b?b.props.inputProps:{}),ref:r},P,{className:_(R.root,b.props.className,m)}))})});F.muiName="Select";const L=F;function se(){const[a,i]=p.useState("");return e(x,{sx:{minWidth:120},children:t(s,{fullWidth:!0,children:[e(u,{id:"demo-simple-select-label",children:"Age"}),t(d,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,label:"Age",onChange:o=>{i(o.target.value)},children:[e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]})]})})}const ce=`import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function BasicSelect() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>);
}
`;function ue(){const[a,i]=p.useState(""),r=o=>{i(o.target.value)};return t("div",{children:[t(s,{variant:"standard",sx:{m:1,minWidth:120},children:[e(u,{id:"demo-simple-select-standard-label",children:"Age"}),t(d,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:a,onChange:r,label:"Age",children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]})]}),t(s,{variant:"filled",sx:{m:1,minWidth:120},children:[e(u,{id:"demo-simple-select-filled-label",children:"Age"}),t(d,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:a,onChange:r,children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]})]})]})}const de=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function SelectVariants() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (<div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={age} onChange={handleChange} label="Age">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={age} onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>);
}
`;function pe(){const[a,i]=p.useState(""),r=o=>{i(o.target.value)};return t("div",{children:[t(s,{sx:{m:1,minWidth:120},children:[e(u,{id:"demo-simple-select-helper-label",children:"Age"}),t(d,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:a,label:"Age",onChange:r,children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]}),e(I,{children:"With label + helper text"})]}),t(s,{sx:{m:1,minWidth:120},children:[t(d,{value:a,onChange:r,displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]}),e(I,{children:"Without label"})]})]})}const he=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function SelectLabels() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (<div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={age} label="Age" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
    </div>);
}
`;function ge(){const[a,i]=p.useState("");return e("div",{children:t(s,{sx:{m:1,minWidth:80},children:[e(u,{id:"demo-simple-select-autowidth-label",children:"Age"}),t(d,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",value:a,onChange:o=>{i(o.target.value)},autoWidth:!0,label:"Age",children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Twenty"}),e(l,{value:21,children:"Twenty one"}),e(l,{value:22,children:"Twenty one and a half"})]})]})})}const ve=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function SelectAutoWidth() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (<div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={age} onChange={handleChange} autoWidth label="Age">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>);
}
`;function be(){const[a,i]=p.useState("");return t(s,{sx:{m:1,minWidth:120},size:"small",children:[e(u,{id:"demo-select-small-label",children:"Age"}),t(d,{labelId:"demo-select-small-label",id:"demo-select-small",value:a,label:"Age",onChange:o=>{i(o.target.value)},children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]})]})}const Ie=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function SelectSmall() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="Age" onChange={handleChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>);
}
`;function fe(){const[a,i]=p.useState(""),r=o=>{i(o.target.value)};return t("div",{children:[t(s,{sx:{m:1,minWidth:120},disabled:!0,children:[e(u,{id:"demo-simple-select-disabled-label",children:"Age"}),t(d,{labelId:"demo-simple-select-disabled-label",id:"demo-simple-select-disabled",value:a,label:"Age",onChange:r,children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]}),e(I,{children:"Disabled"})]}),t(s,{sx:{m:1,minWidth:120},error:!0,children:[e(u,{id:"demo-simple-select-error-label",children:"Age"}),t(d,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",value:a,label:"Age",onChange:r,renderValue:o=>`⚠️  - ${o}`,children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]}),e(I,{children:"Error"})]}),t(s,{sx:{m:1,minWidth:120},children:[e(u,{id:"demo-simple-select-readonly-label",children:"Age"}),t(d,{labelId:"demo-simple-select-readonly-label",id:"demo-simple-select-readonly",value:a,label:"Age",onChange:r,inputProps:{readOnly:!0},children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]}),e(I,{children:"Read only"})]}),t(s,{required:!0,sx:{m:1,minWidth:120},children:[e(u,{id:"demo-simple-select-required-label",children:"Age"}),t(d,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:a,label:"Age *",onChange:r,children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]}),e(I,{children:"Required"})]})]})}const ye=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function SelectOtherProps() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (<div>
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
        <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
        <Select labelId="demo-simple-select-disabled-label" id="demo-simple-select-disabled" value={age} label="Age" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
        <Select labelId="demo-simple-select-error-label" id="demo-simple-select-error" value={age} label="Age" onChange={handleChange} renderValue={(value) => \`⚠️  - \${value}\`}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
        <Select labelId="demo-simple-select-readonly-label" id="demo-simple-select-readonly" value={age} label="Age" onChange={handleChange} inputProps={{ readOnly: true }}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required" value={age} label="Age *" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>);
}
`;function Me(){return e(x,{sx:{minWidth:120},children:t(s,{fullWidth:!0,children:[e(u,{variant:"standard",htmlFor:"uncontrolled-native",children:"Age"}),t(L,{defaultValue:30,inputProps:{name:"age",id:"uncontrolled-native"},children:[e("option",{value:10,children:"Ten"}),e("option",{value:20,children:"Twenty"}),e("option",{value:30,children:"Thirty"})]})]})})}const xe=`import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
export default function NativeSelectDemo() {
    return (<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect defaultValue={30} inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
        }}>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>);
}
`,S=U(q)(({theme:a})=>({"label + &":{marginTop:a.spacing(3)},"& .MuiInputBase-input":{borderRadius:4,position:"relative",backgroundColor:a.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:a.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}));function Ce(){const[a,i]=p.useState(""),r=o=>{i(o.target.value)};return t("div",{children:[t(s,{sx:{m:1},variant:"standard",children:[e(u,{htmlFor:"demo-customized-textbox",children:"Age"}),e(S,{id:"demo-customized-textbox"})]}),t(s,{sx:{m:1},variant:"standard",children:[e(u,{id:"demo-customized-select-label",children:"Age"}),t(d,{labelId:"demo-customized-select-label",id:"demo-customized-select",value:a,onChange:r,input:e(S,{}),children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]})]}),t(s,{sx:{m:1},variant:"standard",children:[e(u,{htmlFor:"demo-customized-select-native",children:"Age"}),t(L,{id:"demo-customized-select-native",value:a,onChange:r,input:e(S,{}),children:[e("option",{"aria-label":"None",value:""}),e("option",{value:10,children:"Ten"}),e("option",{value:20,children:"Twenty"}),e("option",{value:30,children:"Thirty"})]})]})]})}const Se=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));
export default function CustomizedSelects() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (<div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
        <BootstrapInput id="demo-customized-textbox"/>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Age</InputLabel>
        <Select labelId="demo-customized-select-label" id="demo-customized-select" value={age} onChange={handleChange} input={<BootstrapInput />}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
        <NativeSelect id="demo-customized-select-native" value={age} onChange={handleChange} input={<BootstrapInput />}>
          <option aria-label="None" value=""/>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </div>);
}
`,Te=48,Ne=8,Ae={PaperProps:{style:{maxHeight:Te*4.5+Ne,width:250}}},we=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Fe(a,i,r){return{fontWeight:i.indexOf(a)===-1?r.typography.fontWeightRegular:r.typography.fontWeightMedium}}function Le(){const a=T(),[i,r]=p.useState([]);return e("div",{children:t(s,{sx:{m:1,width:300},children:[e(u,{id:"demo-multiple-name-label",children:"Name"}),e(d,{labelId:"demo-multiple-name-label",id:"demo-multiple-name",multiple:!0,value:i,onChange:m=>{const{target:{value:c}}=m;r(typeof c=="string"?c.split(","):c)},input:e(f,{label:"Name"}),MenuProps:Ae,children:we.map(m=>e(l,{value:m,style:Fe(m,i,a),children:m},m))})]})})}const Oe=`import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}
export default function MultipleSelect() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
        const { target: { value }, } = event;
        setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value);
    };
    return (<div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select labelId="demo-multiple-name-label" id="demo-multiple-name" multiple value={personName} onChange={handleChange} input={<OutlinedInput label="Name"/>} MenuProps={MenuProps}>
          {names.map((name) => (<MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>))}
        </Select>
      </FormControl>
    </div>);
}
`,Pe=48,We=8,ke={PaperProps:{style:{maxHeight:Pe*4.5+We,width:250}}},He=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Re(){const[a,i]=p.useState([]);return e("div",{children:t(s,{sx:{m:1,width:300},children:[e(u,{id:"demo-multiple-checkbox-label",children:"Tag"}),e(d,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,value:a,onChange:o=>{const{target:{value:m}}=o;i(typeof m=="string"?m.split(","):m)},input:e(f,{label:"Tag"}),renderValue:o=>o.join(", "),MenuProps:ke,children:He.map(o=>t(l,{value:o,children:[e(Y,{checked:a.indexOf(o)>-1}),e(Q,{primary:o})]},o))})]})})}const De=`import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
export default function MultipleSelectCheckmarks() {
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
        const { target: { value }, } = event;
        setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value);
    };
    return (<div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select labelId="demo-multiple-checkbox-label" id="demo-multiple-checkbox" multiple value={personName} onChange={handleChange} input={<OutlinedInput label="Tag"/>} renderValue={(selected) => selected.join(', ')} MenuProps={MenuProps}>
          {names.map((name) => (<MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1}/>
              <ListItemText primary={name}/>
            </MenuItem>))}
        </Select>
      </FormControl>
    </div>);
}
`,Be=48,Ee=8,Ge={PaperProps:{style:{maxHeight:Be*4.5+Ee,width:250}}},_e=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function je(a,i,r){return{fontWeight:i.indexOf(a)===-1?r.typography.fontWeightRegular:r.typography.fontWeightMedium}}function Ve(){const a=T(),[i,r]=p.useState([]);return e("div",{children:t(s,{sx:{m:1,width:300},children:[e(u,{id:"demo-multiple-chip-label",children:"Chip"}),e(d,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,value:i,onChange:m=>{const{target:{value:c}}=m;r(typeof c=="string"?c.split(","):c)},input:e(f,{id:"select-multiple-chip",label:"Chip"}),renderValue:m=>e(x,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:m.map(c=>e(J,{label:c},c))}),MenuProps:Ge,children:_e.map(m=>e(l,{value:m,style:je(m,i,a),children:m},m))})]})})}const ze=`import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}
export default function MultipleSelectChip() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
        const { target: { value }, } = event;
        setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value);
    };
    return (<div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select labelId="demo-multiple-chip-label" id="demo-multiple-chip" multiple value={personName} onChange={handleChange} input={<OutlinedInput id="select-multiple-chip" label="Chip"/>} renderValue={(selected) => (<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (<Chip key={value} label={value}/>))}
            </Box>)} MenuProps={MenuProps}>
          {names.map((name) => (<MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>))}
        </Select>
      </FormControl>
    </div>);
}
`,$e=48,Ke=8,Ue={PaperProps:{style:{maxHeight:$e*4.5+Ke,width:250}}},qe=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Ye(a,i,r){return{fontWeight:i.indexOf(a)===-1?r.typography.fontWeightRegular:r.typography.fontWeightMedium}}function Qe(){const a=T(),[i,r]=p.useState([]);return e("div",{children:e(s,{sx:{m:1,width:300,mt:3},children:t(d,{multiple:!0,displayEmpty:!0,value:i,onChange:m=>{const{target:{value:c}}=m;r(typeof c=="string"?c.split(","):c)},input:e(f,{}),renderValue:m=>m.length===0?e("em",{children:"Placeholder"}):m.join(", "),MenuProps:Ue,inputProps:{"aria-label":"Without label"},children:[e(l,{disabled:!0,value:"",children:e("em",{children:"Placeholder"})}),qe.map(m=>e(l,{value:m,style:Ye(m,i,a),children:m},m))]})})})}const Je=`import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}
export default function MultipleSelectPlaceholder() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
        const { target: { value }, } = event;
        setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value);
    };
    return (<div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select multiple displayEmpty value={personName} onChange={handleChange} input={<OutlinedInput />} renderValue={(selected) => {
            if (selected.length === 0) {
                return <em>Placeholder</em>;
            }
            return selected.join(', ');
        }} MenuProps={MenuProps} inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (<MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>))}
        </Select>
      </FormControl>
    </div>);
}
`,Xe=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Ze(){const[a,i]=p.useState([]);return e("div",{children:t(s,{sx:{m:1,minWidth:120,maxWidth:300},children:[e(u,{shrink:!0,htmlFor:"select-multiple-native",children:"Native"}),e(d,{multiple:!0,native:!0,value:a,onChange:o=>{const{options:m}=o.target,c=[];for(let g=0,v=m.length;g<v;g+=1)m[g].selected&&c.push(m[g].value);i(c)},label:"Native",inputProps:{id:"select-multiple-native"},children:Xe.map(o=>e("option",{value:o,children:o},o))})]})})}const et=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
export default function MultipleSelectNative() {
    const [personName, setPersonName] = React.useState([]);
    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };
    return (<div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select multiple native value={personName} 
    // @ts-ignore Typings are not considering \`native\`
    onChange={handleChangeMultiple} label="Native" inputProps={{
            id: 'select-multiple-native',
        }}>
          {names.map((name) => (<option key={name} value={name}>
              {name}
            </option>))}
        </Select>
      </FormControl>
    </div>);
}
`;function tt(){const[a,i]=p.useState(""),[r,o]=p.useState(!1),m=v=>{i(v.target.value)},c=()=>{o(!1)},g=()=>{o(!0)};return t("div",{children:[e(M,{sx:{display:"block",mt:2},onClick:g,children:"Open the select"}),t(s,{sx:{m:1,minWidth:120},children:[e(u,{id:"demo-controlled-open-select-label",children:"Age"}),t(d,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:r,onClose:c,onOpen:g,value:a,label:"Age",onChange:m,children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]})]})]})}const lt=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
export default function ControlledOpenSelect() {
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (<div>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={open} onClose={handleClose} onOpen={handleOpen} value={age} label="Age" onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>);
}
`;function nt(){const[a,i]=p.useState(!1),[r,o]=p.useState(""),m=v=>{o(Number(v.target.value)||"")},c=()=>{i(!0)},g=(v,b)=>{b!=="backdropClick"&&i(!1)};return t("div",{children:[e(M,{onClick:c,children:"Open select dialog"}),t(X,{disableEscapeKeyDown:!0,open:a,onClose:g,children:[e(Z,{children:"Fill the form"}),e(ee,{children:t(x,{component:"form",sx:{display:"flex",flexWrap:"wrap"},children:[t(s,{sx:{m:1,minWidth:120},children:[e(u,{htmlFor:"demo-dialog-native",children:"Age"}),t(d,{native:!0,value:r,onChange:m,input:e(f,{label:"Age",id:"demo-dialog-native"}),children:[e("option",{"aria-label":"None",value:""}),e("option",{value:10,children:"Ten"}),e("option",{value:20,children:"Twenty"}),e("option",{value:30,children:"Thirty"})]})]}),t(s,{sx:{m:1,minWidth:120},children:[e(u,{id:"demo-dialog-select-label",children:"Age"}),t(d,{labelId:"demo-dialog-select-label",id:"demo-dialog-select",value:r,onChange:m,input:e(f,{label:"Age"}),children:[e(l,{value:"",children:e("em",{children:"None"})}),e(l,{value:10,children:"Ten"}),e(l,{value:20,children:"Twenty"}),e(l,{value:30,children:"Thirty"})]})]})]})}),t(te,{children:[e(M,{onClick:g,children:"Cancel"}),e(M,{onClick:g,children:"Ok"})]})]})]})}const at=`import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function DialogSelect() {
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
    return (<div>
      <Button onClick={handleClickOpen}>Open select dialog</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select native value={age} onChange={handleChange} input={<OutlinedInput label="Age" id="demo-dialog-native"/>}>
                <option aria-label="None" value=""/>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Age</InputLabel>
              <Select labelId="demo-dialog-select-label" id="demo-dialog-select" value={age} onChange={handleChange} input={<OutlinedInput label="Age"/>}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>);
}
`;function ot(){return t("div",{children:[t(s,{sx:{m:1,minWidth:120},children:[e(u,{htmlFor:"grouped-native-select",children:"Grouping"}),t(d,{native:!0,defaultValue:"",id:"grouped-native-select",label:"Grouping",children:[e("option",{"aria-label":"None",value:""}),t("optgroup",{label:"Category 1",children:[e("option",{value:1,children:"Option 1"}),e("option",{value:2,children:"Option 2"})]}),t("optgroup",{label:"Category 2",children:[e("option",{value:3,children:"Option 3"}),e("option",{value:4,children:"Option 4"})]})]})]}),t(s,{sx:{m:1,minWidth:120},children:[e(u,{htmlFor:"grouped-select",children:"Grouping"}),t(d,{defaultValue:"",id:"grouped-select",label:"Grouping",children:[e(l,{value:"",children:e("em",{children:"None"})}),e(A,{children:"Category 1"}),e(l,{value:1,children:"Option 1"}),e(l,{value:2,children:"Option 2"}),e(A,{children:"Category 2"}),e(l,{value:3,children:"Option 3"}),e(l,{value:4,children:"Option 4"})]})]})]})}const it=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function GroupedSelect() {
    return (<div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value=""/>
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
    </div>);
}
`;function ut(a){return t(ne,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(ae,{}),e(M,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/selects",target:"_blank",role:"button",size:"small",startIcon:e(le,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(n,{className:"text-32 my-16 font-700",component:"h1",children:"Select"}),e(n,{className:"description",children:"Select components are used for collecting user provided information from a list of options."}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic select"}),e(n,{className:"text-14 mb-32",component:"div",children:"Menus are positioned under their emitting elements, unless they are close to the bottom of the viewport."}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"BasicSelect.js",className:"my-16",iframe:!1,component:se,raw:ce})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Advanced features"}),t(n,{className:"text-14 mb-32",component:"div",children:["The Select component is meant to be interchangeable with a native ",e("code",{children:"<select>"})," element."]}),t(n,{className:"text-14 mb-32",component:"div",children:["If you are looking for more advanced features, like combobox, multiselect, autocomplete, async or creatable support, head to the ",t("a",{href:"/material-ui/react-autocomplete/",children:[e("code",{children:"Autocomplete"})," component"]}),`. It's meant to be an improved version of the "react-select" and "downshift" packages.`]}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Props"}),t(n,{className:"text-14 mb-32",component:"div",children:["The Select component is implemented as a custom ",e("code",{children:"<input>"})," element of the ",e("a",{href:"/material-ui/api/input-base/",children:"InputBase"}),". It extends the ",e("a",{href:"/material-ui/react-text-field/",children:"text field components"})," subcomponents, either the ",e("a",{href:"/material-ui/api/outlined-input/",children:"OutlinedInput"}),", ",e("a",{href:"/material-ui/api/input/",children:"Input"}),", or ",e("a",{href:"/material-ui/api/filled-input/",children:"FilledInput"}),", depending on the variant selected. It shares the same styles and many of the same props. Refer to the respective component's API page for details."]}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Filled and standard variants"}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"SelectVariants.js",className:"my-16",iframe:!1,component:ue,raw:de})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Labels and helper text"}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"SelectLabels.js",className:"my-16",iframe:!1,component:pe,raw:he})}),t(n,{className:"text-14 mb-32",component:"div",children:[":::warning Note that when using FormControl with the outlined variant of the Select, you need to provide a label in two places: in the InputLabel component and in the ",e("code",{children:"label"})," prop of the Select component (see the above demo). :::"]}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Auto width"}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"SelectAutoWidth.js",className:"my-16",iframe:!1,component:ge,raw:ve})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Small Size"}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"SelectSmall.js",className:"my-16",iframe:!1,component:be,raw:Ie})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Other props"}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"SelectOtherProps.js",className:"my-16",iframe:!1,component:fe,raw:ye})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Native select"}),e(n,{className:"text-14 mb-32",component:"div",children:"As the user experience can be improved on mobile using the native select of the platform, we allow such pattern."}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"NativeSelectDemo.js",className:"my-16",iframe:!1,component:Me,raw:xe})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"TextField"}),t(n,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"TextField"})," wrapper component is a complete form control including a label, input and help text. You can find an example with the select mode ",e("a",{href:"/material-ui/react-text-field/#select",children:"in this section"}),"."]}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),t(n,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),t(n,{className:"text-14 mb-32",component:"div",children:["The first step is to style the ",e("code",{children:"InputBase"})," component. Once it's styled, you can either use it directly as a text field or provide it to the select ",e("code",{children:"input"})," prop to have a ",e("code",{children:"select"})," field. Notice that the ",e("code",{children:'"standard"'})," variant is easier to customize, since it does not wrap the contents in a ",e("code",{children:"fieldset"}),"/",e("code",{children:"legend"})," markup."]}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"CustomizedSelects.js",className:"my-16",iframe:!1,component:Ce,raw:Se})}),t(n,{className:"text-14 mb-32",component:"div",children:["🎨 If you are looking for inspiration, you can check ",e("a",{href:"https://mui-treasury.com/?path=/docs/select-introduction--docs",children:"MUI Treasury's customization examples"}),"."]}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Multiple select"}),t(n,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"Select"})," component can handle multiple selections. It's enabled with the ",e("code",{children:"multiple"})," prop."]}),t(n,{className:"text-14 mb-32",component:"div",children:["Like with the single selection, you can pull out the new value by accessing ",e("code",{children:"event.target.value"})," in the ",e("code",{children:"onChange"})," callback. It's always an array."]}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Default"}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"MultipleSelect.js",className:"my-16",iframe:!1,component:Le,raw:Oe})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Checkmarks"}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"MultipleSelectCheckmarks.js",className:"my-16",iframe:!1,component:Re,raw:De})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Chip"}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"MultipleSelectChip.js",className:"my-16",iframe:!1,component:Ve,raw:ze})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Placeholder"}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"MultipleSelectPlaceholder.js",className:"my-16",iframe:!1,component:Qe,raw:Je})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Native"}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"MultipleSelectNative.js",className:"my-16",iframe:!1,component:Ze,raw:et})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Controlling the open state"}),t(n,{className:"text-14 mb-32",component:"div",children:["You can control the open state of the select with the ",e("code",{children:"open"})," prop. Alternatively, it is also possible to set the initial (uncontrolled) open state of the component with the ",e("code",{children:"defaultOpen"})," prop."]}),t("div",{className:"border border-1 p-16 rounded-16 my-12",children:[t("ul",{className:"space-y-16",children:[t("li",{children:["A component is ",e("strong",{children:"controlled"})," when it's managed by its parent using props."]}),t("li",{children:["A component is ",e("strong",{children:"uncontrolled"})," when it's managed by its own local state."]})]}),t(n,{className:"text-14 mb-32",component:"div",children:["Learn more about controlled and uncontrolled components in the ",e("a",{href:"https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components",children:"React documentation"}),"."]})]}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"ControlledOpenSelect.js",className:"my-16",iframe:!1,component:tt,raw:lt})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"With a dialog"}),e(n,{className:"text-14 mb-32",component:"div",children:"While it's discouraged by the Material Design guidelines, you can use a select inside a dialog."}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"DialogSelect.js",className:"my-16",iframe:!1,component:nt,raw:at})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Grouping"}),t(n,{className:"text-14 mb-32",component:"div",children:["Display categories with the ",e("code",{children:"ListSubheader"})," component or the native ",e("code",{children:"<optgroup>"})," element."]}),e(n,{className:"text-14 mb-32",component:"div",children:e(h,{name:"GroupedSelect.js",className:"my-16",iframe:!1,component:ot,raw:it})}),e(n,{className:"text-14 mb-32",component:"div",children:":::warning If you wish to wrap the ListSubheader in a custom component, you'll have to annotate it so Material UI can handle it properly when determining focusable elements."}),t(n,{className:"text-14 mb-32",component:"div",children:["You have two options for solving this: Option 1: Define a static boolean field called ",e("code",{children:"muiSkipListHighlight"})," on your component function, and set it to ",e("code",{children:"true"}),":"]}),e(y,{component:"pre",className:"language-tsx",children:` 
function MyListSubheader(props: ListSubheaderProps) {
  return <ListSubheader {...props} />;
}

MyListSubheader.muiSkipListHighlight = true;
export default MyListSubheader;

// elsewhere:

return (
  <Select>
    <MyListSubheader>Group 1</MyListSubheader>
    <MenuItem value={1}>Option 1</MenuItem>
    <MenuItem value={2}>Option 2</MenuItem>
    <MyListSubheader>Group 2</MyListSubheader>
    <MenuItem value={3}>Option 3</MenuItem>
    <MenuItem value={4}>Option 4</MenuItem>
    {/* ... */}
  </Select>
`}),t(n,{className:"text-14 mb-32",component:"div",children:["Option 2: Place a ",e("code",{children:"muiSkipListHighlight"})," prop on each instance of your component. The prop doesn't have to be forwarded to the ListSubheader, nor present in the underlying DOM element. It just has to be placed on a component that's used as a subheader."]}),e(y,{component:"pre",className:"language-tsx",children:` 
export default function MyListSubheader(
  props: ListSubheaderProps & { muiSkipListHighlight: boolean },
) {
  const { muiSkipListHighlight, ...other } = props;
  return <ListSubheader {...other} />;
}

// elsewhere:

return (
  <Select>
    <MyListSubheader muiSkipListHighlight>Group 1</MyListSubheader>
    <MenuItem value={1}>Option 1</MenuItem>
    <MenuItem value={2}>Option 2</MenuItem>
    <MyListSubheader muiSkipListHighlight>Group 2</MyListSubheader>
    <MenuItem value={3}>Option 3</MenuItem>
    <MenuItem value={4}>Option 4</MenuItem>
    {/* ... */}
  </Select>
);
`}),e(n,{className:"text-14 mb-32",component:"div",children:"We recommend the first option as it doesn't require updating all the usage sites of the component."}),t(n,{className:"text-14 mb-32",component:"div",children:["Keep in mind this is ",e("strong",{children:"only necessary"})," if you wrap the ListSubheader in a custom component. If you use the ListSubheader directly, ",e("strong",{children:"no additional code is required"}),". :::"]}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),t(n,{className:"text-14 mb-32",component:"div",children:["To properly label your ",e("code",{children:"Select"})," input you need an extra element with an ",e("code",{children:"id"})," that contains a label. That ",e("code",{children:"id"})," needs to match the ",e("code",{children:"labelId"})," of the ",e("code",{children:"Select"})," e.g."]}),e(y,{component:"pre",className:"language-jsx",children:` 
<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
`}),t(n,{className:"text-14 mb-32",component:"div",children:["Alternatively a ",e("code",{children:"TextField"})," with an ",e("code",{children:"id"})," and ",e("code",{children:"label"})," creates the proper markup and ids for you:"]}),e(y,{component:"pre",className:"language-jsx",children:` 
<TextField id="select" label="Age" value="20" select>
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</TextField>
`}),t(n,{className:"text-14 mb-32",component:"div",children:["For a ",e("a",{href:"#native-select",children:"native select"}),", you should mention a label by giving the value of the ",e("code",{children:"id"})," attribute of the select element to the ",e("code",{children:"InputLabel"}),"'s ",e("code",{children:"htmlFor"})," attribute:"]}),e(y,{component:"pre",className:"language-jsx",children:` 
<InputLabel htmlFor="select">Age</InputLabel>
<NativeSelect id="select">
  <option value="10">Ten</option>
  <option value="20">Twenty</option>
</NativeSelect>
`})]})}export{ut as default};
