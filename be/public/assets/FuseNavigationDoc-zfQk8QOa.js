import{u as l,d as a,j as e,T as t,dp as n,dq as d,C as o,dr as m,ds as h,dt as p,du as r,bp as c,dv as s,bb as u}from"./index-cy1M6gwN.js";function v(){const i=l();return a(u,{children:[e(t,{variant:"h4",className:"mb-40 font-700",children:"FuseNavigation"}),a(t,{className:"mb-16",component:"p",children:[e("code",{children:"FuseNavigation"})," is a custom-built Fuse component that allows you to create a multi-level collapsable navigation."]}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"[navigation]"}),a(t,{className:"mb-16",component:"p",children:[e("code",{children:"FuseNavigation"})," uses an array to populate the entire navigation. It supports four different navigation items; Group, Collapse, Item. and Divider. These items can be mixed and matched to create unique and complex navigation layouts."]}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"[layout]"}),e(t,{className:"mb-16",component:"p",children:'"vertical" or "horizontal" layout options.'}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"[active]"}),a(t,{className:"mb-16",component:"p",children:["You can set ",e("b",{children:"active"}),' to "square" to use square active item style instead of rounded/circle for'," ",e("b",{children:"vertical layout"}),"."]}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"[dense]"}),a(t,{className:"mb-16",component:"p",children:["You can use ",e("b",{children:"dense={true}"})," to set dense variation of the navigation."]}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"[checkPermission]"}),a(t,{className:"mb-16",component:"p",children:["You can use ",e("b",{children:"checkPermission={true}"})," to enable authorization for navigation."]}),e(t,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Usage"}),e(n,{component:"pre",className:"language-jsx",children:`
                                    <FuseNavigation navigation={navigation} layout="vertical" active="square" dense={true}/>
                                `}),e(t,{className:"mt-48 mb-8",variant:"h4",children:"Navigation item types"}),e(t,{className:"mt-32 p-8 rounded-4 bg-yellow-100 border-1 border-yellow-700 text-black mb-8",children:"It is mandatory to give a unique id to all of your navigation items."}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Group"}),e(n,{component:"pre",className:"language-json",children:`
              {
                id: 'apps',
                title: 'Applications',
                subtitle: 'Custom made application designs',
                type: 'group',
                icon: 'heroicons-outline:home',
                children: [
                  {
                    id: 'apps.academy',
                    title: 'Academy',
                    type: 'item',
                    icon: 'heroicons-outline:academic-cap',
                    url: '/apps/academy',
                  }
                ]
             }
        `}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Collapse"}),e(n,{component:"pre",className:"language-json",children:`
            {
                id: 'apps.ecommerce',
                title: 'ECommerce',
                type: 'collapse',
                icon: 'heroicons-outline:shopping-cart',
                children: [
                  {
                    id: 'e-commerce-products',
                    title: 'Products',
                    type: 'item',
                    url: 'apps/e-commerce/products',
                    end: true,
                  },
              ]
            }
      `}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Item"}),e(n,{component:"pre",className:"language-json",children:`
           {
              id: 'dashboards.project',
              title: 'Project',
              type: 'item',
              icon: 'heroicons-outline:clipboard-check',
              url: '/dashboards/project',
            }
        `}),e(t,{className:"text-20 mt-24 mb-8 font-medium",component:"h2",children:"end: bool"}),e(t,{className:"text-16 mb-8",component:"h2",children:"When true, the active class/style will only be applied if the location is exactly matched."}),e(n,{component:"pre",className:"language-json",children:`
          {
              id: 'dashboards.project',
              title: 'Project',
              type: 'item',
              icon: 'heroicons-outline:clipboard-check',
              url: '/dashboards/project',
              end: true
          }
                                `}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Link"}),e(n,{component:"pre",className:"language-json",children:`
            {
                'id'    : 'test-link',
                'title' : 'Test Link',
                'type'  : 'link',
                'icon'  : 'link',
                'url'   : 'http://fusetheme.com',
                'target': '_blank'
            },
         `}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Divider"}),e(n,{component:"pre",className:"language-json",children:`
          {
              'id'   : 'project',
              'title': 'Project',
              'type' : 'item',
              'url'  : '/apps/dashboards/project'
          }
          {
              'type': 'divider
          },
          {
              'id'   : 'project',
              'title': 'Project',
              'type' : 'item',
              'url'  : '/apps/dashboards/project'
          }
          `}),e(t,{className:"mt-48 mb-8",variant:"h4",children:"Actions"}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"setNavigation"}),a(t,{className:"text-16 mb-8",component:"h2",children:["Use ",a("code",{children:["setNavigation(navigation","<Array>",")"]})," action to set/change whole navigation."]}),a("div",{className:"border-1 rounded-16 p-16 my-16",children:[e(t,{className:"text-16 mb-24",component:"h2",children:"With the button below, whole navigation is changed."}),e(o,{onClick:()=>{i(d([{id:"dashboards",title:"Dashboards",subtitle:"Unique dashboard designs",type:"group",icon:"heroicons-outline:home",children:[{id:"dashboards.project",title:"Project",type:"item",icon:"heroicons-outline:clipboard-check",url:"/dashboards/project"},{id:"dashboards.analytics",title:"Analytics",type:"item",icon:"heroicons-outline:chart-pie",url:"/dashboards/analytics"}]},{id:"auth",title:"Auth",type:"group",icon:"verified_user",children:[{id:"sign-out",title:"Sign out",type:"item",url:"sign-out",icon:"exit_to_app"}]}]))},variant:"contained",color:"secondary",children:"Set Navigation"}),e(n,{component:"pre",className:"language-jsx mt-24",children:`
          <Button
            onClick={() => {
              dispatch(
                setNavigation([
                  {
                    id: 'dashboards',
                    title: 'Dashboards',
                    subtitle: 'Unique dashboard designs',
                    type: 'group',
                    icon: 'heroicons-outline:home',
                    children: [
                      {
                        id: 'dashboards.project',
                        title: 'Project',
                        type: 'item',
                        icon: 'heroicons-outline:clipboard-check',
                        url: '/dashboards/project',
                      },
                      {
                        id: 'dashboards.analytics',
                        title: 'Analytics',
                        type: 'item',
                        icon: 'heroicons-outline:chart-pie',
                        url: '/dashboards/analytics',
                      },
                    ],
                  },
                  {
                    id: 'auth',
                    title: 'Auth',
                    type: 'group',
                    icon: 'verified_user',
                    children: [
                      {
                        id: 'sign-out',
                        title: 'Sign out',
                        type: 'item',
                        url: 'sign-out',
                        icon: 'exit_to_app',
                      },
                    ],
                  },
                ])
              );
            }}
            variant="contained"
            color="secondary"
          >
            Set Navigation
          </Button>
        `})]}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"resetNavigation"}),a(t,{className:"text-16 mb-8",component:"h2",children:["Use ",e("code",{children:"resetNavigation()"})," action to reset navigation to initial state."]}),a("div",{className:"border-1 rounded-16 p-16 my-16",children:[e(t,{className:"text-16 mb-24",component:"h2",children:"With the button below, navigation is returned to config defaults."}),e(o,{onClick:()=>{i(m())},variant:"contained",color:"secondary",children:"Reset Navigation"}),e(n,{component:"pre",className:"language-jsx mt-24",children:`
            <Button
                onClick={()=> {
                    dispatch(resetNavigation());
                }}
                variant="contained"
                color="secondary"
            >
                Reset Navigation
            </Button>
            `})]}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"updateNavigationItem"}),a(t,{className:"text-16 mb-8",component:"h2",children:["Use",a("code",{children:["updateNavigationItem(id, ",e("i",{children:"object"}),")"]}),"action to update a navigation item."]}),a("div",{className:"border-1 rounded-16 p-16 my-16",children:[e(t,{className:"text-16 mb-24",component:"h2",children:"With clicking the button below, a badge will be added into the 'Project' dashboard navigation item."}),e(o,{onClick:()=>{i(h("dashboards.project",{badge:{title:"NEW"}}))},variant:"contained",color:"secondary",children:"Update Navigation Item"}),e(n,{component:"pre",className:"language-jsx mt-24",children:`
					<Button
						onClick={() => {
							dispatch(
								updateNavigationItem('dashboards.project', {
									badge: {
										title: 'NEW'
									}
								})
							);
						}}
						variant="contained"
						color="secondary"
					>
						Update Navigation Item
					</Button>
					
        `})]}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"removeNavigationItem"}),a(t,{className:"text-16 mb-8",component:"h2",children:["Use ",e("code",{children:"removeNavigationItem(id)"})," action to remove a navigation item."]}),a("div",{className:"border-1 rounded-16 p-16 my-16",children:[e(t,{className:"text-16 mb-24",component:"h2",children:'With the button below, "Calendar" navigation item is removed.'}),e(o,{onClick:()=>{i(p("apps.calendar"))},variant:"contained",color:"secondary",children:"Remove Navigation Item"}),e(n,{component:"pre",className:"language-jsx mt-24",children:`
            <Button
                  onClick={()=> {
                      dispatch(removeNavigationItem('apps.calendar'))
                  }}
                  variant="contained"
                  color="secondary"
            >
            Remove Navigation Item
            </Button>
      `})]}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"prependNavigationItem"}),a(t,{className:"text-16 mb-8",component:"h2",children:["Use",a("code",{children:["prependNavigationItem(",e("i",{children:"object"}),", ",e("i",{children:"collapseId/groupId"}),"?)"]}),"action to prepend a navigation item into the navigation array."]}),a("div",{className:"border-1 rounded-16 p-16 my-16",children:[e(t,{className:"text-16 mb-24",component:"h2",children:'With the button below, "fusetheme.com" navigation item is added at the top of the navigation array.'}),e(o,{onClick:()=>{i(r({id:`test-link-${c.generateGUID()}`,title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"}))},variant:"contained",color:"secondary",children:"Prepend Navigation Item"}),e(n,{component:"pre",className:"language-jsx mt-24",children:`
            <Button
                onClick={()=> {
                    dispatch(prependNavigationItem(
                        {
                            'id'    : 'test-link',
                            'title' : 'fusetheme.com',
                            'type'  : 'link',
                            'icon'  : 'link',
                            'url'   : 'http://fusetheme.com',
                            'target': '_blank'
                        }
                    ))
                }}
                variant="contained"
                color="secondary"
            >
                Prepend Navigation Item
            </Button>
            `})]}),a("div",{className:"border-1 rounded-16 p-16 my-16",children:[e(t,{className:"text-16 mb-24",component:"h2",children:'With the button below, "fusetheme.com" navigation item is added into the top of the "Dashboards" children.'}),e(o,{onClick:()=>{i(r({id:`test-link-${c.generateGUID()}`,title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"},"dashboards"))},variant:"contained",color:"secondary",children:"Prepend Navigation Item"}),e(n,{component:"pre",className:"language-jsx mt-24",children:`
                                <Button
                                    onClick={()=> {
                                        dispatch(prependNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Prepend Navigation Item
                                </Button>
                                `})]}),e(t,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"appendNavigationItem"}),a(t,{className:"text-16 mb-8",component:"h2",children:["Use",a("code",{children:["appendNavigationItem(",e("i",{children:"object"}),", ",e("i",{children:"collapseId/groupId"}),"?)"]}),"action to append a navigation item into the navigation array."]}),a("div",{className:"border-1 rounded-16 p-16 my-16",children:[e(t,{className:"text-16 mb-24",component:"h2",children:'With the button below, "fusetheme.com" navigation item is added at the bottom of the array.'}),e(o,{onClick:()=>{i(s({id:`test-link-${c.generateGUID()}`,title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"}))},variant:"contained",color:"secondary",children:"Append Navigation Item"}),e(n,{component:"pre",className:"language-jsx mt-24",children:`
            <Button
                onClick={()=> {
                    dispatch(appendNavigationItem(
                        {
                            'id'    : 'test-link',
                            'title' : 'fusetheme.com',
                            'type'  : 'link',
                            'icon'  : 'link',
                            'url'   : 'http://fusetheme.com',
                            'target': '_blank'
                        }
                    ))
                }}
                variant="contained"
                color="secondary"
            >
                Append Navigation Item
            </Button>
            `})]}),a("div",{className:"border-1 rounded-16 p-16 my-16",children:[e(t,{className:"text-16 mb-24",component:"h2",children:'With the button below, "fusetheme.com" navigation item is added into the bottom of the "Dashboards" children.'}),e(o,{onClick:()=>{i(s({id:`test-link-${c.generateGUID()}`,title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"},"dashboards"))},variant:"contained",color:"secondary",children:"Append Navigation Item"}),e(n,{component:"pre",className:"language-jsx mt-24",children:`
                                <Button
                                    onClick={()=> {
                                        dispatch(appendNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Append Navigation Item
                                </Button>
                                `})]})]})}export{v as default};
