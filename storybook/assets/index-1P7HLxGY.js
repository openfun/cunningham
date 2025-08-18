import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DywkESLE.js";import{M as a,C as t,S as s,A as r}from"./index-DjiUAfnp.js";import{S as c,D as h,I as l,a as x,W as j,E as p,N as u,b as f,c as m}from"./index.stories-DaiEyPUW.js";import{T as g}from"./ToastProvider-Dr5c6mPT.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BKUbjXsD.js";import"./index-D2FdBkVr.js";import"./index-DO9VteM4.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DyRkmeWf.js";import"./index-rkLeB0kx.js";import"./cunningham-tokens-C-zj90pO.js";const y=({message:o,type:n,options:b})=>({});function i(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(n.h1,{id:"toast",children:"Toast"}),`
`,e.jsx(n.p,{children:"Cunningham provides a powerful Toast component for displaying any kind of information for a defined amount of time."}),`
`,e.jsx(t,{of:h,sourceState:"none"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Toasts are really simple to use, you need to wrap your app inside ",e.jsx(n.code,{children:"CunninghamProvider"}),"."]}),`
`,e.jsx(s,{language:"tsx",dark:!0,format:!1,code:`
import { CunninghamProvider } from "@openfun/cunningham-react";

const App = () => (
  <CunninghamProvider>
    <InnerApp />
  </CunninghamProvider>
);
  `}),`
`,e.jsxs(n.p,{children:["And then simply use the ",e.jsx(n.code,{children:"toast"})," function from ",e.jsx(n.code,{children:"useToastProvider"})," hook."]}),`
`,e.jsx(s,{language:"tsx",dark:!0,format:!1,code:`
const InnerApp = () => {
  const { toast } = useToastProvider();

  return (
    <button onClick={() => toast("Hello world!")}>
      Create toast
    </button>
  );
};
`}),`
`,e.jsxs(n.p,{children:["You can also customize the appearance of the toast with the ",e.jsx(n.code,{children:"toast"})," function. See the API."]}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h2,{id:"type",children:"Type"}),`
`,e.jsx(n.p,{children:"Toast can be of different types, each type has a different color and icon."}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h2,{id:"actions",children:"Actions"}),`
`,e.jsxs(n.p,{children:["You can quickly add an action to your toast by passing ",e.jsx(n.code,{children:"primaryLabel"})," and ",e.jsx(n.code,{children:"primaryOnClick"})," props to the ",e.jsx(n.code,{children:"toast"})," function."]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h2,{id:"customize",children:"Customize"}),`
`,e.jsxs(n.p,{children:["You can customize the appearance of the toast by passing ",e.jsx(n.code,{children:"actions"})," when calling ",e.jsx(n.code,{children:"toast"})," function."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["These are the props of ",e.jsx(n.code,{children:"Toast"})," component which you might not need to create by yourself as the ",e.jsx(n.code,{children:"toast"}),` function does all
the heavy lifting for you.`]}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(n.p,{children:"Here a the custom design tokens defined by the Toast."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Token"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"slide-in-duration"}),e.jsx(n.td,{children:"Time the toast takes to slide in"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"slide-out-duration"}),e.jsx(n.td,{children:"Time the toast takes to slide out"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"background-color"}),e.jsx(n.td,{children:"Default background color"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"color"}),e.jsx(n.td,{children:"Color of the content"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"font-weight"}),e.jsx(n.td,{children:"Font weight of the content"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"icon-size"}),e.jsx(n.td,{children:"Size of the left icon"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"progress-bar-height"}),e.jsx(n.td,{children:"Height of the progress bar"})]})]})]})]})}function X(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{X as default};
