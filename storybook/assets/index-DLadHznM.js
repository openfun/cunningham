import{j as o}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as r}from"./index-CRbi4mQH.js";import{M as h,C as t,d as p,A as i}from"./index-SinWpg8s.js";import{P as c,u as m}from"./index-DuqHVtpt.js";import{S as l,B as a,L as d,F as u,W as g}from"./index.stories-BKiPPLAT.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DkJaO_-i.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./tslib.es6-De9GV7Vy.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index-D295LG-j.js";import"./index-CFk9Hz-J.js";import"./index-Bl6ORisp.js";import"./index-CAEZVxT0.js";import"./index-VRLPxy7Q.js";import"./index-NNnFHe3j.js";import"./index-nUFazOPM.js";import"./ToastProvider-bh6sgoNh.js";import"./cunningham-tokens-Bq47iuNG.js";import"./index-Dk74W0Oi.js";function s(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{of:l}),`
`,o.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,o.jsx(n.p,{children:`The Pagination component can be used anywhere you have some data you want to split between pages, you can use it
for synchronous loading as well as asynchronous loading. You can paginate your already loaded data, but you can also
fetch it from a server, the component is really versatile.`}),`
`,o.jsx(t,{sourceState:"none",of:a}),`
`,o.jsx(p,{language:"ts",dark:!0,format:!1,code:'import { Pagination, usePagination } from "@openfun/cunningham-react";'}),`
`,o.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,o.jsxs(n.p,{children:["The Pagination component comes with a hook called ",o.jsx(n.code,{children:"usePagination"}),` that handles the logic behind it. Pagination is a
controlled component, so, to make it more handy we provide you this hook.`]}),`
`,o.jsx(n.p,{children:"The most basic usage you can make of it is this one, defining a pagination with 10 pages."}),`
`,o.jsx(n.h3,{id:"basic",children:"Basic"}),`
`,o.jsx(t,{sourceState:"none",of:a}),`
`,o.jsx(n.h3,{id:"list-of-items",children:"List of items"}),`
`,o.jsx(n.p,{children:`But this won't make you really happy if you want to paginate your list of items, so you can wire things a bit better.
Let's make a component that paginate a list of random number.`}),`
`,o.jsx(t,{sourceState:"none",of:d}),`
`,o.jsx(n.h3,{id:"set-page-programmatically",children:"Set page programmatically"}),`
`,o.jsx(n.p,{children:"You can also set the page programmatically, for example, if you want to use a query parameter to set the page."}),`
`,o.jsx(t,{sourceState:"none",of:u}),`
`,o.jsx(n.h3,{id:"hide-go-to-input",children:"Hide go to input"}),`
`,o.jsx(n.p,{children:"You can also hide the go to input if you don't want to allow the user to go to a specific page or to have a simpler pagination."}),`
`,o.jsx(t,{of:g}),`
`,o.jsx(n.h3,{id:"things-to-know",children:"Things to know"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsx(n.li,{children:"The pagination will never render if the number of pages is less than 2."}),`
`]}),`
`,o.jsx(n.h2,{id:"props",children:"Props"}),`
`,o.jsxs(n.h3,{id:"pagination-component",children:[o.jsx(n.code,{children:"<Pagination/>"})," component"]}),`
`,o.jsx(i,{of:c}),`
`,o.jsxs(n.h3,{id:"usepagination-hook",children:[o.jsx(n.code,{children:"usePagination"})," hook"]}),`
`,o.jsx(i,{of:m})]})}function G(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(s,{...e})}):s(e)}export{G as default};
