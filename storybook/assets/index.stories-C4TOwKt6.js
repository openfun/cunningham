import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-DTOEHpHZ.js";import{D as w,a as S}from"./DateRangePicker-BEy1jt0F.js";import{I as l}from"./index-46f45BQC.js";import{C as A}from"./index-B7qWtOxe.js";import{B as o}from"./index-DyRkmeWf.js";import{S as n}from"./index-DGYAH_zb.js";import{F as C}from"./index-Cr62zrzF.js";import{S as u}from"./index-CxJpZmh1.js";import{a}from"./index-DNMaItxw.js";import{T as L}from"./index-DWp_antt.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./focusSafely-BO-rTwXV.js";import"./context-C5gmCNcd.js";import"./index-D2FdBkVr.js";import"./index-DO9VteM4.js";import"./downshift.esm-C6xx4FW2.js";import"./index-eFf25hYI.js";import"./ToastProvider-Dr5c6mPT.js";import"./index-rkLeB0kx.js";import"./cunningham-tokens-C-zj90pO.js";import"./index-CAEZVxT0.js";import"./index-Dozmc4PB.js";import"./index-D7DNl-ap.js";import"./index-3i_lEcpX.js";import"./useOverlayPosition-CofLYEYW.js";import"./index-BcQiDnY4.js";const ne={title:"Components/Forms/Examples"},r=()=>e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx("h1",{className:"fs-h3 fw-bold clr-greyscale-900",style:{textAlign:"center"},children:"Log in"}),e.jsx(l,{label:"Email",fullWidth:!0}),e.jsx(l,{label:"Password",type:"password",text:"Forgot your password?",fullWidth:!0,name:"password",required:!0}),e.jsx("div",{children:e.jsx(A,{label:"Remember me"})}),e.jsx(o,{fullWidth:!0,children:"Log in"}),e.jsxs("div",{className:"fs-m clr-greyscale-800",style:{textAlign:"center"},children:["You do not have an account?"," ",e.jsx("a",{href:"/#",className:"clr-greyscale-800",children:"Register"})]})]}),s=()=>e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},method:"get",children:[e.jsx("h1",{className:"fs-h3 fw-bold clr-greyscale-900",style:{textAlign:"center"},children:"Application"}),e.jsx(n,{label:"Context",options:[{label:"Ask a document"},{label:"Download files"},{label:"Ask for help"}],fullWidth:!0,clearable:!0}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(l,{label:"First name"}),e.jsx(l,{label:"Last name"})]}),e.jsx(l,{label:"Email address",fullWidth:!0,text:"Only @acme.com domain is authorized"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{width:"25%"},children:e.jsx(l,{label:"ZIP",fullWidth:!0})}),e.jsx(l,{label:"City",fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"fs-l clr-greyscale-800 mb-t",children:"Your curriculum vitae"}),e.jsx(C,{fullWidth:!0,text:"pdf only ( 4mb maximum )",accept:"application/pdf"})]}),e.jsx(n,{label:"Skills",options:[{label:"Communication"},{label:"Teamwork"},{label:"Problem solving"},{label:"Leadership"},{label:"Work ethic"}],multi:!0,fullWidth:!0}),e.jsx("div",{children:e.jsx(L,{label:"Cover letter",fullWidth:!0,rows:5})}),e.jsxs("div",{children:[e.jsx(u,{label:"SMS Notification",fullWidth:!0}),e.jsx(u,{label:"Subscribe to newsletter",fullWidth:!0})]}),e.jsx(A,{label:"Agree to the terms and services",fullWidth:!0}),e.jsx(o,{fullWidth:!0,children:"Apply"}),e.jsx("a",{href:"/#",className:"clr-greyscale-800 fs-m",style:{textAlign:"center"},children:"Need help ?"})]}),i=()=>e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},onSubmit:t=>t.preventDefault(),children:[e.jsx("h1",{className:"fs-h3 fw-bold clr-greyscale-900",style:{textAlign:"center"},children:"Register"}),e.jsxs("div",{children:[e.jsx("div",{className:"fs-l clr-greyscale-800 mb-t",children:"Gender"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(a,{name:"gender",label:"Male",fullWidth:!0}),e.jsx(a,{name:"gender",label:"Female"}),e.jsx(a,{name:"gender",label:"Other"})]})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(l,{label:"First name"}),e.jsx(l,{label:"Last name"})]}),e.jsx(w,{label:"Date of birth",fullWidth:!0}),e.jsx(n,{label:"Competition",options:[{label:"Athletics"},{label:"Swimming"},{label:"Marathon"}],fullWidth:!0}),e.jsx(n,{label:"Previous rewards",multi:!0,options:[{label:"Bronze"},{label:"Silver"},{label:"Gold"},{label:"Flocon"},{label:"Ourson"},{label:"Chamois"}],fullWidth:!0}),e.jsx(S,{startLabel:"Start date",endLabel:"End date",defaultValue:["2023-05-23T00:00:00.000+00:00","2023-06-23T00:00:00.000+00:00"],fullWidth:!0}),e.jsx(o,{fullWidth:!0,children:"Apply"}),e.jsx("a",{href:"/#",className:"clr-greyscale-800 fs-m",style:{textAlign:"center"},children:"Need help ?"})]}),d=()=>{const[t,N]=k.useState(!1);return e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[e.jsx("h1",{className:"fs-h3 fw-bold clr-greyscale-900",style:{textAlign:"center"},children:"Register"}),e.jsxs("div",{children:[e.jsx("div",{className:"fs-l clr-greyscale-800 mb-t",children:"Gender"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(a,{name:"gender",label:"Male",fullWidth:!0,disabled:!0}),e.jsx(a,{name:"gender",label:"Female",disabled:!0}),e.jsx(a,{name:"gender",label:"Other",disabled:!0})]})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(l,{label:"First name",disabled:!0,value:t?"John":void 0}),e.jsx(l,{label:"Last name",disabled:!0})]}),e.jsx(w,{label:"Date of birth",fullWidth:!0,disabled:!0,value:t?"2023-05-23T00:00:00.000+00:00":void 0}),e.jsx(n,{disabled:!0,label:"Competition",options:[{label:"Athletics"},{label:"Swimming"},{label:"Marathon"}],fullWidth:!0,value:t?"Swimming":void 0}),e.jsx(n,{disabled:!0,label:"Previous rewards",multi:!0,options:[{label:"Bronze"},{label:"Silver"},{label:"Gold"},{label:"Flocon"},{label:"Ourson"},{label:"Chamois"}],fullWidth:!0,value:t?["Silver"]:void 0}),e.jsx(S,{startLabel:"Start date",endLabel:"End date",value:t?["2023-05-23T00:00:00.000+00:00","2023-06-23T00:00:00.000+00:00"]:void 0,fullWidth:!0,disabled:!0}),e.jsx(u,{label:"Enable values",checked:t,onChange:D=>N(D.target.checked)}),e.jsx(o,{fullWidth:!0,disabled:!0,children:"Apply"}),e.jsx("a",{href:"/#",className:"clr-greyscale-800 fs-m",style:{textAlign:"center"},children:"Need help ?"})]})};r.__docgenInfo={description:"",methods:[],displayName:"Login"};s.__docgenInfo={description:"",methods:[],displayName:"Application"};i.__docgenInfo={description:"",methods:[],displayName:"Sports"};d.__docgenInfo={description:"",methods:[],displayName:"SportsDisabled"};var c,m,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px"
  }}>
      <h1 className="fs-h3 fw-bold clr-greyscale-900" style={{
      textAlign: "center"
    }}>
        Log in
      </h1>
      <Input label="Email" fullWidth={true} />
      <Input label="Password" type="password" text="Forgot your password?" fullWidth={true} name="password" required={true} />
      <div>
        <Checkbox label="Remember me" />
      </div>
      <Button fullWidth={true}>Log in</Button>
      <div className="fs-m clr-greyscale-800" style={{
      textAlign: "center"
    }}>
        You do not have an account?{" "}
        <a href="/#" className="clr-greyscale-800">
          Register
        </a>
      </div>
    </form>;
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,b,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px"
  }} method="get">
      <h1 className="fs-h3 fw-bold clr-greyscale-900" style={{
      textAlign: "center"
    }}>
        Application
      </h1>
      <Select label="Context" options={[{
      label: "Ask a document"
    }, {
      label: "Download files"
    }, {
      label: "Ask for help"
    }]} fullWidth={true} clearable={true} />
      <div style={{
      display: "flex",
      gap: "1rem"
    }}>
        <Input label="First name" />
        <Input label="Last name" />
      </div>
      <Input label="Email address" fullWidth={true} text="Only @acme.com domain is authorized" />
      <div style={{
      display: "flex",
      gap: "1rem"
    }}>
        <div style={{
        width: "25%"
      }}>
          <Input label="ZIP" fullWidth={true} />
        </div>
        <Input label="City" fullWidth={true} />
      </div>
      <div>
        <div className="fs-l clr-greyscale-800 mb-t">Your curriculum vitae</div>
        <FileUploader fullWidth={true} text="pdf only ( 4mb maximum )" accept="application/pdf" />
      </div>
      <Select label="Skills" options={[{
      label: "Communication"
    }, {
      label: "Teamwork"
    }, {
      label: "Problem solving"
    }, {
      label: "Leadership"
    }, {
      label: "Work ethic"
    }]} multi={true} fullWidth={true} />
      <div>
        <TextArea label="Cover letter" fullWidth={true} rows={5} />
      </div>
      <div>
        <Switch label="SMS Notification" fullWidth={true} />
        <Switch label="Subscribe to newsletter" fullWidth={true} />
      </div>
      <Checkbox label="Agree to the terms and services" fullWidth={true} />
      <Button fullWidth={true}>Apply</Button>
      <a href="/#" className="clr-greyscale-800 fs-m" style={{
      textAlign: "center"
    }}>
        Need help ?
      </a>
    </form>;
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,g,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px"
  }} onSubmit={e => e.preventDefault()}>
      <h1 className="fs-h3 fw-bold clr-greyscale-900" style={{
      textAlign: "center"
    }}>
        Register
      </h1>
      <div>
        <div className="fs-l clr-greyscale-800 mb-t">Gender</div>
        <div style={{
        display: "flex",
        gap: "0.5rem"
      }}>
          <Radio name="gender" label="Male" fullWidth={true} />
          <Radio name="gender" label="Female" />
          <Radio name="gender" label="Other" />
        </div>
      </div>
      <div style={{
      display: "flex",
      gap: "1rem"
    }}>
        <Input label="First name" />
        <Input label="Last name" />
      </div>

      <DatePicker label="Date of birth" fullWidth={true} />
      <Select label="Competition" options={[{
      label: "Athletics"
    }, {
      label: "Swimming"
    }, {
      label: "Marathon"
    }]} fullWidth={true} />
      <Select label="Previous rewards" multi={true} options={[{
      label: "Bronze"
    }, {
      label: "Silver"
    }, {
      label: "Gold"
    }, {
      label: "Flocon"
    }, {
      label: "Ourson"
    }, {
      label: "Chamois"
    }]} fullWidth={true} />
      <DateRangePicker startLabel="Start date" endLabel="End date" defaultValue={["2023-05-23T00:00:00.000+00:00", "2023-06-23T00:00:00.000+00:00"]} fullWidth={true} />
      <Button fullWidth={true}>Apply</Button>
      <a href="/#" className="clr-greyscale-800 fs-m" style={{
      textAlign: "center"
    }}>
        Need help ?
      </a>
    </form>;
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,j,W;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [withValues, setWithValues] = useState(false);
  return <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "400px"
  }}>
      <h1 className="fs-h3 fw-bold clr-greyscale-900" style={{
      textAlign: "center"
    }}>
        Register
      </h1>
      <div>
        <div className="fs-l clr-greyscale-800 mb-t">Gender</div>
        <div style={{
        display: "flex",
        gap: "0.5rem"
      }}>
          <Radio name="gender" label="Male" fullWidth={true} disabled={true} />
          <Radio name="gender" label="Female" disabled={true} />
          <Radio name="gender" label="Other" disabled={true} />
        </div>
      </div>
      <div style={{
      display: "flex",
      gap: "1rem"
    }}>
        <Input label="First name" disabled={true} value={withValues ? "John" : undefined} />
        <Input label="Last name" disabled={true} />
      </div>

      <DatePicker label="Date of birth" fullWidth={true} disabled={true} value={withValues ? "2023-05-23T00:00:00.000+00:00" : undefined} />
      <Select disabled={true} label="Competition" options={[{
      label: "Athletics"
    }, {
      label: "Swimming"
    }, {
      label: "Marathon"
    }]} fullWidth={true} value={withValues ? "Swimming" : undefined} />
      <Select disabled={true} label="Previous rewards" multi={true} options={[{
      label: "Bronze"
    }, {
      label: "Silver"
    }, {
      label: "Gold"
    }, {
      label: "Flocon"
    }, {
      label: "Ourson"
    }, {
      label: "Chamois"
    }]} fullWidth={true} value={withValues ? ["Silver"] : undefined} />
      <DateRangePicker startLabel="Start date" endLabel="End date" value={withValues ? ["2023-05-23T00:00:00.000+00:00", "2023-06-23T00:00:00.000+00:00"] : undefined} fullWidth={true} disabled={true} />
      <Switch label="Enable values" checked={withValues} onChange={e => setWithValues(e.target.checked)} />
      <Button fullWidth={true} disabled={true}>
        Apply
      </Button>
      <a href="/#" className="clr-greyscale-800 fs-m" style={{
      textAlign: "center"
    }}>
        Need help ?
      </a>
    </form>;
}`,...(W=(j=d.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const re=["Login","Application","Sports","SportsDisabled"];export{s as Application,r as Login,i as Sports,d as SportsDisabled,re as __namedExportsOrder,ne as default};
