import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as w}from"./index-CBqU2yxZ.js";import{c as ea,f as aa,u as ta,F as na,o as ra,d as la}from"./reactHookFormUtils-_P8gcJi0.js";import{S as s}from"./index-DYife96p.js";import{B as S}from"./index-oVJ33EwG.js";import{g as l,R as sa}from"./stories-utils-B6tJXEtN.js";const oa={title:"Components/Forms/Select/Multi",component:s},r=t=>e.jsx("div",{style:{paddingBottom:"200px"},children:e.jsx(s,{...t,multi:!0})}),ia=["Woodbury","Port Gayle","Geovannichester","San Rafael","Conradchester","Geraldinehaven","Bofield","East Ansel","New Carlo","West Minnieborough"],a=ia.map(t=>({label:t,value:t.toLowerCase()})),g={render:r,args:{label:"Select cities",options:a,defaultValue:[a[4].value]}},h={render:r,args:{label:"Select cities",options:a,defaultValue:a[4].value,disabled:!0}},v={render:r,args:{label:"Select cities",options:a,defaultValue:[a[4].value,a[2].value,a[1].value],monoline:!0,clearable:!0}},O={render:r,args:{label:"Select cities",options:a,defaultValue:a[4].value,text:"This is a text, you can display anything you want here like warnings, information or errors."}},f={render:r,args:{label:"Select cities",hideLabel:!0,options:a,defaultValue:a[4].value}},c=()=>{const[t,n]=w.useState([a[6].value,a[8].value]);return e.jsxs("div",{children:[e.jsxs("div",{className:"clr-greyscale-900",children:["Value: ",e.jsx("span",{children:JSON.stringify(t)})]}),e.jsx(s,{label:"Select cities",multi:!0,options:a,value:t,onChange:o=>n(o.target.value)}),e.jsx(S,{onClick:()=>n([]),children:"Reset"})]})},y={render:r,args:{label:"Select cities",options:[{value:"1",label:"Very long long long long long long long city name"}],defaultValue:"1"}},N={render:r,args:{label:"Select cities",options:a,searchable:!0}},T={render:r,args:{label:"Select cities",options:a,defaultValue:a[4].value,searchable:!0}},x={render:r,args:{label:"Select cities",options:a,defaultValue:a[4].value,searchable:!0,disabled:!0}},u=()=>{const[t,n]=w.useState([a[6].value,a[8].value]);return e.jsxs("div",{children:[e.jsxs("div",{className:"clr-greyscale-900",children:["Value: ",e.jsx("span",{children:JSON.stringify(t)})]}),e.jsx(s,{label:"Select cities",options:a,searchable:!0,multi:!0,value:t,onChange:o=>n(o.target.value)}),e.jsx(S,{onClick:()=>n([]),children:"Reset"})]})},C={render:r,args:{label:"Select cities",options:a,defaultValue:a[4].value,searchable:!0,fullWidth:!0}},I={render:r,args:{label:"Select cities",options:a,defaultValue:a[4].value,clearable:!1}},P={render:r,args:{label:"Select cities",options:a.map((t,n)=>({...t,disabled:n%3===0}))}},V={render:r,args:{searchable:!0,label:"Select cities",options:a.map((t,n)=>({...t,disabled:n%3===0}))}},j={render:r,args:{label:"Select cities",options:a,state:"success",text:"Well done"}},E={render:r,args:{label:"Select cities",options:a,state:"error",text:"Something went wrong"}},R={render:r,args:{label:"No options available",options:[]}},F={render:r,args:{label:"Select a country",showLabelWhenSelected:!1,options:[l("Germany","DE"),l("France","FR"),l("United States","US"),l("Spain","ES"),l("China","CN")]}},k={render:r,args:{label:"Select a country",showLabelWhenSelected:!1,searchable:!0,defaultValue:["france","united states"],options:[l("Germany","DE"),l("France","FR"),l("United States","US"),l("Spain","ES"),l("China","CN")]}},d=()=>{const t=w.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-s",children:e.jsx(S,{onClick:()=>setTimeout(()=>{var n;console.log("calling blur() ..."),(n=t.current)==null||n.blur()},2e3),children:"Trigger onBlur in 2 seconds"})}),e.jsx(s,{label:"Select a city",options:a,multi:!0,ref:t})]})},m=()=>{const t=w.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-s",children:e.jsx(S,{onClick:()=>setTimeout(()=>{var n;console.log("calling blur() ..."),(n=t.current)==null||n.blur()},2e3),children:"Trigger onBlur in 2 seconds"})}),e.jsx(s,{label:"Select a city",options:a,multi:!0,searchable:!0,ref:t})]})},p=()=>{const t=n=>{n.preventDefault();const o=new FormData(n.target);console.log(o.getAll("cities")),console.log(o.getAll("test"))};return e.jsxs("form",{onSubmit:t,children:[e.jsx("div",{className:"mb-s",children:e.jsx(s,{label:"Your favorite cities",name:"cities",options:a,text:"The cities you love the most",state:"success",defaultValue:[a[4].value],multi:!0})}),e.jsx("div",{className:"mb-s",children:e.jsx(s,{label:"Your departments",name:"departments",searchable:!0,multi:!0,options:[{label:"Legal"},{label:"Tech"},{label:"AI"},{label:"Accounting"}]})}),e.jsx("div",{className:"mb-s",children:e.jsx(s,{label:"Your skills",text:"Any error you want",name:"skills",multi:!0,options:[{label:"Front-end"},{label:"Back-end"},{label:"Full-stack"}],state:"error"})}),e.jsx("div",{className:"mb-s",children:e.jsx(s,{label:"Your options",text:"This field is disabled",name:"grade",disabled:!0,multi:!0,options:[{label:"Bronze"},{label:"Silver"},{label:"Gold"},{label:"Platinum"}],defaultValue:["Platinum","Gold"]})}),e.jsx(S,{children:"Submit"})]})},b=()=>{let t;(i=>{i.NONE="",i.DIJON="dijon",i.PARIS="paris",i.TOKYO="tokyo",i.VANNES="vannes"})(t||(t={}));const n=ea().shape({capitalCity:aa().required().test({test:i=>i.every(Ze=>["paris","tokyo"].includes(Ze)),message:"Wrong answer!"})}),o=ta({defaultValues:{capitalCity:[]},mode:"onChange",reValidateMode:"onChange",resolver:la(n)});return e.jsx(na,{...o,children:e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},onSubmit:o.handleSubmit(ra),children:[e.jsx("div",{className:"clr-greyscale-900",children:"Which cities are capital of countries ?"}),e.jsx(sa,{name:"capitalCity",label:"Select a city",multi:!0,fullWidth:!0,options:[{label:"Dijon",value:"dijon"},{label:"Paris",value:"paris"},{label:"Tokyo",value:"tokyo"},{label:"Vannes",value:"vannes"}]}),e.jsx(S,{fullWidth:!0,children:"Submit"})]})})};c.__docgenInfo={description:"",methods:[],displayName:"Controlled"};u.__docgenInfo={description:"",methods:[],displayName:"SearchableControlled"};d.__docgenInfo={description:"",methods:[],displayName:"Ref"};m.__docgenInfo={description:"",methods:[],displayName:"SearchableRef"};p.__docgenInfo={description:"",methods:[],displayName:"FormExample"};b.__docgenInfo={description:"",methods:[],displayName:"ReactHookForm"};var B,D,W;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: [OPTIONS[4].value]
  }
}`,...(W=(D=g.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var _,A,Y;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    disabled: true
  }
}`,...(Y=(A=h.parameters)==null?void 0:A.docs)==null?void 0:Y.source}}};var L,U,G;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: [OPTIONS[4].value, OPTIONS[2].value, OPTIONS[1].value],
    monoline: true,
    clearable: true
  }
}`,...(G=(U=v.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var H,M,J;O.parameters={...O.parameters,docs:{...(H=O.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    text: "This is a text, you can display anything you want here like warnings, information or errors."
  }
}`,...(J=(M=O.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var K,z,q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    hideLabel: true,
    options: OPTIONS,
    defaultValue: OPTIONS[4].value
  }
}`,...(q=(z=f.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var $,Q,X;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([OPTIONS[6].value, OPTIONS[8].value]);
  return <div>
      <div className="clr-greyscale-900">
        Value: <span>{JSON.stringify(value)}</span>
      </div>
      <Select label="Select cities" multi={true} options={OPTIONS} value={value} onChange={e => setValue((e.target.value as string[]))} />
      <Button onClick={() => setValue([])}>Reset</Button>
    </div>;
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: [{
      value: "1",
      label: "Very long long long long long long long city name"
    }],
    defaultValue: "1"
  }
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    searchable: true
  }
}`,...(re=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var le,se,oe;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true
  }
}`,...(oe=(se=T.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,ue;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true,
    disabled: true
  }
}`,...(ue=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,me,pe;u.parameters={...u.parameters,docs:{...(de=u.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const [value, setValue] = useState([OPTIONS[6].value, OPTIONS[8].value]);
  return <div>
      <div className="clr-greyscale-900">
        Value: <span>{JSON.stringify(value)}</span>
      </div>
      <Select label="Select cities" options={OPTIONS} searchable={true} multi={true} value={value} onChange={e => setValue((e.target.value as string[]))} />
      <Button onClick={() => setValue([])}>Reset</Button>
    </div>;
}`,...(pe=(me=u.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,Se,ge;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    searchable: true,
    fullWidth: true
  }
}`,...(ge=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var he,ve,Oe;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    defaultValue: OPTIONS[4].value,
    clearable: false
  }
}`,...(Oe=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:Oe.source}}};var fe,ye,Ne;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS.map((option, i) => ({
      ...option,
      disabled: i % 3 === 0
    }))
  }
}`,...(Ne=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var Te,xe,Ce;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: Template,
  args: {
    searchable: true,
    label: "Select cities",
    options: OPTIONS.map((option, i) => ({
      ...option,
      disabled: i % 3 === 0
    }))
  }
}`,...(Ce=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Ie,Pe,Ve;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    state: "success",
    text: "Well done"
  }
}`,...(Ve=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var je,Ee,Re;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select cities",
    options: OPTIONS,
    state: "error",
    text: "Something went wrong"
  }
}`,...(Re=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Fe,ke,we;R.parameters={...R.parameters,docs:{...(Fe=R.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "No options available",
    options: []
  }
}`,...(we=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};var Be,De,We;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a country",
    showLabelWhenSelected: false,
    options: [getCountryOption("Germany", "DE"), getCountryOption("France", "FR"), getCountryOption("United States", "US"), getCountryOption("Spain", "ES"), getCountryOption("China", "CN")]
  }
}`,...(We=(De=F.parameters)==null?void 0:De.docs)==null?void 0:We.source}}};var _e,Ae,Ye;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select a country",
    showLabelWhenSelected: false,
    searchable: true,
    defaultValue: ["france", "united states"],
    options: [getCountryOption("Germany", "DE"), getCountryOption("France", "FR"), getCountryOption("United States", "US"), getCountryOption("Spain", "ES"), getCountryOption("China", "CN")]
  }
}`,...(Ye=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:Ye.source}}};var Le,Ue,Ge;d.parameters={...d.parameters,docs:{...(Le=d.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
      <Select label="Select a city" options={OPTIONS} multi={true} ref={ref} />
    </>;
}`,...(Ge=(Ue=d.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var He,Me,Je;m.parameters={...m.parameters,docs:{...(He=m.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
      <Select label="Select a city" options={OPTIONS} multi={true} searchable={true} ref={ref} />
    </>;
}`,...(Je=(Me=m.parameters)==null?void 0:Me.docs)==null?void 0:Je.source}}};var Ke,ze,qe;p.parameters={...p.parameters,docs:{...(Ke=p.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData((e.target as any));
    // eslint-disable-next-line no-console
    console.log(data.getAll("cities"));
    // eslint-disable-next-line no-console
    console.log(data.getAll("test"));
  };
  return <form onSubmit={handleSubmit}>
      <div className="mb-s">
        <Select label="Your favorite cities" name="cities" options={OPTIONS} text="The cities you love the most" state="success" defaultValue={[OPTIONS[4].value]} multi={true} />
      </div>
      <div className="mb-s">
        <Select label="Your departments" name="departments" searchable={true} multi={true} options={[{
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
        <Select label="Your skills" text="Any error you want" name="skills" multi={true} options={[{
        label: "Front-end"
      }, {
        label: "Back-end"
      }, {
        label: "Full-stack"
      }]} state="error" />
      </div>
      <div className="mb-s">
        <Select label="Your options" text="This field is disabled" name="grade" disabled={true} multi={true} options={[{
        label: "Bronze"
      }, {
        label: "Silver"
      }, {
        label: "Gold"
      }, {
        label: "Platinum"
      }]} defaultValue={["Platinum", "Gold"]} />
      </div>

      <Button>Submit</Button>
    </form>;
}`,...(qe=(ze=p.parameters)==null?void 0:ze.docs)==null?void 0:qe.source}}};var $e,Qe,Xe;b.parameters={...b.parameters,docs:{...($e=b.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  enum CitiesOptionEnum {
    NONE = "",
    DIJON = "dijon",
    PARIS = "paris",
    TOKYO = "tokyo",
    VANNES = "vannes",
  }
  interface SelectExampleFormValues {
    capitalCity: CitiesOptionEnum[];
  }
  const selectExampleSchema = Yup.object().shape({
    capitalCity: Yup.array().required().test({
      test: cityList => cityList.every(city => [CitiesOptionEnum.PARIS, CitiesOptionEnum.TOKYO].includes(city)),
      message: "Wrong answer!"
    })
  });
  const methods = useForm<SelectExampleFormValues>({
    defaultValues: {
      capitalCity: []
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
          Which cities are capital of countries ?
        </div>
        <RhfSelect name="capitalCity" label="Select a city" multi={true} fullWidth={true} options={[{
        label: "Dijon",
        value: CitiesOptionEnum.DIJON
      }, {
        label: "Paris",
        value: CitiesOptionEnum.PARIS
      }, {
        label: "Tokyo",
        value: CitiesOptionEnum.TOKYO
      }, {
        label: "Vannes",
        value: CitiesOptionEnum.VANNES
      }]} />
        <Button fullWidth={true}>Submit</Button>
      </form>
    </FormProvider>;
}`,...(Xe=(Qe=b.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};const ca=["Uncontrolled","Disabled","Monoline","WithText","HiddenLabel","Controlled","Overflow","SearchableEmpty","SearchableUncontrolled","SearchableDisabled","SearchableControlled","FullWidth","NotClearable","DisabledOptions","SearchableDisabledOptions","Success","Error","NoOptions","CustomRender","SearchableCustomRender","Ref","SearchableRef","FormExample","ReactHookForm"],ga=Object.freeze(Object.defineProperty({__proto__:null,Controlled:c,CustomRender:F,Disabled:h,DisabledOptions:P,Error:E,FormExample:p,FullWidth:C,HiddenLabel:f,Monoline:v,NoOptions:R,NotClearable:I,Overflow:y,ReactHookForm:b,Ref:d,SearchableControlled:u,SearchableCustomRender:k,SearchableDisabled:x,SearchableDisabledOptions:V,SearchableEmpty:N,SearchableRef:m,SearchableUncontrolled:T,Success:j,Uncontrolled:g,WithText:O,__namedExportsOrder:ca,default:oa},Symbol.toStringTag,{value:"Module"}));export{c as C,h as D,E,C as F,f as H,v as M,I as N,b as R,ga as S,O as W,T as a,j as b,P as c,k as d};
