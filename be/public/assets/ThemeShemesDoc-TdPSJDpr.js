import{d as a,j as e,T as t,dz as o,bx as r}from"./index-3voNJrtd.js";function i(){return a(r,{children:[e(t,{variant:"h4",className:"mb-40 font-700",children:"Theme Schemes"}),e(t,{className:"mb-16",component:"p",children:"The Fuse React uses material-ui's theming by default. You can create theme color schemes with defining theme configuration objects."}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Configuration"}),a(t,{className:"mb-16",component:"p",children:["For the configuration options checkout"," ",e("a",{href:"https://mui.com/customization/theming",target:"_blank",rel:"noopener noreferrer",children:"Material UI's theme configuration options."})]}),a(t,{className:"mb-16",component:"p",children:["Theme configurations are located at ",e("code",{children:"app/configs/themesConfig.ts"})," file."]}),e(o,{component:"pre",className:"language-jsx",children:`
				/**
				* The themesConfig object is a configuration object for the color themes of the Fuse application.
				*/
				export const themesConfig: FuseThemesType = {
					default: {
							palette: {
							mode: 'light',
							divider: '#e2e8f0',
							text: lightPaletteText,
							common: {
							black: 'rgb(17, 24, 39)',
							white: 'rgb(255, 255, 255)'
						},
							primary: {
							light: '#64748b',
							main: '#1e293b',
							dark: '#0f172a',
							contrastText: darkPaletteText.primary
						},
							secondary: {
							light: '#818cf8',
							main: '#4f46e5',
							dark: '#3730a3',
							contrastText: darkPaletteText.primary
						},
							background: {
							paper: '#FFFFFF',
							default: '#f1f5f9'
						},
							error: {
							light: '#ffcdd2',
							main: '#f44336',
							dark: '#b71c1c',
							contrastText: darkPaletteText.primary
						}
					}
				}`})]})}export{i as default};
