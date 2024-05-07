import{d as i,j as e,T as t,a7 as l,bx as s,dz as n}from"./index-3voNJrtd.js";const r=[{id:"full-width",title:"Full Width Overview",type:"item",url:"/ui/page-layouts/simple/full-width/overview"},{id:"with-sidebars",title:"With Sidebars Overview",type:"item",url:"/ui/page-layouts/simple/with-sidebars/overview"}];function h(){return i(s,{children:[e(t,{variant:"h4",className:"mb-40 font-700",children:"FusePageSimple"}),i(t,{className:"mb-16",component:"p",children:[e("code",{children:"FusePageSimple"})," is the simple page layout component of the Fuse React."]}),e(t,{className:"mb-24",component:"p",children:"The component has layout areas to easily enter the contents of the app."}),e(n,{component:"pre",className:"language-jsx",children:`
           <FusePageSimple
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
        `}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Demos"}),e("ul",{children:r.map(a=>e("li",{className:"mb-8",children:e(l,{to:a.url,children:a.title})},a.url))})]})}export{h as default};
