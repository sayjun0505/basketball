import{u as s,d as a,j as o,T as e,dz as c,bP as r,bx as t,bQ as g,bR as d,bS as h,C as n,bT as l}from"./index-3voNJrtd.js";import{D as p}from"./DialogContentText-uNPVrmPG.js";function D(){const i=s();return a(t,{children:[o(e,{variant:"h4",className:"mb-40 font-700",children:"FuseDialog"}),a(e,{className:"mb-16",component:"p",children:[o("code",{children:"FuseDialog"})," is a simple dialog trigger for easily showing dialog messages via redux action. It should be located in the theme layouts."]}),o(e,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Usage"}),o(e,{className:"mb-16",component:"p",children:"You can show dialog anywhere with dispatching the action openDialog, it is using Material-UI's dialog so you can pass the props in the object:"}),o(c,{component:"pre",className:"language-jsx",children:`
                        <Button
                            onClick={()=> dispatch(openDialog({
                                children: (
                                    <React.Fragment>
                                        <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={()=> dispatch(closeDialog())} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={()=> dispatch(closeDialog())} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </React.Fragment>
                                     )
                                 }))}
                            variant="contained"
                            color="secondary"
                        >
                            Open Dialog
                        </Button>
                        `}),o(e,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Example"}),o(n,{onClick:()=>i(r({children:a(t,{children:[o(g,{id:"alert-dialog-title",children:"Use Google's location service?"}),o(d,{children:o(p,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),a(h,{children:[o(n,{onClick:()=>i(l()),color:"primary",children:"Disagree"}),o(n,{onClick:()=>i(l()),color:"primary",autoFocus:!0,children:"Agree"})]})]})})),variant:"contained",color:"secondary",children:"Open Dialog"})]})}export{D as default};
