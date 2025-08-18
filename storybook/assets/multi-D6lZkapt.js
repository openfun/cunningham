import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-DywkESLE.js";import{M as r,C as t}from"./index-DjiUAfnp.js";import{S as c,F as s,a as h,b as d,E as a,D as p,W as x,N as u,c as j,H as m,M as f,d as b,C as w,R as g}from"./multi.stories-CdzDUoaW.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BKUbjXsD.js";import"./index-D2FdBkVr.js";import"./index-DO9VteM4.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./reactHookFormUtils-DBL7F8xI.js";import"./index-DGYAH_zb.js";import"./index-rkLeB0kx.js";import"./index-eFf25hYI.js";import"./ToastProvider-Dr5c6mPT.js";import"./index-DyRkmeWf.js";import"./cunningham-tokens-C-zj90pO.js";import"./index-CAEZVxT0.js";import"./index-D7DNl-ap.js";import"./index-3i_lEcpX.js";import"./useOverlayPosition-CofLYEYW.js";import"./context-C5gmCNcd.js";import"./downshift.esm-C6xx4FW2.js";import"./index-B7qWtOxe.js";import"./stories-utils-CpTNK4_Y.js";import"./index-46f45BQC.js";function i(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,name:"Docs"}),`
`,e.jsx(o.h1,{id:"multi-select",children:"Multi-Select"}),`
`,e.jsxs(o.p,{children:["Cunningham provides a versatile Multi-Select component that you can use in your forms. This component follows the ",e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/",rel:"nofollow",children:"ARIA design pattern"}),`
using `,e.jsx(o.a,{href:"https://www.downshift-js.com/",rel:"nofollow",children:"Downshift"}),", so that mean there is no ",e.jsx(o.code,{children:"select"})," wrapped inside it."]}),`
`,e.jsxs(o.p,{children:["The Multi-Select leverages the regular ",e.jsx(o.a,{href:"?path=/docs/components-forms-select-mono--docs",children:"Select"})," component, you just have to add the ",e.jsx(o.code,{children:"multi"})," props."]}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(o.h2,{id:"options",children:"Options"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"options"})," props works the same as the ",e.jsx(o.code,{children:"options"})," props in the ",e.jsx(o.a,{href:"?path=/docs/components-forms-select-mono--docs#options",children:"Select"})," component."]}),`
`,e.jsx(o.h2,{id:"searchable",children:"Searchable"}),`
`,e.jsxs(o.p,{children:["You can enable the text live filtering simply by using the ",e.jsx(o.code,{children:"searchable"})," props."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["You can use ",e.jsx(o.code,{children:"onSearchInputChange"})," to get the value of the input when the user is typing."]}),`
`]}),`
`,e.jsx(o.h2,{id:"states",children:"States"}),`
`,e.jsxs(o.p,{children:["You can use the following props to change the state of the Multi-Select component by using the ",e.jsx(o.code,{children:"state"})," props."]}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(o.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(o.p,{children:["As a regular select, you can disable it by using the ",e.jsx(o.code,{children:"disabled"})," props. In this mode the user can't select nor unselect existing options."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(o.h2,{id:"texts",children:"Texts"}),`
`,e.jsxs(o.p,{children:["As the component uses ",e.jsx(o.a,{href:"?path=/docs/components-forms-field--docs",children:"Field"}),", you can use the ",e.jsx(o.code,{children:"text"})," props to provide a description of the checkbox."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(o.h2,{id:"width",children:"Width"}),`
`,e.jsxs(o.p,{children:["By default, the Multi-Select has a default width, like all inputs. But you can force it to take the full width of its container by using the ",e.jsx(o.code,{children:"fullWidth"})," props."]}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(o.h2,{id:"clearable",children:"Clearable"}),`
`,e.jsxs(o.p,{children:["By default, the Multi-Select is clearable ( the cross icon on the right is shown ). You can disable it by using the ",e.jsx(o.code,{children:"clearable"})," props."]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(o.h2,{id:"disabled-options",children:"Disabled options"}),`
`,e.jsxs(o.p,{children:["You can disable some options by using the ",e.jsx(o.code,{children:"disabled"})," props on the ",e.jsx(o.code,{children:"Option"})," object."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(o.h2,{id:"hide-label",children:"Hide label"}),`
`,e.jsxs(o.p,{children:["For some reasons you might want to hide the label of the Multi-Select. You can do that by using the ",e.jsx(o.code,{children:"hideLabel"})," props."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["It is important for accessibility to always have a label for your inputs. Keep in mind that setting ",e.jsx(o.code,{children:"hideLabel"})," to ",e.jsx(o.code,{children:"true"}),", will only hide the label visually, but it will still be available for screen readers in the DOM."]}),`
`]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(o.h2,{id:"monoline",children:"Monoline"}),`
`,e.jsxs(o.p,{children:["You can use ",e.jsx(o.code,{children:"monoline"}),` props in order to make sure the component will never wrap on multiple lines.
When using this mode the selected options will be kept in the menu with checkboxes in order to make sure the user can
always see the full list of selected options without having to scroll.`]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["At the moment this props cannot be used in conjunction with ",e.jsx(o.code,{children:"searchable"})," props."]}),`
`]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(o.h2,{id:"custom-render-option",children:"Custom render option"}),`
`,e.jsxs(o.p,{children:["You can give customize the look of the options by providing ",e.jsx(o.code,{children:"render"})," callback."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["When you provide ",e.jsx(o.code,{children:"render"})," the fields ",e.jsx(o.code,{children:"label"})," and ",e.jsx(o.code,{children:"value"})," are mandatory."]}),`
`]}),`
`,e.jsxs(o.p,{children:["Feel free to use the attribute ",e.jsx(o.code,{children:"showLabelWhenSelected"}),` to choose whether you want to display selected option with the custom
HTML or with its `,e.jsx(o.code,{children:"label"}),". It is set to ",e.jsx(o.code,{children:"true"})," by default."]}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(o.h2,{id:"controlled--non-controlled",children:"Controlled / Non Controlled"}),`
`,e.jsx(o.p,{children:`Like a native select, you can use the Select component in a controlled or non controlled way. You can see the example below
using the component in a controlled way.`}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(o.h2,{id:"usage-with-react-hook-form",children:"Usage with react-hook-form"}),`
`,e.jsxs(o.p,{children:["You can use this input with ",e.jsx(o.a,{href:"https://react-hook-form.com/docs",rel:"nofollow",children:"react-hook-form"})]}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:["They are the same as the ",e.jsx(o.a,{href:"?path=/docs/components-forms-select-mono--docs#props",children:"Select"})," component."]}),`
`,e.jsx(o.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsxs(o.p,{children:["They are the same as the ",e.jsx(o.a,{href:"?path=/docs/components-forms-select-mono--docs#design-tokens",children:"Select"})," component plus the following:"]}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Token"}),e.jsx(o.th,{children:"Description"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"multi-pill-background-color"}),e.jsx(o.td,{children:"Background color of the pills of the multi select"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"multi-pill-border-radius"}),e.jsx(o.td,{children:"Border radius of the pills of the multi select"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"multi-pill-max-width"}),e.jsx(o.td,{children:"Max width of pills"})]})]})]})]})}function G(n={}){const{wrapper:o}={...l(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{G as default};
