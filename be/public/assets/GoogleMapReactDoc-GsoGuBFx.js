import{d as t,j as e,T as a,F as o,A as c,C as m,a7 as s,bb as p}from"./index-cy1M6gwN.js";import{F as d}from"./FuseExample-0-XNuDGL.js";import{c as h}from"./index.modern-JVQz_d0E.js";function u(l){const{text:r,lat:n,lng:i}=l;return e(c,{title:t("div",{children:[r,e("br",{}),n,", ",i]}),placement:"top",children:e(o,{className:"text-red",children:"heroicons-outline:location-marker"})})}function g(){return t("div",{className:"w-full",children:[e(a,{className:"h2 mb-16",children:"Simple Map Example"}),e("div",{className:"w-full h-512",children:e(h,{bootstrapURLKeys:{key:"your_google_map_api_key"},defaultZoom:12,defaultCenter:{lat:-34.397,lng:150.64},children:e(u,{text:"Marker Text",lat:-34.397,lng:150.644})})})]})}const f=`import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import GoogleMap from 'google-map-react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
function Marker(props) {
    const { text, lat, lng } = props;
    return (<Tooltip title={<div>
					{text}
					<br />
					{lat}, {lng}
				</div>} placement="top">
			<FuseSvgIcon className="text-red">heroicons-outline:location-marker</FuseSvgIcon>
		</Tooltip>);
}
function SimpleMapExample() {
    return (<div className="w-full">
			<Typography className="h2 mb-16">Simple Map Example</Typography>
			<div className="w-full h-512">
				<GoogleMap bootstrapURLKeys={{
            key: import.meta.env.VITE_MAP_KEY
        }} defaultZoom={12} defaultCenter={{
            lat: -34.397,
            lng: 150.64
        }}>
					<Marker text="Marker Text" lat={-34.397} lng={150.644}/>
				</GoogleMap>
			</div>
		</div>);
}
export default SimpleMapExample;
`;function v(){return t(p,{children:[t("div",{className:"flex w-full items-center justify-between mb-24",children:[e(a,{variant:"h4",children:"GoogleMapReact"}),e(m,{variant:"contained",color:"secondary",component:"a",href:"https://github.com/google-map-react/google-map-react",target:"_blank",role:"button",startIcon:e(o,{children:"heroicons-outline:external-link"}),children:"Reference"})]}),t(a,{className:"mb-16",component:"p",children:[e("code",{children:"google-map-react"})," is a component written over a small set of the Google Maps API."]}),e("hr",{}),e(a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Example Usages"}),e(d,{className:"mb-64",component:g,raw:f}),e(a,{className:"text-32 mt-32 mb-8",component:"h2",children:"Demos"}),e("ul",{children:e("li",{className:"mb-8",children:e(s,{to:"/dashboards/analytics",children:"Analytics Dashboard"})})})]})}export{v as default};
