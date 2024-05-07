import{a3 as h,d as s,j as a,T as d,J as m,C as u,bH as g,F as r,r as x,_ as f,a7 as y,b2 as b,x as N,a0 as v,i as I,b5 as k,P as w,c7 as C,bb as F}from"./index-cy1M6gwN.js";import{D as P}from"./DataTable-1oGts98m.js";import{d as T,e as z}from"./ECommerceApi-xdFNx-hj.js";import"./ArrowDownward-rKU5bwaL.js";import"./ArrowRight-DpEFcT9C.js";import"./ChevronRight-dN6hiQoq.js";import"./Close-3McPGxEf.js";import"./MoreHoriz-qBYFqucC.js";import"./Edit-7SYRS06s.js";import"./ExpandMore-piUiZbDG.js";import"./LastPage-E-Ysahzn.js";import"./TableCell-8frVmu-J.js";import"./MoreVert-mQ2kCqbl.js";import"./Save-8fQlLibY.js";import"./Search-UirgntIS.js";import"./VisibilityOff-dz6Hkws8.js";import"./Skeleton-13Q7Azvm.js";import"./TableRow-bMieAf8R.js";import"./AlertTitle-h_Tmr_bg.js";import"./LinearProgress-WJI90r2m.js";import"./Pagination-zljZgFZ0.js";import"./LastPage-YbLXZH-k.js";import"./CircularProgress-zvc8Fxj-.js";function M(){const l=h(o=>o.breakpoints.down("lg"));return s("div",{className:"flex space-y-12 sm:space-y-0 flex-1 w-full items-center justify-between py-8 sm:py-16 px-16 md:px-24",children:[a(m.span,{initial:{x:-20},animate:{x:0,transition:{delay:.2}},children:a(d,{className:"text-24 md:text-32 font-extrabold tracking-tight",children:"Products"})}),a("div",{className:"flex flex-1 items-center justify-end space-x-8",children:a(m.div,{className:"flex flex-grow-0",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:s(u,{className:"",variant:"contained",color:"secondary",component:g,to:"/apps/e-commerce/products/new",size:l?"small":"medium",children:[a(r,{size:20,children:"heroicons-outline:plus"}),a("span",{className:"mx-4 sm:mx-8",children:"Add"})]})})})]})}function S(){const{data:l,isLoading:o}=T(),[c]=z(),p=x.useMemo(()=>[{accessorFn:e=>e.featuredImageId,id:"featuredImageId",header:"",enableColumnFilter:!1,enableColumnDragging:!1,size:64,enableSorting:!1,Cell:({row:e})=>{var i,t,n;return a("div",{className:"flex items-center justify-center",children:((t=(i=e.original)==null?void 0:i.images)==null?void 0:t.length)>0&&e.original.featuredImageId?a("img",{className:"w-full max-h-40 max-w-40 block rounded",src:(n=f.find(e.original.images,{id:e.original.featuredImageId}))==null?void 0:n.url,alt:e.original.name}):a("img",{className:"w-full max-h-40 max-w-40 block rounded",src:"assets/images/apps/ecommerce/product-image-placeholder.png",alt:e.original.name})})}},{accessorKey:"name",header:"Name",Cell:({row:e})=>a(d,{component:y,to:`/apps/e-commerce/products/${e.original.id}/${e.original.handle}`,className:"underline",color:"secondary",role:"button",children:e.original.name})},{accessorKey:"categories",header:"Category",accessorFn:e=>a("div",{className:"flex flex-wrap space-x-2",children:e.categories.map(i=>a(b,{className:"text-11",size:"small",color:"default",label:i},i))})},{accessorKey:"priceTaxIncl",header:"Price",accessorFn:e=>`$${e.priceTaxIncl}`},{accessorKey:"quantity",header:"Quantity",accessorFn:e=>s("div",{className:"flex items-center space-x-8",children:[a("span",{children:e.quantity}),a("i",{className:N("inline-block w-8 h-8 rounded",e.quantity<=5&&"bg-red",e.quantity>5&&e.quantity<=25&&"bg-orange",e.quantity>25&&"bg-green")})]})},{accessorKey:"active",header:"Active",accessorFn:e=>a("div",{className:"flex items-center",children:e.active?a(r,{className:"text-green",size:20,children:"heroicons-outline:check-circle"}):a(r,{className:"text-red",size:20,children:"heroicons-outline:minus-circle"})})}],[]);return o?a(v,{}):a(w,{className:"flex flex-col flex-auto shadow-3 rounded-t-16 overflow-hidden rounded-b-0 w-full h-full",elevation:0,children:a(P,{data:l,columns:p,renderRowActionMenuItems:({closeMenu:e,row:i,table:t})=>[s(k,{onClick:()=>{c([i.original.id]),e(),t.resetRowSelection()},children:[a(I,{children:a(r,{children:"heroicons-outline:trash"})}),"Delete"]},0)],renderTopToolbarCustomActions:({table:e})=>{const{rowSelection:i}=e.getState();return Object.keys(i).length===0?null:s(u,{variant:"contained",size:"small",onClick:()=>{const t=e.getSelectedRowModel().rows;c(t.map(n=>n.original.id)),e.resetRowSelection()},className:"flex shrink min-w-40 ltr:mr-8 rtl:ml-8",color:"secondary",children:[a(r,{size:16,children:"heroicons-outline:trash"}),a("span",{className:"hidden sm:flex mx-8",children:"Delete selected items"})]})}})})}function ae(){return s(F,{children:[a(C,{styles:()=>({"#root":{maxHeight:"100vh"}})}),s("div",{className:"w-full h-full container flex flex-col",children:[a(M,{}),a(S,{})]})]})}export{ae as default};