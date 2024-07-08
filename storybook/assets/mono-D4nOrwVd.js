import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as r}from"./index-CRbi4mQH.js";import{M as i,C as s,d,A as l}from"./index-SinWpg8s.js";import{S as c}from"./index-CRKWOKCm.js";import{S as h,U as a,a as x,b as j,E as p,D as u,W as m,F as f,N as b,c as g,H as w,C as y,d as v,R as k,e as S}from"./mono.stories-DbnSZhqW.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DkJaO_-i.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./tslib.es6-De9GV7Vy.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./index-Bl6ORisp.js";import"./index-nUFazOPM.js";import"./ToastProvider-bh6sgoNh.js";import"./index-D295LG-j.js";import"./cunningham-tokens-Bq47iuNG.js";import"./index-Dk74W0Oi.js";import"./index-CAEZVxT0.js";import"./index-VRLPxy7Q.js";import"./index-NNnFHe3j.js";import"./useOverlayPosition-CL3NKJNF.js";import"./context-yIU10TY2.js";import"./downshift.esm-DTogr1te.js";import"./index-iXeOdxOk.js";import"./reactHookFormUtils-D8f2boA3.js";import"./stories-utils-CjRR0d7y.js";import"./index-CFk9Hz-J.js";function n(t){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:h,name:"Docs"}),`
`,e.jsx(o.h1,{id:"select",children:"Select"}),`
`,e.jsxs(o.p,{children:["Cunningham provides a versatile Select component that you can use in your forms. This component follows the ",e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/",rel:"nofollow",children:"ARIA design pattern"}),`
using `,e.jsx(o.a,{href:"https://www.downshift-js.com/",rel:"nofollow",children:"Downshift"}),", so that mean there is no ",e.jsx(o.code,{children:"select"})," wrapped inside it."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["You can also use the ",e.jsx(o.a,{href:"?path=/docs/components-forms-select-multi--docs",children:"multi version"})," if you need"]}),`
`]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(o.h2,{id:"options",children:"Options"}),`
`,e.jsxs(o.p,{children:["The available options must be given via the ",e.jsx(o.code,{children:"options"})," props. It is an array of objects with the following shape:"]}),`
`,e.jsx(d,{language:"ts",dark:!0,format:!1,code:`{
  label: string
  value?: string
  disabled?: boolean;
}`}),`
`,e.jsxs(o.p,{children:["As you can see the ",e.jsx(o.code,{children:"value"})," is optional, if not provided, the ",e.jsx(o.code,{children:"label"})," will be used as the value."]}),`
`,e.jsx(o.h2,{id:"searchable",children:"Searchable"}),`
`,e.jsxs(o.p,{children:["You can enable the text live filtering simply by using the ",e.jsx(o.code,{children:"searchable"})," props."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["You can use ",e.jsx(o.code,{children:"onSearchInputChange"})," to get the value of the input when the user is typing."]}),`
`]}),`
`,e.jsx(o.h2,{id:"states",children:"States"}),`
`,e.jsxs(o.p,{children:["You can use the following props to change the state of the Select component by using the ",e.jsx(o.code,{children:"state"})," props."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(o.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(o.p,{children:["As a regular select, you can disable it by using the ",e.jsx(o.code,{children:"disabled"})," props."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(o.h2,{id:"texts",children:"Texts"}),`
`,e.jsxs(o.p,{children:["As the component uses ",e.jsx(o.a,{href:"?path=/docs/components-forms-field--docs",children:"Field"}),", you can use the ",e.jsx(o.code,{children:"text"})," props to provide a description of the checkbox."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(o.h2,{id:"width",children:"Width"}),`
`,e.jsxs(o.p,{children:["By default, the select has a default width, like all inputs. But you can force it to take the full width of its container by using the ",e.jsx(o.code,{children:"fullWidth"})," props."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(o.h2,{id:"clearable",children:"Clearable"}),`
`,e.jsxs(o.p,{children:["By default, the select is clearable ( the cross icon on the right is shown ). You can disable it by using the ",e.jsx(o.code,{children:"clearable"})," props."]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(o.h2,{id:"disabled-options",children:"Disabled options"}),`
`,e.jsxs(o.p,{children:["You can disable some options by using the ",e.jsx(o.code,{children:"disabled"})," props on the ",e.jsx(o.code,{children:"Option"})," object."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(o.h2,{id:"hide-label",children:"Hide label"}),`
`,e.jsxs(o.p,{children:["For some reasons you might want to hide the label of the select. You can do that by using the ",e.jsx(o.code,{children:"hideLabel"})," props."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["It is important for accessibility to always have a label for your inputs. Keep in mind that setting ",e.jsx(o.code,{children:"hideLabel"})," to ",e.jsx(o.code,{children:"true"}),", will only hide the label visually, but it will still be available for screen readers in the DOM."]}),`
`]}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(o.h2,{id:"custom-render-option",children:"Custom render option"}),`
`,e.jsxs(o.p,{children:["You can give customize the look of the options by providing ",e.jsx(o.code,{children:"render"})," callback."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["When you provide ",e.jsx(o.code,{children:"render"})," the fields ",e.jsx(o.code,{children:"label"})," and ",e.jsx(o.code,{children:"value"})," are mandatory."]}),`
`]}),`
`,e.jsxs(o.p,{children:["Feel free to use the attribute ",e.jsx(o.code,{children:"showLabelWhenSelected"}),` to choose whether you want to display selected option with the custom
HTML or with its `,e.jsx(o.code,{children:"label"}),". It is set to ",e.jsx(o.code,{children:"true"})," by default."]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(o.h2,{id:"controlled--non-controlled",children:"Controlled / Non Controlled"}),`
`,e.jsx(o.p,{children:`Like a native select, you can use the Select component in a controlled or non controlled way. You can see the example below
using the component in a controlled way.`}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(o.h2,{id:"usage-with-react-hook-form",children:"Usage with react-hook-form"}),`
`,e.jsxs(o.p,{children:["You can use this input with ",e.jsx(o.a,{href:"https://react-hook-form.com/docs",rel:"nofollow",children:"react-hook-form"})]}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsx(o.p,{children:"The props of this component are as close as possible to the native select component. You can see the list of props below."}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(o.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(o.p,{children:"Here are the custom design tokens defined by the select."}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Token"}),e.jsx(o.th,{children:"Description"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"background-color"}),e.jsx(o.td,{children:"Background color of the select"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-color"}),e.jsx(o.td,{children:"Border color of the select"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-color--hover"}),e.jsx(o.td,{children:"Border color of the select on mouse hover"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-color--focus"}),e.jsx(o.td,{children:"Border color of the select when focus"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-radius"}),e.jsx(o.td,{children:"Border radius of the select"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-radius--hover"}),e.jsx(o.td,{children:"Border radius of the select on mouse hover"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-radius--focus"}),e.jsx(o.td,{children:"Border radius of the select when focused"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-style"}),e.jsx(o.td,{children:"Border style of the select"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-width"}),e.jsx(o.td,{children:"Border width of the select"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"value-color"}),e.jsx(o.td,{children:"Value color"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"value-color--disabled"}),e.jsx(o.td,{children:"Value color when disabled"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"font-size"}),e.jsx(o.td,{children:"Value font size"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"height"}),e.jsx(o.td,{children:"Height of the combo box"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"item-background-color--hover"}),e.jsx(o.td,{children:"Background color of the item on mouse hover"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"item-background-color--selected"}),e.jsx(o.td,{children:"Background color of the selected item"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"item-color"}),e.jsx(o.td,{children:"Color of the item"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"item-color--disabled"}),e.jsx(o.td,{children:"Color of the disabled item"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"item-font-size"}),e.jsx(o.td,{children:"Font size of the item"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"menu-background-color"}),e.jsx(o.td,{children:"Background color of the menu"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"label-color--focus"}),e.jsx(o.td,{children:"Label color when focused"})]})]})]}),`
`,e.jsxs(o.p,{children:["See also ",e.jsx(o.a,{href:"?path=/story/components-forms-field-doc--page",children:"Field"})]}),`
`,e.jsx(o.h2,{id:"form-example",children:"Form Example"}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(o.h2,{id:""}),`
`,e.jsx("img",{src:"components/Forms/Select/resources/dd_1.svg"}),`
`,e.jsx(o.h2,{id:"-1"}),`
`,e.jsx("img",{src:"components/Forms/Select/resources/dd_2.svg"}),`
`,e.jsx(o.h2,{id:"-2"}),`
`,e.jsx("img",{src:"components/Forms/Select/resources/dd_3.svg"})]})}function oe(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{oe as default};
