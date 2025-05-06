import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{t as a}from"./cunningham-tokens-C-zj90pO.js";const u={title:"Misc/Spacings"},n={render:()=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.keys(a.themes.default.theme.font.sizes).map(e=>s.jsxs("div",{className:"clr-greyscale-800 fs-"+e,children:["Using the ",s.jsxs("code",{children:["fs-",e]})," class"]},e))})},r={render:()=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.keys(a.themes.default.theme.font.weights).map(e=>s.jsxs("div",{className:"clr-greyscale-800 fs-l fw-"+e,children:["Using the ",s.jsxs("code",{children:["fw-",e]})," class"]},e))})},t={render:()=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.keys(a.themes.default.theme.font.families).map(e=>s.jsxs("div",{className:"clr-greyscale-800 f-"+e,children:["Using the ",s.jsxs("code",{children:["f-",e]})," class"]},e))})};var c,l,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,o,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var f,p,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const g=["Sizes","Weights","Families"];export{t as Families,n as Sizes,r as Weights,g as __namedExportsOrder,u as default};
