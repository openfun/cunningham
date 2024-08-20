import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as a}from"./index-BI1Biiay.js";import"./chunk-HLWAVYOI-sD_rr9GM.js";import{ae as i,ag as n,af as s}from"./index-C62haWUp.js";import{BackgroundColors as c,TextColors as l,Example as m}from"./colors.stories-C_owFK2f.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BcLVm5vd.js";import"../sb-preview/runtime.js";import"./react-18-DVPy5crb.js";import"./index-D7RfCbhb.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";const z=["primary","secondary","greyscale","success","info","warning","danger"],Y=[900,800,700,600,500,400,300,200,100];function r(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting Started/Colors"}),`
`,`
`,e.jsx(o.h1,{id:"colors",children:"Colors"}),`
`,e.jsx(o.p,{children:"Cunningham comes with an existing toolkit to deal with colors, and it's easy. 🎨"}),`
`,e.jsx(o.h2,{id:"background-color",children:"Background color"}),`
`,e.jsxs(o.p,{children:["You can use custom utility classes to set the background color of an element. These classes are named using the format ",e.jsx(o.code,{children:".bg-{color}"}),"."]}),`
`,e.jsx(n,{language:"tsx",dark:!0,format:!1,code:`
  <div className="bg-primary-500"></div>
  `}),`
`,e.jsx(o.p,{children:"You can find all existing classes below."}),`
`,e.jsx(s,{sourceState:"none",of:c}),`
`,e.jsx(o.h2,{id:"text-color",children:"Text color"}),`
`,e.jsxs(o.p,{children:["You can use custom utility classes to set the color attribute of an element. These classes are named using the format ",e.jsx(o.code,{children:".clr-{color}"}),"."]}),`
`,e.jsx(n,{language:"tsx",dark:!0,format:!1,code:`
  <div className="clr-primary-500">Nice primary-500 colored text</div>
  `}),`
`,e.jsx(o.p,{children:"You can find all existing classes below."}),`
`,e.jsx(s,{sourceState:"none",of:l}),`
`,e.jsxs(o.p,{children:["Pay attention the special ",e.jsx(o.code,{children:"{color}-text"}),` variation. Each color must have a text color variation, which is supposed to
render readable text on top of a -500 background of its own color variation. Please check out the following examples:`]}),`
`,e.jsx(s,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"customize",children:"Customize"}),`
`,e.jsx(o.p,{children:"You can customize the values of the color design tokens with the configuration file this way:"}),`
`,e.jsx(n,{language:"ts",dark:!0,format:!0,code:`
  // cunningham.ts|cjs
  export default {
    themes: {
      default: {
        theme: {
          colors: {
            'primary-500': 'purple', // You can customize the existing primary-500 color. ( bg-primary-500, clr-primary-500 classes ),
            'primary-text': 'cream',
            'amazing-500': 'pink', // You can add a new color. ( bg-amazing-500, clr-amazing-500 classes will be generated )
        },
      },
    },
  }
  `})]})}function M(t={}){const{wrapper:o}={...a(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{z as colors,M as default,Y as tints};
