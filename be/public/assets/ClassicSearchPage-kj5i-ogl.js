import{r as c,j as e,d as a,J as r,T as l,aj as d,ak as h,a2 as m,al as p,F as u,P as x}from"./index-cy1M6gwN.js";import{e as f}from"./exampleSearchResponse-8ufBcrqA.js";import{P as v}from"./Pagination-zljZgFZ0.js";import"./LastPage-YbLXZH-k.js";function P(){const[t,n]=c.useState([]);c.useEffect(()=>{setTimeout(()=>{n(f)},100)},[]);const o={show:{transition:{staggerChildren:.04}}},i={hidden:{opacity:0,y:40},show:{opacity:1,y:0}};return e(m,{header:e("div",{className:"flex w-full max-w-md flex-1 items-center p-24 sm:p-32",children:a(x,{className:"flex h-44 w-full items-center rounded-16 px-16 shadow",children:[e(p,{placeholder:"Search...",disableUnderline:!0,fullWidth:!0,inputProps:{"aria-label":"Search"}}),e(u,{color:"action",children:"heroicons-outline:search"})]})}),content:a("div",{className:"flex h-full w-full max-w-md flex-auto flex-col p-24 pt-0 sm:p-32 sm:pt-0",children:[e("div",{className:"flex flex-1 flex-col",children:t.length>0&&a(r.div,{variants:o,initial:"hidden",animate:"show",children:[e(r.div,{variants:i,children:a(l,{color:"text.secondary",className:"mb-24 text-13",children:[t.length," results"]})}),t.map(s=>a(r.div,{variants:i,className:"mb-28",children:[e(l,{className:"cursor-pointer text-18",sx:{color:d[800]},children:s.title}),e(l,{sx:{color:h[800]},children:s.url}),e(l,{className:"text-13",children:s.excerpt})]},s.id))]})}),e("div",{className:"mt-48 flex justify-center",children:e(v,{count:10,color:"secondary"})})]})})}export{P as default};
