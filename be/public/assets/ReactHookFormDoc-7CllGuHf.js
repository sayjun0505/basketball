import{ad as m,ae as z,ah as A,d as t,j as e,T as i,x as D,af as u,bf as h,bt as f,bh as v,bB as q,cP as b,dY as G,cL as y,ag as T,b6 as V,b5 as g,l as Y,bO as H,bq as j,F as k,_ as E,C as x,bb as U}from"./index-cy1M6gwN.js";import{F as W}from"./FuseExample-0-XNuDGL.js";const _=`import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import _ from '@lodash';
import clsx from 'clsx';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { DateTimePicker } from '@mui/x-date-pickers';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
let renderCount = 0;
const options = [
    {
        value: 'chocolate',
        label: 'Chocolate'
    },
    {
        value: 'strawberry',
        label: 'Strawberry'
    },
    {
        value: 'vanilla',
        label: 'Vanilla'
    }
];
const defaultValues = {
    Native: '',
    TextField: '',
    Select: '',
    Autocomplete: [],
    Checkbox: false,
    Switch: false,
    RadioGroup: '',
    DateTimePicker: ''
};
/**
 * Form Validation Schema
 */
const schema = z.object({
    TextField: z.string().nonempty('You must enter a value'),
    Native: z.string().nonempty('You must enter a value'),
    Select: z
        .string()
        .nonempty('You must select a value')
        .refine((val) => ['20', '30'].includes(val), 'Select 20 or 30.'),
    Checkbox: z.boolean().refine((val) => val === true, 'You must check.'),
    Switch: z.boolean().refine((val) => val === true, 'You must turn it on.'),
    RadioGroup: z.string().refine((val) => val === 'female', 'You must select female.'),
    Autocomplete: z.array(z.string()).min(2, 'Select at least two.'),
    DateTimePicker: z.string().refine((val) => val === null || val.trim().length > 0, 'You must select a date')
});
/**
 * Simple Form Example
 */
function SimpleFormExample() {
    const { handleSubmit, register, reset, control, watch, formState } = useForm({
        defaultValues,
        mode: 'all',
        resolver: zodResolver(schema)
    });
    const { isValid, dirtyFields, errors, touchedFields } = formState;
    renderCount += 1;
    const data = watch();
    return (<div className="flex w-full max-w-screen-md justify-start items-start">
			<form className="w-1/2" 
    // eslint-disable-next-line no-console
    onSubmit={handleSubmit((_data) => console.info(_data))}>
				<div className="mt-48 mb-16">
					<Typography className="mb-24 font-medium text-14">Native Input:</Typography>

					<input className={clsx('border-1 outline-none rounded-8 p-8', !!errors.Native && 'border-red')} {...register('Native')} required/>

					{!!errors.Native && (<Typography className="px-4 py-8 font-medium text-14" color="error">
							{errors?.Native?.message}
						</Typography>)}
				</div>

				<div className="mt-48 mb-16">
					<Controller name="Checkbox" control={control} render={({ field: { onChange, value, onBlur, ref } }) => (<FormControl error={!!errors.Checkbox} required>
								<FormLabel className="font-medium text-14" component="legend">
									MUI Checkbox
								</FormLabel>
								<FormControlLabel label="I agree" control={<Checkbox checked={value} onBlur={onBlur} onChange={(ev) => onChange(ev.target.checked)} inputRef={ref} required/>}/>
								<FormHelperText>{errors?.Checkbox?.message}</FormHelperText>
							</FormControl>)}/>
				</div>

				<div className="mt-48 mb-16">
					<Controller render={({ field }) => (<FormControl error={!!errors.RadioGroup} required>
								<FormLabel className="font-medium text-14" component="legend">
									Radio Group
								</FormLabel>
								<RadioGroup {...field} aria-label="gender" name="gender1">
									<FormControlLabel value="female" control={<Radio />} label="Female"/>
									<FormControlLabel value="male" control={<Radio />} label="Male"/>
								</RadioGroup>
								<FormHelperText>{errors?.RadioGroup?.message}</FormHelperText>
							</FormControl>)} name="RadioGroup" control={control}/>
				</div>

				<div className="mt-48 mb-16">
					<Controller render={({ field }) => (<TextField {...field} label="MUI TextField" variant="outlined" error={!!errors.TextField} helperText={errors?.TextField?.message} required fullWidth/>)} name="TextField" control={control}/>
				</div>

				<div className="mt-48 mb-16">
					<Controller render={({ field }) => (<FormControl error={!!errors.Select} required fullWidth>
								<FormLabel className="font-medium text-14" component="legend">
									MUI Select
								</FormLabel>
								<Select {...field} variant="outlined" fullWidth>
									<MenuItem value="10">Ten (10)</MenuItem>
									<MenuItem value="20">Twenty (20)</MenuItem>
									<MenuItem value="30">Thirty (30)</MenuItem>
								</Select>
								<FormHelperText>{errors?.Select?.message}</FormHelperText>
							</FormControl>)} name="Select" control={control}/>
				</div>

				<div className="mt-48 mb-16">
					<Controller name="Switch" control={control} render={({ field: { onChange, value, ref, onBlur } }) => (<FormControl required error={!!errors.Switch}>
								<FormLabel className="font-medium text-14" component="legend">
									MUI Switch
								</FormLabel>
								<Switch checked={value} onBlur={onBlur} onChange={(ev) => onChange(ev.target.checked)} inputRef={ref} required/>
								<FormHelperText>{errors?.Switch?.message}</FormHelperText>
							</FormControl>)}/>
				</div>

				<div className="mt-48 mb-16">
					<Typography className="mb-24 font-medium text-14">Autocomplete</Typography>
					<Controller name="Autocomplete" control={control} defaultValue={[]} render={({ field: { onChange, value, onBlur, ref } }) => (<Autocomplete className="mt-8 mb-16" multiple freeSolo options={options} value={value} onChange={(event, newValue) => {
                onChange(newValue);
            }} renderInput={(params) => (<TextField {...params} placeholder="Select multiple tags" label="Tags" variant="outlined" InputLabelProps={{
                    shrink: true
                }} error={!!errors.Autocomplete} helperText={errors?.Autocomplete?.message} onBlur={onBlur} inputRef={ref}/>)}/>)}/>
				</div>

				<div className="mt-48 mb-16">
					<Typography className="mb-24 font-medium text-14">DateTimePicker</Typography>

					<Controller name="DateTimePicker" control={control} render={({ field: { onChange, value } }) => (<DateTimePicker value={new Date(value)} onChange={onChange} slotProps={{
                textField: {
                    id: 'birthday',
                    label: 'Birthday',
                    InputLabelProps: {
                        shrink: true
                    },
                    fullWidth: true,
                    variant: 'outlined',
                    error: !!errors.DateTimePicker,
                    helperText: errors?.DateTimePicker?.message
                },
                inputAdornment: {
                    position: 'start',
                    children: <FuseSvgIcon size={20}>heroicons-solid:cake</FuseSvgIcon>
                }
            }}/>)}/>
				</div>

				<div className="flex my-48 items-center">
					<Button className="mx-8" variant="contained" color="secondary" type="submit" disabled={_.isEmpty(dirtyFields) || !isValid}>
						Submit
					</Button>

					<Button className="mx-8" type="button" onClick={() => {
            reset(defaultValues);
        }}>
						Reset Form
					</Button>
				</div>
			</form>

			<div className="w-1/2 my-48 p-24">
				<div className="mb-12">
					<Typography>Is Valid: {isValid ? 'true' : 'false'}</Typography>
				</div>

				<div className="mb-12">
					<Typography>Form data</Typography>
				</div>

				<div className="mb-12">
					<pre className="language-js p-24 w-400">{JSON.stringify(data, null, 2)}</pre>
				</div>

				<div className="mb-12">
					<Typography>Touched fields</Typography>

					<pre className="language-js p-24 w-400">{JSON.stringify(touchedFields, null, 2)}</pre>
				</div>

				<div className="mb-12">
					<Typography className="mt-16 font-medium text-12 italic" color="text.secondary">
						Render Count: {renderCount}
					</Typography>
				</div>
			</div>
		</div>);
}
export default SimpleFormExample;
`;let S=0;const O=[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],C={Native:"",TextField:"",Select:"",Autocomplete:[],Checkbox:!1,Switch:!1,RadioGroup:"",DateTimePicker:""},J=m.object({TextField:m.string().nonempty("You must enter a value"),Native:m.string().nonempty("You must enter a value"),Select:m.string().nonempty("You must select a value").refine(o=>["20","30"].includes(o),"Select 20 or 30."),Checkbox:m.boolean().refine(o=>o===!0,"You must check."),Switch:m.boolean().refine(o=>o===!0,"You must turn it on."),RadioGroup:m.string().refine(o=>o==="female","You must select female."),Autocomplete:m.array(m.string()).min(2,"Select at least two."),DateTimePicker:m.string().refine(o=>o===null||o.trim().length>0,"You must select a date")});function K(){var F;const{handleSubmit:o,register:w,reset:R,control:d,watch:I,formState:P}=z({defaultValues:C,mode:"all",resolver:A(J)}),{isValid:N,dirtyFields:L,errors:r,touchedFields:M}=P;S+=1;const B=I();return t("div",{className:"flex w-full max-w-screen-md justify-start items-start",children:[t("form",{className:"w-1/2",onSubmit:o(l=>console.info(l)),children:[t("div",{className:"mt-48 mb-16",children:[e(i,{className:"mb-24 font-medium text-14",children:"Native Input:"}),e("input",{className:D("border-1 outline-none rounded-8 p-8",!!r.Native&&"border-red"),...w("Native"),required:!0}),!!r.Native&&e(i,{className:"px-4 py-8 font-medium text-14",color:"error",children:(F=r==null?void 0:r.Native)==null?void 0:F.message})]}),e("div",{className:"mt-48 mb-16",children:e(u,{name:"Checkbox",control:d,render:({field:{onChange:l,value:a,onBlur:n,ref:p}})=>{var s;return t(h,{error:!!r.Checkbox,required:!0,children:[e(f,{className:"font-medium text-14",component:"legend",children:"MUI Checkbox"}),e(v,{label:"I agree",control:e(q,{checked:a,onBlur:n,onChange:c=>l(c.target.checked),inputRef:p,required:!0})}),e(b,{children:(s=r==null?void 0:r.Checkbox)==null?void 0:s.message})]})}})}),e("div",{className:"mt-48 mb-16",children:e(u,{render:({field:l})=>{var a;return t(h,{error:!!r.RadioGroup,required:!0,children:[e(f,{className:"font-medium text-14",component:"legend",children:"Radio Group"}),t(G,{...l,"aria-label":"gender",name:"gender1",children:[e(v,{value:"female",control:e(y,{}),label:"Female"}),e(v,{value:"male",control:e(y,{}),label:"Male"})]}),e(b,{children:(a=r==null?void 0:r.RadioGroup)==null?void 0:a.message})]})},name:"RadioGroup",control:d})}),e("div",{className:"mt-48 mb-16",children:e(u,{render:({field:l})=>{var a;return e(T,{...l,label:"MUI TextField",variant:"outlined",error:!!r.TextField,helperText:(a=r==null?void 0:r.TextField)==null?void 0:a.message,required:!0,fullWidth:!0})},name:"TextField",control:d})}),e("div",{className:"mt-48 mb-16",children:e(u,{render:({field:l})=>{var a;return t(h,{error:!!r.Select,required:!0,fullWidth:!0,children:[e(f,{className:"font-medium text-14",component:"legend",children:"MUI Select"}),t(V,{...l,variant:"outlined",fullWidth:!0,children:[e(g,{value:"10",children:"Ten (10)"}),e(g,{value:"20",children:"Twenty (20)"}),e(g,{value:"30",children:"Thirty (30)"})]}),e(b,{children:(a=r==null?void 0:r.Select)==null?void 0:a.message})]})},name:"Select",control:d})}),e("div",{className:"mt-48 mb-16",children:e(u,{name:"Switch",control:d,render:({field:{onChange:l,value:a,ref:n,onBlur:p}})=>{var s;return t(h,{required:!0,error:!!r.Switch,children:[e(f,{className:"font-medium text-14",component:"legend",children:"MUI Switch"}),e(Y,{checked:a,onBlur:p,onChange:c=>l(c.target.checked),inputRef:n,required:!0}),e(b,{children:(s=r==null?void 0:r.Switch)==null?void 0:s.message})]})}})}),t("div",{className:"mt-48 mb-16",children:[e(i,{className:"mb-24 font-medium text-14",children:"Autocomplete"}),e(u,{name:"Autocomplete",control:d,defaultValue:[],render:({field:{onChange:l,value:a,onBlur:n,ref:p}})=>e(H,{className:"mt-8 mb-16",multiple:!0,freeSolo:!0,options:O,value:a,onChange:(s,c)=>{l(c)},renderInput:s=>{var c;return e(T,{...s,placeholder:"Select multiple tags",label:"Tags",variant:"outlined",InputLabelProps:{shrink:!0},error:!!r.Autocomplete,helperText:(c=r==null?void 0:r.Autocomplete)==null?void 0:c.message,onBlur:n,inputRef:p})}})})]}),t("div",{className:"mt-48 mb-16",children:[e(i,{className:"mb-24 font-medium text-14",children:"DateTimePicker"}),e(u,{name:"DateTimePicker",control:d,render:({field:{onChange:l,value:a}})=>{var n;return e(j,{value:new Date(a),onChange:l,slotProps:{textField:{id:"birthday",label:"Birthday",InputLabelProps:{shrink:!0},fullWidth:!0,variant:"outlined",error:!!r.DateTimePicker,helperText:(n=r==null?void 0:r.DateTimePicker)==null?void 0:n.message},inputAdornment:{position:"start",children:e(k,{size:20,children:"heroicons-solid:cake"})}}})}})]}),t("div",{className:"flex my-48 items-center",children:[e(x,{className:"mx-8",variant:"contained",color:"secondary",type:"submit",disabled:E.isEmpty(L)||!N,children:"Submit"}),e(x,{className:"mx-8",type:"button",onClick:()=>{R(C)},children:"Reset Form"})]})]}),t("div",{className:"w-1/2 my-48 p-24",children:[e("div",{className:"mb-12",children:t(i,{children:["Is Valid: ",N?"true":"false"]})}),e("div",{className:"mb-12",children:e(i,{children:"Form data"})}),e("div",{className:"mb-12",children:e("pre",{className:"language-js p-24 w-400",children:JSON.stringify(B,null,2)})}),t("div",{className:"mb-12",children:[e(i,{children:"Touched fields"}),e("pre",{className:"language-js p-24 w-400",children:JSON.stringify(M,null,2)})]}),e("div",{className:"mb-12",children:t(i,{className:"mt-16 font-medium text-12 italic",color:"text.secondary",children:["Render Count: ",S]})})]})]})}function Z(){return t(U,{children:[t("div",{className:"flex w-full items-center justify-between mb-24",children:[e(i,{variant:"h4",children:"React Hook Form"}),e(x,{variant:"contained",color:"secondary",component:"a",href:"http://react-hook-form.com",target:"_blank",role:"button",startIcon:e(k,{children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(i,{className:"mb-16",component:"p",children:"Performant, flexible and extensible forms with easy to use validation."}),e("hr",{}),e(i,{className:"text-16 mt-32 mb-16",component:"h4",children:"Example usage with Material-UI elements and form validation"}),e(W,{className:"mb-64",component:K,raw:_}),e(i,{className:"text-32 mt-32 mb-8",component:"h2",children:"Examples"}),t("ul",{children:[e("li",{className:"mb-8",children:"src/app/main/sign-in/SignInPage.tsx"}),e("li",{className:"mb-8",children:"src/app/main/sign-up/SignUpPage.tsx"}),e("li",{className:"mb-8",children:"."}),e("li",{className:"mb-8",children:"."}),e("li",{className:"mb-8",children:"."})]})]})}export{Z as default};
