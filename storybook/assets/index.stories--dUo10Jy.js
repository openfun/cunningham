import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as be,a as he,u as xe,g as ge,b as fe,o as ke,d as Se}from"./reactHookFormUtils-DBL7F8xI.js";import{C as r,a as k}from"./index-B7qWtOxe.js";import{B as Ce}from"./index-DyRkmeWf.js";const je={title:"Components/Forms/Checkbox",component:r},s=f=>e.jsx(r,{...f,"aria-label":"Checkbox"}),c={render:s},l={render:s,args:{checked:!0}},d={render:s,args:{indeterminate:!0}},i={render:s,args:{label:"Label"}},u={render:s,args:{checked:!0,label:"Label"}},m={render:s,args:{checked:!0,label:"Label",text:"This is an optional text"}},p={render:s,args:{checked:!0,fullWidth:!0,label:"Label",text:"This is an optional text"}},b={render:s,args:{disabled:!0,label:"Label"}},h={render:s,args:{checked:!0,disabled:!0,label:"Label"}},x={render:s,args:{checked:!0,label:"Label",text:"This is an optional text",state:"error"}},g={render:s,args:{checked:!0,label:"Label",text:"This is an optional text",state:"success"}},t=()=>e.jsxs("div",{children:[e.jsx("div",{className:"fs-l fw-bold mb-t clr-greyscale-900",children:"Your offices"}),e.jsxs(k,{children:[e.jsx(r,{label:"Paris"}),e.jsx(r,{label:"New York",text:"United States",checked:!0}),e.jsx(r,{label:"Hong Kong",text:"Really long text to write something"}),e.jsx(r,{label:"Singapour",checked:!0}),e.jsx(r,{label:"London",text:"Offices closed",disabled:!0})]})]}),a=()=>e.jsxs("div",{children:[e.jsx("div",{className:"fs-l fw-bold mb-t clr-greyscale-900",children:"Your offices"}),e.jsxs(k,{state:"error",text:"An important error message",children:[e.jsx(r,{label:"Paris"}),e.jsx(r,{label:"New York",text:"United States",checked:!0}),e.jsx(r,{label:"Hong Kong",text:"Really long text to write something"}),e.jsx(r,{label:"Singapour",checked:!0}),e.jsx(r,{label:"London",text:"Offices closed",disabled:!0})]})]}),o=()=>e.jsxs("div",{children:[e.jsx("div",{className:"fs-l fw-bold mb-t clr-greyscale-900",children:"Your offices"}),e.jsxs(k,{state:"success",text:"Success message !",children:[e.jsx(r,{label:"Paris"}),e.jsx(r,{label:"New York",text:"United States",checked:!0}),e.jsx(r,{label:"Hong Kong",text:"Really long text to write something"}),e.jsx(r,{label:"Singapour",checked:!0}),e.jsx(r,{label:"London",text:"Offices closed",disabled:!0})]})]}),n=()=>{const f=be().shape({terms:he().required().oneOf([!0],"You have to accept the terms of use")}),{register:me,handleSubmit:pe,formState:S}=xe({defaultValues:{terms:!1},mode:"onChange",reValidateMode:"onChange",resolver:Se(f)});return e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},onSubmit:pe(ke),children:[e.jsx(r,{label:"I accept the terms of use",fullWidth:!0,state:fe("terms",S),text:ge("terms",S),...me("terms")}),e.jsx(Ce,{fullWidth:!0,children:"Log-in"})]})};t.__docgenInfo={description:"",methods:[],displayName:"Group"};a.__docgenInfo={description:"",methods:[],displayName:"GroupError"};o.__docgenInfo={description:"",methods:[],displayName:"GroupSuccess"};n.__docgenInfo={description:"",methods:[],displayName:"ReactHookForm"};var C,j,L;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template
}`,...(L=(j=c.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var v,y,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true
  }
}`,...(T=(y=l.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var w,G,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    indeterminate: true
  }
}`,...(N=(G=d.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Y,E,_;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Label"
  }
}`,...(_=(E=i.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var F,W,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    label: "Label"
  }
}`,...(R=(W=u.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var O,D,H;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    label: "Label",
    text: "This is an optional text"
  }
}`,...(H=(D=m.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var I,P,K;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    fullWidth: true,
    label: "Label",
    text: "This is an optional text"
  }
}`,...(K=(P=p.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var U,V,M;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true,
    label: "Label"
  }
}`,...(M=(V=b.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var B,q,A;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    disabled: true,
    label: "Label"
  }
}`,...(A=(q=h.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var $,z,J;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    label: "Label",
    text: "This is an optional text",
    state: "error"
  }
}`,...(J=(z=x.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,X,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    label: "Label",
    text: "This is an optional text",
    state: "success"
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,se;t.parameters={...t.parameters,docs:{...(ee=t.parameters)==null?void 0:ee.docs,source:{originalSource:`() => <div>
    <div className="fs-l fw-bold mb-t clr-greyscale-900">Your offices</div>
    <CheckboxGroup>
      <Checkbox label="Paris" />
      <Checkbox label="New York" text="United States" checked={true} />
      <Checkbox label="Hong Kong" text="Really long text to write something" />
      <Checkbox label="Singapour" checked={true} />
      <Checkbox label="London" text="Offices closed" disabled={true} />
    </CheckboxGroup>
  </div>`,...(se=(re=t.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ae,oe;a.parameters={...a.parameters,docs:{...(te=a.parameters)==null?void 0:te.docs,source:{originalSource:`() => <div>
    <div className="fs-l fw-bold mb-t clr-greyscale-900">Your offices</div>
    <CheckboxGroup state="error" text="An important error message">
      <Checkbox label="Paris" />
      <Checkbox label="New York" text="United States" checked={true} />
      <Checkbox label="Hong Kong" text="Really long text to write something" />
      <Checkbox label="Singapour" checked={true} />
      <Checkbox label="London" text="Offices closed" disabled={true} />
    </CheckboxGroup>
  </div>`,...(oe=(ae=a.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,ce,le;o.parameters={...o.parameters,docs:{...(ne=o.parameters)==null?void 0:ne.docs,source:{originalSource:`() => <div>
    <div className="fs-l fw-bold mb-t clr-greyscale-900">Your offices</div>
    <CheckboxGroup state="success" text="Success message !">
      <Checkbox label="Paris" />
      <Checkbox label="New York" text="United States" checked={true} />
      <Checkbox label="Hong Kong" text="Really long text to write something" />
      <Checkbox label="Singapour" checked={true} />
      <Checkbox label="London" text="Offices closed" disabled={true} />
    </CheckboxGroup>
  </div>`,...(le=(ce=o.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ie,ue;n.parameters={...n.parameters,docs:{...(de=n.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  interface CheckboxExampleFormValues {
    terms: boolean;
  }
  const checkboxExampleSchema = Yup.object().shape({
    terms: Yup.boolean().required().oneOf([true], "You have to accept the terms of use")
  });
  const {
    register,
    handleSubmit,
    formState
  } = useForm<CheckboxExampleFormValues>({
    defaultValues: {
      terms: false
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(checkboxExampleSchema)
  });
  return <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px"
  }} onSubmit={handleSubmit(onSubmit)}>
      <Checkbox label="I accept the terms of use" fullWidth state={getFieldState("terms", formState)} text={getFieldErrorMessage("terms", formState)} {...register("terms")} />
      <Button fullWidth={true}>Log-in</Button>
    </form>;
}`,...(ue=(ie=n.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};const Le=["Default","Checked","Indeterminate","WithLabel","LabelChecked","WithTexts","FullWidth","Disabled","DisabledChecked","Error","Success","Group","GroupError","GroupSuccess","ReactHookForm"],Ge=Object.freeze(Object.defineProperty({__proto__:null,Checked:l,Default:c,Disabled:b,DisabledChecked:h,Error:x,FullWidth:p,Group:t,GroupError:a,GroupSuccess:o,Indeterminate:d,LabelChecked:u,ReactHookForm:n,Success:g,WithLabel:i,WithTexts:m,__namedExportsOrder:Le,default:je},Symbol.toStringTag,{value:"Module"}));export{l as C,c as D,x as E,t as G,d as I,n as R,Ge as S,i as W,m as a,b,g as c,a as d,o as e};
