import{d as o,j as e,F as a,C as i,T as t,dz as n,bx as c}from"./index-3voNJrtd.js";import{D as l}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import"./DocumentationNavigation-us8sikvN.js";function h(s){return o(c,{children:[o("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(l,{}),e(i,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/css-baseline",target:"_blank",role:"button",size:"small",startIcon:e(a,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"CSS Baseline"}),e(t,{className:"description",children:"The CssBaseline component helps to kickstart an elegant, consistent, and simple baseline to build upon."}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Global reset"}),o(t,{className:"text-14 mb-32",component:"div",children:["You might be familiar with ",e("a",{href:"https://github.com/necolas/normalize.css",children:"normalize.css"}),", a collection of HTML element and attribute style-normalizations."]}),e(n,{component:"pre",className:"language-jsx",children:` 
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    </React.Fragment>
  );
}
`}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Scoping on children"}),o(t,{className:"text-14 mb-32",component:"div",children:["However, you might be progressively migrating a website to Material UI, using a global reset might not be an option. It's possible to apply the baseline only to the children by using the ",e("code",{children:"ScopedCssBaseline"})," component."]}),e(n,{component:"pre",className:"language-jsx",children:` 
import * as React from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import MyApp from './MyApp';

export default function MyApp() {
  return (
    <ScopedCssBaseline>
      {/* The rest of your application */}
      <MyApp />
    </ScopedCssBaseline>
  );
}
`}),o(t,{className:"text-14 mb-32",component:"div",children:["⚠️ Make sure you import ",e("code",{children:"ScopedCssBaseline"})," first to avoid box-sizing conflicts as in the above example."]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Approach"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Page"}),o(t,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"<html>"})," and ",e("code",{children:"<body>"})," elements are updated to provide better page-wide defaults. More specifically:"]}),o("ul",{className:"space-y-16",children:[e("li",{children:"The margin in all browsers is removed."}),o("li",{children:["The default Material Design background color is applied. It's using ",e("a",{href:"/material-ui/customization/default-theme/?expand-path=$.palette.background",children:e("code",{children:"theme.palette.background.default"})})," for standard devices and a white background for print devices."]}),o("li",{children:["If ",e("code",{children:"enableColorScheme"})," is provided to ",e("code",{children:"CssBaseline"}),", native components color will be set by applying ",e("a",{href:"https://web.dev/articles/color-scheme",children:e("code",{children:"color-scheme"})})," on ",e("code",{children:"<html>"}),". The value used is provided by the theme property ",e("code",{children:"theme.palette.mode"}),"."]})]}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Layout"}),e("ul",{className:"space-y-16",children:o("li",{children:[e("code",{children:"box-sizing"})," is set globally on the ",e("code",{children:"<html>"})," element to ",e("code",{children:"border-box"}),". Every element—including ",e("code",{children:"*::before"})," and ",e("code",{children:"*::after"})," are declared to inherit this property, which ensures that the declared width of the element is never exceeded due to padding or border."]})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Scrollbars"}),o(t,{className:"text-14 mb-32",component:"div",children:[":::error This API is deprecated. Consider using ",e("a",{href:"#color-scheme",children:"color-scheme"})," instead. :::"]}),e(t,{className:"text-14 mb-32",component:"div",children:"The colors of the scrollbars can be customized to improve the contrast (especially on Windows). Add this code to your theme (for dark mode)."}),e(n,{component:"pre",className:"language-jsx",children:` 
import darkScrollbar from '@mui/material/darkScrollbar';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null,
      }),
    },
  },
});
`}),o(t,{className:"text-14 mb-32",component:"div",children:["Be aware, however, that using this utility (and customizing ",e("code",{children:"-webkit-scrollbar"}),") forces macOS to always show the scrollbar."]}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Color scheme"}),o(t,{className:"text-14 mb-32",component:"div",children:["This API is introduced in @mui/material (v5.1.0) for switching between ",e("code",{children:'"light"'})," and ",e("code",{children:'"dark"'})," modes of native components such as scrollbar, using the ",e("code",{children:"color-scheme"})," CSS property. To enable it, you can set ",e("code",{children:"enableColorScheme=true"})," as follows:"]}),e(n,{component:"pre",className:"language-jsx",children:` 
<CssBaseline enableColorScheme />

// or

<ScopedCssBaseline enableColorScheme >
  {/* The rest of your application using color-scheme*/}
</ScopedCssBaseline>
`}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Typography"}),o("ul",{className:"space-y-16",children:[o("li",{children:["No base font-size is declared on the ",e("code",{children:"<html>"}),", but 16px is assumed (the browser default). You can learn more about the implications of changing the ",e("code",{children:"<html>"})," default font size in ",e("a",{href:"/material-ui/customization/typography/#html-font-size",children:"the theme documentation"})," page."]}),o("li",{children:["Set the ",e("code",{children:"theme.typography.body1"})," style on the ",e("code",{children:"<body>"})," element."]}),o("li",{children:["Set the font-weight to ",e("code",{children:"theme.typography.fontWeightBold"})," for the ",e("code",{children:"<b>"})," and ",e("code",{children:"<strong>"})," elements."]}),e("li",{children:"Custom font-smoothing is enabled for better display of the Roboto font."})]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),o(t,{className:"text-14 mb-32",component:"div",children:["Head to the ",e("a",{href:"/material-ui/customization/how-to-customize/#4-global-css-override",children:"global customization"})," section of the documentation to change the output of these components."]})]})}export{h as default};
