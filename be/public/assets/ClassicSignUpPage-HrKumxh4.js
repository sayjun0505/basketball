import{ad as n,ae as w,j as a,P as b,d as i,T as m,a7 as x,af as o,ag as l,bf as y,bh as C,bB as N,cP as T,C as v,_ as P,ah as F}from"./index-cy1M6gwN.js";const S=n.object({name:n.string().nonempty("You must enter your name"),email:n.string().email("You must enter a valid email").nonempty("You must enter an email"),password:n.string().nonempty("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum."),passwordConfirm:n.string().nonempty("Password confirmation is required"),acceptTermsConditions:n.boolean().refine(r=>r===!0,"The terms and conditions must be accepted.")}).refine(r=>r.password===r.passwordConfirm,{message:"Passwords must match",path:["passwordConfirm"]}),d={name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1};function q(){const{control:r,formState:c,handleSubmit:u,reset:p}=w({mode:"onChange",defaultValues:d,resolver:F(S)}),{isValid:f,dirtyFields:h,errors:e}=c;function g(){p(d)}return a("div",{className:"flex min-w-0 flex-auto flex-col items-center sm:justify-center",children:a(b,{className:"min-h-full w-full rounded-0 px-16 py-32 sm:min-h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow",children:i("div",{className:"mx-auto w-full max-w-320 sm:mx-0 sm:w-320",children:[a("img",{className:"w-48",src:"assets/images/logo/logo.png",alt:"logo"}),a(m,{className:"mt-32 text-4xl font-extrabold leading-tight tracking-tight",children:"Sign up"}),i("div",{className:"mt-2 flex items-baseline font-medium",children:[a(m,{children:"Already have an account?"}),a(x,{className:"ml-4",to:"/sign-in",children:"Sign in"})]}),i("form",{name:"registerForm",noValidate:!0,className:"mt-32 flex w-full flex-col justify-center",onSubmit:u(g),children:[a(o,{name:"name",control:r,render:({field:t})=>{var s;return a(l,{...t,className:"mb-24",label:"Name",autoFocus:!0,type:"name",error:!!e.name,helperText:(s=e==null?void 0:e.name)==null?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),a(o,{name:"email",control:r,render:({field:t})=>{var s;return a(l,{...t,className:"mb-24",label:"Email",type:"email",error:!!e.email,helperText:(s=e==null?void 0:e.email)==null?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),a(o,{name:"password",control:r,render:({field:t})=>{var s;return a(l,{...t,className:"mb-24",label:"Password",type:"password",error:!!e.password,helperText:(s=e==null?void 0:e.password)==null?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),a(o,{name:"passwordConfirm",control:r,render:({field:t})=>{var s;return a(l,{...t,className:"mb-24",label:"Password (Confirm)",type:"password",error:!!e.passwordConfirm,helperText:(s=e==null?void 0:e.passwordConfirm)==null?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0})}}),a(o,{name:"acceptTermsConditions",control:r,render:({field:t})=>{var s;return i(y,{className:"items-center",error:!!e.acceptTermsConditions,children:[a(C,{label:"I agree to the Terms of Service and Privacy Policy",control:a(N,{size:"small",...t})}),a(T,{children:(s=e==null?void 0:e.acceptTermsConditions)==null?void 0:s.message})]})}}),a(v,{variant:"contained",color:"secondary",className:" mt-24 w-full","aria-label":"Register",disabled:P.isEmpty(h)||!f,type:"submit",size:"large",children:"Create your free account"})]})]})})})}export{q as default};
