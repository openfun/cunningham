import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{F as d}from"./index-D7DNl-ap.js";const h={title:"Components/Forms/Field",component:d},s=u=>a.jsx(d,{...u,children:a.jsx("strong",{children:"Any children"})}),e={render:s,args:{text:"This is an optional text",rightText:"Right text"}},t={render:s,args:{state:"success",text:"This is an optional success message",rightText:"Right text"}},r={render:s,args:{state:"error",text:"This is an optional error message",textItems:["Text too long","Wrong choice","Must contain at least 9 characters, uppercase and digits"],rightText:"Right text"}};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {
    text: "This is an optional text",
    rightText: "Right text"
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    state: "success",
    text: "This is an optional success message",
    rightText: "Right text"
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,l,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    state: "error",
    text: "This is an optional error message",
    textItems: ["Text too long", "Wrong choice", "Must contain at least 9 characters, uppercase and digits"],
    rightText: "Right text"
  }
}`,...(x=(l=r.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const T=["Default","Success","Error"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Error:r,Success:t,__namedExportsOrder:T,default:h},Symbol.toStringTag,{value:"Module"}));export{R as S};
