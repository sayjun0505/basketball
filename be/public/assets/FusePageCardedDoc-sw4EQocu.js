import{d as i,j as e,T as t,a7 as r,bb as n,dp as s}from"./index-cy1M6gwN.js";const l=[{id:"full-width",title:"Full Width Overview",type:"item",url:"/ui/page-layouts/carded/full-width/overview"},{id:"with-sidebars",title:"With Sidebars Overview",type:"item",url:"/ui/page-layouts/carded/with-sidebars/overview"}];function o(){return i(n,{children:[e(t,{variant:"h4",className:"mb-40 font-700",children:"FusePageCarded"}),i(t,{className:"mb-16",component:"p",children:[e("code",{children:"FusePageCarded"})," is the carded page layout component of the Fuse React."]}),e(t,{className:"mb-24",component:"p",children:"The component has layout areas to easily enter the contents of the app."}),e(s,{component:"pre",className:"language-jsx",children:`
           <FusePageCarded
                header={
                    Header
                }
                content={
                    Content
                }
                leftSidebarContent={
                    Left Sidebar Content
                }
                rightSidebarContent={
                    Right Sidebar Content
                }
                scroll="page"
            />
        `}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Demos"}),e("ul",{children:l.map(a=>e("li",{className:"mb-8",children:e(r,{to:a.url,children:a.title})},a.url))})]})}export{o as default};
