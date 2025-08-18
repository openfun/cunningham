import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as qe,r as i}from"./index-DTOEHpHZ.js";import{F as n}from"./index-Cr62zrzF.js";import{B as v}from"./index-DyRkmeWf.js";const o=[new File(["42"],"Adhuc civis creber super amita.pdf"),new File(["42"],"CV.pdf"),new File(["42"],"Adhuc civis.pdf"),new File(["42"],"Adhuc civis creber.pdf")],Qe={title:"Components/Forms/FileUploader",component:n},l={},c={args:{text:"JPG, PNG or GIF - Max file size 2MB"}},u={args:{bigText:"Hi there"}},p={args:{text:"JPG, PNG or GIF - Max file size 2MB",fakeDefaultFiles:o}},m={args:{text:"JPG, PNG or GIF - Max file size 2MB",fakeDefaultFiles:o,state:"success"}},d={args:{bigText:"Error file is too big",text:"JPG, PNG or GIF - Max file size 2MB",state:"error"}},f={args:{bigText:"Error file is too big",text:"JPG, PNG or GIF - Max file size 2MB",state:"error",fakeDefaultFiles:o}},g={args:{bigText:"Error file is too big",text:"JPG, PNG or GIF - Max file size 2MB",state:"uploading"}},x={args:{text:"JPG, PNG or GIF - Max file size 2MB",icon:e.jsx("span",{className:"material-icons",children:"add_box"}),fileSelectedIcon:e.jsx("span",{className:"material-icons",children:"attach_file"}),deleteIcon:e.jsx("span",{className:"material-icons",children:"backspace"})}},G={args:{text:"JPG, PNG or GIF - Max file size 2MB",state:"success",successIcon:e.jsx("span",{className:"material-icons",children:"verified"})}},M={args:{text:"JPG, PNG or GIF - Max file size 2MB",state:"uploading",uploadingIcon:e.jsx("span",{className:"material-icons",children:"update"})}},F={render:()=>{const a={default:{text:"JPG, PNG or GIF - Max file size 2MB"},fileSelected:{text:"JPG, PNG or GIF - Max file size 2MB",fakeDefaultFiles:o},uploading:{state:"uploading",text:"JPG, PNG or GIF - Max file size 2MB"},success:{state:"success",text:"JPG, PNG or GIF - Max file size 2MB"},error:{state:"error",bigText:"Error file is too big",text:"JPG, PNG or GIF - Max file size 2MB"}},r=Object.keys(a),[t,s]=qe.useState(r[0]);return i.useEffect(()=>{const k=setTimeout(()=>{s(r[(r.indexOf(t)+1)%r.length])},2e3);return()=>clearTimeout(k)},[t]),e.jsx(n,{...a[t]},t==="fileSelected"?t:"const")}},P={render:()=>{const a=i.useRef(null),[r,t]=i.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{children:["Value: ",r.map(s=>s.name).join(", ")]}),e.jsx(n,{onFilesChange:s=>t(s.target.value),ref:a}),e.jsx(v,{onClick:()=>{var s;return(s=a.current)==null?void 0:s.reset()},children:"Reset"})]})}},S={args:{multiple:!0}},I={args:{multiple:!0,text:"JPG, PNG or GIF - Max file size 2MB"}},h={args:{multiple:!0,text:"JPG, PNG or GIF - Max file size 2MB",fakeDefaultFiles:o}},B={args:{multiple:!0,text:"JPG, PNG or GIF - Max file size 2MB",fakeDefaultFiles:o,state:"success"}},N={args:{multiple:!0,bigText:"Error file is too big",text:"JPG, PNG or GIF - Max file size 2MB",state:"error"}},b={args:{multiple:!0,bigText:"Error file is too big",text:"JPG, PNG or GIF - Max file size 2MB",state:"error",fakeDefaultFiles:o}},E={args:{multiple:!0,bigText:"Error file is too big",text:"JPG, PNG or GIF - Max file size 2MB",state:"uploading",fakeDefaultFiles:o}},z={render:()=>{const a={default:{text:"JPG, PNG or GIF - Max file size 2MB"},fileSelected:{text:"JPG, PNG or GIF - Max file size 2MB",fakeDefaultFiles:o},uploading:{state:"uploading",text:"JPG, PNG or GIF - Max file size 2MB",fakeDefaultFiles:o},success:{state:"success",text:"JPG, PNG or GIF - Max file size 2MB",fakeDefaultFiles:o},error:{state:"error",bigText:"Error file is too big",text:"JPG, PNG or GIF - Max file size 2MB",fakeDefaultFiles:o}},r=Object.keys(a),[t,s]=qe.useState(r[0]);return i.useEffect(()=>{const k=setTimeout(()=>{s(r[(r.indexOf(t)+1)%r.length])},2e3);return()=>clearTimeout(k)},[t]),e.jsx(n,{multiple:!0,...a[t]},t==="fileSelected"?t:"const")}},J={render:()=>{const a=i.useRef(null),[r,t]=i.useState([]);return e.jsxs("div",{children:[e.jsxs("div",{children:["Value: ",r.map(s=>s.name).join(", ")]}),e.jsx(n,{onFilesChange:s=>t(s.target.value),ref:a,multiple:!0}),e.jsx(v,{onClick:()=>{var s;return(s=a.current)==null?void 0:s.reset()},children:"Reset"})]})}},T={render:()=>{const a=r=>{r.preventDefault();const t=new FormData(r.target);console.log("SUBMIT",t.getAll("files")),console.log("SUBMIT",t.getAll("file"))};return e.jsxs("form",{onSubmit:a,children:[e.jsx("div",{children:e.jsx(n,{name:"files",text:"JPG, PNG or GIF - Max file size 2MB",accept:"image/png, image/jpeg, image/gif",multiple:!0})}),e.jsx("div",{className:"mt-s",children:e.jsx(n,{name:"file",text:"JPG, PNG or GIF - Max file size 2MB",accept:"image/png, image/jpeg, image/gif"})}),e.jsx("div",{className:"mt-s",children:e.jsx(v,{children:"Submit"})})]})}};var j,D,_;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(_=(D=l.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var w,A,U;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB"
  }
}`,...(U=(A=c.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var W,y,C;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    bigText: "Hi there"
  }
}`,...(C=(y=u.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var R,V,K;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB",
    fakeDefaultFiles: FAKE_FILES
  }
}`,...(K=(V=p.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var L,O,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB",
    fakeDefaultFiles: FAKE_FILES,
    state: "success"
  }
}`,...(H=(O=m.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var q,Q,X;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "error"
  }
}`,...(X=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "error",
    fakeDefaultFiles: FAKE_FILES
  }
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,se;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "uploading"
  }
}`,...(se=(te=g.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,ae,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB",
    icon: <span className="material-icons">add_box</span>,
    fileSelectedIcon: <span className="material-icons">attach_file</span>,
    deleteIcon: <span className="material-icons">backspace</span>
  }
}`,...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,ie,le;G.parameters={...G.parameters,docs:{...(ne=G.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "success",
    successIcon: <span className="material-icons">verified</span>
  }
}`,...(le=(ie=G.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,ue,pe;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "uploading",
    uploadingIcon: <span className="material-icons">update</span>
  }
}`,...(pe=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,de,fe;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const stepToProps: Record<string, any> = {
      default: {
        text: "JPG, PNG or GIF - Max file size 2MB"
      },
      fileSelected: {
        text: "JPG, PNG or GIF - Max file size 2MB",
        fakeDefaultFiles: FAKE_FILES
      },
      uploading: {
        state: "uploading",
        text: "JPG, PNG or GIF - Max file size 2MB"
      },
      success: {
        state: "success",
        text: "JPG, PNG or GIF - Max file size 2MB"
      },
      error: {
        state: "error",
        bigText: "Error file is too big",
        text: "JPG, PNG or GIF - Max file size 2MB"
      }
    };
    const steps = Object.keys(stepToProps);
    const [step, setStep] = React.useState(steps[0]);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setStep(steps[(steps.indexOf(step) + 1) % steps.length]);
      }, 2000);
      return () => clearTimeout(timeout);
    }, [step]);

    // The key is here to re-render the component when the state changes only when we want to display
    // the fake default files. In all other step we want it to be persistant in order to see transitions ( like the
    // border color ).
    return <FileUploader key={step === "fileSelected" ? step : "const"} {...stepToProps[step]} />;
  }
}`,...(fe=(de=F.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};var ge,xe,Ge;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<FileUploaderRefType>(null);
    const [value, setValue] = useState<File[]>([]);
    return <div>
        <div>Value: {value.map(file => file.name).join(", ")}</div>
        <FileUploader onFilesChange={e => setValue(e.target.value)} ref={ref} />
        <Button onClick={() => ref.current?.reset()}>Reset</Button>
      </div>;
  }
}`,...(Ge=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:Ge.source}}};var Me,Fe,Pe;S.parameters={...S.parameters,docs:{...(Me=S.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...(Pe=(Fe=S.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Se,Ie,he;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    multiple: true,
    text: "JPG, PNG or GIF - Max file size 2MB"
  }
}`,...(he=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:he.source}}};var Be,Ne,be;h.parameters={...h.parameters,docs:{...(Be=h.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    multiple: true,
    text: "JPG, PNG or GIF - Max file size 2MB",
    fakeDefaultFiles: FAKE_FILES
  }
}`,...(be=(Ne=h.parameters)==null?void 0:Ne.docs)==null?void 0:be.source}}};var Ee,ze,Je;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    multiple: true,
    text: "JPG, PNG or GIF - Max file size 2MB",
    fakeDefaultFiles: FAKE_FILES,
    state: "success"
  }
}`,...(Je=(ze=B.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var Te,ke,ve;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    multiple: true,
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "error"
  }
}`,...(ve=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};var je,De,_e;b.parameters={...b.parameters,docs:{...(je=b.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    multiple: true,
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "error",
    fakeDefaultFiles: FAKE_FILES
  }
}`,...(_e=(De=b.parameters)==null?void 0:De.docs)==null?void 0:_e.source}}};var we,Ae,Ue;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    multiple: true,
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "uploading",
    fakeDefaultFiles: FAKE_FILES
  }
}`,...(Ue=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Ue.source}}};var We,ye,Ce;z.parameters={...z.parameters,docs:{...(We=z.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    const stepToProps: Record<string, any> = {
      default: {
        text: "JPG, PNG or GIF - Max file size 2MB"
      },
      fileSelected: {
        text: "JPG, PNG or GIF - Max file size 2MB",
        fakeDefaultFiles: FAKE_FILES
      },
      uploading: {
        state: "uploading",
        text: "JPG, PNG or GIF - Max file size 2MB",
        fakeDefaultFiles: FAKE_FILES
      },
      success: {
        state: "success",
        text: "JPG, PNG or GIF - Max file size 2MB",
        fakeDefaultFiles: FAKE_FILES
      },
      error: {
        state: "error",
        bigText: "Error file is too big",
        text: "JPG, PNG or GIF - Max file size 2MB",
        fakeDefaultFiles: FAKE_FILES
      }
    };
    const steps = Object.keys(stepToProps);
    const [step, setStep] = React.useState(steps[0]);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setStep(steps[(steps.indexOf(step) + 1) % steps.length]);
      }, 2000);
      return () => clearTimeout(timeout);
    }, [step]);

    // The key is here to re-render the component when the state changes only when we want to display
    // the fake default files. In all other step we want it to be persistant in order to see transitions ( like the
    // border color ).
    return <FileUploader key={step === "fileSelected" ? step : "const"} multiple={true} {...stepToProps[step]} />;
  }
}`,...(Ce=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};var Re,Ve,Ke;J.parameters={...J.parameters,docs:{...(Re=J.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<FileUploaderRefType>(null);
    const [value, setValue] = useState<File[]>([]);
    return <div>
        <div>Value: {value.map(file => file.name).join(", ")}</div>
        <FileUploader onFilesChange={e => setValue(e.target.value)} ref={ref} multiple={true} />
        <Button onClick={() => ref.current?.reset()}>Reset</Button>
      </div>;
  }
}`,...(Ke=(Ve=J.parameters)==null?void 0:Ve.docs)==null?void 0:Ke.source}}};var Le,Oe,He;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const data = new FormData(e.target as any);
      // eslint-disable-next-line no-console
      console.log("SUBMIT", data.getAll("files"));
      // eslint-disable-next-line no-console
      console.log("SUBMIT", data.getAll("file"));
    };
    return <form onSubmit={handleSubmit}>
        <div>
          <FileUploader name="files" text="JPG, PNG or GIF - Max file size 2MB" accept="image/png, image/jpeg, image/gif" multiple={true} />
        </div>
        <div className="mt-s">
          <FileUploader name="file" text="JPG, PNG or GIF - Max file size 2MB" accept="image/png, image/jpeg, image/gif" />
        </div>

        <div className="mt-s">
          <Button>Submit</Button>
        </div>
      </form>;
  }
}`,...(He=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};const Xe=["Mono","MonoWithText","MonoWithBigText","MonoWithFile","MonoWithFileSuccess","MonoError","MonoErrorWithFile","MonoUploading","MonoCustomIcons","MonoCustomIconsSuccess","MonoCustomIconsUploading","MonoStatesShowcase","MonoValue","Multi","MultiWihText","MultiWihFiles","MultiWithFileSuccess","MultiError","MultiErrorWithFile","MultiUploadingWithFiles","MultiStatesShowcase","MultiValue","Form"],tt=Object.freeze(Object.defineProperty({__proto__:null,Form:T,Mono:l,MonoCustomIcons:x,MonoCustomIconsSuccess:G,MonoCustomIconsUploading:M,MonoError:d,MonoErrorWithFile:f,MonoStatesShowcase:F,MonoUploading:g,MonoValue:P,MonoWithBigText:u,MonoWithFile:p,MonoWithFileSuccess:m,MonoWithText:c,Multi:S,MultiError:N,MultiErrorWithFile:b,MultiStatesShowcase:z,MultiUploadingWithFiles:E,MultiValue:J,MultiWihFiles:h,MultiWihText:I,MultiWithFileSuccess:B,__namedExportsOrder:Xe,default:Qe},Symbol.toStringTag,{value:"Module"}));export{l as M,tt as S,h as a,B as b,d as c,g as d,c as e,u as f,x as g,G as h,M as i,J as j};
