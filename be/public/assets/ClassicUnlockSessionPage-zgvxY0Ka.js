import{ad as n,ae as x,j as e,P as w,d as l,T as o,af as i,ag as m,C as y,_ as b,a7 as N,ah as v}from"./index-cy1M6gwN.js";const j=n.object({name:n.string().nonempty("You must enter your name"),password:n.string().nonempty("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum.")}),d={name:"Brian Hughes",password:""};function F(){const{control:r,formState:u,handleSubmit:c,reset:h}=x({mode:"onChange",defaultValues:d,resolver:v(j)}),{isValid:f,dirtyFields:p,errors:s}=u;function g(){h(d)}return e("div",{className:"flex min-w-0 flex-auto flex-col items-center sm:justify-center",children:e(w,{className:"min-h-full w-full rounded-0 px-16 py-32 sm:min-h-auto sm:w-auto sm:rounded-2xl sm:p-48 sm:shadow",children:l("div",{className:"mx-auto w-full max-w-320 sm:mx-0 sm:w-320",children:[e("img",{className:"w-48",src:"assets/images/logo/logo.png",alt:"logo"}),e(o,{className:"mt-32 text-4xl font-extrabold leading-tight tracking-tight",children:"Unlock your session"}),e(o,{className:"font-medium",children:"Your session is locked due to inactivity"}),l("form",{name:"registerForm",noValidate:!0,className:"mt-32 flex w-full flex-col justify-center",onSubmit:c(g),children:[e(i,{name:"name",control:r,render:({field:t})=>{var a;return e(m,{...t,className:"mb-24",label:"Full name",autoFocus:!0,type:"name",error:!!s.name,helperText:(a=s==null?void 0:s.name)==null?void 0:a.message,variant:"outlined",fullWidth:!0,disabled:!0})}}),e(i,{name:"password",control:r,render:({field:t})=>{var a;return e(m,{...t,className:"mb-24",label:"Password",type:"password",error:!!s.password,helperText:(a=s==null?void 0:s.password)==null?void 0:a.message,variant:"outlined",required:!0,fullWidth:!0})}}),e(y,{variant:"contained",color:"secondary",className:" mt-4 w-full","aria-label":"Register",disabled:b.isEmpty(p)||!f,type:"submit",size:"large",children:"Unlock your session"}),l(o,{className:"mt-32 text-md font-medium",color:"text.secondary",children:[e("span",{children:"I'm not"}),e(N,{className:"ml-4",to:"/sign-in",children:"Brian Hughes"})]})]})]})})})}export{F as default};
