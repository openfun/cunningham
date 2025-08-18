import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-DywkESLE.js";import{M as i,C as n,S as h,A as c,a as l}from"./index-DjiUAfnp.js";import{I as a}from"./index-46f45BQC.js";import{S as u,D as t,a as x,E as p,b as j,c as f,I as m,d as w,W as g,e as b,F as y,C as S,f as I,g as v,R as C}from"./index.stories-BJTOGtfH.js";import{Password as k}from"./InputPassword.stories-Daka3zws.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BKUbjXsD.js";import"./index-D2FdBkVr.js";import"./index-DO9VteM4.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-rkLeB0kx.js";import"./index-CAEZVxT0.js";import"./index-D7DNl-ap.js";import"./index-3i_lEcpX.js";import"./reactHookFormUtils-DBL7F8xI.js";import"./index-DyRkmeWf.js";import"./index-eFf25hYI.js";import"./ToastProvider-Dr5c6mPT.js";import"./cunningham-tokens-C-zj90pO.js";function r(o){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:u}),`
`,e.jsx(s.h1,{id:"input",children:"Input"}),`
`,e.jsx(s.p,{children:"Cunningham provides a versatile Input component that you can use in your forms."}),`
`,e.jsx(n,{of:t,sourceState:"shown"}),`
`,e.jsx(h,{language:"ts",dark:!0,format:!1,code:'import { Input } from "@openfun/cunningham-react";'}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["You can use the following props to change the state of the Input component by using the ",e.jsx(s.code,{children:"state"})," props."]}),`
`,e.jsx(n,{of:t,sourceState:"shown"}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsx(n,{of:p,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(s.p,{children:["As a regular input, you can disable it by using the ",e.jsx(s.code,{children:"disabled"})," props."]}),`
`,e.jsx(n,{of:j,sourceState:"shown"}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"icons",children:"Icons"}),`
`,e.jsxs(s.p,{children:["You can define an icon that will appear on the left side of the input by using the ",e.jsx(s.code,{children:"icon"})," props."]}),`
`,e.jsx(n,{of:m,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:["You can also independently add an icon on the right side by using the ",e.jsx(s.code,{children:"rightIcon"})," props."]}),`
`,e.jsx(n,{of:w,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"texts",children:"Texts"}),`
`,e.jsxs(s.p,{children:["You can define a text that will appear below the input by using the ",e.jsx(s.code,{children:"text"})," props."]}),`
`,e.jsx(n,{of:g,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:["You can also independently add a text on the right side by using the ",e.jsx(s.code,{children:"rightText"})," props."]}),`
`,e.jsx(n,{of:b,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"width",children:"Width"}),`
`,e.jsxs(s.p,{children:["By default, the input has a default width, like all inputs. But you can force it to take the full width of its container by using the ",e.jsx(s.code,{children:"fullWidth"})," props."]}),`
`,e.jsx(n,{of:y,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"chars-counter",children:"Chars Counter"}),`
`,e.jsxs(s.p,{children:["You can display a counter of the number of characters entered in the input by using the ",e.jsx(s.code,{children:"charsCounter"}),` props. Please bare
in mind to also define `,e.jsx(s.code,{children:"charCounterMax"}),"."]}),`
`,e.jsx(n,{of:S,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"password",children:"Password"}),`
`,e.jsx(s.p,{children:"You can also use a built-in password input that includes a button to show or hide the password."}),`
`,e.jsx(n,{of:k,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"controlled--non-controlled",children:"Controlled / Non Controlled"}),`
`,e.jsx(s.p,{children:`Like a native input, you can use the Input component in a controlled or non controlled way. You can see the example below
using the component in a controlled way.`}),`
`,e.jsx(n,{of:I,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"ref",children:"Ref"}),`
`,e.jsxs(s.p,{children:["You can use the ",e.jsx(s.code,{children:"ref"})," props to get a reference to the input element."]}),`
`,e.jsx(n,{of:v,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"usage-with-react-hook-form",children:"Usage with react-hook-form"}),`
`,e.jsxs(s.p,{children:["You can use this input with ",e.jsx(s.a,{href:"https://react-hook-form.com/docs",rel:"nofollow",children:"react-hook-form"})]}),`
`,e.jsx(n,{of:C,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsxs(s.p,{children:["You can use all the props of the native html ",e.jsx(s.code,{children:"<input>"})," element props plus the following."]}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(s.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(s.p,{children:"Here are the custom design tokens defined by the input."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Token"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"font-weight"}),e.jsx(s.td,{children:"Value font weight"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"font-size"}),e.jsx(s.td,{children:"Value font size"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"value-color"}),e.jsx(s.td,{children:"Value color"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"value-color--disabled"}),e.jsx(s.td,{children:"Value color when disabled"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-radius"}),e.jsx(s.td,{children:"Border radius of the input"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-radius--hover"}),e.jsx(s.td,{children:"Border radius of the input on mouse hover"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-radius--focus"}),e.jsx(s.td,{children:"Border radius of the input when focused"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-width"}),e.jsx(s.td,{children:"Border width of the input"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-color"}),e.jsx(s.td,{children:"Border color of the input"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-color--hover"}),e.jsx(s.td,{children:"Border color of the input on mouse hover"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-color--focus"}),e.jsx(s.td,{children:"Border color of the input when focus"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-style"}),e.jsx(s.td,{children:"Border style of the input"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"label-color--focus"}),e.jsx(s.td,{children:"Label color when focused"})]})]})]}),`
`,e.jsxs(s.p,{children:["See also ",e.jsx(s.a,{href:"?path=/story/components-forms-field-doc--page",children:"Field"})]}),`
`,e.jsx(s.h2,{id:"form-example",children:"Form Example"}),`
`,e.jsx(n,{children:e.jsx(l,{id:"components-forms-input--form-example"})}),`
`,e.jsx(s.h2,{id:""}),`
`,e.jsx("img",{src:"components/Forms/Input/resources/dd_1.svg"}),`
`,e.jsx(s.h2,{id:"-1"}),`
`,e.jsx("img",{src:"components/Forms/Input/resources/dd_2.svg"}),`
`,e.jsx(s.h2,{id:"-2"}),`
`,e.jsx("img",{src:"components/Forms/Input/resources/dd_3.svg"}),`
`,e.jsx(s.h2,{id:"-3"}),`
`,e.jsx("img",{src:"components/Forms/Input/resources/dd_4.svg"}),`
`,e.jsx(s.h2,{id:"-4"}),`
`,e.jsx("img",{src:"components/Forms/Input/resources/dd_5.svg"})]})}function K(o={}){const{wrapper:s}={...d(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(r,{...o})}):r(o)}export{K as default};
