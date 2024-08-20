import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as i}from"./index-BI1Biiay.js";import"./chunk-HLWAVYOI-sD_rr9GM.js";import{ae as s,ag as o}from"./index-C62haWUp.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BcLVm5vd.js";import"../sb-preview/runtime.js";import"./react-18-DVPy5crb.js";import"./index-D7RfCbhb.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Migrating/From v1 to v2"}),`
`,e.jsx(n.h1,{id:"from-v1-to-v2",children:"From v1 to v2"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"2.0.0"})," introduced themes management. This comes with some structural changes regarding ",e.jsx(n.code,{children:"cunningham.ts|js"}),` configuration
file and tokens format.`]}),`
`,e.jsx(n.h2,{id:"configuration-file",children:"Configuration file"}),`
`,e.jsxs(n.p,{children:["As a reminder here is the v1 format of the ",e.jsx(n.code,{children:"cunningham.ts"})," file:"]}),`
`,e.jsx(o,{dark:!0,code:`
// cunningham.ts
import { DefaultTokens } from "@openfun/cunningham-react";

const config: DefaultTokens = {
  theme: {
    colors: {
      ...
    },
  },
  components: {
    button: {
      "border-radius": "30px",
    },
  },
};

export default config;
`}),`
`,e.jsxs(n.p,{children:["The new version adds two top-level keys, which are ",e.jsx(n.code,{children:"themes"})," and ",e.jsx(n.code,{children:"default"}),` ( which refers to the default theme name ), so
the new format of the previous example will be:`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"⚠ Updating your configuration file is mandatory ⚠"}),`
`]}),`
`,e.jsx(o,{dark:!0,code:`
// cunningham.ts
import { DefaultTokens } from "@openfun/cunningham-react";

const config: DefaultTokens = {
  themes: {
    default: {
      theme: {
        colors: {
          ...
        },
      },
      components: {
        button: {
          "border-radius": "30px",
        },
      },
    },
  },
};

export default config;
`}),`
`,e.jsxs(n.p,{children:["If you want to learn about theme please see this ",e.jsx(n.a,{href:"?path=/docs/getting-started-theming--docs",children:"Theming"}),"."]}),`
`,e.jsx(n.h2,{id:"token-files",children:"Token files"}),`
`,e.jsxs(n.p,{children:["Here we are talking about ",e.jsx(n.code,{children:"cunningham-tokens.ts|js"}),` files. As they are reflecting the structure of the configuration
of the design tokens we added those two levels of nesting which are `,e.jsx(n.code,{children:"themes.[themeName].*"})]}),`
`,e.jsx(n.p,{children:"Old way of retrieving design tokens:"}),`
`,e.jsx(o,{dark:!0,code:`
import { tokens } from "./cunningham-tokens";

console.log(tokens.theme.color['primary-500']);
`}),`
`,e.jsx(n.p,{children:"New way:"}),`
`,e.jsx(o,{dark:!0,code:`
import { tokens } from "./cunningham-tokens";

let currentTheme = "default";
console.log(tokens.themes[currentTheme].theme.color['primary-500']);
`}),`
`,e.jsx(n.h2,{id:"what-about-css-file-",children:"What about CSS file ?"}),`
`,e.jsxs(n.p,{children:["What great is that nothing has changed! You can continue to use ",e.jsx(n.code,{children:"var(--c--theme--colors--primary-500)"}),` as before as their current value
is automatically updated by Cunningham when the theme is updated in real time.`]})]})}function w(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{w as default};
