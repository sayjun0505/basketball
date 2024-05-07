import{d as n,j as e,T as t,dz as s,bx as a}from"./index-3voNJrtd.js";function i(){return n(a,{children:[e(t,{variant:"h4",className:"mb-40 font-700",children:"Directory Structure and Naming Conventions"}),e(t,{className:"mb-16",component:"p",children:"This document explains the directory structure and naming conventions used in Fuse React. Fuse React is a modular approach based on route settings determined from config files. The directory structure and naming conventions are designed to make it easy to navigate and understand the codebase."}),e(s,{component:"pre",className:"language-jsx my-24",children:`
				├── contacts
				│   ├── ContactListItem.tsx
				│   ├── ContactsApi.ts
				│   ├── ContactsApp.tsx
				│   ├── ContactsAppConfig.tsx
				│   ├── ContactsHeader.tsx
				│   ├── ContactsList.tsx
				│   ├── ContactsSidebarContent.tsx
				│   ├── contact
				│   │   ├── ContactForm.tsx
				│   │   ├── ContactView.tsx
				│   │   ├── email-selector
				│   │   │   ├── ContactEmailSelector.tsx
				│   │   │   └── EmailInput.tsx
				│   │   └── phone-number-selector
				│   │       ├── CountryCodeSelector.tsx
				│   │       ├── PhoneNumberInput.tsx
				│   │       └── PhoneNumberSelector.tsx
				│   ├── models
				│   │   ├── ContactModel.ts
				│   │   ├── CountryModel.ts
				│   │   └── TagModel.ts
				│   └── store
				│       ├── index.ts
				│       └── searchTextSlice.ts`}),e(t,{className:"mb-16",component:"p",children:"The directory structure of Fuse React is organized by feature, with each feature having its own directory. Within each feature directory, there are subdirectories for components, models, sidebars, store."}),n(t,{className:"mb-16",component:"p",children:[e("strong",{children:"Directories:"})," named in lowercase and use hyphens to separate words. Example: `chat`, `contacts`."]}),n(t,{className:"mb-16",component:"p",children:[e("strong",{children:"Files:"})," named in PascalCase and use the name of the component, type, or model they represent. Example: ` ContactApp.tsx`."]}),n(t,{className:"mb-16",component:"p",children:[e("strong",{children:"Components:"})," named in PascalCase and use the name of the component they represent. Example: ` ContactApp.tsx`, ` ContactForm.tsx`."]}),n(t,{className:"mb-16",component:"p",children:[e("strong",{children:"Models:"})," named in PascalCase and use the name of the model they represent. Example: `ContactModel.tsx`."]}),n(t,{className:"mb-16",component:"p",children:[e("strong",{children:"Sidebars/Tabs/Sections/Dialogs etc:"})," For example Sidebar named in PascalCase and use the name of the sidebar they represent. The `sidebars` folder is used to store components that represent sidebars in the application. Other similar types of components, such as tabs, sections, or dialogs, may have their own folders with similar naming conventions. Example: `ContactSidebar.tsx`, `MainSidebar.tsx`."]}),n(t,{className:"mb-16",component:"p",children:[e("strong",{children:"Store files:"})," named in camelCase and use the name of the slice they represent. Example: `contactListSlice.tsx`, `userSlice.tsx`."]}),n(t,{className:"mb-16",component:"p",children:[e("strong",{children:"Api files:"})," have api endpoints and named in PascalCase. RTK Query is used for API calls. Example: `ContaactsApi.ts`"]}),n(t,{className:"mb-16",component:"p",children:[e("strong",{children:"Config files:"})," named in PascalCase and use the name of the feature they represent, followed by `Config`. Example: ` ContactAppConfig.tsx`."]}),e(t,{className:"mb-16",component:"p",children:"By following these conventions, developers can quickly find the files and components they need and understand their purpose. This makes it easier to navigate and maintain the codebase, especially as the project grows in size and complexity."}),e(t,{className:"mb-16",component:"p",children:"Fuse React's directory structure might look overwhelming and intimidating at first, but following this page and giving a bit time to understand it before jumping right into code will help immensely."})]})}export{i as default};
