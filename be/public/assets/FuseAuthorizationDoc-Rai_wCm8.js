import{d as t,j as e,T as n,P as r,dz as o,bx as d}from"./index-3voNJrtd.js";import{T as l,a as s,b as a,c}from"./TableRow-pXSTL-kD.js";import{T as i}from"./TableCell-mDdYzQeM.js";const h=`import AdminRoleExample from './AdminRoleExample';
import authRoles from '../../../auth/authRoles';
/**
 * The AdminRoleExampleConfig object is a configuration object for the AdminRoleExample page in the Fuse application.
 */
const AdminRoleExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin, // ['admin']
	routes: [
		{
			path: 'auth/admin-role-example',
			element: <AdminRoleExample />
		}
	]
};
export default AdminRoleExampleConfig;
`;function g(){return t(d,{children:[e(n,{variant:"h4",className:"mb-40 font-700",children:"FuseAuthorization"}),e(n,{className:"mb-16",component:"p",children:"FuseAuthorization is a higher-order component that handles the authorization logic of a React app. It checks the provided auth property from FuseRouteItemType against the current logged-in user role."}),e(n,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Usage"}),e(n,{className:"mb-16",component:"p",children:"To use FuseAuthorization, you need to import it from @fuse/core/FuseAuthorization and wrap it around the component that needs to be authorized. The FuseAuthorization component takes in the following props:"}),e(r,{className:"max-w-md my-16",children:t(l,{children:[e(s,{children:t(a,{children:[e(i,{className:"font-semibold text-14",children:"Prop Name"}),e(i,{className:"font-semibold text-14",children:"Type"}),e(i,{className:"font-semibold text-14",children:"Description"})]})}),t(c,{children:[t(a,{children:[e(i,{children:"userRole"}),e(i,{children:"string or array of strings"}),e(i,{children:"Represents the roles that are authorized to access the component."})]}),t(a,{children:[e(i,{children:"loginRedirectUrl"}),e(i,{children:"string"}),e(i,{children:"Represents the URL to redirect to if the user is not authorized to access the component."})]}),t(a,{children:[e(i,{children:"children"}),e(i,{children:"ReactNode"}),e(i,{children:"The child component that needs to be authorized."})]})]})]})}),e(n,{className:"mt-32 mb-8",variant:"subtitle2",children:"Example Usage:"}),e(o,{component:"pre",className:"language-jsx mb-32",children:`
                import { FuseAuthorization } from '@fuse/core';

                function MyComponent() {
                    return (
                        <div>
                            <h1>My Component</h1>
                        </div>
                    );
                }

                function App() {
                    return (
                        <FuseAuthorization userRole={['admin', 'editor']} loginRedirectUrl="/login">
                            <MyComponent />
                        </FuseAuthorization>
                    );
                }
                `}),e(n,{className:"mb-16",component:"p",children:"In this example, MyComponent is wrapped in FuseAuthorization and can only be accessed by users with the roles admin or editor. If the user is not authorized, they will be redirected to the login page specified in loginRedirectUrl."}),e(n,{className:"mb-16",component:"p",children:"Note that FuseAuthorization uses the AppContext to get the list of routes in the app. Therefore, it needs to be used within a component that is wrapped in AppContextProvider."}),t(n,{className:"mb-16",component:"p",children:[e("code",{children:"FuseAuthorization"})," is the authorization component of the Fuse React. It restricts unauthorized user access by looking at ",e("b",{children:"route configs"})," and ",e("b",{children:"user.role"}),"."]}),e(n,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Configuration"}),e(n,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Route Configuration:"}),t(n,{className:"mb-16",component:"p",children:["You need to define authorization (auth) in the ",e("b",{children:"route config files"})," to control the access via permission roles."]}),e(n,{className:"mt-32 mb-8",variant:"subtitle2",children:"Example Usage:"}),e(n,{className:"inline-block mb-8 italic",component:"code",children:"src/app/main/auth/admin-role-example/AdminRoleExampleConfig.tsx"}),e(o,{component:"pre",className:"language-jsx",children:h}),e(n,{className:"my-16",component:"p",children:"You can also give different auth values for individual routes with writing auth value inside the route object."}),e(r,{className:"max-w-md my-16",children:t(l,{children:[e(s,{children:t(a,{children:[e(i,{className:"font-semibold text-14",children:"Authorization Role (auth) options"}),e(i,{})]})}),t(c,{children:[t(a,{children:[e(i,{children:e("code",{children:"null"})}),e(i,{children:"Do not check, allow everyone"})]}),t(a,{children:[e(i,{children:e("code",{children:"[]"})}),e(i,{children:"Only guest allowed"})]}),t(a,{children:[e(i,{children:e("code",{children:"[admin,user]"})}),e(i,{children:"Only 'admin' and 'user' roles are allowed"})]})]})]})}),e(n,{className:"mt-48 mb-8",variant:"h6",children:"User.role Configuration:"}),t(n,{className:"mb-16",component:"p",children:["User ",e("b",{children:"role"})," and ",e("b",{children:"data"})," are stored at ",e("b",{children:"user"})," in the redux store."]}),e(n,{className:"mb-16",component:"p",children:"After successful login user.role will be updated and the FuseAuthorization automatically redirects the authorized user."}),e(n,{className:"inline-block mb-8 italic",component:"code",children:"app/auth/user/store/userSlice.tsx (initial user state)"}),e(o,{component:"pre",className:"language-js mb-32",children:`  
                const initialState = {
                role: [],//guest
                data: {
                    'displayName': 'John Doe',
                    'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
                    'email'      : 'johndoe@withinpixels.com',
                    shortcuts    : [
                      'calendar',
                      'mail',
                      'contacts',
                      'todo'
                    ]
                  }
                };
       `}),e(r,{className:"max-w-md my-16",children:t(l,{children:[e(s,{children:t(a,{children:[e(i,{className:"font-semibold text-14",children:"User Role options"}),e(i,{})]})}),t(c,{children:[t(a,{children:[t(i,{children:[e("code",{children:"null"})," or ",e("code",{children:"undefined"})," or ",e("code",{children:"[]"})]}),e(i,{children:"Guest"})]}),t(a,{children:[t(i,{children:[e("code",{children:"['admin','user']"})," (array)"]}),e(i,{children:"User has roles 'admin' and 'user'"})]}),t(a,{children:[t(i,{children:[e("code",{children:'"admin"'})," (string)"]}),e(i,{children:"User has 'admin' role"})]})]})]})}),e(n,{className:"mt-48 mb-8",variant:"h6",children:"Navigation Item Configuration:"}),t(n,{className:"mb-16",component:"p",children:["You can control the navigation ",e("b",{children:"item/group/collapse"})," visibility by adding ",e("b",{children:"auth"}),"property in ",e("code",{children:"app/configs/NavigationConfig.tsx"}),"."]}),e(n,{className:"mt-32 mb-8",variant:"subtitle2",children:"Example Usage:"}),e(o,{component:"pre",className:"language-js mb-32",children:`
					 {
						'id'   : 'only-admin-navigation-item',
						'title': 'Nav item only for Admin',
						'type' : 'item',
						'auth' : authRoles.admin,//['admin']
						'url'  : '/auth/admin-role-example',
						'icon' : 'verified_user'
					  },
				`}),e(n,{className:"mt-48 mb-4",variant:"h5",children:"Default Auth value:"}),t(n,{component:"p",children:["If you don't want to set auth on every page config;",e("br",{}),"you can give defaultAuth role value in the file ",e("code",{children:"src/app/configs/settingsConfig.tsx"}),e("br",{}),e("br",{}),"The individual route configs which has auth option won't be overridden."]}),e(n,{className:"mt-24 mb-4",variant:"h6",children:"Making the whole app auth protected by default:"}),e(n,{className:"mb-12",variant:"subtitle2",children:"src/app/configs/settingsConfig.tsx"}),e(o,{component:"pre",className:"language-js mb-32",children:`
					defaultAuth:['admin','staff','user']
				`}),e(n,{className:"mt-24 mb-4",variant:"h6",children:"Making the whole app without authorization by default"}),e(n,{className:"mb-12",variant:"subtitle2",children:"src/app/configs/settingsConfig.tsx"}),e(o,{component:"pre",className:"language-js mb-32",children:`
				defaultAuth: null
				`}),e(n,{className:"mt-48 mb-4",variant:"h5",children:"Redirect the logged-in user to a specific route depending on his role"}),t(n,{className:"mb-16",component:"p",children:["Before dispatching ",e("b",{children:"SET_USER_DATA"})," action you can set loginRedirectUrl on"]}),e(n,{className:"inline-block mb-8 italic",component:"code",children:"app/auth/user/store/userSlice.tsx"}),e(o,{component:"pre",className:"language-js mb-32",children:`
				export const setUser = createAsyncThunk('user/setUser', async (user, { dispatch, getState }) => {
				
				/*
				You can redirect the logged-in user to a specific route depending on his role
				*/
				if (user.data.loginRedirectUrl) {
					settingsConfig.loginRedirectUrl = user.data.loginRedirectUrl; // for example 'apps/academy'
				}
           		 return user;
          });
				`}),e(n,{className:"mt-48 mb-4",variant:"h5",children:"Uncaught Error: Maximum update depth exceeded: Infinite loops"}),t(n,{className:"mb-16",component:"p",children:["If you are getting this error, make sure authenticated user has rights to access main route ",e("b",{children:'"/"'}),"or it's redirected route path."]}),t(n,{className:"mb-16",component:"p",children:["After successful login, every authenticated user should be able to access to main route path ",e("b",{children:'"/"'})," ","or redirected route path."]})]})}export{g as default};
