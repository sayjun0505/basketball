import{ad as i,ae as w,d as a,H as n,j as e,ai as v,T as o,af as m,ag as d,C as b,_ as N,a7 as k,P as j,ah as B,B as r}from"./index-cy1M6gwN.js";const C=i.object({name:i.string().nonempty("You must enter your name"),password:i.string().nonempty("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum.")}),h={name:"Brian Hughes",password:""};function S(){const{control:c,formState:u,handleSubmit:g,reset:p}=w({mode:"onChange",defaultValues:h,resolver:B(C)}),{isValid:x,dirtyFields:f,errors:s}=u;function y(){p(h)}return a("div",{className:"flex min-w-0 flex-auto flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start",children:[a(n,{className:"relative hidden h-full flex-auto items-center justify-center overflow-hidden p-64 md:flex lg:px-112",sx:{backgroundColor:"primary.main"},children:[e("svg",{className:"pointer-events-none absolute inset-0",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:a(n,{component:"g",sx:{color:"primary.light"},className:"opacity-20",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[e("circle",{r:"234",cx:"196",cy:"23"}),e("circle",{r:"234",cx:"790",cy:"491"})]})}),a(n,{component:"svg",className:"absolute -right-64 -top-64 opacity-20",sx:{color:"primary.light"},viewBox:"0 0 220 192",width:"220px",height:"192px",fill:"none",children:[e("defs",{children:e("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:e("rect",{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"})})}),e("rect",{width:"220",height:"192",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})]}),a("div",{className:"relative z-10 w-full max-w-2xl",children:[a("div",{className:"text-7xl font-bold leading-none text-gray-100",children:[e("div",{children:"Welcome to"}),e("div",{children:"our Basketball team"})]}),e("div",{className:"mt-24 text-lg leading-6 tracking-tight text-gray-400",children:"This app helps to train for all players. They can contact with his coach real-time and evaluate his skills."}),a("div",{className:"mt-32 flex items-center",children:[a(v,{sx:{"& .MuiAvatar-root":{borderColor:"primary.main"}},children:[e(r,{src:"assets/images/avatars/female-18.jpg"}),e(r,{src:"assets/images/avatars/female-11.jpg"}),e(r,{src:"assets/images/avatars/male-09.jpg"}),e(r,{src:"assets/images/avatars/male-16.jpg"})]}),e("div",{className:"ml-16 font-medium tracking-tight text-gray-400",children:"More than 17k players joined us, it's your turn"})]})]})]}),e(j,{className:"h-full w-full px-16 py-32 ltr:border-l-1 rtl:border-r-1 sm:h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow md:flex md:h-full md:rounded-none md:p-64 md:pt-96 md:shadow-none",children:a("div",{className:"mx-auto w-full max-w-320 sm:mx-0 sm:w-320",children:[e("img",{className:"w-48",src:"assets/images/logo/logo.png",alt:"logo"}),e(o,{className:"mt-32 text-4xl font-extrabold leading-tight tracking-tight",children:"Unlock your session"}),e(o,{className:"font-medium",children:"Your session is locked due to inactivity"}),a("form",{name:"registerForm",noValidate:!0,className:"mt-32 flex w-full flex-col justify-center",onSubmit:g(y),children:[e(m,{name:"name",control:c,render:({field:l})=>{var t;return e(d,{...l,className:"mb-24",label:"Full name",autoFocus:!0,type:"name",error:!!s.name,helperText:(t=s==null?void 0:s.name)==null?void 0:t.message,variant:"outlined",fullWidth:!0,disabled:!0})}}),e(m,{name:"password",control:c,render:({field:l})=>{var t;return e(d,{...l,className:"mb-24",label:"Password",type:"password",error:!!s.password,helperText:(t=s==null?void 0:s.password)==null?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(b,{variant:"contained",color:"secondary",className:" mt-4 w-full","aria-label":"Register",disabled:N.isEmpty(f)||!x,type:"submit",size:"large",children:"Unlock your session"}),a(o,{className:"mt-32 text-md font-medium",color:"text.secondary",children:[e("span",{children:"I'm not"}),e(k,{className:"ml-4",to:"/sign-in",children:"Brian Hughes"})]})]})]})})]})}export{S as default};