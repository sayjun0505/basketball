import{j as e,aI as d,c5 as h,r as u,d as i,cW as R,H as w,dQ as W,bQ as ie,bR as oe,bS as re,C as N,bU as ne,dO as P,p as se,bq as de,dR as j,s as L,dS as x,a_ as he,dT as q,T as a,bo as F,ay as X,az as Z,ag as Y,aE as ye,K as E,bn as ce,dM as pe,dU as _,I as ue,cg as me,dj as be,dV as fe,cI as ge,L as Te,F as Se,dz as A,bx as ve}from"./index-3voNJrtd.js";import{F as b}from"./FuseExample-L3LbvVcu.js";import{D as Ae}from"./DocumentationPageBreadcrumb-VLGyheWY.js";import{D as we}from"./DialogContentText-uNPVrmPG.js";import{d as Le}from"./Check-cZdMpU2X.js";import{d as Q}from"./Close-yOlOOA9v.js";import{C as Ie}from"./CircularProgress-OyaDIsfD.js";import{d as xe}from"./LocationOn-JsTSRiEw.js";import{G as B}from"./Grid-tp5bxruy.js";import{d as ke}from"./Settings-z2e6Dv4E.js";import{d as Ce}from"./Done-SmsZFwP_.js";import{V as Re}from"./index.esm-rA9Ky7E3.js";import"./DocumentationNavigation-us8sikvN.js";import"./memoize-one.esm-hqe5SRxC.js";function Pe(){return e(h,{disablePortal:!0,id:"combo-box-demo",options:Me,sx:{width:300},renderInput:t=>e(d,{...t,label:"Movie"})})}const Me=[{label:"The Shawshank Redemption",year:1994},{label:"The Godfather",year:1972},{label:"The Godfather: Part II",year:1974},{label:"The Dark Knight",year:2008},{label:"12 Angry Men",year:1957},{label:"Schindler's List",year:1993},{label:"Pulp Fiction",year:1994},{label:"The Lord of the Rings: The Return of the King",year:2003},{label:"The Good, the Bad and the Ugly",year:1966},{label:"Fight Club",year:1999},{label:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{label:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{label:"Forrest Gump",year:1994},{label:"Inception",year:2010},{label:"The Lord of the Rings: The Two Towers",year:2002},{label:"One Flew Over the Cuckoo's Nest",year:1975},{label:"Goodfellas",year:1990},{label:"The Matrix",year:1999},{label:"Seven Samurai",year:1954},{label:"Star Wars: Episode IV - A New Hope",year:1977},{label:"City of God",year:2002},{label:"Se7en",year:1995},{label:"The Silence of the Lambs",year:1991},{label:"It's a Wonderful Life",year:1946},{label:"Life Is Beautiful",year:1997},{label:"The Usual Suspects",year:1995},{label:"Léon: The Professional",year:1994},{label:"Spirited Away",year:2001},{label:"Saving Private Ryan",year:1998},{label:"Once Upon a Time in the West",year:1968},{label:"American History X",year:1998},{label:"Interstellar",year:2014},{label:"Casablanca",year:1942},{label:"City Lights",year:1931},{label:"Psycho",year:1960},{label:"The Green Mile",year:1999},{label:"The Intouchables",year:2011},{label:"Modern Times",year:1936},{label:"Raiders of the Lost Ark",year:1981},{label:"Rear Window",year:1954},{label:"The Pianist",year:2002},{label:"The Departed",year:2006},{label:"Terminator 2: Judgment Day",year:1991},{label:"Back to the Future",year:1985},{label:"Whiplash",year:2014},{label:"Gladiator",year:2e3},{label:"Memento",year:2e3},{label:"The Prestige",year:2006},{label:"The Lion King",year:1994},{label:"Apocalypse Now",year:1979},{label:"Alien",year:1979},{label:"Sunset Boulevard",year:1950},{label:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{label:"The Great Dictator",year:1940},{label:"Cinema Paradiso",year:1988},{label:"The Lives of Others",year:2006},{label:"Grave of the Fireflies",year:1988},{label:"Paths of Glory",year:1957},{label:"Django Unchained",year:2012},{label:"The Shining",year:1980},{label:"WALL·E",year:2008},{label:"American Beauty",year:1999},{label:"The Dark Knight Rises",year:2012},{label:"Princess Mononoke",year:1997},{label:"Aliens",year:1986},{label:"Oldboy",year:2003},{label:"Once Upon a Time in America",year:1984},{label:"Witness for the Prosecution",year:1957},{label:"Das Boot",year:1981},{label:"Citizen Kane",year:1941},{label:"North by Northwest",year:1959},{label:"Vertigo",year:1958},{label:"Star Wars: Episode VI - Return of the Jedi",year:1983},{label:"Reservoir Dogs",year:1992},{label:"Braveheart",year:1995},{label:"M",year:1931},{label:"Requiem for a Dream",year:2e3},{label:"Amélie",year:2001},{label:"A Clockwork Orange",year:1971},{label:"Like Stars on Earth",year:2007},{label:"Taxi Driver",year:1976},{label:"Lawrence of Arabia",year:1962},{label:"Double Indemnity",year:1944},{label:"Eternal Sunshine of the Spotless Mind",year:2004},{label:"Amadeus",year:1984},{label:"To Kill a Mockingbird",year:1962},{label:"Toy Story 3",year:2010},{label:"Logan",year:2017},{label:"Full Metal Jacket",year:1987},{label:"Dangal",year:2016},{label:"The Sting",year:1973},{label:"2001: A Space Odyssey",year:1968},{label:"Singin' in the Rain",year:1952},{label:"Toy Story",year:1995},{label:"Bicycle Thieves",year:1948},{label:"The Kid",year:1921},{label:"Inglourious Basterds",year:2009},{label:"Snatch",year:2e3},{label:"3 Idiots",year:2009},{label:"Monty Python and the Holy Grail",year:1975}],Ge=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function ComboBox() {
    return (<Autocomplete disablePortal id="combo-box-demo" options={top100Films} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Movie"/>}/>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
        label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
        label: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
        label: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
];
`;function Fe(){const t={options:U,getOptionLabel:o=>o.title},l={options:U.map(o=>o.title)},[r,n]=u.useState(null);return i(R,{spacing:1,sx:{width:300},children:[e(h,{...t,id:"disable-close-on-select",disableCloseOnSelect:!0,renderInput:o=>e(d,{...o,label:"disableCloseOnSelect",variant:"standard"})}),e(h,{...t,id:"clear-on-escape",clearOnEscape:!0,renderInput:o=>e(d,{...o,label:"clearOnEscape",variant:"standard"})}),e(h,{...t,id:"disable-clearable",disableClearable:!0,renderInput:o=>e(d,{...o,label:"disableClearable",variant:"standard"})}),e(h,{...t,id:"include-input-in-list",includeInputInList:!0,renderInput:o=>e(d,{...o,label:"includeInputInList",variant:"standard"})}),e(h,{...l,id:"flat-demo",renderInput:o=>e(d,{...o,label:"flat",variant:"standard"})}),e(h,{...t,id:"controlled-demo",value:r,onChange:(o,s)=>{n(s)},renderInput:o=>e(d,{...o,label:"controlled",variant:"standard"})}),e(h,{...t,id:"auto-complete",autoComplete:!0,includeInputInList:!0,renderInput:o=>e(d,{...o,label:"autoComplete",variant:"standard"})}),e(h,{...t,id:"disable-list-wrap",disableListWrap:!0,renderInput:o=>e(d,{...o,label:"disableListWrap",variant:"standard"})}),e(h,{...t,id:"open-on-focus",openOnFocus:!0,renderInput:o=>e(d,{...o,label:"openOnFocus",variant:"standard"})}),e(h,{...t,id:"auto-highlight",autoHighlight:!0,renderInput:o=>e(d,{...o,label:"autoHighlight",variant:"standard"})}),e(h,{...t,id:"auto-select",autoSelect:!0,renderInput:o=>e(d,{...o,label:"autoSelect",variant:"standard"})}),e(h,{...t,id:"disabled",disabled:!0,renderInput:o=>e(d,{...o,label:"disabled",variant:"standard"})}),e(h,{...t,id:"disable-portal",disablePortal:!0,renderInput:o=>e(d,{...o,label:"disablePortal",variant:"standard"})}),e(h,{...t,id:"blur-on-select",blurOnSelect:!0,renderInput:o=>e(d,{...o,label:"blurOnSelect",variant:"standard"})}),e(h,{...t,id:"clear-on-blur",clearOnBlur:!0,renderInput:o=>e(d,{...o,label:"clearOnBlur",variant:"standard"})}),e(h,{...t,id:"select-on-focus",selectOnFocus:!0,renderInput:o=>e(d,{...o,label:"selectOnFocus",variant:"standard"})}),e(h,{...l,id:"readOnly",readOnly:!0,defaultValue:l.options[13],renderInput:o=>e(d,{...o,label:"readOnly",variant:"standard"})})]})}const U=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],Be=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
export default function Playground() {
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option) => option.title,
    };
    const flatProps = {
        options: top100Films.map((option) => option.title),
    };
    const [value, setValue] = React.useState(null);
    return (<Stack spacing={1} sx={{ width: 300 }}>
      <Autocomplete {...defaultProps} id="disable-close-on-select" disableCloseOnSelect renderInput={(params) => (<TextField {...params} label="disableCloseOnSelect" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="clear-on-escape" clearOnEscape renderInput={(params) => (<TextField {...params} label="clearOnEscape" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="disable-clearable" disableClearable renderInput={(params) => (<TextField {...params} label="disableClearable" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="include-input-in-list" includeInputInList renderInput={(params) => (<TextField {...params} label="includeInputInList" variant="standard"/>)}/>
      <Autocomplete {...flatProps} id="flat-demo" renderInput={(params) => (<TextField {...params} label="flat" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="controlled-demo" value={value} onChange={(event, newValue) => {
            setValue(newValue);
        }} renderInput={(params) => (<TextField {...params} label="controlled" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="auto-complete" autoComplete includeInputInList renderInput={(params) => (<TextField {...params} label="autoComplete" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="disable-list-wrap" disableListWrap renderInput={(params) => (<TextField {...params} label="disableListWrap" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="open-on-focus" openOnFocus renderInput={(params) => (<TextField {...params} label="openOnFocus" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="auto-highlight" autoHighlight renderInput={(params) => (<TextField {...params} label="autoHighlight" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="auto-select" autoSelect renderInput={(params) => (<TextField {...params} label="autoSelect" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="disabled" disabled renderInput={(params) => (<TextField {...params} label="disabled" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="disable-portal" disablePortal renderInput={(params) => (<TextField {...params} label="disablePortal" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="blur-on-select" blurOnSelect renderInput={(params) => (<TextField {...params} label="blurOnSelect" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="clear-on-blur" clearOnBlur renderInput={(params) => (<TextField {...params} label="clearOnBlur" variant="standard"/>)}/>
      <Autocomplete {...defaultProps} id="select-on-focus" selectOnFocus renderInput={(params) => (<TextField {...params} label="selectOnFocus" variant="standard"/>)}/>
      <Autocomplete {...flatProps} id="readOnly" readOnly defaultValue={flatProps.options[13]} renderInput={(params) => (<TextField {...params} label="readOnly" variant="standard"/>)}/>
    </Stack>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`;function Oe(){return e(h,{id:"country-select-demo",sx:{width:300},options:De,autoHighlight:!0,getOptionLabel:t=>t.label,renderOption:(t,l)=>i(w,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...t,children:[e("img",{loading:"lazy",width:"20",srcSet:`https://flagcdn.com/w40/${l.code.toLowerCase()}.png 2x`,src:`https://flagcdn.com/w20/${l.code.toLowerCase()}.png`,alt:""}),l.label," (",l.code,") +",l.phone]}),renderInput:t=>e(d,{...t,label:"Choose a country",inputProps:{...t.inputProps,autoComplete:"new-password"}})})}const De=[{code:"AD",label:"Andorra",phone:"376"},{code:"AE",label:"United Arab Emirates",phone:"971"},{code:"AF",label:"Afghanistan",phone:"93"},{code:"AG",label:"Antigua and Barbuda",phone:"1-268"},{code:"AI",label:"Anguilla",phone:"1-264"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AQ",label:"Antarctica",phone:"672"},{code:"AR",label:"Argentina",phone:"54"},{code:"AS",label:"American Samoa",phone:"1-684"},{code:"AT",label:"Austria",phone:"43"},{code:"AU",label:"Australia",phone:"61",suggested:!0},{code:"AW",label:"Aruba",phone:"297"},{code:"AX",label:"Alland Islands",phone:"358"},{code:"AZ",label:"Azerbaijan",phone:"994"},{code:"BA",label:"Bosnia and Herzegovina",phone:"387"},{code:"BB",label:"Barbados",phone:"1-246"},{code:"BD",label:"Bangladesh",phone:"880"},{code:"BE",label:"Belgium",phone:"32"},{code:"BF",label:"Burkina Faso",phone:"226"},{code:"BG",label:"Bulgaria",phone:"359"},{code:"BH",label:"Bahrain",phone:"973"},{code:"BI",label:"Burundi",phone:"257"},{code:"BJ",label:"Benin",phone:"229"},{code:"BL",label:"Saint Barthelemy",phone:"590"},{code:"BM",label:"Bermuda",phone:"1-441"},{code:"BN",label:"Brunei Darussalam",phone:"673"},{code:"BO",label:"Bolivia",phone:"591"},{code:"BR",label:"Brazil",phone:"55"},{code:"BS",label:"Bahamas",phone:"1-242"},{code:"BT",label:"Bhutan",phone:"975"},{code:"BV",label:"Bouvet Island",phone:"47"},{code:"BW",label:"Botswana",phone:"267"},{code:"BY",label:"Belarus",phone:"375"},{code:"BZ",label:"Belize",phone:"501"},{code:"CA",label:"Canada",phone:"1",suggested:!0},{code:"CC",label:"Cocos (Keeling) Islands",phone:"61"},{code:"CD",label:"Congo, Democratic Republic of the",phone:"243"},{code:"CF",label:"Central African Republic",phone:"236"},{code:"CG",label:"Congo, Republic of the",phone:"242"},{code:"CH",label:"Switzerland",phone:"41"},{code:"CI",label:"Cote d'Ivoire",phone:"225"},{code:"CK",label:"Cook Islands",phone:"682"},{code:"CL",label:"Chile",phone:"56"},{code:"CM",label:"Cameroon",phone:"237"},{code:"CN",label:"China",phone:"86"},{code:"CO",label:"Colombia",phone:"57"},{code:"CR",label:"Costa Rica",phone:"506"},{code:"CU",label:"Cuba",phone:"53"},{code:"CV",label:"Cape Verde",phone:"238"},{code:"CW",label:"Curacao",phone:"599"},{code:"CX",label:"Christmas Island",phone:"61"},{code:"CY",label:"Cyprus",phone:"357"},{code:"CZ",label:"Czech Republic",phone:"420"},{code:"DE",label:"Germany",phone:"49",suggested:!0},{code:"DJ",label:"Djibouti",phone:"253"},{code:"DK",label:"Denmark",phone:"45"},{code:"DM",label:"Dominica",phone:"1-767"},{code:"DO",label:"Dominican Republic",phone:"1-809"},{code:"DZ",label:"Algeria",phone:"213"},{code:"EC",label:"Ecuador",phone:"593"},{code:"EE",label:"Estonia",phone:"372"},{code:"EG",label:"Egypt",phone:"20"},{code:"EH",label:"Western Sahara",phone:"212"},{code:"ER",label:"Eritrea",phone:"291"},{code:"ES",label:"Spain",phone:"34"},{code:"ET",label:"Ethiopia",phone:"251"},{code:"FI",label:"Finland",phone:"358"},{code:"FJ",label:"Fiji",phone:"679"},{code:"FK",label:"Falkland Islands (Malvinas)",phone:"500"},{code:"FM",label:"Micronesia, Federated States of",phone:"691"},{code:"FO",label:"Faroe Islands",phone:"298"},{code:"FR",label:"France",phone:"33",suggested:!0},{code:"GA",label:"Gabon",phone:"241"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"GD",label:"Grenada",phone:"1-473"},{code:"GE",label:"Georgia",phone:"995"},{code:"GF",label:"French Guiana",phone:"594"},{code:"GG",label:"Guernsey",phone:"44"},{code:"GH",label:"Ghana",phone:"233"},{code:"GI",label:"Gibraltar",phone:"350"},{code:"GL",label:"Greenland",phone:"299"},{code:"GM",label:"Gambia",phone:"220"},{code:"GN",label:"Guinea",phone:"224"},{code:"GP",label:"Guadeloupe",phone:"590"},{code:"GQ",label:"Equatorial Guinea",phone:"240"},{code:"GR",label:"Greece",phone:"30"},{code:"GS",label:"South Georgia and the South Sandwich Islands",phone:"500"},{code:"GT",label:"Guatemala",phone:"502"},{code:"GU",label:"Guam",phone:"1-671"},{code:"GW",label:"Guinea-Bissau",phone:"245"},{code:"GY",label:"Guyana",phone:"592"},{code:"HK",label:"Hong Kong",phone:"852"},{code:"HM",label:"Heard Island and McDonald Islands",phone:"672"},{code:"HN",label:"Honduras",phone:"504"},{code:"HR",label:"Croatia",phone:"385"},{code:"HT",label:"Haiti",phone:"509"},{code:"HU",label:"Hungary",phone:"36"},{code:"ID",label:"Indonesia",phone:"62"},{code:"IE",label:"Ireland",phone:"353"},{code:"IL",label:"Israel",phone:"972"},{code:"IM",label:"Isle of Man",phone:"44"},{code:"IN",label:"India",phone:"91"},{code:"IO",label:"British Indian Ocean Territory",phone:"246"},{code:"IQ",label:"Iraq",phone:"964"},{code:"IR",label:"Iran, Islamic Republic of",phone:"98"},{code:"IS",label:"Iceland",phone:"354"},{code:"IT",label:"Italy",phone:"39"},{code:"JE",label:"Jersey",phone:"44"},{code:"JM",label:"Jamaica",phone:"1-876"},{code:"JO",label:"Jordan",phone:"962"},{code:"JP",label:"Japan",phone:"81",suggested:!0},{code:"KE",label:"Kenya",phone:"254"},{code:"KG",label:"Kyrgyzstan",phone:"996"},{code:"KH",label:"Cambodia",phone:"855"},{code:"KI",label:"Kiribati",phone:"686"},{code:"KM",label:"Comoros",phone:"269"},{code:"KN",label:"Saint Kitts and Nevis",phone:"1-869"},{code:"KP",label:"Korea, Democratic People's Republic of",phone:"850"},{code:"KR",label:"Korea, Republic of",phone:"82"},{code:"KW",label:"Kuwait",phone:"965"},{code:"KY",label:"Cayman Islands",phone:"1-345"},{code:"KZ",label:"Kazakhstan",phone:"7"},{code:"LA",label:"Lao People's Democratic Republic",phone:"856"},{code:"LB",label:"Lebanon",phone:"961"},{code:"LC",label:"Saint Lucia",phone:"1-758"},{code:"LI",label:"Liechtenstein",phone:"423"},{code:"LK",label:"Sri Lanka",phone:"94"},{code:"LR",label:"Liberia",phone:"231"},{code:"LS",label:"Lesotho",phone:"266"},{code:"LT",label:"Lithuania",phone:"370"},{code:"LU",label:"Luxembourg",phone:"352"},{code:"LV",label:"Latvia",phone:"371"},{code:"LY",label:"Libya",phone:"218"},{code:"MA",label:"Morocco",phone:"212"},{code:"MC",label:"Monaco",phone:"377"},{code:"MD",label:"Moldova, Republic of",phone:"373"},{code:"ME",label:"Montenegro",phone:"382"},{code:"MF",label:"Saint Martin (French part)",phone:"590"},{code:"MG",label:"Madagascar",phone:"261"},{code:"MH",label:"Marshall Islands",phone:"692"},{code:"MK",label:"Macedonia, the Former Yugoslav Republic of",phone:"389"},{code:"ML",label:"Mali",phone:"223"},{code:"MM",label:"Myanmar",phone:"95"},{code:"MN",label:"Mongolia",phone:"976"},{code:"MO",label:"Macao",phone:"853"},{code:"MP",label:"Northern Mariana Islands",phone:"1-670"},{code:"MQ",label:"Martinique",phone:"596"},{code:"MR",label:"Mauritania",phone:"222"},{code:"MS",label:"Montserrat",phone:"1-664"},{code:"MT",label:"Malta",phone:"356"},{code:"MU",label:"Mauritius",phone:"230"},{code:"MV",label:"Maldives",phone:"960"},{code:"MW",label:"Malawi",phone:"265"},{code:"MX",label:"Mexico",phone:"52"},{code:"MY",label:"Malaysia",phone:"60"},{code:"MZ",label:"Mozambique",phone:"258"},{code:"NA",label:"Namibia",phone:"264"},{code:"NC",label:"New Caledonia",phone:"687"},{code:"NE",label:"Niger",phone:"227"},{code:"NF",label:"Norfolk Island",phone:"672"},{code:"NG",label:"Nigeria",phone:"234"},{code:"NI",label:"Nicaragua",phone:"505"},{code:"NL",label:"Netherlands",phone:"31"},{code:"NO",label:"Norway",phone:"47"},{code:"NP",label:"Nepal",phone:"977"},{code:"NR",label:"Nauru",phone:"674"},{code:"NU",label:"Niue",phone:"683"},{code:"NZ",label:"New Zealand",phone:"64"},{code:"OM",label:"Oman",phone:"968"},{code:"PA",label:"Panama",phone:"507"},{code:"PE",label:"Peru",phone:"51"},{code:"PF",label:"French Polynesia",phone:"689"},{code:"PG",label:"Papua New Guinea",phone:"675"},{code:"PH",label:"Philippines",phone:"63"},{code:"PK",label:"Pakistan",phone:"92"},{code:"PL",label:"Poland",phone:"48"},{code:"PM",label:"Saint Pierre and Miquelon",phone:"508"},{code:"PN",label:"Pitcairn",phone:"870"},{code:"PR",label:"Puerto Rico",phone:"1"},{code:"PS",label:"Palestine, State of",phone:"970"},{code:"PT",label:"Portugal",phone:"351"},{code:"PW",label:"Palau",phone:"680"},{code:"PY",label:"Paraguay",phone:"595"},{code:"QA",label:"Qatar",phone:"974"},{code:"RE",label:"Reunion",phone:"262"},{code:"RO",label:"Romania",phone:"40"},{code:"RS",label:"Serbia",phone:"381"},{code:"RU",label:"Russian Federation",phone:"7"},{code:"RW",label:"Rwanda",phone:"250"},{code:"SA",label:"Saudi Arabia",phone:"966"},{code:"SB",label:"Solomon Islands",phone:"677"},{code:"SC",label:"Seychelles",phone:"248"},{code:"SD",label:"Sudan",phone:"249"},{code:"SE",label:"Sweden",phone:"46"},{code:"SG",label:"Singapore",phone:"65"},{code:"SH",label:"Saint Helena",phone:"290"},{code:"SI",label:"Slovenia",phone:"386"},{code:"SJ",label:"Svalbard and Jan Mayen",phone:"47"},{code:"SK",label:"Slovakia",phone:"421"},{code:"SL",label:"Sierra Leone",phone:"232"},{code:"SM",label:"San Marino",phone:"378"},{code:"SN",label:"Senegal",phone:"221"},{code:"SO",label:"Somalia",phone:"252"},{code:"SR",label:"Suriname",phone:"597"},{code:"SS",label:"South Sudan",phone:"211"},{code:"ST",label:"Sao Tome and Principe",phone:"239"},{code:"SV",label:"El Salvador",phone:"503"},{code:"SX",label:"Sint Maarten (Dutch part)",phone:"1-721"},{code:"SY",label:"Syrian Arab Republic",phone:"963"},{code:"SZ",label:"Swaziland",phone:"268"},{code:"TC",label:"Turks and Caicos Islands",phone:"1-649"},{code:"TD",label:"Chad",phone:"235"},{code:"TF",label:"French Southern Territories",phone:"262"},{code:"TG",label:"Togo",phone:"228"},{code:"TH",label:"Thailand",phone:"66"},{code:"TJ",label:"Tajikistan",phone:"992"},{code:"TK",label:"Tokelau",phone:"690"},{code:"TL",label:"Timor-Leste",phone:"670"},{code:"TM",label:"Turkmenistan",phone:"993"},{code:"TN",label:"Tunisia",phone:"216"},{code:"TO",label:"Tonga",phone:"676"},{code:"TR",label:"Turkey",phone:"90"},{code:"TT",label:"Trinidad and Tobago",phone:"1-868"},{code:"TV",label:"Tuvalu",phone:"688"},{code:"TW",label:"Taiwan",phone:"886"},{code:"TZ",label:"United Republic of Tanzania",phone:"255"},{code:"UA",label:"Ukraine",phone:"380"},{code:"UG",label:"Uganda",phone:"256"},{code:"US",label:"United States",phone:"1",suggested:!0},{code:"UY",label:"Uruguay",phone:"598"},{code:"UZ",label:"Uzbekistan",phone:"998"},{code:"VA",label:"Holy See (Vatican City State)",phone:"379"},{code:"VC",label:"Saint Vincent and the Grenadines",phone:"1-784"},{code:"VE",label:"Venezuela",phone:"58"},{code:"VG",label:"British Virgin Islands",phone:"1-284"},{code:"VI",label:"US Virgin Islands",phone:"1-340"},{code:"VN",label:"Vietnam",phone:"84"},{code:"VU",label:"Vanuatu",phone:"678"},{code:"WF",label:"Wallis and Futuna",phone:"681"},{code:"WS",label:"Samoa",phone:"685"},{code:"XK",label:"Kosovo",phone:"383"},{code:"YE",label:"Yemen",phone:"967"},{code:"YT",label:"Mayotte",phone:"262"},{code:"ZA",label:"South Africa",phone:"27"},{code:"ZM",label:"Zambia",phone:"260"},{code:"ZW",label:"Zimbabwe",phone:"263"}],Ne=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function CountrySelect() {
    return (<Autocomplete id="country-select-demo" sx={{ width: 300 }} options={countries} autoHighlight getOptionLabel={(option) => option.label} renderOption={(props, option) => (<Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img loading="lazy" width="20" srcSet={\`https://flagcdn.com/w40/\${option.code.toLowerCase()}.png 2x\`} src={\`https://flagcdn.com/w20/\${option.code.toLowerCase()}.png\`} alt=""/>
          {option.label} ({option.code}) +{option.phone}
        </Box>)} renderInput={(params) => (<TextField {...params} label="Choose a country" inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
            }}/>)}/>);
}
// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
        code: 'AE',
        label: 'United Arab Emirates',
        phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
        code: 'AG',
        label: 'Antigua and Barbuda',
        phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
        code: 'AU',
        label: 'Australia',
        phone: '61',
        suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
        code: 'BA',
        label: 'Bosnia and Herzegovina',
        phone: '387',
    },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
    { code: 'BI', label: 'Burundi', phone: '257' },
    { code: 'BJ', label: 'Benin', phone: '229' },
    { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { code: 'BM', label: 'Bermuda', phone: '1-441' },
    { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { code: 'BO', label: 'Bolivia', phone: '591' },
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'BT', label: 'Bhutan', phone: '975' },
    { code: 'BV', label: 'Bouvet Island', phone: '47' },
    { code: 'BW', label: 'Botswana', phone: '267' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BZ', label: 'Belize', phone: '501' },
    {
        code: 'CA',
        label: 'Canada',
        phone: '1',
        suggested: true,
    },
    {
        code: 'CC',
        label: 'Cocos (Keeling) Islands',
        phone: '61',
    },
    {
        code: 'CD',
        label: 'Congo, Democratic Republic of the',
        phone: '243',
    },
    {
        code: 'CF',
        label: 'Central African Republic',
        phone: '236',
    },
    {
        code: 'CG',
        label: 'Congo, Republic of the',
        phone: '242',
    },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { code: 'CK', label: 'Cook Islands', phone: '682' },
    { code: 'CL', label: 'Chile', phone: '56' },
    { code: 'CM', label: 'Cameroon', phone: '237' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'CO', label: 'Colombia', phone: '57' },
    { code: 'CR', label: 'Costa Rica', phone: '506' },
    { code: 'CU', label: 'Cuba', phone: '53' },
    { code: 'CV', label: 'Cape Verde', phone: '238' },
    { code: 'CW', label: 'Curacao', phone: '599' },
    { code: 'CX', label: 'Christmas Island', phone: '61' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    {
        code: 'DE',
        label: 'Germany',
        phone: '49',
        suggested: true,
    },
    { code: 'DJ', label: 'Djibouti', phone: '253' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'DM', label: 'Dominica', phone: '1-767' },
    {
        code: 'DO',
        label: 'Dominican Republic',
        phone: '1-809',
    },
    { code: 'DZ', label: 'Algeria', phone: '213' },
    { code: 'EC', label: 'Ecuador', phone: '593' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'EH', label: 'Western Sahara', phone: '212' },
    { code: 'ER', label: 'Eritrea', phone: '291' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'ET', label: 'Ethiopia', phone: '251' },
    { code: 'FI', label: 'Finland', phone: '358' },
    { code: 'FJ', label: 'Fiji', phone: '679' },
    {
        code: 'FK',
        label: 'Falkland Islands (Malvinas)',
        phone: '500',
    },
    {
        code: 'FM',
        label: 'Micronesia, Federated States of',
        phone: '691',
    },
    { code: 'FO', label: 'Faroe Islands', phone: '298' },
    {
        code: 'FR',
        label: 'France',
        phone: '33',
        suggested: true,
    },
    { code: 'GA', label: 'Gabon', phone: '241' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'GD', label: 'Grenada', phone: '1-473' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'GF', label: 'French Guiana', phone: '594' },
    { code: 'GG', label: 'Guernsey', phone: '44' },
    { code: 'GH', label: 'Ghana', phone: '233' },
    { code: 'GI', label: 'Gibraltar', phone: '350' },
    { code: 'GL', label: 'Greenland', phone: '299' },
    { code: 'GM', label: 'Gambia', phone: '220' },
    { code: 'GN', label: 'Guinea', phone: '224' },
    { code: 'GP', label: 'Guadeloupe', phone: '590' },
    { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { code: 'GR', label: 'Greece', phone: '30' },
    {
        code: 'GS',
        label: 'South Georgia and the South Sandwich Islands',
        phone: '500',
    },
    { code: 'GT', label: 'Guatemala', phone: '502' },
    { code: 'GU', label: 'Guam', phone: '1-671' },
    { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { code: 'GY', label: 'Guyana', phone: '592' },
    { code: 'HK', label: 'Hong Kong', phone: '852' },
    {
        code: 'HM',
        label: 'Heard Island and McDonald Islands',
        phone: '672',
    },
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    {
        code: 'IO',
        label: 'British Indian Ocean Territory',
        phone: '246',
    },
    { code: 'IQ', label: 'Iraq', phone: '964' },
    {
        code: 'IR',
        label: 'Iran, Islamic Republic of',
        phone: '98',
    },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    {
        code: 'JP',
        label: 'Japan',
        phone: '81',
        suggested: true,
    },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    {
        code: 'KN',
        label: 'Saint Kitts and Nevis',
        phone: '1-869',
    },
    {
        code: 'KP',
        label: "Korea, Democratic People's Republic of",
        phone: '850',
    },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
        code: 'LA',
        label: "Lao People's Democratic Republic",
        phone: '856',
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
        code: 'MD',
        label: 'Moldova, Republic of',
        phone: '373',
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
        code: 'MF',
        label: 'Saint Martin (French part)',
        phone: '590',
    },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    {
        code: 'MK',
        label: 'Macedonia, the Former Yugoslav Republic of',
        phone: '389',
    },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    {
        code: 'MP',
        label: 'Northern Mariana Islands',
        phone: '1-670',
    },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    {
        code: 'PM',
        label: 'Saint Pierre and Miquelon',
        phone: '508',
    },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    {
        code: 'PS',
        label: 'Palestine, State of',
        phone: '970',
    },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    {
        code: 'SJ',
        label: 'Svalbard and Jan Mayen',
        phone: '47',
    },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    {
        code: 'ST',
        label: 'Sao Tome and Principe',
        phone: '239',
    },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    {
        code: 'SX',
        label: 'Sint Maarten (Dutch part)',
        phone: '1-721',
    },
    {
        code: 'SY',
        label: 'Syrian Arab Republic',
        phone: '963',
    },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    {
        code: 'TC',
        label: 'Turks and Caicos Islands',
        phone: '1-649',
    },
    { code: 'TD', label: 'Chad', phone: '235' },
    {
        code: 'TF',
        label: 'French Southern Territories',
        phone: '262',
    },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    {
        code: 'TT',
        label: 'Trinidad and Tobago',
        phone: '1-868',
    },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    {
        code: 'TW',
        label: 'Taiwan',
        phone: '886',
    },
    {
        code: 'TZ',
        label: 'United Republic of Tanzania',
        phone: '255',
    },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    {
        code: 'US',
        label: 'United States',
        phone: '1',
        suggested: true,
    },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    {
        code: 'VA',
        label: 'Holy See (Vatican City State)',
        phone: '379',
    },
    {
        code: 'VC',
        label: 'Saint Vincent and the Grenadines',
        phone: '1-784',
    },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    {
        code: 'VG',
        label: 'British Virgin Islands',
        phone: '1-284',
    },
    {
        code: 'VI',
        label: 'US Virgin Islands',
        phone: '1-340',
    },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];
`,H=["Option 1","Option 2"];function We(){const[t,l]=u.useState(H[0]),[r,n]=u.useState("");return i("div",{children:[e("div",{children:`value: ${t!==null?`'${t}'`:"null"}`}),e("div",{children:`inputValue: '${r}'`}),e("br",{}),e(h,{value:t,onChange:(o,s)=>{l(s)},inputValue:r,onInputChange:(o,s)=>{n(s)},id:"controllable-states-demo",options:H,sx:{width:300},renderInput:o=>e(d,{...o,label:"Controllable"})})]})}const Ee=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const options = ['Option 1', 'Option 2'];
export default function ControllableStates() {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    return (<div>
      <div>{\`value: \${value !== null ? \`'\${value}'\` : 'null'}\`}</div>
      <div>{\`inputValue: '\${inputValue}'\`}</div>
      <br />
      <Autocomplete value={value} onChange={(event, newValue) => {
            setValue(newValue);
        }} inputValue={inputValue} onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
        }} id="controllable-states-demo" options={options} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Controllable"/>}/>
    </div>);
}
`;function Ve(){return i(R,{spacing:2,sx:{width:300},children:[e(h,{id:"free-solo-demo",freeSolo:!0,options:z.map(t=>t.title),renderInput:t=>e(d,{...t,label:"freeSolo"})}),e(h,{freeSolo:!0,id:"free-solo-2-demo",disableClearable:!0,options:z.map(t=>t.title),renderInput:t=>e(d,{...t,label:"Search input",InputProps:{...t.InputProps,type:"search"}})})]})}const z=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],Ke=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
export default function FreeSolo() {
    return (<Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete id="free-solo-demo" freeSolo options={top100Films.map((option) => option.title)} renderInput={(params) => <TextField {...params} label="freeSolo"/>}/>
      <Autocomplete freeSolo id="free-solo-2-demo" disableClearable options={top100Films.map((option) => option.title)} renderInput={(params) => (<TextField {...params} label="Search input" InputProps={{
                ...params.InputProps,
                type: 'search',
            }}/>)}/>
    </Stack>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`,Ue=W();function He(){const[t,l]=u.useState(null);return e(h,{value:t,onChange:(r,n)=>{typeof n=="string"?l({title:n}):n&&n.inputValue?l({title:n.inputValue}):l(n)},filterOptions:(r,n)=>{const o=Ue(r,n),{inputValue:s}=n,p=r.some(S=>s===S.title);return s!==""&&!p&&o.push({inputValue:s,title:`Add "${s}"`}),o},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:ze,getOptionLabel:r=>typeof r=="string"?r:r.inputValue?r.inputValue:r.title,renderOption:(r,n)=>e("li",{...r,children:n.title}),sx:{width:300},freeSolo:!0,renderInput:r=>e(d,{...r,label:"Free solo with text demo"})})}const ze=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],Je=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
const filter = createFilterOptions();
export default function FreeSoloCreateOption() {
    const [value, setValue] = React.useState(null);
    return (<Autocomplete value={value} onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
                setValue({
                    title: newValue,
                });
            }
            else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                    title: newValue.inputValue,
                });
            }
            else {
                setValue(newValue);
            }
        }} filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some((option) => inputValue === option.title);
            if (inputValue !== '' && !isExisting) {
                filtered.push({
                    inputValue,
                    title: \`Add "\${inputValue}"\`,
                });
            }
            return filtered;
        }} selectOnFocus clearOnBlur handleHomeEndKeys id="free-solo-with-text-demo" options={top100Films} getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
                return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
                return option.inputValue;
            }
            // Regular option
            return option.title;
        }} renderOption={(props, option) => <li {...props}>{option.title}</li>} sx={{ width: 300 }} freeSolo renderInput={(params) => (<TextField {...params} label="Free solo with text demo"/>)}/>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`,$e=W();function je(){const[t,l]=u.useState(null),[r,n]=u.useState(!1),o=()=>{p({title:"",year:""}),n(!1)},[s,p]=u.useState({title:"",year:""}),S=y=>{y.preventDefault(),l({title:s.title,year:parseInt(s.year,10)}),o()};return i(u.Fragment,{children:[e(h,{value:t,onChange:(y,c)=>{typeof c=="string"?setTimeout(()=>{n(!0),p({title:c,year:""})}):c&&c.inputValue?(n(!0),p({title:c.inputValue,year:""})):l(c)},filterOptions:(y,c)=>{const f=$e(y,c);return c.inputValue!==""&&f.push({inputValue:c.inputValue,title:`Add "${c.inputValue}"`}),f},id:"free-solo-dialog-demo",options:qe,getOptionLabel:y=>typeof y=="string"?y:y.inputValue?y.inputValue:y.title,selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,renderOption:(y,c)=>e("li",{...y,children:c.title}),sx:{width:300},freeSolo:!0,renderInput:y=>e(d,{...y,label:"Free solo dialog"})}),e(ne,{open:r,onClose:o,children:i("form",{onSubmit:S,children:[e(ie,{children:"Add a new film"}),i(oe,{children:[e(we,{children:"Did you miss any film in our list? Please, add it!"}),e(d,{autoFocus:!0,margin:"dense",id:"name",value:s.title,onChange:y=>p({...s,title:y.target.value}),label:"title",type:"text",variant:"standard"}),e(d,{margin:"dense",id:"name",value:s.year,onChange:y=>p({...s,year:y.target.value}),label:"year",type:"number",variant:"standard"})]}),i(re,{children:[e(N,{onClick:o,children:"Cancel"}),e(N,{type:"submit",children:"Add"})]})]})})]})}const qe=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],Xe=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
const filter = createFilterOptions();
export default function FreeSoloCreateOptionDialog() {
    const [value, setValue] = React.useState(null);
    const [open, toggleOpen] = React.useState(false);
    const handleClose = () => {
        setDialogValue({
            title: '',
            year: '',
        });
        toggleOpen(false);
    };
    const [dialogValue, setDialogValue] = React.useState({
        title: '',
        year: '',
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            title: dialogValue.title,
            year: parseInt(dialogValue.year, 10),
        });
        handleClose();
    };
    return (<React.Fragment>
      <Autocomplete value={value} onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
                // timeout to avoid instant validation of the dialog's form.
                setTimeout(() => {
                    toggleOpen(true);
                    setDialogValue({
                        title: newValue,
                        year: '',
                    });
                });
            }
            else if (newValue && newValue.inputValue) {
                toggleOpen(true);
                setDialogValue({
                    title: newValue.inputValue,
                    year: '',
                });
            }
            else {
                setValue(newValue);
            }
        }} filterOptions={(options, params) => {
            const filtered = filter(options, params);
            if (params.inputValue !== '') {
                filtered.push({
                    inputValue: params.inputValue,
                    title: \`Add "\${params.inputValue}"\`,
                });
            }
            return filtered;
        }} id="free-solo-dialog-demo" options={top100Films} getOptionLabel={(option) => {
            // e.g. value selected with enter, right from the input
            if (typeof option === 'string') {
                return option;
            }
            if (option.inputValue) {
                return option.inputValue;
            }
            return option.title;
        }} selectOnFocus clearOnBlur handleHomeEndKeys renderOption={(props, option) => <li {...props}>{option.title}</li>} sx={{ width: 300 }} freeSolo renderInput={(params) => <TextField {...params} label="Free solo dialog"/>}/>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new film</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any film in our list? Please, add it!
            </DialogContentText>
            <TextField autoFocus margin="dense" id="name" value={dialogValue.title} onChange={(event) => setDialogValue({
            ...dialogValue,
            title: event.target.value,
        })} label="title" type="text" variant="standard"/>
            <TextField margin="dense" id="name" value={dialogValue.year} onChange={(event) => setDialogValue({
            ...dialogValue,
            year: event.target.value,
        })} label="year" type="number" variant="standard"/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`;function Ze(){const t=Ye.map(l=>{const r=l.title[0].toUpperCase();return{firstLetter:/[0-9]/.test(r)?"0-9":r,...l}});return e(h,{id:"grouped-demo",options:t.sort((l,r)=>-r.firstLetter.localeCompare(l.firstLetter)),groupBy:l=>l.firstLetter,getOptionLabel:l=>l.title,sx:{width:300},renderInput:l=>e(d,{...l,label:"With categories"})})}const Ye=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],_e=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function Grouped() {
    const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });
    return (<Autocomplete id="grouped-demo" options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))} groupBy={(option) => option.firstLetter} getOptionLabel={(option) => option.title} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="With categories"/>}/>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`,Qe=P("div")(({theme:t})=>({position:"sticky",top:"-8px",padding:"4px 10px",color:t.palette.primary.main,backgroundColor:t.palette.mode==="light"?se(t.palette.primary.light,.85):de(t.palette.primary.main,.8)})),et=P("ul")({padding:0});function tt(){const t=at.map(l=>{const r=l.title[0].toUpperCase();return{firstLetter:/[0-9]/.test(r)?"0-9":r,...l}});return e(h,{id:"grouped-demo",options:t.sort((l,r)=>-r.firstLetter.localeCompare(l.firstLetter)),groupBy:l=>l.firstLetter,getOptionLabel:l=>l.title,sx:{width:300},renderInput:l=>e(d,{...l,label:"With categories"}),renderGroup:l=>i("li",{children:[e(Qe,{children:l.group}),e(et,{children:l.children})]},l.key)})}const at=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],lt=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled, lighten, darken } from '@mui/system';
const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.mode === 'light'
        ? lighten(theme.palette.primary.light, 0.85)
        : darken(theme.palette.primary.main, 0.8),
}));
const GroupItems = styled('ul')({
    padding: 0,
});
export default function RenderGroup() {
    const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });
    return (<Autocomplete id="grouped-demo" options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))} groupBy={(option) => option.firstLetter} getOptionLabel={(option) => option.title} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="With categories"/>} renderGroup={(params) => (<li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>)}/>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`;function it(){return e(h,{id:"disabled-options-demo",options:O,getOptionDisabled:t=>t===O[0]||t===O[2],sx:{width:300},renderInput:t=>e(d,{...t,label:"Disabled options"})})}const O=Array.from(new Array(24*2)).map((t,l)=>`${l<20?"0":""}${Math.floor(l/2)}:${l%2===0?"00":"30"}`),ot=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function DisabledOptions() {
    return (<Autocomplete id="disabled-options-demo" options={timeSlots} getOptionDisabled={(option) => option === timeSlots[0] || option === timeSlots[2]} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Disabled options"/>}/>);
}
// One time slot every 30 minutes.
const timeSlots = Array.from(new Array(24 * 2)).map((_, index) => \`\${index < 20 ? '0' : ''}\${Math.floor(index / 2)}:\${index % 2 === 0 ? '00' : '30'}\`);
`,rt=P("label")({display:"block"}),nt=P("input")(({theme:t})=>({width:200,backgroundColor:t.palette.mode==="light"?"#fff":"#000",color:t.palette.mode==="light"?"#000":"#fff"})),st=P("ul")(({theme:t})=>({width:200,margin:0,padding:0,zIndex:1,position:"absolute",listStyle:"none",backgroundColor:t.palette.mode==="light"?"#fff":"#000",overflow:"auto",maxHeight:200,border:"1px solid rgba(0,0,0,.25)","& li.Mui-focused":{backgroundColor:"#4a8df6",color:"white",cursor:"pointer"},"& li:active":{backgroundColor:"#2977f5",color:"white"}}));function dt(){const{getRootProps:t,getInputLabelProps:l,getInputProps:r,getListboxProps:n,getOptionProps:o,groupedOptions:s}=j({id:"use-autocomplete-demo",options:ht,getOptionLabel:p=>p.title});return i("div",{children:[i("div",{...t(),children:[e(rt,{...l(),children:"useAutocomplete"}),e(nt,{...r()})]}),s.length>0?e(st,{...n(),children:s.map((p,S)=>e("li",{...o({option:p,index:S}),children:p.title}))}):null]})}const ht=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],yt=`import * as React from 'react';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';
const Label = styled('label')({
    display: 'block',
});
const Input = styled('input')(({ theme }) => ({
    width: 200,
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
}));
const Listbox = styled('ul')(({ theme }) => ({
    width: 200,
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
    overflow: 'auto',
    maxHeight: 200,
    border: '1px solid rgba(0,0,0,.25)',
    '& li.Mui-focused': {
        backgroundColor: '#4a8df6',
        color: 'white',
        cursor: 'pointer',
    },
    '& li:active': {
        backgroundColor: '#2977f5',
        color: 'white',
    },
}));
export default function UseAutocomplete() {
    const { getRootProps, getInputLabelProps, getInputProps, getListboxProps, getOptionProps, groupedOptions, } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: top100Films,
        getOptionLabel: (option) => option.title,
    });
    return (<div>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>useAutocomplete</Label>
        <Input {...getInputProps()}/>
      </div>
      {groupedOptions.length > 0 ? (<Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (<li {...getOptionProps({ option, index })}>{option.title}</li>))}
        </Listbox>) : null}
    </div>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`,ct=L("div")(({theme:t})=>`
  color: ${t.palette.mode==="dark"?"rgba(255,255,255,0.65)":"rgba(0,0,0,.85)"};
  font-size: 14px;
`),pt=L("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`,ut=L("div")(({theme:t})=>`
  width: 300px;
  border: 1px solid ${t.palette.mode==="dark"?"#434343":"#d9d9d9"};
  background-color: ${t.palette.mode==="dark"?"#141414":"#fff"};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${t.palette.mode==="dark"?"#177ddc":"#40a9ff"};
  }

  &.focused {
    border-color: ${t.palette.mode==="dark"?"#177ddc":"#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${t.palette.mode==="dark"?"#141414":"#fff"};
    color: ${t.palette.mode==="dark"?"rgba(255,255,255,0.65)":"rgba(0,0,0,.85)"};
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`);function mt(t){const{label:l,onDelete:r,...n}=t;return i("div",{...n,children:[e("span",{children:l}),e(Q,{onClick:r})]})}const bt=L(mt)(({theme:t})=>`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${t.palette.mode==="dark"?"rgba(255,255,255,0.08)":"#fafafa"};
  border: 1px solid ${t.palette.mode==="dark"?"#303030":"#e8e8e8"};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${t.palette.mode==="dark"?"#177ddc":"#40a9ff"};
    background-color: ${t.palette.mode==="dark"?"#003b57":"#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`),ft=L("ul")(({theme:t})=>`
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${t.palette.mode==="dark"?"#141414":"#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${t.palette.mode==="dark"?"#2b2b2b":"#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${x.focused} {
    background-color: ${t.palette.mode==="dark"?"#003b57":"#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`);function gt(){const{getRootProps:t,getInputLabelProps:l,getInputProps:r,getTagProps:n,getListboxProps:o,getOptionProps:s,groupedOptions:p,value:S,focused:y,setAnchorEl:c}=j({id:"customized-hook-demo",defaultValue:[J[1]],multiple:!0,options:J,getOptionLabel:f=>f.title});return i(ct,{children:[i("div",{...t(),children:[e(pt,{...l(),children:"Customized hook"}),i(ut,{ref:c,className:y?"focused":"",children:[S.map((f,m)=>e(bt,{label:f.title,...n({index:m})})),e("input",{...r()})]})]}),p.length>0?e(ft,{...o(),children:p.map((f,m)=>i("li",{...s({option:f,index:m}),children:[e("span",{children:f.title}),e(Le,{fontSize:"small"})]}))}):null]})}const J=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],Tt=`import * as React from 'react';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
const Root = styled('div')(({ theme }) => \`
  color: \${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'};
  font-size: 14px;
\`);
const Label = styled('label') \`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
\`;
const InputWrapper = styled('div')(({ theme }) => \`
  width: 300px;
  border: 1px solid \${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: \${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: \${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
  }

  &.focused {
    border-color: \${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: \${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: \${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'};
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
\`);
function Tag(props) {
    const { label, onDelete, ...other } = props;
    return (<div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete}/>
    </div>);
}
const StyledTag = styled(Tag)(({ theme }) => \`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: \${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#fafafa'};
  border: 1px solid \${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: \${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    background-color: \${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
\`);
const Listbox = styled('ul')(({ theme }) => \`
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: \${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: \${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.\${autocompleteClasses.focused} {
    background-color: \${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
\`);
export default function CustomizedHook() {
    const { getRootProps, getInputLabelProps, getInputProps, getTagProps, getListboxProps, getOptionProps, groupedOptions, value, focused, setAnchorEl, } = useAutocomplete({
        id: 'customized-hook-demo',
        defaultValue: [top100Films[1]],
        multiple: true,
        options: top100Films,
        getOptionLabel: (option) => option.title,
    });
    return (<Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Customized hook</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option, index) => (<StyledTag label={option.title} {...getTagProps({ index })}/>))}
          <input {...getInputProps()}/>
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (<Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (<li {...getOptionProps({ option, index })}>
              <span>{option.title}</span>
              <CheckIcon fontSize="small"/>
            </li>))}
        </Listbox>) : null}
    </Root>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`;function St(t){return new Promise(l=>{setTimeout(()=>{l()},t)})}function vt(){const[t,l]=u.useState(!1),[r,n]=u.useState([]),o=t&&r.length===0;return u.useEffect(()=>{let s=!0;if(o)return(async()=>(await St(1e3),s&&n([...At])))(),()=>{s=!1}},[o]),u.useEffect(()=>{t||n([])},[t]),e(h,{id:"asynchronous-demo",sx:{width:300},open:t,onOpen:()=>{l(!0)},onClose:()=>{l(!1)},isOptionEqualToValue:(s,p)=>s.title===p.title,getOptionLabel:s=>s.title,options:r,loading:o,renderInput:s=>e(d,{...s,label:"Asynchronous",InputProps:{...s.InputProps,endAdornment:i(u.Fragment,{children:[o?e(Ie,{color:"inherit",size:20}):null,s.InputProps.endAdornment]})}})})}const At=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014}],wt=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
function sleep(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}
export default function Asynchronous() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    React.useEffect(() => {
        let active = true;
        if (!loading) {
            return undefined;
        }
        (async () => {
            await sleep(1e3); // For demo purposes.
            if (active) {
                setOptions([...topFilms]);
            }
        })();
        return () => {
            active = false;
        };
    }, [loading]);
    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);
    return (<Autocomplete id="asynchronous-demo" sx={{ width: 300 }} open={open} onOpen={() => {
            setOpen(true);
        }} onClose={() => {
            setOpen(false);
        }} isOptionEqualToValue={(option, value) => option.title === value.title} getOptionLabel={(option) => option.title} options={options} loading={loading} renderInput={(params) => (<TextField {...params} label="Asynchronous" InputProps={{
                ...params.InputProps,
                endAdornment: (<React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>),
            }}/>)}/>);
}
// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
];
`,Lt="AIzaSyC3aviU6KHXAjoSnxcw6qbOhjnFctbxPkE";function It(t,l,r){if(!l)return;const n=document.createElement("script");n.setAttribute("async",""),n.setAttribute("id",r),n.src=t,l.appendChild(n)}const M={current:null};function xt(){const[t,l]=u.useState(null),[r,n]=u.useState(""),[o,s]=u.useState([]),p=u.useRef(!1);typeof window<"u"&&!p.current&&(document.querySelector("#google-maps")||It(`https://maps.googleapis.com/maps/api/js?key=${Lt}&libraries=places`,document.querySelector("head"),"google-maps"),p.current=!0);const S=u.useMemo(()=>he((y,c)=>{M.current.getPlacePredictions(y,c)},400),[]);return u.useEffect(()=>{let y=!0;if(!M.current&&window.google&&(M.current=new window.google.maps.places.AutocompleteService),!!M.current){if(r===""){s(t?[t]:[]);return}return S({input:r},c=>{if(y){let f=[];t&&(f=[t]),c&&(f=[...f,...c]),s(f)}}),()=>{y=!1}}},[t,r,S]),e(h,{id:"google-map-demo",sx:{width:300},getOptionLabel:y=>typeof y=="string"?y:y.description,filterOptions:y=>y,options:o,autoComplete:!0,includeInputInList:!0,filterSelectedOptions:!0,value:t,noOptionsText:"No locations",onChange:(y,c)=>{s(c?[c,...o]:o),l(c)},onInputChange:(y,c)=>{n(c)},renderInput:y=>e(d,{...y,label:"Add a location",fullWidth:!0}),renderOption:(y,c)=>{const f=c.structured_formatting.main_text_matched_substrings||[],m=q(c.structured_formatting.main_text,f.map(T=>[T.offset,T.offset+T.length]));return e("li",{...y,children:i(B,{container:!0,alignItems:"center",children:[e(B,{item:!0,sx:{display:"flex",width:44},children:e(xe,{sx:{color:"text.secondary"}})}),i(B,{item:!0,sx:{width:"calc(100% - 44px)",wordWrap:"break-word"},children:[m.map((T,g)=>e(w,{component:"span",sx:{fontWeight:T.highlight?"bold":"regular"},children:T.text},g)),e(a,{variant:"body2",color:"text.secondary",children:c.structured_formatting.secondary_text})]})]})})}})}const kt=`import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';
// This key was created specifically for the demo in mui.com.
// You need to create a new one for your application.
const GOOGLE_MAPS_API_KEY = 'AIzaSyC3aviU6KHXAjoSnxcw6qbOhjnFctbxPkE';
function loadScript(src, position, id) {
    if (!position) {
        return;
    }
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}
const autocompleteService = { current: null };
export default function GoogleMaps() {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);
    if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(\`https://maps.googleapis.com/maps/api/js?key=\${GOOGLE_MAPS_API_KEY}&libraries=places\`, document.querySelector('head'), 'google-maps');
        }
        loaded.current = true;
    }
    const fetch = React.useMemo(() => debounce((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
    }, 400), []);
    React.useEffect(() => {
        let active = true;
        if (!autocompleteService.current && window.google) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }
        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }
        fetch({ input: inputValue }, (results) => {
            if (active) {
                let newOptions = [];
                if (value) {
                    newOptions = [value];
                }
                if (results) {
                    newOptions = [...newOptions, ...results];
                }
                setOptions(newOptions);
            }
        });
        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);
    return (<Autocomplete id="google-map-demo" sx={{ width: 300 }} getOptionLabel={(option) => typeof option === 'string' ? option : option.description} filterOptions={(x) => x} options={options} autoComplete includeInputInList filterSelectedOptions value={value} noOptionsText="No locations" onChange={(event, newValue) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
        }} onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
        }} renderInput={(params) => (<TextField {...params} label="Add a location" fullWidth/>)} renderOption={(props, option) => {
            const matches = option.structured_formatting.main_text_matched_substrings || [];
            const parts = parse(option.structured_formatting.main_text, matches.map((match) => [match.offset, match.offset + match.length]));
            return (<li {...props}>
            <Grid container alignItems="center">
              <Grid item sx={{ display: 'flex', width: 44 }}>
                <LocationOnIcon sx={{ color: 'text.secondary' }}/>
              </Grid>
              <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                {parts.map((part, index) => (<Box key={index} component="span" sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}>
                    {part.text}
                  </Box>))}
                <Typography variant="body2" color="text.secondary">
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          </li>);
        }}/>);
}
`;function Ct(){return i(R,{spacing:3,sx:{width:500},children:[e(h,{multiple:!0,id:"tags-standard",options:I,getOptionLabel:t=>t.title,defaultValue:[I[13]],renderInput:t=>e(d,{...t,variant:"standard",label:"Multiple values",placeholder:"Favorites"})}),e(h,{multiple:!0,id:"tags-outlined",options:I,getOptionLabel:t=>t.title,defaultValue:[I[13]],filterSelectedOptions:!0,renderInput:t=>e(d,{...t,label:"filterSelectedOptions",placeholder:"Favorites"})}),e(h,{multiple:!0,id:"tags-filled",options:I.map(t=>t.title),defaultValue:[I[13].title],freeSolo:!0,renderTags:(t,l)=>t.map((r,n)=>e(F,{variant:"outlined",label:r,...l({index:n})})),renderInput:t=>e(d,{...t,variant:"filled",label:"freeSolo",placeholder:"Favorites"})}),e(h,{multiple:!0,id:"tags-readOnly",options:I.map(t=>t.title),defaultValue:[I[12].title,I[13].title],readOnly:!0,renderInput:t=>e(d,{...t,label:"readOnly",placeholder:"Favorites"})})]})}const I=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],Rt=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
export default function Tags() {
    return (<Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete multiple id="tags-standard" options={top100Films} getOptionLabel={(option) => option.title} defaultValue={[top100Films[13]]} renderInput={(params) => (<TextField {...params} variant="standard" label="Multiple values" placeholder="Favorites"/>)}/>
      <Autocomplete multiple id="tags-outlined" options={top100Films} getOptionLabel={(option) => option.title} defaultValue={[top100Films[13]]} filterSelectedOptions renderInput={(params) => (<TextField {...params} label="filterSelectedOptions" placeholder="Favorites"/>)}/>
      <Autocomplete multiple id="tags-filled" options={top100Films.map((option) => option.title)} defaultValue={[top100Films[13].title]} freeSolo renderTags={(value, getTagProps) => value.map((option, index) => (<Chip variant="outlined" label={option} {...getTagProps({ index })}/>))} renderInput={(params) => (<TextField {...params} variant="filled" label="freeSolo" placeholder="Favorites"/>)}/>
      <Autocomplete multiple id="tags-readOnly" options={top100Films.map((option) => option.title)} defaultValue={[top100Films[12].title, top100Films[13].title]} readOnly renderInput={(params) => (<TextField {...params} label="readOnly" placeholder="Favorites"/>)}/>
    </Stack>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`;function Pt(){const t=[D[6]],[l,r]=u.useState([...t,D[13]]);return e(h,{multiple:!0,id:"fixed-tags-demo",value:l,onChange:(n,o)=>{r([...t,...o.filter(s=>t.indexOf(s)===-1)])},options:D,getOptionLabel:n=>n.title,renderTags:(n,o)=>n.map((s,p)=>e(F,{label:s.title,...o({index:p}),disabled:t.indexOf(s)!==-1})),style:{width:500},renderInput:n=>e(d,{...n,label:"Fixed tag",placeholder:"Favorites"})})}const D=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],Mt=`import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function FixedTags() {
    const fixedOptions = [top100Films[6]];
    const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);
    return (<Autocomplete multiple id="fixed-tags-demo" value={value} onChange={(event, newValue) => {
            setValue([
                ...fixedOptions,
                ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
            ]);
        }} options={top100Films} getOptionLabel={(option) => option.title} renderTags={(tagValue, getTagProps) => tagValue.map((option, index) => (<Chip label={option.title} {...getTagProps({ index })} disabled={fixedOptions.indexOf(option) !== -1}/>))} style={{ width: 500 }} renderInput={(params) => (<TextField {...params} label="Fixed tag" placeholder="Favorites"/>)}/>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`;var V={},Gt=Z;Object.defineProperty(V,"__esModule",{value:!0});var ee=V.default=void 0,Ft=Gt(X()),Bt=Y;ee=V.default=(0,Ft.default)((0,Bt.jsx)("path",{d:"M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"}),"CheckBoxOutlineBlank");var K={},Ot=Z;Object.defineProperty(K,"__esModule",{value:!0});var te=K.default=void 0,Dt=Ot(X()),Nt=Y;te=K.default=(0,Dt.default)((0,Nt.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckBox");const Wt=e(ee,{fontSize:"small"}),Et=e(te,{fontSize:"small"});function Vt(){return e(h,{multiple:!0,id:"checkboxes-tags-demo",options:Kt,disableCloseOnSelect:!0,getOptionLabel:t=>t.title,renderOption:(t,l,{selected:r})=>i("li",{...t,children:[e(ye,{icon:Wt,checkedIcon:Et,style:{marginRight:8},checked:r}),l.title]}),style:{width:500},renderInput:t=>e(d,{...t,label:"Checkboxes",placeholder:"Favorites"})})}const Kt=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014}],Ut=`import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;
export default function CheckboxesTags() {
    return (<Autocomplete multiple id="checkboxes-tags-demo" options={top100Films} disableCloseOnSelect getOptionLabel={(option) => option.title} renderOption={(props, option, { selected }) => (<li {...props}>
          <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected}/>
          {option.title}
        </li>)} style={{ width: 500 }} renderInput={(params) => (<TextField {...params} label="Checkboxes" placeholder="Favorites"/>)}/>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
];
`;function Ht(){return e(h,{multiple:!0,limitTags:2,id:"multiple-limit-tags",options:G,getOptionLabel:t=>t.title,defaultValue:[G[13],G[12],G[11]],renderInput:t=>e(d,{...t,label:"limitTags",placeholder:"Favorites"}),sx:{width:"500px"}})}const G=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],zt=`import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
export default function LimitTags() {
    return (<Autocomplete multiple limitTags={2} id="multiple-limit-tags" options={top100Films} getOptionLabel={(option) => option.title} defaultValue={[top100Films[13], top100Films[12], top100Films[11]]} renderInput={(params) => (<TextField {...params} label="limitTags" placeholder="Favorites"/>)} sx={{ width: '500px' }}/>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`;function Jt(){return i(R,{spacing:2,sx:{width:500},children:[e(h,{id:"size-small-standard",size:"small",options:v,getOptionLabel:t=>t.title,defaultValue:v[13],renderInput:t=>e(d,{...t,variant:"standard",label:"Size small",placeholder:"Favorites"})}),e(h,{multiple:!0,id:"size-small-standard-multi",size:"small",options:v,getOptionLabel:t=>t.title,defaultValue:[v[13]],renderInput:t=>e(d,{...t,variant:"standard",label:"Size small",placeholder:"Favorites"})}),e(h,{id:"size-small-outlined",size:"small",options:v,getOptionLabel:t=>t.title,defaultValue:v[13],renderInput:t=>e(d,{...t,label:"Size small",placeholder:"Favorites"})}),e(h,{multiple:!0,id:"size-small-outlined-multi",size:"small",options:v,getOptionLabel:t=>t.title,defaultValue:[v[13]],renderInput:t=>e(d,{...t,label:"Size small",placeholder:"Favorites"})}),e(h,{id:"size-small-filled",size:"small",options:v,getOptionLabel:t=>t.title,defaultValue:v[13],renderTags:(t,l)=>t.map((r,n)=>e(F,{variant:"outlined",label:r.title,size:"small",...l({index:n})})),renderInput:t=>e(d,{...t,variant:"filled",label:"Size small",placeholder:"Favorites"})}),e(h,{multiple:!0,id:"size-small-filled-multi",size:"small",options:v,getOptionLabel:t=>t.title,defaultValue:[v[13]],renderTags:(t,l)=>t.map((r,n)=>e(F,{variant:"outlined",label:r.title,size:"small",...l({index:n})})),renderInput:t=>e(d,{...t,variant:"filled",label:"Size small",placeholder:"Favorites"})})]})}const v=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],$t=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
export default function Sizes() {
    return (<Stack spacing={2} sx={{ width: 500 }}>
      <Autocomplete id="size-small-standard" size="small" options={top100Films} getOptionLabel={(option) => option.title} defaultValue={top100Films[13]} renderInput={(params) => (<TextField {...params} variant="standard" label="Size small" placeholder="Favorites"/>)}/>
      <Autocomplete multiple id="size-small-standard-multi" size="small" options={top100Films} getOptionLabel={(option) => option.title} defaultValue={[top100Films[13]]} renderInput={(params) => (<TextField {...params} variant="standard" label="Size small" placeholder="Favorites"/>)}/>
      <Autocomplete id="size-small-outlined" size="small" options={top100Films} getOptionLabel={(option) => option.title} defaultValue={top100Films[13]} renderInput={(params) => (<TextField {...params} label="Size small" placeholder="Favorites"/>)}/>
      <Autocomplete multiple id="size-small-outlined-multi" size="small" options={top100Films} getOptionLabel={(option) => option.title} defaultValue={[top100Films[13]]} renderInput={(params) => (<TextField {...params} label="Size small" placeholder="Favorites"/>)}/>
      <Autocomplete id="size-small-filled" size="small" options={top100Films} getOptionLabel={(option) => option.title} defaultValue={top100Films[13]} renderTags={(value, getTagProps) => value.map((option, index) => (<Chip variant="outlined" label={option.title} size="small" {...getTagProps({ index })}/>))} renderInput={(params) => (<TextField {...params} variant="filled" label="Size small" placeholder="Favorites"/>)}/>
      <Autocomplete multiple id="size-small-filled-multi" size="small" options={top100Films} getOptionLabel={(option) => option.title} defaultValue={[top100Films[13]]} renderTags={(value, getTagProps) => value.map((option, index) => (<Chip variant="outlined" label={option.title} size="small" {...getTagProps({ index })}/>))} renderInput={(params) => (<TextField {...params} variant="filled" label="Size small" placeholder="Favorites"/>)}/>
    </Stack>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`,jt=["Option 1","Option 2"];function qt(){return i("label",{children:["Value:"," ",e(h,{sx:{display:"inline-block","& input":{width:200,bgcolor:"background.paper",color:t=>t.palette.getContrastText(t.palette.background.paper)}},id:"custom-input-demo",options:jt,renderInput:t=>e("div",{ref:t.InputProps.ref,children:e("input",{type:"text",...t.inputProps})})})]})}const Xt=`import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
const options = ['Option 1', 'Option 2'];
export default function CustomInputAutocomplete() {
    return (<label>
      Value:{' '}
      <Autocomplete sx={{
            display: 'inline-block',
            '& input': {
                width: 200,
                bgcolor: 'background.paper',
                color: (theme) => theme.palette.getContrastText(theme.palette.background.paper),
            },
        }} id="custom-input-demo" options={options} renderInput={(params) => (<div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps}/>
          </div>)}/>
    </label>);
}
`,Zt=t=>pe({palette:{mode:t.palette.mode},components:{MuiAutocomplete:{defaultProps:{renderOption:(l,r,n,o)=>e(w,{sx:{borderRadius:"8px",margin:"5px",[`&.${x.option}`]:{padding:"8px"}},component:"li",...l,children:o.getOptionLabel(r)})}}}});function Yt(){const t=E();return e(ce,{theme:Zt(t),children:i(R,{spacing:5,sx:{width:300},children:[e(_t,{}),e(Qt,{})]})})}function _t(){return e(h,{options:ta,getOptionLabel:t=>`${t.title} (${t.year})`,id:"movie-customized-option-demo",disableCloseOnSelect:!0,renderInput:t=>e(d,{...t,label:"Choose a movie",variant:"standard"})})}function Qt(){return e(h,{id:"country-customized-option-demo",options:ea,disableCloseOnSelect:!0,getOptionLabel:t=>`${t.label} (${t.code}) +${t.phone}`,renderInput:t=>e(d,{...t,label:"Choose a country"})})}const ea=[{code:"AD",label:"Andorra",phone:"376"},{code:"AE",label:"United Arab Emirates",phone:"971"},{code:"AF",label:"Afghanistan",phone:"93"},{code:"AG",label:"Antigua and Barbuda",phone:"1-268"},{code:"AI",label:"Anguilla",phone:"1-264"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AQ",label:"Antarctica",phone:"672"},{code:"AR",label:"Argentina",phone:"54"},{code:"AS",label:"American Samoa",phone:"1-684"},{code:"AT",label:"Austria",phone:"43"},{code:"AU",label:"Australia",phone:"61",suggested:!0},{code:"AW",label:"Aruba",phone:"297"},{code:"AX",label:"Alland Islands",phone:"358"},{code:"AZ",label:"Azerbaijan",phone:"994"},{code:"BA",label:"Bosnia and Herzegovina",phone:"387"},{code:"BB",label:"Barbados",phone:"1-246"},{code:"BD",label:"Bangladesh",phone:"880"},{code:"BE",label:"Belgium",phone:"32"},{code:"BF",label:"Burkina Faso",phone:"226"},{code:"BG",label:"Bulgaria",phone:"359"},{code:"BH",label:"Bahrain",phone:"973"},{code:"BI",label:"Burundi",phone:"257"},{code:"BJ",label:"Benin",phone:"229"},{code:"BL",label:"Saint Barthelemy",phone:"590"},{code:"BM",label:"Bermuda",phone:"1-441"},{code:"BN",label:"Brunei Darussalam",phone:"673"},{code:"BO",label:"Bolivia",phone:"591"},{code:"BR",label:"Brazil",phone:"55"},{code:"BS",label:"Bahamas",phone:"1-242"},{code:"BT",label:"Bhutan",phone:"975"},{code:"BV",label:"Bouvet Island",phone:"47"},{code:"BW",label:"Botswana",phone:"267"},{code:"BY",label:"Belarus",phone:"375"},{code:"BZ",label:"Belize",phone:"501"},{code:"CA",label:"Canada",phone:"1",suggested:!0},{code:"CC",label:"Cocos (Keeling) Islands",phone:"61"},{code:"CD",label:"Congo, Democratic Republic of the",phone:"243"},{code:"CF",label:"Central African Republic",phone:"236"},{code:"CG",label:"Congo, Republic of the",phone:"242"},{code:"CH",label:"Switzerland",phone:"41"},{code:"CI",label:"Cote d'Ivoire",phone:"225"},{code:"CK",label:"Cook Islands",phone:"682"},{code:"CL",label:"Chile",phone:"56"},{code:"CM",label:"Cameroon",phone:"237"},{code:"CN",label:"China",phone:"86"},{code:"CO",label:"Colombia",phone:"57"},{code:"CR",label:"Costa Rica",phone:"506"},{code:"CU",label:"Cuba",phone:"53"},{code:"CV",label:"Cape Verde",phone:"238"},{code:"CW",label:"Curacao",phone:"599"},{code:"CX",label:"Christmas Island",phone:"61"},{code:"CY",label:"Cyprus",phone:"357"},{code:"CZ",label:"Czech Republic",phone:"420"},{code:"DE",label:"Germany",phone:"49",suggested:!0},{code:"DJ",label:"Djibouti",phone:"253"},{code:"DK",label:"Denmark",phone:"45"},{code:"DM",label:"Dominica",phone:"1-767"},{code:"DO",label:"Dominican Republic",phone:"1-809"},{code:"DZ",label:"Algeria",phone:"213"},{code:"EC",label:"Ecuador",phone:"593"},{code:"EE",label:"Estonia",phone:"372"},{code:"EG",label:"Egypt",phone:"20"},{code:"EH",label:"Western Sahara",phone:"212"},{code:"ER",label:"Eritrea",phone:"291"},{code:"ES",label:"Spain",phone:"34"},{code:"ET",label:"Ethiopia",phone:"251"},{code:"FI",label:"Finland",phone:"358"},{code:"FJ",label:"Fiji",phone:"679"},{code:"FK",label:"Falkland Islands (Malvinas)",phone:"500"},{code:"FM",label:"Micronesia, Federated States of",phone:"691"},{code:"FO",label:"Faroe Islands",phone:"298"},{code:"FR",label:"France",phone:"33",suggested:!0},{code:"GA",label:"Gabon",phone:"241"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"GD",label:"Grenada",phone:"1-473"},{code:"GE",label:"Georgia",phone:"995"},{code:"GF",label:"French Guiana",phone:"594"},{code:"GG",label:"Guernsey",phone:"44"},{code:"GH",label:"Ghana",phone:"233"},{code:"GI",label:"Gibraltar",phone:"350"},{code:"GL",label:"Greenland",phone:"299"},{code:"GM",label:"Gambia",phone:"220"},{code:"GN",label:"Guinea",phone:"224"},{code:"GP",label:"Guadeloupe",phone:"590"},{code:"GQ",label:"Equatorial Guinea",phone:"240"},{code:"GR",label:"Greece",phone:"30"},{code:"GS",label:"South Georgia and the South Sandwich Islands",phone:"500"},{code:"GT",label:"Guatemala",phone:"502"},{code:"GU",label:"Guam",phone:"1-671"},{code:"GW",label:"Guinea-Bissau",phone:"245"},{code:"GY",label:"Guyana",phone:"592"},{code:"HK",label:"Hong Kong",phone:"852"},{code:"HM",label:"Heard Island and McDonald Islands",phone:"672"},{code:"HN",label:"Honduras",phone:"504"},{code:"HR",label:"Croatia",phone:"385"},{code:"HT",label:"Haiti",phone:"509"},{code:"HU",label:"Hungary",phone:"36"},{code:"ID",label:"Indonesia",phone:"62"},{code:"IE",label:"Ireland",phone:"353"},{code:"IL",label:"Israel",phone:"972"},{code:"IM",label:"Isle of Man",phone:"44"},{code:"IN",label:"India",phone:"91"},{code:"IO",label:"British Indian Ocean Territory",phone:"246"},{code:"IQ",label:"Iraq",phone:"964"},{code:"IR",label:"Iran, Islamic Republic of",phone:"98"},{code:"IS",label:"Iceland",phone:"354"},{code:"IT",label:"Italy",phone:"39"},{code:"JE",label:"Jersey",phone:"44"},{code:"JM",label:"Jamaica",phone:"1-876"},{code:"JO",label:"Jordan",phone:"962"},{code:"JP",label:"Japan",phone:"81",suggested:!0},{code:"KE",label:"Kenya",phone:"254"},{code:"KG",label:"Kyrgyzstan",phone:"996"},{code:"KH",label:"Cambodia",phone:"855"},{code:"KI",label:"Kiribati",phone:"686"},{code:"KM",label:"Comoros",phone:"269"},{code:"KN",label:"Saint Kitts and Nevis",phone:"1-869"},{code:"KP",label:"Korea, Democratic People's Republic of",phone:"850"},{code:"KR",label:"Korea, Republic of",phone:"82"},{code:"KW",label:"Kuwait",phone:"965"},{code:"KY",label:"Cayman Islands",phone:"1-345"},{code:"KZ",label:"Kazakhstan",phone:"7"},{code:"LA",label:"Lao People's Democratic Republic",phone:"856"},{code:"LB",label:"Lebanon",phone:"961"},{code:"LC",label:"Saint Lucia",phone:"1-758"},{code:"LI",label:"Liechtenstein",phone:"423"},{code:"LK",label:"Sri Lanka",phone:"94"},{code:"LR",label:"Liberia",phone:"231"},{code:"LS",label:"Lesotho",phone:"266"},{code:"LT",label:"Lithuania",phone:"370"},{code:"LU",label:"Luxembourg",phone:"352"},{code:"LV",label:"Latvia",phone:"371"},{code:"LY",label:"Libya",phone:"218"},{code:"MA",label:"Morocco",phone:"212"},{code:"MC",label:"Monaco",phone:"377"},{code:"MD",label:"Moldova, Republic of",phone:"373"},{code:"ME",label:"Montenegro",phone:"382"},{code:"MF",label:"Saint Martin (French part)",phone:"590"},{code:"MG",label:"Madagascar",phone:"261"},{code:"MH",label:"Marshall Islands",phone:"692"},{code:"MK",label:"Macedonia, the Former Yugoslav Republic of",phone:"389"},{code:"ML",label:"Mali",phone:"223"},{code:"MM",label:"Myanmar",phone:"95"},{code:"MN",label:"Mongolia",phone:"976"},{code:"MO",label:"Macao",phone:"853"},{code:"MP",label:"Northern Mariana Islands",phone:"1-670"},{code:"MQ",label:"Martinique",phone:"596"},{code:"MR",label:"Mauritania",phone:"222"},{code:"MS",label:"Montserrat",phone:"1-664"},{code:"MT",label:"Malta",phone:"356"},{code:"MU",label:"Mauritius",phone:"230"},{code:"MV",label:"Maldives",phone:"960"},{code:"MW",label:"Malawi",phone:"265"},{code:"MX",label:"Mexico",phone:"52"},{code:"MY",label:"Malaysia",phone:"60"},{code:"MZ",label:"Mozambique",phone:"258"},{code:"NA",label:"Namibia",phone:"264"},{code:"NC",label:"New Caledonia",phone:"687"},{code:"NE",label:"Niger",phone:"227"},{code:"NF",label:"Norfolk Island",phone:"672"},{code:"NG",label:"Nigeria",phone:"234"},{code:"NI",label:"Nicaragua",phone:"505"},{code:"NL",label:"Netherlands",phone:"31"},{code:"NO",label:"Norway",phone:"47"},{code:"NP",label:"Nepal",phone:"977"},{code:"NR",label:"Nauru",phone:"674"},{code:"NU",label:"Niue",phone:"683"},{code:"NZ",label:"New Zealand",phone:"64"},{code:"OM",label:"Oman",phone:"968"},{code:"PA",label:"Panama",phone:"507"},{code:"PE",label:"Peru",phone:"51"},{code:"PF",label:"French Polynesia",phone:"689"},{code:"PG",label:"Papua New Guinea",phone:"675"},{code:"PH",label:"Philippines",phone:"63"},{code:"PK",label:"Pakistan",phone:"92"},{code:"PL",label:"Poland",phone:"48"},{code:"PM",label:"Saint Pierre and Miquelon",phone:"508"},{code:"PN",label:"Pitcairn",phone:"870"},{code:"PR",label:"Puerto Rico",phone:"1"},{code:"PS",label:"Palestine, State of",phone:"970"},{code:"PT",label:"Portugal",phone:"351"},{code:"PW",label:"Palau",phone:"680"},{code:"PY",label:"Paraguay",phone:"595"},{code:"QA",label:"Qatar",phone:"974"},{code:"RE",label:"Reunion",phone:"262"},{code:"RO",label:"Romania",phone:"40"},{code:"RS",label:"Serbia",phone:"381"},{code:"RU",label:"Russian Federation",phone:"7"},{code:"RW",label:"Rwanda",phone:"250"},{code:"SA",label:"Saudi Arabia",phone:"966"},{code:"SB",label:"Solomon Islands",phone:"677"},{code:"SC",label:"Seychelles",phone:"248"},{code:"SD",label:"Sudan",phone:"249"},{code:"SE",label:"Sweden",phone:"46"},{code:"SG",label:"Singapore",phone:"65"},{code:"SH",label:"Saint Helena",phone:"290"},{code:"SI",label:"Slovenia",phone:"386"},{code:"SJ",label:"Svalbard and Jan Mayen",phone:"47"},{code:"SK",label:"Slovakia",phone:"421"},{code:"SL",label:"Sierra Leone",phone:"232"},{code:"SM",label:"San Marino",phone:"378"},{code:"SN",label:"Senegal",phone:"221"},{code:"SO",label:"Somalia",phone:"252"},{code:"SR",label:"Suriname",phone:"597"},{code:"SS",label:"South Sudan",phone:"211"},{code:"ST",label:"Sao Tome and Principe",phone:"239"},{code:"SV",label:"El Salvador",phone:"503"},{code:"SX",label:"Sint Maarten (Dutch part)",phone:"1-721"},{code:"SY",label:"Syrian Arab Republic",phone:"963"},{code:"SZ",label:"Swaziland",phone:"268"},{code:"TC",label:"Turks and Caicos Islands",phone:"1-649"},{code:"TD",label:"Chad",phone:"235"},{code:"TF",label:"French Southern Territories",phone:"262"},{code:"TG",label:"Togo",phone:"228"},{code:"TH",label:"Thailand",phone:"66"},{code:"TJ",label:"Tajikistan",phone:"992"},{code:"TK",label:"Tokelau",phone:"690"},{code:"TL",label:"Timor-Leste",phone:"670"},{code:"TM",label:"Turkmenistan",phone:"993"},{code:"TN",label:"Tunisia",phone:"216"},{code:"TO",label:"Tonga",phone:"676"},{code:"TR",label:"Turkey",phone:"90"},{code:"TT",label:"Trinidad and Tobago",phone:"1-868"},{code:"TV",label:"Tuvalu",phone:"688"},{code:"TW",label:"Taiwan",phone:"886"},{code:"TZ",label:"United Republic of Tanzania",phone:"255"},{code:"UA",label:"Ukraine",phone:"380"},{code:"UG",label:"Uganda",phone:"256"},{code:"US",label:"United States",phone:"1",suggested:!0},{code:"UY",label:"Uruguay",phone:"598"},{code:"UZ",label:"Uzbekistan",phone:"998"},{code:"VA",label:"Holy See (Vatican City State)",phone:"379"},{code:"VC",label:"Saint Vincent and the Grenadines",phone:"1-784"},{code:"VE",label:"Venezuela",phone:"58"},{code:"VG",label:"British Virgin Islands",phone:"1-284"},{code:"VI",label:"US Virgin Islands",phone:"1-340"},{code:"VN",label:"Vietnam",phone:"84"},{code:"VU",label:"Vanuatu",phone:"678"},{code:"WF",label:"Wallis and Futuna",phone:"681"},{code:"WS",label:"Samoa",phone:"685"},{code:"XK",label:"Kosovo",phone:"383"},{code:"YE",label:"Yemen",phone:"967"},{code:"YT",label:"Mayotte",phone:"262"},{code:"ZA",label:"South Africa",phone:"27"},{code:"ZM",label:"Zambia",phone:"260"},{code:"ZW",label:"Zimbabwe",phone:"263"}],ta=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],aa=`import * as React from 'react';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
// Theme.ts
const customTheme = (outerTheme) => createTheme({
    palette: {
        mode: outerTheme.palette.mode,
    },
    components: {
        MuiAutocomplete: {
            defaultProps: {
                renderOption: (props, option, state, ownerState) => (<Box sx={{
                        borderRadius: '8px',
                        margin: '5px',
                        [\`&.\${autocompleteClasses.option}\`]: {
                            padding: '8px',
                        },
                    }} component="li" {...props}>
              {ownerState.getOptionLabel(option)}
            </Box>),
            },
        },
    },
});
export default function GloballyCustomizedOptions() {
    // useTheme is used to determine the dark or light mode of the docs to maintain the Autocomplete component default styles.
    const outerTheme = useTheme();
    return (<ThemeProvider theme={customTheme(outerTheme)}>
      <Stack spacing={5} sx={{ width: 300 }}>
        <MovieSelect />
        <CountrySelect />
      </Stack>
    </ThemeProvider>);
}
function MovieSelect() {
    return (<Autocomplete options={top100Films} getOptionLabel={(option) => \`\${option.title} (\${option.year})\`} id="movie-customized-option-demo" disableCloseOnSelect renderInput={(params) => (<TextField {...params} label="Choose a movie" variant="standard"/>)}/>);
}
function CountrySelect() {
    return (<Autocomplete id="country-customized-option-demo" options={countries} disableCloseOnSelect getOptionLabel={(option) => \`\${option.label} (\${option.code}) +\${option.phone}\`} renderInput={(params) => <TextField {...params} label="Choose a country"/>}/>);
}
// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
        code: 'AE',
        label: 'United Arab Emirates',
        phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
        code: 'AG',
        label: 'Antigua and Barbuda',
        phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
        code: 'AU',
        label: 'Australia',
        phone: '61',
        suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
        code: 'BA',
        label: 'Bosnia and Herzegovina',
        phone: '387',
    },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
    { code: 'BI', label: 'Burundi', phone: '257' },
    { code: 'BJ', label: 'Benin', phone: '229' },
    { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { code: 'BM', label: 'Bermuda', phone: '1-441' },
    { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { code: 'BO', label: 'Bolivia', phone: '591' },
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'BT', label: 'Bhutan', phone: '975' },
    { code: 'BV', label: 'Bouvet Island', phone: '47' },
    { code: 'BW', label: 'Botswana', phone: '267' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BZ', label: 'Belize', phone: '501' },
    {
        code: 'CA',
        label: 'Canada',
        phone: '1',
        suggested: true,
    },
    {
        code: 'CC',
        label: 'Cocos (Keeling) Islands',
        phone: '61',
    },
    {
        code: 'CD',
        label: 'Congo, Democratic Republic of the',
        phone: '243',
    },
    {
        code: 'CF',
        label: 'Central African Republic',
        phone: '236',
    },
    {
        code: 'CG',
        label: 'Congo, Republic of the',
        phone: '242',
    },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { code: 'CK', label: 'Cook Islands', phone: '682' },
    { code: 'CL', label: 'Chile', phone: '56' },
    { code: 'CM', label: 'Cameroon', phone: '237' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'CO', label: 'Colombia', phone: '57' },
    { code: 'CR', label: 'Costa Rica', phone: '506' },
    { code: 'CU', label: 'Cuba', phone: '53' },
    { code: 'CV', label: 'Cape Verde', phone: '238' },
    { code: 'CW', label: 'Curacao', phone: '599' },
    { code: 'CX', label: 'Christmas Island', phone: '61' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    {
        code: 'DE',
        label: 'Germany',
        phone: '49',
        suggested: true,
    },
    { code: 'DJ', label: 'Djibouti', phone: '253' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'DM', label: 'Dominica', phone: '1-767' },
    {
        code: 'DO',
        label: 'Dominican Republic',
        phone: '1-809',
    },
    { code: 'DZ', label: 'Algeria', phone: '213' },
    { code: 'EC', label: 'Ecuador', phone: '593' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'EH', label: 'Western Sahara', phone: '212' },
    { code: 'ER', label: 'Eritrea', phone: '291' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'ET', label: 'Ethiopia', phone: '251' },
    { code: 'FI', label: 'Finland', phone: '358' },
    { code: 'FJ', label: 'Fiji', phone: '679' },
    {
        code: 'FK',
        label: 'Falkland Islands (Malvinas)',
        phone: '500',
    },
    {
        code: 'FM',
        label: 'Micronesia, Federated States of',
        phone: '691',
    },
    { code: 'FO', label: 'Faroe Islands', phone: '298' },
    {
        code: 'FR',
        label: 'France',
        phone: '33',
        suggested: true,
    },
    { code: 'GA', label: 'Gabon', phone: '241' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'GD', label: 'Grenada', phone: '1-473' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'GF', label: 'French Guiana', phone: '594' },
    { code: 'GG', label: 'Guernsey', phone: '44' },
    { code: 'GH', label: 'Ghana', phone: '233' },
    { code: 'GI', label: 'Gibraltar', phone: '350' },
    { code: 'GL', label: 'Greenland', phone: '299' },
    { code: 'GM', label: 'Gambia', phone: '220' },
    { code: 'GN', label: 'Guinea', phone: '224' },
    { code: 'GP', label: 'Guadeloupe', phone: '590' },
    { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { code: 'GR', label: 'Greece', phone: '30' },
    {
        code: 'GS',
        label: 'South Georgia and the South Sandwich Islands',
        phone: '500',
    },
    { code: 'GT', label: 'Guatemala', phone: '502' },
    { code: 'GU', label: 'Guam', phone: '1-671' },
    { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { code: 'GY', label: 'Guyana', phone: '592' },
    { code: 'HK', label: 'Hong Kong', phone: '852' },
    {
        code: 'HM',
        label: 'Heard Island and McDonald Islands',
        phone: '672',
    },
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    {
        code: 'IO',
        label: 'British Indian Ocean Territory',
        phone: '246',
    },
    { code: 'IQ', label: 'Iraq', phone: '964' },
    {
        code: 'IR',
        label: 'Iran, Islamic Republic of',
        phone: '98',
    },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    {
        code: 'JP',
        label: 'Japan',
        phone: '81',
        suggested: true,
    },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    {
        code: 'KN',
        label: 'Saint Kitts and Nevis',
        phone: '1-869',
    },
    {
        code: 'KP',
        label: "Korea, Democratic People's Republic of",
        phone: '850',
    },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
        code: 'LA',
        label: "Lao People's Democratic Republic",
        phone: '856',
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
        code: 'MD',
        label: 'Moldova, Republic of',
        phone: '373',
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
        code: 'MF',
        label: 'Saint Martin (French part)',
        phone: '590',
    },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    {
        code: 'MK',
        label: 'Macedonia, the Former Yugoslav Republic of',
        phone: '389',
    },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    {
        code: 'MP',
        label: 'Northern Mariana Islands',
        phone: '1-670',
    },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    {
        code: 'PM',
        label: 'Saint Pierre and Miquelon',
        phone: '508',
    },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    {
        code: 'PS',
        label: 'Palestine, State of',
        phone: '970',
    },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    {
        code: 'SJ',
        label: 'Svalbard and Jan Mayen',
        phone: '47',
    },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    {
        code: 'ST',
        label: 'Sao Tome and Principe',
        phone: '239',
    },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    {
        code: 'SX',
        label: 'Sint Maarten (Dutch part)',
        phone: '1-721',
    },
    {
        code: 'SY',
        label: 'Syrian Arab Republic',
        phone: '963',
    },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    {
        code: 'TC',
        label: 'Turks and Caicos Islands',
        phone: '1-649',
    },
    { code: 'TD', label: 'Chad', phone: '235' },
    {
        code: 'TF',
        label: 'French Southern Territories',
        phone: '262',
    },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    {
        code: 'TT',
        label: 'Trinidad and Tobago',
        phone: '1-868',
    },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    {
        code: 'TW',
        label: 'Taiwan',
        phone: '886',
    },
    {
        code: 'TZ',
        label: 'United Republic of Tanzania',
        phone: '255',
    },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    {
        code: 'US',
        label: 'United States',
        phone: '1',
        suggested: true,
    },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    {
        code: 'VA',
        label: 'Holy See (Vatican City State)',
        phone: '379',
    },
    {
        code: 'VC',
        label: 'Saint Vincent and the Grenadines',
        phone: '1-784',
    },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    {
        code: 'VG',
        label: 'British Virgin Islands',
        phone: '1-284',
    },
    {
        code: 'VI',
        label: 'US Virgin Islands',
        phone: '1-340',
    },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`,la=L("div")(({theme:t})=>({[`& .${x.paper}`]:{boxShadow:"none",margin:0,color:"inherit",fontSize:13},[`& .${x.listbox}`]:{backgroundColor:t.palette.mode==="light"?"#fff":"#1c2128",padding:0,[`& .${x.option}`]:{minHeight:"auto",alignItems:"flex-start",padding:8,borderBottom:`1px solid  ${t.palette.mode==="light"?" #eaecef":"#30363d"}`,'&[aria-selected="true"]':{backgroundColor:"transparent"},[`&.${x.focused}, &.${x.focused}[aria-selected="true"]`]:{backgroundColor:t.palette.action.hover}}},[`&.${x.popperDisablePortal}`]:{position:"relative"}}));function ia(t){const{disablePortal:l,anchorEl:r,open:n,...o}=t;return e(la,{...o})}const oa=L(_)(({theme:t})=>({border:`1px solid ${t.palette.mode==="light"?"#e1e4e8":"#30363d"}`,boxShadow:`0 8px 24px ${t.palette.mode==="light"?"rgba(149, 157, 165, 0.2)":"rgb(1, 4, 9)"}`,borderRadius:6,width:300,zIndex:t.zIndex.modal,fontSize:13,color:t.palette.mode==="light"?"#24292e":"#c9d1d9",backgroundColor:t.palette.mode==="light"?"#fff":"#1c2128"})),ra=L(ue)(({theme:t})=>({padding:10,width:"100%",borderBottom:`1px solid ${t.palette.mode==="light"?"#eaecef":"#30363d"}`,"& input":{borderRadius:4,backgroundColor:t.palette.mode==="light"?"#fff":"#0d1117",padding:8,transition:t.transitions.create(["border-color","box-shadow"]),border:`1px solid ${t.palette.mode==="light"?"#eaecef":"#30363d"}`,fontSize:14,"&:focus":{boxShadow:`0px 0px 0px 3px ${t.palette.mode==="light"?"rgba(3, 102, 214, 0.3)":"rgb(12, 45, 107)"}`,borderColor:t.palette.mode==="light"?"#0366d6":"#388bfd"}}})),na=L(me)(({theme:t})=>({fontSize:13,width:"100%",textAlign:"left",paddingBottom:8,color:t.palette.mode==="light"?"#586069":"#8b949e",fontWeight:600,"&:hover,&:focus":{color:t.palette.mode==="light"?"#0366d6":"#58a6ff"},"& span":{width:"100%"},"& svg":{width:16,height:16}}));function sa(){const[t,l]=u.useState(null),[r,n]=u.useState([C[1],C[11]]),[o,s]=u.useState([]),p=E(),S=m=>{s(r),l(m.currentTarget)},y=()=>{n(o),t&&t.focus(),l(null)},c=!!t,f=c?"github-label":void 0;return i(u.Fragment,{children:[i(w,{sx:{width:221,fontSize:13},children:[i(na,{disableRipple:!0,"aria-describedby":f,onClick:S,children:[e("span",{children:"Labels"}),e(ke,{})]}),r.map(m=>e(w,{sx:{mt:"3px",height:20,padding:".15em 4px",fontWeight:600,lineHeight:"15px",borderRadius:"2px"},style:{backgroundColor:m.color,color:p.palette.getContrastText(m.color)},children:m.name},m.name))]}),e(oa,{id:f,open:c,anchorEl:t,placement:"bottom-start",children:e(be,{onClickAway:y,children:i("div",{children:[e(w,{sx:{borderBottom:`1px solid ${p.palette.mode==="light"?"#eaecef":"#30363d"}`,padding:"8px 10px",fontWeight:600},children:"Apply labels to this pull request"}),e(h,{open:!0,multiple:!0,onClose:(m,T)=>{T==="escape"&&y()},value:o,onChange:(m,T,g)=>{m.type==="keydown"&&m.key==="Backspace"&&g==="removeOption"||s(T)},disableCloseOnSelect:!0,PopperComponent:ia,renderTags:()=>null,noOptionsText:"No labels",renderOption:(m,T,{selected:g})=>i("li",{...m,children:[e(w,{component:Ce,sx:{width:17,height:17,mr:"5px",ml:"-2px"},style:{visibility:g?"visible":"hidden"}}),e(w,{component:"span",sx:{width:14,height:14,flexShrink:0,borderRadius:"3px",mr:1,mt:"2px"},style:{backgroundColor:T.color}}),i(w,{sx:{flexGrow:1,"& span":{color:p.palette.mode==="light"?"#586069":"#8b949e"}},children:[T.name,e("br",{}),e("span",{children:T.description})]}),e(w,{component:Q,sx:{opacity:.6,width:18,height:18},style:{visibility:g?"visible":"hidden"}})]}),options:[...C].sort((m,T)=>{let g=r.indexOf(m);g=g===-1?r.length+C.indexOf(m):g;let k=r.indexOf(T);return k=k===-1?r.length+C.indexOf(T):k,g-k}),getOptionLabel:m=>m.name,renderInput:m=>e(ra,{ref:m.InputProps.ref,inputProps:m.inputProps,autoFocus:!0,placeholder:"Filter labels"})})]})})})]})}const C=[{name:"good first issue",color:"#7057ff",description:"Good for newcomers"},{name:"help wanted",color:"#008672",description:"Extra attention is needed"},{name:"priority: critical",color:"#b60205",description:""},{name:"priority: high",color:"#d93f0b",description:""},{name:"priority: low",color:"#0e8a16",description:""},{name:"priority: medium",color:"#fbca04",description:""},{name:"status: can't reproduce",color:"#fec1c1",description:""},{name:"status: confirmed",color:"#215cea",description:""},{name:"status: duplicate",color:"#cfd3d7",description:"This issue or pull request already exists"},{name:"status: needs information",color:"#fef2c0",description:""},{name:"status: wont do/fix",color:"#eeeeee",description:"This will not be worked on"},{name:"type: bug",color:"#d73a4a",description:"Something isn't working"},{name:"type: discussion",color:"#d4c5f9",description:""},{name:"type: documentation",color:"#006b75",description:""},{name:"type: enhancement",color:"#84b6eb",description:""},{name:"type: epic",color:"#3e4b9e",description:"A theme of work that contain sub-tasks"},{name:"type: feature request",color:"#fbca04",description:"New feature or request"},{name:"type: question",color:"#d876e3",description:"Further information is requested"}],da=`import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import Autocomplete, { autocompleteClasses, } from '@mui/material/Autocomplete';
import ButtonBase from '@mui/material/ButtonBase';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
const StyledAutocompletePopper = styled('div')(({ theme }) => ({
    [\`& .\${autocompleteClasses.paper}\`]: {
        boxShadow: 'none',
        margin: 0,
        color: 'inherit',
        fontSize: 13,
    },
    [\`& .\${autocompleteClasses.listbox}\`]: {
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
        padding: 0,
        [\`& .\${autocompleteClasses.option}\`]: {
            minHeight: 'auto',
            alignItems: 'flex-start',
            padding: 8,
            borderBottom: \`1px solid  \${theme.palette.mode === 'light' ? ' #eaecef' : '#30363d'}\`,
            '&[aria-selected="true"]': {
                backgroundColor: 'transparent',
            },
            [\`&.\${autocompleteClasses.focused}, &.\${autocompleteClasses.focused}[aria-selected="true"]\`]: {
                backgroundColor: theme.palette.action.hover,
            },
        },
    },
    [\`&.\${autocompleteClasses.popperDisablePortal}\`]: {
        position: 'relative',
    },
}));
function PopperComponent(props) {
    const { disablePortal, anchorEl, open, ...other } = props;
    return <StyledAutocompletePopper {...other}/>;
}
const StyledPopper = styled(Popper)(({ theme }) => ({
    border: \`1px solid \${theme.palette.mode === 'light' ? '#e1e4e8' : '#30363d'}\`,
    boxShadow: \`0 8px 24px \${theme.palette.mode === 'light' ? 'rgba(149, 157, 165, 0.2)' : 'rgb(1, 4, 9)'}\`,
    borderRadius: 6,
    width: 300,
    zIndex: theme.zIndex.modal,
    fontSize: 13,
    color: theme.palette.mode === 'light' ? '#24292e' : '#c9d1d9',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
}));
const StyledInput = styled(InputBase)(({ theme }) => ({
    padding: 10,
    width: '100%',
    borderBottom: \`1px solid \${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'}\`,
    '& input': {
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#0d1117',
        padding: 8,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        border: \`1px solid \${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'}\`,
        fontSize: 14,
        '&:focus': {
            boxShadow: \`0px 0px 0px 3px \${theme.palette.mode === 'light'
                ? 'rgba(3, 102, 214, 0.3)'
                : 'rgb(12, 45, 107)'}\`,
            borderColor: theme.palette.mode === 'light' ? '#0366d6' : '#388bfd',
        },
    },
}));
const Button = styled(ButtonBase)(({ theme }) => ({
    fontSize: 13,
    width: '100%',
    textAlign: 'left',
    paddingBottom: 8,
    color: theme.palette.mode === 'light' ? '#586069' : '#8b949e',
    fontWeight: 600,
    '&:hover,&:focus': {
        color: theme.palette.mode === 'light' ? '#0366d6' : '#58a6ff',
    },
    '& span': {
        width: '100%',
    },
    '& svg': {
        width: 16,
        height: 16,
    },
}));
export default function GitHubLabel() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState([labels[1], labels[11]]);
    const [pendingValue, setPendingValue] = React.useState([]);
    const theme = useTheme();
    const handleClick = (event) => {
        setPendingValue(value);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setValue(pendingValue);
        if (anchorEl) {
            anchorEl.focus();
        }
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'github-label' : undefined;
    return (<React.Fragment>
      <Box sx={{ width: 221, fontSize: 13 }}>
        <Button disableRipple aria-describedby={id} onClick={handleClick}>
          <span>Labels</span>
          <SettingsIcon />
        </Button>
        {value.map((label) => (<Box key={label.name} sx={{
                mt: '3px',
                height: 20,
                padding: '.15em 4px',
                fontWeight: 600,
                lineHeight: '15px',
                borderRadius: '2px',
            }} style={{
                backgroundColor: label.color,
                color: theme.palette.getContrastText(label.color),
            }}>
            {label.name}
          </Box>))}
      </Box>
      <StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Box sx={{
            borderBottom: \`1px solid \${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'}\`,
            padding: '8px 10px',
            fontWeight: 600,
        }}>
              Apply labels to this pull request
            </Box>
            <Autocomplete open multiple onClose={(event, reason) => {
            if (reason === 'escape') {
                handleClose();
            }
        }} value={pendingValue} onChange={(event, newValue, reason) => {
            if (event.type === 'keydown' &&
                event.key === 'Backspace' &&
                reason === 'removeOption') {
                return;
            }
            setPendingValue(newValue);
        }} disableCloseOnSelect PopperComponent={PopperComponent} renderTags={() => null} noOptionsText="No labels" renderOption={(props, option, { selected }) => (<li {...props}>
                  <Box component={DoneIcon} sx={{ width: 17, height: 17, mr: '5px', ml: '-2px' }} style={{
                visibility: selected ? 'visible' : 'hidden',
            }}/>
                  <Box component="span" sx={{
                width: 14,
                height: 14,
                flexShrink: 0,
                borderRadius: '3px',
                mr: 1,
                mt: '2px',
            }} style={{ backgroundColor: option.color }}/>
                  <Box sx={{
                flexGrow: 1,
                '& span': {
                    color: theme.palette.mode === 'light' ? '#586069' : '#8b949e',
                },
            }}>
                    {option.name}
                    <br />
                    <span>{option.description}</span>
                  </Box>
                  <Box component={CloseIcon} sx={{ opacity: 0.6, width: 18, height: 18 }} style={{
                visibility: selected ? 'visible' : 'hidden',
            }}/>
                </li>)} options={[...labels].sort((a, b) => {
            // Display the selected labels first.
            let ai = value.indexOf(a);
            ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
            let bi = value.indexOf(b);
            bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
            return ai - bi;
        })} getOptionLabel={(option) => option.name} renderInput={(params) => (<StyledInput ref={params.InputProps.ref} inputProps={params.inputProps} autoFocus placeholder="Filter labels"/>)}/>
          </div>
        </ClickAwayListener>
      </StyledPopper>
    </React.Fragment>);
}
// From https://github.com/abdonrd/github-labels
const labels = [
    {
        name: 'good first issue',
        color: '#7057ff',
        description: 'Good for newcomers',
    },
    {
        name: 'help wanted',
        color: '#008672',
        description: 'Extra attention is needed',
    },
    {
        name: 'priority: critical',
        color: '#b60205',
        description: '',
    },
    {
        name: 'priority: high',
        color: '#d93f0b',
        description: '',
    },
    {
        name: 'priority: low',
        color: '#0e8a16',
        description: '',
    },
    {
        name: 'priority: medium',
        color: '#fbca04',
        description: '',
    },
    {
        name: "status: can't reproduce",
        color: '#fec1c1',
        description: '',
    },
    {
        name: 'status: confirmed',
        color: '#215cea',
        description: '',
    },
    {
        name: 'status: duplicate',
        color: '#cfd3d7',
        description: 'This issue or pull request already exists',
    },
    {
        name: 'status: needs information',
        color: '#fef2c0',
        description: '',
    },
    {
        name: 'status: wont do/fix',
        color: '#eeeeee',
        description: 'This will not be worked on',
    },
    {
        name: 'type: bug',
        color: '#d73a4a',
        description: "Something isn't working",
    },
    {
        name: 'type: discussion',
        color: '#d4c5f9',
        description: '',
    },
    {
        name: 'type: documentation',
        color: '#006b75',
        description: '',
    },
    {
        name: 'type: enhancement',
        color: '#84b6eb',
        description: '',
    },
    {
        name: 'type: epic',
        color: '#3e4b9e',
        description: 'A theme of work that contain sub-tasks',
    },
    {
        name: 'type: feature request',
        color: '#fbca04',
        description: 'New feature or request',
    },
    {
        name: 'type: question',
        color: '#d876e3',
        description: 'Further information is requested',
    },
];
`;function ha(){const t=u.useRef(""),[l,r]=u.useState("");return e(h,{onKeyDown:n=>{n.key==="Tab"&&t.current&&(r(t.current),n.preventDefault())},onBlur:()=>{t.current=""},disablePortal:!0,inputValue:l,filterOptions:(n,o)=>n.filter(p=>p.label.toLowerCase().trim().includes(o.inputValue.toLowerCase().trim())),id:"combo-box-hint-demo",options:$,sx:{width:300},renderInput:n=>i(w,{sx:{position:"relative"},children:[e(a,{sx:{position:"absolute",opacity:.5,left:14,top:16},children:t.current}),e(d,{...n,onChange:o=>{const s=o.target.value;r(s);const p=$.find(S=>S.label.startsWith(s));s&&p?t.current=p.label:t.current=""},label:"Movie"})]})})}const $=[{label:"The Shawshank Redemption",year:1994},{label:"The Godfather",year:1972},{label:"The Godfather: Part II",year:1974},{label:"The Dark Knight",year:2008},{label:"12 Angry Men",year:1957},{label:"Schindler's List",year:1993},{label:"Pulp Fiction",year:1994},{label:"The Lord of the Rings: The Return of the King",year:2003},{label:"The Good, the Bad and the Ugly",year:1966},{label:"Fight Club",year:1999},{label:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{label:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{label:"Forrest Gump",year:1994},{label:"Inception",year:2010},{label:"The Lord of the Rings: The Two Towers",year:2002},{label:"One Flew Over the Cuckoo's Nest",year:1975},{label:"Goodfellas",year:1990},{label:"The Matrix",year:1999},{label:"Seven Samurai",year:1954},{label:"Star Wars: Episode IV - A New Hope",year:1977},{label:"City of God",year:2002},{label:"Se7en",year:1995},{label:"The Silence of the Lambs",year:1991},{label:"It's a Wonderful Life",year:1946},{label:"Life Is Beautiful",year:1997},{label:"The Usual Suspects",year:1995},{label:"Léon: The Professional",year:1994},{label:"Spirited Away",year:2001},{label:"Saving Private Ryan",year:1998},{label:"Once Upon a Time in the West",year:1968},{label:"American History X",year:1998},{label:"Interstellar",year:2014},{label:"Casablanca",year:1942},{label:"City Lights",year:1931},{label:"Psycho",year:1960},{label:"The Green Mile",year:1999},{label:"The Intouchables",year:2011},{label:"Modern Times",year:1936},{label:"Raiders of the Lost Ark",year:1981},{label:"Rear Window",year:1954},{label:"The Pianist",year:2002},{label:"The Departed",year:2006},{label:"Terminator 2: Judgment Day",year:1991},{label:"Back to the Future",year:1985},{label:"Whiplash",year:2014},{label:"Gladiator",year:2e3},{label:"Memento",year:2e3},{label:"The Prestige",year:2006},{label:"The Lion King",year:1994},{label:"Apocalypse Now",year:1979},{label:"Alien",year:1979},{label:"Sunset Boulevard",year:1950},{label:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{label:"The Great Dictator",year:1940},{label:"Cinema Paradiso",year:1988},{label:"The Lives of Others",year:2006},{label:"Grave of the Fireflies",year:1988},{label:"Paths of Glory",year:1957},{label:"Django Unchained",year:2012},{label:"The Shining",year:1980},{label:"WALL·E",year:2008},{label:"American Beauty",year:1999},{label:"The Dark Knight Rises",year:2012},{label:"Princess Mononoke",year:1997},{label:"Aliens",year:1986},{label:"Oldboy",year:2003},{label:"Once Upon a Time in America",year:1984},{label:"Witness for the Prosecution",year:1957},{label:"Das Boot",year:1981},{label:"Citizen Kane",year:1941},{label:"North by Northwest",year:1959},{label:"Vertigo",year:1958},{label:"Star Wars: Episode VI - Return of the Jedi",year:1983},{label:"Reservoir Dogs",year:1992},{label:"Braveheart",year:1995},{label:"M",year:1931},{label:"Requiem for a Dream",year:2e3},{label:"Amélie",year:2001},{label:"A Clockwork Orange",year:1971},{label:"Like Stars on Earth",year:2007},{label:"Taxi Driver",year:1976},{label:"Lawrence of Arabia",year:1962},{label:"Double Indemnity",year:1944},{label:"Eternal Sunshine of the Spotless Mind",year:2004},{label:"Amadeus",year:1984},{label:"To Kill a Mockingbird",year:1962},{label:"Toy Story 3",year:2010},{label:"Logan",year:2017},{label:"Full Metal Jacket",year:1987},{label:"Dangal",year:2016},{label:"The Sting",year:1973},{label:"2001: A Space Odyssey",year:1968},{label:"Singin' in the Rain",year:1952},{label:"Toy Story",year:1995},{label:"Bicycle Thieves",year:1948},{label:"The Kid",year:1921},{label:"Inglourious Basterds",year:2009},{label:"Snatch",year:2e3},{label:"3 Idiots",year:2009},{label:"Monty Python and the Holy Grail",year:1975}],ya=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography } from '@mui/material';
export default function AutocompleteHint() {
    const hint = React.useRef('');
    const [inputValue, setInputValue] = React.useState('');
    return (<Autocomplete onKeyDown={(event) => {
            if (event.key === 'Tab') {
                if (hint.current) {
                    setInputValue(hint.current);
                    event.preventDefault();
                }
            }
        }} onBlur={() => {
            hint.current = '';
        }} disablePortal inputValue={inputValue} filterOptions={(options, state) => {
            const displayOptions = options.filter((option) => option.label
                .toLowerCase()
                .trim()
                .includes(state.inputValue.toLowerCase().trim()));
            return displayOptions;
        }} id="combo-box-hint-demo" options={top100Films} sx={{ width: 300 }} renderInput={(params) => {
            return (<Box sx={{ position: 'relative' }}>
            <Typography sx={{ position: 'absolute', opacity: 0.5, left: 14, top: 16 }}>
              {hint.current}
            </Typography>
            <TextField {...params} onChange={(e) => {
                    const newValue = e.target.value;
                    setInputValue(newValue);
                    const matchingOption = top100Films.find((option) => option.label.startsWith(newValue));
                    if (newValue && matchingOption) {
                        hint.current = matchingOption.label;
                    }
                    else {
                        hint.current = '';
                    }
                }} label="Movie"/>
          </Box>);
        }}/>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
        label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
        label: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
        label: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
];
`;function ca(){return e(h,{id:"highlights-demo",sx:{width:300},options:pa,getOptionLabel:t=>t.title,renderInput:t=>e(d,{...t,label:"Highlights",margin:"normal"}),renderOption:(t,l,{inputValue:r})=>{const n=fe(l.title,r,{insideWords:!0}),o=q(l.title,n);return e("li",{...t,children:e("div",{children:o.map((s,p)=>e("span",{style:{fontWeight:s.highlight?700:400},children:s.text},p))})})}})}const pa=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],ua=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
export default function Highlights() {
    return (<Autocomplete id="highlights-demo" sx={{ width: 300 }} options={top100Films} getOptionLabel={(option) => option.title} renderInput={(params) => (<TextField {...params} label="Highlights" margin="normal"/>)} renderOption={(props, option, { inputValue }) => {
            const matches = match(option.title, inputValue, { insideWords: true });
            const parts = parse(option.title, matches);
            return (<li {...props}>
            <div>
              {parts.map((part, index) => (<span key={index} style={{
                        fontWeight: part.highlight ? 700 : 400,
                    }}>
                  {part.text}
                </span>))}
            </div>
          </li>);
        }}/>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`,ma=W({matchFrom:"start",stringify:t=>t.title});function ba(){return e(h,{id:"filter-demo",options:fa,getOptionLabel:t=>t.title,filterOptions:ma,sx:{width:300},renderInput:t=>e(d,{...t,label:"Custom filter"})})}const fa=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"Léon: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL·E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Amélie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],ga=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});
export default function Filter() {
    return (<Autocomplete id="filter-demo" options={top100Films} getOptionLabel={(option) => option.title} filterOptions={filterOptions} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Custom filter"/>}/>);
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];
`,ae=8;function Ta(t){const{data:l,index:r,style:n}=t,o=l[r],s={...n,top:n.top+ae};return o.hasOwnProperty("group")?e(Te,{component:"div",style:s,children:o.group},o.key):e(a,{component:"li",...o[0],noWrap:!0,style:s,children:`#${o[2]+1} - ${o[1]}`})}const le=u.createContext({}),Sa=u.forwardRef((t,l)=>{const r=u.useContext(le);return e("div",{ref:l,...t,...r})});function va(t){const l=u.useRef(null);return u.useEffect(()=>{l.current!=null&&l.current.resetAfterIndex(0,!0)},[t]),l}const Aa=u.forwardRef(function(l,r){const{children:n,...o}=l,s=[];n.forEach(g=>{s.push(g),s.push(...g.children||[])});const p=E(),S=ge(p.breakpoints.up("sm"),{noSsr:!0}),y=s.length,c=S?36:48,f=g=>g.hasOwnProperty("group")?48:c,m=()=>y>8?8*c:s.map(f).reduce((g,k)=>g+k,0),T=va(y);return e("div",{ref:r,children:e(le.Provider,{value:o,children:e(Re,{itemData:s,height:m()+2*ae,width:"100%",ref:T,outerElementType:Sa,innerElementType:"ul",itemSize:g=>f(s[g]),overscanCount:5,itemCount:y,children:Ta})})})});function wa(t){const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let r="";for(let n=0;n<t;n+=1)r+=l.charAt(Math.floor(Math.random()*l.length));return r}const La=L(_)({[`& .${x.listbox}`]:{boxSizing:"border-box","& ul":{padding:0,margin:0}}}),Ia=Array.from(new Array(1e4)).map(()=>wa(10+Math.ceil(Math.random()*20))).sort((t,l)=>t.toUpperCase().localeCompare(l.toUpperCase()));function xa(){return e(h,{id:"virtualize-demo",sx:{width:300},disableListWrap:!0,PopperComponent:La,ListboxComponent:Aa,options:Ia,groupBy:t=>t[0].toUpperCase(),renderInput:t=>e(d,{...t,label:"10,000 options"}),renderOption:(t,l,r)=>[t,l,r.index],renderGroup:t=>t})}const ka=`import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListSubheader from '@mui/material/ListSubheader';
import Popper from '@mui/material/Popper';
import { useTheme, styled } from '@mui/material/styles';
import { VariableSizeList } from 'react-window';
import Typography from '@mui/material/Typography';
const LISTBOX_PADDING = 8; // px
function renderRow(props) {
    const { data, index, style } = props;
    const dataSet = data[index];
    const inlineStyle = {
        ...style,
        top: style.top + LISTBOX_PADDING,
    };
    if (dataSet.hasOwnProperty('group')) {
        return (<ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
        {dataSet.group}
      </ListSubheader>);
    }
    return (<Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
      {\`#\${dataSet[2] + 1} - \${dataSet[1]}\`}
    </Typography>);
}
const OuterElementContext = React.createContext({});
const OuterElementType = React.forwardRef((props, ref) => {
    const outerProps = React.useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps}/>;
});
function useResetCache(data) {
    const ref = React.useRef(null);
    React.useEffect(() => {
        if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
        }
    }, [data]);
    return ref;
}
// Adapter for react-window
const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = [];
    children.forEach((item) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
    });
    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
        noSsr: true,
    });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;
    const getChildSize = (child) => {
        if (child.hasOwnProperty('group')) {
            return 48;
        }
        return itemSize;
    };
    const getHeight = () => {
        if (itemCount > 8) {
            return 8 * itemSize;
        }
        return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };
    const gridRef = useResetCache(itemCount);
    return (<div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList itemData={itemData} height={getHeight() + 2 * LISTBOX_PADDING} width="100%" ref={gridRef} outerElementType={OuterElementType} innerElementType="ul" itemSize={(index) => getChildSize(itemData[index])} overscanCount={5} itemCount={itemCount}>
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>);
});
function random(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
const StyledPopper = styled(Popper)({
    [\`& .\${autocompleteClasses.listbox}\`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0,
        },
    },
});
const OPTIONS = Array.from(new Array(10000))
    .map(() => random(10 + Math.ceil(Math.random() * 20)))
    .sort((a, b) => a.toUpperCase().localeCompare(b.toUpperCase()));
export default function Virtualize() {
    return (<Autocomplete id="virtualize-demo" sx={{ width: 300 }} disableListWrap PopperComponent={StyledPopper} ListboxComponent={ListboxComponent} options={OPTIONS} groupBy={(option) => option[0].toUpperCase()} renderInput={(params) => <TextField {...params} label="10,000 options"/>} renderOption={(props, option, state) => [props, option, state.index]} renderGroup={(params) => params}/>);
}
`;function Ua(t){return i(ve,{children:[i("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(Ae,{}),e(N,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/autocomplete",target:"_blank",role:"button",size:"small",startIcon:e(Se,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(a,{className:"text-32 my-16 font-700",component:"h1",children:"Autocomplete"}),e(a,{className:"description",children:"The autocomplete is a normal text input enhanced by a panel of suggested options."}),e(a,{className:"text-14 mb-32",component:"div",children:"The widget is useful for setting the value of a single-line textbox in one of two types of scenarios:"}),i("ol",{children:[i("li",{children:["The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name: ",e("a",{href:"#combo-box",children:"combo box"}),"."]}),i("li",{children:["The textbox may contain any arbitrary value, but it is advantageous to suggest possible values to the user, e.g., a search field may suggest similar or previous searches to save the user time: ",e("a",{href:"#free-solo",children:"free solo"}),"."]})]}),e(a,{className:"text-14 mb-32",component:"div",children:`It's meant to be an improved version of the "react-select" and "downshift" packages.`}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Combo box"}),e(a,{className:"text-14 mb-32",component:"div",children:"The value must be chosen from a predefined set of allowed values."}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"ComboBox.js",className:"my-16",iframe:!1,component:Pe,raw:Ge})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Options structure"}),e(a,{className:"text-14 mb-32",component:"div",children:"By default, the component accepts the following options structures:"}),e(A,{component:"pre",className:"language-ts",children:` 
interface AutocompleteOption {
  label: string;
}
// or
type AutocompleteOption = string;
`}),e(a,{className:"text-14 mb-32",component:"div",children:"for instance:"}),e(A,{component:"pre",className:"language-js",children:` 
const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];
// or
const options = ['The Godfather', 'Pulp Fiction'];
`}),i(a,{className:"text-14 mb-32",component:"div",children:["However, you can use different structures by providing a ",e("code",{children:"getOptionLabel"})," prop."]}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Playground"}),e(a,{className:"text-14 mb-32",component:"div",children:"Each of the following examples demonstrates one feature of the Autocomplete component."}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"Playground.js",className:"my-16",iframe:!1,component:Fe,raw:Be})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Country select"}),e(a,{className:"text-14 mb-32",component:"div",children:"Choose one of the 248 countries."}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"CountrySelect.js",className:"my-16",iframe:!1,component:Oe,raw:Ne})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Controlled states"}),e(a,{className:"text-14 mb-32",component:"div",children:"The component has two states that can be controlled:"}),i("ol",{children:[i("li",{children:['the "value" state with the ',e("code",{children:"value"}),"/",e("code",{children:"onChange"})," props combination. This state represents the value selected by the user, for instance when pressing ",e("kbd",{className:"key",children:"Enter"}),"."]}),i("li",{children:['the "input value" state with the ',e("code",{children:"inputValue"}),"/",e("code",{children:"onInputChange"})," props combination. This state represents the value displayed in the textbox."]})]}),e(a,{className:"text-14 mb-32",component:"div",children:"These two states are isolated, and should be controlled independently."}),i("div",{className:"border border-1 p-16 rounded-16 my-12",children:[i("ul",{className:"space-y-16",children:[i("li",{children:["A component is ",e("strong",{children:"controlled"})," when it's managed by its parent using props."]}),i("li",{children:["A component is ",e("strong",{children:"uncontrolled"})," when it's managed by its own local state."]})]}),i(a,{className:"text-14 mb-32",component:"div",children:["Learn more about controlled and uncontrolled components in the ",e("a",{href:"https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components",children:"React documentation"}),"."]})]}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"ControllableStates.js",className:"my-16",iframe:!1,component:We,raw:Ee})}),e(a,{className:"text-14 mb-32",component:"div",children:":::warning"}),i(a,{className:"text-14 mb-32",component:"div",children:["If you control the ",e("code",{children:"value"}),", make sure it's referentially stable between renders. In other words, the reference to the value shouldn't change if the value itself doesn't change."]}),e(A,{component:"pre",className:"language-tsx",children:` 
// ⚠️ BAD
return <Autocomplete multiple value={allValues.filter((v) => v.selected)} />;

// 👍 GOOD
const selectedValues = React.useMemo(
  () => allValues.filter((v) => v.selected),
  [allValues],
);
return <Autocomplete multiple value={selectedValues} />;
`}),i(a,{className:"text-14 mb-32",component:"div",children:["In the first example, ",e("code",{children:"allValues.filter"})," is called and returns ",e("strong",{children:"a new array"})," every render. The fix includes memoizing the value, so it changes only when needed. :::"]}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Free solo"}),i(a,{className:"text-14 mb-32",component:"div",children:["Set ",e("code",{children:"freeSolo"})," to true so the textbox can contain any arbitrary value."]}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Search input"}),i(a,{className:"text-14 mb-32",component:"div",children:["The prop is designed to cover the primary use case of a ",e("strong",{children:"search input"})," with suggestions, e.g. Google search or react-autowhatever."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"FreeSolo.js",className:"my-16",iframe:!1,component:Ve,raw:Ke})}),e(a,{className:"text-14 mb-32",component:"div",children:":::warning Be careful when using the free solo mode with non-string options, as it may cause type mismatch."}),e(a,{className:"text-14 mb-32",component:"div",children:"The value created by typing into the textbox is always a string, regardless of the type of the options. :::"}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Creatable"}),i(a,{className:"text-14 mb-32",component:"div",children:["If you intend to use this mode for a ",e("a",{href:"#combo-box",children:"combo box"})," like experience (an enhanced version of a select element) we recommend setting:"]}),i("ul",{className:"space-y-16",children:[i("li",{children:[e("code",{children:"selectOnFocus"})," to help the user clear the selected value."]}),i("li",{children:[e("code",{children:"clearOnBlur"})," to help the user enter a new value."]}),i("li",{children:[e("code",{children:"handleHomeEndKeys"})," to move focus inside the popup with the ",e("kbd",{className:"key",children:"Home"})," and ",e("kbd",{className:"key",children:"End"})," keys."]}),i("li",{children:["A last option, for instance: ",e("code",{children:'Add "YOUR SEARCH"'}),"."]})]}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"FreeSoloCreateOption.js",className:"my-16",iframe:!1,component:He,raw:Je})}),e(a,{className:"text-14 mb-32",component:"div",children:"You could also display a dialog when the user wants to add a new value."}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"FreeSoloCreateOptionDialog.js",className:"my-16",iframe:!1,component:je,raw:Xe})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Grouped"}),i(a,{className:"text-14 mb-32",component:"div",children:["You can group the options with the ",e("code",{children:"groupBy"})," prop. If you do so, make sure that the options are also sorted with the same dimension that they are grouped by, otherwise, you will notice duplicate headers."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"Grouped.js",className:"my-16",iframe:!1,component:Ze,raw:_e})}),i(a,{className:"text-14 mb-32",component:"div",children:["To control how the groups are rendered, provide a custom ",e("code",{children:"renderGroup"})," prop. This is a function that accepts an object with two fields:"]}),i("ul",{className:"space-y-16",children:[i("li",{children:[e("code",{children:"group"}),"—a string representing a group name"]}),i("li",{children:[e("code",{children:"children"}),"—a collection of list items that belong to the group"]})]}),e(a,{className:"text-14 mb-32",component:"div",children:"The following demo shows how to use this prop to define custom markup and override the styles of the default groups:"}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"RenderGroup.js",className:"my-16",iframe:!1,component:tt,raw:lt})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Disabled options"}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"DisabledOptions.js",className:"my-16",iframe:!1,component:it,raw:ot})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:e("code",{children:"useAutocomplete"})}),i(a,{className:"text-14 mb-32",component:"div",children:["For advanced customization use cases, a headless ",e("code",{children:"useAutocomplete()"})," hook is exposed. It accepts almost the same options as the Autocomplete component minus all the props related to the rendering of JSX. The Autocomplete component is built on this hook."]}),e(A,{component:"pre",className:"language-tsx",children:` 
import { useAutocomplete } from '@mui/base/useAutocomplete';
`}),i(a,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"useAutocomplete"})," hook is also reexported from @mui/material for convenience and backward compatibility."]}),e(A,{component:"pre",className:"language-tsx",children:` 
import useAutocomplete from '@mui/material/useAutocomplete';
`}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"UseAutocomplete.js",className:"my-16",iframe:!1,component:dt,raw:yt})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Customized hook"}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"CustomizedHook.js",className:"my-16",iframe:!1,component:gt,raw:Tt})}),i(a,{className:"text-14 mb-32",component:"div",children:["Head to the ",e("a",{href:"#customization",children:"customization"})," section for an example with the ",e("code",{children:"Autocomplete"})," component instead of the hook."]}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Asynchronous requests"}),e(a,{className:"text-14 mb-32",component:"div",children:"The component supports two different asynchronous use-cases:"}),i("ul",{className:"space-y-16",children:[i("li",{children:[e("a",{href:"#load-on-open",children:"Load on open"}),": it waits for the component to be interacted with to load the options."]}),i("li",{children:[e("a",{href:"#search-as-you-type",children:"Search as you type"}),": a new request is made for each keystroke."]})]}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Load on open"}),e(a,{className:"text-14 mb-32",component:"div",children:"It displays a progress state as long as the network request is pending."}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"Asynchronous.js",className:"my-16",iframe:!1,component:vt,raw:wt})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Search as you type"}),e(a,{className:"text-14 mb-32",component:"div",children:"If your logic is fetching new options on each keystroke and using the current value of the textbox to filter on the server, you may want to consider throttling requests."}),i(a,{className:"text-14 mb-32",component:"div",children:["Additionally, you will need to disable the built-in filtering of the ",e("code",{children:"Autocomplete"})," component by overriding the ",e("code",{children:"filterOptions"})," prop:"]}),e(A,{component:"pre",className:"language-jsx",children:` 
<Autocomplete filterOptions={(x) => x} />
`}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Google Maps place"}),i(a,{className:"text-14 mb-32",component:"div",children:["A customized UI for Google Maps Places Autocomplete. For this demo, we need to load the ",e("a",{href:"https://developers.google.com/maps/documentation/javascript/overview",children:"Google Maps JavaScript"})," and ",e("a",{href:"https://developers.google.com/maps/documentation/places/web-service/overview",children:"Google Places"})," API."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"GoogleMaps.js",className:"my-16",iframe:!1,component:xt,raw:kt})}),i(a,{className:"text-14 mb-32",component:"div",children:[":::error Before you can start using the Google Maps JavaScript API and Places API, you need to get your own ",e("a",{href:"https://developers.google.com/maps/documentation/javascript/get-api-key",children:"API key"}),". :::"]}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Multiple values"}),e(a,{className:"text-14 mb-32",component:"div",children:"Also known as tags, the user is allowed to enter more than one value."}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"Tags.js",className:"my-16",iframe:!1,component:Ct,raw:Rt})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Fixed options"}),e(a,{className:"text-14 mb-32",component:"div",children:"In the event that you need to lock certain tags so that they can't be removed, you can set the chips disabled."}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"FixedTags.js",className:"my-16",iframe:!1,component:Pt,raw:Mt})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Checkboxes"}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"CheckboxesTags.js",className:"my-16",iframe:!1,component:Vt,raw:Ut})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Limit tags"}),i(a,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"limitTags"})," prop to limit the number of displayed options when not focused."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"LimitTags.js",className:"my-16",iframe:!1,component:Ht,raw:zt})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Sizes"}),i(a,{className:"text-14 mb-32",component:"div",children:["Fancy smaller inputs? Use the ",e("code",{children:"size"})," prop."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"Sizes.js",className:"my-16",iframe:!1,component:Jt,raw:$t})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Custom input"}),i(a,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"renderInput"})," prop allows you to customize the rendered input. The first argument of this render prop contains props that you need to forward. Pay specific attention to the ",e("code",{children:"ref"})," and ",e("code",{children:"inputProps"})," keys."]}),e(a,{className:"text-14 mb-32",component:"div",children:":::warning If you're using a custom input component inside the Autocomplete, make sure that you forward the ref to the underlying DOM element. :::"}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"CustomInputAutocomplete.js",className:"my-16",iframe:!1,component:qt,raw:Xt})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Globally Customized Options"}),i(a,{className:"text-14 mb-32",component:"div",children:["To globally customize the Autocomplete options for all components in your app, you can use the ",e("a",{href:"/material-ui/customization/theme-components/#theme-default-props",children:"theme default props"})," and set the ",e("code",{children:"renderOption"})," property in the ",e("code",{children:"defaultProps"})," key. The ",e("code",{children:"renderOption"})," property takes the ",e("code",{children:"ownerState"})," as the fourth parameter, which includes props and internal component state. To display the label, you can use the ",e("code",{children:"getOptionLabel"})," prop from the ",e("code",{children:"ownerState"}),". This approach enables different options for each Autocomplete component while keeping the options styling consistent."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"GloballyCustomizedOptions.js",className:"my-16",iframe:!1,component:Yt,raw:aa})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"GitHub's picker"}),e(a,{className:"text-14 mb-32",component:"div",children:"This demo reproduces GitHub's label picker:"}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"GitHubLabel.js",className:"my-16",iframe:!1,component:sa,raw:da})}),i(a,{className:"text-14 mb-32",component:"div",children:["Head to the ",e("a",{href:"#customized-hook",children:"Customized hook"})," section for a customization example with the ",e("code",{children:"useAutocomplete"})," hook instead of the component."]}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Hint"}),i(a,{className:"text-14 mb-32",component:"div",children:["The following demo shows how to add a hint feature to the Autocomplete using the ",e("code",{children:"renderInput"})," and ",e("code",{children:"filterOptions"})," props:"]}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"AutocompleteHint.js",className:"my-16",iframe:!1,component:ha,raw:ya})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Highlights"}),i(a,{className:"text-14 mb-32",component:"div",children:["The following demo relies on ",e("a",{href:"https://github.com/moroshko/autosuggest-highlight",children:"autosuggest-highlight"}),", a small (1 kB) utility for highlighting text in autosuggest and autocomplete components."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"Highlights.js",className:"my-16",iframe:!1,component:ca,raw:ua})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Custom filter"}),i(a,{className:"text-14 mb-32",component:"div",children:["The component exposes a factory to create a filter method that can be provided to the ",e("code",{children:"filterOptions"})," prop. You can use it to change the default option filter behavior."]}),e(A,{component:"pre",className:"language-js",children:` 
import { createFilterOptions } from '@mui/material/Autocomplete';
`}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:e("code",{children:"createFilterOptions(config) => filterOptions"})}),e(a,{className:"text-14 mt-12 mb-10",component:"h4",children:"Arguments"}),e("ol",{children:i("li",{children:[e("code",{children:"config"})," (",e("em",{children:"object"})," [optional]):"]})}),i("ul",{className:"space-y-16",children:[i("li",{children:[e("code",{children:"config.ignoreAccents"})," (",e("em",{children:"bool"})," [optional]): Defaults to ",e("code",{children:"true"}),". Remove diacritics."]}),i("li",{children:[e("code",{children:"config.ignoreCase"})," (",e("em",{children:"bool"})," [optional]): Defaults to ",e("code",{children:"true"}),". Lowercase everything."]}),i("li",{children:[e("code",{children:"config.limit"})," (",e("em",{children:"number"})," [optional]): Default to null. Limit the number of suggested options to be shown. For example, if ",e("code",{children:"config.limit"})," is ",e("code",{children:"100"}),", only the first ",e("code",{children:"100"})," matching options are shown. It can be useful if a lot of options match and virtualization wasn't set up."]}),i("li",{children:[e("code",{children:"config.matchFrom"})," (",e("em",{children:"'any' | 'start'"})," [optional]): Defaults to ",e("code",{children:"'any'"}),"."]}),i("li",{children:[e("code",{children:"config.stringify"})," (",e("em",{children:"func"})," [optional]): Controls how an option is converted into a string so that it can be matched against the input text fragment."]}),i("li",{children:[e("code",{children:"config.trim"})," (",e("em",{children:"bool"})," [optional]): Defaults to ",e("code",{children:"false"}),". Remove trailing spaces."]})]}),e(a,{className:"text-14 mt-12 mb-10",component:"h4",children:"Returns"}),i(a,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"filterOptions"}),": the returned filter method can be provided directly to the ",e("code",{children:"filterOptions"})," prop of the ",e("code",{children:"Autocomplete"})," component, or the parameter of the same name for the hook."]}),e(a,{className:"text-14 mb-32",component:"div",children:"In the following demo, the options need to start with the query prefix:"}),e(A,{component:"pre",className:"language-jsx",children:` 
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

<Autocomplete filterOptions={filterOptions} />;
`}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"Filter.js",className:"my-16",iframe:!1,component:ba,raw:ga})}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Advanced"}),i(a,{className:"text-14 mb-32",component:"div",children:["For richer filtering mechanisms, like fuzzy matching, it's recommended to look at ",e("a",{href:"https://github.com/kentcdodds/match-sorter",children:"match-sorter"}),". For instance:"]}),e(A,{component:"pre",className:"language-jsx",children:` 
import { matchSorter } from 'match-sorter';

const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

<Autocomplete filterOptions={filterOptions} />;
`}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Virtualization"}),i(a,{className:"text-14 mb-32",component:"div",children:["Search within 10,000 randomly generated options. The list is virtualized thanks to ",e("a",{href:"https://github.com/bvaughn/react-window",children:"react-window"}),"."]}),e(a,{className:"text-14 mb-32",component:"div",children:e(b,{name:"Virtualize.js",className:"my-16",iframe:!1,component:xa,raw:ka})}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Events"}),i(a,{className:"text-14 mb-32",component:"div",children:["If you would like to prevent the default key handler behavior, you can set the event's ",e("code",{children:"defaultMuiPrevented"})," property to ",e("code",{children:"true"}),":"]}),e(A,{component:"pre",className:"language-jsx",children:` 
<Autocomplete
  onKeyDown={(event) => {
    if (event.key === 'Enter') {
      // Prevent's default 'Enter' behavior.
      event.defaultMuiPrevented = true;
      // your handler code
    }
  
/>
`}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"autocomplete/autofill"}),e(a,{className:"text-14 mb-32",component:"div",children:"Browsers have heuristics to help the user fill in form inputs. However, this can harm the UX of the component."}),i(a,{className:"text-14 mb-32",component:"div",children:["By default, the component disables the input ",e("strong",{children:"autocomplete"})," feature (remembering what the user has typed for a given field in a previous session) with the ",e("code",{children:'autoComplete="off"'})," attribute. Google Chrome does not currently support this attribute setting (",e("a",{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=587466",children:"Issue 587466"}),"). A possible workaround is to remove the ",e("code",{children:"id"})," to have the component generate a random one."]}),i(a,{className:"text-14 mb-32",component:"div",children:["In addition to remembering past entered values, the browser might also propose ",e("strong",{children:"autofill"})," suggestions (saved login, address, or payment details). In the event you want the avoid autofill, you can try the following:"]}),i("ul",{className:"space-y-16",children:[e("li",{children:i(a,{className:"text-14 mb-32",component:"div",children:["Name the input without leaking any information the browser can use. e.g. ",e("code",{children:'id="field1"'})," instead of ",e("code",{children:'id="country"'}),". If you leave the id empty, the component uses a random id."]})}),i("li",{children:[i(a,{className:"text-14 mb-32",component:"div",children:["Set ",e("code",{children:'autoComplete="new-password"'})," (some browsers will suggest a strong password for inputs with this attribute setting):"]}),e(A,{component:"pre",className:"language-jsx",children:` 
<TextField
  {...params}
  inputProps={{
    ...params.inputProps,
    autoComplete: 'new-password',
  
/>
`})]})]}),i(a,{className:"text-14 mb-32",component:"div",children:["Read ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion",children:"the guide on MDN"})," for more details."]}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"iOS VoiceOver"}),i(a,{className:"text-14 mb-32",component:"div",children:["VoiceOver on iOS Safari doesn't support the ",e("code",{children:"aria-owns"})," attribute very well. You can work around the issue with the ",e("code",{children:"disablePortal"})," prop."]}),e(a,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"ListboxComponent"}),i(a,{className:"text-14 mb-32",component:"div",children:["If you provide a custom ",e("code",{children:"ListboxComponent"})," prop, you need to make sure that the intended scroll container has the ",e("code",{children:"role"})," attribute set to ",e("code",{children:"listbox"}),". This ensures the correct behavior of the scroll, for example when using the keyboard to navigate."]}),e(a,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),i(a,{className:"text-14 mb-32",component:"div",children:["(WAI-ARIA: ",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/"}),")"]}),e(a,{className:"text-14 mb-32",component:"div",children:"We encourage the usage of a label for the textbox. The component implements the WAI-ARIA authoring practices."})]})}export{Ua as default};
