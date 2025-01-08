import{j as n}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as r}from"./index-DxSkqhwD.js";import"./chunk-NUUEMKO5-XMdsWex3.js";import{ae as i,ag as s}from"./index-MW9iCe3t.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./iframe-C7-Ksibd.js";import"../sb-preview/runtime.js";import"./react-18-a66jVWXY.js";import"./index-YPx4gNoC.js";import"./index-BuYng7Op.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";function t(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Getting Started/First steps"}),`
`,n.jsx(e.h1,{id:"rendering-your-first-component",children:"Rendering your first component"}),`
`,n.jsxs(e.p,{children:["Now that you have completed the ",n.jsx(e.a,{href:"?path=/docs/getting-started-installation--docs",children:"Installation"})," it's time to render our first component!"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["You can find a fully working example ",n.jsx(e.a,{href:"https://github.com/openfun/cunningham/blob/main/apps/demo/src/App.tsx",rel:"nofollow",children:"here"})," in the demo app."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Let's create an ",n.jsx(e.code,{children:"App"})," component that will render a ",n.jsx(e.code,{children:"Button"}),"."]}),`
`,n.jsx(s,{dark:!0,code:`

import {
  Button,
  CunninghamProvider
} from "@openfun/cunningham-react";

export const MyApp = () => {
  return (
    <CunninghamProvider>
      <Button onClick={() => alert('hello world!')}>Click me!</Button>
    </CunninghamProvider>
  );
};

`}),`
`,n.jsxs(e.p,{children:["As you can see we nest our component inside ",n.jsx(e.code,{children:"CunninghamProvider"}),`, as a rule of thumb you always need to put Cunningham's components
inside `,n.jsx(e.code,{children:"CunninghamProvider"})," or they will not work. You only need to use one ",n.jsx(e.code,{children:"CunninghamProvider"}),", for example at the root of your app."]}),`
`,n.jsx(e.p,{children:"And voilà! You're done 🥳"})]})}function w(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{w as default};
