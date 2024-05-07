import{ad as n,ae as N,j as e,d as a,H as c,ai as j,B as r,T as m,a7 as h,af as d,ag as x,bf as k,bh as F,bB as S,C as i,_ as C,F as u,P as z,ah as B}from"./index-cy1M6gwN.js";const P=n.object({email:n.string().email("You must enter a valid email").nonempty("You must enter an email"),password:n.string().min(8,"Password is too short - must be at least 8 chars.").nonempty("Please enter your password.")}),f={email:"",password:"",remember:!0};function T(){const{control:o,formState:g,handleSubmit:p,reset:v}=N({mode:"onChange",defaultValues:f,resolver:B(P)}),{isValid:w,dirtyFields:b,errors:t}=g;function y(){v(f)}return e("div",{className:"flex min-w-0 flex-auto flex-col items-center sm:justify-center md:p-32",children:a(z,{className:"flex min-h-full w-full overflow-hidden rounded-0 sm:min-h-auto sm:w-auto sm:rounded-2xl sm:shadow md:w-full md:max-w-6xl",children:[a(c,{className:"relative hidden h-full flex-auto items-center justify-center overflow-hidden p-64 md:flex lg:px-112",sx:{backgroundColor:"primary.main"},children:[e("svg",{className:"pointer-events-none absolute inset-0",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:a(c,{component:"g",sx:{color:"primary.light"},className:"opacity-20",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[e("circle",{r:"234",cx:"196",cy:"23"}),e("circle",{r:"234",cx:"790",cy:"491"})]})}),a(c,{component:"svg",className:"absolute -right-64 -top-64 opacity-20",sx:{color:"primary.light"},viewBox:"0 0 220 192",width:"220px",height:"192px",fill:"none",children:[e("defs",{children:e("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:e("rect",{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"})})}),e("rect",{width:"220",height:"192",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})]}),a("div",{className:"relative z-10 w-full max-w-2xl",children:[a("div",{className:"text-7xl font-bold leading-none text-gray-100",children:[e("div",{children:"Welcome to"}),e("div",{children:"our Basketball team"})]}),e("div",{className:"mt-24 text-lg leading-6 tracking-tight text-gray-400",children:"Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today."}),a("div",{className:"mt-32 flex items-center",children:[a(j,{sx:{"& .MuiAvatar-root":{borderColor:"primary.main"}},children:[e(r,{src:"assets/images/avatars/female-18.jpg"}),e(r,{src:"assets/images/avatars/female-11.jpg"}),e(r,{src:"assets/images/avatars/male-09.jpg"}),e(r,{src:"assets/images/avatars/male-16.jpg"})]}),e("div",{className:"ml-16 font-medium tracking-tight text-gray-400",children:"More than 17k players joined us, it's your turn"})]})]})]}),e("div",{className:"w-full px-16 py-32 ltr:border-l-1 rtl:border-r-1 sm:w-auto sm:p-48 md:p-64",children:a("div",{className:"mx-auto w-full max-w-320 sm:mx-0 sm:w-320",children:[e("img",{className:"w-48",src:"assets/images/logo/logo.png",alt:"logo"}),e(m,{className:"mt-32 text-4xl font-extrabold leading-tight tracking-tight",children:"Sign in"}),a("div",{className:"mt-2 flex items-baseline font-medium",children:[e(m,{children:"Don't have an account?"}),e(h,{className:"ml-4",to:"/sign-up",children:"Sign up"})]}),a("form",{name:"loginForm",noValidate:!0,className:"mt-32 flex w-full flex-col justify-center",onSubmit:p(y),children:[e(d,{name:"email",control:o,render:({field:l})=>{var s;return e(x,{...l,className:"mb-24",label:"Email",autoFocus:!0,type:"email",error:!!t.email,helperText:(s=t==null?void 0:t.email)==null?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(d,{name:"password",control:o,render:({field:l})=>{var s;return e(x,{...l,className:"mb-24",label:"Password",type:"password",error:!!t.password,helperText:(s=t==null?void 0:t.password)==null?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),a("div",{className:"flex flex-col items-center justify-center sm:flex-row sm:justify-between",children:[e(d,{name:"remember",control:o,render:({field:l})=>e(k,{children:e(F,{label:"Remember me",control:e(S,{size:"small",...l})})})}),e(h,{className:"text-md font-medium",to:"/pages/auth/forgot-password",children:"Forgot password?"})]}),e(i,{variant:"contained",color:"secondary",className:" mt-16 w-full","aria-label":"Sign in",disabled:C.isEmpty(b)||!w,type:"submit",size:"large",children:"Sign in"}),a("div",{className:"mt-32 flex items-center",children:[e("div",{className:"mt-px flex-auto border-t"}),e(m,{className:"mx-8",color:"text.secondary",children:"Or continue with"}),e("div",{className:"mt-px flex-auto border-t"})]}),a("div",{className:"mt-32 flex items-center space-x-16",children:[e(i,{variant:"outlined",className:"flex-auto",children:e(u,{size:20,color:"action",children:"feather:facebook"})}),e(i,{variant:"outlined",className:"flex-auto",children:e(u,{size:20,color:"action",children:"feather:twitter"})}),e(i,{variant:"outlined",className:"flex-auto",children:e(u,{size:20,color:"action",children:"feather:github"})})]})]})]})})]})})}export{T as default};
