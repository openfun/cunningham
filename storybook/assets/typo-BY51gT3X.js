import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DywkESLE.js";import"./index-DmMv4Tzj.js";import{Sizes as r,Weights as c,Families as l}from"./typo.stories-BN0zo6-F.js";import{M as h,S as n,C as o}from"./index-DjiUAfnp.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./preview-DcDnKmgE.js";import"./iframe-BKUbjXsD.js";import"./DocsRenderer-CFRXHY34-b-boLmVf.js";import"./react-18-0ENLrOAf.js";import"./index-DO9VteM4.js";import"./cunningham-tokens-C-zj90pO.js";import"./index-D2FdBkVr.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function a(s){const t={code:"code",h1:"h1",h2:"h2",p:"p",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Getting Started/Typography"}),`
`,e.jsx(t.h1,{id:"typo",children:"Typo"}),`
`,e.jsx(t.p,{children:"Cunningham comes with an existing toolkit to deal with typography, and it's easy. 🖋️"}),`
`,e.jsx(t.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(t.p,{children:["You can use custom utility classes to set the font size of an element. These classes are named using the format ",e.jsx(t.code,{children:".fs-{size}"}),"."]}),`
`,e.jsx(n,{language:"tsx",dark:!0,format:!1,code:`
  <div className="fs-m">Medium text</div>
  `}),`
`,e.jsx(o,{sourceState:"none",of:r}),`
`,e.jsx(t.p,{children:"You can customize the values of the font size design tokens with the configuration file this way:"}),`
`,e.jsx(n,{language:"ts",dark:!0,format:!0,code:`
  // cunningham.ts|cjs
  export default {
    themes: {
      default: {
        theme: {
          typo: {
            sizes: {
              m: '0.5rem', // You can customize the size of the existing medium text ( 'fs-m' class )
              xxl: '3rem' // You can also add custom sizes yourself ( 'fs-xxl' class will be generated )
              ...
            },
          },
        },
      },
    },
  }
  `}),`
`,e.jsx(t.h2,{id:"weights",children:"Weights"}),`
`,e.jsxs(t.p,{children:["You can use custom utility classes to set the font weight of an element. These classes are named using the format ",e.jsx(t.code,{children:".fw-{weight}"}),"."]}),`
`,e.jsx(n,{language:"tsx",dark:!0,format:!1,code:`
  <div className="fs-l fw-bold">Large size bold text</div>
  `}),`
`,e.jsx(o,{sourceState:"none",of:c}),`
`,e.jsx(t.p,{children:"You can customize the values of the font weight design tokens with the configuration file this way:"}),`
`,e.jsx(n,{language:"ts",dark:!0,format:!0,code:`
  // cunningham.ts|cjs
  export default {
    themes: {
      default: {
        theme: {
          typo: {
            weights: {
              regular: 500, // You can customize the size of the existing regular text ( 'fw-regular' class )
              chunky: 900 // You can also add custom weights yourself ( 'fw-chunky' class will be generated )
              ...
            },
          },
        },
      },
    }
  }
  `}),`
`,e.jsx(t.h2,{id:"families",children:"Families"}),`
`,e.jsxs(t.p,{children:["You can use custom utility classes to set the font family of an element. These classes are named using the format ",e.jsx(t.code,{children:".f-{family}"}),`.
For now, the design system only relies on `,e.jsx(t.code,{children:"Roboto"})," font-family for both ",e.jsx(t.code,{children:"base"})," and ",e.jsx(t.code,{children:"accent"})," variations. But you can customize it."]}),`
`,e.jsxs(t.p,{children:["The font associated with ",e.jsx(t.code,{children:"f-base"})," is the default font for the whole application, so there is no need to use the ",e.jsx(t.code,{children:"f-base"}),`
class on every dom element.`]}),`
`,e.jsx(n,{language:"tsx",dark:!0,format:!1,code:`
  <div className="clr-greyscale-800 f-accent">Accent text</div>
  `}),`
`,e.jsx(o,{sourceState:"none",of:l}),`
`,e.jsx(t.p,{children:"You can customize the values of the font family design tokens with the configuration file this way:"}),`
`,e.jsx(n,{language:"ts",dark:!0,format:!0,code:`
  // cunningham.ts|cjs
  export default {
    themes: {
      default: {
        theme: {
          typo: {
            families: {
              base: 'Inter', // You can customize the font family of the existing base variation ( 'f-base' class )
              legend: 'Arial' // You can also add custom font families yourself ( 'f-legend' class will be generated )
              ...
            },
          },
        },
      },
    },
  }
  `})]})}function M(s={}){const{wrapper:t}={...i(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{M as default};
