import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DywkESLE.js";import"./index-DmMv4Tzj.js";import{M as a,S as i}from"./index-DjiUAfnp.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./preview-DcDnKmgE.js";import"./iframe-BKUbjXsD.js";import"./DocsRenderer-CFRXHY34-b-boLmVf.js";import"./react-18-0ENLrOAf.js";import"./index-DO9VteM4.js";import"./index-D2FdBkVr.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Getting Started/Theming"}),`
`,e.jsx(n.h1,{id:"theming",children:"Theming"}),`
`,e.jsx(n.p,{children:"Cunningham has a built-in theming feature available. You can customize themes already provided or add your own themes !"}),`
`,e.jsx(n.h2,{id:"included-themes",children:"Included themes"}),`
`,e.jsxs(n.p,{children:["Cunningham natively has a ",e.jsx(n.code,{children:"default"})," theme ( aka light theme ) and a ",e.jsx(n.code,{children:"dark"})," theme."]}),`
`,e.jsx(n.p,{children:`You can switch between these two themes by clicking on the button in the top-bar and visualize all the components in their
different versions. ✨`}),`
`,e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:"switch-theme.gif"})}),`
`,e.jsx(n.h2,{id:"code-implementation",children:"Code implementation"}),`
`,e.jsxs(n.p,{children:["No panic it's easy. You can switch the current theme by using the prop ",e.jsx(n.code,{children:"theme"})," of ",e.jsx(n.code,{children:"CunninghamProvider"}),`, here is an example
with a `,e.jsx(n.code,{children:"MyApp"})," component."]}),`
`,e.jsx(i,{dark:!0,code:`

import {
  Button,
  CunninghamProvider
} from "@openfun/cunningham-react";

export const MyApp = () => {
  const [theme, setTheme] = useState("default");
  return (
    <CunninghamProvider theme={theme}>
      <Button onClick={() => setTheme(theme === "default" ? "dark" : "default"}>Switch theme</Button>
    </CunninghamProvider>
  );
};

`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You can find a fully working example ",e.jsx(n.a,{href:"https://github.com/openfun/cunningham/blob/main/apps/demo/src/App.tsx",rel:"nofollow",children:"here"})," in the demo app."]}),`
`]}),`
`,e.jsx(n.h2,{id:"what-about-css-variables-",children:"What about CSS variables ?"}),`
`,e.jsx(n.p,{children:"It's seamless ! You can still use variables in CSS like this"}),`
`,e.jsx(i,{dark:!0,code:`

.myClass {
  background-color: var(--c--theme--colors--greyscale-000);
}

`}),`
`,e.jsxs(n.p,{children:["The variable will be automatically switched across the DOM when switching theme via ",e.jsx(n.code,{children:"CunninghamProvider"}),"."]}),`
`,e.jsx(n.h2,{id:"customizing-themes",children:"Customizing themes"}),`
`,e.jsxs(n.p,{children:["As you have see in the previous sections you can customize the design tokens by editing ",e.jsx(n.code,{children:"cunningham.ts"}),`, you may have noticed
that in all the examples you had to wrap the modifications inside the following fields:`]}),`
`,e.jsx(i,{dark:!0,code:`
// cunningham.ts
import { DefaultTokens } from "@openfun/cunningham-react";

const config: DefaultTokens = {
  themes: {
    default: {
      ...
    },
  },
};

export default config;

`}),`
`,e.jsxs(n.p,{children:["In reality in this case you are editing the theme called ",e.jsx(n.code,{children:"default"}),` ( which refer to the light theme ), if you want to edit
the dark theme you have to provide the `,e.jsx(n.code,{children:"dark"})," key accordingly"]}),`
`,e.jsx(i,{dark:!0,code:`
// cunningham.ts
import { DefaultTokens } from "@openfun/cunningham-react";

const config: DefaultTokens = {
  themes: {
    default: {
      ...
    },
    dark: {
      ...
    },
  },
};

export default config;

`}),`
`,e.jsx(n.h2,{id:"creating-your-theme",children:"Creating your theme"}),`
`,e.jsxs(n.p,{children:["The logic is the same as what we saw previously. Just add a new key inside the ",e.jsx(n.code,{children:"themes"})," object."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️ All themes extends the ",e.jsx(n.code,{children:"default"})," theme by default, that's why it is named ",e.jsx(n.code,{children:"default"})," and not ",e.jsx(n.code,{children:"light"}),". A consequence is that you don't have to provide all existing design tokens when creating a new theme, you can just customize the one you want."]}),`
`]}),`
`,e.jsx(i,{dark:!0,code:`
// cunningham.ts
import { DefaultTokens } from "@openfun/cunningham-react";

const config: DefaultTokens = {
  themes: {
    default: {
      ...
    },
    dark: {
      ...
    },
    pink: {
      theme: {
        colors: {
          "primary-100": "pink",
          ...
        }
      }
    },
  },
};

export default config;

`})]})}function w(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{w as default};
