import{d as o,j as e,T as t,dp as r,a7 as i,bb as n}from"./index-cy1M6gwN.js";const a=`import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import { SnackbarProvider } from 'notistack';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { selectCurrentLanguageDirection } from 'app/store/i18nSlice';
import themeLayouts from 'app/theme-layouts/themeLayouts';
import { selectMainTheme } from '@fuse/core/FuseSettings/fuseSettingsSlice';
import MockAdapterProvider from '@mock-api/MockAdapterProvider';
import { useAppSelector } from 'app/store/hooks';
import { useSelector } from 'react-redux';
import withAppProviders from './withAppProviders';
import AuthenticationProvider from './auth/AuthenticationProvider';
// import axios from 'axios';
/**
 * Axios HTTP Request defaults
 */
// axios.defaults.baseURL = "";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
const emotionCacheOptions = {
	rtl: {
		key: 'muirtl',
		stylisPlugins: [rtlPlugin],
		insertionPoint: document.getElementById('emotion-insertion-point')
	},
	ltr: {
		key: 'muiltr',
		stylisPlugins: [],
		insertionPoint: document.getElementById('emotion-insertion-point')
	}
};

/**
 * The main App component.
 */
function App() {
	/**
	 * The language direction from the Redux store.
	 */
	const langDirection = useAppSelector(selectCurrentLanguageDirection);
	/**
	 * The main theme from the Redux store.
	 */
	const mainTheme = useSelector(selectMainTheme);
	return (
		<MockAdapterProvider>
			<CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
				<FuseTheme
					theme={mainTheme}
					direction={langDirection}
				>
					<AuthenticationProvider>
						<SnackbarProvider
							maxSnack={5}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right'
							}}
							classes={{
								containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99'
							}}
						>
							<FuseLayout layouts={themeLayouts} />
						</SnackbarProvider>
					</AuthenticationProvider>
				</FuseTheme>
			</CacheProvider>
		</MockAdapterProvider>
	);
}

export default withAppProviders(App);
`;function m(){return o(n,{children:[e(t,{variant:"h4",className:"mb-40 font-700",children:"FuseTheme"}),o(t,{className:"mb-16",component:"p",children:[e("code",{children:"FuseTheme"})," is the theming component of the Fuse React. It allows us to change predefined Material UI themes. It should wrap the ",e("code",{children:"FuseLayout"})," component."]}),e(t,{className:"mb-16",component:"p",children:e("code",{children:"src/app/App.tsx"})}),e(r,{component:"pre",className:"language-jsx",children:a}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Configuration"}),o(t,{className:"mb-16",component:"p",children:["Please checkout",e(i,{className:"font-normal mx-4",to:"/documentation/theming/theme-schemes",children:"theming"}),"at documentation."]})]})}export{m as default};
