import{cc as p,ag as c,r as b,cn as g,ac as a}from"./index-3voNJrtd.js";const u=(o,e)=>a({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!o.vars&&{colorScheme:o.palette.mode}),y=o=>a({color:(o.vars||o).palette.text.primary},o.typography.body1,{backgroundColor:(o.vars||o).palette.background.default,"@media print":{backgroundColor:(o.vars||o).palette.common.white}}),S=(o,e=!1)=>{var s;const t={};e&&o.colorSchemes&&Object.entries(o.colorSchemes).forEach(([i,d])=>{var n;t[o.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:(n=d.palette)==null?void 0:n.mode}});let r=a({html:u(o,e),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:o.typography.fontWeightBold},body:a({margin:0},y(o),{"&::backdrop":{backgroundColor:(o.vars||o).palette.background.default}})},t);const l=(s=o.components)==null||(s=s.MuiCssBaseline)==null?void 0:s.styleOverrides;return l&&(r=[r,l]),r};function m(o){const e=p({props:o,name:"MuiCssBaseline"}),{children:s,enableColorScheme:t=!1}=e;return c.jsxs(b.Fragment,{children:[c.jsx(g,{styles:r=>S(r,t)}),s]})}export{m as C};
