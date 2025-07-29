import{j as e}from"./jsx-runtime-D_zvdyIk.js";const h={title:"Misc/Colors"},g=["primary","secondary","greyscale","success","info","warning","danger"],y=[900,800,700,600,500,400,300,200,100],s={render:()=>e.jsx("div",{children:g.map(r=>e.jsx("div",{style:{display:"flex",gap:"5px"},children:y.map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",flexShrink:0,flexBasis:"120px",alignItems:"center",flexGrow:1},children:[e.jsx("div",{style:{width:"72px",height:"48px"},className:"bg-"+r+"-"+n}),e.jsxs("pre",{className:"clr-greyscale-800 fs-s mt-st",children:["bg-",r,"-",n]})]},r+n))},r))})},a={render:()=>e.jsx("div",{children:g.map(r=>e.jsx("div",{style:{display:"flex",gap:"10px"},children:y.map(n=>{const u=["fs-s","mt-st","clr-"+r+"-"+n];return e.jsx("div",{style:{display:"flex",flexDirection:"column",flexShrink:0,flexBasis:"110px",alignItems:"center",flexGrow:1},children:e.jsxs("pre",{className:u.join(" "),children:["clr-",r,"-",n]})},r+n)})},r))})},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-primary-500 clr-primary-text fw-medium p-t",children:"I am a text on top of a primary-500 background 👋"}),e.jsx("div",{className:"clr-secondary-900 bg-secondary-500 clr-secondary-text fw-medium p-t",children:"I am a text on top of a secondary-500 background 👋"}),e.jsx("div",{className:"bg-danger-500 clr-danger-text fw-medium p-t",children:"I am a text on top of a danger-500 background 👋"})]})};var l,c,o;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <div>
        {colors.map(color => <div key={color} style={{
        display: "flex",
        gap: "5px"
      }}>
            {tints.map(tint => <div key={color + tint} style={{
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          flexBasis: "120px",
          alignItems: "center",
          flexGrow: 1
        }}>
                <div style={{
            width: "72px",
            height: "48px"
          }} className={"bg-" + color + "-" + tint} />
                <pre className="clr-greyscale-800 fs-s mt-st">
                  bg-{color}-{tint}
                </pre>
              </div>)}
          </div>)}
      </div>;
  }
}`,...(o=(c=s.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var i,d,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <div>
        {colors.map(color => <div key={color} style={{
        display: "flex",
        gap: "10px"
      }}>
            {tints.map(tint => {
          const classes = ["fs-s", "mt-st", "clr-" + color + "-" + tint];
          return <div key={color + tint} style={{
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            flexBasis: "110px",
            alignItems: "center",
            flexGrow: 1
          }}>
                  <pre className={classes.join(" ")}>
                    clr-{color}-{tint}
                  </pre>
                </div>;
        })}
          </div>)}
      </div>;
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,x,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <>
        <div className="bg-primary-500 clr-primary-text fw-medium p-t">
          I am a text on top of a primary-500 background 👋
        </div>
        <div className="clr-secondary-900 bg-secondary-500 clr-secondary-text fw-medium p-t">
          I am a text on top of a secondary-500 background 👋
        </div>
        <div className="bg-danger-500 clr-danger-text fw-medium p-t">
          I am a text on top of a danger-500 background 👋
        </div>
      </>;
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const j=["BackgroundColors","TextColors","Example"];export{s as BackgroundColors,t as Example,a as TextColors,j as __namedExportsOrder,h as default};
