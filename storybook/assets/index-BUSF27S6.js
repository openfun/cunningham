import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DywkESLE.js";import"./index-DmMv4Tzj.js";import{D as c,a as l}from"./DateRangePicker-BEy1jt0F.js";import{S as h,D as x,a as u,R as j,E as p,b as m,c as f,d as g,W as b,C as k,e as y,M as v,I as D,f as w,g as P}from"./index.stories-DvcMfhWk.js";import{M as S,S as s,C as n,a as o,A as d}from"./index-DjiUAfnp.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./preview-DcDnKmgE.js";import"./iframe-BKUbjXsD.js";import"./DocsRenderer-CFRXHY34-b-boLmVf.js";import"./react-18-0ENLrOAf.js";import"./index-DO9VteM4.js";import"./focusSafely-BO-rTwXV.js";import"./context-C5gmCNcd.js";import"./index-D2FdBkVr.js";import"./downshift.esm-C6xx4FW2.js";import"./index-eFf25hYI.js";import"./ToastProvider-Dr5c6mPT.js";import"./index-rkLeB0kx.js";import"./index-DyRkmeWf.js";import"./cunningham-tokens-C-zj90pO.js";import"./index-CAEZVxT0.js";import"./index-Dozmc4PB.js";import"./index-D7DNl-ap.js";import"./index-3i_lEcpX.js";import"./reactHookFormUtils-DBL7F8xI.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(r){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(S,{of:h}),`
`,e.jsx(t.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsxs(t.p,{children:[`Cunningham provides a versatile DatePicker component to select or input a date in your form. It uses the headless
UI components provided by `,e.jsx(t.a,{href:"https://react-spectrum.adobe.com/react-aria/useDatePicker.html",rel:"nofollow",children:"React-Spectrum"})," from Adobe."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Time features will be available soon."}),`
`]}),`
`,e.jsx(t.h2,{id:"basic",children:"Basic"}),`
`,e.jsx(s,{language:"ts",dark:!0,format:!1,code:`
  <DatePicker label="Pick a date" />
  `}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(t.h2,{id:"default-value",children:"Default value"}),`
`,e.jsxs(t.p,{children:["You can use the following props to change the default value of the DatePicker component by using the ",e.jsx(t.code,{children:"state"})," props."]}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsx(t.h2,{id:"range",children:"Range"}),`
`,e.jsx(s,{language:"ts",dark:!0,format:!1,code:`
  <DateRangePicker startLabel="Start date" endLabel="Due date" name="datepicker" />
  `}),`
`,e.jsxs(t.p,{children:[`When using it within a form, you'll access its values using separate inputs for the start and end values. The start input's
name will be the `,e.jsx(t.code,{children:"DateRangePicker"}),"'s name suffixed by ",e.jsx(t.code,{children:"_start"})," and the end input's name will be the ",e.jsx(t.code,{children:"DateRangePicker"}),"'s name suffixed by ",e.jsx(t.code,{children:"_end"}),`.
Ex: If a `,e.jsx(t.code,{children:"DateRangePicker"})," is named ",e.jsx(t.code,{children:'"subscription"'}),", you would access its values as follow:"]}),`
`,e.jsx(s,{language:"ts",dark:!0,format:!1,code:`

  formData = {
    datepickerStart: data.get("subscription_start"),
    datepickerEnd: data.get("subscription_end"),
  };
  `}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(t.h2,{id:"states",children:"States"}),`
`,e.jsxs(t.p,{children:["You can use the following props to change the state of the DatePicker component by using the ",e.jsx(t.code,{children:"state"})," props."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(t.p,{children:["As a regular input, you can disable it by using the ",e.jsx(t.code,{children:"disabled"})," props."]}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsx(n,{of:g,sourceState:"shown"}),`
`,e.jsx(t.h2,{id:"texts",children:"Texts"}),`
`,e.jsxs(t.p,{children:["As the component uses ",e.jsx(t.a,{href:"?path=/story/components-forms-field-doc--page",children:"Field"}),", you can use the ",e.jsx(t.code,{children:"text"})," props to provide a description of the checkbox."]}),`
`,e.jsx(n,{of:b,sourceState:"shown"}),`
`,e.jsx(t.h2,{id:"controlled--non-controlled",children:"Controlled / Non Controlled"}),`
`,e.jsx(t.p,{children:`Like a native input, you can use the DatePicker component in a controlled or non controlled way. You can see the example below
using the component in a controlled way.`}),`
`,e.jsx(n,{of:k,sourceState:"shown"}),`
`,e.jsx(n,{of:y,sourceState:"shown"}),`
`,e.jsx(t.h2,{id:"minvalue--maxvalue",children:"MinValue / MaxValue"}),`
`,e.jsxs(t.p,{children:["You can pass a date range that are valid using the ",e.jsx(t.code,{children:"minValue"})," and ",e.jsx(t.code,{children:"maxValue"})," props."]}),`
`,e.jsx(n,{of:v,sourceState:"shown"}),`
`,e.jsx(t.h2,{id:"invalid-date",children:"Invalid date"}),`
`,e.jsx(t.p,{children:"When passing an invalid date, for example outside of the valid range, the DatePicker component would render invalid."}),`
`,e.jsx(n,{of:D,sourceState:"shown"}),`
`,e.jsx(t.h2,{id:"international-calendars",children:"International calendars"}),`
`,e.jsx(t.p,{children:`When passing a locale value to the DatePicker components, dates would be automatically displayed in the appropriate calendar system.
By default, the DatePicker component uses the CunninghamProvider locale.`}),`
`,e.jsxs(n,{sourceState:"shown",children:[e.jsx(o,{id:"components-forms-datepicker--custom-locale"}),e.jsx(o,{id:"components-forms-datepicker--cunningham-locale"})]}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(t.h2,{id:"timezone-management",children:"Timezone management"}),`
`,e.jsx(t.p,{children:`By default, the component uses the user's local timezone. When a timezone is passed, dates are selected at midnight in that specific timezone.
If a value or default value is provided, the component preserves the time unless the user clears the input.
When the input is cleared, the dates are reset to midnight in the current timezone.
The component accepts both UTC date-time strings and date-time strings with offsets from UTC.
However, it consistently returns the output in UTC time, ensuring uniformity across different timezone.`}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(t.p,{children:"You can see the list of props below."}),`
`,e.jsx(t.h3,{id:"datepicker-1",children:"DatePicker"}),`
`,e.jsx(d,{of:c}),`
`,e.jsx(t.h3,{id:"daterangepicker",children:"DateRangePicker"}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(t.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(t.p,{children:"Here are the custom design tokens defined by the datepicker."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Token"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"background-color"}),e.jsx(t.td,{children:"Background color of the datepicker"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"border-color"}),e.jsx(t.td,{children:"Border color of the datepicker"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"border-color--hover"}),e.jsx(t.td,{children:"Border color of the datepicker on mouse hover"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"border-color--focus"}),e.jsx(t.td,{children:"Border color of the datepicker when focus"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"border-radius"}),e.jsx(t.td,{children:"Border radius of the datepicker"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"border-width"}),e.jsx(t.td,{children:"Border width of the datepicker"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"border-radius--hover"}),e.jsx(t.td,{children:"Border radius of the datepicker on mouse hover"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"border-radius--focus"}),e.jsx(t.td,{children:"Border radius of the datepicker when focused"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"value-color"}),e.jsx(t.td,{children:"Value color"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"value-color--disabled"}),e.jsx(t.td,{children:"Value color when disabled"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"font-size"}),e.jsx(t.td,{children:"Value font size"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"height"}),e.jsx(t.td,{children:"Height of the combo box"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"item-background-color--hover"}),e.jsx(t.td,{children:"Background color of the item on mouse hover (months/years menus)"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"item-background-color--selected"}),e.jsx(t.td,{children:"Background color of the selected item (months/years menus)"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"item-color"}),e.jsx(t.td,{children:"Color of the item (months/years menus)"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"item-font-size"}),e.jsx(t.td,{children:"Font size of the item (months/years menus)"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"menu-background-color"}),e.jsx(t.td,{children:"Background color of the menu (months/years menus)"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"grid-cell--border-color--today"}),e.jsx(t.td,{children:"Border color of the today grid-cell"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"grid-cell--color--today"}),e.jsx(t.td,{children:"Value color of the today grid-cell"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"range-selection-background-color"}),e.jsx(t.td,{children:"Value color of the selected grid-cells"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"label-color--focus"}),e.jsx(t.td,{children:"Label color when focused"})]})]})]}),`
`,e.jsxs(t.p,{children:["See also ",e.jsx(t.a,{href:"?path=/story/components-forms-field-doc--page",children:"Field"})]})]})}function ne(r={}){const{wrapper:t}={...a(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(i,{...r})}):i(r)}export{ne as default};
