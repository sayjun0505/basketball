import{s as U,r as x,j as e,bA as F,d as r,T as a,bz as q,bu as v,F as m,B as E,aB as T,aC as C,aD as A,A as L,a7 as f,K as M,a3 as B,J as p,c7 as j,a0 as Q,C as _,bl as K,bm as N,bx as V}from"./index-3voNJrtd.js";import{T as b,a as D,b as o,c as g}from"./TableRow-pXSTL-kD.js";import{T as s}from"./TableCell-mDdYzQeM.js";import{d as k}from"./ExpandMore-XrZvfZqR.js";import{c as I}from"./index.modern-nrna5qwM.js";import{f as y}from"./ECommerceApi-sjiNbm9E.js";import{O as z}from"./OrdersStatus-c8w7hc0e.js";const G=U("div")(({theme:t})=>({"& table ":{"& th:first-of-type, & td:first-of-type":{paddingLeft:"0!important"},"& th:last-child, & td:last-child":{paddingRight:"0!important"}},"& .divider":{width:1,backgroundColor:t.palette.divider,height:144},"& .seller":{backgroundColor:t.palette.primary.dark,color:t.palette.getContrastText(t.palette.primary.dark),marginRight:-88,paddingRight:66,width:480,"& .divider":{backgroundColor:t.palette.getContrastText(t.palette.primary.dark),opacity:.5}}}));function J(t){var d;const{order:i}=t,l=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return e(G,{className:"grow shrink-0 p-0",children:i&&e(F,{className:"w-xl mx-auto shadow-0",children:r(q,{className:"p-88 print:p-0",children:[e(a,{color:"text.secondary",className:"mb-32",children:i.date}),r("div",{className:"flex justify-between",children:[r("div",{children:[e("table",{className:"mb-16",children:e("tbody",{children:r("tr",{children:[e("td",{className:"pb-4",children:e(a,{className:"font-light",variant:"h6",color:"text.secondary",children:"INVOICE"})}),e("td",{className:"pb-4 px-8",children:e(a,{className:"font-light",variant:"h6",color:"inherit",children:i.reference})})]})})}),e(a,{color:"text.secondary",children:`${i.customer.firstName} ${i.customer.lastName}`}),i.customer.invoiceAddress.address&&e(a,{color:"text.secondary",children:i.customer.invoiceAddress.address}),i.customer.phone&&e(a,{color:"text.secondary",children:i.customer.phone}),i.customer.email&&e(a,{color:"text.secondary",children:i.customer.email})]}),r("div",{className:"seller flex items-center p-16",children:[e("img",{className:"w-80",src:"assets/images/logo/logo.png",alt:"logo"}),e("div",{className:"divider mx-8 h-96"}),r("div",{className:"px-8",children:[e(a,{color:"inherit",children:"FUSE INC."}),e(a,{color:"inherit",children:"2810 Country Club Road Cranford, NJ 07016"}),e(a,{color:"inherit",children:"+66 123 455 87"}),e(a,{color:"inherit",children:"hello@fuseinc.com"}),e(a,{color:"inherit",children:"www.fuseinc.com"})]})]})]}),r("div",{className:"mt-64",children:[r(b,{className:"simple",children:[e(D,{children:r(o,{children:[e(s,{children:"PRODUCT"}),e(s,{children:"PRICE"}),e(s,{align:"right",children:"QUANTITY"}),e(s,{align:"right",children:"TOTAL"})]})}),e(g,{children:(d=i==null?void 0:i.products)==null?void 0:d.map(n=>r(o,{children:[e(s,{children:e(a,{variant:"subtitle1",children:n.name})}),e(s,{align:"right",children:n.price&&l.format(+n.price)}),e(s,{align:"right",children:n.quantity}),e(s,{align:"right",children:n.price&&n.quantity&&l.format(+n.price*n.quantity)})]},n.id))})]}),e(b,{className:"simple mt-32",children:r(g,{children:[r(o,{children:[e(s,{children:e(a,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:"SUBTOTAL"})}),e(s,{align:"right",children:e(a,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:l.format(+i.subtotal)})})]}),r(o,{children:[e(s,{children:e(a,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:"TAX"})}),e(s,{align:"right",children:e(a,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:l.format(+i.tax)})})]}),r(o,{children:[e(s,{children:e(a,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:"DISCOUNT"})}),e(s,{align:"right",children:e(a,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:l.format(+i.discount)})})]}),r(o,{children:[e(s,{children:e(a,{className:"font-light",variant:"h4",color:"text.secondary",children:"TOTAL"})}),e(s,{align:"right",children:e(a,{className:"font-light",variant:"h4",color:"text.secondary",children:l.format(+i.total)})})]})]})})]}),r("div",{className:"mt-96",children:[e(a,{className:"mb-24 print:mb-12",variant:"body1",children:"Please pay within 15 days. Thank you for your business."}),r("div",{className:"flex",children:[e("div",{className:"shrink-0",children:e("img",{className:"w-32",src:"assets/images/logo/logo.png",alt:"logo"})}),e(a,{className:"font-normal mb-64 px-24",variant:"caption",color:"text.secondary",children:"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros."})]})]})]})})})}const Z=x.memo(J),O="your_google_map_api_key";function P(t){const{text:i,lat:l,lng:d}=t;return e(L,{title:r("div",{children:[i,e("br",{}),l,", ",d]}),placement:"top",children:e(m,{className:"text-red",children:"heroicons-outline:location-marker"})})}function H(){const t=v(),{orderId:i}=t,{data:l,isError:d}=y(i,{skip:!i}),[n,h]=x.useState("shipping");return!d&&!l?null:r("div",{children:[r("div",{className:"pb-48",children:[r("div",{className:"pb-16 flex items-center",children:[e(m,{color:"action",children:"heroicons-outline:user-circle"}),e(a,{className:"h2 mx-12 font-medium",color:"text.secondary",children:"Customer"})]}),r("div",{className:"mb-24",children:[e("div",{className:"table-responsive mb-48",children:r("table",{className:"simple",children:[e("thead",{children:r("tr",{children:[e("th",{children:e(a,{className:"font-semibold",children:"Name"})}),e("th",{children:e(a,{className:"font-semibold",children:"Email"})}),e("th",{children:e(a,{className:"font-semibold",children:"Phone"})}),e("th",{children:e(a,{className:"font-semibold",children:"Company"})})]})}),e("tbody",{children:r("tr",{children:[e("td",{children:r("div",{className:"flex items-center",children:[e(E,{src:l.customer.avatar}),e(a,{className:"truncate mx-8",children:`${l.customer.firstName} ${l.customer.lastName}`})]})}),e("td",{children:e(a,{className:"truncate",children:l.customer.email})}),e("td",{children:e(a,{className:"truncate",children:l.customer.phone})}),e("td",{children:e("span",{className:"truncate",children:l.customer.company})})]})})]})}),r("div",{className:"space-y-12",children:[r(T,{className:"border-0 shadow-0 overflow-hidden",expanded:n==="shipping",onChange:()=>h(n!=="shipping"?"shipping":""),sx:{backgroundColor:"background.default",borderRadius:"12px!important"},children:[e(C,{expandIcon:e(k,{}),children:e(a,{className:"font-semibold",children:"Shipping Address"})}),r(A,{className:"flex flex-col md:flex-row",children:[e(a,{className:"w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16",children:l.customer.shippingAddress.address}),e("div",{className:"w-full h-320 rounded-16 overflow-hidden mx-8",children:e(I,{bootstrapURLKeys:{key:O},defaultZoom:15,defaultCenter:{lng:l.customer.shippingAddress.lng,lat:l.customer.shippingAddress.lat},children:e(P,{text:l.customer.shippingAddress.address,lat:l.customer.shippingAddress.lat,lng:l.customer.shippingAddress.lng})})})]})]}),r(T,{className:"border-0 shadow-0 overflow-hidden",expanded:n==="invoice",onChange:()=>h(n!=="invoice"?"invoice":""),sx:{backgroundColor:"background.default",borderRadius:"12px!important"},children:[e(C,{expandIcon:e(k,{}),children:e(a,{className:"font-semibold",children:"Invoice Address"})}),r(A,{className:"flex flex-col md:flex-row -mx-8",children:[e(a,{className:"w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16",children:l.customer.invoiceAddress.address}),e("div",{className:"w-full h-320 rounded-16 overflow-hidden mx-8",children:e(I,{bootstrapURLKeys:{key:O},defaultZoom:15,defaultCenter:{lng:l.customer.invoiceAddress.lng,lat:l.customer.invoiceAddress.lat},children:e(P,{text:l.customer.invoiceAddress.address,lat:l.customer.invoiceAddress.lat,lng:l.customer.invoiceAddress.lng})})})]})]})]})]})]}),r("div",{className:"pb-48",children:[r("div",{className:"pb-16 flex items-center",children:[e(m,{color:"action",children:"heroicons-outline:clock"}),e(a,{className:"h2 mx-12 font-medium",color:"text.secondary",children:"Order Status"})]}),e("div",{className:"table-responsive",children:r(b,{className:"simple",children:[e(D,{children:r(o,{children:[e(s,{children:e(a,{className:"font-semibold",children:"Status"})}),e(s,{children:e(a,{className:"font-semibold",children:"Updated On"})})]})}),e(g,{children:l.status.map(c=>r(o,{children:[e(s,{children:e(z,{name:c.name})}),e(s,{children:c.date})]},c.id))})]})})]}),r("div",{className:"pb-48",children:[r("div",{className:"pb-16 flex items-center",children:[e(m,{color:"action",children:"heroicons-outline:currency-dollar"}),e(a,{className:"h2 mx-12 font-medium",color:"text.secondary",children:"Payment"})]}),e("div",{className:"table-responsive",children:r("table",{className:"simple",children:[e("thead",{children:r("tr",{children:[e("th",{children:e(a,{className:"font-semibold",children:"TransactionID"})}),e("th",{children:e(a,{className:"font-semibold",children:"Payment Method"})}),e("th",{children:e(a,{className:"font-semibold",children:"Amount"})}),e("th",{children:e(a,{className:"font-semibold",children:"Date"})})]})}),e("tbody",{children:r("tr",{children:[e("td",{children:e("span",{className:"truncate",children:l.payment.transactionId})}),e("td",{children:e("span",{className:"truncate",children:l.payment.method})}),e("td",{children:e("span",{className:"truncate",children:l.payment.amount})}),e("td",{children:e("span",{className:"truncate",children:l.payment.date})})]})})]})})]}),r("div",{className:"pb-48",children:[r("div",{className:"pb-16 flex items-center",children:[e(m,{color:"action",children:"heroicons-outline:truck"}),e(a,{className:"h2 mx-12 font-medium",color:"text.secondary",children:"Shipping"})]}),e("div",{className:"table-responsive",children:r("table",{className:"simple",children:[e("thead",{children:r("tr",{children:[e("th",{children:e(a,{className:"font-semibold",children:"Tracking Code"})}),e("th",{children:e(a,{className:"font-semibold",children:"Carrier"})}),e("th",{children:e(a,{className:"font-semibold",children:"Weight"})}),e("th",{children:e(a,{className:"font-semibold",children:"Fee"})}),e("th",{children:e(a,{className:"font-semibold",children:"Date"})})]})}),e("tbody",{children:l.shippingDetails.map(c=>r("tr",{children:[e("td",{children:e("span",{className:"truncate",children:c.tracking})}),e("td",{children:e("span",{className:"truncate",children:c.carrier})}),e("td",{children:e("span",{className:"truncate",children:c.weight})}),e("td",{children:e("span",{className:"truncate",children:c.fee})}),e("td",{children:e("span",{className:"truncate",children:c.date})})]},c.date))})]})})]})]})}function W(){var d;const t=v(),{orderId:i}=t,{data:l}=y(i,{skip:!i});return e("div",{className:"table-responsive",children:r("table",{className:"simple",children:[e("thead",{children:r("tr",{children:[e("th",{children:e(a,{className:"font-semibold",children:"ID"})}),e("th",{children:e(a,{className:"font-semibold",children:"Image"})}),e("th",{children:e(a,{className:"font-semibold",children:"Name"})}),e("th",{children:e(a,{className:"font-semibold",children:"Price"})}),e("th",{children:e(a,{className:"font-semibold",children:"Quantity"})})]})}),e("tbody",{children:(d=l==null?void 0:l.products)==null?void 0:d.map(n=>r("tr",{children:[e("td",{className:"w-64",children:n.id}),e("td",{className:"w-80",children:e("img",{className:"product-image",src:n.image,alt:"product"})}),e("td",{children:e(a,{component:f,to:`/apps/e-commerce/products/${n.id}`,className:"truncate",style:{color:"inherit",textDecoration:"underline"},children:n.name})}),e("td",{className:"w-64 text-right",children:r("span",{className:"truncate",children:["$",n.price]})}),e("td",{className:"w-64 text-right",children:e("span",{className:"truncate",children:n.quantity})})]},n.id))})]})})}function ne(){const t=v(),{orderId:i}=t,{data:l,isLoading:d,isError:n}=y(i,{skip:!i}),h=M(),c=B(w=>w.breakpoints.down("lg")),[u,S]=x.useState(0);function R(w,$){S($)}return d?e(Q,{}):n?r(p.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[e(a,{color:"text.secondary",variant:"h5",children:"There is no such order!"}),e(_,{className:"mt-24",component:f,variant:"outlined",to:"/apps/e-commerce/orders",color:"inherit",children:"Go to Orders Page"})]}):e(j,{header:l&&r("div",{className:"flex flex-1 flex-col py-32 px-24 md:px-32",children:[e(p.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:r(a,{className:"flex items-center sm:mb-12",component:f,role:"button",to:"/apps/e-commerce/orders",color:"inherit",children:[e(m,{size:20,children:h.direction==="ltr"?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"}),e("span",{className:"mx-4 font-medium",children:"Orders"})]})}),r(p.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},className:"flex flex-col min-w-0",children:[e(a,{className:"text-20 truncate font-semibold",children:`Order ${l.reference}`}),e(a,{variant:"caption",className:"font-medium",children:`From ${l.customer.firstName} ${l.customer.lastName}`})]})]}),content:r(V,{children:[r(K,{value:u,onChange:R,indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64 border-b-1"},children:[e(N,{className:"h-64",label:"Order Details"}),e(N,{className:"h-64",label:"Products"}),e(N,{className:"h-64",label:"Invoice"})]}),l&&r("div",{className:"p-16 sm:p-24 max-w-3xl w-full",children:[u===0&&e(H,{}),u===1&&e(W,{}),u===2&&e(Z,{order:l})]})]}),scroll:c?"normal":"content"})}export{ne as default};
