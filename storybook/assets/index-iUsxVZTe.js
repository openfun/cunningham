import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DywkESLE.js";import{M as i,C as t,S as d,A as l}from"./index-DjiUAfnp.js";import{S as c,M as h,a as x,b as a,c as j,d as u,e as p,f,g as m,h as g,i as b,j as y}from"./index.stories-xtchsaYu.js";import{F as M}from"./index-Cr62zrzF.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./iframe-BKUbjXsD.js";import"./index-D2FdBkVr.js";import"./index-DO9VteM4.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DyRkmeWf.js";import"./index-D7DNl-ap.js";import"./index-rkLeB0kx.js";import"./index-eFf25hYI.js";import"./ToastProvider-Dr5c6mPT.js";import"./cunningham-tokens-C-zj90pO.js";import"./index-CAEZVxT0.js";import"./index-BcQiDnY4.js";function s(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(o.h1,{id:"fileuploader",children:"FileUploader"}),`
`,e.jsx(o.p,{children:"Cunningham provides a file uploader component that you can use in your forms."}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(d,{language:"ts",dark:!0,format:!1,code:'import { FileUploader } from "@openfun/cunningham-react";'}),`
`,e.jsx(o.h2,{id:"multi",children:"Multi"}),`
`,e.jsx(o.p,{children:"The file uploader comes with a multi version to handle multiple files."}),`
`,e.jsx(t,{of:x,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"states",children:"States"}),`
`,e.jsxs(o.p,{children:["You can use the following props to change the state of the FileUploader component by using the ",e.jsx(o.code,{children:"state"})," props."]}),`
`,e.jsx(t,{of:a,sourceState:"shown"}),`
`,e.jsx(t,{of:j,sourceState:"shown"}),`
`,e.jsx(t,{of:u,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"texts",children:"Texts"}),`
`,e.jsxs(o.p,{children:["You can customize displayed texts by using ",e.jsx(o.code,{children:"bigText"})," and ",e.jsx(o.code,{children:"text"})," props."]}),`
`,e.jsx(t,{of:p,sourceState:"shown"}),`
`,e.jsx(t,{of:f,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"icons",children:"Icons"}),`
`,e.jsxs(o.p,{children:["You can customize the icons used by the FileUploader using ",e.jsx(o.code,{children:"icon"}),", ",e.jsx(o.code,{children:"successIcon"}),", ",e.jsx(o.code,{children:"deleteIcon"}),", ",e.jsx(o.code,{children:"fileSelectedIcon"})," and ",e.jsx(o.code,{children:"uploadingIcon"}),"."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["You can also disable the icon animation on hover by using ",e.jsx(o.code,{children:"animateIcon"})," props."]}),`
`]}),`
`,e.jsx(t,{of:m,sourceState:"shown"}),`
`,e.jsx(t,{of:g,sourceState:"shown"}),`
`,e.jsx(t,{of:b,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"controlled--non-controlled",children:"Controlled / Non Controlled"}),`
`,e.jsx(o.p,{children:"This component cannot be entirely controlled like others due to browser restrictions. (For security reasons, browsers do not allow you to set an arbitrary to a file input.)"}),`
`,e.jsxs(o.p,{children:["What you can do is to use the ",e.jsx(o.code,{children:"onChange"})," callback to be aware of any changes in case you need to do something with the file(s)."]}),`
`,e.jsxs(o.p,{children:["You can also reset the input by using the ",e.jsx(o.code,{children:"reset"})," method available via the ref."]}),`
`,e.jsx(o.p,{children:"It works the same for multiple or mono version."}),`
`,e.jsx(t,{of:y,sourceState:"shown"}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.p,{children:["You can use all the props of the native html ",e.jsx(o.code,{children:"<input>"})," element props plus the following."]}),`
`,e.jsx(l,{of:M}),`
`,e.jsx(o.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(o.p,{children:"Here are the custom design tokens defined by the button."}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Token"}),e.jsx(o.th,{children:"Description"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"background-color"}),e.jsx(o.td,{children:"Background color of the dropzone"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-color"}),e.jsx(o.td,{children:"Border color of the dropzone"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-radius"}),e.jsx(o.td,{children:"Border radius of the dropzone"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-width"}),e.jsx(o.td,{children:"Border width of the dropzone"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"border-style"}),e.jsx(o.td,{children:"Border style of the dropzone"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"background-color--active"}),e.jsx(o.td,{children:"Background color of the dropzone when active or on hover"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"color"}),e.jsx(o.td,{children:"Color of the dropzone text"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"padding"}),e.jsx(o.td,{children:"Padding of the dropzone"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"accent-color"}),e.jsx(o.td,{children:"Accent color of the dropzone"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"text-color"}),e.jsx(o.td,{children:"Color of the small text"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"text-size"}),e.jsx(o.td,{children:"Font size of the small text"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"file-text-size"}),e.jsx(o.td,{children:"(Multi only) Font size of the file text"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"file-text-color"}),e.jsx(o.td,{children:"(Multi only) Font color of the file text"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"file-text-weight"}),e.jsx(o.td,{children:"(Multi only) Font weight of the file text"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"file-border-color"}),e.jsx(o.td,{children:"(Multi only) Border color of file"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"file-border-width"}),e.jsx(o.td,{children:"(Multi only) Border width of file"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"file-border-radius"}),e.jsx(o.td,{children:"(Multi only) Border radius of file"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"file-background-color"}),e.jsx(o.td,{children:"(Multi only) Background color of file"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"file-specs-size"}),e.jsx(o.td,{children:"(Multi only) Font size of file specs"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"file-specs-color"}),e.jsx(o.td,{children:"(Multi only) Font color of file specs"})]})]})]}),`
`,e.jsxs(o.p,{children:["See also ",e.jsx(o.a,{href:"?path=/story/components-forms-field-doc--page",children:"Field"})]})]})}function H(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}export{H as default};
