import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DywkESLE.js";import{M as d,C as o,S as l,A as c}from"./index-DjiUAfnp.js";import{S as a,A as h,I as r,a as x,W as j,E as p,N as m,b as u,c as f,d as y,C as b,e as g,f as k,g as C}from"./index.stories-D8rm2dVD.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BKUbjXsD.js";import"./index-D2FdBkVr.js";import"./index-DO9VteM4.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DyRkmeWf.js";import"./index-rkLeB0kx.js";import"./index-eFf25hYI.js";import"./ToastProvider-Dr5c6mPT.js";import"./cunningham-tokens-C-zj90pO.js";import"./index-CAEZVxT0.js";function s(t){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"alert",children:"Alert"}),`
`,e.jsx(n.p,{children:"Cunningham provides a versatile Alert component for displaying any kind of information."}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(l,{language:"ts",dark:!0,format:!1,code:'import { Alert } from "@openfun/cunningham-react";'}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsxs(n.p,{children:["You can use the ",e.jsx(n.code,{children:"type"})," prop to change the style of the alert."]}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h2,{id:"format",children:"Format"}),`
`,e.jsx(n.p,{children:"There are 3 possible formats for the alert, the one line, the multi line one and the expandable one."}),`
`,e.jsx(n.h4,{id:"the-one-line-format",children:"The one line format"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h4,{id:"the-multi-line-format",children:"The multi line format"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["This one is automatically applied when you provide ",e.jsx(n.code,{children:"additionalInformation"})," prop."]}),`
`]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h4,{id:"the-expandable-format",children:"The expandable format"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["This one is automatically applied when you provide ",e.jsx(n.code,{children:"additionalInformation"})," and ",e.jsx(n.code,{children:"expandable"})," prop."]}),`
`]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h2,{id:"actions",children:"Actions"}),`
`,e.jsx(n.p,{children:"As you can see in the examples above, you can display buttons on the alerts. You can use the following prop to do so:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"primaryLabel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"primaryOnClick"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"primaryProps"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Those props are shortcuts props provided to the ",e.jsx(n.code,{children:"Button"})," component."]}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.p,{children:"The same goes for the tertiary button:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"tertiaryLabel"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"tertiaryOnClick"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"tertiaryProps"})}),`
`]}),`
`,e.jsx(o,{of:y}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Those buttons automatically adapt according to the alert format."}),`
`]}),`
`,e.jsx(n.h3,{id:"customize-actions",children:"Customize actions"}),`
`,e.jsxs(n.p,{children:["If the default provided buttons are not enough for you, you can provide your own buttons and any ",e.jsx(n.code,{children:"ReactNode"}),` you want.
To achieve that, you can use the `,e.jsx(n.code,{children:"buttons"})," prop."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["We strongly recommend you to stick to the default ",e.jsx(n.code,{children:"primaryLabel"})," and ",e.jsx(n.code,{children:"tertiaryLabel"})," props to match the design system."]}),`
`]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h2,{id:"controlled--non-controlled",children:"Controlled / Non Controlled"}),`
`,e.jsxs(n.p,{children:["There are two different props that can be used to control the alert: ",e.jsx(n.code,{children:"expanded"}),", ",e.jsx(n.code,{children:"closed"}),"."]}),`
`,e.jsxs(n.p,{children:["When using those props, you must provide ",e.jsx(n.code,{children:"onExpand"})," and ",e.jsx(n.code,{children:"onClose"})," callbacks to handle the state of the alert."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(o,{of:k}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{of:C}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(n.p,{children:"Here are the custom design tokens defined by the Alert."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Token"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"background-color"}),e.jsx(n.td,{children:"Default background color"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"border-radius"}),e.jsx(n.td,{children:"Border radius of the Alert"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"font-weight"}),e.jsx(n.td,{children:"Font weight of the main content"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"color"}),e.jsx(n.td,{children:"Color of the main content"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"additional-font-weight"}),e.jsx(n.td,{children:"Font weight of the additional information"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"additional-color"}),e.jsx(n.td,{children:"Color of the additional content"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"icon-size"}),e.jsx(n.td,{children:"Size of the left icon"})]})]})]})]})}function X(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{X as default};
