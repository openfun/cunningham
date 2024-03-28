import{j as s}from"./jsx-runtime-CKrituN3.js";import{t as a}from"./cunningham-tokens-DhUcb3NS.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const k={title:"Misc/Spacings"},r={render:()=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.keys(a.themes.default.theme.font.sizes).map(e=>s.jsxs("div",{className:"clr-greyscale-800 fs-"+e,children:["Using the ",s.jsxs("code",{children:["fs-",e]})," class"]},e))})},n={render:()=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.keys(a.themes.default.theme.font.weights).map(e=>s.jsxs("div",{className:"clr-greyscale-800 fs-l fw-"+e,children:["Using the ",s.jsxs("code",{children:["fw-",e]})," class"]},e))})},t={render:()=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.keys(a.themes.default.theme.font.families).map(e=>s.jsxs("div",{className:"clr-greyscale-800 f-"+e,children:["Using the ",s.jsxs("code",{children:["f-",e]})," class"]},e))})};var c,i,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        {Object.keys(tokens.themes.default.theme.font.sizes).map(key => <div key={key} className={"clr-greyscale-800 fs-" + key}>
            Using the <code>fs-{key}</code> class
          </div>)}
      </div>;
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,o,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        {Object.keys(tokens.themes.default.theme.font.weights).map(key => <div key={key} className={"clr-greyscale-800 fs-l fw-" + key}>
            Using the <code>fw-{key}</code> class
          </div>)}
      </div>;
  }
}`,...(m=(o=n.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var p,f,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        {Object.keys(tokens.themes.default.theme.font.families).map(key => <div key={key} className={"clr-greyscale-800 f-" + key}>
            Using the <code>f-{key}</code> class
          </div>)}
      </div>;
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const v=["Sizes","Weights","Families"];export{t as Families,r as Sizes,n as Weights,v as __namedExportsOrder,k as default};
