import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as t}from"./index-46f45BQC.js";import{C as a}from"./index-B7qWtOxe.js";import{B as d}from"./index-DyRkmeWf.js";import{S as m}from"./index-DGYAH_zb.js";import{C as c}from"./index-eFf25hYI.js";import{F as u}from"./index-Cr62zrzF.js";import{S as n}from"./index-CxJpZmh1.js";import"./index-DTOEHpHZ.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-rkLeB0kx.js";import"./index-CAEZVxT0.js";import"./index-D7DNl-ap.js";import"./index-3i_lEcpX.js";import"./useOverlayPosition-CofLYEYW.js";import"./context-C5gmCNcd.js";import"./downshift.esm-C6xx4FW2.js";import"./ToastProvider-Dr5c6mPT.js";import"./cunningham-tokens-C-zj90pO.js";import"./index-DO9VteM4.js";import"./index-BcQiDnY4.js";const P={title:"Components/Forms/Examples/Edge Cases"},r=()=>{const l=" and some very long overflowing text";return e.jsx(c,{children:e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h1",{className:"fs-h3 fw-bold clr-greyscale-900",style:{textAlign:"center"},children:"Application"}),e.jsx(m,{label:"Context"+l,options:[{label:"Ask a document"},{label:"Download files"},{label:"Ask for help"}],fullWidth:!0}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{flexGrow:1},children:e.jsx(t,{label:"First name"+l,fullWidth:!0})}),e.jsx("div",{style:{flexGrow:1},children:e.jsx(t,{label:"Last name"+l,fullWidth:!0})})]}),e.jsx(t,{label:"Email address"+l,fullWidth:!0,text:"Only @acme.com domain is authorized"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{width:"25%"},children:e.jsx(t,{label:"ZIP"+l,fullWidth:!0})}),e.jsx(t,{label:"City"+l,fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"fs-l clr-greyscale-800 mb-t",children:"Your curriculum vitae"}),e.jsx(u,{fullWidth:!0,text:"pdf only ( 4mb maximum )",accept:"application/pdf"})]}),e.jsxs("div",{children:[e.jsx(n,{label:"SMS Notification",fullWidth:!0}),e.jsx(n,{label:"Subscribe to newsletter",fullWidth:!0})]}),e.jsx(a,{label:"Agree to the terms and services",fullWidth:!0}),e.jsx(d,{fullWidth:!0,children:"Apply"}),e.jsx("a",{href:"/#",className:"clr-greyscale-800 fs-m",style:{textAlign:"center"},children:"Need help ?"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"OverflowLabels"};var i,s,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const overflow = " and some very long overflowing text";
  return <CunninghamProvider>
      <form style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
        <h1 className="fs-h3 fw-bold clr-greyscale-900" style={{
        textAlign: "center"
      }}>
          Application
        </h1>
        <Select label={"Context" + overflow} options={[{
        label: "Ask a document"
      }, {
        label: "Download files"
      }, {
        label: "Ask for help"
      }]} fullWidth={true} />
        <div style={{
        display: "flex",
        gap: "1rem"
      }}>
          <div style={{
          flexGrow: 1
        }}>
            <Input label={"First name" + overflow} fullWidth={true} />
          </div>
          <div style={{
          flexGrow: 1
        }}>
            <Input label={"Last name" + overflow} fullWidth={true} />
          </div>
        </div>
        <Input label={"Email address" + overflow} fullWidth={true} text="Only @acme.com domain is authorized" />
        <div style={{
        display: "flex",
        gap: "1rem"
      }}>
          <div style={{
          width: "25%"
        }}>
            <Input label={"ZIP" + overflow} fullWidth={true} />
          </div>
          <Input label={"City" + overflow} fullWidth={true} />
        </div>
        <div>
          <div className="fs-l clr-greyscale-800 mb-t">
            Your curriculum vitae
          </div>
          <FileUploader fullWidth={true} text="pdf only ( 4mb maximum )" accept="application/pdf" />
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
      </form>
    </CunninghamProvider>;
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const _=["OverflowLabels"];export{r as OverflowLabels,_ as __namedExportsOrder,P as default};
