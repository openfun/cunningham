import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as Me,e as De,u as Je,g as Be,b as Ae,o as Le,d as Oe}from"./reactHookFormUtils-DBL7F8xI.js";import{e as Pe,r as Ze}from"./index-DTOEHpHZ.js";import{I as a}from"./index-46f45BQC.js";import{B as w}from"./index-DyRkmeWf.js";const qe={title:"Components/Forms/Input",component:a},c={args:{defaultValue:"Hello world",label:"Your name"}},u={args:{defaultValue:"Hello world",label:"Your name",state:"success",icon:e.jsx("span",{className:"material-icons",children:"person"}),text:"This is an optional success message"}},m={args:{defaultValue:"Hello world",label:"Your name",state:"error",icon:e.jsx("span",{className:"material-icons",children:"person"}),text:"This is an optional error message"}},d={args:{defaultValue:"Hello world",label:"Your name",state:"error",icon:e.jsx("span",{className:"material-icons",children:"person"}),text:"This is an optional error message",textItems:["Text too long","Wrong choice","Must contain at least 9 characters, uppercase and digits"]}},p={args:{label:"Your name",icon:e.jsx("span",{className:"material-icons",children:"person"}),disabled:!0}},h={args:{label:"Your name",defaultValue:"John Doe",icon:e.jsx("span",{className:"material-icons",children:"person"}),disabled:!0}},g={args:{label:"Your email"}},x={args:{label:"Account balance",icon:e.jsx("span",{className:"material-icons",children:"attach_money"}),defaultValue:"1000"}},f={args:{label:"Account balance",rightIcon:e.jsx("span",{className:"material-icons",children:"attach_money"}),defaultValue:"1000"}},b={args:{label:"Not a recommended use",icon:e.jsx("span",{className:"material-icons",children:"attach_money"}),rightIcon:e.jsx("span",{className:"material-icons",children:"attach_money"}),defaultValue:"Is isn't recommended to use both icons"}},y={args:{label:"Your name",icon:e.jsx("span",{className:"material-icons",children:"attach_money"}),defaultValue:"John Dave Mike Smith Doe Junior Senior Yoda Skywalker"}},V={args:{defaultValue:"Hello world",label:"Your name",text:"This is a text, you can display anything you want here like warnings, informations or errors."}},S={args:{defaultValue:"Hello world",label:"Your name",rightText:"0/300"}},j={args:{defaultValue:"Hello world",label:"Your name",text:"This is a text, you can display anything you want here like warnings, informations or errors.",rightText:"0/300"}},v={args:{defaultValue:"Hello world",label:"Your name",fullWidth:!0,text:"This is a text, you can display anything you want here like warnings, informations or errors.",rightText:"0/300"}},N={args:{defaultValue:"CEO",label:"Job title",text:"This is a text, you can display anything you want here like warnings, informations or errors.",charCounter:!0,charCounterMax:30}},n=()=>{const[s,r]=Pe.useState("I am controlled");return e.jsxs("div",{children:[e.jsxs("div",{className:"clr-greyscale-900",children:["Value: ",e.jsx("span",{children:s})]}),e.jsx(a,{label:"Your identity",value:s,onChange:I=>r(I.target.value)}),e.jsx(w,{onClick:()=>r(""),children:"Reset"})]})},t=()=>e.jsx(a,{defaultValue:"john.doe@example.com",label:"Your email"}),o=()=>{const s=Ze.useRef(null);return e.jsxs("div",{children:[e.jsx(a,{label:"Your identity",ref:s}),e.jsx(w,{onClick:()=>{var r;return(r=s.current)==null?void 0:r.focus()},children:"Focus"})]})},l=()=>e.jsx("div",{children:e.jsxs("form",{children:[e.jsx("div",{children:e.jsx(a,{label:"First name",defaultValue:"John"})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Last name",defaultValue:"Smith"})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Job Title",defaultValue:"Project Manager",text:"Your position in the company",charCounter:!0,charCounterMax:30})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Code",defaultValue:"XIJZ81",disabled:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Address",defaultValue:"1 Infinite Loop",state:"error",text:"Address not found",icon:e.jsx("span",{className:"material-icons",children:"apartment"})})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"Zip",defaultValue:"96020",text:"Five numbers format",state:"success",icon:e.jsx("span",{className:"material-icons",children:"location_on"})})}),e.jsx("div",{className:"mt-s",children:e.jsx(a,{label:"City",defaultValue:"Palo Alto",state:"success",icon:e.jsx("span",{className:"material-icons",children:"map"})})})]})}),i=()=>{const s=Me().shape({email:De().email().required()}),{register:r,handleSubmit:I,formState:C}=Je({defaultValues:{email:""},mode:"onChange",reValidateMode:"onChange",resolver:Oe(s)});return e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},onSubmit:I(Le),children:[e.jsx(a,{label:"Email address",fullWidth:!0,state:Ae("email",C),text:Be("email",C),...r("email")}),e.jsx(w,{fullWidth:!0,children:"Log-in"})]})};n.__docgenInfo={description:"",methods:[],displayName:"Controlled"};t.__docgenInfo={description:"",methods:[],displayName:"NonControlled"};o.__docgenInfo={description:"",methods:[],displayName:"WithRef"};l.__docgenInfo={description:"",methods:[],displayName:"FormExample"};i.__docgenInfo={description:"",methods:[],displayName:"ReactHookForm"};var Y,T,_;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name"
  }
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var E,F,k;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    state: "success",
    icon: <span className="material-icons">person</span>,
    text: "This is an optional success message"
  }
}`,...(k=(F=u.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var H,W,R;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    state: "error",
    icon: <span className="material-icons">person</span>,
    text: "This is an optional error message"
  }
}`,...(R=(W=m.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var M,D,J;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    state: "error",
    icon: <span className="material-icons">person</span>,
    text: "This is an optional error message",
    textItems: ["Text too long", "Wrong choice", "Must contain at least 9 characters, uppercase and digits"]
  }
}`,...(J=(D=d.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var B,A,L;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Your name",
    icon: <span className="material-icons">person</span>,
    disabled: true
  }
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var O,P,Z;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Your name",
    defaultValue: "John Doe",
    icon: <span className="material-icons">person</span>,
    disabled: true
  }
}`,...(Z=(P=h.parameters)==null?void 0:P.docs)==null?void 0:Z.source}}};var q,X,$;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Your email"
  }
}`,...($=(X=g.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var z,G,K;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Account balance",
    icon: <span className="material-icons">attach_money</span>,
    defaultValue: "1000"
  }
}`,...(K=(G=x.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,ee;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: "Account balance",
    rightIcon: <span className="material-icons">attach_money</span>,
    defaultValue: "1000"
  }
}`,...(ee=(U=f.parameters)==null?void 0:U.docs)==null?void 0:ee.source}}};var ae,se,re;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: "Not a recommended use",
    icon: <span className="material-icons">attach_money</span>,
    rightIcon: <span className="material-icons">attach_money</span>,
    defaultValue: "Is isn't recommended to use both icons"
  }
}`,...(re=(se=b.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ne,te,oe;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: "Your name",
    icon: <span className="material-icons">attach_money</span>,
    defaultValue: "John Dave Mike Smith Doe Junior Senior Yoda Skywalker"
  }
}`,...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,ie,ce;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    text: "This is a text, you can display anything you want here like warnings, informations or errors."
  }
}`,...(ce=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,me,de;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    rightText: "0/300"
  }
}`,...(de=(me=S.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,he,ge;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    text: "This is a text, you can display anything you want here like warnings, informations or errors.",
    rightText: "0/300"
  }
}`,...(ge=(he=j.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var xe,fe,be;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello world",
    label: "Your name",
    fullWidth: true,
    text: "This is a text, you can display anything you want here like warnings, informations or errors.",
    rightText: "0/300"
  }
}`,...(be=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ye,Ve,Se;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    defaultValue: "CEO",
    label: "Job title",
    text: "This is a text, you can display anything you want here like warnings, informations or errors.",
    charCounter: true,
    charCounterMax: 30
  }
}`,...(Se=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:Se.source}}};var je,ve,Ne;n.parameters={...n.parameters,docs:{...(je=n.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState("I am controlled");
  return <div>
      <div className="clr-greyscale-900">
        Value: <span>{value}</span>
      </div>
      <Input label="Your identity" value={value} onChange={e => setValue(e.target.value)} />
      <Button onClick={() => setValue("")}>Reset</Button>
    </div>;
}`,...(Ne=(ve=n.parameters)==null?void 0:ve.docs)==null?void 0:Ne.source}}};var Ie,we,Ce;t.parameters={...t.parameters,docs:{...(Ie=t.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <Input defaultValue="john.doe@example.com" label="Your email" />;
}`,...(Ce=(we=t.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Ye,Te,_e;o.parameters={...o.parameters,docs:{...(Ye=o.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLInputElement>(null);
  return <div>
      <Input label="Your identity" ref={ref} />
      <Button onClick={() => ref.current?.focus()}>Focus</Button>
    </div>;
}`,...(_e=(Te=o.parameters)==null?void 0:Te.docs)==null?void 0:_e.source}}};var Ee,Fe,ke;l.parameters={...l.parameters,docs:{...(Ee=l.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <div>
      <form>
        <div>
          <Input label="First name" defaultValue="John" />
        </div>
        <div className="mt-s">
          <Input label="Last name" defaultValue="Smith" />
        </div>
        <div className="mt-s">
          <Input label="Job Title" defaultValue="Project Manager" text="Your position in the company" charCounter={true} charCounterMax={30} />
        </div>
        <div className="mt-s">
          <Input label="Code" defaultValue="XIJZ81" disabled={true} />
        </div>
        <div className="mt-s">
          <Input label="Address" defaultValue="1 Infinite Loop" state="error" text="Address not found" icon={<span className="material-icons">apartment</span>} />
        </div>
        <div className="mt-s">
          <Input label="Zip" defaultValue="96020" text="Five numbers format" state="success" icon={<span className="material-icons">location_on</span>} />
        </div>
        <div className="mt-s">
          <Input label="City" defaultValue="Palo Alto" state="success" icon={<span className="material-icons">map</span>} />
        </div>
      </form>
    </div>;
}`,...(ke=(Fe=l.parameters)==null?void 0:Fe.docs)==null?void 0:ke.source}}};var He,We,Re;i.parameters={...i.parameters,docs:{...(He=i.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  interface InputExampleFormValues {
    email: string;
  }
  const inputExampleSchema = Yup.object().shape({
    email: Yup.string().email().required()
  });
  const {
    register,
    handleSubmit,
    formState
  } = useForm<InputExampleFormValues>({
    defaultValues: {
      email: ""
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(inputExampleSchema)
  });
  return <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px"
  }} onSubmit={handleSubmit(onSubmit)}>
      <Input label="Email address" fullWidth={true} state={getFieldState("email", formState)} text={getFieldErrorMessage("email", formState)} {...register("email")} />
      <Button fullWidth={true}>Log-in</Button>
    </form>;
}`,...(Re=(We=i.parameters)==null?void 0:We.docs)==null?void 0:Re.source}}};const Xe=["Default","Success","Error","ErrorItems","DisabledEmpty","DisabledFilled","Empty","Icon","IconRight","IconBoth","OverflowingText","WithText","WithTextRight","WithBothTexts","FullWidth","CharCounter","Controlled","NonControlled","WithRef","FormExample","ReactHookForm"],Ue=Object.freeze(Object.defineProperty({__proto__:null,CharCounter:N,Controlled:n,Default:c,DisabledEmpty:p,DisabledFilled:h,Empty:g,Error:m,ErrorItems:d,FormExample:l,FullWidth:v,Icon:x,IconBoth:b,IconRight:f,NonControlled:t,OverflowingText:y,ReactHookForm:i,Success:u,WithBothTexts:j,WithRef:o,WithText:V,WithTextRight:S,__namedExportsOrder:Xe,default:qe},Symbol.toStringTag,{value:"Module"}));export{N as C,c as D,m as E,v as F,x as I,i as R,Ue as S,V as W,u as a,p as b,h as c,f as d,j as e,n as f,o as g};
