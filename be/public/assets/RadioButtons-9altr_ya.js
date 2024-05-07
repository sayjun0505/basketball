import{d as a,j as e,bN as p,e5 as u,cZ as r,bD as l,bB as b,r as c,d$ as g,d1 as y,C as x,s as v,ej as L,F as G,T as o,dz as C,bx as k}from"./index-3voNJrtd.js";import{F as s}from"./FuseExample-L3LbvVcu.js";import{D as N}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import"./DocumentationNavigation-us8sikvN.js";function S(){return a(b,{children:[e(p,{id:"demo-radio-buttons-group-label",children:"Gender"}),a(u,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"female",name:"radio-buttons-group",children:[e(l,{value:"female",control:e(r,{}),label:"Female"}),e(l,{value:"male",control:e(r,{}),label:"Male"}),e(l,{value:"other",control:e(r,{}),label:"Other"})]})]})}const B=`import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function RadioButtonsGroup() {
    return (<FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Female"/>
        <FormControlLabel value="male" control={<Radio />} label="Male"/>
        <FormControlLabel value="other" control={<Radio />} label="Other"/>
      </RadioGroup>
    </FormControl>);
}
`;function P(){return a(b,{children:[e(p,{id:"demo-row-radio-buttons-group-label",children:"Gender"}),a(u,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",children:[e(l,{value:"female",control:e(r,{}),label:"Female"}),e(l,{value:"male",control:e(r,{}),label:"Male"}),e(l,{value:"other",control:e(r,{}),label:"Other"}),e(l,{value:"disabled",disabled:!0,control:e(r,{}),label:"other"})]})]})}const z=`import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function RowRadioButtonsGroup() {
    return (<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Female"/>
        <FormControlLabel value="male" control={<Radio />} label="Male"/>
        <FormControlLabel value="other" control={<Radio />} label="Other"/>
        <FormControlLabel value="disabled" disabled control={<Radio />} label="other"/>
      </RadioGroup>
    </FormControl>);
}
`;function I(){const[t,i]=c.useState("female");return a(b,{children:[e(p,{id:"demo-controlled-radio-buttons-group",children:"Gender"}),a(u,{"aria-labelledby":"demo-controlled-radio-buttons-group",name:"controlled-radio-buttons-group",value:t,onChange:n=>{i(n.target.value)},children:[e(l,{value:"female",control:e(r,{}),label:"Female"}),e(l,{value:"male",control:e(r,{}),label:"Male"})]})]})}const V=`import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function ControlledRadioButtonsGroup() {
    const [value, setValue] = React.useState('female');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (<FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female"/>
        <FormControlLabel value="male" control={<Radio />} label="Male"/>
      </RadioGroup>
    </FormControl>);
}
`;function T(){const[t,i]=c.useState("a"),d=n=>{i(n.target.value)};return a("div",{children:[e(r,{checked:t==="a",onChange:d,value:"a",name:"radio-buttons",inputProps:{"aria-label":"A"}}),e(r,{checked:t==="b",onChange:d,value:"b",name:"radio-buttons",inputProps:{"aria-label":"B"}})]})}const M=`import * as React from 'react';
import Radio from '@mui/material/Radio';
export default function RadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (<div>
      <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }}/>
      <Radio checked={selectedValue === 'b'} onChange={handleChange} value="b" name="radio-buttons" inputProps={{ 'aria-label': 'B' }}/>
    </div>);
}
`;function j(){const[t,i]=c.useState("a"),d=m=>{i(m.target.value)},n=m=>({checked:t===m,onChange:d,value:m,name:"size-radio-button-demo",inputProps:{"aria-label":m}});return a("div",{children:[e(r,{...n("a"),size:"small"}),e(r,{...n("b")}),e(r,{...n("c"),sx:{"& .MuiSvgIcon-root":{fontSize:28}}})]})}const A=`import * as React from 'react';
import Radio from '@mui/material/Radio';
export default function SizeRadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    return (<div>
      <Radio {...controlProps('a')} size="small"/>
      <Radio {...controlProps('b')}/>
      <Radio {...controlProps('c')} sx={{
            '& .MuiSvgIcon-root': {
                fontSize: 28,
            },
        }}/>
    </div>);
}
`;function E(){const[t,i]=c.useState("a"),d=m=>{i(m.target.value)},n=m=>({checked:t===m,onChange:d,value:m,name:"color-radio-button-demo",inputProps:{"aria-label":m}});return a("div",{children:[e(r,{...n("a")}),e(r,{...n("b"),color:"secondary"}),e(r,{...n("c"),color:"success"}),e(r,{...n("d"),color:"default"}),e(r,{...n("e"),sx:{color:g[800],"&.Mui-checked":{color:g[600]}}})]})}const H=`import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
export default function ColorRadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    return (<div>
      <Radio {...controlProps('a')}/>
      <Radio {...controlProps('b')} color="secondary"/>
      <Radio {...controlProps('c')} color="success"/>
      <Radio {...controlProps('d')} color="default"/>
      <Radio {...controlProps('e')} sx={{
            color: pink[800],
            '&.Mui-checked': {
                color: pink[600],
            },
        }}/>
    </div>);
}
`;function D(){return a(b,{children:[e(p,{id:"demo-form-control-label-placement",children:"Label placement"}),a(u,{row:!0,"aria-labelledby":"demo-form-control-label-placement",name:"position",defaultValue:"top",children:[e(l,{value:"top",control:e(r,{}),label:"Top",labelPlacement:"top"}),e(l,{value:"start",control:e(r,{}),label:"Start",labelPlacement:"start"}),e(l,{value:"bottom",control:e(r,{}),label:"Bottom",labelPlacement:"bottom"}),e(l,{value:"end",control:e(r,{}),label:"End"})]})]})}const O=`import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function FormControlLabelPlacement() {
    return (<FormControl>
      <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
      <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="top">
        <FormControlLabel value="top" control={<Radio />} label="Top" labelPlacement="top"/>
        <FormControlLabel value="start" control={<Radio />} label="Start" labelPlacement="start"/>
        <FormControlLabel value="bottom" control={<Radio />} label="Bottom" labelPlacement="bottom"/>
        <FormControlLabel value="end" control={<Radio />} label="End"/>
      </RadioGroup>
    </FormControl>);
}
`;function U(){const[t,i]=c.useState(""),[d,n]=c.useState(!1),[m,h]=c.useState("Choose wisely");return e("form",{onSubmit:R=>{R.preventDefault(),t==="best"?(h("You got it!"),n(!1)):t==="worst"?(h("Sorry, wrong answer!"),n(!0)):(h("Please select an option."),n(!0))},children:a(b,{sx:{m:3},error:d,variant:"standard",children:[e(p,{id:"demo-error-radios",children:"Pop quiz: MUI is..."}),a(u,{"aria-labelledby":"demo-error-radios",name:"quiz",value:t,onChange:R=>{i(R.target.value),h(" "),n(!1)},children:[e(l,{value:"best",control:e(r,{}),label:"The best!"}),e(l,{value:"worst",control:e(r,{}),label:"The worst."})]}),e(y,{children:m}),e(x,{sx:{mt:1,mr:1},type:"submit",variant:"outlined",children:"Check Answer"})]})})}const W=`import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
export default function ErrorRadios() {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === 'best') {
            setHelperText('You got it!');
            setError(false);
        }
        else if (value === 'worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        }
        else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };
    return (<form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
        <RadioGroup aria-labelledby="demo-error-radios" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="best" control={<Radio />} label="The best!"/>
          <FormControlLabel value="worst" control={<Radio />} label="The worst."/>
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>);
}
`,w=v("span")(({theme:t})=>({borderRadius:"50%",width:16,height:16,boxShadow:t.palette.mode==="dark"?"0 0 0 1px rgb(16 22 26 / 40%)":"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:t.palette.mode==="dark"?"#394b59":"#f5f8fa",backgroundImage:t.palette.mode==="dark"?"linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))":"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",".Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:t.palette.mode==="dark"?"#30404d":"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:t.palette.mode==="dark"?"rgba(57,75,89,.5)":"rgba(206,217,224,.5)"}})),Y=v(w)({backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&::before":{display:"block",width:16,height:16,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}});function f(t){return e(r,{disableRipple:!0,color:"default",checkedIcon:e(Y,{}),icon:e(w,{}),...t})}function q(){return a(b,{children:[e(p,{id:"demo-customized-radios",children:"Gender"}),a(u,{defaultValue:"female","aria-labelledby":"demo-customized-radios",name:"customized-radios",children:[e(l,{value:"female",control:e(f,{}),label:"Female"}),e(l,{value:"male",control:e(f,{}),label:"Male"}),e(l,{value:"other",control:e(f,{}),label:"Other"}),e(l,{value:"disabled",disabled:!0,control:e(f,{}),label:"(Disabled option)"})]})]})}const Z=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage: theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));
const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#106ba3',
    },
});
// Inspired by blueprintjs
function BpRadio(props) {
    return (<Radio disableRipple color="default" checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} {...props}/>);
}
export default function CustomizedRadios() {
    return (<FormControl>
      <FormLabel id="demo-customized-radios">Gender</FormLabel>
      <RadioGroup defaultValue="female" aria-labelledby="demo-customized-radios" name="customized-radios">
        <FormControlLabel value="female" control={<BpRadio />} label="Female"/>
        <FormControlLabel value="male" control={<BpRadio />} label="Male"/>
        <FormControlLabel value="other" control={<BpRadio />} label="Other"/>
        <FormControlLabel value="disabled" disabled control={<BpRadio />} label="(Disabled option)"/>
      </RadioGroup>
    </FormControl>);
}
`,_=v(t=>e(l,{...t}))(({theme:t,checked:i})=>({".MuiFormControlLabel-label":i&&{color:t.palette.primary.main}}));function F(t){const i=L();let d=!1;return i&&(d=i.value===t.value),e(_,{checked:d,...t})}function $(){return a(u,{name:"use-radio-group",defaultValue:"first",children:[e(F,{value:"first",label:"First",control:e(r,{})}),e(F,{value:"second",label:"Second",control:e(r,{})})]})}const J=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
const StyledFormControlLabel = styled((props) => (<FormControlLabel {...props}/>))(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
    },
}));
function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
    let checked = false;
    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }
    return <StyledFormControlLabel checked={checked} {...props}/>;
}
export default function UseRadioGroup() {
    return (<RadioGroup name="use-radio-group" defaultValue="first">
      <MyFormControlLabel value="first" label="First" control={<Radio />}/>
      <MyFormControlLabel value="second" label="Second" control={<Radio />}/>
    </RadioGroup>);
}
`;function te(t){return a(k,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(N,{}),e(x,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/radio-buttons",target:"_blank",role:"button",size:"small",startIcon:e(G,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Radio Group"}),e(o,{className:"description",children:"The Radio Group allows the user to select one option from a set."}),a(o,{className:"text-14 mb-32",component:"div",children:["Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a ",e("a",{href:"/material-ui/react-select/",children:"Select component"})," because it uses less space."]}),e(o,{className:"text-14 mb-32",component:"div",children:"Radio buttons should have the most commonly used option selected by default."}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Radio group"}),a(o,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"RadioGroup"})," is a helpful wrapper used to group ",e("code",{children:"Radio"})," components that provides an easier API, and proper keyboard accessibility to the group."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"RadioButtonsGroup.js",className:"my-16",iframe:!1,component:S,raw:B})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Direction"}),a(o,{className:"text-14 mb-32",component:"div",children:["To lay out the buttons horizontally, set the ",e("code",{children:"row"})," prop:"]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"RowRadioButtonsGroup.js",className:"my-16",iframe:!1,component:P,raw:z})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Controlled"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can control the radio with the ",e("code",{children:"value"})," and ",e("code",{children:"onChange"})," props:"]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"ControlledRadioButtonsGroup.js",className:"my-16",iframe:!1,component:I,raw:V})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Standalone radio buttons"}),a(o,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"Radio"})," can also be used standalone, without the RadioGroup wrapper."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"RadioButtons.js",className:"my-16",iframe:!1,component:T,raw:M})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Size"}),a(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"size"})," prop or customize the font size of the svg icons to change the size of the radios."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"SizeRadioButtons.js",className:"my-16",iframe:!1,component:j,raw:A})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"ColorRadioButtons.js",className:"my-16",iframe:!1,component:E,raw:H})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Label placement"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can change the placement of the label with the ",e("code",{children:"FormControlLabel"})," component's ",e("code",{children:"labelPlacement"})," prop:"]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"FormControlLabelPlacement.js",className:"my-16",iframe:!1,component:D,raw:O})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Show error"}),e(o,{className:"text-14 mb-32",component:"div",children:"In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:"}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"ErrorRadios.js",className:"my-16",iframe:!1,component:U,raw:W})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),a(o,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"CustomizedRadios.js",className:"my-16",iframe:!1,component:q,raw:Z})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:e("code",{children:"useRadioGroup"})}),a(o,{className:"text-14 mb-32",component:"div",children:["For advanced customization use cases, a ",e("code",{children:"useRadioGroup()"})," hook is exposed. It returns the context value of the parent radio group. The Radio component uses this hook internally."]}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"API"}),e(C,{component:"pre",className:"language-jsx",children:` 
import { useRadioGroup } from '@mui/material/RadioGroup';
`}),e(o,{className:"text-14 mt-12 mb-10",component:"h4",children:"Returns"}),a(o,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"value"})," (",e("em",{children:"object"}),"):"]}),a("ul",{className:"space-y-16",children:[a("li",{children:[e("code",{children:"value.name"})," (",e("em",{children:"string"})," [optional]): The name used to reference the value of the control."]}),a("li",{children:[e("code",{children:"value.onChange"})," (",e("em",{children:"func"})," [optional]): Callback fired when a radio button is selected."]}),a("li",{children:[e("code",{children:"value.value"})," (",e("em",{children:"any"})," [optional]): Value of the selected radio button."]})]}),e(o,{className:"text-14 mt-12 mb-10",component:"h4",children:"Example"}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"UseRadioGroup.js",className:"my-16",iframe:!1,component:$,raw:J})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"When to use"}),e("ul",{className:"space-y-16",children:e("li",{children:e("a",{href:"https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/",children:"Checkboxes vs. Radio Buttons"})})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),a(o,{className:"text-14 mb-32",component:"div",children:["(WAI-ARIA: ",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/"}),")"]}),a("ul",{className:"space-y-16",children:[e("li",{children:a(o,{className:"text-14 mb-32",component:"div",children:["All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the ",e("code",{children:"<label>"})," element (",e("a",{href:"/material-ui/api/form-control-label/",children:"FormControlLabel"}),")."]})}),e("li",{children:a(o,{className:"text-14 mb-32",component:"div",children:["When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. ",e("code",{children:"aria-label"}),", ",e("code",{children:"aria-labelledby"}),", ",e("code",{children:"title"}),") via the ",e("code",{children:"inputProps"})," property."]})})]}),e(C,{component:"pre",className:"language-jsx",children:` 
<Radio
  value="radioA"
  inputProps={{
    'aria-label': 'Radio A',
  
/>
`})]})}export{te as default};
