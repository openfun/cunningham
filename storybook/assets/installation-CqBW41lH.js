import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DywkESLE.js";import"./index-DmMv4Tzj.js";import{M as a,S as o}from"./index-DjiUAfnp.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./preview-DcDnKmgE.js";import"./iframe-BKUbjXsD.js";import"./DocsRenderer-CFRXHY34-b-boLmVf.js";import"./react-18-0ENLrOAf.js";import"./index-DO9VteM4.js";import"./index-D2FdBkVr.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Getting Started/Installation"}),`
`,e.jsx(n.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"First, install the library"}),`
`,e.jsx(o,{language:"bash",dark:!0,format:!1,code:`
  yarn add @openfun/cunningham-react
  `}),`
`,e.jsxs(n.p,{children:["Then, add this script to your ",e.jsx(n.code,{children:"package.json"})," file"]}),`
`,e.jsx(o,{language:"json",dark:!0,format:!1,code:`
{
  "scripts": {
    "build-theme": "cunningham -g css -o src"
  },
}
`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Please take a look at ",e.jsx(n.a,{href:"https://github.com/openfun/cunningham/tree/main/packages/tokens#configuration-file",rel:"nofollow",children:"tokens documentation"})," for more informations about the ",e.jsx(n.code,{children:"cunningham"})," command line tool and to customize your local theme."]}),`
`]}),`
`,e.jsx(n.p,{children:"Then, in order to generate the css file, run"}),`
`,e.jsx(o,{language:"bash",dark:!0,format:!1,code:`
  yarn build-theme
  `}),`
`,e.jsxs(n.p,{children:["It will generate a file named ",e.jsx(n.code,{children:"cunningham-tokens.css"}),"."]}),`
`,e.jsx(n.p,{children:"Then, add these lines at the top of your main stylesheet file:"}),`
`,e.jsx(o,{language:"css",dark:!0,format:!1,code:`
@use "@openfun/cunningham-react/fonts"; // Imports default fonts ( Roboto ). You can also import fonts by yourself.
@use "@openfun/cunningham-react/icons"; // Imports icons ( Material Icons ).
@use "@openfun/cunningham-react/style"; // Imports the default theme.
@use "cunningham-tokens"; // Imports the file you just generated.
  `}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If you are not using dart sass, you can use ",e.jsx(n.code,{children:"@import"}),", please visit the ",e.jsx(n.a,{href:"https://sass-lang.com/documentation/at-rules/import/",rel:"nofollow",children:"documentation"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Please see ",e.jsx(n.a,{href:"https://github.com/openfun/cunningham/tree/main/packages/tokens#use-the-design-tokens",rel:"nofollow",children:"here"})," to see how to use the design tokens in your source code."]}),`
`]}),`
`,e.jsx(n.p,{children:"We're done! 🎉"}),`
`,e.jsxs(n.p,{children:["Now to verify that everything works well by trying to render a component, like the ",e.jsx(n.a,{href:"?path=/story/components-button-doc--page",children:"Button"})," for example."]})]})}function b(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{b as default};
