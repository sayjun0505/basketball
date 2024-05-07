import{ad as i,ae as g,j as e,P as x,d as s,T as l,af as p,ag as w,C as y,_ as b,a7 as N,ah as v}from"./index-cy1M6gwN.js";const F=i.object({email:i.string().email("You must enter a valid email").nonempty("You must enter an email")}),m={email:""};function S(){const{control:n,formState:r,handleSubmit:o,reset:d}=g({mode:"onChange",defaultValues:m,resolver:v(F)}),{isValid:c,dirtyFields:u,errors:a}=r;function f(){d(m)}return e("div",{className:"flex min-w-0 flex-auto flex-col items-center sm:justify-center",children:e(x,{className:"min-h-full w-full rounded-0 px-16 py-32 sm:min-h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow",children:s("div",{className:"mx-auto w-full max-w-320 sm:mx-0 sm:w-320",children:[e("img",{className:"w-48",src:"assets/images/logo/logo.png",alt:"logo"}),e(l,{className:"mt-32 text-4xl font-extrabold leading-tight tracking-tight",children:"Forgot password?"}),e("div",{className:"mt-2 flex items-baseline font-medium",children:e(l,{children:"Fill the form to reset your password"})}),s("form",{name:"registerForm",noValidate:!0,className:"mt-32 flex w-full flex-col justify-center",onSubmit:o(f),children:[e(p,{name:"email",control:n,render:({field:h})=>{var t;return e(w,{...h,className:"mb-24",label:"Email",type:"email",error:!!a.email,helperText:(t=a==null?void 0:a.email)==null?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(y,{variant:"contained",color:"secondary",className:" mt-4 w-full","aria-label":"Register",disabled:b.isEmpty(u)||!c,type:"submit",size:"large",children:"Send reset link"}),s(l,{className:"mt-32 text-md font-medium",color:"text.secondary",children:[e("span",{children:"Return to"}),e(N,{className:"ml-4",to:"/sign-in",children:"sign in"})]})]})]})})})}export{S as default};