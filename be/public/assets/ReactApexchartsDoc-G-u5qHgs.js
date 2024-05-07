import{r as s,j as e,d as i,T as o,F as c,C as l,a7 as n,bb as u}from"./index-cy1M6gwN.js";import{F as a}from"./FuseExample-0-XNuDGL.js";import{_ as r}from"./react-apexcharts.min-6O_a1YKm.js";function d(){const[t]=s.useState({options:{xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{name:"series-1",data:[30,40,25,50,49,21,70,51]},{name:"series-2",data:[23,12,54,61,32,56,81,19]}]});return e("div",{className:"area",children:e(r,{options:t.options,series:t.series,type:"area",width:"500"})})}const p=`import Chart from 'react-apexcharts';
import { useState } from 'react';
function Area() {
    const [state] = useState({
        options: {
            xaxis: {
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        },
        series: [
            {
                name: 'series-1',
                data: [30, 40, 25, 50, 49, 21, 70, 51]
            },
            {
                name: 'series-2',
                data: [23, 12, 54, 61, 32, 56, 81, 19]
            }
        ]
    });
    return (<div className="area">
			<Chart options={state.options} series={state.series} type="area" width="500"/>
		</div>);
}
export default Area;
`;function m(){const[t]=s.useState({options:{dataLabels:{enabled:!1},plotOptions:{bar:{horizontal:!0}},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{data:[30,40,25,50,49,21,70,51]}]});return e("div",{className:"bar",children:e(r,{options:t.options,series:t.series,type:"bar",width:"500"})})}const h=`import { useState } from 'react';
import Chart from 'react-apexcharts';
function Bar() {
    const [state] = useState({
        options: {
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            xaxis: {
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        },
        series: [
            {
                data: [30, 40, 25, 50, 49, 21, 70, 51]
            }
        ]
    });
    return (<div className="bar">
			<Chart options={state.options} series={state.series} type="bar" width="500"/>
		</div>);
}
export default Bar;
`;function f(){const[t]=s.useState({options:{dataLabels:{enabled:!1},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{data:[30,40,25,50,49,21,70,51]}]});return e("div",{className:"column",children:e(r,{options:t.options,series:t.series,type:"bar",width:"500"})})}const b=`import { useState } from 'react';
import Chart from 'react-apexcharts';
function Column() {
    const [state] = useState({
        options: {
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        },
        series: [
            {
                data: [30, 40, 25, 50, 49, 21, 70, 51]
            }
        ]
    });
    return (<div className="column">
			<Chart options={state.options} series={state.series} type="bar" width="500"/>
		</div>);
}
export default Column;
`;function x(){const[t]=s.useState({options:{labels:["A","B","C","D","E"]},series:[44,55,41,17,15]});return e("div",{className:"donut",children:e(r,{options:t.options,series:t.series,type:"donut",width:"380"})})}const S=`import { useState } from 'react';
import Chart from 'react-apexcharts';
function Donut() {
    const [state] = useState({
        options: {
            labels: ['A', 'B', 'C', 'D', 'E']
        },
        series: [44, 55, 41, 17, 15]
    });
    return (<div className="donut">
			<Chart options={state.options} series={state.series} type="donut" width="380"/>
		</div>);
}
export default Donut;
`;function w(){const[t]=s.useState({options:{stroke:{curve:"smooth"},markers:{size:0},xaxis:{categories:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}},series:[{data:[30,40,25,50,49,21,70,51]}]});return e("div",{className:"line",children:e(r,{options:t.options,series:t.series,type:"line",width:"500"})})}const v=`import { useState } from 'react';
import Chart from 'react-apexcharts';
function Line() {
    const [state] = useState({
        options: {
            stroke: {
                curve: 'smooth' // Add as const to enforce type as 'smooth'
            },
            markers: {
                size: 0
            },
            xaxis: {
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        },
        series: [
            {
                data: [30, 40, 25, 50, 49, 21, 70, 51]
            }
        ]
    });
    return (<div className="line">
			<Chart options={state.options} series={state.series} type="line" width="500"/>
		</div>);
}
export default Line;
`;function N(){const[t]=s.useState({options:{labels:["RadialBar"],plotOptions:{radialBar:{hollow:{size:"70%"}}}},series:[68]});return e("div",{className:"radialbar",children:e(r,{options:t.options,series:t.series,type:"radialBar",height:"380"})})}const C=`import { useState } from 'react';
import Chart from 'react-apexcharts';
function RadialBar() {
    const [state] = useState({
        options: {
            labels: ['RadialBar'],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%'
                    }
                }
            }
        },
        series: [68]
    });
    return (<div className="radialbar">
			<Chart options={state.options} series={state.series} type="radialBar" height="380"/>
		</div>);
}
export default RadialBar;
`;function g(){return i(u,{children:[i("div",{className:"flex w-full items-center justify-between mb-24",children:[e(o,{variant:"h4",children:"react-apexcharts"}),e(l,{variant:"contained",color:"secondary",component:"a",href:"https://github.com/apexcharts/react-apexcharts",target:"_blank",role:"button",startIcon:e(c,{children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"mb-16",component:"p",children:"React.js wrapper for ApexCharts to build interactive visualizations in react."}),e("hr",{}),e(o,{className:"text-32 mt-32 mb-8",component:"h2",children:"Example Usages"}),e(a,{className:"mb-64",component:d,raw:p}),e(a,{className:"mb-64",component:m,raw:h}),e(a,{className:"mb-64",component:f,raw:b}),e(a,{className:"mb-64",component:x,raw:S}),e(a,{className:"mb-64",component:w,raw:v}),e(a,{className:"mb-64",component:N,raw:C}),e(o,{className:"text-32 mt-32 mb-8",component:"h2",children:"Demos"}),i("ul",{children:[e("li",{className:"mb-8",children:e(n,{to:"/dashboards/analytics",children:"Analytics Dashboard"})}),e("li",{className:"mb-8",children:e(n,{to:"/dashboards/project",children:"Project Dashboard"})})]})]})}export{g as default};
