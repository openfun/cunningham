import{j as e}from"./jsx-runtime-BlAj40OV.js";import{I as t}from"./index-D3juuwMT.js";import{C as a}from"./index-O98rRBz_.js";import{B as d}from"./index-ClGxLur_.js";import{S as m}from"./index-DciknWKo.js";import{C as c}from"./index-D7qcrqHw.js";import{F as u}from"./index-aK9xMyxX.js";import{S as i}from"./index-D_b-V3pA.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./index-CAEZVxT0.js";import"./index-C5IyANkU.js";import"./index-DrEGRFtC.js";import"./useOverlayPosition-BQI7B4Yg.js";import"./context-CPd-Uieh.js";import"./downshift.esm-BOtCjdi7.js";import"./index-Dk74W0Oi.js";import"./ToastProvider-C3AcxMGx.js";import"./cunningham-tokens-Bq47iuNG.js";import"./index-D7RfCbhb.js";import"./index-0pRY49tU.js";const _={title:"Components/Forms/Examples/Edge Cases"},r=()=>{const l=" and some very long overflowing text";return e.jsx(c,{children:e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h1",{className:"fs-h3 fw-bold clr-greyscale-900",style:{textAlign:"center"},children:"Application"}),e.jsx(m,{label:"Context"+l,options:[{label:"Ask a document"},{label:"Download files"},{label:"Ask for help"}],fullWidth:!0}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{flexGrow:1},children:e.jsx(t,{label:"First name"+l,fullWidth:!0})}),e.jsx("div",{style:{flexGrow:1},children:e.jsx(t,{label:"Last name"+l,fullWidth:!0})})]}),e.jsx(t,{label:"Email address"+l,fullWidth:!0,text:"Only @acme.com domain is authorized"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{style:{width:"25%"},children:e.jsx(t,{label:"ZIP"+l,fullWidth:!0})}),e.jsx(t,{label:"City"+l,fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"fs-l clr-greyscale-800 mb-t",children:"Your curriculum vitae"}),e.jsx(u,{fullWidth:!0,text:"pdf only ( 4mb maximum )",accept:"application/pdf"})]}),e.jsxs("div",{children:[e.jsx(i,{label:"SMS Notification",fullWidth:!0}),e.jsx(i,{label:"Subscribe to newsletter",fullWidth:!0})]}),e.jsx(a,{label:"Agree to the terms and services",fullWidth:!0}),e.jsx(d,{fullWidth:!0,children:"Apply"}),e.jsx("a",{href:"/#",className:"clr-greyscale-800 fs-m",style:{textAlign:"center"},children:"Need help ?"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"OverflowLabels"};var n,s,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const B=["OverflowLabels"];export{r as OverflowLabels,B as __namedExportsOrder,_ as default};
