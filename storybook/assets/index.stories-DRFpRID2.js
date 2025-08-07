import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as ue,e as me,u as pe,g as be,b as d,o as he,d as xe}from"./reactHookFormUtils-DBL7F8xI.js";import{a,R as v}from"./index-DNMaItxw.js";import{B as ge}from"./index-DyRkmeWf.js";const fe={title:"Components/Forms/Radio",component:a},r=S=>e.jsx(a,{...S,"aria-label":"Radio"}),c={render:r,args:{}},u={render:r,args:{checked:!0}},m={render:r,args:{label:"Label"}},p={render:r,args:{label:"Label",checked:!0}},b={render:r,args:{label:"Label",text:"Some optional text"}},h={render:r,args:{checked:!0,fullWidth:!0,label:"Label",text:"This is an optional text"}},x={render:r,args:{label:"Label",disabled:!0}},g={render:r,args:{label:"Label",disabled:!0,checked:!0,text:"Some optional text"}},f={render:r,args:{checked:!0,label:"Label",text:"This is an optional text",state:"error"}},j={render:r,args:{checked:!0,label:"Label",text:"This is an optional text",state:"success"}},s=()=>e.jsxs("div",{children:[e.jsx("div",{className:"fs-l fw-bold mb-t",children:"Your office"}),e.jsxs(v,{children:[e.jsx(a,{label:"New York",name:"city",value:"new_york",text:"5th Avenue Offices"}),e.jsx(a,{label:"Singapour",name:"city",value:"singapour",text:"Opened in 2015"}),e.jsx(a,{label:"Dublin",name:"city",value:"dublin",text:"Closed since 2019",disabled:!0})]})]}),o=()=>e.jsxs("div",{children:[e.jsx("div",{className:"fs-l fw-bold mb-t",children:"Your office"}),e.jsxs(v,{state:"error",text:"An important error message",children:[e.jsx(a,{label:"New York",name:"city",value:"new_york",text:"5th Avenue Offices"}),e.jsx(a,{label:"Singapour",name:"city",value:"singapour",text:"Opened in 2015"}),e.jsx(a,{label:"Dublin",name:"city",value:"dublin",text:"Closed since 2019",disabled:!0})]})]}),n=()=>e.jsxs("div",{children:[e.jsx("div",{className:"fs-l fw-bold mb-t",children:"Your office"}),e.jsxs(v,{state:"success",text:"Success message !",children:[e.jsx(a,{label:"New York",name:"city",value:"new_york",text:"5th Avenue Offices"}),e.jsx(a,{label:"Singapour",name:"city",value:"singapour",text:"Opened in 2015"}),e.jsx(a,{label:"Dublin",name:"city",value:"dublin",text:"Closed since 2019",disabled:!0})]})]}),l=()=>{const S=ue().shape({joTown:me().required().oneOf(["paris"],"That's not the right town!")}),{register:i,handleSubmit:ce,formState:t}=pe({defaultValues:{joTown:""},mode:"onChange",reValidateMode:"onChange",resolver:xe(S)});return e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},onSubmit:ce(he),children:[e.jsx("div",{className:"fs-l fw-bold mb-t",children:"Where will the 2024 Olympics take place?"}),e.jsxs(v,{state:d("joTown",t),text:be("joTown",t),children:[e.jsx(a,{label:"Dijon",value:"dijon",state:d("joTown",t),...i("joTown")}),e.jsx(a,{label:"Paris",value:"paris",state:d("joTown",t),...i("joTown")}),e.jsx(a,{label:"Düsseldorf",value:"düsseldorf",state:d("joTown",t),...i("joTown")}),e.jsx(a,{label:"Lubumbashi",value:"Lubumbashi",state:d("joTown",t),...i("joTown")}),e.jsx(a,{label:"Tokyo",value:"tokyo",text:"This was the town of the 2020 Olympics!",disabled:!0,...i("joTown")})]}),e.jsx(ge,{fullWidth:!0,children:"Check it!"})]})};s.__docgenInfo={description:"",methods:[],displayName:"Group"};o.__docgenInfo={description:"",methods:[],displayName:"GroupError"};n.__docgenInfo={description:"",methods:[],displayName:"GroupSuccess"};l.__docgenInfo={description:"",methods:[],displayName:"ReactHookForm"};var w,T,y;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {}
}`,...(y=(T=c.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var k,R,L;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true
  }
}`,...(L=(R=u.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var O,_,C;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Label"
  }
}`,...(C=(_=m.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var D,G,F;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Label",
    checked: true
  }
}`,...(F=(G=p.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var N,E,W;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Label",
    text: "Some optional text"
  }
}`,...(W=(E=b.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var Y,A,V;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    fullWidth: true,
    label: "Label",
    text: "This is an optional text"
  }
}`,...(V=(A=h.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var M,B,I;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Label",
    disabled: true
  }
}`,...(I=(B=x.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var H,P,q;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Label",
    disabled: true,
    checked: true,
    text: "Some optional text"
  }
}`,...(q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var $,z,J;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    label: "Label",
    text: "This is an optional text",
    state: "error"
  }
}`,...(J=(z=f.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,U;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true,
    label: "Label",
    text: "This is an optional text",
    state: "success"
  }
}`,...(U=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <div>
      <div className="fs-l fw-bold mb-t">Your office</div>
      <RadioGroup>
        <Radio label="New York" name="city" value="new_york" text="5th Avenue Offices" />
        <Radio label="Singapour" name="city" value="singapour" text="Opened in 2015" />
        <Radio label="Dublin" name="city" value="dublin" text="Closed since 2019" disabled={true} />
      </RadioGroup>
    </div>;
}`,...(ee=(Z=s.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,te;o.parameters={...o.parameters,docs:{...(ae=o.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <div>
      <div className="fs-l fw-bold mb-t">Your office</div>
      <RadioGroup state="error" text="An important error message">
        <Radio label="New York" name="city" value="new_york" text="5th Avenue Offices" />
        <Radio label="Singapour" name="city" value="singapour" text="Opened in 2015" />
        <Radio label="Dublin" name="city" value="dublin" text="Closed since 2019" disabled={true} />
      </RadioGroup>
    </div>;
}`,...(te=(re=o.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,oe,ne;n.parameters={...n.parameters,docs:{...(se=n.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <div>
      <div className="fs-l fw-bold mb-t">Your office</div>
      <RadioGroup state="success" text="Success message !">
        <Radio label="New York" name="city" value="new_york" text="5th Avenue Offices" />
        <Radio label="Singapour" name="city" value="singapour" text="Opened in 2015" />
        <Radio label="Dublin" name="city" value="dublin" text="Closed since 2019" disabled={true} />
      </RadioGroup>
    </div>;
}`,...(ne=(oe=n.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,ie,de;l.parameters={...l.parameters,docs:{...(le=l.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  interface RadioExampleFormValues {
    joTown: string;
  }
  const radioExampleSchema = Yup.object().shape({
    joTown: Yup.string().required().oneOf(["paris"], "That's not the right town!")
  });
  const {
    register,
    handleSubmit,
    formState
  } = useForm<RadioExampleFormValues>({
    defaultValues: {
      joTown: ""
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(radioExampleSchema)
  });
  return <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px"
  }} onSubmit={handleSubmit(onSubmit)}>
      <div className="fs-l fw-bold mb-t">
        Where will the 2024 Olympics take place?
      </div>
      <RadioGroup state={getFieldState("joTown", formState)} text={getFieldErrorMessage("joTown", formState)}>
        <Radio label="Dijon" value="dijon" state={getFieldState("joTown", formState)} {...register("joTown")} />
        <Radio label="Paris" value="paris" state={getFieldState("joTown", formState)} {...register("joTown")} />
        <Radio label="Düsseldorf" value="düsseldorf" state={getFieldState("joTown", formState)} {...register("joTown")} />
        <Radio label="Lubumbashi" value="Lubumbashi" state={getFieldState("joTown", formState)} {...register("joTown")} />
        <Radio label="Tokyo" value="tokyo" text="This was the town of the 2020 Olympics!" disabled={true} {...register("joTown")} />
      </RadioGroup>
      <Button fullWidth={true}>Check it!</Button>
    </form>;
}`,...(de=(ie=l.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const je=["Default","Checked","WithLabel","WithLabelChecked","WithText","FullWidth","Disabled","DisabledChecked","Error","Success","Group","GroupError","GroupSuccess","ReactHookForm"],ye=Object.freeze(Object.defineProperty({__proto__:null,Checked:u,Default:c,Disabled:x,DisabledChecked:g,Error:f,FullWidth:h,Group:s,GroupError:o,GroupSuccess:n,ReactHookForm:l,Success:j,WithLabel:m,WithLabelChecked:p,WithText:b,__namedExportsOrder:je,default:fe},Symbol.toStringTag,{value:"Module"}));export{u as C,c as D,f as E,s as G,l as R,ye as S,m as W,b as a,x as b,j as c,o as d,n as e};
