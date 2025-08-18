import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as ke,a as ye,u as Ce,g as Le,b as we,o as je,d as Fe}from"./reactHookFormUtils-DBL7F8xI.js";import{e as Te}from"./index-DTOEHpHZ.js";import{S as t}from"./index-CxJpZmh1.js";import{B as We}from"./index-DyRkmeWf.js";const Ee={title:"Components/Forms/Switch",component:t},s={args:{}},l={args:{checked:!0}},o={args:{label:"Label"}},n={args:{label:"Label",checked:!0}},i={args:{label:"Label",text:"This is an optional text",checked:!0}},c={args:{label:"Label",text:"This is an optional text",fullWidth:!0}},d={args:{label:"Label",labelSide:"right"}},u={args:{label:"Label",labelSide:"right",text:"This is an optional text"}},h={args:{label:"Label",text:"This is an optional text",fullWidth:!0,labelSide:"right"}},m={args:{label:"Label",text:"This is an optional text",disabled:!0}},p={args:{label:"Label",text:"This is an optional text",disabled:!0,defaultChecked:!0}},b={args:{label:"Label",text:"This is an optional text",state:"error",defaultChecked:!0}},g={args:{label:"Label",text:"This is an optional text",state:"success",defaultChecked:!0}},f={render:()=>{const[a,W]=Te.useState(!1);return e.jsxs("div",{children:[e.jsxs("div",{className:"clr-greyscale-900",children:["Value: ",JSON.stringify(a)]}),e.jsx(t,{checked:a,onChange:k=>W(k.target.checked)}),e.jsx(We,{onClick:()=>W(!a),children:"Toggle"})]})}},x={render:()=>e.jsx("form",{children:e.jsxs("div",{style:{width:"300px"},children:[e.jsx(t,{label:"Energy efficiency",fullWidth:!0,text:"Increases power by 15%"}),e.jsx(t,{label:"Battery percentage",fullWidth:!0,defaultChecked:!0}),e.jsx(t,{label:"Wi-Fi",fullWidth:!0,defaultChecked:!0}),e.jsx(t,{label:"Bluetooth",fullWidth:!0}),e.jsx(t,{label:"VPN",fullWidth:!0,text:"You must pay for this feature",state:"error",disabled:!0})]})})},S={render:()=>e.jsx("form",{children:e.jsxs("div",{style:{width:"300px"},children:[e.jsx(t,{label:"Energy efficiency",fullWidth:!0,labelSide:"right",text:"Increases power by 15%"}),e.jsx(t,{label:"Battery percentage",fullWidth:!0,defaultChecked:!0,labelSide:"right"}),e.jsx(t,{label:"Wi-Fi",fullWidth:!0,defaultChecked:!0,labelSide:"right"}),e.jsx(t,{label:"Bluetooth",fullWidth:!0,labelSide:"right"}),e.jsx(t,{label:"VPN",fullWidth:!0,labelSide:"right",text:"You must pay for this feature",state:"error",disabled:!0})]})})},r=()=>{const a=ke().shape({terms:ye().required().oneOf([!0],"You have to accept the terms of use")}),{register:W,handleSubmit:k,formState:y}=Ce({defaultValues:{terms:!1},mode:"onChange",reValidateMode:"onChange",resolver:Fe(a)});return e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},onSubmit:k(je),children:[e.jsx(t,{label:"I accept the terms of use",fullWidth:!0,state:we("terms",y),text:Le("terms",y),...W("terms")}),e.jsx(We,{fullWidth:!0,children:"Log-in"})]})};r.__docgenInfo={description:"",methods:[],displayName:"ReactHookForm"};var C,L,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {}
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var j,F,T;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(T=(F=l.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var E,v,R;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Label"
  }
}`,...(R=(v=o.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var B,V,D;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Label",
    checked: true
  }
}`,...(D=(V=n.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var N,_,Y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Label",
    text: "This is an optional text",
    checked: true
  }
}`,...(Y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};var I,O,M;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Label",
    text: "This is an optional text",
    fullWidth: true
  }
}`,...(M=(O=c.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var P,A,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Label",
    labelSide: "right"
  }
}`,...(H=(A=d.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var q,J,$;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Label",
    labelSide: "right",
    text: "This is an optional text"
  }
}`,...($=(J=u.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var z,G,K;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Label",
    text: "This is an optional text",
    fullWidth: true,
    labelSide: "right"
  }
}`,...(K=(G=h.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: "Label",
    text: "This is an optional text",
    disabled: true
  }
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,te;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: "Label",
    text: "This is an optional text",
    disabled: true,
    defaultChecked: true
  }
}`,...(te=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,se;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: "Label",
    text: "This is an optional text",
    state: "error",
    defaultChecked: true
  }
}`,...(se=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,oe,ne;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: "Label",
    text: "This is an optional text",
    state: "success",
    defaultChecked: true
  }
}`,...(ne=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,ce,de;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <div>
        <div className="clr-greyscale-900">
          Value: {JSON.stringify(checked)}
        </div>
        <Switch checked={checked} onChange={e => setChecked(e.target.checked)} />
        <Button onClick={() => setChecked(!checked)}>Toggle</Button>
      </div>;
  }
}`,...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,he,me;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    return <form>
        <div style={{
        width: "300px"
      }}>
          <Switch label="Energy efficiency" fullWidth={true} text="Increases power by 15%" />
          <Switch label="Battery percentage" fullWidth={true} defaultChecked={true} />
          <Switch label="Wi-Fi" fullWidth={true} defaultChecked={true} />
          <Switch label="Bluetooth" fullWidth={true} />
          <Switch label="VPN" fullWidth={true} text="You must pay for this feature" state="error" disabled={true} />
        </div>
      </form>;
  }
}`,...(me=(he=x.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var pe,be,ge;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    return <form>
        <div style={{
        width: "300px"
      }}>
          <Switch label="Energy efficiency" fullWidth={true} labelSide="right" text="Increases power by 15%" />
          <Switch label="Battery percentage" fullWidth={true} defaultChecked={true} labelSide="right" />
          <Switch label="Wi-Fi" fullWidth={true} defaultChecked={true} labelSide="right" />
          <Switch label="Bluetooth" fullWidth={true} labelSide="right" />
          <Switch label="VPN" fullWidth={true} labelSide="right" text="You must pay for this feature" state="error" disabled={true} />
        </div>
      </form>;
  }
}`,...(ge=(be=S.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var fe,xe,Se;r.parameters={...r.parameters,docs:{...(fe=r.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  interface SwitchExampleFormValues {
    terms: boolean;
  }
  const switchExampleSchema = Yup.object().shape({
    terms: Yup.boolean().required().oneOf([true], "You have to accept the terms of use")
  });
  const {
    register,
    handleSubmit,
    formState
  } = useForm<SwitchExampleFormValues>({
    defaultValues: {
      terms: false
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(switchExampleSchema)
  });
  return <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px"
  }} onSubmit={handleSubmit(onSubmit)}>
      <Switch label="I accept the terms of use" fullWidth state={getFieldState("terms", formState)} text={getFieldErrorMessage("terms", formState)} {...register("terms")} />
      <Button fullWidth={true}>Log-in</Button>
    </form>;
}`,...(Se=(xe=r.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};const ve=["Default","Checked","WithLabel","WithLabelChecked","WithText","FullWidth","WithLabelRight","WithLabelRightAndText","WithLabelRightAndFullWidth","Disabled","DisabledChecked","Error","Success","Controlled","FormExample","FormExampleRight","ReactHookForm"],_e=Object.freeze(Object.defineProperty({__proto__:null,Checked:l,Controlled:f,Default:s,Disabled:m,DisabledChecked:p,Error:b,FormExample:x,FormExampleRight:S,FullWidth:c,ReactHookForm:r,Success:g,WithLabel:o,WithLabelChecked:n,WithLabelRight:d,WithLabelRightAndFullWidth:h,WithLabelRightAndText:u,WithText:i,__namedExportsOrder:ve,default:Ee},Symbol.toStringTag,{value:"Module"}));export{f as C,s as D,b as E,x as F,r as R,_e as S,o as W,d as a,m as b,p as c,i as d,g as e,c as f,h as g};
