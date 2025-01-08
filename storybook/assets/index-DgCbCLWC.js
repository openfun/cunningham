import{j as o}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-DxSkqhwD.js";import{ae as h,af as t,ag as p,ah as a}from"./index-MW9iCe3t.js";import{P as c,u as l}from"./index-Cz2iuTfz.js";import{S as m,B as i,L as d,F as u,W as g}from"./index.stories-DXWcmPRX.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./iframe-C7-Ksibd.js";import"../sb-preview/runtime.js";import"./index-BuYng7Op.js";import"./index-YPx4gNoC.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index-C-CZlHIx.js";import"./index-CfSi1e23.js";import"./index-ePN0wjti.js";import"./index-CAEZVxT0.js";import"./index-DzUx_pJp.js";import"./index-B31nQ_GP.js";import"./index-D7JgHrvH.js";import"./ToastProvider-BqGOerG8.js";import"./cunningham-tokens-Bq47iuNG.js";function s(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(h,{of:m}),`
`,o.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,o.jsx(n.p,{children:`The Pagination component can be used anywhere you have some data you want to split between pages, you can use it
for synchronous loading as well as asynchronous loading. You can paginate your already loaded data, but you can also
fetch it from a server, the component is really versatile.`}),`
`,o.jsx(t,{sourceState:"none",of:i}),`
`,o.jsx(p,{language:"ts",dark:!0,format:!1,code:'import { Pagination, usePagination } from "@openfun/cunningham-react";'}),`
`,o.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,o.jsxs(n.p,{children:["The Pagination component comes with a hook called ",o.jsx(n.code,{children:"usePagination"}),` that handles the logic behind it. Pagination is a
controlled component, so, to make it more handy we provide you this hook.`]}),`
`,o.jsx(n.p,{children:"The most basic usage you can make of it is this one, defining a pagination with 10 pages."}),`
`,o.jsx(n.h3,{id:"basic",children:"Basic"}),`
`,o.jsx(t,{sourceState:"none",of:i}),`
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
`,o.jsx(a,{of:c}),`
`,o.jsxs(n.h3,{id:"usepagination-hook",children:[o.jsx(n.code,{children:"usePagination"})," hook"]}),`
`,o.jsx(a,{of:l})]})}function E(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(s,{...e})}):s(e)}export{E as default};
