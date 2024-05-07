import{d as i,j as e,T as t,dz as n,bx as a}from"./index-3voNJrtd.js";function r(){return i(a,{children:[e(t,{variant:"h4",className:"mb-40 font-700",children:"Authentication System"}),e(t,{className:"mb-16",component:"p",children:"Fuse React's authentication system is designed to be both flexible and robust, accommodating multiple authentication services to ensure a seamless and secure user experience. Currently, we are giving three example authentication services:"}),i("ol",{className:"list-disc pl-16 mb-16 space-y-12",children:[e("li",{children:e(t,{children:"Firebase Authentication"})}),e("li",{children:e(t,{children:"JWT (JSON Web Tokens) Authentication"})}),e("li",{children:e(t,{children:"AWS Amplify Authentication"})})]}),e(t,{className:"mb-16",component:"p",children:"This multi-service approach allows us to cater to a wide range of authentication requirements and preferences, providing developers with the flexibility to choose the service that best fits their project's needs."}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Entry Point: AuthenticationProvider"}),e(t,{className:"mb-16",component:"p",children:"The AuthenticationProvider component serves as the entry point for the authentication system. It is typically located in the App.js file and wraps the main application components, ensuring that authentication context is available throughout the application"}),e(t,{className:"text-15 mb-8 font-500",variant:"h6",children:"Integration in App.js"}),e(n,{component:"pre",className:"language-jsx mb-24",children:`
				return (
					<FuseTheme>
						<AuthenticationProvider>
							<FuseLayout/>
						</AuthenticationProvider>
					</FuseTheme>
				);
				`}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Authentication Services Directory"}),i(t,{className:"mb-16",children:["All authentication services are located under ",e("code",{children:"app/auth/services"}),". This directory contains the implementation of each authentication service, including their context providers, hooks, and component integrations."]}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Service Configurations"}),e(t,{className:"mb-16",component:"p",children:"Each authentication service comes with its own set of configurations, which are essential for initializing and utilizing the service effectively within the application. You can find these configurations in the respective service folders:"}),i("ol",{className:"list-disc pl-16 mb-16 space-y-12",children:[i("li",{children:[i(t,{children:["Firebase Authentication Configuration: ",e("br",{})]}),e(t,{children:e("code",{children:"src/app/auth/services/firebase/firebaseAuthConfig.ts"})})]}),i("li",{children:[i(t,{children:["JWT Authentication Configuration: ",e("br",{})]}),e(t,{children:e("code",{children:"src/app/auth/services/jwt/jwtAuthConfig.ts"})})]}),i("li",{children:[i(t,{children:["AWS Amplify Authentication Configuration: ",e("br",{})]}),e(t,{children:e("code",{children:"src/app/auth/services/aws/awsAuthConfig.ts"})})]})]}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Service Authentication Form Components"}),e(t,{className:"mb-16",children:"Each authentication service should provide its own sign-in and sign-up form components. These components are located under the components directory of each service folder."}),e(t,{className:"text-15 mb-8 font-500",variant:"h6",children:"Example: JWT Authentication Service Form Components:"}),i("ol",{className:"space-y-12",children:[i("li",{children:[e(t,{className:"mb-4 font-500",children:"Sign-In Auth Form Component:"}),e(t,{children:e("code",{children:"src/app/auth/services/jwt/components/JwtSignInForm.tsx"})})]}),i("li",{children:[e(t,{className:"mb-4 font-500",children:"Used in:"}),i(t,{children:["The sign-in form is used in ",e("code",{children:"src/app/main/sign-in/tabs/JwtSignInTab.tsx."})]})]})]}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Adding a New Authentication Service"}),e(t,{className:"mb-16",component:"p",children:"Integrating a new authentication service into our application is designed to be a straightforward process, thanks to the modular and flexible architecture of our authentication system."}),e(t,{className:"mb-16",component:"p",children:"If you're looking to add a new authentication provider, you can do so by examining the examples of the already integrated services: Firebase Authentication, JWT Authentication, and AWS Amplify Authentication."}),e(t,{className:"mb-16",component:"p",children:"These examples serve as a blueprint for how to structure your authentication service, making the integration process more intuitive."}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Steps to Add a New Authentication Provider:"}),i("ol",{className:"list-decimal pl-16 mb-16 space-y-16 leading-loose",children:[i("li",{children:[e(t,{className:"text-15 mb-8 font-500",variant:"h6",children:"Create Your Authentication Service:"}),e(t,{children:"Begin by developing your authentication service. This should include all the necessary logic for signing in, signing out, handling user sessions, and managing user data. Place this service within the app/auth/services directory for organizational consistency."})]}),i("li",{children:[e(t,{className:"text-15 mb-8 font-500",variant:"h6",children:"Configure Your Service:"}),e(t,{children:"Each authentication service requires a specific set of configurations, such as API keys, endpoints, and other parameters. Create a configuration file for your service in the same directory as your service. Refer to the existing services for examples on how to structure this configuration file."})]}),i("li",{children:[e(t,{className:"text-15 mb-8 font-500",variant:"h6",children:"Integrate Your Service into AuthenticationProvider:"}),i(t,{children:["The ",e("code",{children:"AuthenticationProvider"})," component orchestrates the authentication flow of the application. To integrate your new service, wrap the ",e("code",{children:"Authentication"})," component with your service provider, similar to how existing services are integrated. This step is crucial for injecting your service into the React context, making it accessible throughout the application."]}),e(t,{className:"text-13 my-8 font-600",children:"Example Integration in AuthenticationProvider:"}),e(n,{component:"pre",className:"language-jsx mb-24",children:`
<AuthContext.Provider>
	<JwtAuthProvider>
		<AWSAuthProvider>
			<FirebaseAuthProvider>
				<YourNewAuthProvider>
					<Authentication>{children}</Authentication>
				</YourNewAuthProvider>
			</FirebaseAuthProvider>
		</AWSAuthProvider>
	</JwtAuthProvider>
</AuthContext.Provider>`})]}),i("li",{children:[e(t,{className:"text-15 mb-8 font-500",variant:"h6",children:"Utilize the Service's Context Hook:"}),i(t,{children:["Implement a context hook for your authentication service to manage the authentication state (e.g., user information, authentication status). This hook will be used within the"," ",e("code",{children:"Authentication"})," component to monitor changes in the authentication state."]}),e(t,{className:"text-13 my-8 font-600",children:"Example: JWT Authentication Service Auth Hook"}),e(n,{component:"pre",className:"language-jsx mb-24",children:`
const { user: jwtUser, authStatus: jwtAuthStatus } = useJwtAuth();
`})]}),i("li",{children:[e(t,{className:"text-15 mb-8 font-500",variant:"h6",children:"Handle Sign-In and User State:"}),e(t,{children:"Within the Authentication component, use the information provided by your service's context hook to handle user sign-ins and update the main application's user state accordingly."})]}),i("li",{children:[i(t,{className:"text-15 mb-8 font-500",variant:"h6",children:["Implement Sign-Out and Update User Operations"," "]}),i(t,{children:["Extend the useAuth hook to implement sign-out and user update operations. This allows for signing out and updating user information from anywhere within the application."," "]}),e(t,{className:"text-13 my-8 font-600",children:"Example: Sign Out Using useAuth Hook"}),e(n,{component:"pre",className:"language-jsx mb-24",children:`
const { signOut } = useAuth();
`})]}),i("li",{children:[e(t,{className:"text-15 mb-8 font-500",variant:"h6",children:"Test Your Integration:"}),e(t,{children:"After integrating your new authentication service, thoroughly test the sign-in, sign-out, and user session management functionalities. Ensure that your service correctly updates the application's state and that users can seamlessly transition between authenticated and unauthenticated states."})]})]}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Example Services as a Blueprint"}),e(t,{className:"mb-16",component:"p",children:"The existing example authentication services (Firebase, JWT, AWS Amplify) are structured to provide clear examples of how to integrate additional authentication providers. By examining these services, you can gain insights into:"}),i("ol",{className:"list-disc pl-16 mb-16 space-y-12",children:[e("li",{children:e(t,{children:"How to structure your service's API and logic."})}),e("li",{children:e(t,{children:"The way to configure your service within the application."})}),e("li",{children:e(t,{children:"Methods for integrating your service into the AuthenticationProvider component."})}),e("li",{children:e(t,{children:"Implementing a context hook to manage and expose the authentication state."})})]}),e(t,{className:"mb-16",component:"p",children:"By following these guidelines and leveraging the existing services as a blueprint, you can efficiently add new authentication providers to the application, enhancing its flexibility and the range of authentication options available to users."})]})}export{r as default};
