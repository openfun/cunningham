import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as p}from"./cunningham-tokens-C-zj90pO.js";const x={title:"Misc/Spacings"},r={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:Object.entries(p.themes.default.theme.spacings).map(([a,m])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsxs("div",{className:"fw-bold clr-secondary-text",style:{width:"30px"},children:["-",a]}),e.jsx("div",{className:"fw-medium fs-m clr-secondary-text",style:{width:"100px"},children:m}),e.jsx("div",{className:"bg-danger-100 pl-"+a,style:{height:"48px",width:0}})]},a))})},s={render:()=>e.jsxs("div",{className:"clr-greyscale-800 bg-danger-100",children:[e.jsx("div",{className:"clr-greyscale-800 bg-primary-500 clr-primary-text fw-medium p-t mb-l",children:"Tiny padding + Large margin bottom"}),e.jsx("div",{className:"clr-secondary-900 bg-secondary-500 clr-secondary-text fw-medium p-l ml-b",children:"Large padding + Base margin left"})]})};var n,t,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
        {Object.entries(tokens.themes.default.theme.spacings).map(([key, value]) => {
        return <div key={key} style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
                <div className="fw-bold clr-secondary-text" style={{
            width: "30px"
          }}>
                  -{key}
                </div>
                <div className="fw-medium fs-m clr-secondary-text" style={{
            width: "100px"
          }}>
                  {value}
                </div>
                <div className={"bg-danger-100 pl-" + key} style={{
            height: "48px",
            width: 0
          }} />
              </div>;
      })}
      </div>;
  }
}`,...(d=(t=r.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var l,i,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div className="clr-greyscale-800 bg-danger-100">
        <div className="clr-greyscale-800 bg-primary-500 clr-primary-text fw-medium p-t mb-l">
          Tiny padding + Large margin bottom
        </div>
        <div className="clr-secondary-900 bg-secondary-500 clr-secondary-text fw-medium p-l ml-b">
          Large padding + Base margin left
        </div>
      </div>;
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const y=["Default","Example"];export{r as Default,s as Example,y as __namedExportsOrder,x as default};
