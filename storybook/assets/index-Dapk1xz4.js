import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DywkESLE.js";import{M as r,C as n,S as d,A as h}from"./index-DjiUAfnp.js";import{B as c}from"./index-DyRkmeWf.js";import{S as a,A as l,I as u,a as x,b as p,D as j,F as m,c as b,P as f,d as y,N as g}from"./index.stories-DVPaSbBy.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BKUbjXsD.js";import"./index-D2FdBkVr.js";import"./index-DO9VteM4.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(o){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(t.h1,{id:"button",children:"Button"}),`
`,e.jsxs(t.p,{children:["The Cunningham Button behaves the same as the native html ",e.jsx(t.code,{children:"<button>"})," element, but with a few extra features."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(d,{language:"ts",dark:!0,format:!1,code:'import { Button } from "@openfun/cunningham-react";'}),`
`,e.jsx(t.h2,{id:"icons",children:"Icons"}),`
`,e.jsx(t.p,{children:"You can use icons within the button by passing the icon name as a prop."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Use the attribute ",e.jsx(t.code,{children:"iconPosition"})," to position the icon on the left or right side of the button. The default is ",e.jsx(t.code,{children:"left"}),"."]}),`
`]}),`
`,e.jsx(n,{sourceState:"shown",of:u}),`
`,e.jsx(n,{sourceState:"shown",of:x}),`
`,e.jsx(t.p,{children:"You can also use button with only an icon."}),`
`,e.jsx(n,{sourceState:"shown",of:p}),`
`,e.jsx(t.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(t.p,{children:"The button can be disabled. The disabled button will render the same no matter what color is used."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Keep in the mind that a disabled button will never call ",e.jsx(t.code,{children:"onClick"})," if it is provided."]}),`
`]}),`
`,e.jsx(n,{sourceState:"shown",of:j}),`
`,e.jsx(t.h2,{id:"full-width",children:"Full width"}),`
`,e.jsxs(t.p,{children:["The button can be set to full width. You can use the ",e.jsx(t.code,{children:"fullWidth"})," prop to do so."]}),`
`,e.jsx(n,{sourceState:"shown",of:m}),`
`,e.jsx(n,{sourceState:"shown",of:b}),`
`,e.jsx(t.h2,{id:"size",children:"Size"}),`
`,e.jsxs(t.p,{children:["You can adjust the size of the button by using the ",e.jsx(t.code,{children:"size"})," prop. Default value is ",e.jsx(t.code,{children:"medium"}),"."]}),`
`,e.jsx(n,{sourceState:"shown",of:f}),`
`,e.jsx(n,{sourceState:"shown",of:y}),`
`,e.jsx(n,{sourceState:"shown",of:g}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsxs(t.p,{children:["You can use all the props of the native html ",e.jsx(t.code,{children:"<button>"})," element props plus the following."]}),`
`,e.jsx(h,{of:c}),`
`,e.jsx(t.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(t.p,{children:"Here a the custom design tokens defined by the button."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Token"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"border-radius"}),e.jsx(t.td,{children:"Border radius of the button"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"height"}),e.jsx(t.td,{children:"Height of the button"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"font-size"}),e.jsx(t.td,{children:"Font size of the label"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"font-weight"}),e.jsx(t.td,{children:"Font weight of the label"})]})]})]}),`
`,e.jsx(t.h2,{id:"dos-and-donts",children:"Do's and don'ts"}),`
`,e.jsx(t.h3,{id:"never-use-two-filled-buttons-or-primary-buttons-on-the-same-page-for-two-main-actions",children:'Never use two "filled buttons" or "primary buttons" on the same page for two main actions.'}),`
`,e.jsx(t.p,{children:`The primary button designates the user's primary action, it is highlighted here with a primary color.
The primary button should not be used for a secondary action.`}),`
`,e.jsx("img",{src:"components/Button/resources/dd_1.svg"}),`
`,e.jsx(t.h3,{id:"size-of-icons-in-a-primary-md-button",children:"Size of icons in a primary MD button"}),`
`,e.jsx(t.p,{children:`When you go to change the icon in the properties by browsing the icon library, you must choose only icons a size of 24x24px
to respect the size of the container`}),`
`,e.jsx("img",{src:"components/Button/resources/dd_2.svg"}),`
`,e.jsx(t.h3,{id:"good-practice-for-primary-secondary-and-tertiary-button",children:"Good practice for primary, secondary and tertiary button"}),`
`,e.jsx(t.p,{children:`For a good practice we use only one primary button per page to define the main action with 1/3 of secondary buttons and as
many tertiary buttons as needed.`}),`
`,e.jsx("img",{src:"components/Button/resources/dd_3.svg"}),`
`,e.jsx(t.h3,{id:"exceptional-red-button-for-delete",children:"Exceptional red button for delete"}),`
`,e.jsx(t.p,{children:"Secondary button to be used when important non-reversible action surrounded by red."}),`
`,e.jsx("img",{src:"components/Button/resources/dd_4.svg"})]})}function _(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{_ as default};
