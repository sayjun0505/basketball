var qt=Object.defineProperty;var $t=(a,e,t)=>e in a?qt(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var P=(a,e,t)=>($t(a,typeof e!="symbol"?e+"":e,t),t);import{d as s,j as i,ag as c,H as L,b5 as Ye,bf as U,bg as K,bs as Z,al as J,c8 as xt,aX as gt,bY as bt,r as z,d7 as Se,cP as be,z as ye,eo as De,cI as Ft,s as We,I as kt,a_ as Ct,K as Gt,b1 as Kt,dC as Yt,ep as ut,D as Zt,P as Xt,ec as Jt,an as f,bj as X,F as Qt,C as ei,T as d,dp as ce,bb as ti}from"./index-cy1M6gwN.js";import{F as M}from"./FuseExample-0-XNuDGL.js";import{D as ii}from"./DocumentationPageBreadcrumb-0mbWZbHe.js";import{d as Ze}from"./AccountCircle-cMFAHQuQ.js";import{d as Xe}from"./VisibilityOff-dz6Hkws8.js";import{d as ri}from"./Menu-1TPiZK2Q.js";import{d as ai}from"./Search-UirgntIS.js";import"./DocumentationNavigation-fvt_Eo8n.js";function ni(){return s(L,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[i(c,{id:"outlined-basic",label:"Outlined",variant:"outlined"}),i(c,{id:"filled-basic",label:"Filled",variant:"filled"}),i(c,{id:"standard-basic",label:"Standard",variant:"standard"})]})}const oi=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function BasicTextFields() {
    return (<Box component="form" sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
      <TextField id="filled-basic" label="Filled" variant="filled"/>
      <TextField id="standard-basic" label="Standard" variant="standard"/>
    </Box>);
}
`;function li(){return s(L,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[s("div",{children:[i(c,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),i(c,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),i(c,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),i(c,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),i(c,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),i(c,{id:"outlined-search",label:"Search field",type:"search"}),i(c,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"})]}),s("div",{children:[i(c,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),i(c,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),i(c,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),i(c,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),i(c,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),i(c,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),i(c,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"})]}),s("div",{children:[i(c,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),i(c,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),i(c,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),i(c,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),i(c,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),i(c,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),i(c,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"})]})]})}const si=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function FormPropsTextFields() {
    return (<Box component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off">
      <div>
        <TextField required id="outlined-required" label="Required" defaultValue="Hello World"/>
        <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World"/>
        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
        <TextField id="outlined-read-only-input" label="Read Only" defaultValue="Hello World" InputProps={{
            readOnly: true,
        }}/>
        <TextField id="outlined-number" label="Number" type="number" InputLabelProps={{
            shrink: true,
        }}/>
        <TextField id="outlined-search" label="Search field" type="search"/>
        <TextField id="outlined-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text"/>
      </div>
      <div>
        <TextField required id="filled-required" label="Required" defaultValue="Hello World" variant="filled"/>
        <TextField disabled id="filled-disabled" label="Disabled" defaultValue="Hello World" variant="filled"/>
        <TextField id="filled-password-input" label="Password" type="password" autoComplete="current-password" variant="filled"/>
        <TextField id="filled-read-only-input" label="Read Only" defaultValue="Hello World" InputProps={{
            readOnly: true,
        }} variant="filled"/>
        <TextField id="filled-number" label="Number" type="number" InputLabelProps={{
            shrink: true,
        }} variant="filled"/>
        <TextField id="filled-search" label="Search field" type="search" variant="filled"/>
        <TextField id="filled-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="filled"/>
      </div>
      <div>
        <TextField required id="standard-required" label="Required" defaultValue="Hello World" variant="standard"/>
        <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" variant="standard"/>
        <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard"/>
        <TextField id="standard-read-only-input" label="Read Only" defaultValue="Hello World" InputProps={{
            readOnly: true,
        }} variant="standard"/>
        <TextField id="standard-number" label="Number" type="number" InputLabelProps={{
            shrink: true,
        }} variant="standard"/>
        <TextField id="standard-search" label="Search field" type="search" variant="standard"/>
        <TextField id="standard-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="standard"/>
      </div>
    </Box>);
}
`;function ui(){return s(L,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[s("div",{children:[i(c,{error:!0,id:"outlined-error",label:"Error",defaultValue:"Hello World"}),i(c,{error:!0,id:"outlined-error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry."})]}),s("div",{children:[i(c,{error:!0,id:"filled-error",label:"Error",defaultValue:"Hello World",variant:"filled"}),i(c,{error:!0,id:"filled-error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry.",variant:"filled"})]}),s("div",{children:[i(c,{error:!0,id:"standard-error",label:"Error",defaultValue:"Hello World",variant:"standard"}),i(c,{error:!0,id:"standard-error-helper-text",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry.",variant:"standard"})]})]})}const di=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function ValidationTextFields() {
    return (<Box component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off">
      <div>
        <TextField error id="outlined-error" label="Error" defaultValue="Hello World"/>
        <TextField error id="outlined-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry."/>
      </div>
      <div>
        <TextField error id="filled-error" label="Error" defaultValue="Hello World" variant="filled"/>
        <TextField error id="filled-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry." variant="filled"/>
      </div>
      <div>
        <TextField error id="standard-error" label="Error" defaultValue="Hello World" variant="standard"/>
        <TextField error id="standard-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry." variant="standard"/>
      </div>
    </Box>);
}
`;function hi(){return s(L,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[s("div",{children:[i(c,{id:"outlined-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4}),i(c,{id:"outlined-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0}),i(c,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value"})]}),s("div",{children:[i(c,{id:"filled-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"filled"}),i(c,{id:"filled-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"filled"}),i(c,{id:"filled-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled"})]}),s("div",{children:[i(c,{id:"standard-multiline-flexible",label:"Multiline",multiline:!0,maxRows:4,variant:"standard"}),i(c,{id:"standard-textarea",label:"Multiline Placeholder",placeholder:"Placeholder",multiline:!0,variant:"standard"}),i(c,{id:"standard-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"standard"})]})]})}const ci=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function MultilineTextFields() {
    return (<Box component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off">
      <div>
        <TextField id="outlined-multiline-flexible" label="Multiline" multiline maxRows={4}/>
        <TextField id="outlined-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline/>
        <TextField id="outlined-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value"/>
      </div>
      <div>
        <TextField id="filled-multiline-flexible" label="Multiline" multiline maxRows={4} variant="filled"/>
        <TextField id="filled-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline variant="filled"/>
        <TextField id="filled-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" variant="filled"/>
      </div>
      <div>
        <TextField id="standard-multiline-flexible" label="Multiline" multiline maxRows={4} variant="standard"/>
        <TextField id="standard-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline variant="standard"/>
        <TextField id="standard-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" variant="standard"/>
      </div>
    </Box>);
}
`,Ce=[{value:"USD",label:"$"},{value:"EUR",label:"€"},{value:"BTC",label:"฿"},{value:"JPY",label:"¥"}];function pi(){return s(L,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[s("div",{children:[i(c,{id:"outlined-select-currency",select:!0,label:"Select",defaultValue:"EUR",helperText:"Please select your currency",children:Ce.map(a=>i(Ye,{value:a.value,children:a.label},a.value))}),i(c,{id:"outlined-select-currency-native",select:!0,label:"Native select",defaultValue:"EUR",SelectProps:{native:!0},helperText:"Please select your currency",children:Ce.map(a=>i("option",{value:a.value,children:a.label},a.value))})]}),s("div",{children:[i(c,{id:"filled-select-currency",select:!0,label:"Select",defaultValue:"EUR",helperText:"Please select your currency",variant:"filled",children:Ce.map(a=>i(Ye,{value:a.value,children:a.label},a.value))}),i(c,{id:"filled-select-currency-native",select:!0,label:"Native select",defaultValue:"EUR",SelectProps:{native:!0},helperText:"Please select your currency",variant:"filled",children:Ce.map(a=>i("option",{value:a.value,children:a.label},a.value))})]}),s("div",{children:[i(c,{id:"standard-select-currency",select:!0,label:"Select",defaultValue:"EUR",helperText:"Please select your currency",variant:"standard",children:Ce.map(a=>i(Ye,{value:a.value,children:a.label},a.value))}),i(c,{id:"standard-select-currency-native",select:!0,label:"Native select",defaultValue:"EUR",SelectProps:{native:!0},helperText:"Please select your currency",variant:"standard",children:Ce.map(a=>i("option",{value:a.value,children:a.label},a.value))})]})]})}const mi=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];
export default function SelectTextFields() {
    return (<Box component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off">
      <div>
        <TextField id="outlined-select-currency" select label="Select" defaultValue="EUR" helperText="Please select your currency">
          {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>))}
        </TextField>
        <TextField id="outlined-select-currency-native" select label="Native select" defaultValue="EUR" SelectProps={{
            native: true,
        }} helperText="Please select your currency">
          {currencies.map((option) => (<option key={option.value} value={option.value}>
              {option.label}
            </option>))}
        </TextField>
      </div>
      <div>
        <TextField id="filled-select-currency" select label="Select" defaultValue="EUR" helperText="Please select your currency" variant="filled">
          {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>))}
        </TextField>
        <TextField id="filled-select-currency-native" select label="Native select" defaultValue="EUR" SelectProps={{
            native: true,
        }} helperText="Please select your currency" variant="filled">
          {currencies.map((option) => (<option key={option.value} value={option.value}>
              {option.label}
            </option>))}
        </TextField>
      </div>
      <div>
        <TextField id="standard-select-currency" select label="Select" defaultValue="EUR" helperText="Please select your currency" variant="standard">
          {currencies.map((option) => (<MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>))}
        </TextField>
        <TextField id="standard-select-currency-native" select label="Native select" defaultValue="EUR" SelectProps={{
            native: true,
        }} helperText="Please select your currency" variant="standard">
          {currencies.map((option) => (<option key={option.value} value={option.value}>
              {option.label}
            </option>))}
        </TextField>
      </div>
    </Box>);
}
`;function fi(){return s(L,{sx:{"& > :not(style)":{m:1}},children:[s(U,{variant:"standard",children:[i(K,{htmlFor:"input-with-icon-adornment",children:"With a start adornment"}),i(J,{id:"input-with-icon-adornment",startAdornment:i(Z,{position:"start",children:i(Ze,{})})})]}),i(c,{id:"input-with-icon-textfield",label:"TextField",InputProps:{startAdornment:i(Z,{position:"start",children:i(Ze,{})})},variant:"standard"}),s(L,{sx:{display:"flex",alignItems:"flex-end"},children:[i(Ze,{sx:{color:"action.active",mr:1,my:.5}}),i(c,{id:"input-with-sx",label:"With sx",variant:"standard"})]})]})}const vi=`import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
export default function InputWithIcon() {
    return (<Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input id="input-with-icon-adornment" startAdornment={<InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>}/>
      </FormControl>
      <TextField id="input-with-icon-textfield" label="TextField" InputProps={{
            startAdornment: (<InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>),
        }} variant="standard"/>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
        <TextField id="input-with-sx" label="With sx" variant="standard"/>
      </Box>
    </Box>);
}
`;var at={},xi=gt;Object.defineProperty(at,"__esModule",{value:!0});var Oe=at.default=void 0,gi=xi(xt()),bi=bt;Oe=at.default=(0,gi.default)((0,bi.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility");function Fi(){const[a,e]=z.useState(!1),t=()=>e(n=>!n),r=n=>{n.preventDefault()};return s(L,{sx:{display:"flex",flexWrap:"wrap"},children:[s("div",{children:[i(c,{label:"With normal TextField",id:"outlined-start-adornment",sx:{m:1,width:"25ch"},InputProps:{startAdornment:i(Z,{position:"start",children:"kg"})}}),s(U,{sx:{m:1,width:"25ch"},variant:"outlined",children:[i(Se,{id:"outlined-adornment-weight",endAdornment:i(Z,{position:"end",children:"kg"}),"aria-describedby":"outlined-weight-helper-text",inputProps:{"aria-label":"weight"}}),i(be,{id:"outlined-weight-helper-text",children:"Weight"})]}),s(U,{sx:{m:1,width:"25ch"},variant:"outlined",children:[i(K,{htmlFor:"outlined-adornment-password",children:"Password"}),i(Se,{id:"outlined-adornment-password",type:a?"text":"password",endAdornment:i(Z,{position:"end",children:i(ye,{"aria-label":"toggle password visibility",onClick:t,onMouseDown:r,edge:"end",children:a?i(Xe,{}):i(Oe,{})})}),label:"Password"})]}),s(U,{fullWidth:!0,sx:{m:1},children:[i(K,{htmlFor:"outlined-adornment-amount",children:"Amount"}),i(Se,{id:"outlined-adornment-amount",startAdornment:i(Z,{position:"start",children:"$"}),label:"Amount"})]})]}),s("div",{children:[i(c,{label:"With normal TextField",id:"filled-start-adornment",sx:{m:1,width:"25ch"},InputProps:{startAdornment:i(Z,{position:"start",children:"kg"})},variant:"filled"}),s(U,{sx:{m:1,width:"25ch"},variant:"filled",children:[i(De,{id:"filled-adornment-weight",endAdornment:i(Z,{position:"end",children:"kg"}),"aria-describedby":"filled-weight-helper-text",inputProps:{"aria-label":"weight"}}),i(be,{id:"filled-weight-helper-text",children:"Weight"})]}),s(U,{sx:{m:1,width:"25ch"},variant:"filled",children:[i(K,{htmlFor:"filled-adornment-password",children:"Password"}),i(De,{id:"filled-adornment-password",type:a?"text":"password",endAdornment:i(Z,{position:"end",children:i(ye,{"aria-label":"toggle password visibility",onClick:t,onMouseDown:r,edge:"end",children:a?i(Xe,{}):i(Oe,{})})})})]}),s(U,{fullWidth:!0,sx:{m:1},variant:"filled",children:[i(K,{htmlFor:"filled-adornment-amount",children:"Amount"}),i(De,{id:"filled-adornment-amount",startAdornment:i(Z,{position:"start",children:"$"})})]})]}),s("div",{children:[i(c,{label:"With normal TextField",id:"standard-start-adornment",sx:{m:1,width:"25ch"},InputProps:{startAdornment:i(Z,{position:"start",children:"kg"})},variant:"standard"}),s(U,{variant:"standard",sx:{m:1,mt:3,width:"25ch"},children:[i(J,{id:"standard-adornment-weight",endAdornment:i(Z,{position:"end",children:"kg"}),"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"weight"}}),i(be,{id:"standard-weight-helper-text",children:"Weight"})]}),s(U,{sx:{m:1,width:"25ch"},variant:"standard",children:[i(K,{htmlFor:"standard-adornment-password",children:"Password"}),i(J,{id:"standard-adornment-password",type:a?"text":"password",endAdornment:i(Z,{position:"end",children:i(ye,{"aria-label":"toggle password visibility",onClick:t,onMouseDown:r,children:a?i(Xe,{}):i(Oe,{})})})})]}),s(U,{fullWidth:!0,sx:{m:1},variant:"standard",children:[i(K,{htmlFor:"standard-adornment-amount",children:"Amount"}),i(J,{id:"standard-adornment-amount",startAdornment:i(Z,{position:"start",children:"$"})})]})]})]})}const ki=`import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function InputAdornments() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <TextField label="With normal TextField" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }} InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}/>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput id="outlined-adornment-weight" endAdornment={<InputAdornment position="end">kg</InputAdornment>} aria-describedby="outlined-weight-helper-text" inputProps={{
            'aria-label': 'weight',
        }}/>
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'} endAdornment={<InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>} label="Password"/>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" startAdornment={<InputAdornment position="start">$</InputAdornment>} label="Amount"/>
        </FormControl>
      </div>
      <div>
        <TextField label="With normal TextField" id="filled-start-adornment" sx={{ m: 1, width: '25ch' }} InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }} variant="filled"/>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <FilledInput id="filled-adornment-weight" endAdornment={<InputAdornment position="end">kg</InputAdornment>} aria-describedby="filled-weight-helper-text" inputProps={{
            'aria-label': 'weight',
        }}/>
          <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput id="filled-adornment-password" type={showPassword ? 'text' : 'password'} endAdornment={<InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}/>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput id="filled-adornment-amount" startAdornment={<InputAdornment position="start">$</InputAdornment>}/>
        </FormControl>
      </div>
      <div>
        <TextField label="With normal TextField" id="standard-start-adornment" sx={{ m: 1, width: '25ch' }} InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }} variant="standard"/>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input id="standard-adornment-weight" endAdornment={<InputAdornment position="end">kg</InputAdornment>} aria-describedby="standard-weight-helper-text" inputProps={{
            'aria-label': 'weight',
        }}/>
          <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input id="standard-adornment-password" type={showPassword ? 'text' : 'password'} endAdornment={<InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}/>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input id="standard-adornment-amount" startAdornment={<InputAdornment position="start">$</InputAdornment>}/>
        </FormControl>
      </div>
    </Box>);
}
`;function Ci(){return s(L,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[s("div",{children:[i(c,{label:"Size",id:"outlined-size-small",defaultValue:"Small",size:"small"}),i(c,{label:"Size",id:"outlined-size-normal",defaultValue:"Normal"})]}),s("div",{children:[i(c,{label:"Size",id:"filled-size-small",defaultValue:"Small",variant:"filled",size:"small"}),i(c,{label:"Size",id:"filled-size-normal",defaultValue:"Normal",variant:"filled"})]}),s("div",{children:[i(c,{label:"Size",id:"standard-size-small",defaultValue:"Small",size:"small",variant:"standard"}),i(c,{label:"Size",id:"standard-size-normal",defaultValue:"Normal",variant:"standard"})]})]})}const yi=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function TextFieldSizes() {
    return (<Box component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off">
      <div>
        <TextField label="Size" id="outlined-size-small" defaultValue="Small" size="small"/>
        <TextField label="Size" id="outlined-size-normal" defaultValue="Normal"/>
      </div>
      <div>
        <TextField label="Size" id="filled-size-small" defaultValue="Small" variant="filled" size="small"/>
        <TextField label="Size" id="filled-size-normal" defaultValue="Normal" variant="filled"/>
      </div>
      <div>
        <TextField label="Size" id="standard-size-small" defaultValue="Small" size="small" variant="standard"/>
        <TextField label="Size" id="standard-size-normal" defaultValue="Normal" variant="standard"/>
      </div>
    </Box>);
}
`;function Ti(){return s(Ft,{component:"form",sx:{width:"25ch"},spacing:2,noValidate:!0,autoComplete:"off",children:[i(c,{hiddenLabel:!0,id:"filled-hidden-label-small",defaultValue:"Small",variant:"filled",size:"small"}),i(c,{hiddenLabel:!0,id:"filled-hidden-label-normal",defaultValue:"Normal",variant:"filled"})]})}const Ii=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
export default function TextFieldHiddenLabel() {
    return (<Stack component="form" sx={{
            width: '25ch',
        }} spacing={2} noValidate autoComplete="off">
      <TextField hiddenLabel id="filled-hidden-label-small" defaultValue="Small" variant="filled" size="small"/>
      <TextField hiddenLabel id="filled-hidden-label-normal" defaultValue="Normal" variant="filled"/>
    </Stack>);
}
`;function Ne(){return i(L,{sx:{height:20,backgroundColor:a=>a.palette.mode==="light"?"rgba(255, 0, 0, 0.1)":"rgb(255 132 132 / 25%)"}})}function wi(){return s(L,{sx:{display:"flex",flexDirection:"column","& .MuiTextField-root":{width:"25ch"}},children:[i(Ne,{}),i(c,{label:'margin="none"',id:"margin-none"}),i(Ne,{}),i(c,{label:'margin="dense"',id:"margin-dense",margin:"dense"}),i(Ne,{}),i(c,{label:'margin="normal"',id:"margin-normal",margin:"normal"}),i(Ne,{})]})}const _i=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function RedBar() {
    return (<Box sx={{
            height: 20,
            backgroundColor: (theme) => theme.palette.mode === 'light'
                ? 'rgba(255, 0, 0, 0.1)'
                : 'rgb(255 132 132 / 25%)',
        }}/>);
}
export default function LayoutTextFields() {
    return (<Box sx={{
            display: 'flex',
            flexDirection: 'column',
            '& .MuiTextField-root': { width: '25ch' },
        }}>
      <RedBar />
      <TextField label={'margin="none"'} id="margin-none"/>
      <RedBar />
      <TextField label={'margin="dense"'} id="margin-dense" margin="dense"/>
      <RedBar />
      <TextField label={'margin="normal"'} id="margin-normal" margin="normal"/>
      <RedBar />
    </Box>);
}
`;function Si(){return i(L,{sx:{width:500,maxWidth:"100%"},children:i(c,{fullWidth:!0,label:"fullWidth",id:"fullWidth"})})}const Ai=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function FullWidthTextField() {
    return (<Box sx={{
            width: 500,
            maxWidth: '100%',
        }}>
      <TextField fullWidth label="fullWidth" id="fullWidth"/>
    </Box>);
}
`;function Ei(){const[a,e]=z.useState("Cat in the Hat");return s(L,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[i(c,{id:"outlined-controlled",label:"Controlled",value:a,onChange:t=>{e(t.target.value)}}),i(c,{id:"outlined-uncontrolled",label:"Uncontrolled",defaultValue:"foo"})]})}const Bi=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function StateTextFields() {
    const [name, setName] = React.useState('Cat in the Hat');
    return (<Box component="form" sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off">
      <TextField id="outlined-controlled" label="Controlled" value={name} onChange={(event) => {
            setName(event.target.value);
        }}/>
      <TextField id="outlined-uncontrolled" label="Uncontrolled" defaultValue="foo"/>
    </Box>);
}
`;function Vi(){return s(L,{component:"form",sx:{"& > :not(style)":{m:1}},noValidate:!0,autoComplete:"off",children:[s(U,{variant:"standard",children:[i(K,{htmlFor:"component-simple",children:"Name"}),i(J,{id:"component-simple",defaultValue:"Composed TextField"})]}),s(U,{variant:"standard",children:[i(K,{htmlFor:"component-helper",children:"Name"}),i(J,{id:"component-helper",defaultValue:"Composed TextField","aria-describedby":"component-helper-text"}),i(be,{id:"component-helper-text",children:"Some important helper text"})]}),s(U,{disabled:!0,variant:"standard",children:[i(K,{htmlFor:"component-disabled",children:"Name"}),i(J,{id:"component-disabled",defaultValue:"Composed TextField"}),i(be,{children:"Disabled"})]}),s(U,{error:!0,variant:"standard",children:[i(K,{htmlFor:"component-error",children:"Name"}),i(J,{id:"component-error",defaultValue:"Composed TextField","aria-describedby":"component-error-text"}),i(be,{id:"component-error-text",children:"Error"})]}),s(U,{children:[i(K,{htmlFor:"component-outlined",children:"Name"}),i(Se,{id:"component-outlined",defaultValue:"Composed TextField",label:"Name"})]}),s(U,{variant:"filled",children:[i(K,{htmlFor:"component-filled",children:"Name"}),i(De,{id:"component-filled",defaultValue:"Composed TextField"})]})]})}const Mi=`import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
export default function ComposedTextField() {
    return (<Box component="form" sx={{
            '& > :not(style)': { m: 1 },
        }} noValidate autoComplete="off">
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" defaultValue="Composed TextField"/>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input id="component-helper" defaultValue="Composed TextField" aria-describedby="component-helper-text"/>
        <FormHelperText id="component-helper-text">
          Some important helper text
        </FormHelperText>
      </FormControl>
      <FormControl disabled variant="standard">
        <InputLabel htmlFor="component-disabled">Name</InputLabel>
        <Input id="component-disabled" defaultValue="Composed TextField"/>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl error variant="standard">
        <InputLabel htmlFor="component-error">Name</InputLabel>
        <Input id="component-error" defaultValue="Composed TextField" aria-describedby="component-error-text"/>
        <FormHelperText id="component-error-text">Error</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput id="component-outlined" defaultValue="Composed TextField" label="Name"/>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <FilledInput id="component-filled" defaultValue="Composed TextField"/>
      </FormControl>
    </Box>);
}
`,Re={"aria-label":"description"};function Ni(){return s(L,{component:"form",sx:{"& > :not(style)":{m:1}},noValidate:!0,autoComplete:"off",children:[i(J,{defaultValue:"Hello world",inputProps:Re}),i(J,{placeholder:"Placeholder",inputProps:Re}),i(J,{disabled:!0,defaultValue:"Disabled",inputProps:Re}),i(J,{defaultValue:"Error",error:!0,inputProps:Re})]})}const Ri=`import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
const ariaLabel = { 'aria-label': 'description' };
export default function Inputs() {
    return (<Box component="form" sx={{
            '& > :not(style)': { m: 1 },
        }} noValidate autoComplete="off">
      <Input defaultValue="Hello world" inputProps={ariaLabel}/>
      <Input placeholder="Placeholder" inputProps={ariaLabel}/>
      <Input disabled defaultValue="Disabled" inputProps={ariaLabel}/>
      <Input defaultValue="Error" error inputProps={ariaLabel}/>
    </Box>);
}
`;function Di(){return s(L,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[i(c,{label:"Outlined secondary",color:"secondary",focused:!0}),i(c,{label:"Filled success",variant:"filled",color:"success",focused:!0}),i(c,{label:"Standard warning",variant:"standard",color:"warning",focused:!0})]})}const Oi=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function ColorTextFields() {
    return (<Box component="form" sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off">
      <TextField label="Outlined secondary" color="secondary" focused/>
      <TextField label="Filled success" variant="filled" color="success" focused/>
      <TextField label="Standard warning" variant="standard" color="warning" focused/>
    </Box>);
}
`,Pi=We(c)({"& label.Mui-focused":{color:"#A0AAB4"},"& .MuiInput-underline:after":{borderBottomColor:"#B2BAC2"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#E0E3E7"},"&:hover fieldset":{borderColor:"#B2BAC2"},"&.Mui-focused fieldset":{borderColor:"#6F7E8C"}}}),Li=We(kt)(({theme:a})=>({"label + &":{marginTop:a.spacing(3)},"& .MuiInputBase-input":{borderRadius:4,position:"relative",backgroundColor:a.palette.mode==="light"?"#F3F6F9":"#1A2027",border:"1px solid",borderColor:a.palette.mode==="light"?"#E0E3E7":"#2D3843",fontSize:16,width:"auto",padding:"10px 12px",transition:a.transitions.create(["border-color","background-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{boxShadow:`${Ct(a.palette.primary.main,.25)} 0 0 0 0.2rem`,borderColor:a.palette.primary.main}}})),Hi=We(a=>i(c,{InputProps:{disableUnderline:!0},...a}))(({theme:a})=>({"& .MuiFilledInput-root":{overflow:"hidden",borderRadius:4,backgroundColor:a.palette.mode==="light"?"#F3F6F9":"#1A2027",border:"1px solid",borderColor:a.palette.mode==="light"?"#E0E3E7":"#2D3843",transition:a.transitions.create(["border-color","background-color","box-shadow"]),"&:hover":{backgroundColor:"transparent"},"&.Mui-focused":{backgroundColor:"transparent",boxShadow:`${Ct(a.palette.primary.main,.25)} 0 0 0 2px`,borderColor:a.palette.primary.main}}})),Ui=We(c)({"& input:valid + fieldset":{borderColor:"#E0E3E7",borderWidth:1},"& input:invalid + fieldset":{borderColor:"red",borderWidth:1},"& input:valid:focus + fieldset":{borderLeftWidth:4,padding:"4px !important"}});function ji(){return s(L,{component:"form",noValidate:!0,sx:{display:"grid",gridTemplateColumns:{sm:"1fr 1fr"},gap:2},children:[s(U,{variant:"standard",children:[i(K,{shrink:!0,htmlFor:"bootstrap-input",children:"Bootstrap"}),i(Li,{defaultValue:"react-bootstrap",id:"bootstrap-input"})]}),i(Hi,{label:"Reddit",defaultValue:"react-reddit",id:"reddit-input",variant:"filled",style:{marginTop:11}}),i(Pi,{label:"Custom CSS",id:"custom-css-outlined-input"}),i(Ui,{label:"CSS validation style",required:!0,variant:"outlined",defaultValue:"Success",id:"validation-outlined-input"})]})}const zi=`import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
});
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
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
            boxShadow: \`\${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem\`,
            borderColor: theme.palette.primary.main,
        },
    },
}));
const RedditTextField = styled((props) => (<TextField InputProps={{ disableUnderline: true }} {...props}/>))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: \`\${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px\`,
            borderColor: theme.palette.primary.main,
        },
    },
}));
const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: '#E0E3E7',
        borderWidth: 1,
    },
    '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
        borderLeftWidth: 4,
        padding: '4px !important', // override inline-style
    },
});
export default function CustomizedInputsStyled() {
    return (<Box component="form" noValidate sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr 1fr' },
            gap: 2,
        }}>
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Bootstrap
        </InputLabel>
        <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input"/>
      </FormControl>
      <RedditTextField label="Reddit" defaultValue="react-reddit" id="reddit-input" variant="filled" style={{ marginTop: 11 }}/>
      <CssTextField label="Custom CSS" id="custom-css-outlined-input"/>
      <ValidationTextField label="CSS validation style" required variant="outlined" defaultValue="Success" id="validation-outlined-input"/>
    </Box>);
}
`,Wi=a=>Yt({palette:{mode:a.palette.mode},components:{MuiTextField:{styleOverrides:{root:{"--TextField-brandBorderColor":"#E0E3E7","--TextField-brandBorderHoverColor":"#B2BAC2","--TextField-brandBorderFocusedColor":"#6F7E8C","& label.Mui-focused":{color:"var(--TextField-brandBorderFocusedColor)"}}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{borderColor:"var(--TextField-brandBorderColor)"},root:{[`&:hover .${ut.notchedOutline}`]:{borderColor:"var(--TextField-brandBorderHoverColor)"},[`&.Mui-focused .${ut.notchedOutline}`]:{borderColor:"var(--TextField-brandBorderFocusedColor)"}}}},MuiFilledInput:{styleOverrides:{root:{"&::before, &::after":{borderBottom:"2px solid var(--TextField-brandBorderColor)"},"&:hover:not(.Mui-disabled, .Mui-error):before":{borderBottom:"2px solid var(--TextField-brandBorderHoverColor)"},"&.Mui-focused:after":{borderBottom:"2px solid var(--TextField-brandBorderFocusedColor)"}}}},MuiInput:{styleOverrides:{root:{"&::before":{borderBottom:"2px solid var(--TextField-brandBorderColor)"},"&:hover:not(.Mui-disabled, .Mui-error):before":{borderBottom:"2px solid var(--TextField-brandBorderHoverColor)"},"&.Mui-focused:after":{borderBottom:"2px solid var(--TextField-brandBorderFocusedColor)"}}}}}});function qi(){const a=Gt();return i(L,{sx:{display:"grid",gridTemplateColumns:{sm:"1fr 1fr 1fr"},gap:2},children:s(Kt,{theme:Wi(a),children:[i(c,{label:"Outlined"}),i(c,{label:"Filled",variant:"filled"}),i(c,{label:"Standard",variant:"standard"})]})})}const $i=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
const customTheme = (outerTheme) => createTheme({
    palette: {
        mode: outerTheme.palette.mode,
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '--TextField-brandBorderColor': '#E0E3E7',
                    '--TextField-brandBorderHoverColor': '#B2BAC2',
                    '--TextField-brandBorderFocusedColor': '#6F7E8C',
                    '& label.Mui-focused': {
                        color: 'var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: 'var(--TextField-brandBorderColor)',
                },
                root: {
                    [\`&:hover .\${outlinedInputClasses.notchedOutline}\`]: {
                        borderColor: 'var(--TextField-brandBorderHoverColor)',
                    },
                    [\`&.Mui-focused .\${outlinedInputClasses.notchedOutline}\`]: {
                        borderColor: 'var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    '&::before, &::after': {
                        borderBottom: '2px solid var(--TextField-brandBorderColor)',
                    },
                    '&:hover:not(.Mui-disabled, .Mui-error):before': {
                        borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                    },
                    '&.Mui-focused:after': {
                        borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&::before': {
                        borderBottom: '2px solid var(--TextField-brandBorderColor)',
                    },
                    '&:hover:not(.Mui-disabled, .Mui-error):before': {
                        borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                    },
                    '&.Mui-focused:after': {
                        borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                    },
                },
            },
        },
    },
});
export default function CustomizedInputsStyleOverrides() {
    const outerTheme = useTheme();
    return (<Box sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr 1fr 1fr' },
            gap: 2,
        }}>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField label="Outlined"/>
        <TextField label="Filled" variant="filled"/>
        <TextField label="Standard" variant="standard"/>
      </ThemeProvider>
    </Box>);
}
`;var nt={},Gi=gt;Object.defineProperty(nt,"__esModule",{value:!0});var yt=nt.default=void 0,Ki=Gi(xt()),Yi=bt;yt=nt.default=(0,Ki.default)((0,Yi.jsx)("path",{d:"m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83M13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11z"}),"Directions");function Zi(){return s(Xt,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:400},children:[i(ye,{sx:{p:"10px"},"aria-label":"menu",children:i(ri,{})}),i(kt,{sx:{ml:1,flex:1},placeholder:"Search Google Maps",inputProps:{"aria-label":"search google maps"}}),i(ye,{type:"button",sx:{p:"10px"},"aria-label":"search",children:i(ai,{})}),i(Zt,{sx:{height:28,m:.5},orientation:"vertical"}),i(ye,{color:"primary",sx:{p:"10px"},"aria-label":"directions",children:i(yt,{})})]})}const Xi=`import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
export default function CustomizedInputBase() {
    return (<Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Google Maps" inputProps={{ 'aria-label': 'search google maps' }}/>
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>);
}
`;function Ji(){const{focused:a}=Jt()||{},e=z.useMemo(()=>a?"This field is being focused":"Helper text",[a]);return i(be,{children:e})}function Qi(){return i("form",{noValidate:!0,autoComplete:"off",children:s(U,{sx:{width:"25ch"},children:[i(Se,{placeholder:"Please enter text"}),i(Ji,{})]})})}const er=`import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
function MyFormHelperText() {
    const { focused } = useFormControl() || {};
    const helperText = React.useMemo(() => {
        if (focused) {
            return 'This field is being focused';
        }
        return 'Helper text';
    }, [focused]);
    return <FormHelperText>{helperText}</FormHelperText>;
}
export default function UseFormControl() {
    return (<form noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Please enter text"/>
        <MyFormHelperText />
      </FormControl>
    </form>);
}
`;function tr(){return s(L,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:[i(c,{helperText:"Please enter your name",id:"demo-helper-text-misaligned",label:"Name"}),i(c,{id:"demo-helper-text-misaligned-no-helper",label:"Name"})]})}const ir=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function HelperTextMisaligned() {
    return (<Box sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
        }}>
      <TextField helperText="Please enter your name" id="demo-helper-text-misaligned" label="Name"/>
      <TextField id="demo-helper-text-misaligned-no-helper" label="Name"/>
    </Box>);
}
`;function rr(){return s(L,{sx:{display:"flex",alignItems:"center","& > :not(style)":{m:1}},children:[i(c,{helperText:"Please enter your name",id:"demo-helper-text-aligned",label:"Name"}),i(c,{helperText:" ",id:"demo-helper-text-aligned-no-helper",label:"Name"})]})}const ar=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function HelperTextAligned() {
    return (<Box sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
        }}>
      <TextField helperText="Please enter your name" id="demo-helper-text-aligned" label="Name"/>
      <TextField helperText=" " id="demo-helper-text-aligned-no-helper" label="Name"/>
    </Box>);
}
`;function me(a){return typeof a=="string"||a instanceof String}function dt(a){var e;return typeof a=="object"&&a!=null&&((e=a==null?void 0:a.constructor)==null?void 0:e.name)==="Object"}function Tt(a,e){return Array.isArray(e)?Tt(a,(t,r)=>e.includes(r)):Object.entries(a).reduce((t,r)=>{let[n,o]=r;return e(o,n)&&(t[n]=o),t},{})}const v={NONE:"NONE",LEFT:"LEFT",FORCE_LEFT:"FORCE_LEFT",RIGHT:"RIGHT",FORCE_RIGHT:"FORCE_RIGHT"};function nr(a){switch(a){case v.LEFT:return v.FORCE_LEFT;case v.RIGHT:return v.FORCE_RIGHT;default:return a}}function Je(a){return a.replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")}function He(a,e){if(e===a)return!0;const t=Array.isArray(e),r=Array.isArray(a);let n;if(t&&r){if(e.length!=a.length)return!1;for(n=0;n<e.length;n++)if(!He(e[n],a[n]))return!1;return!0}if(t!=r)return!1;if(e&&a&&typeof e=="object"&&typeof a=="object"){const o=e instanceof Date,l=a instanceof Date;if(o&&l)return e.getTime()==a.getTime();if(o!=l)return!1;const u=e instanceof RegExp,h=a instanceof RegExp;if(u&&h)return e.toString()==a.toString();if(u!=h)return!1;const p=Object.keys(e);for(n=0;n<p.length;n++)if(!Object.prototype.hasOwnProperty.call(a,p[n]))return!1;for(n=0;n<p.length;n++)if(!He(a[p[n]],e[p[n]]))return!1;return!0}else if(e&&a&&typeof e=="function"&&typeof a=="function")return e.toString()===a.toString();return!1}class or{constructor(e){for(Object.assign(this,e);this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start;for(;this.value.slice(this.cursorPos)!==this.oldValue.slice(this.oldSelection.end);)this.value.length-this.cursorPos<this.oldValue.length-this.oldSelection.end?++this.oldSelection.end:++this.cursorPos}get startChangePos(){return Math.min(this.cursorPos,this.oldSelection.start)}get insertedCount(){return this.cursorPos-this.startChangePos}get inserted(){return this.value.substr(this.startChangePos,this.insertedCount)}get removedCount(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}get removed(){return this.oldValue.substr(this.startChangePos,this.removedCount)}get head(){return this.value.substring(0,this.startChangePos)}get tail(){return this.value.substring(this.startChangePos+this.insertedCount)}get removeDirection(){return!this.removedCount||this.insertedCount?v.NONE:(this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos)&&this.oldSelection.end===this.oldSelection.start?v.RIGHT:v.LEFT}}function b(a,e){return new b.InputMask(a,e)}function It(a){if(a==null)throw new Error("mask property should be defined");return a instanceof RegExp?b.MaskedRegExp:me(a)?b.MaskedPattern:a===Date?b.MaskedDate:a===Number?b.MaskedNumber:Array.isArray(a)||a===Array?b.MaskedDynamic:b.Masked&&a.prototype instanceof b.Masked?a:b.Masked&&a instanceof b.Masked?a.constructor:a instanceof Function?b.MaskedFunction:(console.warn("Mask not found for mask",a),b.Masked)}function Ae(a){if(!a)throw new Error("Options in not defined");if(b.Masked){if(a.prototype instanceof b.Masked)return{mask:a};const{mask:e=void 0,...t}=a instanceof b.Masked?{mask:a}:dt(a)&&a.mask instanceof b.Masked?a:{};if(e){const r=e.mask;return{...Tt(e,(n,o)=>!o.startsWith("_")),mask:e.constructor,_mask:r,...t}}}return dt(a)?{...a}:{mask:a}}function se(a){if(b.Masked&&a instanceof b.Masked)return a;const e=Ae(a),t=It(e.mask);if(!t)throw new Error(`Masked class is not found for provided mask ${e.mask}, appropriate module needs to be imported manually before creating mask.`);return e.mask===t&&delete e.mask,e._mask&&(e.mask=e._mask,delete e._mask),new t(e)}b.createMask=se;class ot{get selectionStart(){let e;try{e=this._unsafeSelectionStart}catch{}return e??this.value.length}get selectionEnd(){let e;try{e=this._unsafeSelectionEnd}catch{}return e??this.value.length}select(e,t){if(!(e==null||t==null||e===this.selectionStart&&t===this.selectionEnd))try{this._unsafeSelect(e,t)}catch{}}get isActive(){return!1}}b.MaskElement=ot;const ht=90,lr=89;class qe extends ot{constructor(e){super(),this.input=e,this._onKeydown=this._onKeydown.bind(this),this._onInput=this._onInput.bind(this),this._onBeforeinput=this._onBeforeinput.bind(this),this._onCompositionEnd=this._onCompositionEnd.bind(this)}get rootElement(){var e,t;return((t=(e=this.input).getRootNode)==null?void 0:t.call(e))??document}get isActive(){return this.input===this.rootElement.activeElement}bindEvents(e){this.input.addEventListener("keydown",this._onKeydown),this.input.addEventListener("input",this._onInput),this.input.addEventListener("beforeinput",this._onBeforeinput),this.input.addEventListener("compositionend",this._onCompositionEnd),this.input.addEventListener("drop",e.drop),this.input.addEventListener("click",e.click),this.input.addEventListener("focus",e.focus),this.input.addEventListener("blur",e.commit),this._handlers=e}_onKeydown(e){if(this._handlers.redo&&(e.keyCode===ht&&e.shiftKey&&(e.metaKey||e.ctrlKey)||e.keyCode===lr&&e.ctrlKey))return e.preventDefault(),this._handlers.redo(e);if(this._handlers.undo&&e.keyCode===ht&&(e.metaKey||e.ctrlKey))return e.preventDefault(),this._handlers.undo(e);e.isComposing||this._handlers.selectionChange(e)}_onBeforeinput(e){if(e.inputType==="historyUndo"&&this._handlers.undo)return e.preventDefault(),this._handlers.undo(e);if(e.inputType==="historyRedo"&&this._handlers.redo)return e.preventDefault(),this._handlers.redo(e)}_onCompositionEnd(e){this._handlers.input(e)}_onInput(e){e.isComposing||this._handlers.input(e)}unbindEvents(){this.input.removeEventListener("keydown",this._onKeydown),this.input.removeEventListener("input",this._onInput),this.input.removeEventListener("beforeinput",this._onBeforeinput),this.input.removeEventListener("compositionend",this._onCompositionEnd),this.input.removeEventListener("drop",this._handlers.drop),this.input.removeEventListener("click",this._handlers.click),this.input.removeEventListener("focus",this._handlers.focus),this.input.removeEventListener("blur",this._handlers.commit),this._handlers={}}}b.HTMLMaskElement=qe;class sr extends qe{constructor(e){super(e),this.input=e}get _unsafeSelectionStart(){return this.input.selectionStart!=null?this.input.selectionStart:this.value.length}get _unsafeSelectionEnd(){return this.input.selectionEnd}_unsafeSelect(e,t){this.input.setSelectionRange(e,t)}get value(){return this.input.value}set value(e){this.input.value=e}}b.HTMLMaskElement=qe;class wt extends qe{get _unsafeSelectionStart(){const e=this.rootElement,t=e.getSelection&&e.getSelection(),r=t&&t.anchorOffset,n=t&&t.focusOffset;return n==null||r==null||r<n?r:n}get _unsafeSelectionEnd(){const e=this.rootElement,t=e.getSelection&&e.getSelection(),r=t&&t.anchorOffset,n=t&&t.focusOffset;return n==null||r==null||r>n?r:n}_unsafeSelect(e,t){if(!this.rootElement.createRange)return;const r=this.rootElement.createRange();r.setStart(this.input.firstChild||this.input,e),r.setEnd(this.input.lastChild||this.input,t);const n=this.rootElement,o=n.getSelection&&n.getSelection();o&&(o.removeAllRanges(),o.addRange(r))}get value(){return this.input.textContent||""}set value(e){this.input.textContent=e}}b.HTMLContenteditableMaskElement=wt;const je=class je{constructor(){P(this,"states",[]);P(this,"currentIndex",0)}get currentState(){return this.states[this.currentIndex]}get isEmpty(){return this.states.length===0}push(e){this.currentIndex<this.states.length-1&&(this.states.length=this.currentIndex+1),this.states.push(e),this.states.length>je.MAX_LENGTH&&this.states.shift(),this.currentIndex=this.states.length-1}go(e){return this.currentIndex=Math.min(Math.max(this.currentIndex+e,0),this.states.length-1),this.currentState}undo(){return this.go(-1)}redo(){return this.go(1)}clear(){this.states.length=0,this.currentIndex=0}};P(je,"MAX_LENGTH",100);let et=je;class ur{constructor(e,t){this.el=e instanceof ot?e:e.isContentEditable&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"?new wt(e):new sr(e),this.masked=se(t),this._listeners={},this._value="",this._unmaskedValue="",this._rawInputValue="",this.history=new et,this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this._onUndo=this._onUndo.bind(this),this._onRedo=this._onRedo.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}maskEquals(e){var t;return e==null||((t=this.masked)==null?void 0:t.maskEquals(e))}get mask(){return this.masked.mask}set mask(e){if(this.maskEquals(e))return;if(!(e instanceof b.Masked)&&this.masked.constructor===It(e)){this.masked.updateOptions({mask:e});return}const t=e instanceof b.Masked?e:se({mask:e});t.unmaskedValue=this.masked.unmaskedValue,this.masked=t}get value(){return this._value}set value(e){this.value!==e&&(this.masked.value=e,this.updateControl("auto"))}get unmaskedValue(){return this._unmaskedValue}set unmaskedValue(e){this.unmaskedValue!==e&&(this.masked.unmaskedValue=e,this.updateControl("auto"))}get rawInputValue(){return this._rawInputValue}set rawInputValue(e){this.rawInputValue!==e&&(this.masked.rawInputValue=e,this.updateControl(),this.alignCursor())}get typedValue(){return this.masked.typedValue}set typedValue(e){this.masked.typedValueEquals(e)||(this.masked.typedValue=e,this.updateControl("auto"))}get displayValue(){return this.masked.displayValue}_bindEvents(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange,undo:this._onUndo,redo:this._onRedo})}_unbindEvents(){this.el&&this.el.unbindEvents()}_fireEvent(e,t){const r=this._listeners[e];r&&r.forEach(n=>n(t))}get selectionStart(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}get cursorPos(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd}set cursorPos(e){!this.el||!this.el.isActive||(this.el.select(e,e),this._saveSelection())}_saveSelection(){this.displayValue!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}updateValue(){this.masked.value=this.el.value,this._value=this.masked.value}updateControl(e){const t=this.masked.unmaskedValue,r=this.masked.value,n=this.masked.rawInputValue,o=this.displayValue,l=this.unmaskedValue!==t||this.value!==r||this._rawInputValue!==n;this._unmaskedValue=t,this._value=r,this._rawInputValue=n,this.el.value!==o&&(this.el.value=o),e==="auto"?this.alignCursor():e!=null&&(this.cursorPos=e),l&&this._fireChangeEvents(),!this._historyChanging&&(l||this.history.isEmpty)&&this.history.push({unmaskedValue:t,selection:{start:this.selectionStart,end:this.cursorPos}})}updateOptions(e){const{mask:t,...r}=e,n=!this.maskEquals(t),o=this.masked.optionsIsChanged(r);n&&(this.mask=t),o&&this.masked.updateOptions(r),(n||o)&&this.updateControl()}updateCursor(e){e!=null&&(this.cursorPos=e,this._delayUpdateCursor(e))}_delayUpdateCursor(e){this._abortUpdateCursor(),this._changingCursorPos=e,this._cursorChanging=setTimeout(()=>{this.el&&(this.cursorPos=this._changingCursorPos,this._abortUpdateCursor())},10)}_fireChangeEvents(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}_abortUpdateCursor(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}alignCursor(){this.cursorPos=this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos,v.LEFT))}alignCursorFriendly(){this.selectionStart===this.cursorPos&&this.alignCursor()}on(e,t){return this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t),this}off(e,t){if(!this._listeners[e])return this;if(!t)return delete this._listeners[e],this;const r=this._listeners[e].indexOf(t);return r>=0&&this._listeners[e].splice(r,1),this}_onInput(e){this._inputEvent=e,this._abortUpdateCursor();const t=new or({value:this.el.value,cursorPos:this.cursorPos,oldValue:this.displayValue,oldSelection:this._selection}),r=this.masked.rawInputValue,n=this.masked.splice(t.startChangePos,t.removed.length,t.inserted,t.removeDirection,{input:!0,raw:!0}).offset,o=r===this.masked.rawInputValue?t.removeDirection:v.NONE;let l=this.masked.nearestInputPos(t.startChangePos+n,o);o!==v.NONE&&(l=this.masked.nearestInputPos(l,v.NONE)),this.updateControl(l),delete this._inputEvent}_onChange(){this.displayValue!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}_onDrop(e){e.preventDefault(),e.stopPropagation()}_onFocus(e){this.alignCursorFriendly()}_onClick(e){this.alignCursorFriendly()}_onUndo(){this._applyHistoryState(this.history.undo())}_onRedo(){this._applyHistoryState(this.history.redo())}_applyHistoryState(e){e&&(this._historyChanging=!0,this.unmaskedValue=e.unmaskedValue,this.el.select(e.selection.start,e.selection.end),this._saveSelection(),this._historyChanging=!1)}destroy(){this._unbindEvents(),this._listeners.length=0,delete this.el}}b.InputMask=ur;class S{static normalize(e){return Array.isArray(e)?e:[e,new S]}constructor(e){Object.assign(this,{inserted:"",rawInserted:"",skip:!1,tailShift:0},e)}aggregate(e){return this.rawInserted+=e.rawInserted,this.skip=this.skip||e.skip,this.inserted+=e.inserted,this.tailShift+=e.tailShift,this}get offset(){return this.tailShift+this.inserted.length}}b.ChangeDetails=S;class le{constructor(e,t,r){e===void 0&&(e=""),t===void 0&&(t=0),this.value=e,this.from=t,this.stop=r}toString(){return this.value}extend(e){this.value+=String(e)}appendTo(e){return e.append(this.toString(),{tail:!0}).aggregate(e._appendPlaceholder())}get state(){return{value:this.value,from:this.from,stop:this.stop}}set state(e){Object.assign(this,e)}unshift(e){if(!this.value.length||e!=null&&this.from>=e)return"";const t=this.value[0];return this.value=this.value.slice(1),t}shift(){if(!this.value.length)return"";const e=this.value[this.value.length-1];return this.value=this.value.slice(0,-1),e}}const xe=class xe{constructor(e){this._value="",this._update({...xe.DEFAULTS,...e}),this._initialized=!0}updateOptions(e){this.optionsIsChanged(e)&&this.withValueRefresh(this._update.bind(this,e))}_update(e){Object.assign(this,e)}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue}}set state(e){this._value=e._value}reset(){this._value=""}get value(){return this._value}set value(e){this.resolve(e,{input:!0})}resolve(e,t){t===void 0&&(t={input:!0}),this.reset(),this.append(e,t,""),this.doCommit()}get unmaskedValue(){return this.value}set unmaskedValue(e){this.resolve(e,{})}get typedValue(){return this.parse?this.parse(this.value,this):this.unmaskedValue}set typedValue(e){this.format?this.value=this.format(e,this):this.unmaskedValue=String(e)}get rawInputValue(){return this.extractInput(0,this.displayValue.length,{raw:!0})}set rawInputValue(e){this.resolve(e,{raw:!0})}get displayValue(){return this.value}get isComplete(){return!0}get isFilled(){return this.isComplete}nearestInputPos(e,t){return e}totalInputPositions(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),Math.min(this.displayValue.length,t-e)}extractInput(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),this.displayValue.slice(e,t)}extractTail(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),new le(this.extractInput(e,t),e)}appendTail(e){return me(e)&&(e=new le(String(e))),e.appendTo(this)}_appendCharRaw(e,t){return e?(this._value+=e,new S({inserted:e,rawInserted:e})):new S}_appendChar(e,t,r){t===void 0&&(t={});const n=this.state;let o;if([e,o]=this.doPrepareChar(e,t),e&&(o=o.aggregate(this._appendCharRaw(e,t))),o.inserted){let l,u=this.doValidate(t)!==!1;if(u&&r!=null){const h=this.state;if(this.overwrite===!0){l=r.state;for(let g=0;g<o.rawInserted.length;++g)r.unshift(this.displayValue.length-o.tailShift)}let p=this.appendTail(r);if(u=p.rawInserted.length===r.toString().length,!(u&&p.inserted)&&this.overwrite==="shift"){this.state=h,l=r.state;for(let g=0;g<o.rawInserted.length;++g)r.shift();p=this.appendTail(r),u=p.rawInserted.length===r.toString().length}u&&p.inserted&&(this.state=h)}u||(o=new S,this.state=n,r&&l&&(r.state=l))}return o}_appendPlaceholder(){return new S}_appendEager(){return new S}append(e,t,r){if(!me(e))throw new Error("value should be string");const n=me(r)?new le(String(r)):r;t!=null&&t.tail&&(t._beforeTailState=this.state);let o;[e,o]=this.doPrepare(e,t);for(let l=0;l<e.length;++l){const u=this._appendChar(e[l],t,n);if(!u.rawInserted&&!this.doSkipInvalid(e[l],t,n))break;o.aggregate(u)}return(this.eager===!0||this.eager==="append")&&(t!=null&&t.input)&&e&&o.aggregate(this._appendEager()),n!=null&&(o.tailShift+=this.appendTail(n).tailShift),o}remove(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),this._value=this.displayValue.slice(0,e)+this.displayValue.slice(t),new S}withValueRefresh(e){if(this._refreshing||!this._initialized)return e();this._refreshing=!0;const t=this.rawInputValue,r=this.value,n=e();return this.rawInputValue=t,this.value&&this.value!==r&&r.indexOf(this.value)===0&&(this.append(r.slice(this.displayValue.length),{},""),this.doCommit()),delete this._refreshing,n}runIsolated(e){if(this._isolated||!this._initialized)return e(this);this._isolated=!0;const t=this.state,r=e(this);return this.state=t,delete this._isolated,r}doSkipInvalid(e,t,r){return!!this.skipInvalid}doPrepare(e,t){return t===void 0&&(t={}),S.normalize(this.prepare?this.prepare(e,this,t):e)}doPrepareChar(e,t){return t===void 0&&(t={}),S.normalize(this.prepareChar?this.prepareChar(e,this,t):e)}doValidate(e){return(!this.validate||this.validate(this.value,this,e))&&(!this.parent||this.parent.doValidate(e))}doCommit(){this.commit&&this.commit(this.value,this)}splice(e,t,r,n,o){n===void 0&&(n=v.NONE),o===void 0&&(o={input:!0});const l=e+t,u=this.extractTail(l),h=this.eager===!0||this.eager==="remove";let p;h&&(n=nr(n),p=this.extractInput(0,l,{raw:!0}));let g=e;const F=new S;if(n!==v.NONE&&(g=this.nearestInputPos(e,t>1&&e!==0&&!h?v.NONE:n),F.tailShift=g-e),F.aggregate(this.remove(g)),h&&n!==v.NONE&&p===this.rawInputValue)if(n===v.FORCE_LEFT){let I;for(;p===this.rawInputValue&&(I=this.displayValue.length);)F.aggregate(new S({tailShift:-1})).aggregate(this.remove(I-1))}else n===v.FORCE_RIGHT&&u.unshift();return F.aggregate(this.append(r,o,u))}maskEquals(e){return this.mask===e}optionsIsChanged(e){return!He(this,e)}typedValueEquals(e){const t=this.typedValue;return e===t||xe.EMPTY_VALUES.includes(e)&&xe.EMPTY_VALUES.includes(t)||(this.format?this.format(e,this)===this.format(this.typedValue,this):!1)}};P(xe,"DEFAULTS",{skipInvalid:!0}),P(xe,"EMPTY_VALUES",[void 0,null,""]);let ue=xe;b.Masked=ue;class ge{constructor(e,t){e===void 0&&(e=[]),t===void 0&&(t=0),this.chunks=e,this.from=t}toString(){return this.chunks.map(String).join("")}extend(e){if(!String(e))return;e=me(e)?new le(String(e)):e;const t=this.chunks[this.chunks.length-1],r=t&&(t.stop===e.stop||e.stop==null)&&e.from===t.from+t.toString().length;if(e instanceof le)r?t.extend(e.toString()):this.chunks.push(e);else if(e instanceof ge){if(e.stop==null){let n;for(;e.chunks.length&&e.chunks[0].stop==null;)n=e.chunks.shift(),n.from+=e.from,this.extend(n)}e.toString()&&(e.stop=e.blockIndex,this.chunks.push(e))}}appendTo(e){if(!(e instanceof b.MaskedPattern))return new le(this.toString()).appendTo(e);const t=new S;for(let r=0;r<this.chunks.length&&!t.skip;++r){const n=this.chunks[r],o=e._mapPosToBlock(e.displayValue.length),l=n.stop;let u;if(l!=null&&(!o||o.index<=l)){if(n instanceof ge||e._stops.indexOf(l)>=0){const h=e._appendPlaceholder(l);t.aggregate(h)}u=n instanceof ge&&e._blocks[l]}if(u){const h=u.appendTail(n);h.skip=!1,t.aggregate(h),e._value+=h.inserted;const p=n.toString().slice(h.rawInserted.length);p&&t.aggregate(e.append(p,{tail:!0}))}else t.aggregate(e.append(n.toString(),{tail:!0}))}return t}get state(){return{chunks:this.chunks.map(e=>e.state),from:this.from,stop:this.stop,blockIndex:this.blockIndex}}set state(e){const{chunks:t,...r}=e;Object.assign(this,r),this.chunks=t.map(n=>{const o="chunks"in n?new ge:new le;return o.state=n,o})}unshift(e){if(!this.chunks.length||e!=null&&this.from>=e)return"";const t=e!=null?e-this.from:e;let r=0;for(;r<this.chunks.length;){const n=this.chunks[r],o=n.unshift(t);if(n.toString()){if(!o)break;++r}else this.chunks.splice(r,1);if(o)return o}return""}shift(){if(!this.chunks.length)return"";let e=this.chunks.length-1;for(;0<=e;){const t=this.chunks[e],r=t.shift();if(t.toString()){if(!r)break;--e}else this.chunks.splice(e,1);if(r)return r}return""}}class dr{constructor(e,t){this.masked=e,this._log=[];const{offset:r,index:n}=e._mapPosToBlock(t)||(t<0?{index:0,offset:0}:{index:this.masked._blocks.length,offset:0});this.offset=r,this.index=n,this.ok=!1}get block(){return this.masked._blocks[this.index]}get pos(){return this.masked._blockStartPos(this.index)+this.offset}get state(){return{index:this.index,offset:this.offset,ok:this.ok}}set state(e){Object.assign(this,e)}pushState(){this._log.push(this.state)}popState(){const e=this._log.pop();return e&&(this.state=e),e}bindBlock(){this.block||(this.index<0&&(this.index=0,this.offset=0),this.index>=this.masked._blocks.length&&(this.index=this.masked._blocks.length-1,this.offset=this.block.displayValue.length))}_pushLeft(e){var t;for(this.pushState(),this.bindBlock();0<=this.index;--this.index,this.offset=((t=this.block)==null?void 0:t.displayValue.length)||0)if(e())return this.ok=!0;return this.ok=!1}_pushRight(e){for(this.pushState(),this.bindBlock();this.index<this.masked._blocks.length;++this.index,this.offset=0)if(e())return this.ok=!0;return this.ok=!1}pushLeftBeforeFilled(){return this._pushLeft(()=>{if(!(this.block.isFixed||!this.block.value)&&(this.offset=this.block.nearestInputPos(this.offset,v.FORCE_LEFT),this.offset!==0))return!0})}pushLeftBeforeInput(){return this._pushLeft(()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,v.LEFT),!0})}pushLeftBeforeRequired(){return this._pushLeft(()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,v.LEFT),!0})}pushRightBeforeFilled(){return this._pushRight(()=>{if(!(this.block.isFixed||!this.block.value)&&(this.offset=this.block.nearestInputPos(this.offset,v.FORCE_RIGHT),this.offset!==this.block.value.length))return!0})}pushRightBeforeInput(){return this._pushRight(()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,v.NONE),!0})}pushRightBeforeRequired(){return this._pushRight(()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,v.NONE),!0})}}class ct{constructor(e){Object.assign(this,e),this._value="",this.isFixed=!0}get value(){return this._value}get unmaskedValue(){return this.isUnmasking?this.value:""}get rawInputValue(){return this._isRawInput?this.value:""}get displayValue(){return this.value}reset(){this._isRawInput=!1,this._value=""}remove(e,t){return e===void 0&&(e=0),t===void 0&&(t=this._value.length),this._value=this._value.slice(0,e)+this._value.slice(t),this._value||(this._isRawInput=!1),new S}nearestInputPos(e,t){t===void 0&&(t=v.NONE);const r=0,n=this._value.length;switch(t){case v.LEFT:case v.FORCE_LEFT:return r;case v.NONE:case v.RIGHT:case v.FORCE_RIGHT:default:return n}}totalInputPositions(e,t){return e===void 0&&(e=0),t===void 0&&(t=this._value.length),this._isRawInput?t-e:0}extractInput(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=this._value.length),r===void 0&&(r={}),r.raw&&this._isRawInput&&this._value.slice(e,t)||""}get isComplete(){return!0}get isFilled(){return!!this._value}_appendChar(e,t){t===void 0&&(t={});const r=new S;if(this.isFilled)return r;const n=this.eager===!0||this.eager==="append",l=this.char===e&&(this.isUnmasking||t.input||t.raw)&&(!t.raw||!n)&&!t.tail;return l&&(r.rawInserted=this.char),this._value=r.inserted=this.char,this._isRawInput=l&&(t.raw||t.input),r}_appendEager(){return this._appendChar(this.char,{tail:!0})}_appendPlaceholder(){const e=new S;return this.isFilled||(this._value=e.inserted=this.char),e}extractTail(){return new le("")}appendTail(e){return me(e)&&(e=new le(String(e))),e.appendTo(this)}append(e,t,r){const n=this._appendChar(e[0],t);return r!=null&&(n.tailShift+=this.appendTail(r).tailShift),n}doCommit(){}get state(){return{_value:this._value,_rawInputValue:this.rawInputValue}}set state(e){this._value=e._value,this._isRawInput=!!e._rawInputValue}}class Pe{constructor(e){const{parent:t,isOptional:r,placeholderChar:n,displayChar:o,lazy:l,eager:u,...h}=e;this.masked=se(h),Object.assign(this,{parent:t,isOptional:r,placeholderChar:n,displayChar:o,lazy:l,eager:u})}reset(){this.isFilled=!1,this.masked.reset()}remove(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.value.length),e===0&&t>=1?(this.isFilled=!1,this.masked.remove(e,t)):new S}get value(){return this.masked.value||(this.isFilled&&!this.isOptional?this.placeholderChar:"")}get unmaskedValue(){return this.masked.unmaskedValue}get rawInputValue(){return this.masked.rawInputValue}get displayValue(){return this.masked.value&&this.displayChar||this.value}get isComplete(){return!!this.masked.value||this.isOptional}_appendChar(e,t){if(t===void 0&&(t={}),this.isFilled)return new S;const r=this.masked.state,n=this.masked._appendChar(e,this.currentMaskFlags(t));return n.inserted&&this.doValidate(t)===!1&&(n.inserted=n.rawInserted="",this.masked.state=r),!n.inserted&&!this.isOptional&&!this.lazy&&!t.input&&(n.inserted=this.placeholderChar),n.skip=!n.inserted&&!this.isOptional,this.isFilled=!!n.inserted,n}append(e,t,r){return this.masked.append(e,this.currentMaskFlags(t),r)}_appendPlaceholder(){const e=new S;return this.isFilled||this.isOptional||(this.isFilled=!0,e.inserted=this.placeholderChar),e}_appendEager(){return new S}extractTail(e,t){return this.masked.extractTail(e,t)}appendTail(e){return this.masked.appendTail(e)}extractInput(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=this.value.length),this.masked.extractInput(e,t,r)}nearestInputPos(e,t){t===void 0&&(t=v.NONE);const r=0,n=this.value.length,o=Math.min(Math.max(e,r),n);switch(t){case v.LEFT:case v.FORCE_LEFT:return this.isComplete?o:r;case v.RIGHT:case v.FORCE_RIGHT:return this.isComplete?o:n;case v.NONE:default:return o}}totalInputPositions(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.value.length),this.value.slice(e,t).length}doValidate(e){return this.masked.doValidate(this.currentMaskFlags(e))&&(!this.parent||this.parent.doValidate(this.currentMaskFlags(e)))}doCommit(){this.masked.doCommit()}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue,masked:this.masked.state,isFilled:this.isFilled}}set state(e){this.masked.state=e.masked,this.isFilled=e.isFilled}currentMaskFlags(e){var t;return{...e,_beforeTailState:((t=e==null?void 0:e._beforeTailState)==null?void 0:t.masked)||(e==null?void 0:e._beforeTailState)}}}P(Pe,"DEFAULT_DEFINITIONS",{0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./});class hr extends ue{updateOptions(e){super.updateOptions(e)}_update(e){const t=e.mask;t&&(e.validate=r=>r.search(t)>=0),super._update(e)}}b.MaskedRegExp=hr;const re=class re extends ue{constructor(e){super({...re.DEFAULTS,...e,definitions:Object.assign({},Pe.DEFAULT_DEFINITIONS,e==null?void 0:e.definitions)})}updateOptions(e){super.updateOptions(e)}_update(e){e.definitions=Object.assign({},this.definitions,e.definitions),super._update(e),this._rebuildMask()}_rebuildMask(){const e=this.definitions;this._blocks=[],this.exposeBlock=void 0,this._stops=[],this._maskedBlocks={};const t=this.mask;if(!t||!e)return;let r=!1,n=!1;for(let o=0;o<t.length;++o){if(this.blocks){const p=t.slice(o),g=Object.keys(this.blocks).filter(I=>p.indexOf(I)===0);g.sort((I,_)=>_.length-I.length);const F=g[0];if(F){const{expose:I,repeat:_,...k}=Ae(this.blocks[F]),E={lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,overwrite:this.overwrite,...k,repeat:_,parent:this},B=_!=null?new b.RepeatBlock(E):se(E);B&&(this._blocks.push(B),I&&(this.exposeBlock=B),this._maskedBlocks[F]||(this._maskedBlocks[F]=[]),this._maskedBlocks[F].push(this._blocks.length-1)),o+=F.length-1;continue}}let l=t[o],u=l in e;if(l===re.STOP_CHAR){this._stops.push(this._blocks.length);continue}if(l==="{"||l==="}"){r=!r;continue}if(l==="["||l==="]"){n=!n;continue}if(l===re.ESCAPE_CHAR){if(++o,l=t[o],!l)break;u=!1}const h=u?new Pe({isOptional:n,lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,...Ae(e[l]),parent:this}):new ct({char:l,eager:this.eager,isUnmasking:r});this._blocks.push(h)}}get state(){return{...super.state,_blocks:this._blocks.map(e=>e.state)}}set state(e){if(!e){this.reset();return}const{_blocks:t,...r}=e;this._blocks.forEach((n,o)=>n.state=t[o]),super.state=r}reset(){super.reset(),this._blocks.forEach(e=>e.reset())}get isComplete(){return this.exposeBlock?this.exposeBlock.isComplete:this._blocks.every(e=>e.isComplete)}get isFilled(){return this._blocks.every(e=>e.isFilled)}get isFixed(){return this._blocks.every(e=>e.isFixed)}get isOptional(){return this._blocks.every(e=>e.isOptional)}doCommit(){this._blocks.forEach(e=>e.doCommit()),super.doCommit()}get unmaskedValue(){return this.exposeBlock?this.exposeBlock.unmaskedValue:this._blocks.reduce((e,t)=>e+=t.unmaskedValue,"")}set unmaskedValue(e){if(this.exposeBlock){const t=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.unmaskedValue=e,this.appendTail(t),this.doCommit()}else super.unmaskedValue=e}get value(){return this.exposeBlock?this.exposeBlock.value:this._blocks.reduce((e,t)=>e+=t.value,"")}set value(e){if(this.exposeBlock){const t=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.value=e,this.appendTail(t),this.doCommit()}else super.value=e}get typedValue(){return this.exposeBlock?this.exposeBlock.typedValue:super.typedValue}set typedValue(e){if(this.exposeBlock){const t=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.typedValue=e,this.appendTail(t),this.doCommit()}else super.typedValue=e}get displayValue(){return this._blocks.reduce((e,t)=>e+=t.displayValue,"")}appendTail(e){return super.appendTail(e).aggregate(this._appendPlaceholder())}_appendEager(){var r;const e=new S;let t=(r=this._mapPosToBlock(this.displayValue.length))==null?void 0:r.index;if(t==null)return e;this._blocks[t].isFilled&&++t;for(let n=t;n<this._blocks.length;++n){const o=this._blocks[n]._appendEager();if(!o.inserted)break;e.aggregate(o)}return e}_appendCharRaw(e,t){var o,l;t===void 0&&(t={});const r=this._mapPosToBlock(this.displayValue.length),n=new S;if(!r)return n;for(let u=r.index,h;h=this._blocks[u];++u){const p=h._appendChar(e,{...t,_beforeTailState:(l=(o=t._beforeTailState)==null?void 0:o._blocks)==null?void 0:l[u]});if(n.aggregate(p),p.skip||p.rawInserted)break}return n}extractTail(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);const r=new ge;return e===t||this._forEachBlocksInRange(e,t,(n,o,l,u)=>{const h=n.extractTail(l,u);h.stop=this._findStopBefore(o),h.from=this._blockStartPos(o),h instanceof ge&&(h.blockIndex=o),r.extend(h)}),r}extractInput(e,t,r){if(e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),r===void 0&&(r={}),e===t)return"";let n="";return this._forEachBlocksInRange(e,t,(o,l,u,h)=>{n+=o.extractInput(u,h,r)}),n}_findStopBefore(e){let t;for(let r=0;r<this._stops.length;++r){const n=this._stops[r];if(n<=e)t=n;else break}return t}_appendPlaceholder(e){const t=new S;if(this.lazy&&e==null)return t;const r=this._mapPosToBlock(this.displayValue.length);if(!r)return t;const n=r.index,o=e??this._blocks.length;return this._blocks.slice(n,o).forEach(l=>{var u;if(!l.lazy||e!=null){const h=l._appendPlaceholder((u=l._blocks)==null?void 0:u.length);this._value+=h.inserted,t.aggregate(h)}}),t}_mapPosToBlock(e){let t="";for(let r=0;r<this._blocks.length;++r){const n=this._blocks[r],o=t.length;if(t+=n.displayValue,e<=t.length)return{index:r,offset:e-o}}}_blockStartPos(e){return this._blocks.slice(0,e).reduce((t,r)=>t+=r.displayValue.length,0)}_forEachBlocksInRange(e,t,r){t===void 0&&(t=this.displayValue.length);const n=this._mapPosToBlock(e);if(n){const o=this._mapPosToBlock(t),l=o&&n.index===o.index,u=n.offset,h=o&&l?o.offset:this._blocks[n.index].displayValue.length;if(r(this._blocks[n.index],n.index,u,h),o&&!l){for(let p=n.index+1;p<o.index;++p)r(this._blocks[p],p,0,this._blocks[p].displayValue.length);r(this._blocks[o.index],o.index,0,o.offset)}}}remove(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);const r=super.remove(e,t);return this._forEachBlocksInRange(e,t,(n,o,l,u)=>{r.aggregate(n.remove(l,u))}),r}nearestInputPos(e,t){if(t===void 0&&(t=v.NONE),!this._blocks.length)return 0;const r=new dr(this,e);if(t===v.NONE)return r.pushRightBeforeInput()||(r.popState(),r.pushLeftBeforeInput())?r.pos:this.displayValue.length;if(t===v.LEFT||t===v.FORCE_LEFT){if(t===v.LEFT){if(r.pushRightBeforeFilled(),r.ok&&r.pos===e)return e;r.popState()}if(r.pushLeftBeforeInput(),r.pushLeftBeforeRequired(),r.pushLeftBeforeFilled(),t===v.LEFT){if(r.pushRightBeforeInput(),r.pushRightBeforeRequired(),r.ok&&r.pos<=e||(r.popState(),r.ok&&r.pos<=e))return r.pos;r.popState()}return r.ok?r.pos:t===v.FORCE_LEFT?0:(r.popState(),r.ok||(r.popState(),r.ok)?r.pos:0)}return t===v.RIGHT||t===v.FORCE_RIGHT?(r.pushRightBeforeInput(),r.pushRightBeforeRequired(),r.pushRightBeforeFilled()?r.pos:t===v.FORCE_RIGHT?this.displayValue.length:(r.popState(),r.ok||(r.popState(),r.ok)?r.pos:this.nearestInputPos(e,v.LEFT))):e}totalInputPositions(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);let r=0;return this._forEachBlocksInRange(e,t,(n,o,l,u)=>{r+=n.totalInputPositions(l,u)}),r}maskedBlock(e){return this.maskedBlocks(e)[0]}maskedBlocks(e){const t=this._maskedBlocks[e];return t?t.map(r=>this._blocks[r]):[]}};P(re,"DEFAULTS",{lazy:!0,placeholderChar:"_"}),P(re,"STOP_CHAR","`"),P(re,"ESCAPE_CHAR","\\"),P(re,"InputDefinition",Pe),P(re,"FixedDefinition",ct);let Fe=re;b.MaskedPattern=Fe;class Le extends Fe{get _matchFrom(){return this.maxLength-String(this.from).length}constructor(e){super(e)}updateOptions(e){super.updateOptions(e)}_update(e){const{to:t=this.to||0,from:r=this.from||0,maxLength:n=this.maxLength||0,autofix:o=this.autofix,...l}=e;this.to=t,this.from=r,this.maxLength=Math.max(String(t).length,n),this.autofix=o;const u=String(this.from).padStart(this.maxLength,"0"),h=String(this.to).padStart(this.maxLength,"0");let p=0;for(;p<h.length&&h[p]===u[p];)++p;l.mask=h.slice(0,p).replace(/0/g,"\\0")+"0".repeat(this.maxLength-p),super._update(l)}get isComplete(){return super.isComplete&&!!this.value}boundaries(e){let t="",r="";const[,n,o]=e.match(/^(\D*)(\d*)(\D*)/)||[];return o&&(t="0".repeat(n.length)+o,r="9".repeat(n.length)+o),t=t.padEnd(this.maxLength,"0"),r=r.padEnd(this.maxLength,"9"),[t,r]}doPrepareChar(e,t){t===void 0&&(t={});let r;if([e,r]=super.doPrepareChar(e.replace(/\D/g,""),t),!this.autofix||!e)return r.skip=!this.isComplete,[e,r];const n=String(this.from).padStart(this.maxLength,"0"),o=String(this.to).padStart(this.maxLength,"0"),l=this.value+e;if(l.length>this.maxLength)return["",r];const[u,h]=this.boundaries(l);return Number(h)<this.from?[n[l.length-1],r]:Number(u)>this.to?this.autofix==="pad"&&l.length<this.maxLength?["",r.aggregate(this.append(n[l.length-1]+e,t))]:[o[l.length-1],r]:[e,r]}doValidate(e){const t=this.value;if(t.search(/[^0]/)===-1&&t.length<=this._matchFrom)return!0;const[n,o]=this.boundaries(t);return this.from<=Number(o)&&Number(n)<=this.to&&super.doValidate(e)}}b.MaskedRange=Le;const oe=class oe extends Fe{static extractPatternOptions(e){const{mask:t,pattern:r,...n}=e;return{...n,mask:me(t)?t:r}}constructor(e){super(oe.extractPatternOptions({...oe.DEFAULTS,...e}))}updateOptions(e){super.updateOptions(e)}_update(e){const{mask:t,pattern:r,blocks:n,...o}={...oe.DEFAULTS,...e},l=Object.assign({},oe.GET_DEFAULT_BLOCKS());e.min&&(l.Y.from=e.min.getFullYear()),e.max&&(l.Y.to=e.max.getFullYear()),e.min&&e.max&&l.Y.from===l.Y.to&&(l.m.from=e.min.getMonth()+1,l.m.to=e.max.getMonth()+1,l.m.from===l.m.to&&(l.d.from=e.min.getDate(),l.d.to=e.max.getDate())),Object.assign(l,this.blocks,n),Object.keys(l).forEach(u=>{const h=l[u];!("autofix"in h)&&"autofix"in e&&(h.autofix=e.autofix)}),super._update({...o,mask:me(t)?t:r,blocks:l})}doValidate(e){const t=this.date;return super.doValidate(e)&&(!this.isComplete||this.isDateExist(this.value)&&t!=null&&(this.min==null||this.min<=t)&&(this.max==null||t<=this.max))}isDateExist(e){return this.format(this.parse(e,this),this).indexOf(e)>=0}get date(){return this.typedValue}set date(e){this.typedValue=e}get typedValue(){return this.isComplete?super.typedValue:null}set typedValue(e){super.typedValue=e}maskEquals(e){return e===Date||super.maskEquals(e)}optionsIsChanged(e){return super.optionsIsChanged(oe.extractPatternOptions(e))}};P(oe,"GET_DEFAULT_BLOCKS",()=>({d:{mask:Le,from:1,to:31,maxLength:2},m:{mask:Le,from:1,to:12,maxLength:2},Y:{mask:Le,from:1900,to:9999}})),P(oe,"DEFAULTS",{mask:Date,pattern:"d{.}`m{.}`Y",format:(e,t)=>{if(!e)return"";const r=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return[r,n,o].join(".")},parse:(e,t)=>{const[r,n,o]=e.split(".").map(Number);return new Date(o,n-1,r)}});let tt=oe;b.MaskedDate=tt;const ze=class ze extends ue{constructor(e){super({...ze.DEFAULTS,...e}),this.currentMask=void 0}updateOptions(e){super.updateOptions(e)}_update(e){super._update(e),"mask"in e&&(this.exposeMask=void 0,this.compiledMasks=Array.isArray(e.mask)?e.mask.map(t=>{const{expose:r,...n}=Ae(t),o=se({overwrite:this._overwrite,eager:this._eager,skipInvalid:this._skipInvalid,...n});return r&&(this.exposeMask=o),o}):[])}_appendCharRaw(e,t){t===void 0&&(t={});const r=this._applyDispatch(e,t);return this.currentMask&&r.aggregate(this.currentMask._appendChar(e,this.currentMaskFlags(t))),r}_applyDispatch(e,t,r){e===void 0&&(e=""),t===void 0&&(t={}),r===void 0&&(r="");const n=t.tail&&t._beforeTailState!=null?t._beforeTailState._value:this.value,o=this.rawInputValue,l=t.tail&&t._beforeTailState!=null?t._beforeTailState._rawInputValue:o,u=o.slice(l.length),h=this.currentMask,p=new S,g=h==null?void 0:h.state;if(this.currentMask=this.doDispatch(e,{...t},r),this.currentMask)if(this.currentMask!==h){if(this.currentMask.reset(),l){const F=this.currentMask.append(l,{raw:!0});p.tailShift=F.inserted.length-n.length}u&&(p.tailShift+=this.currentMask.append(u,{raw:!0,tail:!0}).tailShift)}else g&&(this.currentMask.state=g);return p}_appendPlaceholder(){const e=this._applyDispatch();return this.currentMask&&e.aggregate(this.currentMask._appendPlaceholder()),e}_appendEager(){const e=this._applyDispatch();return this.currentMask&&e.aggregate(this.currentMask._appendEager()),e}appendTail(e){const t=new S;return e&&t.aggregate(this._applyDispatch("",{},e)),t.aggregate(this.currentMask?this.currentMask.appendTail(e):super.appendTail(e))}currentMaskFlags(e){var t,r;return{...e,_beforeTailState:((t=e._beforeTailState)==null?void 0:t.currentMaskRef)===this.currentMask&&((r=e._beforeTailState)==null?void 0:r.currentMask)||e._beforeTailState}}doDispatch(e,t,r){return t===void 0&&(t={}),r===void 0&&(r=""),this.dispatch(e,this,t,r)}doValidate(e){return super.doValidate(e)&&(!this.currentMask||this.currentMask.doValidate(this.currentMaskFlags(e)))}doPrepare(e,t){t===void 0&&(t={});let[r,n]=super.doPrepare(e,t);if(this.currentMask){let o;[r,o]=super.doPrepare(r,this.currentMaskFlags(t)),n=n.aggregate(o)}return[r,n]}doPrepareChar(e,t){t===void 0&&(t={});let[r,n]=super.doPrepareChar(e,t);if(this.currentMask){let o;[r,o]=super.doPrepareChar(r,this.currentMaskFlags(t)),n=n.aggregate(o)}return[r,n]}reset(){var e;(e=this.currentMask)==null||e.reset(),this.compiledMasks.forEach(t=>t.reset())}get value(){return this.exposeMask?this.exposeMask.value:this.currentMask?this.currentMask.value:""}set value(e){this.exposeMask?(this.exposeMask.value=e,this.currentMask=this.exposeMask,this._applyDispatch()):super.value=e}get unmaskedValue(){return this.exposeMask?this.exposeMask.unmaskedValue:this.currentMask?this.currentMask.unmaskedValue:""}set unmaskedValue(e){this.exposeMask?(this.exposeMask.unmaskedValue=e,this.currentMask=this.exposeMask,this._applyDispatch()):super.unmaskedValue=e}get typedValue(){return this.exposeMask?this.exposeMask.typedValue:this.currentMask?this.currentMask.typedValue:""}set typedValue(e){if(this.exposeMask){this.exposeMask.typedValue=e,this.currentMask=this.exposeMask,this._applyDispatch();return}let t=String(e);this.currentMask&&(this.currentMask.typedValue=e,t=this.currentMask.unmaskedValue),this.unmaskedValue=t}get displayValue(){return this.currentMask?this.currentMask.displayValue:""}get isComplete(){var e;return!!((e=this.currentMask)!=null&&e.isComplete)}get isFilled(){var e;return!!((e=this.currentMask)!=null&&e.isFilled)}remove(e,t){const r=new S;return this.currentMask&&r.aggregate(this.currentMask.remove(e,t)).aggregate(this._applyDispatch()),r}get state(){var e;return{...super.state,_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map(t=>t.state),currentMaskRef:this.currentMask,currentMask:(e=this.currentMask)==null?void 0:e.state}}set state(e){const{compiledMasks:t,currentMaskRef:r,currentMask:n,...o}=e;t&&this.compiledMasks.forEach((l,u)=>l.state=t[u]),r!=null&&(this.currentMask=r,this.currentMask.state=n),super.state=o}extractInput(e,t,r){return this.currentMask?this.currentMask.extractInput(e,t,r):""}extractTail(e,t){return this.currentMask?this.currentMask.extractTail(e,t):super.extractTail(e,t)}doCommit(){this.currentMask&&this.currentMask.doCommit(),super.doCommit()}nearestInputPos(e,t){return this.currentMask?this.currentMask.nearestInputPos(e,t):super.nearestInputPos(e,t)}get overwrite(){return this.currentMask?this.currentMask.overwrite:this._overwrite}set overwrite(e){this._overwrite=e}get eager(){return this.currentMask?this.currentMask.eager:this._eager}set eager(e){this._eager=e}get skipInvalid(){return this.currentMask?this.currentMask.skipInvalid:this._skipInvalid}set skipInvalid(e){this._skipInvalid=e}maskEquals(e){return Array.isArray(e)?this.compiledMasks.every((t,r)=>{if(!e[r])return;const{mask:n,...o}=e[r];return He(t,o)&&t.maskEquals(n)}):super.maskEquals(e)}typedValueEquals(e){var t;return!!((t=this.currentMask)!=null&&t.typedValueEquals(e))}};P(ze,"DEFAULTS");let Ue=ze;Ue.DEFAULTS={dispatch:(a,e,t,r)=>{if(!e.compiledMasks.length)return;const n=e.rawInputValue,o=e.compiledMasks.map((l,u)=>{const h=e.currentMask===l,p=h?l.displayValue.length:l.nearestInputPos(l.displayValue.length,v.FORCE_LEFT);return l.rawInputValue!==n?(l.reset(),l.append(n,{raw:!0})):h||l.remove(p),l.append(a,e.currentMaskFlags(t)),l.appendTail(r),{index:u,weight:l.rawInputValue.length,totalInputPositions:l.totalInputPositions(0,Math.max(p,l.nearestInputPos(l.displayValue.length,v.FORCE_LEFT)))}});return o.sort((l,u)=>u.weight-l.weight||u.totalInputPositions-l.totalInputPositions),e.compiledMasks[o[0].index]}};b.MaskedDynamic=Ue;class cr extends Fe{constructor(e){super(e)}updateOptions(e){super.updateOptions(e)}_update(e){const{enum:t,...r}=e;if(t){const n=t.map(u=>u.length),o=Math.min(...n),l=Math.max(...n)-o;r.mask="*".repeat(o),l&&(r.mask+="["+"*".repeat(l)+"]"),this.enum=t}super._update(r)}doValidate(e){return this.enum.some(t=>t.indexOf(this.unmaskedValue)===0)&&super.doValidate(e)}}b.MaskedEnum=cr;class pr extends ue{updateOptions(e){super.updateOptions(e)}_update(e){super._update({...e,validate:e.mask})}}b.MaskedFunction=pr;const te=class te extends ue{constructor(e){super({...te.DEFAULTS,...e})}updateOptions(e){super.updateOptions(e)}_update(e){super._update(e),this._updateRegExps()}_updateRegExps(){const e="^"+(this.allowNegative?"[+|\\-]?":""),t="\\d*",r=(this.scale?`(${Je(this.radix)}\\d{0,${this.scale}})?`:"")+"$";this._numberRegExp=new RegExp(e+t+r),this._mapToRadixRegExp=new RegExp(`[${this.mapToRadix.map(Je).join("")}]`,"g"),this._thousandsSeparatorRegExp=new RegExp(Je(this.thousandsSeparator),"g")}_removeThousandsSeparators(e){return e.replace(this._thousandsSeparatorRegExp,"")}_insertThousandsSeparators(e){const t=e.split(this.radix);return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),t.join(this.radix)}doPrepareChar(e,t){t===void 0&&(t={});const[r,n]=super.doPrepareChar(this._removeThousandsSeparators(this.scale&&this.mapToRadix.length&&(t.input&&t.raw||!t.input&&!t.raw)?e.replace(this._mapToRadixRegExp,this.radix):e),t);return e&&!r&&(n.skip=!0),r&&!this.allowPositive&&!this.value&&r!=="-"&&n.aggregate(this._appendChar("-")),[r,n]}_separatorsCount(e,t){t===void 0&&(t=!1);let r=0;for(let n=0;n<e;++n)this._value.indexOf(this.thousandsSeparator,n)===n&&(++r,t&&(e+=this.thousandsSeparator.length));return r}_separatorsCountFromSlice(e){return e===void 0&&(e=this._value),this._separatorsCount(this._removeThousandsSeparators(e).length,!0)}extractInput(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),[e,t]=this._adjustRangeWithSeparators(e,t),this._removeThousandsSeparators(super.extractInput(e,t,r))}_appendCharRaw(e,t){if(t===void 0&&(t={}),!this.thousandsSeparator)return super._appendCharRaw(e,t);const r=t.tail&&t._beforeTailState?t._beforeTailState._value:this._value,n=this._separatorsCountFromSlice(r);this._value=this._removeThousandsSeparators(this.value);const o=super._appendCharRaw(e,t);this._value=this._insertThousandsSeparators(this._value);const l=t.tail&&t._beforeTailState?t._beforeTailState._value:this._value,u=this._separatorsCountFromSlice(l);return o.tailShift+=(u-n)*this.thousandsSeparator.length,o.skip=!o.rawInserted&&e===this.thousandsSeparator,o}_findSeparatorAround(e){if(this.thousandsSeparator){const t=e-this.thousandsSeparator.length+1,r=this.value.indexOf(this.thousandsSeparator,t);if(r<=e)return r}return-1}_adjustRangeWithSeparators(e,t){const r=this._findSeparatorAround(e);r>=0&&(e=r);const n=this._findSeparatorAround(t);return n>=0&&(t=n+this.thousandsSeparator.length),[e,t]}remove(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),[e,t]=this._adjustRangeWithSeparators(e,t);const r=this.value.slice(0,e),n=this.value.slice(t),o=this._separatorsCount(r.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(r+n));const l=this._separatorsCountFromSlice(r);return new S({tailShift:(l-o)*this.thousandsSeparator.length})}nearestInputPos(e,t){if(!this.thousandsSeparator)return e;switch(t){case v.NONE:case v.LEFT:case v.FORCE_LEFT:{const r=this._findSeparatorAround(e-1);if(r>=0){const n=r+this.thousandsSeparator.length;if(e<n||this.value.length<=n||t===v.FORCE_LEFT)return r}break}case v.RIGHT:case v.FORCE_RIGHT:{const r=this._findSeparatorAround(e);if(r>=0)return r+this.thousandsSeparator.length}}return e}doValidate(e){let t=!!this._removeThousandsSeparators(this.value).match(this._numberRegExp);if(t){const r=this.number;t=t&&!isNaN(r)&&(this.min==null||this.min>=0||this.min<=this.number)&&(this.max==null||this.max<=0||this.number<=this.max)}return t&&super.doValidate(e)}doCommit(){if(this.value){const e=this.number;let t=e;this.min!=null&&(t=Math.max(t,this.min)),this.max!=null&&(t=Math.min(t,this.max)),t!==e&&(this.unmaskedValue=this.format(t,this));let r=this.value;this.normalizeZeros&&(r=this._normalizeZeros(r)),this.padFractionalZeros&&this.scale>0&&(r=this._padFractionalZeros(r)),this._value=r}super.doCommit()}_normalizeZeros(e){const t=this._removeThousandsSeparators(e).split(this.radix);return t[0]=t[0].replace(/^(\D*)(0*)(\d*)/,(r,n,o,l)=>n+l),e.length&&!/\d$/.test(t[0])&&(t[0]=t[0]+"0"),t.length>1&&(t[1]=t[1].replace(/0*$/,""),t[1].length||(t.length=1)),this._insertThousandsSeparators(t.join(this.radix))}_padFractionalZeros(e){if(!e)return e;const t=e.split(this.radix);return t.length<2&&t.push(""),t[1]=t[1].padEnd(this.scale,"0"),t.join(this.radix)}doSkipInvalid(e,t,r){t===void 0&&(t={});const n=this.scale===0&&e!==this.thousandsSeparator&&(e===this.radix||e===te.UNMASKED_RADIX||this.mapToRadix.includes(e));return super.doSkipInvalid(e,t,r)&&!n}get unmaskedValue(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,te.UNMASKED_RADIX)}set unmaskedValue(e){super.unmaskedValue=e}get typedValue(){return this.parse(this.unmaskedValue,this)}set typedValue(e){this.rawInputValue=this.format(e,this).replace(te.UNMASKED_RADIX,this.radix)}get number(){return this.typedValue}set number(e){this.typedValue=e}get allowNegative(){return this.min!=null&&this.min<0||this.max!=null&&this.max<0}get allowPositive(){return this.min!=null&&this.min>0||this.max!=null&&this.max>0}typedValueEquals(e){return(super.typedValueEquals(e)||te.EMPTY_VALUES.includes(e)&&te.EMPTY_VALUES.includes(this.typedValue))&&!(e===0&&this.value==="")}};P(te,"UNMASKED_RADIX","."),P(te,"EMPTY_VALUES",[...ue.EMPTY_VALUES,0]),P(te,"DEFAULTS",{mask:Number,radix:",",thousandsSeparator:"",mapToRadix:[te.UNMASKED_RADIX],min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,scale:2,normalizeZeros:!0,padFractionalZeros:!1,parse:Number,format:e=>e.toLocaleString("en-US",{useGrouping:!1,maximumFractionDigits:20})});let it=te;b.MaskedNumber=it;const rt={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function _t(a,e,t){e===void 0&&(e=rt.MASKED),t===void 0&&(t=rt.MASKED);const r=se(a);return n=>r.runIsolated(o=>(o[e]=n,o[t]))}function mr(a,e,t,r){return _t(e,t,r)(a)}b.PIPE_TYPE=rt;b.createPipe=_t;b.pipe=mr;class fr extends Fe{get repeatFrom(){return(Array.isArray(this.repeat)?this.repeat[0]:this.repeat===1/0?0:this.repeat)??0}get repeatTo(){return(Array.isArray(this.repeat)?this.repeat[1]:this.repeat)??1/0}constructor(e){super(e)}updateOptions(e){super.updateOptions(e)}_update(e){var o;const{repeat:t,...r}=Ae(e);this._blockOpts=Object.assign({},this._blockOpts,r);const n=se(this._blockOpts);this.repeat=t??n.repeat??this.repeat??1/0,super._update({mask:"m".repeat(Math.max(this.repeatTo===1/0&&((o=this._blocks)==null?void 0:o.length)||0,this.repeatFrom)),blocks:{m:n},eager:n.eager,overwrite:n.overwrite,skipInvalid:n.skipInvalid,lazy:n.lazy,placeholderChar:n.placeholderChar,displayChar:n.displayChar})}_allocateBlock(e){if(e<this._blocks.length)return this._blocks[e];if(this.repeatTo===1/0||this._blocks.length<this.repeatTo)return this._blocks.push(se(this._blockOpts)),this.mask+="m",this._blocks[this._blocks.length-1]}_appendCharRaw(e,t){var n,o,l;t===void 0&&(t={});const r=new S;for(let u=((n=this._mapPosToBlock(this.displayValue.length))==null?void 0:n.index)??Math.max(this._blocks.length-1,0),h,p;h=this._blocks[u]??(p=!p&&this._allocateBlock(u));++u){const g=h._appendChar(e,{...t,_beforeTailState:(l=(o=t._beforeTailState)==null?void 0:o._blocks)==null?void 0:l[u]});if(g.skip&&p){this._blocks.pop(),this.mask=this.mask.slice(1);break}if(r.aggregate(g),g.skip||g.rawInserted)break}return r}_trimEmptyTail(e,t){var l,u;e===void 0&&(e=0);const r=Math.max(((l=this._mapPosToBlock(e))==null?void 0:l.index)||0,this.repeatFrom,0);let n;t!=null&&(n=(u=this._mapPosToBlock(t))==null?void 0:u.index),n==null&&(n=this._blocks.length-1);let o=0;for(let h=n;r<=h&&!this._blocks[h].unmaskedValue;--h,++o);o&&(this._blocks.splice(n-o+1,o),this.mask=this.mask.slice(o))}reset(){super.reset(),this._trimEmptyTail()}remove(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);const r=super.remove(e,t);return this._trimEmptyTail(e,t),r}totalInputPositions(e,t){return e===void 0&&(e=0),t==null&&this.repeatTo===1/0?1/0:super.totalInputPositions(e,t)}get state(){return super.state}set state(e){this._blocks.length=e._blocks.length,this.mask=this.mask.slice(0,this._blocks.length),super.state=e}}b.RepeatBlock=fr;try{globalThis.IMask=b}catch{}const St={mask:f.oneOfType([f.array,f.func,f.string,f.instanceOf(RegExp),f.oneOf([Date,Number,b.Masked]),f.instanceOf(b.Masked)]),value:f.any,unmask:f.oneOfType([f.bool,f.oneOf(["typed"])]),prepare:f.func,prepareChar:f.func,validate:f.func,commit:f.func,overwrite:f.oneOfType([f.bool,f.oneOf(["shift"])]),eager:f.oneOfType([f.bool,f.oneOf(["append","remove"])]),skipInvalid:f.bool,onAccept:f.func,onComplete:f.func,placeholderChar:f.string,displayChar:f.string,lazy:f.bool,definitions:f.object,blocks:f.object,enum:f.arrayOf(f.string),maxLength:f.number,from:f.number,to:f.number,pattern:f.string,format:f.func,parse:f.func,autofix:f.oneOfType([f.bool,f.oneOf(["pad"])]),radix:f.string,thousandsSeparator:f.string,mapToRadix:f.arrayOf(f.string),scale:f.number,normalizeZeros:f.bool,padFractionalZeros:f.bool,min:f.oneOfType([f.number,f.instanceOf(Date)]),max:f.oneOfType([f.number,f.instanceOf(Date)]),dispatch:f.func,inputRef:f.oneOfType([f.func,f.shape({current:f.object})])},At=Object.keys(St).filter(a=>a!=="value"),vr=["value","unmask","onAccept","onComplete","inputRef"],xr=At.filter(a=>vr.indexOf(a)<0);function gr(a){var r;const e=(r=class extends X.Component{constructor(n){super(n),this._inputRef=this._inputRef.bind(this)}componentDidMount(){this.props.mask&&this.initMask()}componentDidUpdate(){var l;const n=this.props,o=this._extractMaskOptionsFromProps(n);o.mask?this.maskRef?(this.maskRef.updateOptions(o),"value"in n&&n.value!==void 0&&(this.maskValue=n.value)):this.initMask(o):(this.destroyMask(),"value"in n&&n.value!==void 0&&((l=this.element)!=null&&l.isContentEditable&&this.element.tagName!=="INPUT"&&this.element.tagName!=="TEXTAREA"?this.element.textContent=n.value:this.element.value=n.value))}componentWillUnmount(){this.destroyMask()}_inputRef(n){this.element=n,this.props.inputRef&&(Object.prototype.hasOwnProperty.call(this.props.inputRef,"current")?this.props.inputRef.current=n:this.props.inputRef(n))}initMask(n){n===void 0&&(n=this._extractMaskOptionsFromProps(this.props)),this.maskRef=b(this.element,n).on("accept",this._onAccept.bind(this)).on("complete",this._onComplete.bind(this)),"value"in this.props&&this.props.value!==void 0&&(this.maskValue=this.props.value)}destroyMask(){this.maskRef&&(this.maskRef.destroy(),delete this.maskRef)}_extractMaskOptionsFromProps(n){const{...o}=n;return Object.keys(o).filter(l=>xr.indexOf(l)<0).forEach(l=>{delete o[l]}),o}_extractNonMaskProps(n){const{...o}=n;return At.forEach(l=>{l!=="maxLength"&&delete o[l]}),"defaultValue"in o||(o.defaultValue=n.mask?"":o.value),delete o.value,o}get maskValue(){return this.maskRef?this.props.unmask==="typed"?this.maskRef.typedValue:this.props.unmask?this.maskRef.unmaskedValue:this.maskRef.value:""}set maskValue(n){this.maskRef&&(n=n==null&&this.props.unmask!=="typed"?"":n,this.props.unmask==="typed"?this.maskRef.typedValue=n:this.props.unmask?this.maskRef.unmaskedValue=n:this.maskRef.value=n)}_onAccept(n){this.props.onAccept&&this.maskRef&&this.props.onAccept(this.maskValue,this.maskRef,n)}_onComplete(n){this.props.onComplete&&this.maskRef&&this.props.onComplete(this.maskValue,this.maskRef,n)}render(){return X.createElement(a,{...this._extractNonMaskProps(this.props),inputRef:this._inputRef})}},P(r,"displayName"),P(r,"propTypes"),r),t=a.displayName||a.name||"Component";return e.displayName=`IMask(${t})`,e.propTypes=St,X.forwardRef((n,o)=>X.createElement(e,{...n,ref:o}))}const br=gr(a=>{let{inputRef:e,...t}=a;return X.createElement("input",{...t,ref:e})}),Fr=(a,e)=>X.createElement(br,{...a,ref:e}),kr=X.forwardRef(Fr);function Et(a,e){var t={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(a);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(a,r[n])&&(t[r[n]]=a[r[n]]);return t}var Ee;(function(a){a.event="event",a.props="prop"})(Ee||(Ee={}));function pe(){}function Cr(a){var e,t=void 0;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];return e&&r.length===e.length&&r.every(function(o,l){return o===e[l]})||(e=r,t=a.apply(void 0,r)),t}}function Be(a){return!!(a||"").match(/\d/)}function Te(a){return a==null}function yr(a){return typeof a=="number"&&isNaN(a)}function Bt(a){return Te(a)||yr(a)||typeof a=="number"&&!isFinite(a)}function Vt(a){return a.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Tr(a){switch(a){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Ir(a,e,t){var r=Tr(t),n=a.search(/[1-9]/);return n=n===-1?a.length:n,a.substring(0,n)+a.substring(n,a.length).replace(r,"$1"+e)}function wr(a){var e=z.useRef(a);e.current=a;var t=z.useRef(function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];return e.current.apply(e,r)});return t.current}function lt(a,e){e===void 0&&(e=!0);var t=a[0]==="-",r=t&&e;a=a.replace("-","");var n=a.split("."),o=n[0],l=n[1]||"";return{beforeDecimal:o,afterDecimal:l,hasNegation:t,addNegation:r}}function _r(a){if(!a)return a;var e=a[0]==="-";e&&(a=a.substring(1,a.length));var t=a.split("."),r=t[0].replace(/^0+/,"")||"0",n=t[1]||"";return(e?"-":"")+r+(n?"."+n:"")}function Mt(a,e,t){for(var r="",n=t?"0":"",o=0;o<=e-1;o++)r+=a[o]||n;return r}function pt(a,e){return Array(e+1).join(a)}function Nt(a){var e=a+"",t=e[0]==="-"?"-":"";t&&(e=e.substring(1));var r=e.split(/[eE]/g),n=r[0],o=r[1];if(o=Number(o),!o)return t+n;n=n.replace(".","");var l=1+o,u=n.length;return l<0?n="0."+pt("0",Math.abs(l))+n:l>=u?n=n+pt("0",l-u):n=(n.substring(0,l)||"0")+"."+n.substring(l),t+n}function mt(a,e,t){if(["","-"].indexOf(a)!==-1)return a;var r=(a.indexOf(".")!==-1||t)&&e,n=lt(a),o=n.beforeDecimal,l=n.afterDecimal,u=n.hasNegation,h=parseFloat("0."+(l||"0")),p=l.length<=e?"0."+l:h.toFixed(e),g=p.split("."),F=o.split("").reverse().reduce(function(E,B,w){return E.length>w?(Number(E[0])+Number(B)).toString()+E.substring(1,E.length):B+E},g[0]),I=Mt(g[1]||"",e,t),_=u?"-":"",k=r?".":"";return""+_+F+k+I}function ve(a,e){if(a.value=a.value,a!==null){if(a.createTextRange){var t=a.createTextRange();return t.move("character",e),t.select(),!0}return a.selectionStart||a.selectionStart===0?(a.focus(),a.setSelectionRange(e,e),!0):(a.focus(),!1)}}var Rt=Cr(function(a,e){for(var t=0,r=0,n=a.length,o=e.length;a[t]===e[t]&&t<n;)t++;for(;a[n-1-r]===e[o-1-r]&&o-r>t&&n-r>t;)r++;return{from:{start:t,end:n-r},to:{start:t,end:o-r}}});function Sr(a,e,t){return Math.min(Math.max(a,e),t)}function Qe(a){return Math.max(a.selectionStart,a.selectionEnd)}function Ar(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Er(a){return{from:{start:0,end:0},to:{start:0,end:a.length},lastValue:""}}function Br(a){var e=a.currentValue,t=a.formattedValue,r=a.currentValueIndex,n=a.formattedValueIndex;return e[r]===t[n]}function Vr(a,e,t,r,n,o,l){l===void 0&&(l=Br);var u=n.findIndex(function(ae){return ae}),h=a.slice(0,u);!e&&!t.startsWith(h)&&(e=h,t=h+t,r=r+h.length);for(var p=t.length,g=a.length,F={},I=new Array(p),_=0;_<p;_++){I[_]=-1;for(var k=0,E=g;k<E;k++){var B=l({currentValue:t,lastValue:e,formattedValue:a,currentValueIndex:_,formattedValueIndex:k});if(B&&F[k]!==!0){I[_]=k,F[k]=!0;break}}}for(var w=r;w<p&&(I[w]===-1||!o(t[w]));)w++;var $=w===p||I[w]===-1?g:I[w];for(w=r-1;w>0&&I[w]===-1;)w--;var Y=w===-1||I[w]===-1?0:I[w]+1;return Y>$?$:r-Y<$-r?Y:$}function ft(a,e,t,r){var n=a.length;if(e=Sr(e,0,n),r==="left"){for(;e>=0&&!t[e];)e--;e===-1&&(e=t.indexOf(!0))}else{for(;e<=n&&!t[e];)e++;e>n&&(e=t.lastIndexOf(!0))}return e===-1&&(e=n),e}function Mr(a){for(var e=Array.from({length:a.length+1}).map(function(){return!0}),t=0,r=e.length;t<r;t++)e[t]=!!(Be(a[t])||Be(a[t-1]));return e}function Dt(a,e,t,r,n,o){o===void 0&&(o=pe);var l=wr(function(k,E){var B,w;return Bt(k)?(w="",B=""):typeof k=="number"||E?(w=typeof k=="number"?Nt(k):k,B=r(w)):(w=n(k,void 0),B=r(w)),{formattedValue:B,numAsString:w}}),u=z.useState(function(){return l(Te(a)?e:a,t)}),h=u[0],p=u[1],g=function(k,E){k.formattedValue!==h.formattedValue&&p({formattedValue:k.formattedValue,numAsString:k.value}),o(k,E)},F=a,I=t;Te(a)&&(F=h.numAsString,I=!0);var _=l(F,I);return z.useMemo(function(){p(_)},[_.formattedValue]),[h,g]}function Nr(a){return a.replace(/[^0-9]/g,"")}function Rr(a){return a}function Dr(a){var e=a.type;e===void 0&&(e="text");var t=a.displayType;t===void 0&&(t="input");var r=a.customInput,n=a.renderText,o=a.getInputRef,l=a.format;l===void 0&&(l=Rr);var u=a.removeFormatting;u===void 0&&(u=Nr);var h=a.defaultValue,p=a.valueIsNumericString,g=a.onValueChange,F=a.isAllowed,I=a.onChange;I===void 0&&(I=pe);var _=a.onKeyDown;_===void 0&&(_=pe);var k=a.onMouseUp;k===void 0&&(k=pe);var E=a.onFocus;E===void 0&&(E=pe);var B=a.onBlur;B===void 0&&(B=pe);var w=a.value,$=a.getCaretBoundary;$===void 0&&($=Mr);var Y=a.isValidInputCharacter;Y===void 0&&(Y=Be);var ae=a.isCharacterSame,Q=Et(a,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),fe=Dt(w,h,!!p,l,u,g),ne=fe[0],A=ne.formattedValue,ee=ne.numAsString,de=fe[1],ie=z.useRef({formattedValue:A,numAsString:ee}),ke=function(m,x){ie.current={formattedValue:m.formattedValue,numAsString:m.value},de(m,x)},he=z.useState(!1),Ie=he[0],we=he[1],C=z.useRef(null),y=z.useRef({setCaretTimeout:null,focusTimeout:null});z.useEffect(function(){return we(!0),function(){clearTimeout(y.current.setCaretTimeout),clearTimeout(y.current.focusTimeout)}},[]);var W=l,N=function(m,x){var T=parseFloat(x);return{formattedValue:m,value:x,floatValue:isNaN(T)?void 0:T}},R=function(m,x,T){m.selectionStart===0&&m.selectionEnd===m.value.length||(ve(m,x),y.current.setCaretTimeout=setTimeout(function(){m.value===T&&m.selectionStart!==m.selectionEnd&&ve(m,x)},0))},H=function(m,x,T){return ft(m,x,$(m),T)},G=function(m,x,T){var D=$(x),O=Vr(x,A,m,T,D,Y,ae);return O=ft(x,O,D),O},Ve=function(m){var x=m.formattedValue;x===void 0&&(x="");var T=m.input,D=m.setCaretPosition;D===void 0&&(D=!0);var O=m.source,V=m.event,j=m.numAsString,q=m.caretPos;if(T){if(q===void 0&&D){var _e=m.inputValue||T.value,Ke=Qe(T);T.value=x,q=G(_e,x,Ke)}T.value=x,D&&q!==void 0&&R(T,q,x)}x!==A&&ke(N(x,j),{event:V,source:O})};z.useEffect(function(){var m=ie.current,x=m.formattedValue,T=m.numAsString;A!==x&&(A!==ee||x!==T)&&ke(N(A,ee),{event:void 0,source:Ee.props})},[A,ee]);var Ge=C.current?Qe(C.current):void 0,Me=typeof window<"u"?z.useLayoutEffect:z.useEffect;Me(function(){var m=C.current;if(A!==ie.current.formattedValue&&m){var x=G(ie.current.formattedValue,A,Ge);m.value=A,R(m,x,A)}},[A]);var Ot=function(m,x,T){var D=Rt(A,m),O=Object.assign(Object.assign({},D),{lastValue:A}),V=u(m,O),j=W(V);if(V=u(j,void 0),F&&!F(N(j,V))){var q=x.target,_e=Qe(q),Ke=G(m,A,_e);return q.value=A,R(q,Ke,A),!1}return Ve({formattedValue:j,numAsString:V,inputValue:m,event:x,source:T,setCaretPosition:!0,input:x.target}),!0},Pt=function(m){var x=m.target,T=x.value,D=Ot(T,m,Ee.event);D&&I(m)},Lt=function(m){var x=m.target,T=m.key,D=x.selectionStart,O=x.selectionEnd,V=x.value;V===void 0&&(V="");var j;if(T==="ArrowLeft"||T==="Backspace"?j=Math.max(D-1,0):T==="ArrowRight"?j=Math.min(D+1,V.length):T==="Delete"&&(j=D),j===void 0||D!==O){_(m);return}var q=j;if(T==="ArrowLeft"||T==="ArrowRight"){var _e=T==="ArrowLeft"?"left":"right";q=H(V,j,_e),q!==j&&m.preventDefault()}else T==="Delete"&&!Y(V[j])?q=H(V,j,"right"):T==="Backspace"&&!Y(V[j])&&(q=H(V,j,"left"));q!==j&&R(x,q,V),m.isUnitTestRun&&R(x,q,V),_(m)},Ht=function(m){var x=m.target,T=x.selectionStart,D=x.selectionEnd,O=x.value;if(O===void 0&&(O=""),T===D){var V=H(O,T);V!==T&&R(x,V,O)}k(m)},Ut=function(m){m.persist&&m.persist();var x=m.target;C.current=x,y.current.focusTimeout=setTimeout(function(){var T=x.selectionStart,D=x.selectionEnd,O=x.value;O===void 0&&(O="");var V=H(O,T);V!==T&&!(T===0&&D===O.length)&&R(x,V,O),E(m)},0)},jt=function(m){C.current=null,clearTimeout(y.current.focusTimeout),clearTimeout(y.current.setCaretTimeout),B(m)},zt=Ie&&Ar()?"numeric":void 0,st=Object.assign({inputMode:zt},Q,{type:e,value:A,onChange:Pt,onKeyDown:Lt,onMouseUp:Ht,onFocus:Ut,onBlur:jt});if(t==="text")return n?X.createElement(X.Fragment,null,n(A,Q)||null):X.createElement("span",Object.assign({},Q,{ref:o}),A);if(r){var Wt=r;return X.createElement(Wt,Object.assign({},st,{ref:o}))}return X.createElement("input",Object.assign({},st,{ref:o}))}function vt(a,e){var t=e.decimalScale,r=e.fixedDecimalScale,n=e.prefix;n===void 0&&(n="");var o=e.suffix;o===void 0&&(o="");var l=e.allowNegative,u=e.thousandsGroupStyle;if(u===void 0&&(u="thousand"),a===""||a==="-")return a;var h=$e(e),p=h.thousandSeparator,g=h.decimalSeparator,F=t!==0&&a.indexOf(".")!==-1||t&&r,I=lt(a,l),_=I.beforeDecimal,k=I.afterDecimal,E=I.addNegation;return t!==void 0&&(k=Mt(k,t,!!r)),p&&(_=Ir(_,p,u)),n&&(_=n+_),o&&(k=k+o),E&&(_="-"+_),a=_+(F&&g||"")+k,a}function $e(a){var e=a.decimalSeparator;e===void 0&&(e=".");var t=a.thousandSeparator,r=a.allowedDecimalSeparators;return t===!0&&(t=","),r||(r=[e,"."]),{decimalSeparator:e,thousandSeparator:t,allowedDecimalSeparators:r}}function Or(a,e){a===void 0&&(a="");var t=new RegExp("(-)"),r=new RegExp("(-)(.)*(-)"),n=t.test(a),o=r.test(a);return a=a.replace(/-/g,""),n&&!o&&e&&(a="-"+a),a}function Pr(a,e){return new RegExp("(^-)|[0-9]|"+Vt(a),e?"g":void 0)}function Lr(a,e,t){return a===""?!0:!(e!=null&&e.match(/\d/))&&!(t!=null&&t.match(/\d/))&&typeof a=="string"&&!isNaN(Number(a))}function Hr(a,e,t){var r;e===void 0&&(e=Er(a));var n=t.allowNegative,o=t.prefix;o===void 0&&(o="");var l=t.suffix;l===void 0&&(l="");var u=t.decimalScale,h=e.from,p=e.to,g=p.start,F=p.end,I=$e(t),_=I.allowedDecimalSeparators,k=I.decimalSeparator,E=a[F]===k;if(Be(a)&&(a===o||a===l)&&e.lastValue==="")return a;if(F-g===1&&_.indexOf(a[g])!==-1){var B=u===0?"":k;a=a.substring(0,g)+B+a.substring(g+1,a.length)}var w=function(y,W,N){var R=!1,H=!1;o.startsWith("-")?R=!1:y.startsWith("--")?(R=!1,H=!0):l.startsWith("-")&&y.length===l.length?R=!1:y[0]==="-"&&(R=!0);var G=R?1:0;return H&&(G=2),G&&(y=y.substring(G),W-=G,N-=G),{value:y,start:W,end:N,hasNegation:R}},$=w(a,g,F),Y=$.hasNegation;r=$,a=r.value,g=r.start,F=r.end;var ae=w(e.lastValue,h.start,h.end),Q=ae.start,fe=ae.end,ne=ae.value,A=a.substring(g,F);a.length&&ne.length&&(Q>ne.length-l.length||fe<o.length)&&!(A&&l.startsWith(A))&&(a=ne);var ee=0;a.startsWith(o)?ee+=o.length:g<o.length&&(ee=g),a=a.substring(ee),F-=ee;var de=a.length,ie=a.length-l.length;a.endsWith(l)?de=ie:(F>ie||F>a.length-l.length)&&(de=F),a=a.substring(0,de),a=Or(Y?"-"+a:a,n),a=(a.match(Pr(k,!0))||[]).join("");var ke=a.indexOf(k);a=a.replace(new RegExp(Vt(k),"g"),function(y,W){return W===ke?".":""});var he=lt(a,n),Ie=he.beforeDecimal,we=he.afterDecimal,C=he.addNegation;return p.end-p.start<h.end-h.start&&Ie===""&&E&&!parseFloat(we)&&(a=C?"-":""),a}function Ur(a,e){var t=e.prefix;t===void 0&&(t="");var r=e.suffix;r===void 0&&(r="");var n=Array.from({length:a.length+1}).map(function(){return!0}),o=a[0]==="-";n.fill(!1,0,t.length+(o?1:0));var l=a.length;return n.fill(!1,l-r.length+1,l+1),n}function jr(a){var e=$e(a),t=e.thousandSeparator,r=e.decimalSeparator,n=a.prefix;n===void 0&&(n="");var o=a.allowNegative;if(o===void 0&&(o=!0),t===r)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+t+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+r+` (default value for decimalSeparator is .)
     `);return n.startsWith("-")&&o&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+n+`
      allowNegative: `+o+`
    `),o=!1),Object.assign(Object.assign({},a),{allowNegative:o})}function zr(a){a=jr(a),a.decimalSeparator,a.allowedDecimalSeparators,a.thousandsGroupStyle;var e=a.suffix,t=a.allowNegative,r=a.allowLeadingZeros,n=a.onKeyDown;n===void 0&&(n=pe);var o=a.onBlur;o===void 0&&(o=pe);var l=a.thousandSeparator,u=a.decimalScale,h=a.fixedDecimalScale,p=a.prefix;p===void 0&&(p="");var g=a.defaultValue,F=a.value,I=a.valueIsNumericString,_=a.onValueChange,k=Et(a,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),E=$e(a),B=E.decimalSeparator,w=E.allowedDecimalSeparators,$=function(C){return vt(C,a)},Y=function(C,y){return Hr(C,y,a)},ae=Te(F)?g:F,Q=I??Lr(ae,p,e);Te(F)?Te(g)||(Q=Q||typeof g=="number"):Q=Q||typeof F=="number";var fe=function(C){return Bt(C)?C:(typeof C=="number"&&(C=Nt(C)),Q&&typeof u=="number"?mt(C,u,!!h):C)},ne=Dt(fe(F),fe(g),!!Q,$,Y,_),A=ne[0],ee=A.numAsString,de=A.formattedValue,ie=ne[1],ke=function(C){var y=C.target,W=C.key,N=y.selectionStart,R=y.selectionEnd,H=y.value;if(H===void 0&&(H=""),N!==R){n(C);return}W==="Backspace"&&H[0]==="-"&&N===p.length+1&&t&&ve(y,1),u&&h&&(W==="Backspace"&&H[N-1]===B?(ve(y,N-1),C.preventDefault()):W==="Delete"&&H[N]===B&&C.preventDefault()),w!=null&&w.includes(W)&&H[N]===B&&ve(y,N+1);var G=l===!0?",":l;W==="Backspace"&&H[N-1]===G&&ve(y,N-1),W==="Delete"&&H[N]===G&&ve(y,N+1),n(C)},he=function(C){var y=ee;if(y.match(/\d/g)||(y=""),r||(y=_r(y)),h&&u&&(y=mt(y,u,h)),y!==ee){var W=vt(y,a);ie({formattedValue:W,value:y,floatValue:parseFloat(y)},{event:C,source:Ee.event})}o(C)},Ie=function(C){return C===B?!0:Be(C)},we=function(C){var y=C.currentValue,W=C.lastValue,N=C.formattedValue,R=C.currentValueIndex,H=C.formattedValueIndex,G=y[R],Ve=N[H],Ge=Rt(W,y),Me=Ge.to;return R>=Me.start&&R<Me.end&&w&&w.includes(G)&&Ve===B?!0:G===Ve};return Object.assign(Object.assign({},k),{value:de,valueIsNumericString:!1,isValidInputCharacter:Ie,isCharacterSame:we,onValueChange:ie,format:$,removeFormatting:Y,getCaretBoundary:function(C){return Ur(C,a)},onKeyDown:ke,onBlur:he})}function Wr(a){var e=zr(a);return X.createElement(Dr,Object.assign({},e))}const qr=z.forwardRef(function(e,t){const{onChange:r,...n}=e;return i(kr,{...n,mask:"(#00) 000-0000",definitions:{"#":/[1-9]/},inputRef:t,onAccept:o=>r({target:{name:e.name,value:o}}),overwrite:!0})}),$r=z.forwardRef(function(e,t){const{onChange:r,...n}=e;return i(Wr,{...n,getInputRef:t,onValueChange:o=>{r({target:{name:e.name,value:o.value}})},thousandSeparator:!0,valueIsNumericString:!0,prefix:"$"})});function Gr(){const[a,e]=z.useState({textmask:"(100) 000-0000",numberformat:"1320"}),t=r=>{e({...a,[r.target.name]:r.target.value})};return s(Ft,{direction:"row",spacing:2,children:[s(U,{variant:"standard",children:[i(K,{htmlFor:"formatted-text-mask-input",children:"react-imask"}),i(J,{value:a.textmask,onChange:t,name:"textmask",id:"formatted-text-mask-input",inputComponent:qr})]}),i(c,{label:"react-number-format",value:a.numberformat,onChange:t,name:"numberformat",id:"formatted-numberformat-input",InputProps:{inputComponent:$r},variant:"standard"})]})}const Kr=`import * as React from 'react';
import { IMaskInput } from 'react-imask';
import { NumericFormat } from 'react-number-format';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (<IMaskInput {...other} mask="(#00) 000-0000" definitions={{
            '#': /[1-9]/,
        }} inputRef={ref} onAccept={(value) => onChange({ target: { name: props.name, value } })} overwrite/>);
});
const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;
    return (<NumericFormat {...other} getInputRef={ref} onValueChange={(values) => {
            onChange({
                target: {
                    name: props.name,
                    value: values.value,
                },
            });
        }} thousandSeparator valueIsNumericString prefix="$"/>);
});
export default function FormattedInputs() {
    const [values, setValues] = React.useState({
        textmask: '(100) 000-0000',
        numberformat: '1320',
    });
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    return (<Stack direction="row" spacing={2}>
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
        <Input value={values.textmask} onChange={handleChange} name="textmask" id="formatted-text-mask-input" inputComponent={TextMaskCustom}/>
      </FormControl>
      <TextField label="react-number-format" value={values.numberformat} onChange={handleChange} name="numberformat" id="formatted-numberformat-input" InputProps={{
            inputComponent: NumericFormatCustom,
        }} variant="standard"/>
    </Stack>);
}
`;function aa(a){return s(ti,{children:[s("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[i(ii,{}),i(ei,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/text-fields",target:"_blank",role:"button",size:"small",startIcon:i(Qt,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),i(d,{className:"text-32 my-16 font-700",component:"h1",children:"Text Field"}),i(d,{className:"description",children:"Text Fields let users enter and edit text."}),i(d,{className:"text-14 mb-32",component:"div",children:"Text fields allow users to enter text into a UI. They typically appear in forms and dialogs."}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic TextField"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",i("code",{children:"TextField"})," wrapper component is a complete form control including a label, input, and help text. It comes with three variants: outlined (default), filled, and standard."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"BasicTextFields.js",className:"my-16",iframe:!1,component:ni,raw:oi})}),i("div",{className:"border border-1 p-16 rounded-16 my-12",children:s(d,{className:"text-14 mb-32",component:"div",children:["The standard variant of the Text Field is no longer documented in the ",i("a",{href:"https://m2.material.io/",children:"Material Design guidelines"}),"(",i("a",{href:"https://medium.com/google-design/the-evolution-of-material-designs-text-fields-603688b3fe03",children:"this article explains why"}),"), but Material UI will continue to support it."]})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Form props"}),s(d,{className:"text-14 mb-32",component:"div",children:["Standard form attributes are supported e.g. ",i("code",{children:"required"}),", ",i("code",{children:"disabled"}),", ",i("code",{children:"type"}),", etc. as well as a ",i("code",{children:"helperText"})," which is used to give context about a field's input, such as how the input will be used."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"FormPropsTextFields.js",className:"my-16",iframe:!1,component:li,raw:si})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Validation"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",i("code",{children:"error"})," prop toggles the error state. The ",i("code",{children:"helperText"})," prop can then be used to provide feedback to the user about the error."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"ValidationTextFields.js",className:"my-16",iframe:!1,component:ui,raw:di})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Multiline"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",i("code",{children:"multiline"})," prop transforms the text field into a ",i("a",{href:"/material-ui/react-textarea-autosize/",children:"TextareaAutosize"})," element. Unless the ",i("code",{children:"rows"})," prop is set, the height of the text field dynamically matches its content (using ",i("a",{href:"/material-ui/react-textarea-autosize/",children:"TextareaAutosize"}),"). You can use the ",i("code",{children:"minRows"})," and ",i("code",{children:"maxRows"})," props to bound it."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"MultilineTextFields.js",className:"my-16",iframe:!1,component:hi,raw:ci})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Select"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",i("code",{children:"select"})," prop makes the text field use the ",i("a",{href:"/material-ui/react-select/",children:"Select"})," component internally."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"SelectTextFields.js",className:"my-16",iframe:!1,component:pi,raw:mi})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Icons"}),i(d,{className:"text-14 mb-32",component:"div",children:"There are multiple ways to display an icon with a text field."}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"InputWithIcon.js",className:"my-16",iframe:!1,component:fi,raw:vi})}),i(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Input Adornments"}),s(d,{className:"text-14 mb-32",component:"div",children:["The main way is with an ",i("code",{children:"InputAdornment"}),". This can be used to add a prefix, a suffix, or an action to an input. For instance, you can use an icon button to hide or reveal the password."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"InputAdornments.js",className:"my-16",iframe:!1,component:Fi,raw:ki})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Sizes"}),s(d,{className:"text-14 mb-32",component:"div",children:["Fancy smaller inputs? Use the ",i("code",{children:"size"})," prop."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"TextFieldSizes.js",className:"my-16",iframe:!1,component:Ci,raw:yi})}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",i("code",{children:"filled"})," variant input height can be further reduced by rendering the label outside of it."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"TextFieldHiddenLabel.js",className:"my-16",iframe:!1,component:Ti,raw:Ii})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Margin"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",i("code",{children:"margin"})," prop can be used to alter the vertical spacing of the text field. Using ",i("code",{children:"none"})," (default) doesn't apply margins to the ",i("code",{children:"FormControl"})," whereas ",i("code",{children:"dense"})," and ",i("code",{children:"normal"})," do."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"LayoutTextFields.js",className:"my-16",iframe:!1,component:wi,raw:_i})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Full width"}),s(d,{className:"text-14 mb-32",component:"div",children:[i("code",{children:"fullWidth"})," can be used to make the input take up the full width of its container."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"FullWidthTextField.js",className:"my-16",iframe:!1,component:Si,raw:Ai})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Uncontrolled vs. Controlled"}),i(d,{className:"text-14 mb-32",component:"div",children:"The component can be controlled or uncontrolled."}),s("div",{className:"border border-1 p-16 rounded-16 my-12",children:[s("ul",{className:"space-y-16",children:[s("li",{children:["A component is ",i("strong",{children:"controlled"})," when it's managed by its parent using props."]}),s("li",{children:["A component is ",i("strong",{children:"uncontrolled"})," when it's managed by its own local state."]})]}),s(d,{className:"text-14 mb-32",component:"div",children:["Learn more about controlled and uncontrolled components in the ",i("a",{href:"https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components",children:"React documentation"}),"."]})]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"StateTextFields.js",className:"my-16",iframe:!1,component:Ei,raw:Bi})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Components"}),s(d,{className:"text-14 mb-32",component:"div",children:[i("code",{children:"TextField"})," is composed of smaller components (",i("a",{href:"/material-ui/api/form-control/",children:i("code",{children:"FormControl"})}),",",i("a",{href:"/material-ui/api/input/",children:i("code",{children:"Input"})}),",",i("a",{href:"/material-ui/api/filled-input/",children:i("code",{children:"FilledInput"})}),",",i("a",{href:"/material-ui/api/input-label/",children:i("code",{children:"InputLabel"})}),",",i("a",{href:"/material-ui/api/outlined-input/",children:i("code",{children:"OutlinedInput"})}),", and ",i("a",{href:"/material-ui/api/form-helper-text/",children:i("code",{children:"FormHelperText"})}),") that you can leverage directly to significantly customize your form inputs."]}),s(d,{className:"text-14 mb-32",component:"div",children:["You might also have noticed that some native HTML input properties are missing from the ",i("code",{children:"TextField"})," component. This is on purpose. The component takes care of the most used properties. Then, it's up to the user to use the underlying component shown in the following demo. Still, you can use ",i("code",{children:"inputProps"})," (and ",i("code",{children:"InputProps"}),", ",i("code",{children:"InputLabelProps"})," properties) if you want to avoid some boilerplate."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"ComposedTextField.js",className:"my-16",iframe:!1,component:Vi,raw:Mi})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Inputs"}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"Inputs.js",className:"my-16",iframe:!1,component:Ni,raw:Ri})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),s(d,{className:"text-14 mb-32",component:"div",children:["The ",i("code",{children:"color"})," prop changes the highlight color of the text field when focused."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"ColorTextFields.js",className:"my-16",iframe:!1,component:Di,raw:Oi})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),s(d,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the ",i("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),i(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Using the styled API"}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"CustomizedInputsStyled.js",className:"my-16",iframe:!1,component:ji,raw:zi})}),i(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Using the theme style overrides API"}),s(d,{className:"text-14 mb-32",component:"div",children:["Use the ",i("code",{children:"styleOverrides"})," key to change any style injected by Material UI into the DOM. See the ",i("a",{href:"/material-ui/customization/theme-components/#theme-style-overrides",children:"theme style overrides"})," documentation for further details."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"CustomizedInputsStyleOverrides.js",className:"my-16",iframe:!1,component:qi,raw:$i})}),s(d,{className:"text-14 mb-32",component:"div",children:["Customization does not stop at CSS. You can use composition to build custom components and give your app a unique feel. Below is an example using the ",i("a",{href:"/material-ui/api/input-base/",children:i("code",{children:"InputBase"})})," component, inspired by Google Maps."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"CustomizedInputBase.js",className:"my-16",iframe:!1,component:Zi,raw:Xi})}),s(d,{className:"text-14 mb-32",component:"div",children:["🎨 If you are looking for inspiration, you can check ",i("a",{href:"https://mui-treasury.com/?path=/docs/textField-introduction--docs",children:"MUI Treasury's customization examples"}),"."]}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:i("code",{children:"useFormControl"})}),s(d,{className:"text-14 mb-32",component:"div",children:["For advanced customization use cases, a ",i("code",{children:"useFormControl()"})," hook is exposed. This hook returns the context value of the parent ",i("code",{children:"FormControl"})," component."]}),i(d,{className:"text-14 mb-32",component:"div",children:i("strong",{children:"API"})}),i(ce,{component:"pre",className:"language-jsx",children:` 
import { useFormControl } from '@mui/material/FormControl';
`}),i(d,{className:"text-14 mb-32",component:"div",children:i("strong",{children:"Returns"})}),s(d,{className:"text-14 mb-32",component:"div",children:[i("code",{children:"value"})," (",i("em",{children:"object"}),"):"]}),s("ul",{className:"space-y-16",children:[s("li",{children:[i("code",{children:"value.adornedStart"})," (",i("em",{children:"bool"}),"): Indicate whether the child ",i("code",{children:"Input"})," or ",i("code",{children:"Select"})," component has a start adornment."]}),s("li",{children:[i("code",{children:"value.setAdornedStart"})," (",i("em",{children:"func"}),"): Setter function for ",i("code",{children:"adornedStart"})," state value."]}),s("li",{children:[i("code",{children:"value.color"})," (",i("em",{children:"string"}),"): The theme color is being used, inherited from ",i("code",{children:"FormControl"})," ",i("code",{children:"color"})," prop ."]}),s("li",{children:[i("code",{children:"value.disabled"})," (",i("em",{children:"bool"}),"): Indicate whether the component is being displayed in a disabled state, inherited from ",i("code",{children:"FormControl"})," ",i("code",{children:"disabled"})," prop."]}),s("li",{children:[i("code",{children:"value.error"})," (",i("em",{children:"bool"}),"): Indicate whether the component is being displayed in an error state, inherited from ",i("code",{children:"FormControl"})," ",i("code",{children:"error"})," prop"]}),s("li",{children:[i("code",{children:"value.filled"})," (",i("em",{children:"bool"}),"): Indicate whether input is filled"]}),s("li",{children:[i("code",{children:"value.focused"})," (",i("em",{children:"bool"}),"): Indicate whether the component and its children are being displayed in a focused state"]}),s("li",{children:[i("code",{children:"value.fullWidth"})," (",i("em",{children:"bool"}),"): Indicate whether the component is taking up the full width of its container, inherited from ",i("code",{children:"FormControl"})," ",i("code",{children:"fullWidth"})," prop"]}),s("li",{children:[i("code",{children:"value.hiddenLabel"})," (",i("em",{children:"bool"}),"): Indicate whether the label is being hidden, inherited from ",i("code",{children:"FormControl"})," ",i("code",{children:"hiddenLabel"})," prop"]}),s("li",{children:[i("code",{children:"value.required"})," (",i("em",{children:"bool"}),"): Indicate whether the label is indicating that the input is required input, inherited from the ",i("code",{children:"FormControl"})," ",i("code",{children:"required"})," prop"]}),s("li",{children:[i("code",{children:"value.size"})," (",i("em",{children:"string"}),"): The size of the component, inherited from the ",i("code",{children:"FormControl"})," ",i("code",{children:"size"})," prop"]}),s("li",{children:[i("code",{children:"value.variant"})," (",i("em",{children:"string"}),"): The variant is being used by the ",i("code",{children:"FormControl"})," component and its children, inherited from ",i("code",{children:"FormControl"})," ",i("code",{children:"variant"})," prop"]}),s("li",{children:[i("code",{children:"value.onBlur"})," (",i("em",{children:"func"}),"): Should be called when the input is blurred"]}),s("li",{children:[i("code",{children:"value.onFocus"})," (",i("em",{children:"func"}),"): Should be called when the input is focused"]}),s("li",{children:[i("code",{children:"value.onEmpty"})," (",i("em",{children:"func"}),"): Should be called when the input is emptied"]}),s("li",{children:[i("code",{children:"value.onFilled"})," (",i("em",{children:"func"}),"): Should be called when the input is filled"]})]}),i(d,{className:"text-14 mb-32",component:"div",children:i("strong",{children:"Example"})}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"UseFormControl.js",className:"my-16",iframe:!1,component:Qi,raw:er})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Performance"}),s(d,{className:"text-14 mb-32",component:"div",children:["Global styles for the auto-fill keyframes are injected and removed on each mount and unmount, respectively. If you are loading a large number of Text Field components at once, it might be a good idea to change this default behavior by enabling ",i("a",{href:"/material-ui/api/input-base/#InputBase-prop-disableInjectingGlobalStyles",children:i("code",{children:"disableInjectingGlobalStyles"})})," in ",i("code",{children:"MuiInputBase"}),". Make sure to inject ",i("code",{children:"GlobalStyles"})," for the auto-fill keyframes at the top of your application."]}),i(ce,{component:"pre",className:"language-jsx",children:` 
import { GlobalStyles, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiInputBase: {
      defaultProps: {
        disableInjectingGlobalStyles: true,
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          '@keyframes mui-auto-fill': { from: { display: 'block' } },
          '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
        
      />
      ...
    </ThemeProvider>
  );
}
`}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),i(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Shrink"}),i(d,{className:"text-14 mb-32",component:"div",children:`The input label "shrink" state isn't always correct. The input label is supposed to shrink as soon as the input is displaying something. In some circumstances, we can't determine the "shrink" state (number input, datetime input, Stripe input). You might notice an overlap.`}),i(d,{className:"text-14 mb-32",component:"div",children:i("img",{src:"/material-ui-static/images/text-fields/shrink.png",alt:"shrink"})}),i(d,{className:"text-14 mb-32",component:"div",children:'To workaround the issue, you can force the "shrink" state of the label.'}),i(ce,{component:"pre",className:"language-jsx",children:` 
<TextField InputLabelProps={{ shrink: true }} />
`}),i(d,{className:"text-14 mb-32",component:"div",children:"or"}),i(ce,{component:"pre",className:"language-jsx",children:` 
<InputLabel shrink>Count</InputLabel>
`}),i(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Floating label"}),i(d,{className:"text-14 mb-32",component:"div",children:"The floating label is absolutely positioned. It won't impact the layout of the page. Make sure that the input is larger than the label to display correctly."}),i(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:'type="number"'}),s(d,{className:"text-14 mb-32",component:"div",children:[":::warning We do not recommend using ",i("code",{children:'type="number"'})," with a Text Field due to potential usability issues:"]}),s("ul",{className:"space-y-16",children:[i("li",{children:"it allows certain non-numeric characters ('e', '+', '-', '.') and silently discards others"}),i("li",{children:"the functionality of scrolling to increment/decrement the number can cause accidental and hard-to-notice changes"}),s("li",{children:["and more—see ",i("a",{href:"https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/",children:"Why the GOV.UK Design System team changed the input type for numbers"})," for a more detailed explanation of the limitations of ",i("code",{children:'<input type="number">'}),":::"]})]}),s(d,{className:"text-14 mb-32",component:"div",children:["If you need a text field with number validation, you can use Base UI's ",i("a",{href:"/base-ui/react-number-input/",children:"Number Input"})," instead."]}),s(d,{className:"text-14 mb-32",component:"div",children:["You can follow ",i("a",{href:"https://github.com/mui/material-ui/issues/19154",children:"this GitHub issue"})," to track the progress of introducing the Number Input component to Material UI."]}),i(d,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Helper text"}),i(d,{className:"text-14 mb-32",component:"div",children:"The helper text prop affects the height of the text field. If two text fields are placed side by side, one with a helper text and one without, they will have different heights. For example:"}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"HelperTextMisaligned.js",className:"my-16",iframe:!1,component:tr,raw:ir})}),s(d,{className:"text-14 mb-32",component:"div",children:["This can be fixed by passing a space character to the ",i("code",{children:"helperText"})," prop:"]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"HelperTextAligned.js",className:"my-16",iframe:!1,component:rr,raw:ar})}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Integration with 3rd party input libraries"}),s(d,{className:"text-14 mb-32",component:"div",children:["You can use third-party libraries to format an input. You have to provide a custom implementation of the ",i("code",{children:"<input>"})," element with the ",i("code",{children:"inputComponent"})," property."]}),s(d,{className:"text-14 mb-32",component:"div",children:["The following demo uses the ",i("a",{href:"https://github.com/uNmAnNeR/imaskjs",children:"react-imask"})," and ",i("a",{href:"https://github.com/s-yadav/react-number-format",children:"react-number-format"})," libraries. The same concept could be applied to ",i("a",{href:"https://github.com/mui/material-ui/issues/16037",children:"e.g. react-stripe-element"}),"."]}),i(d,{className:"text-14 mb-32",component:"div",children:i(M,{name:"FormattedInputs.js",className:"my-16",iframe:!1,component:Gr,raw:Kr})}),i(d,{className:"text-14 mb-32",component:"div",children:"The provided input component should expose a ref with a value that implements the following interface:"}),i(ce,{component:"pre",className:"language-ts",children:` 
interface InputElement {
  focus(): void;
  value?: string;
}
`}),i(ce,{component:"pre",className:"language-jsx",children:` 
const MyInputComponent = React.forwardRef((props, ref) => {
  const { component: Component, ...other } = props;

  // implement \`InputElement\` interface
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      // logic to focus the rendered component from 3rd party belongs here
    },
    // hiding the value e.g. react-stripe-elements
  }));

  // \`Component\` will be your \`SomeThirdPartyComponent\` from below
  return <Component {...other} />;
});

// usage
<TextField
  InputProps={{
    inputComponent: MyInputComponent,
    inputProps: {
      component: SomeThirdPartyComponent,
    },
  
/>;
`}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),s(d,{className:"text-14 mb-32",component:"div",children:["In order for the text field to be accessible, ",i("strong",{children:"the input should be linked to the label and the helper text"}),". The underlying DOM nodes should have this structure:"]}),i(ce,{component:"pre",className:"language-jsx",children:` 
<div className="form-control">
  <label for="my-input">Email address</label>
  <input id="my-input" aria-describedby="my-helper-text" />
  <span id="my-helper-text">We'll never share your email.</span>
</div>
`}),s("ul",{className:"space-y-16",children:[s("li",{children:["If you are using the ",i("code",{children:"TextField"})," component, you just have to provide a unique ",i("code",{children:"id"})," unless you're using the ",i("code",{children:"TextField"})," only client side. Until the UI is hydrated ",i("code",{children:"TextField"})," without an explicit ",i("code",{children:"id"})," will not have associated labels."]}),i("li",{children:"If you are composing the component:"})]}),i(ce,{component:"pre",className:"language-jsx",children:` 
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
`}),i(d,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Complementary projects"}),i(d,{className:"text-14 mb-32",component:"div",children:"For more advanced use cases, you might be able to take advantage of:"}),s("ul",{className:"space-y-16",children:[s("li",{children:[i("a",{href:"https://react-hook-form.com/",children:"react-hook-form"}),": React hook for form validation."]}),s("li",{children:[i("a",{href:"https://github.com/dohomi/react-hook-form-mui",children:"react-hook-form-mui"}),": Material UI and react-hook-form combined."]}),s("li",{children:[i("a",{href:"https://github.com/stackworx/formik-mui",children:"formik-material-ui"}),": Bindings for using Material UI with ",i("a",{href:"https://formik.org/",children:"formik"}),"."]}),s("li",{children:[i("a",{href:"https://github.com/erikras/redux-form-material-ui",children:"redux-form-material-ui"}),": Bindings for using Material UI with ",i("a",{href:"https://redux-form.com/",children:"Redux Form"}),"."]}),s("li",{children:[i("a",{href:"https://github.com/lookfirst/mui-rff",children:"mui-rff"}),": Bindings for using Material UI with ",i("a",{href:"https://final-form.org/react",children:"React Final Form"}),"."]}),s("li",{children:[i("a",{href:"https://www.npmjs.com/package/@ui-schema/ds-material",children:"@ui-schema/ds-material"})," Bindings for using Material UI with ",i("a",{href:"https://github.com/ui-schema/ui-schema",children:"UI Schema"}),". JSON Schema compatible."]}),s("li",{children:[i("a",{href:"https://www.data-driven-forms.org/provided-mappers/mui-component-mapper",children:"@data-driven-forms/mui-component-mapper"}),": Bindings for using Material UI with ",i("a",{href:"https://github.com/data-driven-forms/react-forms",children:"Data Driven Forms"}),"."]})]})]})}export{aa as default};
