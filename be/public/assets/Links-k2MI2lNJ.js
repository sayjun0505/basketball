import{d as n,j as e,e1 as i,H as a,F as l,C as s,T as t,bx as c}from"./index-3voNJrtd.js";import{F as o}from"./FuseExample-L3LbvVcu.js";import{D as d}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import"./DocumentationNavigation-us8sikvN.js";const h=r=>r.preventDefault();function m(){return n(a,{sx:{typography:"body1","& > :not(style) ~ :not(style)":{ml:2}},onClick:h,children:[e(i,{href:"#",children:"Link"}),e(i,{href:"#",color:"inherit",children:'color="inherit"'}),e(i,{href:"#",variant:"body2",children:'variant="body2"'})]})}const p=`/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
const preventDefault = (event) => event.preventDefault();
export default function Links() {
    return (<Box sx={{
            typography: 'body1',
            '& > :not(style) ~ :not(style)': {
                ml: 2,
            },
        }} onClick={preventDefault}>
      <Link href="#">Link</Link>
      <Link href="#" color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" variant="body2">
        {'variant="body2"'}
      </Link>
    </Box>);
}
`,u=r=>r.preventDefault();function f(){return n(a,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",typography:"body1","& > :not(style) ~ :not(style)":{ml:2}},onClick:u,children:[e(i,{href:"#",underline:"none",children:'underline="none"'}),e(i,{href:"#",underline:"hover",children:'underline="hover"'}),e(i,{href:"#",underline:"always",children:'underline="always"'})]})}const y=`/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
const preventDefault = (event) => event.preventDefault();
export default function UnderlineLink() {
    return (<Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            typography: 'body1',
            '& > :not(style) ~ :not(style)': {
                ml: 2,
            },
        }} onClick={preventDefault}>
      <Link href="#" underline="none">
        {'underline="none"'}
      </Link>
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
      <Link href="#" underline="always">
        {'underline="always"'}
      </Link>
    </Box>);
}
`;function k(){return e(i,{component:"button",variant:"body2",onClick:()=>{console.info("I'm a button.")},children:"Button Link"})}const b=`/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link from '@mui/material/Link';
export default function ButtonLink() {
    return (<Link component="button" variant="body2" onClick={() => {
            console.info("I'm a button.");
        }}>
      Button Link
    </Link>);
}
`;function L(r){return n(c,{children:[n("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(d,{}),e(s,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/links",target:"_blank",role:"button",size:"small",startIcon:e(l,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Links"}),e(t,{className:"description",children:"The Link component allows you to easily customize anchor elements with your theme colors and typography styles."}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic links"}),n(t,{className:"text-14 mb-32",component:"div",children:["The Link component is built on top of the ",e("a",{href:"/material-ui/api/typography/",children:"Typography"})," component, meaning that you can use its props."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"Links.js",className:"my-16",iframe:!1,component:m,raw:p})}),e(t,{className:"text-14 mb-32",component:"div",children:"However, the Link component has some different default props than the Typography component:"}),n("ul",{className:"space-y-16",children:[n("li",{children:[e("code",{children:'color="primary"'})," as the link needs to stand out."]}),n("li",{children:[e("code",{children:'variant="inherit"'})," as the link will, most of the time, be used as a child of a Typography component."]})]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Underline"}),n(t,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"underline"})," prop can be used to set the underline behavior. The default is ",e("code",{children:"always"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"UnderlineLink.js",className:"my-16",iframe:!1,component:f,raw:y})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Security"}),n(t,{className:"text-14 mb-32",component:"div",children:["When you use ",e("code",{children:'target="_blank"'})," with Links, it is ",e("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/noopener",children:"recommended"})," to always set ",e("code",{children:'rel="noopener"'})," or ",e("code",{children:'rel="noreferrer"'})," when linking to third party content."]}),n("ul",{className:"space-y-16",children:[n("li",{children:[e("code",{children:'rel="noopener"'})," prevents the new page from being able to access the ",e("code",{children:"window.opener"})," property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL."]}),n("li",{children:[e("code",{children:'rel="noreferrer"'})," has the same effect, but also prevents the ",e("em",{children:"Referer"})," header from being sent to the new page. ⚠️ Removing the referrer header will affect analytics."]})]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Third-party routing library"}),n(t,{className:"text-14 mb-32",component:"div",children:["One frequent use case is to perform navigation on the client only, without an HTTP round-trip to the server. The ",e("code",{children:"Link"})," component provides the ",e("code",{children:"component"})," prop to handle this use case. Here is a ",e("a",{href:"/material-ui/guides/routing/#link",children:"more detailed guide"}),"."]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),n(t,{className:"text-14 mb-32",component:"div",children:["(WAI-ARIA: ",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/link/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/link/"}),")"]}),n("ul",{className:"space-y-16",children:[n("li",{children:['When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use ',e("a",{href:"https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text",children:"specific descriptions"}),"."]}),n("li",{children:["For the best user experience, links should stand out from the text on the page. For instance, you can keep the default ",e("code",{children:'underline="always"'})," behavior."]}),n("li",{children:["If a link doesn't have a meaningful href, ",n("a",{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md",children:["it should be rendered using a ",e("code",{children:"<button>"})," element"]}),". The demo below illustrates how to properly link with a ",e("code",{children:"<button>"}),":"]})]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"ButtonLink.js",className:"my-16",iframe:!1,component:k,raw:b})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keyboard accessibility"}),n("ul",{className:"space-y-16",children:[n("li",{children:["Interactive elements should receive focus in a coherent order when the user presses the ",e("kbd",{className:"key",children:"Tab"})," key."]}),n("li",{children:["Users should be able to open a link by pressing ",e("kbd",{className:"key",children:"Enter"}),"."]})]}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Screen reader accessibility"}),e("ul",{className:"space-y-16",children:n("li",{children:["When a link receives focus, screen readers should announce a descriptive link name. If the link opens in a new window or browser tab, add an ",e("a",{href:"https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8",children:e("code",{children:"aria-label"})})," to inform screen reader users—for example, ",e("em",{children:'"To learn more, visit the About page which opens in a new window."'})]})})]})}export{L as default};
