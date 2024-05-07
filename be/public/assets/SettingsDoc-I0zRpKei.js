import{d as e,j as t,T as n,dz as o,bx as a}from"./index-3voNJrtd.js";const i=`import themesConfig from 'app/configs/themesConfig';
import i18n from '../../i18n';
/**
 * The settingsConfig object is a configuration object for the Fuse application's settings.
 */
const settingsConfig = {
	/**
	 * The layout object defines the layout style and configuration for the application.
	 */
	layout: {
		/**
		 * The style property defines the layout style for the application.
		 */
		style: 'layout1', // layout1 layout2 layout3
		/**
		 * The config property defines the layout configuration for the application.
		 * Check out default layout configs at app/theme-layouts for example app/theme-layouts/layout1/Layout1Config.js
		 */
		config: {} // checkout default layout configs at app/theme-layouts for example  app/theme-layouts/layout1/Layout1Config.js
	},
	/**
	 * The customScrollbars property defines whether or not to use custom scrollbars in the application.
	 */
	customScrollbars: false,
	/**
	 * The direction property defines the text direction for the application.
	 */
	direction: i18n.dir(i18n.options.lng) || 'ltr', // rtl, ltr
	/**
	 * The theme object defines the color theme for the application.
	 */
	theme: {
		main: themesConfig.default,
		navbar: themesConfig.defaultDark,
		toolbar: themesConfig.default,
		footer: themesConfig.defaultDark
	},
	/**
	 * The defaultAuth property defines the default authorization roles for the application.
	 * To make the whole app auth protected by default set defaultAuth:['admin','staff','user']
	 * To make the whole app accessible without authorization by default set defaultAuth: null
	 * The individual route configs which have auth option won't be overridden.
	 */
	defaultAuth: ['admin'],
	/**
	 * The loginRedirectUrl property defines the default redirect URL for the logged-in user.
	 */
	loginRedirectUrl: '/'
};
export default settingsConfig;
`;function l(){return e(a,{children:[t(n,{variant:"h4",className:"mb-40 font-700",children:"Default Settings"}),e(n,{className:"mb-16",component:"p",children:["To set the default layout and theme settings for your app, navigate to the file:",t("code",{children:"app/configs/settingsConfig.ts"})]}),t(o,{component:"pre",className:"language-jsx",children:i})]})}export{l as default};
