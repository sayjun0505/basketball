import{d as e,j as t,cW as r,ay as f,az as P,ag as b,r as d,T as a,s as y,F as S,C as N,dz as R,bx as k}from"./index-3voNJrtd.js";import{F as o}from"./FuseExample-L3LbvVcu.js";import{D as C}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{P as n,a as I,u as B}from"./Pagination-5Y4vGkDW.js";import{T as j}from"./TablePagination-khaA6feY.js";import"./DocumentationNavigation-us8sikvN.js";import"./LastPage-slbTVDgE.js";import"./TableCell-mDdYzQeM.js";function T(){return e(r,{spacing:2,children:[t(n,{count:10}),t(n,{count:10,color:"primary"}),t(n,{count:10,color:"secondary"}),t(n,{count:10,disabled:!0})]})}const z=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function BasicPagination() {
    return (<Stack spacing={2}>
      <Pagination count={10}/>
      <Pagination count={10} color="primary"/>
      <Pagination count={10} color="secondary"/>
      <Pagination count={10} disabled/>
    </Stack>);
}
`;function F(){return e(r,{spacing:2,children:[t(n,{count:10,variant:"outlined"}),t(n,{count:10,variant:"outlined",color:"primary"}),t(n,{count:10,variant:"outlined",color:"secondary"}),t(n,{count:10,variant:"outlined",disabled:!0})]})}const A=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function PaginationOutlined() {
    return (<Stack spacing={2}>
      <Pagination count={10} variant="outlined"/>
      <Pagination count={10} variant="outlined" color="primary"/>
      <Pagination count={10} variant="outlined" color="secondary"/>
      <Pagination count={10} variant="outlined" disabled/>
    </Stack>);
}
`;function _(){return e(r,{spacing:2,children:[t(n,{count:10,shape:"rounded"}),t(n,{count:10,variant:"outlined",shape:"rounded"})]})}const L=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function PaginationRounded() {
    return (<Stack spacing={2}>
      <Pagination count={10} shape="rounded"/>
      <Pagination count={10} variant="outlined" shape="rounded"/>
    </Stack>);
}
`;function D(){return e(r,{spacing:2,children:[t(n,{count:10,size:"small"}),t(n,{count:10}),t(n,{count:10,size:"large"})]})}const O=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function PaginationSize() {
    return (<Stack spacing={2}>
      <Pagination count={10} size="small"/>
      <Pagination count={10}/>
      <Pagination count={10} size="large"/>
    </Stack>);
}
`;function q(){return e(r,{spacing:2,children:[t(n,{count:10,showFirstButton:!0,showLastButton:!0}),t(n,{count:10,hidePrevButton:!0,hideNextButton:!0})]})}const E=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function PaginationButtons() {
    return (<Stack spacing={2}>
      <Pagination count={10} showFirstButton showLastButton/>
      <Pagination count={10} hidePrevButton hideNextButton/>
    </Stack>);
}
`;var g={},U=P;Object.defineProperty(g,"__esModule",{value:!0});var v=g.default=void 0,H=U(f()),Y=b;v=g.default=(0,H.default)((0,Y.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");var p={},$=P;Object.defineProperty(p,"__esModule",{value:!0});var x=p.default=void 0,M=$(f()),W=b;x=p.default=(0,M.default)((0,W.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");function J(){return t(r,{spacing:2,children:t(n,{count:10,renderItem:i=>t(I,{slots:{previous:v,next:x},...i})})})}const K=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function CustomIcons() {
    return (<Stack spacing={2}>
      <Pagination count={10} renderItem={(item) => (<PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item}/>)}/>
    </Stack>);
}
`;function X(){return e(r,{spacing:2,children:[t(n,{count:11,defaultPage:6,siblingCount:0}),t(n,{count:11,defaultPage:6})," ",t(n,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),t(n,{count:11,defaultPage:6,boundaryCount:2})]})}const G=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function PaginationRanges() {
    return (<Stack spacing={2}>
      <Pagination count={11} defaultPage={6} siblingCount={0}/>
      <Pagination count={11} defaultPage={6}/> {/* Default ranges */}
      <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2}/>
      <Pagination count={11} defaultPage={6} boundaryCount={2}/>
    </Stack>);
}
`;function Q(){const[i,m]=d.useState(1);return e(r,{spacing:2,children:[e(a,{children:["Page: ",i]}),t(n,{count:10,page:i,onChange:(u,l)=>{m(l)}})]})}const V=`import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function PaginationControlled() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (<Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange}/>
    </Stack>);
}
`,Z=y("ul")({listStyle:"none",padding:0,margin:0,display:"flex"});function tt(){const{items:i}=B({count:10});return t("nav",{children:t(Z,{children:i.map(({page:m,type:s,selected:u,...l},h)=>{let c=null;return s==="start-ellipsis"||s==="end-ellipsis"?c="…":s==="page"?c=t("button",{type:"button",style:{fontWeight:u?"bold":void 0},...l,children:m}):c=t("button",{type:"button",...l,children:s}),t("li",{children:c},h)})})})}const at=`import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
});
export default function UsePagination() {
    const { items } = usePagination({
        count: 10,
    });
    return (<nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                children = '…';
            }
            else if (type === 'page') {
                children = (<button type="button" style={{
                        fontWeight: selected ? 'bold' : undefined,
                    }} {...item}>
                {page}
              </button>);
            }
            else {
                children = (<button type="button" {...item}>
                {type}
              </button>);
            }
            return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>);
}
`;function nt(){const[i,m]=d.useState(2),[s,u]=d.useState(10);return t(j,{component:"div",count:100,page:i,onPageChange:(c,w)=>{m(w)},rowsPerPage:s,onRowsPerPageChange:c=>{u(parseInt(c.target.value,10)),m(0)}})}const et=`import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
export default function TablePaginationDemo() {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (<TablePagination component="div" count={100} page={page} onPageChange={handleChangePage} rowsPerPage={rowsPerPage} onRowsPerPageChange={handleChangeRowsPerPage}/>);
}
`;function dt(i){return e(k,{children:[e("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[t(C,{}),t(N,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/pagination",target:"_blank",role:"button",size:"small",startIcon:t(S,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),t(a,{className:"text-32 my-16 font-700",component:"h1",children:"Pagination"}),t(a,{className:"description",children:"The Pagination component enables the user to select a specific page from a range of pages."}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic pagination"}),t(a,{className:"text-14 mb-32",component:"div",children:t(o,{name:"BasicPagination.js",className:"my-16",iframe:!1,component:T,raw:z})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Outlined pagination"}),t(a,{className:"text-14 mb-32",component:"div",children:t(o,{name:"PaginationOutlined.js",className:"my-16",iframe:!1,component:F,raw:A})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Rounded pagination"}),t(a,{className:"text-14 mb-32",component:"div",children:t(o,{name:"PaginationRounded.js",className:"my-16",iframe:!1,component:_,raw:L})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Pagination size"}),t(a,{className:"text-14 mb-32",component:"div",children:t(o,{name:"PaginationSize.js",className:"my-16",iframe:!1,component:D,raw:O})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Buttons"}),t(a,{className:"text-14 mb-32",component:"div",children:"You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons."}),t(a,{className:"text-14 mb-32",component:"div",children:t(o,{name:"PaginationButtons.js",className:"my-16",iframe:!1,component:q,raw:E})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Custom icons"}),t(a,{className:"text-14 mb-32",component:"div",children:"It's possible to customize the control icons."}),t(a,{className:"text-14 mb-32",component:"div",children:t(o,{name:"CustomIcons.js",className:"my-16",iframe:!1,component:J,raw:K})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Pagination ranges"}),e(a,{className:"text-14 mb-32",component:"div",children:["You can specify how many digits to display either side of current page with the ",t("code",{children:"siblingCount"})," prop, and adjacent to the start and end page number with the ",t("code",{children:"boundaryCount"})," prop."]}),t(a,{className:"text-14 mb-32",component:"div",children:t(o,{name:"PaginationRanges.js",className:"my-16",iframe:!1,component:X,raw:G})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Controlled pagination"}),t(a,{className:"text-14 mb-32",component:"div",children:t(o,{name:"PaginationControlled.js",className:"my-16",iframe:!1,component:Q,raw:V})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:t("code",{children:"usePagination"})}),e(a,{className:"text-14 mb-32",component:"div",children:["For advanced customization use cases, a headless ",t("code",{children:"usePagination()"})," hook is exposed. It accepts almost the same options as the Pagination component minus all the props related to the rendering of JSX. The Pagination component is built on this hook."]}),t(R,{component:"pre",className:"language-jsx",children:` 
import usePagination from '@mui/material/usePagination';
`}),t(a,{className:"text-14 mb-32",component:"div",children:t(o,{name:"UsePagination.js",className:"my-16",iframe:!1,component:tt,raw:at})}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Table pagination"}),e(a,{className:"text-14 mb-32",component:"div",children:["The ",t("code",{children:"Pagination"})," component was designed to paginate a list of arbitrary items when infinite loading isn't used. It's preferred in contexts where SEO is important, for instance, a blog."]}),e(a,{className:"text-14 mb-32",component:"div",children:["For the pagination of a large set of tabular data, you should use the ",t("code",{children:"TablePagination"})," component."]}),t(a,{className:"text-14 mb-32",component:"div",children:t(o,{name:"TablePaginationDemo.js",className:"my-16",iframe:!1,component:nt,raw:et})}),e(a,{className:"text-14 mb-32",component:"div",children:[":::warning Note that the ",t("code",{children:"Pagination"})," page prop starts at 1 to match the requirement of including the value in the URL, while the ",t("code",{children:"TablePagination"})," page prop starts at 0 to match the requirement of zero-based JavaScript arrays that comes with rendering a lot of tabular data. :::"]}),e(a,{className:"text-14 mb-32",component:"div",children:["You can learn more about this use case in the ",t("a",{href:"/material-ui/react-table/#custom-pagination-options",children:"table section"})," of the documentation."]}),t(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),t(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),e(a,{className:"text-14 mb-32",component:"div",children:['The root node has a role of "navigation" and aria-label "pagination navigation" by default. The page items have an aria-label that identifies the purpose of the item ("go to first page", "go to previous page", "go to page 1" etc.). You can override these using the ',t("code",{children:"getItemAriaLabel"})," prop."]}),t(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),t(a,{className:"text-14 mb-32",component:"div",children:'The pagination items are in tab order, with a tabindex of "0".'})]})}export{dt as default};
