import{r as b,d as c,j as e,C as k,e as O,i as S,aE as T,h as A,b$ as N,P as $,D as z,bA as P,F as j,T as o,bx as D}from"./index-3voNJrtd.js";import{F as B}from"./FuseExample-L3LbvVcu.js";import{D as F}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{G as d}from"./Grid-tp5bxruy.js";import{C as E}from"./CardHeader-TzKe9F5w.js";import"./DocumentationNavigation-us8sikvN.js";function x(t,l){return t.filter(n=>l.indexOf(n)===-1)}function G(t,l){return t.filter(n=>l.indexOf(n)!==-1)}function H(){const[t,l]=b.useState([]),[n,u]=b.useState([0,1,2,3]),[s,f]=b.useState([4,5,6,7]),m=G(t,n),h=G(t,s),L=r=>()=>{const i=t.indexOf(r),a=[...t];i===-1?a.push(r):a.splice(i,1),l(a)},p=()=>{f(s.concat(n)),u([])},v=()=>{f(s.concat(m)),u(x(n,m)),l(x(t,m))},I=()=>{u(n.concat(h)),f(x(s,h)),l(x(t,h))},y=()=>{u(n.concat(s)),f([])},C=r=>e($,{sx:{width:200,height:230,overflow:"auto"},children:e(O,{dense:!0,component:"div",role:"list",children:r.map(i=>{const a=`transfer-list-item-${i}-label`;return c(N,{role:"listitem",onClick:L(i),children:[e(S,{children:e(T,{checked:t.indexOf(i)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":a}})}),e(A,{id:a,primary:`List item ${i+1}`})]},i)})})});return c(d,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[e(d,{item:!0,children:C(n)}),e(d,{item:!0,children:c(d,{container:!0,direction:"column",alignItems:"center",children:[e(k,{sx:{my:.5},variant:"outlined",size:"small",onClick:p,disabled:n.length===0,"aria-label":"move all right",children:"≫"}),e(k,{sx:{my:.5},variant:"outlined",size:"small",onClick:v,disabled:m.length===0,"aria-label":"move selected right",children:">"}),e(k,{sx:{my:.5},variant:"outlined",size:"small",onClick:I,disabled:h.length===0,"aria-label":"move selected left",children:"<"}),e(k,{sx:{my:.5},variant:"outlined",size:"small",onClick:y,disabled:s.length===0,"aria-label":"move all left",children:"≪"})]})}),e(d,{item:!0,children:C(s)})]})}const _=`import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}
function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}
export default function TransferList() {
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([0, 1, 2, 3]);
    const [right, setRight] = React.useState([4, 5, 6, 7]);
    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };
    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };
    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };
    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };
    const customList = (items) => (<Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
      <List dense component="div" role="list">
        {items.map((value) => {
            const labelId = \`transfer-list-item-\${value}-label\`;
            return (<ListItemButton key={value} role="listitem" onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox checked={checked.indexOf(value) !== -1} tabIndex={-1} disableRipple inputProps={{
                    'aria-labelledby': labelId,
                }}/>
              </ListItemIcon>
              <ListItemText id={labelId} primary={\`List item \${value + 1}\`}/>
            </ListItemButton>);
        })}
      </List>
    </Paper>);
    return (<Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleAllRight} disabled={left.length === 0} aria-label="move all right">
            ≫
          </Button>
          <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleCheckedRight} disabled={leftChecked.length === 0} aria-label="move selected right">
            &gt;
          </Button>
          <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleCheckedLeft} disabled={rightChecked.length === 0} aria-label="move selected left">
            &lt;
          </Button>
          <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleAllLeft} disabled={right.length === 0} aria-label="move all left">
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
    </Grid>);
}
`;function g(t,l){return t.filter(n=>l.indexOf(n)===-1)}function R(t,l){return t.filter(n=>l.indexOf(n)!==-1)}function q(t,l){return[...t,...g(l,t)]}function J(){const[t,l]=b.useState([]),[n,u]=b.useState([0,1,2,3]),[s,f]=b.useState([4,5,6,7]),m=R(t,n),h=R(t,s),L=r=>()=>{const i=t.indexOf(r),a=[...t];i===-1?a.push(r):a.splice(i,1),l(a)},p=r=>R(t,r).length,v=r=>()=>{p(r)===r.length?l(g(t,r)):l(q(t,r))},I=()=>{f(s.concat(m)),u(g(n,m)),l(g(t,m))},y=()=>{u(n.concat(h)),f(g(s,h)),l(g(t,h))},C=(r,i)=>c(P,{children:[e(E,{sx:{px:2,py:1},avatar:e(T,{onClick:v(i),checked:p(i)===i.length&&i.length!==0,indeterminate:p(i)!==i.length&&p(i)!==0,disabled:i.length===0,inputProps:{"aria-label":"all items selected"}}),title:r,subheader:`${p(i)}/${i.length} selected`}),e(z,{}),e(O,{sx:{width:200,height:230,bgcolor:"background.paper",overflow:"auto"},dense:!0,component:"div",role:"list",children:i.map(a=>{const w=`transfer-list-all-item-${a}-label`;return c(N,{role:"listitem",onClick:L(a),children:[e(S,{children:e(T,{checked:t.indexOf(a)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":w}})}),e(A,{id:w,primary:`List item ${a+1}`})]},a)})})]});return c(d,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[e(d,{item:!0,children:C("Choices",n)}),e(d,{item:!0,children:c(d,{container:!0,direction:"column",alignItems:"center",children:[e(k,{sx:{my:.5},variant:"outlined",size:"small",onClick:I,disabled:m.length===0,"aria-label":"move selected right",children:">"}),e(k,{sx:{my:.5},variant:"outlined",size:"small",onClick:y,disabled:h.length===0,"aria-label":"move selected left",children:"<"})]})}),e(d,{item:!0,children:C("Chosen",s)})]})}const K=`import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}
function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}
function union(a, b) {
    return [...a, ...not(b, a)];
}
export default function SelectAllTransferList() {
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([0, 1, 2, 3]);
    const [right, setRight] = React.useState([4, 5, 6, 7]);
    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const numberOfChecked = (items) => intersection(checked, items).length;
    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        }
        else {
            setChecked(union(checked, items));
        }
    };
    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };
    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };
    const customList = (title, items) => (<Card>
      <CardHeader sx={{ px: 2, py: 1 }} avatar={<Checkbox onClick={handleToggleAll(items)} checked={numberOfChecked(items) === items.length && items.length !== 0} indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0} disabled={items.length === 0} inputProps={{
                'aria-label': 'all items selected',
            }}/>} title={title} subheader={\`\${numberOfChecked(items)}/\${items.length} selected\`}/>
      <Divider />
      <List sx={{
            width: 200,
            height: 230,
            bgcolor: 'background.paper',
            overflow: 'auto',
        }} dense component="div" role="list">
        {items.map((value) => {
            const labelId = \`transfer-list-all-item-\${value}-label\`;
            return (<ListItemButton key={value} role="listitem" onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox checked={checked.indexOf(value) !== -1} tabIndex={-1} disableRipple inputProps={{
                    'aria-labelledby': labelId,
                }}/>
              </ListItemIcon>
              <ListItemText id={labelId} primary={\`List item \${value + 1}\`}/>
            </ListItemButton>);
        })}
      </List>
    </Card>);
    return (<Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList('Choices', left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleCheckedRight} disabled={leftChecked.length === 0} aria-label="move selected right">
            &gt;
          </Button>
          <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleCheckedLeft} disabled={rightChecked.length === 0} aria-label="move selected left">
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Chosen', right)}</Grid>
    </Grid>);
}
`;function Y(t){return c(D,{children:[c("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(F,{}),e(k,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/transfer-list",target:"_blank",role:"button",size:"small",startIcon:e(j,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Transfer List"}),e(o,{className:"description",children:'A Transfer List (or "shuttle") enables the user to move one or more list items between lists.'}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic transfer list"}),e(o,{className:"text-14 mb-32",component:"div",children:'For completeness, this example includes buttons for "move all", but not every transfer list needs these.'}),e(o,{className:"text-14 mb-32",component:"div",children:e(B,{name:"TransferList.js",className:"my-16",iframe:!1,component:H,raw:_})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Enhanced transfer list"}),e(o,{className:"text-14 mb-32",component:"div",children:'This example exchanges the "move all" buttons for a "select all / select none" checkbox and adds a counter.'}),e(o,{className:"text-14 mb-32",component:"div",children:e(B,{name:"SelectAllTransferList.js",className:"my-16",iframe:!1,component:J,raw:K})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),e(o,{className:"text-14 mb-32",component:"div",children:"The component comes with a couple of limitations:"}),c("ul",{className:"space-y-16",children:[c("li",{children:["It only works on desktop. If you have a limited amount of options to select, prefer the ",e("a",{href:"/material-ui/react-autocomplete/#multiple-values",children:"Autocomplete"})," component. If mobile support is important for you, have a look at ",e("a",{href:"https://github.com/mui/material-ui/issues/27579",children:"#27579"}),"."]}),c("li",{children:["There are no high-level components exported from npm. The demos are based on composition. If this is important for you, have a look at ",e("a",{href:"https://github.com/mui/material-ui/issues/27579",children:"#27579"}),"."]})]})]})}export{Y as default};
