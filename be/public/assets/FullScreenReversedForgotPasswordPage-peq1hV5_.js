import{aF as n,aG as f,d as a,H as s,j as e,aK as v,T as r,aH as y,aI as w,C as b,_ as N,a7 as j,P as k,aJ as F,B as l}from"./index-3voNJrtd.js";const C=n.object({email:n.string().email("You must enter a valid email").nonempty("You must enter an email")}),o={email:""};function B(){const{control:m,formState:c,handleSubmit:d,reset:h}=f({mode:"onChange",defaultValues:o,resolver:F(C)}),{isValid:u,dirtyFields:g,errors:t}=c;function x(){h(o)}return a("div",{className:"flex min-w-0 flex-auto flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start",children:[a(s,{className:"relative hidden h-full flex-auto items-center justify-center overflow-hidden p-64 md:flex lg:px-112",sx:{backgroundColor:"primary.main"},children:[e("svg",{className:"pointer-events-none absolute inset-0",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:a(s,{component:"g",sx:{color:"primary.light"},className:"opacity-20",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[e("circle",{r:"234",cx:"196",cy:"23"}),e("circle",{r:"234",cx:"790",cy:"491"})]})}),a(s,{component:"svg",className:"absolute -right-64 -top-64 opacity-20",sx:{color:"primary.light"},viewBox:"0 0 220 192",width:"220px",height:"192px",fill:"none",children:[e("defs",{children:e("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:e("rect",{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"})})}),e("rect",{width:"220",height:"192",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})]}),a("div",{className:"relative z-10 w-full max-w-2xl",children:[a("div",{className:"text-7xl font-bold leading-none text-gray-100",children:[e("div",{children:"Welcome to"}),e("div",{children:"our Basketball team"})]}),e("div",{className:"mt-24 text-lg leading-6 tracking-tight text-gray-400",children:"This app helps to train for all players. They can contact with his coach real-time and evaluate his skills."}),a("div",{className:"mt-32 flex items-center",children:[a(v,{sx:{"& .MuiAvatar-root":{borderColor:"primary.main"}},children:[e(l,{src:"assets/images/avatars/female-18.jpg"}),e(l,{src:"assets/images/avatars/female-11.jpg"}),e(l,{src:"assets/images/avatars/male-09.jpg"}),e(l,{src:"assets/images/avatars/male-16.jpg"})]}),e("div",{className:"ml-16 font-medium tracking-tight text-gray-400",children:"More than 17k players joined us, it's your turn"})]})]})]}),e(k,{className:"h-full w-full px-16 py-32 ltr:border-l-1 rtl:border-r-1 sm:h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow md:flex md:h-full md:rounded-none md:p-64 md:pt-96 md:shadow-none",children:a("div",{className:"mx-auto w-full max-w-320 sm:mx-0 sm:w-320",children:[e("img",{className:"w-48",src:"assets/images/logo/logo.png",alt:"logo"}),e(r,{className:"mt-32 text-4xl font-extrabold leading-tight tracking-tight",children:"Forgot password?"}),e("div",{className:"mt-2 flex items-baseline font-medium",children:e(r,{children:"Fill the form to reset your password"})}),a("form",{name:"registerForm",noValidate:!0,className:"mt-32 flex w-full flex-col justify-center",onSubmit:d(x),children:[e(y,{name:"email",control:m,render:({field:p})=>{var i;return e(w,{...p,className:"mb-24",label:"Email",type:"email",error:!!t.email,helperText:(i=t==null?void 0:t.email)==null?void 0:i.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(b,{variant:"contained",color:"secondary",className:" mt-4 w-full","aria-label":"Register",disabled:N.isEmpty(g)||!u,type:"submit",size:"large",children:"Send reset link"}),a(r,{className:"mt-32 text-md font-medium",color:"text.secondary",children:[e("span",{children:"Return to"}),e(j,{className:"ml-4",to:"/sign-in",children:"sign in"})]})]})]})})]})}export{B as default};
