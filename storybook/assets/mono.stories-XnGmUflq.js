import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as w}from"./index-CBqU2yxZ.js";import{c as Me,e as ze,u as Je,F as Ke,o as qe,d as $e}from"./reactHookFormUtils-_P8gcJi0.js";import{S as r}from"./index-DYife96p.js";import{B as s}from"./index-oVJ33EwG.js";import{g as o,R as Qe}from"./stories-utils-B6tJXEtN.js";const Xe={title:"Components/Forms/Select/Mono",component:r},l=n=>e.jsx("div",{style:{paddingBottom:"200px"},children:e.jsx(r,{...n})}),Ze=["Woodbury","Port Gayle","Geovannichester","San Rafael","Conradchester","Geraldinehaven","Bofield","East Ansel","New Carlo","West Minnieborough"],a=Ze.map(n=>({label:n,value:n.toLowerCase()})),S={render:l,args:{label:"Select a city",options:a,defaultValue:a[4].value}},g={render:l,args:{label:"Select a city",options:a,defaultValue:a[4].value,disabled:!0}},h={render:l,args:{label:"Select a city",options:a,defaultValue:a[4].value,text:"This is a text, you can display anything you want here like warnings, information or errors."}},O={render:l,args:{label:"Select a city",hideLabel:!0,options:a,defaultValue:a[4].value}},i=()=>{const[n,t]=w.useState(a[8].value);return e.jsxs("div",{children:[e.jsxs("div",{children:["Value: ",e.jsx("span",{children:n})]}),e.jsx(r,{label:"Select a city",options:a,value:n,onChange:c=>{t(c.target.value)}}),e.jsx(s,{onClick:()=>t(""),children:"Reset"}),e.jsxs(s,{onClick:()=>t(a[0].value),children:["Set ",a[0].label]}),e.jsxs(s,{onClick:()=>t(a[1].value),children:["Set ",a[1].label]})]})},v={render:l,args:{label:"Select a city",options:[{value:"1",label:"Very long long long long long long long city name"}],defaultValue:"1"}},y={render:l,args:{label:"Select a city",options:a,searchable:!0}},f={render:l,args:{label:"Select a city",options:a,defaultValue:a[4].value,searchable:!0}},T={render:l,args:{label:"Select a city",options:a,defaultValue:a[4].value,searchable:!0,disabled:!0}},u=()=>{const[n,t]=w.useState(a[8].value);return e.jsxs("div",{children:[e.jsxs("div",{children:["Value: ",e.jsx("span",{children:n})]}),e.jsx(r,{label:"Select a city",options:a,searchable:!0,value:n,onChange:c=>{t(c.target.value)}}),e.jsx(s,{onClick:()=>t(""),children:"Reset"}),e.jsxs(s,{onClick:()=>t(a[0].value),children:["Set ",a[0].label]}),e.jsxs(s,{onClick:()=>t(a[1].value),children:["Set ",a[1].label]})]})},x={render:l,args:{label:"Select a city",options:a,fullWidth:!0}},N={render:l,args:{label:"Select a city",options:a,defaultValue:a[4].value,clearable:!1}},C={render:l,args:{label:"Select a city",options:a.map((n,t)=>({...n,disabled:t%3===0}))}},j={render:l,args:{label:"Select a city",options:a,state:"success",text:"Well done"}},I={render:l,args:{label:"Select a city",options:a,state:"error",text:"Something went wrong"}},P={render:l,args:{label:"No options available",options:[]}},V={render:l,args:{label:"Select a country",showLabelWhenSelected:!1,options:[o("Germany","DE"),o("France","FR"),o("United States","US"),o("Spain","ES"),o("China","CN")],defaultValue:"france"}},E={render:l,args:{label:"Select a country",showLabelWhenSelected:!1,searchable:!0,options:[o("Germany","DE"),o("France","FR"),o("United States","US"),o("Spain","ES"),o("China","CN")]}},d=()=>{const n=w.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-s",children:e.jsx(s,{onClick:()=>setTimeout(()=>{var t;console.log("calling blur() ..."),(t=n.current)==null||t.blur()},2e3),children:"Trigger onBlur in 2 seconds"})}),e.jsx(r,{label:"Select a city",options:a,ref:n})]})},m=()=>{const n=w.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-s",children:e.jsx(s,{onClick:()=>setTimeout(()=>{var t;console.log("calling blur() ..."),(t=n.current)==null||t.blur()},2e3),children:"Trigger onBlur in 2 seconds"})}),e.jsx(r,{label:"Select a city",options:a,searchable:!0,ref:n})]})},p=()=>{const n=t=>{t.preventDefault();const c=new FormData(t.target);console.log(c.getAll("city"))};return e.jsxs("form",{onSubmit:n,children:[e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your city",name:"city",options:a,defaultValue:a[2].value,text:"The city you were born in",state:"success"})}),e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your gender",name:"gender",options:[{label:"Male"},{label:"Female"},{label:"Other"}]})}),e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your department",name:"department",searchable:!0,options:[{label:"Legal"},{label:"Tech"},{label:"AI"},{label:"Accounting"}]})}),e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your grade",text:"Any error you want",name:"grade",searchable:!0,options:[{label:"Level 1"},{label:"Level 2"},{label:"Level 3"},{label:"Emperor"}],state:"error"})}),e.jsx("div",{className:"mb-s",children:e.jsx(r,{label:"Your plan",text:"This field is disabled",name:"grade",disabled:!0,options:[{label:"Bronze"},{label:"Silver"},{label:"Gold"},{label:"Platinum"}],defaultValue:"Platinum"})}),e.jsx(s,{children:"Submit"})]})},b=()=>{let n;(R=>{R.NONE="",R.DIJON="dijon",R.PARIS="paris",R.TOKYO="tokyo"})(n||(n={}));const t=Me().shape({joTown:ze().required().oneOf(["paris"],"That's not the right town!")}),c=Je({defaultValues:{joTown:""},mode:"onChange",reValidateMode:"onChange",resolver:$e(t)});return e.jsx(Ke,{...c,children:e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},onSubmit:c.handleSubmit(qe),children:[e.jsx("div",{className:"clr-greyscale-900",children:"Where will the 2024 Olympics take place?"}),e.jsx(Qe,{name:"joTown",label:"Select a city",fullWidth:!0,options:[{label:"Dijon",value:"dijon"},{label:"Paris",value:"paris"},{label:"Tokyo",value:"tokyo"}]}),e.jsx(s,{fullWidth:!0,children:"Submit"})]})})};i.__docgenInfo={description:"",methods:[],displayName:"Controlled"};u.__docgenInfo={description:"",methods:[],displayName:"SearchableControlled"};d.__docgenInfo={description:"",methods:[],displayName:"Ref"};m.__docgenInfo={description:"",methods:[],displayName:"SearchableRef"};p.__docgenInfo={description:"",methods:[],displayName:"FormExample"};b.__docgenInfo={description:"",methods:[],displayName:"ReactHookForm"};var F,B,k;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value
  }
}`,...(k=(B=S.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var D,W,_;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    disabled: true
  }
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var L,Y,A;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    text: "This is a text, you can display anything you want here like warnings, information or errors."
  }
}`,...(A=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var U,G,H;O.parameters={...O.parameters,docs:{...(U=O.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    hideLabel: true,
    options: OPTIONS,
    defaultValue: OPTIONS[4].value
  }
}`,...(H=(G=O.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var M,z,J;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(OPTIONS[8].value);
  return <div>
      <div>
        Value: <span>{value}</span>
      </div>
      <Select label="Select a city" options={OPTIONS} value={value} onChange={e => {
      setValue((e.target.value as string));
    }} />
      <Button onClick={() => setValue("")}>Reset</Button>
      <Button onClick={() => setValue(OPTIONS[0].value)}>
        Set {OPTIONS[0].label}
      </Button>
      <Button onClick={() => setValue(OPTIONS[1].value)}>
        Set {OPTIONS[1].label}
      </Button>
    </div>;
}`,...(J=(z=i.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,q,$;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: [{
      value: "1",
      label: "Very long long long long long long long city name"
    }],
    defaultValue: "1"
  }
}`,...($=(q=v.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var Q,X,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    searchable: true
  }
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true
  }
}`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,le,re;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true,
    disabled: true
  }
}`,...(re=(le=T.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var oe,se,ce;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(OPTIONS[8].value);
  return <div>
      <div>
        Value: <span>{value}</span>
      </div>
      <Select label="Select a city" options={OPTIONS} searchable={true} value={value} onChange={e => {
      setValue((e.target.value as string));
    }} />
      <Button onClick={() => setValue("")}>Reset</Button>
      <Button onClick={() => setValue(OPTIONS[0].value)}>
        Set {OPTIONS[0].label}
      </Button>
      <Button onClick={() => setValue(OPTIONS[1].value)}>
        Set {OPTIONS[1].label}
      </Button>
    </div>;
}`,...(ce=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ie,ue,de;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    fullWidth: true
  }
}`,...(de=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,pe,be;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    clearable: false
  }
}`,...(be=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var Se,ge,he;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS.map((option, i) => ({
      ...option,
      disabled: i % 3 === 0
    }))
  }
}`,...(he=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Oe,ve,ye;j.parameters={...j.parameters,docs:{...(Oe=j.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    state: "success",
    text: "Well done"
  }
}`,...(ye=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var fe,Te,xe;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a city",
    options: OPTIONS,
    state: "error",
    text: "Something went wrong"
  }
}`,...(xe=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var Ne,Ce,je;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "No options available",
    options: []
  }
}`,...(je=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var Ie,Pe,Ve;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a country",
    showLabelWhenSelected: false,
    options: [getCountryOption("Germany", "DE"), getCountryOption("France", "FR"), getCountryOption("United States", "US"), getCountryOption("Spain", "ES"), getCountryOption("China", "CN")],
    defaultValue: "france"
  }
}`,...(Ve=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var Ee,Re,we;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a country",
    showLabelWhenSelected: false,
    searchable: true,
    options: [getCountryOption("Germany", "DE"), getCountryOption("France", "FR"), getCountryOption("United States", "US"), getCountryOption("Spain", "ES"), getCountryOption("China", "CN")]
  }
}`,...(we=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var Fe,Be,ke;d.parameters={...d.parameters,docs:{...(Fe=d.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  const ref = useRef<SelectHandle>(null);
  return <>
      <div className="pb-s">
        <Button onClick={() => setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log("calling blur() ...");
        ref.current?.blur();
      }, 2000)}>
          Trigger onBlur in 2 seconds
        </Button>
      </div>
      <Select label="Select a city" options={OPTIONS} ref={ref} />
    </>;
}`,...(ke=(Be=d.parameters)==null?void 0:Be.docs)==null?void 0:ke.source}}};var De,We,_e;m.parameters={...m.parameters,docs:{...(De=m.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  const ref = useRef<SelectHandle>(null);
  return <>
      <div className="pb-s">
        <Button onClick={() => setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log("calling blur() ...");
        ref.current?.blur();
      }, 2000)}>
          Trigger onBlur in 2 seconds
        </Button>
      </div>
      <Select label="Select a city" options={OPTIONS} searchable={true} ref={ref} />
    </>;
}`,...(_e=(We=m.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var Le,Ye,Ae;p.parameters={...p.parameters,docs:{...(Le=p.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData((e.target as any));
    // eslint-disable-next-line no-console
    console.log(data.getAll("city"));
  };
  return <form onSubmit={handleSubmit}>
      <div className="mb-s">
        <Select label="Your city" name="city" options={OPTIONS} defaultValue={OPTIONS[2].value} text="The city you were born in" state="success" />
      </div>
      <div className="mb-s">
        <Select label="Your gender" name="gender" options={[{
        label: "Male"
      }, {
        label: "Female"
      }, {
        label: "Other"
      }]} />
      </div>
      <div className="mb-s">
        <Select label="Your department" name="department" searchable={true} options={[{
        label: "Legal"
      }, {
        label: "Tech"
      }, {
        label: "AI"
      }, {
        label: "Accounting"
      }]} />
      </div>
      <div className="mb-s">
        <Select label="Your grade" text="Any error you want" name="grade" searchable={true} options={[{
        label: "Level 1"
      }, {
        label: "Level 2"
      }, {
        label: "Level 3"
      }, {
        label: "Emperor"
      }]} state="error" />
      </div>
      <div className="mb-s">
        <Select label="Your plan" text="This field is disabled" name="grade" disabled={true} options={[{
        label: "Bronze"
      }, {
        label: "Silver"
      }, {
        label: "Gold"
      }, {
        label: "Platinum"
      }]} defaultValue="Platinum" />
      </div>
      <Button>Submit</Button>
    </form>;
}`,...(Ae=(Ye=p.parameters)==null?void 0:Ye.docs)==null?void 0:Ae.source}}};var Ue,Ge,He;b.parameters={...b.parameters,docs:{...(Ue=b.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  enum CitiesOptionEnum {
    NONE = "",
    DIJON = "dijon",
    PARIS = "paris",
    TOKYO = "tokyo",
  }
  interface SelectExampleFormValues {
    joTown: CitiesOptionEnum;
  }
  const selectExampleSchema = Yup.object().shape({
    joTown: Yup.string().required().oneOf([CitiesOptionEnum.PARIS], "That's not the right town!")
  });
  const methods = useForm<SelectExampleFormValues>({
    defaultValues: {
      joTown: CitiesOptionEnum.NONE
    },
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(selectExampleSchema)
  });
  return <FormProvider {...methods}>
      <form style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "400px"
    }} onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="clr-greyscale-900">
          Where will the 2024 Olympics take place?
        </div>
        <RhfSelect name="joTown" label="Select a city" fullWidth={true} options={[{
        label: "Dijon",
        value: CitiesOptionEnum.DIJON
      }, {
        label: "Paris",
        value: CitiesOptionEnum.PARIS
      }, {
        label: "Tokyo",
        value: CitiesOptionEnum.TOKYO
      }]} />
        <Button fullWidth={true}>Submit</Button>
      </form>
    </FormProvider>;
}`,...(He=(Ge=b.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};const ea=["Uncontrolled","Disabled","WithText","HiddenLabel","Controlled","Overflow","SearchableEmpty","SearchableUncontrolled","SearchableDisabled","SearchableControlled","FullWidth","NotClearable","DisabledOptions","Success","Error","NoOptions","CustomRender","SearchableCustomRender","Ref","SearchableRef","FormExample","ReactHookForm"],sa=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,CustomRender:V,Disabled:g,DisabledOptions:C,Error:I,FormExample:p,FullWidth:x,HiddenLabel:O,NoOptions:P,NotClearable:N,Overflow:v,ReactHookForm:b,Ref:d,SearchableControlled:u,SearchableCustomRender:E,SearchableDisabled:T,SearchableEmpty:y,SearchableRef:m,SearchableUncontrolled:f,Success:j,Uncontrolled:S,WithText:h,__namedExportsOrder:ea,default:Xe},Symbol.toStringTag,{value:"Module"}));export{V as C,g as D,I as E,x as F,O as H,N,b as R,sa as S,S as U,h as W,f as a,j as b,C as c,i as d,p as e};
