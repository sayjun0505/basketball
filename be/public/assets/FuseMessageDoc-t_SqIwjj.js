import{u as s,d as n,j as e,T as t,dz as r,bE as o,C as i,bx as c}from"./index-3voNJrtd.js";function l(){const a=s();return n(c,{children:[e(t,{variant:"h4",className:"mb-40 font-700",children:"FuseMessage"}),n(t,{className:"mb-16",component:"p",children:[e("code",{children:"FuseMessage"})," is a simple snackbar trigger for easily showing messages via redux action. It should be located in the theme layouts."]}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Usage"}),e(t,{className:"mb-16",component:"p",children:"You can show messages anywhere with dispatching the action showMessage, it is using Material-UI's snackbar so you can pass the props in the object:"}),e(r,{component:"pre",className:"language-jsx",children:`
                                    <Button 
                                        onClick={()=> dispatch(
                                            showMessage({
                                                message     : 'Hi, how are you?',//text or html
                                                autoHideDuration: 6000,//ms
                                                anchorOrigin: {
                                                    vertical  : 'top',//top bottom
                                                    horizontal: 'right'//left center right
                                                },
                                                variant: 'success'//success error info warning null
                                            }))}
                                    >
                                        Top - Right
                                    </Button>
                            `}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Example"}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Position"}),n("div",{children:[e(i,{onClick:()=>a(o({message:"Hi, how are you?",anchorOrigin:{vertical:"top",horizontal:"right"}})),children:"Top - Right"}),e(i,{onClick:()=>a(o({message:"Hi, how are you?",anchorOrigin:{vertical:"top",horizontal:"center"}})),children:"Top-Center"}),e(i,{onClick:()=>a(o({message:"Hi, how are you?",anchorOrigin:{vertical:"top",horizontal:"left"}})),children:"Top-Left"}),e(i,{onClick:()=>a(o({message:"Hi, how are you?",anchorOrigin:{vertical:"bottom",horizontal:"right"}})),children:"Bottom-Right"}),e(i,{onClick:()=>a(o({message:"Hi, how are you?",anchorOrigin:{vertical:"bottom",horizontal:"center"}})),children:"Bottom-Center"}),e(i,{onClick:()=>a(o({message:"Hi, how are you?",anchorOrigin:{vertical:"bottom",horizontal:"left"}})),children:"Bottom-Left"})]}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Variants"}),n("div",{children:[e(i,{onClick:()=>a(o({message:"Hi, how are you?"})),children:"Default"}),e(i,{onClick:()=>a(o({message:"Hi, how are you?",variant:"success"})),children:"Success"}),e(i,{onClick:()=>a(o({message:"Hi, how are you?",variant:"warning"})),children:"Warning"}),e(i,{onClick:()=>a(o({message:"Hi, how are you?",variant:"error"})),children:"Error"}),e(i,{onClick:()=>a(o({message:"Hi, how are you?",variant:"info"})),children:"Info"})]})]})}export{l as default};
