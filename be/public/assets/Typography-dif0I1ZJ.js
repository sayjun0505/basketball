import{d as o,j as t,T as e,H as r,s,F as m,C as c,dz as a,bx as l}from"./index-3voNJrtd.js";import{F as i}from"./FuseExample-L3LbvVcu.js";import{D as p}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import"./DocumentationNavigation-us8sikvN.js";function h(){return o(r,{sx:{width:"100%",maxWidth:500},children:[t(e,{variant:"h1",gutterBottom:!0,children:"h1. Heading"}),t(e,{variant:"h2",gutterBottom:!0,children:"h2. Heading"}),t(e,{variant:"h3",gutterBottom:!0,children:"h3. Heading"}),t(e,{variant:"h4",gutterBottom:!0,children:"h4. Heading"}),t(e,{variant:"h5",gutterBottom:!0,children:"h5. Heading"}),t(e,{variant:"h6",gutterBottom:!0,children:"h6. Heading"}),t(e,{variant:"subtitle1",gutterBottom:!0,children:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),t(e,{variant:"subtitle2",gutterBottom:!0,children:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),t(e,{variant:"body1",gutterBottom:!0,children:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),t(e,{variant:"body2",gutterBottom:!0,children:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."}),t(e,{variant:"button",display:"block",gutterBottom:!0,children:"button text"}),t(e,{variant:"caption",display:"block",gutterBottom:!0,children:"caption text"}),t(e,{variant:"overline",display:"block",gutterBottom:!0,children:"overline text"})]})}const d=`import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function Types() {
    return (<Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </Box>);
}
`,u=s("div")(({theme:n})=>({...n.typography.button,backgroundColor:n.palette.background.paper,padding:n.spacing(1)}));function g(){return t(u,{children:"This div's text looks like that of a button."})}const y=`import * as React from 'react';
import { styled } from '@mui/material/styles';
const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));
export default function TypographyTheme() {
    return <Div>{"This div's text looks like that of a button."}</Div>;
}
`;function x(n){return o(l,{children:[o("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[t(p,{}),t(c,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/typography",target:"_blank",role:"button",size:"small",startIcon:t(m,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),t(e,{className:"text-32 my-16 font-700",component:"h1",children:"Typography"}),t(e,{className:"description",children:"Use typography to present your design and content as clearly and efficiently as possible."}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Roboto font"}),o(e,{className:"text-14 mb-32",component:"div",children:["Material UI uses the ",t("a",{href:"https://fonts.google.com/specimen/Roboto",children:"Roboto"})," font by default. Add it to your project via Fontsource, or with the Google Fonts CDN."]}),t(a,{component:"pre",className:"language-bash npm",children:` 
npm install @fontsource/roboto
`}),t(a,{component:"pre",className:"language-bash yarn",children:` 
yarn add @fontsource/roboto
`}),t(a,{component:"pre",className:"language-bash pnpm",children:` 
pnpm add @fontsource/roboto
`}),t(e,{className:"text-14 mb-32",component:"div",children:"Then you can import it in your entry point like this:"}),t(a,{component:"pre",className:"language-tsx",children:` 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
`}),t("div",{className:"border border-1 p-16 rounded-16 my-12",children:t(e,{className:"text-14 mb-32",component:"div",children:"Fontsource can be configured to load specific subsets, weights, and styles. Material UI's default typography configuration relies only on the 300, 400, 500, and 700 font weights."})}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Google Web Fonts"}),o(e,{className:"text-14 mb-32",component:"div",children:["To install Roboto through the Google Web Fonts CDN, add the following code inside your project's ",t("head",{})," tag:"]}),t(a,{component:"pre",className:"language-html",children:` 
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
/>
`}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Component"}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Usage"}),o(e,{className:"text-14 mb-32",component:"div",children:["The Typography component follows the ",t("a",{href:"https://m2.material.io/design/typography/#type-scale",children:"Material Design typographic scale"})," that provides a limited set of type sizes that work well together for a consistent layout."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"Types.js",className:"my-16",iframe:!1,component:h,raw:d})}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Theme keys"}),o(e,{className:"text-14 mb-32",component:"div",children:["In some situations you might not be able to use the Typography component. Hopefully, you might be able to take advantage of the ",t("a",{href:"/material-ui/customization/default-theme/?expand-path=$.typography",children:t("code",{children:"typography"})})," keys of the theme."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(i,{name:"TypographyTheme.js",className:"my-16",iframe:!1,component:g,raw:y})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Adding & disabling variants"}),o(e,{className:"text-14 mb-32",component:"div",children:["In addition to using the default typography variants, you can add custom ones, or disable any you don't need. See the ",t("a",{href:"/material-ui/customization/typography/#adding-amp-disabling-variants",children:"Adding & disabling variants"})," page for more info."]}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Changing the semantic element"}),o(e,{className:"text-14 mb-32",component:"div",children:["The Typography component uses the ",t("code",{children:"variantMapping"})," prop to associate a UI variant with a semantic element. It's important to realize that the style of a typography component is independent from the semantic underlying element."]}),o(e,{className:"text-14 mb-32",component:"div",children:["To change the underlying element for a one-off situation, like avoiding two ",t("code",{children:"h1"})," elements in your page, use the ",t("code",{children:"component"})," prop:"]}),t(a,{component:"pre",className:"language-jsx",children:` 
<Typography variant="h1" component="h2">
  h1. Heading
</Typography>
`}),o(e,{className:"text-14 mb-32",component:"div",children:["To change the typography element mapping globally, ",t("a",{href:"/material-ui/customization/typography/#adding-amp-disabling-variants",children:"use the theme"}),":"]}),t(a,{component:"pre",className:"language-js",children:` 
const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});
`}),t(e,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"System props"}),o(e,{className:"text-14 mb-32",component:"div",children:["As a CSS utility component, the Typography component supports all ",t("a",{href:"/system/properties/",children:t("code",{children:"system"})})," properties. You can use them as prop directly on the component. For example, here's how you'd add a margin-top:"]}),t(a,{component:"pre",className:"language-jsx",children:` 
<Typography mt={2}>
`}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),t(e,{className:"text-14 mb-32",component:"div",children:"Key factors to follow for an accessible typography:"}),o("ul",{className:"space-y-16",children:[o("li",{children:[t("strong",{children:"Color"}),". Provide enough contrast between text and its background, check out the minimum recommended ",t("a",{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",children:"WCAG 2.0 color contrast ratio"})," (4.5:1)."]}),o("li",{children:[t("strong",{children:"Font size"}),". Use ",t("a",{href:"/material-ui/customization/typography/#font-size",children:"relative units (rem)"}),", instead of pixels, to accommodate the user's browser settings."]}),o("li",{children:[t("strong",{children:"Heading hierarchy"}),". Based on ",t("a",{href:"https://www.w3.org/WAI/tutorials/page-structure/headings/",children:"the W3 guidelines"}),", don't skip heading levels. Make sure to ",t("a",{href:"#changing-the-semantic-element",children:"separate the semantics from the style"}),"."]})]})]})}export{x as default};
