import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DywkESLE.js";import{M as d,C as o,S as i,A as l}from"./index-DjiUAfnp.js";import{S as c}from"./index-DGYAH_zb.js";import{S as h,U as a,a as x,b as j,E as p,D as u,W as m,F as f,N as b,c as g,H as w,C as y,d as v,R as k,e as S}from"./mono.stories-DJ4fuV73.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BKUbjXsD.js";import"./index-D2FdBkVr.js";import"./index-DO9VteM4.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-rkLeB0kx.js";import"./index-eFf25hYI.js";import"./ToastProvider-Dr5c6mPT.js";import"./index-DyRkmeWf.js";import"./cunningham-tokens-C-zj90pO.js";import"./index-CAEZVxT0.js";import"./index-D7DNl-ap.js";import"./index-3i_lEcpX.js";import"./useOverlayPosition-CofLYEYW.js";import"./context-C5gmCNcd.js";import"./downshift.esm-C6xx4FW2.js";import"./index-B7qWtOxe.js";import"./reactHookFormUtils-DBL7F8xI.js";import"./stories-utils-CpTNK4_Y.js";import"./index-46f45BQC.js";function n(t){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h,name:"Docs"}),`
`,e.jsx(s.h1,{id:"select",children:"Select"}),`
`,e.jsxs(s.p,{children:["Cunningham provides a versatile Select component that you can use in your forms. This component follows the ",e.jsx(s.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/",rel:"nofollow",children:"ARIA design pattern"}),`
using `,e.jsx(s.a,{href:"https://www.downshift-js.com/",rel:"nofollow",children:"Downshift"}),", so that mean there is no ",e.jsx(s.code,{children:"select"})," wrapped inside it."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["You can also use the ",e.jsx(s.a,{href:"?path=/docs/components-forms-select-multi--docs",children:"multi version"})," if you need"]}),`
`]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(s.h2,{id:"options",children:"Options"}),`
`,e.jsxs(s.p,{children:["The available options must be given via the ",e.jsx(s.code,{children:"options"})," props. It is an array of objects with the following shape:"]}),`
`,e.jsx(i,{language:"ts",dark:!0,format:!1,code:`{
  label: string
  value?: string
  disabled?: boolean;
}`}),`
`,e.jsxs(s.p,{children:["As you can see the ",e.jsx(s.code,{children:"value"})," is optional, if not provided, the ",e.jsx(s.code,{children:"label"})," will be used as the value."]}),`
`,e.jsx(s.h2,{id:"searchable",children:"Searchable"}),`
`,e.jsxs(s.p,{children:["You can enable the text live filtering simply by using the ",e.jsx(s.code,{children:"searchable"})," props."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["You can use ",e.jsx(s.code,{children:"onSearchInputChange"})," to get the value of the input when the user is typing."]}),`
`]}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsxs(s.p,{children:["You can use the following props to change the state of the Select component by using the ",e.jsx(s.code,{children:"state"})," props."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(s.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(s.p,{children:["As a regular select, you can disable it by using the ",e.jsx(s.code,{children:"disabled"})," props."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(s.h2,{id:"texts",children:"Texts"}),`
`,e.jsxs(s.p,{children:["As the component uses ",e.jsx(s.a,{href:"?path=/docs/components-forms-field--docs",children:"Field"}),", you can use the ",e.jsx(s.code,{children:"text"})," props to provide a description of the checkbox."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(s.h2,{id:"width",children:"Width"}),`
`,e.jsxs(s.p,{children:["By default, the select has a default width, like all inputs. But you can force it to take the full width of its container by using the ",e.jsx(s.code,{children:"fullWidth"})," props."]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(s.h2,{id:"clearable",children:"Clearable"}),`
`,e.jsxs(s.p,{children:["By default, the select is clearable ( the cross icon on the right is shown ). You can disable it by using the ",e.jsx(s.code,{children:"clearable"})," props."]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(s.h2,{id:"disabled-options",children:"Disabled options"}),`
`,e.jsxs(s.p,{children:["You can disable some options by using the ",e.jsx(s.code,{children:"disabled"})," props on the ",e.jsx(s.code,{children:"Option"})," object."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(s.h2,{id:"hide-label",children:"Hide label"}),`
`,e.jsxs(s.p,{children:["For some reasons you might want to hide the label of the select. You can do that by using the ",e.jsx(s.code,{children:"hideLabel"})," props."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["It is important for accessibility to always have a label for your inputs. Keep in mind that setting ",e.jsx(s.code,{children:"hideLabel"})," to ",e.jsx(s.code,{children:"true"}),", will only hide the label visually, but it will still be available for screen readers in the DOM."]}),`
`]}),`
`,e.jsx(o,{of:w}),`
`,e.jsx(s.h2,{id:"custom-render-option",children:"Custom render option"}),`
`,e.jsxs(s.p,{children:["You can give customize the look of the options by providing ",e.jsx(s.code,{children:"render"})," callback."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["When you provide ",e.jsx(s.code,{children:"render"})," the fields ",e.jsx(s.code,{children:"label"})," and ",e.jsx(s.code,{children:"value"})," are mandatory."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Feel free to use the attribute ",e.jsx(s.code,{children:"showLabelWhenSelected"}),` to choose whether you want to display selected option with the custom
HTML or with its `,e.jsx(s.code,{children:"label"}),". It is set to ",e.jsx(s.code,{children:"true"})," by default."]}),`
`,e.jsx(o,{of:y}),`
`,e.jsx(s.h2,{id:"controlled--non-controlled",children:"Controlled / Non Controlled"}),`
`,e.jsx(s.p,{children:`Like a native select, you can use the Select component in a controlled or non controlled way. You can see the example below
using the component in a controlled way.`}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(s.h2,{id:"usage-with-react-hook-form",children:"Usage with react-hook-form"}),`
`,e.jsxs(s.p,{children:["You can use this input with ",e.jsx(s.a,{href:"https://react-hook-form.com/docs",rel:"nofollow",children:"react-hook-form"})]}),`
`,e.jsx(o,{of:k}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(s.p,{children:"The props of this component are as close as possible to the native select component. You can see the list of props below."}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(s.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(s.p,{children:"Here are the custom design tokens defined by the select."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Token"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"background-color"}),e.jsx(s.td,{children:"Background color of the select"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-color"}),e.jsx(s.td,{children:"Border color of the select"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-color--hover"}),e.jsx(s.td,{children:"Border color of the select on mouse hover"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-color--focus"}),e.jsx(s.td,{children:"Border color of the select when focus"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-radius"}),e.jsx(s.td,{children:"Border radius of the select"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-radius--hover"}),e.jsx(s.td,{children:"Border radius of the select on mouse hover"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-radius--focus"}),e.jsx(s.td,{children:"Border radius of the select when focused"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-style"}),e.jsx(s.td,{children:"Border style of the select"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"border-width"}),e.jsx(s.td,{children:"Border width of the select"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"value-color"}),e.jsx(s.td,{children:"Value color"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"value-color--disabled"}),e.jsx(s.td,{children:"Value color when disabled"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"font-size"}),e.jsx(s.td,{children:"Value font size"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"height"}),e.jsx(s.td,{children:"Height of the combo box"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"item-background-color--hover"}),e.jsx(s.td,{children:"Background color of the item on mouse hover"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"item-background-color--selected"}),e.jsx(s.td,{children:"Background color of the selected item"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"item-color"}),e.jsx(s.td,{children:"Color of the item"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"item-color--disabled"}),e.jsx(s.td,{children:"Color of the disabled item"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"item-font-size"}),e.jsx(s.td,{children:"Font size of the item"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"menu-background-color"}),e.jsx(s.td,{children:"Background color of the menu"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"label-color--focus"}),e.jsx(s.td,{children:"Label color when focused"})]})]})]}),`
`,e.jsxs(s.p,{children:["See also ",e.jsx(s.a,{href:"?path=/story/components-forms-field-doc--page",children:"Field"})]}),`
`,e.jsx(s.h2,{id:"form-example",children:"Form Example"}),`
`,e.jsx(o,{of:S}),`
`,e.jsx(s.h2,{id:""}),`
`,e.jsx("img",{src:"components/Forms/Select/resources/dd_1.svg"}),`
`,e.jsx(s.h2,{id:"-1"}),`
`,e.jsx("img",{src:"components/Forms/Select/resources/dd_2.svg"}),`
`,e.jsx(s.h2,{id:"-2"}),`
`,e.jsx("img",{src:"components/Forms/Select/resources/dd_3.svg"})]})}function Z(t={}){const{wrapper:s}={...r(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{Z as default};
