import{d as t,j as e,T as a,eB as r,dz as o,bx as n}from"./index-3voNJrtd.js";function i(){return t(n,{children:[e(a,{variant:"h4",className:"mb-40 font-700",children:"Routing"}),t(a,{className:"mb-16",component:"p",children:["Fuse React utilizes a custom routing system based on the popular packages",e("a",{href:"https://reacttraining.com/react-router/",target:"_blank",rel:"noopener noreferrer",children:"react-router"})," ","and"," ",e("a",{href:"https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config",target:"_blank",rel:"noopener noreferrer",children:"react-router-config"})," ","It follows a modular approach and is based on route settings determined from config files."]}),e(a,{className:"mb-16",component:"p",children:"Fuse React follows a modular approach and is based on route settings determined from config files."}),t(a,{className:"mb-16",component:"p",children:["For example, have a look at the code in ",e("code",{children:"MailboxAppConfig.tsx"}),". Here you can override all settings for a particular route."]}),e(o,{component:"pre",className:"language-jsx mb-24",children:r}),t(a,{className:"mb-16",component:"p",children:["The routes are then generated in ",e("code",{children:"app/configs/routesConfig"}),", as seen in the code snippet below:"]}),e(o,{component:"pre",className:"language-jsx mb-32",children:`
          import {appsRoutes} from '../main/apps/mailbox/MailboxAppConfig.tsx';
          import FuseUtils from '@fuse/utils';
          import { Navigate } from 'react-router-dom';

          const routeConfigs = [
              MailAppConfig
          ];
          
          const routes = [
            ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
            {
              path: '/',
              element: <Navigate to="dashboards/analytics" />,
              auth: settingsConfig.defaultAuth,
            },
            {
              path: 'loading',
              element: <FuseLoading />,
            },
            {
              path: '*',
              element: <Navigate to="pages/error/404" />,
            },
          ];
          
          export default routes;
      `})]})}export{i as default};
