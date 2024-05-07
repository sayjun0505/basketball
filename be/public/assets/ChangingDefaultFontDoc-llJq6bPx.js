import{d as a,j as e,T as n,dz as t,bx as s}from"./index-3voNJrtd.js";function l(){return a(s,{children:[e(n,{variant:"h4",className:"mb-40 font-700",children:"Changing default font"}),e(n,{className:"mb-16",component:"p",children:"There is two way to inject font-family."}),a("ul",{className:"list-decimal ml-16",children:[a("li",{children:[e(n,{className:"mb-24",children:"You can add the font link inside head of the public/index.html."}),e(t,{component:"pre",className:"language-html mb-24",children:`
                          <link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=vietnamese" rel="stylesheet">
                        `})]}),a("li",{children:[e(n,{className:"mb-24",children:"You can install typeface font package and import like we do at src/index.tsx"}),e(t,{component:"pre",className:"language-jsx mb-24",children:`
                            import 'typeface-roboto';
                        `})]})]}),a(n,{className:"mt-16 mb-8",component:"p",children:["You need to add ",e("code",{children:"typography.fontFamily"})," values into the desired theme config at"," ",e("code",{children:"app/configs/themesConfig"})]}),e(t,{component:"pre",className:"language-jsx mb-24",children:`
					default    : {
					  typography: {
						fontFamily: [
							'Roboto',
							'"Helvetica"',
							'Arial',
							'sans-serif'
						].join(','),
				`}),a(n,{className:"mt-16 mb-8",component:"p",children:["There is also font-family assignment at ",e("code",{children:"src/styles/app-base.css "})]}),e(t,{component:"pre",className:"language-css mb-24",children:`
					html {
						font-size: 62.5%;
            font-family: 'Inter var', Roboto, Helvetica Neue, Arial, sans-serif;
            background-color: #121212;
            -webkit-font-smoothing: antialiased;
            text-size-adjust: 100%;
					}
				`})]})}export{l as default};
