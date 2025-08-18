import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DywkESLE.js";import"./index-DmMv4Tzj.js";import{M as r,S as t}from"./index-DjiUAfnp.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./preview-DcDnKmgE.js";import"./iframe-BKUbjXsD.js";import"./DocsRenderer-CFRXHY34-b-boLmVf.js";import"./react-18-0ENLrOAf.js";import"./index-DO9VteM4.js";import"./index-D2FdBkVr.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Getting Started/Customization"}),`
`,e.jsx(n.h1,{id:"customization",children:"Customization"}),`
`,e.jsxs(n.p,{children:[`At some point you might want to customize the design system's colors or the look and feel of some components. This is totally possible, and we will explain how in this documentation.
But before we start, we will need to explain the concept of `,e.jsx(n.strong,{children:"design tokens"}),"."]}),`
`,e.jsx(n.h2,{id:"what-are-design-tokens-",children:"What are design tokens ?"}),`
`,e.jsx(n.p,{children:"Design tokens are the fundamental variables defining the precise behavior and rendering of ui components."}),`
`,e.jsx(n.p,{children:"For example it could be:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The primary color of a text element"}),`
`,e.jsx(n.li,{children:"The standard spacing between two elements"}),`
`,e.jsx(n.li,{children:"The border radius of a button"}),`
`,e.jsx(n.li,{children:"..."}),`
`]}),`
`,e.jsx(n.p,{children:"Design tokens are the building blocks of a design system. They are the smallest pieces of a design system, and they are used to build components."}),`
`,e.jsx(n.h2,{id:"how-to-customize-design-tokens-",children:"How to customize design tokens ?"}),`
`,e.jsx(n.p,{children:"Cunningham makes possible to create a configuration file at the root of your project, which will be used to customize the design tokens."}),`
`,e.jsx(n.h3,{id:"typescript",children:"Typescript"}),`
`,e.jsxs(n.p,{children:["If you prefer using Typescript, create a file named ",e.jsx(n.code,{children:"cunningham.ts"})," at the root of your project with the following content:"]}),`
`,e.jsx(t,{dark:!0,code:`
// cunningham.ts
import { DefaultTokens } from "@openfun/cunningham-react";

const config: DefaultTokens = {
  themes: {
    default: {
      theme: {
        colors: {
          "primary-500": "purple",
        },
      },
    },
  },
};

export default config;

`}),`
`,e.jsx(n.h3,{id:"javascript",children:"Javascript"}),`
`,e.jsxs(n.p,{children:["Or if you prefer Javascript, create a file named ",e.jsx(n.code,{children:"cunningham.cjs"})," at the root of your project with the following content:"]}),`
`,e.jsx(t,{dark:!0,code:`
// cunningham.cjs
module.exports = {
  themes: {
    default: {
      theme: {
        colors: {
          "primary-500": "purple",
        },
      },
    },
  },
};`}),`
`,e.jsxs(n.p,{children:[`In this configuration file you can overwrite all the default values of the design system.
`,e.jsxs(n.strong,{children:["You can find the default values ",e.jsx(n.a,{href:"https://github.com/openfun/cunningham/blob/main/packages/tokens/src/bin/cunningham.ts",rel:"nofollow",children:"here"}),"."]})]}),`
`,e.jsx(n.h3,{id:"build",children:"Build"}),`
`,e.jsxs(n.p,{children:["If you followed the ",e.jsx(n.a,{href:"?path=/docs/getting-started-installation--docs",children:"previous steps"}),", you can now rebuild the design tokens by running the following command:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`yarn build-theme
`})}),`
`,e.jsx(n.p,{children:"Build your app again, and you should see the changes applied. 🎉"}),`
`,e.jsx(n.h2,{id:"customize-components",children:"Customize components"}),`
`,e.jsx(n.p,{children:"We previously saw how to customize global design tokens, but you can also customize the look and feel of each component independently."}),`
`,e.jsxs(n.p,{children:["Here we will customize the border radius of the ",e.jsx(n.a,{href:"?path=/docs/components-button--docs",children:"Button"})," component."]}),`
`,e.jsxs(n.p,{children:["First, let's display a ",e.jsx(n.code,{children:"Button"})]}),`
`,e.jsx(t,{dark:!0,code:`
  <Button>World best button.</Button>
`}),`
`,e.jsxs(n.p,{children:["Now, go to ",e.jsx(n.a,{href:"?path=/docs/components-button--docs",children:"Button"}),' documentation page and scroll down to "Design tokens", you will see all the available design tokens.']}),`
`,e.jsxs(n.p,{children:["For our example we focus on the ",e.jsx(n.code,{children:"border-radius"})," design token. Now, incorporate the subsequent code into your cunningham.ts file :"]}),`
`,e.jsx(t,{dark:!0,code:`
// cunningham.ts
import { DefaultTokens } from "@openfun/cunningham-react";

const config: DefaultTokens = {
  themes: {
    default: {
      theme: {
        ...
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
`,e.jsx(n.p,{children:"Run the following command:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`yarn build-theme
`})}),`
`,e.jsx(n.p,{children:"Build your app again, and you should see the changes applied! 💄"}),`
`,e.jsxs(n.p,{children:["If you find out that the current design tokens are not enough for the customization you want to do, feel free to ",e.jsx(n.a,{href:"https://github.com/openfun/cunningham/issues/new",rel:"nofollow",children:"open an issue"})," or to ",e.jsx(n.a,{href:"https://github.com/openfun/cunningham/blob/main/CONTRIBUTING.md",rel:"nofollow",children:"contribute to the project"})," 🙏"]}),`
`,e.jsx(n.h2,{id:"use-default-design-tokens",children:"Use default design tokens"}),`
`,e.jsxs(n.p,{children:["If you want to use the default design tokens, you can import them from the ",e.jsx(n.code,{children:"@openfun/cunningham-react"}),` package. For example,
let's say we want keep the same border radius when the `,e.jsx(n.code,{children:"Button"})," component is active without hard-coding it, we can do the following:"]}),`
`,e.jsx(t,{dark:!0,code:`
// cunningham.ts
import { defaultTokens, DefaultTokens } from "@openfun/cunningham-react";

const config: DefaultTokens = {
  themes: {
    default: {
      theme: {
        ...
      },
      components: {
        button: {
          "border-radius--active": defaultTokens.components.button["border-radius"],
        },
      },
    },
  },
};

export default config;

`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Be careful, ",e.jsx(n.code,{children:"DefaultTokens"})," with a capital ",e.jsx(n.code,{children:"D"})," is the type of the default tokens, while ",e.jsx(n.code,{children:"defaultTokens"})," with a lowercase ",e.jsx(n.code,{children:"d"})," is the object containing the default tokens."]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can also use more global design tokens from ",e.jsx(n.code,{children:"defaultTokens.theme"}),", like that:"]}),`
`,e.jsx(t,{dark:!0,code:`
// cunningham.ts
import { defaultTokens, DefaultTokens } from "@openfun/cunningham-react";

const config: DefaultTokens = {
  themes: {
    default: {
      theme: {
        ...
      },
      components: {
        button: {
          "medium-font-size": defaultTokens.theme.font.sizes.s,
        },
      },
    },
  },
};

export default config;

`})]})}function w(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{w as default};
